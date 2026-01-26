/**
 * Project DIVA Modules - Song-Based Costume Designs
 *
 * Iconic costumes from Hatsune Miku: Project DIVA game series
 * Each module corresponds to a famous Vocaloid song
 */

// =============================================================================
// DEEP SEA GIRL (Shinkai Shoujo / 深海少女)
// Song by Yuuyu-P, Design by haruyo (ODESSA)
// =============================================================================

export const deepSeaGirl = {
  hair: {
    base: '#2E5A6B',       // Sea blue
  },

  eyes: {
    iris: '#2E5A6B',       // Sea blue
  },

  outfit: {
    dress: '#0A0A0A',      // Deep black (sea floor where light never reaches)
    skirt: '#0A0A0A',      // Black layered skirt
    lace: '#9FE2BF',       // Sea-foam lace on right shoulder
  },

  accessories: {
    hairbands: '#1A1A2E',  // Kelp-like black
  },
} as const;

// =============================================================================
// DARK ANGEL (ダークエンジェル)
// Gothic-lolita design
// =============================================================================

export const darkAngel = {
  hair: {
    base: '#2E8B7E',       // Strong sea green
  },

  eyes: {
    iris: '#2E8B7E',       // Strong sea green
  },

  outfit: {
    shirt: '#0A0A0A',      // Jet black with white lace on sleeves
    shirtLace: '#FFFFFF',
    undershirt: '#FFFFFF', // White collared
    tie: '#0A0A0A',        // Jet black
    skirt: '#0A0A0A',      // Jet black with white lace and frills
    skirtLace: '#FFFFFF',
  },

  accessories: {
    featherClips: '#0A0A0A',
    socks: '#1A1A1A',      // Thigh-high with white stripes
    socksStripe: '#FFFFFF',
    boots: '#1A1A1A',      // Platform with three belts
    bootLaces: '#1B3A5C',  // Dark blue laces
    nails: '#2E8B7E',      // Strong sea green
  },
} as const;

// =============================================================================
// CONFLICTED (コンフリクト)
// Yin-yang inspired black/white asymmetric design
// =============================================================================

export const conflicted = {
  hair: {
    base: '#2A9D8F',       // Darker teal
  },

  eyes: {
    iris: '#2A9D8F',       // Darker teal
  },

  outfit: {
    sweaterLeft: '#FFFFFF', // White half
    sweaterRight: '#000000', // Black half
    skirtLeft: '#FFFFFF',
    skirtRight: '#000000',
    yinYang: '#808080',    // Yin-yang emblem on left side
    undershirt: '#000000', // Black
  },

  accessories: {
    bunLeft: '#FFFFFF',    // White hair bun
    bunRight: '#000000',   // Black hair bun
    bunPlates: '#C0C0C0',  // Two plates on each bun
    socks: '#FFFFFF',      // White
    shoes: '#000000',      // Black with white laces
    shoesLaces: '#FFFFFF',
  },
} as const;

// =============================================================================
// HEART HUNTER (ハートハンター)
// Devil-themed elegant/beauty aesthetic
// =============================================================================

export const heartHunter = {
  hair: {
    base: '#39C5BB',
    ribbons: '#CC0000',    // Red ribbons on short pigtails
  },

  outfit: {
    dress: '#E91E63',      // Reddish-pink, exposes navel
    collar: '#4A148C',     // Dark purple, forms heart shape
    skirt: '#E91E63',      // Matching frilled skirt
    belt: '#CC0000',       // Red belt
    beltBuckle: '#DAA520', // Dark yellow heart-shaped buckle
    leggings: '#4A148C',   // Dark purple with reddish-pink trimmings
    leggingsTrim: '#E91E63',
  },

  accessories: {
    headphones: '#808080', // Grey with light ear-pads
    gloves: '#E91E63',     // Reddish-pink fingerless with glowing hearts
    glovesTrim: '#4A148C', // Dark purple trimmings
    shoes: '#C2185B',      // Dark pink high-heels
    wings: '#4A148C',      // Bat wings
    tail: '#4A148C',       // Devil tail
    nails: '#FFC0CB',      // Pink
  },
} as const;

// =============================================================================
// WHITE DRESS (ホワイトドレス)
// Wedding dress style with dove motif
// =============================================================================

export const whiteDress = {
  hair: {
    base: '#39C5BB',       // Gathered in a bun
  },

  outfit: {
    dress: '#FFFFFF',      // White wedding dress with frills
    ribbon: '#FF69B4',     // Bubblegum pink with red heart trim
    ribbonTrim: '#CC0000', // Red heart shape
    collar: '#FFFFFF',
  },

  accessories: {
    veil: '#FFFFFF',
    headphones: '#FFFFFF', // Dove design on ear-pads
    mic: '#90EE90',        // Light green rectangles
    roses: '#CC0000',      // Red roses
    gloves: '#FFFFFF',     // White finger loop with yellow flowers
    glovesFlower: '#FFD700',
    boots: '#FFFFFF',      // White thigh-high heeled
    bootsAccent: '#FF69B4', // Pink rectangles
    bootsSole: '#B0C4DE',  // Light cyan-grey
    nails: '#39C5BB',      // Turquoise
  },
} as const;

