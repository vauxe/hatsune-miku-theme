/**
 * Voicebank Versions - Software release character designs
 *
 * Different Miku voicebank software versions with distinct visual designs
 */

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
// MIKU V3 (2013) - Refined Classic Design
// Designer: iXima
// =============================================================================

export const mikuV3 = {
  // Hair - standard teal, refined proportions
  hair: {
    base: '#39C5BB',
    shadow: '#1A8A82',
    highlight: '#5DE4DB',
  },

  // Eyes
  eyes: {
    iris: '#39C5BB',
  },

  // Outfit - classic style, polished
  outfit: {
    top: '#37474F',        // Grey
    skirt: '#15191D',      // Black
    trim: '#39C5BB',       // Teal trim
  },

  accessories: {
    headphones: '#1A1F24',
    hairTies: '#E05096',   // Magenta pink
    tie: '#39C5BB',
  },
} as const;

// =============================================================================
// MIKU V3 ENGLISH (2013) - English Voicebank
// Same visual design as V3
// =============================================================================

export const mikuV3English = {
  // Same design as V3
  hair: {
    base: '#39C5BB',
    highlight: '#5DE4DB',
  },

  eyes: {
    iris: '#39C5BB',
  },

  // Outfit matches V3
  outfit: {
    top: '#37474F',
    skirt: '#15191D',
    trim: '#39C5BB',
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

  // Dark voice - darker tone
  dark: {
    hair: '#2D8F88',
  },

  // Sweet voice - slightly warmer
  sweet: {
    hair: '#45C5BD',
  },
} as const;

// =============================================================================
// MIKU V4 CHINESE (2017) - Chinese-inspired design
// Designer: Ideolo (based on Snow Miku 2016 artist)
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

// =============================================================================
// MIKU NT (2020) - New Type Organic Design
// Designers: iXima (Costume), Rella (Mechanical)
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
// MIKU V6 (2025) - AI Voice Synthesis
// Latest version with enhanced naturalness
// Early Access: December 2025, Full Release: 2026
// =============================================================================

export const mikuV6 = {
  // Hair - maintains signature teal
  hair: {
    base: '#39C5BB',
    highlight: '#5DE4DB',
    shadow: '#1A8A82',
  },

  // Eyes
  eyes: {
    iris: '#39C5BB',
  },

  // Design details still emerging as of Early Access
  // Expected to bridge NT aesthetic with future evolution
  outfit: {
    primary: '#39C5BB',
    accent: '#FFFFFF',
    trim: '#37474F',
  },
} as const;
