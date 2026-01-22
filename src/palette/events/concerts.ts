/**
 * Concert Series - Magical Mirai, Miku Expo, Symphony, and More
 *
 * Official live concert event series and anniversaries
 */

// =============================================================================
// MAGICAL MIRAI - Concert Series (Annual since 2013)
// =============================================================================

export const magicalMirai = {
  // Stage core
  stage: {
    spotlightWhite: '#FFFFFF',
    stageBlack: '#0A0A0A',
    laserGreen: '#00FF00',
    laserBlue: '#00BFFF',
    laserPink: '#FF69B4',
    laserPurple: '#9400D3',
    strobeWhite: '#F5F5F5',
  },
  // Annual themes
  y2013: {
    theme: 'First Magical Mirai - Yokohama Arena',
    artist: 'KEI',
    primaryBlue: '#2196F3',
    accentPink: '#E91E63',
    lightCyan: '#00BCD4',
  },
  y2014: {
    theme: 'Osaka Concert - Cube',
    artist: 'KEI',
    deepPurple: '#673AB7',
    vibrantPink: '#FF4081',
    electricBlue: '#448AFF',
  },
  y2015: {
    theme: 'Nippon Budokan - Chain of Creation',
    artist: 'Hoshima',
    costumeDesigner: 'Shikimi',
    hexagonCyan: '#39C5BB',
    hexagonGreenBlue: '#00897B',
    pearlWhite: '#FAFAFA',
  },
  y2016: {
    theme: 'Makuhari Messe - Futuristic & Cute',
    artist: 'LENA[A-7]',
    oceanBlue: '#039BE5',
    sunsetOrange: '#FF7043',
    skyLight: '#81D4FA',
  },
  y2017: {
    theme: '10th Anniversary / 5th MM - Luminous',
    artist: 'iXima',
    celebrationGold: '#FFD700',
    luminousTeal: '#39C5BB',
    sparkleWhite: '#FFFFFF',
  },
  y2018: {
    theme: 'Green Lights Serenade',
    artist: 'Mika Pikazo',
    costumeDesigner: 'Mika Pikazo',
    neonGreen: '#00E676',
    vividPink: '#FF4081',
    stageBlue: '#2979FF',
  },
  y2019: {
    theme: 'Future Circus - Galaxy',
    artist: 'ni02',
    costumeDesigner: 'ni02',
    circusPurple: '#4A148C',
    stardustPink: '#F8BBD9',
    nebulaBlue: '#1E88E5',
    cosmicGold: '#FFD54F',
  },
  y2020: {
    theme: 'Matsuri - Summer Festival',
    artist: 'Fujichoko',
    festiveRed: '#E53935',
    matsuriBlue: '#1E88E5',
    yukataWhite: '#F5F5F5',
    fireworksGold: '#FFD700',
  },
  y2021: {
    theme: 'Fairy Tale Fantasy - Merchen',
    artist: 'Hidari',
    fantasyPurple: '#7B1FA2',
    rosePink: '#EC407A',
    leafGreen: '#66BB6A',
  },
  y2022: {
    theme: 'Retro-Future - 10th Anniversary',
    artist: 'KEI',
    costumeDesigner: 'NOCO',
    retroGreen: '#00E676',
    neonPink: '#FF4081',
    cyberYellow: '#FFEA00',
    anniversaryHolo: '#FFFFFF',
  },
  y2023: {
    theme: 'HERO - Red & Black',
    artist: 'LAM',
    heroRed: '#D50000',
    heroBlack: '#121212',
    signalWhite: '#FFFFFF',
    powerGlow: '#FF1744',
  },
  y2024: {
    theme: 'Fantour Trip',
    artist: 'Tama',
    tripBlue: '#42A5F5',
    funPink: '#EC407A',
    journeyGreen: '#66BB6A',
    adventureYellow: '#FFCA28',
  },
  y2025: {
    theme: 'Seiga Itten - Starry Sky',
    artist: 'Tiv',
    nightSky: '#0D1B2E',
    starlight: '#FFD700',
    cosmicPurple: '#4A1A6B',
    celestialBlue: '#1E3A5F',
    starGlow: '#FFFACD',
    auroraViolet: '#7B68EE',
  },
  // Official lightstick colors
  lightstick: {
    mikuTeal: '#39C5BB',
    rinOrange: '#FFAB40',
    lenYellow: '#FFEB3B',
    lukaPink: '#F48FB1',
    meikoRed: '#EF5350',
    kaitoBlue: '#42A5F5',
  },
} as const;

// =============================================================================
// MIKU EXPO - World Tour
// =============================================================================

