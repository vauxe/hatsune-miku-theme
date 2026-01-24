/**
 * MIKU SYMPHONY - Orchestra Concert Series (2016-present)
 *
 * Classical orchestra arrangements of Vocaloid songs
 * Elegant, orchestral-themed costume designs
 */

export const mikuSymphony = {
  // Standard Miku colors maintained
  hair: '#39C5BB',
  eyes: '#39C5BB',

  y2016: {
    // Inaugural Concert - Tokyo International Forum
    outfit: {
      dress: '#1A237E',      // Deep navy (orchestral)
      accent: '#FFD700',     // Gold trim
      trim: '#FFFFFF',       // White accents
    },
  },

  y2017: {
    // Osaka and Tokyo
    outfit: {
      dress: '#311B92',      // Deep purple
      accent: '#FFD700',     // Gold
      trim: '#E8EAF6',       // Silver-white
    },
  },

  y2018: {
    // Designer: Rella
    designer: 'Rella',
    outfit: {
      dress: '#0D47A1',      // Royal blue
      accent: '#FFC107',     // Amber gold
      trim: '#ECEFF1',       // Silver
      ribbon: '#E91E63',     // Rose accent
    },
    accessories: {
      hairOrnament: '#FFD700',
      gloves: '#FFFFFF',
    },
  },

  y2019: {
    // Designer: Rella (continued)
    designer: 'Rella',
    outfit: {
      dress: '#4A148C',      // Royal purple
      accent: '#FFD700',     // Gold
      trim: '#E1BEE7',       // Lavender
      skirt: '#7B1FA2',      // Purple gradient
    },
    accessories: {
      hairOrnament: '#FFD700',
      conductor: '#1A1A1A',  // Conductor's baton
    },
  },

  y2020: {
    // Yokohama
    outfit: {
      dress: '#1565C0',      // Blue
      accent: '#FFC107',     // Gold
      trim: '#FFFFFF',
    },
  },

  y2021: {
    // Yokohama continuation
    outfit: {
      dress: '#283593',      // Indigo
      accent: '#FFD54F',     // Light gold
      trim: '#C5CAE9',       // Lavender-grey
    },
  },

  y2022: {
    // Annual concert
    outfit: {
      dress: '#4527A0',      // Deep violet
      accent: '#FFD700',     // Gold
      trim: '#EDE7F6',       // Pale lavender
    },
  },

  y2023: {
    // Annual concert
    outfit: {
      dress: '#1A237E',      // Navy
      accent: '#FFC400',     // Amber
      trim: '#FFFFFF',
    },
  },

  y2024: {
    // Approaching 10th Anniversary
    outfit: {
      dress: '#311B92',      // Rich purple
      accent: '#FFD700',     // Anniversary gold
      trim: '#E8EAF6',       // Silver accents
    },
  },

  y2025: {
    // 10th Anniversary Special
    outfit: {
      dress: '#0D47A1',      // Royal blue
      accent: '#FFD700',     // Celebration gold
      trim: '#FFFFFF',
      anniversary: '#FFD700', // 10th anniversary highlight
    },
  },
} as const;
