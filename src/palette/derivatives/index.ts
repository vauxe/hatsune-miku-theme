/**
 * Derivative Characters - Official Crypton variants of Miku
 *
 * Characters with different visual identity from standard Miku
 * Includes seasonal variants, anniversary designs, and brand collaborations
 */

// =============================================================================
// SAKURA MIKU - Cherry Blossom Version (桜ミク)
// Official seasonal variant from Project DIVA series
// Pink version of Miku's default outfit with sakura motifs
// =============================================================================

export const sakuraMiku = {
    // Hair - pink instead of teal
    hair: {
        base: '#FF6BCA',       // Vivid candy sakura (hue 350°, Cz 0.10) — cute and lovely
        shadow: '#F58F98',     // Deeper pink
        highlight: '#FEEEED',  // Pale sakura white-pink
        tip: '#EEBBCB',        // Purple-pink gradient at tips
        bands: '#FFFFFF',      // White futuristic hairbands with pink accents
        bandsAccent: '#FFB7C5',
    },

    // Eyes - dark pink
    eyes: {
        iris: '#F58F98',       // Dark pink
        highlight: '#FFFFFF',
    },

    // Outfit - white base with pink accents
    outfit: {
        shirt: '#FFFFFF',      // White sleeveless
        shirtTrim: '#FFB7C5',  // Pink edge trimmings
        tie: '#F58F98',        // Dark pink with white sakura petal design
        tiePetals: '#FFFFFF',  // White sakura print
        tieStripes: '#90EE90', // Two light green stripes
        sleeves: '#FFB7C5',    // Pink detachable sleeves
        sleevesTrim: '#FFFFFF', // White trimmings
        sleevesCuff: '#FFB7C5', // Petal-like cuffs
        skirt: '#FFB7C5',      // Pink skirt
        skirtTrim: '#FFFFFF',  // White edge trimming
        belt: '#FFB7C5',       // Matching pink belt strap
    },

    // Accessories
    accessories: {
        hairOrnament: '#FFB7C5',   // Sakura flower ornament
        headphones: '#FFFFFF',     // White ear-pads with sakura petal design
        headphonesLight: '#FF69B4', // Hot pink oval illuminations
        microphone: '#FFB7C5',     // Pink with two white stripes
        microphoneStripes: '#FFFFFF',
        petals: '#FFDEE6',         // Falling sakura petals
        cherries: '#CC0000',       // Two cherries decoration on back
        boots: '#FFB7C5',          // Pink futuristic boots
        bootsTrim: '#FFFFFF',      // White trimming
        bootsSoles: '#FFFFFF',     // White soles
        nails: '#FFB7C5',          // Pink nails
    },
} as const;

// =============================================================================
// MIKU 15TH ANNIVERSARY - Strawberry Ver. (15周年)
// 2022 Anniversary design by Morikura En
// Strawberry-themed celebration design
// =============================================================================

export const miku15thAnniversary = {
    // Hair - classic teal with strawberry accents
    hair: {
        base: '#39C5BB',       // Classic Miku teal
        highlight: '#5DE4DB',  // Light teal highlights
        ribbons: '#FF6B6B',    // Strawberry red ribbons
    },

    // Eyes - teal with warm highlights
    eyes: {
        iris: '#39C5BB',
        highlight: '#FFFFFF',
    },

    // Outfit - frilly strawberry-themed dress
    outfit: {
        dress: '#FFFFFF',      // White base
        dressFrills: '#FFB6C1', // Light pink frills
        bodice: '#FF6B6B',     // Strawberry red accents
        ribbon: '#CC0000',     // Deep red ribbon
        lace: '#FFF8E7',       // Cream/ivory lace details
        skirt: '#FFB6C1',      // Light pink layered skirt
        skirtTrim: '#FFFFFF',  // White trim
    },

    // Accessories - strawberry motifs
    accessories: {
        hairOrnament: '#FF6B6B',  // Strawberry hair decorations
        strawberryLeaves: '#7CB342', // Green strawberry leaves
        strawberrySeeds: '#FFD700', // Yellow seeds detail
        headphones: '#FF6B6B',    // Strawberry red
        tableware: '#FFFFFF',     // White tableware accessories
        tablewareGold: '#D4AF37', // Gold trim on tableware
    },
} as const;

// =============================================================================
// MIKU 16TH ANNIVERSARY - Happy 16th Birthday Ver. (16周年)
// 2023 Anniversary design by Rella
// "Wings of Creation" theme - ethereal birthday celebration design
// =============================================================================

