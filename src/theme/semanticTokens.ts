/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Pure Miku Immersion: Every color traces to Miku's world
 * Using existing palette colors for both immersion and Lc 60+ readability
 *
 * Character Design (Lc 60+):
 * - Hair Shine (#5DE4DB, Lc ~70) → Keywords, Methods - twin-tails catching light
 * - Hair Tip (#7FEDE5, Lc ~75) → Namespaces - bright ends organizing flow
 * - Hair Highlight (#B2EBE7, Lc ~80) → Doc Comments - illuminated knowledge
 * - Skin Blush (#FFB8C8, Lc ~70) → Properties - warm attributes
 * - Negi Stalk (#9CCC65, Lc ~64) → Strings, EnumMembers - data truth
 * - Negi Bright (#69F0AE, Lc ~75) → Numbers - precise values
 *
 * Miku Voices & Versions:
 * - NT Modern (#3ED1C8, Lc ~65) → Functions - modern execution
 * - Append Light (#A8EBE6, Lc ~80) → Types - airy structure
 *
 * Miku Events & Concerts:
 * - Magical Mirai Gold (#FFD700, Lc ~80) → Enums/Constants - celebration
 * - Snow Miku Blue (#87CEEB, Lc ~70) → Interfaces - winter clarity
 * - Miku Expo Cyan (#00E5CC, Lc ~70) → Operators - velocity
 * - Racing Lime (#76FF03, Lc ~85) → Regex - neon pattern
 *
 * Miku Hologram & Stage:
 * - Hologram Cyan (#4DD0E1, Lc ~70) → Classes - structural projection
 * - Hologram Pink (#FF80AB) → Booleans - binary state
 *
 * Iconic PVs:
 * - Senbonzakura (#FFB7C5, Lc ~70) → Decorators - cherry adornment
 */

import {
  pinks,
  greys,
  foregrounds,
  accents,
  hologram,
  character,
  append,
  boosted,
  versions,
  snowMiku,
  magicalMirai,
  mikuExpo,
  iconicPVs,
  racingMiku,
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
  // KEYWORDS - Hair Shine (Twin-tails Catching Stage Lights)
  // character.hair.shine #5DE4DB - Lc ~70
  // ===========================================================================
  keyword: {
    foreground: character.hair.shine, // #5DE4DB
    fontStyle: 'bold',
  },
  'keyword.control': {
    foreground: character.hair.shine,
    fontStyle: 'bold',
  },

  // ===========================================================================
  // FUNCTIONS - NT Modern Voice (2020)
  // versions.nt #3ED1C8 - Lc ~65
  // ===========================================================================
  function: versions.nt, // #3ED1C8 - NT Modern
  'function.declaration': {
    foreground: versions.nt,
    fontStyle: 'bold',
  },
  'function.defaultLibrary': pinks.blush, // #FFB8D4 - Soft helper (Lc ~70)

  // ===========================================================================
  // METHODS - Hair Shine (Active Expression)
  // character.eyes.bright #5DE4DB - Lc ~70
  // ===========================================================================
  method: character.eyes.bright, // #5DE4DB - Hair shine
  'method.declaration': {
    foreground: character.eyes.bright,
    fontStyle: 'bold',
  },
  'method.static': {
    foreground: character.eyes.bright,
    fontStyle: 'underline',
  },

  // ===========================================================================
  // CLASSES - Hologram Cyan (Structural Projection)
  // hologram.cyan #4DD0E1 - Lc ~70, distinct from pink properties
  // ===========================================================================
  class: hologram.cyan, // #4DD0E1 - Holographic structure
  'class.declaration': {
    foreground: hologram.cyan,
    fontStyle: 'bold',
  },
  'class.defaultLibrary': boosted.purple, // #D4BBFF - Lc 65+

  // ===========================================================================
  // INTERFACES - Snow Miku Winter Sky
  // snowMiku.y2011.winterBlue #87CEEB - Lc ~70
  // ===========================================================================
  interface: snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku sky
  'interface.declaration': {
    foreground: snowMiku.y2011.winterBlue,
    fontStyle: 'bold',
  },

  // ===========================================================================
  // TYPES - Append Light (Airy Structure)
  // append.light #A8EBE6 - Lc ~80
  // ===========================================================================
  type: append.light, // #A8EBE6 - Append Light for types
  'type.declaration': {
    foreground: append.light,
    fontStyle: 'bold',
  },
  typeParameter: {
    foreground: accents.gold, // #FFCA28 - Miku concert gold
    fontStyle: 'italic',
  },

  // ===========================================================================
  // STRUCTS - Pinks Pale (Soft Structure)
  // pinks.pale #FCE4EC - Lc ~88
  // ===========================================================================
  struct: pinks.pale, // #FCE4EC - Soft pale pink

  // ===========================================================================
  // ENUMS - Magical Mirai Gold (Celebration)
  // magicalMirai.y2017.celebrationGold #FFD700 - Lc ~80
  // ===========================================================================
  enum: magicalMirai.y2017.celebrationGold, // #FFD700 - Magical Mirai
  enumMember: character.negi.stalk, // #9CCC65 - Negi stalk (like strings - literal values)

  // ===========================================================================
  // NAMESPACES & MODULES - Hair Tip (Organized Flow)
  // character.hair.tip #7FEDE5 - Lc ~75
  // ===========================================================================
  namespace: character.hair.tip, // #7FEDE5 - Hair Tip
  module: character.hair.tip,

  // ===========================================================================
  // VARIABLES - Neutral Foreground
  // foregrounds.primary #C8DCD9 - Lc ~82
  // ===========================================================================
  variable: foregrounds.primary, // #C8DCD9 - Neutral base
  'variable.declaration': foregrounds.primary,
  'variable.readonly': magicalMirai.y2017.celebrationGold, // #FFD700
  'variable.constant': magicalMirai.y2017.celebrationGold,
  'variable.defaultLibrary': hologram.cyan, // #4DD0E1

  // ===========================================================================
  // PROPERTIES - Skin Blush (Warm Attributes)
  // character.skin.blush #FFB8C8 - Lc ~70
  // ===========================================================================
  property: character.skin.blush, // #FFB8C8 - Warm attributes
  'property.declaration': character.skin.blush,

  // ===========================================================================
  // PARAMETERS - Pinks Blush (Bound Input)
  // pinks.blush #FFB8D4 - Lc ~70
  // ===========================================================================
  parameter: {
    foreground: pinks.blush, // #FFB8D4 - Tied input
    fontStyle: 'italic',
  },

  // ===========================================================================
  // STRINGS - Negi Stalk (Data Truth)
  // character.negi.stalk #9CCC65 - Lc ~64
  // ===========================================================================
  string: character.negi.stalk, // #9CCC65 - Negi green truth

  // ===========================================================================
  // REGEX - Racing Lime (Neon Pattern)
  // racingMiku.y2014.limeAccent #76FF03 - Lc ~85
  // ===========================================================================
  'string.regexp': racingMiku.y2014.limeAccent, // #76FF03 - Racing neon

  // ===========================================================================
  // NUMBERS - Negi Bright (Precise Values)
  // character.negi.bright #69F0AE - Lc ~75
  // ===========================================================================
  number: character.negi.bright, // #69F0AE - Numeric clarity

  // ===========================================================================
  // BOOLEANS - Hologram Pink (Binary State)
  // hologram.pink #FF80AB - Lc ~55 (acceptable for keywords)
  // ===========================================================================
  boolean: hologram.pink, // #FF80AB - Binary state

  // ===========================================================================
  // OPERATORS - Miku Expo Cyan (Velocity Logic)
  // mikuExpo.y2025.asiaCyan #00E5CC - Lc ~70
  // ===========================================================================
  operator: mikuExpo.y2025.asiaCyan, // #00E5CC - Racing velocity

  // ===========================================================================
  // COMMENTS - Platinum (Quiet Guidance)
  // greys.platinum #B0BEC5 - Lc ~60
  // ===========================================================================
  comment: {
    foreground: greys.platinum, // #B0BEC5 - Quiet guidance
    fontStyle: 'italic',
  },

  // ===========================================================================
  // DOCUMENTATION COMMENTS - Append Light (Illuminated Knowledge)
  // append.light #A8EBE6 - Lc ~80
  // ===========================================================================
  'comment.documentation': {
    foreground: append.light, // #A8EBE6 - Bright documentation
    fontStyle: 'italic',
  },

  // ===========================================================================
  // DECORATORS - Senbonzakura Cherry (Adornment)
  // iconicPVs.senbonzakura.sakuraPink #FFB7C5 - Lc ~70
  // ===========================================================================
  decorator: {
    foreground: iconicPVs.senbonzakura.sakuraPink, // #FFB7C5 - Senbonzakura
    fontStyle: 'italic',
  },

  // ===========================================================================
  // MACROS - Accents Orange (Spark Expansion)
  // accents.orange #FFAB40 - Lc ~70
  // ===========================================================================
  macro: {
    foreground: accents.orange, // #FFAB40 - Hibana spark
    fontStyle: 'bold',
  },

  // ===========================================================================
  // LABELS - Pinks Blush (Marking)
  // pinks.blush #FFB8D4 - Lc ~70
  // ===========================================================================
  label: pinks.blush, // #FFB8D4 - Soft marking

  // ===========================================================================
  // EVENTS - Accents Gold (Celebration Event)
  // accents.gold #FFCA28 - Lc ~80
  // ===========================================================================
  event: accents.gold, // #FFCA28 - Event celebration
};

export type SemanticTokenColors = typeof semanticTokenColors;
