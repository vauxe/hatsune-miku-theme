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

import {
  BG_KEYS,
  LABELS,
  EXPECTED_DIM_ELEMENTS,
  PRIMARY_SYNTAX_ELEMENTS,
  APCA_THRESHOLDS,
  DISTINCTION_THRESHOLDS,
  CRITICAL_DISTINCTION_PAIRS,
  CHROMA_THRESHOLDS,
  ACCENT_CHROMA_ELEMENTS,
  SECONDARY_CHROMA_ELEMENTS,
  SYMBOL_DISCRIMINATION_PAIRS,
  STATUS_DISTINCTION_PAIRS,
  GIT_DISTINCTION_PAIRS,
  STATE_DISTINCTION_PAIRS,
  BRACKET_DISTINCTION_PAIRS,
  TERMINAL_DISTINCTION_PAIRS,
  MARKDOWN_ALERT_DISTINCTION_PAIRS,
  TESTING_DISTINCTION_PAIRS,
  DEBUG_ICON_DISTINCTION_PAIRS,
  SCM_GRAPH_DISTINCTION_PAIRS,
  TERMINAL_SYMBOL_DISTINCTION_PAIRS,
  EXTENSION_ICON_DISTINCTION_PAIRS,
  // Semantic color groups
  SEMANTIC_COLOR_GROUPS,
  MUST_DISTINGUISH_PAIRS,
  SEMANTIC_DISTINCTION_THRESHOLDS,
  getTokenGroup,
  // CVD (Color Vision Deficiency)
  CVD_CRITICAL_PAIRS,
  CVD_DISTINCTION_THRESHOLD,
  // Compound background contrast
  COMPOUND_BACKGROUND_KEYS,
  COMPOUND_SYNTAX_TOKENS,
  // UI visibility
  UI_VISIBILITY,
} from './readability-constants';
import type { BgKeyName, ChromaTier, CompoundBgKeyName } from './readability-constants';

import {
  isValidHex,
  stripAlpha,
  extractAlpha,
  blendAlpha,
  getAPCAContrast,
  analyzeAPCA,
  deltaEzHex,
  getDistinctionLevel,
  getChroma,
  analyzeChroma,
  checkCVDDistinction,
  simulateCVD,
  suggestContrastFix,
  suggestDistinctionFix,
  suggestChromaFix,
  analyzeLightnessUniformity,
  analyzeHueDistribution,
} from './readability-color';

import {
  loadTheme,
  extractColors,
} from './readability-theme';

import type {
  ColorValue,
  ColorResult,
  Stats,
  DistinctionPair,
  SectionData,
  AnalysisOptions,
  APCATier,
  SemanticGroupName,
  CrossGroupDistinctionResult,
  CVDFailure,
  CompoundBackgroundFailure,
  CompoundBackgroundIssue,
  CompoundBackgroundAnalysis,
  LightnessUniformityResult,
  HueDistributionResult,
} from './readability-types';

// =============================================================================
// ANALYSIS HELPERS
// =============================================================================

/**
 * Analyze a foreground color against a background for APCA contrast.
 *
 * Handles transparency by blending semi-transparent foregrounds with the
 * background before calculating contrast. This matches how VS Code renders
 * transparent colors.
 *
 * @param name - Display name for the color (used in output and expectedDim lookup)
 * @param fgValue - Foreground color with fallback flag and source info
 * @param bg - Background color (must be opaque hex)
 * @param bgKey - VS Code API key for the background (shown in output for debugging)
 * @returns Analysis result with Lc value, level, and pass/fail status
 */
