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
  errInvalidColor: (c: string) => `Error: Invalid color "${c}". Use #RGB, #RRGGBB, or #RRGGBBAA`,
} as const;

// =============================================================================
// APCA CONSTANTS
// =============================================================================

/**
 * APCA contrast thresholds for different element tiers.
 *
 * Primary (Lc 80-95): High-frequency syntax you stare at all day
 * Secondary (Lc 75-95): UI elements, comments, and other readable text
 * Tertiary (Lc ≥ 45): Intentionally subdued elements
 * Max (Lc ≤ 95): Prevents halation (text bloom) on dark backgrounds
 */
export const APCA_THRESHOLDS = {
  primary: 80,    // Above body text - for primary syntax (marathon comfort)
  secondary: 75,  // Body text level - comments need reading too
  tertiary: 45,   // Large text level - for dim elements
  max: 95,        // Prevents halation - pure white on black causes eye strain
} as const;

/**
 * Primary syntax elements that require higher contrast (Lc ≥ 80).
 * These are high-frequency semantic tokens you read constantly while coding.
 *
 * Note: Punctuation and operators are intentionally EXCLUDED (secondary tier).
 * They are structural/visual aids, not semantic content - can be slightly muted
 * for comfortable reading while still meeting body text threshold (Lc ≥ 75).
 */
export const PRIMARY_SYNTAX_ELEMENTS = new Set([
  // Core tokens (appear in almost every line)
  'Variables', 'Var Language', 'Parameters', 'Properties',
  'Keywords', 'Storage', 'Storage Mod',
  // Definitions
  'Functions', 'Methods', 'Classes', 'Types', 'Interfaces',
  'Namespaces', 'Enums', 'Enum Members', 'Type Params',
  'Structs', 'Decorators', 'Macros',
  // Literals
  'Numbers', 'Strings', 'String Escape', 'Constants', 'Regexp',
  // Markup/Web
  'Tags', 'Attributes', 'Links',
  // Markup content (Markdown - readable text)
  'Markup Heading', 'Markup Bold', 'Markup Italic', 'Markup Code', 'Markup Quote',
  // Support (library/framework calls)
  'Support Func',
  // Error indicators (must be clearly visible)
  'Invalid', 'Deprecated',
  // Primary text
  'Primary', 'Global',
]);

/**
 * Distinction threshold - single tier for all color pairs.
 *
 * ΔE ≥ 15: All pairs must be clearly distinct with zero cognitive effort.
 * This ensures instant recognition for both syntax colors and safety-critical pairs.
 */
export const DISTINCTION_THRESHOLDS = {
  critical: 15,  // Same as standard - unified threshold
  standard: 15,  // Clear distinction - no effort to tell apart
} as const;

/**
 * Critical distinction pairs (legacy - now all pairs use same threshold).
 * Kept for reference of safety-critical colors.
 */
export const CRITICAL_DISTINCTION_PAIRS = new Set([
  'error↔warning',
  'error↔info',
  'added↔deleted',
  'added↔modified',
  'modified↔deleted',
  'ansiRed↔ansiGreen',
]);

/**
 * Chroma thresholds - tiered for different element types.
 *
 * Primary (C* 18-55): Core syntax - need color identity, comfortable reading
 * Secondary (C* 15-60): Comments, UI - can be more muted or slightly vibrant
 * Accent (C* 15-70): Errors, warnings, brackets - can stand out more
 *
 * Based on eye-friendly themes: Solarized ~C*20-45, Nord ~C*15-35.
 */
export const CHROMA_THRESHOLDS = {
  primary: { min: 18, max: 55 },    // Core syntax - allows Nord-style muted palettes
  secondary: { min: 15, max: 60 },  // Comments, UI - more permissive
  accent: { min: 15, max: 70 },     // Errors, highlights - can be vibrant
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
]);

/**
 * Secondary chroma elements - can be more muted (C* 15-60).
 *
 * Note: Punctuation and operators are here AND excluded from PRIMARY_SYNTAX_ELEMENTS.
 * This is intentional - they are structural aids that:
 * - Need good contrast (Lc ≥ 75, secondary tier) but not maximum (Lc ≥ 80)
 * - Can be muted in color (lower chroma) to reduce visual noise
 * This aligns with themes like Nord and Solarized where punctuation fades slightly.
 */
export const SECONDARY_CHROMA_ELEMENTS = new Set([
  'comment', 'docComment',
  'punctuation', 'operator',
]);


// APCA constants (APCA-W3 0.0.98G-4g)
// Reference: https://github.com/Myndex/SAPC-APCA
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
  'List Deemph',     // Explicitly deemphasized list items
  // Git
  'Ignored',         // Git ignored files
  // Terminal (black colors are invisible/dim by design on dark backgrounds)
  'Black',           // Terminal black
  'Bright Black',    // Terminal dim text (ANSI bright black is gray)
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
]);

