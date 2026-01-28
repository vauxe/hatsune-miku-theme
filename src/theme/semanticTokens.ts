// Project SEKAI Units for Semantic Highlighting
import { character, digitalStars, snowMiku } from '../palette';
import {
  projectSekai,
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette/games';

// Digital Stars for core semantic tokens
const ds2021 = digitalStars.y2021; // Pastel starry
const ds2022 = digitalStars.y2022; // Street rock
const ds2023 = digitalStars.y2023; // Neon monster
const ds2024 = digitalStars.y2024; // Cyber sporty
const ds2025 = digitalStars.y2025; // Retro game

// Map to existing palette colors
const foregrounds = { primary: character.skin.highlight, secondary: character.skin.shadow, comment: character.top.shadow, bright: character.skin.highlight };
const greys = { slate: character.top.main, steel: character.top.shadow, silver: character.skirt.accessory, platinum: character.skin.highlight };
const append = { light: character.hair.highlight, vivid: character.hair.base };


type SemanticTokenSetting =
  | string
  | {
    foreground?: string;
    fontStyle?: string;
  };
export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  // Keywords - Virtual Singer (Cyan/Teal)
  keyword: virtualSinger.hair.base, // Virtual Singer cyan #33CCBB

  // Functions - Leo/need (School band - Royal blue/Pink)
  function: leoNeed.unitColor, // Leo/need royal blue #4455DD
  'function.declaration': {
    foreground: leoNeed.unitColor,
  },
  'function.defaultLibrary': leoNeed.hair.highlight, // Pink highlight #FF80AB

  // Methods - MORE MORE JUMP! (Idol green/pink)
  method: moreMoreJump.unitColor, // MMJ green #88DD44
  'method.declaration': {
    foreground: moreMoreJump.unitColor,
  },
  'method.static': moreMoreJump.outfit.neckline, // Pink neckline #FF80AB

  // Classes - Vivid BAD SQUAD (Street red/cyan)
  class: vividBadSquad.unitColor, // VBS red #EE1166
  'class.declaration': vividBadSquad.unitColor,
  'class.defaultLibrary': vividBadSquad.hair.base, // Cyan hair #5DE4DB

  // Interfaces - Wonderlands×Showtime (Theater orange/cyan)
  interface: wonderlandsShowtime.unitColor, // WxS orange #FF9900
  'interface.declaration': wonderlandsShowtime.unitColor,

  // Types - Digital Stars 2024 (Glitch purple/cyan)
  type: ds2024.outfit.glitchPurple,
  'type.declaration': ds2024.outfit.glitchPurple,
  typeParameter: ds2024.outfit.glitchCyan,
  struct: ds2021.outfit.tie, // Pastel pink

  // Enums - 25-ji Nightcord (Purple dark)
  enum: nightcord.unitColor, // Nightcord purple #884499
  enumMember: nightcord.outfit.blouse, // White blouse #FFFFFF

  // Namespaces - Virtual Singer
  namespace: virtualSinger.outfit.trim, // Teal trim #33CCBB

  // Variables - Default foreground
  variable: foregrounds.primary,
  'variable.declaration': foregrounds.primary,
  'variable.readonly': nightcord.unitColor, // Nightcord purple #884499 for readonly
  'variable.defaultLibrary': virtualSinger.hair.highlight, // Bright cyan #5DE4DB

  // Properties - Wonderlands×Showtime (Theater cyan)
  property: wonderlandsShowtime.hair.base, // Cyan hair #00BCD4
  'property.declaration': wonderlandsShowtime.hair.base,

  // Parameters - Leo/need (Pink highlight)
  parameter: leoNeed.hair.highlight, // Pink #FF80AB

  // Strings/Numbers - Digital Stars 2025 (Retro pixel)
  string: ds2025.outfit.pixelGreen, // Retro green #5CE65C
  regexp: snowMiku.y2015.outfit.leafTrim, // Fresh green #8BC34A
  number: ds2025.outfit.jacket, // Golden orange #FFB833

  // Operators - Digital Stars 2022
  operator: ds2022.outfit.flag, // Raspberry red #C75069

  // Comments
  comment: {
    foreground: greys.silver,
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: append.light,
    fontStyle: 'italic',
  },

  // Decorators - MORE MORE JUMP! (Idol pink)
  decorator: moreMoreJump.outfit.neckline, // Pink #FF80AB

  // Macros - Vivid BAD SQUAD (Street cyan)
  macro: {
    foreground: vividBadSquad.hair.highlight, // Bright cyan #7FEDE5
  },

  // Labels - Wonderlands×Showtime (Theater orange)
  label: wonderlandsShowtime.unitColor, // Orange #FF9900

  // Events - Leo/need (Royal blue)
  event: leoNeed.unitColor, // Royal blue #4455DD
};
export type SemanticTokenColors = typeof semanticTokenColors;