// =============================================================================
// POWDER (パウダー)
// Winter-themed soft snowy aesthetic
// =============================================================================

export const powder = {
  hair: {
    base: '#39C5BB',       // Worn loose (not twin-tails)
  },

  outfit: {
    dress: '#FFB6C1',      // Light pink sleeveless winter dress
    buttons: '#FFD700',    // Yellow buttons
    stripes: '#FFFFFF',    // Two white vertical stripes
    sleeves: '#FFFFFF',    // Detachable white with light pink cuffs
    sleevesCuff: '#FFB6C1',
    skirt: '#FFFFFF',      // White with pink stripe
    skirtStripe: '#FFB6C1',
  },

  accessories: {
    beret: '#FFFFFF',      // White with small pink bow
    beretBow: '#FFB6C1',
    headphones: '#FFFFFF',
    scarf: '#FFFFFF',
    boots: '#FFFFFF',      // White with light pink cuffs/soles
    bootsCuff: '#FFB6C1',
  },
} as const;

// =============================================================================
// INFINITY (インフィニティ)
// Dark elegant design with unique coloring
// =============================================================================

export const infinity = {
  hair: {
    base: '#87CEEB',       // Light blue
    violet: '#9370DB',     // Violet hues on top
  },

  eyes: {
    iris: '#CC0000',       // Red
  },

  skin: {
    base: '#F5F5FF',       // Pure white
  },

  outfit: {
    dress: '#000000',      // Black
    vest: '#000000',       // Black collared with white frills
    vestFrills: '#FFFFFF',
    bow: '#000000',        // Black bow on back
    necktie: '#000000',    // Black with white leek print
    necktiePrint: '#FFFFFF',
    sleeves: '#000000',    // Detachable with white frills
    sleevesFrills: '#FFFFFF',
    socks: '#000000',      // Black with white frills
    socksFrills: '#FFFFFF',
  },

  accessories: {
    hairbands: '#000000',  // Black with black flowers
    flowers: '#000000',
    shoes: '#000000',      // Black Mary-Janes with flowers
    headphones: '#808080', // Cog-like mic-attached
    nails: '#9370DB',      // Violet
  },
} as const;

// =============================================================================
// SUMMER MEMORIES (サマーメモリーズ)
// Nostalgic summer sailor dress
// =============================================================================

export const summerMemories = {
  hair: {
    base: '#6495ED',       // Light cornflower blue
  },

  outfit: {
    dress: '#FFFFFF',      // White sailor dress
    trim: '#87CEEB',       // Sky blue edge trimmings
    collar: '#87CEEB',     // Sky blue collar
    necktie: '#6495ED',    // Light cornflower blue
  },

  accessories: {
    sunhat: '#FFFFFF',     // White with sky blue stripe
    sunhatStripe: '#87CEEB',
    hairTies: '#000000',   // Black at center back
    socks: '#00008B',      // Deep blue
    shoes: '#FFFFFF',      // White with sky blue stripe/soles
    shoesStripe: '#87CEEB',
  },
} as const;

// =============================================================================
// STAR VOCALIST (スターヴォーカリスト)
// Sci-fi idol performer aesthetic
// =============================================================================

export const starVocalist = {
  hair: {
    base: '#39C5BB',
    highlight: '#FF69B4',  // Hot pink highlights on left twin tail
  },

  outfit: {
    dress: '#FFB6C1',      // Pink dress with light hues
    logo: '#000000',       // Black logo design
    plate: '#000000',      // Black enamel plate with pink system lights
    plateLights: '#FF69B4',
    sleeves: '#FFFFFF',    // White detachable with black trim
    sleevesTrim: '#000000',
    serialCode: '#000000', // Black "01" on left sleeve
    skirt: '#FFFFFF',      // White with black trimmings
    skirtTrim: '#000000',
    belt: 'transparent',   // Clear belt strap
  },

  accessories: {
    headphones: '#000000', // Black open-handle with pink rectangles
    headphonesAccent: '#FF69B4',
    gloves: '#000000',     // Black fingerless
    tie: 'transparent',    // Small clear tie
    boots: '#000000',      // Black with white cuffs
    bootsCuff: '#FFFFFF',
    bootsLights: '#FF69B4', // Pink lights and soles
    nails: '#FF69B4',      // Hot pink
  },
} as const;

// =============================================================================
// HEARTBEAT (ハートビート)
// Tech-inspired grey and orange design
// =============================================================================

