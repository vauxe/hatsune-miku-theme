/**
 * Types and interfaces for the readability analysis tool.
 *
 * Key concepts:
 * - APCA (Accessible Perceptual Contrast Algorithm): Modern contrast formula
 *   that accounts for human perception better than WCAG 2.x ratios
 * - Lc (Lightness Contrast): APCA's contrast value, ranges roughly -108 to +108
 *   Negative = light text on dark, Positive = dark text on light
 * - Jzazbz ΔEz: Perceptual color difference metric (more accurate than CIEDE2000)
 *   <1 imperceptible, 1-5 subtle, 5-10 noticeable, 10-20 clear, 20-40 distinct, 40+ obvious
 * - JzCzhz Chroma (Cz): Perceptually uniform colorfulness measure
 *   More uniform than OKLCH or CIE LCH across all hues
 */

// =============================================================================
// COLOR TYPES
// =============================================================================

/** sRGB color with channels normalized to 0-1 */
export interface RGB {
  r: number;
  g: number;
  b: number;
}

/** Text/background luminance relationship */
export type Polarity = 'light-on-dark' | 'dark-on-light';

/**
 * APCA readability levels based on Lc value.
 * - Fluent (Lc≥90): Optimal for any text size
 * - Body (Lc≥75): Good for body text
 * - Content (Lc≥60): Minimum for content text
 * - Large (Lc≥45): Only suitable for large/bold text (18pt+)
 * - Non-Text (Lc≥30): Only for non-text elements (icons, borders)
 * - FAIL (Lc<30): Insufficient contrast for any use
 *
 * Pass thresholds are tiered: Primary (Lc≥80), Secondary (Lc≥75), Tertiary (Lc≥45)
 */
export type Level = 'Fluent' | 'Body' | 'Content' | 'Large' | 'Non-Text' | 'FAIL';

/**
 * Color distinction levels based on Jzazbz ΔEz.
 * Pass threshold: ΔEz ≥ 15 for all pairs.
 */
export type DistinctionLevel = 'Imperceptible' | 'Subtle' | 'Noticeable' | 'Clear' | 'Distinct' | 'Obvious';

/**
 * Tracks where a color value came from in the theme.
 * Used for debugging output to help locate colors in source files.
 */
export interface ColorSource {
  /** Which theme section: workbench colors, textmate tokenColors, or semantic tokens */
  type: 'workbench' | 'textmate' | 'semantic';
  /** The VS Code API key (e.g., "editor.foreground", "variable") */
  key: string;
  /** For syntax colors: the semantic token key checked before textmate scope */
  semanticKey?: string;
}

/**
 * A color value extracted from a theme with metadata.
 */
export interface ColorValue {
  /** Hex color string (may include alpha: #RRGGBBAA) */
  color: string;
  /** True if color was not defined and falls back to editor.foreground */
  fallback: boolean;
  /** Source information for debugging */
  source?: ColorSource;
}

/** Raw APCA calculation result */
export interface APCAResult {
  /** Lightness contrast value (-108 to +108) */
  lc: number;
  /** Whether text is lighter or darker than background */
  polarity: Polarity;
}

/** APCA result with human-readable analysis */
export interface APCAAnalysis {
  /** Lightness contrast value */
  lc: number;
  /** Readability level (Fluent/Body/Content/Large/Non-Text/FAIL) */
  level: Level;
  /** Status icon for output (✅/⚠️/❌/⚡) */
  icon: string;
  /** True if Lc meets tier threshold and doesn't exceed max */
  pass: boolean;
  /** Text/background luminance relationship */
  polarity: Polarity;
  /** Reason for failure if pass is false */
  failReason?: 'too-low' | 'halation';
}

// =============================================================================
// THEME TYPES
// =============================================================================

