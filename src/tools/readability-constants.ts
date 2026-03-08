/**
 * Constants and configuration for the readability analysis tool.
 */

import type { RoleName, DistinctionPriority } from './readability-types';

// =============================================================================
// SCALE CONSTANTS
// =============================================================================

/**
 * Scale factors for converting raw Jzazbz values to human-friendly ranges.
 *
 * Raw Jzazbz coordinates are tiny (Jz: 0-0.222, Cz: 0-0.19, ΔE: 0-0.36)
 * because the color space was designed for HDR (PQ transfer function).
 * We scale them to integer-friendly ranges for thresholds and display.
 *
 * DELTA_EZ_SCALE (×500):
 *   Raw ΔE × 500 → 0-180 range. Black↔white ≈ 111, JND ≈ 2-3.
 *   All ΔEz thresholds in this codebase are on this scale.
 *
 * CHROMA_SCALE (×525):
 *   Raw Cz × 525 → 0-100% range. sRGB blue (#0000FF) ≈ 100%.
 *   All chroma thresholds use this percentage scale.
 *
 * JZ_TO_PERCENT (×450):
 *   Raw Jz × 450 → 0-100% range. sRGB white (#FFFFFF) Jz≈0.222, ×450 ≈ 100%.
 *   Used for lightness uniformity display.
 */
export const DELTA_EZ_SCALE = 500;
export const CHROMA_SCALE = 525;
export const JZ_TO_PERCENT = 450;

// =============================================================================
// BACKGROUND KEY MAPPINGS
// =============================================================================

// Background key mappings (short name -> VS Code API key)
export const BG_KEYS = {
  editor: 'editor.background',
  sidebar: 'sideBar.background',
  statusBar: 'statusBar.background',
  tabBar: 'editorGroupHeader.tabsBackground',
  terminal: 'terminal.background',
  cursorBlock: 'editorCursor.foreground',
  terminalCursorBlock: 'terminalCursor.foreground',
  panel: 'panel.background',
  activityBar: 'activityBar.background',
  input: 'input.background',
  listSelection: 'list.activeSelectionBackground',
  listInactiveSelection: 'list.inactiveSelectionBackground',
  listHover: 'list.hoverBackground',
  listFocus: 'list.focusBackground',
  inlayHint: 'editorInlayHint.background',
  breadcrumb: 'breadcrumb.background',
  stickyScroll: 'editorStickyScroll.background',
  editorWidget: 'editorWidget.background',
  suggest: 'editorSuggestWidget.background',
  hover: 'editorHoverWidget.background',
  quickInput: 'quickInput.background',
  quickInputListFocus: 'quickInputList.focusBackground',
  menu: 'menu.background',
  notification: 'notifications.background',
  peekView: 'peekViewResult.background',
  peekViewSelection: 'peekViewResult.selectionBackground',
  peekViewEditor: 'peekViewEditor.background',
  titleBar: 'titleBar.activeBackground',
  titleBarInactive: 'titleBar.inactiveBackground',
  commandCenter: 'commandCenter.background',
  suggestSelected: 'editorSuggestWidget.selectedBackground',
  inlineChat: 'inlineChat.background',
  button: 'button.background',
  buttonSecondary: 'button.secondaryBackground',
  badge: 'badge.background',
  activityBarBadge: 'activityBarBadge.background',
  dropdown: 'dropdown.background',
  debugToolbar: 'debugToolBar.background',
  exceptionLabel: 'debugView.exceptionLabelBackground',
  stateLabel: 'debugView.stateLabelBackground',
  panelTitleBadge: 'panelTitleBadge.background',
  profileBadge: 'profileBadge.background',
  radioActive: 'radio.activeBackground',
  statusBarDebugging: 'statusBar.debuggingBackground',
  banner: 'banner.background',
  keybindingLabel: 'keybindingLabel.background',
  checkbox: 'checkbox.background',
  extensionButton: 'extensionButton.prominentBackground',
  extensionBadgeRemote: 'extensionBadge.remoteBackground',
  statusBarItemError: 'statusBarItem.errorBackground',
  statusBarItemWarning: 'statusBarItem.warningBackground',
  statusBarItemRemote: 'statusBarItem.remoteBackground',
  statusBarItemProminent: 'statusBarItem.prominentBackground',
  statusBarItemOffline: 'statusBarItem.offlineBackground',
  activityWarningBadge: 'activityWarningBadge.background',
  activityErrorBadge: 'activityErrorBadge.background',
  selection: 'editor.selectionBackground',
  selectionInactive: 'editor.inactiveSelectionBackground',
  selectionHighlight: 'editor.selectionHighlightBackground',
  rangeHighlight: 'editor.rangeHighlightBackground',
  symbolHighlight: 'editor.symbolHighlightBackground',
  terminalSelection: 'terminal.selectionBackground',
  wordHighlight: 'editor.wordHighlightBackground',
  wordHighlightStrong: 'editor.wordHighlightStrongBackground',
  wordHighlightText: 'editor.wordHighlightTextBackground',
  findMatch: 'editor.findMatchHighlightBackground',
  findMatchActive: 'editor.findMatchBackground',
  findRange: 'editor.findRangeHighlightBackground',
  bracketMatch: 'editorBracketMatch.background',
  terminalFindMatch: 'terminal.findMatchBackground',
  terminalFindMatchHighlight: 'terminal.findMatchHighlightBackground',
  diffInserted: 'diffEditor.insertedTextBackground',
  diffRemoved: 'diffEditor.removedTextBackground',
  diffInsertedLine: 'diffEditor.insertedLineBackground',
  diffRemovedLine: 'diffEditor.removedLineBackground',
  mergeCurrentContent: 'merge.currentContentBackground',
  mergeIncomingContent: 'merge.incomingContentBackground',
  mergeCommonContent: 'merge.commonContentBackground',
  linkedEditing: 'editor.linkedEditingBackground',
  stackFrame: 'editor.stackFrameHighlightBackground',
  focusedStackFrame: 'editor.focusedStackFrameHighlightBackground',
  searchEditorFindMatch: 'searchEditor.findMatchBackground',
  inputValidationError: 'inputValidation.errorBackground',
  inputValidationInfo: 'inputValidation.infoBackground',
  inputValidationWarning: 'inputValidation.warningBackground',
  // TIER 1: Current line - where you're typing (constant focus)
  lineHighlight: 'editor.lineHighlightBackground',
  // TIER 2: Autocomplete - syntax colors on suggest widget
  suggestFocus: 'editorSuggestWidget.selectedBackground',
  // Git gutter - change indicators
  gutterAdded: 'editorGutter.addedBackground',
  gutterModified: 'editorGutter.modifiedBackground',
  gutterDeleted: 'editorGutter.deletedBackground',
  // CODE REVIEW: Diff editor contexts
  diffUnchangedRegion: 'diffEditor.unchangedRegionBackground',
  diffUnchangedCode: 'diffEditor.unchangedCodeBackground',
  multiDiffHeader: 'multiDiffEditor.headerBackground',
  multiDiffBackground: 'multiDiffEditor.background',
  // CODE REVIEW: AI-suggested changes (Copilot inline diff)
  inlineChatDiffInserted: 'inlineChatDiff.inserted',
  inlineChatDiffRemoved: 'inlineChatDiff.removed',
  // NOTEBOOKS: Jupyter cell contexts (data science)
  notebookCell: 'notebook.cellEditorBackground',
  notebookOutput: 'notebook.outputContainerBackgroundColor',
  notebookSelected: 'notebook.selectedCellBackground',
} as const;