export const mikuExpo = {
  // Brand core
  brand: {
    expoCyan: '#00BCD4',
    expoMagenta: '#E91E63',
    expoBlue: '#2196F3',
    globalWhite: '#FFFFFF',
  },
  // Tour years
  y2014: {
    theme: 'First World Tour',
    tourBlue: '#1976D2',
    worldPink: '#EC407A',
    globalTeal: '#00ACC1',
  },
  y2016: {
    theme: 'North America Tour',
    americaBlue: '#1565C0',
    redAccent: '#D32F2F',
    starWhite: '#FFFFFF',
  },
  y2018: {
    theme: 'European Tour',
    euroBlue: '#3F51B5',
    continentGold: '#FFC107',
    unityPurple: '#7B1FA2',
  },
  y2020: {
    theme: 'Digital Stars Online',
    digitalPurple: '#9C27B0',
    streamCyan: '#00E5FF',
    onlinePink: '#FF80AB',
  },
  y2021: {
    theme: 'Online - Digital Connection',
    connectionCyan: '#00E5FF',
    virtualPink: '#FF4081',
    streamPurple: '#7C4DFF',
  },
  y2022: {
    theme: 'Rewind - Digital Compilation',
    rewindPurple: '#7C4DFF',
    memoryPink: '#FF4081',
    timeCyan: '#18FFFF',
  },
  y2023: {
    theme: 'VR - Virtual Reality Experience',
    vrCyan: '#00FFFF',
    immersivePurple: '#9C27B0',
    spatialPink: '#FF69B4',
    digitalBlue: '#2196F3',
  },
  y2024: {
    theme: '10th Anniversary - Universal Positivity',
    anniversaryCyan: '#00BCD4',
    positivityPink: '#EC407A',
    universalBlue: '#2962FF',
    celebrationGold: '#FFD700',
  },
  y2025: {
    theme: '2025 Asia Tour - Art by RITAO',
    asiaCyan: '#00E5CC',
    sakuraPink: '#FF8FAB',
    goldenAccent: '#FFD700',
    nightBlue: '#1A237E',
    neonMagenta: '#FF00FF',
  },
  y2026: {
    theme: '2026 North America Tour - Art by yon',
    primary: '#00BCD4',
    tourCyan: '#00E5FF',
    concertPink: '#FF4081',
    stageBlue: '#2962FF',
    spotlightWhite: '#FFFFFF',
  },
  // 10th Anniversary
  tenthAnniversary: {
    theme: '10th Anniversary - Art by Iwato',
    anniversary: '#FFD700',
    decade: '#39C5BB',
    celebration: '#FF69B4',
    memory: '#B388FF',
    gratitude: '#69F0AE',
  },
  // Regional accent colors
  regional: {
    japan: '#BC002D',
    usa: '#3C3B6E',
    europe: '#003399',
    asia: '#FFD700',
    oceania: '#00843D',
    southAmerica: '#009B3A',
  },
} as const;

// =============================================================================
// MIKU SYMPHONY - Orchestra Concert Series
// =============================================================================

export const mikuSymphony = {
  // Orchestra aesthetics
  orchestra: {
    concertBlack: '#1A1A1A',
    velvetRed: '#8B0000',
    goldTrim: '#D4AF37',
    ivoryKey: '#FFFFF0',
    ebonyKey: '#1C1C1C',
    sheetMusic: '#F5F5DC',
  },
  // Concert hall
  hall: {
    spotlight: '#FFFACD',
    chandelier: '#FFD700',
    seating: '#722F37',
    stage: '#2C1810',
    balcony: '#8B4513',
  },
  // Instruments (Miku-themed)
  instruments: {
    violin: '#8B4513',
    violinString: '#C0C0C0',
    cello: '#5C4033',
    flute: '#C0C0C0',
    harp: '#FFD700',
    piano: '#1C1C1C',
  },
  // Annual Themes (2017-Present)
  years: {
    y2017: {
      dressBlack: '#1A1A1A',
      accentTeal: '#39C5BB',
      translucentHair: '#39C5BB80',
    },
    y2018: {
      ribbonPink: '#FF8FAB',
      ribbonCyan: '#80DEEA',
      gradientHair: '#39C5BB',
    },
    y2019: {
      pearlWhite: '#F8F9FA',
      vestBlack: '#121212',
      shadowTeal: '#39C5BB20',
    },
    y2020: {
      gramophoneGold: '#FFD700',
      translucentTeal: '#39C5BB60',
      antiqueBrass: '#B5A642',
    },
    y2021: {
      kaitoBlue: '#3366CC',
      mikuTeal: '#39C5BB',
      phantomNavy: '#1A237E',
    },
    y2022: {
      regalWhite: '#FFFFFF',
      heartGold: '#FFD700',
      etherealTeal: '#39C5BB',
    },
    y2023: {
      hatWhite: '#FFFFFF',
      dressWhite: '#F5F5F5',
      accentBlack: '#0D0D0D',
    },
  },
} as const;

// =============================================================================
// MIKU WITH YOU - China Tour Series
// =============================================================================