export interface ThemeJson {
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
// EXTRACTION TYPES
// =============================================================================

export interface ExtractedColors {
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
    // TIER 1: Current line highlight - where cursor is (constant focus)
    lineHighlight: string;
    // Suggest widget focus (for selected autocomplete item)
    suggestFocus: string;
    // Git gutter backgrounds (for change indicators)
    gutterAdded: string;
    gutterModified: string;
    gutterDeleted: string;
    // CODE REVIEW: Diff editor contexts
    diffUnchangedRegion: string;
    diffUnchangedCode: string;
    multiDiffHeader: string;
    multiDiffBackground: string;
    // CODE REVIEW: AI-suggested changes (Copilot inline diff)
    inlineChatDiffInserted: string;
    inlineChatDiffRemoved: string;
    // NOTEBOOKS: Jupyter cell contexts (data science)
    notebookCell: string;
    notebookOutput: string;
    notebookSelected: string;
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
  chat: Record<string, ColorValue>;
  testing: Record<string, ColorValue>;
  debugConsole: Record<string, ColorValue>;
  symbolIcons: Record<string, ColorValue>;
  settings: Record<string, ColorValue>;
  states: Record<string, ColorValue>;
  // New categories
  markdownAlerts: Record<string, ColorValue>;
  testingIcons: Record<string, ColorValue>;
  debugIcons: Record<string, ColorValue>;
  scmGraph: Record<string, ColorValue>;
  terminalSymbols: Record<string, ColorValue>;
  extensionIcons: Record<string, ColorValue>;
  notebookStatus: Record<string, ColorValue>;
}

// =============================================================================
// ANALYSIS TYPES
// =============================================================================

/** APCA tier for threshold determination */
export type APCATier = 'primary' | 'secondary' | 'tertiary';

/**
 * Result of analyzing a single foreground/background color pair.
 */
export interface ColorResult {
  /** Display name (e.g., "Variables", "Tab Active") */
  name: string;
  /** Effective foreground color after alpha blending */
  color: string;
  /** Background color used for contrast calculation */
  bgColor: string;
  /** VS Code API key for background (for debugging) */
  bgKey: string;
  /** APCA Lightness Contrast value */
  lc: number;
  /** Full APCA analysis with level and pass/fail */
  analysis: APCAAnalysis;
  /** APCA tier used for threshold (primary=80, secondary=75, tertiary=45) */
  tier: APCATier;
  /** Original alpha if color was semi-transparent (e.g., "50%") */
  alpha?: string;
  /** True if color was not defined in theme */
  fallback: boolean;
  /** True if this element is intentionally low-contrast (ghost text, etc.) */
  expectedDim?: boolean;
  /** Source location in theme for debugging */
  source?: ColorSource;
}

/**
 * Aggregated statistics for a set of color results.
 */
export interface Stats {
  /** Count of colors passing tier threshold */
  pass: number;
  /** Count of colors in Large/Non-Text range that are NOT expected dim */
  large: number;
  /** Count of colors in Large/Non-Text range that ARE expected dim (OK) */
  expectedDim: number;
  /** Count of colors below minimum threshold */
  fail: number;
  /** Count of colors not defined in theme (fallback) */
  missing: number;
  /** Total colors analyzed */
  total: number;
  /** All results for reference */
  results: ColorResult[];
}

/**
 * Result of comparing two colors for visual distinction.
 */
export interface DistinctionPair {
  /** First color's display name */
  name1: string;
  /** Second color's display name */
  name2: string;
  /** First color hex value */
  color1: string;
  /** Second color hex value */
  color2: string;
  /** First color's VS Code API key */
  key1: string;
  /** Second color's VS Code API key */
  key2: string;
  /** Jzazbz ΔEz perceptual difference */
  deltaE: number;
  /** Human-readable distinction level */
  level: DistinctionLevel;
  /** Status icon (✅/⚠️/❌) */
  icon: string;
  /** True if ΔE meets threshold */
  pass: boolean;
  /** True if this is a safety-critical pair (higher threshold) */
  critical: boolean;
}

/**
 * A section of related color results (e.g., "SYNTAX", "WIDGETS").
 */
export interface SectionData {
  /** Section title for output */
  title: string;
  /** All color results in this section */
  results: ColorResult[];
  /** Aggregated statistics for this section */
  stats: Stats;
}

// =============================================================================
// OUTPUT OPTIONS
// =============================================================================

/**
 * Options for controlling analysis output.
 */
export interface AnalysisOptions {
  /** If true, suppress all output when no issues found */
  issuesOnly: boolean;
  /** If true, show all results grouped by section (not just issues) */
  verbose: boolean;
}

// =============================================================================
// SEMANTIC COLOR GROUP TYPES
// =============================================================================

/**
 * The 10 semantic color groups for optimal VS Code theme design.
 * Tokens within the same group SHOULD have similar colors.
 * Tokens in different groups MUST be visually distinct.
 */
export type SemanticGroupName =
  | 'KEYWORD'    // Control flow, declarations, storage
  | 'OPERATOR'   // Operators (visual rhythm)
  | 'CALLABLE'   // Functions, methods, macros
  | 'DECORATOR'  // Decorators (@syntax)
  | 'TYPE'       // All type-related: types, interfaces, classes, structs, enums, namespaces
  | 'VARIABLE'   // Variables, language variables, labels, events
  | 'PARAMETER'  // Parameters, properties, attributes
  | 'STRING'     // String literals, escapes
  | 'REGEXP'     // Regular expressions
  | 'NUMERIC'    // Numbers, constants, enum members
  | 'MARKUP'     // HTML tags, markdown formatting
  | 'COMMENT';   // Comments, doc comments

/**
 * Definition of a semantic color group.
 */
export interface SemanticGroup {
  /** Human-readable group name */
  name: string;
  /** Description of what tokens belong in this group */
  description: string;
  /** Token names that belong to this group */
  members: readonly string[];
}

/**
 * Priority level for cross-group distinction requirements.
 * - critical: Appear every few lines, confusion is very costly (ΔE ≥ 18)
 * - high: Common adjacencies, should be clearly different (ΔE ≥ 15)
 * - standard: Less frequent but still need distinction (ΔE ≥ 12)
 */
export type DistinctionPriority = 'critical' | 'high' | 'standard';

/**
 * Result of analyzing semantic group cohesion.
 * Checks that tokens within the same group have similar colors.
 */
export interface GroupCohesionResult {
  /** The semantic group being analyzed */
  group: SemanticGroupName;
  /** Tokens in this group with their colors */
  members: Array<{ token: string; color: string }>;
  /** Maximum Delta E between any two members */
  maxIntraGroupDeltaE: number;
  /** Pair with maximum Delta E */
  maxPair?: [string, string];
  /** True if all pairs are within cohesion threshold (ΔE < 10) */
  pass: boolean;
  /** Status icon */
  icon: string;
}

/**
 * Result of analyzing cross-group distinction.
 */
export interface CrossGroupDistinctionResult {
  /** First token */
  token1: string;
  /** Second token */
  token2: string;
  /** First token's group */
  group1: SemanticGroupName;
  /** Second token's group */
  group2: SemanticGroupName;
  /** Colors being compared */
  color1: string;
  color2: string;
  /** Delta E between the colors */
  deltaE: number;
  /** Required minimum Delta E */
  required: number;
  /** Priority level */
  priority: DistinctionPriority;
  /** True if Delta E meets requirement */
  pass: boolean;
  /** Status icon */
  icon: string;
}

/**
 * Complete semantic distinction analysis results.
 */
export interface SemanticDistinctionAnalysis {
  /** Intra-group cohesion results (tokens that should be similar) */
  cohesion: GroupCohesionResult[];
  /** Cross-group distinction results (tokens that must differ) */
  distinction: CrossGroupDistinctionResult[];
  /** Summary statistics */
  summary: {
    groupsAnalyzed: number;
    cohesionPass: number;
    cohesionFail: number;
    distinctionPass: number;
    distinctionFail: number;
    criticalFail: number;
  };
}

// =============================================================================
// COLOR VISION DEFICIENCY (CVD) TYPES
// =============================================================================

/**
 * Types of color vision deficiency.
 * - protan: Red-blind (protanopia/protanomaly) - ~1.3% of males
 * - deutan: Green-blind (deuteranopia/deuteranomaly) - ~6% of males
 * - tritan: Blue-blind (tritanopia/tritanomaly) - ~0.01% of population
 */
export type CVDType = 'protan' | 'deutan' | 'tritan';

/**
 * Result of checking color distinction under color vision deficiency.
 */
export interface CVDDistinctionResult {
  /** Delta E with normal color vision */
  normal: number;
  /** Delta E as seen by protanopes (red-blind) */
  protan: number;
  /** Delta E as seen by deuteranopes (green-blind) */
  deutan: number;
  /** Delta E as seen by tritanopes (blue-blind) */
  tritan: number;
  /** Which CVD type has the worst distinction */
  worstType: CVDType;
  /** The worst Delta E value across all CVD types */
  worstDeltaE: number;
}

/**
 * A color pair that fails CVD distinction check.
 */
export interface CVDFailure {
  /** First color name */
  name1: string;
  /** Second color name */
  name2: string;
  /** First color hex */
  color1: string;
  /** Second color hex */
  color2: string;
  /** Category of the pair (e.g., 'git', 'status', 'terminal') */
  category: string;
  /** Full CVD distinction result */
  result: CVDDistinctionResult;
  /** Required minimum Delta E */
  required: number;
}

// =============================================================================
// LIGHTNESS UNIFORMITY TYPES
// =============================================================================

/**
 * Result of analyzing lightness uniformity across colors.
 * Syntax colors should have similar Jz lightness for visual calm.
 */
export interface LightnessUniformityResult {
  /** True if spread is within threshold */
  pass: boolean;
  /** Actual Jz spread (max - min) */
  spread: number;
  /** Maximum allowed spread */
  maxSpread: number;
  /** All colors with their Jz values, sorted by lightness */
  colors: Array<{ name: string; hex: string; jz: number }>;
  /** Darkest color */
  darkest?: { name: string; hex: string; jz: number };
  /** Lightest color */
  lightest?: { name: string; hex: string; jz: number };
  /** Colors that are statistical outliers */
  outliers: Array<{ name: string; hex: string; jz: number }>;
  /** Median Jz value */
  median?: number;
  /** Suggested fix if failing */
  suggestion?: string;
}

// =============================================================================
// HUE DISTRIBUTION TYPES
// =============================================================================

/**
 * Result of analyzing hue distribution.
 * Evenly distributed hues maximize color distinction.
 */
export interface HueDistributionResult {
  /** True if no clusters detected */
  pass: boolean;
  /** All colors with their hue values */
  colors: Array<{ name: string; hex: string; hue: number; chroma: number }>;
  /** Detected hue clusters (colors too close together) */
  clusters: Array<{
    colors: string[];
    hueRange: [number, number];
  }>;
  /** Gaps between adjacent hues, sorted smallest first */
  gaps: Array<{ from: string; to: string; gap: number }>;
  /** Minimum desired gap in degrees */
  minGap: number;
  /** Smallest actual gap found */
  smallestGap?: number;
  /** Suggested fix if failing */
  suggestion?: string;
}

// =============================================================================
// COMPOUND BACKGROUND CONTRAST TYPES
// =============================================================================

/**
 * A single background that causes a syntax color to fail contrast.
 * This represents a case where a syntax color passes on editor.background
 * but fails on an overlay background (selection, find match, etc.).
 */
export interface CompoundBackgroundIssue {
  /** Background name (e.g., 'selection', 'findMatch') */
  bgName: string;
  /** VS Code API key for the background */
  bgKey: string;
  /** Background hex color (after transparency resolution) */
  bgHex: string;
  /** APCA Lc value on this background */
  lc: number;
  /** Required Lc for this tier */
  required: number;
}

/**
 * A syntax token that fails contrast on one or more overlay backgrounds.
 */
export interface CompoundBackgroundFailure {
  /** Syntax token name (e.g., 'variable', 'keyword') */
  tokenName: string;
  /** Token color hex value */
  tokenHex: string;
  /** APCA Lc on editor.background (should pass) */
  editorLc: number;
  /** APCA tier for this token */
  tier: APCATier;
  /** Backgrounds where this token fails */
  failingBackgrounds: CompoundBackgroundIssue[];
  /** Worst (lowest) Lc across all failing backgrounds */
  worstLc: number;
  /** Background name with worst contrast */
  worstBgName: string;
}

/**
 * Summary of compound background contrast analysis.
 */
export interface CompoundBackgroundAnalysis {
  /** Total syntax tokens tested */
  tokensAnalyzed: number;
  /** Tokens that pass on all backgrounds */
  tokensPassing: number;
  /** Tokens that fail on at least one background */
  tokensFailing: number;
  /** All failures with details */
  failures: CompoundBackgroundFailure[];
  /** True if all tokens pass on all backgrounds */
  pass: boolean;
}
