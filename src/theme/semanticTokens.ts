/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Semantic tokens provide language-aware syntax highlighting (LSP-based).
 * Design Philosophy: "Digital Diva" - Clear distinction, consistent with TextMate tokens.
 *
 * All colors sourced from the shared colors.ts mapping and semantic token system.
 * Colors validated for APCA Lc 60+ against editor background.
 */

import { createSyntaxColors } from './colors';
import type { SemanticTokens } from '../tokens';

// Helper type for semantic token settings
type SemanticTokenSetting =
  | string
  | {
    foreground?: string;
    fontStyle?: string;
  };

export function createSemanticTokenColors(t: SemanticTokens): Record<string, SemanticTokenSetting> {
const syntax = createSyntaxColors(t);
return {
  // ==========================================================================
  // KEYWORDS
  // ==========================================================================
  keyword: syntax.keyword,
  'keyword.control': syntax.keyword,
  'keyword.controlFlow': syntax.keyword,

  // ==========================================================================
  // FUNCTIONS
  // ==========================================================================
  function: syntax.function,
  'function.declaration': syntax.function,
  'function.call': syntax.function,
  'function.defaultLibrary': syntax.functionBuiltin,
  'function.builtin': syntax.functionBuiltin,

  // ==========================================================================
  // METHODS
  // ==========================================================================
  method: syntax.method,
  'method.declaration': syntax.method,
  'method.static': syntax.method,
  'method.defaultLibrary': syntax.functionBuiltin,

  // ==========================================================================
  // CLASSES
  // ==========================================================================
  class: syntax.class,
  'class.declaration': syntax.class,
  'class.defaultLibrary': syntax.supportClass,

  // ==========================================================================
  // INTERFACES
  // ==========================================================================
  interface: syntax.interface,
  'interface.declaration': syntax.interface,

  // ==========================================================================
  // TYPES
  // ==========================================================================
  type: syntax.type,
  'type.declaration': syntax.type,
  'type.defaultLibrary': syntax.type,
  typeParameter: syntax.typeParameter,
  'typeParameter.declaration': syntax.typeParameter,

  // ==========================================================================
  // STRUCTS
  // ==========================================================================
  struct: syntax.struct,
  'struct.declaration': syntax.struct,

  // ==========================================================================
  // ENUMS
  // ==========================================================================
  enum: syntax.enum,
  'enum.declaration': syntax.enum,
  enumMember: syntax.enumMember,
  'enumMember.readonly': syntax.enumMember,

  // ==========================================================================
  // NAMESPACES & MODULES
  // ==========================================================================
  namespace: syntax.namespace,
  'namespace.declaration': syntax.namespace,
  module: syntax.namespace,
  'module.declaration': syntax.namespace,

  // ==========================================================================
  // VARIABLES
  // ==========================================================================
  variable: syntax.variable,
  'variable.declaration': syntax.variable,
  'variable.readonly': syntax.constant,
  'variable.constant': syntax.constant,
  'variable.defaultLibrary': syntax.supportVariable,
  'variable.local': syntax.variable,

  // ==========================================================================
  // PROPERTIES
  // ==========================================================================
  property: syntax.property,
  'property.declaration': syntax.property,
  'property.readonly': syntax.constant,
  'property.static': syntax.property,
  'property.defaultLibrary': syntax.property,

  // ==========================================================================
  // PARAMETERS
  // ==========================================================================
  parameter: syntax.parameter,
  'parameter.declaration': syntax.parameter,
  'parameter.readonly': syntax.constant,

  // ==========================================================================
  // STRINGS
  // ==========================================================================
  string: syntax.string,
  'string.regexp': syntax.regex,

  // ==========================================================================
  // REGEXP
  // ==========================================================================
  regexp: syntax.regex,

  // ==========================================================================
  // NUMBERS
  // ==========================================================================
  number: syntax.number,

  // ==========================================================================
  // BOOLEANS
  // ==========================================================================
  boolean: syntax.boolean,

  // ==========================================================================
  // OPERATORS
  // ==========================================================================
  operator: syntax.operator,
  'operator.controlFlow': syntax.keyword,

  // ==========================================================================
  // COMMENTS
  // ==========================================================================
  comment: {
    foreground: syntax.comment,
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: syntax.commentDoc,
    fontStyle: 'italic',
  },

  // ==========================================================================
  // DECORATORS
  // ==========================================================================
  decorator: syntax.decorator,
  'decorator.declaration': syntax.decorator,
  annotation: syntax.decorator,

  // ==========================================================================
  // MACROS
  // ==========================================================================
  macro: syntax.macro,

  // ==========================================================================
  // LABELS
  // ==========================================================================
  label: syntax.keyword,

  // ==========================================================================
  // EVENTS
  // ==========================================================================
  event: syntax.class,

  // ==========================================================================
  // MODIFIER STYLES
  // ==========================================================================
  // Readonly modifier - use constant coloring
  '*.readonly': {
    foreground: syntax.constant,
  },

  // Static modifier - keep base color
  '*.static': {},

  // Deprecated - strikethrough only, no foreground change (design: "A crossed-out note")
  '*.deprecated': {
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
}

