/**
 * Project DIVA Modules - Song-Based Costume Designs
 *
 * Iconic costumes from Hatsune Miku: Project DIVA game series
 * Each module corresponds to a famous Vocaloid song
 */

// =============================================================================
// DEEP SEA GIRL (Shinkai Shoujo / 深海少女)
// Designer: haruyo (ODESSA)
// =============================================================================

export const deepSeaGirl = {
  hair: {
    base: '#2E5A6B',       // Sea blue (darker than standard)
    tip: '#1A3A44',        // Fades to deep navy
    highlight: '#4A7A8C',
  },

  eyes: {
    iris: '#3D7A8C',       // Sea blue
  },

  outfit: {
    dress: '#0A3044',      // Deep navy blue (sea floor)
    underskirt: '#4EC5C1', // Aqua frills
    ribbon: '#5FCFCF',     // Turquoise ribbons
    lace: '#9FE2BF',       // Sea-foam green accent
  },

  accessories: {
    beads: '#E8F4F8',      // Pearl/shell decorations
    shoes: '#0D1B2A',      // Dark navy
    hairbands: '#1A1A2E',  // Kelp-like black
  },
} as const;

// =============================================================================
// CAT EARS (Nekomimi / 猫耳)
// =============================================================================

export const catEars = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    hoodie: '#1A1A1A',     // Black
    trim: '#39C5BB',       // Teal trim
    skirt: '#1A1A1A',
  },

  accessories: {
    ears: '#1A1A1A',       // Black cat ears
    earInner: '#FFB6C1',   // Pink inner
    pawGloves: '#FFFEF0',  // Cream paws
    pawPads: '#FF9EB5',    // Pink pads
    bell: '#FFD700',       // Gold bell
    collar: '#C41E3A',     // Red collar
    tail: '#1A1A1A',
  },
} as const;

// =============================================================================
// LOVE IS WAR (Koi wa Sensou / 恋は戦争)
// Designer: Shiro Miwa
// =============================================================================

export const loveIsWar = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    jacket: '#FFFFFF',     // White military jacket
    jacketTrim: '#1C1C1C', // Black piping
    undershirt: '#1A1A1A',
    skirt: '#1A1A1A',
    skirtTrim: '#E8E8E8',  // Silver accents
  },

  accessories: {
    epaulettes: '#D4AF37', // Gold
    armband: '#DC143C',    // Red heart
    megaphone: '#FFFFFF',
    megaphoneCross: '#CC0000', // Red cross
    boots: '#1A1A1A',
    hairRibbons: '#1C1C1C',
  },
} as const;

// =============================================================================
// WORLD IS MINE (Sekai wa Mine / ワールドイズマイン)
// "The World's #1 Princess"
// =============================================================================

export const worldIsMine = {
  hair: {
    base: '#39C5BB',
    highlight: '#5FCFC5',  // Slightly lighter
  },

  outfit: {
    bodice: '#1A1A1A',     // Black corset
    skirt: '#FFFAFA',      // Pure white tulle
    skirtTrim: '#1A1A1A',  // Black lace
    ribbon: '#1A1A1A',
  },

  accessories: {
    crown: '#C0C0C0',      // Silver crown
    crownGems: '#FF69B4',  // Pink gems
    gloves: '#FFFAFA',     // White elbow-length
    rose: '#8B0000',       // Deep red rose
    shoes: '#1A1A1A',
    hairBows: '#1A1A1A',   // Large black bows
  },
} as const;

// =============================================================================
// SENBONZAKURA (千本桜) - Thousand Cherry Blossoms
// Designer: Ittomaru
// Taisho-era military uniform
// =============================================================================

export const senbonzakura = {
  hair: {
    base: '#1A2744',       // Dark blue-black (different from standard)
  },

  eyes: {
    iris: '#8B0000',       // Red/crimson
  },

  outfit: {
    cap: '#1B2838',        // Navy military cap
    capBand: '#D4AF37',    // Gold band
    jacket: '#1B2838',     // Deep navy military
    jacketButtons: '#B8860B', // Brass buttons
    epaulettes: '#8B0000', // Burgundy/red
    hakama: '#722F37',     // Maroon
    obi: '#D4AF37',        // Gold sash
    belt: '#8B4513',       // Brown leather
  },

  accessories: {
    boots: '#1A1A1A',
    hairOrnament: '#FFB7C5', // Cherry blossom pink
    hairOrnamentGold: '#D4AF37',
    swordHilt: '#D4AF37',  // Gold
    swordAccent: '#8B0000', // Red
  },
} as const;

