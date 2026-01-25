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

  y2008: {
    // First Racing Miku - Simple race queen
    outfit: {
      suit: '#FFFFFF',     // White bodysuit
      accent: '#39C5BB',   // Teal stripe
      trim: '#000000',     // Black details
    },
    accessories: {
      boots: '#FFFFFF',
      gloves: '#FFFFFF',
    },
  },

  y2009: {
    // Early race queen design
    outfit: {
      suit: '#FFFFFF',     // White
      panels: '#00B8D4',   // Cyan panels
      trim: '#1A1A1A',     // Black
    },
    accessories: {
      boots: '#FFFFFF',
      visor: '#00B8D4',
    },
  },

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

  y2021: {
    // by En Morikura - Private/Roller Girl
    outfit: {
      jacket: '#E6E6FA',   // Pale lavender/white
      skirt: '#FFB7C5',    // Sakura pink
      accent: '#98FB98',   // Pale green (roller theme)
    },
    accessories: {
      beret: '#1A1A1A',
      sunglasses: '#FF69B4',
    },
  },

  y2022: {
    // by neco - Space/Modern Tech
    // Distinctive flag bearer design
    outfit: {
      bodysuit: '#212121', // Dark grey/black techwear
      jacket: '#FFFFFF',
      accent: '#C6FF00',   // Chartreuse/Lime green
      mechanics: '#424242',
    },
    accessories: {
      flag: '#39C5BB',
      visor: '#1A1A1A',
    },
  },

  y2023: {
    // by Toridamono - Alchemist/Traveler
    // "Atelier" series artist style
    outfit: {
      dress: '#FFFFFF',    // White base
      skirt: '#D32F2F',    // Deep red accents
      thighhighs: '#1A1A1A',
      trim: '#FFD700',     // Gold
    },
    accessories: {
      beret: '#FFFFFF',    // White beret
      bag: '#8D6E63',      // Leather brown
    },
  },

  y2024: {
    // by Mogumo - Witch of the Circuit
    // 15th Anniversary - Magic/Idol theme
    outfit: {
      dress: '#FFFFFF',
      cape: '#6200EA',     // Deep royal purple
      accent: '#FF1744',   // Vivid red
      magic: '#00E5FF',    // Cyan glow effects
    },
    accessories: {
      broom: '#1A1A1A',    // Black mechanical broom
      hat: '#FFFFFF',      // White witch hat
    },
  },

  y2025: {
    // by Kei Mochizuki - Formula/Cyber
    // Sharp, angular, high-speed design
    outfit: {
      suit: '#121212',     // Matte black
      jacket: '#FFFFFF',
      accent: '#FF0000',   // Racing red
      neon: '#39C5BB',     // Miku teal glow
    },
    accessories: {
      gloves: '#FF0000',   // Red gloves
      headset: '#1A1A1A',
    },
  },
} as const;
