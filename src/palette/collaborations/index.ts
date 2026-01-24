/**
 * Collaborations - Brand Partnership Character Designs
 *
 * Miku designs created for collaborations with other brands/franchises
 */

// =============================================================================
// LOUIS VUITTON - "The End" Opera (2013)
// Designed by Marc Jacobs
// =============================================================================

export const louisVuitton = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#1A1A1A',      // Black haute couture
    trim: '#D4A574',       // LV tan/camel
    accent: '#FFFFFF',     // White accents
  },

  accessories: {
    bag: '#D4A574',        // LV monogram tan
    monogram: '#8B6914',   // LV brown
    altBrown: '#A67C52',   // Darker leather brown
    shoes: '#1A1A1A',      // Black heels
    gold: '#FFC72C',       // Luxury gold accent
  },
} as const;

// =============================================================================
// DOMINO'S PIZZA - App Mascot (2016)
// =============================================================================

export const dominosPizza = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#006491',      // Domino's blue
    apron: '#FFFFFF',      // White
    trim: '#E31837',       // Domino's red
  },

  accessories: {
    hat: '#006491',        // Blue cap
    hatLogo: '#E31837',    // Red domino
    pizzaBox: '#D4A574',   // Cardboard color
  },

  brandColors: {
    blue: '#006491',       // Primary blue
    red: '#E31837',        // Accent red
    altPink: '#E81D62',    // Vivid magenta variant
  },
} as const;

// =============================================================================
// POCARI SWEAT - Sports Drink Campaign
// =============================================================================

export const pocariSweat = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#FFFFFF',      // Clean white
    trim: '#0078C1',       // Pocari blue
    accent: '#87CEEB',     // Sky blue
  },

  accessories: {
    headband: '#0078C1',   // Blue
    bottle: '#0078C1',     // Pocari bottle blue
    sweatdrops: '#87CEEB', // Light blue
  },

  brandColors: {
    primary: '#0078C1',    // Main Pocari blue
    alt: '#0068B7',        // Darker variant
    sky: '#87CEEB',        // Light accent
  },
} as const;

// =============================================================================
// GOOGLE CHROME - "Tell Your World" CM (2012)
// =============================================================================

export const googleChrome = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#FFFFFF',      // Pure white
    trim: '#39C5BB',       // Teal accents
  },

  chromeColors: {
    red: '#EA4335',        // Chrome red
    yellow: '#FBBC05',     // Chrome yellow
    green: '#34A853',      // Chrome green
    blue: '#4285F4',       // Chrome blue
  },
} as const;



// =============================================================================
// FAMILY MART - Convenience Store Collaboration
// =============================================================================

export const familyMart = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    uniform: '#00A040',    // Family Mart green
    apron: '#FFFFFF',
    accent: '#0068B7',     // Blue stripe
  },

  brandColors: {
    green: '#00A040',      // Primary green
    blue: '#0068B7',       // Blue accent
    white: '#FFFFFF',
  },
} as const;

// =============================================================================
// PLAYSTATION - Gaming Collaboration
// =============================================================================

export const playstation = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    suit: '#003087',       // PlayStation blue
    accent: '#FFFFFF',
  },

  symbols: {
    circle: '#EE3D4A',     // Red O
    cross: '#5EACD7',      // Blue X
    square: '#E994AB',     // Pink Square
    triangle: '#00CC96',   // Green Triangle
  },

  brandColors: {
    blue: '#003087',       // PlayStation blue
    white: '#FFFFFF',
  },
} as const;

// =============================================================================
// 7-ELEVEN - Convenience Store Collaboration
// =============================================================================

export const sevenEleven = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    uniform: '#008848',    // 7-Eleven green
    apron: '#FFFFFF',
    accent: '#F77F00',     // Orange stripe
  },

  brandColors: {
    green: '#008848',      // Primary green
    orange: '#F77F00',     // Orange
    red: '#FF0000',        // Red accent
    white: '#FFFFFF',
  },
} as const;

// =============================================================================
// SEGA - Project DIVA Publisher / Gaming Partner
// =============================================================================

export const sega = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    suit: '#0060AA',       // SEGA blue
    accent: '#FFFFFF',
  },

  brandColors: {
    blue: '#0060AA',       // SEGA blue
    white: '#FFFFFF',
    red: '#EE1515',        // Accent (Sonic red)
  },

  // SEGA consoles color references
  dreamcast: {
    swirl: '#FF6600',      // Orange swirl
    body: '#F5F5F5',       // Console white
  },
} as const;



// =============================================================================
// IMPORTED IMPORTANT COLLABORATIONS
// =============================================================================

export * from './pokemon';
export * from './sanrio';
export * from './groundY';
