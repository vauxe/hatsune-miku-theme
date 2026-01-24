/**
 * HATSUNE MIKU Digital Stars
 *
 * Club-themed event and music compilation series.
 * Features high-contrast, neon, and modern street-style designs.
 */

export const digitalStars = {
    // Base core colors
    hair: '#39C5BB',
    eyes: '#39C5BB',

    y2020: {
        // Artist: rcowada (Wada Arco)
        // Theme: DJ / Club Sporty
        // Miku wears a sporty white/silver jacket with red accents.
        outfit: {
            jacket: '#E0E0E0', // Silver/White
            inner: '#1A1A1A',  // Black crop top
            accent: '#FF3333', // Vibrant red
            shorts: '#1A1A1A',
        },
        accessories: {
            headset: '#FFFFFF',
            kicks: '#FF3333',
        },
    },

    y2021: {
        // Artist: Tsunako
        // Theme: Digital Cyber / Cute Pastel
        outfit: {
            dress: '#FFFFFF',
            accent: '#4DD9E6', // Pastel Cyber blue
            trim: '#FF69B4',   // Pastel Pink/Magenta
            details: '#E6E6FA', // Lavender/Soft silver
        },
    },

    y2022: {
        // Artist: HxxG
        // Theme: Neon Night / Speaker Mountain
        outfit: {
            jacket: '#4B0082', // Deep indigo/violet
            shorts: '#000000',
            accent: '#39FF14', // Lime neon (Flag color)
            glow: '#FF00FF',   // Neon magenta
        },
    },

    y2023: {
        // Artist: Sai Izumi
        // Theme: Neon Monster
        outfit: {
            jacket: '#000033', // Dark Navy/Black
            accent: '#FF0055', // Neon Red/Pink
            contrast: '#00FFFF', // Cyan neon
            tail: '#333333',   // Mechanical parts
        },
        accessories: {
            horns: '#FF0055',
        },
    },

    y2024: {
        // Artist: BUNBUN
        // Theme: Glitch x DJ
        outfit: {
            jacket: '#F0F0F0', // White/Light Grey base
            contrast: '#111111', // Dark contrast
            glitchLeft: '#00FFFF', // Cyan (Glitch effect)
            glitchRight: '#FF00FF', // Magenta (Glitch effect)
        },
    },

    y2025: {
        // Artist: lack
        // Theme: Cyber Blast / Retro Game
        outfit: {
            suit: '#151515',   // Matte black
            accent: '#FF5500', // Retro Orange/Flame
            glow: '#00FFCC',   // Teal/Cyan
            trim: '#FFFFFF',
        },
    },
} as const;