export const mikuWithYou = {
  y2017: {
    theme: 'First Impact',
    chinaRed: '#DE2910',
    futureTeal: '#39C5BB',
    stageGold: '#FFD700',
  },
  y2018: {
    theme: 'Space Journey',
    spaceBlue: '#001E43',
    suitWhite: '#FFFFFF',
    starGlow: '#00E5FF',
    rocketOrange: '#FF6D00',
  },
  y2019: {
    theme: 'Dancing Fairy',
    natureGreen: '#66BB6A',
    balletPink: '#F8BBD9',
    flowerWhite: '#FFFAF0',
    morningDew: '#E0F7FA',
  },
  y2020: {
    theme: 'Happy Vibe',
    vibeYellow: '#FFEB3B',
    popBlue: '#2196F3',
    rhythmPink: '#FF4081',
  },
  y2021: {
    theme: 'Future Flower',
    jadeGreen: '#00A86B',
    peonyPink: '#F06292',
    pollenGold: '#FDD835',
    porcelainWhite: '#FAFAFA',
  },
} as const;

// =============================================================================
// DIGITAL STARS - Club Event Series
// =============================================================================

export const digitalStars = {
  y2020: {
    theme: 'Cyber Sport',
    sportRed: '#D50000',
    coolBlue: '#2962FF',
    techSilver: '#B0BEC5',
    carbon: '#212121',
  },
  y2021: {
    theme: 'Neon Future',
    neonPurple: '#AA00FF',
    neonGreen: '#00E676',
    neonPink: '#FF4081',
    glitch: '#00FFFF',
  },
  y2022: {
    theme: 'Punk Metal',
    punkPink: '#FF0055',
    metalBlack: '#000000',
    studSilver: '#E0E0E0',
    rebelTeal: '#008080',
  },
  y2023: {
    theme: 'Neon Monster',
    monsterGreen: '#76FF03',
    beastPurple: '#6200EA',
    clawPink: '#F50057',
    nightCity: '#0D0221',
  },
} as const;

// =============================================================================
// ANNIVERSARIES - Milestone Celebrations
// =============================================================================

export const anniversaries = {
  y5th: {
    theme: 'Symphony',
    gold: '#FFD700',
    translucentTeal: '#39C5BB60',
  },
  y10th: {
    theme: 'Memorial',
    rainbow: ['#FFD700', '#FF69B4', '#39C5BB', '#42A5F5', '#800080'],
    bookCover: '#1A1A1A',
    goldRibbon: '#FFC107',
  },
  y13th: {
    theme: 'Idol Fair',
    mainBlue: '#5992B0',
    accentGold: '#E9BD54',
    softPink: '#D4728E',
  },
  y14th: {
    theme: 'Happy Cat',
    catTurquoise: '#E0F7FA',
    basePink: '#F8BBD9',
    outlineBlack: '#1A1A1A',
  },
  y15th: {
    theme: 'Strawberry',
    strawberryPink: '#FF6B8A',
    creamWhite: '#FFF8E7',
    leafGreen: '#98D9C2',
    goldAccent: '#FFD700',
  },
  y16th: {
    theme: 'Wings of Creation',
    pearlWhite: '#F8F9FA',
    vibrantTeal: '#00ddc0',
    deepBlack: '#0D0D0D',
    wingTranslucent: '#FFFFFF80',
  },
} as const;

// =============================================================================
// MIKU DAY (39) - March 9th Celebration
// =============================================================================

export const mikuDay = {
  // Core 39 symbolism - #39C5BB contains "39"!
  core: {
    theme: 'Miku Day - 39 Thank You',
    identity39: '#39C5BB',
    thankYouGold: '#FFD700',
    gratitudePink: '#FF80AB',
    memoryPurple: '#B388FF',
    heartGreen: '#69F0AE',
  },
  // 39's Giving Day Concert (2010) - First official Miku Day
  givingDay2010: {
    theme: "39's Giving Day - First Concert",
    year: 2010,
    stageBlack: '#0A0A0A',
    spotlightWhite: '#FFFFFF',
    laserGreen: '#00FF00',
    laserCyan: '#00BFFF',
    laserPink: '#FF69B4',
  },
  // 39 Song (sasakure.UK, 2012)
  song39: {
    theme: '39 - Thank You Song',
    producer: 'sasakure.UK',
    year: 2012,
    celebrationTeal: '#39C5BB',
    warmGold: '#FFD700',
    heartPink: '#FF69B4',
    gratitudeGreen: '#69F0AE',
  },
  // Spring/Sakura theme (March = cherry blossom season)
  springTheme: {
    sakuraPink: '#FFB7C5',
    cherryBlossom: '#FEEEED',
    springGreen: '#9CCC65',
    marchSky: '#87CEEB',
  },
} as const;
