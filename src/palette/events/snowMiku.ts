/**
 * Snow Miku - Sapporo Snow Festival (Annual since 2010)
 *
 * Snow Miku's signature feature: white/silver hair instead of teal
 * Each year has a unique costume theme
 */

// Core Snow Miku characteristics (shared across years)
// Official colors: 白・薄青・銀 (white, pale blue, silver)
export const snowMikuCore = {
  // Hair - pale blue tinted (薄青), NOT pure white
  hair: {
    base: '#E8F4F8',       // Pale blue (薄青) - primary color
    highlight: '#FFFFFF',  // Pure white - highlights only
    silver: '#D0E0E8',     // Silver shimmer (銀)
    shadow: '#B8E0E8',     // Icy blue for depth
  },

  // Eyes - light blue
  eyes: {
    iris: '#87CEEB',       // Sky blue
    highlight: '#FFFFFF',
  },

  // Companion Yukine (rabbit, appears 2014+)
  yukine: {
    body: '#FFFFFF',
    accent: '#B8E0E8',
  },
} as const;

// Annual designs - character costume colors only
// Note: Hair uses pale blue base (#E8F4F8) per official spec
export const snowMiku = {
  y2010: {
    // First Snow Miku - Simple winter outfit
    hair: '#E8F4F8',       // Pale blue base
    outfit: {
      coat: '#4A90C0',       // Winter blue coat
      trim: '#FFFFFF',       // White fur trim
      scarf: '#FF6B6B',      // Red scarf
    },
    accessories: {
      earmuffs: '#4A90C0',   // Matching blue
    },
  },

  y2011: {
    // Fluffy Coat - First public design contest
    hair: '#E8F4F8',       // Pale blue
    outfit: {
      coat: '#87CEEB',       // Sky blue coat
      furTrim: '#FFFFFF',    // White fluffy trim
      boots: '#4682B4',      // Steel blue
    },
    accessories: {
      ribbon: '#FF69B4',     // Pink ribbon
      mittens: '#FFFFFF',
    },
  },

  y2012: {
    // Fluffy Coat design
    hair: '#E8F4F8',       // Pale blue
    outfit: {
      coat: '#29B6F6',     // Light blue coat
      pompoms: '#B3E5FC',  // Pale blue pom-poms
      ribbon: '#263238',   // Dark ribbon
    },
  },

  y2013: {
    // Strawberry White Kimono
    hair: '#E8F4F8',       // Pale blue
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
    // Magical Girl - icier blue for magical theme
    hair: '#D8EEF4',       // Icy blue (more saturated)
    outfit: {
      dress: '#304FFE',    // Magic blue
      cape: '#7C4DFF',     // Spell purple
      trim: '#FFD700',     // Gold
    },
  },

  y2015: {
    // Lily of the Valley
    hair: '#E8F4F8',       // Pale blue
    outfit: {
      dress: '#F5F5F5',    // White bell dress
      leafAccent: '#81C784',
      flowerPink: '#F48FB1',
    },
  },

  y2016: {
    // Snow Owl - Wise owl theme (warmer tint for owl aesthetic)
    hair: '#EEF4F2',       // Warmer white (less blue, complements brown)
    outfit: {
      cape: '#5C4033',       // Brown owl feathers
      dress: '#FFF8E1',      // Cream white
      trim: '#8D6E63',       // Warm brown
    },
    accessories: {
      owlMask: '#D7CCC8',    // Pale feather
      feathers: '#5D4037',   // Brown
      wings: '#795548',
    },
  },

  y2017: {
    // Twinkle Snow - Starry Night (icier for night sky theme)
    hair: '#E0F0F8',       // Ice blue
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
    hair: '#E8F4F8',       // Pale blue
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
    // Snow Princess (silver-blue tint befitting royalty)
    hair: '#E4F2F8',       // Silver-blue
    outfit: {
      dress: '#448AFF',    // Blue dress
      cape: '#F8FDFF',     // White cape
    },
    accessories: {
      tiara: '#ECEFF1',    // Silver
      trim: '#FFD700',     // Gold
    },
  },

  y2020: {
    // Strawberry White - Sweet dessert theme
    hair: '#E8F4F8',       // Pale blue
    outfit: {
      dress: '#FFE4E1',    // Misty rose
      apron: '#FFFFFF',    // White frilled apron
      trim: '#FF6B6B',     // Strawberry red
    },
    accessories: {
      headpiece: '#FFB7C5', // Pink strawberry hat
      bow: '#FF69B4',       // Hot pink
      berries: '#DC143C',   // Crimson strawberries
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
    hair: '#E8F4F8',       // Pale blue
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

  y2023: {
    // Luminous Fluffy Snow - Cotton candy theme
    hair: '#E8F4F8',       // Pale blue
    outfit: {
      dress: '#E1BEE7',    // Soft lavender
      fluff: '#FFFFFF',    // White fluffy trim
      accent: '#B3E5FC',   // Pale blue
    },
    accessories: {
      bow: '#F8BBD9',      // Pink
      snowflakes: '#FFFFFF',
      stars: '#FFD700',    // Golden
    },
  },

  y2024: {
    // Winter Delicacy - Wa-maid
    hair: '#E8F4F8',       // Pale blue
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
    hair: '#E8F4F8',       // Pale blue
    outfit: {
      dress: '#B3E5FC',    // Crystal blue
      trim: '#E0E0E0',     // Silver shimmer
    },
    accessories: {
      snowflakes: '#FFFFFF',
      accent: '#F8BBD9',   // Pink
    },
  },

  y2026: {
    // Sparkling Snow Material / Pâtisserie of Happiness
    // Main Visual: Kuroboshi Kohaku | Design Winner: Abujaku
    hair: '#E0F7FA',       // Icy blue-white
    outfit: {
      dress: '#FFFFFF',      // White chef base
      skirt: '#E6E6FA',      // Lavender frosting
      accent: '#81D4FA',     // Ice blue
      ribbon: '#F48FB1',     // Sweet pink
    },
    accessories: {
      hat: '#FFFFFF',        // Chef hat with snowflakes
      whisk: '#FFD700',      // Gold accent
    },
  },
} as const;
