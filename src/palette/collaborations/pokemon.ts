/**
 * Pokémon feat. Hatsune Miku Project Voltage (2023-2025)
 *
 * A massive collaboration imagining Miku as a Pokémon Trainer for each of the 18 types.
 * Features 18 distinct character designs by various illustrators.
 */

export const pokemonVoltage = {
    // Base colors


    // Project branding
    project: {
        logo: '#FFCB05',       // Pokemon yellow
        pokeball: '#EE1515',   // Pokeball red
        mikuTeal: '#39C5BB',
    },

    // 18 Type-themed Trainer Designs (Official Type Colors)
    types: {
        normal: {
            color: '#A8A878',
            hair: '#A8A878', // Matching Chatot colors
            desc: 'Normal Type',
        },
        fire: {
            color: '#F08030',
            hair: '#F08030', // Skeledirge flames
            desc: 'Fire Type',
        },
        water: {
            color: '#6890F0',
            hair: '#6890F0', // Water blue
            desc: 'Water Type',
        },
        electric: {
            color: '#F8D030',
            hair: '#F8D030', // Electric yellow
            desc: 'Electric Type',
        },
        grass: {
            color: '#78C850',
            hair: '#78C850', // Grass green
            desc: 'Grass Type',
        },
        ice: {
            color: '#98D8D8',
            hair: '#98D8D8', // Ice blue
            desc: 'Ice Type',
        },
        fighting: {
            color: '#C03028',
            hair: '#C03028', // Fighting red
            desc: 'Fighting Type',
        },
        poison: {
            color: '#A040A0',
            hair: '#A040A0', // Poison purple
            desc: 'Poison Type',
        },
        ground: {
            color: '#E0C068',
            hair: '#E0C068', // Ground sand
            desc: 'Ground Type',
        },
        flying: {
            color: '#A890F0',
            hair: '#A890F0', // Flying lavender
            desc: 'Flying Type',
        },
        psychic: {
            color: '#F85888',
            hair: '#F85888', // Psychic pink
            desc: 'Psychic Type',
        },
        bug: {
            color: '#A8B820',
            hair: '#A8B820', // Bug green
            desc: 'Bug Type',
        },
        rock: {
            color: '#B8A038',
            hair: '#B8A038', // Rock brown
            desc: 'Rock Type',
        },
        ghost: {
            color: '#705898',
            hair: '#705898', // Ghost purple
            desc: 'Ghost Type',
        },
        dragon: {
            color: '#7038F8',
            hair: '#39C5BB', // Dragon uses stylized teal/white
            desc: 'Dragon Type',
        },
        dark: {
            color: '#705848',
            hair: '#705848', // Dark brown
            desc: 'Dark Type',
        },
        steel: {
            color: '#B8B8D0',
            hair: '#B8B8D0', // Steel grey
            desc: 'Steel Type',
        },
        fairy: {
            color: '#EEA9AE',
            hair: '#EEA9AE', // Fairy pink
            desc: 'Fairy Type',
        },
    },
} as const;