// =============================================================================
// COLOR DISTINCTION PAIRS
// =============================================================================

/**
 * Adjacency pairs - elements commonly seen side-by-side in code
 * These pairs need the most distinction for comfortable reading
 *
 * Organized by code pattern category for maintainability.
 * Total: 120+ pairs covering all common programming patterns.
 */
export const ADJACENCY_PAIRS: Array<[string, string]> = [
  // ===== DECLARATIONS (every file has these) =====
  ['storage', 'variable'],       // let x, const y, var z
  ['storage', 'function'],       // function foo, def bar
  ['storage', 'keyword'],        // async function, public static
  ['storageModifier', 'storage'], // public static vs class
  ['storageModifier', 'keyword'], // async vs await
  ['storageModifier', 'function'], // async function foo, static foo()
  ['storageModifier', 'method'],   // static method() in classes
  ['storageModifier', 'property'], // readonly prop, static prop

  // ===== FUNCTION PATTERNS =====
  ['function', 'parameter'],     // foo(x) - function definition
  ['function', 'variable'],      // foo(x, y) - args
  ['function', 'type'],          // foo(): Type
  ['function', 'typeParameter'], // foo<T>()
  ['variable', 'function'],      // x = foo() - rvalue
  ['method', 'parameter'],       // obj.method(x)
  ['method', 'variable'],        // method(x)
  ['method', 'type'],            // method(): Type
  ['method', 'regexp'],          // .match(/x/)
  ['function', 'method'],        // function vs method distinction
  ['supportFunction', 'function'], // console.log vs myFunc
  ['supportFunction', 'method'],   // Array.map vs custom.map
  ['supportFunction', 'variable'], // Math.PI vs myConst

  // ===== PROPERTY ACCESS =====
  ['variable', 'property'],      // obj.prop
  ['variable', 'method'],        // obj.method()
  ['variableLanguage', 'property'], // this.prop, self.x
  ['variableLanguage', 'method'],   // this.method(), self.foo()
  ['variableLanguage', 'parameter'], // (self, x) in Python
  ['variableLanguage', 'variable'], // this vs x distinction

  // ===== CLASS PATTERNS =====
  ['keyword', 'class'],          // class Foo, new Foo
  ['class', 'interface'],        // class vs interface distinction
  ['class', 'variable'],         // new Foo(x)
  ['class', 'string'],           // new Error("msg")
  ['class', 'property'],         // class { prop }
  ['class', 'method'],           // class { method() }
  ['class', 'typeParameter'],    // Array<T>, Map<K,V>

  // ===== INTERFACE PATTERNS =====
  ['keyword', 'interface'],      // interface Foo, implements Bar
  ['interface', 'property'],     // interface { x: T }
  ['interface', 'method'],       // interface { fn(): T }
  ['interface', 'type'],         // interface vs type distinction

  // ===== TYPE PATTERNS =====
  ['variable', 'type'],          // x: Type, <Type>x (cast)
  ['parameter', 'type'],         // (x: Type)
  ['keyword', 'type'],           // type X = ..., x: Type
  ['type', 'class'],             // type vs class distinction
  ['typeParameter', 'type'],     // T extends Base
  ['typeParameter', 'variable'], // foo<T>(x)
  ['typeParameter', 'keyword'],  // <T extends Base> - T vs extends

  // ===== ENUM PATTERNS =====
  ['keyword', 'enum'],           // enum Color
  ['enum', 'enumMember'],        // Enum.Member
  ['enum', 'class'],             // enum vs class distinction
  ['enumMember', 'variable'],    // Some(x), Ok(val)
  ['enumMember', 'constant'],    // enum member vs constant

  // ===== STRUCT PATTERNS (Rust, Go) =====
  ['keyword', 'struct'],         // struct Foo
  ['struct', 'property'],        // struct { x: i32 }
  ['struct', 'class'],           // struct vs class distinction

  // ===== NAMESPACE PATTERNS =====
  ['keyword', 'namespace'],      // namespace X, mod foo
  ['namespace', 'function'],     // Ns.func()
  ['namespace', 'class'],        // Ns.Class
  ['namespace', 'type'],         // Ns::Type
  ['namespace', 'variable'],     // Ns.value

  // ===== DECORATOR PATTERNS =====
  ['decorator', 'function'],     // @deco def foo
  ['decorator', 'class'],        // @Component class
  ['decorator', 'method'],       // @override method
  ['decorator', 'property'],     // @Input() prop

  // ===== STRING PATTERNS (templates very common) =====
  ['string', 'variable'],        // `${name}`, f"{x}"
  ['string', 'stringEscape'],    // "hello\n"
  ['keyword', 'string'],         // import "x", return "x"

  // ===== KEYWORD PATTERNS =====
  ['keyword', 'variable'],       // if (x), for x in, x as Type
  ['keyword', 'function'],       // return foo()
  ['keyword', 'operator'],       // keyword vs operator distinction
  ['keyword', 'number'],         // return 5
  ['keyword', 'constant'],       // if (true), return null

  // ===== OBJECT LITERAL PATTERNS =====
  ['property', 'number'],        // { x: 1 }
  ['property', 'string'],        // { x: "y" }
  ['property', 'variable'],      // { x: val }
  ['property', 'function'],      // { onClick: fn }

  // ===== CONSTANT DISTINCTION =====
  ['number', 'constant'],        // 5 vs MY_CONST
  ['number', 'enumMember'],      // enum { X = 1 }
  ['variable', 'constant'],      // myVar vs MY_CONST
  ['constant', 'string'],        // true vs "true"
  ['parameter', 'constant'],     // fn(true), fn(null)

  // ===== MACRO PATTERNS (Rust) =====
  ['macro', 'string'],           // println!("x")
  ['macro', 'variable'],         // dbg!(x)
  ['macro', 'number'],           // vec![1, 2]
  ['macro', 'function'],         // macro! vs fn() distinction

  // ===== JSX/HTML PATTERNS =====
  ['tag', 'attribute'],          // <div class
  ['tag', 'string'],             // text children
  ['attribute', 'string'],       // class="x"
  ['attribute', 'variable'],     // prop={x}
  ['tag', 'variable'],           // <{Component} />

  // ===== REGEXP PATTERNS =====
  ['variable', 'regexp'],        // str vs /pattern/
  ['string', 'regexp'],          // "text" vs /pattern/

  // ===== OPERATOR PATTERNS =====
  ['operator', 'variable'],      // x + y
  ['operator', 'number'],        // x + 1
  ['operator', 'property'],      // ?.prop
  ['operator', 'type'],          // A | B
  ['parameter', 'operator'],     // (x) => ... arrow functions

  // ===== PUNCTUATION PATTERNS (high frequency) =====
  ['punctuation', 'variable'],   // {x, y}, [a, b], fn(x)
  ['punctuation', 'keyword'],    // if (, for (, return;
  ['punctuation', 'string'],     // "${x}", template delimiters
  ['punctuation', 'number'],     // [1, 2, 3]
  ['punctuation', 'property'],   // { key: val }
  ['punctuation', 'operator'],   // => vs = vs ; distinction (both secondary tier)

  // ===== COMMENT PATTERNS (visual adjacency) =====
  ['comment', 'variable'],       // x = 5 // comment
  ['comment', 'property'],       // doc comment
  ['comment', 'function'],       // /** */ function
  ['comment', 'keyword'],        // // after return
  ['comment', 'string'],         // visual distinction
  ['docComment', 'comment'],     // JSDoc vs regular comments
  ['docComment', 'function'],    // /** */ above function

  // ===== LINK PATTERNS =====
  ['link', 'string'],            // URL strings vs links
  ['link', 'variable'],          // URLs in comments vs code
  ['link', 'comment'],           // http://... in comments

  // ===== INVALID/DEPRECATED PATTERNS =====
  ['invalid', 'variable'],       // Error-highlighted code
  ['invalid', 'keyword'],        // Invalid syntax
  ['deprecated', 'function'],    // Strikethrough functions
  ['deprecated', 'variable'],    // Deprecated vars
  ['deprecated', 'method'],      // Deprecated methods

  // ===== MARKUP PATTERNS (Markdown/docs) =====
  ['markupHeading', 'markupBold'], // # Title vs **bold**
  ['markupHeading', 'comment'],    // Heading in docstrings
  ['markupCode', 'string'],        // `code` vs "string"
  ['markupQuote', 'comment'],      // > quote vs // comment
  ['markupBold', 'markupItalic'],  // **bold** vs *italic*
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
  ['method', 'property'],        // object members in autocomplete
  ['ctor', 'class'],             // constructor vs class distinction
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
  // File system (explorer, breadcrumbs)
  ['file', 'folder'],
  ['folder', 'module'],
  ['file', 'snippet'],
  // Arrays and objects
  ['array', 'object'],
  ['array', 'variable'],
  ['object', 'namespace'],
  // Keys and properties (JSON, dicts)
  ['key', 'property'],
  ['key', 'string'],
  // Completions
  ['snippet', 'text'],
  ['snippet', 'function'],
  ['text', 'string'],
  // Operators
  ['operator', 'keyword'],
  ['operator', 'function'],
  // Units and colors
  ['unit', 'number'],
  ['color', 'constant'],
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
  // List states
  ['listSelected', 'listHover'],
  ['listSelected', 'listFocus'],
  ['listHover', 'listFocus'],
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

// NOTE: DIFF_DISTINCTION_PAIRS removed - was 100% redundant with GIT_DISTINCTION_PAIRS
// All pairs (added↔deleted, added↔modified, modified↔deleted) already covered there.

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