export type BgKeyName = keyof typeof BG_KEYS;

// =============================================================================
// UI LABELS
// =============================================================================

export const LABELS = {
  title: 'READABILITY ANALYSIS',

  // Section labels
  sectionText: 'TEXT',
  sectionSyntax: 'SYNTAX',
  sectionSyntaxContext: 'SYNTAX CONTEXT',
  sectionComments: 'COMMENTS',
  sectionDiagnostics: 'DIAGNOSTICS',
  sectionNavHighlights: 'NAVIGATION HIGHLIGHTS',
  sectionPeekEditor: 'PEEK VIEW EDITOR',
  sectionMerge: 'MERGE CONFLICTS',
  sectionCodeReview: 'CODE REVIEW',
  sectionNotebook: 'NOTEBOOKS',
  sectionSearchEditor: 'SEARCH EDITOR',
  sectionEditorUi: 'EDITOR UI',
  sectionWorkbenchUi: 'WORKBENCH UI',
  sectionWidgets: 'WIDGETS',
  sectionGit: 'GIT DECORATIONS',
  sectionBrackets: 'BRACKETS',
  sectionTerminal: 'TERMINAL',
  sectionButtons: 'BUTTONS & BADGES',
  sectionDebug: 'DEBUG',
  sectionDebugContext: 'DEBUG CONTEXT',
  sectionLinkedEditing: 'LINKED EDITING',
  sectionLinks: 'LINKS & HIGHLIGHTS',
  sectionMisc: 'MISC UI',
  sectionInputControls: 'INPUT CONTROLS',
  sectionSettings: 'SETTINGS EDITOR',
  sectionChat: 'CHAT & AI',
  sectionTesting: 'TESTING',
  sectionDebugConsole: 'DEBUG CONSOLE',
  // New sections
  sectionMarkdownAlerts: 'MARKDOWN ALERTS',
  sectionTestingIcons: 'TESTING ICONS',
  sectionDebugIcons: 'DEBUG ICONS',
  sectionScmGraph: 'SCM GRAPH',
  sectionTerminalSymbols: 'TERMINAL SYMBOLS',
  sectionExtensionIcons: 'EXTENSION ICONS',
  sectionNotebookStatus: 'NOTEBOOK STATUS',

  // Error messages
  errThemeRequired: 'Error: --theme <path> is required.',
  errThemeNotFound: (p: string) => `Error: Theme file not found: ${p}`,
  errInvalidTheme: (p: string, e: string) => `Error: Invalid theme JSON in ${p}: ${e}`,
  errMissingColors: 'Error: Theme missing required "colors" object.',
  errMissingEditorBg: 'Error: Theme missing "editor.background" color.',
  errMissingEditorFg: 'Error: Theme missing "editor.foreground" color.',
  errInvalidColor: (c: string) => `Error: Invalid color "${c}". Use #RGB, #RGBA, #RRGGBB, or #RRGGBBAA`,
} as const;

// =============================================================================
// APCA CONSTANTS
// =============================================================================

/**
 * APCA contrast thresholds for different element tiers.
 *
 * Primary (Lc ≥ 75): Syntax tokens — APCA body text minimum for 14px/400
 *   Lc 75 is the floor; APCA recommends Lc 90 for fluent reading. Aim for 85-95.
 * Secondary (Lc ≥ 60): UI elements, operators — APCA content text level
 * Tertiary (Lc ≥ 45): Intentionally subdued — ghost text, inactive, comments
 * No max cap — APCA compensates for polarity internally.
 */
/** Shape of APCA threshold configuration */
export type APCAThresholdConfig = { primary: number; secondary: number; tertiary: number };

export const APCA_THRESHOLDS: APCAThresholdConfig = {
  primary: 75,    // APCA body text minimum for 18px/400 (reasonable for monospace 14px)
  secondary: 60,  // APCA content text level — UI elements you glance at
  tertiary: 45,   // Intentionally subdued — ghost text, inactive, comments
};

/**
 * Light theme APCA thresholds — same readability standard as dark.
 *
 * APCA internally compensates for polarity asymmetry: the same Lc value
 * represents equivalent readability in both light-on-dark and dark-on-light.
 * Using lower thresholds for light themes would mean accepting worse
 * readability. Same thresholds for both themes.
 */
