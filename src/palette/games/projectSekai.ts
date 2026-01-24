/**
 * Project SEKAI: Colorful Stage! - Miku's Unit Appearances
 *
 * Miku appears differently in each unit's SEKAI (virtual world)
 * Official image color: #33CCBB
 */

// =============================================================================
// VIRTUAL SINGER - Default/Base Appearance
// =============================================================================

export const virtualSinger = {
  // Official image color
  imageColor: '#33CCBB',

  hair: {
    base: '#33CCBB',       // Slightly darker than original Miku
    highlight: '#5DE4DB',
  },

  eyes: {
    iris: '#33CCBB',
    highlight: '#FFFFFF',
  },

  outfit: {
    blouse: '#FFFFFF',     // White sleeveless collared
    trim: '#33CCBB',       // Teal trim
    sleeves: '#37474F',    // Dark grey detached sleeves
    skirt: '#546E7A',      // Grey thigh-length
    skirtTrim: '#33CCBB',
  },

  accessories: {
    hairClips: '#1A1A1A',  // Black square clips
    hairClipAccent: '#E53935', // Red accent
    tie: '#33CCBB',
    tattoo: '#E53935',     // Red "01" on left shoulder
  },
} as const;

// =============================================================================
// EMPTY SEKAI - 25-ji, Nightcord de. World (Heterochromia Form)
// =============================================================================

export const emptySekai = {
  // Distinctive grey hair representing broken/empty world
  hair: {
    base: '#9B9B9B',       // Warm grey at roots
    tip: '#4A4A50',        // Cold grey at tips (gradient)
    highlight: '#B5B5B5',
  },

  // Heterochromia - different colored eyes
  eyes: {
    right: '#33CCBB',      // Teal (connection to original)
    left: '#FF6B9D',       // Pink (unit's emotional theme)
  },

  outfit: {
    blouse: '#FFFFFF',     // White, fading to grey
    dress: '#E8E8E8',      // White-grey gradient
    neckBow: '#E53935',    // Thin red bow
    harness: '#1A1A1A',    // Black chest harness
  },

  accessories: {
    hairBows: '#F5F5DC',   // Off-white/cream (right one falling)
    sock: '#606060',       // Dark grey (only right leg)
  },
} as const;

// =============================================================================
// LEO/NEED - Classroom SEKAI (Rock Band Style)
// =============================================================================

export const leoNeed = {
  unitColor: '#4455DD',    // Royal blue

  hair: {
    base: '#2A9D8F',       // Darker teal
    highlight: '#FF80AB',  // Vibrant pink highlights
  },

  eyes: {
    iris: '#33CCBB',
  },

  outfit: {
    uniform: '#1A1A1A',    // Black school-style
    trim: '#FFFFFF',       // White trim
    bow: '#C2185B',        // Dark pink with plaid
    skirt: '#1A1A1A',      // Black pleated
    skirtRuffle: '#C2185B', // Dark pink plaid ruffles
  },

  accessories: {
    hairClips: '#1A1A1A',
    hairClipAccent: '#E53935',
    socks: '#1A1A1A',      // Black thigh-high
    shoes: '#FFFFFF',      // Black and white sneakers
  },
} as const;

// =============================================================================
// MORE MORE JUMP! - Stage SEKAI (Idol Style)
// =============================================================================

export const moreMoreJump = {
  unitColor: '#88DD44',    // Bright green

  hair: {
    base: '#33CCBB',       // Cyan, waist-length pigtails
    highlight: '#5DE4DB',
  },

  eyes: {
    iris: '#33CCBB',
  },

  outfit: {
    dress: '#FFFFFF',      // White with heart-shaped neckline
    neckline: '#FF80AB',   // Pink heart detail
    skirt: '#1A1A1A',      // Multi-layered: black, teal, white
    skirtTeal: '#33CCBB',
    lace: '#1A1A1A',       // Checkered lace details
  },

  accessories: {
    hairRibbons: '#FFD700', // Golden star and diamond ribbons
    pendant: '#FFD700',    // Golden star pendant
    boots: '#FFFFFF',      // White high-heeled
    bootButtons: '#E53935', // Red buttons
    legBand: '#FFFFFF',    // White with red "01"
    legBandText: '#E53935',
  },
} as const;

