/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Semantic tokens provide language-aware syntax highlighting (LSP-based).
 * Design Philosophy: "Digital Diva" - Clear distinction, consistent with TextMate tokens.
 *
 * All colors sourced from the Miku palette - no hardcoded values.
 * Colors validated for APCA Lc 60+ against editor background.
 */

import {
  character,
  themeColors,
  snowMiku,
  digitalStars,
  leoNeed,
  wonderlandsShowtime,
  nightcord,
} from '../palette';

// ============================================================================
// COLOR DEFINITIONS - All sourced from palette
// ============================================================================

const colors = {
  // =========================================================================
  // KEYWORDS & CONTROL - Signature Miku Teal Family (170-185° hue)
  // All Lc 60+ for excellent readability
  // =========================================================================
  keyword: character.hair.highlight,           // #5DE4DB - Bright teal (Lc 74)
  keywordAlt: wonderlandsShowtime.hair.highlight, // #4DD0E1 - Lighter teal (Lc 70)
  storageModifier: themeColors.syntax.pastelTeal, // #78D0D8 - Pastel teal (Lc 68) - BOOSTED

  // =========================================================================
  // CALLABLE ENTITIES - Gold Family (40-55° hue)
  // Functions warmer/yellower, Classes cooler/grayer for distinction
  // =========================================================================
  function: themeColors.syntax.warmCream,      // #E8D0A0 - Warm cream (Lc 65)
  functionBuiltin: character.hair.highlight,   // #5DE4DB - Bright teal (Lc 74)
  method: themeColors.syntax.pastelRose,       // #F0B8C8 - Rose pink (Lc 64) - METHODS ONLY
  magicMethod: themeColors.syntax.pastelRose,  // #F0B8C8 - Python __dunder__ methods

  // =========================================================================
  // TYPES & STRUCTURES - Blue/Purple Family (200-290° hue)
  // Each type category has distinct hue for easy differentiation
  // =========================================================================
  class: themeColors.syntax.warmGold,          // #D4C4B0 - Gray-gold (Lc 60)
  interface: themeColors.syntax.skyBlue,       // #80C8FF - Sky blue (Lc 68)
  type: character.hair.tip,                    // #B2EBE7 - Soft teal (Lc 78)
  typeParameter: themeColors.syntax.pastelLavender, // #C8B8E8 - Lavender (Lc 62) - DISTINCT from keywords (ΔE 30+)
  enum: themeColors.syntax.pastelOrchid,       // #E0B8E8 - Soft orchid (Lc 66)
  enumMember: themeColors.syntax.pastelOrchidLight, // #E8D0F0 - Light orchid (Lc 72)
  struct: themeColors.syntax.paleBlue,         // #B8E0F8 - Pale blue (Lc 78) - DISTINCT from number
  namespace: themeColors.syntax.pastelLavender, // #C8B8E8 - Lavender (Lc 62) - DISTINCT from decorator

  // =========================================================================
  // VARIABLES & DATA - Neutral/Warm Family
  // Clear hierarchy: variable > property > parameter > constant
  // =========================================================================
  variable: snowMiku.y2010.outfit.shirt,       // #E8EEF2 - Snow white (Lc 86)
  parameter: character.skin.base,              // #FFE4D6 - Miku skin peachy (Lc 77)
  property: themeColors.syntax.pastelPeach,    // #F8D0C0 - Soft peach (Lc 70) - DISTINCT from method
  constant: themeColors.syntax.pastelCoral,    // #FFD8D0 - Pale coral (Lc 76)

  // =========================================================================
  // LITERALS - Green/Blue Family
  // Numbers distinct blue, Booleans distinct indigo
  // =========================================================================
  string: character.negi.stalk,                // #9CCC65 - Negi green (Lc 68)
  number: themeColors.syntax.softBlue,         // #A0D8FF - Soft blue (Lc 74)
  boolean: themeColors.syntax.pastelIndigo,    // #A8B8E8 - Pastel indigo (Lc 62) - BOOSTED
  regex: character.negi.bright,                // #69F0AE - Bright mint (Lc 82)

  // =========================================================================
  // OPERATORS & PUNCTUATION - Neutral Silver
  // =========================================================================
  operator: nightcord.hair.highlight,          // #C0C0C0 - 25-ji silver (Lc 60)

  // =========================================================================
  // META - Purple Family (260-290° hue)
  // Decorators distinct from Namespaces
  // =========================================================================
  comment: themeColors.syntax.silverBright,    // #B0C0C8 - Silver (Lc 60)
  commentDoc: themeColors.markdown.docComment, // #A8C8D0 - Cyan-tinted silver (Lc 62) - DISTINCT from comment
  decorator: themeColors.syntax.pastelViolet,  // #D8A8E0 - Violet (Lc 60) - DISTINCT from namespace
  lifetime: themeColors.syntax.pastelSlate,    // #B0C0E0 - Slate blue (Lc 64) - DISTINCT from boolean

  // =========================================================================
  // HEADINGS & SPECIAL
  // =========================================================================
  heading: themeColors.syntax.coolAqua,        // #B0E0E0 - Soft aqua (Lc 72) - BOOSTED

  // Special
  deprecated: character.skirt.accessory,       // #A1B3B6 - Wallet chain silver
};

