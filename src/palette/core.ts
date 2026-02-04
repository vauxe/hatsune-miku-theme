/**
 * Hatsune Miku Theme - Core Character Design
 *
 * Based mainly on V3/V4X "Standard" designs
 * Canonical teal: #39C5BB (Standard Miku Teal)
 */

import { mikuV3, mikuAppend, mikuNT, mikuV4Chinese } from './voicebanks';
import { snowMiku, magicalMirai, digitalStars } from './events';
import { sakuraMiku, gundam45thMiku } from './derivatives';
import { hex, LIGHTNESS, CHROMA, HUE, type JzCzhz } from './jzczhz';

// =============================================================================
// JzCzhz Color Design System
// =============================================================================
// All syntax colors are designed in perceptual JzCzhz space for:
// - Consistent lightness (Jz) → consistent APCA contrast
// - Consistent chroma (Cz) → consistent visual weight
// - Optimal hue separation (hz) → maximum distinction

// Chroma-aware lightness destructuring
// LV = vibrant for cool hues, LW = vibrant for warm hues
// L1 = primary for cool hues, LP = primary for warm hues (peach, coral, pink)
const { primary: L1, primaryWarm: LP, muted: LM, vibrant: LV, vibrantWarm: LW, vivid: LX, secondary: L2, tertiary: L3, accent: LA } = LIGHTNESS;
const { comfortable: C1, vibrant: C2, vivid: C3, muted: CM } = CHROMA;
const H = HUE;

