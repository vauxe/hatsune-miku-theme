/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Semantic tokens provide language-aware syntax highlighting.
 * All tokens maintain Lc 60+ against #15191D editor background.
 */

import {
  character,
  mikuNT,
  mikuAppend,
  snowMiku,
  ghost,
  angel,
  leoNeed,
  nightcord,
  wonderlandsShowtime,
} from '../palette';

// Helper type for semantic token settings
type SemanticTokenSetting =
  | string
  | {
      foreground?: string;
      fontStyle?: string;
    };

export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  // Keywords
  keyword: character.hair.highlight,
  'keyword.control': character.hair.highlight,

  // Functions
  function: wonderlandsShowtime.hair.highlight,
  'function.declaration': {
    foreground: wonderlandsShowtime.hair.highlight,
  },
  'function.defaultLibrary': character.hair.highlight,

  // Methods
  method: character.skin.blush,
  'method.declaration': {
    foreground: character.skin.blush,
  },
  'method.static': character.skin.blush,

  // Classes
  class: snowMiku.y2017.accessories.stars,
  'class.declaration': snowMiku.y2017.accessories.stars,
  'class.defaultLibrary': nightcord.unitColor,

  // Interfaces
  interface: angel.accessories.shoes,
  'interface.declaration': angel.accessories.shoes,

  // Types
  type: character.hair.tip,
  'type.declaration': character.hair.tip,
  typeParameter: nightcord.unitColor,

  // Structs
  struct: character.hair.tip,

  // Enums
  enum: nightcord.unitColor,
  enumMember: character.negi.stalk,

  // Namespaces & Modules
  namespace: ghost.hair.base,
  module: ghost.hair.base,

  // Variables
  variable: snowMiku.y2010.hair,
  'variable.declaration': snowMiku.y2010.hair,
  'variable.readonly': snowMiku.y2017.accessories.stars,
  'variable.constant': snowMiku.y2017.accessories.stars,
  'variable.defaultLibrary': wonderlandsShowtime.hair.highlight,

  // Properties
  property: character.skin.blush,
  'property.declaration': character.skin.blush,

  // Parameters
  parameter: character.hair.tip,

  // Strings
  string: character.negi.stalk,

  // Regex
  'string.regexp': character.negi.bright,

  // Numbers
  number: character.negi.bright,

  // Booleans
  boolean: leoNeed.hair.highlight,

  // Operators
  operator: wonderlandsShowtime.unitColor,

  // Comments
  comment: {
    foreground: mikuNT.hair.shadow,
    fontStyle: 'italic',
  },

  // Documentation Comments
  'comment.documentation': {
    foreground: character.hair.tip,
    fontStyle: 'italic',
  },

  // Decorators
  decorator: ghost.hair.base,

  // Macros
  macro: {
    foreground: wonderlandsShowtime.unitColor,
  },

  // Labels
  label: leoNeed.hair.highlight,

  // Events
  event: snowMiku.y2017.accessories.stars,
};

export type SemanticTokenColors = typeof semanticTokenColors;
