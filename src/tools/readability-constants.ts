/**
 * Constants and configuration for the readability analysis tool.
 */

import type { SemanticGroup, SemanticGroupName, DistinctionPriority } from './readability-types';

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
 * Primary (Lc 75-90): High-frequency syntax - body text level, avoiding harsh extremes
 * Secondary (Lc 70-90): UI elements, comments - can be slightly softer
 * Tertiary (Lc ≥ 45): Intentionally subdued elements
 * Max (Lc ≤ 90): Prevents halation (text bloom) - Lc 90+ can feel harsh all-day
 */
export const APCA_THRESHOLDS = {
  primary: 75,    // Body text level - comfortable for marathon coding
  secondary: 70,  // Slightly softer for UI/comments
  tertiary: 45,   // Large text level - for dim elements
  max: 90,        // Prevents halation - cap below Fluent for comfort
} as const;

/**
 * Primary syntax elements that require higher contrast (Lc ≥ 75).
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
  // CSS (structural elements)
  'CSS Selector', 'CSS Property', 'Color Value',
  // Markup content (Markdown - readable text)
  'Markup Heading', 'Markup Bold', 'Markup Italic', 'Markup Code', 'Markup Quote',
  'Markup List', 'Section',
  // Support (library/framework - commonly read)
  'Support Func', 'Support Class', 'Support Type', 'Support Const', 'Support Var',
  // Semantic tokens
  'Labels', 'Events', 'Inherited',
  // Error indicators (must be clearly visible)
  'Invalid', 'Deprecated',
  // Primary text
  'Primary', 'Global',
]);

/**
 * Distinction threshold - minimum ΔE for color pairs to be distinguishable.
 *
 * Standard pairs require ΔE ≥ 15 (Clear level).
 * Critical pairs require ΔE ≥ 18 for safety-critical distinctions.
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
 * Chroma thresholds - tiered for different element types.
 *
 * Primary (C* 30-55): Core syntax
 * Secondary (C* 20-55): Comments, UI
 * Accent (C* 30-70): Errors, warnings, brackets
 *
 */
