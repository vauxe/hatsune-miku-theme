/**
 * Collaborations - Brand Partnerships, Cultural Events, Transportation
 *
 * Miku's appearances in brand collaborations, cultural events, and more
 */

// =============================================================================
// BRAND COLLABORATIONS - Major Partnerships
// =============================================================================

export const collaborations = {
  // Louis Vuitton x Miku (2013) - THE END Opera
  louisVuitton: {
    theme: 'THE END Opera - Marc Jacobs/LV',
    year: 2013,
    operaBlack: '#000000',
    lvGold: '#D4AF37',
    lvChampagne: '#F7E7CE',
    mikuTeal: '#39C5BB',
    damierPattern: '#8B4513',
  },
  // Toyota Corolla x Miku (2010-2011) - North America
  toyota: {
    theme: 'Toyota Corolla Campaign',
    year: 2010,
    corollaWhite: '#FFFFFF',
    mikuCyan: '#39C5BB',
    accentPink: '#E05096',
    trimBlack: '#1A1A1A',
  },
  // Google Chrome x Miku (2011) - Tell Your World
  googleChrome: {
    theme: 'Tell Your World - Chrome',
    year: 2011,
    chromeRed: '#EA4335',
    chromeYellow: '#FBBC05',
    chromeGreen: '#34A853',
    chromeBlue: '#4285F4',
    mikuCyan: '#39C5BB',
    neonGlow: '#00E5FF',
  },
  // OPPO x Miku (2020) - Ace2 Edition
  oppo: {
    theme: 'OPPO Ace2 Miku Edition',
    year: 2020,
    gradientCyan: '#39C5BB',
    gradientLight: '#7FEDE5',
    holoIridescent: '#E0F7FA',
    accentPink: '#E05096',
    uiBlack: '#1A1A1A',
  },
  // Pokemon x Miku (2024) - Poke-songs
  pokemon: {
    theme: '18 Poke-songs Project',
    year: 2024,
    pokemonRed: '#FF0000',
    pokemonYellow: '#FFCC00',
    mikuTeal: '#39C5BB',
    pokeballWhite: '#FFFFFF',
  },
  // Magic: The Gathering x Miku (2024)
  mtg: {
    theme: 'Secret Lair - Hatsune Miku',
    year: 2024,
    mtgGold: '#FFD700',
    cardBlack: '#1A1A1A',
    mikuTeal: '#39C5BB',
    holoFoil: '#E0E0E0',
  },
} as const;

// =============================================================================
// CONVENIENCE STORE COLLABORATIONS - Japanese Konbini
// =============================================================================

export const convenienceStores = {
  // Lawson x Miku
  lawson: {
    theme: 'Lawson Convenience Store Collaboration',
    // Lawson brand colors
    lawsonBlue: '#0068B7',
    lawsonSkyBlue: '#00A0E9',
    lawsonWhite: '#FFFFFF',
    // Miku in Lawson uniform
    uniformBlue: '#0068B7',
    apronWhite: '#FFFFFF',
    mikuTeal: '#39C5BB',
  },
  // Lawson 50th Anniversary Special LIVE (January 2026)
  lawson50thLive: {
    theme: 'Lawson 50th Anniversary Special LIVE',
    year: 2026,
    venue: 'Yokohama Arena',
    // Concert colors (January 2026 event)
    lawsonBlue: '#0068B7',
    lawsonSkyBlue: '#00A0E9',
    mikuTeal: '#39C5BB',
    stageBlack: '#0A0A0A',
    spotlightWhite: '#FFFFFF',
    celebrationGold: '#FFD700',
    // 50th anniversary accent
    anniversaryGold: '#D4AF37',
  },
  // FamilyMart x Miku
  familyMart: {
    theme: 'FamilyMart Convenience Store Collaboration',
    // FamilyMart brand colors (3-stripe logo)
    fmGreen: '#00A040',
    fmBlue: '#0068B7',
    fmOrange: '#F39800',
    fmWhite: '#FFFFFF',
    // Miku in FamilyMart uniform
    uniformGreen: '#00A040',
    uniformBlue: '#0068B7',
    mikuTeal: '#39C5BB',
  },
  // Domino's Pizza x Miku (2012-2013 AR App)
  dominos: {
    theme: "Domino's Pizza AR App Collaboration",
    year: 2012,
    // Domino's brand colors
    dominosRed: '#E31837',
    dominosBlue: '#006491',
    dominosWhite: '#FFFFFF',
    // Miku in Domino's uniform
    mikuTeal: '#39C5BB',
  },
} as const;

