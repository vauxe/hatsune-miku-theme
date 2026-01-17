/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Language-aware token coloring for enhanced syntax highlighting
 */

import {
  teals,
  pinks,
  foregrounds,
  accents,
  semantic,
  hologram,
  versionMapping,
  character,
} from '../palette';

// Helper type for semantic token settings
type SemanticTokenSetting =
  | string
  | {
      foreground?: string;
      fontStyle?: string;
    };

export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  // ===========================================================================
  // FUNCTIONS & METHODS
  // ===========================================================================
  function: {
    foreground: versionMapping.functions,
  },
  'function.declaration': {
    foreground: '#00D4C8',
    fontStyle: 'bold',
  },
  'function.async': {
    foreground: versionMapping.functions,
    fontStyle: 'italic',
  },
  'function.async.declaration': {
    foreground: '#00D4C8',
    fontStyle: 'bold italic',
  },
  'function.defaultLibrary': {
    foreground: versionMapping.functions,
  },
  method: {
    foreground: versionMapping.functions,
  },
  'method.declaration': {
    foreground: '#00D4C8',
    fontStyle: 'bold',
  },
  'method.async': {
    foreground: versionMapping.functions,
    fontStyle: 'italic',
  },
  'method.async.declaration': {
    foreground: '#00D4C8',
    fontStyle: 'bold italic',
  },
  'method.static': {
    foreground: versionMapping.functions,
    fontStyle: 'underline',
  },
  'method.static.declaration': {
    foreground: '#00D4C8',
    fontStyle: 'bold underline',
  },

  // ===========================================================================
  // CLASSES & TYPES
  // ===========================================================================
  class: {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  'class.declaration': {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  'class.defaultLibrary': {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  struct: {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  'struct.declaration': {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  enum: {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  enumMember: character.headphones.cushion,
  interface: {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  type: {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  'type.declaration': {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  'type.defaultLibrary': {
    foreground: versionMapping.types,
    fontStyle: 'bold',
  },
  typeParameter: {
    foreground: versionMapping.types,
    fontStyle: 'italic',
  },

  // ===========================================================================
  // NAMESPACES & MODULES
  // ===========================================================================
  namespace: teals.classic,
  'namespace.declaration': {
    foreground: teals.classic,
    fontStyle: 'bold',
  },

  // ===========================================================================
  // PARAMETERS
  // ===========================================================================
  parameter: {
    foreground: versionMapping.types,
    fontStyle: 'italic',
  },
  'parameter.declaration': {
    foreground: versionMapping.types,
    fontStyle: 'italic',
  },

  // ===========================================================================
  // VARIABLES
  // ===========================================================================
  variable: foregrounds.primary,
  'variable.declaration': foregrounds.primary,
  'variable.readonly': character.headphones.cushion,
  'variable.readonly.defaultLibrary': character.headphones.cushion,
  'variable.static': {
    foreground: '#85ADA5',
    fontStyle: 'underline',
  },
  'variable.static.readonly': {
    foreground: character.headphones.cushion,
    fontStyle: 'underline',
  },
  'variable.defaultLibrary': {
    foreground: teals.classic,
  },

  // ===========================================================================
  // PROPERTIES
  // ===========================================================================
  property: '#85ADA5',
  'property.declaration': '#85ADA5',
  'property.readonly': {
    foreground: character.headphones.cushion,
  },
  'property.static': {
    foreground: '#85ADA5',
    fontStyle: 'underline',
  },
  'property.static.readonly': {
    foreground: character.headphones.cushion,
    fontStyle: 'underline',
  },

  // ===========================================================================
  // MACROS & DECORATORS
  // ===========================================================================
  macro: {
    foreground: accents.amber,
    fontStyle: 'bold',
  },
  decorator: {
    foreground: accents.amber,
    fontStyle: 'italic',
  },
  annotation: {
    foreground: accents.amber,
    fontStyle: 'italic',
  },

  // ===========================================================================
  // LABELS
  // ===========================================================================
  label: character.headphones.cushion,

  // ===========================================================================
  // COMMENTS
  // ===========================================================================
  comment: {
    foreground: '#6E9090',
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: '#7A9A9A',
    fontStyle: '',
  },

  // ===========================================================================
  // LITERALS
  // ===========================================================================
  string: semantic.success,
  number: character.headphones.cushion,
  regexp: hologram.purple,
  operator: `${teals.classic}70`,

  // ===========================================================================
  // KEYWORDS
  // ===========================================================================
  keyword: {
    foreground: teals.classic,
    fontStyle: 'bold',
  },
  'keyword.controlFlow': {
    foreground: teals.classic,
    fontStyle: 'bold',
  },
  'keyword.async': {
    foreground: teals.classic,
    fontStyle: 'bold italic',
  },

  // ===========================================================================
  // SELF / THIS
  // ===========================================================================
  selfKeyword: {
    foreground: character.headphones.cushion,
    fontStyle: 'italic',
  },
  selfParameter: {
    foreground: character.headphones.cushion,
    fontStyle: 'italic',
  },

  // ===========================================================================
  // BUILTIN
  // ===========================================================================
  builtinType: {
    foreground: teals.classic,
    fontStyle: 'bold',
  },
  builtinConstant: character.headphones.cushion,

  // ===========================================================================
  // RUST-SPECIFIC
  // ===========================================================================
  lifetime: {
    foreground: character.headphones.cushion,
    fontStyle: 'italic',
  },
  formatSpecifier: {
    foreground: hologram.cyan,
  },
  escapeSequence: {
    foreground: character.headphones.cushion,
  },

  // ===========================================================================
  // BOOLEAN
  // ===========================================================================
  boolean: character.headphones.cushion,

  // ===========================================================================
  // ERRORS
  // ===========================================================================
  unresolvedReference: {
    foreground: semantic.error,
    fontStyle: 'underline',
  },

  // ===========================================================================
  // PUNCTUATION
  // ===========================================================================
  punctuation: `${teals.classic}70`,

  // ===========================================================================
  // MODIFIERS
  // ===========================================================================
  '*.mutable': {
    fontStyle: 'underline',
  },
  '*.modification': {
    fontStyle: 'underline',
  },
  '*.unsafe': {
    foreground: semantic.error,
  },
  '*.consuming': {
    fontStyle: 'bold',
  },
};

export type SemanticTokenColors = typeof semanticTokenColors;
