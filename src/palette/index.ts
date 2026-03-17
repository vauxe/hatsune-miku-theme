/**
 * Hatsune Miku Theme - Character Design Palette
 *
 * Official Miku character designs with colors extracted from her actual appearance
 * (hair, eyes, outfit, accessories) - organized by character/variant.
 *
 * ACTIVE vs CATALOG: Only a few exports are consumed by the token/theme layer:
 *   - character (core.ts) — dark/light character primitives
 *   - magicalMirai, digitalStars, snowMiku — decorative tokens (charts, SCM, diff)
 *   - virtualSinger, leoNeed, moreMoreJump, vividBadSquad, wonderlandsShowtime, nightcord — SCM graph
 *
 * Everything else (voicebanks, sakuraMiku, racingMiku, mikuExpo, Project DIVA costumes,
 * derivatives, etc.) is a documentary color catalog for reference and future variants.
 * The full palette data lives in sub-modules (voicebanks.ts, derivatives/, events/, games/).
 */

export { character } from './core';
export {
  mikuV2,
  mikuAppend,
  mikuV3,
  mikuV4X,
  mikuNT,
} from './voicebanks';
export { digitalStars } from './events';
export { magicalMirai } from './events';
export { snowMiku } from './events';
export { sakuraMiku } from './derivatives';
export {
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from './games';
