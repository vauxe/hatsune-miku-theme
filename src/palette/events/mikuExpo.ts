/**
 * MIKU EXPO - World Tour Concert Series (2014-present)
 *
 * Annual world tour with unique costume designs each year
 * Different from Magical Mirai (Japan-focused concerts)
 */

export const mikuExpo = {
  y2014: {
    // First MIKU EXPO
    indonesia: {
      // Location: Jakarta, Indonesia (May)
      // Key Visual: Standard Miku V3 Style (Dynamic)
      // Palette extracted from 2014 Indonesia Visual
      hair: '#39C5BB',       // Standard Teal
      eyes: '#39C5BB',       // Matching Teal
      outfit: {
        top: '#B0BEC5',      // Light Silver/Grey Vest
        tie: '#39C5BB',      // Signature Teal Tie
        skirt: '#263238',    // Dark Charcoal Skirt
        skirtTrim: '#39C5BB', // Teal Trim
        armWarmer: '#212121', // Dark Grey/Black Arm Warmers
        boots: '#212121',    // Dark Boots
      },
      accessories: {
        hairClip: '#E91E63', // Pink/Magenta Square Clips
        cable: '#212121',    // Black Cables
      },
    },
    usa: {
      // Location: Los Angeles & New York (October)
      // Key Visual: apapico "Universal Positivity"
      // Palette extracted from 2014 LA/NY Main Visual
      designer: 'apapico',
      hair: '#81D4FA',       // Metallic Light Blue/Teal Sheen
      eyes: '#0277BD',       // Deep Ocean Blue
      outfit: {
        dress: '#CFD8DC',    // Metallic Silver/White Dress
        dressShadow: '#90A4AE', // Cool Grey Shadows
        sleeves: '#000000',  // Glossy Black Sleeves
        sleeveLight: '#00E5FF', // Cyan Digital Glow
        thighHighs: '#000000', // Glossy Black
        skirtPleats: '#455A64', // Dark Metallic Grey
      },
      accessories: {
        headphones: '#D50000', // Deep Red Headphone Accents
        hairTie: '#D50000',  // Red Hair Tie/Square
        propEarth: '#4FC3F7', // Blue Earth Glow
      },
    },
  },


  y2015: {
    // Location: Shanghai (June)
    // Key Visual: SEGA / Marza (3D Render Style)
    // Palette extracted from 2015 Shanghai Main Visual
    hair: '#26C6DA',       // Metallic Teal
    eyes: '#00E5FF',       // Cyan Neon
    outfit: {
      dress: '#ECEFF1',    // Metallic Silver/White
      dressShadow: '#90A4AE', // Cool Grey Shadows
      skirt: '#212121',    // Black Skirt
      skirtTrim: '#00E5FF', // Cyan Neon Trim
      sleeves: '#212121',  // Black Sleeves
      sleeveCuff: '#00E5FF', // Cyan Neon Cuff
    },
    accessories: {
      hairClip: '#F50057', // Pink/Red Square Clips
      tie: '#26C6DA',      // Metallic Teal Tie
    },
  },

  y2016: {
    // North America, Japan, China Tour
    japan_na: {
      // Location: Japan & North America
      // Key Visual: neco
      // Palette extracted from 2016 Japan Main Visual
      designer: 'neco',
      hair: '#3DC2D5',       // Shiny Gradient Teal
      eyes: '#00E5FF',       // Neon Cyan
      outfit: {
        vest: '#212121',     // Sharp Black Vest
        collar: '#FFFFFF',   // White Collar
        skirt: '#212121',    // Black Sharp Skirt
        skirtPleats: '#37474F', // Dark Grey Pleats
        armWarmer: '#000000', // Glossy Black
        tie: '#00E5FF',      // Cyan Digital Tie
        cable: '#F50057',    // Neon Pink/Red Cables
      },
      accessories: {
        headphones: '#263238', // Dark Grey Mechanical
        headphoneAccent: '#D50000', // Red Accent
        hairCube: '#263238', // Black Square Hair Accessories
      },
    },
    china: {
      // Location: China Tour (Shanghai/Beijing)
      // Key Visual: saberiii
      // Palette extracted from 2016 China Main Visual
      designer: 'saberiii',
      hair: '#80DEEA',       // Soft Clear Teal
      eyes: '#00BCD4',       // Cyan Blue
      outfit: {
        dress: '#FFFFFF',    // White Main Dress
        trim: '#EF5350',     // Red Festive Trim
        sash: '#FFD700',     // Gold Sash/Accents
        skirt: '#ECEFF1',    // Light Grey/Silver Skirt
      },
      accessories: {
        hairOrnament: '#F44336', // Red Chinese Knot/Ornament
        fan: '#EF5350',      // Red Fan (often associated)
      },
    },
    taiwan: {
      // Location: Taiwan (Visible Sound)
      // Key Visual: BEEK
      // Palette extracted from 2016 Taiwan Main Visual
      designer: 'BEEK',
      hair: '#00E5FF',       // Bright Cyan
      hairHighlight: '#EA80FC', // Soft Lavender/Pink Tips
      eyes: '#00B0FF',       // Vibrant Blue
      outfit: {
        top: '#FFFFFF',      // White Sleeveless Top
        skirt: '#212121',    // Black Skirt
        skirtGlow: '#00E5FF', // Cyan Neon Glow
        sleeves: '#212121',  // Black Flared Sleeves
        sleeveTrim: '#00E5FF', // Cyan Trim
        thighHighs: '#212121', // Black
      },
      accessories: {
        tie: '#00E5FF',      // Cyan Tie
        headset: '#263238',  // Dark Grey Headset
      },
    },
  },

  y2017: {
    // Location: Malaysia (December)
    // Key Visual: Ordan (Standard Style)
    // Palette extracted from 2017 Malaysia Main Visual
    hair: '#39C5BB',       // Standard Turquoise
    eyes: '#39C5BB',       // Matching Turquoise
    outfit: {
      top: '#ECEFF1',      // Light Silver/White Sleeveless
      tie: '#39C5BB',      // Signature Teal Tie
      skirt: '#37474F',    // Dark Grey Skirt
      skirtTrim: '#39C5BB', // Teal Trim
      armWarmer: '#212121', // Glossy Black
      boots: '#212121',    // Dark Boots
    },
    accessories: {
      hphoneBase: '#FFFFFF', // White Headphone Base
      hphoneIllum: '#E91E63', // Pink/Red Illumination
      hairClip: '#E91E63', // Pink/Red Square
    },
  },

  y2018: {
    // USA/Mexico, Europe Tour
    usa_mexico: {
      // Location: USA (Los Angeles, San Jose, Dallas, Austin, Washington D.C., New York) & Mexico
      // Key Visual: JohnSu (USA) / hikusa (Mexico)
      // Palette extracted from JohnSu Main Visual
      designer: 'JohnSu',
      hair: '#29B6F6',       // Bright Blue/Cyan
      eyes: '#0288D1',       // Deep Blue
      outfit: {
        dress: '#6200EA',    // Deep Purple/Indigo
        dressFade: '#304FFE', // Indigo Fade
        star: '#FFD740',     // Gold Star Accents
        trim: '#00E5FF',     // Cyan Neon Trim
        boots: '#212121',    // Dark Boots
      },
    },
    europe: {
      // Location: Europe (Paris, Cologne, London)
      // Key Visual: KEI
      // Palette extracted from 2018 Europe Main Visual
      designer: 'KEI',
      hair: '#39C5BB',       // Standard Miku Teal
      eyes: '#39C5BB',       // Matching Teal
      outfit: {
        vest: '#212121',     // Standard Silver/Grey
        tie: '#39C5BB',      // Teal Tie
        skirt: '#263238',    // Dark Skirt
        accents: '#E91E63',  // Pink/Red Elements
      },
    },
    // Note: User provided images correspond to Magical Mirai 2018 (Mika Pikazo).
    // Please refer to src/palette/events/magicalMirai.ts -> y2018 for that palette.
  },

  y2019: {
    // Location: Taiwan & Hong Kong
    // Key Visual: Ordan
    // Palette extracted from 2019 Taiwan/Hong Kong Main Visual
    designer: 'Ordan',
    hair: '#39C5BB',       // Standard Teal
    eyes: '#39C5BB',       // Matching Teal
    outfit: {
      dress: '#FFFFFF',    // White Qipao Style Dress
      sleeves: '#212121',  // Black Sleeves
      skirt: '#212121',    // Black Skirt Layer
      ribbon: '#D50000',   // Red Ribbons & Tassels
    },
    accessories: {
      flowers: '#F48FB1',  // Pink Peonies
      mic: '#C62828',      // Red Vintage Mic
      micGold: '#FFD700',  // Gold Mic Handguard
    },
  },

  y2020: {
    // Location: Europe (Paris, Berlin, London, etc.) & USA/Canada (Various Cities)
    // Note: Tours were originally scheduled but affected by COVID-19.
    europe: {
      // Key Visual: POKI
      // Palette extracted from 2020 Europe Main Visual
      designer: 'POKI',
      hair: '#00BCD4',       // Vibrant Cyan
      eyes: '#00E5FF',       // Electric Cyan
      outfit: {
        top: '#1A237E',      // Deep Indigo Blue
        skirt: '#304FFE',    // Vivid Blue
        tie: '#00E5FF',      // Cyan Neon
        sleeve: '#1A237E',   // Deep Indigo
        accent: '#F50057',   // Pinkish Red Highlights
      },
      accessories: {
        mic: '#B0BEC5',      // Silver Microphone
        cable: '#F50057',    // Pink Cable
      },
    },
    usa_canada: {
      // Key Visual: WATANA BOX
      // Palette extracted from 2020 USA & Canada Main Visual
      designer: 'WATANA BOX',
      hair: '#26C6DA',       // Teal
      eyes: '#00BCD4',       // Cyan
      outfit: {
        vest: '#78909C',     // Blue-Grey Vest
        skirt: '#212121',    // Black Skirt
        tie: '#26A69A',      // Muted Teal Tie
        socks: '#212121',    // Black Thigh Highs
        trim: '#D50000',     // Red Straps/Lines
      },
      accessories: {
        guitar: '#2962FF',   // Blue Electric Guitar
        guitarStar: '#FFFFFF', // White Stars on Guitar
        hairRibbon: '#D50000', // Red Ribbons
      },
    },
  },

  y2021: {
    // Location: MIKU EXPO 2021 Online
    // Key Visual: Ryota-H
    // Palette extracted from 2021 Online Main Visual
    designer: 'Ryota-H',
    hair: '#39C5BB',       // Standard Miku Teal
    eyes: '#39C5BB',       // Matching Teal
    outfit: {
      dress: '#FFFFFF',    // Pure White Dress
      globePattern: '#84FFFF', // Light Cyan World Map Pattern
      transparency: '#ECEFF1', // Translucent/Silver Layers
      metallic: '#90A4AE',   // Silver Accents
      shoes: '#FFFFFF',    // White Heels
    },
    accessories: {
      mic: '#B0BEC5',      // Silver Microphone
      headphones: '#FFFFFF', // White Headphones
      ring: '#B0BEC5',     // Silver Planet Ring
    },
  },

  y2022: {
    // Event: MIKU EXPO Rewind
    // Key Visual: Miku Expo Rewind Main Visual
    // Palette extracted from 2022 Rewind Visual
    hair: '#4DD0E1',       // Light Cyan
    eyes: '#E91E63',       // Distinctive Pink/Red Eyes
    outfit: {
      top: '#CFD8DC',      // Light Grey Sleeveless Top
      skirt: '#1A237E',    // Dark Navy Pleated Skirt
      tie: '#4DD0E1',      // Cyan Tie
      boots: '#1A237E',    // Dark Navy Boots
      trim: '#FF4081',     // Neon Pink Accents
    },
    accessories: {
      headphones: '#212121', // Dark Headphones
      headphoneAccent: '#FF4081', // Pink Accent
    },
  },

  y2023: {
    // Event: MIKU EXPO 2023 VR
    // Key Visual: Miku Expo 2023 VR Main Visual
    // Palette extracted from 2023 VR Visual (Puzzle Theme)
    hair: '#39C5BB',       // Standard Teal
    eyes: '#39C5BB',       // Standard Teal
    outfit: {
      bodice: '#E91E63',   // Pink Puzzle Piece
      bodiceAccent: '#00BCD4', // Cyan Puzzle Piece
      bodiceAccent2: '#FFEB3B', // Yellow Puzzle Piece
      skirt: '#FFFFFF',    // Frilly White Skirt
      bow: '#FF4081',      // Pink Bow with Stars
    },
    accessories: {
      ornament: '#FFFFFF', // Bunny Ear-like Ornaments
      shoes: '#D32F2F',    // Red Shoes
      ribbons: '#FFFFFF',  // White Ribbons on Legs
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
    nz_aus: {
      // Key Visual: KURO
      // Theme: Ocean / Coral Reef
      // Palette extracted from 2024 NZ/AUS Main Visual
      designer: 'KURO',
      hair: '#64D2C8',       // Aqua Teal Base
      hairFade: '#F48FB1',   // Coral Pink Gradient
      eyes: '#26C6DA',       // Cyan Ocean
      skin: '#FFF3E0',       // Pale Skin
      outfit: {
        dress: '#FFFFFF',    // White Frilled Bodice
        sleeves: '#2D3138',  // Dark Charcoal/Black Bell Sleeves
        skirtWater: '#69D6E3', // Sparkling Cyan Water Texture
        skirtDark: '#2A2338', // Dark Indigo/Black Coral Ruffle
        stockingDark: '#2D3138', // Dark Asymmetric Legwear
        stockingLight: '#FFFFFF', // White Asymmetric Legwear
      },
      accessories: {
        micStand: '#F06292', // Coral Pink Mic Stand
        ribbons: '#CE93D8',  // Lavender/Purple Ribbons
        fish: '#FFB74D',     // Orange Fish Accent
        crab: '#EF5350',     // Red Crab Accent
        headpiece: '#B2EBF2', // Translucent Aqua
      },
    },
    anniversary10th: {
      // Key Visual: iwato
      // Palette extracted from 10th Anniversary Main Visual
      designer: 'iwato',
      hair: '#66E0D8',       // Bright Vivid Teal
      eyes: '#26A69A',       // Deep Teal
      skin: '#FFF3E0',       // Pale Skin Tone
      outfit: {
        top: '#FFFFFF',      // White Double-Breasted Top
        buttons: '#37474F',  // Dark Grey Buttons
        collar: '#263238',   // Dark Charcoal Collar
        sleevesOuter: '#181818', // Deep Black Sleeve Shell
        sleevesInner: '#FAFAFA', // White Pleated Lining
        skirtOuter: '#181818',   // Deep Black Skirt Layers
        skirtInner: '#FAFAFA',   // White Underskirt
        waistRibbon: '#26C6DA',  // Cyan Waist Ribbon
      },
      accents: {
        rainbowPink: '#F50057',   // Neon Pink Tab
        rainbowYellow: '#FFD740', // Golden Yellow Tab
        rainbowCyan: '#00E5FF',   // Cyan Neon Tab
        rainbowBlue: '#2979FF',   // Bright Blue Tab
        graphicLines: '#212121',  // Black Geometric Lines
      },
      accessories: {
        hairOrnaments: '#FFF59D', // Pale Yellow Geometric Clips
        hairOrnamentAccent: '#FF4081', // Pink Accent
        headset: '#263238',       // Dark Grey Headset
        tie: '#FFFFFF',           // White Tie (Integrated)
        boots: '#FFFFFF',         // White Thigh-High Boots
        bootSoles: '#212121',     // Black Soles
        bootLoop: '#FF4081',      // Pink Ankle Loops
      },
    },
  },

  y2025: {
    // Asia Tour
    // Key Visual: RITAO
    // Palette extracted from 2025 Main Visual
    designer: 'RITAO',
    hair: '#29B6F6',       // Vivid Sky Blue/Teal
    hairStreak: '#F50057', // Neon Pink/Red Streak
    eyes: '#00B0FF',       // Bright Cyan Blue
    outfit: {
      top: '#FFFFFF',      // White Halter Top
      tie: '#00E5FF',      // Cyan Tie/Jabot
      sleevesDark: '#1A237E', // Midnight Blue Arm Covers
      sleevesLight: '#FFFFFF', // White Ruffled Cuffs
      skirt: '#1A237E',    // Midnight Blue Skirt
      waist: '#263238',    // Dark Corset/Waist
    },
    accessories: {
      stars: '#FFF176',    // Yellow Stars in Hair
      chains: '#B0BEC5',   // Silver Chains
      mic: '#CFD8DC',      // Silver Handheld Mic
      headphone: '#37474F', // Dark Grey Headset Base
    },
  },

  y2026: {
    // North America Tour
    // Key Visual: yon
    // Theme: Candy Pop / Sweets
    // Palette extracted from 2026 Main Visual
    designer: 'yon',
    hair: '#4DD0E1',       // Bright Turquoise
    eyes: '#00BCD4',       // Cyan Blue
    skin: '#FFF5E1',       // Warm Pale Skin
    outfit: {
      top: '#FFFFFF',      // White Ruffled Top
      bow: '#C2185B',      // Magenta/White Striped Bow
      skirtPink: '#E91E63', // Magenta Candy Stripes
      skirtYellow: '#FFEE58', // Lemon Yellow Ruffles
      skirtBlue: '#4FC3F7', // Sky Blue Accents
      skirtGlitter: '#BA68C8', // Glittery Purple/Pink Layer
    },
    accessories: {
      shoes: '#F06292',    // Bubblegum Pink Loafers
      micStand: '#880E4F', // Dark Magenta/Purple Stand
      candy: '#00E5FF',    // Blue Wrapped Candy Accents
      ribbons: '#F8BBD0',  // Pale Pink Ribbons
    },
  },
} as const;
