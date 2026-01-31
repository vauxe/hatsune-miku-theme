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
 *
 * READABILITY PRINCIPLES:
 * - Minimum APCA Lc 60 for primary syntax tokens against #15191D background
 * - Distinct hue families for different semantic categories
 * - No identical colors for semantically different token types
 * - Maximum 3 colors per hue family to ensure distinction
 *
 * HUE FAMILY ASSIGNMENTS (for 8+ hour coding comfort):
 * =====================================================
 * 1. TEAL (170-185°)  : Keywords, builtins - Miku signature
 * 2. BLUE (200-230°)  : Interfaces, numbers, structs
 * 3. PURPLE (260-290°): Namespaces, decorators, enums
 * 4. PINK (320-350°)  : Methods, parameters
 * 5. GOLD (40-55°)    : Functions, classes
 * 6. GREEN (100-130°) : Strings, regex
 * 7. NEUTRAL         : Variables, operators, comments
 */
export const themeColors = {
  // Syntax highlighting - Complete Snow Miku Pastel System
  // All primary syntax colors: APCA Lc 60+ for readability
  syntax: {
    // =========================================================================
    // GOLD FAMILY (40-55° hue) - Callable Definitions
    // Functions and Classes should be easily distinguishable
    // =========================================================================
    warmCream: '#E8D0A0',         // Functions (Lc 65, hue 45°) - warmer, more yellow
    warmGold: '#D4C4B0',          // Classes (Lc 60, hue 35°) - cooler, more gray-gold

    // =========================================================================
    // TEAL FAMILY (170-185° hue) - Control Flow & Storage
    // All boosted to Lc 60+
    // =========================================================================
    pastelTeal: '#78D0D8',        // Storage modifiers (Lc 68, hue 185°) - BOOSTED
    pastelMint: '#88E0D0',        // Type parameters (Lc 72, hue 170°) - DISTINCT from storage

    // =========================================================================
    // BLUE FAMILY (200-230° hue) - Type System
    // Each has distinct lightness for easy differentiation
    // =========================================================================
    skyBlue: '#80C8FF',           // Interfaces (Lc 68, hue 210°)
    softBlue: '#A0D8FF',          // Numbers (Lc 74, hue 205°)
    paleBlue: '#B8E0F8',          // Structs (Lc 78, hue 200°) - DISTINCT from numbers

    // =========================================================================
    // PURPLE FAMILY (260-290° hue) - Meta & Organization
    // Namespaces and Decorators now have DISTINCT colors
    // =========================================================================
    pastelLavender: '#C8B8E8',    // Namespaces (Lc 62, hue 265°) - more blue-purple
    pastelViolet: '#D8A8E0',      // Decorators (Lc 60, hue 290°) - more pink-purple
    pastelOrchid: '#E0B8E8',      // Enums (Lc 66, hue 285°)
    pastelOrchidLight: '#E8D0F0', // Enum members (Lc 72, hue 280°)

    // =========================================================================
    // PINK/PEACH FAMILY (320-30° hue) - Data Flow
    // Methods, Properties, Parameters all distinct
    // =========================================================================
    pastelRose: '#F0B8C8',        // Methods (Lc 64, hue 345°) - pinker
    pastelPeach: '#F8D0C0',       // Properties (Lc 70, hue 20°) - more orange
    pastelCoral: '#FFD8D0',       // Constants (Lc 76, hue 15°) - lightest, warmest

    // =========================================================================
    // INDIGO FAMILY (230-250° hue) - Literals & Lifetimes
    // =========================================================================
    pastelIndigo: '#A8B8E8',      // Booleans (Lc 62, hue 225°) - BOOSTED
    pastelSlate: '#B0C0E0',       // Lifetimes (Lc 64, hue 220°) - DISTINCT from bool

    // =========================================================================
    // GREEN FAMILY (100-150° hue) - Already in character palette
    // Strings use character.negi colors
    // =========================================================================

    // =========================================================================
    // NEUTRAL FAMILY - Intentionally subdued
    // =========================================================================
    silverMist: '#90A0A8',        // Comments base (Lc 52, intentionally muted)
    silverBright: '#B0C0C8',      // Doc comments (Lc 60) - BOOSTED

    // =========================================================================
    // HEADINGS & SPECIAL
    // =========================================================================
    coolAqua: '#B0E0E0',          // Markdown headings (Lc 72) - BOOSTED
    coolLavender: '#C0D8F0',      // SQL keywords (Lc 68) - BOOSTED
    warmTan: '#D8B088',           // Bracket warm (Lc 58)
    softPurple: '#B0A8C8',        // Bracket purple (Lc 58)
  },

  // UI-specific values (not semantic colors)
  ui: {
    void: '#0A0D10',             // Deepest void (darker than any palette color)
    tertiary: '#6B7D82',         // Tertiary text (not in palette)
    disabled: '#6A7A80',         // Disabled state (Lc 35+) - BOOSTED for readability
    disabledSubtle: '#4A5A5F',   // Very subtle disabled (for decorations only)
    ghostText: '#7A9A98',        // Ghost text (Lc 45+) - readable AI suggestions
    placeholder: '#6A7A80',      // Placeholder text (Lc 35+) - visible but subdued
    error: '#FF9999',            // Coral pink for errors (APCA Lc 61, not in palette)
    minimapOpacity: '#000000DD', // Minimap foreground opacity mask
    // Subtle decorations (Lc 15-25 range for non-text elements)
    whitespace: '#3A4448',       // Whitespace markers (Lc 15)
    ruler: '#2A3A3C',            // Rulers (Lc 12) - very subtle
    terminalHint: '#5A8A88',     // Terminal hints (Lc 40) - BOOSTED
    terminalGuide: '#2A4A48',    // Terminal command guide (Lc 15)
  },

  // Markdown-specific variations (for distinction from code syntax)
  // All need ΔE 5+ from their similar counterparts AND Lc 60+
  markdown: {
    codeBlock: '#88D898',        // Markdown code Lc 71 - cyan-green vs yellow-green string (#9CCC65) - ΔE ~12
    quote: '#98B8C8',            // Block quotes Lc 62, cyan shift from neutral comment (#B0C0C8) - ΔE ~7
    docComment: '#A8C8D0',       // Doc comments Lc 68 - cyan tint vs neutral comment - ΔE ~5
  },
} as const;
