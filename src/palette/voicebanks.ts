/**
 * Voicebank Versions - Software release character designs
 *
 * Different Miku voicebank software versions with distinct visual designs
 */

// NOTE:
// Crypton does not publish full per-element hex specs for these voicebanks.
// Values below are sampled from official product image packs (ec.crypton.co.jp /
// sonicwire.com), not user-submitted palette sites.

// =============================================================================
// MIKU V2 (2007) - The Original
// Designer: KEI
// =============================================================================

export const mikuV2 = {
  // Sampled from official img_hatsune_miku_v2_01/02.png
  hair: {
    base: '#94D2D2',
    shadow: '#067C82',
    highlight: '#9ED6E2',
  },
  eyes: {
    iris: '#067C82',
  },
  outfit: {
    top: '#BEC8D0',
    skirt: '#282E30',
    trim: '#009EBC',
  },
} as const;

// =============================================================================
// MIKU APPEND (2010) - Dark Futuristic Design
// =============================================================================

export const mikuAppend = {
  // Sampled from official img_hatsune_miku_append_01/02.png
  hair: {
    base: '#4CB896',
    shadow: '#0E664C',
    highlight: '#86CCC4',
  },

  // Eyes
  eyes: {
    iris: '#4CB896',
  },

  // Bodysuit - dark with metallic accents
  bodysuit: {
    base: '#0C0E0E',
    metallic: '#9A9A9A',
    circuit: '#68C2B8',
  },

  // Accessories
  accessories: {
    headphones: '#1A1A1A',
    glow: '#70C4BA',
  },

  marks: {
    tattoo: '#E60033',
  },
} as const;

// =============================================================================
// MIKU V3 (2013) - Refined Classic Design
// Designer: iXima
// =============================================================================

export const mikuV3 = {
  // Sampled from official img_hatsune_miku_v3_01/02.png and settei sheet
  hair: {
    base: '#58B8B8',
    shadow: '#005480',
    highlight: '#98D2C6',
  },

  // Eyes
  eyes: {
    iris: '#007692',
  },

  // Outfit - classic style
  outfit: {
    top: '#BEC8D1',
    skirt: '#2A2E36',
    trim: '#58B8B8',
  },

  accessories: {
    headphones: '#1A1F24',
    hairTies: {
      base: '#1A1F24',
      outline: '#E05096',
    },
    tie: '#58B8B8',
  },

  marks: {
    tattoo: '#E60033',
  },
} as const;

// =============================================================================
// MIKU V3 ENGLISH (2013) - Western Release
// Designer: Zain
// =============================================================================

export const mikuV3English = {
  // No separate official color spec is published; align with official V3 bundle art.
  hair: {
    base: '#58B8B8',
    shadow: '#005480',
    highlight: '#98D2C6',
  },

  eyes: {
    iris: '#007692',
  },

  outfit: {
    top: '#BEC8D1',
    trim: '#58B8B8',
  },
} as const;

// =============================================================================
// MIKU V4X (2016) - Polished Modern Design
// =============================================================================

export const mikuV4X = {
  // Sampled from official img_hatsune_miku_v4x_01/02/03.png and settei sheet
  hair: {
    base: '#2EA2B4',
    shadow: '#003E5E',
    highlight: '#84CCC8',
  },
  eyes: {
    iris: '#2EA2B4',
  },
  outfit: {
    top: '#F2F4F6',
    trim: '#00B2C2',
  },
} as const;

// =============================================================================
// MIKU V4 CHINESE (2017) - Chinese-inspired design
// Designer: Ideolo (based on Snow Miku 2016 artist)
// =============================================================================

export const mikuV4Chinese = {
  // Sampled from official img_hatsune_miku_v4c_01/02.png
  hair: {
    base: '#56B2C2',
  },

  outfit: {
    dress: '#FEFAF2',
    trim: '#6CB6CC',
    accent: '#2A2E2E',
  },

  accessories: {
    hairOrnament: '#E42084',
  },

  marks: {
    tattoo: '#E60033',
  },
} as const;

// =============================================================================
// MIKU NT (2020) - New Type Organic Design
// Designers: iXima (Costume), Rella (Mechanical)
// =============================================================================

export const mikuNT = {
  // Sampled from official img_hatsune_miku_nt_01/02.png and settei sheet
  hair: {
    base: '#88CCC6',
    highlight: '#92D0C6',
    shadow: '#426670',
  },

  // Eyes
  eyes: {
    iris: '#44869C',
  },

  // Outfit - white with soft frills
  outfit: {
    dress: '#FEF0E6',
    frills: '#FCF4F6',
    accent: '#50A2AC',
  },

  // Accessories - pin microphone instead of tie
  accessories: {
    headphones: '#2E2E32',
    microphone: '#50A2AC',
    hairTies: {
      base: '#FCF4F6',
      outline: '#E63884',
    },
  },

  marks: {
    tattoo: '#E60033',
  },
} as const;