export const APCA_THRESHOLDS_LIGHT: APCAThresholdConfig = {
  primary: 75,     // Body text — same standard as dark theme
  secondary: 60,   // Content text — same standard as dark theme
  tertiary: 45,    // Ghost text, placeholders, comments — same standard
};

/**
 * Primary syntax elements that require higher contrast (Lc ≥ 75).
 * These are high-frequency semantic tokens you read constantly while coding.
 *
 * Note: Punctuation is EXCLUDED (secondary tier) — structural/visual aid,
 * not semantic content. Operators are PRIMARY — the design places them in the
 * soprano/mp ensemble (Magenta 330°), same tier as all other syntax tokens.
 */
export const PRIMARY_SYNTAX_ELEMENTS = new Set([
  // Core tokens (appear in almost every line)
  'Variables', 'Var Language', 'Parameters', 'Properties',
  'Keywords', 'Operators', 'Storage', 'Storage Mod',
  // Definitions
  'Functions', 'Methods', 'Classes', 'Types', 'Interfaces',
  'Namespaces', 'Enums', 'Enum Members', 'Type Params',
  'Structs', 'Decorators', 'Macros',
  // Literals
  'Numbers', 'Strings', 'String Escape', 'Constants', 'Regexp',
  // Markup/Web
  'Tags', 'Attributes', 'Links',
  // CSS (structural elements)
  'CSS Selector', 'CSS Property', 'Color Value',
  // Markup content (Markdown - readable text)
  'Markup Heading', 'Markup Bold', 'Markup Italic', 'Markup Code', 'Markup Quote',
  'Markup List', 'Section',
  // Support (library/framework - commonly read)
  'Support Func', 'Support Class', 'Support Type', 'Support Const', 'Support Var',
  // Semantic tokens
  'Labels', 'Events', 'Inherited',
  // Deprecated code is still read for content
  'Deprecated',
  // Primary text
  'Primary', 'Global',
]);

/**
 * Distinction threshold - minimum ΔEz for color pairs to be distinguishable.
 * Values are on the DELTA_EZ_SCALE (×500) scale.
 *
 * Standard pairs require ΔEz ≥ 15 (Clear level).
 * Critical pairs require ΔEz ≥ 18 for safety-critical distinctions.
 */
export const DISTINCTION_THRESHOLDS = {
  critical: 18,  // Safety-critical pairs (error/warning, red/green)
  standard: 15,  // Adjacent syntax colors need clear distinction
} as const;

/**
 * Critical distinction pairs - safety-critical colors where confusion could cause errors.
 * Uses same threshold (20) but flagged for reporting.
 */
export const CRITICAL_DISTINCTION_PAIRS = new Set([
  'error↔warning',
  'error↔info',
  'warning↔info',
  'added↔deleted',
  'added↔modified',
  'modified↔deleted',
  'ansiRed↔ansiGreen',
  'passed↔failed',
  // Diff markup (in Markdown/docs)
  'markupInserted↔markupDeleted',
  'markupInserted↔markupChanged',
  'markupDeleted↔markupChanged',
]);

/**
 * CVD-critical distinction pairs - colors that rely on red-green distinction.
 * ~8% of males have red-green color blindness (protanopia/deuteranopia).
 * These pairs MUST remain distinguishable under CVD simulation.
 *
 * Minimum ΔE under CVD: 12 (reduced from normal 15 due to gamut compression)
 */
export const CVD_CRITICAL_PAIRS: {
  category: string;
  pairs: readonly (readonly [string, string])[];
}[] = [
  {
    category: 'git',
    pairs: [
      ['added', 'deleted'],
      ['added', 'modified'],
      ['modified', 'deleted'],
    ],
  },
  {
    category: 'status',
    pairs: [
      ['error', 'warning'],
      ['error', 'info'],
    ],
  },
  {
    category: 'terminal',
    pairs: [
      ['ansiRed', 'ansiGreen'],
      ['ansiRed', 'ansiYellow'],
      ['ansiGreen', 'ansiYellow'],
    ],
  },
  {
    category: 'testing',
    pairs: [
      ['passed', 'failed'],
      ['passed', 'errored'],
      ['failed', 'errored'],
    ],
  },
  {
    category: 'diff',
    pairs: [
      ['markupInserted', 'markupDeleted'],
    ],
  },
  {
    category: 'bracket',
    pairs: [
      ['bracket1', 'bracket2'],
      ['bracket2', 'bracket3'],
      ['bracket3', 'bracket4'],
      ['bracket4', 'bracket5'],
      ['bracket5', 'bracket6'],
      ['bracket6', 'bracket1'],  // wrap-around
    ],
  },
];

/** Minimum ΔEz (×500 scale) required under CVD simulation (lower than normal due to gamut compression) */
export const CVD_DISTINCTION_THRESHOLD = 12;

/**
 * JzCzhz Chroma thresholds (percentage scale: raw Cz × CHROMA_SCALE)
 *
 * Jzazbz (Safdar et al. 2017) is more perceptually uniform than OKLCH or CIE LCH:
 * - Designed for HDR and wide color gamut (future-proof)
 * - Excellent uniformity across entire gamut
 * - Simple Euclidean distance works well (unlike Lab needing CIEDE2000)
 * - Raw Jzazbz chroma: 0-~0.19 for sRGB gamut (blue #0000FF = 100%)
 * - Percentage scale: 0-100 (multiply raw by CHROMA_SCALE = 525)
 *
 * Reference values (Jz C%):
 * - 10-25: Comfortable pastels (easy on eyes for hours)
 * - 25-45: Vibrant colors (colorful but sustainable)
 * - 45-65: Vivid saturated (attention-grabbing, limit exposure)
 * - 65+: Intense/extreme (pure RGB, avoid for text)
 *
 * Thresholds (calibrated for 8+ hour coding sessions):
 * - Primary (8-45): Core syntax - comfortable pastels to vibrant
 * - Secondary (5-45): Comments, UI - can be muted
 * - Accent (8-60): Errors, brackets - can be vivid for attention
 */
