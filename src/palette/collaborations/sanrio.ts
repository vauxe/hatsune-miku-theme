/**
 * SANRIO Collaboration
 *
 * Partnerships with Sanrio characters, notably Hello Kitty and Cinnamoroll.
 */

export const sanrio = {
    // Hello Kitty x Miku
    helloKitty: {
        hair: '#39C5BB',
        ribbon: '#ED1C24',     // Hello Kitty Red
        outfit: {
            overalls: '#0062B1', // Blue overalls
            shirt: '#FFFFFF',    // White shirt
            yellow: '#FFD200',   // Nose/Button yellow
        },
    },

    // Cinnamoroll x Miku
    cinnamoroll: {
        hair: '#89C3EB',       // Pale Cinnamoroll blue tinted teal
        eyes: '#0073B9',       // Deep sky blue
        outfit: {
            dress: '#FFFFFF',    // White fluffy
            ribbon: '#89C3EB',   // Pale blue
            shoes: '#89C3EB',
        },
        accessories: {
            ears: '#FFFFFF',     // White dog ears
            tail: '#FFFFFF',     // Cinnamon roll tail
            cheeks: '#F48FB1',   // Pink blush
        },
    },
} as const;
