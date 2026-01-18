/**
 * VS Code Theme - Readability Analysis (Standalone)
 *
 * Analyzes APCA contrast to verify theme readability for extended coding sessions.
 * Works with any VS Code theme JSON file.
 *
 * Design Principles:
 * - Direct lookup: No simulation of VS Code's fallback chains
 * - Explicit only: Missing colors marked with (?), not guessed
 * - Semantic priority: semanticTokenColors checked before tokenColors
 * - Transparency aware: Semi-transparent colors blended with background
 * - Expected dim: Intentionally subtle elements marked with (~)
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
  sectionSelected: 'SELECTED TEXT',
  sectionNavHighlights: 'NAVIGATION HIGHLIGHTS',
  sectionDiagnostics: 'DIAGNOSTICS',
  sectionComments: 'COMMENTS',
  sectionEditorUi: 'EDITOR UI',
  sectionWorkbenchUi: 'WORKBENCH UI',
  sectionWidgets: 'WIDGETS',
  sectionGit: 'GIT DECORATIONS',
  sectionBrackets: 'BRACKETS',
  sectionTerminal: 'TERMINAL ANSI',
  sectionButtons: 'BUTTONS & BADGES',
  sectionDebug: 'DEBUG',
  sectionDebugContext: 'DEBUG CONTEXT',
  sectionLinkedEditing: 'LINKED EDITING',
  sectionLinks: 'LINKS & HIGHLIGHTS',
  sectionMisc: 'MISC UI',
  sectionDiff: 'DIFF EDITOR',
  sectionMerge: 'MERGE CONFLICTS',
  sectionCursors: 'CURSORS',
  sectionStickyScroll: 'STICKY SCROLL SYNTAX',
  sectionPeekEditor: 'PEEK VIEW EDITOR',
  sectionInputControls: 'INPUT CONTROLS',
  sectionScm: 'SCM GRAPH',
  sectionChat: 'CHAT & AI',
  sectionTesting: 'TESTING',
  sectionSearchEditor: 'SEARCH EDITOR',
  sectionDebugConsole: 'DEBUG CONSOLE',
  sectionSymbolIcons: 'SYMBOL ICONS',
  sectionSettings: 'SETTINGS EDITOR',
  sectionCharts: 'CHARTS',

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
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(1, n));
    return Math.round(clamped * 255).toString(16).padStart(2, '0');
  };
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
 * Find color for a token using exact scope matching.
 *
 * Why exact matching only:
 * - VS Code's full TextMate matching requires scope stacks (e.g., "source.js meta.function variable")
 * - We only have single scope strings, can't verify parent context
 * - Prefix matching could report wrong colors for descendant selectors
 * - Better to report "unknown" than wrong contrast values
 *
 * Priority:
 * 1. Semantic token (direct key lookup)
 * 2. tokenColors (exact scope match, last definition wins)
 */
