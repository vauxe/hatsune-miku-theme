/**
 * MIKU SYMPHONY - Orchestra Concert Series (2016-present)
 *
 * Classical orchestra arrangements of Vocaloid songs
 * Elegant, orchestral-themed costume designs
 */

export const mikuSymphony = {
  y2016: {
    // Inaugural Concert - Tokyo International Forum
    // Illustrator: KEI
    illustrator: 'KEI',
    character: {
      hair: '#64D2E5',       // Signature bright cyan
      hairShadow: '#2B95A5', // Teal shading
      eyes: '#1D8E9C',       // Deep teal
      skin: '#FFF3E0',       // Pale fair skin
    },
    outfit: {
      jacket: '#222222',     // Formal black conductor tailcoat
      shirt: '#FFFFFF',      // White dress shirt
      bowTie: '#4FC3F7',     // Cyan bowtie
      skirt: '#151515',      // Black pleated skirt
      skirtAccent: '#5DDCF2',// Cyan piano-key motifs/trim
      socks: '#1A1A1A',      // Black glossy thigh-highs
      sockTrim: '#00BCD4',   // Cyan rim
    },
    accessories: {
      hairOrnament: '#E91E63', // Magenta pink hair clips
      baton: '#F5F5F5',        // Silver/White conductor baton
    },
  },

  y2017: {
    // Osaka and Tokyo
    // Illustrator: KEI
    illustrator: 'KEI',
    character: {
      hair: '#64D2E5',       // Signature bright cyan
      hairShadow: '#26A69A', // Teal shading
      eyes: '#00838F',       // Deep teal-blue
      skin: '#FFF3E0',       // Pale fair skin
    },
    outfit: {
      dressMain: '#101010',  // Elegant black formal gown
      dressRibbon: '#1A1A1A',// Black satin waist bow
      chestBow: '#4DD0E1',   // Cyan accent bow
      hemFrills: '#4DD0E1',  // Cyan ruffled hem
      petticoat: '#80DEEA',  // Pale cyan inner layers
    },
    accessories: {
      hairBows: '#1A1A1A',   // Black hair ribbons
      hairRose: '#E91E63',   // Magenta rose accent
      violin: '#C2185B',     // Distinctive deep rose/magenta violin
      bow: '#5D4037',        // Violin bow
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
