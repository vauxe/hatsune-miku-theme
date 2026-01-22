/**
 * Games - Project Sekai, Project DIVA, and Game Crossovers
 *
 * Miku's appearances in video games and interactive media
 */

// =============================================================================
// PROJECT SEKAI - Miku in SEKAI (Verified from SEGA/Colorful Palette)
// =============================================================================

export const projectSekai = {
  // Miku's Official Image Color in Project SEKAI
  miku: {
    imageColor: '#33CCBB',         // Official Miku image color in SEKAI
    virtualSingerUnit: '#00CCBB',  // VIRTUAL SINGER unit color
  },
  // Empty SEKAI (Miku's unique form in game story)
  // Special heterochromia form representing loneliness/connection
  emptySekai: {
    heteroTurquoise: '#33CCBB',    // Left eye - teal
    heteroPink: '#FF80AB',         // Right eye - pink
    classroomPink: '#FF6B9D',      // Classroom highlights
    loneliness: '#1A1F24',         // Empty void background
    desks: '#2A2A2A',              // Empty classroom desks
  },
  // Different SEKAI world Miku appearances
  sekaiWorlds: {
    leoneedSchool: '#4455DD',      // School rooftop SEKAI - blue tint
    mmjStage: '#88DD44',           // Idol stage SEKAI - green spotlights
    vbsStreet: '#EE1166',          // Street SEKAI - pink neon
    wxsWonderland: '#FF9900',      // Wonderland SEKAI - orange carnival
    nightcordRoom: '#884499',      // Nightcord SEKAI - purple darkness
  },
} as const;

// =============================================================================
// PROJECT DIVA - Iconic Modules/Costumes
// =============================================================================

export const projectDiva = {
  // Append Miku (2010) - Darker mature version
  append: {
    theme: 'Append - Dark Futuristic',
    darkTeal: '#1A3A4A',
    metallicSilver: '#A1B3B6',
    bodysuit: '#1A1A1A',
    glowCyan: '#00D4D4',
    circuitPattern: '#39C5BB',
  },
  // Deep Sea Girl / Shinkai Shoujo (yuuyu-P)
  deepSeaGirl: {
    theme: 'Deep Sea Girl - Ocean',
    oceanDeep: '#0A2540',
    aquamarine: '#4AC9C9',
    pearlWhite: '#E8F0F0',
    darkNavy: '#0D1B2A',
    bioluminescent: '#00CED1',
  },
  // Cat Ears / Nekomimi Switch
  catEars: {
    theme: 'Nekomimi - Playful Cat',
    classicTeal: '#39C5BB',
    softPink: '#FFB6C1',
    creamWhite: '#FFFDD0',
    catBlack: '#1A1A1A',
    bellGold: '#FFD700',
  },
  // Melt (ryo/supercell)
  melt: {
    theme: 'Melt - Summer Warmth',
    warmCream: '#F5DEB3',
    softOrange: '#FFCC99',
    lightBrown: '#D2B48C',
    gentleYellow: '#FFFACD',
  },
  // Love is War (ryo/supercell)
  loveIsWar: {
    theme: 'Love is War - Military',
    uniformBlack: '#1A1A1A',
    uniformWhite: '#FFFFFF',
    bloodRed: '#DC143C',
    mutedGray: '#848F96',
  },
  // Rolling Girl (wowaka)
  rollingGirl: {
    theme: 'Rolling Girl - School',
    uniformNavy: '#1E3050',
    shirtWhite: '#FFFFFF',
    tieRed: '#CD5C5C',
    bandageWhite: '#F5F5F5',
  },
  // World is Mine (ryo/supercell)
  worldIsMine: {
    theme: 'World is Mine - Princess',
    royalBlack: '#1A1A1A',
    elegantWhite: '#FFFFFF',
    goldTrim: '#FFD700',
    roseRed: '#C41E3A',
    crownSilver: '#C0C0C0',
  },
  // Senbonzakura (Kurousa-P)
  senbonzakura: {
    theme: 'Senbonzakura - Taisho Military',
    militaryGreen: '#8B8B00',
    imperialRed: '#8B0000',
    goldAccent: '#FFD700',
    uniformBlack: '#1A1A1A',
  },
  // Gothic/Dark Angel
  gothic: {
    theme: 'Gothic - Dark Angel',
    deepPurple: '#4B0082',
    gothicBlack: '#000000',
    wingGray: '#C0C0C0',
    crimsonAccent: '#DC143C',
  },
  // 2D Dream Fever / Alien Alien
  alienAlien: {
    theme: 'Alien Alien - Psychedelic',
    neonGreen: '#39FF14',
    hotPink: '#FF69B4',
    electricBlue: '#00FFFF',
    spaceBlack: '#000000',
  },
} as const;

// =============================================================================
// GAME CROSSOVERS - Guest Appearances in Other Games
// =============================================================================

export const gameCrossovers = {
  // Persona 4: Dancing All Night (2015) - Soejima design
  persona4dan: {
    theme: 'Persona 4 Dancing All Night',
    designer: 'Shigenori Soejima',
    year: 2015,
    turtleneckWhite: '#FFFFFF',
    skirtBlack: '#1A1A1A',
    buttonBlack: '#000000',
    headphonePink: '#FF69B4',
    mikuTeal: '#39C5BB',
  },
  // 7th Dragon 2020 - Shirow Miwa design
  dragon2020: {
    theme: '7th Dragon 2020',
    designer: 'Shirow Miwa',
    year: 2011,
    mikuTeal: '#39C5BB',
    futuristicWhite: '#F0F0F0',
    militaryGray: '#4A4A4A',
    accentRed: '#CC3333',
  },
  // Ninjala Collaboration (2021)
  ninjala: {
    theme: 'Ninjala x Hatsune Miku',
    year: 2021,
    mikuTeal: '#39C5BB',
    ninjaBlack: '#1A1A1A',
    actionPink: '#FF4081',
  },
} as const;