export const heartbeat = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    jacket: '#808080',     // Grey turtleneck with darker grey areas
    jacketDark: '#505050',
    center: '#FFB347',     // Light orange center piece
    powerButton: '#808080', // Grey power button
    powerLight: '#FF69B4', // Pink glowing light
    skirt: '#000000',      // Black with grey stripe and frills
    skirtStripe: '#808080',
  },

  accessories: {
    headphones: '#808080', // Grey with magenta covers
    headphonesCover: '#FF00FF',
    bow: '#000000',        // Black with white stripes
    bowStripe: '#FFFFFF',
    gloves: '#000000',     // Black fingerless
    speakers: '#FFB347',   // Light orange on sleeves
    dials: '#000000',      // Small black on sleeves
    boots: '#808080',      // Grey thigh-high heeled
    bootsTrim: '#FFB347',  // Light orange trimmings
    bootsSole: '#000000',  // Black
  },
} as const;

// =============================================================================
// REGRET (リグレット)
// Melancholic elegant design with maroon accents
// =============================================================================

export const regret = {
  hair: {
    base: '#AFEEEE',       // Pale turquoise
  },

  outfit: {
    vestCoat: '#4169E1',   // Grayish cobalt blue
    dress: '#FFFFFF',      // White
    undergarment: '#000000', // Black
    collar: '#FFFFFF',     // White petalled collar
    bow: '#000000',        // Black on waist-belt
  },

  accessories: {
    hairbands: '#800000',  // Maroon petal-like
    choker: '#800000',     // Maroon
    wristband: '#800000',  // Maroon
    pantyhose: '#800000',  // Maroon tones
    shoes: '#000000',      // Black Mary Janes
    shoesSole: '#FFFFFF',  // White
    nails: '#AFEEEE',      // Pale turquoise
  },
} as const;

// =============================================================================
// MARIONETTE (マリオネット)
// Colorful clown/puppet aesthetic
// =============================================================================

export const marionette = {
  hair: {
    base: '#AFEEEE',       // Pale turquoise
    ties: '#CC0000',       // Red hair ties
  },

  makeup: {
    dots: '#FF69B4',       // Three hot pink dots under right eye
    tear: '#4169E1',       // Cobalt blue tear
  },

  outfit: {
    vest: '#4169E1',       // Cobalt blue
    bow: '#FF69B4',        // Pink striped
    shirt: '#FFFFFF',      // White
    sleeves: '#FFD700',    // Yellow with white polka dots
    sleevesDots: '#FFFFFF',
    overalls: '#CC0000',   // Scarlet striped with puffed legs
    patch: '#90EE90',      // Light green polka-dotted
    patchStripe: '#FFD700', // Yellow striped
    buttons: '#FFFACD',    // Light yellow
    gloves: '#000000',     // Black
  },

  accessories: {
    hat: '#000000',        // Black felt with blue/red stripes
    hatStripeBlue: '#4169E1',
    hatStripeRed: '#CC0000',
    shoes: '#9E4A6F',      // Dark grayish amaranth with pointy tips
    shoeBalls: '#FFFACD',  // Light yellow balls on toes
    shoesSole: '#FFFFFF',
    mask: '#FFFFFF',       // White clown mask (alternate version)
  },
} as const;

// =============================================================================
// ICHI-NO-SAKURA BLOSSOM (壱ノ桜)
// Taisho military with cherry blossom theme
// =============================================================================

export const ichiNoSakuraBlossom = {
  hair: {
    base: '#006400',       // Dark green
  },

  eyes: {
    iris: '#8B4513',       // Dark brown
  },

  makeup: {
    eyeliner: '#CC0000',   // Red
  },

  outfit: {
    jacket: '#9370AA',     // Mauve military-style
    epaulets: '#2F2F2F',   // Dark
    chains: '#FFD700',     // Gold chains
    medallion: '#FFD700',  // Gold sakura-styled
    sleeveSakura: '#FFB7C5', // Pink sakura on right flap
    backKanji: '#2F2F2F',  // Large 壱 (Ichi) in dark
    cap: '#9370AA',        // Mauve with sakura rim
    capRim: '#FFB7C5',     // Sakura rim design
    skirt: '#9370AA',      // Mauve pleated
  },

  accessories: {
    wristbands: '#8B4513', // Brown
    halfGloves: '#8B4513', // Brown
    stockings: '#B8A0C8',  // Light-mauve
    boots: '#8B4513',      // Brown geta boots
  },
} as const;

// =============================================================================
// SUPREME (スプリーム)
// Elegant princess aesthetic
// =============================================================================

export const supreme = {
  hair: {
    base: '#39C5BB',
    bows: '#000000',       // Large black bows
    feathers: '#CC0000',   // Red feathers on right bow
  },

  outfit: {
    dress: '#FFFFFF',      // White one-piece
    ribbon: '#000000',     // Small black at top-center
    frills: '#FFFFFF',     // Hip frills
    underskirt: '#000000', // Black
  },

  accessories: {
    bracelet: '#000000',   // Black on left wrist
    stockings: '#000000',  // Black with petal openings
    shoes: '#000000',      // Black Mary-Jane pumps
  },
} as const;

// =============================================================================
// CELEBRATION (セレブレーション)
// Anniversary multicolored celebratory design
// =============================================================================

