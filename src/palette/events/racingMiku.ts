/**
 * Racing Miku - Good Smile Racing (Annual since 2008)
 *
 * Official mascot of Good Smile Racing team in Super GT series
 * Each year features a unique race queen design
 */

export const racingMiku = {
  // Team core colors (Good Smile Racing)
  team: {
    gsmGreen: '#00A94F',       // Good Smile Racing green
    gsmTeal: '#39C5BB',        // Miku's signature teal
    teamWhite: '#FFFFFF',
    carbonBlack: '#1A1A1A',
    checkeredBlack: '#212121',
    metallicSilver: '#B0BEC5',
    chromeSilver: '#E0E0E0',
  },
  // Annual designs
  y2008: {
    theme: 'First Racing Miku - RQ Ver.',
    designer: 'Initial design',
    suitWhite: '#FFFFFF',
    accentTeal: '#39C5BB',
    trimBlack: '#1A1A1A',
  },
  y2009: {
    theme: 'Early Racing Design',
    suitWhite: '#FFFFFF',
    accentTeal: '#39C5BB',
    trimBlack: '#1A1A1A',
  },
  y2010: {
    theme: 'Orange Mechanic - by redjuice',
    designer: 'redjuice',
    raceOrange: '#FF6B00',
    suitWhite: '#FFFFFF',
    redAccent: '#FF0000',
    trimBlack: '#212121',
  },
  y2011: {
    theme: 'White & Black - by Yuichi Murakami',
    designer: 'Yuichi Murakami',
    suitWhite: '#FFFFFF',
    sideBlack: '#000000',
    accentTeal: '#39C5BB',
  },
  y2012: {
    theme: 'BMW Style - by GAN',
    designer: 'GAN',
    pureWhite: '#FFFFFF',
    accentTeal: '#39C5BB',
    trimBlack: '#1A1A1A',
  },
  y2013: {
    theme: 'Leotard Style - by Saitom',
    designer: 'Saitom, Shimazaki Mari',
    suitWhite: '#FFFFFF',
    armBlack: '#000000',
    accentTeal: '#39C5BB',
  },
  y2014: {
    theme: 'Mechanical Turbine - by Oguchi',
    designer: 'Oguchi',
    suitWhite: '#FFFFFF',
    metallicSilver: '#C0C0C0',
    turbineAccent: '#39C5BB',
  },
  y2015: {
    theme: 'Princess Knight - by Taiki',
    designer: 'Taiki',
    suitWhite: '#FFFFFF',
    gradientAqua: '#00FFFF',
    gradientGreen: '#00FF7F',
    goldFrills: '#FFD700',
  },
  y2016: {
    theme: 'Victory Phoenix - by Mai Yoneyama',
    designer: 'Mai Yoneyama',
    flameOrange: '#FF6B00',
    flameRed: '#FF0000',
    flameYellow: '#FFD700',
    accentTeal: '#39C5BB',
  },
  y2017: {
    theme: 'Fairy Wings - by Tony',
    designer: 'Tony',
    freshGreen: '#32CD32',
    wingWhite: '#FFFFFF',
    transparentGreen: '#00FF0080',
  },
  y2018: {
    theme: 'Fluffy White - by Kanzaki Hiro',
    designer: 'Kanzaki Hiro',
    fluffyWhite: '#FFFFFF',
    creamWhite: '#FFFAF0',
    accentTeal: '#39C5BB',
  },
  y2019: {
    theme: 'Idol Style - Turquoise & Pink',
    idolTeal: '#39C5BB',
    idolPink: '#FF69B4',
    suitWhite: '#FFFFFF',
  },
  y2020: {
    theme: '10th Anniversary Special',
    goldAnniversary: '#FFD700',
    premiumBlack: '#1A1A1A',
    accentTeal: '#39C5BB',
  },
  y2021: {
    theme: 'Cyber Circuit',
    circuitGreen: '#00E676',
    dataBlue: '#2979FF',
    gridBlack: '#121212',
  },
  y2022: {
    theme: 'Future Tech Racing',
    techBlue: '#2196F3',
    techPurple: '#9C27B0',
    lightAccent: '#E1F5FE',
  },
  y2023: {
    theme: 'Adventure Style',
    adventureWhite: '#FFFFFF',
    accentTeal: '#39C5BB',
    accentPink: '#FF69B4',
  },
  y2024: {
    theme: 'White Witch - Magic Broom',
    witchWhite: '#FFFFFF',
    magicPurple: '#9932CC',
    broomBrown: '#8B4513',
    accentTeal: '#39C5BB',
  },
  y2025: {
    theme: 'Cheerleading Squad - 15th Anniversary Rhapsody',
    cheerWhite: '#FFFFFF',
    cheerTeal: '#39C5BB',
    cheerPink: '#FF69B4',
    pompomGold: '#FFD700',
  },
  // Sponsor colors
  sponsors: {
    goodSmileOrange: '#F57C00',
    cryptonBlue: '#1976D2',
    bmwBlue: '#0066B1',
    dunlopYellow: '#FFEB3B',
    raidJapanRed: '#C62828',
  },
} as const;

/**
 * Thai Racing Miku - Tanned/Sun-kissed Variant
 *
 * Southeast Asian race variant with wheat-colored skin
 * Started as Sepang Ver. (2013 Malaysia), became Thai Ver. (2014+)
 */
export const thaiRacingMiku = {
  // Thai Version core
  core: {
    theme: 'Thai Racing Miku - Tanned Variant',
    firstYear: 2013,
    // Wheat-colored skin
    skinBase: '#D4B896',
    skinHighlight: '#E0C8A8',
    skinShadow: '#C9A080',
    // Standard Miku colors remain
    hairTeal: '#39C5BB',
    eyeTeal: '#39C5BB',
  },
  // Year variants
  years: {
    y2013: { theme: 'Sepang Ver. (Malaysia)', skin: '#D4B896' },
    y2014: { theme: 'Thai Ver. Chang Circuit', skin: '#D4B896' },
    y2015: { theme: 'Thai Ver.', skin: '#CFA397' },
    y2016: { theme: 'Thai Ver.', skin: '#D4B896' },
    y2017: { theme: 'Thai Ver.', skin: '#C9A080' },
    y2018: { theme: 'Thai Ver.', skin: '#D4B896' },
    y2019: { theme: 'Thai Ver.', skin: '#CFA397' },
    y2020: { theme: 'Thai Ver.', skin: '#D4B896' },
    y2022: { theme: 'Thai Ver.', skin: '#D4B896' },
    y2023: { theme: 'Thai Ver.', skin: '#CFA397' },
  },
} as const;
