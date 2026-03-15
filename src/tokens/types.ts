/**
 * Design Token Type Definitions
 *
 * All interfaces for the semantic token system.
 * Extracted for clean separation of concerns.
 */

// =============================================================================
// CORE TYPES
// =============================================================================

export interface JzCzhz {
  Jz: number;  // Lightness: 0-0.22 for sRGB
  Cz: number;  // Chroma: 0-0.19 for sRGB
  hz: number;  // Hue: 0-360 degrees
}

export interface SemanticRole {
  description: string;
  jzczhz: JzCzhz;
  hex: string;
}

// =============================================================================
// SYNTAX TOKENS
// =============================================================================

export interface SyntaxTokens {
  keyword: SemanticRole;
  keywordControl: SemanticRole;
  keywordAlt: SemanticRole;
  storage: SemanticRole;
  storageModifier: SemanticRole;
  type: SemanticRole;
  typeParameter: SemanticRole;
  enum: SemanticRole;
  enumMember: SemanticRole;
  macro: SemanticRole;
  function: SemanticRole;
  method: SemanticRole;
  class: SemanticRole;
  interface: SemanticRole;
  struct: SemanticRole;
  variable: SemanticRole;
  parameter: SemanticRole;
  property: SemanticRole;
  string: SemanticRole;
  stringTemplate: SemanticRole;
  regex: SemanticRole;
  number: SemanticRole;
  boolean: SemanticRole;
  constant: SemanticRole;
  tag: SemanticRole;
  attribute: SemanticRole;
  comment: SemanticRole;
  commentDoc: SemanticRole;
  punctuation: SemanticRole;
  operator: SemanticRole;
  variableLanguage: SemanticRole;
}

// =============================================================================
// UI TOKENS
// =============================================================================

export interface UITokens {
  foreground: SemanticRole;
  foregroundMuted: SemanticRole;
  foregroundSubtle: SemanticRole;
  background: SemanticRole;
  backgroundFloat: SemanticRole;
  backgroundHouse: SemanticRole;
  backgroundVoid: SemanticRole;
  accentPrimary: SemanticRole;
  accentSecondary: SemanticRole;
  accentTertiary: SemanticRole;
  border: SemanticRole;
  borderSubtle: SemanticRole;
  selection: SemanticRole;
  cursor: SemanticRole;
  link: SemanticRole;
  linkActive: SemanticRole;
  nearWhite: SemanticRole;
  tertiary: SemanticRole;
  disabled: SemanticRole;
  disabledSubtle: SemanticRole;
  ghostText: SemanticRole;
  placeholder: SemanticRole;
  whitespace: SemanticRole;
  ruler: SemanticRole;
  terminalHint: SemanticRole;
  terminalGuide: SemanticRole;
  deprecated: SemanticRole;
  minimapOpacity: string; // Special: not a role, just a hex value
  errorForeground: SemanticRole;
  buttonBackground: SemanticRole;
  badgeBackground: SemanticRole;
  activeBorder: SemanticRole;
}

// =============================================================================
// STATUS & GIT TOKENS
// =============================================================================

export interface StatusTokens {
  success: SemanticRole;
  warning: SemanticRole;
  error: SemanticRole;
  info: SemanticRole;
}

export interface GitTokens {
  added: SemanticRole;
  modified: SemanticRole;
  deleted: SemanticRole;
  untracked: SemanticRole;
  conflicting: SemanticRole;
  renamed: SemanticRole;
  stageModified: SemanticRole;
  stageDeleted: SemanticRole;
  submodule: SemanticRole;
}

// =============================================================================
// TERMINAL TOKENS
// =============================================================================

export interface TerminalTokens {
  black: SemanticRole;
  red: SemanticRole;
  green: SemanticRole;
  yellow: SemanticRole;
  blue: SemanticRole;
  magenta: SemanticRole;
  cyan: SemanticRole;
  white: SemanticRole;
  brightBlack: SemanticRole;
  brightRed: SemanticRole;
  brightGreen: SemanticRole;
  brightYellow: SemanticRole;
  brightBlue: SemanticRole;
  brightMagenta: SemanticRole;
  brightCyan: SemanticRole;
  brightWhite: SemanticRole;
}

// =============================================================================
// SYMBOL TOKENS
// =============================================================================

export interface SymbolTokens {
  array: SemanticRole;
  boolean: SemanticRole;
  class: SemanticRole;
  constant: SemanticRole;
  constructor: SemanticRole;
  enum: SemanticRole;
  enumMember: SemanticRole;
  field: SemanticRole;
  folder: SemanticRole;
  function: SemanticRole;
  interface: SemanticRole;
  method: SemanticRole;
  module: SemanticRole;
  namespace: SemanticRole;
  number: SemanticRole;
  operator: SemanticRole;
  package: SemanticRole;
  property: SemanticRole;
  reference: SemanticRole;
  snippet: SemanticRole;
  string: SemanticRole;
  struct: SemanticRole;
  typeParameter: SemanticRole;
  variable: SemanticRole;
}

// =============================================================================
// BRACKET TOKENS
// =============================================================================

export interface BracketTokens {
  bracket1: SemanticRole;
  bracket2: SemanticRole;
  bracket3: SemanticRole;
  bracket4: SemanticRole;
  bracket5: SemanticRole;
  bracket6: SemanticRole;
}

// =============================================================================
// SUPPORT TOKENS (Built-in/Library colors)
// =============================================================================

export interface SupportTokens {
  function: SemanticRole;
  class: SemanticRole;
  type: SemanticRole;
  constant: SemanticRole;
  variable: SemanticRole;
}

