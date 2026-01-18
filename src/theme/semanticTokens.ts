/**
 * Hatsune Miku Theme - Semantic Token Colors
 *
 * "Extreme Spectrum" - Miku Universe
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
  // FUNCTIONS & METHODS - Voice & Performance
  // ===========================================================================
  function: teals.neon, // #5DE4DB - User functions
  'function.declaration': {
    foreground: teals.neon,
    fontStyle: 'bold',
  },
  'function.defaultLibrary': hologram.purple, // #B388FF - Library functions
  method: teals.tint, // #B2EBE7 - Methods
  'method.declaration': {
    foreground: teals.tint,
    fontStyle: 'bold',
  },
  'method.static': {
    foreground: teals.tint,
    fontStyle: 'underline',
  },

  // ===========================================================================
  // CLASSES & TYPES - Stage Structure
  // ===========================================================================
  class: snowMiku.y2011.winterBlue, // #87CEEB - User Classes
  'class.declaration': {
    foreground: snowMiku.y2011.winterBlue,
    fontStyle: 'bold',
  },
  'class.defaultLibrary': hologram.purple, // #B388FF - Lib Classes
  struct: pinks.blush, // #FFB8D4 - Structs
  interface: snowMiku.y2021.glowCyan, // #00E5FF - Interfaces
  'interface.declaration': {
    foreground: snowMiku.y2021.glowCyan,
    fontStyle: 'italic',
  },
  type: projectSekai.leoneedMembers.ichika, // #33AAEE - Types
  'type.declaration': {
    foreground: projectSekai.leoneedMembers.ichika,
    fontStyle: 'bold',
  },
  typeParameter: {
    foreground: projectSekai.leoneedMembers.saki, // #FFDD44 - Generics
    fontStyle: 'italic',
  },
  enum: accents.gold, // #FFCA28 - Enums
  enumMember: accents.orange, // #FFAB40 - Enum Members

  // ===========================================================================
  // VARIABLES - Costume & Props
  // ===========================================================================
  variable: foregrounds.primary,
  'variable.declaration': foregrounds.primary,
  'variable.readonly': foregrounds.primary,
  'variable.constant': pinks.blush, // #FFB8D4 - Constants
  'variable.defaultLibrary': hologram.cyan, // #4DD0E1 - Lib Vars
  property: snowMiku.y2011.mittens, // #ADD8E6 - Properties
  'property.declaration': snowMiku.y2011.mittens,
  parameter: {
    foreground: pinks.blush, // #FFB8D4 - Parameters
    fontStyle: 'italic',
  },

  // ===========================================================================
  // KEYWORDS & LITERALS
  // ===========================================================================
  keyword: {
    foreground: teals.classic, // #39C5BB - Main Miku Color
    fontStyle: 'bold',
  },
  string: semantic.success, // #9CCC65
  number: racingMiku.y2010.raceOrange, // #FF6D00
  boolean: magicalMirai.y2014.vibrantPink, // #FF4081

  // ===========================================================================
  // MISC
  // ===========================================================================
  comment: {
    foreground: greys.platinum,
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