export const celebration = {
  hair: {
    base: '#39C5BB',       // Turquoise with multicolored strands
    strands: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
  },

  outfit: {
    shirt: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF'], // Multicolored
    necktie: '#FFFFFF',    // White with turquoise hems
    necktieStar: '#FFD700', // Yellow star
    necktieTrim: '#39C5BB',
    sleeves: '#000000',    // Black see-through with turquoise hems
    sleevesTrim: '#39C5BB',
    skirt: '#000000',      // Black with turquoise trim
    skirtTrim: '#39C5BB',
    skirtHem: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF'], // Multicolored
  },

  accessories: {
    hairbands: ['#FF0000', '#FFFFFF'], // Striped pattern
    backBow: '#000000',    // Music staff design
    boots: '#000000',      // Black with turquoise cuffs
    bootsCuff: '#39C5BB',
    bootsHeels: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF'],
    nails: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
  },
} as const;

// =============================================================================
// CATCH THE WAVE (キャッチ・ザ・ウェイブ)
// Vibrant neon/rainbow sporty aesthetic
// =============================================================================

export const catchTheWave = {
  hair: {
    base: '#5DE4DB',       // Slightly lighter turquoise
    streaks: '#39FF14',    // Large neon green streaks
    clip: '#FFD700',       // Yellow C-shaped clip
    clipCenter: '#87CEEB', // Arctic blue center
    ties: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
  },

  eyes: {
    iris: '#5DE4DB',
  },

  makeup: {
    eyeshadow: '#FF69B4',  // Hot pink
    cheekHeart: '#FF69B4', // Tiny hot pink heart
    faceHeart: '#00BFFF',  // Small cerulean on upper right
  },

  outfit: {
    top: '#FFFFFF',        // White cropped with black collar
    topCollar: '#000000',
    topFrills: ['#000000', '#00BFFF', '#FFD700', '#FF69B4'], // Colorful frills
    skirt: '#FFFFFF',      // White and black
    skirtBlack: '#000000',
    skirtFrills: ['#000000', '#00BFFF', '#FFD700', '#FF69B4'],
    gloves: '#808080',     // Grey fingerless
    bracelet: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
  },

  accessories: {
    socks: '#FFFFFF',      // Long white loose
    sneakers: '#000000',   // Black and hot pink
    sneakersAccent: '#FF69B4',
    laces: '#FFD700',      // Yellow
    soleBalls: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF'],
  },
} as const;

// =============================================================================
// BREATHE WITH YOU (ブリーズ・ウィズ・ユー)
// Based on "Two Breaths Walking" - bold red/black/white
// =============================================================================

export const breatheWithYou = {
  hair: {
    base: '#39C5BB',
    accent: '#000000',     // Partial black hue
  },

  outfit: {
    top: '#FFFFFF',        // White frilled crop top
    collar: '#000000',     // Black and red collar
    collarRed: '#CC0000',
    cuffs: '#000000',      // Black frilled with white edges
    cuffsEdge: '#FFFFFF',
    cuffsString: '#CC0000', // Red strings
    skirt: '#000000',      // Black and red frilled
    skirtRed: '#CC0000',
    bow: '#000000',        // Black bow on back
    belt: '#CC0000',       // Red belt
  },

  accessories: {
    corsage: '#FFFFFF',    // Large white corsage
    boots: '#000000',      // Black and red thigh-high
    bootsRed: '#CC0000',
    bootsBows: '#000000',  // Matching bows on back
  },
} as const;

// =============================================================================
// HONEY WHIP (ハニーウィップ)
// Sexy-cute black/pink/gold design
// =============================================================================

export const honeyWhip = {
  hair: {
    base: '#5DE4DB',       // Light turquoise
  },

  eyes: {
    iris: '#5DE4DB',       // Light turquoise
  },

  outfit: {
    top: '#000000',        // Black long-sleeved crop top
    collar: '#FF69B4',     // Pink collar
    cuffs: '#FF69B4',      // Pink cuffs
    trim: '#FF69B4',       // Pink trimmings
    crest: '#FFD700',      // Gold crest
    buttons: '#FFD700',    // Gold buttons
    bra: '#000000',        // Black frilled
    skirt: '#000000',      // Multilayered black and pink
    skirtPink: '#FF69B4',
    belt: '#FF69B4',       // Pink and black
    beltBlack: '#000000',
    beltBuckle: '#FFD700', // Gold buckle
  },

  accessories: {
    hairclips: '#000000',  // Black and pink butterfly
    hairclipsPink: '#FF69B4',
    stockings: '#000000',  // Black with garters
    garters: '#000000',
    boots: '#000000',      // Black with pink cuffs/straps/heels
    bootsCuff: '#FF69B4',
    bootsStraps: '#FF69B4',
    bootsHeels: '#FF69B4',
    nails: '#FF69B4',      // Pink
  },
} as const;

// =============================================================================
// ANGEL (エンジェル)
// Heavenly white and teal design with wings
// =============================================================================