// =============================================================================
// MARKDOWN TOKENS
// =============================================================================

export interface MarkdownTokens {
  heading: SemanticRole;
  codeBlock: SemanticRole;
  quote: SemanticRole;
  linkUrl: SemanticRole;
  headingPunctuation: SemanticRole;
  alertImportant: SemanticRole;
  alertNote: SemanticRole;
  alertTip: SemanticRole;
  alertWarning: SemanticRole;
  alertCaution: SemanticRole;
  inserted: SemanticRole;
  deleted: SemanticRole;
}

// =============================================================================
// DEBUG TOKENS
// =============================================================================

export interface DebugTokens {
  name: SemanticRole;
  value: SemanticRole;
  string: SemanticRole;
  number: SemanticRole;
  boolean: SemanticRole;
  error: SemanticRole;
  type: SemanticRole;
}

// =============================================================================
// INTERACTIVE STATE TOKENS
// =============================================================================

export interface StateTokens {
  default: string;
  hover: string;
  active: string;
  focus: string;
  disabled: string;
  selected: string;
}

export interface InteractiveToken {
  background: StateTokens;
  foreground: StateTokens;
  border: StateTokens;
}

export interface SliderStateTokens {
  rest: string;
  hover: string;
  active: string;
}

export interface InteractiveTokens {
  /** Fabric — lists, menus, trees, suggest, notebook cells */
  list: InteractiveToken;
  /** Metal — primary buttons, prominent actions */
  button: InteractiveToken;
  /** Metal (secondary) — secondary buttons, extension buttons */
  buttonSecondary: InteractiveToken;
  /** Glass — text inputs, search boxes, dropdowns */
  input: InteractiveToken;
  /** Architecture — editor tabs, panel tabs */
  tab: InteractiveToken;
  /** Fabric (minimal) — toolbar icons, activity bar items */
  toolbar: InteractiveToken;
  /** Toggle — checkboxes, radio buttons, input options */
  toggle: InteractiveToken;
  /** Air — scrollbars, minimap sliders, sashes */
  slider: { background: SliderStateTokens };
}

// =============================================================================
// DECORATIVE TOKENS (palette-derived thematic colors)
// =============================================================================

export interface DecorativeTokens {
  // --- Collections ---
  /** Indent guide colors - Miku's voicebank evolution (2007-present) */
  indentGuides: string[];
  /** SCM graph branch colors - Project SEKAI unit colors */
  scmGraph: string[];
  /** Chart colors - Magical Mirai concert evolution */
  charts: {
    red: string;
    blue: string;
    yellow: string;
    orange: string;
    green: string;
    purple: string;
  };

  // --- Diff & SCM ---
  /** Diff editor colors — cute character palette */
  diffInserted: string;
  diffRemoved: string;
  /** Diff editor move border */
  diffMoveBorder: string;
  diffMoveActiveBorder: string;
  /** Terminal symbol commit icon */
  commitIcon: string;
  /** Pull request icon foreground */
  pullRequestIcon: string;
  /** SCM history ref colors */
  scmRemoteRef: string;

  // --- Editor decoration ---
  /** Comment glyph foreground */
  commentGlyph: string;
  /** Secondary multi-cursor and word highlight */
  multiCursorSecondary: string;
  /** Snow Miku ice prism — frosty cursor line shimmer (snowMiku.y2025) */
  cursorLineFrost: string;
  /** Inlay hint parameter foreground (character skin.shadow) */
  inlayParameter: string;

  // --- Character surfaces ---
  /** Blouse off-white — bright text on colored buttons/badges (top.blouse) */
  blouseWhite: string;
  /** Dark foreground for light badges (character eyes.pupil) */
  darkForeground: string;
  /** Boots base — deep near-black for terminal (character.boots.base) */
  bootsBase: string;
  /** Arm warmers base — sidebar surface (character.armWarmers.base) */
  armWarmersBase: string;
  /** Top main — activity bar surface (character.top.main) */
  topMain: string;
  /** Top shadow — status bar surface (character.top.shadow) */
  topShadow: string;
  /** Eye iris — her gaze, debug status (character.eyes.iris) */
  eyeIris: string;
  /** Cape — her outerwear, remote status (cyan-blue) */
  cape: string;

  // --- Accent & warmth ---
  /** Her "01" tattoo mark — identity red (character marks.tattoo) */
  tattooMark: string;
  /** Tie shadow — darker teal for pressed/active states (tie.shadow) */
  tieShadow: string;
  /** Skin blush — warmth for emphasis highlights (skin.blush) */
  skinBlush: string;
  /** Skin base peach — warmth for notifications (skin.base) */
  skinBase: string;
  /** SEKAI Virtual Singer hair — her game incarnation's teal (virtualSinger.hair.base) */
  sekaiHair: string;
  /** Wallet chain silver — navigation accessory (skirt.accessory) */
  walletChain: string;
  /** Negi stalk green — tree structure lines (negi.stalk) */
  negiStalk: string;
  /** Dark foreground for status bar error/warning items (character headphones.frame) */
  statusItemForeground: string;
  /** Markup inserted color (character negi.bright) */
  markupInserted: string;
}

// =============================================================================
// COMPOSITE SEMANTIC TOKENS
// =============================================================================

export interface SemanticTokens {
  syntax: SyntaxTokens;
  ui: UITokens;
  status: StatusTokens;
  git: GitTokens;
  interactive: InteractiveTokens;
  terminal: TerminalTokens;
  symbol: SymbolTokens;
  bracket: BracketTokens;
  support: SupportTokens;
  markdown: MarkdownTokens;
  debug: DebugTokens;
  decorative: DecorativeTokens;
}
