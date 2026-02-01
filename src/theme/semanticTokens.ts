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
  // Core semantic categories (APCA + chroma + distinction tuned in `themeColors.syntax`)
  keyword: themeColors.syntax.keyword,
  keywordAlt: themeColors.syntax.keywordAlt,
  storageModifier: themeColors.syntax.storageModifier,

  function: themeColors.syntax.function,
  functionBuiltin: themeColors.syntax.keyword,
  method: themeColors.syntax.method,
  magicMethod: themeColors.syntax.method,

  class: themeColors.syntax.class,
  interface: themeColors.syntax.interface,
  type: themeColors.syntax.type,
  typeParameter: themeColors.syntax.typeParameter,
  enum: themeColors.syntax.enum,
  enumMember: themeColors.syntax.enumMember,
  struct: themeColors.syntax.struct,
  namespace: themeColors.syntax.typeParameter,

  variable: themeColors.syntax.variable,
  parameter: themeColors.syntax.parameter,
  property: themeColors.syntax.property,
  constant: themeColors.syntax.constant,

  string: themeColors.syntax.string,
  number: themeColors.syntax.number,
  boolean: themeColors.syntax.boolean,
  regex: themeColors.syntax.regex,

  operator: themeColors.ui.operator,

  comment: themeColors.syntax.comment,
  commentDoc: themeColors.syntax.commentDoc,
  decorator: themeColors.syntax.enum,
  lifetime: themeColors.syntax.keywordAlt,

  heading: themeColors.syntax.function,
  deprecated: themeColors.ui.deprecated,
  variableLanguage: themeColors.ui.variableLanguage,
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
