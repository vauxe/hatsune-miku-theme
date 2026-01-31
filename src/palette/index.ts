/**
 * Hatsune Miku Theme - Character Design Palette
 *
 * Official Miku character designs with colors extracted from her actual appearance
 * (hair, eyes, outfit, accessories) - organized by character/variant
 */

// ==========================================================================
// CORE - Original KEI Design (2007)
// ==========================================================================
export { character, piapro, themeColors } from './core';

// ==========================================================================
// VOICEBANK VARIANTS - Different software versions
// ==========================================================================
export {
  mikuV2,
  mikuAppend,
  mikuV3,
  mikuV3English,
  mikuV4X,
  mikuV4Chinese,
  mikuNT,
} from './voicebanks';

// ==========================================================================
// DERIVATIVE CHARACTERS
// ==========================================================================
export {
  sakuraMiku,
  miku15thAnniversary,
  miku16thAnniversary,
  gundam45thMiku,
  lawson50thMiku,
} from './derivatives';

// ==========================================================================
// ANNUAL EVENT COSTUMES
// ==========================================================================
export { digitalStars } from './events';
export { magicalMirai } from './events';
export { mikuExpo } from './events';
export { snowMiku } from './events';

// ==========================================================================
// GAME APPEARANCES
// ==========================================================================
export { projectSekai } from './games';
export {
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from './games';
export {
  deepSeaGirl,
  darkAngel,
  conflicted,
  heartHunter,
  whiteDress,
  powder,
  infinity,
  summerMemories,
  starVocalist,
  heartbeat,
  regret,
  marionette,
  ichiNoSakuraBlossom,
  supreme,
  celebration,
  catchTheWave,
  breatheWithYou,
  honeyWhip,
  angel,
  princess,
  butterfly,
  spiritual,
  outAndAbout,
  rollingGirl,
  innocent,
  factoryTyrant,
  ribbonGirl,
  outOfTheGravity,
  christmas,
  princessBlanche,
  miCrystal,
  conductorNightingale,
  bunnyEarsHoodie,
  ghost,
  projectDiva,
} from './games';

// ==========================================================================
// UNIFIED PALETTE OBJECT
// ==========================================================================
import { character } from './core';
import {
  mikuV2,
  mikuAppend,
  mikuV3,
  mikuV3English,
  mikuV4X,
  mikuV4Chinese,
  mikuNT,
} from './voicebanks';
import {
  sakuraMiku,
  miku15thAnniversary,
  miku16thAnniversary,
  gundam45thMiku,
  lawson50thMiku,
} from './derivatives';
import {
  snowMiku,
  magicalMirai,
  mikuExpo,
  digitalStars,
} from './events';
import {
  projectSekai,
  deepSeaGirl,
  darkAngel,
  heartHunter,
  powder,
  rollingGirl,
  ghost,
} from './games';

export const palette = {
  // ==========================================================================
  // CORE - Original KEI Design (2007)
  // ==========================================================================
  character,

  // ==========================================================================
  // VOICEBANK VARIANTS - Different software versions
  // ==========================================================================
  mikuV2,          // Original KEI design (2007)
  mikuAppend,      // Dark futuristic (2010)
  mikuV3,          // Refined classic (2013)
  mikuV3English,   // English voicebank (2013)
  mikuV4X,         // Voice variant colors (2016)
  mikuV4Chinese,   // Chinese dress (2017)
  mikuNT,          // Organic flowing (2020)

  // ==========================================================================
  // DERIVATIVE CHARACTERS
  // ==========================================================================
  sakuraMiku,             // Cherry blossom pink version
  miku15thAnniversary,    // Strawberry ver. (2022)
  miku16thAnniversary,    // Wings of Creation (2023)
  gundam45thMiku,         // RX-78-2 collab (2024)
  lawson50thMiku,         // Cyan Blue collab (2026)

  // ==========================================================================
  // ANNUAL EVENT COSTUMES
  // ==========================================================================
  snowMiku,        // Yearly costumes (2010-2026)
  magicalMirai,    // Concert costumes (2013-2025)
  mikuExpo,        // World tour costumes (2014-2026)
  digitalStars,    // Club events (2020-2025)

  // ==========================================================================
  // GAME APPEARANCES - Project SEKAI
  // ==========================================================================
  projectSekai,    // All SEKAI unit appearances

  // ==========================================================================
  // GAME APPEARANCES - Project DIVA Modules
  // ==========================================================================
  deepSeaGirl,          // Ocean dress
  darkAngel,            // Gothic-lolita
  heartHunter,          // Devil-themed
  powder,               // Winter snowy
  rollingGirl,          // School uniform
  ghost,                // Ghostly aesthetic
} as const;
