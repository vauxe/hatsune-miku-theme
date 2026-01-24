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
  mikuAppend,
  mikuV3,
  mikuV3English,
  mikuV4X,
  mikuV4Chinese,
  mikuNT,
  mikuV6,
} from './voicebanks';

export { sakuraMiku } from './derivatives';

// ==========================================================================
// ANNUAL EVENT COSTUMES
// ==========================================================================
export { snowMikuCore, snowMiku } from './events/snowMiku';
export { racingMiku, thaiRacingMiku } from './events/racingMiku';
export { magicalMirai } from './events/magicalMirai';
export { mikuExpo } from './events/mikuExpo';
export { mikuSymphony } from './events/mikuSymphony';
export {
  // Removed outdated events
  lawsonLive,
  projectMirai,
} from './events/specialEvents';

// ==========================================================================
// GAME APPEARANCES
// ==========================================================================

// Project SEKAI - Unit-specific character designs
export {
  projectSekai,
  virtualSinger,
  emptySekai,
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
  // New additions
  knife,
  packaged,
  blackRockShooter,
  decorator,
  ghostRule,
  sandPlanet,
  vampire,
} from './games';

// ==========================================================================
// COLLABORATIONS - Brand Partnerships
// ==========================================================================
export {
  dominosPizza,
  pocariSweat,
  googleChrome,
  familyMart,
  playstation,
  sevenEleven,
  sega,
  pokemonVoltage,
  sanrio,
  groundY,
} from './collaborations';

// ==========================================================================
// UNIFIED PALETTE OBJECT
// ==========================================================================
import { character } from './core';
import {
  mikuAppend,
  mikuV3,
  mikuV3English,
  mikuV4X,
  mikuV4Chinese,
  mikuNT,
  mikuV6,
} from './voicebanks';
import { sakuraMiku } from './derivatives';
import { snowMikuCore, snowMiku } from './events/snowMiku';
import { racingMiku, thaiRacingMiku } from './events/racingMiku';
import { magicalMirai } from './events/magicalMirai';
import { mikuExpo } from './events/mikuExpo';
import { mikuSymphony } from './events/mikuSymphony';
import { mikuWithYou } from './events/mikuWithYou';
import { digitalStars } from './events/digitalStars';
import {
  coachella2024,
  thunderbolt,
  cheerfulJapan,
  kodoTaiko,
  lawsonLive,
  projectMirai,
} from './events/specialEvents';
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
import {
  louisVuitton,
  dominosPizza,
  pocariSweat,
  googleChrome,
  familyMart,
  playstation,
  sevenEleven,
  sega,
  pokemonVoltage,
  sanrio,
  groundY,
} from './collaborations';

export const palette = {
  // ==========================================================================
  // CORE - Original KEI Design (2007)
  // ==========================================================================
  character,

  // ==========================================================================
  // VOICEBANK VARIANTS - Different software versions
  // ==========================================================================
  mikuAppend,      // Dark futuristic (2010)
  mikuV3,          // Refined classic (2013)
  mikuV3English,   // English voicebank (2013)
  mikuV4X,         // Voice variant colors (2016)
  mikuV4Chinese,   // Chinese dress (2017)
  mikuNT,          // Organic flowing (2020)
  mikuV6,          // AI synthesis (2025)

  // ==========================================================================
  // DERIVATIVE CHARACTERS
  // ==========================================================================
  sakuraMiku,      // Cherry blossom pink version

  // ==========================================================================
  // ANNUAL EVENT COSTUMES
  // ==========================================================================
  snowMikuCore,    // Shared Snow Miku traits (pale blue hair)
  snowMiku,        // Yearly costumes (2010-2026)
  racingMiku,      // Good Smile Racing costumes (2008-2025)
  thaiRacingMiku,  // Tanned variant
  magicalMirai,    // Concert costumes (2013-2025)
  mikuExpo,        // World tour costumes (2014-2026)
  mikuSymphony,    // Orchestra concerts (2016-2025)
  mikuWithYou,     // China Tour (2017-2025)
  digitalStars,    // Club events (2020-2025)

  // ==========================================================================
  // SPECIAL EVENTS
  // ==========================================================================
  coachella2024,   // US festival debut
  thunderbolt,     // Japan Tour 2023
  cheerfulJapan,   // Cheerleader Miku (2011)
  kodoTaiko,       // Taiko drumming collaboration
  lawsonLive,      // LAWSON 50th anniversary concert
  projectMirai,    // Chibi 3DS game

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

  // ==========================================================================
  // COLLABORATIONS - Brand Partnerships
  // ==========================================================================
  louisVuitton,    // "The End" opera (2013)
  dominosPizza,    // App mascot (2016)
  pocariSweat,     // Sports drink campaign
  googleChrome,    // "Tell Your World" CM (2012)
  familyMart,      // Convenience store
  playstation,     // Gaming collaboration
  sevenEleven,     // 7-Eleven
  sega,            // Project DIVA publisher

  // Important
  pokemonVoltage,  // Project Voltage (18 Types)
  sanrio,          // Hello Kitty / Cinnamoroll
  groundY,         // Yohji Yamamoto High Fashion
} as const;


