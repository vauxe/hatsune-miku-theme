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

import * as path from 'path';

// Import from modules
import {
  OUTPUT_WIDTH,
  COL_NAME_WIDTH,
  COL_COLOR_WIDTH,
  BG_KEYS,
  LABELS,
  EXPECTED_DIM_ELEMENTS,
  ADJACENCY_PAIRS,
  SYMBOL_DISCRIMINATION_PAIRS,
} from './readability-constants';
import type { BgKeyName } from './readability-constants';

import {
  isValidHex,
  stripAlpha,
  extractAlpha,
  blendAlpha,
  getAPCAContrast,
  analyzeAPCA,
  deltaE00Hex,
  getDistinctionLevel,
} from './readability-color';

import {
  loadTheme,
  getThemeName,
  extractColors,
} from './readability-theme';

import type {
  Polarity,
  ColorValue,
  ColorSource,
  ColorResult,
  Stats,
  DistinctionPair,
  DistinctionSkippedPair,
  DistinctionStats,
  SectionData,
  JsonColorResult,
  JsonOutput,
  OutputFormat,
} from './readability-types';

// =============================================================================
// ANALYSIS HELPERS
// =============================================================================

function analyze(name: string, fgValue: ColorValue, bg: string, bgKey = ''): ColorResult {
  const fg = fgValue.color;
  const alpha = extractAlpha(fg);
  const baseColor = stripAlpha(fg);
  const effectiveColor = alpha < 1 ? blendAlpha(baseColor, bg, alpha) : baseColor;
  const result = getAPCAContrast(effectiveColor, bg);
  const alphaStr = alpha < 1 ? `${Math.round(alpha * 100)}%` : undefined;
  return {
    name,
    color: effectiveColor,
    bgColor: bg,
    bgKey,
    lc: result.lc,
    analysis: analyzeAPCA(result),
    alpha: alphaStr,
    fallback: fgValue.fallback,
    expectedDim: EXPECTED_DIM_ELEMENTS.has(name),
    source: fgValue.source,
  };
}

function formatSourceKey(source?: ColorSource): string {
  if (!source) return '';
  switch (source.type) {
    case 'workbench':
      return source.key;
    case 'semantic':
      return `semanticTokenColors.${source.key}`;
    case 'textmate':
      return source.semanticKey
        ? `tokenColors: ${source.key} (→ ${source.semanticKey})`
        : `tokenColors: ${source.key}`;
  }
}

function getSourceKeyRaw(source?: ColorSource): string {
  if (!source) return '';
  switch (source.type) {
    case 'workbench':
      return source.key;
    case 'semantic':
      return source.key;
    case 'textmate':
      return source.key;
  }
}

function toJsonColorResult(r: ColorResult): JsonColorResult {
  return {
    name: r.name,
    foreground: {
      color: r.color,
      key: getSourceKeyRaw(r.source),
      keyType: r.source?.type ?? 'workbench',
    },
    background: {
      color: r.bgColor,
      key: r.bgKey,
    },
    lc: Math.round(r.lc * 10) / 10,
    level: r.analysis.level,
    pass: r.analysis.pass,
    fallback: r.fallback,
    expectedDim: r.expectedDim ?? false,
  };
}

