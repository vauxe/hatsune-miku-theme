/**
 * Hatsune Miku Theme - Character Design Palette
 *
 * Official Miku character designs with colors extracted from her actual appearance
 * (hair, eyes, outfit, accessories) - NOT brand/venue/atmospheric colors
 */

// Core character design
export { character } from './core';

// Special variants (different base appearance)
export {
  sakuraMiku,
  mikuAppend,
  mikuNT,
  mikuV4X,
  mikuV4Chinese,
} from './special';

// Event costumes
export { snowMikuCore, snowMiku } from './events/snowMiku';
export { racingMiku, thaiRacingMiku } from './events/racingMiku';
export { magicalMirai } from './events/concerts';

// Game modules
export {
  projectSekai,
  deepSeaGirl,
  catEars,
  loveIsWar,
  worldIsMine,
  senbonzakura,
  gothic,
  melt,
  rollingGirl,
} from './games';

// Unified palette object
import { character } from './core';
import {
  sakuraMiku,
  mikuAppend,
  mikuNT,
  mikuV4X,
  mikuV4Chinese,
} from './special';
import { snowMikuCore, snowMiku } from './events/snowMiku';
import { racingMiku, thaiRacingMiku } from './events/racingMiku';
import { magicalMirai } from './events/concerts';
import {
  projectSekai,
  deepSeaGirl,
  catEars,
  loveIsWar,
  worldIsMine,
  senbonzakura,
  gothic,
  melt,
  rollingGirl,
} from './games';

export const palette = {
  // ==========================================================================
  // CORE - Original KEI Design (2007)
  // ==========================================================================
  character,

  // ==========================================================================
  // VOICEBANK VARIANTS - Different software versions
  // ==========================================================================
  mikuAppend,      // Dark futuristic (2010)
  mikuNT,          // Organic flowing (2020)
  mikuV4X,         // Voice variant colors (2016)
  mikuV4Chinese,   // Chinese dress (2016)

  // ==========================================================================
  // SPECIAL VARIANTS
  // ==========================================================================
  sakuraMiku,      // Cherry blossom pink version

  // ==========================================================================
  // ANNUAL EVENT COSTUMES
  // ==========================================================================
  snowMikuCore,    // Shared Snow Miku traits (white hair)
  snowMiku,        // Yearly costumes (2012-2025)
  racingMiku,      // Good Smile Racing costumes (2010-2025)
  thaiRacingMiku,  // Tanned variant
  magicalMirai,    // Concert costumes (2015-2025)

  // ==========================================================================
  // GAME MODULES - Project DIVA Costumes
  // ==========================================================================
  projectSekai,    // SEKAI appearance + Empty SEKAI
  deepSeaGirl,     // Ocean dress
  catEars,         // Nekomimi outfit
  loveIsWar,       // Military uniform
  worldIsMine,     // Princess dress
  senbonzakura,    // Taisho military
  gothic,          // Dark angel
  melt,            // Summer casual
  rollingGirl,     // School uniform
} as const;

export type Palette = typeof palette;