export const CHROMA_THRESHOLDS = {
  primary: { min: 8, max: 45 },     // Comfortable pastels to vibrant syntax
  secondary: { min: 5, max: 45 },   // Comments, UI (can be muted)
  accent: { min: 8, max: 60 },      // Errors, highlights (attention-grabbing)
} as const;

/**
 * Light theme chroma thresholds — relaxed max for dark-on-light polarity.
 *
 * On dark themes, bright vivid text glows and causes halation (eye strain).
 * On light themes, dark vivid text is comfortable — like printed material.
 * Books and magazines routinely use saturated dark-on-light colors.
 *
 * Additionally, at low Jz (dark text), sRGB gamut naturally limits most
 * hues to Cz ≤ 0.095 after clipping. The 45 cap (Cz 0.085) was calibrated
 * for bright text on dark backgrounds. Raising to 60 for light themes
 * lets hues reach their natural sRGB maximum without false positives.
 */
export const CHROMA_THRESHOLDS_LIGHT = {
  primary: { min: 8, max: 100 },    // No max — dark vivid text is comfortable
  secondary: { min: 5, max: 100 },  // No max for comments/UI either
  accent: { min: 8, max: 100 },     // No max for accents
} as const;

export type ChromaTier = keyof typeof CHROMA_THRESHOLDS;

/**
 * Accent elements - can have higher chroma for attention-grabbing.
 */
export const ACCENT_CHROMA_ELEMENTS = new Set([
  'error', 'warning', 'info',
  'invalid', 'deprecated',
  'added', 'modified', 'deleted', 'conflict',
  'bracket1', 'bracket2', 'bracket3', 'bracket4', 'bracket5', 'bracket6',
  'ansiRed', 'ansiGreen', 'ansiYellow', 'ansiBlue', 'ansiMagenta', 'ansiCyan',
  'link', 'markupHeading',
  // Diff markup (can be vibrant for visibility)
  'markupInserted', 'markupDeleted', 'markupChanged',
  // CSS color values (inherently colorful)
  'colorValue',
  // Markdown alerts (semantic colors for attention)
  'alertNote', 'alertTip', 'alertImportant', 'alertWarning', 'alertCaution',
]);

/**
 * Secondary chroma elements - can be more muted (Cz 5-35).
 *
 * Note: Punctuation is here AND excluded from PRIMARY_SYNTAX_ELEMENTS.
 * This is intentional - punctuation is a structural aid that:
 * - Needs good contrast (Lc ≥ 60, secondary tier) but not maximum (Lc ≥ 75)
 * - Can be muted in color (lower chroma) to reduce visual noise
 * This aligns with themes like Nord and Solarized where punctuation fades slightly.
 */
export const SECONDARY_CHROMA_ELEMENTS = new Set([
  'comment', 'docComment',
  'punctuation',
]);

// =============================================================================
// EXPECTED DIM ELEMENTS
// =============================================================================

/**
 * Elements that are intentionally low-contrast by design.
 * These should not count against marathon-readiness.
 *
 * Note: Names must match exactly as used in analyze() calls.
 *
 * Terminal ANSI colors near the background are included for both polarities:
 * - Dark themes: Black/Bright Black are near-background
 * - Light themes: White/Bright White are near-background
 * High-contrast entries (e.g. White on dark) pass anyway, so the flag is inert.
 */
export const EXPECTED_DIM_ELEMENTS = new Set([
  // Editor gutter elements (intentionally subtle)
  'Ghost Text',      // AI suggestions, expected to be subtle
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
  'List Deemph',     // Explicitly deemphasized list items
  // Comments — Ch6 alto whisper departure, intentionally quiet
  'Comments', 'Doc Comments',
  'Line:Comment', 'Sel:Comment', 'Hover:Comment', 'Sticky:Comment',
  'DiffIns:Comment', 'DiffRem:Comment', 'Range:Comment', 'Peek:Comment',
  'Unchanged:Comment', 'Cell:Comment', 'Search:Comment',
  // Git (intentionally dimmed filename text — tertiary threshold Lc ≥ 45)
  'Ignored',         // Git ignored files
  // Icons - communicate via SHAPE not text, need only visibility (Lc≥45)
  // Testing icons
  'Passed', 'Failed', 'Errored', 'Queued', 'Unset', 'Skipped', 'Run Action',
  // Debug icons
  'Breakpoint', 'BP Disabled', 'BP Unverified', 'BP Current', 'BP Stackframe',
  'Start', 'Pause', 'Stop', 'Disconnect', 'Restart',
  'Step Over', 'Step Into', 'Step Out', 'Continue', 'Step Back',
  // SCM graph (branch lines only - not text labels)
  'Branch 1', 'Branch 2', 'Branch 3', 'Branch 4', 'Branch 5',
  // Note: 'Label', 'Additions', 'Deletions', 'Ref Color' are TEXT, not icons - use secondary tier
  // Terminal symbols (shell integration - ICONS only, not text labels)
  'File', 'Folder', 'Symlink File', 'Symlink Folder',
  'Branch', 'Commit', 'Tag', 'Remote', 'Stash',
  'Pull Request', 'PR Done', 'Inline Suggest',
  // Note: 'Option', 'Option Value', 'Argument', 'Method', 'Alias', 'Flag' are
  // TEXT labels in autocomplete, not icons - use secondary tier (Lc≥75)
  // Extension icons
  'Star', 'Verified', 'Pre-Release', 'Sponsor', 'Private',
  // Notebook status icons (prefixed to avoid collision with Debug Console names)
  'NB Error', 'NB Running', 'NB Success',
  // Terminal colors near background (polarity-dependent, both included)
  'Black',           // Near-background on dark themes
  'Bright Black',    // Dim gray on dark themes
  'White',           // Near-background on light themes
  'Bright White',    // Near-background on light themes
]);

// =============================================================================
// COLOR DISTINCTION PAIRS
// =============================================================================

// (ADJACENCY_PAIRS removed — replaced by role-based MUST_DISTINGUISH_PAIRS below)

