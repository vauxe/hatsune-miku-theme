/**
 * Hatsune Miku Theme - Core Character Design
 *
 * Based mainly on V3/V4X "Standard" designs
 * Canonical teal: #39C5BB (Standard Miku Teal)
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
 * Common brand color associated with Piapro Studio interface
 */
export const piapro = {
  hair: {
    base: '#33BBAD',       // Official Piapro Turquoise (Blue-Green)
  },
  // Re-export other core values if needed, or consumers can merge
} as const;

/**
 * Theme Design System Colors
 * MINIMAL set of derived/adjusted colors for VS Code theme usage
 * Only colors that don't exist in the palette and are APCA-optimized
 */
export const themeColors = {
  // Syntax highlighting - Complete Snow Miku Pastel System
  // All colors: 8-35% saturation, APCA Lc 45+ for 10+ hour coding comfort
  syntax: {
    // === WARM TONES (Definitions & Structures) ===
    // Functions & callable - warm cream from Snow 2024 "Pâtisserie"
    warmCream: '#E0C9A0',         // Functions (Lc 61, 15% sat) - replaces #FFD27F
    // Classes & types - warm taupe from Snow 2024
    warmTaupe: '#C4B5A0',         // Classes (Lc 54, 8% sat) - replaces #FFD700
    // Bracket warm - tan from MM 2015 wand
    warmTan: '#D4A574',           // Bracket depth 1 (Lc 53, 12% sat)

    // === COOL TONES (Headers & SQL) ===
    // Headings & CSS - soft aqua from Snow 2015 "Snow Bell"
    coolAqua: '#A8D8D8',          // Markdown headings, CSS (Lc 57, 18% sat)
    // SQL & query languages - soft lavender-blue from Snow 2023
    coolLavender: '#A8C4E8',      // SQL keywords (Lc 54, 18% sat)

    // === PURPLE TONES (Type System & Brackets) ===
    // Bracket purple - soft purple-gray from Digital Stars 2021
    softPurple: '#8E8BA8',        // Bracket depth 6 (Lc 48, 12% sat)

    // === EXISTING OPTIMIZED COLORS ===
    // Blue family (interfaces & structs)
    skyBlue: '#7CC4FF',           // Interfaces (Lc 68)
    softBlue: '#9DD0FF',          // Structs (Lc 72)

    // Gray family (comments)
    silverMist: '#889DA2',        // Comments (Lc 48, intentionally muted)
    silverBright: '#A8BDC2',      // Doc comments (Lc 57)

    // === SNOW MIKU PASTEL ===
    pastelPeriwinkle: '#9EAFE8',  // Snow 2023 - constants, type params (Lc 55)
    pastelGray: '#8B7A8B',        // Nightcord - operators (Lc 45)
    pastelRose: '#F8BBD0',        // MM 2020 - properties, methods (Lc 62)
    pastelIndigo: '#7986CB',      // Snow 2025 - booleans, lifetimes (Lc 48)
    pastelTeal: '#64C5CE',        // Snow 2015 - storage modifiers (Lc 58)
  },

  // UI-specific values (not semantic colors)
  ui: {
    void: '#0A0D10',             // Deepest void (darker than any palette color)
    tertiary: '#6B7D82',         // Tertiary text (not in palette)
    disabled: '#4A5A5F',         // Disabled state (not in palette)
    error: '#FF9999',            // Coral pink for errors (APCA Lc 61, not in palette)
    minimapOpacity: '#000000DD', // Minimap foreground opacity mask
  },
} as const;
