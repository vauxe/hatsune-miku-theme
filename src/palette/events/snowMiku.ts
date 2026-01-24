/**
 * Snow Miku - Sapporo Snow Festival (Annual since 2010)
 *
 * Snow Miku's signature feature: white/silver hair instead of teal
 * Each year has a unique costume theme
 */

// Core Snow Miku characteristics (shared across years)
export const snowMikuCore = {
  // Hair - white/silver instead of teal
  hair: {
    base: '#FFFFFF',       // Pure white
    tint: '#E8F4F8',       // Very pale blue
    icyBlue: '#B8E0E8',    // Light icy blue variant
  },

  // Eyes - usually light blue
  eyes: {
    iris: '#87CEEB',       // Sky blue
  },

  // Companion Yukine (rabbit, appears 2014+)
  yukine: {
    body: '#FFFFFF',
    accent: '#B8E0E8',
  },
} as const;

// Annual designs - character costume colors only
export const snowMiku = {
  y2012: {
    // Fluffy Coat design
    hair: '#FFFFFF',
    outfit: {
      coat: '#29B6F6',     // Light blue coat
      pompoms: '#B3E5FC',  // Pale blue pom-poms
      ribbon: '#263238',   // Dark ribbon
    },
  },

  y2013: {
    // Strawberry White Kimono
    hair: '#FFFFFF',
    outfit: {
      kimono: '#FAFAFA',   // White kimono
      obi: '#EF5350',      // Strawberry red
      hood: '#F48FB1',     // Pink hood
    },
    accessories: {
      leafAccent: '#9CCC65',
    },
  },

  y2014: {
    // Magical Girl
    hair: '#E8F4F8',
    outfit: {
      dress: '#304FFE',    // Magic blue
      cape: '#7C4DFF',     // Spell purple
      trim: '#FFD700',     // Gold
    },
  },

  y2015: {
    // Lily of the Valley
    hair: '#FFFFFF',
    outfit: {
      dress: '#F5F5F5',    // White bell dress
      leafAccent: '#81C784',
      flowerPink: '#F48FB1',
    },
  },

  y2017: {
    // Twinkle Snow - Starry Night
    hair: '#E8F4F8',
    outfit: {
      dress: '#1A237E',    // Midnight blue
      frills: '#B8E0E8',   // Pale blue
      ribbons: '#1A237E',
    },
    accessories: {
      stars: '#FFD700',    // Gold stars
      snowflakes: '#FFFFFF',
    },
  },

  y2018: {
    // Crane Priestess
    hair: '#FFFFFF',
    outfit: {
      robe: '#FFFFFF',     // Pure white
      accent: '#D32F2F',   // Crane red
      trim: '#212121',     // Black feather
    },
    accessories: {
      ornament: '#FFC107', // Shrine gold
    },
  },

  y2019: {
    // Snow Princess
    hair: '#E8F4F8',
    outfit: {
      dress: '#448AFF',    // Blue dress
      cape: '#F8FDFF',     // White cape
    },
    accessories: {
      tiara: '#ECEFF1',    // Silver
      trim: '#FFD700',     // Gold
    },
  },

  y2021: {
    // Glowing Snow - Illumination
    hair: '#B8E0E8',       // Turquoise tint
    outfit: {
      dress: '#E1BEE7',    // Lilac dress
      cape: '#B3E5FC',     // Pale blue
      beret: '#B8E0E8',
    },
    accessories: {
      musicNote: '#FFD700',
      bow: '#84FFFF',      // Cyan glow
    },
  },

  y2022: {
    // Grand Voyage - Captain
    hair: '#FFFFFF',
    outfit: {
      jacket: '#FFFFFF',   // White jacket
      shorts: '#1A1A1A',   // Black
      legwear: '#FF5252',  // Red stripes
    },
    accessories: {
      hat: '#FFFFFF',
      buttons: '#FFC107',  // Gold
      gloves: '#1A1A1A',
    },
  },

  y2024: {
    // Winter Delicacy - Wa-maid
    hair: '#FFFFFF',
    outfit: {
      dress: '#FFF8E1',    // Cream
      apron: '#FFFFFF',    // White frilled
      sleeves: '#8D6E63',  // Brown accents
    },
    accessories: {
      headpiece: '#FFAB91',
      trim: '#26A69A',     // Teal accent
    },
  },

  y2025: {
    // Sparkling Snow Material
    hair: '#FFFFFF',
    outfit: {
      dress: '#B3E5FC',    // Crystal blue
      trim: '#E0E0E0',     // Silver shimmer
    },
    accessories: {
      snowflakes: '#FFFFFF',
      accent: '#F8BBD9',   // Pink
    },
  },
} as const;
