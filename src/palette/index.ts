/**
 * Hatsune Miku Theme - Character Design Palette
 *
 * Official Miku character designs with colors extracted from her actual appearance
 * (hair, eyes, outfit, accessories) - organized by character/variant
 */

// ==========================================================================
// CORE - Original KEI Design (2007)
// ==========================================================================
export { character } from './core';

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
export { sakuraMiku } from './derivatives';

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

// Project SEKAI - Unit-specific character designs
export {
  projectSekai,
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from './games';

// Project DIVA - Song-based costume modules
export {
  deepSeaGirl,
  catEars,
  loveIsWar,
  worldIsMine,
  senbonzakura,
  gothic,
  melt,
  rollingGirl,
  tellYourWorld,
  ievanPolkka,
  sadisticMusicFactory,
  twoFacedLovers,
  acute,
  tripleBaka,
  oddsAndEnds,
  knife,
  packaged,
  blackRockShooter,
  decorator,
  ghostRule,
  sandPlanet,
  vampire,
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
import { sakuraMiku } from './derivatives';
import { snowMiku } from './events/snowMiku';
import { racingMiku } from './events/racingMiku';
import { magicalMirai } from './events/magicalMirai';
import { mikuExpo } from './events/mikuExpo';
import { mikuSymphony } from './events/mikuSymphony';
import { mikuWithYou } from './events/mikuWithYou';
import { digitalStars } from './events/digitalStars';
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
  tellYourWorld,
  ievanPolkka,
  sadisticMusicFactory,
  twoFacedLovers,
  acute,
  tripleBaka,
  oddsAndEnds,
  knife,
  packaged,
  blackRockShooter,
  decorator,
  ghostRule,
  sandPlanet,
  vampire,
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
  sakuraMiku,      // Cherry blossom pink version

  // ==========================================================================
  // ANNUAL EVENT COSTUMES
  // ==========================================================================
  snowMiku,        // Yearly costumes (2010-2026)
  racingMiku,      // Good Smile Racing costumes (2008-2025)
  magicalMirai,    // Concert costumes (2013-2025)
  mikuExpo,        // World tour costumes (2014-2026)
  mikuSymphony,    // Orchestra concerts (2016-2025)
  mikuWithYou,     // China Tour (2017-2025)
  digitalStars,    // Club events (2020-2025)

  // ==========================================================================
  // GAME APPEARANCES - Project SEKAI
  // ==========================================================================
  projectSekai,    // All SEKAI unit appearances

  // ==========================================================================
  // GAME APPEARANCES - Project DIVA Modules
  // ==========================================================================
  deepSeaGirl,          // Ocean dress
  catEars,              // Nekomimi outfit
  loveIsWar,            // Military uniform
  worldIsMine,          // Princess dress
  senbonzakura,         // Taisho military
  gothic,               // Dark angel
  melt,                 // Summer casual
  rollingGirl,          // School uniform
  tellYourWorld,        // White dress (Google Chrome CM)
  ievanPolkka,          // Finnish folk dress
  sadisticMusicFactory, // Industrial worker
  twoFacedLovers,       // Asymmetric black/white
  acute,                // Elegant party dress
  tripleBaka,           // Casual cheerful
  oddsAndEnds,          // Worn doll aesthetic
  knife,                // Dark edgy aesthetic
  packaged,             // Futuristic clean (kz/livetune)
  blackRockShooter,     // Crossover character
  decorator,            // Celebratory (kz/livetune)
  ghostRule,            // Digital glitch (DECO*27)
  sandPlanet,           // Desert/Wasteland (Hachi)
  vampire,              // Jirai Kei/Landmine (DECO*27)
} as const;


