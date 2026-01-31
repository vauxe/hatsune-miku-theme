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
  storageModifier: themeColors.syntax.pastelTeal, // #64C5CE - Snow 2015 (distinct from keywords)

  // Callable entities - WARM CREAM replaces gold
  function: themeColors.syntax.warmCream,      // #E0C9A0 - Snow 2024 cream (Lc 61, 15% sat)
  functionBuiltin: character.hair.highlight,   // #5DE4DB - Bright teal
  method: themeColors.syntax.pastelRose,       // #F8BBD0 - MM 2020 winter (low-fatigue)
  magicMethod: themeColors.syntax.pastelRose,  // #F8BBD0 - Python __dunder__ methods

  // Types & Structures - WARM TAUPE replaces gold
  class: themeColors.syntax.warmTaupe,         // #C4B5A0 - Snow 2024 taupe (Lc 54, 8% sat)
  interface: themeColors.syntax.skyBlue,       // #7CC4FF - Sky blue (APCA-optimized)
  type: character.hair.tip,                    // #B2EBE7 - Soft teal
  typeParameter: themeColors.syntax.pastelPeriwinkle, // #9EAFE8 - Snow 2023 (distinct from type)
  enum: digitalStars.y2023.outfit.jacket,      // #DBAFEB - Lavender hoodie
  struct: themeColors.syntax.softBlue,         // #9DD0FF - Soft blue (APCA-optimized)
  namespace: digitalStars.y2021_mg.outfit.gradient, // #BFAAF0 - Soft lavender

  // Variables & Data
  variable: snowMiku.y2010.outfit.shirt,       // #E8EEF2 - Snow white
  parameter: character.hair.tip,               // #B2EBE7 - Soft teal
  property: themeColors.syntax.pastelRose,     // #F8BBD0 - MM 2020 winter (low-fatigue)
  constant: themeColors.syntax.pastelPeriwinkle, // #9EAFE8 - Snow 2023 (low-fatigue)

  // Literals
  string: character.negi.stalk,                // #9CCC65 - Negi green
  number: character.negi.bright,               // #69F0AE - Bright mint
  boolean: themeColors.syntax.pastelIndigo,    // #7986CB - Snow 2025 (low-fatigue)
  regex: character.negi.bright,                // #69F0AE - Bright mint

  // Operators & Punctuation
  operator: themeColors.syntax.pastelGray,     // #8B7A8B - Nightcord (low-fatigue, replaces orange)

  // Meta
  comment: themeColors.syntax.silverMist,      // #889DA2 - Silver mist
  commentDoc: themeColors.syntax.silverBright, // #A8BDC2 - Brighter silver
  decorator: digitalStars.y2021_mg.outfit.gradient, // #BFAAF0 - Soft lavender
  lifetime: themeColors.syntax.pastelIndigo,   // #7986CB - Snow 2025 (Rust lifetimes)

  // Headings & Special
  heading: themeColors.syntax.coolAqua,        // #A8D8D8 - Snow 2015 aqua (Lc 57)

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
