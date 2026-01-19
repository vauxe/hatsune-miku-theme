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
  STATUS_DISTINCTION_PAIRS,
  GIT_DISTINCTION_PAIRS,
  STATE_DISTINCTION_PAIRS,
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
  JsonDistinctionCategory,
  OutputFormat,
  AnalysisOptions,
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

/**
 * Analyze status distinction (error/warning/info)
 * Critical for quickly identifying diagnostic severity
 */
function analyzeStatusDistinction(
  syntax: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of STATUS_DISTINCTION_PAIRS) {
    const cv1 = syntax[name1];
    const cv2 = syntax[name2];

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

/**
 * Analyze git distinction (added/modified/deleted/untracked)
 * Users need to quickly identify file state changes
 */
function analyzeGitDistinction(
  git: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of GIT_DISTINCTION_PAIRS) {
    const cv1 = git[name1];
    const cv2 = git[name2];

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

/**
 * Analyze state distinction (active vs inactive UI elements)
 * Tests whether users can perceive state changes
 */
function analyzeStateDistinction(
  states: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of STATE_DISTINCTION_PAIRS) {
    const cv1 = states[name1];
    const cv2 = states[name2];

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

function printSection(results: ColorResult[], title: string, expectedPolarity: Polarity, issuesOnly = false): Stats {
  console.log(`\n▌ ${title}`);
  console.log('─'.repeat(OUTPUT_WIDTH));
  console.log(`${LABELS.colName.padEnd(COL_NAME_WIDTH)} ${LABELS.colColor.padEnd(COL_COLOR_WIDTH)} ${LABELS.colApca}`);
  console.log('─'.repeat(OUTPUT_WIDTH));

  // Filter results if issuesOnly is enabled
  const displayResults = issuesOnly
    ? results.filter(r => !r.analysis.pass || r.fallback)
    : results;

  if (issuesOnly && displayResults.length === 0) {
    console.log('  (all items pass)');
  }

  for (const r of displayResults) {
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
function printDistinctionSection(pairs: DistinctionPair[], skipped: DistinctionSkippedPair[], issuesOnly = false): DistinctionStats {
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

  // Filter pairs if issuesOnly is enabled (show non-passing pairs)
  const displayPairs = issuesOnly
    ? pairs.filter(p => !p.pass)
    : pairs;

  if (issuesOnly && displayPairs.length === 0) {
    console.log('  (all pairs pass)');
  }

  let pass = 0;
  let warn = 0;
  let fail = 0;

  // Count all pairs for stats (not just displayed)
  for (const p of pairs) {
    if (p.icon === '✅') pass++;
    else if (p.icon === '⚠️') warn++;
    else fail++;
  }

  // Display filtered pairs
  for (const p of displayPairs) {
    const pairName = `${p.name1} ↔ ${p.name2}`.substring(0, colPair - 1).padEnd(colPair);
    const deltaStr = p.deltaE.toFixed(1).padStart(colDelta);
    const levelStr = `${p.icon} ${p.level}`;

    console.log(`${pairName}${deltaStr}   ${levelStr}`);
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
function printSymbolDiscriminationSection(pairs: DistinctionPair[], skipped: DistinctionSkippedPair[], issuesOnly = false): DistinctionStats {
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

  // Filter pairs if issuesOnly is enabled (show non-passing pairs)
  const displayPairs = issuesOnly
    ? pairs.filter(p => !p.pass)
    : pairs;

  if (issuesOnly && displayPairs.length === 0) {
    console.log('  (all pairs pass)');
  }

  let pass = 0;
  let warn = 0;
  let fail = 0;

  // Count all pairs for stats (not just displayed)
  for (const p of pairs) {
    if (p.icon === '✅') pass++;
    else if (p.icon === '⚠️') warn++;
    else fail++;
  }

  // Display filtered pairs
  for (const p of displayPairs) {
    const pairName = `${p.name1} ↔ ${p.name2}`.substring(0, colPair - 1).padEnd(colPair);
    const deltaStr = p.deltaE.toFixed(1).padStart(colDelta);
    const levelStr = `${p.icon} ${p.level}`;

    console.log(`${pairName}${deltaStr}   ${levelStr}`);
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
  options: AnalysisOptions
): SectionData {
  const stats = computeStats(results, expectedPolarity);
  if (options.format === 'human') {
    printSection(results, title, expectedPolarity, options.issuesOnly);
  }
  return { title, results, stats };
}

function runAnalysis(themePath: string, options: AnalysisOptions = { format: 'human', issuesOnly: false }): Stats {
  const theme = loadTheme(themePath);
  const name = getThemeName(theme, themePath);
  const type: 'dark' | 'light' = theme.type === 'light' ? 'light' : 'dark';
  const expectedPolarity: Polarity = type === 'dark' ? 'light-on-dark' : 'dark-on-light';
  const c = extractColors(theme);

  if (options.format === 'human') {
    console.log('═'.repeat(OUTPUT_WIDTH));
    console.log(`  ${name.toUpperCase()} - ${LABELS.title} (${type.toUpperCase()})`);
    console.log('═'.repeat(OUTPUT_WIDTH));
    console.log(`\n${LABELS.thresholds}`);
  }

  const allSections: SectionData[] = [];
  const allStats: Stats[] = [];

  // Helper to process a section and collect results
  const section = (results: ColorResult[], title: string) => {
    const data = processSection(results, title, expectedPolarity, options);
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

  // SYNTAX CONTEXT - tokens on overlay backgrounds
  // Ordered by visual attention frequency (TIER 1 first)
  const syntaxContextResults: ColorResult[] = [
    // TIER 1: Current line - where cursor is (CONSTANT FOCUS)
    // This is literally where you look every second while typing
    a('Line:Variable', c.syntax.variable, 'lineHighlight'),
    a('Line:Keyword', c.syntax.keyword, 'lineHighlight'),
    a('Line:Comment', c.syntax.comment, 'lineHighlight'),
    a('Line:String', c.syntax.string, 'lineHighlight'),
    // TIER 2: Selection - most common overlay during editing
    a('Sel:Variable', c.syntax.variable, 'selection'),
    a('Sel:Keyword', c.syntax.keyword, 'selection'),
    a('Sel:Comment', c.syntax.comment, 'selection'),
    // TIER 2: Autocomplete - syntax in suggestions (function signatures, types)
    a('Suggest:Variable', c.syntax.variable, 'suggest'),
    a('Suggest:Keyword', c.syntax.keyword, 'suggest'),
    a('Suggest:Type', c.syntax.type, 'suggest'),
    a('Suggest:Function', c.syntax.function, 'suggest'),
    // TIER 2: Hover tooltip - checking types/docs
    a('Hover:Variable', c.syntax.variable, 'hover'),
    a('Hover:Keyword', c.syntax.keyword, 'hover'),
    a('Hover:Comment', c.syntax.comment, 'hover'),
    a('Hover:Type', c.syntax.type, 'hover'),
    // TIER 3: Find match - search results
    a('Find:Variable', c.syntax.variable, 'findMatchActive'),
    a('Find:Keyword', c.syntax.keyword, 'findMatchActive'),
    // TIER 3: Word highlight - symbol occurrences
    a('Highl:Variable', c.syntax.variable, 'wordHighlight'),
    // TIER 3: Sticky scroll header
    a('Sticky:Variable', c.syntax.variable, 'stickyScroll'),
    a('Sticky:Keyword', c.syntax.keyword, 'stickyScroll'),
    a('Sticky:Comment', c.syntax.comment, 'stickyScroll'),
    // TIER 4: Diff backgrounds (code review)
    a('DiffIns:Variable', c.syntax.variable, 'diffInserted'),
    a('DiffIns:Comment', c.syntax.comment, 'diffInserted'),
    a('DiffRem:Variable', c.syntax.variable, 'diffRemoved'),
    a('DiffRem:Comment', c.syntax.comment, 'diffRemoved'),
  ];
  section(syntaxContextResults, LABELS.sectionSyntaxContext);

  // NAVIGATION HIGHLIGHTS - Go to Definition, Breadcrumbs, Quick Open
  // Critical for code navigation workflows
  section([
    a('Range:Variable', c.syntax.variable, 'rangeHighlight'),
    a('Range:Keyword', c.syntax.keyword, 'rangeHighlight'),
    a('Range:Comment', c.syntax.comment, 'rangeHighlight'),
    a('Symbol:Variable', c.syntax.variable, 'symbolHighlight'),
    a('Symbol:Keyword', c.syntax.keyword, 'symbolHighlight'),
  ], LABELS.sectionNavHighlights);

  // PEEK VIEW EDITOR - Peek Definition inline windows
  // Very common for quick code inspection without full navigation
  section([
    a('Peek:Variable', c.syntax.variable, 'peekViewEditor'),
    a('Peek:Keyword', c.syntax.keyword, 'peekViewEditor'),
    a('Peek:Comment', c.syntax.comment, 'peekViewEditor'),
    a('Peek:Function', c.syntax.function, 'peekViewEditor'),
  ], LABELS.sectionPeekEditor);

  // MERGE CONFLICTS - 3-way merge syntax readability
  // Critical for collaborative development
  section([
    a('Current:Variable', c.syntax.variable, 'mergeCurrentContent'),
    a('Current:Keyword', c.syntax.keyword, 'mergeCurrentContent'),
    a('Incoming:Variable', c.syntax.variable, 'mergeIncomingContent'),
    a('Incoming:Keyword', c.syntax.keyword, 'mergeIncomingContent'),
    a('Common:Variable', c.syntax.variable, 'mergeCommonContent'),
  ], LABELS.sectionMerge);

  // CODE REVIEW - Additional diff contexts for reviewing code changes
  // Tests syntax on backgrounds used during PR review, multi-file diff, AI suggestions
  section([
    // Collapsed unchanged regions (click to expand)
    a('Unchanged:Variable', c.syntax.variable, 'diffUnchangedRegion'),
    a('Unchanged:Comment', c.syntax.comment, 'diffUnchangedRegion'),
    // Unchanged code background (subtle highlight)
    a('UnchangedCode:Var', c.syntax.variable, 'diffUnchangedCode'),
    // Multi-file diff (PR review with multiple files)
    a('MultiDiff:Variable', c.syntax.variable, 'multiDiffBackground'),
    a('MultiDiff:Keyword', c.syntax.keyword, 'multiDiffBackground'),
    // AI-suggested changes (Copilot inline diff)
    a('AIInsert:Variable', c.syntax.variable, 'inlineChatDiffInserted'),
    a('AIInsert:Keyword', c.syntax.keyword, 'inlineChatDiffInserted'),
    a('AIRemove:Variable', c.syntax.variable, 'inlineChatDiffRemoved'),
    a('AIRemove:Keyword', c.syntax.keyword, 'inlineChatDiffRemoved'),
  ], LABELS.sectionCodeReview);

  // NOTEBOOKS - Jupyter cell syntax (data science workflows)
  // Critical for Python/data science developers using notebooks
  section([
    // Code cells - where you write code
    a('Cell:Variable', c.syntax.variable, 'notebookCell'),
    a('Cell:Keyword', c.syntax.keyword, 'notebookCell'),
    a('Cell:String', c.syntax.string, 'notebookCell'),
    a('Cell:Comment', c.syntax.comment, 'notebookCell'),
    // Output cells - execution results
    a('Output:Variable', c.syntax.variable, 'notebookOutput'),
    a('Output:String', c.syntax.string, 'notebookOutput'),
    // Selected cell - currently focused cell
    a('Selected:Variable', c.syntax.variable, 'notebookSelected'),
    a('Selected:Keyword', c.syntax.keyword, 'notebookSelected'),
  ], LABELS.sectionNotebook);

  // SEARCH EDITOR - Search result preview syntax
  // Important for search/refactor workflows
  section([
    a('Search:Variable', c.syntax.variable, 'searchEditorFindMatch'),
    a('Search:Keyword', c.syntax.keyword, 'searchEditorFindMatch'),
    a('Search:Comment', c.syntax.comment, 'searchEditorFindMatch'),
  ], LABELS.sectionSearchEditor);

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

  // Terminal - foreground + key ANSI colors + context backgrounds
  const terminalResults: ColorResult[] = [
    // Primary foreground
    a('Foreground', c.ui.terminal, 'terminal'),
    // Key ANSI colors (simplified from 16 to 6 critical colors)
    a('Red', c.terminal.ansiRed, 'terminal'),
    a('Green', c.terminal.ansiGreen, 'terminal'),
    a('Yellow', c.terminal.ansiYellow, 'terminal'),
    a('Cyan', c.terminal.ansiCyan, 'terminal'),
    a('White', c.terminal.ansiWhite, 'terminal'),
    a('Bright White', c.terminal.ansiBrightWhite, 'terminal'),
    // Context backgrounds - terminal selection and find match
    a('Selection', c.ui.terminal, 'terminalSelection'),
    a('Find Match', c.ui.terminal, 'terminalFindMatch'),
  ];
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

  // Note: Diff, Merge, Sticky Scroll, Peek View, Search Editor sections consolidated
  // into SYNTAX CONTEXT above to reduce redundancy

  // Input Controls - buttons, toggles, radios
  section([
    a('Option Active', c.inputs.optionActive, 'input'),
    a('Radio Active', c.inputs.radioActive, 'editor'),
    a('Radio Inactive', c.inputs.radioInactive, 'editor'),
    a('Checkbox Disabled', c.inputs.checkboxDisabled, 'checkbox'),
  ], LABELS.sectionInputControls);

  // Settings Editor - graphical settings UI
  section([
    a('Header', c.settings.header, 'editor'),
    a('Text Input', c.settings.textInput, 'input'),
    a('Number Input', c.settings.numberInput, 'input'),
    a('Checkbox', c.settings.checkbox, 'checkbox'),
    a('Dropdown', c.settings.dropdown, 'dropdown'),
  ], LABELS.sectionSettings);

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

  // Note: Symbol Icons APCA section removed - icons are not readable text
  // Symbol discrimination is still tested via Delta E below

  // Note: Charts section removed - decorative, not readable text

  // ==========================================================================
  // COLOR DISTINCTION ANALYSIS (Delta E 2000)
  // ==========================================================================

  // 1. Syntax adjacency - commonly side-by-side token colors
  const syntaxDistinction = analyzeDistinction(c.syntax, c.syntax.comment, c.bg.editor);

  // 2. Status distinction - error/warning/info severity
  const statusDistinction = analyzeStatusDistinction(c.syntax, c.bg.editor);

  // 3. Git distinction - file state colors
  const gitDistinction = analyzeGitDistinction(c.git, c.bg.sidebar);

  // 4. State distinction - active/inactive UI elements
  const stateDistinction = analyzeStateDistinction(c.states, c.bg.editor);

  // 5. Symbol discrimination - icon colors in autocomplete
  const symbolDistinction = analyzeSymbolDiscrimination(c.symbolIcons, c.bg.suggest);

  // Helper to compute stats
  const computeDistinctionStats = (result: { pairs: DistinctionPair[] }): DistinctionStats => ({
    total: result.pairs.length,
    pass: result.pairs.filter(p => p.icon === '✅').length,
    warn: result.pairs.filter(p => p.icon === '⚠️').length,
    fail: result.pairs.filter(p => p.icon === '❌').length,
    skipped: 0,
  });

  // Print human-readable distinction section (unified)
  if (options.format === 'human') {
    console.log(`\n▌ ${LABELS.sectionDistinction}`);
    console.log('─'.repeat(OUTPUT_WIDTH));

    const printCategory = (name: string, pairs: DistinctionPair[], issuesOnly: boolean) => {
      const display = issuesOnly ? pairs.filter(p => !p.pass) : pairs;
      if (display.length === 0 && issuesOnly) return;
      console.log(`  ${name}:`);
      for (const p of display) {
        const pairName = `${p.name1}↔${p.name2}`.padEnd(20);
        console.log(`    ${pairName} ΔE ${p.deltaE.toFixed(1).padStart(5)} ${p.icon} ${p.level}`);
      }
    };

    printCategory('Syntax', syntaxDistinction.pairs, options.issuesOnly);
    printCategory('Status', statusDistinction.pairs, options.issuesOnly);
    printCategory('Git', gitDistinction.pairs, options.issuesOnly);
    printCategory('State', stateDistinction.pairs, options.issuesOnly);
    printCategory('Symbol', symbolDistinction.pairs, options.issuesOnly);
  }

  // Collect all distinction stats for summary
  const allDistinctionStats = {
    syntax: computeDistinctionStats(syntaxDistinction),
    status: computeDistinctionStats(statusDistinction),
    git: computeDistinctionStats(gitDistinction),
    state: computeDistinctionStats(stateDistinction),
    symbol: computeDistinctionStats(symbolDistinction),
  };

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
  if (options.format === 'json') {
    // Filter helper for issuesOnly mode
    const filterResults = (results: ColorResult[]) =>
      options.issuesOnly
        ? results.filter(r => !r.analysis.pass || r.fallback)
        : results;

    const filterPairs = (pairs: DistinctionPair[]) =>
      options.issuesOnly
        ? pairs.filter(p => !p.pass)
        : pairs;

    // Helper to format distinction category for JSON
    const toJsonDistinctionCategory = (
      result: { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] }
    ): JsonDistinctionCategory => ({
      pairs: filterPairs(result.pairs).map(p => ({
        pair: [p.name1, p.name2] as [string, string],
        colors: [p.color1, p.color2] as [string, string],
        keys: [p.key1, p.key2] as [string, string],
        deltaE: Math.round(p.deltaE * 10) / 10,
        level: p.level,
        pass: p.pass,
      })),
      skipped: result.skipped.map(s => ({
        pair: [s.name1, s.name2] as [string, string],
        reason: s.reason,
      })),
    });

    const jsonOutput: JsonOutput = {
      theme: name,
      type,
      sections: allSections.map(s => ({
        section: s.title,
        results: filterResults(s.results).map(toJsonColorResult),
      })),
      distinction: {
        syntax: toJsonDistinctionCategory(syntaxDistinction),
        status: toJsonDistinctionCategory(statusDistinction),
        git: toJsonDistinctionCategory(gitDistinction),
        state: toJsonDistinctionCategory(stateDistinction),
        symbol: toJsonDistinctionCategory(symbolDistinction),
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

  // Unified distinction summary
  console.log('');
  console.log('  ΔE Color Distinction:');
  const printDistinctionSummary = (name: string, stats: DistinctionStats) => {
    if (stats.total === 0) return;
    const statusIcon = stats.fail > 0 ? '❌' : stats.warn > 0 ? '⚠️' : '✅';
    console.log(`    ${statusIcon} ${name.padEnd(8)} ${stats.pass}/${stats.total} distinct`);
  };
  printDistinctionSummary('Syntax', allDistinctionStats.syntax);
  printDistinctionSummary('Status', allDistinctionStats.status);
  printDistinctionSummary('Git', allDistinctionStats.git);
  printDistinctionSummary('State', allDistinctionStats.state);
  printDistinctionSummary('Symbol', allDistinctionStats.symbol);

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
  --issues-only     Show only items that need attention (hide passed)
  --test FG BG      Test foreground on background
  --help, -h        Show this help

Examples:
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json --json
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json --issues-only
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
  let issuesOnly = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--theme' && args[i + 1]) {
      themePath = path.resolve(args[++i]);
    } else if (args[i] === '--json') {
      jsonOutput = true;
    } else if (args[i] === '--issues-only') {
      issuesOnly = true;
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
    runAnalysis(themePath, {
      format: jsonOutput ? 'json' : 'human',
      issuesOnly,
    });
    // Exit 0: Analysis completed successfully (LLM tool calling best practice)
    // The output text communicates whether issues were found
  } else {
    console.error(LABELS.errThemeRequired);
    process.exit(1);
  }
}
