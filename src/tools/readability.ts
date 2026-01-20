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
  BG_KEYS,
  LABELS,
  EXPECTED_DIM_ELEMENTS,
  ADJACENCY_PAIRS,
  SYMBOL_DISCRIMINATION_PAIRS,
  STATUS_DISTINCTION_PAIRS,
  GIT_DISTINCTION_PAIRS,
  STATE_DISTINCTION_PAIRS,
  BRACKET_DISTINCTION_PAIRS,
  TERMINAL_DISTINCTION_PAIRS,
  DIFF_DISTINCTION_PAIRS,
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
  ColorResult,
  Stats,
  DistinctionPair,
  DistinctionSkippedPair,
  SectionData,
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

/**
 * Map keyType to actual source file path for easier navigation
 */
function getSourceFile(keyType: 'workbench' | 'textmate' | 'semantic'): string {
  switch (keyType) {
    case 'workbench':
      return 'workbench.ts';
    case 'semantic':
      return 'semanticTokens.ts';
    case 'textmate':
      return 'tokenColors.ts';
  }
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

/**
 * Analyze bracket distinction (rainbow brackets)
 * Adjacent nesting levels should be distinguishable
 */
function analyzeBracketDistinction(
  brackets: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of BRACKET_DISTINCTION_PAIRS) {
    const cv1 = brackets[name1];
    const cv2 = brackets[name2];

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
 * Analyze terminal ANSI distinction
 * Critical for error vs success identification (red/green)
 */
function analyzeTerminalDistinction(
  terminal: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of TERMINAL_DISTINCTION_PAIRS) {
    const cv1 = terminal[name1];
    const cv2 = terminal[name2];

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
 * Analyze diff distinction (added vs deleted)
 * Critical for code review - must be obviously different
 */
function analyzeDiffDistinction(
  git: Record<string, ColorValue>,
  bg: string
): { pairs: DistinctionPair[]; skipped: DistinctionSkippedPair[] } {
  const pairs: DistinctionPair[] = [];
  const skipped: DistinctionSkippedPair[] = [];

  for (const [name1, name2] of DIFF_DISTINCTION_PAIRS) {
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

// =============================================================================
// OUTPUT FORMATTING (Plain text - one line per issue)
// =============================================================================

/**
 * Format a contrast issue as a single line:
 * CONTRAST file:key Lc=X need=60 bg=background.key
 */
function formatContrastLine(r: ColorResult): string {
  const file = getSourceFile(r.source?.type ?? 'workbench');
  const key = r.source?.key ?? 'unknown';
  const lc = Math.round(Math.abs(r.lc) * 10) / 10;
  const need = r.expectedDim ? 30 : 60;
  return `CONTRAST ${file}:${key} Lc=${lc} need=${need} bg=${r.bgKey}`;
}

/**
 * Format a distinction issue as a single line:
 * DISTINCTION category pair1↔pair2 ΔE=X need=10
 */
function formatDistinctionLine(category: string, p: DistinctionPair): string {
  return `DISTINCTION ${category} ${p.name1}↔${p.name2} ΔE=${p.deltaE.toFixed(1)} need=10`;
}

// =============================================================================
// MAIN ANALYSIS
// =============================================================================

function processSection(
  results: ColorResult[],
  title: string,
  expectedPolarity: Polarity
): SectionData {
  const stats = computeStats(results, expectedPolarity);
  return { title, results, stats };
}

function runAnalysis(themePath: string, options: AnalysisOptions = { issuesOnly: false }): Stats {
  const theme = loadTheme(themePath);
  const name = getThemeName(theme, themePath);
  const type: 'dark' | 'light' = theme.type === 'light' ? 'light' : 'dark';
  const expectedPolarity: Polarity = type === 'dark' ? 'light-on-dark' : 'dark-on-light';
  const c = extractColors(theme);

  const allSections: SectionData[] = [];
  const allStats: Stats[] = [];

  // Helper to process a section and collect results
  const section = (results: ColorResult[], title: string) => {
    const data = processSection(results, title, expectedPolarity);
    allSections.push(data);
    allStats.push(data.stats);
  };

  // Helper to analyze with background key tracking
  const a = (name: string, fgValue: ColorValue, bgKey: BgKeyName) =>
    analyze(name, fgValue, c.bg[bgKey], BG_KEYS[bgKey]);

  // Text (icons removed - shape conveys meaning, not text readability)
  section([
    a('Primary', c.fg, 'editor'),
    a('Global', c.ui.foreground, 'editor'),
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
    // Lightbulb icons removed - shape conveys meaning, not text readability
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
    a('Breadcrumb Focus', c.ui.breadcrumbFocus, 'breadcrumb'),
    a('Breadcrumb Active', c.ui.breadcrumbActive, 'breadcrumb'),
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
    // Notification icons removed - shape conveys meaning, not text readability
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
    // Note: terminalSelection uses selectionForeground if defined, else terminal foreground
    a('Selection', c.ui.terminalSelection, 'terminalSelection'),
    a('Find Match', c.ui.terminal, 'terminalFindMatch'),
  ];
  section(terminalResults, LABELS.sectionTerminal);

  // Buttons & Badges
  section([
    a('Button', c.buttons.button, 'button'),
    a('Button 2nd', c.buttons.buttonSecondary, 'buttonSecondary'),
    a('Ext Button', c.buttons.extensionButton, 'extensionButton'),
    a('Ext Badge Rem', c.buttons.extensionBadgeRemote, 'badge'),
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
    // Banner icon removed - shape conveys meaning, not text readability
    a('Peek Title', c.misc.peekViewTitle, 'peekView'),
    a('Peek Desc', c.misc.peekViewDescription, 'peekView'),
    a('Peek File', c.misc.peekViewFile, 'peekView'),
    a('Peek Select', c.misc.peekViewSelection, 'peekViewSelection'),
    // Problems icons removed - shape conveys meaning, not text readability
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
    // Inline edit indicators (AI suggestions)
    a('InlineEdit Pri', c.misc.inlineEditPrimary, 'editor'),
    a('InlineEdit Sec', c.misc.inlineEditSecondary, 'editor'),
    a('InlineEdit OK', c.misc.inlineEditSuccess, 'editor'),
    // Editor group
    a('Drop Prompt', c.misc.dropPrompt, 'editor'),
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

  // SCM Graph - hover labels and stats (graph lines removed as decorative)
  section([
    a('Hover Label', c.scm.historyHoverLabel, 'sidebar'),
    a('Hover Add', c.scm.historyHoverAdditions, 'sidebar'),
    a('Hover Del', c.scm.historyHoverDeletions, 'sidebar'),
    a('History Add', c.scm.historyAdditions, 'sidebar'),
    a('History Del', c.scm.historyDeletions, 'sidebar'),
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
    a('Test Msg Error', c.testing.messageError, 'editor'),
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

  // Charts - axis labels, legends (text, not decorative)
  section([
    a('Chart Text', c.charts.foreground, 'editor'),
  ], LABELS.sectionCharts);

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

  // 6. Bracket distinction - rainbow brackets need adjacent level distinction
  const bracketDistinction = analyzeBracketDistinction(c.brackets, c.bg.editor);

  // 7. Terminal ANSI distinction - red/green for error/success
  const terminalDistinction = analyzeTerminalDistinction(c.terminal, c.bg.terminal);

  // 8. Diff distinction - added/deleted must be obviously different
  const diffDistinction = analyzeDiffDistinction(c.git, c.bg.sidebar);

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

  // Collect all distinction results
  const allDistinctions: Array<{ category: string; pairs: DistinctionPair[] }> = [
    { category: 'syntax', pairs: syntaxDistinction.pairs },
    { category: 'status', pairs: statusDistinction.pairs },
    { category: 'git', pairs: gitDistinction.pairs },
    { category: 'state', pairs: stateDistinction.pairs },
    { category: 'symbol', pairs: symbolDistinction.pairs },
    { category: 'bracket', pairs: bracketDistinction.pairs },
    { category: 'terminal', pairs: terminalDistinction.pairs },
    { category: 'diff', pairs: diffDistinction.pairs },
  ];

  // ==========================================================================
  // PLAIN TEXT OUTPUT (one line per issue)
  // ==========================================================================

  const output: string[] = [];

  // Filter contrast issues
  // - Skip passed items
  // - Skip fallback items (VS Code defaults work fine)
  // - Skip expectedDim items (intentionally low contrast)
  const contrastIssues = allSections.flatMap(s =>
    s.results.filter(r => !r.analysis.pass && !r.fallback && !r.expectedDim)
  );

  // Filter distinction issues (ΔE < 10)
  const distinctionIssues = allDistinctions.flatMap(d =>
    d.pairs.filter(p => !p.pass).map(p => ({ category: d.category, pair: p }))
  );

  // Output contrast issues
  for (const r of contrastIssues) {
    output.push(formatContrastLine(r));
  }

  // Output distinction issues
  for (const { category, pair } of distinctionIssues) {
    output.push(formatDistinctionLine(category, pair));
  }

  // Summary line
  const defined = total.total - total.missing;
  const distinctionFails = distinctionIssues.length;
  const ready = total.fail === 0 && total.large === 0 && distinctionFails === 0;

  output.push('');
  output.push(`SUMMARY pass=${total.pass}/${defined} fail=${total.fail + total.large} distinction_fail=${distinctionFails} ready=${ready}`);

  // Print all output (or filter if --issues-only and ready)
  if (options.issuesOnly && ready) {
    console.log('SUMMARY pass=' + total.pass + '/' + defined + ' fail=0 distinction_fail=0 ready=true');
  } else {
    console.log(output.join('\n'));
  }

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
  npx tsx src/tools/readability.ts --theme <path>    Analyze theme (plain text output)
  npx tsx src/tools/readability.ts --test FG BG      Test single color pair

Options:
  --theme <path>    Path to VS Code theme JSON file
  --issues-only     Only output if there are issues (silent when ready)
  --test FG BG      Test foreground on background
  --help, -h        Show this help

Output Format (one line per issue):
  CONTRAST file:key Lc=X need=Y bg=Z
  DISTINCTION category pair1↔pair2 ΔE=X need=10
  SUMMARY pass=N/M fail=N distinction_fail=N ready=true|false

Examples:
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json
  npx tsx src/tools/readability.ts --theme ./themes/my-theme.json --issues-only
  npx tsx src/tools/readability.ts --test "#FFFFFF" "#1A1A1A"
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
  let issuesOnly = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--theme' && args[i + 1]) {
      themePath = path.resolve(args[++i]);
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
    runAnalysis(themePath, { issuesOnly });
  } else {
    console.error(LABELS.errThemeRequired);
    process.exit(1);
  }
}
