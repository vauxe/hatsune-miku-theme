/**
 * VS Code Theme - Readability Analysis (Standalone)
 *
 * Analyzes APCA contrast to verify theme readability for extended coding sessions.
 * Works with any VS Code theme JSON file.
 *
 * Design Principles:
 * - Direct lookup: No simulation of VS Code's fallback chains
 * - Explicit only: Missing colors reported as fallback, not guessed
 * - Semantic priority: semanticTokenColors checked before tokenColors
 * - Transparency aware: Semi-transparent colors blended with background
 *
 * Usage:
 *   npx tsx src/tools/readability.ts --theme <path>
 *   npx tsx src/tools/readability.ts --test "#FG" "#BG" [name]
 */

import * as fs from 'fs';
import * as path from 'path';

// =============================================================================
// CONSTANTS
// =============================================================================

const OUTPUT_WIDTH = 58;
const COL_NAME_WIDTH = 18;
const COL_COLOR_WIDTH = 15;

const LABELS = {
  title: 'READABILITY ANALYSIS',
  thresholds: 'Thresholds: Fluent=Lc90  Body=Lc75  Content=Lc60  Large=Lc45',

  colName: 'Name',
  colColor: 'Color',
  colApca: 'APCA',

  sectionText: 'TEXT',
  sectionSyntax: 'SYNTAX',
  sectionDiagnostics: 'DIAGNOSTICS',
  sectionComments: 'COMMENTS',
  sectionEditorUi: 'EDITOR UI',
  sectionWorkbenchUi: 'WORKBENCH UI',
  sectionWidgets: 'WIDGETS',
  sectionGit: 'GIT DECORATIONS',
  sectionBrackets: 'BRACKETS',

  summaryPass: 'Content+ (Lc60):',
  summaryLarge: 'Large/Non-text:',
  summaryFail: 'Failed (<Lc30):',

  verdictReady: 'MARATHON-READY',
  verdictWarning: 'Some colors below Lc60 - may cause eye strain',
  verdictFail: 'Fix failed colors before marathon use',

  unexpectedPolarity: 'Unexpected polarity:',

  errThemeRequired: 'Error: --theme <path> is required.',
  errThemeNotFound: (p: string) => `Error: Theme file not found: ${p}`,
  errInvalidTheme: (p: string, e: string) => `Error: Invalid theme JSON in ${p}: ${e}`,
  errMissingColors: 'Error: Theme missing required "colors" object.',
  errMissingEditorBg: 'Error: Theme missing "editor.background" color.',
  errMissingEditorFg: 'Error: Theme missing "editor.foreground" color.',
  errInvalidColor: (c: string) => `Error: Invalid color "${c}". Use #RGB, #RRGGBB, or #RRGGBBAA`,
} as const;

// APCA constants (APCA-W3 specification)
const APCA = {
  sRco: 0.2126729,
  sGco: 0.7151522,
  sBco: 0.0721750,
  mainTRC: 2.4,
  normBG: 0.56,
  normTXT: 0.57,
  revTXT: 0.62,
  revBG: 0.65,
  blkThrs: 0.022,
  blkClmp: 1.414,
  scaleBoW: 1.14,
  scaleWoB: 1.14,
  loBoWoffset: 0.027,
  loWoBoffset: 0.027,
  loClip: 0.1,
} as const;

// =============================================================================
// COLOR UTILITIES (Inlined for standalone use)
// =============================================================================

interface RGB {
  r: number;
  g: number;
  b: number;
}

type Polarity = 'light-on-dark' | 'dark-on-light';
type Level = 'Fluent' | 'Body' | 'Content' | 'Large' | 'Non-Text' | 'FAIL';

interface ColorValue {
  color: string;
  fallback: boolean;
}

interface APCAAnalysis {
  lc: number;
  level: Level;
  icon: string;
  pass: boolean;
  polarity: Polarity;
}

function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}

function hexToRgb(hex: string): RGB | null {
  let h = hex.replace('#', '');

  if (h.length === 3) {
    h = h.split('').map(c => c + c).join('');
  } else if (h.length === 8) {
    h = h.slice(0, 6);
  }

  if (h.length !== 6) return null;

  const match = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  if (!match) return null;

  return {
    r: parseInt(match[1], 16) / 255,
    g: parseInt(match[2], 16) / 255,
    b: parseInt(match[3], 16) / 255,
  };
}

