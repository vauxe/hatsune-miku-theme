/**
 * Collaborations - Brand Partnership Character Designs
 *
 * Miku designs created for collaborations with other brands/franchises
 */

// =============================================================================
// LOUIS VUITTON - "The End" Opera (2013)
// Designed by Marc Jacobs
// =============================================================================

export const louisVuitton = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#1A1A1A',      // Black haute couture
    trim: '#D4A574',       // LV tan/camel
    accent: '#FFFFFF',     // White accents
  },

  accessories: {
    bag: '#D4A574',        // LV Damier Tan
    damier: '#8B6914',     // LV Damier Brown
    altBrown: '#A67C52',   // Darker leather brown
    shoes: '#1A1A1A',      // Black heels
    gold: '#FFC72C',       // Luxury gold accent
  },
} as const;

// =============================================================================
// GUNDAM - 45th Anniversary Collaboration
// =============================================================================

export const gundam = {
  series: 'Gundam 45th Anniversary / Mobile Suit Gundam',

  // Base Miku x Mecha Aesthetic
  colors: {
    armor: '#F5F5F5',    // White Mobile Suit armor
    frame: '#71797E',    // Gunmetal internal frame appearing in joints
    gold: '#FFD700',     // V-Fin Gold / Metallic details
    beamPink: '#E91E63', // Beam saber/sensor pink
    sensorGreen: '#00FF00', // Main camera green
  },

  // Specific Figure Designs
  variants: {
    // BANPRESTO EVOLVE-GUNDAM (User Specified)
    // "Volume twintails feature a four-color gradient... outfit detailed with gold metallic paint"
    evolve: {
      gradientTop: '#39C5BB',
      gradientMid: '#4DD0E1',
      gradientLow: '#00BCD4',
      gradientEnd: '#0097A7',
      metallicGold: '#C5A059',
    },

    // MegaHouse Lucrea - Wing Gundam EW
    // "Angelic wings... white military uniform"
    wingEW: {
      feathers: '#F8F9FA', // Pearl white
      uniform: '#FFFFFF',  // Military white
      trim: '#C5A059',     // Gold trim
    },
  },
} as const;

// =============================================================================
// POKEMON - Project Voltage (2023-2025)
// =============================================================================

/**
 * A massive collaboration imagining Miku as a Pokémon Trainer for each of the 18 types.
 * Features 18 distinct character designs by various illustrators.
 */
export const pokemonVoltage = {
  // Project branding
  project: {
    logo: '#FFCB05',       // Pokemon yellow
    pokeball: '#EE1515',   // Pokeball red
    mikuTeal: '#39C5BB',
  },

  // 18 Type-themed Trainer Designs
  // Colors verified against official character sheets (Sep 2023 - Mar 2024)
  types: {
    psychic: {
      color: '#F85888',
      hair: '#70D090', // "Shiny Meloetta Green" hair
      desc: 'Psychic Type (Meloetta)',
    },
    grass: {
      color: '#78C850',
      hair: '#39C5BB', // Standard Miku Teal (Trainer style)
      desc: 'Grass Type (Rillaboom)',
    },
    fire: {
      color: '#F08030',
      hair: '#F08030', // Flame-shaped hair with red/orange tips
      desc: 'Fire Type (Skeledirge)',
    },
    water: {
      color: '#6890F0',
      hair: '#4F9DB8', // Deep "Waterfall Blue"
      desc: 'Water Type (Primarina)',
    },
    electric: {
      color: '#F8D030',
      hair: '#F8D030', // Yellow lightning-bolt hair accents
      desc: 'Electric Type (Rotom)',
    },
    normal: {
      color: '#A8A878',
      hair: '#39C5BB', // Standard Teal with colorful hair clips (Chatot colors)
      desc: 'Normal Type (Chatot)',
    },
    ice: {
      color: '#98D8D8',
      hair: '#A0E0E0', // Icy Pale Blue-Green pigtails
      desc: 'Ice Type (Lapras)',
    },
    rock: {
      color: '#B8A038',
      hair: '#7FD1E3', // Icy Blue "Fabric" twintails matching Aurorus sails
      desc: 'Rock Type (Aurorus)',
    },
    ground: {
      color: '#E0C068',
      hair: '#39C5BB', // Standard Teal (Desert Explorer style)
      desc: 'Ground Type (Flygon)',
    },
    flying: {
      color: '#A890F0',
      hair: '#E6E6FA', // Lavender/White "Cloud Hair"
      desc: 'Flying Type (Altaria)',
    },
    fairy: {
      color: '#EEA9AE',
      hair: '#FFB7C5', // Pink and Blue "Poofy" split hair
      desc: 'Fairy Type (Jigglypuff)',
    },
    bug: {
      color: '#A8B820',
      hair: '#DE5246', // Reddish-orange antennae hair (Kricketune style)
      desc: 'Bug Type (Kricketune)',
    },
    poison: {
      color: '#A040A0',
      hair: '#9D60CC', // Purple & Green "Gooey" pigtails
      desc: 'Poison Type (Toxtricity)',
    },
    ghost: {
      color: '#705898',
      hair: '#2F4F4F', // Dark Greenish-Black "Glitch" hair
      desc: 'Ghost Type (Mismagius)',
    },
    dark: {
      color: '#705848',
      hair: '#4A4A4A', // Grayscale/Black hair with neon green accents
      desc: 'Dark Type (Obstagoon)',
    },
    steel: {
      color: '#B8B8D0',
      hair: '#2F3C42', // Dark Metallic Green (Jirachi/Gameboy tint)
      desc: 'Steel Type (Jirachi)',
    },
    fighting: {
      color: '#C03028',
      hair: '#556B2F', // Army Green "Leek" hair
      desc: 'Fighting Type (Sirfetch\'d)',
    },
    dragon: {
      color: '#7038F8',
      hair: '#39C5BB', // Teal / White Split Spiked Hair
      desc: 'Dragon Type (Miraidon)',
    },
  },
} as const;


// =============================================================================
// SANRIO Collaboration
// =============================================================================

/**
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
