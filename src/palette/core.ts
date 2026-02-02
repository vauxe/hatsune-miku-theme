/**
 * Hatsune Miku Theme - Core Character Design
 *
 * Based mainly on V3/V4X "Standard" designs
 * Canonical teal: #39C5BB (Standard Miku Teal)
 */

import { mikuV3, mikuAppend, mikuNT, mikuV4Chinese } from './voicebanks';
import { snowMiku, magicalMirai, digitalStars } from './events';
import { sakuraMiku, gundam45thMiku } from './derivatives';

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

// Helper to adjust lightness/saturation for readability if needed (placeholder for manual tuning)
const tune = (hex: string) => hex; 

export const themeColors = {
  syntax: {
    // =========================================================================
    // KEYWORDS - Signature Miku Teal/Cyan (marathon-safe)
    // =========================================================================
    // NOTE: Readability tooling targets:
    // - APCA: Primary Lc ≥ 75 and ≤ 90 (avoid halation)
    // - Chroma: Primary Cz 8-35 (JzCzhz percentage scale)
    // - Distinction: ΔEz ≥ 15 for adjacency pairs (Jzazbz)
    //
    // NOTE: Inline color comments use CIE LCH notation (C* ##, h ###°) for
    // historical reference. The tooling uses Jzazbz/JzCzhz for analysis.
    //
    // COLOR DESIGN PHILOSOPHY - "Digital Diva":
    // Each syntax category uses a distinct hue family from Miku's visual identity.
    // Colors are calibrated for 8+ hour coding sessions without eye strain.
    //
    // HUE FAMILIES (maximally separated for distinction):
    // - TEAL (168°): Keywords - Miku's signature color
    // - MINT-GREEN (145°): Storage/Methods - Fresh, natural
    // - GOLD (52°): Functions - Magical Mirai wand glow
    // - LIME (105°): Classes/Strings - Negi (spring onion)
    // - SKY-CYAN (195°): Variables - Snow Miku ice
    // - PEACH (28°): Parameters - Sakura Miku warmth
    // - CORAL (8°): Tags/Properties - Gentle accent
    // - ROSE-PINK (340°): Interfaces - Idol concert lights
    // - LAVENDER (285°): Types - Twilight sky
    // - ORCHID (310°): Modifiers - Digital Stars neon

    keyword: '#70F0D0',           // Mint-teal (Lc 83, C* 43, h 168°) - Digital Diva signature
    keywordControl: '#60E8D8',    // Cooler teal (h 175°) for flow keywords
    keywordAlt: '#50D8C8',        // Darker teal variant (h 170°)

    // =========================================================================
    // STORAGE / TYPES - Spread across spectrum for distinction
    // =========================================================================
    // COLOR STRATEGY: Use high-chroma hues that work at Lc 75+
    // Pink/magenta (h 310-340°) achieves good chroma at high lightness
    //
    // PRIMARY TIER (Lc 75+, C* 30+) - high frequency tokens
    storage: '#98E8B8',           // Light mint (Lc 84, C* 40, h 135°) - MOVED away from keyword h168°
    enum: '#80E8F0',              // Ice-cyan (Lc 84, C* 35, h 188°) - enum names (more saturated)
    macro: '#D0D8F8',             // Bright periwinkle (Lc 84, C* 22, h 242°) - h242° DISTINCT from number (h218°) and variable (h195°)
    // TYPE SYSTEM - spread across spectrum for distinction
    storageModifier: '#F8C0E0',   // Light magenta (Lc 80, C* 30, h 325°) - modifiers
    type: '#E8C8F8',              // Bright orchid (Lc 80, C* 27, h 290°) - type annotations
    typeParameter: '#B8D0F8',     // Light blue (Lc 80, C* 25, h 225°) - generic params (SHIFTED to blue)
    enumMember: '#F8D0E0',        // Light rose (Lc 84, C* 22, h 345°) - enum values

    // =========================================================================
    // FUNCTIONS - Gold/Amber (Magical Mirai Wand) - h 45-55°
    // =========================================================================
    function: '#F0D070',          // Warm gold (Lc 78, C* 51, h 52°)
    method: '#78E8C0',            // Fresh mint (Lc 82, C* 40, h 155°) - DISTINCT from keyword

    // =========================================================================
    // CLASSES - Negi lime / Pink headphone accent (h 100-115° and h 330-340°)
    // =========================================================================
    class: '#C8E888',             // Negi-lime (Lc 84, C* 50, h 105°)
    interface: '#FFC8E8',         // Bright Miku pink (Lc 82, C* 30, h 335°) - headphone accent
    struct: '#C8E888',            // Same as class (lime) - struct = class (data type definitions)

    // =========================================================================
    // VARIABLES - Sky Cyan / Warm accents (h 195° and h 25-45°)
    // =========================================================================
    variable: '#78E0F8',          // Sky cyan (Lc 80, C* 32, h 195°)
    parameter: '#FFC8A0',         // Warm peach (Lc 80, C* 35, h 35°) - brighter
    property: '#F8C8A8',          // Salmon-peach (Lc 81, C* 32, h 28°) - SHIFTED to salmon (h 28° vs constant h 52°)

    // =========================================================================
    // STRINGS - Mint-green (h 128°) - shifted further from class (h 105°)
    // =========================================================================
    string: '#90F8A8',            // Bright mint (Lc 88, C* 52, h 125°) - traditional green, HIGH chroma
    stringTemplate: '#90E8A8',    // Light mint-green (Lc 82, C* 42, h 135°)
    regex: '#F8D0A0',             // Warm peach (Lc 83, C* 32, h 40°) - SHIFTED away from function (h52°)

    // =========================================================================
    // NUMBERS & LITERALS - Distinct from variables
    // =========================================================================
    number: '#B0D8F8',            // Light sky blue (Lc 81, C* 28, h 218°) - Brighter for Lc 75+
    boolean: '#F0D0F8',           // Light orchid (Lc 83, C* 22, h 295°) - matches type family

    // =========================================================================
    // CONSTANTS / TAGS - Well-separated hues
    // =========================================================================
    constant: '#E0D888',          // Golden-lime (Lc 82, C* 42, h 75°) - SHIFTED away from class (h105°)
    tag: '#FFC0C8',               // Bright salmon-pink (Lc 80, C* 30, h 355°) - brighter
    attribute: '#E8D078',         // Yellow-amber (Lc 80, C* 45, h 68°) - SHIFTED to h68°

    // =========================================================================
    // META
    // =========================================================================
    comment: '#E0D0F8',           // Brighter lavender-gray (Lc 81, C* 22, h 280°)
    commentDoc: '#A8E0D8',        // Teal doc-comments (Lc 80, C* 20, h 170°)

    // =========================================================================
    // SUPPORT (Library/Built-in) - MERGED with user-defined equivalents
    // =========================================================================
    // Strategy: Same color as user-defined counterparts (like most popular themes)
    // This reduces color count from ~25 to ~12, dramatically improving distinction
    supportFunction: '#F0D070',   // Same as function (gold) - console.log = myFunc
    supportClass: '#C8E888',      // Same as class (lime) - Array = MyClass
    supportType: '#E8C8F8',       // Same as type (orchid) - string = MyType
    supportConstant: '#E0D888',   // Same as constant (golden-lime) - Math.PI = MY_CONST
    supportVariable: '#78E0F8',   // Same as variable (sky cyan) - process = myVar

    // =========================================================================
    // BRACKETS (Rainbow) - Maximum hue separation (60° apart minimum)
    // =========================================================================
    bracket1: '#F8C0A0', // Peach (h 28°) Lc 78
    bracket2: '#E8C8F0', // Light orchid (h 285°) Lc 81
    bracket3: '#B4DC78', // Negi yellow-green (h 105°) Lc 76
    bracket4: '#70F0D0', // Teal (h 168°) Lc 83
    bracket5: '#78E0F8', // Sky cyan (h 195°) Lc 80
    bracket6: '#F0D070', // Gold (h 52°) Lc 78

    // Legacy keys used by workbench.ts (preserved/aliased)
    pastelMint: '#70F0D0',
    pastelTeal: '#60E8D8',
    keywordAltLegacy: '#50D8C8',
    warmCream: '#F0D070',
    warmGold: '#F0E8A0',
    classGold: '#C8E888',
    pastelPeach: '#FFC0A0',
    pastelCoral: '#FFC0B8',       // Updated to match tag
    skyBlue: '#80E0F8',
    coolCyan: '#60E8D8',
    paleBlue: '#70E8F8',          // Updated to match number
    pastelIndigo: '#F8D0B8',      // Updated to match typeParameter
    softBlue: '#78F0E8',          // Updated to match enum
    pastelOrchid: '#FFC8A8',      // Updated to match enumMember
    pastelOrchidLight: '#FFC0B0', // Updated to match storageModifier
    pastelLavender: '#FFC8B0',    // Updated to match type
    pastelRose: '#FFC8B8',        // Updated to match interface
    pastelViolet: '#F8D0B8',      // Updated to match typeParameter
    pastelSlate: '#D8E0F8',
    silverMist: '#A8E0D8',
    silverBright: '#D0E8D8',
    coolAqua: '#80E0F8',
    coolLavender: '#F8D8B0',      // Updated to match boolean
    warmTan: '#F8D8A0',
    softPurple: '#FFC8A8',        // Updated to match enumMember
    bracketPink: '#FFC0B0',       // Updated to match storageModifier
    bracketMint: '#B4DC78',
  },

  // UI-specific values
  ui: {
    void: '#0A0D10',             // Deepest void
    pureWhite: '#FFFFFF',        // Pure white for max contrast
    nearWhite: '#F8F8F8',        // Near white (Lc 97)
    tertiary: '#6B7D82',         // Tertiary text
    disabled: '#6B7D82',         // Disabled state (Non-Text ≥30 on void/base)
    disabledSubtle: '#4A5A5F',   // Very subtle disabled
    ghostText: '#7A9A98',        // Ghost text (Lc 45+)
    placeholder: '#708388',      // Placeholder text (Non-Text Lc 30+)
    error: '#FFC0E8',            // Pink error (C* 30+ for accent tier)
    minimapOpacity: '#000000DD', // Minimap foreground opacity mask
    whitespace: '#6B7D82',       // Whitespace markers (Non-Text Lc 30+)
    ruler: '#6B7D82',            // Rulers (Non-Text Lc 30+)
    terminalHint: '#5A8A88',     // Terminal hints (Lc 40)
    terminalGuide: '#3A6A68',    // Terminal command guide (Non-Text ≥30)
    operator: '#FFC0E0',         // Brighter Pink/Magenta (Lc 70+)
    linkActive: '#70E0D8',       // Active links (Lc 78) - vibrant teal
    deprecated: '#E4C8FF',       // Deprecated (C*≥30) - lavender-magenta
    variableLanguage: '#70F0E8', // Language variables (Lc 84) - bright teal (h 175°) - shifted from h185° for variable distinction
  },

  // Semantic colors (APCA Lc 80+ for readability)
  semantic: {
    success: '#90F0B8',          // Bright mint (Lc 86, C* 35)
    warning: '#F8D8A0',          // Golden amber (Lc 86) - same as warmCream
    error: '#FFC0E8',            // Pink error (C* 30+ for accent tier)
    info: '#88F0E8',             // Miku cyan (Lc 87)
  },

  // Terminal ANSI colors (optimized for void background, Lc 75+)
  terminal: {
    black: '#15191D',            // Darker than text
    red: '#FFC0A0',              // Warm coral-red (C*≥30)
    green: '#70F0D0',            // Teal-green success (ΔE≥20 vs red/yellow)
    yellow: '#F0D070',           // Gold warning (ΔE≥20 vs red/green)
    blue: '#B4C4FF',             // Blue-violet (C*≥30) - distinct from cyan/magenta
    magenta: '#FFC0F8',          // Magenta (ΔE≥20 vs red/blue)
    cyan: '#88F0E8',             // Miku cyan (Lc 87)
    white: '#E0D0C0',            // Warm off-white (Lc 79+) - DISTINCT from brightWhite
    brightBlack: '#98A8B8',      // Bright gray (Lc 62)
    brightRed: '#FFD8D8',        // Light coral (Lc 87)
    brightGreen: '#98F0B8',      // Bright mint (cap below Lc 90)
    brightYellow: '#F8D8A0',     // Warm amber (cap below Lc 90)
    brightBlue: '#C8E0FF',       // Light blue (Lc 86)
    brightMagenta: '#FFD0E8',    // Light rose (Lc 85)
    brightCyan: '#88F0E8',       // Bright cyan (cap below Lc 90)
    brightWhite: '#C0E8FF',      // Icy bright white (ΔE≥20 vs white, cap below Lc 90)
  },

  // Git decoration colors (Lc 75+ for sidebar, ΔE 15+ between stages)
  // Stage colors use different hues AND lightness for clear distinction
  git: {
    added: '#98F0B8',            // Bright mint (Lc 87) - green 140°
    modified: '#F8D8A0',         // Warm cream (Lc 86) - gold 48°
    deleted: '#FFB4AE',          // Red delete (C*≥30, Lc≥70 on sidebar bg)
    untracked: '#88E8F0',        // Miku cyan (Lc 85) - cyan 185°
    conflicting: '#B4C4FF',      // Blue-violet conflict (ΔE≥20 vs deleted)
    stageModified: '#88E8F0',    // Cyan stage-modified (ΔE≥20 vs modified gold)
    stageDeleted: '#E8C8FF',     // Light lavender (Lc 75+) - staged delete distinct from delete red
    renamed: '#D8C8F0',          // Lavender (Lc 82) - 275°
    submodule: '#B8D8F8',        // Sky blue (Lc 84) - 220°
  },

  // Symbol icon colors (Lc 75+ for visibility, ΔE 15+ between similar types)
  // Maximized hue separation for all similar symbol pairs
  symbol: {
    array: '#78D0E8',            // Cool cyan (Lc 80) - 195°
    boolean: '#C8B8F0',          // Purple-violet (Lc 76) - 275° DISTINCT from number (220°)
    constructor: '#78C8B0',      // Teal (Lc 74) - 160°
    enumerator: '#E8C0F0',       // Bright orchid (Lc 79) - 300° DISTINCT from interface (255°) ΔE 20+
    enumeratorMember: '#F0D8A0', // Gold (Lc 85) - 55°
    field: '#FFD8A8',            // Warm amber (Lc 86) - 40° DISTINCT from property (355°)
    function: '#F8D898',         // Golden amber (Lc 84) - 48°
    interface: '#B8C8FF',        // Indigo-blue (Lc 80) - 255° DISTINCT from enum (300°) ΔE 20+
    method: '#FFD0C8',           // Salmon (Lc 83) - 15°
    module: '#C0E8D0',           // Mint-sage (Lc 87) - 140° DISTINCT from namespace (290°)
    namespace: '#E0D0F0',        // Pale orchid (Lc 82) - 290°
    operator: '#B8D8E8',         // Cyan-silver (Lc 83) - 195°
    property: '#FFA0A0',         // Red-coral (Lc 72) - 355° DISTINCT from method (15°) ΔE 20+
    reference: '#C8E0A0',        // Yellow-lime (Lc 84) - 90° DISTINCT from variable (160°)
    snippet: '#C8F0A0',          // Yellow-green (Lc 87) - 95°
    string: '#B8F0A0',           // Lime (Lc 88) - 100°
    struct: '#78D8E8',           // Ice cyan (Lc 80) - 195° DISTINCT from interface (255°)
    typeParameter: '#F0C8D8',    // Rose (Lc 81) - 350°
    variable: '#78F0C8',         // Mint-teal (Lc 85) - 160°
    folder: '#60D0B8',           // Miku teal (Lc 76) - 165°
    package: '#F8D0A0',          // Warm tan (Lc 84) - 45°
    number: '#B8D8FF',           // Sky-periwinkle (Lc 83) - 220° DISTINCT from boolean (275°)
    constant: '#F8B8D8',         // Pink (Lc 78) - 340° DISTINCT from boolean (275°) ΔE 30+
  },

  // Debug expression colors
  debug: {
    name: '#FFD0D0',             // Soft rose (Lc 85)
    value: '#C8F0A0',            // Lime green (Lc 87)
    string: '#D0F0A8',           // Lime (Lc 88) - matches string syntax
  },

  // Markdown-specific variations (ΔE≥20 from code syntax AND comments)
  markdown: {
    codeBlock: '#88F0F8',        // Markdown code (C*≥30) - bright cyan
    quote: '#7FE0FF',            // Block quotes (C*≥30) - sky cyan
    docComment: '#A8D8E0',       // Doc comments (Lc 82, C* 25) - silver-cyan
    alertImportant: '#F0C0F8',   // Alert important (C*≥30) - magenta
    alertNote: '#88F0F8',        // Alert note (C*≥30) - bright cyan
    alertTip: '#90F0B8',         // Alert tip (Lc 87, C* 43) - bright mint (145°) DISTINCT from note
  },
} as const;