export const miku16thAnniversary = {
    // Hair - classic Miku teal with soft highlights
    hair: {
        base: '#39C5BB',       // Classic Miku teal
        highlight: '#7DE8E2',  // Soft teal highlight
        tips: '#5DD9D2',       // Gradient tips
        ribbons: '#FFFFFF',    // White ribbons with pearl finish
    },

    // Eyes - teal with sparkling highlights
    eyes: {
        iris: '#39C5BB',       // Classic Miku teal
        highlight: '#FFFFFF',
        sparkle: '#E8F8F7',    // Soft ethereal glow
    },

    // Outfit - elegant birthday dress with wing motifs
    outfit: {
        dress: '#FFFFFF',      // White base dress
        dressTrim: '#D4E8E6',  // Soft teal-gray trim
        bodice: '#FFFFFF',     // White bodice
        bodiceAccent: '#39C5BB', // Teal accents
        ribbon: '#39C5BB',     // Teal main ribbon
        skirt: '#FFFFFF',      // White layered skirt
        skirtTrim: '#E8F8F7',  // Ethereal pale teal trim
        lace: '#F5FFFE',       // Off-white lace details
    },

    // Accessories - Wings of Creation theme
    accessories: {
        wingsForm: '#E8F8F7',     // Wing of Form - pale ethereal
        wingsSound: '#D4F0EE',    // Wing of Sound - soft teal tint
        wingsPearl: '#F0FFFD',    // Pearl iridescent finish
        wingsGlow: '#39C5BB',     // Teal glow accents
        headphones: '#FFFFFF',    // White headphones
        headphonesLight: '#39C5BB', // Teal illumination
        hairOrnament: '#39C5BB',  // Teal ornaments
        starAccents: '#FFE5B4',   // Soft golden star accents
    },
} as const;

// =============================================================================
// GUNDAM 45TH ANNIVERSARY MIKU (ガンダム45周年)
// 2024 Collaboration with Mobile Suit Gundam
// RX-78-2 Gundam-inspired design with four-color gradient hair
// =============================================================================

export const gundam45thMiku = {
    // Hair - signature four-color gradient representing Gundam eras
    // Official RX-78-2 hex codes from color-hex.com
    hair: {
        white: '#FFFFFF',      // Gundam white (Federation)
        red: '#FB2F38',        // Official RX-78-2 red
        blue: '#2C52B3',       // Official RX-78-2 blue
        yellow: '#FFF867',     // Official RX-78-2 yellow (V-fin)
        base: '#39C5BB',       // Core Miku teal undertone
    },

    // Eyes
    eyes: {
        iris: '#39C5BB',
        highlight: '#FFFFFF',
        glow: '#00FF00',       // Green Gundam sensor glow
    },

    // Outfit - pilot suit inspired
    outfit: {
        suit: '#FFFFFF',       // White pilot suit base
        chestPlate: '#FB2F38', // Official RX-78-2 red
        shoulders: '#2C52B3',  // Official RX-78-2 blue
        trim: '#FFF867',       // Official RX-78-2 yellow
        vents: '#808080',      // Gray mechanical vents
        undersuit: '#1A1A1A',  // Black undersuit
    },

    // Accessories - mecha details
    accessories: {
        headphones: '#FFFFFF', // White with Gundam styling
        headphonesVfin: '#FFF867', // Official RX-78-2 yellow V-fin
        headphonesCamera: '#00FF00', // Green sensor light
        gloves: '#FFFFFF',
        glovesAccent: '#FB2F38',   // Official RX-78-2 red
        boots: '#FFFFFF',
        bootsAccent: '#2C52B3',    // Official RX-78-2 blue
        metallicPaint: '#D4AF37',  // Gold metallic accents
    },
} as const;

// =============================================================================
// LAWSON 50TH ANNIVERSARY MIKU (ローソン50周年)
// 2026 Collaboration for LAWSON convenience store's 50th anniversary
// "Cyan Blue" theme designed for special concert
// =============================================================================

export const lawson50thMiku = {
    // Hair - classic teal enhanced with LAWSON blue
    hair: {
        base: '#39C5BB',       // Miku teal maintained
        highlight: '#31A7F1',  // Picton Blue (LAWSON secondary)
        tips: '#1475C5',       // Official LAWSON corporate blue (Denim)
    },

    // Eyes
    eyes: {
        iris: '#39C5BB',
        highlight: '#31A7F1',  // Picton Blue accent
    },

    // Outfit - LAWSON branded performance costume
    outfit: {
        dress: '#FFFFFF',      // White base
        dressTrim: '#1475C5',  // Official LAWSON blue trim
        bodice: '#1475C5',     // Official LAWSON corporate blue
        skirt: '#31A7F1',      // Picton Blue
        skirtTrim: '#FFFFFF',
        ribbon: '#1475C5',     // Official LAWSON blue ribbon
    },

    // Accessories - corporate collaboration details
    accessories: {
        headphones: '#1475C5', // Official LAWSON blue
        headphonesAccent: '#31A7F1', // Picton Blue accents
        logo: '#1475C5',       // Official LAWSON logo blue
        gloves: '#FFFFFF',
        glovesTrim: '#31A7F1',
        boots: '#1475C5',
        bootsTrim: '#FFFFFF',
    },
} as const;