function analyze(name: string, fgValue: ColorValue, bg: string, bgKey = ''): ColorResult {
  const fg = fgValue.color;
  const alpha = extractAlpha(fg);
  const baseColor = stripAlpha(fg);
  const effectiveColor = alpha < 1 ? blendAlpha(baseColor, bg, alpha) : baseColor;
  const result = getAPCAContrast(effectiveColor, bg);
  const alphaStr = alpha < 1 ? `${Math.round(alpha * 100)}%` : undefined;

  // Determine APCA tier based on element type
  const isPrimary = PRIMARY_SYNTAX_ELEMENTS.has(name);
  const isExpectedDim = EXPECTED_DIM_ELEMENTS.has(name);
  const apcaTier: APCATier = isExpectedDim ? 'tertiary' : isPrimary ? 'primary' : 'secondary';

  return {
    name,
    color: effectiveColor,
    bgColor: bg,
    bgKey,
    lc: result.lc,
    analysis: analyzeAPCA(result, apcaTier),
    tier: apcaTier,
    alpha: alphaStr,
    fallback: fgValue.fallback,
    expectedDim: isExpectedDim,
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

/**
 * Compute statistics from analysis results.
 *
 * Categorizes results into:
 * - pass: Meets tier threshold (primary 80+, secondary 75+, tertiary 45+)
 * - large: Large/Non-Text level (Lc 30-60) but NOT expectedDim - needs attention
 * - expectedDim: Large/Non-Text level AND in EXPECTED_DIM_ELEMENTS - intentionally subtle, OK
 * - fail: Below tier threshold and not Large/Non-Text level (includes Content level
 *         that doesn't meet primary/secondary threshold, or Lc < 30)
 * - missing: Color not defined in theme (fallback to editor.foreground)
 *
 * @param results - Array of color analysis results
 * @returns Aggregated statistics with counts and original results
 */
function computeStats(results: ColorResult[]): Stats {
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
 * Generic color distinction analyzer.
 * Compares pairs of colors to ensure they are visually distinguishable.
 * Handles transparent colors by compositing against background before comparison.
 * Uses higher threshold (18 vs 12) for safety-critical pairs.
 *
 * @param colors - Color map to analyze
 * @param pairsDef - Array of [name1, name2] pairs to compare
 * @param bg - Background color for alpha compositing
 */
function analyzeColorDistinction(
  colors: Record<string, ColorValue>,
  pairsDef: readonly (readonly [string, string])[],
  bg: string
): DistinctionPair[] {
  const pairs: DistinctionPair[] = [];

  for (const [name1, name2] of pairsDef) {
    const cv1 = colors[name1];
    const cv2 = colors[name2];

    // Skip missing or fallback colors
    if (!cv1 || !cv2 || cv1.fallback || cv2.fallback) continue;

    const dE = deltaEzHex(cv1.color, cv2.color, bg);
    if (dE === null) continue;

    // Check if this is a critical pair (error/warning, red/green, etc.)
    const pairKey = `${name1}↔${name2}`;
    const pairKeyReverse = `${name2}↔${name1}`;
    const isCritical = CRITICAL_DISTINCTION_PAIRS.has(pairKey) || CRITICAL_DISTINCTION_PAIRS.has(pairKeyReverse);

    const { level, icon, pass } = getDistinctionLevel(dE, isCritical);
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
      critical: isCritical,
    });
  }

  return pairs.sort((a, b) => a.deltaE - b.deltaE);
}

/** Symbol icons - autocomplete, outline, breadcrumbs */
const analyzeSymbolDistinction = (symbols: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(symbols, SYMBOL_DISCRIMINATION_PAIRS, bg);

/** Status distinction - error/warning/info severity */
const analyzeStatusDistinction = (syntax: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(syntax, STATUS_DISTINCTION_PAIRS, bg);

/** Git distinction - added/modified/deleted/untracked */
const analyzeGitDistinction = (git: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(git, GIT_DISTINCTION_PAIRS, bg);

/** State distinction - active vs inactive UI elements */
const analyzeStateDistinction = (states: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(states, STATE_DISTINCTION_PAIRS, bg);

/** Bracket distinction - rainbow brackets adjacent levels */
const analyzeBracketDistinction = (brackets: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(brackets, BRACKET_DISTINCTION_PAIRS, bg);

/** Terminal ANSI distinction - red/green for error/success */
const analyzeTerminalDistinction = (terminal: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(terminal, TERMINAL_DISTINCTION_PAIRS, bg);

/** Markdown alert distinction - note/tip/warning/etc */
const analyzeMarkdownAlertDistinction = (alerts: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(alerts, MARKDOWN_ALERT_DISTINCTION_PAIRS, bg);

/** Testing icon distinction - pass/fail/error states */
const analyzeTestingDistinction = (testing: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(testing, TESTING_DISTINCTION_PAIRS, bg);

/** Debug icon distinction - breakpoint states, toolbar actions */
const analyzeDebugIconDistinction = (debug: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(debug, DEBUG_ICON_DISTINCTION_PAIRS, bg);

/** SCM graph distinction - branch visualization colors */
const analyzeScmGraphDistinction = (scm: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(scm, SCM_GRAPH_DISTINCTION_PAIRS, bg);

/** Terminal symbol distinction - shell integration icons */
const analyzeTerminalSymbolDistinction = (symbols: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(symbols, TERMINAL_SYMBOL_DISTINCTION_PAIRS, bg);

/** Extension icon distinction - marketplace icons */
const analyzeExtensionIconDistinction = (icons: Record<string, ColorValue>, bg: string) =>
  analyzeColorDistinction(icons, EXTENSION_ICON_DISTINCTION_PAIRS, bg);

// =============================================================================
// SEMANTIC COLOR GROUP ANALYSIS
// =============================================================================

/**
 * Analyze semantic token pairs for proper visual distinction.
 *
 * Tokens in DIFFERENT semantic groups MUST be visually distinct.
 * This catches issues like keyword↔variable or function↔parameter being too similar.
 *
 * @param syntax - Syntax colors from theme
 * @param bg - Background color for alpha compositing
 */
function analyzeSemanticDistinction(
  syntax: Record<string, ColorValue>,
  bg: string
): { distinction: CrossGroupDistinctionResult[]; summary: { distinctionPass: number; distinctionFail: number; criticalFail: number } } {
  const distinction: CrossGroupDistinctionResult[] = [];

  for (const [token1, token2, priority] of MUST_DISTINGUISH_PAIRS) {
    const cv1 = syntax[token1];
    const cv2 = syntax[token2];

    // Skip if either token is missing or fallback
    if (!cv1 || !cv2 || cv1.fallback || cv2.fallback) {
      continue;
    }

    const group1 = getTokenGroup(token1);
    const group2 = getTokenGroup(token2);

    const dE = deltaEzHex(cv1.color, cv2.color, bg);
    if (dE === null) continue;

    const required = SEMANTIC_DISTINCTION_THRESHOLDS[priority];
    const pass = dE >= required;

    distinction.push({
      token1,
      token2,
      group1: group1 ?? 'VARIABLE',
      group2: group2 ?? 'VARIABLE',
      color1: cv1.color,
      color2: cv2.color,
      deltaE: Math.round(dE * 10) / 10,
      required,
      priority,
      pass,
      icon: pass ? '✅' : '❌',
    });
  }

  // Sort distinction by deltaE ascending (worst first)
  distinction.sort((a, b) => a.deltaE - b.deltaE);

  const distinctionPass = distinction.filter(d => d.pass).length;
  const distinctionFail = distinction.filter(d => !d.pass).length;
  const criticalFail = distinction.filter(d => !d.pass && d.priority === 'critical').length;

  return {
    distinction,
    summary: {
      distinctionPass,
      distinctionFail,
      criticalFail,
    },
  };
}

// =============================================================================
// UI VISIBILITY ANALYSIS
// =============================================================================

interface UIVisibilityResult {
  name: string;
  color1: string;
  color2: string;
  deltaE: number;
  required: number;
  pass: boolean;
}

/**
 * Analyze UI element visibility - things users directly notice.
 */
function analyzeUIVisibility(bg: Record<string, string>): UIVisibilityResult[] {
  const results: UIVisibilityResult[] = [];

  // Selection visibility: Can you SEE the selection?
  const selectionDeltaE = deltaEzHex(bg.selection, bg.editor, bg.editor);
  if (selectionDeltaE !== null) {
    results.push({
      name: 'selection',
      color1: bg.selection,
      color2: bg.editor,
      deltaE: Math.round(selectionDeltaE * 10) / 10,
      required: UI_VISIBILITY.selectionVisibility,
      pass: selectionDeltaE >= UI_VISIBILITY.selectionVisibility,
    });
  }

  // Find match visibility: Can you see search results?
  const findDeltaE = deltaEzHex(bg.findMatchActive, bg.editor, bg.editor);
  if (findDeltaE !== null) {
    results.push({
      name: 'findMatch',
      color1: bg.findMatchActive,
      color2: bg.editor,
      deltaE: Math.round(findDeltaE * 10) / 10,
      required: UI_VISIBILITY.findMatchVisibility,
      pass: findDeltaE >= UI_VISIBILITY.findMatchVisibility,
    });
  }

  // Tab distinction: Active vs inactive tabs
  const tabDeltaE = deltaEzHex(bg.tabBar, bg.editor, bg.editor);
  if (tabDeltaE !== null) {
    results.push({
      name: 'tabActive↔inactive',
      color1: bg.tabBar,
      color2: bg.editor,
      deltaE: Math.round(tabDeltaE * 10) / 10,
      required: UI_VISIBILITY.tabDistinction,
      pass: tabDeltaE >= UI_VISIBILITY.tabDistinction,
    });
  }

  // Diff distinction: Added vs removed
  const diffDeltaE = deltaEzHex(bg.diffInserted, bg.diffRemoved, bg.editor);
  if (diffDeltaE !== null) {
    results.push({
      name: 'diffAdded↔removed',
      color1: bg.diffInserted,
      color2: bg.diffRemoved,
      deltaE: Math.round(diffDeltaE * 10) / 10,
      required: UI_VISIBILITY.diffDistinction,
      pass: diffDeltaE >= UI_VISIBILITY.diffDistinction,
    });
  }

  return results;
}

/**
 * Check cursor visibility against editor background.
 */
function analyzeCursorVisibility(cursorColor: string, editorBg: string): { lc: number; pass: boolean } {
  const result = getAPCAContrast(cursorColor, editorBg);
  return {
    lc: Math.round(Math.abs(result.lc) * 10) / 10,
    pass: Math.abs(result.lc) >= UI_VISIBILITY.cursorContrast,
  };
}

// =============================================================================
// COLOR VISION DEFICIENCY (CVD) ANALYSIS
// =============================================================================

/**
 * Analyze critical color pairs for distinguishability under color vision deficiency.
 * ~8% of males have red-green color blindness (protanopia/deuteranopia).
 *
 * @param colors - All extracted theme colors organized by category
 * @param bg - Background color for alpha compositing
 * @returns Array of CVD failures (pairs that become indistinguishable under CVD)
 */
function analyzeCVD(
  colors: {
    git: Record<string, ColorValue>;
    syntax: Record<string, ColorValue>;
    terminal: Record<string, ColorValue>;
    testing: Record<string, ColorValue>;
  },
  bg: string
): CVDFailure[] {
  const failures: CVDFailure[] = [];

  // Map category names to color sources
  const colorSources: Record<string, Record<string, ColorValue>> = {
    git: colors.git,
    status: colors.syntax,  // error/warning/info are in syntax
    terminal: colors.terminal,
    testing: colors.testing,
    diff: colors.syntax,  // markup colors are in syntax
  };

  for (const { category, pairs } of CVD_CRITICAL_PAIRS) {
    const source = colorSources[category];
    if (!source) continue;

    for (const [name1, name2] of pairs) {
      const cv1 = source[name1];
      const cv2 = source[name2];

      // Skip if colors not defined
      if (!cv1 || !cv2 || cv1.fallback || cv2.fallback) continue;

      const result = checkCVDDistinction(cv1.color, cv2.color, bg);

      // Check if worst CVD type fails the threshold
      if (result.worstDeltaE < CVD_DISTINCTION_THRESHOLD) {
        failures.push({
          name1,
          name2,
          color1: cv1.color,
          color2: cv2.color,
          category,
          result,
          required: CVD_DISTINCTION_THRESHOLD,
        });
      }
    }
  }

  return failures;
}

/**
 * Format a CVD failure as a single line:
 * CVD category pair1↔pair2 worst=type ΔE=X need=Y (normal=Z)
 */
function formatCVDLine(f: CVDFailure): string {
  const typeLabels = { protan: 'red-blind', deutan: 'green-blind', tritan: 'blue-blind' };
  const typeLabel = typeLabels[f.result.worstType];
  return `CVD ${f.category} ${f.name1}↔${f.name2} ${typeLabel} ΔE=${f.result.worstDeltaE.toFixed(1)} need=${f.required} (normal=${f.result.normal.toFixed(1)})`;
}

// =============================================================================
// COMPOUND BACKGROUND CONTRAST ANALYSIS
// =============================================================================

/**
 * Analyze syntax colors against all overlay backgrounds.
 *
 * A syntax color might be readable on editor.background (Lc 80) but fail
 * when an overlay is applied (selection, find match, diff background).
 * This analysis finds these hidden failures.
 *
 * @param syntax - All syntax colors from theme
 * @param bg - All resolved background colors
 * @returns Analysis with any failing token/background combinations
 */
function analyzeCompoundBackgroundContrast(
  syntax: Record<string, ColorValue>,
  bg: Record<string, string>
): CompoundBackgroundAnalysis {
  const failures: CompoundBackgroundFailure[] = [];
  let tokensAnalyzed = 0;
  let tokensPassing = 0;

  // Test each primary syntax color using the actual record keys
  for (const tokenName of COMPOUND_SYNTAX_TOKENS) {
    const cv = syntax[tokenName];
    if (!cv || cv.fallback) continue;

    tokensAnalyzed++;

    // First check if it passes on editor.background
    const editorBg = bg.editor;
    const editorResult = getAPCAContrast(cv.color, editorBg);
    const editorLc = Math.abs(editorResult.lc);
    const tier: APCATier = 'primary';
    const required = APCA_THRESHOLDS[tier];

    // Skip if it doesn't even pass on editor background (already reported elsewhere)
    if (editorLc < required) continue;

    // Test against all compound backgrounds
    const failingBackgrounds: CompoundBackgroundIssue[] = [];

    for (const [bgName, bgKey] of Object.entries(COMPOUND_BACKGROUND_KEYS)) {
      const bgHex = bg[bgName as keyof typeof bg];
      if (!bgHex || bgHex === editorBg) continue; // Skip if same as editor or not defined

      const result = getAPCAContrast(cv.color, bgHex);
      const lc = Math.abs(result.lc);

      if (lc < required) {
        failingBackgrounds.push({
          bgName,
          bgKey,
          bgHex,
          lc: Math.round(lc * 10) / 10,
          required,
        });
      }
    }

    if (failingBackgrounds.length > 0) {
      // Sort by worst Lc first
      failingBackgrounds.sort((a, b) => a.lc - b.lc);
      const worst = failingBackgrounds[0];

      failures.push({
        tokenName,
        tokenHex: cv.color,
        editorLc: Math.round(editorLc * 10) / 10,
        tier,
        failingBackgrounds,
        worstLc: worst.lc,
        worstBgName: worst.bgName,
      });
    } else {
      tokensPassing++;
    }
  }

  return {
    tokensAnalyzed,
    tokensPassing,
    tokensFailing: failures.length,
    failures,
    pass: failures.length === 0,
  };
}

/**
 * Format a compound background failure as a single line:
 * COMPOUND token fails on N backgrounds: worst=bgName Lc=X need≥Y (editor Lc=Z)
 */
function formatCompoundLine(f: CompoundBackgroundFailure): string {
  const bgList = f.failingBackgrounds.map(b => b.bgName).join(', ');
  return `COMPOUND ${f.tokenName} fails on ${f.failingBackgrounds.length} bg(s): worst=${f.worstBgName} Lc=${f.worstLc} need≥${APCA_THRESHOLDS[f.tier]} (editor Lc=${f.editorLc}) [${bgList}]`;
}

/**
 * Format a semantic distinction issue as a single line.
 * TOOSIMILAR = tokens across groups are too similar (problem)
 */
function formatSemanticDistinctionLine(r: CrossGroupDistinctionResult): string {
  const priorityTag = r.priority === 'critical' ? 'CRITICAL' : r.priority === 'high' ? 'HIGH' : 'STD';
  return `TOOSIMILAR ${r.token1}↔${r.token2} ΔE=${r.deltaE} need≥${r.required} ${priorityTag}`;
}

// =============================================================================
// OUTPUT FORMATTING (Plain text - one line per issue)
// =============================================================================

/**
 * Format a contrast issue as a single line:
 * CONTRAST file:key Lc=X need=Y tier=T reason → suggestion
 */
function formatContrastLine(r: ColorResult): string {
  const file = getSourceFile(r.source?.type ?? 'workbench');
  const key = r.source?.key ?? 'unknown';
  const lc = Math.round(Math.abs(r.lc) * 10) / 10;
  const isHalation = r.analysis.failReason === 'halation';
  const targetLc = isHalation ? APCA_THRESHOLDS.max : APCA_THRESHOLDS[r.tier];
  const need = isHalation ? `≤${targetLc}` : `≥${targetLc}`;
  const reason = isHalation ? 'halation' : 'too-dim';
  const suggestion = isHalation
    ? 'darken foreground slightly'
    : suggestContrastFix(r.lc, targetLc, r.analysis.polarity);
  return `CONTRAST ${file}:${key} Lc=${lc} need=${need} tier=${r.tier} ${reason} → ${suggestion}`;
}

/**
 * Format a distinction issue as a single line:
 * DISTINCTION category pair1↔pair2 ΔE=X need=Y [critical]
 */
function formatDistinctionLine(category: string, p: DistinctionPair): string {
  const need = p.critical ? DISTINCTION_THRESHOLDS.critical : DISTINCTION_THRESHOLDS.standard;
  const criticalTag = p.critical ? ' [critical]' : '';
  return `DISTINCTION ${category} ${p.name1}↔${p.name2} ΔE=${p.deltaE.toFixed(1)} need=${need}${criticalTag}`;
}

/**
 * Chroma analysis result (using perceptually uniform LCH)
 */
interface ChromaResult {
  name: string;
  color: string;
  chroma: number;
  icon: string;
  level: string;
  pass: boolean;
  failReason?: 'too-low' | 'too-high';
  tier: ChromaTier;
}

/**
 * Determine chroma tier for an element.
 * - Accent: errors, warnings, brackets, git status - can be vibrant
 * - Secondary: comments, punctuation - can be muted
 * - Primary: everything else - balanced
 */
function getChromaTier(name: string): ChromaTier {
  if (ACCENT_CHROMA_ELEMENTS.has(name)) return 'accent';
  if (SECONDARY_CHROMA_ELEMENTS.has(name)) return 'secondary';
  return 'primary';
}

/**
 * Analyze chroma of colors for comfortable extended viewing.
 * Uses JzCzhz Chroma (Cz) which is perceptually uniform across hues.
 * Applies tier-specific thresholds based on element type.
 *
 * @param colors - Color record to analyze (syntax, git, brackets, terminal, etc.)
 */
function analyzeColorChroma(colors: Record<string, ColorValue>): ChromaResult[] {
  const results: ChromaResult[] = [];

  for (const [name, cv] of Object.entries(colors)) {
    if (cv.fallback) continue;

    const rawChroma = getChroma(cv.color);
    if (rawChroma === null) continue;

    const tier = getChromaTier(name);
    const analysis = analyzeChroma(rawChroma, tier);

    // Use JzCzhz percentage scale for display (raw * 525)
    const chromaPercent = Math.round(analysis.chromaPercent);

    results.push({
      name,
      color: cv.color,
      chroma: chromaPercent,
      icon: analysis.icon,
      level: analysis.level,
      pass: analysis.pass,
      failReason: analysis.failReason,
      tier,
    });
  }

  // Sort by chroma descending (highest first)
  return results.sort((a, b) => b.chroma - a.chroma);
}

/**
 * Format a chroma issue as a single line:
 * CHROMA element color Cz=X tier=T need=min-max reason → suggestion
 */
function formatChromaLine(r: ChromaResult): string {
  const { min, max } = CHROMA_THRESHOLDS[r.tier];
  const reason = r.failReason === 'too-low' ? 'too-gray' : 'too-vivid';
  const suggestion = suggestChromaFix(r.chroma, min, max);
  return `CHROMA ${r.name} ${r.color} Cz=${r.chroma} tier=${r.tier} need=${min}-${max} ${reason} → ${suggestion}`;
}

// =============================================================================
// MAIN ANALYSIS
// =============================================================================

/**
 * Process a section of color results for output.
 *
 * @param results - Color analysis results for this section
 * @param title - Section title (e.g., "SYNTAX", "WIDGETS")
 * @returns Section data with title, results, and computed statistics
 */
function processSection(
  results: ColorResult[],
  title: string
): SectionData {
  const stats = computeStats(results);
  return { title, results, stats };
}

/**
 * Run full readability analysis on a VS Code theme.
 *
 * Performs 9 types of analysis:
 * 1. **APCA Contrast**: Foreground/background pairs (Lc 75/70/45 by tier, max 90)
 * 2. **Semantic Distinction**: Cross-group token pairs (ΔEz 18/15/12 by priority)
 * 3. **Element Distinction**: Symbol, status, git, bracket, terminal pairs (ΔEz ≥ 15)
 * 4. **Chroma**: Saturation range for eye fatigue (Cz% 8-45 primary, 5-45 secondary, 8-60 accent)
 * 5. **CVD Simulation**: Critical pairs under protanopia/deuteranopia/tritanopia (ΔEz ≥ 12)
 * 6. **UI Visibility**: Selection, find match, tab, diff, cursor visibility
 * 7. **Compound Background**: Syntax colors on all 20 overlay backgrounds (Lc ≥ 75)
 * 8. **Lightness Uniformity**: Jz spread across primary syntax (≤ 0.03)
 * 9. **Hue Distribution**: Minimum 30° gap between syntax hues
 *
 * @param themePath - Path to VS Code theme JSON file
 * @param options - Output options:
 *   - issuesOnly: Suppress output if no issues found
 *   - verbose: Show all results, not just issues
 * @returns Aggregated statistics across all sections
 */
function runAnalysis(themePath: string, options: AnalysisOptions = { issuesOnly: false, verbose: false }): Stats {
  const theme = loadTheme(themePath);
  const c = extractColors(theme);

  const allSections: SectionData[] = [];
  const allStats: Stats[] = [];

  // Helper to process a section and collect results
  const section = (results: ColorResult[], title: string) => {
    const data = processSection(results, title);
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
    a('Color Value', c.syntax.colorValue, 'editor'), // CSS #hex, rgb()
    a('Tags', c.syntax.tag, 'editor'),
    a('Attributes', c.syntax.attribute, 'editor'),
    // CSS-specific
    a('CSS Selector', c.syntax.cssSelector, 'editor'),
    a('CSS Property', c.syntax.cssPropertyName, 'editor'),
    // Decorators, links, etc.
    a('Decorators', c.syntax.decorator, 'editor'),
    a('Links', c.syntax.link, 'editor'),
    a('Punctuation', c.syntax.punctuation, 'editor'),
    a('Macros', c.syntax.macro, 'editor'),
    a('Structs', c.syntax.struct, 'editor'),
    // Entity patterns
    a('Section', c.syntax.section, 'editor'), // Document sections
    a('Inherited', c.syntax.inheritedClass, 'editor'), // extends/implements
    // Semantic tokens
    a('Labels', c.syntax.label, 'editor'), // goto, case labels
    a('Events', c.syntax.event, 'editor'), // event handlers
    // Invalid/Deprecated
    a('Invalid', c.syntax.invalid, 'editor'),
    a('Deprecated', c.syntax.deprecated, 'editor'),
    // Support (framework/library)
    a('Support Func', c.syntax.supportFunction, 'editor'),
    a('Support Class', c.syntax.supportClass, 'editor'), // Array, Map
    a('Support Type', c.syntax.supportType, 'editor'), // string, number
    a('Support Const', c.syntax.supportConstant, 'editor'), // null, undefined
    a('Support Var', c.syntax.supportVariable, 'editor'), // __dirname, process
    // Storage modifiers
    a('Storage Mod', c.syntax.storageModifier, 'editor'),
    // Markup (Markdown, etc.)
    a('Markup Heading', c.syntax.markupHeading, 'editor'),
    a('Markup Bold', c.syntax.markupBold, 'editor'),
    a('Markup Italic', c.syntax.markupItalic, 'editor'),
    a('Markup Code', c.syntax.markupCode, 'editor'),
    a('Markup Quote', c.syntax.markupQuote, 'editor'),
    a('Markup List', c.syntax.markupList, 'editor'),
    // Diff markup
    a('Markup Inserted', c.syntax.markupInserted, 'editor'),
    a('Markup Deleted', c.syntax.markupDeleted, 'editor'),
    a('Markup Changed', c.syntax.markupChanged, 'editor'),
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

  // Terminal - all 16 ANSI colors + context backgrounds
  // Note: Terminal foreground already tested in Workbench UI section as 'Terminal'
  const terminalResults: ColorResult[] = [
    // Standard ANSI colors (8 base colors)
    a('Black', c.terminal.ansiBlack, 'terminal'),
    a('Red', c.terminal.ansiRed, 'terminal'),
    a('Green', c.terminal.ansiGreen, 'terminal'),
    a('Yellow', c.terminal.ansiYellow, 'terminal'),
    a('Blue', c.terminal.ansiBlue, 'terminal'),
    a('Magenta', c.terminal.ansiMagenta, 'terminal'),
    a('Cyan', c.terminal.ansiCyan, 'terminal'),
    a('White', c.terminal.ansiWhite, 'terminal'),
    // Bright ANSI colors (8 bright variants)
    a('Bright Black', c.terminal.ansiBrightBlack, 'terminal'),
    a('Bright Red', c.terminal.ansiBrightRed, 'terminal'),
    a('Bright Green', c.terminal.ansiBrightGreen, 'terminal'),
    a('Bright Yellow', c.terminal.ansiBrightYellow, 'terminal'),
    a('Bright Blue', c.terminal.ansiBrightBlue, 'terminal'),
    a('Bright Magenta', c.terminal.ansiBrightMagenta, 'terminal'),
    a('Bright Cyan', c.terminal.ansiBrightCyan, 'terminal'),
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
    a('Peek Title', c.misc.peekViewTitle, 'peekView'),
    a('Peek Desc', c.misc.peekViewDescription, 'peekView'),
    a('Peek File', c.misc.peekViewFile, 'peekView'),
    a('Peek Select', c.misc.peekViewSelection, 'peekViewSelection'),
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

  // Markdown Alerts - GitHub-style alerts in documentation
  section([
    a('Note', c.markdownAlerts.note, 'editor'),
    a('Tip', c.markdownAlerts.tip, 'editor'),
    a('Important', c.markdownAlerts.important, 'editor'),
    a('Warning', c.markdownAlerts.warning, 'editor'),
    a('Caution', c.markdownAlerts.caution, 'editor'),
  ], LABELS.sectionMarkdownAlerts);

  // Testing Icons - test runner panel
  section([
    a('Passed', c.testingIcons.passed, 'sidebar'),
    a('Failed', c.testingIcons.failed, 'sidebar'),
    a('Errored', c.testingIcons.errored, 'sidebar'),
    a('Queued', c.testingIcons.queued, 'sidebar'),
    a('Unset', c.testingIcons.unset, 'sidebar'),
    a('Skipped', c.testingIcons.skipped, 'sidebar'),
    a('Run Action', c.testingIcons.runAction, 'sidebar'),
  ], LABELS.sectionTestingIcons);

  // Debug Icons - breakpoints and toolbar
  section([
    a('Breakpoint', c.debugIcons.breakpoint, 'editor'),
    a('BP Disabled', c.debugIcons.breakpointDisabled, 'editor'),
    a('BP Unverified', c.debugIcons.breakpointUnverified, 'editor'),
    a('BP Current', c.debugIcons.breakpointCurrentStackframe, 'editor'),
    a('BP Stackframe', c.debugIcons.breakpointStackframe, 'editor'),
    a('Start', c.debugIcons.start, 'debugToolbar'),
    a('Pause', c.debugIcons.pause, 'debugToolbar'),
    a('Stop', c.debugIcons.stop, 'debugToolbar'),
    a('Disconnect', c.debugIcons.disconnect, 'debugToolbar'),
    a('Restart', c.debugIcons.restart, 'debugToolbar'),
    a('Step Over', c.debugIcons.stepOver, 'debugToolbar'),
    a('Step Into', c.debugIcons.stepInto, 'debugToolbar'),
    a('Step Out', c.debugIcons.stepOut, 'debugToolbar'),
    a('Continue', c.debugIcons.continue, 'debugToolbar'),
    a('Step Back', c.debugIcons.stepBack, 'debugToolbar'),
  ], LABELS.sectionDebugIcons);

  // SCM Graph - git history visualization
  section([
    a('Branch 1', c.scmGraph.foreground1, 'sidebar'),
    a('Branch 2', c.scmGraph.foreground2, 'sidebar'),
    a('Branch 3', c.scmGraph.foreground3, 'sidebar'),
    a('Branch 4', c.scmGraph.foreground4, 'sidebar'),
    a('Branch 5', c.scmGraph.foreground5, 'sidebar'),
    a('Additions', c.scmGraph.additions, 'sidebar'),
    a('Deletions', c.scmGraph.deletions, 'sidebar'),
    a('Label', c.scmGraph.label, 'sidebar'),
    a('Ref Color', c.scmGraph.refColor, 'sidebar'),
  ], LABELS.sectionScmGraph);

  // Terminal Symbols - shell integration icons
  section([
    a('File', c.terminalSymbols.file, 'terminal'),
    a('Folder', c.terminalSymbols.folder, 'terminal'),
    a('Symlink File', c.terminalSymbols.symbolicLinkFile, 'terminal'),
    a('Symlink Folder', c.terminalSymbols.symbolicLinkFolder, 'terminal'),
    a('Branch', c.terminalSymbols.branch, 'terminal'),
    a('Commit', c.terminalSymbols.commit, 'terminal'),
    a('Tag', c.terminalSymbols.tag, 'terminal'),
    a('Remote', c.terminalSymbols.remote, 'terminal'),
    a('Stash', c.terminalSymbols.stash, 'terminal'),
    a('Pull Request', c.terminalSymbols.pullRequest, 'terminal'),
    a('PR Done', c.terminalSymbols.pullRequestDone, 'terminal'),
    a('Option', c.terminalSymbols.option, 'terminal'),
    a('Option Value', c.terminalSymbols.optionValue, 'terminal'),
    a('Argument', c.terminalSymbols.argument, 'terminal'),
    a('Method', c.terminalSymbols.method, 'terminal'),
    a('Alias', c.terminalSymbols.alias, 'terminal'),
    a('Flag', c.terminalSymbols.flag, 'terminal'),
    a('Inline Suggest', c.terminalSymbols.inlineSuggestion, 'terminal'),
  ], LABELS.sectionTerminalSymbols);

  // Extension Icons - marketplace
  section([
    a('Star', c.extensionIcons.star, 'sidebar'),
    a('Verified', c.extensionIcons.verified, 'sidebar'),
    a('Pre-Release', c.extensionIcons.preRelease, 'sidebar'),
    a('Sponsor', c.extensionIcons.sponsor, 'sidebar'),
    a('Private', c.extensionIcons.private, 'sidebar'),
  ], LABELS.sectionExtensionIcons);

  // Notebook Status - Jupyter cell state icons
  section([
    a('NB Error', c.notebookStatus.error, 'editor'),
    a('NB Running', c.notebookStatus.running, 'editor'),
    a('NB Success', c.notebookStatus.success, 'editor'),
  ], LABELS.sectionNotebookStatus);

  // ==========================================================================
  // COLOR DISTINCTION ANALYSIS (Jzazbz ΔEz) - Non-syntax categories
  // Note: Syntax token distinction is handled by semantic group analysis below
  // ==========================================================================

  const statusDistinction = analyzeStatusDistinction(c.syntax, c.bg.editor);
  const gitDistinction = analyzeGitDistinction(c.git, c.bg.sidebar);
  const stateDistinction = analyzeStateDistinction(c.states, c.bg.editor);
  const symbolDistinction = analyzeSymbolDistinction(c.symbolIcons, c.bg.suggest);
  const bracketDistinction = analyzeBracketDistinction(c.brackets, c.bg.editor);
  const terminalDistinction = analyzeTerminalDistinction(c.terminal, c.bg.terminal);
  const markdownAlertDistinction = analyzeMarkdownAlertDistinction(c.markdownAlerts, c.bg.editor);
  const testingDistinction = analyzeTestingDistinction(c.testingIcons, c.bg.sidebar);
  const debugIconDistinction = analyzeDebugIconDistinction(c.debugIcons, c.bg.editor);
  const scmGraphDistinction = analyzeScmGraphDistinction(c.scmGraph, c.bg.sidebar);
  const terminalSymbolDistinction = analyzeTerminalSymbolDistinction(c.terminalSymbols, c.bg.terminal);
  const extensionIconDistinction = analyzeExtensionIconDistinction(c.extensionIcons, c.bg.sidebar);

  // ==========================================================================
  // SEMANTIC COLOR GROUP ANALYSIS (NEW - improved distinction logic)
  // ==========================================================================

  // Analyzes tokens by semantic group:
  // - Intra-group cohesion: tokens in same group should be similar (ΔE < 10)
  // - Cross-group distinction: tokens in different groups must differ (ΔE ≥ 12-18)
  const semanticAnalysis = analyzeSemanticDistinction(c.syntax, c.bg.editor);

  // ==========================================================================
  // CHROMA ANALYSIS (Eye Fatigue) - Using perceptually uniform LCH
  // ==========================================================================

  // Combine all color categories that need chroma analysis
  // Includes: syntax (primary), git (accent), brackets (accent), terminal ANSI (accent)
  const chromaColors: Record<string, ColorValue> = {
    ...c.syntax,
    // Git colors (accent tier - can be vibrant)
    added: c.git.added,
    modified: c.git.modified,
    deleted: c.git.deleted,
    conflict: c.git.conflict,
    // Bracket colors (accent tier)
    bracket1: c.brackets.bracket1,
    bracket2: c.brackets.bracket2,
    bracket3: c.brackets.bracket3,
    bracket4: c.brackets.bracket4,
    bracket5: c.brackets.bracket5,
    bracket6: c.brackets.bracket6,
    // Terminal ANSI colors (accent tier - error/success/warning/info)
    ansiRed: c.terminal.ansiRed,
    ansiGreen: c.terminal.ansiGreen,
    ansiYellow: c.terminal.ansiYellow,
    ansiBlue: c.terminal.ansiBlue,
    ansiMagenta: c.terminal.ansiMagenta,
    ansiCyan: c.terminal.ansiCyan,
    // Markdown alerts (accent tier)
    alertNote: c.markdownAlerts.note,
    alertTip: c.markdownAlerts.tip,
    alertImportant: c.markdownAlerts.important,
    alertWarning: c.markdownAlerts.warning,
    alertCaution: c.markdownAlerts.caution,
  };

  const chromaResults = analyzeColorChroma(chromaColors);
  const chromaIssues = chromaResults.filter(r => !r.pass);

  // ==========================================================================
  // CVD (Color Vision Deficiency) ANALYSIS
  // ==========================================================================
  // Test critical color pairs for distinguishability under color blindness.
  // ~8% of males have red-green color blindness (protanopia/deuteranopia).

  const cvdFailures = analyzeCVD(
    {
      git: c.git,
      syntax: c.syntax,
      terminal: c.terminal,
      testing: c.testingIcons,
    },
    c.bg.editor
  );

  // ==========================================================================
  // UI VISIBILITY ANALYSIS
  // ==========================================================================
  // Check things users directly notice: selection visibility, cursor, etc.

  const uiVisibility = analyzeUIVisibility(c.bg);
  const cursorVisibility = analyzeCursorVisibility(
    stripAlpha(c.cursor.editor?.color ?? c.fg.color),
    c.bg.editor
  );

  // ==========================================================================
  // COMPOUND BACKGROUND CONTRAST ANALYSIS
  // ==========================================================================
  // Test syntax colors against ALL overlay backgrounds they might appear on.
  // A color might be readable on editor.background but fail on selection/find/diff.

  const compoundAnalysis = analyzeCompoundBackgroundContrast(c.syntax, c.bg);

  // ==========================================================================
  // LIGHTNESS UNIFORMITY ANALYSIS
  // ==========================================================================
  // Primary syntax colors should have similar Jz lightness to avoid visual "jumps."
  // A calm, even lightness plane lets the eye scan code without being pulled to bright spots.

  const primarySyntaxColors: Record<string, string> = {};
  for (const tokenName of COMPOUND_SYNTAX_TOKENS) {
    const cv = c.syntax[tokenName];
    if (cv && !cv.fallback) {
      primarySyntaxColors[tokenName] = cv.color;
    }
  }
  const lightnessResult = analyzeLightnessUniformity(primarySyntaxColors);

  // ==========================================================================
  // HUE DISTRIBUTION ANALYSIS
  // ==========================================================================
  // Syntax colors should be well-distributed around the color wheel.
  // Clustered hues reduce distinction between token types.

  const hueResult = analyzeHueDistribution(primarySyntaxColors);

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

  // Collect all distinction results (syntax handled by semantic analysis)
  const allDistinctions: Array<{ category: string; pairs: DistinctionPair[] }> = [
    { category: 'status', pairs: statusDistinction },
    { category: 'git', pairs: gitDistinction },
    { category: 'state', pairs: stateDistinction },
    { category: 'symbol', pairs: symbolDistinction },
    { category: 'bracket', pairs: bracketDistinction },
    { category: 'terminal', pairs: terminalDistinction },
    { category: 'markdown-alert', pairs: markdownAlertDistinction },
    { category: 'testing', pairs: testingDistinction },
    { category: 'debug-icon', pairs: debugIconDistinction },
    { category: 'scm-graph', pairs: scmGraphDistinction },
    { category: 'terminal-symbol', pairs: terminalSymbolDistinction },
    { category: 'extension-icon', pairs: extensionIconDistinction },
  ];

  // ==========================================================================
  // PLAIN TEXT OUTPUT
  // ==========================================================================

  const output: string[] = [];

  // Filter contrast issues
  // - Skip passed items (unless verbose)
  // - Skip fallback items (VS Code defaults work fine)
  // - Skip expectedDim items (intentionally low contrast)
  const contrastIssues = allSections.flatMap(s =>
    s.results.filter(r => !r.analysis.pass && !r.fallback && !r.expectedDim)
  );

  // Filter distinction issues (ΔE below threshold)
  const distinctionIssues = allDistinctions.flatMap(d =>
    d.pairs.filter(p => !p.pass).map(p => ({ category: d.category, pair: p }))
  );

  // Semantic analysis issues
  const semanticDistinctionIssues = semanticAnalysis.distinction.filter(d => !d.pass);

  // UI visibility issues
  const uiVisibilityIssues = uiVisibility.filter(v => !v.pass);

  // Verbose mode: show ALL results grouped by section
  if (options.verbose) {
    for (const section of allSections) {
      output.push(`\n=== ${section.title} ===`);
      for (const r of section.results) {
        const status = r.fallback ? '(?)' : r.expectedDim ? '(~)' : r.analysis.pass ? '✓' : '✗';
        const lc = Math.round(Math.abs(r.lc) * 10) / 10;
        output.push(`  ${status} ${r.name.padEnd(20)} ${r.color} Lc=${lc.toString().padStart(5)} ${r.analysis.level.padEnd(8)} [${r.tier}]`);
      }
      output.push(`  [${section.stats.pass} pass, ${section.stats.fail} fail, ${section.stats.missing} missing]`);
    }

    // Semantic distinction analysis
    output.push(`\n=== SEMANTIC DISTINCTION ===`);
    output.push(`Tokens in different semantic groups must be visually distinct.`);
    for (const d of semanticAnalysis.distinction) {
      const priorityTag = d.priority === 'critical' ? '[CRIT]' : d.priority === 'high' ? '[HIGH]' : '[STD]';
      output.push(`  ${d.icon} ${d.token1}↔${d.token2} ΔE=${d.deltaE.toString().padStart(4)} need≥${d.required} ${priorityTag}`);
    }
    output.push(`  [${semanticAnalysis.summary.distinctionPass}/${semanticAnalysis.distinction.length} pairs pass, ${semanticAnalysis.summary.criticalFail} critical fails]`);

    output.push(`\n=== UI ELEMENT DISTINCTION ===`);
    for (const d of allDistinctions) {
      output.push(`\n--- ${d.category.toUpperCase()} ---`);
      for (const p of d.pairs) {
        const status = p.pass ? '✓' : '✗';
        output.push(`  ${status} ${p.name1}↔${p.name2} ΔE=${p.deltaE.toFixed(1)} ${p.level}`);
      }
    }

    output.push(`\n=== CHROMA ANALYSIS ===`);
    for (const r of chromaResults) {
      const status = r.pass ? '✓' : '✗';
      output.push(`  ${status} ${r.name.padEnd(20)} ${r.color} Cz=${r.chroma.toString().padStart(3)} ${r.level.padEnd(11)} [${r.tier}]`);
    }

    output.push(`\n=== CVD (COLOR VISION DEFICIENCY) ANALYSIS ===`);
    output.push(`Testing critical pairs under protanopia, deuteranopia, tritanopia simulation.`);
    output.push(`Threshold: ΔE ≥ ${CVD_DISTINCTION_THRESHOLD} under worst-case CVD type.`);
    if (cvdFailures.length === 0) {
      output.push(`  ✓ All critical pairs pass CVD check`);
    } else {
      for (const f of cvdFailures) {
        output.push(`  ✗ ${f.category}: ${f.name1}↔${f.name2} fails under ${f.result.worstType} (ΔE=${f.result.worstDeltaE.toFixed(1)})`);
      }
    }

    output.push(`\n=== UI VISIBILITY ===`);
    output.push(`Checking things users directly notice: selection, cursor, find match, diff.`);
    for (const v of uiVisibility) {
      const status = v.pass ? '✓' : '✗';
      output.push(`  ${status} ${v.name.padEnd(20)} ΔE=${v.deltaE.toString().padStart(4)} need≥${v.required}`);
    }
    output.push(`  Cursor: ${cursorVisibility.pass ? '✓' : '✗'} Lc=${cursorVisibility.lc} need≥${UI_VISIBILITY.cursorContrast}`);

    output.push(`\n=== COMPOUND BACKGROUND CONTRAST ===`);
    output.push(`Testing syntax colors against ${Object.keys(COMPOUND_BACKGROUND_KEYS).length} overlay backgrounds.`);
    output.push(`A color might pass on editor.background but fail on selection/find/diff overlays.`);
    if (compoundAnalysis.pass) {
      output.push(`  ✓ All ${compoundAnalysis.tokensAnalyzed} syntax tokens pass on all backgrounds`);
    } else {
      output.push(`  ✗ ${compoundAnalysis.tokensFailing} token(s) fail on overlay backgrounds:`);
      for (const f of compoundAnalysis.failures) {
        output.push(`    ${f.tokenName} ${f.tokenHex}: editor Lc=${f.editorLc} (ok), fails on:`);
        for (const bg of f.failingBackgrounds) {
          output.push(`      - ${bg.bgName} Lc=${bg.lc} (need≥${bg.required})`);
        }
      }
    }
    output.push(`\n=== LIGHTNESS UNIFORMITY ===`);
    output.push(`Primary syntax colors should sit on a similar Jz lightness plane (spread ≤${lightnessResult.maxSpread}).`);
    if (lightnessResult.pass) {
      output.push(`  ✓ Spread=${(lightnessResult.spread * 450).toFixed(0)}% (${lightnessResult.colors.length} colors)`);
    } else {
      output.push(`  ✗ Spread=${(lightnessResult.spread * 450).toFixed(0)}% exceeds ≤${(lightnessResult.maxSpread * 450).toFixed(0)}%`);
      if (lightnessResult.darkest && lightnessResult.lightest) {
        output.push(`    Darkest: ${lightnessResult.darkest.name} ${lightnessResult.darkest.hex} Jz=${lightnessResult.darkest.jz.toFixed(4)}`);
        output.push(`    Lightest: ${lightnessResult.lightest.name} ${lightnessResult.lightest.hex} Jz=${lightnessResult.lightest.jz.toFixed(4)}`);
      }
      if (lightnessResult.outliers.length > 0) {
        output.push(`    Outliers: ${lightnessResult.outliers.map(o => o.name).join(', ')}`);
      }
    }

    output.push(`\n=== HUE DISTRIBUTION ===`);
    output.push(`Syntax hues should be spread ≥${hueResult.minGap}° apart to maximize distinction.`);
    if (hueResult.pass) {
      const smallest = hueResult.smallestGap !== undefined ? `${hueResult.smallestGap.toFixed(0)}°` : 'N/A';
      output.push(`  ✓ No clusters (smallest gap: ${smallest}, ${hueResult.colors.length} chromatic colors)`);
    } else {
      output.push(`  ✗ ${hueResult.clusters.length} cluster(s) detected:`);
      for (const cluster of hueResult.clusters) {
        output.push(`    [${cluster.hueRange[0].toFixed(0)}°-${cluster.hueRange[1].toFixed(0)}°]: ${cluster.colors.join(', ')}`);
      }
    }

    output.push('');
  } else {
    // Default: only output issues
    for (const r of contrastIssues) {
      output.push(formatContrastLine(r));
    }

    // Semantic distinction issues (cross-group pairs too similar)
    for (const d of semanticDistinctionIssues) {
      output.push(formatSemanticDistinctionLine(d));
    }

    // Non-syntax distinction issues (symbols, status, git, etc.)
    for (const { category, pair } of distinctionIssues) {
      output.push(formatDistinctionLine(category, pair));
    }

    for (const r of chromaIssues) {
      output.push(formatChromaLine(r));
    }

    // CVD failures
    for (const f of cvdFailures) {
      output.push(formatCVDLine(f));
    }

    // UI visibility issues
    for (const v of uiVisibilityIssues) {
      output.push(`UI_VISIBLE ${v.name} ΔE=${v.deltaE} need≥${v.required} → increase visibility`);
    }
    if (!cursorVisibility.pass) {
      output.push(`CURSOR Lc=${cursorVisibility.lc} need≥${UI_VISIBILITY.cursorContrast} → increase cursor contrast`);
    }

    // Compound background failures
    for (const f of compoundAnalysis.failures) {
      output.push(formatCompoundLine(f));
    }

    // Lightness uniformity
    if (!lightnessResult.pass) {
      const outlierNames = lightnessResult.outliers.map(o => o.name).join(', ');
      const outlierSuffix = outlierNames ? ` outliers=[${outlierNames}]` : '';
      output.push(`LIGHTNESS spread=${(lightnessResult.spread * 450).toFixed(0)}% need≤${(lightnessResult.maxSpread * 450).toFixed(0)}% darkest=${lightnessResult.darkest?.name} lightest=${lightnessResult.lightest?.name}${outlierSuffix} → ${lightnessResult.suggestion}`);
    }

    // Hue distribution
    if (!hueResult.pass) {
      for (const cluster of hueResult.clusters) {
        output.push(`HUE_CLUSTER [${cluster.hueRange[0].toFixed(0)}°-${cluster.hueRange[1].toFixed(0)}°] ${cluster.colors.join(', ')} → spread hues ≥${hueResult.minGap}° apart`);
      }
    }
  }

  // Summary line
  const defined = total.total - total.missing;
  const distinctionFails = distinctionIssues.length;
  const crossGroupTooSimilar = semanticDistinctionIssues.length;
  const chromaFails = chromaIssues.length;
  const cvdFails = cvdFailures.length;
  const uiVisibilityFails = uiVisibilityIssues.length + (cursorVisibility.pass ? 0 : 1);
  const compoundFails = compoundAnalysis.tokensFailing;
  const lightnessOk = lightnessResult.pass;
  const hueOk = hueResult.pass;
  const ready = total.fail === 0 && total.large === 0 && distinctionFails === 0 && crossGroupTooSimilar === 0 && chromaFails === 0 && cvdFails === 0 && uiVisibilityFails === 0 && compoundFails === 0 && lightnessOk && hueOk;

  output.push('');
  output.push(`SUMMARY pass=${total.pass}/${defined} fail=${total.fail + total.large} too_similar=${crossGroupTooSimilar} distinction_fail=${distinctionFails} chroma_fail=${chromaFails} cvd_fail=${cvdFails} ui_visible_fail=${uiVisibilityFails} compound_fail=${compoundFails} lightness=${lightnessOk ? 'ok' : 'uneven'} hue=${hueOk ? 'ok' : 'clustered'} ready=${ready}`);

  // Print all output (or filter if --issues-only and ready)
  if (options.issuesOnly && ready) {
    console.log('SUMMARY pass=' + total.pass + '/' + defined + ' fail=0 too_similar=0 distinction_fail=0 chroma_fail=0 cvd_fail=0 ui_visible_fail=0 compound_fail=0 lightness=ok hue=ok ready=true');
  } else {
    console.log(output.join('\n'));
  }

  return total;
}

function testColor(fg: string, bg: string, name = 'Custom'): void {
  const fgValue: ColorValue = { color: fg, fallback: false };
  const result = analyze(name, fgValue, bg);
  const chroma = getChroma(fg);

  console.log(`\n${name}: ${fg}${result.alpha ? ` @ ${result.alpha}` : ''} on ${bg}`);
  if (result.alpha) console.log(`  Blended: ${result.color}`);
  console.log(`  Lc ${result.lc.toFixed(1).padStart(6)} ${result.analysis.icon} ${result.analysis.level}`);
  if (chroma !== null) {
    // Show pass/fail for each tier using JzCzhz percentage scale
    const primary = analyzeChroma(chroma, 'primary');
    const secondary = analyzeChroma(chroma, 'secondary');
    const accent = analyzeChroma(chroma, 'accent');
    const c = Math.round(primary.chromaPercent);
    console.log(`  C% ${c.toString().padStart(5)} ${primary.level} (JzCzhz)`);
    console.log(`     Primary:   ${primary.icon} (8-45)`);
    console.log(`     Secondary: ${secondary.icon} (5-45)`);
    console.log(`     Accent:    ${accent.icon} (8-60)`);
  }
}

function testChroma(hex: string, name = 'Custom'): void {
  const chroma = getChroma(hex);
  if (chroma === null) {
    console.error(`Invalid color: ${hex}`);
    return;
  }
  const primary = analyzeChroma(chroma, 'primary');
  const secondary = analyzeChroma(chroma, 'secondary');
  const accent = analyzeChroma(chroma, 'accent');
  const c = Math.round(primary.chromaPercent);

  console.log(`\n${name}: ${hex}`);
  console.log(`  Chroma (JzCzhz): ${c}% - ${primary.level}`);
  console.log(`  Tier results:`);
  console.log(`    Primary   (8-45):  ${primary.icon} ${primary.pass ? 'pass' : primary.failReason}`);
  console.log(`    Secondary (5-45):  ${secondary.icon} ${secondary.pass ? 'pass' : secondary.failReason}`);
  console.log(`    Accent    (8-60):  ${accent.icon} ${accent.pass ? 'pass' : accent.failReason}`);
}

// =============================================================================
// MULTI-COLOR TESTING
// =============================================================================

/**
 * Parse a comma-separated list of colors.
 */
function parseColorList(arg: string): string[] {
  return arg.split(',').map(c => c.trim()).filter(c => c.length > 0);
}

/**
 * Validate all colors in a list and return invalid ones.
 */
function validateColorList(colors: string[]): string[] {
  return colors.filter(c => !isValidHex(c));
}

/**
 * Test N foreground colors against M background colors in a matrix.
 * Shows APCA Lc values for all combinations.
 */
function testAPCAMatrix(fgColors: string[], bgColors: string[]): void {
  // Calculate column width based on longest color
  const maxBgLen = Math.max(...bgColors.map(c => c.length), 7);
  const colWidth = Math.max(maxBgLen + 8, 14); // "Lc XX.X ⚡" needs ~12 chars
  const fgColWidth = Math.max(...fgColors.map(c => c.length), 10);

  console.log('\nAPCA MATRIX (Foreground → Background)');
  console.log('─'.repeat(fgColWidth + 3 + bgColors.length * (colWidth + 3)));

  // Header row with background colors
  let header = ' '.repeat(fgColWidth) + ' │';
  for (const bg of bgColors) {
    header += ` ${bg.padEnd(colWidth - 1)}│`;
  }
  console.log(header);
  console.log('─'.repeat(fgColWidth) + '─┼' + bgColors.map(() => '─'.repeat(colWidth) + '┼').join(''));

  // Summary counters
  let pass = 0;
  let fail = 0;
  let halation = 0;

  // Data rows
  for (const fg of fgColors) {
    let row = fg.padEnd(fgColWidth) + ' │';
    for (const bg of bgColors) {
      const fgValue: ColorValue = { color: fg, fallback: false };
      const result = analyze('matrix', fgValue, bg);
      const lc = Math.abs(result.lc).toFixed(1);
      const cell = `Lc ${lc.padStart(5)} ${result.analysis.icon}`;
      row += ` ${cell.padEnd(colWidth - 1)}│`;

      // Count results
      if (result.analysis.pass) {
        pass++;
      } else if (Math.abs(result.lc) > APCA_THRESHOLDS.max) {
        halation++;
      } else {
        fail++;
      }
    }
    console.log(row);
  }

  const total = fgColors.length * bgColors.length;
  console.log('');
  console.log(`SUMMARY: ${total} combinations, ${pass} pass, ${fail} fail, ${halation} halation`);
}

/**
 * Test all pairs of N colors for distinction (ΔE00).
 * Shows N×(N-1)/2 pairwise comparisons sorted by similarity.
 */
function testDistinctionMatrix(colors: string[], bg?: string): void {
  const pairs: Array<{ c1: string; c2: string; dE: number; level: string; icon: string; pass: boolean }> = [];

  // Generate all pairs
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      const dE = deltaEzHex(colors[i], colors[j], bg);
      if (dE !== null) {
        const { level, icon, pass } = getDistinctionLevel(dE);
        pairs.push({ c1: colors[i], c2: colors[j], dE, level, icon, pass });
      }
    }
  }

  // Sort by ΔE (most similar first)
  pairs.sort((a, b) => a.dE - b.dE);

  console.log('\nDISTINCTION MATRIX (ΔE00 - sorted by similarity)');
  if (bg) {
    console.log(`Background for alpha: ${bg}`);
  }
  console.log('─'.repeat(60));

  for (const p of pairs) {
    const status = p.pass ? '' : ` (need ≥${DISTINCTION_THRESHOLDS.standard})`;
    console.log(`${p.c1} ↔ ${p.c2}: ΔE=${p.dE.toFixed(1)} ${p.icon} ${p.level}${status}`);
  }

  const passCount = pairs.filter(p => p.pass).length;
  const failCount = pairs.length - passCount;
  console.log('');
  console.log(`SUMMARY: ${pairs.length} pairs, ${passCount} pass, ${failCount} fail`);
}

/**
 * Test multiple colors for chroma comparison.
 * Shows a table comparing all colors' chroma values across tiers.
 */
function testMultiChroma(colors: string[]): void {
  console.log('\nCHROMA COMPARISON (JzCzhz % - perceptual colorfulness)');
  console.log('─'.repeat(72));
  console.log('Color      │ C%   │ Level       │ Primary │ Secondary │ Accent │');
  console.log('───────────┼──────┼─────────────┼─────────┼───────────┼────────┤');

  let primaryPass = 0, secondaryPass = 0, accentPass = 0;
  const total = colors.length;

  for (const hex of colors) {
    const chroma = getChroma(hex);
    if (chroma === null) {
      console.log(`${hex.padEnd(10)} │ ERR  │ Invalid     │    -    │     -     │   -    │`);
      continue;
    }

    const primary = analyzeChroma(chroma, 'primary');
    const secondary = analyzeChroma(chroma, 'secondary');
    const accent = analyzeChroma(chroma, 'accent');
    const c = Math.round(primary.chromaPercent);

    if (primary.pass) primaryPass++;
    if (secondary.pass) secondaryPass++;
    if (accent.pass) accentPass++;

    console.log(
      `${hex.padEnd(10)} │ ${c.toString().padStart(4)} │ ${primary.level.padEnd(11)} │` +
      `   ${primary.icon}    │     ${secondary.icon}     │   ${accent.icon}    │`
    );
  }

  console.log('');
  console.log(`SUMMARY: ${total} colors`);
  console.log(`  Primary   (8-45):  ${primaryPass}/${total} pass`);
  console.log(`  Secondary (5-45):  ${secondaryPass}/${total} pass`);
  console.log(`  Accent    (8-60):  ${accentPass}/${total} pass`);
}

// =============================================================================
// CLI
// =============================================================================

function printHelp(): void {
  console.log(`
VS Code Theme - Readability Analysis

Analyzes VS Code themes for comfortable extended coding sessions.
Tests contrast, color distinction, and eye fatigue risk.

Usage:
  npm run readability                      Analyze default theme
  npm run readability -- --theme <path>    Analyze custom theme
  npm run readability -- --test FG BG      Test single color pair
  npm run readability -- --chroma COLOR    Test color chroma

Multi-Color Testing:
  npm run readability -- --matrix-apca "FG1,FG2" "BG1,BG2"
  npm run readability -- --matrix-distinction "C1,C2,C3"
  npm run readability -- --chroma "C1,C2,C3"

Options:
  --theme <path>          Path to VS Code theme JSON file
  --verbose               Show ALL results (not just issues)
  --issues-only           Only output if there are issues (silent when ready)
  --test FG BG            Test foreground on background (includes chroma)
  --chroma COLOR(S)       Test color chroma (single or comma-separated list)
  --matrix-apca FG BG     Test NxM foreground/background combinations
  --matrix-distinction C  Test all pairs for ΔE distinction
  --bg BG                 Background for alpha compositing (with --matrix-distinction)
  --help, -h              Show this help

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANALYSIS 1: APCA CONTRAST (Lc) - TIERED THRESHOLDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APCA (Accessible Perceptual Contrast Algorithm) measures text readability.
Lc = Lightness Contrast value. Both too low AND too high cause strain.

Levels (descriptive):
  FAIL     (Lc < 30)  - Insufficient for any use
  Non-Text (Lc 30-45) - Icons, borders only
  Large    (Lc 45-60) - Large/bold text only
  Content  (Lc 60-75) - Minimum for content
  Body     (Lc 75-90) - Good for body text
  Fluent   (Lc ≥ 90)  - Optimal but can feel harsh all-day

Pass thresholds (eye-friendly for marathon coding):
  Primary   (Lc 75-90): Variables, keywords, functions, types, strings...
  Secondary (Lc 70-90): UI elements, comments, hints
  Tertiary  (Lc ≥ 45):  Ghost text, placeholders, inactive states

Output icons: ❌ fail, ⚠️ below threshold, ✅ pass, ⚡ halation (Lc>90)
Output: CONTRAST file:key Lc=X need=Y bg=background.key

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANALYSIS 2: COLOR DISTINCTION (ΔEz) - TIERED THRESHOLDS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Jzazbz ΔEz measures perceptual color difference (more accurate than CIEDE2000).
Related colors must be distinguishable (e.g., error vs warning).

Levels (descriptive):
  Imperceptible (ΔEz < 1)  - Colors look identical
  Subtle        (ΔEz 1-5)  - Barely distinguishable
  Noticeable    (ΔEz 5-10) - Can tell apart with attention
  Clear         (ΔEz 10-20)- Obviously different
  Distinct      (ΔEz 20-40)- Very different
  Obvious       (ΔEz 40+)  - Completely different

Pass thresholds:
  Standard pairs (ΔEz ≥ 15): Clear level - obviously different
  Critical pairs (ΔEz ≥ 18): Higher bar for safety-critical distinctions

Output icons: ❌ fail, ✅ pass
Output: DISTINCTION category pair1↔pair2 ΔEz=X need=Y [critical]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANALYSIS 3: CHROMA / COLOR IDENTITY & EYE FATIGUE (JzCzhz Cz)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
JzCzhz Chroma (Cz%) measures color intensity (more uniform than OKLCH/CIE LCH).
- Too low: Colors look gray, lack identity
- Too high: Colors cause eye strain

Levels (aligned with primary tier threshold, percentage scale):
  Gray        (Cz < 5)    - Too neutral, fails all tiers
  Muted       (Cz 5-7)    - Subdued, fails primary/accent tier
  Comfortable (Cz 8-20)   - Colorful yet easy on eyes
  Vibrant     (Cz 21-35)  - Noticeably colorful (primary max)
  Vivid       (Cz 36-45)  - Bold and attention-grabbing (accent max)
  Intense     (Cz 46-60)  - Very saturated, fails all tiers
  Extreme     (Cz 61+)    - Way too harsh

Tiered thresholds (percentage scale: raw Jzazbz Cz * 525):
  Primary   (Cz 8-45):  Variables, keywords, types, strings - comfortable to vibrant
  Secondary (Cz 5-45):  Comments, punctuation - can be slightly muted
  Accent    (Cz 8-60):  Errors, warnings, brackets - attention-grabbing

Output icons: ⚪ too-gray, ✅ pass, ⛔ too-vivid, ❌ extreme (60+)
Output: CHROMA element color Cz=X tier=T need=min-max reason

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Output: SUMMARY pass=N/M fail=N distinction_fail=N chroma_fail=N ready=X
  - pass=N/M          → Colors meeting Lc threshold / total defined colors
  - fail=N            → Contrast failures (excluding expected dim)
  - distinction_fail  → Color pairs too similar (ΔEz below threshold)
  - chroma_fail       → Colors outside tier threshold (Cz 8-35, etc.)
  - ready=true        → All tests pass, theme is marathon-ready

Examples:
  npm run readability                                          # Analyze default theme
  npm run readability -- --verbose                             # Full analysis
  npm run readability -- --test "#86E1FC" "#1E2030"            # Single contrast test
  npm run readability -- --chroma "#90F0F0,#F8D8A0"            # Chroma analysis
  npm run readability -- --matrix-apca "#90F0F0" "#0A0D10"     # APCA matrix
  npm run readability -- --matrix-distinction "#90F0F0,#88F0D0,#F8D8A0"
`);
}

const args = process.argv.slice(2);

const DEFAULT_THEME = './themes/hatsune-miku-theme-color-theme.json';

if (args[0] === '--help' || args[0] === '-h') {
  printHelp();
} else {
  let themePath: string | undefined;
  let test: { fg: string; bg: string; name?: string } | undefined;
  let chromaTest: { colors: string[] } | undefined;
  let matrixApca: { fgColors: string[]; bgColors: string[] } | undefined;
  let matrixDistinction: { colors: string[] } | undefined;
  let bgForAlpha: string | undefined;
  let issuesOnly = false;
  let verbose = false;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--theme' && args[i + 1]) {
      themePath = path.resolve(args[++i]);
    } else if (args[i] === '--verbose') {
      verbose = true;
    } else if (args[i] === '--issues-only') {
      issuesOnly = true;
    } else if (args[i] === '--bg' && args[i + 1]) {
      bgForAlpha = args[++i];
    } else if (args[i] === '--test' && args[i + 1] && args[i + 2]) {
      const fg = args[++i];
      const bg = args[++i];
      const nextArg = args[i + 1];
      const name = nextArg && !nextArg.startsWith('-') ? args[++i] : undefined;
      test = { fg, bg, name };
    } else if (args[i] === '--chroma' && args[i + 1]) {
      const colorArg = args[++i];
      const colors = parseColorList(colorArg);
      chromaTest = { colors };
    } else if (args[i] === '--matrix-apca' && args[i + 1] && args[i + 2]) {
      const fgArg = args[++i];
      const bgArg = args[++i];
      matrixApca = { fgColors: parseColorList(fgArg), bgColors: parseColorList(bgArg) };
    } else if (args[i] === '--matrix-distinction' && args[i + 1]) {
      const colorArg = args[++i];
      matrixDistinction = { colors: parseColorList(colorArg) };
    }
  }

  // Execute the appropriate mode
  if (matrixApca) {
    // Validate colors
    const invalidFg = validateColorList(matrixApca.fgColors);
    const invalidBg = validateColorList(matrixApca.bgColors);
    if (invalidFg.length > 0) {
      console.error(`Invalid foreground color(s): ${invalidFg.join(', ')}`);
      process.exit(1);
    }
    if (invalidBg.length > 0) {
      console.error(`Invalid background color(s): ${invalidBg.join(', ')}`);
      process.exit(1);
    }
    if (matrixApca.fgColors.length === 0 || matrixApca.bgColors.length === 0) {
      console.error('Error: --matrix-apca requires at least one foreground and one background color');
      process.exit(1);
    }
    testAPCAMatrix(matrixApca.fgColors, matrixApca.bgColors);
  } else if (matrixDistinction) {
    // Validate colors
    const invalid = validateColorList(matrixDistinction.colors);
    if (invalid.length > 0) {
      console.error(`Invalid color(s): ${invalid.join(', ')}`);
      process.exit(1);
    }
    if (matrixDistinction.colors.length < 2) {
      console.error('Error: --matrix-distinction requires at least 2 colors');
      process.exit(1);
    }
    if (bgForAlpha && !isValidHex(bgForAlpha)) {
      console.error(LABELS.errInvalidColor(bgForAlpha));
      process.exit(1);
    }
    testDistinctionMatrix(matrixDistinction.colors, bgForAlpha);
  } else if (chromaTest) {
    // Validate colors
    const invalid = validateColorList(chromaTest.colors);
    if (invalid.length > 0) {
      console.error(`Invalid color(s): ${invalid.join(', ')}`);
      process.exit(1);
    }
    if (chromaTest.colors.length === 0) {
      console.error('Error: --chroma requires at least one color');
      process.exit(1);
    }
    // Single color uses old format, multiple uses table
    if (chromaTest.colors.length === 1) {
      testChroma(chromaTest.colors[0]);
    } else {
      testMultiChroma(chromaTest.colors);
    }
  } else if (test) {
    if (!isValidHex(test.fg)) {
      console.error(LABELS.errInvalidColor(test.fg));
      process.exit(1);
    }
    if (!isValidHex(test.bg)) {
      console.error(LABELS.errInvalidColor(test.bg));
      process.exit(1);
    }
    testColor(test.fg, test.bg, test.name);
  } else {
    // Default to theme analysis
    const resolvedPath = themePath ? themePath : path.resolve(DEFAULT_THEME);
    runAnalysis(resolvedPath, { issuesOnly, verbose });
  }
}