function findTokenColor(theme: ThemeJson, textmateScope: string, semanticKey?: string): ColorValue {
  // 1. Semantic tokens take priority (direct lookup)
  if (semanticKey && theme.semanticHighlighting !== false && theme.semanticTokenColors) {
    const value = theme.semanticTokenColors[semanticKey];
    if (value) {
      const color = typeof value === 'string' ? value : value.foreground;
      if (color) return { color, fallback: false };
    }
  }

  // 2. tokenColors with exact match (last definition wins)
  let match: string | null = null;

  for (const token of theme.tokenColors ?? []) {
    if (!token.settings?.foreground) continue;

    const scopes = Array.isArray(token.scope)
      ? token.scope
      : token.scope?.split(',').map(s => s.trim()) ?? [];

    if (scopes.includes(textmateScope)) {
      match = token.settings.foreground;
    }
  }

  if (match) {
    return { color: match, fallback: false };
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
    cursorBlock: string;
    terminalCursorBlock: string;
    panel: string;
    activityBar: string;
    input: string;
    listSelection: string;
    listInactiveSelection: string;
    listHover: string;
    listFocus: string;
    inlayHint: string;
    breadcrumb: string;
    stickyScroll: string;
    // Widgets
    editorWidget: string;
    suggest: string;
    hover: string;
    quickInput: string;
    quickInputListFocus: string;
    menu: string;
    notification: string;
    peekView: string;
    peekViewSelection: string;
    titleBar: string;
    titleBarInactive: string;
    commandCenter: string;
    suggestSelected: string;
    inlineChat: string;
    // Additional
    button: string;
    buttonSecondary: string;
    badge: string;
    activityBarBadge: string;
    dropdown: string;
    debugToolbar: string;
    banner: string;
    keybindingLabel: string;
    checkbox: string;
    extensionButton: string;
    // Status bar items
    statusBarItemError: string;
    statusBarItemWarning: string;
    statusBarItemRemote: string;
    statusBarItemProminent: string;
    statusBarItemOffline: string;
    // Activity bar badges
    activityWarningBadge: string;
    activityErrorBadge: string;
    // Selection & highlights
    selection: string;
    selectionInactive: string;
    selectionHighlight: string;
    rangeHighlight: string;
    symbolHighlight: string;
    terminalSelection: string;
    wordHighlight: string;
    wordHighlightStrong: string;
    wordHighlightText: string;
    findMatch: string;
    findMatchActive: string;
    findRange: string;
    bracketMatch: string;
    // Terminal find
    terminalFindMatch: string;
    terminalFindMatchHighlight: string;
    // Diff editor
    diffInserted: string;
    diffRemoved: string;
    diffInsertedLine: string;
    diffRemovedLine: string;
    // Merge conflicts
    mergeCurrentContent: string;
    mergeIncomingContent: string;
    mergeCommonContent: string;
    // Input validation
    inputValidationError: string;
    inputValidationWarning: string;
    inputValidationInfo: string;
    // Peek view editor
    peekViewEditor: string;
    // Search editor
    searchEditorFindMatch: string;
    // Debug context
    stackFrame: string;
    focusedStackFrame: string;
    // Linked editing (HTML tag pairs)
    linkedEditing: string;
  };
  fg: ColorValue;
  cursor: Record<string, ColorValue>;
  syntax: Record<string, ColorValue>;
  ui: Record<string, ColorValue>;
  widgets: Record<string, ColorValue>;
  git: Record<string, ColorValue>;
  brackets: Record<string, ColorValue>;
  terminal: Record<string, ColorValue>;
  buttons: Record<string, ColorValue>;
  debug: Record<string, ColorValue>;
  links: Record<string, ColorValue>;
  misc: Record<string, ColorValue>;
  inputs: Record<string, ColorValue>;
  scm: Record<string, ColorValue>;
  chat: Record<string, ColorValue>;
  testing: Record<string, ColorValue>;
  debugConsole: Record<string, ColorValue>;
  symbolIcons: Record<string, ColorValue>;
  settings: Record<string, ColorValue>;
  charts: Record<string, ColorValue>;
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

  // Helper: get color and resolve transparency against underlying surface
  const resolveBg = (key: string, underlying: string): string => {
    const raw = getColorRaw(theme, key, underlying);
    return resolveTransparentBg(raw, underlying);
  };

  // Resolve all backgrounds - transparent colors blended with underlying surface
  // Most surfaces use editorBg as underlying; sidebar-related use sidebarBg
  const sidebarBg = resolveBg('sideBar.background', editorBg);
  const panelBg = resolveBg('panel.background', editorBg);

  return {
    bg: {
      editor: editorBg,
      sidebar: sidebarBg,
      statusBar: resolveBg('statusBar.background', editorBg),
      tabBar: resolveBg('editorGroupHeader.tabsBackground', editorBg),
      terminal: resolveBg('terminal.background', panelBg),
      cursorBlock: resolveBg('editorCursor.foreground', fg), // block cursor uses fg as background
      terminalCursorBlock: resolveBg('terminalCursor.foreground', fg), // terminal block cursor uses fg as background
      panel: panelBg,
      activityBar: resolveBg('activityBar.background', editorBg),
      input: resolveBg('input.background', editorBg),
      listSelection: resolveBg('list.activeSelectionBackground', sidebarBg),
      listInactiveSelection: resolveBg('list.inactiveSelectionBackground', sidebarBg),
      listHover: resolveBg('list.hoverBackground', sidebarBg),
      listFocus: resolveBg('list.focusBackground', sidebarBg),
      inlayHint: resolveBg('editorInlayHint.background', editorBg),
      breadcrumb: resolveBg('breadcrumb.background', editorBg),
      stickyScroll: resolveBg('editorStickyScroll.background', editorBg),
      editorWidget: resolveBg('editorWidget.background', editorBg),
      suggest: resolveBg('editorSuggestWidget.background', editorBg),
      hover: resolveBg('editorHoverWidget.background', editorBg),
      quickInput: resolveBg('quickInput.background', editorBg),
      quickInputListFocus: resolveBg('quickInputList.focusBackground', editorBg),
      menu: resolveBg('menu.background', editorBg),
      notification: resolveBg('notifications.background', editorBg),
      peekView: resolveBg('peekViewResult.background', editorBg),
      peekViewSelection: resolveBg('peekViewResult.selectionBackground', editorBg),
      titleBar: resolveBg('titleBar.activeBackground', editorBg),
      titleBarInactive: resolveBg('titleBar.inactiveBackground', editorBg),
      commandCenter: resolveBg('commandCenter.background', editorBg),
      suggestSelected: resolveBg('editorSuggestWidget.selectedBackground', editorBg),
      inlineChat: resolveBg('inlineChat.background', editorBg),
      // Additional
      button: resolveBg('button.background', editorBg),
      buttonSecondary: resolveBg('button.secondaryBackground', editorBg),
      badge: resolveBg('badge.background', editorBg),
      activityBarBadge: resolveBg('activityBarBadge.background', editorBg),
      dropdown: resolveBg('dropdown.background', editorBg),
      debugToolbar: resolveBg('debugToolBar.background', editorBg),
      banner: resolveBg('banner.background', editorBg),
      keybindingLabel: resolveBg('keybindingLabel.background', editorBg),
      checkbox: resolveBg('checkbox.background', editorBg),
      extensionButton: resolveBg('extensionButton.prominentBackground', editorBg),
      // Status bar items
      statusBarItemError: resolveBg('statusBarItem.errorBackground', editorBg),
      statusBarItemWarning: resolveBg('statusBarItem.warningBackground', editorBg),
      statusBarItemRemote: resolveBg('statusBarItem.remoteBackground', editorBg),
      statusBarItemProminent: resolveBg('statusBarItem.prominentBackground', editorBg),
      statusBarItemOffline: resolveBg('statusBarItem.offlineBackground', editorBg),
      // Activity bar badges
      activityWarningBadge: resolveBg('activityWarningBadge.background', editorBg),
      activityErrorBadge: resolveBg('activityErrorBadge.background', editorBg),
      // Selection & highlights (typically semi-transparent, blended with editor)
      selection: resolveBg('editor.selectionBackground', editorBg),
      selectionInactive: resolveBg('editor.inactiveSelectionBackground', editorBg),
      selectionHighlight: resolveBg('editor.selectionHighlightBackground', editorBg),
      rangeHighlight: resolveBg('editor.rangeHighlightBackground', editorBg),
      symbolHighlight: resolveBg('editor.symbolHighlightBackground', editorBg),
      terminalSelection: resolveBg('terminal.selectionBackground', panelBg),
      wordHighlight: resolveBg('editor.wordHighlightBackground', editorBg),
      wordHighlightStrong: resolveBg('editor.wordHighlightStrongBackground', editorBg),
      wordHighlightText: resolveBg('editor.wordHighlightTextBackground', editorBg),
      findMatch: resolveBg('editor.findMatchHighlightBackground', editorBg),
      findMatchActive: resolveBg('editor.findMatchBackground', editorBg),
      findRange: resolveBg('editor.findRangeHighlightBackground', editorBg),
      bracketMatch: resolveBg('editorBracketMatch.background', editorBg),
      // Terminal find
      terminalFindMatch: resolveBg('terminal.findMatchBackground', panelBg),
      terminalFindMatchHighlight: resolveBg('terminal.findMatchHighlightBackground', panelBg),
      // Diff editor
      diffInserted: resolveBg('diffEditor.insertedTextBackground', editorBg),
      diffRemoved: resolveBg('diffEditor.removedTextBackground', editorBg),
      diffInsertedLine: resolveBg('diffEditor.insertedLineBackground', editorBg),
      diffRemovedLine: resolveBg('diffEditor.removedLineBackground', editorBg),
      // Merge conflicts
      mergeCurrentContent: resolveBg('merge.currentContentBackground', editorBg),
      mergeIncomingContent: resolveBg('merge.incomingContentBackground', editorBg),
      mergeCommonContent: resolveBg('merge.commonContentBackground', editorBg),
      // Input validation
      inputValidationError: resolveBg('inputValidation.errorBackground', editorBg),
      inputValidationWarning: resolveBg('inputValidation.warningBackground', editorBg),
      inputValidationInfo: resolveBg('inputValidation.infoBackground', editorBg),
      // Peek view editor
      peekViewEditor: resolveBg('peekViewEditor.background', editorBg),
      // Search editor
      searchEditorFindMatch: resolveBg('searchEditor.findMatchBackground', editorBg),
      // Debug context
      stackFrame: resolveBg('editor.stackFrameHighlightBackground', editorBg),
      focusedStackFrame: resolveBg('editor.focusedStackFrameHighlightBackground', editorBg),
      // Linked editing (HTML tag pairs)
      linkedEditing: resolveBg('editor.linkedEditingBackground', editorBg),
    },
    fg: fgValue,
    cursor: {
      editor: getColor(theme, 'editorCursor.foreground', fg),
      editorBlock: getColor(theme, 'editorCursor.background', fg), // text inside block cursor
      editorMultiPrimary: getColor(theme, 'editorMultiCursor.primary.foreground', fg),
      editorMultiSecondary: getColor(theme, 'editorMultiCursor.secondary.foreground', fg),
      terminal: getColor(theme, 'terminalCursor.foreground', fg),
      terminalBlock: getColor(theme, 'terminalCursor.background', fg), // text inside terminal block cursor
    },
    syntax: {
      // TextMate scope, semantic type
      // Core tokens (high frequency in code)
      variable: resolveColor(findTokenColor(theme, 'variable', 'variable'), fg),
      variableLanguage: resolveColor(findTokenColor(theme, 'variable.language'), fg), // this, self, super
      parameter: resolveColor(findTokenColor(theme, 'variable.parameter', 'parameter'), fg),
      property: resolveColor(findTokenColor(theme, 'variable.other.property', 'property'), fg),
      keyword: resolveColor(findTokenColor(theme, 'keyword', 'keyword'), fg),
      operator: resolveColor(findTokenColor(theme, 'keyword.operator', 'operator'), fg),
      storage: resolveColor(findTokenColor(theme, 'storage.type'), fg),
      function: resolveColor(findTokenColor(theme, 'entity.name.function', 'function'), fg),
      method: resolveColor(findTokenColor(theme, 'entity.name.function.method', 'method'), fg),
      class: resolveColor(findTokenColor(theme, 'entity.name.class', 'class'), fg),
      type: resolveColor(findTokenColor(theme, 'entity.name.type', 'type'), fg),
      interface: resolveColor(findTokenColor(theme, 'entity.name.type.interface', 'interface'), fg),
      namespace: resolveColor(findTokenColor(theme, 'entity.name.namespace', 'namespace'), fg),
      enum: resolveColor(findTokenColor(theme, 'entity.name.type.enum', 'enum'), fg),
      enumMember: resolveColor(findTokenColor(theme, 'variable.other.enummember', 'enumMember'), fg),
      typeParameter: resolveColor(findTokenColor(theme, 'entity.name.type.parameter', 'typeParameter'), fg),
      // Literals
      number: resolveColor(findTokenColor(theme, 'constant.numeric', 'number'), fg),
      string: resolveColor(findTokenColor(theme, 'string', 'string'), fg),
      stringEscape: resolveColor(findTokenColor(theme, 'constant.character.escape'), fg), // \n, \t, etc.
      constant: resolveColor(findTokenColor(theme, 'constant.language'), fg),
      regexp: resolveColor(findTokenColor(theme, 'string.regexp', 'regexp'), fg),
      // Markup/Web
      tag: resolveColor(findTokenColor(theme, 'entity.name.tag'), fg),
      attribute: resolveColor(findTokenColor(theme, 'entity.other.attribute-name'), fg),
      // Other
      decorator: resolveColor(findTokenColor(theme, 'entity.name.function.decorator', 'decorator'), fg),
      link: resolveColor(findTokenColor(theme, 'markup.underline.link'), fg),
      punctuation: resolveColor(findTokenColor(theme, 'punctuation'), fg),
      macro: resolveColor(findTokenColor(theme, 'entity.name.function.preprocessor', 'macro'), fg),
      struct: resolveColor(findTokenColor(theme, 'entity.name.type.struct', 'struct'), fg),
      // Invalid/Deprecated
      invalid: resolveColor(findTokenColor(theme, 'invalid.illegal'), fg),
      deprecated: resolveColor(findTokenColor(theme, 'invalid.deprecated'), fg),
      // Support (framework/library provided) - only function is distinctively styled
      supportFunction: resolveColor(findTokenColor(theme, 'support.function'), fg),
      // Storage modifiers
      storageModifier: resolveColor(findTokenColor(theme, 'storage.modifier'), fg),
      // Markup (Markdown, etc.)
      markupHeading: resolveColor(findTokenColor(theme, 'markup.heading'), fg),
      markupBold: resolveColor(findTokenColor(theme, 'markup.bold'), fg),
      markupItalic: resolveColor(findTokenColor(theme, 'markup.italic'), fg),
      markupCode: resolveColor(findTokenColor(theme, 'markup.inline.raw'), fg),
      markupQuote: resolveColor(findTokenColor(theme, 'markup.quote'), fg),
      // Comments
      comment: resolveColor(findTokenColor(theme, 'comment', 'comment'), fg),
      docComment: (() => {
        const doc = findTokenColor(theme, 'comment.block.documentation');
        return resolveColor(doc.fallback ? findTokenColor(theme, 'comment', 'comment') : doc, fg);
      })(),
      // Diagnostics
      warning: getColor(theme, 'editorWarning.foreground', fg),
      info: getColor(theme, 'editorInfo.foreground', fg),
      error: getColor(theme, 'editorError.foreground', fg),
    },
    ui: {
      // Global
      foreground: getColor(theme, 'foreground', fg),
      iconForeground: getColor(theme, 'icon.foreground', fg),
      // Tabs
      tabActive: getColor(theme, 'tab.activeForeground', fg),
      tabSelected: getColor(theme, 'tab.selectedForeground', fg),
      tabInactive: getColor(theme, 'tab.inactiveForeground', fg),
      tabUnfocused: getColor(theme, 'tab.unfocusedActiveForeground', fg),
      tabUnfocusedInactive: getColor(theme, 'tab.unfocusedInactiveForeground', fg),
      tabHover: getColor(theme, 'tab.hoverForeground', fg),
      tabUnfocusedHover: getColor(theme, 'tab.unfocusedHoverForeground', fg),
      // Title bar
      titleBar: getColor(theme, 'titleBar.activeForeground', fg),
      titleBarInactive: getColor(theme, 'titleBar.inactiveForeground', fg),
      // Breadcrumb
      breadcrumb: getColor(theme, 'breadcrumb.foreground', fg),
      // Sidebar
      sidebarText: getColor(theme, 'sideBar.foreground', fg),
      sidebarTitle: getColor(theme, 'sideBarTitle.foreground', fg),
      // Status bar
      statusBarText: getColor(theme, 'statusBar.foreground', fg),
      statusBarDebug: getColor(theme, 'statusBar.debuggingForeground', fg),
      statusBarNoFolder: getColor(theme, 'statusBar.noFolderForeground', fg),
      statusBarItemError: getColor(theme, 'statusBarItem.errorForeground', fg),
      statusBarItemWarning: getColor(theme, 'statusBarItem.warningForeground', fg),
      statusBarItemRemote: getColor(theme, 'statusBarItem.remoteForeground', fg),
      statusBarItemProminent: getColor(theme, 'statusBarItem.prominentForeground', fg),
      statusBarItemOffline: getColor(theme, 'statusBarItem.offlineForeground', fg),
      statusBarItemHover: getColor(theme, 'statusBarItem.hoverForeground', fg),
      // Editor chrome
      lineNumber: getColor(theme, 'editorLineNumber.foreground', fg),
      lineNumberActive: getColor(theme, 'editorLineNumber.activeForeground', fg),
      lineNumberDimmed: getColor(theme, 'editorLineNumber.dimmedForeground', fg),
      ghostText: getColor(theme, 'editorGhostText.foreground', fg),
      hint: getColor(theme, 'editorHint.foreground', fg),
      inlayHint: getColor(theme, 'editorInlayHint.foreground', fg),
      inlayHintType: getColor(theme, 'editorInlayHint.typeForeground', fg),
      inlayHintParam: getColor(theme, 'editorInlayHint.parameterForeground', fg),
      codeLens: getColor(theme, 'editorCodeLens.foreground', fg),
      lightBulb: getColor(theme, 'editorLightBulb.foreground', fg),
      lightBulbAutoFix: getColor(theme, 'editorLightBulbAutoFix.foreground', fg),
      lightBulbAi: getColor(theme, 'editorLightBulbAi.foreground', fg),
      editorLinkActive: getColor(theme, 'editorLink.activeForeground', fg),
      whitespace: getColor(theme, 'editorWhitespace.foreground', fg),
      ruler: getColor(theme, 'editorRuler.foreground', fg),
      foldPlaceholder: getColor(theme, 'editor.foldPlaceholderForeground', fg),
      foldControl: getColor(theme, 'editorGutter.foldingControlForeground', fg),
      // Terminal
      terminal: getColor(theme, 'terminal.foreground', fg),
      terminalSelection: getColor(theme, 'terminal.selectionForeground', fg),
      // Panel
      panelTitle: getColor(theme, 'panelTitle.activeForeground', fg),
      panelTitleInactive: getColor(theme, 'panelTitle.inactiveForeground', fg),
      panelTitleBadge: getColor(theme, 'panelTitleBadge.foreground', fg),
      // Activity bar
      activityBar: getColor(theme, 'activityBar.foreground', fg),
      activityBarInactive: getColor(theme, 'activityBar.inactiveForeground', fg),
      activityBarTop: getColor(theme, 'activityBarTop.foreground', fg),
      activityBarTopInactive: getColor(theme, 'activityBarTop.inactiveForeground', fg),
      // Input
      input: getColor(theme, 'input.foreground', fg),
      inputPlaceholder: getColor(theme, 'input.placeholderForeground', fg),
      inputValidationError: getColor(theme, 'inputValidation.errorForeground', fg),
      inputValidationWarning: getColor(theme, 'inputValidation.warningForeground', fg),
      inputValidationInfo: getColor(theme, 'inputValidation.infoForeground', fg),
      // Lists
      listSelection: getColor(theme, 'list.activeSelectionForeground', fg),
      listSelectionIcon: getColor(theme, 'list.activeSelectionIconForeground', fg),
      listInactiveSelectionIcon: getColor(theme, 'list.inactiveSelectionIconForeground', fg),
      listHover: getColor(theme, 'list.hoverForeground', fg),
      listFocus: getColor(theme, 'list.focusForeground', fg),
      listInvalidItem: getColor(theme, 'list.invalidItemForeground', fg),
      listDeemphasized: getColor(theme, 'list.deemphasizedForeground', fg),
      // Command center
      commandCenter: getColor(theme, 'commandCenter.foreground', fg),
      commandCenterActive: getColor(theme, 'commandCenter.activeForeground', fg),
      commandCenterInactive: getColor(theme, 'commandCenter.inactiveForeground', fg),
      pickerGroup: getColor(theme, 'pickerGroup.foreground', fg),
      // Selection override foregrounds (when defined, override syntax colors)
      selectionForeground: getColor(theme, 'editor.selectionForeground', ''),
      findMatchForeground: getColor(theme, 'editor.findMatchForeground', ''),
      findMatchHighlightForeground: getColor(theme, 'editor.findMatchHighlightForeground', ''),
      wordHighlightForeground: getColor(theme, 'editor.wordHighlightForeground', ''),
      wordHighlightStrongForeground: getColor(theme, 'editor.wordHighlightStrongForeground', ''),
      wordHighlightTextForeground: getColor(theme, 'editor.wordHighlightTextForeground', ''),
      // Misc
      textPreformat: getColor(theme, 'textPreformat.foreground', fg),
      textLinkActive: getColor(theme, 'textLink.activeForeground', fg),
      menubarSelection: getColor(theme, 'menubar.selectionForeground', fg),
      checkbox: getColor(theme, 'checkbox.foreground', fg),
    },
    widgets: {
      editorWidget: getColor(theme, 'editorWidget.foreground', fg),
      actionList: getColor(theme, 'editorActionList.foreground', fg),
      actionListFocus: getColor(theme, 'editorActionList.focusForeground', fg),
      suggest: getColor(theme, 'editorSuggestWidget.foreground', fg),
      suggestSelected: getColor(theme, 'editorSuggestWidget.selectedForeground', fg),
      suggestSelectedIcon: getColor(theme, 'editorSuggestWidget.selectedIconForeground', fg),
      suggestHighlight: getColor(theme, 'editorSuggestWidget.highlightForeground', fg),
      suggestFocusHighlight: getColor(theme, 'editorSuggestWidget.focusHighlightForeground', fg),
      hover: getColor(theme, 'editorHoverWidget.foreground', fg),
      hoverHighlight: getColor(theme, 'editorHoverWidget.highlightForeground', fg),
      quickInput: getColor(theme, 'quickInput.foreground', fg),
      quickInputListFocus: getColor(theme, 'quickInputList.focusForeground', fg),
      quickInputListFocusIcon: getColor(theme, 'quickInputList.focusIconForeground', fg),
      menu: getColor(theme, 'menu.foreground', fg),
      menuSelection: getColor(theme, 'menu.selectionForeground', fg),
      notification: getColor(theme, 'notifications.foreground', fg),
      notificationLink: getColor(theme, 'notificationLink.foreground', fg),
      notificationHeader: getColor(theme, 'notificationCenterHeader.foreground', fg),
      notificationErrorIcon: getColor(theme, 'notificationsErrorIcon.foreground', fg),
      notificationWarningIcon: getColor(theme, 'notificationsWarningIcon.foreground', fg),
      notificationInfoIcon: getColor(theme, 'notificationsInfoIcon.foreground', fg),
      peekView: getColor(theme, 'peekViewResult.lineForeground', fg),
      inlineChat: getColor(theme, 'inlineChat.foreground', fg),
      inlineChatPlaceholder: getColor(theme, 'inlineChatInput.placeholderForeground', fg),
      suggestWidgetStatus: getColor(theme, 'editorSuggestWidgetStatus.foreground', fg),
    },
    git: {
      added: getColor(theme, 'gitDecoration.addedResourceForeground', fg),
      modified: getColor(theme, 'gitDecoration.modifiedResourceForeground', fg),
      deleted: getColor(theme, 'gitDecoration.deletedResourceForeground', fg),
      renamed: getColor(theme, 'gitDecoration.renamedResourceForeground', fg),
      untracked: getColor(theme, 'gitDecoration.untrackedResourceForeground', fg),
      ignored: getColor(theme, 'gitDecoration.ignoredResourceForeground', fg),
      conflict: getColor(theme, 'gitDecoration.conflictingResourceForeground', fg),
      submodule: getColor(theme, 'gitDecoration.submoduleResourceForeground', fg),
      stageModified: getColor(theme, 'gitDecoration.stageModifiedResourceForeground', fg),
      stageDeleted: getColor(theme, 'gitDecoration.stageDeletedResourceForeground', fg),
    },
    brackets: {
      bracket1: getColor(theme, 'editorBracketHighlight.foreground1', fg),
      bracket2: getColor(theme, 'editorBracketHighlight.foreground2', fg),
      bracket3: getColor(theme, 'editorBracketHighlight.foreground3', fg),
      bracket4: getColor(theme, 'editorBracketHighlight.foreground4', fg),
      bracket5: getColor(theme, 'editorBracketHighlight.foreground5', fg),
      bracket6: getColor(theme, 'editorBracketHighlight.foreground6', fg),
      unexpected: getColor(theme, 'editorBracketHighlight.unexpectedBracket.foreground', fg),
    },
    terminal: {
      ansiBlack: getColor(theme, 'terminal.ansiBlack', fg),
      ansiRed: getColor(theme, 'terminal.ansiRed', fg),
      ansiGreen: getColor(theme, 'terminal.ansiGreen', fg),
      ansiYellow: getColor(theme, 'terminal.ansiYellow', fg),
      ansiBlue: getColor(theme, 'terminal.ansiBlue', fg),
      ansiMagenta: getColor(theme, 'terminal.ansiMagenta', fg),
      ansiCyan: getColor(theme, 'terminal.ansiCyan', fg),
      ansiWhite: getColor(theme, 'terminal.ansiWhite', fg),
      ansiBrightBlack: getColor(theme, 'terminal.ansiBrightBlack', fg),
      ansiBrightRed: getColor(theme, 'terminal.ansiBrightRed', fg),
      ansiBrightGreen: getColor(theme, 'terminal.ansiBrightGreen', fg),
      ansiBrightYellow: getColor(theme, 'terminal.ansiBrightYellow', fg),
      ansiBrightBlue: getColor(theme, 'terminal.ansiBrightBlue', fg),
      ansiBrightMagenta: getColor(theme, 'terminal.ansiBrightMagenta', fg),
      ansiBrightCyan: getColor(theme, 'terminal.ansiBrightCyan', fg),
      ansiBrightWhite: getColor(theme, 'terminal.ansiBrightWhite', fg),
    },
    buttons: {
      button: getColor(theme, 'button.foreground', fg),
      buttonSecondary: getColor(theme, 'button.secondaryForeground', fg),
      extensionButton: getColor(theme, 'extensionButton.prominentForeground', fg),
      badge: getColor(theme, 'badge.foreground', fg),
      activityBarBadge: getColor(theme, 'activityBarBadge.foreground', fg),
      activityWarningBadge: getColor(theme, 'activityWarningBadge.foreground', fg),
      activityErrorBadge: getColor(theme, 'activityErrorBadge.foreground', fg),
      dropdown: getColor(theme, 'dropdown.foreground', fg),
    },
    debug: {
      tokenName: getColor(theme, 'debugTokenExpression.name', fg),
      tokenValue: getColor(theme, 'debugTokenExpression.value', fg),
      tokenString: getColor(theme, 'debugTokenExpression.string', fg),
      tokenNumber: getColor(theme, 'debugTokenExpression.number', fg),
      tokenBoolean: getColor(theme, 'debugTokenExpression.boolean', fg),
      tokenError: getColor(theme, 'debugTokenExpression.error', fg),
      tokenType: getColor(theme, 'debugTokenExpression.type', fg),
      inlineValue: getColor(theme, 'editor.inlineValuesForeground', fg),
      exceptionLabel: getColor(theme, 'debugView.exceptionLabelForeground', fg),
      stateLabel: getColor(theme, 'debugView.stateLabelForeground', fg),
    },
    links: {
      textLink: getColor(theme, 'textLink.foreground', fg),
      listHighlight: getColor(theme, 'list.highlightForeground', fg),
      listFocusHighlight: getColor(theme, 'list.focusHighlightForeground', fg),
      listInactiveSelection: getColor(theme, 'list.inactiveSelectionForeground', fg),
      listError: getColor(theme, 'list.errorForeground', fg),
      listWarning: getColor(theme, 'list.warningForeground', fg),
    },
    misc: {
      sidebarSectionHeader: getColor(theme, 'sideBarSectionHeader.foreground', fg),
      panelSectionHeader: getColor(theme, 'panelSectionHeader.foreground', fg),
      keybindingLabel: getColor(theme, 'keybindingLabel.foreground', fg),
      banner: getColor(theme, 'banner.foreground', fg),
      bannerIcon: getColor(theme, 'banner.iconForeground', fg),
      peekViewTitle: getColor(theme, 'peekViewTitleLabel.foreground', fg),
      peekViewDescription: getColor(theme, 'peekViewTitleDescription.foreground', fg),
      peekViewFile: getColor(theme, 'peekViewResult.fileForeground', fg),
      peekViewSelection: getColor(theme, 'peekViewResult.selectionForeground', fg),
      // Problems panel
      problemsError: getColor(theme, 'problemsErrorIcon.foreground', fg),
      problemsWarning: getColor(theme, 'problemsWarningIcon.foreground', fg),
      problemsInfo: getColor(theme, 'problemsInfoIcon.foreground', fg),
      // Search
      searchResultsInfo: getColor(theme, 'search.resultsInfoForeground', fg),
      // Workbench-level foregrounds
      description: getColor(theme, 'descriptionForeground', fg),
      disabled: getColor(theme, 'disabledForeground', fg),
      errorFg: getColor(theme, 'errorForeground', fg),
      gitBlame: getColor(theme, 'git.blame.editorDecorationForeground', fg),
      // Diff editor
      diffUnchangedRegion: getColor(theme, 'diffEditor.unchangedRegionForeground', fg),
      // Editor placeholder
      editorPlaceholder: getColor(theme, 'editor.placeholder.foreground', fg),
      // Terminal
      terminalCommandGuide: getColor(theme, 'terminalCommandGuide.foreground', fg),
      terminalInitialHint: getColor(theme, 'terminal.initialHintForeground', fg),
      // Walkthrough
      walkthroughStepTitle: getColor(theme, 'walkthrough.stepTitle.foreground', fg),
      // Welcome page
      welcomeProgress: getColor(theme, 'welcomePage.progress.foreground', fg),
      // Profile badge
      profileBadge: getColor(theme, 'profileBadge.foreground', fg),
    },
    inputs: {
      optionActive: getColor(theme, 'inputOption.activeForeground', fg),
      radioActive: getColor(theme, 'radio.activeForeground', fg),
      radioInactive: getColor(theme, 'radio.inactiveForeground', fg),
      checkboxDisabled: getColor(theme, 'checkbox.disabled.foreground', fg),
    },
    scm: {
      // Graph line colors (foreground1-5) removed - decorative, not text
      historyHoverLabel: getColor(theme, 'scmGraph.historyItemHoverLabelForeground', fg),
      historyHoverAdditions: getColor(theme, 'scmGraph.historyItemHoverAdditionsForeground', fg),
      historyHoverDeletions: getColor(theme, 'scmGraph.historyItemHoverDeletionsForeground', fg),
    },
    chat: {
      avatar: getColor(theme, 'chat.avatarForeground', fg),
      linesAdded: getColor(theme, 'chat.linesAddedForeground', fg),
      linesRemoved: getColor(theme, 'chat.linesRemovedForeground', fg),
      slashCommand: getColor(theme, 'chat.slashCommandForeground', fg),
      editedFile: getColor(theme, 'chat.editedFileForeground', fg),
    },
    testing: {
      coverageBadge: getColor(theme, 'testing.coverCountBadgeForeground', fg),
      messageInfo: getColor(theme, 'testing.message.info.decorationForeground', fg),
    },
    debugConsole: {
      error: getColor(theme, 'debugConsole.errorForeground', fg),
      warning: getColor(theme, 'debugConsole.warningForeground', fg),
      info: getColor(theme, 'debugConsole.infoForeground', fg),
      source: getColor(theme, 'debugConsole.sourceForeground', fg),
    },
    symbolIcons: {
      array: getColor(theme, 'symbolIcon.arrayForeground', fg),
      boolean: getColor(theme, 'symbolIcon.booleanForeground', fg),
      class: getColor(theme, 'symbolIcon.classForeground', fg),
      constant: getColor(theme, 'symbolIcon.constantForeground', fg),
      ctor: getColor(theme, 'symbolIcon.constructorForeground', fg),
      enum: getColor(theme, 'symbolIcon.enumeratorForeground', fg),
      enumMember: getColor(theme, 'symbolIcon.enumeratorMemberForeground', fg),
      event: getColor(theme, 'symbolIcon.eventForeground', fg),
      field: getColor(theme, 'symbolIcon.fieldForeground', fg),
      file: getColor(theme, 'symbolIcon.fileForeground', fg),
      folder: getColor(theme, 'symbolIcon.folderForeground', fg),
      function: getColor(theme, 'symbolIcon.functionForeground', fg),
      interface: getColor(theme, 'symbolIcon.interfaceForeground', fg),
      key: getColor(theme, 'symbolIcon.keyForeground', fg),
      keyword: getColor(theme, 'symbolIcon.keywordForeground', fg),
      method: getColor(theme, 'symbolIcon.methodForeground', fg),
      module: getColor(theme, 'symbolIcon.moduleForeground', fg),
      namespace: getColor(theme, 'symbolIcon.namespaceForeground', fg),
      null: getColor(theme, 'symbolIcon.nullForeground', fg),
      number: getColor(theme, 'symbolIcon.numberForeground', fg),
      object: getColor(theme, 'symbolIcon.objectForeground', fg),
      operator: getColor(theme, 'symbolIcon.operatorForeground', fg),
      package: getColor(theme, 'symbolIcon.packageForeground', fg),
      property: getColor(theme, 'symbolIcon.propertyForeground', fg),
      reference: getColor(theme, 'symbolIcon.referenceForeground', fg),
      snippet: getColor(theme, 'symbolIcon.snippetForeground', fg),
      string: getColor(theme, 'symbolIcon.stringForeground', fg),
      struct: getColor(theme, 'symbolIcon.structForeground', fg),
      text: getColor(theme, 'symbolIcon.textForeground', fg),
      typeParameter: getColor(theme, 'symbolIcon.typeParameterForeground', fg),
      unit: getColor(theme, 'symbolIcon.unitForeground', fg),
      variable: getColor(theme, 'symbolIcon.variableForeground', fg),
    },
    settings: {
      header: getColor(theme, 'settings.headerForeground', fg),
      textInput: getColor(theme, 'settings.textInputForeground', fg),
      numberInput: getColor(theme, 'settings.numberInputForeground', fg),
      checkbox: getColor(theme, 'settings.checkboxForeground', fg),
      dropdown: getColor(theme, 'settings.dropdownForeground', fg),
    },
    charts: {
      foreground: getColor(theme, 'charts.foreground', fg),
    },
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
 *
 * Note: Names must match exactly as used in analyze() calls.
 *
 * Note on terminal colors: ANSI black/bright black are included because:
 * - Black is typically invisible on dark terminals (same as background)
 * - Bright black is conventionally used as a dim/gray color
 * Most terminal applications don't use black for primary text on dark backgrounds.
 */
const EXPECTED_DIM_ELEMENTS = new Set([
  // Editor gutter elements (intentionally subtle)
  'Ghost Text',      // AI suggestions, expected to be subtle
  'Ghost+Sel',       // Ghost text on selection (edge case)
  'Code Lens',       // Reference counts, clickable but not primary reading
  'Fold Control',    // Fold/unfold arrows in gutter
  'Fold Placeholder',// "..." text when code is folded
  'Line Numbers',    // Line numbers (active line number is separate)
  'Line Num Dimmed', // Final newline marker (extra subtle)
  'Whitespace',      // Whitespace markers (dots, arrows)
  'Ruler',           // Column guides (80-char line, etc.)
  'Git Blame',       // Inline blame annotations
  'Term Cmd Guide',  // Terminal command guide (shell integration)
  'Term Init Hint',  // Terminal initial hint ("Type to search")
  // Inactive/placeholder states
  'Placeholder',     // Input placeholders
  'Editor Placeholder', // Empty editor placeholder
  'Tab Inactive',    // Inactive tabs
  'Tab Unfocused',   // Active tab in unfocused group
  'Tab Unfoc Inact', // Inactive tabs in unfocused groups
  'Title Inactive',  // Inactive window title bar
  'Panel Inactive',  // Inactive panel titles
  'Activity Inact',  // Inactive activity bar icons
  'Act Top Inact',   // Activity bar top inactive
  'Cmd Ctr Inact',   // Inactive command center
  'Disabled',        // Disabled UI elements
  'Checkbox Disabled', // Disabled checkbox
  'Radio Inactive',  // Inactive radio button
  'Breadcrumb',      // Breadcrumb navigation (often subdued)
  'Description',     // Helper/description text
  'Chat Placeholder',// Inline chat placeholder
  // Git
  'Ignored',         // Git ignored files
  // Terminal (black colors are invisible/dim by design on dark backgrounds)
  'Black',           // Terminal black
  'Bright Black',    // Terminal dim text (ANSI bright black is gray)
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
    analyze('Global', c.ui.foreground, c.bg.editor),
    analyze('Icons', c.ui.iconForeground, c.bg.editor),
  ], LABELS.sectionText, expectedPolarity));

  // Syntax - Core (high frequency)
  allStats.push(printSection([
    analyze('Variables', c.syntax.variable, c.bg.editor),
    analyze('Var Language', c.syntax.variableLanguage, c.bg.editor), // this, self, super
    analyze('Parameters', c.syntax.parameter, c.bg.editor),
    analyze('Properties', c.syntax.property, c.bg.editor),
    analyze('Keywords', c.syntax.keyword, c.bg.editor),
    analyze('Operators', c.syntax.operator, c.bg.editor),
    analyze('Storage', c.syntax.storage, c.bg.editor),
    analyze('Functions', c.syntax.function, c.bg.editor),
    analyze('Methods', c.syntax.method, c.bg.editor),
    analyze('Classes', c.syntax.class, c.bg.editor),
    analyze('Types', c.syntax.type, c.bg.editor),
    analyze('Interfaces', c.syntax.interface, c.bg.editor),
    analyze('Namespaces', c.syntax.namespace, c.bg.editor),
    analyze('Enums', c.syntax.enum, c.bg.editor),
    analyze('Enum Members', c.syntax.enumMember, c.bg.editor),
    analyze('Type Params', c.syntax.typeParameter, c.bg.editor),
    analyze('Numbers', c.syntax.number, c.bg.editor),
    analyze('Strings', c.syntax.string, c.bg.editor),
    analyze('String Escape', c.syntax.stringEscape, c.bg.editor), // \n, \t, etc.
    analyze('Constants', c.syntax.constant, c.bg.editor),
    analyze('Regexp', c.syntax.regexp, c.bg.editor),
    analyze('Tags', c.syntax.tag, c.bg.editor),
    analyze('Attributes', c.syntax.attribute, c.bg.editor),
    analyze('Decorators', c.syntax.decorator, c.bg.editor),
    analyze('Links', c.syntax.link, c.bg.editor),
    analyze('Punctuation', c.syntax.punctuation, c.bg.editor),
    analyze('Macros', c.syntax.macro, c.bg.editor),
    analyze('Structs', c.syntax.struct, c.bg.editor),
    // Invalid/Deprecated
    analyze('Invalid', c.syntax.invalid, c.bg.editor),
    analyze('Deprecated', c.syntax.deprecated, c.bg.editor),
    // Support (framework/library)
    analyze('Support Func', c.syntax.supportFunction, c.bg.editor),
    // Storage modifiers
    analyze('Storage Mod', c.syntax.storageModifier, c.bg.editor),
    // Markup (Markdown, etc.)
    analyze('Markup Heading', c.syntax.markupHeading, c.bg.editor),
    analyze('Markup Bold', c.syntax.markupBold, c.bg.editor),
    analyze('Markup Italic', c.syntax.markupItalic, c.bg.editor),
    analyze('Markup Code', c.syntax.markupCode, c.bg.editor),
    analyze('Markup Quote', c.syntax.markupQuote, c.bg.editor),
  ], LABELS.sectionSyntax, expectedPolarity));

  // Selected Text - tests readability when code is selected or highlighted
  // If foreground override is defined, VS Code uses it instead of syntax colors
  const selectedTextResults: ColorResult[] = [];

  // Selection: if selectionForeground is defined, it overrides all syntax colors
  if (!c.ui.selectionForeground.fallback && c.ui.selectionForeground.color) {
    selectedTextResults.push(analyze('Selection', c.ui.selectionForeground, c.bg.selection));
  } else {
    // No override - test key syntax colors against selection background
    selectedTextResults.push(analyze('Sel:Variable', c.syntax.variable, c.bg.selection));
    selectedTextResults.push(analyze('Sel:Keyword', c.syntax.keyword, c.bg.selection));
    selectedTextResults.push(analyze('Sel:String', c.syntax.string, c.bg.selection));
    selectedTextResults.push(analyze('Sel:Comment', c.syntax.comment, c.bg.selection));
  }

  // Word highlight: symbol occurrences
  if (!c.ui.wordHighlightForeground.fallback && c.ui.wordHighlightForeground.color) {
    selectedTextResults.push(analyze('Word Highl', c.ui.wordHighlightForeground, c.bg.wordHighlight));
  } else {
    selectedTextResults.push(analyze('Highl:Var', c.syntax.variable, c.bg.wordHighlight));
  }

  // Word highlight strong: write occurrences
  if (!c.ui.wordHighlightStrongForeground.fallback && c.ui.wordHighlightStrongForeground.color) {
    selectedTextResults.push(analyze('Write Highl', c.ui.wordHighlightStrongForeground, c.bg.wordHighlightStrong));
  }

  // Word highlight text: text search occurrences
  if (!c.ui.wordHighlightTextForeground.fallback && c.ui.wordHighlightTextForeground.color) {
    selectedTextResults.push(analyze('Text Highl', c.ui.wordHighlightTextForeground, c.bg.wordHighlightText));
  }

  // Find match: current search match
  if (!c.ui.findMatchForeground.fallback && c.ui.findMatchForeground.color) {
    selectedTextResults.push(analyze('Find Match', c.ui.findMatchForeground, c.bg.findMatchActive));
  } else {
    selectedTextResults.push(analyze('Find:Var', c.syntax.variable, c.bg.findMatchActive));
  }

  // Find match highlight: other search matches
  if (!c.ui.findMatchHighlightForeground.fallback && c.ui.findMatchHighlightForeground.color) {
    selectedTextResults.push(analyze('Find Other', c.ui.findMatchHighlightForeground, c.bg.findMatch));
  }

  // Inactive selection (window unfocused)
  selectedTextResults.push(analyze('Inact:Var', c.syntax.variable, c.bg.selectionInactive));

  // Selection highlight (other occurrences of selected text)
  selectedTextResults.push(analyze('SelHigh:Var', c.syntax.variable, c.bg.selectionHighlight));

  // Word highlight text (text search occurrences)
  selectedTextResults.push(analyze('TextHigh:Var', c.syntax.variable, c.bg.wordHighlightText));

  // Find in selection range
  selectedTextResults.push(analyze('FindRange', c.syntax.variable, c.bg.findRange));

  // Ghost text on selection (edge case: Copilot suggestion while text selected)
  selectedTextResults.push(analyze('Ghost+Sel', c.ui.ghostText, c.bg.selection));

  allStats.push(printSection(selectedTextResults, LABELS.sectionSelected, expectedPolarity));

  // Navigation Highlights - Go to Definition, Go to Symbol, Quick Open
  allStats.push(printSection([
    analyze('Range:Var', c.syntax.variable, c.bg.rangeHighlight),
    analyze('Range:Keyword', c.syntax.keyword, c.bg.rangeHighlight),
    analyze('Range:String', c.syntax.string, c.bg.rangeHighlight),
    analyze('Range:Comment', c.syntax.comment, c.bg.rangeHighlight),
    analyze('Symbol:Var', c.syntax.variable, c.bg.symbolHighlight),
    analyze('Symbol:Keyword', c.syntax.keyword, c.bg.symbolHighlight),
    analyze('Symbol:String', c.syntax.string, c.bg.symbolHighlight),
    analyze('Symbol:Comment', c.syntax.comment, c.bg.symbolHighlight),
  ], LABELS.sectionNavHighlights, expectedPolarity));

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
    analyze('Line Numbers', c.ui.lineNumber, c.bg.editor),
    analyze('Line Active', c.ui.lineNumberActive, c.bg.editor),
    analyze('Line Num Dimmed', c.ui.lineNumberDimmed, c.bg.editor),
    analyze('Ghost Text', c.ui.ghostText, c.bg.editor),
    analyze('Hint', c.ui.hint, c.bg.editor),
    analyze('Inlay Hints', c.ui.inlayHint, c.bg.inlayHint),
    analyze('Inlay Type', c.ui.inlayHintType, c.bg.inlayHint),
    analyze('Inlay Param', c.ui.inlayHintParam, c.bg.inlayHint),
    analyze('Code Lens', c.ui.codeLens, c.bg.editor),
    analyze('Lightbulb', c.ui.lightBulb, c.bg.editor),
    analyze('Lightbulb Fix', c.ui.lightBulbAutoFix, c.bg.editor),
    analyze('Lightbulb AI', c.ui.lightBulbAi, c.bg.editor),
    analyze('Fold Control', c.ui.foldControl, c.bg.editor),
    analyze('Fold Placeholder', c.ui.foldPlaceholder, c.bg.editor),
    analyze('Whitespace', c.ui.whitespace, c.bg.editor),
    analyze('Ruler', c.ui.ruler, c.bg.editor),
    analyze('Link Active', c.ui.editorLinkActive, c.bg.editor),
  ], LABELS.sectionEditorUi, expectedPolarity));

  // UI - Workbench
  allStats.push(printSection([
    analyze('Title Bar', c.ui.titleBar, c.bg.titleBar),
    analyze('Title Inactive', c.ui.titleBarInactive, c.bg.titleBarInactive),
    analyze('Command Center', c.ui.commandCenter, c.bg.commandCenter),
    analyze('Cmd Ctr Active', c.ui.commandCenterActive, c.bg.commandCenter),
    analyze('Cmd Ctr Inact', c.ui.commandCenterInactive, c.bg.commandCenter),
    analyze('Tab Active', c.ui.tabActive, c.bg.tabBar),
    analyze('Tab Selected', c.ui.tabSelected, c.bg.tabBar),
    analyze('Tab Inactive', c.ui.tabInactive, c.bg.tabBar),
    analyze('Tab Unfocused', c.ui.tabUnfocused, c.bg.tabBar),
    analyze('Tab Unfoc Inact', c.ui.tabUnfocusedInactive, c.bg.tabBar),
    analyze('Tab Hover', c.ui.tabHover, c.bg.tabBar),
    analyze('Tab Unfoc Hover', c.ui.tabUnfocusedHover, c.bg.tabBar),
    analyze('Breadcrumb', c.ui.breadcrumb, c.bg.breadcrumb),
    analyze('Sidebar', c.ui.sidebarText, c.bg.sidebar),
    analyze('Sidebar Title', c.ui.sidebarTitle, c.bg.sidebar),
    analyze('Activity Bar', c.ui.activityBar, c.bg.activityBar),
    analyze('Activity Inact', c.ui.activityBarInactive, c.bg.activityBar),
    analyze('Act Top', c.ui.activityBarTop, c.bg.activityBar),
    analyze('Act Top Inact', c.ui.activityBarTopInactive, c.bg.activityBar),
    analyze('Status Bar', c.ui.statusBarText, c.bg.statusBar),
    analyze('Status Debug', c.ui.statusBarDebug, c.bg.statusBar),
    analyze('Status NoFolder', c.ui.statusBarNoFolder, c.bg.statusBar),
    analyze('Status Error', c.ui.statusBarItemError, c.bg.statusBarItemError),
    analyze('Status Warning', c.ui.statusBarItemWarning, c.bg.statusBarItemWarning),
    analyze('Status Remote', c.ui.statusBarItemRemote, c.bg.statusBarItemRemote),
    analyze('Status Promi', c.ui.statusBarItemProminent, c.bg.statusBarItemProminent),
    analyze('Status Offline', c.ui.statusBarItemOffline, c.bg.statusBarItemOffline),
    analyze('Status Hover', c.ui.statusBarItemHover, c.bg.statusBar),
    analyze('Panel Active', c.ui.panelTitle, c.bg.panel),
    analyze('Panel Inactive', c.ui.panelTitleInactive, c.bg.panel),
    analyze('Panel Badge', c.ui.panelTitleBadge, c.bg.panel),
    analyze('Terminal', c.ui.terminal, c.bg.terminal),
    analyze('Input', c.ui.input, c.bg.input),
    analyze('Placeholder', c.ui.inputPlaceholder, c.bg.input),
    analyze('Input Error', c.ui.inputValidationError, c.bg.inputValidationError),
    analyze('Input Warning', c.ui.inputValidationWarning, c.bg.inputValidationWarning),
    analyze('Input Info', c.ui.inputValidationInfo, c.bg.inputValidationInfo),
    analyze('Checkbox', c.ui.checkbox, c.bg.checkbox),
    analyze('List Selected', c.ui.listSelection, c.bg.listSelection),
    analyze('List Sel Icon', c.ui.listSelectionIcon, c.bg.listSelection),
    analyze('List Inact Icon', c.ui.listInactiveSelectionIcon, c.bg.listInactiveSelection),
    analyze('List Hover', c.ui.listHover, c.bg.listHover),
    analyze('List Focus', c.ui.listFocus, c.bg.listFocus),
    analyze('List Invalid', c.ui.listInvalidItem, c.bg.sidebar),
    analyze('List Deemph', c.ui.listDeemphasized, c.bg.sidebar),
    analyze('Menubar Select', c.ui.menubarSelection, c.bg.menu),
    analyze('Link Active', c.ui.textLinkActive, c.bg.editor),
  ], LABELS.sectionWorkbenchUi, expectedPolarity));

  // Widgets
  allStats.push(printSection([
    analyze('Find/Replace', c.widgets.editorWidget, c.bg.editorWidget),
    analyze('Action List', c.widgets.actionList, c.bg.editorWidget),
    analyze('Action Focus', c.widgets.actionListFocus, c.bg.editorWidget),
    analyze('Autocomplete', c.widgets.suggest, c.bg.suggest),
    analyze('Suggest Select', c.widgets.suggestSelected, c.bg.suggestSelected),
    analyze('Suggest Sel Icon', c.widgets.suggestSelectedIcon, c.bg.suggestSelected),
    analyze('Suggest Match', c.widgets.suggestHighlight, c.bg.suggest),
    analyze('Suggest Foc Match', c.widgets.suggestFocusHighlight, c.bg.suggestSelected),
    analyze('Hover Tooltip', c.widgets.hover, c.bg.hover),
    analyze('Hover Highlight', c.widgets.hoverHighlight, c.bg.hover),
    analyze('Preformat Text', c.ui.textPreformat, c.bg.hover), // code in tooltips
    analyze('Command Palette', c.widgets.quickInput, c.bg.quickInput),
    analyze('Palette Focus', c.widgets.quickInputListFocus, c.bg.quickInputListFocus),
    analyze('Palette Foc Icon', c.widgets.quickInputListFocusIcon, c.bg.quickInputListFocus),
    analyze('Picker Group', c.ui.pickerGroup, c.bg.quickInput),
    analyze('Menu', c.widgets.menu, c.bg.menu),
    analyze('Menu Selection', c.widgets.menuSelection, c.bg.menu),
    analyze('Notification', c.widgets.notification, c.bg.notification),
    analyze('Notif Link', c.widgets.notificationLink, c.bg.notification),
    analyze('Notif Header', c.widgets.notificationHeader, c.bg.notification),
    analyze('Notif Error', c.widgets.notificationErrorIcon, c.bg.notification),
    analyze('Notif Warning', c.widgets.notificationWarningIcon, c.bg.notification),
    analyze('Notif Info', c.widgets.notificationInfoIcon, c.bg.notification),
    analyze('Peek View', c.widgets.peekView, c.bg.peekView),
    analyze('Inline Chat', c.widgets.inlineChat, c.bg.inlineChat),
    analyze('Chat Placeholder', c.widgets.inlineChatPlaceholder, c.bg.inlineChat),
    analyze('Suggest Status', c.widgets.suggestWidgetStatus, c.bg.suggest),
  ], LABELS.sectionWidgets, expectedPolarity));

  // Git Decorations
  allStats.push(printSection([
    analyze('Added', c.git.added, c.bg.sidebar),
    analyze('Modified', c.git.modified, c.bg.sidebar),
    analyze('Deleted', c.git.deleted, c.bg.sidebar),
    analyze('Renamed', c.git.renamed, c.bg.sidebar),
    analyze('Untracked', c.git.untracked, c.bg.sidebar),
    analyze('Ignored', c.git.ignored, c.bg.sidebar),
    analyze('Conflict', c.git.conflict, c.bg.sidebar),
    analyze('Submodule', c.git.submodule, c.bg.sidebar),
    analyze('Stage Modified', c.git.stageModified, c.bg.sidebar),
    analyze('Stage Deleted', c.git.stageDeleted, c.bg.sidebar),
  ], LABELS.sectionGit, expectedPolarity));

  // Brackets
  allStats.push(printSection([
    analyze('Bracket 1', c.brackets.bracket1, c.bg.editor),
    analyze('Bracket 2', c.brackets.bracket2, c.bg.editor),
    analyze('Bracket 3', c.brackets.bracket3, c.bg.editor),
    analyze('Bracket 4', c.brackets.bracket4, c.bg.editor),
    analyze('Bracket 5', c.brackets.bracket5, c.bg.editor),
    analyze('Bracket 6', c.brackets.bracket6, c.bg.editor),
    analyze('Unexpected', c.brackets.unexpected, c.bg.editor),
    analyze('Match BG', c.fg, c.bg.bracketMatch), // Text on bracket match highlight
  ], LABELS.sectionBrackets, expectedPolarity));

  // Terminal ANSI colors
  const terminalResults: ColorResult[] = [
    analyze('Black', c.terminal.ansiBlack, c.bg.terminal),
    analyze('Red', c.terminal.ansiRed, c.bg.terminal),
    analyze('Green', c.terminal.ansiGreen, c.bg.terminal),
    analyze('Yellow', c.terminal.ansiYellow, c.bg.terminal),
    analyze('Blue', c.terminal.ansiBlue, c.bg.terminal),
    analyze('Magenta', c.terminal.ansiMagenta, c.bg.terminal),
    analyze('Cyan', c.terminal.ansiCyan, c.bg.terminal),
    analyze('White', c.terminal.ansiWhite, c.bg.terminal),
    analyze('Bright Black', c.terminal.ansiBrightBlack, c.bg.terminal),
    analyze('Bright Red', c.terminal.ansiBrightRed, c.bg.terminal),
    analyze('Bright Green', c.terminal.ansiBrightGreen, c.bg.terminal),
    analyze('Bright Yellow', c.terminal.ansiBrightYellow, c.bg.terminal),
    analyze('Bright Blue', c.terminal.ansiBrightBlue, c.bg.terminal),
    analyze('Bright Magenta', c.terminal.ansiBrightMagenta, c.bg.terminal),
    analyze('Bright Cyan', c.terminal.ansiBrightCyan, c.bg.terminal),
    analyze('Bright White', c.terminal.ansiBrightWhite, c.bg.terminal),
  ];
  // Terminal selection foreground (if defined, overrides ANSI colors when selected)
  if (!c.ui.terminalSelection.fallback && c.ui.terminalSelection.color) {
    terminalResults.push(analyze('Term Select', c.ui.terminalSelection, c.bg.terminalSelection));
  }
  // Terminal find match - test terminal foreground against find backgrounds
  terminalResults.push(analyze('Find Match', c.ui.terminal, c.bg.terminalFindMatch));
  terminalResults.push(analyze('Find Other', c.ui.terminal, c.bg.terminalFindMatchHighlight));
  allStats.push(printSection(terminalResults, LABELS.sectionTerminal, expectedPolarity));

  // Buttons & Badges
  allStats.push(printSection([
    analyze('Button', c.buttons.button, c.bg.button),
    analyze('Button 2nd', c.buttons.buttonSecondary, c.bg.buttonSecondary),
    analyze('Ext Button', c.buttons.extensionButton, c.bg.extensionButton),
    analyze('Badge', c.buttons.badge, c.bg.badge),
    analyze('Activity Badge', c.buttons.activityBarBadge, c.bg.activityBarBadge),
    analyze('Act Warn Badge', c.buttons.activityWarningBadge, c.bg.activityWarningBadge),
    analyze('Act Err Badge', c.buttons.activityErrorBadge, c.bg.activityErrorBadge),
    analyze('Dropdown', c.buttons.dropdown, c.bg.dropdown),
  ], LABELS.sectionButtons, expectedPolarity));

  // Debug (tokens appear in debug sidebar/variables view)
  allStats.push(printSection([
    analyze('Token Name', c.debug.tokenName, c.bg.sidebar),
    analyze('Token Value', c.debug.tokenValue, c.bg.sidebar),
    analyze('Token String', c.debug.tokenString, c.bg.sidebar),
    analyze('Token Number', c.debug.tokenNumber, c.bg.sidebar),
    analyze('Token Boolean', c.debug.tokenBoolean, c.bg.sidebar),
    analyze('Token Error', c.debug.tokenError, c.bg.sidebar),
    analyze('Token Type', c.debug.tokenType, c.bg.sidebar),
    analyze('Inline Value', c.debug.inlineValue, c.bg.editor),
    analyze('Exception', c.debug.exceptionLabel, c.bg.sidebar),
    analyze('State Label', c.debug.stateLabel, c.bg.sidebar),
  ], LABELS.sectionDebug, expectedPolarity));

  // Debug Context - syntax colors on debug highlighting backgrounds
  allStats.push(printSection([
    analyze('Stack:Variable', c.syntax.variable, c.bg.stackFrame),
    analyze('Stack:Keyword', c.syntax.keyword, c.bg.stackFrame),
    analyze('Stack:String', c.syntax.string, c.bg.stackFrame),
    analyze('Focus:Variable', c.syntax.variable, c.bg.focusedStackFrame),
    analyze('Focus:Keyword', c.syntax.keyword, c.bg.focusedStackFrame),
  ], LABELS.sectionDebugContext, expectedPolarity));

  // Linked Editing - HTML tag pairs, bracket linking
  allStats.push(printSection([
    analyze('Linked:Variable', c.syntax.variable, c.bg.linkedEditing),
    analyze('Linked:Tag', c.syntax.tag, c.bg.linkedEditing),
  ], LABELS.sectionLinkedEditing, expectedPolarity));

  // Links & Highlights
  allStats.push(printSection([
    analyze('Text Link', c.links.textLink, c.bg.editor),
    analyze('List Highlight', c.links.listHighlight, c.bg.sidebar),
    analyze('List Foc Highl', c.links.listFocusHighlight, c.bg.listFocus),
    analyze('List Inactive', c.links.listInactiveSelection, c.bg.listInactiveSelection),
    analyze('List Error', c.links.listError, c.bg.sidebar),
    analyze('List Warning', c.links.listWarning, c.bg.sidebar),
  ], LABELS.sectionLinks, expectedPolarity));

  // Misc UI
  allStats.push(printSection([
    analyze('Section Header', c.misc.sidebarSectionHeader, c.bg.sidebar),
    analyze('Panel Section', c.misc.panelSectionHeader, c.bg.panel),
    analyze('Keybinding', c.misc.keybindingLabel, c.bg.keybindingLabel),
    analyze('Banner', c.misc.banner, c.bg.banner),
    analyze('Banner Icon', c.misc.bannerIcon, c.bg.banner),
    analyze('Peek Title', c.misc.peekViewTitle, c.bg.peekView),
    analyze('Peek Desc', c.misc.peekViewDescription, c.bg.peekView),
    analyze('Peek File', c.misc.peekViewFile, c.bg.peekView),
    analyze('Peek Select', c.misc.peekViewSelection, c.bg.peekViewSelection),
    analyze('Problems Error', c.misc.problemsError, c.bg.sidebar),
    analyze('Problems Warn', c.misc.problemsWarning, c.bg.sidebar),
    analyze('Problems Info', c.misc.problemsInfo, c.bg.sidebar),
    analyze('Search Info', c.misc.searchResultsInfo, c.bg.sidebar),
    analyze('Description', c.misc.description, c.bg.editor),
    analyze('Disabled', c.misc.disabled, c.bg.editor),
    analyze('Error Text', c.misc.errorFg, c.bg.editor),
    analyze('Git Blame', c.misc.gitBlame, c.bg.editor),
    analyze('Editor Placeholder', c.misc.editorPlaceholder, c.bg.editor),
    analyze('Term Cmd Guide', c.misc.terminalCommandGuide, c.bg.terminal),
    analyze('Term Init Hint', c.misc.terminalInitialHint, c.bg.terminal),
    analyze('Walkthrough Title', c.misc.walkthroughStepTitle, c.bg.editor),
    analyze('Welcome Progress', c.misc.welcomeProgress, c.bg.editor),
    analyze('Profile Badge', c.misc.profileBadge, c.bg.activityBar),
  ], LABELS.sectionMisc, expectedPolarity));

  // Diff Editor - test key syntax colors against diff backgrounds
  allStats.push(printSection([
    // Inserted text (green background typically)
    analyze('Ins:Variable', c.syntax.variable, c.bg.diffInserted),
    analyze('Ins:Keyword', c.syntax.keyword, c.bg.diffInserted),
    analyze('Ins:String', c.syntax.string, c.bg.diffInserted),
    analyze('Ins:Comment', c.syntax.comment, c.bg.diffInserted),
    // Inserted line (full line highlight)
    analyze('InsLine:Var', c.syntax.variable, c.bg.diffInsertedLine),
    // Removed text (red background typically)
    analyze('Rem:Variable', c.syntax.variable, c.bg.diffRemoved),
    analyze('Rem:Keyword', c.syntax.keyword, c.bg.diffRemoved),
    analyze('Rem:String', c.syntax.string, c.bg.diffRemoved),
    analyze('Rem:Comment', c.syntax.comment, c.bg.diffRemoved),
    // Removed line (full line highlight)
    analyze('RemLine:Var', c.syntax.variable, c.bg.diffRemovedLine),
    // Unchanged region (collapsed diff)
    analyze('Unchanged', c.misc.diffUnchangedRegion, c.bg.editor),
  ], LABELS.sectionDiff, expectedPolarity));

  // Merge Conflicts - test key syntax colors against merge backgrounds
  allStats.push(printSection([
    // Current changes (your changes)
    analyze('Curr:Variable', c.syntax.variable, c.bg.mergeCurrentContent),
    analyze('Curr:Keyword', c.syntax.keyword, c.bg.mergeCurrentContent),
    analyze('Curr:String', c.syntax.string, c.bg.mergeCurrentContent),
    // Incoming changes (their changes)
    analyze('Inc:Variable', c.syntax.variable, c.bg.mergeIncomingContent),
    analyze('Inc:Keyword', c.syntax.keyword, c.bg.mergeIncomingContent),
    analyze('Inc:String', c.syntax.string, c.bg.mergeIncomingContent),
    // Common ancestor
    analyze('Common:Var', c.syntax.variable, c.bg.mergeCommonContent),
  ], LABELS.sectionMerge, expectedPolarity));

  // Cursors - visibility of editor and terminal cursors
  allStats.push(printSection([
    analyze('Editor Cursor', c.cursor.editor, c.bg.editor),
    analyze('Block Text', c.cursor.editorBlock, c.bg.cursorBlock), // text inside block cursor
    analyze('Multi Primary', c.cursor.editorMultiPrimary, c.bg.editor),
    analyze('Multi Secondary', c.cursor.editorMultiSecondary, c.bg.editor),
    analyze('Terminal Cursor', c.cursor.terminal, c.bg.terminal),
    analyze('Term Block Text', c.cursor.terminalBlock, c.bg.terminalCursorBlock), // text inside terminal block cursor
  ], LABELS.sectionCursors, expectedPolarity));

  // Sticky Scroll - syntax colors on sticky scroll header background
  allStats.push(printSection([
    analyze('Sticky:Variable', c.syntax.variable, c.bg.stickyScroll),
    analyze('Sticky:Keyword', c.syntax.keyword, c.bg.stickyScroll),
    analyze('Sticky:Function', c.syntax.function, c.bg.stickyScroll),
    analyze('Sticky:String', c.syntax.string, c.bg.stickyScroll),
    analyze('Sticky:Comment', c.syntax.comment, c.bg.stickyScroll),
  ], LABELS.sectionStickyScroll, expectedPolarity));

  // Peek View Editor - syntax colors in peek view editor pane
  allStats.push(printSection([
    analyze('Peek:Variable', c.syntax.variable, c.bg.peekViewEditor),
    analyze('Peek:Keyword', c.syntax.keyword, c.bg.peekViewEditor),
    analyze('Peek:Function', c.syntax.function, c.bg.peekViewEditor),
    analyze('Peek:String', c.syntax.string, c.bg.peekViewEditor),
    analyze('Peek:Comment', c.syntax.comment, c.bg.peekViewEditor),
  ], LABELS.sectionPeekEditor, expectedPolarity));

  // Search Editor - syntax in search results context
  allStats.push(printSection([
    analyze('Search:Variable', c.syntax.variable, c.bg.searchEditorFindMatch),
    analyze('Search:Keyword', c.syntax.keyword, c.bg.searchEditorFindMatch),
    analyze('Search:String', c.syntax.string, c.bg.searchEditorFindMatch),
  ], LABELS.sectionSearchEditor, expectedPolarity));

  // Input Controls - buttons, toggles, radios
  allStats.push(printSection([
    analyze('Option Active', c.inputs.optionActive, c.bg.input),
    analyze('Radio Active', c.inputs.radioActive, c.bg.editor),
    analyze('Radio Inactive', c.inputs.radioInactive, c.bg.editor),
    analyze('Checkbox Disabled', c.inputs.checkboxDisabled, c.bg.checkbox),
  ], LABELS.sectionInputControls, expectedPolarity));

  // SCM Graph - hover labels (graph lines removed as decorative)
  allStats.push(printSection([
    analyze('Hover Label', c.scm.historyHoverLabel, c.bg.sidebar),
    analyze('Hover Add', c.scm.historyHoverAdditions, c.bg.sidebar),
    analyze('Hover Del', c.scm.historyHoverDeletions, c.bg.sidebar),
  ], LABELS.sectionScm, expectedPolarity));

  // Chat & AI - Copilot and inline chat
  allStats.push(printSection([
    analyze('Chat Avatar', c.chat.avatar, c.bg.sidebar),
    analyze('Lines Added', c.chat.linesAdded, c.bg.editor),
    analyze('Lines Removed', c.chat.linesRemoved, c.bg.editor),
    analyze('Slash Command', c.chat.slashCommand, c.bg.editor),
    analyze('Edited File', c.chat.editedFile, c.bg.sidebar),
  ], LABELS.sectionChat, expectedPolarity));

  // Testing - coverage and test results
  allStats.push(printSection([
    analyze('Coverage Badge', c.testing.coverageBadge, c.bg.editor),
    analyze('Test Msg Info', c.testing.messageInfo, c.bg.editor),
  ], LABELS.sectionTesting, expectedPolarity));

  // Debug Console - frequently read output
  allStats.push(printSection([
    analyze('Error', c.debugConsole.error, c.bg.panel),
    analyze('Warning', c.debugConsole.warning, c.bg.panel),
    analyze('Info', c.debugConsole.info, c.bg.panel),
    analyze('Source', c.debugConsole.source, c.bg.panel),
  ], LABELS.sectionDebugConsole, expectedPolarity));

  // Symbol Icons - appear in autocomplete, outline, breadcrumbs
  allStats.push(printSection([
    analyze('Array', c.symbolIcons.array, c.bg.suggest),
    analyze('Boolean', c.symbolIcons.boolean, c.bg.suggest),
    analyze('Class', c.symbolIcons.class, c.bg.suggest),
    analyze('Constant', c.symbolIcons.constant, c.bg.suggest),
    analyze('Constructor', c.symbolIcons.ctor, c.bg.suggest),
    analyze('Enum', c.symbolIcons.enum, c.bg.suggest),
    analyze('Enum Member', c.symbolIcons.enumMember, c.bg.suggest),
    analyze('Event', c.symbolIcons.event, c.bg.suggest),
    analyze('Field', c.symbolIcons.field, c.bg.suggest),
    analyze('File', c.symbolIcons.file, c.bg.suggest),
    analyze('Folder', c.symbolIcons.folder, c.bg.suggest),
    analyze('Function', c.symbolIcons.function, c.bg.suggest),
    analyze('Interface', c.symbolIcons.interface, c.bg.suggest),
    analyze('Key', c.symbolIcons.key, c.bg.suggest),
    analyze('Keyword', c.symbolIcons.keyword, c.bg.suggest),
    analyze('Method', c.symbolIcons.method, c.bg.suggest),
    analyze('Module', c.symbolIcons.module, c.bg.suggest),
    analyze('Namespace', c.symbolIcons.namespace, c.bg.suggest),
    analyze('Null', c.symbolIcons.null, c.bg.suggest),
    analyze('Number', c.symbolIcons.number, c.bg.suggest),
    analyze('Object', c.symbolIcons.object, c.bg.suggest),
    analyze('Operator', c.symbolIcons.operator, c.bg.suggest),
    analyze('Package', c.symbolIcons.package, c.bg.suggest),
    analyze('Property', c.symbolIcons.property, c.bg.suggest),
    analyze('Reference', c.symbolIcons.reference, c.bg.suggest),
    analyze('Snippet', c.symbolIcons.snippet, c.bg.suggest),
    analyze('String', c.symbolIcons.string, c.bg.suggest),
    analyze('Struct', c.symbolIcons.struct, c.bg.suggest),
    analyze('Text', c.symbolIcons.text, c.bg.suggest),
    analyze('Type Param', c.symbolIcons.typeParameter, c.bg.suggest),
    analyze('Unit', c.symbolIcons.unit, c.bg.suggest),
    analyze('Variable', c.symbolIcons.variable, c.bg.suggest),
  ], LABELS.sectionSymbolIcons, expectedPolarity));

  // Settings Editor
  allStats.push(printSection([
    analyze('Header', c.settings.header, c.bg.editor),
    analyze('Text Input', c.settings.textInput, c.bg.input),
    analyze('Number Input', c.settings.numberInput, c.bg.input),
    analyze('Checkbox', c.settings.checkbox, c.bg.checkbox),
    analyze('Dropdown', c.settings.dropdown, c.bg.dropdown),
  ], LABELS.sectionSettings, expectedPolarity));

  // Charts - text labels (data colors removed as decorative)
  allStats.push(printSection([
    analyze('Foreground', c.charts.foreground, c.bg.editor),
  ], LABELS.sectionCharts, expectedPolarity));

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

APCA Thresholds:
  Lc 90+ Fluent     Lc 45+ Large
  Lc 75+ Body       Lc 30+ Non-text
  Lc 60+ Content    <30   FAIL

Output: ? = fallback color, ~ = expected dim
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
