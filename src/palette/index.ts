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

// ==========================================================================
// CORE - Original KEI Design (2007)
// ==========================================================================
export { character } from './core';

// ==========================================================================
// VOICEBANK VARIANTS - Used for indent guide colors
// ==========================================================================
export {
  mikuV2,
  mikuAppend,
  mikuV3,
  mikuV4X,
  mikuNT,
} from './voicebanks';

// ==========================================================================
// ANNUAL EVENT COSTUMES - Used for chart/decorative colors
// ==========================================================================
export { digitalStars } from './events';
export { magicalMirai } from './events';

// ==========================================================================
// GAME APPEARANCES - Used for SCM graph colors
// ==========================================================================
export {
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from './games';
