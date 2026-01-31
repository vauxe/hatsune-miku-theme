/**
 * Types and interfaces for the readability analysis tool.
 *
 * Key concepts:
 * - APCA (Accessible Perceptual Contrast Algorithm): Modern contrast formula
 *   that accounts for human perception better than WCAG 2.x ratios
 * - Lc (Lightness Contrast): APCA's contrast value, ranges roughly -108 to +108
 *   Negative = light text on dark, Positive = dark text on light
 * - Delta E 2000 (ΔE00): Perceptual color difference metric
 *   <1 imperceptible, 1-5 subtle, 5-10 noticeable, 10-20 clear, 20-40 distinct, 40+ obvious
 * - LCH Chroma (C*): Perceptually uniform colorfulness measure
 *   Unlike HSL saturation, equal C* values appear equally colorful across hues
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

/** CIE Lab color space for perceptual calculations */
export interface Lab {
  /** Lightness: 0 (black) to 100 (white) */
  L: number;
  /** Green-red axis: negative = green, positive = red */
  a: number;
  /** Blue-yellow axis: negative = blue, positive = yellow */
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
 * Color distinction levels based on Delta E 2000.
 * Pass threshold: ΔE ≥ 15 for all pairs.
 */
export type DistinctionLevel = 'Imperceptible' | 'Subtle' | 'Noticeable' | 'Clear' | 'Distinct' | 'Obvious';

export type DistinctionCategory = 'syntax' | 'status' | 'git' | 'state' | 'symbol';

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
  /** True if Lc meets tier threshold (80/75/45) and doesn't exceed max (95 for primary/secondary, no max for tertiary) */
  pass: boolean;
  /** Text/background luminance relationship */
  polarity: Polarity;
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
  /** Delta E 2000 perceptual difference */
  deltaE: number;
  /** Human-readable distinction level */
  level: DistinctionLevel;
  /** Status icon (✅/⚠️/❌) */
  icon: string;
  /** True if ΔE meets threshold */
  pass: boolean;
}

export type DistinctionSkipReason = 'missing' | 'fallback' | 'invalid';

export interface DistinctionSkippedPair {
  name1: string;
  name2: string;
  reason: DistinctionSkipReason;
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
