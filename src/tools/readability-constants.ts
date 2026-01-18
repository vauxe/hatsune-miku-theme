/**
 * Constants and configuration for the readability analysis tool.
 */

// =============================================================================
// OUTPUT FORMATTING
// =============================================================================

export const OUTPUT_WIDTH = 72;
export const COL_NAME_WIDTH = 24;
export const COL_COLOR_WIDTH = 15;

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
  banner: 'banner.background',
  keybindingLabel: 'keybindingLabel.background',
  checkbox: 'checkbox.background',
  extensionButton: 'extensionButton.prominentBackground',
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
} as const;

export type BgKeyName = keyof typeof BG_KEYS;

// =============================================================================
// UI LABELS
// =============================================================================

export const LABELS = {
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
  sectionDistinction: 'COLOR DISTINCTION (ΔE00)',
  sectionSymbolDiscrimination: 'SYMBOL DISCRIMINATION (ΔE00)',

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

// =============================================================================
// APCA CONSTANTS
// =============================================================================

// APCA constants (APCA-W3 specification)
export const APCA = {
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
// EXPECTED DIM ELEMENTS
// =============================================================================

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
export const EXPECTED_DIM_ELEMENTS = new Set([
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

// =============================================================================
// COLOR DISTINCTION PAIRS
// =============================================================================

/**
 * Adjacency pairs - elements commonly seen side-by-side in code
 * These pairs need the most distinction for comfortable reading
 */
export const ADJACENCY_PAIRS: Array<[string, string]> = [
  // Function calls: func(param)
  ['function', 'parameter'],
  ['method', 'parameter'],
  // Object access: obj.property
  ['variable', 'property'],
  // Type annotations: var: Type
  ['variable', 'type'],
  ['parameter', 'type'],
  // Keywords in context
  ['keyword', 'variable'],
  ['keyword', 'function'],
  // Class definitions: class Name { prop }
  ['class', 'property'],
  ['class', 'method'],
  // Enum usage: Enum.Member
  ['enum', 'enumMember'],
  // Numbers vs other values
  ['number', 'enumMember'],
  ['number', 'constant'],
  // Comments vs everything
  ['comment', 'property'],
  ['comment', 'variable'],
  // Namespace/module context
  ['namespace', 'function'],
  ['namespace', 'class'],
  // Operators (often transparent - tests alpha compositing)
  ['operator', 'variable'],
  ['operator', 'number'],
];

/**
 * Symbol discrimination pairs - symbols that appear in autocomplete, outline, breadcrumbs
 * These need to be distinguished by color alone (no font style in icons)
 * Keys must match symbolIcons record (ctor, not constructor)
 */
export const SYMBOL_DISCRIMINATION_PAIRS: Array<[string, string]> = [
  // Core structure types (must be obviously different)
  ['class', 'interface'],
  ['class', 'struct'],
  ['interface', 'struct'],
  ['enum', 'class'],
  ['enum', 'interface'],
  ['object', 'class'],
  // Functions vs other callable
  ['function', 'method'],
  ['function', 'ctor'],
  ['method', 'ctor'],
  // Variables vs properties vs fields
  ['variable', 'field'],
  ['property', 'field'],
  ['variable', 'property'],
  // Constants vs values
  ['constant', 'variable'],
  ['constant', 'enumMember'],
  ['constant', 'boolean'],
  ['boolean', 'null'],
  // Literals
  ['string', 'number'],
  ['string', 'constant'],
  ['number', 'boolean'],
  // Type system
  ['class', 'typeParameter'],
  ['interface', 'typeParameter'],
  ['struct', 'typeParameter'],
  // Module organization
  ['namespace', 'module'],
  ['namespace', 'package'],
  ['module', 'package'],
  ['folder', 'package'],
  // Keywords vs classes
  ['keyword', 'class'],
  ['keyword', 'interface'],
  ['keyword', 'namespace'],
  // Events and references
  ['event', 'method'],
  ['event', 'property'],
  ['reference', 'variable'],
];
