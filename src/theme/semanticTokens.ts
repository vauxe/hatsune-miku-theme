/**
 * Semantic Token Colors - LSP-based Syntax Highlighting
 *
 * Design Philosophy: "Digital Diva Ergonomics"
 * - Consistent with tokenColors.ts mapping
 * - 10 Core semantic categories with maximally distinguishable colors
 * - All colors imported from palette - no hardcoded hex values
 */

// Core character design
import { character } from '../palette/core';

// Voicebank variants
import { mikuNT, mikuAppend } from '../palette/voicebanks';

// Project SEKAI units - primary token colors
import {
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette/games/projectSekai';

// Project DIVA modules - accent and special tokens
import {
  angel,
  ghost,
  miCrystal,
  factoryTyrant,
} from '../palette/games/projectDiva';

// Snow Miku - seasonal colors
import { snowMiku } from '../palette/events/snowMiku';

// Derivatives
import { sakuraMiku } from '../palette/derivatives';

type SemanticTokenSetting =
  | string
  | {
      foreground?: string;
      fontStyle?: string;
    };

export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  // ==========================================================================
  // KEYWORDS - Character Hair (THE Miku color - teal)
  // ==========================================================================
  keyword: character.hair.base, // #39C5BB
  'keyword.controlFlow': character.hair.base,

  // ==========================================================================
  // FUNCTIONS - Leo/need (Royal Blue)
  // ==========================================================================
  function: leoNeed.unitColor, // #4455DD
  'function.declaration': {
    foreground: leoNeed.unitColor,
  },
  'function.defaultLibrary': leoNeed.unitColor,

  // ==========================================================================
  // METHODS - Wonderlands×Showtime (Pop Orange)
  // ==========================================================================
  method: wonderlandsShowtime.unitColor, // #FF9900
  'method.declaration': {
    foreground: wonderlandsShowtime.unitColor,
  },
  'method.static': wonderlandsShowtime.unitColor,

  // ==========================================================================
  // CLASSES - Vivid BAD SQUAD (Vivid Pink)
  // ==========================================================================
  class: vividBadSquad.unitColor, // #EE1166
  'class.declaration': vividBadSquad.unitColor,
  'class.defaultLibrary': vividBadSquad.unitColor,

  // ==========================================================================
  // INTERFACES - Angel (Light Blue)
  // ==========================================================================
  interface: angel.accessories.shoes, // #87CEEB
  'interface.declaration': angel.accessories.shoes,

  // ==========================================================================
  // TYPES - Angel (Light Blue)
  // ==========================================================================
  type: angel.accessories.shoes, // #87CEEB
  'type.declaration': angel.accessories.shoes,
  typeParameter: snowMiku.y2022.eyes, // #F06292 (Coral Pink)

  // ==========================================================================
  // STRUCTS - Vivid BAD SQUAD (Vivid Pink)
  // ==========================================================================
  struct: vividBadSquad.unitColor, // #EE1166

  // ==========================================================================
  // ENUMS - Nightcord (Dark Purple)
  // ==========================================================================
  enum: nightcord.unitColor, // #884499
  enumMember: nightcord.unitColor,

  // ==========================================================================
  // NAMESPACES - Character Hair Highlight
  // ==========================================================================
  namespace: character.hair.highlight, // #5DE4DB

  // ==========================================================================
  // VARIABLES - MORE MORE JUMP! (Bright Green)
  // ==========================================================================
  variable: moreMoreJump.unitColor, // #88DD44
  'variable.declaration': moreMoreJump.unitColor,
  'variable.readonly': moreMoreJump.unitColor,
  'variable.defaultLibrary': moreMoreJump.unitColor,

  // ==========================================================================
  // PROPERTIES - MORE MORE JUMP! (Bright Green)
  // ==========================================================================
  property: moreMoreJump.unitColor, // #88DD44
  'property.declaration': moreMoreJump.unitColor,
  'property.readonly': moreMoreJump.unitColor,

  // ==========================================================================
  // PARAMETERS - Leo/need Hair Highlight (Vibrant Pink)
  // ==========================================================================
  parameter: leoNeed.hair.highlight, // #FF80AB

  // ==========================================================================
  // STRINGS - Sakura Miku (Cherry Blossom Pink)
  // ==========================================================================
  string: sakuraMiku.hair.base, // #FFB7C5

  // ==========================================================================
  // NUMBERS - Snow Miku 2017 Constellation (Gold)
  // ==========================================================================
  number: snowMiku.y2017.outfit.constellation, // #FFF59D

  // ==========================================================================
  // REGEX - Ghost (Purple)
  // ==========================================================================
  regexp: ghost.hair.base, // #9370DB

  // ==========================================================================
  // OPERATORS - Factory Tyrant (Silver Cogwheels)
  // ==========================================================================
  operator: factoryTyrant.accessories.cogwheels, // #C0C0C0

  // ==========================================================================
  // COMMENTS - Nightcord/NT (Subdued Gray)
  // ==========================================================================
  comment: {
    foreground: mikuNT.hair.shadow, // #5C5A60
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: mikuNT.hair.shadow,
    fontStyle: 'italic',
  },

  // ==========================================================================
  // DECORATORS - Character Headphones Cushion (Magenta)
  // ==========================================================================
  decorator: character.headphones.cushion, // #E05096

  // ==========================================================================
  // MACROS - MiCrystal (Crystal Cyan)
  // ==========================================================================
  macro: {
    foreground: miCrystal.outfit.topFrills, // #E0FFFF
  },

  // ==========================================================================
  // LABELS - Wonderlands×Showtime (Pop Orange)
  // ==========================================================================
  label: wonderlandsShowtime.unitColor, // #FF9900

  // ==========================================================================
  // EVENTS - Leo/need (Royal Blue)
  // ==========================================================================
  event: leoNeed.unitColor, // #4455DD

  // ==========================================================================
  // MODIFIERS - Used for readonly, async, etc.
  // ==========================================================================
  'variable.readonly.defaultLibrary': character.marks.tattoo, // #E60033
  'property.readonly.defaultLibrary': character.marks.tattoo,
};

export type SemanticTokenColors = typeof semanticTokenColors;