export const angel = {
  hair: {
    base: '#39C5BB',       // Loose, pigtail-like separation
  },

  outfit: {
    dress: '#FFFFFF',      // White A-neck one-piece
    dressTrim: '#39C5BB',  // Teal trimming
    backDesign: '#39C5BB', // Teal F-clef (Bass-clef) on back
    shorts: '#5DE4DB',     // Light-teal frilled balloon
    necktie: '#1B3A5C',    // Dark blue
    necktiePink: '#C71585', // Deep pink
    necktieTrim: '#87CEEB', // Light blue trimming
    necktieString: '#39C5BB', // Teal string
  },

  accessories: {
    choker: '#39C5BB',     // Teal
    gloves: '#FFFFFF',     // White with teal cuffs
    glovesCuff: '#39C5BB',
    bracelets: '#39C5BB',
    wings: '#FFFFFF',      // Angel wings on back
    socks: '#FFFFFF',      // Long white with teal trimmings
    socksTrim: '#39C5BB',
    socksKnee: '#87CEEB',  // Light blue knee patches
    shoes: '#87CEEB',      // Light blue Mary-Jane high-heels
    shoesWings: '#FFFFFF', // Angel wing designs
    headphones: '#39C5BB', // Turquoise circular
    headphonesWings: '#FFFFFF', // Angel wings on earpads
  },
} as const;

// =============================================================================
// PRINCESS (プリンセス)
// Elegant pink and yellow princess design
// =============================================================================

export const princess = {
  hair: {
    base: '#39C5BB',
    bands: '#FFC0CB',      // Pink hair bands
  },

  outfit: {
    jacket: '#FFC0CB',     // Pink with white frills
    jacketFrills: '#FFFFFF',
    jacketTrim: '#FFFFFF',
    undershirt: '#FFFACD', // Light yellow
    skirt: '#FFC0CB',      // Pink with white frills
    skirtFrills: '#FFFFFF',
    sleevesLeft: '#FFC0CB', // Pink and light yellow
    sleevesLeftYellow: '#FFFACD',
    sleevesRight: '#C71585', // Dark and light pink
    sleevesRightLight: '#FFC0CB',
    stockings: '#FFC0CB',  // Light pink and light yellow stripes
    stockingsYellow: '#FFFACD',
  },

  accessories: {
    headphones: '#C71585', // Dark and light pink with crown
    headphonesLight: '#FFC0CB',
    crown: '#FFD700',      // Small crown
    heartOrnament: '#CC0000', // Red heart
    earpadHearts: '#FFFACD', // Light yellow hearts
    boots: '#FFC0CB',      // Pink with white frills
    bootsFrills: '#FFFFFF',
    bootsStripes: '#DAA520', // Golden brown stripes
    nails: '#FFC0CB',      // Pink
  },
} as const;

// =============================================================================
// HATSUNE MIKU BUTTERFLY (バタフライ)
// Japanese-inspired butterfly and dragon motif
// =============================================================================

export const butterfly = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    jacket: '#2F4F4F',     // Dark greyish cyan
    jacketDark: '#008080', // Dark teal
    jacketTrim: '#39C5BB', // Turquoise
    jacketOrange: '#FF8C00', // Light brilliant orange
    butterflyDesign: '#39C5BB',
    obi: '#FFC0CB',        // Pink obi sash
    obiDragon: '#FF8C00',  // Light brilliant orange dragon
    skirtPetal: '#2F4F4F', // Dark greyish aquamarine
    skirtFrill: '#98FF98', // Mint green wrapped frilled
  },

  accessories: {
    hairbands: '#2F4F4F',  // Match jacket
    hairFlaps: '#FF00FF', // Light brilliant fuchsia with black butterfly
    hairFlapButterfly: '#000000',
    corsage: '#FFB7C5',    // Sakura flowers
    tattoo: '#CC0000',     // Red "01 VOCALOID"
    socks: '#1A1A1A',      // Long dark socks
    socksCuff: '#000000',  // Black cuffs
    shoes: '#000000',      // Black with teal cuffs
    shoesCuff: '#008080',
    shoesCuffLight: '#39C5BB',
    shoesSole: '#B8860B',  // Dark golden
    shoesSoleStripe: '#008080', // Teal stripe
  },
} as const;

// =============================================================================
// SPIRITUAL (スピリチュアル)
// Ethereal white and floral design
// =============================================================================