// Helper for creating JzCzhz colors
const jch = (Jz: number, Cz: number, hz: number): string => hex({ Jz, Cz, hz });

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
    // JzCzhz-DESIGNED SYNTAX COLORS
    // =========================================================================
    // All colors defined in perceptual space for consistency:
    // - L1 (0.18) = Primary syntax - consistent Lc ~83
    // - L2 (0.16) = Secondary elements - Lc ~75
    // - C1 (0.055) = Comfortable chroma - easy on eyes
    // - C2 (0.070) = Vibrant chroma - colorful accents
    // - CM (0.040) = Muted chroma - comments/secondary
    //
    // Hue separation: minimum 25° between adjacent token types

    // KEYWORDS - Miku signature teal (hz 178°)
    keyword: jch(L1, C1, H.mikuTeal),         // Primary keyword - Digital Diva signature
    keywordControl: jch(L1, C1, H.mikuTeal + 5), // Flow keywords - slightly cooler
    keywordAlt: jch(L2, C1, H.mikuTeal),      // Dimmer variant

    // STORAGE / TYPES - Spread across spectrum
    storage: jch(L1, C1, H.mint),             // Storage keywords - fresh mint
    enum: jch(L1, C1, H.ice),                 // Enum names - ice cyan
    macro: jch(LM, CM, H.periwinkle),         // Macros - muted periwinkle (LM for muted chroma)
    storageModifier: jch(LP, C1, H.rose),     // Modifiers - rose accent (LP for warm hue)
    type: jch(L1, C1, H.orchid),              // Type annotations - orchid
    typeParameter: jch(LM, CM, H.sky),        // Generic params - muted sky (LM for muted chroma)
    enumMember: jch(LM, CM, H.rose + 15),     // Enum values - light rose (LM for muted chroma)

    // FUNCTIONS - Gold/Amber (Magical Mirai wand)
    function: jch(LV, C2, H.gold),            // Functions - vibrant gold (LV - gold is less warm)
    method: jch(L1, C1, H.mint + 5),          // Methods - distinct from keyword

    // CLASSES - Negi lime / Pink accent
    class: jch(LV, C2, H.lime),               // Classes - negi lime (LV for vibrant chroma)
    interface: jch(LP, C1, H.mikuPink),       // Interfaces - Miku pink (LP for warm hue)
    struct: jch(LV, C2, H.lime),              // Structs - same as class

    // VARIABLES - Sky cyan / Warm peach
    variable: jch(L1, C1, 235),               // Variables - blue (shifted from sky for keyword distinction)
    parameter: jch(LP, C1, H.peach),          // Parameters - warm peach (LP for warm hue)
    property: jch(LP, C1, H.coral),           // Properties - coral (LP for warm hue)

    // STRINGS - Mint green
    string: jch(LV, C2, H.mint),              // Strings - vibrant mint (LV for vibrant chroma)
    stringTemplate: jch(L1, C1, H.mint + 10), // Template strings
    regex: jch(LP, C1, H.peach + 5),          // Regex - warm (LP for warm hue)

    // NUMBERS & LITERALS
    number: jch(LM, CM, H.sky + 15),          // Numbers - muted blue (LM for muted chroma)
    boolean: jch(LM, CM, H.orchid + 5),       // Booleans - muted orchid (LM for muted chroma)

    // CONSTANTS / TAGS
    constant: jch(LP, C1, H.amber),           // Constants - amber (LP for warm hue)
    tag: jch(LP, C1, H.coral),                // HTML tags - coral (LP for warm hue)
    attribute: jch(LP, C1, H.amber - 5),      // Attributes - amber variant (LP for warm hue)

    // META
    comment: jch(LM, CM, 60),                 // Comments - muted gold (far from keyword/type/variable)
    commentDoc: jch(LM, CM, H.mikuTeal - 5),  // Doc comments - muted teal (LM for muted chroma)

    // SUPPORT - Same as user-defined (reduces color count)
    supportFunction: jch(LV, C2, H.gold),     // (LV - gold is less warm)
    supportClass: jch(LV, C2, H.lime),        // (LV for vibrant chroma)
    supportType: jch(L1, C1, H.orchid),
    supportConstant: jch(LP, C1, H.amber),    // (LP for warm hue)
    supportVariable: jch(L1, C1, H.sky),

    // BRACKETS - Maximum hue separation (60°+ apart)
    bracket1: jch(LA, C1, H.peach),           // Peach
    bracket2: jch(LA, C1, H.lavender),        // Lavender
    bracket3: jch(LA, C1, H.lime),            // Lime
    bracket4: jch(LA, C1, H.mikuTeal),        // Teal
    bracket5: jch(LA, C1, H.sky),             // Sky
    bracket6: jch(LA, C1, H.gold),            // Gold

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

  // UI-specific values (JzCzhz-designed)
  ui: {
    void: '#0A0D10',             // Deepest void (special: near-black)
    pureWhite: '#FFFFFF',        // Pure white (special: max contrast)
    nearWhite: '#F8F8F8',        // Near white (special: Lc 97)
    tertiary: jch(L3, 0.015, H.sky),           // Tertiary text - muted sky
    disabled: jch(L3, 0.015, H.sky),           // Disabled state - same as tertiary
    disabledSubtle: jch(0.08, 0.015, H.sky),   // Very subtle disabled
    ghostText: jch(L3 + 0.02, 0.025, H.mikuTeal), // Ghost text (Lc 45+) - teal hint
    placeholder: jch(L3, 0.020, H.sky),        // Placeholder text (Non-Text Lc 30+)
    error: jch(LW, C2, H.mikuPink),            // Pink error - accent tier (LW for warm C2)
    minimapOpacity: '#000000DD', // Minimap foreground opacity mask (special)
    whitespace: jch(L3, 0.015, H.sky),         // Whitespace markers
    ruler: jch(L3, 0.015, H.sky),              // Rulers
    terminalHint: jch(0.10, 0.030, H.mikuTeal), // Terminal hints (Lc 40)
    terminalGuide: jch(0.07, 0.025, H.mikuTeal), // Terminal command guide
    operator: jch(LP, C1, H.mikuPink),         // Operators - pink/magenta (LP for warm hue)
    linkActive: jch(LV, C2, H.mikuTeal),       // Active links - vibrant teal (LV for C2)
    deprecated: jch(L1, C1, H.lavender),       // Deprecated - lavender
    variableLanguage: jch(LV, C2, H.mikuTeal - 3), // Language variables - shifted teal (LV for C2)
  },

  // Semantic colors (JzCzhz-designed, APCA Lc 80+ for readability)
  semantic: {
    success: jch(LV, C2, H.mint),             // Bright mint - success green (LV for C2)
    warning: jch(LV, C2, H.amber),            // Golden amber - warning (LV - gold is less warm)
    error: jch(LW, C2, H.mikuPink),           // Pink error - accent tier (LW for warm C2)
    info: jch(LV, C2, H.mikuTeal),            // Miku cyan - info (LV for C2)
  },

  // Terminal ANSI colors (JzCzhz-designed, Lc 75+ on void background)
  terminal: {
    black: '#15191D',            // Darker than text (special: near-black)
    red: jch(LW, C2, H.red),                   // Warm coral-red (LW for warm C2)
    green: jch(LV, C2, H.mint),                // Mint green (LV for C2)
    yellow: jch(LV, C2, H.gold),               // Gold warning (LV - gold is less warm)
    blue: jch(L1, C1, H.periwinkle),           // Blue-violet
    magenta: jch(LW, C2, H.magenta),           // Magenta (LW for warm C2)
    cyan: jch(LV, C2, H.mikuTeal),             // Miku cyan (LV for C2)
    white: jch(LM, CM, H.peach),               // Warm off-white (LM for CM)
    brightBlack: jch(L3 + 0.03, 0.020, H.sky), // Bright gray
    brightRed: jch(LP, C1, H.red),             // Light coral (LP for warm C1)
    brightGreen: jch(L1, C1, H.mint),          // Bright mint
    brightYellow: jch(LP, C1, H.amber),        // Warm amber (LP for warm C1)
    brightBlue: jch(L1, C1, H.sky),            // Light blue
    brightMagenta: jch(LP, C1, H.rose),        // Light rose (LP for warm C1)
    brightCyan: jch(L1, C1, H.mikuTeal),       // Bright cyan
    brightWhite: jch(L1, 0.030, H.ice),        // Icy bright white
  },

  // Git decoration colors (JzCzhz-designed, Lc 75+ for sidebar)
  // Stage colors use different hues AND lightness for clear distinction
  git: {
    added: jch(LV, C2, H.mint),                // Bright mint - green (LV for C2)
    modified: jch(LV, C2, H.gold),             // Warm gold - modified (LV - gold is less warm)
    deleted: jch(LW, C2, H.gitRed),            // Red delete (LW for warm C2)
    untracked: jch(LV, C2, H.ice),             // Miku cyan - untracked (LV for C2)
    conflicting: jch(L1, C1, H.gitViolet),     // Blue-violet conflict
    stageModified: jch(LV, C2, H.ice),         // Cyan stage-modified (LV for C2)
    stageDeleted: jch(L1, C1, H.lavender),     // Light lavender - staged delete
    renamed: jch(L1, C1, H.lavender),          // Lavender - renamed
    submodule: jch(L1, C1, H.sky),             // Sky blue - submodule
  },

  // Symbol icon colors (JzCzhz-designed, Lc 75+ for visibility)
  // Comprehensive hue assignment to maximize distinction (30°+ separation)
  // Total: 24 symbols distributed across 360° hue wheel
  symbol: {
    // Red-orange range (0-60°)
    property: jch(LW, C2, 0),                   // Pure red - 0°
    typeParameter: jch(LP, C1, 20),             // Coral - 20°
    field: jch(LP, C1, 40),                     // Peach - 40°

    // Orange-yellow range (60-120°)
    function: jch(LP, C1, 60),                  // Amber - 60°
    package: jch(LP, C1, 80),                   // Gold - 80°
    reference: jch(LP, C1, 100),                // Yellow-lime - 100°
    enumeratorMember: jch(L1, C1, 120),         // Lime - 120°

    // Green range (120-180°)
    struct: jch(L1, C1, 145),                   // Mint - 145° (distinct from class at 120°)
    constructor: jch(L1, C1, 158),              // Teal-mint - 158°
    folder: jch(LV, C2, 172),                   // Teal - 172°

    // Cyan range (180-240°)
    array: jch(L1, C1, H.mikuTeal),             // Miku teal - 178° (distinct from object at 210°)
    operator: jch(L1, C1, 205),                 // Cyan - 205°
    number: jch(L1, C1, 220),                   // Sky - 220°
    interface: jch(L1, C1, 265),                // Indigo - 265° (distinct from object at 210°)

    // Blue-violet range (240-300°)
    boolean: jch(L1, C1, 260),                  // Indigo - 260°
    namespace: jch(L1, C1, 275),                // Lavender - 275°
    method: jch(L1, C1, 290),                   // Violet - 290°
    enumerator: jch(L1, C1, 305),               // Orchid - 305°

    // Magenta-pink range (300-360°)
    snippet: jch(L1, C1, 310),                  // Magenta - 310°
    string: jch(L1, C1, 115),                   // Lime-green - 115° (moved to green range)
    constant: jch(LP, C1, 340),                 // Rose - 340°

    // Special icons (vibrant)
    variable: jch(LV, C2, 228),                 // Sky-blue - 228° (moved to blue range for distinction)
    module: jch(L1, C1, 240),                   // Blue - 240° (distinct from package and namespace)
  },

  // Debug expression colors (JzCzhz-designed)
  debug: {
    name: jch(LP, C1, H.rose),                 // Soft rose (LP for warm hue)
    value: jch(LV, C2, H.lime),                // Lime green (LV for C2)
    string: jch(L1, C1, H.lime + 5),           // Lime - matches string syntax
  },

  // Markdown-specific variations (JzCzhz-designed, ΔE≥20 from code syntax)
  markdown: {
    codeBlock: jch(LV, C2, H.ice),             // Markdown code - bright cyan (LV for C2)
    quote: jch(LV, C2, H.sky),                 // Block quotes - sky cyan (LV for C2)
    docComment: jch(L1, C1, H.ice),            // Doc comments - silver-cyan
    alertImportant: jch(LW, C2, H.magenta),    // Alert important - magenta (LW for warm C2)
    alertNote: jch(LV, C2, H.ice),             // Alert note - bright cyan (LV for C2)
    alertTip: jch(LV, C2, H.mint),             // Alert tip - bright mint (LV for C2)
  },
} as const;
