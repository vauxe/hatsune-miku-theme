/**
 * Special Variants - Sakura Miku and Voicebank Version Designs
 *
 * Distinct character designs with different color schemes
 */

// =============================================================================
// SAKURA MIKU - Cherry Blossom Version (桜ミク)
// =============================================================================

export const sakuraMiku = {
  // Hair - pink instead of teal
  hair: {
    base: '#FFB7C5',       // Cherry blossom pink
    shadow: '#F58F98',     // Deeper pink
    highlight: '#FEEEED',  // Pale sakura
    tip: '#EEBBCB',        // Purple-pink gradient at tips
  },

  // Eyes - pink in most versions
  eyes: {
    iris: '#F58F98',
    highlight: '#FFB7C5',
  },

  // Outfit - white with pink accents
  outfit: {
    dress: '#FFFFFF',
    trim: '#FFB7C5',
    ribbon: '#F58F98',
  },

  // Accessories
  accessories: {
    hairOrnament: '#FFB7C5',  // Sakura flower
    headphones: '#F58F98',
  },
} as const;

// =============================================================================
// MIKU APPEND (2010) - Dark Futuristic Design
// =============================================================================

export const mikuAppend = {
  // Hair - darker, more green-shifted teal
  hair: {
    base: '#00CED1',       // Darker cyan-teal
    shadow: '#008B8B',     // Deep teal
    highlight: '#40E0D0',  // Turquoise highlight
  },

  // Eyes
  eyes: {
    iris: '#00CED1',
  },

  // Bodysuit - black with metallic accents
  bodysuit: {
    base: '#1A1A1A',
    metallic: '#A1B3B6',   // Silver panels
    circuit: '#00D4D4',    // Glowing circuit lines
  },

  // Accessories
  accessories: {
    headphones: '#2D2D2D',
    glow: '#00FFFF',       // Cyan glow accents
  },
} as const;

// =============================================================================
// MIKU NT (2020) - New Type Organic Design
// =============================================================================

export const mikuNT = {
  // Hair - standard teal but more flowing
  hair: {
    base: '#39C5BB',
    highlight: '#5DE4DB',
  },

  // Eyes
  eyes: {
    iris: '#39C5BB',
  },

  // Outfit - white with organic frills
  outfit: {
    dress: '#F8F9FA',      // Off-white dress
    frills: '#FFFFFF',
    accent: '#39C5BB',     // Teal accents
  },

  // Accessories - pin microphone instead of tie
  accessories: {
    headphones: '#1A1F24',
    microphone: '#39C5BB',
  },
} as const;

// =============================================================================
// MIKU V4X (2016) - Voice variants with subtle color shifts
// =============================================================================

export const mikuV4X = {
  // Standard solid voice
  solid: {
    hair: '#39C5BB',
  },

  // Soft voice - gentler teal
  soft: {
    hair: '#6DD4CD',
  },

  // Light voice - airy pale teal
  light: {
    hair: '#A8EBE6',
  },

  // Vivid voice - deeper saturated teal
  vivid: {
    hair: '#2B9E96',
  },
} as const;

// =============================================================================
// MIKU V4 CHINESE (2016) - Chinese-inspired design
// =============================================================================

export const mikuV4Chinese = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#DE2910',      // China red
    trim: '#FFD700',       // Gold trim
    accent: '#39C5BB',
  },

  accessories: {
    hairOrnament: '#FFD700',
  },
} as const;
