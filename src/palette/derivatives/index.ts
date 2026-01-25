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
} as const;