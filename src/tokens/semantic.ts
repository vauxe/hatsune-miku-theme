/**
 * Semantic Design Tokens
 *
 * Layer 2: Meaningful color roles that map to primitives.
 * This layer defines WHAT a color is used for, not WHAT color it is.
 *
 * Benefits:
 * - Swap primitives → get different color schemes (Sakura Miku)
 * - Adjust lightness → get light/dark variants
 * - Single source of truth for all semantic meanings
 */

import { hex, type JzCzhz } from '../palette/jzczhz';
import {
  primitives,
  lightness as L,
  chroma as C,
  hue as H,
  character,
  special,
  opacity,
  type OpacityScale,
} from './primitives';

// =============================================================================
// TYPES
// =============================================================================

export interface SemanticRole {
  description: string;
  jzczhz: JzCzhz;
  hex: string;
}

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
  operator: SemanticRole;
}

export interface UITokens {
  foreground: SemanticRole;
  foregroundMuted: SemanticRole;
  foregroundSubtle: SemanticRole;
  background: SemanticRole;
  backgroundElevated: SemanticRole;
  backgroundSurface: SemanticRole;
  backgroundOverlay: SemanticRole;
  accentPrimary: SemanticRole;
  accentSecondary: SemanticRole;
  accentTertiary: SemanticRole;
  border: SemanticRole;
  borderSubtle: SemanticRole;
  selection: SemanticRole;
  cursor: SemanticRole;
  link: SemanticRole;
  linkActive: SemanticRole;
}

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
}

// =============================================================================
// STATE TOKENS
// =============================================================================

/**
 * Interactive state variants for UI elements
 * Each state modifies the base color systematically
 */
export interface StateTokens {
  default: string;     // Base color
  hover: string;       // Lightened or overlay
  active: string;      // More prominent
  focus: string;       // Focus ring color (often accent)
  disabled: string;    // Desaturated, lower contrast
  selected: string;    // Selection state
}

/**
 * Interactive element with full state support
 */
export interface InteractiveToken {
  background: StateTokens;
  foreground: StateTokens;
  border: StateTokens;
}

/**
 * Interactive UI tokens for common components
 */
export interface InteractiveTokens {
  // List items (sidebar, dropdowns)
  list: InteractiveToken;
  // Buttons
  button: InteractiveToken;
  buttonSecondary: InteractiveToken;
  // Input fields
  input: InteractiveToken;
  // Tabs
  tab: InteractiveToken;
}

