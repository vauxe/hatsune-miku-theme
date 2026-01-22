/**
 * Special Variants - Sakura Miku, Voicebank Versions, Iconic PVs
 *
 * Character variations and famous music video designs
 */

// =============================================================================
// SAKURA MIKU - Cherry Blossom Version
// =============================================================================

export const sakuraMiku = {
  // Traditional Japanese Sakura Colors
  traditional: {
    sakuraIro: '#FEEEED',          // Pale cherry blossom (lightest)
    sakuraPink: '#FFB7C5',         // Standard cherry blossom pink
    momoIro: '#F58F98',            // Peach blossom pink
    nadeshiko: '#EEBBCB',          // Dianthus pink (with purple)
    usukurenai: '#F4B2BA',         // Pale crimson
    tokiIro: '#F3A696',            // Ibis pink (warm)
    sakuraNezumi: '#D8C6BC',       // Cherry blossom gray (muted)
  },
  // Hair Colors (pink instead of teal)
  hair: {
    root: '#F58F98',               // Deeper pink at roots
    base: '#FFB7C5',               // Main hair color
    mid: '#FEEEED',                // Mid-tone highlights
    shine: '#FFF0F5',              // Bright highlights
    tip: '#EEBBCB',                // Gradient to purple-pink at tips
  },
  // Outfit Colors
  outfit: {
    blouseWhite: '#FFFFFF',
    skirtPink: '#FFB7C5',
    tiePink: '#F58F98',
    bootPink: '#F4B2BA',
    trimWhite: '#FFF5F8',
  },
  // Cherry Blossom Elements
  petals: {
    light: '#FEEEED',
    medium: '#FFB7C5',
    deep: '#F58F98',
    center: '#FFFAF0',
  },
  // Accents
  accents: {
    leafGreen: '#9CCC65',
    branchBrown: '#8B4513',
    springSky: '#E0F7FA',
    goldOrnament: '#FFD700',
  },
  // Year Variations (Good Smile Company releases)
  y2012: {
    theme: 'Original Sakura Miku - Nendoroid #274',
    primary: '#FFB7C5',
    secondary: '#F58F98',
    highlight: '#FFF0F5',
  },
  y2014: {
    theme: 'Bloomed in Japan - Nendoroid #500',
    primary: '#FFB7C5',
    secondary: '#FF8FAB',
    highlight: '#FEEEED',
  },
  y2020: {
    theme: 'Hanami Outfit - Nendoroid Doll',
    primary: '#FFB7C5',
    secondary: '#EEBBCB',
    accent: '#F3A696',
  },
} as const;

// =============================================================================
// MIKU VOICEBANK VERSIONS - Different Software Designs
// =============================================================================

export const mikuVersions = {
  // Original V2 (2007) - KEI design
  v2: {
    theme: 'Original Hatsune Miku - CV01',
    designer: 'KEI',
    year: 2007,
    hairTeal: '#39C5BB',
    eyeTeal: '#39C5BB',
    outfitGrey: '#37474F',
    headphonePink: '#E05096',
  },
  // Append (2010) - Darker mature design
  append: {
    theme: 'Miku Append - Mature/Dark',
    designer: 'Asai Masaki',
    year: 2010,
    darkTeal: '#1A3A4A',
    leotardWhite: '#FFFFFF',
    bodysuitBlack: '#1A1A1A',
    glowCyan: '#00D4D4',
    metallicSilver: '#A1B3B6',
    circuitTeal: '#39C5BB',
  },
  // V3 English (2013)
  v3: {
    theme: 'Miku V3 English',
    designer: 'iXima',
    year: 2013,
    hairTeal: '#39C5BB',
    refinedOutfit: '#37474F',
  },
  // V4X (2016) - Modernized iXima design
  v4x: {
    theme: 'Miku V4X - Modern Update',
    designer: 'iXima',
    year: 2016,
    hairTeal: '#39C5BB',
    // V4X variants
    soft: '#6DD4CD',    // Soft voice - gentler teal
    solid: '#39C5BB',   // Solid voice - standard
    light: '#A8EBE6',   // V4X Light - airy teal
    vivid: '#2B9E96',   // V4X Vivid - deeper teal
  },
  // V4 Chinese (2016)
  v4chinese: {
    theme: 'Miku V4 Chinese',
    designer: 'Mamenomoto',
    year: 2016,
    hairTeal: '#39C5BB',
    chinaRed: '#DE2910',
    goldAccent: '#FFD700',
  },
  // NT New Type (2020) - Flowing organic redesign
  nt: {
    theme: 'Miku NT - New Type',
    designer: 'iXima, Rella',
    year: 2020,
    // NT maintains same colors, changes are in form/silhouette
    hairTeal: '#39C5BB',
    eyeTeal: '#39C5BB',
    // NT design features: wavy hair, no necktie, frilled/organic elements
    organicWhite: '#F8F9FA',
    softAccent: '#5DE4DB',
  },
} as const;