function computeStats(results: ColorResult[], expectedPolarity: Polarity): Stats {
  const stats: Stats = { pass: 0, large: 0, expectedDim: 0, fail: 0, missing: 0, total: results.length, results };

  for (const r of results) {
    if (r.fallback) {
      stats.missing++;
    } else if (r.analysis.pass) {
      stats.pass++;
    } else if (r.analysis.level === 'Large' || r.analysis.level === 'Non-Text') {
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
// DISTINCTION ANALYSIS
// =============================================================================

/**
 * Analyze color distinction between commonly adjacent syntax elements.
 * Handles transparent colors by compositing against background before comparison.
 */
function analyzeDistinction(
  syntax: Record<string, ColorValue>,
  comments: ColorValue,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  // Add comment to syntax for analysis
  const colors: Record<string, ColorValue> = { ...syntax, comment: comments };

  for (const [name1, name2] of ADJACENCY_PAIRS) {
    const cv1 = colors[name1];
    const cv2 = colors[name2];

    if (!cv1 || !cv2) {
      skipped.push({ name1, name2, reason: 'missing' });
      continue;
    }

    if (cv1.fallback || cv2.fallback) {
      skipped.push({ name1, name2, reason: 'fallback' });
      continue;
    }

    // deltaE00Hex handles alpha compositing against bg internally
    const dE = deltaE00Hex(cv1.color, cv2.color, bg);

    if (dE === null) {
      skipped.push({ name1, name2, reason: 'invalid' });
      continue;
    }

    const { level, icon, pass } = getDistinctionLevel(dE);
    pairs.push({
      name1,
      name2,
      color1: cv1.color,
      color2: cv2.color,
      key1: cv1.source?.key ?? name1,
      key2: cv2.source?.key ?? name2,
      deltaE: dE,
      level,
      icon,
      pass,
    });
  }

  return { pairs: pairs.sort((a, b) => a.deltaE - b.deltaE), skipped };
}

/**
 * Analyze symbol discrimination using symbol icon colors
 * These are the colors shown in autocomplete, outline, breadcrumbs, etc.
 */
function analyzeSymbolDiscrimination(
  symbolIcons: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of SYMBOL_DISCRIMINATION_PAIRS) {
    const cv1 = symbolIcons[name1];
    const cv2 = symbolIcons[name2];

    if (!cv1 || !cv2) {
      skipped.push({ name1, name2, reason: 'missing' });
      continue;
    }

    if (cv1.fallback || cv2.fallback) {
      skipped.push({ name1, name2, reason: 'fallback' });
      continue;
    }

    const dE = deltaE00Hex(cv1.color, cv2.color, bg);

    if (dE === null) {
      skipped.push({ name1, name2, reason: 'invalid' });
      continue;
    }

    const { level, icon, pass } = getDistinctionLevel(dE);
    pairs.push({
      name1,
      name2,
      color1: cv1.color,
      color2: cv2.color,
      key1: cv1.source?.key ?? name1,
      key2: cv2.source?.key ?? name2,
      deltaE: dE,
      level,
      icon,
      pass,
    });
  }

  return { pairs: pairs.sort((a, b) => a.deltaE - b.deltaE), skipped };
}

// =============================================================================
// PRINTING FUNCTIONS
// =============================================================================

function printSection(results: ColorResult[], title: string, expectedPolarity: Polarity): Stats {
  console.log(`\n▌ ${title}`);
  console.log('─'.repeat(OUTPUT_WIDTH));
  console.log(`${LABELS.colName.padEnd(COL_NAME_WIDTH)} ${LABELS.colColor.padEnd(COL_COLOR_WIDTH)} ${LABELS.colApca}`);
  console.log('─'.repeat(OUTPUT_WIDTH));

  for (const r of results) {
    const alphaStr = r.alpha ? `(${r.alpha})` : '';
    const fallbackStr = r.fallback ? '?' : '';
    const dimStr = r.expectedDim ? '~' : '';
    const colorCol = `${r.color}${alphaStr}${fallbackStr}`.padEnd(COL_COLOR_WIDTH);
    const lcStr = r.lc.toFixed(1).padStart(6);
    const levelStr = r.fallback ? `${r.analysis.level}?` : `${r.analysis.level}${dimStr}`;
    console.log(`${r.name.padEnd(COL_NAME_WIDTH)} ${colorCol} Lc ${lcStr} ${r.analysis.icon} ${levelStr}`);

    // Show source key on next line
    const sourceKey = formatSourceKey(r.source);
    if (sourceKey) {
      console.log(`    ↳ ${sourceKey}`);
    }

    if (r.analysis.polarity !== expectedPolarity && !r.fallback) {
      console.log(`    ⚠️ ${LABELS.unexpectedPolarity} ${r.analysis.polarity}`);
    }
  }

  return computeStats(results, expectedPolarity);
}

/**
 * Print color distinction analysis section
 */
function printDistinctionSection(pairs: DistinctionPair[], skipped: DistinctionSkippedPair[]): DistinctionStats {
  console.log(`\n▌ ${LABELS.sectionDistinction}`);
  console.log('─'.repeat(OUTPUT_WIDTH));

  // Header
  const colPair = 22;
  const colDelta = 8;
  console.log(
    'Pair'.padEnd(colPair) +
    'ΔE00'.padStart(colDelta) +
    '   ' +
    'Level'
  );
  console.log('─'.repeat(OUTPUT_WIDTH));

  let pass = 0;
  let warn = 0;
  let fail = 0;

  for (const p of pairs) {
    const pairName = `${p.name1} ↔ ${p.name2}`.substring(0, colPair - 1).padEnd(colPair);
    const deltaStr = p.deltaE.toFixed(1).padStart(colDelta);
    const levelStr = `${p.icon} ${p.level}`;

    console.log(`${pairName}${deltaStr}   ${levelStr}`);

    // Count based on icon to match visual feedback
    if (p.icon === '✅') pass++;
    else if (p.icon === '⚠️') warn++;
    else fail++;
  }

  const totalPairs = ADJACENCY_PAIRS.length;
  if (skipped.length > 0) {
    console.log('─'.repeat(OUTPUT_WIDTH));
    console.log(`⚠️  Skipped (${skipped.length}/${totalPairs}):`);
    const maxList = 12;
    for (const s of skipped.slice(0, maxList)) {
      const pairName = `${s.name1} ↔ ${s.name2}`.substring(0, colPair - 1).padEnd(colPair);
      console.log(`${pairName}${''.padStart(colDelta)}   ⚠️ ${s.reason}`);
    }
    if (skipped.length > maxList) {
      console.log(`... and ${skipped.length - maxList} more skipped pairs`);
    }
  }

  return { total: pairs.length, pass, warn, fail, skipped: skipped.length };
}

/**
 * Print symbol discrimination analysis section
 */
function printSymbolDiscriminationSection(pairs: DistinctionPair[], skipped: DistinctionSkippedPair[]): DistinctionStats {
  console.log(`\n▌ ${LABELS.sectionSymbolDiscrimination}`);
  console.log('─'.repeat(OUTPUT_WIDTH));

  // Header
  const colPair = 22;
  const colDelta = 8;
  console.log(
    'Pair'.padEnd(colPair) +
    'ΔE00'.padStart(colDelta) +
    '   ' +
    'Level'
  );
  console.log('─'.repeat(OUTPUT_WIDTH));

  let pass = 0;
  let warn = 0;
  let fail = 0;

  for (const p of pairs) {
    const pairName = `${p.name1} ↔ ${p.name2}`.substring(0, colPair - 1).padEnd(colPair);
    const deltaStr = p.deltaE.toFixed(1).padStart(colDelta);
    const levelStr = `${p.icon} ${p.level}`;

    console.log(`${pairName}${deltaStr}   ${levelStr}`);

    if (p.icon === '✅') pass++;
    else if (p.icon === '⚠️') warn++;
    else fail++;
  }

  const totalPairs = SYMBOL_DISCRIMINATION_PAIRS.length;
  if (skipped.length > 0) {
    console.log('─'.repeat(OUTPUT_WIDTH));
    console.log(`⚠️  Skipped (${skipped.length}/${totalPairs}):`);
    const maxList = 8;
    for (const s of skipped.slice(0, maxList)) {
      const pairName = `${s.name1} ↔ ${s.name2}`.substring(0, colPair - 1).padEnd(colPair);
      console.log(`${pairName}${''.padStart(colDelta)}   ⚠️ ${s.reason}`);
    }
    if (skipped.length > maxList) {
      console.log(`... and ${skipped.length - maxList} more skipped pairs`);
    }
  }

  return { total: pairs.length, pass, warn, fail, skipped: skipped.length };
}

// =============================================================================
// MAIN ANALYSIS
// =============================================================================

function processSection(
  results: ColorResult[],
  title: string,
  expectedPolarity: Polarity,
  format: OutputFormat
): SectionData {
  const stats = computeStats(results, expectedPolarity);
  if (format === 'human') {
    printSection(results, title, expectedPolarity);
  }
  return { title, results, stats };
}

function runAnalysis(themePath: string, format: OutputFormat = 'human'): Stats {
  const theme = loadTheme(themePath);
  const name = getThemeName(theme, themePath);
  const type: 'dark' | 'light' = theme.type === 'light' ? 'light' : 'dark';
  const expectedPolarity: Polarity = type === 'dark' ? 'light-on-dark' : 'dark-on-light';
  const c = extractColors(theme);

  if (format === 'human') {
    console.log('═'.repeat(OUTPUT_WIDTH));
    console.log(`  ${name.toUpperCase()} - ${LABELS.title} (${type.toUpperCase()})`);
    console.log('═'.repeat(OUTPUT_WIDTH));
    console.log(`\n${LABELS.thresholds}`);
  }

  const allSections: SectionData[] = [];
  const allStats: Stats[] = [];

  // Helper to process a section and collect results
  const section = (results: ColorResult[], title: string) => {
    const data = processSection(results, title, expectedPolarity, format);
    allSections.push(data);
    allStats.push(data.stats);
  };

  // Helper to analyze with background key tracking
  const a = (name: string, fgValue: ColorValue, bgKey: BgKeyName) =>
    analyze(name, fgValue, c.bg[bgKey], BG_KEYS[bgKey]);

  // Text
  section([
    a('Primary', c.fg, 'editor'),
    a('Global', c.ui.foreground, 'editor'),
    a('Icons', c.ui.iconForeground, 'editor'),
  ], LABELS.sectionText);

  // Syntax - Core (high frequency)
  section([
    a('Variables', c.syntax.variable, 'editor'),
    a('Var Language', c.syntax.variableLanguage, 'editor'), // this, self, super
    a('Parameters', c.syntax.parameter, 'editor'),
    a('Properties', c.syntax.property, 'editor'),
    a('Keywords', c.syntax.keyword, 'editor'),
    a('Operators', c.syntax.operator, 'editor'),
    a('Storage', c.syntax.storage, 'editor'),
    a('Functions', c.syntax.function, 'editor'),
    a('Methods', c.syntax.method, 'editor'),
    a('Classes', c.syntax.class, 'editor'),
    a('Types', c.syntax.type, 'editor'),
    a('Interfaces', c.syntax.interface, 'editor'),
    a('Namespaces', c.syntax.namespace, 'editor'),
    a('Enums', c.syntax.enum, 'editor'),
    a('Enum Members', c.syntax.enumMember, 'editor'),
    a('Type Params', c.syntax.typeParameter, 'editor'),
    a('Numbers', c.syntax.number, 'editor'),
    a('Strings', c.syntax.string, 'editor'),
    a('String Escape', c.syntax.stringEscape, 'editor'), // \n, \t, etc.
    a('Constants', c.syntax.constant, 'editor'),
    a('Regexp', c.syntax.regexp, 'editor'),
    a('Tags', c.syntax.tag, 'editor'),
    a('Attributes', c.syntax.attribute, 'editor'),
    a('Decorators', c.syntax.decorator, 'editor'),
    a('Links', c.syntax.link, 'editor'),
    a('Punctuation', c.syntax.punctuation, 'editor'),
    a('Macros', c.syntax.macro, 'editor'),
    a('Structs', c.syntax.struct, 'editor'),
    // Invalid/Deprecated
    a('Invalid', c.syntax.invalid, 'editor'),
    a('Deprecated', c.syntax.deprecated, 'editor'),
    // Support (framework/library)
    a('Support Func', c.syntax.supportFunction, 'editor'),
    // Storage modifiers
    a('Storage Mod', c.syntax.storageModifier, 'editor'),
    // Markup (Markdown, etc.)
    a('Markup Heading', c.syntax.markupHeading, 'editor'),
    a('Markup Bold', c.syntax.markupBold, 'editor'),
    a('Markup Italic', c.syntax.markupItalic, 'editor'),
    a('Markup Code', c.syntax.markupCode, 'editor'),
    a('Markup Quote', c.syntax.markupQuote, 'editor'),
  ], LABELS.sectionSyntax);

  // Selected Text - tests readability when code is selected or highlighted
  // If foreground override is defined, VS Code uses it instead of syntax colors
  const selectedTextResults: ColorResult[] = [];

  // Selection: if selectionForeground is defined, it overrides all syntax colors
  if (!c.ui.selectionForeground.fallback && c.ui.selectionForeground.color) {
    selectedTextResults.push(a('Selection', c.ui.selectionForeground, 'selection'));
  } else {
    // No override - test key syntax colors against selection background
    selectedTextResults.push(a('Sel:Variable', c.syntax.variable, 'selection'));
    selectedTextResults.push(a('Sel:Keyword', c.syntax.keyword, 'selection'));
    selectedTextResults.push(a('Sel:String', c.syntax.string, 'selection'));
    selectedTextResults.push(a('Sel:Comment', c.syntax.comment, 'selection'));
  }

  // Word highlight: symbol occurrences
  if (!c.ui.wordHighlightForeground.fallback && c.ui.wordHighlightForeground.color) {
    selectedTextResults.push(a('Word Highl', c.ui.wordHighlightForeground, 'wordHighlight'));
  } else {
    selectedTextResults.push(a('Highl:Var', c.syntax.variable, 'wordHighlight'));
  }

  // Word highlight strong: write occurrences
  if (!c.ui.wordHighlightStrongForeground.fallback && c.ui.wordHighlightStrongForeground.color) {
    selectedTextResults.push(a('Write Highl', c.ui.wordHighlightStrongForeground, 'wordHighlightStrong'));
  }

  // Word highlight text: text search occurrences
  if (!c.ui.wordHighlightTextForeground.fallback && c.ui.wordHighlightTextForeground.color) {
    selectedTextResults.push(a('Text Highl', c.ui.wordHighlightTextForeground, 'wordHighlightText'));
  }

  // Find match: current search match
  if (!c.ui.findMatchForeground.fallback && c.ui.findMatchForeground.color) {
    selectedTextResults.push(a('Find Match', c.ui.findMatchForeground, 'findMatchActive'));
  } else {
    selectedTextResults.push(a('Find:Var', c.syntax.variable, 'findMatchActive'));
  }

  // Find match highlight: other search matches
  if (!c.ui.findMatchHighlightForeground.fallback && c.ui.findMatchHighlightForeground.color) {
    selectedTextResults.push(a('Find Other', c.ui.findMatchHighlightForeground, 'findMatch'));
  }

  // Inactive selection (window unfocused)
  selectedTextResults.push(a('Inact:Var', c.syntax.variable, 'selectionInactive'));

  // Selection highlight (other occurrences of selected text)
  selectedTextResults.push(a('SelHigh:Var', c.syntax.variable, 'selectionHighlight'));

  // Word highlight text (text search occurrences)
  selectedTextResults.push(a('TextHigh:Var', c.syntax.variable, 'wordHighlightText'));

  // Find in selection range
  selectedTextResults.push(a('FindRange', c.syntax.variable, 'findRange'));

  // Ghost text on selection (edge case: Copilot suggestion while text selected)
  selectedTextResults.push(a('Ghost+Sel', c.ui.ghostText, 'selection'));

  section(selectedTextResults, LABELS.sectionSelected);

  // Navigation Highlights - Go to Definition, Go to Symbol, Quick Open
  section([
    a('Range:Var', c.syntax.variable, 'rangeHighlight'),
    a('Range:Keyword', c.syntax.keyword, 'rangeHighlight'),
    a('Range:String', c.syntax.string, 'rangeHighlight'),
    a('Range:Comment', c.syntax.comment, 'rangeHighlight'),
    a('Symbol:Var', c.syntax.variable, 'symbolHighlight'),
    a('Symbol:Keyword', c.syntax.keyword, 'symbolHighlight'),
    a('Symbol:String', c.syntax.string, 'symbolHighlight'),
    a('Symbol:Comment', c.syntax.comment, 'symbolHighlight'),
  ], LABELS.sectionNavHighlights);

  // Diagnostics
  section([
    a('Errors', c.syntax.error, 'editor'),
    a('Warnings', c.syntax.warning, 'editor'),
    a('Info', c.syntax.info, 'editor'),
  ], LABELS.sectionDiagnostics);

  // Comments
  section([
    a('Comments', c.syntax.comment, 'editor'),
    a('Doc Comments', c.syntax.docComment, 'editor'),
  ], LABELS.sectionComments);

  // UI - Editor
  section([
    a('Line Numbers', c.ui.lineNumber, 'editor'),
    a('Line Active', c.ui.lineNumberActive, 'editor'),
    a('Line Num Dimmed', c.ui.lineNumberDimmed, 'editor'),
    a('Ghost Text', c.ui.ghostText, 'editor'),
    a('Hint', c.ui.hint, 'editor'),
    a('Inlay Hints', c.ui.inlayHint, 'inlayHint'),
    a('Inlay Type', c.ui.inlayHintType, 'inlayHint'),
    a('Inlay Param', c.ui.inlayHintParam, 'inlayHint'),
    a('Code Lens', c.ui.codeLens, 'editor'),
    a('Lightbulb', c.ui.lightBulb, 'editor'),
    a('Lightbulb Fix', c.ui.lightBulbAutoFix, 'editor'),
    a('Lightbulb AI', c.ui.lightBulbAi, 'editor'),
    a('Fold Control', c.ui.foldControl, 'editor'),
    a('Fold Placeholder', c.ui.foldPlaceholder, 'editor'),
    a('Whitespace', c.ui.whitespace, 'editor'),
    a('Ruler', c.ui.ruler, 'editor'),
    a('Link Active', c.ui.editorLinkActive, 'editor'),
  ], LABELS.sectionEditorUi);

  // UI - Workbench
  section([
    a('Title Bar', c.ui.titleBar, 'titleBar'),
    a('Title Inactive', c.ui.titleBarInactive, 'titleBarInactive'),
    a('Command Center', c.ui.commandCenter, 'commandCenter'),
    a('Cmd Ctr Active', c.ui.commandCenterActive, 'commandCenter'),
    a('Cmd Ctr Inact', c.ui.commandCenterInactive, 'commandCenter'),
    a('Tab Active', c.ui.tabActive, 'tabBar'),
    a('Tab Selected', c.ui.tabSelected, 'tabBar'),
    a('Tab Inactive', c.ui.tabInactive, 'tabBar'),
    a('Tab Unfocused', c.ui.tabUnfocused, 'tabBar'),
    a('Tab Unfoc Inact', c.ui.tabUnfocusedInactive, 'tabBar'),
    a('Tab Hover', c.ui.tabHover, 'tabBar'),
    a('Tab Unfoc Hover', c.ui.tabUnfocusedHover, 'tabBar'),
    a('Breadcrumb', c.ui.breadcrumb, 'breadcrumb'),
    a('Sidebar', c.ui.sidebarText, 'sidebar'),
    a('Sidebar Title', c.ui.sidebarTitle, 'sidebar'),
    a('Activity Bar', c.ui.activityBar, 'activityBar'),
    a('Activity Inact', c.ui.activityBarInactive, 'activityBar'),
    a('Act Top', c.ui.activityBarTop, 'activityBar'),
    a('Act Top Inact', c.ui.activityBarTopInactive, 'activityBar'),
    a('Status Bar', c.ui.statusBarText, 'statusBar'),
    a('Status Debug', c.ui.statusBarDebug, 'statusBar'),
    a('Status NoFolder', c.ui.statusBarNoFolder, 'statusBar'),
    a('Status Error', c.ui.statusBarItemError, 'statusBarItemError'),
    a('Status Warning', c.ui.statusBarItemWarning, 'statusBarItemWarning'),
    a('Status Remote', c.ui.statusBarItemRemote, 'statusBarItemRemote'),
    a('Status Promi', c.ui.statusBarItemProminent, 'statusBarItemProminent'),
    a('Status Offline', c.ui.statusBarItemOffline, 'statusBarItemOffline'),
    a('Status Hover', c.ui.statusBarItemHover, 'statusBar'),
    a('Panel Active', c.ui.panelTitle, 'panel'),
    a('Panel Inactive', c.ui.panelTitleInactive, 'panel'),
    a('Panel Badge', c.ui.panelTitleBadge, 'panel'),
    a('Terminal', c.ui.terminal, 'terminal'),
    a('Input', c.ui.input, 'input'),
    a('Placeholder', c.ui.inputPlaceholder, 'input'),
    a('Input Error', c.ui.inputValidationError, 'inputValidationError'),
    a('Input Warning', c.ui.inputValidationWarning, 'inputValidationWarning'),
    a('Input Info', c.ui.inputValidationInfo, 'inputValidationInfo'),
    a('Checkbox', c.ui.checkbox, 'checkbox'),
    a('List Selected', c.ui.listSelection, 'listSelection'),
    a('List Sel Icon', c.ui.listSelectionIcon, 'listSelection'),
    a('List Inact Icon', c.ui.listInactiveSelectionIcon, 'listInactiveSelection'),
    a('List Hover', c.ui.listHover, 'listHover'),
    a('List Focus', c.ui.listFocus, 'listFocus'),
    a('List Invalid', c.ui.listInvalidItem, 'sidebar'),
    a('List Deemph', c.ui.listDeemphasized, 'sidebar'),
    a('Menubar Select', c.ui.menubarSelection, 'menu'),
    a('Link Active', c.ui.textLinkActive, 'editor'),
  ], LABELS.sectionWorkbenchUi);

  // Widgets
  section([
    a('Find/Replace', c.widgets.editorWidget, 'editorWidget'),
    a('Action List', c.widgets.actionList, 'editorWidget'),
    a('Action Focus', c.widgets.actionListFocus, 'editorWidget'),
    a('Autocomplete', c.widgets.suggest, 'suggest'),
    a('Suggest Select', c.widgets.suggestSelected, 'suggestSelected'),
    a('Suggest Sel Icon', c.widgets.suggestSelectedIcon, 'suggestSelected'),
    a('Suggest Match', c.widgets.suggestHighlight, 'suggest'),
    a('Suggest Foc Match', c.widgets.suggestFocusHighlight, 'suggestSelected'),
    a('Hover Tooltip', c.widgets.hover, 'hover'),
    a('Hover Highlight', c.widgets.hoverHighlight, 'hover'),
    a('Preformat Text', c.ui.textPreformat, 'hover'), // code in tooltips
    a('Command Palette', c.widgets.quickInput, 'quickInput'),
    a('Palette Focus', c.widgets.quickInputListFocus, 'quickInputListFocus'),
    a('Palette Foc Icon', c.widgets.quickInputListFocusIcon, 'quickInputListFocus'),
    a('Picker Group', c.ui.pickerGroup, 'quickInput'),
    a('Menu', c.widgets.menu, 'menu'),
    a('Menu Selection', c.widgets.menuSelection, 'menu'),
    a('Notification', c.widgets.notification, 'notification'),
    a('Notif Link', c.widgets.notificationLink, 'notification'),
    a('Notif Header', c.widgets.notificationHeader, 'notification'),
    a('Notif Error', c.widgets.notificationErrorIcon, 'notification'),
    a('Notif Warning', c.widgets.notificationWarningIcon, 'notification'),
    a('Notif Info', c.widgets.notificationInfoIcon, 'notification'),
    a('Peek View', c.widgets.peekView, 'peekView'),
    a('Inline Chat', c.widgets.inlineChat, 'inlineChat'),
    a('Chat Placeholder', c.widgets.inlineChatPlaceholder, 'inlineChat'),
    a('Suggest Status', c.widgets.suggestWidgetStatus, 'suggest'),
  ], LABELS.sectionWidgets);

  // Git Decorations
  section([
    a('Added', c.git.added, 'sidebar'),
    a('Modified', c.git.modified, 'sidebar'),
    a('Deleted', c.git.deleted, 'sidebar'),
    a('Renamed', c.git.renamed, 'sidebar'),
    a('Untracked', c.git.untracked, 'sidebar'),
    a('Ignored', c.git.ignored, 'sidebar'),
    a('Conflict', c.git.conflict, 'sidebar'),
    a('Submodule', c.git.submodule, 'sidebar'),
    a('Stage Modified', c.git.stageModified, 'sidebar'),
    a('Stage Deleted', c.git.stageDeleted, 'sidebar'),
  ], LABELS.sectionGit);

  // Brackets
  section([
    a('Bracket 1', c.brackets.bracket1, 'editor'),
    a('Bracket 2', c.brackets.bracket2, 'editor'),
    a('Bracket 3', c.brackets.bracket3, 'editor'),
    a('Bracket 4', c.brackets.bracket4, 'editor'),
    a('Bracket 5', c.brackets.bracket5, 'editor'),
    a('Bracket 6', c.brackets.bracket6, 'editor'),
    a('Unexpected', c.brackets.unexpected, 'editor'),
    a('Match BG', c.fg, 'bracketMatch'), // Text on bracket match highlight
  ], LABELS.sectionBrackets);

  // Terminal ANSI colors
  const terminalResults: ColorResult[] = [
    a('Black', c.terminal.ansiBlack, 'terminal'),
    a('Red', c.terminal.ansiRed, 'terminal'),
    a('Green', c.terminal.ansiGreen, 'terminal'),
    a('Yellow', c.terminal.ansiYellow, 'terminal'),
    a('Blue', c.terminal.ansiBlue, 'terminal'),
    a('Magenta', c.terminal.ansiMagenta, 'terminal'),
    a('Cyan', c.terminal.ansiCyan, 'terminal'),
    a('White', c.terminal.ansiWhite, 'terminal'),
    a('Bright Black', c.terminal.ansiBrightBlack, 'terminal'),
    a('Bright Red', c.terminal.ansiBrightRed, 'terminal'),
    a('Bright Green', c.terminal.ansiBrightGreen, 'terminal'),
    a('Bright Yellow', c.terminal.ansiBrightYellow, 'terminal'),
    a('Bright Blue', c.terminal.ansiBrightBlue, 'terminal'),
    a('Bright Magenta', c.terminal.ansiBrightMagenta, 'terminal'),
    a('Bright Cyan', c.terminal.ansiBrightCyan, 'terminal'),
    a('Bright White', c.terminal.ansiBrightWhite, 'terminal'),
  ];
  // Terminal selection foreground (if defined, overrides ANSI colors when selected)
  if (!c.ui.terminalSelection.fallback && c.ui.terminalSelection.color) {
    terminalResults.push(a('Term Select', c.ui.terminalSelection, 'terminalSelection'));
  }
  // Terminal find match - test terminal foreground against find backgrounds
  terminalResults.push(a('Find Match', c.ui.terminal, 'terminalFindMatch'));
  terminalResults.push(a('Find Other', c.ui.terminal, 'terminalFindMatchHighlight'));
  section(terminalResults, LABELS.sectionTerminal);

  // Buttons & Badges
  section([
    a('Button', c.buttons.button, 'button'),
    a('Button 2nd', c.buttons.buttonSecondary, 'buttonSecondary'),
    a('Ext Button', c.buttons.extensionButton, 'extensionButton'),
    a('Badge', c.buttons.badge, 'badge'),
    a('Activity Badge', c.buttons.activityBarBadge, 'activityBarBadge'),
    a('Act Warn Badge', c.buttons.activityWarningBadge, 'activityWarningBadge'),
    a('Act Err Badge', c.buttons.activityErrorBadge, 'activityErrorBadge'),
    a('Dropdown', c.buttons.dropdown, 'dropdown'),
  ], LABELS.sectionButtons);

  // Debug (tokens appear in debug sidebar/variables view)
  section([
    a('Token Name', c.debug.tokenName, 'sidebar'),
    a('Token Value', c.debug.tokenValue, 'sidebar'),
    a('Token String', c.debug.tokenString, 'sidebar'),
    a('Token Number', c.debug.tokenNumber, 'sidebar'),
    a('Token Boolean', c.debug.tokenBoolean, 'sidebar'),
    a('Token Error', c.debug.tokenError, 'sidebar'),
    a('Token Type', c.debug.tokenType, 'sidebar'),
    a('Inline Value', c.debug.inlineValue, 'editor'),
    a('Exception', c.debug.exceptionLabel, 'sidebar'),
    a('State Label', c.debug.stateLabel, 'sidebar'),
  ], LABELS.sectionDebug);

  // Debug Context - syntax colors on debug highlighting backgrounds
  section([
    a('Stack:Variable', c.syntax.variable, 'stackFrame'),
    a('Stack:Keyword', c.syntax.keyword, 'stackFrame'),
    a('Stack:String', c.syntax.string, 'stackFrame'),
    a('Focus:Variable', c.syntax.variable, 'focusedStackFrame'),
    a('Focus:Keyword', c.syntax.keyword, 'focusedStackFrame'),
  ], LABELS.sectionDebugContext);

  // Linked Editing - HTML tag pairs, bracket linking
  section([
    a('Linked:Variable', c.syntax.variable, 'linkedEditing'),
    a('Linked:Tag', c.syntax.tag, 'linkedEditing'),
  ], LABELS.sectionLinkedEditing);

  // Links & Highlights
  section([
    a('Text Link', c.links.textLink, 'editor'),
    a('List Highlight', c.links.listHighlight, 'sidebar'),
    a('List Foc Highl', c.links.listFocusHighlight, 'listFocus'),
    a('List Inactive', c.links.listInactiveSelection, 'listInactiveSelection'),
    a('List Error', c.links.listError, 'sidebar'),
    a('List Warning', c.links.listWarning, 'sidebar'),
  ], LABELS.sectionLinks);

  // Misc UI
  section([
    a('Section Header', c.misc.sidebarSectionHeader, 'sidebar'),
    a('Panel Section', c.misc.panelSectionHeader, 'panel'),
    a('Keybinding', c.misc.keybindingLabel, 'keybindingLabel'),
    a('Banner', c.misc.banner, 'banner'),
    a('Banner Icon', c.misc.bannerIcon, 'banner'),
    a('Peek Title', c.misc.peekViewTitle, 'peekView'),
    a('Peek Desc', c.misc.peekViewDescription, 'peekView'),
    a('Peek File', c.misc.peekViewFile, 'peekView'),
    a('Peek Select', c.misc.peekViewSelection, 'peekViewSelection'),
    a('Problems Error', c.misc.problemsError, 'sidebar'),
    a('Problems Warn', c.misc.problemsWarning, 'sidebar'),
    a('Problems Info', c.misc.problemsInfo, 'sidebar'),
    a('Search Info', c.misc.searchResultsInfo, 'sidebar'),
    a('Description', c.misc.description, 'editor'),
    a('Disabled', c.misc.disabled, 'editor'),
    a('Error Text', c.misc.errorFg, 'editor'),
    a('Git Blame', c.misc.gitBlame, 'editor'),
    a('Editor Placeholder', c.misc.editorPlaceholder, 'editor'),
    a('Term Cmd Guide', c.misc.terminalCommandGuide, 'terminal'),
    a('Term Init Hint', c.misc.terminalInitialHint, 'terminal'),
    a('Walkthrough Title', c.misc.walkthroughStepTitle, 'editor'),
    a('Welcome Progress', c.misc.welcomeProgress, 'editor'),
    a('Profile Badge', c.misc.profileBadge, 'activityBar'),
  ], LABELS.sectionMisc);

  // Diff Editor - test key syntax colors against diff backgrounds
  section([
    // Inserted text (green background typically)
    a('Ins:Variable', c.syntax.variable, 'diffInserted'),
    a('Ins:Keyword', c.syntax.keyword, 'diffInserted'),
    a('Ins:String', c.syntax.string, 'diffInserted'),
    a('Ins:Comment', c.syntax.comment, 'diffInserted'),
    // Inserted line (full line highlight)
    a('InsLine:Var', c.syntax.variable, 'diffInsertedLine'),
    // Removed text (red background typically)
    a('Rem:Variable', c.syntax.variable, 'diffRemoved'),
    a('Rem:Keyword', c.syntax.keyword, 'diffRemoved'),
    a('Rem:String', c.syntax.string, 'diffRemoved'),
    a('Rem:Comment', c.syntax.comment, 'diffRemoved'),
    // Removed line (full line highlight)
    a('RemLine:Var', c.syntax.variable, 'diffRemovedLine'),
    // Unchanged region (collapsed diff)
    a('Unchanged', c.misc.diffUnchangedRegion, 'editor'),
  ], LABELS.sectionDiff);

  // Merge Conflicts - test key syntax colors against merge backgrounds
  section([
    // Current changes (your changes)
    a('Curr:Variable', c.syntax.variable, 'mergeCurrentContent'),
    a('Curr:Keyword', c.syntax.keyword, 'mergeCurrentContent'),
    a('Curr:String', c.syntax.string, 'mergeCurrentContent'),
    // Incoming changes (their changes)
    a('Inc:Variable', c.syntax.variable, 'mergeIncomingContent'),
    a('Inc:Keyword', c.syntax.keyword, 'mergeIncomingContent'),
    a('Inc:String', c.syntax.string, 'mergeIncomingContent'),
    // Common ancestor
    a('Common:Var', c.syntax.variable, 'mergeCommonContent'),
  ], LABELS.sectionMerge);

  // Cursors - visibility of editor and terminal cursors
  section([
    a('Editor Cursor', c.cursor.editor, 'editor'),
    a('Block Text', c.cursor.editorBlock, 'cursorBlock'), // text inside block cursor
    a('Multi Primary', c.cursor.editorMultiPrimary, 'editor'),
    a('Multi Secondary', c.cursor.editorMultiSecondary, 'editor'),
    a('Terminal Cursor', c.cursor.terminal, 'terminal'),
    a('Term Block Text', c.cursor.terminalBlock, 'terminalCursorBlock'), // text inside terminal block cursor
  ], LABELS.sectionCursors);

  // Sticky Scroll - syntax colors on sticky scroll header background
  section([
    a('Sticky:Variable', c.syntax.variable, 'stickyScroll'),
    a('Sticky:Keyword', c.syntax.keyword, 'stickyScroll'),
    a('Sticky:Function', c.syntax.function, 'stickyScroll'),
    a('Sticky:String', c.syntax.string, 'stickyScroll'),
    a('Sticky:Comment', c.syntax.comment, 'stickyScroll'),
  ], LABELS.sectionStickyScroll);

  // Peek View Editor - syntax colors in peek view editor pane
  section([
    a('Peek:Variable', c.syntax.variable, 'peekViewEditor'),
    a('Peek:Keyword', c.syntax.keyword, 'peekViewEditor'),
    a('Peek:Function', c.syntax.function, 'peekViewEditor'),
    a('Peek:String', c.syntax.string, 'peekViewEditor'),
    a('Peek:Comment', c.syntax.comment, 'peekViewEditor'),
  ], LABELS.sectionPeekEditor);

  // Search Editor - syntax in search results context
  section([
    a('Search:Variable', c.syntax.variable, 'searchEditorFindMatch'),
    a('Search:Keyword', c.syntax.keyword, 'searchEditorFindMatch'),
    a('Search:String', c.syntax.string, 'searchEditorFindMatch'),
  ], LABELS.sectionSearchEditor);

  // Input Controls - buttons, toggles, radios
  section([
    a('Option Active', c.inputs.optionActive, 'input'),
    a('Radio Active', c.inputs.radioActive, 'editor'),
    a('Radio Inactive', c.inputs.radioInactive, 'editor'),
    a('Checkbox Disabled', c.inputs.checkboxDisabled, 'checkbox'),
  ], LABELS.sectionInputControls);

  // SCM Graph - hover labels (graph lines removed as decorative)
  section([
    a('Hover Label', c.scm.historyHoverLabel, 'sidebar'),
    a('Hover Add', c.scm.historyHoverAdditions, 'sidebar'),
    a('Hover Del', c.scm.historyHoverDeletions, 'sidebar'),
  ], LABELS.sectionScm);

  // Chat & AI - Copilot and inline chat
  section([
    a('Chat Avatar', c.chat.avatar, 'sidebar'),
    a('Lines Added', c.chat.linesAdded, 'editor'),
    a('Lines Removed', c.chat.linesRemoved, 'editor'),
    a('Slash Command', c.chat.slashCommand, 'editor'),
    a('Edited File', c.chat.editedFile, 'sidebar'),
  ], LABELS.sectionChat);

  // Testing - coverage and test results
  section([
    a('Coverage Badge', c.testing.coverageBadge, 'editor'),
    a('Test Msg Info', c.testing.messageInfo, 'editor'),
  ], LABELS.sectionTesting);

  // Debug Console - frequently read output
  section([
    a('Error', c.debugConsole.error, 'panel'),
    a('Warning', c.debugConsole.warning, 'panel'),
    a('Info', c.debugConsole.info, 'panel'),
    a('Source', c.debugConsole.source, 'panel'),
  ], LABELS.sectionDebugConsole);

  // Symbol Icons - appear in autocomplete, outline, breadcrumbs
  section([
    a('Array', c.symbolIcons.array, 'suggest'),
    a('Boolean', c.symbolIcons.boolean, 'suggest'),
    a('Class', c.symbolIcons.class, 'suggest'),
    a('Constant', c.symbolIcons.constant, 'suggest'),
    a('Constructor', c.symbolIcons.ctor, 'suggest'),
    a('Enum', c.symbolIcons.enum, 'suggest'),
    a('Enum Member', c.symbolIcons.enumMember, 'suggest'),
    a('Event', c.symbolIcons.event, 'suggest'),
    a('Field', c.symbolIcons.field, 'suggest'),
    a('File', c.symbolIcons.file, 'suggest'),
    a('Folder', c.symbolIcons.folder, 'suggest'),
    a('Function', c.symbolIcons.function, 'suggest'),
    a('Interface', c.symbolIcons.interface, 'suggest'),
    a('Key', c.symbolIcons.key, 'suggest'),
    a('Keyword', c.symbolIcons.keyword, 'suggest'),
    a('Method', c.symbolIcons.method, 'suggest'),
    a('Module', c.symbolIcons.module, 'suggest'),
    a('Namespace', c.symbolIcons.namespace, 'suggest'),
    a('Null', c.symbolIcons.null, 'suggest'),
    a('Number', c.symbolIcons.number, 'suggest'),
    a('Object', c.symbolIcons.object, 'suggest'),
    a('Operator', c.symbolIcons.operator, 'suggest'),
    a('Package', c.symbolIcons.package, 'suggest'),
    a('Property', c.symbolIcons.property, 'suggest'),
    a('Reference', c.symbolIcons.reference, 'suggest'),
    a('Snippet', c.symbolIcons.snippet, 'suggest'),
    a('String', c.symbolIcons.string, 'suggest'),
    a('Struct', c.symbolIcons.struct, 'suggest'),
    a('Text', c.symbolIcons.text, 'suggest'),
    a('Type Param', c.symbolIcons.typeParameter, 'suggest'),
    a('Unit', c.symbolIcons.unit, 'suggest'),
    a('Variable', c.symbolIcons.variable, 'suggest'),
  ], LABELS.sectionSymbolIcons);

  // Settings Editor
  section([
    a('Header', c.settings.header, 'editor'),
    a('Text Input', c.settings.textInput, 'input'),
    a('Number Input', c.settings.numberInput, 'input'),
    a('Checkbox', c.settings.checkbox, 'checkbox'),
    a('Dropdown', c.settings.dropdown, 'dropdown'),
  ], LABELS.sectionSettings);

  // Charts - text labels (data colors removed as decorative)
  section([
    a('Foreground', c.charts.foreground, 'editor'),
  ], LABELS.sectionCharts);

  // Color Distinction Analysis (Delta E 2000)
  const distinction = analyzeDistinction(c.syntax, c.syntax.comment, c.bg.editor);
  let distinctionStats: DistinctionStats;
  if (format === 'human') {
    distinctionStats = printDistinctionSection(distinction.pairs, distinction.skipped);
  } else {
    distinctionStats = {
      total: distinction.pairs.length,
      pass: distinction.pairs.filter(p => p.icon === '✅').length,
      warn: distinction.pairs.filter(p => p.icon === '⚠️').length,
      fail: distinction.pairs.filter(p => p.icon === '❌').length,
      skipped: distinction.skipped.length,
    };
  }

  // Symbol Discrimination Analysis (Delta E 2000)
  const symbolDiscrimination = analyzeSymbolDiscrimination(c.symbolIcons, c.bg.suggest);
  let symbolStats: DistinctionStats;
  if (format === 'human') {
    symbolStats = printSymbolDiscriminationSection(symbolDiscrimination.pairs, symbolDiscrimination.skipped);
  } else {
    symbolStats = {
      total: symbolDiscrimination.pairs.length,
      pass: symbolDiscrimination.pairs.filter(p => p.icon === '✅').length,
      warn: symbolDiscrimination.pairs.filter(p => p.icon === '⚠️').length,
      fail: symbolDiscrimination.pairs.filter(p => p.icon === '❌').length,
      skipped: symbolDiscrimination.skipped.length,
    };
  }

  // Aggregate stats
  const total = allStats.reduce((acc, s) => ({
    pass: acc.pass + s.pass,
    large: acc.large + s.large,
    expectedDim: acc.expectedDim + s.expectedDim,
    fail: acc.fail + s.fail,
    missing: acc.missing + s.missing,
    total: acc.total + s.total,
    results: [] as ColorResult[],
  }), { pass: 0, large: 0, expectedDim: 0, fail: 0, missing: 0, total: 0, results: [] as ColorResult[] });

  const defined = total.total - total.missing;
  const ready = total.fail === 0 && total.large === 0 && total.missing === 0;

  // JSON output
  if (format === 'json') {
    const jsonOutput: JsonOutput = {
      theme: name,
      type,
      sections: allSections.map(s => ({
        section: s.title,
        results: s.results.map(toJsonColorResult),
      })),
      distinction: {
        pairs: distinction.pairs.map(p => ({
          pair: [p.name1, p.name2] as [string, string],
          colors: [p.color1, p.color2] as [string, string],
          keys: [p.key1, p.key2] as [string, string],
          deltaE: Math.round(p.deltaE * 10) / 10,
          level: p.level,
          pass: p.pass,
        })),
        skipped: distinction.skipped.map(s => ({
          pair: [s.name1, s.name2] as [string, string],
          reason: s.reason,
        })),
      },
      symbolDiscrimination: {
        pairs: symbolDiscrimination.pairs.map(p => ({
          pair: [p.name1, p.name2] as [string, string],
          colors: [p.color1, p.color2] as [string, string],
          keys: [p.key1, p.key2] as [string, string],
          deltaE: Math.round(p.deltaE * 10) / 10,
          level: p.level,
          pass: p.pass,
        })),
        skipped: symbolDiscrimination.skipped.map(s => ({
          pair: [s.name1, s.name2] as [string, string],
          reason: s.reason,
        })),
      },
      summary: {
        pass: total.pass,
        large: total.large,
        expectedDim: total.expectedDim,
        fail: total.fail,
        missing: total.missing,
        total: total.total,
        defined,
        ready,
      },
    };
    console.log(JSON.stringify(jsonOutput, null, 2));
    return total;
  }

  // Human-readable summary
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
  console.log('');
  const totalPairs = ADJACENCY_PAIRS.length;
  const analyzedPairs = distinctionStats.total;
  console.log(`  ΔE Distinction (${analyzedPairs}/${totalPairs} pairs analyzed):`);
  console.log(`  ✅ Distinct (ΔE≥20): ${distinctionStats.pass}/${analyzedPairs}`);
  console.log(`  ⚠️  Acceptable (ΔE 5-20): ${distinctionStats.warn}/${analyzedPairs}`);
  console.log(`  ❌ Low (ΔE<5):       ${distinctionStats.fail}/${analyzedPairs}`);

  console.log('');
  const totalSymbolPairs = SYMBOL_DISCRIMINATION_PAIRS.length;
  const analyzedSymbolPairs = symbolStats.total;
  console.log(`  ΔE Symbol Icons (${analyzedSymbolPairs}/${totalSymbolPairs} pairs analyzed):`);
  console.log(`  ✅ Distinct (ΔE≥20): ${symbolStats.pass}/${analyzedSymbolPairs}`);
  console.log(`  ⚠️  Acceptable (ΔE 5-20): ${symbolStats.warn}/${analyzedSymbolPairs}`);
  console.log(`  ❌ Low (ΔE<5):       ${symbolStats.fail}/${analyzedSymbolPairs}`);

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
  npx tsx src/tools/readability.ts --theme <path> --json  JSON output (for tools)
  npx tsx src/tools/readability.ts --test FG BG [NAME]    Test single color

Options:
  --theme <path>    Path to VS Code theme JSON file
  --json            Output JSON (for LLM/agent tool calling)
  --test FG BG      Test foreground on background
  --help, -h        Show this help

Examples:
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json --json
  npx tsx src/tools/readability.ts --test "#FFFFFF" "#1A1A1A" "White on dark"

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
  let jsonOutput = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--theme' && args[i + 1]) {
      themePath = path.resolve(args[++i]);
    } else if (args[i] === '--json') {
      jsonOutput = true;
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
    runAnalysis(themePath, jsonOutput ? 'json' : 'human');
    // Exit 0: Analysis completed successfully (LLM tool calling best practice)
    // The output text communicates whether issues were found
  } else {
    console.error(LABELS.errThemeRequired);
    process.exit(1);
  }
}
