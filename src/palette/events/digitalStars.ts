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
        // Artist: apapico
        // Theme: DJ / Club Energy
        outfit: {
            jacket: '#FFF100', // Hazard yellow
            shirt: '#000000', // Sleek black
            accent: '#FFFFFF', // White graphic text
        },
        accessories: {
            headphones: '#000000',
            visor: '#FFF100',
        },
    },

    y2021: {
        // Artist: Tsunako
        // Theme: Digital Cyber
        outfit: {
            dress: '#FFFFFF',
            accent: '#00AEEF', // Cyber blue
            trim: '#EC0087',   // Data magenta
            details: '#C0C0C0', // Brushed silver
        },
    },

    y2022: {
        // Artist: HxxG
        // Theme: Neon Night
        outfit: {
            jacket: '#8A2BE2', // Deep violet
            shorts: '#000000',
            accent: '#39FF14', // Lime neon
            glow: '#FF1493',   // Hot pink
        },
    },

    y2023: {
        // Artist: Tomioka
        // Theme: Arcade / Retro Tech
        outfit: {
            jacket: '#0033FF', // Cobalt blue
            accent: '#FF0033', // Retro gaming red
            base: '#FFFFFF',   // UI white
        },
        accessories: {
            controller: '#FF0033',
        },
    },

    y2024: {
        // Artist: meshite
        // Theme: Glitch Pop Party
        outfit: {
            dress: '#4B0082', // Indigo shadow
            accent: '#FF69B4', // Hyper-pop pink
            highlight: '#7FFF00', // Acid green
            trim: '#F0E68C',   // Khaki/Yellow
        },
    },

    y2025: {
        // Artist: lack
        // Theme: Cyber Blast
        outfit: {
            suit: '#101010',   // Matte black armor
            accent: '#FF4500', // Flame orange
            glow: '#00FFFF',   // Electric cyan
            trim: '#FFFFFF',
        },
    },
} as const;
