/**
 * Hatsune Miku Theme - Core Palette
 *
 * All-Miku Synthesis: Every Miku version mapped to semantic purpose
 * #39C5BB is THE canonical identity color since 2007
 */

// =============================================================================
// VERSION MAPPING - Miku versions to UI semantic layers
// =============================================================================

export const versionMapping = {
  /** V2 Classic - THE canonical Miku teal since 2007 */
  identity: '#39C5BB',
  /** SEKAI - Stage performance, multi-cursor */
  stage: '#33CCBB',
  /** NT - Modern tech voice, functions */
  functions: '#00BCD4',
  /** Append Light - Airy structure, types */
  types: '#B2EBE7',
  /** Append Sweet - Warm, inviting hover */
  hover: '#5FCEC8',
  /** V4X Soft - Gentle attention, focus */
  focus: '#6DD4CD',
  /** V4X Hard - Pressed/clicked, active */
  active: '#2B9E96',
} as const;

// =============================================================================
// FREQUENCY VISUALIZER - Indent guides as audio spectrum
// =============================================================================

export const frequencyVisualizer = {
  /** Append Dark - Level 1 bass */
  bass: '#1E8A82',
  /** Append Solid - Level 2 low */
  low: '#2AA69E',
  /** V2 Classic - Level 3 mid */
  mid: '#39C5BB',
  /** NT - Level 4 high */
  high: '#3ED1C8',
  /** Append Vivid - Level 5 peak */
  peak: '#00E5D4',
  /** Append Light - Level 6 ultra */
  ultra: '#A8EBE6',
} as const;

// =============================================================================
// SEKAI REFERENCE - Project SEKAI colors
// =============================================================================

export const sekai = {
  /** Official SEKAI Miku image color */
  imageColor: '#33CCBB',
  /** Classroom pink highlight */
  classroomPink: '#FF6B9D',
  /** Empty SEKAI heterochromia - turquoise eye */
  heteroTurquoise: '#33CCBB',
  /** Empty SEKAI heterochromia - pink eye */
  heteroPink: '#FF80AB',
} as const;

// =============================================================================
// CHARACTER DESIGN COLORS
// =============================================================================

export const character = {
  hair: {
    root: '#1A8A82',
    base: '#39C5BB',
    shine: '#5DE4DB',
    tip: '#7FEDE5',
    highlight: '#B2EBE7',
    pinkStreak: '#FF6B9D',
  },
  eyes: {
    iris: '#39C5BB',
    bright: '#5DE4DB',
    pupil: '#0D1114',
    catchlight: '#FFFFFF',
    heterochromiaLeft: '#FF80AB',
  },
  skin: {
    base: '#FFE4D6',
    shadow: '#E8C8BC',
    blush: '#FFB8C8',
    highlight: '#FFF5F0',
  },
  headphones: {
    body: '#1A1F24',
    cushion: '#E05096',
    cushionGlow: '#FF80AB',
    display01: '#39C5BB',
  },
  hairTies: {
    base: '#E05096',
    highlight: '#FF80AB',
  },
  outfitTop: {
    grey: '#37474F',
    shadow: '#263238',
    highlight: '#455A64',
    tealTrim: '#39C5BB',
  },
  armWarmers: {
    black: '#111417',
    pattern: '#39C5BB',
    patternGlow: '#5DE4DB',
  },
  skirt: {
    black: '#15191D',
    tealTrim: '#39C5BB',
  },
  boots: {
    black: '#111417',
    hardware: '#263238',
    tealAccent: '#39C5BB',
  },
  tie: {
    teal: '#39C5BB',
    shadow: '#2D9E97',
  },
  armDisplay: {
    screen: '#39C5BB',
    data: '#5DE4DB',
    frame: '#37474F',
  },
  negi: {
    stalk: '#9CCC65',
    bright: '#69F0AE',
    white: '#E8F5E9',
  },
} as const;

// =============================================================================
// VOCALOID VERSIONS
// =============================================================================

export const versions = {
  v1v2: '#39C5BB',
  v3: '#3BC8BE',
  v4x: '#38C4BA',
  nt: '#3ED1C8',
  v6ai: '#41D9CF',
} as const;

// =============================================================================
// APPEND VOICEBANKS
// =============================================================================

export const append = {
  dark: '#1E8A82',
  soft: '#7DD9D2',
  light: '#A8EBE6',
  sweet: '#5FCEC8',
  vivid: '#00E5D4',
  solid: '#2AA69E',
} as const;

// =============================================================================
// V4X VOICEBANKS
// =============================================================================

