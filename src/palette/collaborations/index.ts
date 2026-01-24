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
    bag: '#D4A574',        // LV Damier Tan
    damier: '#8B6914',     // LV Damier Brown
    altBrown: '#A67C52',   // Darker leather brown
    shoes: '#1A1A1A',      // Black heels
    gold: '#FFC72C',       // Luxury gold accent
  },
} as const;







// =============================================================================
// GUNDAM - 45th Anniversary Collaboration
// =============================================================================

export const gundam = {
  series: 'Gundam 45th Anniversary / Mobile Suit Gundam',

  // Base Miku x Mecha Aesthetic
  colors: {
    armor: '#F5F5F5',    // White Mobile Suit armor
    frame: '#71797E',    // Gunmetal internal frame appearing in joints
    gold: '#FFD700',     // V-Fin Gold / Metallic details
    beamPink: '#E91E63', // Beam saber/sensor pink
    sensorGreen: '#00FF00', // Main camera green
  },

  // Specific Figure Designs
  variants: {
    // BANPRESTO EVOLVE-GUNDAM (User Specified)
    // "Volume twintails feature a four-color gradient... outfit detailed with gold metallic paint"
    evolve: {
      gradientTop: '#39C5BB',
      gradientMid: '#4DD0E1',
      gradientLow: '#00BCD4',
      gradientEnd: '#0097A7',
      metallicGold: '#C5A059',
    },

    // MegaHouse Lucrea - Wing Gundam EW
    // "Angelic wings... white military uniform"
    wingEW: {
      feathers: '#F8F9FA', // Pearl white
      uniform: '#FFFFFF',  // Military white
      trim: '#C5A059',     // Gold trim
    },

    // Zaku II Ver.
    zaku: {
      base: '#063927',     // Dark Green
      chest: '#2F4F4F',    // Darker Green/Black
      eye: '#F48FB1',      // Pink Mono-eye (Miku Pink)
    },
  },
} as const;







// =============================================================================
// IMPORTED IMPORTANT COLLABORATIONS
// =============================================================================

export * from './pokemon';
export * from './sanrio';
