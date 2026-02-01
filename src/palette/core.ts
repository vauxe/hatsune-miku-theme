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

export const themeColors = {
  syntax: {
    // =========================================================================
    // KEYWORDS - Signature Miku Cyan (180° hue)
    // All Lc 80+ for comfortable long reading
    // =========================================================================
    pastelMint: '#90F8FF',        // Keywords (Lc 91, C* 31) - ice-cyan (180°) Digital Diva
    pastelTeal: '#80F0C0',        // Storage modifiers (Lc 87, C* 42) - mint-green (150°) SHIFTED
    keywordAlt: '#70F8E0',        // Keyword variant (Lc 89, C* 36) - green-teal (163°)

    // =========================================================================
    // FUNCTIONS & CLASSES - Golden spectrum (45-75° hue)
    // Distinct hue separation for functions (48°) vs classes (68°)
    // =========================================================================
    warmCream: '#F8D898',         // Functions (Lc 84, C* 36) - golden amber (48°)
    warmGold: '#F0D890',          // Classes alt (Lc 85, C* 38) - warm gold (52°)
    classGold: '#F0E8A0',         // Classes (Lc 90, C* 37) - yellow-gold (68°)
    parameter: '#D0D8FF',         // Parameters (Lc 83, C* 21) - periwinkle (240°)

    // =========================================================================
    // PROPERTIES & CONSTANTS - Distinct hue separation
    // Properties (20° peach) vs Constants (310° orchid) = ΔE 45+
    // =========================================================================
    pastelPeach: '#FFD0C0',       // Properties (Lc 83, C* 20) - warm peach (20°)
    pastelCoral: '#F8C8E8',       // Constants (Lc 82, C* 24) - orchid-pink (320°)

    // =========================================================================
    // TYPES & INTERFACES - Blue-Indigo spectrum (200-265° hue)
    // type (200°) vs interface (265°) = ΔE 30+ vs keyword (180°)
    // =========================================================================
    skyBlue: '#D8D0FF',           // Interfaces (Lc 83, C* 23) - indigo (265°) BOOSTED
    coolCyan: '#B8E0FF',          // Types (Lc 86, C* 25) - sky-blue (205°) BOOSTED
    paleBlue: '#D0D8FF',          // Structs (Lc 84, C* 22) - periwinkle (240°)

    // =========================================================================
    // NUMBERS & BOOLEANS - Periwinkle-violet spectrum (230-265° hue)
    // BOOSTED lightness for Lc 80+
    // =========================================================================
    pastelIndigo: '#D0D8FF',      // Numbers (Lc 84, C* 22) - periwinkle (235°) BOOSTED
    softBlue: '#D8D0FF',          // Booleans (Lc 80, C* 22) - pale violet (265°)

    // =========================================================================
    // ENUMS & NAMESPACES - Orchid spectrum (280-300° hue)
    // Enum members SHIFTED to gold for variable/enum distinction
    // =========================================================================
    pastelOrchid: '#E8D0F8',      // Enums (Lc 82, C* 23) - orchid (290°)
    pastelOrchidLight: '#F0D8A0', // Enum members (Lc 85, C* 35) - GOLD (55°) for variable ΔE
    pastelLavender: '#E0D8FF',    // Namespaces (Lc 85, C* 21) - lavender (265°)

    // =========================================================================
    // METHODS & DECORATORS - Distinct hue separation
    // Methods: salmon (10°), Decorators: orchid (300°) = ΔE 35+
    // =========================================================================
    pastelRose: '#FFD0C8',        // Methods (Lc 83, C* 18) - soft salmon (10°)
    pastelViolet: '#F8D0F8',      // Decorators (Lc 85, C* 22) - orchid (300°) BOOSTED

    // =========================================================================
    // VARIABLES - Mint-teal (160° distinct from keywords 180°, strings 85°)
    // =========================================================================
    variable: '#78F0C8',          // Variables (Lc 85, C* 42) - mint-teal (160°)

    // =========================================================================
    // STRINGS - Yellow-Lime (85° hue) DISTINCT from variable (160°), class (68°)
    // =========================================================================
    string: '#B8F0A0',            // Strings (Lc 88, C* 45) - lime-green (100°)
    stringTemplate: '#D0F8B0',    // Template strings (Lc 91) - lighter lime
    regex: '#F0D898',             // Regex (Lc 85, C* 35) - warm gold (45°) DISTINCT from string

    // =========================================================================
    // META - Slate & Silver
    // =========================================================================
    pastelSlate: '#D8E0F8',       // Lifetimes (Lc 87, C* 18) - slate blue

    // =========================================================================
    // COMMENTS - Sage (110°) DISTINCT from strings (100°), variables (160°)
    // Bright sage-green for all overlay contexts (Lc 80+)
    // =========================================================================
    silverMist: '#D0E0C0',        // Comments (Lc 85, C* 18) - silver-sage (110°) - overlay-safe + chroma
    silverBright: '#E0D8FF',      // Doc comments (Lc 85, C* 21) - lavender (265°)

    // =========================================================================
    // MARKDOWN & SPECIAL - Distinct from code and comments
    // Headings: coral (15°), Code: cyan (195°) - both distinct from string/variable
    // =========================================================================
    coolAqua: '#FFD0C0',          // Markdown headings (Lc 84, C* 20) - soft coral (15°) BOOSTED
    coolLavender: '#C8D8F8',      // SQL keywords (Lc 85, C* 20) - soft lavender

    // =========================================================================
    // BRACKETS - Rainbow pastels with high distinction (Lc 80+)
    // =========================================================================
    warmTan: '#F8D8B0',           // Bracket warm (Lc 85, C* 24) - 45°
    softPurple: '#E0D0F8',        // Bracket purple (Lc 81, C* 22) - 275°
    bracketPink: '#F8C8D8',       // Bracket rose pink (Lc 80) - 345°
    bracketMint: '#98F0C0',       // Bracket mint green (Lc 85) - 140°
  },

  // UI-specific values
  ui: {
    void: '#0A0D10',             // Deepest void
    pureWhite: '#FFFFFF',        // Pure white for max contrast
    nearWhite: '#F8F8F8',        // Near white (Lc 97)
    tertiary: '#6B7D82',         // Tertiary text
    disabled: '#6A7A80',         // Disabled state (Lc 35+)
    disabledSubtle: '#4A5A5F',   // Very subtle disabled
    ghostText: '#7A9A98',        // Ghost text (Lc 45+)
    placeholder: '#708388',      // Placeholder text (Non-Text Lc 30+)
    error: '#FFC8C8',            // Soft coral for errors (Lc 80)
    minimapOpacity: '#000000DD', // Minimap foreground opacity mask
    whitespace: '#6B7D82',       // Whitespace markers (Non-Text Lc 30+)
    ruler: '#6B7D82',            // Rulers (Non-Text Lc 30+)
    terminalHint: '#5A8A88',     // Terminal hints (Lc 40)
    terminalGuide: '#2A4A48',    // Terminal command guide (Lc 15)
    operator: '#F0C8D8',         // Operators (Lc 81, C* 18) - rose-pink (340°) BOOSTED Lc
    linkActive: '#70E0D8',       // Active links (Lc 78) - vibrant teal
    deprecated: '#D8D0FF',       // Deprecated (Lc 80, C* 25) - lavender (265°)
    variableLanguage: '#88F0F8', // Language variables (Lc 87) - bright cyan (185°)
  },

  // Semantic colors (APCA Lc 80+ for readability)
  semantic: {
    success: '#90F0B8',          // Bright mint (Lc 86, C* 35)
    warning: '#F8D8A0',          // Golden amber (Lc 86) - same as warmCream
    error: '#FFC8C8',            // Soft coral (Lc 80)
    info: '#88F0E8',             // Miku cyan (Lc 87)
  },

  // Terminal ANSI colors (optimized for void background, Lc 75+)
  terminal: {
    black: '#15191D',            // Darker than text
    red: '#FFC8C8',              // Soft coral (Lc 82) - clear red
    green: '#90F8B8',            // Mint green (Lc 88)
    yellow: '#F8D8A0',           // Golden amber (Lc 86)
    blue: '#B0D8FF',             // Sky blue (Lc 82)
    magenta: '#F0D0FF',          // Lavender (Lc 80+) - DISTINCT from red (ΔE 12+)
    cyan: '#88F0E8',             // Miku cyan (Lc 87)
    white: '#E0D0C0',            // Warm off-white (Lc 79+) - DISTINCT from brightWhite
    brightBlack: '#98A8B8',      // Bright gray (Lc 62)
    brightRed: '#FFD8D8',        // Light coral (Lc 87)
    brightGreen: '#A8F8C8',      // Bright mint (Lc 90)
    brightYellow: '#FFE8C0',     // Light cream (Lc 91)
    brightBlue: '#C8E0FF',       // Light blue (Lc 86)
    brightMagenta: '#FFD0E8',    // Light rose (Lc 85)
    brightCyan: '#A0F8F0',       // Light cyan (Lc 92)
    brightWhite: '#C8F0F0',      // Ice white-cyan (Lc 92) - avoids halation, distinct from white
  },

  // Git decoration colors (Lc 75+ for sidebar, ΔE 15+ between stages)
  // Stage colors use different hues AND lightness for clear distinction
  git: {
    added: '#98F0B8',            // Bright mint (Lc 87) - green 140°
    modified: '#F8D8A0',         // Warm cream (Lc 86) - gold 48°
    deleted: '#FFD0D0',          // Soft coral (Lc 85) - red 5°
    untracked: '#88E8F0',        // Miku cyan (Lc 85) - cyan 185°
    conflicting: '#FFC0F8',      // Pastel magenta (Lc 75+) - clear conflict signal
    stageModified: '#B8D8A0',    // Sage green (Lc 82) - 100°
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
    codeBlock: '#A0E0F8',        // Markdown code (Lc 85, C* 28) - cyan (195°) BOOSTED
    quote: '#B0E0F8',            // Block quotes (Lc 86, C* 24) - sky-blue (205°) Lc BOOSTED
    docComment: '#A8D8E0',       // Doc comments (Lc 82, C* 25) - silver-cyan
    alertImportant: '#E0C8F8',   // Alert important (Lc 82) - lavender
    alertNote: '#88E0F8',        // Alert note (Lc 84, C* 32) - bright cyan (195°) DISTINCT from tip
    alertTip: '#90F0B8',         // Alert tip (Lc 87, C* 43) - bright mint (145°) DISTINCT from note
  },
} as const;
