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
} from '../palette';

// ============================================================================
// COLOR DEFINITIONS - All sourced from palette
// ============================================================================

const colors = {
  // Keywords & Control
  keyword: character.hair.highlight,           // #5DE4DB - Bright teal
  keywordAlt: wonderlandsShowtime.hair.highlight, // #4DD0E1 - Lighter teal

  // Callable entities
  function: themeColors.syntax.gold,           // #FFD27F - Warm gold (APCA-optimized)
  functionBuiltin: character.hair.highlight,   // #5DE4DB - Bright teal
  method: character.skin.blush,                // #FFB8C8 - Blush pink

  // Types & Structures
  class: snowMiku.y2017.accessories.stars,     // #FFD700 - Gold star
  interface: themeColors.syntax.skyBlue,       // #7CC4FF - Sky blue (APCA-optimized)
  type: character.hair.tip,                    // #B2EBE7 - Soft teal
  enum: digitalStars.y2023.outfit.jacket,      // #DBAFEB - Lavender hoodie
  struct: themeColors.syntax.softBlue,         // #9DD0FF - Soft blue (APCA-optimized)
  namespace: digitalStars.y2021_mg.outfit.gradient, // #BFAAF0 - Soft lavender

  // Variables & Data
  variable: snowMiku.y2010.outfit.shirt,       // #E8EEF2 - Snow white
  parameter: character.hair.tip,               // #B2EBE7 - Soft teal
  property: character.skin.blush,              // #FFB8C8 - Blush pink
  constant: snowMiku.y2017.accessories.stars,  // #FFD700 - Gold star

  // Literals
  string: character.negi.stalk,                // #9CCC65 - Negi green
  number: character.negi.bright,               // #69F0AE - Bright mint
  boolean: leoNeed.hair.highlight,             // #FF80AB - Vibrant pink
  regex: character.negi.bright,                // #69F0AE - Bright mint

  // Operators & Punctuation
  operator: wonderlandsShowtime.unitColor,     // #FF9900 - Pop orange

  // Meta
  comment: themeColors.syntax.silverMist,      // #889DA2 - Silver mist
  commentDoc: themeColors.syntax.silverBright, // #A8BDC2 - Brighter silver
  decorator: digitalStars.y2021_mg.outfit.gradient, // #BFAAF0 - Soft lavender

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
  typeParameter: colors.enum,
  'typeParameter.declaration': colors.enum,

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
  enumMember: colors.constant,
  'enumMember.readonly': colors.constant,

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
