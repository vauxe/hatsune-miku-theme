/**
 * Hatsune Miku Theme - Core Palette
 *
 * All-Miku Synthesis: Every Miku version mapped to semantic purpose
 * #39C5BB is THE canonical identity color since 2007
 * Color derived from YAMAHA synthesizers' signature blue-green (DX-100/DX-7)
 */

// =============================================================================
// HATSUNE MIKU - Character Design Colors (KEI Original 2007)
// =============================================================================

export const character = {
  hair: {
    root: '#1A8A82',       // Darkest areas near scalp
    base: '#39C5BB',       // Primary hair color (canonical teal)
    shine: '#5DE4DB',      // Main visible color in light
    tip: '#7FEDE5',        // Bright shine areas
    highlight: '#B2EBE7',  // Specular highlights
    pinkStreak: '#FF6B9D', // Pink streak accent (some artwork)
  },
  eyes: {
    iris: '#39C5BB',       // Same as hair base (aqua)
    bright: '#5DE4DB',     // Lighter reflection
    pupil: '#0D1114',      // Deep black
    catchlight: '#FFFFFF', // Pure white reflection
    heterochromiaLeft: '#FF80AB', // Project Sekai Empty SEKAI form
  },
  skin: {
    base: '#FFE4D6',
    shadow: '#E8C8BC',
    blush: '#FFB8C8',
    highlight: '#FFF5F0',
  },
  headphones: {
    body: '#1A1F24',       // Dark frame
    cushion: '#E05096',    // Signature magenta-pink
    cushionGlow: '#FF80AB', // Lighter pink accent
    display01: '#39C5BB',  // Teal "01" display
  },
  hairTies: {
    base: '#E05096',       // Matches headphone cushion
    highlight: '#FF80AB',  // Lighter pink
  },
  outfitTop: {
    grey: '#37474F',       // Primary grey
    shadow: '#263238',     // Darkest areas
    highlight: '#455A64',  // Light areas
    tealTrim: '#39C5BB',
  },
  armWarmers: {
    black: '#111417',
    pattern: '#39C5BB',    // Digital pattern
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
