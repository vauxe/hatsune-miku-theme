/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Semantic tokens provide language-aware syntax highlighting (LSP-based).
 * Design Philosophy: "Digital Diva" - Clear distinction, consistent with TextMate tokens.
 *
 * All colors sourced from the Miku palette - no hardcoded values.
 * Colors validated for APCA Lc 60+ against editor background.
 */

// Token system provides themeColors bridge
import { themeColors } from '../tokens';

// Palette provides character and event colors
import {
  character,
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
  // Core semantic categories (APCA + chroma + distinction tuned in `themeColors.syntax`)
  // Each color is DISTINCT to ensure visual differentiation in code
  keyword: themeColors.syntax.keyword,           // #70F0D0 - Mint-teal (signature)
  keywordAlt: themeColors.syntax.keywordAlt,     // #50D8C8 - Darker teal
  storageModifier: themeColors.syntax.storageModifier, // #E0B8F8 - Light violet

  function: themeColors.syntax.function,         // #F0D070 - Warm gold
  functionBuiltin: themeColors.syntax.supportFunction, // #88E8C0 - Mint (DISTINCT from function)
  method: themeColors.syntax.method,             // #78E8C0 - Fresh mint (DISTINCT from keyword)
  magicMethod: themeColors.syntax.method,        // Same as method

  class: themeColors.syntax.class,               // #C8E888 - Negi-lime
  interface: themeColors.syntax.interface,       // #FFC8E8 - Bright Miku pink (DISTINCT)
  type: themeColors.syntax.type,                 // #E8C8F8 - Bright orchid (DISTINCT)
  typeParameter: themeColors.syntax.typeParameter, // #F0D0F8 - Light violet
  enum: themeColors.syntax.enum,                 // #80E8F0 - Ice-cyan (DISTINCT from class)
  enumMember: themeColors.syntax.enumMember,     // #F8D0E0 - Light rose (DISTINCT)
  struct: themeColors.syntax.struct,             // #70E8D8 - Teal-green (DISTINCT)
  namespace: themeColors.syntax.supportType,     // #C8D0F8 - Light periwinkle (DISTINCT from type)

  variable: themeColors.syntax.variable,         // #78E0F8 - Sky cyan
  parameter: themeColors.syntax.parameter,       // #FFC8A0 - Warm peach (brighter)
  property: themeColors.syntax.property,         // #F0D090 - Warm tan (DISTINCT from parameter)
  constant: themeColors.syntax.constant,         // #F0D898 - Warm gold (DISTINCT)

  string: themeColors.syntax.string,             // #B4DC78 - Negi yellow-green
  number: themeColors.syntax.number,             // #90D8F8 - Bright sky blue (DISTINCT from variable)
  boolean: themeColors.syntax.boolean,           // #F0D0F8 - Light orchid
  regex: themeColors.syntax.regex,               // #F0C870 - Warm amber

  operator: themeColors.ui.operator,             // #FFC0E0 - Pink/Magenta

  comment: themeColors.syntax.comment,           // #E0D0F8 - Lavender-gray
  commentDoc: themeColors.syntax.commentDoc,     // #A8E0D8 - Teal doc-comments
  decorator: themeColors.syntax.enum,            // #A0E0F8 - Ice-blue (for decorators)
  lifetime: themeColors.syntax.keywordAlt,       // #50D8C8 - Darker teal

  heading: themeColors.syntax.function,          // #F0D070 - Gold for headings
  deprecated: themeColors.ui.deprecated,
  variableLanguage: themeColors.ui.variableLanguage, // #88F0F8 - Bright aqua
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
  // REGEXP
  // ==========================================================================
  regexp: colors.regex,

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
  macro: themeColors.syntax.macro,   // #B8D0F8 - Light blue (DISTINCT from variable)

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