/**
 * Symbol discrimination pairs - symbols that appear in autocomplete, outline, breadcrumbs
 * These need to be distinguished by color alone (no font style in icons)
 * Keys must match symbolIcons record (ctor, not constructor)
 */
export const SYMBOL_DISCRIMINATION_PAIRS: Array<[string, string]> = [
  // Core structure types (must be obviously different)
  // class↔struct omitted: intentionally identical color (D# 90°), shape-distinguished by icon
  ['class', 'interface'],
  ['interface', 'struct'],
  ['enum', 'class'],
  ['enum', 'interface'],
  ['enum', 'struct'],
  ['object', 'class'],
  ['object', 'interface'],
  ['object', 'struct'],
  // Functions vs other callable
  ['function', 'method'],
  ['function', 'ctor'],
  ['method', 'ctor'],
  ['function', 'event'],         // event handlers vs functions
  ['method', 'event'],           // event handlers vs methods
  // Variables vs properties vs fields
  ['variable', 'field'],
  ['property', 'field'],
  ['variable', 'property'],
  ['method', 'property'],        // object members in autocomplete
  ['ctor', 'class'],             // constructor vs class distinction
  ['variable', 'parameter'],     // in function signatures
  ['property', 'parameter'],     // in object patterns
  ['field', 'parameter'],        // in class methods
  // Constants vs values
  ['constant', 'variable'],
  ['constant', 'enumMember'],
  ['constant', 'boolean'],
  ['constant', 'field'],
  ['boolean', 'null'],
  ['enumMember', 'field'],
  ['enumMember', 'variable'],
  // Literals
  ['string', 'number'],
  ['string', 'constant'],
  ['string', 'text'],
  ['number', 'boolean'],
  ['number', 'null'],
  // Type system
  ['class', 'typeParameter'],
  ['interface', 'typeParameter'],
  ['struct', 'typeParameter'],
  ['enum', 'typeParameter'],
  ['typeParameter', 'variable'],
  ['typeParameter', 'parameter'],
  // Module organization
  ['namespace', 'module'],
  ['namespace', 'package'],
  ['module', 'package'],
  ['folder', 'package'],
  ['namespace', 'class'],        // namespace vs class in imports
  ['module', 'class'],           // module vs class
  ['module', 'function'],        // module exports
  // Keywords vs types
  ['keyword', 'class'],
  ['keyword', 'interface'],
  ['keyword', 'namespace'],
  ['keyword', 'struct'],
  ['keyword', 'enum'],
  ['keyword', 'function'],
  ['keyword', 'method'],
  // Events and references
  ['event', 'method'],
  ['event', 'property'],
  ['event', 'field'],
  ['reference', 'variable'],
  ['reference', 'property'],
  ['reference', 'field'],
  // File system (explorer, breadcrumbs)
  ['file', 'folder'],
  ['folder', 'module'],
  ['file', 'snippet'],
  ['file', 'class'],             // file contains class
  ['folder', 'namespace'],       // folder as namespace
  // Arrays and objects
  ['array', 'object'],
  ['array', 'variable'],
  ['array', 'property'],
  ['object', 'namespace'],
  ['object', 'variable'],
  // Keys and properties (JSON, dicts)
  ['key', 'property'],
  ['key', 'string'],
  ['key', 'field'],
  ['key', 'variable'],
  // Completions
  ['snippet', 'text'],
  ['snippet', 'function'],
  ['snippet', 'keyword'],
  ['text', 'string'],
  ['text', 'keyword'],
  // Operators
  ['operator', 'keyword'],
  ['operator', 'function'],
  ['operator', 'method'],
  // Units and colors
  ['unit', 'number'],
  ['unit', 'constant'],
  ['color', 'constant'],
  ['color', 'string'],
];

/**
 * Status distinction pairs - error/warning/info states need clear visual separation
 * These are critical for quickly identifying diagnostic severity
 */
export const STATUS_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['error', 'warning'],
  ['warning', 'info'],
  ['error', 'info'],
];

/**
 * Git distinction pairs - file states in source control
 * Users need to quickly identify what changed without reading labels
 */
export const GIT_DISTINCTION_PAIRS: Array<[string, string]> = [
  // Core file states
  ['added', 'modified'],
  ['deleted', 'untracked'],
  ['modified', 'deleted'],
  ['added', 'untracked'],
  ['added', 'deleted'],
  ['ignored', 'untracked'],      // Important: "ignored" vs "new file"
  // Renamed files (refactoring)
  ['renamed', 'modified'],
  ['renamed', 'added'],
  // Conflict awareness (merge)
  ['conflict', 'modified'],
  ['conflict', 'deleted'],
  ['conflict', 'added'],
  // Staged states (commit preparation)
  ['stageModified', 'modified'],
  ['stageDeleted', 'deleted'],
  ['stageModified', 'stageDeleted'], // Both staged, should differ
  // Submodules
  ['submodule', 'modified'],
];

/**
 * State distinction pairs - active vs inactive UI elements
 * Tests whether users can perceive state changes
 */
export const STATE_DISTINCTION_PAIRS: Array<[string, string]> = [
  // Tab states
  ['tabActive', 'tabInactive'],
  ['tabActive', 'tabHover'],
  // List states — foreground is sacred for engagement states (design Section 7);
  // hover/selected/focus distinction is carried by background tint and border, not foreground color.
  // Only test pairs where the design specifies different foreground tiers.
  // Activity bar
  ['activityActive', 'activityInactive'],
  // Panel
  ['panelActive', 'panelInactive'],
  // Line numbers
  ['lineNumber', 'lineNumberActive'],
  // Highlights (find/word)
  ['findMatch', 'findMatchActive'],
  ['wordHighlight', 'wordHighlightStrong'],
  // Breadcrumb
  ['breadcrumb', 'breadcrumbActive'],
  // Title bar
  ['titleBar', 'titleBarInactive'],
  // Command center
  ['commandCenter', 'commandCenterActive'],
];