// =============================================================================
// CULTURAL EVENTS - Major Appearances & Exhibitions
// =============================================================================

export const culturalEvents = {
  // Coachella 2020 (scheduled, COVID cancelled)
  coachella: {
    theme: 'Coachella 2020 - Festival Performance',
    year: 2020,
    mikuTeal: '#39C5BB',
    stageBlack: '#0A0A0A',
    desertSand: '#C2B280',
    festivalPink: '#FF69B4',
    sunsetOrange: '#FF7043',
  },
  // David Letterman Late Show (2014)
  letterman: {
    theme: 'Late Show with David Letterman',
    year: 2014,
    mikuTeal: '#39C5BB',
    stageBlack: '#0A0A0A',
    spotlightWhite: '#FFFFFF',
    tvBlue: '#00BFFF',
  },
  // Lady Gaga ArtRave Tour Opening (2014)
  ladyGaga: {
    theme: 'Lady Gaga ArtRave: The Artpop Ball Tour',
    year: 2014,
    mikuTeal: '#39C5BB',
    artpopPink: '#E91E63',
    stagePurple: '#9400D3',
    spotlightWhite: '#FFFFFF',
  },
  // Louis Vuitton "THE END" Opera (2013) - Marc Jacobs design
  theEndOpera: {
    theme: 'THE END Opera - Louis Vuitton/Marc Jacobs',
    year: 2013,
    operaBlack: '#000000',
    lvGold: '#D4AF37',
    lvChampagne: '#F7E7CE',
    mikuTeal: '#39C5BB',
    damierBrown: '#8B4513',
  },
  // Miku Symphony Orchestra
  symphony: {
    theme: 'Miku Symphony Orchestra Concerts',
    concertBlack: '#1A1A1A',
    velvetRed: '#8B0000',
    goldTrim: '#D4AF37',
    spotlightWarm: '#FFFACD',
    chandelierGold: '#FFD700',
  },
} as const;

// =============================================================================
// TRANSPORTATION COLLABORATIONS - Trains, Buses, etc.
// =============================================================================

export const transportation = {
  // Snow Miku Streetcar (Sapporo Municipal Streetcar)
  snowMikuStreetcar: {
    theme: 'Snow Miku Streetcar - Sapporo',
    // Runs annually since 2010 during Snow Miku festival
    firstYear: 2010,
    // Core colors used across years
    snowWhite: '#FFFFFF',
    iceCrystal: '#E0F7FA',
    winterSky: '#BBDEFB',
    frostBlue: '#90CAF9',
    auroraGreen: '#69F0AE',
    auroraPink: '#FF80AB',
    auroraPurple: '#B388FF',
  },
  // JR Yamanote Line MIKUNAVI (2023)
  yamanoteLine: {
    theme: 'JR Yamanote Line MIKUNAVI',
    year: 2023,
    mikuTeal: '#39C5BB',
    digitalCyan: '#00E5FF',
    yamanoteGreen: '#9ACD32',
    trainWhite: '#FFFFFF',
  },
  // Sapporo Station collaborations
  sapporoStation: {
    theme: 'Sapporo Station Snow Miku',
    snowWhite: '#FFFFFF',
    stationGray: '#808080',
    mikuTeal: '#39C5BB',
    winterBlue: '#BBDEFB',
  },
} as const;
