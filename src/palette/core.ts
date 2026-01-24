/**
 * Hatsune Miku Theme - Core Character Design
 *
 * Original KEI design (2007) - CV01
 * Canonical teal: #39C5BB (derived from YAMAHA DX-7 synthesizer blue-green)
 */

export const character = {
  // Hair - signature twin tails
  hair: {
    base: '#39C5BB',       // Primary hair color (canonical teal)
    shadow: '#1A8A82',     // Darker areas near roots
    highlight: '#5DE4DB',  // Light shine areas
    bright: '#7FEDE5',     // Brightest highlights
    tip: '#B2EBE7',        // Lightest tips in some art
  },

  // Eyes - matching teal
  eyes: {
    iris: '#39C5BB',
    highlight: '#5DE4DB',
    pupil: '#0D1114',
  },

  // Skin
  skin: {
    base: '#FFE4D6',
    shadow: '#E8C8BC',
    blush: '#FFB8C8',
    highlight: '#FFF5F0',  // Skin highlight
    nails: '#39C5BB',      // Teal nail polish
  },

  // Marks - Signature 01 Tattoo
  marks: {
    tattoo: '#E60033', // Miku Red
  },

  // Headphones - signature accessory
  headphones: {
    frame: '#1A1F24',         // Dark grey frame
    cushion: '#E05096',       // Magenta-pink cushion
    display: '#39C5BB',       // Teal "01" display
  },

  // Hair ties - cube-shaped (Black with magenta border)
  hairTies: {
    base: '#111417',          // Black/Dark Grey body
    outline: '#E05096',       // Magenta pink border
  },

  // Top - grey sleeveless with teal trim
  top: {
    main: '#37474F',
    shadow: '#263238',
    trim: '#39C5BB',
  },

  // Arm warmers - black with digital pattern
  armWarmers: {
    base: '#111417',
    pattern: '#39C5BB',
    trim: '#39C5BB',       // Teal cuff trim
  },

  // Skirt - black pleated with teal trim
  skirt: {
    base: '#15191D',
    trim: '#39C5BB',
    accessory: '#A1B3B6',  // Wallet chain (Silver)
  },

  // Boots - thigh-high black
  boots: {
    base: '#111417',
    hardware: '#263238',   // Boot hardware
    accent: '#39C5BB',
    soles: '#39C5BB',      // Teal soles
  },

  // Tie - teal necktie
  tie: {
    base: '#39C5BB',
    shadow: '#2D9E97',
  },

  // Arm display - digital readout
  armDisplay: {
    screen: '#39C5BB',
    data: '#5DE4DB',       // Data display color
    frame: '#37474F',
  },

  negi: {
    stalk: '#9CCC65',
    bright: '#69F0AE',
    white: '#E8F5E9',
  },
} as const;

/**
 * Official Piapro Color Specification
 * The legally registered color by Crypton Future Media
 */
export const piapro = {
  hair: {
    base: '#33BBAD', // Official Piapro Turquoise
  },
  // Re-export other core values if needed, or consumers can merge
} as const;