// =============================================================================
// GOTHIC / DARK ANGEL
// =============================================================================

export const gothic = {
  hair: {
    base: '#1A0A2E',       // Deep purple-black
  },

  eyes: {
    iris: '#4B0082',       // Purple (or red variant)
  },

  outfit: {
    dress: '#0D0D0D',      // Black velvet
    corset: '#0A0A0A',
    corsetLacing: '#301934', // Deep purple
    skirtLayers: '#1A1A1A',
    lace: '#2D2D2D',
    wings: '#0A0A0A',      // Black feathered
    wingHighlight: '#4A4A4A',
  },

  accessories: {
    headpiece: '#0A0A0A',
    gems: '#663399',       // Amethyst purple
    jewelry: '#C0C0C0',    // Silver crosses
    roses: '#8B0000',      // Blood red
    stockings: '#0A0A0A',
    boots: '#0A0A0A',
  },
} as const;

// =============================================================================
// MELT (メルト)
// Designer: Based on illustration by 119
// Summer casual - shy girl on a date
// =============================================================================

export const melt = {
  hair: {
    base: '#39C5BB',
    highlight: '#5FCFC5',
  },

  outfit: {
    skirt: '#FFB6C1',      // Pink skirt
    blouse: '#FFFFFF',     // White top
    cardigan: '#FFC0CB',   // Light pink
  },

  accessories: {
    hairFlower: '#FF69B4', // Pink flower pin
    hairRibbons: '#FFB6C1',
    sandals: '#FFFDD0',    // Cream
    bag: '#F5DEB3',        // Tan
  },
} as const;

// =============================================================================
// ROLLING GIRL (ローリンガール)
// Designers: Akiakane & yama_ko (PV)
// Japanese high school uniform
// =============================================================================

export const rollingGirl = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    blazer: '#1B3A5C',     // Navy blue
    shirt: '#FFFFFF',
    tie: '#C41E3A',        // Red
    skirt: '#4A5568',      // Plaid grey/navy
  },

  accessories: {
    hairRibbons: '#C41E3A', // Red
    socks: '#FFFFFF',      // White knee-high
    shoes: '#8B4513',      // Brown loafers
    bandages: '#F5F5F5',   // White (optional)
  },
} as const;

// =============================================================================
// TELL YOUR WORLD - Google Chrome CM (2012)
// Minimalist white digital aesthetic
// =============================================================================

export const tellYourWorld = {
  hair: {
    base: '#F8F8FF',       // Pure white/platinum
    highlight: '#FFFFFF',
  },

  eyes: {
    iris: '#B0E0E6',       // Light blue/white
  },

  outfit: {
    dress: '#FFFFFF',      // Pure white
    trim: '#E0FFFF',       // Translucent/holographic
  },

  accessories: {
    headphones: '#E8E8E8', // Silver/white
    shoes: '#FFFFFF',
  },

  // Chrome colors appear in visual effects
  chromeColors: {
    red: '#EA4335',
    yellow: '#FBBC05',
    green: '#34A853',
    blue: '#4285F4',
  },
} as const;

// =============================================================================
// IEVAN POLKKA - Finnish Folk Dress
// Illustrator: Tamago (featuring Hachune Miku in original)
// =============================================================================

export const ievanPolkka = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    bodice: '#1A1A1A',     // Black
    skirt: '#B22222',      // Red with stripes
    apron: '#FFFAFA',      // White with embroidery
    blouse: '#FFFFFF',     // White puffy sleeves
  },

  accessories: {
    headpiece: '#B22222',  // Red/white folk cap
    headpieceWhite: '#FFFFFF',
    embroidery: '#FFD700', // Yellow patterns
    leek: '#228B22',       // Green (iconic prop)
    sash: '#1E88E5',       // Blue
    socks: '#B22222',      // Red/white striped
  },
} as const;

// =============================================================================
// SADISTIC MUSIC FACTORY (サディスティック・ミュージック・ファクトリー)
// Industrial worker style
// =============================================================================

