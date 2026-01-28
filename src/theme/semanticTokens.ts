import { character } from '../palette';

type SemanticTokenSetting =
  | string
  | {
    foreground?: string;
    fontStyle?: string;
  };
export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  // Keywords - Virtual Singer (Cyan/Teal)
  keyword: character.hair.base,

  // Functions - Leo/need (School band - Royal blue/Pink)
  function: character.hair.base,
  'function.declaration': {
    foreground: character.hair.base,
  },
  'function.defaultLibrary': character.hair.base,

  // Methods - MORE MORE JUMP! (Idol green/pink)
  method: character.hair.base,
  'method.declaration': {
    foreground: character.hair.base,
  },
  'method.static': character.hair.base,

  // Classes - Vivid BAD SQUAD (Street red/cyan)
  class: character.hair.base,
  'class.declaration': character.hair.base,
  'class.defaultLibrary': character.hair.base,

  // Interfaces - Wonderlands×Showtime (Theater orange/cyan)
  interface: character.hair.base,
  'interface.declaration': character.hair.base,

  // Types - Digital Stars 2024 (Glitch purple/cyan)
  type: character.hair.base,
  'type.declaration': character.hair.base,
  typeParameter: character.hair.base,
  struct: character.hair.base,

  // Enums - 25-ji Nightcord (Purple dark)
  enum: character.hair.base,
  enumMember: character.hair.base,

  // Namespaces - Virtual Singer
  namespace: character.hair.base,

  // Variables - Default foreground
  variable: character.hair.base,
  'variable.declaration': character.hair.base,
  'variable.readonly': character.hair.base,
  'variable.defaultLibrary': character.hair.base,

  // Properties - Wonderlands×Showtime (Theater cyan)
  property: character.hair.base,
  'property.declaration': character.hair.base,

  // Parameters - Leo/need (Pink highlight)
  parameter: character.hair.base,

  // Strings/Numbers - Digital Stars 2025 (Retro pixel)
  string: character.hair.base,
  regexp: character.hair.base,
  number: character.hair.base,

  // Operators - Digital Stars 2022
  operator: character.hair.base,

  // Comments
  comment: {
    foreground: character.hair.base,
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: character.hair.base,
    fontStyle: 'italic',
  },

  // Decorators - MORE MORE JUMP! (Idol pink)
  decorator: character.hair.base,

  // Macros - Vivid BAD SQUAD (Street cyan)
  macro: {
    foreground: character.hair.base,
  },

  // Labels - Wonderlands×Showtime (Theater orange)
  label: character.hair.base,

  // Events - Leo/need (Royal blue)
  event: character.hair.base,
};
export type SemanticTokenColors = typeof semanticTokenColors;
