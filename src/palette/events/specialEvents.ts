/**
 * Special Events - Notable One-Time or Collaboration Events
 *
 * Major festival appearances, special collaborations, and anniversary events
 */

// =============================================================================
// COACHELLA 2024 - US Festival Debut
// =============================================================================

export const coachella2024 = {
  // Used standard Miku design for LED screen performance
  hair: '#39C5BB',
  eyes: '#39C5BB',

  outfit: {
    top: '#37474F',        // Grey
    skirt: '#111417',      // Black
    trim: '#39C5BB',       // Teal accents
  },

  accessories: {
    headphones: '#1A1F24',
    hairTies: '#E05096',   // Magenta pink
  },

  // Festival atmosphere colors
  stage: {
    ledScreen: '#000000',
    glow: '#39C5BB',
    atmosphere: '#1A1A2E', // Night festival
  },
} as const;

// =============================================================================
// LADY GAGA'S ARTRAVE: THE ARTPOP BALL (2014)
// Opening Act Appearance
// =============================================================================

export const artRave = {
  // Performance costume - "Story Rider" (based on 2014 Racing Miku)
  // or standard V3 depending on the song, but ArtRave had a specific vibe
  hair: '#39C5BB',

  outfit: {
    dress: '#FFFFFF',      // White
    glow: '#00FFFF',       // Cyber glow
    rave: '#FF00FF',       // Neon magenta aesthetic of the tour
  },

  stage: {
    lasers: '#39C5BB',     // Teal lasers
    confetti: '#FFFFFF',
  },
} as const;

// =============================================================================
// MIKU NO HI (3/9) / 39's GIVING DAY (2010/2012)
// The "Thank You" / "Miku Day" celebrations
// =============================================================================

export const mikuDay = {
  // Gratitude / Celebration theme
  colors: {
    teal: '#39C5BB',       // 3
    green: '#4CAF50',      // 9 (Ku - sometimes associated with green)
    thankYou: '#FF4081',   // Pink gratitude
  },

  // 39's Giving Day Concert Outfit (Standard V2/Append)
  concert: {
    lights: '#39C5BB',     // Penlight teal
    stage: '#000000',      // Dark stage
  },
} as const;

// =============================================================================
// KODO TAIKO COLLABORATION (2017-2023)
// Traditional Japanese drumming partnership
// =============================================================================

export const kodoTaiko = {
  hair: '#39C5BB',
  eyes: '#39C5BB',

  // Japanese festival-inspired costume
  outfit: {
    happiCoat: '#FFFFFF',  // White traditional coat
    obi: '#E53935',        // Festival red sash
    accent: '#39C5BB',     // Teal adaptation
    headband: '#FFFFFF',   // White with red motif
  },

  // Kodo/Taiko cultural elements
  traditional: {
    indigo: '#1A237E',     // Traditional Japanese indigo
    festivalRed: '#E53935',
    woodTone: '#8D6E63',   // Taiko drum wood
    gold: '#D4AF37',       // Decorative gold
  },
} as const;



// =============================================================================
// LAWSON MIKU LIVE / 50th Anniversary (2026)
// LAWSON convenience store special concert
// =============================================================================

export const lawsonLive = {
  hair: '#39C5BB',
  eyes: '#39C5BB',

  outfit: {
    uniform: '#0068B5',    // LAWSON blue
    apron: '#FFFFFF',
    accent: '#39C5BB',
  },

  // Anniversary special elements
  anniversary: {
    gold: '#FFD700',       // 50th anniversary gold
    blue: '#0068B5',       // LAWSON corporate blue
    white: '#FFFFFF',
    milk: '#FFFEF0',       // LAWSON milk theme
  },

  stage: {
    primary: '#0068B5',
    glow: '#39C5BB',
    celebration: '#FFD700',
  },
} as const;

// =============================================================================
// THUNDERBOLT - JAPAN TOUR 2023
// =============================================================================

export const thunderbolt = {
  // Artist: ebi
  // Theme: Lighting / Electric
  hair: '#39C5BB',

  outfit: {
    jacket: '#1A1A1A',     // Black
    accent: '#00FFFF',     // Electric cyan
    highlight: '#FFFF00',  // Lightning yellow
    secondary: '#FF00FF',  // Magenta neon
  },
} as const;

// =============================================================================
// CHEERFUL JAPAN! (2011)
// Charity project - Cheerleader Miku
// =============================================================================

export const cheerfulJapan = {
  // Artist: Bunbun
  hair: '#39C5BB',

  outfit: {
    uniform: '#FF9900',    // Vibrant orange
    trim: '#FFFFFF',
    accent: '#FFFF00',     // Yellow
  },

  accessories: {
    pompoms: '#39C5BB',    // Teal (contrasting orange outfit)
  },
} as const;

// =============================================================================
// PROJECT MIRAI (3DS, 2012-2016)
// Nendoroid-proportioned chibi Miku
// =============================================================================

export const projectMirai = {
  // Same colors as standard, chibi proportions
  hair: {
    base: '#39C5BB',
    // Slightly more vibrant for 3DS display
    vibrant: '#40D0C0',
  },

  eyes: {
    iris: '#39C5BB',
    // Larger, rounder style
  },

  outfit: {
    top: '#37474F',
    skirt: '#15191D',
    trim: '#39C5BB',
  },

  accessories: {
    headphones: '#1A1F24',
    hairTies: '#E05096',
  },

  // Mikudayo mascot (same colors, exaggerated proportions)
  mikudayo: {
    hair: '#39C5BB',
    face: '#FFE4D6',
  },
} as const;