// =============================================================================
// VIVID BAD SQUAD - Street SEKAI (Street Style)
// =============================================================================

export const vividBadSquad = {
  unitColor: '#EE1166',    // Vivid pink

  hair: {
    base: '#5DE4DB',       // Lighter teal in buns
    highlight: '#7FEDE5',
  },

  eyes: {
    iris: '#33CCBB',
  },

  outfit: {
    hoodie: '#1A1A1A',     // Black with pink details
    hoodieAccent: '#FF4081', // Bright pink
    shirt: '#FFFFFF',      // White heart-neckline
    skirt: '#1A237E',      // Dark blue with white stripes
    skirtStripe: '#FFFFFF',
    underskirt: '#FFFFFF', // White ruffled
    tights: '#1A1A1A',     // Black full-length
  },

  accessories: {
    earrings: '#FFD700',   // Gold hoops
    choker: '#1A1A1A',     // Black with chain
    shoes: '#FFFFFF',      // Black and white sneakers
  },
} as const;

// =============================================================================
// WONDERLANDS x SHOWTIME - Wonderland SEKAI (Circus Performer)
// =============================================================================

export const wonderlandsShowtime = {
  unitColor: '#FF9900',    // Pop orange

  hair: {
    base: '#00BCD4',       // Bright blue (different from standard)
    highlight: '#4DD0E1',
  },

  eyes: {
    iris: '#33CCBB',
    sparkle: '#FFFFFF',    // Sparkle pupils
  },

  // Has fanged teeth for playful look
  outfit: {
    dress: '#E53935',      // Red striped short-sleeved
    hemline: '#FFD700',    // Gold trim
    underskirt: '#81C784', // Multi-colored polka dots (green, pink, purple)
    underskirtPink: '#F48FB1',
    underskirtPurple: '#CE93D8',
    bloomers: '#E53935',   // Red
  },

  accessories: {
    catEars: '#E53935',    // Fake red cat ears
    pompoms: '#FF9800',    // Multi-colored hair holders
    socks: '#F48FB1',      // Pink thigh-high with red ribbons
    sockRibbon: '#E53935',
    shoes: '#E53935',      // Red flats with star cutouts
    ribbon: '#FFD700',     // Large gold bow with red stars
    ribbonStars: '#E53935',
    tail: '#F48FB1',       // Striped pink fake tail
  },
} as const;

// =============================================================================
// 25-JI, NIGHTCORD DE. - Empty SEKAI (Dark Aesthetic)
// =============================================================================

export const nightcord = {
  unitColor: '#884499',    // Dark purple

  // Same as emptySekai but with more detail
  hair: {
    base: '#A5A5A5',       // Warm grey
    tip: '#505055',        // Dark cold grey (gradient)
    highlight: '#C0C0C0',
  },

  eyes: {
    right: '#33CCBB',      // Turquoise (original identity)
    left: '#E8789D',       // Pink (emotional theme)
  },

  outfit: {
    blouse: '#FFFFFF',     // Long-sleeved, 3 buttons unbuttoned
    dress: '#B0B0B0',      // Grey, fading darker
    neckBow: '#E53935',    // Thin red
    harness: '#1A1A1A',    // Black across chest
  },

  accessories: {
    hairBows: '#F5F5DC',   // Off-white/cream
    nails: '#33CCBB',      // Turquoise nail polish
    sock: '#505055',       // Dark grey (only right leg)
  },
} as const;

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const projectSekai = {
  virtualSinger,
  emptySekai,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} as const;
