/**
 * Concert Series - Magical Mirai Costume Designs
 *
 * Annual concert costumes - distinct character designs
 */

export const magicalMirai = {
  // Standard across all years
  hair: '#39C5BB',
  eyes: '#39C5BB',

  y2013: {
    // by CHRIS - The First Magical Mirai
    // Theme: User Culture / "Magical Mirai"
    // Note: User confirmed this is a distinct design. Colors are based on CHRIS's main visual.
    outfit: {
      dress: '#1D8FA7',    // Deep Emerald/Teal (Darker than V3)
      jacket: '#2E2B3E',   // Deep Navy/Indigo (Not Silver/Grey)
      skirt: '#1B81B8',    // Celestial Blue to Navy Gradient
      bow: '#292B97',      // Royal Blue Bow Tie
      trim: '#F0F0F0',     // White frills
    },
    accessories: {
      hat: '#2E2B3E',      // Matching Navy Hat
      star: '#EFB641',     // Gold Star Accents
    },
  },

  y2014: {
    // by MONQ - Cubic / Sci-Fi
    // Theme: "Cubism" / Digital Star
    outfit: {
      jacket: '#00E5FF',   // Electric Cyan (Vibrant glowing look)
      skirt: '#1A1A1A',    // Black
      trim: '#FFD700',     // Gold
      accent: '#E91E63',   // Pinkish red
    },
    accessories: {
      cubes: '#39C5BB',    // Standard Teal cubes
    },
  },

  y2015: {
    // by Hoshima - Sci-Fi / Chain
    // Theme: "Chain of Creation"
    outfit: {
      dress: '#26A69A',    // Deep Teal main
      trim: '#FFFFFF',     // White
      monitor: '#39C5BB',  // Cyan monitor glow
      ribbon: '#E53935',   // Large Red Ribbon (Signature feature)
    },
    accessories: {
      microphone: '#39C5BB',
    },
  },

  y2016: {
    // by LENA[A-7] - Future Cute
    // Theme: "Creativity of the Future"
    outfit: {
      dress: '#FFFFFF',    // White dress (Main)
      ribbon_teal: '#39C5BB', // Teal large ribbon/cables
      ribbon_red: '#E53935',  // Red ribbon cable accents
      sleeves: '#39C5BB',
    },
    accessories: {
      headset: '#FFFFFF',
    },
  },

  y2017: {
    // by iXima - 10th Anniversary
    // Theme: "Celebration" / Formal
    outfit: {
      dress: '#FFFFFF',    // White formal dress
      checkered: '#39C5BB',// Teal checkered pattern
      trim: '#FFD700',     // Gold celebration accents
      ribbon: '#EA80FC',   // Light purple/pink large ribbon
    },
  },

  y2018: {
    // by Mika Pikazo - Energy / Loud
    // Theme: "Greenlights Serenade"
    outfit: {
      jacket: '#FFFFFF',   // White jacket
      skirt: '#F50057',    // Vivid Pink/Red skirt
      trim: '#00E676',     // Neon green accents
      accent: '#2979FF',   // Blue graphic elements
      numbers: '#FFEA00',  // Yellow accents
    },
  },

  y2019: {
    // by ni02 - Future Circus
    // Theme: "Future Circus"
    outfit: {
      dress: '#FFFFFF',    // White inner dress
      coat: '#4A148C',     // Circus Purple overcoat
      ribbon: '#F06292',   // Stardust Pink
      cubes: '#7C4DFF',    // Deep Purple
      gold: '#FFD700',
    },
  },

  y2020: {
    // by Fujichoko - Matsuri (Festival)
    // Theme: "Matsuri"
    outfit: {
      haori: '#FFFFFF',    // White Haori
      skirt: '#1565C0',    // Deep Blue skirt (Matsuri Night)
      sash: '#D32F2F',     // Red sash/obi
      fan: '#FFAB00',      // Gold fan accents
      flower: '#F48FB1',   // Pink flower decorations
    },
  },

  y2021: {
    // by Hidari - Fairy Tale
    // Theme: "Fairy Tale Fantasy"
    outfit: {
      dress: '#FFFFFF',    // White petal dress
      outer: '#F06292',    // Pink flower look
      vines: '#66BB6A',    // Green vines
      gem: '#9C27B0',      // Purple gems
    },
  },

  y2022: {
    // by KEI / NOCO - Retro-Future
    // Theme: "Retro Future" / 10th Anniversary of MM
    outfit: {
      jacket: '#00E676',   // Neon green translucent jacket
      inner: '#FFFFFF',
      shorts: '#39C5BB',
      ribbon: '#E91E63',   // Pink ribbon
      speaker: '#FFEA00',  // Yellow accents
    },
  },

  y2023: {
    // by LAM - HERO
    // Theme: "HERO"
    outfit: {
      jacket: '#B71C1C',   // Deep Red jacket (Hero)
      bodysuit: '#212121', // Black/Dark bodysuit
      trim: '#FF5252',     // Bright red
      accent: '#FFFFFF',   // White logo/accents
      glowing: '#FF1744',  // Glowing red elements
    },
  },

  y2024: {
    // by Tama - Travel
    // Theme: "FAN FUN TRIP"
    outfit: {
      coat: '#4169E1',     // Royal Trip Blue
      dress: '#FFFFFF',
      ribbon: '#F48FB1',   // Pink ribbon
      luggage: '#FFC107',  // Yellow/Orange accents
      hat: '#4169E1',      // Royal Trip Blue
    },
  },

  y2025: {
    // by Tiv - CMY / Starry
    // Theme: "Starry River in the Sky" / CMY
    outfit: {
      dress: '#00E5FF',    // Cyan (C)
      ribbon: '#FF4081',   // Magenta (M)
      accent: '#FFEA00',   // Yellow (Y)
      base: '#263238',     // Dark blue/black (Night Sky)
    },
  },
} as const;