export const spiritual = {
  hair: {
    base: '#39C5BB',
  },

  eyes: {
    iris: '#DC143C',       // Brilliant cerise
  },

  outfit: {
    coat: '#FFFFFF',       // White translucent
    coatTrim: '#FF00FF',   // Magenta trimming
    flowerString: '#FFFFFF', // String of flowers around chest
    sleeves: '#FFFFFF',    // White detachable with turquoise trim
    sleevesTrim: '#39C5BB',
    sleevesFlowers: '#39C5BB', // Turquoise flowers on top
    skirt: '#008080',      // Teal with white trim
    skirtTrim: '#FFFFFF',
    skirtFlowers: '#FFFFFF',
    beltChain: '#FFFFFF',  // White and teal triangular
    beltChainTeal: '#008080',
  },

  accessories: {
    headFlowers: ['#FFFFFF', '#FFB6C1', '#39C5BB'], // White, light rose, turquoise
    headphones: '#FFFFFF', // White with magenta half-circle
    headphonesMagenta: '#FF00FF',
    ribbons: '#39C5BB',    // Turquoise and white
    ribbonsWhite: '#FFFFFF',
    socks: '#FFFFFF',      // White thigh-high
    loafers: '#FFFFFF',    // White with turquoise trim
    loafersTrim: '#39C5BB',
    loafersFlowers: '#39C5BB',
    loafersSole: '#39C5BB',
    anklets: '#39C5BB',    // Turquoise with white flowers
    ankletsFlowers: '#FFFFFF',
  },
} as const;

// =============================================================================
// OUT AND ABOUT (おでかけ)
// Casual streetwear with orange accents
// =============================================================================

export const outAndAbout = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    hoodie: '#808080',     // Grey with pink system line
    hoodieDesign: '#FFC0CB',
    skirt: '#FFB6C1',      // Light pink frilled
  },

  accessories: {
    hairbands: '#000000',  // Black cubed
    scrunchie: '#9370DB',  // Light purple (violet in later versions)
    bracelets: '#9370DB',  // Light purple on right wrist
    glasses: '#FFA500',    // Orange under-rim
    headphones: '#FFA500', // Orange, black, grey squared with leek motif
    headphonesBlack: '#000000',
    headphonesGrey: '#808080',
    necklace: '#FFA500',   // Orange with leek charm
    necklaceTriangle: '#FFA500',
    socks: '#000000',      // Black with purple stars
    socksStar: '#9370DB',
    shoes: '#FFFFFF',      // White with plaid orange
    shoesPlaid: '#FFA500',
    shoesLaces: '#000000', // Black laces
    shoesSole: '#000000',  // Black soles
    badgeCube: '#00BFFF',  // Cerulean cube on hood
    badgeSkull: '#000000', // Jolly roger on black
    badgePink: '#FFC0CB',  // Pink jolly roger on left shoe
  },
} as const;

// =============================================================================
// ROLLING GIRL (ローリンガール)
// School uniform in dark blue and brown
// =============================================================================

export const rollingGirl = {
  hair: {
    base: '#00008B',       // Dark blue
  },

  eyes: {
    iris: '#00008B',       // Dark blue
  },

  outfit: {
    cardigan: '#8B4513',   // Dark warm brown
    blouse: '#FFFFFF',     // White
    collar: '#8B4513',     // Sailor-style matching cardigan
    collarTrim: '#0000FF', // Blue trimming
    neckerchief: '#0000FF', // Blue
    skirt: '#8B4513',      // Dark warm brown pleated
  },

  accessories: {
    socks: '#8B4513',      // Matching knee-high
    shoes: '#FFFFFF',      // White indoor shoes
    shoesTip: '#ADD8E6',   // Light blue streak
  },
} as const;

// =============================================================================
// INNOCENT (イノセント)
// Elegant black dress with purple butterfly motif
// =============================================================================

export const innocent = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#000000',      // Black with purple frills
    dressFrills: '#9370DB',
    dressStitching: '#FFFFFF', // White stitching
    bow: '#DDA0DD',        // Pale orchid butterfly bow on back
    sleeves: '#000000',    // Short detachable matching dress
  },

  accessories: {
    hairbands: '#9370DB',  // Large purple butterfly-like
    ring: '#C0C0C0',       // Silver on right hand
    shoes: '#000000',      // Black high-heels
    shoesButterfly: '#9370DB', // Purple butterfly attachments
  },
} as const;

// =============================================================================
// FACTORY TYRANT (ファクトリータイラント)
// Industrial/steampunk design with cogwheels
// =============================================================================

export const factoryTyrant = {
  hair: {
    base: '#39C5BB',
    cuffs: '#C0C0C0',      // Silver cuffs connected to twin-tails
  },

  eyes: {
    iris: '#CC0000',       // Red
  },

  outfit: {
    cap: '#000000',        // Black peaked cap
    capStripe: '#39C5BB',  // Turquoise stripe
    capPlate: '#C0C0C0',   // Silver plate
    dress: '#000000',      // Black with turquoise trim
    dressTrim: '#39C5BB',
    dressButtons: '#39C5BB',
    shorts: '#000000',     // Black underneath
    belt: '#39C5BB',       // Turquoise with keys
  },

  accessories: {
    cogwheelTattoo: '#C0C0C0', // Small on left face
    cd: '#C0C0C0',         // CD on bosom
    cogwheels: '#C0C0C0',  // Floating around wrists/ankles
    infinitySymbol: '#C0C0C0', // Two cogwheels forming infinity
    gloves: '#000000',     // Black with turquoise
    glovesTurquoise: '#39C5BB',
    boots: '#000000',      // Black with turquoise
    bootsTurquoise: '#39C5BB',
  },
} as const;