/**
 * Bracket distinction pairs - rainbow brackets should be distinguishable
 * Each adjacent bracket pair needs visual distinction for nesting clarity
 */
export const BRACKET_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['bracket1', 'bracket2'],
  ['bracket2', 'bracket3'],
  ['bracket3', 'bracket4'],
  ['bracket4', 'bracket5'],
  ['bracket5', 'bracket6'],
  ['bracket6', 'bracket1'], // Wrap-around distinction
];

/**
 * Terminal ANSI distinction pairs - critical for error vs success identification
 * Red/green for pass/fail, yellow for warnings, blue/magenta for links/directories
 */
export const TERMINAL_DISTINCTION_PAIRS: Array<[string, string]> = [
  // Critical: error vs success
  ['ansiRed', 'ansiGreen'],       // Error vs success (critical)
  ['ansiYellow', 'ansiRed'],      // Warning vs error
  ['ansiYellow', 'ansiGreen'],    // Warning vs success
  // Info colors (commonly used together)
  ['ansiCyan', 'ansiBlue'],       // Info colors - often similar
  ['ansiBlue', 'ansiMagenta'],    // Directories vs links (can look similar)
  ['ansiMagenta', 'ansiRed'],     // Links vs errors
  // Bright variants
  ['ansiBrightRed', 'ansiBrightGreen'],   // Bright error vs success
  ['ansiBrightBlue', 'ansiBrightCyan'],   // Bright info colors
  ['ansiBrightBlue', 'ansiBrightMagenta'], // Bright directories vs links
  // Normal vs emphasized
  ['ansiWhite', 'ansiBrightWhite'], // Normal vs emphasized
  ['ansiBlack', 'ansiBrightBlack'], // Dim text levels
];

/**
 * Markdown alert distinction pairs - note/tip/warning/etc need instant recognition
 * Common in documentation (GitHub alerts, VS Code READMEs)
 */
export const MARKDOWN_ALERT_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['note', 'tip'],
  ['tip', 'important'],
  ['important', 'warning'],
  ['warning', 'caution'],
  ['caution', 'note'],            // Wrap-around
  ['note', 'warning'],            // Skip pairs for extra safety
  ['tip', 'caution'],
];

/**
 * Testing icon distinction pairs - pass/fail/error states
 * Critical for test runners - color ONLY conveys meaning (no font styling)
 */
export const TESTING_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['passed', 'failed'],           // GREEN vs RED (CRITICAL)
  ['failed', 'errored'],          // Both bad but different
  ['passed', 'skipped'],          // Done vs ignored
  ['queued', 'unset'],            // Pending states
  ['passed', 'queued'],           // Complete vs waiting
  ['failed', 'skipped'],          // Bad vs ignored
];

/**
 * Debug icon distinction pairs - breakpoint states and toolbar actions
 * Safety-critical - users must instantly know breakpoint state
 */
export const DEBUG_ICON_DISTINCTION_PAIRS: Array<[string, string]> = [
  // Breakpoint states
  ['breakpoint', 'breakpointDisabled'],
  ['breakpoint', 'breakpointUnverified'],
  ['breakpointDisabled', 'breakpointUnverified'],
  ['breakpoint', 'breakpointCurrentStackframe'],
  ['breakpointCurrentStackframe', 'breakpointStackframe'],
  // Toolbar actions - opposite/related actions
  ['start', 'stop'],
  ['pause', 'continue'],
  ['stepInto', 'stepOut'],
  ['stepOver', 'stepBack'],
  ['stop', 'disconnect'],
];

/**
 * SCM graph distinction pairs - branch visualization colors
 * Adjacent lines must be distinguishable to follow branching patterns
 */
export const SCM_GRAPH_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['foreground1', 'foreground2'],
  ['foreground2', 'foreground3'],
  ['foreground3', 'foreground4'],
  ['foreground4', 'foreground5'],
  ['foreground5', 'foreground1'], // Wrap-around
  ['additions', 'deletions'],     // Diff indicators
];

/**
 * Terminal symbol icon distinction pairs - shell integration
 * Quick visual scanning for file/folder and git state
 */
export const TERMINAL_SYMBOL_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['file', 'folder'],
  ['symbolicLinkFile', 'file'],
  ['symbolicLinkFolder', 'folder'],
  ['commit', 'branch'],
  ['pullRequest', 'pullRequestDone'],
  ['option', 'optionValue'],
  ['argument', 'method'],
  ['remote', 'stash'],
  ['tag', 'branch'],
];

/**
 * Extension icon distinction pairs - marketplace icons
 */
export const EXTENSION_ICON_DISTINCTION_PAIRS: Array<[string, string]> = [
  ['star', 'verified'],
  ['verified', 'preRelease'],
  ['preRelease', 'sponsor'],
];

// =============================================================================
// COGNITIVE ROLE MAP
// =============================================================================

/**
 * Token → cognitive role mapping.
 *
 * 12 roles derived from first principles across all major programming languages.
 * Each role answers: "What is this token's job in the programmer's mental model?"
 * The minimum set where merging any two loses information the programmer uses.
 *
 * GRAMMAR:      Can you rename it? No → reserved word.
 * DATA:         User-named values flowing through code.
 * ACCESS:       Named entry/exit points (parameters in, properties out).
 * ACTION:       Callable code (function, method, tag).
 * SHAPE_DEF:    Defines a type shape (class, struct, interface, enum).
 * SHAPE_REF:    References a type shape (type annotation, type parameter).
 * TEXT:         Human-readable literals (strings, regex).
 * VALUE:        Fixed/immutable values (constants, numbers, booleans).
 * META:         Code that transforms code (decorators, macros).
 * CONNECTIVE:   Operators linking expressions.
 * WHISPER:      Comments — code/not-code boundary.
 */
