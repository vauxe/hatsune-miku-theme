/**
 * MIKU EXPO - World Tour Concert Series (2014-present)
 *
 * Annual world tour with unique costume designs each year
 * Different from Magical Mirai (Japan-focused concerts)
 */

export const mikuExpo = {
  // Standard Miku colors maintained
  hair: '#39C5BB',
  eyes: '#39C5BB',

  y2014: {
    // First MIKU EXPO - Indonesia, Los Angeles, New York
    // Key Visual: apapico
    designer: 'apapico',
    outfit: {
      dress: '#39C5BB',      // Teal primary
      accent: '#FFFFFF',     // White accents
      trim: '#1A1A1A',       // Black details
    },
  },

  y2016: {
    // North America, Europe, Japan Tour
    outfit: {
      dress: '#00BCD4',      // Cyan blue
      accent: '#FF4081',     // Pink
      trim: '#FFFFFF',
    },
  },

  y2018: {
    // USA/Mexico, Europe Tour
    outfit: {
      dress: '#7C4DFF',      // Purple
      accent: '#00E5FF',     // Cyan
      trim: '#FFD740',       // Gold
    },
  },

  y2020: {
    // Online/Cancelled due to COVID - Virtual events
    outfit: {
      dress: '#39C5BB',
      accent: '#FF80AB',
      trim: '#FFFFFF',
    },
  },

  y2021: {
    // Online/VR Events
    outfit: {
      dress: '#00E676',      // Digital green
      accent: '#FF4081',     // Pink
      trim: '#FFFFFF',
    },
  },

  y2024: {
    // Europe Tour (zain), North America (hatahiro)
    europe: {
      designer: 'zain',
      outfit: {
        dress: '#1E88E5',    // Blue
        accent: '#FFD54F',   // Gold
        trim: '#FFFFFF',
      },
    },
    northAmerica: {
      designer: 'hatahiro',
      outfit: {
        dress: '#E91E63',    // Pink
        accent: '#00BCD4',   // Cyan
        trim: '#FFFFFF',
      },
    },
  },

  y2025: {
    // Asia Tour
    // Key Visual: RITAO
    designer: 'RITAO',
    outfit: {
      dress: '#7C4DFF',      // Purple
      accent: '#00E5FF',     // Cyan glow
      trim: '#FFD700',       // Gold
    },
  },

  y2026: {
    // North America Tour
    // Key Visual: yon
    designer: 'yon',
    outfit: {
      dress: '#00BCD4',      // Cyan
      accent: '#FF4081',     // Pink
      trim: '#FFFFFF',
    },
  },
} as const;