// =============================================================================
// RIBBON GIRL (リボンガール)
// Cute school casual with pale amaranth and flannel
// =============================================================================

export const ribbonGirl = {
  hair: {
    base: '#39C5BB',
    bow: '#DB7093',        // Pale amaranth bow
    bowTie: '#9370DB',     // Purple hair tie
  },

  outfit: {
    cardigan: '#DB7093',   // Pale amaranth hoodie
    cardiganFlannel: '#A0522D', // Flannel inner
    cardiganStripes: '#FFFFFF', // White double stripes
    cuffBow: '#FF6347',    // Light brilliant red bow on right cuff
    backBow: '#DB7093',    // Pale amaranth bow on back
    shirt: '#FFDAB9',      // Very pale vermilion collar
    tie: '#4B0082',        // Dark purple
    tieStripes: '#FFFFFF', // White and violet stripes
    tieStripesViolet: '#EE82EE',
    pin: '#ADD8E6',        // Light blue M design
    skirt: '#5F9EA0',      // Greyish turquoise pleated
    skirtStripes: '#FFFFFF', // White stripes
  },

  accessories: {
    headphones: '#FF6347', // Light brilliant red
    headphonesBow: '#98FF98', // Mint green bow designs
    headphones01: '#FFFFFF', // "01" logo
    socks: '#FFFFFF',      // White high-socks
    socksBows: '#DB7093',  // Three small pale amaranth bows per sock
    sneakers: '#DB7093',   // Pale amaranth high-cut
    sneakersLaces: '#FF6347', // Light brilliant red laces
    sneakersSoles: '#FF6347', // Light brilliant red soles
    sneakersBows: '#FFFFFF', // White bows with stitching
    sneakersFlannel: '#A0522D', // Flannel patches
  },
} as const;

// =============================================================================
// OUT OF THE GRAVITY (重力アウト)
// Gothic black and magenta with wings
// =============================================================================

export const outOfTheGravity = {
  hair: {
    base: '#000000',       // Black (teal in some versions)
    cowlick: '#000000',    // Heart-shaped cowlick
  },

  outfit: {
    shirt: '#000000',      // Black with magenta frills
    shirtFrills: '#FF00FF',
    bodice: '#FF00FF',     // Magenta with black stitching
    bodiceStitching: '#000000',
    skirt: '#000000',      // Multi-layered black and magenta
    skirtMagenta: '#FF00FF',
    skirtStripe: '#FF1493', // Fuchsia stripe detail
    thighHighs: '#000000', // Black
  },

  accessories: {
    wings: '#FFFFFF',      // White wings
    choker: '#000000',     // Black
    bows: '#000000',       // Black with fuchsia stripes
    bowsStripe: '#FF1493',
    cuff: '#FF00FF',       // Magenta dotted lines and bow
    cuffLace: '#FFFFFF',
    wristRibbons: '#FF00FF', // Magenta
    boots: '#696969',      // Dark grey knee boots
    bootsBows: '#000000',  // Bows on outer side
    bootsSoles: '#FF1493', // Fuchsia soles
    nails: '#FF00FF',      // Magenta
  },
} as const;

// =============================================================================
// HATSUNE MIKU CHRISTMAS (クリスマス)
// Festive Santa-themed design
// =============================================================================

export const christmas = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#CC0000',      // Red Santa dress
    pockets: '#FFFFFF',    // White pockets
    cape: '#CC0000',       // Red cape
    capeCollar: '#FFFFFF', // Puffy white collar
    capeStar: '#FFD700',   // Gold star centerpiece
  },

  accessories: {
    santaHat: '#CC0000',   // Red Santa hat
    santaHatRibbon: '#39C5BB', // Turquoise ribbon (variant)
    santaHatRibbonBlack: '#000000',
    headphones: '#FFFFFF', // Puffy white
    tie: '#FFFFFF',        // White with red stripes
    tieStripes: '#CC0000',
    gloves: '#CC0000',     // Red with puffy cuffs
    glovesCuff: '#FFFFFF',
    thighRibbon: '#000000', // Black and turquoise
    thighRibbonTurquoise: '#39C5BB',
    boots: '#CC0000',      // Red high-heeled (black in variant)
    bootsPuffballs: '#FFFFFF',
  },
} as const;

// =============================================================================
// PRINCESS BLANCHE (プリンセス・ブランシュ)
// Cinderella-inspired elegant white gown
// =============================================================================

export const princessBlanche = {
  hair: {
    base: '#E6E6FA',       // Light opal
    ribbons: '#FFFFFF',    // Matching ribbons holding twin-tails
  },

  outfit: {
    gown: '#FFFFFF',       // White knee-length with puffed shoulders
    gownStitching: '#FFD700', // Gold design on hem, sleeves, collar
    waistRibbon: '#4B0082', // Dark purple
    stockings: '#FFFFFF',  // White
  },

  accessories: {
    tiara: '#C0C0C0',      // Small silver with flower designs
    broach: '#E0FFFF',     // Light cyan at collar bottom
    shoes: '#FFFFFF',      // Glass high-heels
    shoesRoses: '#FFC0CB', // Pink roses on tips
    nails: '#FFFFFF',      // White
  },
} as const;