export const TOKEN_ROLES: Record<string, RoleName> = {
  // GRAMMAR — reserved words, cannot be renamed
  keyword: 'GRAMMAR',
  storage: 'GRAMMAR',
  storageModifier: 'GRAMMAR',
  variableLanguage: 'GRAMMAR',

  // DATA — user-named values
  variable: 'DATA',
  supportVariable: 'DATA',

  // ACCESS — named entry/exit points
  parameter: 'ACCESS',
  property: 'ACCESS',
  attribute: 'ACCESS',  // alias: HTML attributes = named access

  // ACTION — callable code (function ≡ method by design, tag is quieter invocation)
  function: 'ACTION',
  method: 'ACTION',
  tag: 'ACTION',
  supportFunction: 'ACTION',

  // SHAPE_DEF — defines a type shape
  class: 'SHAPE_DEF',
  struct: 'SHAPE_DEF',
  interface: 'SHAPE_DEF',
  enum: 'SHAPE_DEF',
  supportClass: 'SHAPE_DEF',
  namespace: 'SHAPE_DEF',

  // SHAPE_REF — references a type shape
  type: 'SHAPE_REF',
  typeParameter: 'SHAPE_REF',
  supportType: 'SHAPE_REF',

  // TEXT — human-readable literals
  string: 'TEXT',
  stringEscape: 'TEXT',
  regexp: 'TEXT',

  // VALUE — fixed/immutable values
  number: 'VALUE',
  constant: 'VALUE',
  boolean: 'VALUE',
  null: 'VALUE',
  enumMember: 'VALUE',
  supportConstant: 'VALUE',

  // META — code that transforms code
  decorator: 'META',
  macro: 'META',

  // CONNECTIVE — operators linking expressions
  operator: 'CONNECTIVE',

  // WHISPER — comments
  comment: 'WHISPER',
  docComment: 'WHISPER',
};

/**
 * Get the cognitive role for a token.
 * Returns undefined for tokens not in the role system (e.g., CSS-specific, markup formatting).
 */
export function getTokenRole(token: string): RoleName | undefined {
  return TOKEN_ROLES[token];
}

// =============================================================================
// CROSS-ROLE DISTINCTION PAIRS (the minimal syntax check)
// =============================================================================

/**
 * ΔEz thresholds (×500 scale) for cross-role distinction by priority.
 */
export const ROLE_DISTINCTION_THRESHOLDS = {
  critical: 18,  // Appear every few lines, confusion is costly
  high: 15,      // Common adjacencies, should be clearly different
  standard: 12,  // Less frequent but still need distinction
} as const;

/**
 * Cross-role token pairs that MUST be visually distinguishable.
 *
 * Derived from the 12 cognitive roles: for each pair of roles that appears
 * adjacent in real code, one representative pair is tested. Where a role
 * has important variants (e.g., GRAMMAR has keyword, storage, storageModifier),
 * each variant that commonly differs in practice is included.
 *
 * Structure: [token1, token2, priority]
 */
export const MUST_DISTINGUISH_PAIRS: ReadonlyArray<readonly [string, string, DistinctionPriority]> = [
  // ==========================================================================
  // CRITICAL (ΔEz ≥ 18) — every few lines in any codebase
  // ==========================================================================

  // GRAMMAR ↔ DATA — `if x`, `return val`, `for item in list`
  ['keyword', 'variable', 'critical'],
  ['storage', 'variable', 'critical'],
  ['storageModifier', 'variable', 'critical'],

  // GRAMMAR ↔ ACCESS — `return x`, `const x`
  ['keyword', 'parameter', 'critical'],

  // GRAMMAR ↔ ACTION — `async function`, `return foo()`, `obj.method()`
  ['keyword', 'function', 'critical'],
  ['storage', 'function', 'critical'],

  // GRAMMAR ↔ TEXT — `import "x"`, `return "y"`
  ['keyword', 'string', 'critical'],

  // GRAMMAR ↔ SHAPE_DEF — `class Foo`, `new Bar`
  ['keyword', 'class', 'critical'],

  // DATA ↔ ACCESS — `fn(param) { let x = param }` (the hardest pair)
  ['parameter', 'variable', 'critical'],

  // ACTION ↔ ACCESS — `foo(x)`, `method(param)` definition/call
  ['function', 'parameter', 'critical'],

  // ACTION ↔ DATA — `foo(x, y)` arguments, `obj.method(x)`
  ['function', 'variable', 'critical'],

  // SHAPE_REF ↔ DATA — `x: Type` annotation
  ['type', 'variable', 'critical'],

  // SHAPE_REF ↔ ACCESS — `param: Type`
  ['type', 'parameter', 'critical'],

  // TEXT ↔ DATA — `${name}`, `f"{x}"`
  ['string', 'variable', 'critical'],

  // WHISPER ↔ DATA — is it code or comment?
  ['comment', 'variable', 'critical'],

  // WHISPER ↔ GRAMMAR — is it live or not?
  ['comment', 'keyword', 'critical'],

  // ==========================================================================
  // HIGH (ΔEz ≥ 15) — common adjacencies
  // ==========================================================================

  // GRAMMAR ↔ SHAPE_REF — `type X`, `as Type`
  ['keyword', 'type', 'high'],

  // GRAMMAR ↔ VALUE — `return null`, `case 1`
  ['keyword', 'constant', 'high'],

  // ACTION ↔ SHAPE_REF — `foo(): Type` return type
  ['function', 'type', 'high'],

  // ACTION ↔ SHAPE_DEF — `class Foo { bar() }`
  ['function', 'class', 'high'],

  // ACCESS ↔ SHAPE_REF — `prop: Type`
  ['property', 'type', 'high'],

  // ACTION ↔ ACCESS — `<Button onClick={...}>` (tag vs attribute)
  ['tag', 'attribute', 'high'],

  // TEXT ↔ VALUE — `"123"` vs `123`
  ['string', 'number', 'high'],
  ['string', 'constant', 'high'],

  // CONNECTIVE ↔ DATA — `x + y`
  ['operator', 'variable', 'high'],

  // CONNECTIVE ↔ VALUE — `1 + 2`
  ['operator', 'number', 'high'],

  // CONNECTIVE ↔ GRAMMAR — `if x == y`
  ['operator', 'keyword', 'high'],

  // META ↔ SHAPE_DEF — `@Component class`
  ['decorator', 'class', 'high'],

  // META ↔ ACTION — `@deco def foo`
  ['decorator', 'function', 'high'],

  // WHISPER ↔ TEXT — comment vs string literal
  ['comment', 'string', 'high'],

  // WHISPER ↔ ACTION — comment vs function name
  ['comment', 'function', 'high'],

  // ==========================================================================
  // STANDARD (ΔEz ≥ 12) — less frequent but real adjacencies
  // ==========================================================================

  // SHAPE_DEF ↔ SHAPE_REF — `class Foo extends Type`
  ['class', 'type', 'standard'],

  // ACTION ↔ TEXT — `<tag>"text"` (markup)
  ['tag', 'string', 'standard'],

  // TEXT ↔ TEXT variant — regexp and string share lime (120°) by design (Ch6).
  // Distinguishable by context (regex delimiters), not color.
] as const;

