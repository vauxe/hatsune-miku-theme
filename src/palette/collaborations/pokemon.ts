/**
 * Pokémon feat. Hatsune Miku Project Voltage (2023-2025)
 *
 * A massive collaboration imagining Miku as a Pokémon Trainer for each of the 18 types.
 * Features 18 distinct character designs by various illustrators.
 */

export const pokemonVoltage = {
    // Base colors
    hair: '#39C5BB',
    eyes: '#39C5BB',

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
            desc: 'Normal Type',
        },
        fire: {
            color: '#F08030',
            desc: 'Fire Type',
        },
        water: {
            color: '#6890F0',
            desc: 'Water Type',
        },
        electric: {
            color: '#F8D030',
            desc: 'Electric Type',
        },
        grass: {
            color: '#78C850',
            desc: 'Grass Type',
        },
        ice: {
            color: '#98D8D8',
            desc: 'Ice Type',
        },
        fighting: {
            color: '#C03028',
            desc: 'Fighting Type',
        },
        poison: {
            color: '#A040A0',
            desc: 'Poison Type',
        },
        ground: {
            color: '#E0C068',
            desc: 'Ground Type',
        },
        flying: {
            color: '#A890F0',
            desc: 'Flying Type',
        },
        psychic: {
            color: '#F85888',
            desc: 'Psychic Type',
        },
        bug: {
            color: '#A8B820',
            desc: 'Bug Type',
        },
        rock: {
            color: '#B8A038',
            desc: 'Rock Type',
        },
        ghost: {
            color: '#705898',
            desc: 'Ghost Type',
        },
        dragon: {
            color: '#7038F8',
            desc: 'Dragon Type',
        },
        dark: {
            color: '#705848',
            desc: 'Dark Type',
        },
        steel: {
            color: '#B8B8D0',
            desc: 'Steel Type',
        },
        fairy: {
            color: '#EE99AC',
            desc: 'Fairy Type',
        },
    },
} as const;