// Helper type for semantic token settings
type SemanticTokenSetting =
  | string
  | {
      foreground?: string;
      fontStyle?: string;
    };

export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  // ==========================================================================
  // KEYWORDS
  // ==========================================================================
  keyword: colors.keyword,
  'keyword.control': colors.keyword,
  'keyword.controlFlow': colors.keyword,

  // ==========================================================================
  // FUNCTIONS
  // ==========================================================================
  function: colors.function,
  'function.declaration': colors.function,
  'function.call': colors.function,
  'function.defaultLibrary': colors.functionBuiltin,
  'function.builtin': colors.functionBuiltin,

  // ==========================================================================
  // METHODS
  // ==========================================================================
  method: colors.method,
  'method.declaration': colors.method,
  'method.static': colors.method,
  'method.defaultLibrary': colors.functionBuiltin,

  // ==========================================================================
  // CLASSES
  // ==========================================================================
  class: colors.class,
  'class.declaration': colors.class,
  'class.defaultLibrary': colors.class,

  // ==========================================================================
  // INTERFACES
  // ==========================================================================
  interface: colors.interface,
  'interface.declaration': colors.interface,

  // ==========================================================================
  // TYPES
  // ==========================================================================
  type: colors.type,
  'type.declaration': colors.type,
  'type.defaultLibrary': colors.type,
  typeParameter: colors.typeParameter,
  'typeParameter.declaration': colors.typeParameter,

  // ==========================================================================
  // STRUCTS
  // ==========================================================================
  struct: colors.struct,
  'struct.declaration': colors.struct,

  // ==========================================================================
  // ENUMS
  // ==========================================================================
  enum: colors.enum,
  'enum.declaration': colors.enum,
  enumMember: colors.enumMember,       // #CE93D8 - WxS purple (distinct from enum & constant)
  'enumMember.readonly': colors.enumMember,

  // ==========================================================================
  // NAMESPACES & MODULES
  // ==========================================================================
  namespace: colors.namespace,
  'namespace.declaration': colors.namespace,
  module: colors.namespace,
  'module.declaration': colors.namespace,

  // ==========================================================================
  // VARIABLES
  // ==========================================================================
  variable: colors.variable,
  'variable.declaration': colors.variable,
  'variable.readonly': colors.constant,
  'variable.constant': colors.constant,
  'variable.defaultLibrary': {
    foreground: colors.keywordAlt,
    fontStyle: 'italic',
  },
  'variable.local': colors.variable,

  // ==========================================================================
  // PROPERTIES
  // ==========================================================================
  property: colors.property,
  'property.declaration': colors.property,
  'property.readonly': colors.constant,
  'property.static': colors.property,
  'property.defaultLibrary': colors.property,

  // ==========================================================================
  // PARAMETERS
  // ==========================================================================
  parameter: colors.parameter,
  'parameter.declaration': colors.parameter,
  'parameter.readonly': colors.parameter,

  // ==========================================================================
  // STRINGS
  // ==========================================================================
  string: colors.string,
  'string.regexp': colors.regex,

  // ==========================================================================
  // NUMBERS
  // ==========================================================================
  number: colors.number,

  // ==========================================================================
  // BOOLEANS
  // ==========================================================================
  boolean: colors.boolean,

  // ==========================================================================
  // OPERATORS
  // ==========================================================================
  operator: colors.operator,
  'operator.controlFlow': colors.keyword,

  // ==========================================================================
  // COMMENTS
  // ==========================================================================
  comment: {
    foreground: colors.comment,
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: colors.commentDoc,
    fontStyle: 'italic',
  },

  // ==========================================================================
  // DECORATORS
  // ==========================================================================
  decorator: colors.decorator,
  'decorator.declaration': colors.decorator,
  annotation: colors.decorator,

  // ==========================================================================
  // MACROS
  // ==========================================================================
  macro: colors.decorator,

  // ==========================================================================
  // LABELS
  // ==========================================================================
  label: colors.decorator,

  // ==========================================================================
  // EVENTS
  // ==========================================================================
  event: colors.class,

  // ==========================================================================
  // MODIFIER STYLES
  // ==========================================================================
  // Readonly modifier - use constant coloring
  '*.readonly': {
    foreground: colors.constant,
  },

  // Static modifier - keep base color
  '*.static': {},

  // Deprecated - strikethrough
  '*.deprecated': {
    foreground: colors.deprecated,
    fontStyle: 'strikethrough',
  },

  // Abstract - italic
  '*.abstract': {
    fontStyle: 'italic',
  },

  // Async - no change, handled by keywords
  '*.async': {},

  // Declaration - no change
  '*.declaration': {},

  // Definition - no change
  '*.definition': {},

  // Documentation - handled by comment
  '*.documentation': {
    fontStyle: 'italic',
  },

  // Modification - highlight changes
  '*.modification': {},

  // Default library - use built-in styling
  '*.defaultLibrary': {},
};

export type SemanticTokenColors = typeof semanticTokenColors;