// =============================================================================
// UI VISIBILITY THRESHOLDS
// =============================================================================

/**
 * Thresholds for UI element visibility that users directly notice.
 * ΔEz values are on the DELTA_EZ_SCALE (×500) scale.
 */
export const UI_VISIBILITY = {
  /** Minimum ΔEz for selection background vs editor background (can you SEE the selection?) */
  selectionVisibility: 8,
  /** Minimum ΔEz for find match background vs editor background */
  findMatchVisibility: 12,
  /** Minimum APCA Lc for cursor against editor background */
  cursorContrast: 60,
  /** Minimum ΔEz for tab bar vs editor — low for eye comfort (spatial cues suffice) */
  tabDistinction: 3,
  /** Minimum ΔE for diff added vs removed backgrounds */
  diffDistinction: 15,
} as const;

// =============================================================================
// COMPOUND BACKGROUND CONTRAST
// =============================================================================

/**
 * Background keys to test syntax colors against for compound contrast checking.
 *
 * A syntax color might be readable on editor.background but illegible when
 * the editor applies an overlay (selection, find match, diff, etc.).
 *
 * Organized by priority:
 * - TIER 1: Constant focus (current line, selection)
 * - TIER 2: Frequent overlays (autocomplete, hover, find)
 * - TIER 3: Navigation/review (diff, peek, search)
 */
export const COMPOUND_BACKGROUND_KEYS = {
  // TIER 1: Where you're constantly looking
  lineHighlight: 'editor.lineHighlightBackground',      // Current line (cursor here always)
  selection: 'editor.selectionBackground',              // Selected text (very common)
  selectionHighlight: 'editor.selectionHighlightBackground', // Other occurrences of selection

  // TIER 2: Frequent editing overlays
  suggest: 'editorSuggestWidget.background',            // Autocomplete dropdown
  suggestSelected: 'editorSuggestWidget.selectedBackground', // Selected autocomplete item
  hover: 'editorHoverWidget.background',                // Hover tooltips (type info, docs)
  findMatchActive: 'editor.findMatchBackground',        // Current search match
  findMatch: 'editor.findMatchHighlightBackground',     // Other search matches
  wordHighlight: 'editor.wordHighlightBackground',      // Symbol occurrences
  wordHighlightStrong: 'editor.wordHighlightStrongBackground', // Write occurrences

  // TIER 3: Navigation and code review
  stickyScroll: 'editorStickyScroll.background',        // Sticky headers
  rangeHighlight: 'editor.rangeHighlightBackground',    // Go to definition highlight
  bracketMatch: 'editorBracketMatch.background',        // Matching bracket highlight

  // TIER 4: Diff and merge (code review)
  diffInserted: 'diffEditor.insertedTextBackground',    // Added code in diff
  diffRemoved: 'diffEditor.removedTextBackground',      // Removed code in diff
  mergeCurrentContent: 'merge.currentContentBackground', // Current in merge conflict
  mergeIncomingContent: 'merge.incomingContentBackground', // Incoming in merge conflict

  // TIER 5: Other editor contexts
  peekViewEditor: 'peekViewEditor.background',          // Peek definition
  inlineChat: 'inlineChat.background',                  // AI chat context
  linkedEditing: 'editor.linkedEditingBackground',      // HTML tag pair editing
} as const;

export type CompoundBgKeyName = keyof typeof COMPOUND_BACKGROUND_KEYS;

/**
 * Compound backgrounds that use the secondary (review) APCA threshold instead of primary.
 * Diff and merge overlays are scanning contexts, not sustained reading — Lc ≥ 60 suffices.
 */
export const COMPOUND_REVIEW_BGS: ReadonlySet<string> = new Set([
  'diffInserted',
  'diffRemoved',
  'mergeCurrentContent',
  'mergeIncomingContent',
]);

/**
 * Syntax token keys to test for compound background contrast.
 * These are the record keys from extractColors().syntax, not display names.
 *
 * Tests all primary syntax colors that appear frequently in code.
 * Excludes comments (intentionally muted) and UI-only colors.
 */
export const COMPOUND_SYNTAX_TOKENS = [
  // Core tokens (high frequency)
  'variable',
  'variableLanguage',
  'parameter',
  'property',
  'keyword',
  'operator',
  'storage',
  'storageModifier',
  // Callables
  'function',
  'method',
  'supportFunction',
  // Types
  'class',
  'type',
  'interface',
  'namespace',
  'enum',
  'enumMember',
  'typeParameter',
  'struct',
  'supportClass',
  'supportType',
  // Literals
  'number',
  'string',
  'stringEscape',
  'constant',
  'regexp',
  'supportConstant',
  // Decorators and macros
  'decorator',
  'macro',
  // Markup
  'tag',
  'attribute',
  'link',
  'markupHeading',
  'markupBold',
  'markupCode',
  // CSS
  'cssSelector',
  'cssPropertyName',
  'colorValue',
] as const;
