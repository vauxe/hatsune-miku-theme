/**
 * Hatsune Miku — Core Character Design
 *
 * Canonical, non-versioned identity palette.
 * - This captures the baseline "Miku" look used across media.
 * - It must stay independent from voicebank releases.
 * - Voicebank-specific colors live in `voicebanks.ts` and are the
 *   source of truth for release-era variation.
 */

export const character = {
  // Identity anchors
  // These are stable signature colors (not tied to a specific voicebank release).
  hair: {
    base: '#39C5BB',       // Primary hair color (canonical teal)
    shadow: '#067C82',     // Root/shaded teal
    highlight: '#84CCC8',  // Main shine
    bright: '#98D2C6',     // Bright sheen
    tip: '#C0E2D8',        // Pale tip glow
  },

  // Eyes
  eyes: {
    iris: '#2EA2B4',
    highlight: '#84CCC8',
    pupil: '#0D1114',
  },

  // Skin
  skin: {
    base: '#FCE6DC',
    shadow: '#E2C2B8',
    blush: '#E8B4B6',
    highlight: '#FEF0E8',
    nails: '#39C5BB',      // Teal nail polish
  },

  // Marks - Signature 01 Tattoo
  marks: {
    tattoo: '#E60033', // Miku Red
  },

  // Headphones - signature accessory
  headphones: {
    frame: '#1A1F24',         // Dark grey frame
    cushion: '#E62084',       // Magenta cushion accent
    display: '#39C5BB',       // Teal "01" display
  },

  // Hair ties - cube-shaped
  hairTies: {
    base: '#111417',
    outline: '#E62084',
  },

  // Costume neutrals (canonical silhouette)
  top: {
    blouse: '#FCF8F0',        // Off-white shirt
    main: '#BEC8D1',          // Silver vest
    shadow: '#AEB8C2',        // Fold shadow tone
    trim: '#39C5BB',
  },

  // Arm warmers - dark fabric with synth-like pattern
  armWarmers: {
    base: '#111417',
    pattern: '#86CECB',
    trim: '#39C5BB',
  },

  // Skirt - dark pleated with luminous bar details
  skirt: {
    base: '#1A1F24',
    bars: '#86CECB',
    trim: '#39C5BB',
    accessory: '#A1B3B6',
  },

  // Boots - thigh-high black
  boots: {
    base: '#14181D',
    hardware: '#2A2E36',
    accent: '#39C5BB',
    soles: '#39C5BB',
  },

  // Tie
  tie: {
    base: '#39C5BB',
    shadow: '#1A8A82',
  },

  // Arm display
  armDisplay: {
    screen: '#39C5BB',
    data: '#84CCC8',
    frame: '#1A1F24',
  },

  // Meme accessory (kept for decorative token usage)
  negi: {
    stalk: '#8FBF68',
    bright: '#79E2A8',
    white: '#EAF6E8',
  },
} as const;
