/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * THE SEMANTIC TOKEN PHILOSOPHY
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Semantic tokens provide language-aware syntax highlighting, allowing VS Code
 * to understand code structure beyond TextMate grammar rules.
 *
 * Every color traces to Miku's character design, concert aesthetics, or event
 * palettes. Pure Miku passion - no arbitrary colors.
 *
 * APCA CONTRAST STANDARD:
 * All tokens maintain Lc 60+ against #15191D editor background for readability.
 *
 * CHARACTER DESIGN → TOKEN MAPPING:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Origin              │ Hex         │ Lc    │ Token Type                     │
 * ├─────────────────────┼─────────────┼───────┼────────────────────────────────┤
 * │ Hair Shine          │ #5DE4DB     │ ~70   │ Keywords - twin-tails direct   │
 * │ Skin Blush          │ #FFB8C8     │ ~70   │ Methods, Properties - warmth   │
 * │ Negi Stalk          │ #9CCC65     │ ~64   │ Strings, EnumMembers - truth   │
 * │ Negi Bright         │ #69F0AE     │ ~75   │ Numbers - precise values       │
 * │ Primary Foreground  │ #C8DCD9     │ ~82   │ Variables - neutral base       │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * MIKU VOICES & VERSIONS:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Hologram Cyan       │ #4DD0E1     │ ~70   │ Functions - action projection  │
 * │ Append Light        │ #A8EBE6     │ ~80   │ Parameters, Types - airy       │
 * │ Boosted Purple      │ #D4BBFF     │ ~65   │ Namespaces, Decorators, Enums  │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * MIKU EVENTS & CONCERTS:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Magical Mirai Gold  │ #FFD700     │ ~80   │ Constants - immutable royalty  │
 * │ Snow Miku Blue      │ #87CEEB     │ ~70   │ Interfaces - winter clarity    │
 * │ Pale Pink           │ #FCE4EC     │ ~88   │ Types, Structs - soft form     │
 * │ Amber Gold          │ #FFD740     │ ~80   │ Classes - structural celebrate │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * HOLOGRAM & BINARY STATES:
 * ┌─────────────────────┬─────────────┬───────┬────────────────────────────────┐
 * │ Hologram Pink       │ #FF80AB     │ ~55   │ Booleans - binary state        │
 * │ Warm Orange         │ #FFAB40     │ ~70   │ Operators, Macros - velocity   │
 * │ Racing Lime         │ #76FF03     │ ~85   │ Regex - speed patterns         │
 * └─────────────────────┴─────────────┴───────┴────────────────────────────────┘
 *
 * COMMENTS - Snow Miku Muffler Grey (#B0C4DE, Lc ~65):
 * Comments use Snow Miku's scarf grey to distinguish from teal-tinted code.
 *
 * For complete design documentation, see DESIGN_SYSTEM.md
 */

import {
  pinks,
  cyans,
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
  keyword: character.hair.shine, // #5DE4DB
  'keyword.control': character.hair.shine,

  // ===========================================================================
  // FUNCTIONS - Hologram Cyan (Her Digital Holographic Projection)
  // hologram.cyan #4DD0E1 - Lc ~70
  // ===========================================================================
  function: hologram.cyan, // #4DD0E1 - Holographic action projection
  'function.declaration': {
    foreground: hologram.cyan,
  },
  'function.defaultLibrary': character.hair.shine, // #5DE4DB - Hair shine for built-ins (distinct from user function cyan)

  // ===========================================================================
  // METHODS - Skin Blush (Distinct from functions and parameters)
  // character.skin.blush #FFB8C8 - Lc ~70
  // ===========================================================================
  method: character.skin.blush, // #FFB8C8 - Skin blush for methods (distinct from parameter pink)
  'method.declaration': {
    foreground: character.skin.blush,
  },
  'method.static': character.skin.blush,

  // ===========================================================================
  // CLASSES - Magical Mirai Gold (Structural Celebration)
  // accents.amber #FFD740 - Lc ~80
  // ===========================================================================
  class: accents.amber, // #FFD740 - Structural declaration celebration
  'class.declaration': accents.amber,
  'class.defaultLibrary': boosted.purple, // #D4BBFF - Lc 65+

  // ===========================================================================
  // INTERFACES - Snow Miku Winter Blue (Winter Clarity)
  // snowMiku.y2011.winterBlue #87CEEB - Lc ~70
  // ===========================================================================
  interface: snowMiku.y2011.winterBlue, // #87CEEB - Winter clarity (distinct from keyword teal)
  'interface.declaration': snowMiku.y2011.winterBlue,

  // ===========================================================================
  // TYPES - Pale Pink (Distinct from cyan keywords and interfaces)
  // pinks.pale #FCE4EC - Lc ~88
  // ===========================================================================
  type: pinks.pale, // #FCE4EC - Pale pink for types
  'type.declaration': pinks.pale,
  typeParameter: boosted.purple, // #D4BBFF - Purple for generics (distinct from function gold)

  // ===========================================================================
  // STRUCTS - Pinks Pale (Soft Structure)
  // pinks.pale #FCE4EC - Lc ~88
  // ===========================================================================
  struct: pinks.pale, // #FCE4EC - Soft pale pink

  // ===========================================================================
  // ENUMS - Boosted Purple (Distinct from class gold)
  // boosted.purple #D4BBFF - Lc ~65
  // ===========================================================================
  enum: boosted.purple, // #D4BBFF - Purple for enum type declarations
  enumMember: character.negi.stalk, // #9CCC65 - Negi stalk (like strings - literal values)

  // ===========================================================================
  // NAMESPACES & MODULES - Boosted Purple (Organizational Structure)
  // boosted.purple #D4BBFF - Lc ~65 (distinct from types/functions)
  // ===========================================================================
  namespace: boosted.purple, // #D4BBFF - Boosted purple for organizational structure
  module: boosted.purple,

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
  // PARAMETERS - Append Light (Lighter teal, distinct from function cyan)
  // append.light #A8EBE6 - Lc ~80
  // ===========================================================================
  parameter: append.light, // #A8EBE6 - Lighter teal (distinct from function hologram cyan)

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
  // BOOLEANS - Pinks Blush (Binary State, Boosted for Readability)
  // pinks.blush #FFB8D4 - Lc ~70 (boosted from hologram.pink for APCA compliance)
  // ===========================================================================
  boolean: pinks.blush, // #FFB8D4 - Binary state (boosted from #FF80AB)

  // ===========================================================================
  // OPERATORS - Warm Orange (Velocity Logic, distinct from keywords)
  // accents.orange #FFAB40 - Lc ~70
  // ===========================================================================
  operator: accents.orange, // #FFAB40 - Warm orange for operators

  // ===========================================================================
  // COMMENTS - Blue-tinted gray (distinct from teal-tinted variable)
  // ===========================================================================
  comment: {
    foreground: snowMiku.y2011.mufflerGrey, // #B0C4DE - Snow Miku's scarf (Lc ~65, distinct from teal)
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
  // DECORATORS - Boosted Purple (Meta-programming stands apart from properties)
  // boosted.purple #D4BBFF - Lc ~65
  // ===========================================================================
  decorator: boosted.purple, // #D4BBFF - Purple for decorators (distinct from property pink)

  // ===========================================================================
  // MACROS - Accents Orange (Spark Expansion)
  // accents.orange #FFAB40 - Lc ~70
  // ===========================================================================
  macro: {
    foreground: accents.orange, // #FFAB40 - Hibana spark
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
