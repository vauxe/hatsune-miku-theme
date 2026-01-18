/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * Character-Semantic Mapping: Every syntax element maps to Miku's design
 * Layer 1: Character Design → Backgrounds & Core Syntax
 * - Eyes → Keywords (iris), Functions (bright)
 * - Class → Snow Miku Winter Blue (#87CEEB) - Distinct hue for token distinction
 * - Methods → Soft pink (#FF80AB) - Distinct from parameter pink
 * - Negi → Strings, Numbers
 * - Skin → Properties
 */

import {
  teals,
  pinks,
  cyans,
  greys,
  foregrounds,
  accents,
  semantic,
  hologram,
  versionMapping,
  character,
  append,
  boosted,
  projectSekai,
  racingMiku,
  snowMiku,
  mikuNT,
  magicalMirai,
  mikuExpo,
  projectDiva,
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
  // FUNCTIONS & METHODS - Eyes = Active expression
  // ===========================================================================
  function: character.eyes.bright, // #5DE4DB - Active expression
  'function.declaration': {
    foreground: character.eyes.bright,
    fontStyle: 'bold',
  },
  'function.defaultLibrary': boosted.purple, // Boosted purple for Lc 65+
  method: pinks.soft, // #FF80AB - Soft pink (distinct from parameter #FFB8D4)
  'method.declaration': {
    foreground: pinks.soft,
    fontStyle: 'bold',
  },
  'method.static': {
    foreground: pinks.soft,
    fontStyle: 'underline',
  },

  // ===========================================================================
  // CLASSES & TYPES - Distinct hue families for token distinction
  // ===========================================================================
  class: snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku sky blue (distinct from teal)
  'class.declaration': {
    foreground: snowMiku.y2011.winterBlue,
    fontStyle: 'bold',
  },
  'class.defaultLibrary': boosted.purple, // Boosted purple for Lc 65+
  struct: pinks.blush, // #FFB8D4 - Structs
  interface: snowMiku.y2021.glowCyan, // #00E5FF - Interfaces
  'interface.declaration': {
    foreground: snowMiku.y2021.glowCyan,
    fontStyle: 'bold',
  },
  type: append.light, // #A8EBE6 - Append Light for types (Lc 80+)
  'type.declaration': {
    foreground: append.light,
    fontStyle: 'bold',
  },
  typeParameter: {
    foreground: projectSekai.leoneedMembers.saki, // #FFDD44 - Generics
    fontStyle: 'italic',
  },
  enum: accents.gold, // #FFCA28 - Enums
  enumMember: accents.orange, // #FFAB40 - Enum Members

  // ===========================================================================
  // VARIABLES - Skin = Neutral/Natural
  // ===========================================================================
  variable: foregrounds.primary, // #C8DCD9 - Neutral base
  'variable.declaration': foregrounds.primary,
  'variable.readonly': foregrounds.primary,
  'variable.constant': pinks.blush, // #FFB8D4 - Constants
  'variable.defaultLibrary': hologram.cyan, // #4DD0E1 - Lib Vars
  property: character.skin.blush, // #FFB8C8 - Warm attributes
  'property.declaration': character.skin.blush,
  parameter: {
    foreground: pinks.blush, // #FFB8D4 - Parameters
    fontStyle: 'italic',
  },

  // ===========================================================================
  // KEYWORDS - Eyes Iris = Soul/Identity of code
  // ===========================================================================
  keyword: {
    foreground: character.eyes.iris, // #39C5BB - Main Miku identity
    fontStyle: 'bold',
  },
  // Negi = Miku's signature prop → Strings & Numbers
  string: character.negi.stalk, // #9CCC65
  number: character.negi.bright, // #69F0AE - Bright data
  boolean: boosted.pink, // Boosted light pink for Lc 60+

  // ===========================================================================
  // MISC - Supporting design elements
  // ===========================================================================
  comment: {
    foreground: greys.platinum, // #B0BEC5 - High contrast comments (Lc 60+)
    fontStyle: 'italic',
  },
  decorator: {
    foreground: snowMiku.y2011.winterBlue, // #87CEEB
    fontStyle: 'italic',
  },
  macro: {
    foreground: accents.amber,
    fontStyle: 'bold',
  },
  label: accents.amber,
  operator: cyans.electric, // #00FFFF
};

export type SemanticTokenColors = typeof semanticTokenColors;