export const sadisticMusicFactory = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    coveralls: '#FF6600',  // Orange worker suit
    belt: '#1A1A1A',       // Black belt
    trim: '#FFCA28',       // Yellow warning
    undershirt: '#1A1A1A',
    zipper: '#C0C0C0',     // Silver metal
  },

  accessories: {
    goggles: '#1A1A1A',
    goggleLens: '#FF8C00', // Orange lens
    hardHat: '#FFD700',    // Yellow
    gloves: '#1A1A1A',
    boots: '#5D4037',      // Brown work boots
    toolBelt: '#3D2914',   // Dark brown
  },
} as const;

// =============================================================================
// TWO-FACED LOVERS (Ura-Omote Lovers / 裏表ラバーズ)
// Module Name: Conflict
// Asymmetric black/white duality
// =============================================================================

export const twoFacedLovers = {
  // Split design - asymmetric
  hair: {
    left: '#F5F5F5',       // White/platinum
    right: '#0A0A0A',      // Black
  },

  eyes: {
    left: '#ADD8E6',       // Light blue
    right: '#8B0000',      // Red/dark
  },

  outfit: {
    dressLeft: '#FFFFFF',  // White half
    dressRight: '#000000', // Black half
    collar: '#39C5BB',     // Teal center
    ribbon: '#FF0000',     // Red ribbon
  },

  accessories: {
    headphones: '#1A1A1A',
    hairTieLeft: '#FFFFFF',
    hairTieRight: '#1A1A1A',
    stockingLeft: '#FFFFFF',
    stockingRight: '#000000',
  },
} as const;

// =============================================================================
// ACUTE (アキュート)
// Love triangle drama - elegant party dress
// =============================================================================

export const acute = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#1C1C1C',      // Black elegant
    corset: '#1C1C1C',     // Black with red lacing
    corsetLacing: '#C41E3A',
    skirtLayers: '#1A1A1A', // Black tulle
  },

  accessories: {
    hairRoses: '#C41E3A',  // Red roses
    gloves: '#1C1C1C',     // Black elbow-length
    choker: '#1C1C1C',     // Black
    chokerGem: '#C41E3A',  // Red gem
    shoes: '#1A1A1A',      // Black heels
  },
} as const;

// =============================================================================
// TRIPLE BAKA (トリプルばか)
// Designer: LamazeP
// Casual/comedic cheerful outfit
// =============================================================================

export const tripleBaka = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    top: '#FFFFFF',        // White t-shirt
    skirt: '#39C5BB',      // Teal
    jacket: '#FFB6C1',     // Light pink
  },

  accessories: {
    hairRibbons: '#FF69B4', // Pink
    headphones: '#39C5BB', // Teal
    headphoneAccent: '#808080', // Grey
    shoes: '#FF69B4',      // Pink sneakers
    socks: '#FFFFFF',
  },
} as const;

// =============================================================================
// ODDS & ENDS (オッズ＆エンズ)
// Worn/broken doll aesthetic - emotional/melancholic
// =============================================================================

export const oddsAndEnds = {
  hair: {
    base: '#7FCDCD',       // Faded teal (desaturated)
    highlight: '#99CCCC',
  },

  eyes: {
    iris: '#99CCCC',       // Pale teal (dim)
  },

  // Doll-like appearance
  skin: {
    base: '#FFF8F0',       // Porcelain pale
  },

  outfit: {
    dress: '#F5F5DC',      // Faded cream/white
    patches: '#D3D3D3',    // Mismatched fabrics
    ribbons: '#DDA0BA',    // Faded pink
  },

  accessories: {
    stitches: '#8B7355',   // Brown thread
    shoes: '#A0826A',      // Worn brown
    joints: '#E8E8E8',     // Ball joints (doll-like)
  },
} as const;

// =============================================================================
// KNIFE (ナイフ) - Song by rerulili
// Dark, edgy aesthetic
// =============================================================================

export const knife = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#1A1A1A',      // Dark base
    accent: '#CC0000',     // Blood red
    trim: '#333333',       // Dark grey
  },

  accessories: {
    blade: '#C0C0C0',      // Silver metal
    bladeAccent: '#8B0000', // Dark red
    boots: '#1A1A1A',
  },
} as const;

// =============================================================================
// PACKAGED - Song by kz/livetune
// Illustrator: redjuice
// Futuristic, clean aesthetic (one of Miku's earliest hits, 2007)
// =============================================================================

