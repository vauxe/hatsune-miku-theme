/**
 * Racing Miku - Good Smile Racing (Annual since 2008)
 *
 * Race queen costume designs - hair stays standard teal
 * Each year features a unique race queen outfit
 */

export const racingMiku = {
  // Standard across all years
  hair: '#39C5BB',
  eyes: '#39C5BB',

  y2010: {
    // by redjuice - Mechanic style
    outfit: {
      suit: '#FFFFFF',     // White center
      panels: '#FF6B00',   // Orange side panels
      trim: '#FF0000',     // Red trim
    },
  },

  y2011: {
    // by Yuichi Murakami - Cyber race queen
    outfit: {
      suit: '#FFFFFF',     // White high-leg
      panels: '#000000',   // Black sides
      accent: '#39C5BB',   // Teal lines
    },
  },

  y2012: {
    // by GAN - BMW inspired
    outfit: {
      suit: '#FFFFFF',     // White with mesh
      accent: '#39C5BB',   // Teal
      boots: '#1A1A1A',    // Black/white split
    },
  },

  y2013: {
    // by Saitom/Mari Shimazaki - Leotard style
    outfit: {
      leotard: '#FFFFFF',  // White
      armCovers: '#000000', // Black
      accent: '#39C5BB',
    },
  },

  y2014: {
    // by Oguchi - Turbine mechanic
    outfit: {
      suit: '#FFFFFF',
      metallic: '#C0C0C0', // Silver mechanical parts
      accent: '#39C5BB',
    },
  },

  y2015: {
    // by Taiki - Princess Knight
    hair: {
      base: '#39C5BB',
      gradient: '#00FF7F', // Cyan to green gradient
    },
    outfit: {
      dress: '#FFFFFF',
      frills: '#FFD700',   // Gold frills
      accent: '#00FFFF',   // Aqua
    },
  },

  y2016: {
    // Victory Phoenix - flame design
    outfit: {
      suit: '#FFFFFF',
      flames: '#FF6B00',   // Orange
      flameRed: '#FF0000',
      flameYellow: '#FFD700',
    },
  },

  y2017: {
    // by Tony - Fairy
    outfit: {
      dress: '#FFFFFF',
      wings: '#32CD32',    // Fresh green
      wingTranslucent: '#00FF0080',
    },
  },

  y2018: {
    // by Kanzaki Hiro - Fluffy
    outfit: {
      dress: '#FFFFFF',
      fluff: '#FFFAF0',    // Cream white
      accent: '#39C5BB',
    },
  },

  y2019: {
    // Idol style
    outfit: {
      dress: '#39C5BB',    // Teal dress
      accent: '#FF69B4',   // Pink
      trim: '#FFFFFF',
    },
  },

  y2020: {
    // 10th Anniversary - Mechanic revival
    outfit: {
      suit: '#FFFFFF',
      accent: '#39C5BB',
      trim: '#FFD700',     // Anniversary gold
    },
    accessories: {
      boots: '#1A1A1A',
    },
  },

  y2022: {
    // Athletic style
    outfit: {
      bodysuit: '#1A1A1A', // Black
      jacket: '#FFFFFF',
      accent: '#76FF03',   // Yellow-green
    },
  },

  y2024: {
    // White Witch
    outfit: {
      dress: '#FFFFFF',
      cape: '#9932CC',     // Purple
      accent: '#39C5BB',
    },
    accessories: {
      broom: '#8B4513',    // Brown
      hat: '#FFFFFF',
    },
  },

  y2025: {
    // Cheerleader - 15th Anniversary
    outfit: {
      uniform: '#FFFFFF',
      accent: '#39C5BB',
      trim: '#FF69B4',     // Pink
    },
    accessories: {
      pompoms: '#FFD700',  // Gold
    },
  },
} as const;

/**
 * Thai Racing Miku - Tanned variant
 * Appears at Southeast Asian races (Malaysia, Thailand)
 */
export const thaiRacingMiku = {
  hair: '#39C5BB',
  eyes: '#39C5BB',

  // Distinctive wheat-colored skin
  skin: {
    base: '#D4B896',
    highlight: '#E0C8A8',
    shadow: '#C9A080',
  },

  // Outfits follow same design as regular Racing Miku each year
} as const;
