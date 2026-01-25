/**
 * HATSUNE MIKU Digital Stars
 *
 * Club-themed event and music compilation series.
 * Features high-contrast, neon, and modern street-style designs.
 */

export const digitalStars = {
    y2021: {
        // Artist: Tsunako
        // Theme: Pastel Starry Night / Keyboard Stage
        // Palette extracted from 2021 Digital Stars Main Visual
        outfit: {
            primary: '#4FE0E6',    // Bright Cyan (Hair)
            gradient: '#9D95E3',   // Lavender Hair Tips
            jacket: '#F8F5FC',     // Pale Lilac/White Hoodie
            jacketShadow: '#DDD6F0', // Lavender Shadow
            skirt: '#8EA7F0',      // Periwinkle Blue
            blouse: '#FFFFFF',     // White Shirt
            tie: '#F5A8D0',        // Pastel Pink Tie
            tieGradient: '#A592DE', // Purple Tie Gradient
            stars: '#FFE680',      // Gold/Yellow Stars
            keyboard: '#2D2938',   // Dark Keyboard Prop
            keyboardKeys: '#F58CC2', // Pink/Cyan Keys
        },
    },

    y2021_mg: {
        // Event: Digital Stars feat. MIKU & GUMI
        // Description: The first official Hatsune Miku × GUMI (Megpoid) collaboration project.
        // Artist: nou
        outfit: {
            primary: '#66D9EB',   // Pastel Cyan (Hair)
            gradient: '#BFAAF0',  // Soft Lavender (Hair tips)
            jacket: '#F5F6FA',    // Purity White (Oversized Hoodie)
            jacketShadow: '#E2DDF0', // Pale Violet Shadow
            dress: '#FADAE8',     // Iridescent Pink (Base)
            dressHighlight: '#A8E6F5', // Cyan Reflection
            ribbon: '#F7B2D2',    // Sweet Pink (Bows)
            stars: '#FFEB85',     // Star Yellow
            shoes: '#92C9F3',     // Sky Blue
            socks: '#FFF5FA',     // Milky Pink (Sheer)
            accents: '#FF6EB4',   // Hot Pink (Buttons/Details)
            headset: '#FFFFFF',   // White Headset
        },
    },

    y2022: {
        // Artist: HxxG
        // Theme: Street Rock / Flag Bearer
        // Palette extracted from 2022 Digital Stars Main Visual
        outfit: {
            primary: '#B2EBE0',   // Pale Mint (Hair)
            hairShadow: '#85C9BD', // Darker Mint Shadow
            jacket: '#252529',    // Charcoal Black (Outerwear)
            jacketLining: '#4A4058', // Muted Purple Grey (Lining)
            flag: '#C75069',      // Raspberry Red (Flags/Cape)
            flagShadow: '#8A2E42', // Dark Red Shadow
            inner: '#151515',     // Black (Crop Top)
            skirt: '#70E0D0',     // Turquoise Mint (Ruffles)
            accessories: '#1A1A1D', // Black (Horns/Gloves)
            glow: '#FF6F91',      // Pink Glow (Stars)
        },
    },

    y2023: {
        // Artist: Sai Izumi
        // Theme: Neon Monster
        // Palette extracted from 2023 Digital Stars Main Visual
        outfit: {
            primary: '#39C7B7',   // Teal Green (Hair)
            hairShadow: '#2DA899', // Darker Teal Shadow
            jacket: '#DBAFEB',    // Lavender Hoodie
            jacketLining: '#BE1C50', // Deep Magenta Lining
            inner: '#222222',     // Matte Black (Dress/Tail)
            skirt: '#FFFFFF',     // White Frills
            neonPink: '#FF3399',  // Hot Neon Pink (Cables/Glow)
            neonCyan: '#00F2FF',  // Bright Neon Cyan (Cables/Glow)
            horns: '#1A1A1A',     // Black Mechanical Ears
            paws: '#DBAFEB',      // Lavender Paw Shoes
            tie: '#BE1C50',       // Magenta Tie
        },
    },

    y2024: {
        // Artist: BUNBUN
        // Theme: Cyber Sporty / Glitch
        // Palette extracted from 2024 Digital Stars Main Visual
        outfit: {
            primary: '#00D1D1',   // Vivid Cyan (Hair)
            hairShadow: '#008F99', // Darker Cyan Shadow
            jacket: '#2A2A2E',    // Matte Black/Dark Grey (Jacket/Shorts)
            accent: '#D0FF14',    // Neon Lime Green (Zip/Lining/Sole)
            inner: '#FFFFFF',     // White (Crop Top base)
            accessories: '#121214', // Jet Black (Headphones/Straps)
            sunglasses: '#0055FF', // Deep Blue
            glitchCyan: '#00FFFF', // Electric Cyan (Glitch/Ring)
            glitchPurple: '#9300FF', // Electric Purple (Glitch/Ring)
            speaker: '#DA2535',   // Red (Apple/Speaker)
        },
    },

    y2025: {
        // Artist: lack
        // Theme: Retro Game / 8-bit Pop
        // Palette extracted from 2025 Digital Stars Main Visual
        outfit: {
            primary: '#5CDDD6',   // Bright Cyan (Hair)
            jacket: '#FFB833',    // Golden Orange (Oversized Jacket)
            top: '#F8F8FF',       // Crisped White (Crop Top)
            shorts: '#EEEEEE',    // Light Grey Denim
            pixelPink: '#FF7AA8', // Retro Pink (GameBoy, Bag)
            pixelGreen: '#5CE65C', // Retro Green (Cuffs, Stars, Laces)
            pixelRed: '#FF4D4D',  // 8-bit Red (Hearts, Sunglasses)
            pixelBlue: '#33A6FF', // 8-bit Blue (Pins/Decals)
            shoes: '#E0E0E6',     // Off-white Sneakers
            headband: '#333333',  // Dark Grey Headphones
        },
    },
} as const;
