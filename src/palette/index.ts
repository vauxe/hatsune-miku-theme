/**
 * Hatsune Miku Theme - Character Design Palette
 *
 * Official Miku character designs with colors extracted from her actual appearance
 * (hair, eyes, outfit, accessories) - organized by character/variant
 *
 * Only re-exports what the theme actually uses. The full palette data remains
 * in the sub-modules (voicebanks.ts, derivatives/, events/, games/) for
 * future theme variants.
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
