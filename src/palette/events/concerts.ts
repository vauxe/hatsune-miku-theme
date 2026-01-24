/**
 * Concert Series - Magical Mirai Costume Designs
 *
 * Annual concert costumes - distinct character designs
 */

export const magicalMirai = {
  // Standard across all years
  hair: '#39C5BB',
  eyes: '#39C5BB',

  y2015: {
    // by Hoshima/Shikimi - Hexagon Chain
    outfit: {
      dress: '#39C5BB',    // Teal main
      trim: '#00897B',     // Darker teal
      accent: '#FAFAFA',   // Pearl white
    },
  },

  y2016: {
    // by LENA[A-7] - Futuristic Cute
    outfit: {
      dress: '#039BE5',    // Ocean blue
      accent: '#FF7043',   // Orange
      trim: '#81D4FA',     // Sky blue
    },
  },

  y2017: {
    // by iXima - 10th Anniversary
    outfit: {
      dress: '#39C5BB',    // Teal
      trim: '#FFD700',     // Gold celebration
      accent: '#FFFFFF',
    },
  },

  y2018: {
    // by Mika Pikazo - Green Lights
    outfit: {
      dress: '#00E676',    // Neon green
      accent: '#FF4081',   // Vivid pink
      trim: '#2979FF',     // Blue
    },
  },

  y2019: {
    // by ni02 - Future Circus
    outfit: {
      dress: '#4A148C',    // Circus purple
      skirt: '#F8BBD9',    // Stardust pink
      accent: '#FFD54F',   // Gold
    },
  },

  y2020: {
    // by Fujichoko - Matsuri
    outfit: {
      yukata: '#F5F5F5',   // White
      obi: '#E53935',      // Festival red
      accent: '#1E88E5',   // Blue
    },
  },

  y2021: {
    // by Hidari - Fairy Tale
    outfit: {
      dress: '#7B1FA2',    // Fantasy purple
      trim: '#EC407A',     // Rose pink
      accent: '#66BB6A',   // Leaf green
    },
  },

  y2022: {
    // by KEI/NOCO - Retro-Future 10th
    outfit: {
      dress: '#00E676',    // Retro green
      accent: '#FF4081',   // Neon pink
      trim: '#FFEA00',     // Cyber yellow
    },
  },

  y2023: {
    // by LAM - HERO
    outfit: {
      suit: '#D50000',     // Hero red
      bodysuit: '#121212', // Black
      accent: '#FFFFFF',
    },
  },

  y2024: {
    // by Tama - Fantour Trip
    outfit: {
      dress: '#42A5F5',    // Trip blue
      accent: '#EC407A',   // Fun pink
      trim: '#66BB6A',     // Journey green
    },
  },

  y2025: {
    // by Tiv - Seiga Itten (Starry Sky)
    outfit: {
      dress: '#0D1B2E',    // Night sky
      trim: '#FFD700',     // Starlight gold
      accent: '#7B68EE',   // Aurora violet
    },
  },
} as const;