export const v4xVoice = {
  original: '#39C5BB',
  hard: '#2B9E96',
  soft: '#6DD4CD',
  dark: '#1A7A74',
  sweet: '#4DD8D0',
  solid: '#2EB5AD',
} as const;

// =============================================================================
// CRYPTON FAMILY
// =============================================================================

export const cryptonFamily = {
  rinLen: {
    yellow: '#FFD740',
    orange: '#FFB74D',
    cream: '#FFF8E1',
  },
  luka: {
    pink: '#F48FB1',
    hotPink: '#EC407A',
    pale: '#FCE4EC',
  },
  kaito: {
    blue: '#42A5F5',
    navy: '#1565C0',
    ice: '#BBDEFB',
  },
  meiko: {
    red: '#EF5350',
    crimson: '#C62828',
    rose: '#FFCDD2',
  },
} as const;

// =============================================================================
// STAGE & PERFORMANCE
// =============================================================================

export const stage = {
  spotlight: '#FFFFFF',
  ambientTeal: '#00BCD4',
  accentPink: '#E91E63',
  coolBlue: '#2196F3',
  warmAmber: '#FFC107',
  holoPurple: '#B388FF',
} as const;

export const digital = {
  dataStream: '#39C5BB',
  binaryGlow: '#5DE4DB',
  gridLine: '#39C5BB30',
  scanLine: '#39C5BB15',
  glitch: '#FF5370',
} as const;

export const hologram = {
  cyan: '#4DD0E1',
  ice: '#84FFFF',
  pink: '#FF80AB',
  purple: '#B388FF',
  flicker: '#FFFFFF',
} as const;

export const frequency = {
  bass: '#1A8A82',
  low: '#2D9E97',
  mid: '#39C5BB',
  high: '#5DE4DB',
  peak: '#84FFFF',
  waveform: '#39C5BB60',
  spectrum: '#B388FF',
  beat: '#E05096',
} as const;

// =============================================================================
// BASE COLOR GROUPS
// =============================================================================

export const teals = {
  sekai: '#39C5BB',
  neon: '#5DE4DB',
  bright: '#4DD8CE',
  classic: '#39C5BB',
  stage: '#2D9E97',
  ocean: '#1A8A82',
  deep: '#0D6B65',
  tint: '#B2EBE7',
  mist: '#E0F2F1',
} as const;

export const pinks = {
  sekai: '#FF6B9D',
  hot: '#FF4081',
  accessory: '#E05096',
  soft: '#FF80AB',
  blush: '#FFB8D4',
  pale: '#FCE4EC',
} as const;

export const cyans = {
  ice: '#84FFFF',
  hologram: '#4DD0E1',
  electric: '#26C6DA',
  deep: '#00ACC1',
} as const;

export const blacks = {
  void: '#0D1114',
  sleeve: '#111417',
  outfit: '#15191D',
  base: '#1A1F24',
  raised: '#1F262D',
  lifted: '#252D35',
  hover: '#2A333C',
} as const;

export const greys = {
  charcoal: '#263238',
  gunmetal: '#37474F',
  slate: '#455A64',
  steel: '#546E7A',
  silver: '#78909C',
  platinum: '#B0BEC5',
} as const;

export const accents = {
  amber: '#FFD740',
  gold: '#FFCA28',
  orange: '#FFAB40',
  coral: '#FF5370',
  coralGlow: '#FF8A80',
  green: '#9CCC65',
  greenBright: '#69F0AE',
  blue: '#40C4FF',
  purple: '#B388FF',
} as const;

export const foregrounds = {
  bright: '#ECEFF1',
  primary: '#C8DCD9',
  secondary: '#90B8B2',
  muted: '#78909C',
  comment: '#5A7A7A',
  docComment: '#6B8A8A',
  ghost: '#455A64',
} as const;

export const semantic = {
  success: '#9CCC65',
  warning: '#FFD740',
  error: '#FF5370',
  info: '#4DD0E1',
} as const;

// =============================================================================
// SEASONAL
// =============================================================================

export const seasonal = {
  sakura: {
    cherry: '#FFB7C5',
    petal: '#FFDDE5',
    branch: '#8B5A5A',
    leaf: '#9CCC65',
  },
  snow: {
    ice: '#E0F7FA',
    frost: '#B3E5FC',
    glacier: '#81D4FA',
    snowflake: '#FFFFFF',
  },
  halloween: {
    pumpkin: '#FF9800',
    night: '#1A1A2E',
    purple: '#9C27B0',
    ghost: '#E0E0E0',
  },
  summer: {
    sky: '#4FC3F7',
    sun: '#FFD54F',
    ocean: '#26C6DA',
    sand: '#FFE0B2',
  },
} as const;
