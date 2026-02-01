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

/**
 * Consistent with tokenColors.ts - same hue distribution strategy
 */
const colors = {
  // =========================================================================
  // KEYWORDS - Signature Miku Cyan (180° hue)
  // =========================================================================
  keyword: themeColors.syntax.pastelMint,       // #90F8FF - Miku cyan (180°, Lc 91)
  keywordAlt: themeColors.syntax.keywordAlt,    // #70F8E0 - Green-teal (163°, Lc 89)
  storageModifier: themeColors.syntax.pastelTeal, // #80F0C0 - Mint-green (150°, Lc 87)

  // =========================================================================
  // FUNCTIONS - Golden Amber (45-55° hue)
  // =========================================================================
  function: themeColors.syntax.warmCream,       // #F8D898 - Golden amber (48°, Lc 84)
  functionBuiltin: themeColors.syntax.pastelMint,
  method: themeColors.syntax.pastelRose,        // #FFD0C8 - Soft salmon (10°, Lc 83)
  magicMethod: themeColors.syntax.pastelRose,

  // =========================================================================
  // CLASSES - Yellow-Gold (65-75° hue) - DISTINCT from functions
  // =========================================================================
  class: themeColors.syntax.classGold,          // #F0E8A0 - Yellow-gold (68°, Lc 90)
  interface: themeColors.syntax.skyBlue,        // #D8D0FF - Indigo (265°, Lc 83)
  type: themeColors.syntax.coolCyan,            // #98D8FF - Sky blue (200°, Lc 82)
  typeParameter: themeColors.syntax.pastelLavender, // #E0D8FF - Lavender (265°, Lc 85)
  enum: themeColors.syntax.pastelOrchid,        // #E8D0F8 - Orchid (290°, Lc 82)
  enumMember: themeColors.syntax.pastelOrchidLight, // #F0D8A0 - Gold (55°, Lc 85)
  struct: themeColors.syntax.paleBlue,          // #D0D8FF - Periwinkle (240°, Lc 84)
  namespace: themeColors.syntax.pastelLavender, // #E0D8FF - Lavender (265°, Lc 85)

  // =========================================================================
  // VARIABLES & DATA - DISTINCT hues for instant recognition
  // =========================================================================
  variable: themeColors.syntax.variable,        // #78F0C8 - Mint-teal (160°, Lc 85)
  parameter: themeColors.syntax.parameter,      // #D0D8FF - Periwinkle (240°, Lc 83)
  property: themeColors.syntax.pastelPeach,     // #FFD0C0 - Warm peach (20°, Lc 83)
  constant: themeColors.syntax.pastelCoral,     // #F8C8E8 - Orchid-pink (320°, Lc 82)

  // =========================================================================
  // LITERALS
  // =========================================================================
  string: themeColors.syntax.string,            // #B8F0A0 - Lime-green (100°, Lc 88)
  number: themeColors.syntax.pastelIndigo,      // #D0D8FF - Periwinkle (235°, Lc 84)
  boolean: themeColors.syntax.softBlue,         // #D8D0FF - Pale violet (265°, Lc 80)
  regex: themeColors.syntax.regex,              // #F0D898 - Warm gold (45°, Lc 85)

  // =========================================================================
  // OPERATORS
  // =========================================================================
  operator: themeColors.ui.operator,            // #F0C8D8 - Rose-pink (340°, Lc 81)

  // =========================================================================
  // META
  // =========================================================================
  comment: themeColors.syntax.silverMist,       // #C8D8B8 - Sage green (110°, Lc 82)
  commentDoc: themeColors.syntax.silverBright,  // #E0D8FF - Lavender (265°, Lc 85)
  decorator: themeColors.syntax.pastelViolet,   // #F8D0F8 - Orchid (300°, Lc 85)
  lifetime: themeColors.syntax.pastelSlate,     // #D8E0F8 - Slate blue (Lc 87)

  // =========================================================================
  // HEADINGS & SPECIAL
  // =========================================================================
  heading: themeColors.syntax.coolAqua,         // #FFB8A8 - Soft coral (15°, Lc 78)
  deprecated: themeColors.ui.deprecated,        // #D8D0FF - Lavender (265°)
  variableLanguage: themeColors.ui.variableLanguage, // #88F0F8 - Bright cyan (185°, Lc 87)
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
    foreground: colors.variableLanguage,
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
