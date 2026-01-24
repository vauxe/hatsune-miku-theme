/**
 * Derivative Characters - Official Crypton variants of Miku
 *
 * Characters with different visual identity from standard Miku
 */

// =============================================================================
// SAKURA MIKU - Cherry Blossom Version (桜ミク)
// Official seasonal variant
// =============================================================================

export const sakuraMiku = {
  // Hair - pink instead of teal
  hair: {
    base: '#FFB7C5',       // Cherry blossom pink
    shadow: '#F58F98',     // Deeper pink
    highlight: '#FEEEED',  // Pale sakura
    tip: '#EEBBCB',        // Purple-pink gradient at tips
  },

  // Eyes - pink in most versions
  eyes: {
    iris: '#F58F98',
    highlight: '#FFB7C5',
  },

  // Outfit - white with pink accents
  outfit: {
    dress: '#FFFFFF',
    trim: '#FFB7C5',
    ribbon: '#F58F98',
  },

  // Accessories
  accessories: {
    hairOrnament: '#FFB7C5',  // Sakura flower
    headphones: '#F58F98',
    petals: '#FFDEE6',        // Falling petals
  },

  // Seasonal elements
  seasonal: {
    branch: '#8B4513',        // Cherry tree branch
    leaves: '#81C784',        // Spring green leaves
  },
} as const;

// =============================================================================
// BOTTLE MIKU - Aquatic Version (ボトルミク)
// Popular derivative with distinct transparent hair design
// =============================================================================

export const bottleMiku = {
  // Hair - made of water, clear/transparent
  hair: {
    base: '#E0F7FA',       // Clear water blue (very pale)
    shadow: '#80DEEA',     // Water depth
    highlight: '#FFFFFF',  // Glass reflection
    liquid: '#26C6DA',     // Vibrant water tint
  },

  // Eyes - deep ocean blue
  eyes: {
    iris: '#00BCD4',
    highlight: '#E0F7FA',
  },

  // Outfit - Sailor style
  outfit: {
    top: '#FFFFFF',        // White sailor top
    skirt: '#1A1A1A',      // Black skirt
    collar: '#1A1A1A',     // Black collar
    lines: '#FF5252',      // Red crimson lines
  },

  // Accessories - Fish in hair
  accessories: {
    fish: '#FF5252',       // Red goldfish swimming in hair
    bubbles: '#FFFFFF',    // Air bubbles
    hairTies: '#1A1A1A',   // Black ribbons
  },
} as const;

// =============================================================================
// AKITA NERU - "Denial" Version (亞北ネル)
// Officially recognized derivative - Yellow color scheme
// =============================================================================

export const akitaNeru = {
  // Hair - Golden yellow side-tail
  hair: {
    base: '#FDD835',       // Golden yellow
    shadow: '#FBC02D',     // Darker gold
    highlight: '#FFF9C4',  // Pale yellow
  },

  // Eyes - Matching gold/amber
  eyes: {
    iris: '#FBC02D',
    highlight: '#FFF59D',
  },

  // Outfit - Grey school style with yellow accents
  outfit: {
    top: '#9E9E9E',        // Grey top
    skirt: '#1A1A1A',      // Black skirt
    trim: '#FDD835',       // Yellow trim
    tie: '#FDD835',        // Yellow half-tie
  },

  // Accessories
  accessories: {
    phone: '#FFFFFF',      // Flip phone (signature item)
    garter: '#1A1A1A',
  },
} as const;

// =============================================================================
// YOWANE HAKU - "Fail" Version (弱音ハク)
// Officially recognized derivative - Silver/Purple scheme
// =============================================================================

export const yowaneHaku = {
  // Hair - Silver/White ponytail
  hair: {
    base: '#E0E0E0',       // Silver gray
    shadow: '#BDBDBD',     // Darker silver
    highlight: '#F5F5F5',  // Almost white
  },

  // Eyes - Red/Reddish-brown (distinct from Miku)
  eyes: {
    iris: '#D32F2F',       // Sad red
    highlight: '#FFCDD2',
  },

  // Outfit - Grey/Black with purple accents
  outfit: {
    top: '#757575',        // Darker grey top
    skirt: '#1A1A1A',      // Black pants/skirt combo
    trim: '#7E57C2',       // Deep purple
    tie: '#7E57C2',        // Purple tie
  },

  // Accessories
  accessories: {
    bottle: '#795548',     // Sake bottle (character trait)
    blush: '#EF9A9A',      // Intoxicated blush
  },
} as const;