// =============================================================================
// MICRYSTAL☆ (ミクリスタル☆)
// Crystal-themed elegant design
// =============================================================================

export const miCrystal = {
  hair: {
    base: '#87CEEB',       // Diamond blue
    roseQuartz: '#FFB6C1', // Rose quartz hues
    straps: '#FFFFFF',     // White straps wrapping twin-tails
  },

  outfit: {
    top: '#39C5BB',        // Teal crop top
    topFrills: '#E0FFFF',  // Crystal-like frills
    neckStraps: '#39C5BB', // Small teal neck straps
    waistBow: '#FFFFFF',   // White bow
    skirt: '#E0FFFF',      // Crystal/transparent appearance
  },

  accessories: {
    hairbands: '#E0FFFF',  // Crystal-like
    gloves: '#39C5BB',     // Teal with petal cuffs
    glovesCuff: '#E0FFFF', // Petal-like
    shoes: '#39C5BB',      // Teal high heels
    shoesStraps: '#39C5BB', // Small straps
  },
} as const;

// =============================================================================
// CONDUCTOR NIGHTINGALE (車掌ナイチンゲール)
// Vintage train conductor aesthetic
// =============================================================================

export const conductorNightingale = {
  hair: {
    base: '#556B2F',       // Olive green
  },

  eyes: {
    iris: '#8B4513',       // Brown
  },

  outfit: {
    jacket: '#8B4513',     // Brown conductor jacket
    jacketTrim: '#556B2F', // Olive trims on cuffs
    emblomBack: '#FFFFFF', // White emblem on back
    skirt: '#8B4513',      // Brown pleated
    pantyhose: '#2F2F2F',  // Dark pantyhose
  },

  accessories: {
    hat: '#8B4513',        // Brown conductor's hat
    hatRim: '#D2B48C',     // Light-brown rims
    hatEmblem: '#FFD700',  // Gold emblem
    hairFlower: '#FFFFFF', // White flower with bows
    twinTailFlowers: '#FFFFFF', // Small flowers
    cuffLinks: '#556B2F',  // Olive
    shoes: '#000000',      // Black high heels
  },
} as const;

// =============================================================================
// BUNNY EARS HOODIE (うさ耳パーカー)
// Cute bunny-themed pajama style
// =============================================================================

export const bunnyEarsHoodie = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    parka: '#FFB6C1',      // Light pink one-piece
    bunnyEyes: '#8B4513',  // Brown button eyes
    bunnyNose: '#FFA500',  // Orange X-stitch
    earCanals: '#FFC0CB',  // Pink canals
    bowtie: '#0000FF',     // Blue
    buttons: '#8B4513',    // Brown
    rabbitPatch: '#FFC0CB', // Pink
  },

  accessories: {
    stockings: '#9370DB',  // Purple and white striped
    stockingsWhite: '#FFFFFF',
    slippers: '#FFFFFF',   // White bunny slippers
  },
} as const;

// =============================================================================
// GHOST (ゴースト)
// Dark ethereal design with cracked appearance
// =============================================================================

export const ghost = {
  hair: {
    base: '#9370DB',       // Purple with blue hues
    blueHue: '#6495ED',
    strings: '#9370DB',    // Purple strings holding curled twin-tails
  },

  eyes: {
    iris: '#6495ED',       // Blue with purple hues
    pupilHue: '#9370DB',
  },

  skin: {
    base: '#F5F5F5',       // Pale white
    crack: '#2F2F2F',      // Crack on right side of face
  },

  outfit: {
    dress: '#000000',      // Black sleeveless one-piece
    collar: '#000000',     // Frilled black collar
    collarRibbon: '#000000', // Small black ribbon
    hem: '#008080',        // Small teal stripe around hem
    gloves: '#000000',     // Black long gloves
  },

  accessories: {
    boots: '#000000',      // Black thigh-high
    bootsStripe: '#008080', // Teal stripes down center
    bootsSoles: '#008080', // Teal soles
  },
} as const;

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const projectDiva = {
  deepSeaGirl,
  darkAngel,
  conflicted,
  heartHunter,
  whiteDress,
  powder,
  infinity,
  summerMemories,
  starVocalist,
  heartbeat,
  regret,
  marionette,
  ichiNoSakuraBlossom,
  supreme,
  celebration,
  catchTheWave,
  breatheWithYou,
  honeyWhip,
  angel,
  princess,
  butterfly,
  spiritual,
  outAndAbout,
  rollingGirl,
  innocent,
  factoryTyrant,
  ribbonGirl,
  outOfTheGravity,
  christmas,
  princessBlanche,
  miCrystal,
  conductorNightingale,
  bunnyEarsHoodie,
  ghost,
} as const;
