/**
 * Types and interfaces for the readability analysis tool.
 */

// =============================================================================
// COLOR TYPES
// =============================================================================

export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface Lab {
  L: number;
  a: number;
  b: number;
}

export type Polarity = 'light-on-dark' | 'dark-on-light';
export type Level = 'Fluent' | 'Body' | 'Content' | 'Large' | 'Non-Text' | 'FAIL';
export type DistinctionLevel = 'Imperceptible' | 'Subtle' | 'Noticeable' | 'Clear' | 'Distinct' | 'Obvious';

export interface ColorSource {
  type: 'workbench' | 'textmate' | 'semantic';
  key: string;
  semanticKey?: string; // For syntax colors that check semantic first
}

export interface ColorValue {
  color: string;
  fallback: boolean;
  source?: ColorSource;
}

export interface APCAResult {
  lc: number;
  polarity: Polarity;
}

export interface APCAAnalysis {
  lc: number;
  level: Level;
  icon: string;
  pass: boolean;
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

// =============================================================================
// ANALYSIS TYPES
// =============================================================================

export interface ColorResult {
  name: string;
  color: string;
  bgColor: string;
  bgKey: string;
  lc: number;
  analysis: APCAAnalysis;
  alpha?: string;
  fallback: boolean;
  expectedDim?: boolean; // Elements intentionally low-contrast (ghost text, placeholders, etc.)
  source?: ColorSource; // VS Code API key used
}

export interface Stats {
  pass: number;
  large: number;       // Unexpected Large/Non-Text
  expectedDim: number; // Expected dim elements (not counted against verdict)
  fail: number;
  missing: number;
  total: number;
  results: ColorResult[]; // All analyzed results for key reference
}

export interface DistinctionPair {
  name1: string;
  name2: string;
  color1: string;
  color2: string;
  key1: string;
  key2: string;
  deltaE: number;
  level: DistinctionLevel;
  icon: string;
  pass: boolean;
}

export type DistinctionSkipReason = 'missing' | 'fallback' | 'invalid';

export interface DistinctionSkippedPair {
  name1: string;
  name2: string;
  reason: DistinctionSkipReason;
}

export interface DistinctionStats {
  total: number;
  pass: number;
  warn: number;
  fail: number;
  skipped: number;
}

export interface SectionData {
  title: string;
  results: ColorResult[];
  stats: Stats;
}

// =============================================================================
// JSON OUTPUT TYPES
// =============================================================================

export interface JsonColorResult {
  name: string;
  foreground: {
    color: string;
    key: string;
    keyType: 'workbench' | 'textmate' | 'semantic';
  };
  background: {
    color: string;
    key: string;
  };
  lc: number;
  level: Level;
  pass: boolean;
  fallback: boolean;
  expectedDim: boolean;
}

export interface JsonSection {
  section: string;
  results: JsonColorResult[];
}

export interface JsonDistinctionPair {
  pair: [string, string];
  colors: [string, string];
  keys: [string, string];
  deltaE: number;
  level: DistinctionLevel;
  pass: boolean;
}

export interface JsonOutput {
  theme: string;
  type: 'dark' | 'light';
  sections: JsonSection[];
  distinction: {
    pairs: JsonDistinctionPair[];
    skipped: Array<{ pair: [string, string]; reason: string }>;
  };
  symbolDiscrimination: {
    pairs: JsonDistinctionPair[];
    skipped: Array<{ pair: [string, string]; reason: string }>;
  };
  summary: {
    pass: number;
    large: number;
    expectedDim: number;
    fail: number;
    missing: number;
    total: number;
    defined: number;
    ready: boolean;
  };
}

export type OutputFormat = 'human' | 'json';