export const CHROMA_THRESHOLDS = {
  primary: { min: 30, max: 55 },    // Colorful
  secondary: { min: 20, max: 55 },  // Comments, UI
  accent: { min: 30, max: 70 },     // Errors, highlights
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
 * Secondary chroma elements - can be more muted (C* 15-60).
 *
 * Note: Punctuation and operators are here AND excluded from PRIMARY_SYNTAX_ELEMENTS.
 * This is intentional - they are structural aids that:
 * - Need good contrast (Lc ≥ 70, secondary tier) but not maximum (Lc ≥ 75)
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
 * Adjacency pairs - semantic token pairs that benefit from visual distinction.
 *
 * Criteria for inclusion:
 * - Semantic confusion possible (not shape-distinguishable like punctuation)
 * - Line structure visibility (storage → entity name blocks)
 * - User vs library distinction (function vs supportFunction)
 * - Beauty/rhythm at high-frequency boundaries
 *
 * Excluded: punctuation, operators, context-obvious pairs (the `.` or `()` tells you)
 */
export const ADJACENCY_PAIRS: Array<[string, string]> = [
  // =============================================================================
  // TIER 1: CRITICAL - These appear every few lines in any codebase
  // =============================================================================

  // ===== KEYWORDS (control flow, declarations) =====
  ['keyword', 'variable'],            // if (x), for x in, return val
  ['keyword', 'parameter'],           // return x, throw err (params often used as values)
  ['keyword', 'function'],            // return foo(), async function
  ['keyword', 'class'],               // class Foo, new Foo
  ['keyword', 'type'],                // type X, as Type
  ['keyword', 'string'],              // import "x", return "x"
  ['keyword', 'number'],              // return 5, case 1
  ['keyword', 'constant'],            // if (true), return null
  ['keyword', 'supportClass'],        // new Map, extends Array - keyword + built-in type
  ['keyword', 'tag'],                 // JSX <tag>return
  ['keyword', 'storage'],             // function, class declarations (93)
  ['keyword', 'storageModifier'],     // export const, async function (82)
  ['keyword', 'supportFunction'],     // return console.log() (76)
  ['keyword', 'supportConstant'],     // return Math.PI (75)
  ['keyword', 'supportType'],         // extends string, as string (27)
  ['keyword', 'supportVariable'],     // return process (19)
  ['keyword', 'variableLanguage'],    // return this, delete this (26)
  ['keyword', 'namespace'],           // namespace declarations (11)
  ['keyword', 'macro'],               // macro invocations (11)
  ['keyword', 'section'],             // section headers (13)
  ['keyword', 'regexp'],              // regex patterns (3)
  ['keyword', 'struct'],              // struct declarations (1)
  ['keyword', 'property'],            // keyword before property access (8)
  ['keyword', 'typeParameter'],       // keyword T (1)
  ['keyword', 'markupBold'],          // keyword **bold** (4)

  // ===== STORAGE (let, const, function, class) =====
  ['storage', 'variable'],            // let x, const y, var z
  ['storage', 'function'],            // function foo, def bar
  ['storage', 'class'],               // class Foo {}
  ['storage', 'type'],                // type X = ...
  ['storage', 'struct'],              // struct Foo
  ['storage', 'enum'],                // enum Color
  ['storage', 'string'],              // import "path"
  ['storage', 'supportFunction'],     // function console.log (82)
  ['storage', 'supportClass'],        // class extends Array (8)
  ['storage', 'supportType'],         // type string (7)
  ['storage', 'supportVariable'],     // let process (18)
  ['storage', 'supportConstant'],     // const PI (1)
  ['storage', 'tag'],                 // JSX storage + tag (1)
  ['storageModifier', 'variable'],    // const x, static x
  ['storageModifier', 'function'],    // async function foo
  ['storageModifier', 'class'],       // public class, abstract class
  ['storageModifier', 'type'],        // export type, readonly
  ['storageModifier', 'storage'],     // public static, export const
  ['storageModifier', 'typeParameter'],// abstract T, readonly T (29)
  ['storageModifier', 'supportClass'], // export Array (26)
  ['storageModifier', 'supportType'], // export string (17)
  ['storageModifier', 'supportFunction'],// exported functions (1)
  ['storageModifier', 'supportConstant'],// exported constants (1)
  ['storageModifier', 'string'],      // export "module" (12)

  // ===== FUNCTIONS & METHODS =====
  ['function', 'parameter'],          // foo(x) definition
  ['function', 'variable'],           // foo(x, y) args
  ['function', 'type'],               // foo(): Type
  ['function', 'string'],             // foo("arg")
  ['function', 'number'],             // foo(123)
  ['function', 'constant'],           // foo(true), foo(null)
  ['function', 'supportClass'],       // foo(Array) (71)
  ['function', 'supportType'],        // foo(): string (24)
  ['function', 'supportConstant'],    // foo(PI) (4)
  ['function', 'storageModifier'],    // async foo (40)
  ['function', 'variableLanguage'],   // foo(this) (23)
  ['function', 'property'],           // function accessing property (13)
  ['function', 'typeParameter'],      // foo<T> (3)
  ['function', 'stringEscape'],       // foo("\n") (3)
  ['function', 'namespace'],          // Ns.foo() (2)
  ['method', 'variable'],             // obj.method(x)
  ['method', 'parameter'],            // method(param) definition
  ['method', 'type'],                 // method(): Type
  ['method', 'string'],               // method("arg")
  ['method', 'number'],               // method(123)
  ['supportFunction', 'variable'],    // console.log(x) - user vs library
  ['supportFunction', 'string'],      // require('x'), console.log("msg")
  ['supportFunction', 'supportClass'],// console.log(Array) (15)
  ['supportFunction', 'supportType'], // parseInt(): number (14)
  ['supportFunction', 'supportVariable'],// console.log(process) (10)
  ['supportFunction', 'variableLanguage'],// console.log(this) (8)
  ['supportFunction', 'supportConstant'],// Math.floor(PI) (13)

  // ===== VARIABLES & PARAMETERS =====
  ['parameter', 'variable'],          // fn(param) { let x = param } - CRITICAL
  ['parameter', 'storage'],           // def foo(x): storage before param (105)
  ['parameter', 'supportConstant'],   // foo(PI) (106)
  ['parameter', 'supportFunction'],   // foo(console.log) (57)
  ['parameter', 'supportType'],       // param: string (54)
  ['parameter', 'supportClass'],      // param: Array (28)
  ['parameter', 'string'],            // foo("x", param) (53)
  ['parameter', 'type'],              // x: Type (31)
  ['parameter', 'storageModifier'],   // readonly param (41)
  ['parameter', 'typeParameter'],     // param<T> (5)
  ['parameter', 'number'],            // foo(42, x) (17)
  ['variable', 'type'],               // x: Type
  ['variable', 'constant'],           // myVar vs MY_CONST
  ['variable', 'variableLanguage'],   // this vs myVar (28)
  ['variable', 'supportConstant'],    // PI vs myConst (20)
  ['variable', 'supportClass'],       // Array vs myClass (19)
  ['variable', 'supportType'],        // string vs myType (16)
  ['variable', 'colorValue'],         // CSS color values (28)
  ['number', 'variable'],             // 123, x (152)

  // ===== STRINGS & ESCAPES =====
  ['string', 'variable'],             // `${name}`, f"{x}"
  ['string', 'stringEscape'],         // "hello\n"
  ['string', 'number'],               // "123" vs 123
  ['string', 'constant'],             // "text" vs TRUE (142)
  ['string', 'tag'],                  // JSX string next to tag (63)
  ['string', 'type'],                 // "text": Type (26)
  ['string', 'supportType'],          // "text" vs string type (19)
  ['string', 'supportConstant'],      // "text" vs PI (16)
  ['string', 'supportClass'],         // "text" vs Array (12)
  ['string', 'supportVariable'],      // "text" vs process (7)
  ['string', 'variableLanguage'],     // "text" vs this (7)

  // ===== CONSTANTS & NUMBERS =====
  ['constant', 'storage'],            // TRUE in storage context (67)
  ['constant', 'number'],             // TRUE vs 42 (28)
  ['constant', 'storageModifier'],    // export TRUE (18)
  ['constant', 'supportFunction'],    // console.log(TRUE) (26)
  ['constant', 'supportClass'],       // Array vs TRUE (14)
  ['constant', 'supportType'],        // string vs TRUE (7)
  ['constant', 'stringEscape'],       // TRUE vs "\n" (15)
  ['constant', 'type'],               // TRUE: Type (14)
  ['constant', 'function'],           // foo(TRUE) (42)
  ['constant', 'tag'],                // JSX constant (13)
  ['constant', 'cssPropertyName'],    // CSS constant (14)
  ['constant', 'parameter'],          // TRUE as param (3)
  ['constant', 'variableLanguage'],   // TRUE vs this (3)
  ['number', 'storage'],              // 42 in storage context (61)
  ['number', 'supportFunction'],      // console.log(42) (56)
  ['number', 'supportConstant'],      // PI vs 42 (17)
  ['number', 'supportType'],          // 42 vs string (15)
  ['number', 'supportClass'],         // 42 vs Array (3)
  ['number', 'supportVariable'],      // 42 vs process (6)
  ['number', 'storageModifier'],      // export 42 (9)
  ['number', 'parameter'],            // foo(42, x) (17)
  ['number', 'type'],                 // 42: Type (1)
  ['number', 'tag'],                  // JSX number (1)
  ['number', 'variableLanguage'],     // 42 vs this (3)
  ['number', 'stringEscape'],         // 42 vs "\n" (1)
  ['stringEscape', 'variable'],       // "\n" vs var (14)

  // ===== COMMENTS (must be visually distinct from code) =====
  ['comment', 'variable'],            // x = 5 // comment
  ['comment', 'keyword'],             // comment near control-flow / declarations
  ['comment', 'number'],              // 42 // comment (6)
  ['comment', 'constant'],            // TRUE // comment (2)
  ['comment', 'string'],              // "x" // comment (2)
  ['comment', 'storage'],             // function // comment (1)
  ['comment', 'function'],            // foo() // comment (1)
  ['comment', 'supportFunction'],     // console.log() // comment (1)
  ['comment', 'supportType'],         // string // comment (2)
  ['comment', 'regexp'],              // /pattern/ // comment (1)
  ['comment', 'decorator'],           // @decorator // comment (1)
  ['comment', 'colorValue'],          // #fff // comment (13)

  // =============================================================================
  // TIER 2: IMPORTANT - Common in typed languages, web dev, specific contexts
  // =============================================================================

  // ===== TYPE SYSTEM (TypeScript, Java, C#, etc.) =====
  ['type', 'variable'],               // : Type annotation
  ['type', 'function'],               // fn(): Type - return type
  ['type', 'class'],                  // class Foo extends Type
  ['type', 'string'],                 // "x": Type (26)
  ['type', 'variableLanguage'],       // this: Type (7)
  ['typeParameter', 'type'],          // T extends Base
  ['supportType', 'variable'],        // string vs myVar (16)
  ['supportType', 'supportClass'],    // string vs Array (4)
  ['supportType', 'struct'],          // string vs struct (1)
  ['supportType', 'colorValue'],      // type vs color (12)
  ['supportType', 'supportConstant'], // string vs PI (3)
  ['interface', 'type'],              // interface X extends Type
  ['interface', 'class'],             // class Foo implements IBar
  ['interface', 'variable'],          // const x: IFoo
  ['interface', 'storage'],           // interface storage (9)

  // ===== JSX/HTML =====
  ['tag', 'attribute'],               // <div class
  ['tag', 'string'],                  // <tag>"text" (63)
  ['tag', 'supportConstant'],         // <Tag PI> (59)
  ['tag', 'variable'],                // <Tag var> (8)
  ['tag', 'property'],                // <tag prop> (10)
  ['tag', 'constant'],                // <Tag TRUE> (13)
  ['tag', 'number'],                  // <Tag 42> (1)
  ['attribute', 'string'],            // class="x"
  ['attribute', 'variable'],          // prop={x}
  ['attribute', 'parameter'],         // attribute with param (13)
  ['attribute', 'number'],            // attr=42 (9)
  ['attribute', 'keyword'],           // attr + keyword (4)
  ['attribute', 'constant'],          // attr=TRUE (2)
  ['attribute', 'supportConstant'],   // attr=PI (2)
  ['attribute', 'cssPropertyName'],   // style attribute (10)
  ['attribute', 'storage'],           // attribute storage (1)

  // ===== CSS =====
  ['cssSelector', 'cssPropertyName'], // .class { color: }
  ['cssPropertyName', 'number'],      // width: 100
  ['cssPropertyName', 'variable'],    // color: $var (SCSS)
  ['cssPropertyName', 'string'],      // content: "..." (CSS)
  ['cssPropertyName', 'supportFunction'],// transform: calc() (46)
  ['cssPropertyName', 'supportConstant'],// width: 100px (28)
  ['cssPropertyName', 'keyword'],     // position: absolute (2)
  ['cssPropertyName', 'constant'],    // display: TRUE (14)
  ['colorValue', 'variable'],         // #fff vs $var (28)
  ['colorValue', 'cssPropertyName'],  // color: #fff (9)
  ['colorValue', 'supportType'],      // #fff vs string (12)
  ['colorValue', 'string'],           // #fff vs "text" (2)
  ['colorValue', 'number'],           // #fff vs 100 (1)

  // ===== ENUMS =====
  ['enum', 'enumMember'],             // Enum.Member
  ['enum', 'supportType'],            // enum vs string (2)
  ['enum', 'storageModifier'],        // export enum (1)
  ['enum', 'keyword'],                // enum keyword (1)
  ['enumMember', 'constant'],         // enum member vs constant
  ['enumMember', 'storage'],          // enum member storage (11)
  ['enumMember', 'number'],           // EnumMember = 42 (9)
  ['enumMember', 'string'],           // EnumMember = "x" (8)
  ['enumMember', 'parameter'],        // enum member as param (6)

  // ===== DIFFS (critical for code review) =====
  ['markupInserted', 'markupDeleted'],// +added vs -removed (CRITICAL)

  // ===== PROPERTIES & OBJECT LITERALS =====
  ['property', 'variable'],           // { x: val }
  ['property', 'type'],               // prop: Type
  ['property', 'string'],             // { key: "value" }
  ['property', 'number'],             // { count: 42 }
  ['property', 'constant'],           // { flag: TRUE }
  ['property', 'function'],           // { onClick: handler }
  ['property', 'method'],             // obj.prop vs obj.method()
  ['property', 'variableLanguage'],   // this.x vs obj.x (38)
  ['property', 'tag'],                // property in JSX (10)
  ['property', 'storage'],            // property storage (3)
  ['property', 'supportFunction'],    // property vs console.log (2)
  ['property', 'supportVariable'],    // property vs process (1)
  ['property', 'supportConstant'],    // property vs PI (1)

  // ===== DOC COMMENTS (JSDoc, etc.) =====
  ['docComment', 'comment'],          // JSDoc vs regular comments

  // =============================================================================
  // TIER 3: LANGUAGE-SPECIFIC - Important for specific ecosystems
  // =============================================================================

  // ===== DECORATORS (Python, TypeScript, Java annotations) =====
  ['decorator', 'function'],          // @deco def foo
  ['decorator', 'class'],             // @Component class

  // ===== MACROS (Rust, C/C++) =====
  ['macro', 'function'],              // macro! vs fn()
  ['macro', 'string'],                // macro!("text") (10)
  ['macro', 'number'],                // macro!(42) (6)
  ['macro', 'variable'],              // macro!(var) (4)
  ['macro', 'parameter'],             // macro!(param) (3)
  ['macro', 'type'],                  // macro type (1)
  ['macro', 'constant'],              // macro constant (1)

  // ===== NAMESPACES (C++, C#, TypeScript) =====
  ['namespace', 'class'],             // Ns.Class
  ['namespace', 'type'],              // Ns::Type
  ['namespace', 'storage'],           // namespace storage (3)

  // ===== STRUCTS (Rust, Go, C) =====
  ['struct', 'type'],                 // struct as type
  ['struct', 'variable'],             // struct variable (1)

  // ===== REGEXP =====
  ['regexp', 'string'],               // "text" vs /pattern/
  ['regexp', 'stringEscape'],         // /\n/ escape in regex (19)
  ['regexp', 'variable'],             // /pattern/ vs var (3)
  ['regexp', 'supportFunction'],      // regex supportFunction (3)
  ['regexp', 'storage'],              // regex storage (2)

  // ===== INHERITANCE (class extends) =====
  ['inheritedClass', 'storageModifier'],// public Base (11)
  ['inheritedClass', 'type'],         // extends Type (3)
  ['inheritedClass', 'supportClass'], // extends Array (2)
  ['inheritedClass', 'keyword'],      // extends keyword (1)
  ['class', 'inheritedClass'],        // class Foo extends Bar (1)

  // ===== MARKUP/MARKDOWN =====
  ['markupBold', 'markupCode'],       // **bold** `code` (8)
  ['markupBold', 'supportFunction'],  // bold with function (7)
  ['markupBold', 'markupItalic'],     // **bold** *italic* (1)
  ['markupCode', 'markupItalic'],     // `code` *italic* (1)
  ['markupCode', 'supportFunction'],  // code with function (2)
  ['markupItalic', 'supportFunction'],// italic with function (4)
  ['link', 'markupCode'],             // [link]() `code` (1)
  ['link', 'string'],                 // [link]("text") (3)

  // ===== SECTIONS (Markdown headers, INI sections) =====
  ['section', 'supportFunction'],     // section with function (17)
  ['section', 'keyword'],             // section with keyword (13)

  // ===== CLASS/FUNCTION COMBINATIONS =====
  ['class', 'function'],              // class Foo { bar() } (6)
  ['class', 'keyword'],               // class keyword (15)
  ['class', 'string'],                // class "name" (1)
  ['class', 'supportFunction'],       // class vs console.log (2)
  ['class', 'supportType'],           // class vs string (1)
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
// SEMANTIC COLOR GROUPS
// =============================================================================

/**
 * The 10 semantic color groups for VS Code theme analysis.
 *
 * These groups represent semantically related tokens that typically share
 * visual styling in well-designed themes. The analysis checks:
 * - Intra-group cohesion: Tokens in the same group should be similar (ΔE ≤ 10)
 * - Cross-group distinction: Tokens in different groups should differ (ΔE ≥ 12-18)
 *
 * Note: These are conservative groupings. Themes may legitimately differentiate
 * tokens within the same group (e.g., `function` vs `macro`) for stylistic reasons.
 */
export const SEMANTIC_COLOR_GROUPS: Record<SemanticGroupName, SemanticGroup> = {
  KEYWORD: {
    name: 'Keywords',
    description: 'Control flow, declarations, and storage keywords',
    members: ['keyword', 'storage', 'storageModifier'],
  },
  OPERATOR: {
    name: 'Operators',
    description: 'Operators providing visual rhythm in code',
    members: ['operator'],
  },
  CALLABLE: {
    name: 'Callables',
    description: 'Functions, methods, and macros',
    members: ['function', 'method', 'supportFunction', 'macro'],
  },
  DECORATOR: {
    name: 'Decorators',
    description: 'Decorators and annotations (@syntax)',
    members: ['decorator'],
  },
  TYPE: {
    name: 'Types',
    description: 'All type-related constructs: types, interfaces, classes, structs, enums, namespaces',
    members: ['type', 'interface', 'typeParameter', 'supportType', 'class', 'struct', 'supportClass', 'enum', 'namespace'],
  },
  VARIABLE: {
    name: 'Variables',
    description: 'Variable identifiers, language variables, labels, and events',
    members: ['variable', 'supportVariable', 'variableLanguage', 'label', 'event'],
  },
  PARAMETER: {
    name: 'Parameters',
    description: 'Function parameters, properties, and attributes',
    members: ['parameter', 'property', 'attribute'],
  },
  STRING: {
    name: 'Strings',
    description: 'String literals and escape sequences',
    members: ['string', 'stringEscape'],
  },
  REGEXP: {
    name: 'Regular Expressions',
    description: 'Regular expression patterns with complex internal syntax',
    members: ['regexp'],
  },
  NUMERIC: {
    name: 'Numerics',
    description: 'Numbers, constants, and enum members',
    members: ['number', 'constant', 'supportConstant', 'enumMember'],
  },
  MARKUP: {
    name: 'Markup',
    description: 'HTML/XML tags and markup formatting',
    members: ['tag', 'link', 'markupHeading', 'markupBold', 'markupItalic', 'markupCode', 'markupQuote', 'markupList'],
  },
  COMMENT: {
    name: 'Comments',
    description: 'Comments and documentation',
    members: ['comment', 'docComment'],
  },
} as const;

/**
 * Reverse lookup: token name -> group name.
 * Built from SEMANTIC_COLOR_GROUPS for O(1) lookups.
 */
const TOKEN_TO_GROUP_MAP: Map<string, SemanticGroupName> = new Map();
for (const [groupName, group] of Object.entries(SEMANTIC_COLOR_GROUPS)) {
  for (const member of group.members) {
    TOKEN_TO_GROUP_MAP.set(member, groupName as SemanticGroupName);
  }
}

/**
 * Get the semantic group for a token.
 * Returns undefined if token is not in any group (e.g., punctuation, operator).
 */
export function getTokenGroup(token: string): SemanticGroupName | undefined {
  return TOKEN_TO_GROUP_MAP.get(token);
}

// =============================================================================
// CROSS-GROUP DISTINCTION PAIRS (tokens that MUST be different)
// =============================================================================

/**
 * Delta E thresholds for cross-group distinction by priority.
 */
export const SEMANTIC_DISTINCTION_THRESHOLDS = {
  critical: 18,  // Appear every few lines, confusion is costly
  high: 15,      // Common adjacencies, should be clearly different
  standard: 12,  // Less frequent but still need distinction
} as const;

/**
 * Cross-group token pairs that MUST be visually distinguishable.
 * These are ordered by priority (critical first).
 *
 * Structure: [token1, token2, priority]
 */
export const MUST_DISTINGUISH_PAIRS: ReadonlyArray<readonly [string, string, DistinctionPriority]> = [
  // ==========================================================================
  // CRITICAL (ΔE ≥ 18) - Appear every few lines in any codebase
  // ==========================================================================

  // KEYWORD <-> VARIABLE (if x, return val, for item in list)
  ['keyword', 'variable', 'critical'],
  ['keyword', 'parameter', 'critical'],
  ['storage', 'variable', 'critical'],
  ['storage', 'function', 'critical'],
  ['storageModifier', 'variable', 'critical'],

  // CALLABLE <-> PARAMETER (foo(x), method(param))
  ['function', 'parameter', 'critical'],
  ['function', 'variable', 'critical'],
  ['method', 'parameter', 'critical'],

  // VARIABLE <-> PARAMETER (critical in function signatures)
  ['parameter', 'variable', 'critical'],

  // TYPE <-> VARIABLE (x: Type annotation)
  ['type', 'variable', 'critical'],
  ['type', 'parameter', 'critical'],

  // STRING <-> VARIABLE (template literals ${x}, f-strings)
  ['string', 'variable', 'critical'],

  // COMMENT <-> CODE (must be obviously different)
  ['comment', 'variable', 'critical'],
  ['comment', 'keyword', 'critical'],

  // ==========================================================================
  // HIGH (ΔE ≥ 15) - Common adjacencies
  // ==========================================================================

  // KEYWORD <-> CALLABLE/TYPE
  ['keyword', 'function', 'high'],
  ['keyword', 'class', 'high'],
  ['keyword', 'type', 'high'],

  // CALLABLE <-> TYPE (return types: func(): Type)
  ['function', 'type', 'high'],
  ['method', 'type', 'high'],
  ['function', 'class', 'high'],
  ['method', 'class', 'high'],

  // STRING <-> NUMERIC
  ['string', 'number', 'high'],
  ['string', 'constant', 'high'],

  // PARAMETER <-> TYPE
  ['property', 'type', 'high'],
  // Note: type↔parameter is already in critical section above
  ['attribute', 'string', 'high'],

  // MARKUP <-> STRING (JSX: <Tag>"text")
  ['tag', 'string', 'high'],
  ['tag', 'variable', 'high'],

  // COMMENT <-> other code (must be obviously different)
  ['comment', 'string', 'high'],
  ['comment', 'function', 'high'],
  ['comment', 'type', 'high'],

  // OPERATOR <-> adjacent tokens (visual rhythm)
  ['operator', 'variable', 'high'],
  ['operator', 'number', 'high'],
  ['operator', 'keyword', 'high'],

  // DECORATOR <-> adjacent tokens (@decorator class/function)
  ['decorator', 'class', 'high'],
  ['decorator', 'function', 'high'],

  // REGEXP <-> STRING (both quoted, need distinction)
  ['regexp', 'string', 'high'],

  // ==========================================================================
  // STANDARD (ΔE ≥ 12) - Less frequent but need distinction
  // ==========================================================================

  // MARKUP <-> PARAMETER (tag vs attribute)
  ['tag', 'attribute', 'standard'],

  // Note: Intra-group pairs (number↔constant, function↔supportFunction, etc.)
  // are handled by cohesion analysis, not cross-group distinction.
] as const;

// =============================================================================
// INTRA-GROUP COHESION
// =============================================================================

/**
 * Maximum Delta E for tokens within the same semantic group.
 * Tokens in the same group should have similar colors for cognitive consistency.
 */
export const INTRA_GROUP_MAX_DELTA_E = 10;
