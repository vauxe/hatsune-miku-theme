import { character } from '../palette';

const pinks = { sekai: '#E05096', blush: '#FFB8C8', soft: '#FF8EB8', hot: '#FF4081', pale: '#FFD4E5' };
const greys = { slate: '#37474F', steel: '#455A64', silver: '#90A4AE', platinum: '#CFD8DC' };
const foregrounds = { primary: '#E8F0F2', secondary: '#B0BEC5', comment: '#78909C', bright: '#FFFFFF' };
const accents = { amber: '#FFB74D', gold: '#FFD54F', orange: '#FF9800', coral: '#FF7043' };
const hologram = { cyan: '#00E5FF', purple: '#B388FF' };
const append = { light: '#B0E0DB', vivid: '#00BCD4' };
const boosted = { purple: '#B388FF', coral: '#FF7043', coralGlow: '#FF6B6B' };
const racingMiku = { team: { gsmTeal: '#39C5BB' }, y2014: { limeAccent: '#AEEA00' }, y2016: { accentPink: '#FF4081' }, y2017: { highlightCyan: '#00E5FF', gradientPurple: '#B388FF' }, y2018: { holoBlue: '#40C4FF' } };
type SemanticTokenSetting =
  | string
  | {
      foreground?: string;
      fontStyle?: string;
    };
export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  keyword: character.hair.highlight,
  function: hologram.cyan,
  'function.declaration': {
    foreground: hologram.cyan,
  },
  'function.defaultLibrary': character.hair.highlight,
  method: character.skin.blush,
  'method.declaration': {
    foreground: character.skin.blush,
  },
  'method.static': character.skin.blush,
  class: accents.amber,
  'class.declaration': accents.amber,
  'class.defaultLibrary': boosted.purple,
  interface: hologram.cyan,
  'interface.declaration': hologram.cyan,
  type: pinks.pale,
  'type.declaration': pinks.pale,
  typeParameter: boosted.purple,
  struct: pinks.pale,
  enum: boosted.purple,
  enumMember: character.negi.stalk,
  namespace: boosted.purple,
  variable: foregrounds.primary,
  'variable.declaration': foregrounds.primary,
  'variable.readonly': accents.gold,
  'variable.defaultLibrary': hologram.cyan,
  property: character.skin.blush,
  'property.declaration': character.skin.blush,
  parameter: append.light,
  string: character.negi.stalk,
  regexp: racingMiku.y2014.limeAccent,
  number: character.negi.bright,
  operator: accents.orange,
  comment: {
    foreground: greys.silver,
    fontStyle: 'italic',
  },
  'comment.documentation': {
    foreground: append.light,
    fontStyle: 'italic',
  },
  decorator: boosted.purple,
  macro: {
    foreground: accents.orange,
  },
  label: pinks.blush,
  event: accents.gold,
};
export type SemanticTokenColors = typeof semanticTokenColors;
