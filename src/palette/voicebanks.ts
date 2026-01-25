/**
 * Voicebank Versions - Software release character designs
 *
 * Different Miku voicebank software versions with distinct visual designs
 */

// =============================================================================
// MIKU V2 (2007) - The Original
// Designer: KEI
// =============================================================================

export const mikuV2 = {
  // Hair - A slightly softer, more turquoise green than V3
  hair: {
    base: '#86CECB',       // Official V2 Turquoise (Kei), close to Piapro's #33BBAD
    shadow: '#39A09D',
    highlight: '#A2E2DF',
  },
  eyes: {
    iris: '#86CECB',
  },
  outfit: {
    top: '#93A4A9',        // Cooler grey
    skirt: '#15191D',
    trim: '#86CECB',
  },
} as const;

// =============================================================================
// MIKU APPEND (2010) - Dark Futuristic Design
// =============================================================================

export const mikuAppend = {
  // Hair - lighter turquoise than standard, very sleek
  hair: {
    base: '#00B2A9',       // Vivid Turquoise (Corrected from green)
    shadow: '#008C84',     // Deeper turquoise
    highlight: '#65E3A3',  // Retaining some green tint in highlights as seen in art
  },

  // Eyes
  eyes: {
    iris: '#00B2A9',
  },

  // Bodysuit - black with metallic accents
  bodysuit: {
    base: '#1A1A1A',
    metallic: '#A1B3B6',   // Silver panels
    circuit: '#2BBF7A',    // Glowing circuit lines matches hair
  },

  // Accessories
  accessories: {
    headphones: '#2D2D2D',
    glow: '#89F6D3',       // Cyan-ish glow accents
  },

  marks: {
    tattoo: '#E60033',
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
    hairTies: {
      base: '#1A1F24',
      outline: '#E05096',
    },
    tie: '#39C5BB',
  },

  marks: {
    tattoo: '#E60033',
  },
} as const;

// =============================================================================
// MIKU V3 ENGLISH (2013) - Western Release
// Designer: Zain
// =============================================================================

export const mikuV3English = {
  // Hair - slightly more blue/cyan than standard V3
  hair: {
    base: '#00C2B2',       // Vibrant Cyan-Turquoise
    shadow: '#008F84',
    highlight: '#A2EBE7',
  },

  eyes: {
    iris: '#00C2B2',
  },

  outfit: {
    // Zain's design often features a starker white/black contrast
    top: '#FFFFFF',        // White shirt emphasis
    trim: '#00C2B2',
  },
} as const;

// =============================================================================
// MIKU V4X (2016) - Polished Modern Design
// =============================================================================

export const mikuV4X = {
  // Base Design (Original/Solid)
  hair: {
    base: '#39C5BB',
    shadow: '#1A8A82',
    highlight: '#5DE4DB',
  },
  eyes: {
    iris: '#39C5BB',
  },
  outfit: {
    top: '#37474F',
    trim: '#39C5BB',
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

  marks: {
    tattoo: '#E60033',
  },
} as const;

// =============================================================================
// MIKU NT (2020) - New Type Organic Design
// Designers: iXima (Costume), Rella (Mechanical)
// =============================================================================

export const mikuNT = {
  // Hair - Cleaner, softer palette (New Type)
  hair: {
    base: '#89CDC6',       // Official NT Soft Turquoise
    highlight: '#B4EBE6',
    shadow: '#5C5A60',     // Desaturated shadow
  },

  // Eyes
  eyes: {
    iris: '#89CDC6',
  },

  // Outfit - white with organic frills
  outfit: {
    dress: '#FEF5F7',      // Very pale pink/white
    frills: '#FFFFFF',
    accent: '#338296',     // Deep teal accent
  },

  // Accessories - pin microphone instead of tie
  accessories: {
    headphones: '#1A1F24',
    microphone: '#338296',
    hairTies: {
      base: '#FEF5F7',    // White/Silver
      outline: '#E43D82', // Vivid Magenta accent
    },
  },

  marks: {
    tattoo: '#E60033',
  },
} as const;
