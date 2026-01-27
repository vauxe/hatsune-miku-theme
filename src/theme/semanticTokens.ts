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
type SemanticTokenSetting =
  | string
  | {
      foreground?: string;
      fontStyle?: string;
    };
export const semanticTokenColors: Record<string, SemanticTokenSetting> = {
  keyword: character.hair.shine,
  function: hologram.cyan,
  'function.declaration': {
    foreground: hologram.cyan,
  },
  'function.defaultLibrary': character.hair.shine,
  method: character.skin.blush,
  'method.declaration': {
    foreground: character.skin.blush,
  },
  'method.static': character.skin.blush,
  class: accents.amber,
  'class.declaration': accents.amber,
  'class.defaultLibrary': boosted.purple,
  interface: snowMiku.y2011.winterBlue,
  'interface.declaration': snowMiku.y2011.winterBlue,
  type: pinks.pale,
  'type.declaration': pinks.pale,
  typeParameter: boosted.purple,
  struct: pinks.pale,
  enum: boosted.purple,
  enumMember: character.negi.stalk,
  namespace: boosted.purple,
  variable: foregrounds.primary,
  'variable.declaration': foregrounds.primary,
  'variable.readonly': magicalMirai.y2017.celebrationGold,
  'variable.defaultLibrary': hologram.cyan,
  property: character.skin.blush,
  'property.declaration': character.skin.blush,
  parameter: append.light,
  string: character.negi.stalk,
  regexp: racingMiku.y2014.limeAccent,
  number: character.negi.bright,
  operator: accents.orange,
  comment: {
    foreground: snowMiku.y2011.mufflerGrey,
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