export interface SemanticTokens {
  syntax: SyntaxTokens;
  ui: UITokens;
  status: StatusTokens;
  git: GitTokens;
  interactive: InteractiveTokens;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Create a semantic role from JzCzhz values
 */
function role(description: string, Jz: number, Cz: number, hz: number): SemanticRole {
  const jzczhz = { Jz, Cz, hz };
  return {
    description,
    jzczhz,
    hex: hex(jzczhz),
  };
}

/**
 * Create a semantic role from an existing hex color
 */
function roleFromHex(description: string, hexColor: string): SemanticRole {
  return {
    description,
    jzczhz: { Jz: 0, Cz: 0, hz: 0 }, // Placeholder - derived colors don't need JzCzhz
    hex: hexColor,
  };
}

// =============================================================================
// DERIVE FUNCTIONS
// =============================================================================

/**
 * Apply opacity to a hex color
 * @param hexColor - Base color (#RRGGBB)
 * @param alpha - Opacity value from opacity scale ('08', '15', etc.)
 * @returns Color with alpha (#RRGGBBAA)
 */
export function withOpacity(hexColor: string, alpha: string): string {
  // Strip existing alpha if present
  const base = hexColor.length === 9 ? hexColor.slice(0, 7) : hexColor;
  return `${base}${alpha}`;
}

/**
 * Lighten a JzCzhz-based color by increasing Jz
 * @param role - Semantic role with JzCzhz values
 * @param delta - Amount to increase Jz (0.01-0.05 typical)
 * @returns New hex color
 */
export function lighten(role: SemanticRole, delta: number): string {
  if (role.jzczhz.Jz === 0) {
    // Hex-based role - can't lighten precisely, return as-is
    return role.hex;
  }
  const newJz = Math.min(0.22, role.jzczhz.Jz + delta);
  return hex({ ...role.jzczhz, Jz: newJz });
}

/**
 * Darken a JzCzhz-based color by decreasing Jz
 * @param role - Semantic role with JzCzhz values
 * @param delta - Amount to decrease Jz (0.01-0.05 typical)
 * @returns New hex color
 */
export function darken(role: SemanticRole, delta: number): string {
  if (role.jzczhz.Jz === 0) {
    return role.hex;
  }
  const newJz = Math.max(0, role.jzczhz.Jz - delta);
  return hex({ ...role.jzczhz, Jz: newJz });
}

/**
 * Desaturate a color for disabled states
 * @param role - Semantic role with JzCzhz values
 * @param factor - Multiplier for chroma (0.5 = half saturation)
 * @returns New hex color
 */
export function desaturate(role: SemanticRole, factor: number): string {
  if (role.jzczhz.Jz === 0) {
    return role.hex;
  }
  const newCz = role.jzczhz.Cz * factor;
  return hex({ ...role.jzczhz, Cz: newCz });
}

/**
 * Create state tokens from base colors and opacity scale
 */
function createStateTokens(
  baseColor: string,
  op: OpacityScale,
  options: {
    hoverOpacity?: string;
    activeOpacity?: string;
    selectedOpacity?: string;
    disabledOpacity?: string;
    focusColor?: string;
  } = {}
): StateTokens {
  const {
    hoverOpacity = op.light,
    activeOpacity = op.medium,
    selectedOpacity = op.strong,
    disabledOpacity = op.light,
    focusColor = baseColor,
  } = options;

  return {
    default: baseColor,
    hover: withOpacity(baseColor, hoverOpacity),
    active: withOpacity(baseColor, activeOpacity),
    focus: focusColor,
    disabled: withOpacity(baseColor, disabledOpacity),
    selected: withOpacity(baseColor, selectedOpacity),
  };
}

/**
 * Create foreground state tokens (text colors)
 * Unlike backgrounds, foreground states typically change the actual color
 */
function createForegroundStateTokens(
  defaultColor: string,
  hoverColor: string,
  activeColor: string,
  focusColor: string,
  disabledColor: string,
  selectedColor: string
): StateTokens {
  return {
    default: defaultColor,
    hover: hoverColor,
    active: activeColor,
    focus: focusColor,
    disabled: disabledColor,
    selected: selectedColor,
  };
}

/**
 * Create border state tokens
 */
function createBorderStateTokens(
  baseColor: string,
  op: OpacityScale,
  options: {
    defaultOpacity?: string;
    hoverOpacity?: string;
    activeOpacity?: string;
    focusOpacity?: string;
  } = {}
): StateTokens {
  const {
    defaultOpacity = op.medium,
    hoverOpacity = op.strong,
    activeOpacity = op.heavy,
    focusOpacity = op.solid,
  } = options;

  return {
    default: withOpacity(baseColor, defaultOpacity),
    hover: withOpacity(baseColor, hoverOpacity),
    active: withOpacity(baseColor, activeOpacity),
    focus: withOpacity(baseColor, focusOpacity),
    disabled: withOpacity(baseColor, op.light),
    selected: withOpacity(baseColor, activeOpacity),
  };
}

// =============================================================================
// SEMANTIC TOKEN DEFINITIONS
// =============================================================================

/**
 * Create semantic tokens from primitives
 *
 * This function takes primitives and produces semantic tokens.
 * Different variants can provide different primitives to get different themes.
 */
export function createSemanticTokens(
  p: typeof primitives = primitives
): SemanticTokens {
  const { lightness: L, chroma: C, hue: H, character: char, special: sp } = p;

  return {
    // =========================================================================
    // SYNTAX TOKENS
    // =========================================================================
    syntax: {
      // KEYWORDS - Miku signature teal
      keyword: role(
        'Primary keyword - Digital Diva signature',
        L.primary, C.comfortable, H.mikuTeal
      ),
      keywordControl: role(
        'Flow control keywords - slightly cooler',
        L.primary, C.comfortable, H.mikuTeal + 5
      ),
      keywordAlt: role(
        'Alternative keyword - dimmer variant',
        L.secondary, C.comfortable, H.mikuTeal
      ),

      // STORAGE / TYPES
      storage: role(
        'Storage keywords - fresh mint',
        L.primary, C.comfortable, H.mint
      ),
      storageModifier: role(
        'Storage modifiers - rose accent',
        L.primaryWarm, C.comfortable, H.rose
      ),
      type: role(
        'Type annotations - orchid',
        L.primary, C.comfortable, H.orchid
      ),
      typeParameter: role(
        'Generic type parameters - muted sky',
        L.muted, C.muted, H.sky
      ),
      enum: role(
        'Enum names - ice cyan',
        L.primary, C.comfortable, H.ice
      ),
      enumMember: role(
        'Enum values - light rose',
        L.muted, C.muted, H.rose + 15
      ),
      macro: role(
        'Macros - muted periwinkle',
        L.muted, C.muted, H.periwinkle
      ),

      // FUNCTIONS - Gold (Magical Mirai wand)
      function: role(
        'Functions - vibrant gold',
        L.vibrant, C.vibrant, H.gold
      ),
      method: role(
        'Methods - distinct from keyword',
        L.primary, C.comfortable, H.mint + 5
      ),

      // CLASSES - Negi lime / Pink accent
      class: role(
        'Classes - negi lime',
        L.vibrant, C.vibrant, H.lime
      ),
      interface: role(
        'Interfaces - Miku pink',
        L.primaryWarm, C.comfortable, H.mikuPink
      ),
      struct: role(
        'Structs - same as class',
        L.vibrant, C.vibrant, H.lime
      ),

      // VARIABLES - Sky / Warm peach
      variable: role(
        'Variables - blue',
        L.primary, C.comfortable, 235 // Shifted for keyword distinction
      ),
      parameter: role(
        'Parameters - warm peach',
        L.primaryWarm, C.comfortable, H.peach
      ),
      property: role(
        'Properties - coral',
        L.primaryWarm, C.comfortable, H.coral
      ),

      // STRINGS - Mint green
      string: role(
        'Strings - vibrant mint',
        L.vibrant, C.vibrant, H.mint
      ),
      stringTemplate: role(
        'Template strings - shifted mint',
        L.primary, C.comfortable, H.mint + 10
      ),
      regex: role(
        'Regex patterns - warm',
        L.primaryWarm, C.comfortable, H.peach + 5
      ),

      // NUMBERS & LITERALS
      number: role(
        'Numbers - muted blue',
        L.muted, C.muted, H.sky + 15
      ),
      boolean: role(
        'Booleans - muted orchid',
        L.muted, C.muted, H.orchid + 5
      ),

      // CONSTANTS / TAGS
      constant: role(
        'Constants - amber',
        L.primaryWarm, C.comfortable, H.amber
      ),
      tag: role(
        'HTML/JSX tags - coral',
        L.primaryWarm, C.comfortable, H.coral
      ),
      attribute: role(
        'Attributes - amber variant',
        L.primaryWarm, C.comfortable, H.amber - 5
      ),

      // COMMENTS
      comment: role(
        'Comments - muted gold',
        L.muted, C.muted, 60 // Far from keyword/type/variable
      ),
      commentDoc: role(
        'Doc comments - muted teal',
        L.muted, C.muted, H.mikuTeal - 5
      ),

      // OPERATORS
      operator: role(
        'Operators - pink/magenta',
        L.primaryWarm, C.comfortable, H.mikuPink
      ),
    },

    // =========================================================================
    // UI TOKENS
    // =========================================================================
    ui: {
      foreground: roleFromHex(
        'Primary text - soft ice-white',
        '#C0D8E0'
      ),
      foregroundMuted: role(
        'Secondary text - silver',
        L.secondary, C.gray, H.sky
      ),
      foregroundSubtle: role(
        'Tertiary text - muted',
        L.tertiary, C.gray, H.sky
      ),
      background: roleFromHex(
        'Editor background - skirt base',
        char.skirt.base
      ),
      backgroundElevated: roleFromHex(
        'Widget background - arm warmers',
        char.armWarmers.base
      ),
      backgroundSurface: roleFromHex(
        'Sidebar background - headphones frame',
        char.headphones.frame
      ),
      backgroundOverlay: roleFromHex(
        'Section headers - top shadow',
        char.top.shadow
      ),
      accentPrimary: roleFromHex(
        'Primary accent - hair base',
        char.hair.base
      ),
      accentSecondary: roleFromHex(
        'Secondary accent - hair highlight',
        char.hair.highlight
      ),
      accentTertiary: roleFromHex(
        'Tertiary accent - hair tip',
        char.hair.tip
      ),
      border: roleFromHex(
        'Border - hair base with alpha',
        char.hair.base
      ),
      borderSubtle: roleFromHex(
        'Subtle border - hair base with lower alpha',
        char.hair.base
      ),
      selection: roleFromHex(
        'Selection background - hair base',
        char.hair.base
      ),
      cursor: roleFromHex(
        'Cursor - magenta accent',
        char.hairTies.outline
      ),
      link: roleFromHex(
        'Link text - hair highlight',
        char.hair.highlight
      ),
      linkActive: role(
        'Active link - vibrant teal',
        L.vibrant, C.vibrant, H.mikuTeal
      ),
    },

    // =========================================================================
    // STATUS TOKENS
    // =========================================================================
    status: {
      success: role(
        'Success - bright mint',
        L.vibrant, C.vibrant, H.mint
      ),
      warning: role(
        'Warning - golden amber',
        L.vibrant, C.vibrant, H.amber
      ),
      error: role(
        'Error - pink (Miku pink accent)',
        L.vibrantWarm, C.vibrant, H.mikuPink
      ),
      info: role(
        'Info - Miku cyan',
        L.vibrant, C.vibrant, H.mikuTeal
      ),
    },

    // =========================================================================
    // GIT TOKENS
    // =========================================================================
    git: {
      added: role(
        'Git added - bright mint',
        L.vibrant, C.vibrant, H.mint
      ),
      modified: role(
        'Git modified - warm gold',
        L.vibrant, C.vibrant, H.gold
      ),
      deleted: role(
        'Git deleted - red',
        L.vibrantWarm, C.vibrant, H.gitRed
      ),
      untracked: role(
        'Git untracked - Miku cyan',
        L.vibrant, C.vibrant, H.ice
      ),
      conflicting: role(
        'Git conflicting - blue-violet',
        L.primary, C.comfortable, H.gitViolet
      ),
      renamed: role(
        'Git renamed - lavender',
        L.primary, C.comfortable, H.lavender
      ),
    },

    // =========================================================================
    // INTERACTIVE TOKENS
    // =========================================================================
    interactive: createInteractiveTokens(p),
  };
}

/**
 * Create interactive tokens with full state support
 */
function createInteractiveTokens(p: typeof primitives): InteractiveTokens {
  const { character: char, opacity: op } = p;

  // Colors used across interactive elements
  const accent = char.hair.base;           // #39C5BB - Primary accent
  const accentBright = char.hair.highlight; // #5DE4DB - Brighter accent
  const focus = char.hairTies.outline;     // #E05096 - Magenta focus
  const foreground = '#C0D8E0';            // Primary text
  const foregroundMuted = '#8A9CA0';       // Muted text
  const foregroundDisabled = '#5A6A70';    // Disabled text
  const background = char.skirt.base;      // #15191D - Base background
  const backgroundElevated = char.armWarmers.base; // #111417
  const backgroundSurface = char.headphones.frame; // #1A1F24

  return {
    // List items (sidebar, dropdowns, file explorer)
    list: {
      background: {
        default: 'transparent',
        hover: withOpacity(accent, op.subtle),
        active: withOpacity(accent, op.light),
        focus: withOpacity(accent, op.medium),
        disabled: 'transparent',
        selected: withOpacity(focus, op.medium),
      },
      foreground: createForegroundStateTokens(
        foreground,      // default
        accentBright,    // hover - brighter
        foreground,      // active
        focus,           // focus
        foregroundDisabled, // disabled
        foreground       // selected
      ),
      border: createBorderStateTokens(accent, op),
    },

    // Primary buttons
    button: {
      background: {
        default: '#157570',              // Darker teal for contrast
        hover: accent,                   // Brighter on hover
        active: accentBright,            // Even brighter on active
        focus: accent,
        disabled: withOpacity(accent, op.medium),
        selected: accent,
      },
      foreground: createForegroundStateTokens(
        '#FFFFFF',       // default - white text
        '#FFFFFF',       // hover
        '#FFFFFF',       // active
        '#FFFFFF',       // focus
        foregroundMuted, // disabled
        '#FFFFFF'        // selected
      ),
      border: {
        default: withOpacity(accentBright, op.heavy),
        hover: accentBright,
        active: accentBright,
        focus: focus,
        disabled: withOpacity(accent, op.light),
        selected: accentBright,
      },
    },

    // Secondary buttons
    buttonSecondary: {
      background: {
        default: withOpacity(accent, op.medium),
        hover: withOpacity(accent, op.strong),
        active: withOpacity(accent, op.heavy),
        focus: withOpacity(accent, op.strong),
        disabled: withOpacity(accent, op.light),
        selected: withOpacity(accent, op.strong),
      },
      foreground: createForegroundStateTokens(
        foreground,
        accentBright,
        foreground,
        focus,
        foregroundDisabled,
        foreground
      ),
      border: createBorderStateTokens(accent, op),
    },

    // Input fields
    input: {
      background: {
        default: backgroundElevated,
        hover: backgroundElevated,
        active: backgroundElevated,
        focus: backgroundElevated,
        disabled: withOpacity(backgroundSurface, op.heavy),
        selected: backgroundElevated,
      },
      foreground: createForegroundStateTokens(
        foreground,
        foreground,
        foreground,
        foreground,
        foregroundDisabled,
        foreground
      ),
      border: {
        default: withOpacity(accent, op.medium),
        hover: withOpacity(accent, op.strong),
        active: withOpacity(accent, op.heavy),
        focus: accentBright,
        disabled: withOpacity(accent, op.light),
        selected: withOpacity(accent, op.strong),
      },
    },

    // Tabs
    tab: {
      background: {
        default: background,
        hover: withOpacity(accent, op.light),
        active: withOpacity(accent, op.subtle),
        focus: withOpacity(accent, op.light),
        disabled: background,
        selected: withOpacity(accent, op.subtle),
      },
      foreground: createForegroundStateTokens(
        foregroundMuted,  // default - inactive tabs are muted
        accentBright,     // hover
        foreground,       // active
        focus,            // focus
        foregroundDisabled,
        foreground        // selected - active tab is bright
      ),
      border: {
        default: backgroundElevated,
        hover: withOpacity(accent, op.medium),
        active: withOpacity(accent, op.medium),
        focus: focus,
        disabled: backgroundElevated,
        selected: focus,  // Active tab has magenta top border
      },
    },
  };
}

// =============================================================================
// DEFAULT EXPORT
// =============================================================================

/**
 * Default semantic tokens using standard Miku primitives
 */
export const semanticTokens = createSemanticTokens(primitives);

/**
 * Get hex color from semantic token
 */
export function getHex(token: SemanticRole): string {
  return token.hex;
}

/**
 * Get all syntax colors as a flat hex map
 */
export function getSyntaxColors(tokens: SemanticTokens = semanticTokens): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens.syntax)) {
    result[key] = value.hex;
  }
  return result;
}

/**
 * Get all UI colors as a flat hex map
 */
export function getUIColors(tokens: SemanticTokens = semanticTokens): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens.ui)) {
    result[key] = value.hex;
  }
  return result;
}

/**
 * Get all status colors as a flat hex map
 */
export function getStatusColors(tokens: SemanticTokens = semanticTokens): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens.status)) {
    result[key] = value.hex;
  }
  return result;
}

/**
 * Get all git colors as a flat hex map
 */
export function getGitColors(tokens: SemanticTokens = semanticTokens): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(tokens.git)) {
    result[key] = value.hex;
  }
  return result;
}