// =============================================================================
// FAMOUS PV/SONG MIKU DESIGNS - Iconic Music Video Costumes
// =============================================================================

export const iconicPVs = {
  // Tell Your World (kz/livetune) - Google Chrome 2012
  tellYourWorld: {
    theme: 'Tell Your World - Chrome Collaboration',
    producer: 'kz (livetune)',
    mikuTeal: '#39C5BB',
    chromeRed: '#EA4335',
    chromeYellow: '#FBBC05',
    chromeGreen: '#34A853',
    chromeBlue: '#4285F4',
    rainbowGlow: '#FFFFFF',
  },
  // Ghost Rule (DECO*27)
  ghostRule: {
    theme: 'Ghost Rule',
    producer: 'DECO*27',
    mikuTeal: '#39C5BB',
    darkNavy: '#1A1A2E',
    hotMagenta: '#E91E8C',
    glitchWhite: '#FFFFFF',
  },
  // Sand Planet (Hachi/Kenshi Yonezu) - MM2017
  sandPlanet: {
    theme: 'Sand Planet - 10th Anniversary',
    producer: 'Hachi (Kenshi Yonezu)',
    desertSand: '#C2B280',
    sunsetOrange: '#E07020',
    mikuTeal: '#39C5BB',
    apocalypseBrown: '#8B7355',
  },
  // ROKI (mikito-P)
  roki: {
    theme: 'ROKI',
    producer: 'mikito-P',
    mikuTeal: '#39C5BB',
    edgyBlack: '#2D2D2D',
    cleanWhite: '#F5F5F5',
    popRed: '#FF3366',
  },
  // Vampire (DECO*27)
  vampire: {
    theme: 'Vampire',
    producer: 'DECO*27',
    bloodRed: '#8B0000',
    gothicBlack: '#0D0D0D',
    mikuTeal: '#39C5BB',
    darkRomance: '#6B2D5C',
  },
  // The Disappearance of Hatsune Miku (cosMo@Bousou-P)
  disappearance: {
    theme: 'The Disappearance of Hatsune Miku',
    producer: 'cosMo@Bousou-P',
    glitchCyan: '#00FFFF',
    staticGray: '#808080',
    mikuTeal: '#39C5BB',
    binaryGreen: '#00FF00',
    errorRed: '#FF0000',
  },
  // Odds & Ends (ryo/supercell)
  oddsAndEnds: {
    theme: 'Odds & Ends - Emotional Ballad',
    producer: 'ryo (supercell)',
    softTeal: '#5FBDAA',
    warmCream: '#FFF5E1',
    nostalgicPink: '#FFB6C1',
    melancholicGray: '#A0A0A0',
  },
  // Two-Faced Lovers (wowaka)
  twoFacedLovers: {
    theme: 'Two-Faced Lovers / Ura-Omote Lovers',
    producer: 'wowaka',
    mikuTeal: '#39C5BB',
    conflictBlack: '#1A1A1A',
    tensionRed: '#CC0000',
    chaosWhite: '#FFFFFF',
  },
  // DECORATOR (livetune)
  decorator: {
    theme: 'DECORATOR - Orange Blossom Module',
    producer: 'kz (livetune)',
    designer: 'Nidy-2D-',
    orangeBlossom: '#FF7F50',
    coralPink: '#FF6B6B',
    creamWhite: '#FFF8DC',
    mikuTeal: '#39C5BB',
  },
} as const;