function rgbToHex(rgb: RGB): string {
  const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0');
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

function hexAlphaToDecimal(hexAlpha: string): number {
  return parseInt(hexAlpha, 16) / 255;
}

function blendAlpha(fg: string, bg: string, alpha: number): string {
  const fgRgb = hexToRgb(fg);
  const bgRgb = hexToRgb(bg);
  if (!fgRgb || !bgRgb) throw new Error(`Invalid color: fg="${fg}", bg="${bg}"`);

  const a = Math.max(0, Math.min(1, alpha));
  return rgbToHex({
    r: fgRgb.r * a + bgRgb.r * (1 - a),
    g: fgRgb.g * a + bgRgb.g * (1 - a),
    b: fgRgb.b * a + bgRgb.b * (1 - a),
  });
}

interface APCAResult {
  lc: number;
  polarity: Polarity;
}

function getAPCAContrast(text: string, background: string): APCAResult {
  const txtRgb = hexToRgb(text);
  const bgRgb = hexToRgb(background);
  if (!txtRgb) throw new Error(`Invalid text color: "${text}"`);
  if (!bgRgb) throw new Error(`Invalid background color: "${background}"`);

  const toY = (rgb: RGB) =>
    APCA.sRco * Math.pow(rgb.r, APCA.mainTRC) +
    APCA.sGco * Math.pow(rgb.g, APCA.mainTRC) +
    APCA.sBco * Math.pow(rgb.b, APCA.mainTRC);

  const softClamp = (Y: number) =>
    Y < 0 ? 0 : Y < APCA.blkThrs ? Y + Math.pow(APCA.blkThrs - Y, APCA.blkClmp) : Y;

  const txtY = softClamp(toY(txtRgb));
  const bgY = softClamp(toY(bgRgb));

  // Polarity is determined by luminance comparison, not by Lc sign
  // (Lc can be clipped to 0, losing polarity information)
  const polarity: Polarity = bgY > txtY ? 'dark-on-light' : 'light-on-dark';
  let contrast: number;

  if (bgY > txtY) {
    // BoW: Black on White (dark text, light bg) → positive Lc
    const SAPC = (Math.pow(bgY, APCA.normBG) - Math.pow(txtY, APCA.normTXT)) * APCA.scaleBoW;
    contrast = SAPC < APCA.loClip ? 0 : SAPC - APCA.loBoWoffset;
  } else {
    // WoB: White on Black (light text, dark bg) → negative Lc
    const SAPC = (Math.pow(bgY, APCA.revBG) - Math.pow(txtY, APCA.revTXT)) * APCA.scaleWoB;
    contrast = SAPC > -APCA.loClip ? 0 : SAPC + APCA.loWoBoffset;
  }

  return { lc: contrast * 100, polarity };
}

function analyzeAPCA(result: APCAResult): APCAAnalysis {
  const { lc, polarity } = result;
  const absLc = Math.abs(lc);

  if (absLc >= 90) return { lc, level: 'Fluent', icon: '✅', pass: true, polarity };
  if (absLc >= 75) return { lc, level: 'Body', icon: '✅', pass: true, polarity };
  if (absLc >= 60) return { lc, level: 'Content', icon: '✅', pass: true, polarity };
  if (absLc >= 45) return { lc, level: 'Large', icon: '⚠️', pass: false, polarity };
  if (absLc >= 30) return { lc, level: 'Non-Text', icon: '⚠️', pass: false, polarity };
  return { lc, level: 'FAIL', icon: '❌', pass: false, polarity };
}

function hasAlphaChannel(hex: string): boolean {
  const len = hex.startsWith('#') ? hex.length - 1 : hex.length;
  return len === 8;
}

function stripAlpha(hex: string): string {
  if (!hasAlphaChannel(hex)) return hex;
  return hex.slice(0, hex.startsWith('#') ? 7 : 6);
}

function extractAlpha(hex: string): number {
  if (!hasAlphaChannel(hex)) return 1.0;
  return hexAlphaToDecimal(hex.slice(-2));
}

// =============================================================================
// THEME TYPES
// =============================================================================

interface ThemeJson {
  name?: string;
  type?: 'dark' | 'light';
  colors?: Record<string, string>;
  tokenColors?: Array<{
    scope?: string | string[];
    settings?: { foreground?: string };
  }>;
  semanticHighlighting?: boolean;
  semanticTokenColors?: Record<string, string | { foreground?: string }>;
}

// =============================================================================
// THEME LOADER
// =============================================================================

function stripJsonComments(jsonc: string): string {
  // Remove single-line comments (// ...) and multi-line comments (/* ... */)
  // Be careful not to remove // inside strings
  let result = '';
  let inString = false;
  let inSingleComment = false;
  let inMultiComment = false;
  let i = 0;

  while (i < jsonc.length) {
    const char = jsonc[i];
    const next = jsonc[i + 1];

    if (inSingleComment) {
      if (char === '\n') {
        inSingleComment = false;
        result += char;
      }
      i++;
      continue;
    }

    if (inMultiComment) {
      if (char === '*' && next === '/') {
        inMultiComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (inString) {
      result += char;
      if (char === '\\' && i + 1 < jsonc.length) {
        result += jsonc[++i];
      } else if (char === '"') {
        inString = false;
      }
      i++;
      continue;
    }

    // Not in string or comment
    if (char === '"') {
      inString = true;
      result += char;
    } else if (char === '/' && next === '/') {
      inSingleComment = true;
      i++;
    } else if (char === '/' && next === '*') {
      inMultiComment = true;
      i++;
    } else {
      result += char;
    }
    i++;
  }

  // Remove trailing commas before } or ]
  return result.replace(/,(\s*[}\]])/g, '$1');
}

function loadTheme(themePath: string): ThemeJson {
  if (!fs.existsSync(themePath)) {
    console.error(LABELS.errThemeNotFound(themePath));
    process.exit(1);
  }

  let theme: ThemeJson;
  try {
    const content = fs.readFileSync(themePath, 'utf-8');
    theme = JSON.parse(stripJsonComments(content));
  } catch (e) {
    console.error(LABELS.errInvalidTheme(themePath, (e as Error).message));
    process.exit(1);
  }

  if (!theme.colors || typeof theme.colors !== 'object') {
    console.error(LABELS.errMissingColors);
    process.exit(1);
  }
  if (!theme.colors['editor.background']) {
    console.error(LABELS.errMissingEditorBg);
    process.exit(1);
  }
  if (!theme.colors['editor.foreground']) {
    console.error(LABELS.errMissingEditorFg);
    process.exit(1);
  }

  // Validate required colors are valid hex
  const requiredColors = ['editor.background', 'editor.foreground'];
  for (const key of requiredColors) {
    const color = theme.colors[key];
    if (!isValidHex(color)) {
      console.error(LABELS.errInvalidColor(color));
      process.exit(1);
    }
  }

  return theme;
}

function getThemeName(theme: ThemeJson, themePath: string): string {
  if (theme.name) return theme.name;
  let name = path.basename(themePath);
  // Remove common extensions
  name = name.replace(/\.(jsonc?|json5)$/i, '');
  // Remove common suffixes
  name = name.replace(/-color-theme$/i, '');
  return name;
}

/**
 * Find color for a token.
 * 1. Try semantic token (direct key lookup)
 * 2. Fall back to tokenColors (find scope in array)
 */
function findTokenColor(theme: ThemeJson, textmateScope: string, semanticKey?: string): ColorValue {
  // 1. Try semantic token (direct lookup)
  if (semanticKey && theme.semanticHighlighting && theme.semanticTokenColors) {
    const value = theme.semanticTokenColors[semanticKey];
    if (value) {
      const color = typeof value === 'string' ? value : value.foreground;
      if (color) return { color, fallback: false };
    }
  }

  // 2. Try tokenColors (find scope in array)
  for (const token of theme.tokenColors ?? []) {
    if (!token.settings?.foreground) continue;
    const scopes = Array.isArray(token.scope)
      ? token.scope
      : token.scope?.split(',').map(s => s.trim()) ?? [];
    if (scopes.includes(textmateScope)) {
      return { color: token.settings.foreground, fallback: false };
    }
  }

  return { color: '', fallback: true };
}

function getColor(theme: ThemeJson, key: string, fallback: string): ColorValue {
  const color = theme.colors?.[key];
  return { color: color || fallback, fallback: !color };
}

function getColorRaw(theme: ThemeJson, key: string, fallback: string): string {
  return theme.colors?.[key] || fallback;
}

/**
 * Resolve transparent background: blend with underlying surface if alpha present.
 */
function resolveTransparentBg(rawBg: string, underlyingBg: string): string {
  if (!hasAlphaChannel(rawBg)) return rawBg;
  const alpha = extractAlpha(rawBg);
  if (alpha >= 0.99) return stripAlpha(rawBg);
  return blendAlpha(stripAlpha(rawBg), underlyingBg, alpha);
}

// =============================================================================
// COLOR EXTRACTION
// =============================================================================

interface ExtractedColors {
  bg: {
    editor: string;
    sidebar: string;
    statusBar: string;
    tabBar: string;
    terminal: string;
    panel: string;
    activityBar: string;
    input: string;
    listSelection: string;
    listHover: string;
    inlayHint: string;
    breadcrumb: string;
    // Widgets
    editorWidget: string;
    suggest: string;
    hover: string;
    quickInput: string;
    menu: string;
    notification: string;
    peekView: string;
    titleBar: string;
  };
  fg: ColorValue;
  syntax: Record<string, ColorValue>;
  ui: Record<string, ColorValue>;
  widgets: Record<string, ColorValue>;
  git: Record<string, ColorValue>;
  brackets: ColorValue[];
}

function resolveColor(cv: ColorValue, fallbackColor: string): ColorValue {
  if (cv.fallback || !cv.color) {
    return { color: fallbackColor, fallback: true };
  }
  return cv;
}

function extractColors(theme: ThemeJson): ExtractedColors {
  const fg = theme.colors!['editor.foreground'];
  const editorBg = theme.colors!['editor.background'];
  const fgValue: ColorValue = { color: fg, fallback: false };

  // Resolve backgrounds that may be semi-transparent
  const sidebarBg = getColorRaw(theme, 'sideBar.background', editorBg);
  const listSelectionRaw = getColorRaw(theme, 'list.activeSelectionBackground', editorBg);
  const listHoverRaw = getColorRaw(theme, 'list.hoverBackground', editorBg);
  const inlayHintRaw = getColorRaw(theme, 'editorInlayHint.background', editorBg);

  return {
    bg: {
      editor: editorBg,
      sidebar: sidebarBg,
      statusBar: getColorRaw(theme, 'statusBar.background', editorBg),
      tabBar: getColorRaw(theme, 'editorGroupHeader.tabsBackground', editorBg),
      terminal: getColorRaw(theme, 'terminal.background', editorBg),
      panel: getColorRaw(theme, 'panel.background', editorBg),
      activityBar: getColorRaw(theme, 'activityBar.background', editorBg),
      input: getColorRaw(theme, 'input.background', editorBg),
      listSelection: resolveTransparentBg(listSelectionRaw, sidebarBg),
      listHover: resolveTransparentBg(listHoverRaw, sidebarBg),
      inlayHint: resolveTransparentBg(inlayHintRaw, editorBg),
      breadcrumb: getColorRaw(theme, 'breadcrumb.background', editorBg),
      editorWidget: getColorRaw(theme, 'editorWidget.background', editorBg),
      suggest: getColorRaw(theme, 'editorSuggestWidget.background', editorBg),
      hover: getColorRaw(theme, 'editorHoverWidget.background', editorBg),
      quickInput: getColorRaw(theme, 'quickInput.background', editorBg),
      menu: getColorRaw(theme, 'menu.background', editorBg),
      notification: getColorRaw(theme, 'notifications.background', editorBg),
      peekView: getColorRaw(theme, 'peekViewResult.background', editorBg),
      titleBar: getColorRaw(theme, 'titleBar.activeBackground', editorBg),
    },
    fg: fgValue,
    syntax: {
      // TextMate scope, semantic type
      keyword: resolveColor(findTokenColor(theme, 'keyword', 'keyword'), fg),
      function: resolveColor(findTokenColor(theme, 'entity.name.function', 'function'), fg),
      type: resolveColor(findTokenColor(theme, 'entity.name.type', 'type'), fg),
      number: resolveColor(findTokenColor(theme, 'constant.numeric', 'number'), fg),
      string: resolveColor(findTokenColor(theme, 'string', 'string'), fg),
      decorator: resolveColor(findTokenColor(theme, 'entity.name.function.decorator', 'decorator'), fg),
      link: resolveColor(findTokenColor(theme, 'markup.underline.link'), fg),
      regexp: resolveColor(findTokenColor(theme, 'string.regexp', 'regexp'), fg),
      comment: resolveColor(findTokenColor(theme, 'comment', 'comment'), fg),
      docComment: (() => {
        const doc = findTokenColor(theme, 'comment.block.documentation', 'comment.documentation');
        return resolveColor(doc.fallback ? findTokenColor(theme, 'comment', 'comment') : doc, fg);
      })(),
      warning: getColor(theme, 'editorWarning.foreground', fg),
      info: getColor(theme, 'editorInfo.foreground', fg),
      error: getColor(theme, 'editorError.foreground', fg),
    },
    ui: {
      tabActive: getColor(theme, 'tab.activeForeground', fg),
      tabInactive: getColor(theme, 'tab.inactiveForeground', fg),
      breadcrumb: getColor(theme, 'breadcrumb.foreground', fg),
      titleBar: getColor(theme, 'titleBar.activeForeground', fg),
      sidebarText: getColor(theme, 'sideBar.foreground', fg),
      statusBarText: getColor(theme, 'statusBar.foreground', fg),
      lineNumber: getColor(theme, 'editorLineNumber.foreground', fg),
      lineNumberActive: getColor(theme, 'editorLineNumber.activeForeground', fg),
      ghostText: getColor(theme, 'editorGhostText.foreground', fg),
      terminal: getColor(theme, 'terminal.foreground', fg),
      panelTitle: getColor(theme, 'panelTitle.activeForeground', fg),
      panelTitleInactive: getColor(theme, 'panelTitle.inactiveForeground', fg),
      activityBar: getColor(theme, 'activityBar.foreground', fg),
      input: getColor(theme, 'input.foreground', fg),
      inputPlaceholder: getColor(theme, 'input.placeholderForeground', fg),
      listSelection: getColor(theme, 'list.activeSelectionForeground', fg),
      listHover: getColor(theme, 'list.hoverForeground', fg),
      inlayHint: getColor(theme, 'editorInlayHint.foreground', fg),
      codeLens: getColor(theme, 'editorCodeLens.foreground', fg),
      cursor: getColor(theme, 'editorCursor.foreground', fg),
    },
    widgets: {
      editorWidget: getColor(theme, 'editorWidget.foreground', fg),
      suggest: getColor(theme, 'editorSuggestWidget.foreground', fg),
      hover: getColor(theme, 'editorHoverWidget.foreground', fg),
      quickInput: getColor(theme, 'quickInput.foreground', fg),
      menu: getColor(theme, 'menu.foreground', fg),
      notification: getColor(theme, 'notifications.foreground', fg),
      peekView: getColor(theme, 'peekViewResult.lineForeground', fg),
    },
    git: {
      modified: getColor(theme, 'gitDecoration.modifiedResourceForeground', fg),
      untracked: getColor(theme, 'gitDecoration.untrackedResourceForeground', fg),
      deleted: getColor(theme, 'gitDecoration.deletedResourceForeground', fg),
      ignored: getColor(theme, 'gitDecoration.ignoredResourceForeground', fg),
      conflict: getColor(theme, 'gitDecoration.conflictingResourceForeground', fg),
    },
    brackets: [
      getColor(theme, 'editorBracketHighlight.foreground1', fg),
      getColor(theme, 'editorBracketHighlight.foreground2', fg),
      getColor(theme, 'editorBracketHighlight.foreground3', fg),
      getColor(theme, 'editorBracketHighlight.foreground4', fg),
      getColor(theme, 'editorBracketHighlight.foreground5', fg),
      getColor(theme, 'editorBracketHighlight.foreground6', fg),
    ],
  };
}

// =============================================================================
// ANALYSIS
// =============================================================================

interface ColorResult {
  name: string;
  color: string;
  lc: number;
  analysis: APCAAnalysis;
  alpha?: string;
  fallback: boolean;
  expectedDim?: boolean; // Elements intentionally low-contrast (ghost text, placeholders, etc.)
}

interface Stats {
  pass: number;
  large: number;       // Unexpected Large/Non-Text
  expectedDim: number; // Expected dim elements (not counted against verdict)
  fail: number;
  missing: number;
  total: number;
}

/**
 * Elements that are intentionally low-contrast by design.
 * These should not count against marathon-readiness.
 */
const EXPECTED_DIM_ELEMENTS = new Set([
  'Ghost Text',      // AI suggestions, expected to be subtle
  'Placeholder',     // Input placeholders
  'Ignored',         // Git ignored files
  'Code Lens',       // Reference counts, etc.
  'Panel Inactive',  // Inactive panel titles
  'Tab Inactive',    // Inactive tabs
]);

function analyze(name: string, fgValue: ColorValue, bg: string): ColorResult {
  const fg = fgValue.color;
  const alpha = extractAlpha(fg);
  const baseColor = stripAlpha(fg);
  const effectiveColor = alpha < 1 ? blendAlpha(baseColor, bg, alpha) : baseColor;
  const result = getAPCAContrast(effectiveColor, bg);
  const alphaStr = alpha < 1 ? `${Math.round(alpha * 100)}%` : undefined;
  return {
    name,
    color: effectiveColor,
    lc: result.lc,
    analysis: analyzeAPCA(result),
    alpha: alphaStr,
    fallback: fgValue.fallback,
    expectedDim: EXPECTED_DIM_ELEMENTS.has(name),
  };
}

function printSection(results: ColorResult[], title: string, expectedPolarity: Polarity): Stats {
  console.log(`\n▌ ${title}`);
  console.log('─'.repeat(OUTPUT_WIDTH));
  console.log(`${LABELS.colName.padEnd(COL_NAME_WIDTH)} ${LABELS.colColor.padEnd(COL_COLOR_WIDTH)} ${LABELS.colApca}`);
  console.log('─'.repeat(OUTPUT_WIDTH));

  const stats: Stats = { pass: 0, large: 0, expectedDim: 0, fail: 0, missing: 0, total: results.length };

  for (const r of results) {
    const alphaStr = r.alpha ? `(${r.alpha})` : '';
    const fallbackStr = r.fallback ? '?' : '';
    const dimStr = r.expectedDim ? '~' : '';
    const colorCol = `${r.color}${alphaStr}${fallbackStr}`.padEnd(COL_COLOR_WIDTH);
    const lcStr = r.lc.toFixed(1).padStart(6);
    const levelStr = r.fallback ? `${r.analysis.level}?` : `${r.analysis.level}${dimStr}`;
    console.log(`${r.name.padEnd(COL_NAME_WIDTH)} ${colorCol} Lc ${lcStr} ${r.analysis.icon} ${levelStr}`);

    if (r.analysis.polarity !== expectedPolarity && !r.fallback) {
      console.log(`    ⚠️ ${LABELS.unexpectedPolarity} ${r.analysis.polarity}`);
    }

    if (r.fallback) {
      stats.missing++;
    } else if (r.analysis.pass) {
      stats.pass++;
    } else if (r.analysis.level === 'Large' || r.analysis.level === 'Non-Text') {
      // Separate expected-dim from unexpected low-contrast
      if (r.expectedDim) {
        stats.expectedDim++;
      } else {
        stats.large++;
      }
    } else {
      stats.fail++;
    }
  }

  return stats;
}

// =============================================================================
// MAIN
// =============================================================================

function runAnalysis(themePath: string): Stats {
  const theme = loadTheme(themePath);
  const name = getThemeName(theme, themePath);
  const type: 'dark' | 'light' = theme.type === 'light' ? 'light' : 'dark';
  const expectedPolarity: Polarity = type === 'dark' ? 'light-on-dark' : 'dark-on-light';
  const c = extractColors(theme);

  console.log('═'.repeat(OUTPUT_WIDTH));
  console.log(`  ${name.toUpperCase()} - ${LABELS.title} (${type.toUpperCase()})`);
  console.log('═'.repeat(OUTPUT_WIDTH));
  console.log(`\n${LABELS.thresholds}`);

  const allStats: Stats[] = [];

  // Text
  allStats.push(printSection([
    analyze('Primary', c.fg, c.bg.editor),
  ], LABELS.sectionText, expectedPolarity));

  // Syntax
  allStats.push(printSection([
    analyze('Keywords', c.syntax.keyword, c.bg.editor),
    analyze('Functions', c.syntax.function, c.bg.editor),
    analyze('Types', c.syntax.type, c.bg.editor),
    analyze('Numbers', c.syntax.number, c.bg.editor),
    analyze('Strings', c.syntax.string, c.bg.editor),
    analyze('Decorators', c.syntax.decorator, c.bg.editor),
    analyze('Links', c.syntax.link, c.bg.editor),
    analyze('Regexp', c.syntax.regexp, c.bg.editor),
  ], LABELS.sectionSyntax, expectedPolarity));

  // Diagnostics
  allStats.push(printSection([
    analyze('Errors', c.syntax.error, c.bg.editor),
    analyze('Warnings', c.syntax.warning, c.bg.editor),
    analyze('Info', c.syntax.info, c.bg.editor),
  ], LABELS.sectionDiagnostics, expectedPolarity));

  // Comments
  allStats.push(printSection([
    analyze('Comments', c.syntax.comment, c.bg.editor),
    analyze('Doc Comments', c.syntax.docComment, c.bg.editor),
  ], LABELS.sectionComments, expectedPolarity));

  // UI - Editor
  allStats.push(printSection([
    analyze('Cursor', c.ui.cursor, c.bg.editor),
    analyze('Line Numbers', c.ui.lineNumber, c.bg.editor),
    analyze('Line Active', c.ui.lineNumberActive, c.bg.editor),
    analyze('Ghost Text', c.ui.ghostText, c.bg.editor),
    analyze('Inlay Hints', c.ui.inlayHint, c.bg.inlayHint),
    analyze('Code Lens', c.ui.codeLens, c.bg.editor),
  ], LABELS.sectionEditorUi, expectedPolarity));

  // UI - Workbench
  allStats.push(printSection([
    analyze('Title Bar', c.ui.titleBar, c.bg.titleBar),
    analyze('Tab Active', c.ui.tabActive, c.bg.tabBar),
    analyze('Tab Inactive', c.ui.tabInactive, c.bg.tabBar),
    analyze('Breadcrumb', c.ui.breadcrumb, c.bg.breadcrumb),
    analyze('Sidebar', c.ui.sidebarText, c.bg.sidebar),
    analyze('Activity Bar', c.ui.activityBar, c.bg.activityBar),
    analyze('Status Bar', c.ui.statusBarText, c.bg.statusBar),
    analyze('Panel Active', c.ui.panelTitle, c.bg.panel),
    analyze('Panel Inactive', c.ui.panelTitleInactive, c.bg.panel),
    analyze('Terminal', c.ui.terminal, c.bg.terminal),
    analyze('Input', c.ui.input, c.bg.input),
    analyze('Placeholder', c.ui.inputPlaceholder, c.bg.input),
    analyze('List Selected', c.ui.listSelection, c.bg.listSelection),
    analyze('List Hover', c.ui.listHover, c.bg.listHover),
  ], LABELS.sectionWorkbenchUi, expectedPolarity));

  // Widgets
  allStats.push(printSection([
    analyze('Find/Replace', c.widgets.editorWidget, c.bg.editorWidget),
    analyze('Autocomplete', c.widgets.suggest, c.bg.suggest),
    analyze('Hover Tooltip', c.widgets.hover, c.bg.hover),
    analyze('Command Palette', c.widgets.quickInput, c.bg.quickInput),
    analyze('Menu', c.widgets.menu, c.bg.menu),
    analyze('Notification', c.widgets.notification, c.bg.notification),
    analyze('Peek View', c.widgets.peekView, c.bg.peekView),
  ], LABELS.sectionWidgets, expectedPolarity));

  // Git Decorations
  allStats.push(printSection([
    analyze('Modified', c.git.modified, c.bg.sidebar),
    analyze('Untracked', c.git.untracked, c.bg.sidebar),
    analyze('Deleted', c.git.deleted, c.bg.sidebar),
    analyze('Ignored', c.git.ignored, c.bg.sidebar),
    analyze('Conflict', c.git.conflict, c.bg.sidebar),
  ], LABELS.sectionGit, expectedPolarity));

  // Brackets
  const bracketResults = c.brackets
    .map((color, i) => analyze(`Bracket ${i + 1}`, color, c.bg.editor))
    .filter((r, i, arr) => {
      // Filter out duplicates (same color as previous)
      if (i === 0) return true;
      return r.color !== arr[i - 1].color;
    });
  if (bracketResults.length > 0) {
    allStats.push(printSection(bracketResults, LABELS.sectionBrackets, expectedPolarity));
  }

  // Aggregate
  const total = allStats.reduce((acc, s) => ({
    pass: acc.pass + s.pass,
    large: acc.large + s.large,
    expectedDim: acc.expectedDim + s.expectedDim,
    fail: acc.fail + s.fail,
    missing: acc.missing + s.missing,
    total: acc.total + s.total,
  }), { pass: 0, large: 0, expectedDim: 0, fail: 0, missing: 0, total: 0 });

  // Summary
  const defined = total.total - total.missing;
  console.log('\n' + '═'.repeat(OUTPUT_WIDTH));
  console.log(`  ✅ ${LABELS.summaryPass}  ${total.pass}/${defined}`);
  console.log(`  ⚠️  ${LABELS.summaryLarge}  ${total.large}/${defined}`);
  if (total.expectedDim > 0) {
    console.log(`  ~  Expected dim:      ${total.expectedDim}/${defined}`);
  }
  console.log(`  ❌ ${LABELS.summaryFail}   ${total.fail}/${defined}`);
  if (total.missing > 0) {
    console.log(`  ❓ Missing (fallback): ${total.missing}/${total.total}`);
  }

  // expectedDim elements don't count against marathon-readiness
  const ready = total.fail === 0 && total.large === 0 && total.missing === 0;
  console.log('');
  if (ready) {
    console.log(`  🎉 ${LABELS.verdictReady}`);
  } else if (total.fail > 0) {
    console.log(`  ❌ ${LABELS.verdictFail}`);
  } else if (total.missing > 0) {
    console.log(`  ⚠️  ${total.missing} colors not defined - using fallback`);
  } else {
    console.log(`  ⚠️  ${LABELS.verdictWarning}`);
  }
  console.log('═'.repeat(OUTPUT_WIDTH));

  return total;
}

function testColor(fg: string, bg: string, name = 'Custom'): void {
  const fgValue: ColorValue = { color: fg, fallback: false };
  const result = analyze(name, fgValue, bg);
  console.log(`\n${name}: ${fg}${result.alpha ? ` @ ${result.alpha}` : ''} on ${bg}`);
  if (result.alpha) console.log(`  Blended: ${result.color}`);
  console.log(`  Lc ${result.lc.toFixed(1).padStart(6)} ${result.analysis.icon} ${result.analysis.level}`);
}

// =============================================================================
// CLI
// =============================================================================

function printHelp(): void {
  console.log(`
VS Code Theme - Readability Analysis

Usage:
  npx tsx src/tools/readability.ts --theme <path>         Analyze theme
  npx tsx src/tools/readability.ts --test FG BG [NAME]    Test single color

Options:
  --theme <path>    Path to VS Code theme JSON file
  --test FG BG      Test foreground on background
  --help, -h        Show this help

Examples:
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json
  npx tsx src/tools/readability.ts --test "#FFFFFF" "#1A1A1A" "White on dark"
  npx tsx src/tools/readability.ts --test "#FFFFFF80" "#1A1A1A" "50% alpha"

APCA Thresholds (monospace text):
  Lc 90+ Fluent     Lc 45+ Large
  Lc 75+ Body       Lc 30+ Non-text
  Lc 60+ Content    <30   FAIL
`);
}

const args = process.argv.slice(2);

if (args[0] === '--help' || args[0] === '-h') {
  printHelp();
} else if (args.length === 0) {
  printHelp();
  process.exit(1);
} else {
  let themePath: string | undefined;
  let test: { fg: string; bg: string; name?: string } | undefined;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--theme' && args[i + 1]) {
      themePath = path.resolve(args[++i]);
    } else if (args[i] === '--test' && args[i + 1] && args[i + 2]) {
      const fg = args[++i];
      const bg = args[++i];
      const nextArg = args[i + 1];
      const name = nextArg && !nextArg.startsWith('-') ? args[++i] : undefined;
      test = { fg, bg, name };
    }
  }

  if (test) {
    if (!isValidHex(test.fg)) {
      console.error(LABELS.errInvalidColor(test.fg));
      process.exit(1);
    }
    if (!isValidHex(test.bg)) {
      console.error(LABELS.errInvalidColor(test.bg));
      process.exit(1);
    }
    testColor(test.fg, test.bg, test.name);
  } else if (themePath) {
    runAnalysis(themePath);
    // Exit 0: Analysis completed successfully (LLM tool calling best practice)
    // The output text communicates whether issues were found
  } else {
    console.error(LABELS.errThemeRequired);
    process.exit(1);
  }
}