export const packaged = {
  hair: {
    base: '#39C5BB',
    highlight: '#5DE4DB',
  },

  outfit: {
    dress: '#FFFFFF',      // Clean white
    accent: '#39C5BB',     // Teal accents
    trim: '#000000',       // Black contrast
  },

  accessories: {
    headphones: '#808080', // Grey metallic
    techElements: '#39C5BB',
    softPink: '#FFB7C5',   // Accent highlights
  },
} as const;

// =============================================================================
// BLACK ROCK SHOOTER - Crossover character by huke
// Song by supercell
// =============================================================================

export const blackRockShooter = {
  // Different character - black hair
  hair: {
    base: '#0A0A0A',       // Pure black
    highlight: '#1A1A2E',
  },

  eyes: {
    normal: '#00BFFF',     // Blue
    flame: '#00FFFF',      // Blazing cyan flame (left eye)
  },

  skin: {
    base: '#F5F5F5',       // Distinctive pale white
  },

  outfit: {
    coat: '#000000',       // Black coat
    bikiniTop: '#0A0A0A',  // Black
    shorts: '#0D0D1A',     // Deep black-blue
  },

  accessories: {
    cannon: '#71797E',     // Steel grey weapon
    flame: '#00BFFF',      // Blue flame aura
    glowEffect: '#00FFFF', // Cyan energy
  },
} as const;

// =============================================================================
// DECORATOR - Song by kz/livetune
// Bright, celebratory aesthetic
// =============================================================================

export const decorator = {
  hair: {
    base: '#39C5BB',
  },

  outfit: {
    dress: '#FFFFFF',      // White base
    ribbons: '#FF69B4',    // Pink decorations
    trim: '#87CEEB',       // Light blue
  },

  accessories: {
    decorations: '#FFD700', // Yellow/gold decorative elements
    bows: '#FF69B4',       // Pink
    lavender: '#E6E6FA',   // Pastel highlights
  },
} as const;

// =============================================================================
// GHOST RULE (ゴーストルール) - Song by DECO*27
// Illustrator: Hachisan
// Ghostly, digital glitch aesthetic
// =============================================================================

export const ghostRule = {
  hair: {
    base: '#39C5BB',
    glitch: '#00CED1',     // Digital cyan
  },

  eyes: {
    iris: '#39C5BB',
  },

  outfit: {
    dress: '#4B0082',      // Deep purple/violet
    accent: '#00CED1',     // Digital cyan
    shadow: '#0A0A0A',     // Pitch black
  },

  accessories: {
    spectral: '#F8F8FF',   // Ghost-like white
    glitch: '#FF00FF',     // Neon magenta glitch
    darkGrey: '#2F2F2F',
  },
} as const;

// =============================================================================
// SAND PLANET (Suna no Wakusei / 砂の惑星) - Song by Hachi (Kenshi Yonezu)
// Magical Mirai 2017 Theme Song
// =============================================================================

export const sandPlanet = {
  // Desert/Wasteland theme
  hair: {
    base: '#39C5BB',
    ribbon: '#000000',     // Black velvet ribbon
  },

  outfit: {
    dress: '#E6DCCA',      // Sand beige
    chiffon: '#F5F5F5',    // Translucent layer
    pattern: '#D4AF37',    // Gold geometric lines
    collar: '#1A1A1A',     // Black collar
  },

  accessories: {
    gloves: '#1A1A1A',     // Black full length
    bracelet: '#2F4F4F',   // Dark slate
  },
} as const;

// =============================================================================
// VAMPIRE (ヴァンパイア) - Song by DECO*27
// Illustrator: Hachisan
// "Jirai Kei" (Landmine) fashion aesthetic
// =============================================================================

export const vampire = {
  // Cute but dangerous theme
  hair: {
    base: '#39C5BB',
    clip: '#C41E3A',       // Red hair clip
  },

  eyes: {
    iris: '#39C5BB',
  },

  outfit: {
    top: '#0F0F0F',        // Soft black
    skirt: '#1A1A1A',      // Black pleated
    accent: '#C41E3A',     // Deep red
    ribbons: '#FFB7C5',    // Pale pink ribbon
  },

  accessories: {
    mask: '#0F0F0F',       // Black face mask (iconic)
    choker: '#1A1A1A',
    wings: '#000000',      // Tiny bat wings
    heart: '#FF0000',      // Red heart motif
  },
} as const;
