/**
 * Games - Project DIVA Modules and Project Sekai
 *
 * Iconic costume designs from Miku's game appearances
 */

// =============================================================================
// PROJECT SEKAI - Miku's appearance in game
// =============================================================================

export const projectSekai = {
  // Standard SEKAI Miku
  standard: {
    hair: '#33CCBB',       // Slightly different from original
    eyes: '#33CCBB',
  },

  // Empty SEKAI form - heterochromia
  emptySekai: {
    hair: '#33CCBB',
    eyeLeft: '#33CCBB',    // Teal
    eyeRight: '#FF80AB',   // Pink - represents loneliness/connection
  },
} as const;

// =============================================================================
// PROJECT DIVA MODULES - Iconic Song Costumes
// =============================================================================

export const deepSeaGirl = {
  // Hair - teal with darker tips
  hair: {
    base: '#39C5BB',
    tip: '#0A3044',        // Fades to deep navy
  },

  // Outfit - deep sea dress
  outfit: {
    dress: '#0A3044',      // Deep navy blue
    underskirt: '#4EC5C1', // Aqua frills
    ribbon: '#5FCFCF',     // Turquoise ribbons
  },

  accessories: {
    beads: '#E8F4F8',      // Pearl/shell decorations
    shoes: '#0D1B2A',      // Dark navy
  },
} as const;

export const catEars = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - black cat hoodie
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
    collar: '#CC3333',     // Red collar
    tail: '#1A1A1A',
  },
} as const;

export const loveIsWar = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - military uniform
  outfit: {
    jacket: '#FFFFFF',     // White military jacket
    jacketTrim: '#000000', // Black piping
    undershirt: '#1A1A1A',
    skirt: '#1A1A1A',
  },

  accessories: {
    epaulettes: '#D4AF37', // Gold
    armband: '#DC143C',    // Red heart
    megaphone: '#FFFFFF',
    megaphoneCross: '#DC143C',
    boots: '#1A1A1A',
    hairRibbons: '#1A1A1A',
  },
} as const;

export const worldIsMine = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - princess dress
  outfit: {
    bodice: '#1A1A1A',     // Black corset
    skirt: '#FFFFFF',      // White tulle
    skirtTrim: '#1A1A1A',  // Black lace
    ribbon: '#1A1A1A',
  },

  accessories: {
    crown: '#C0C0C0',      // Silver crown
    gloves: '#FFFFFF',     // White gloves
    rose: '#8B0000',       // Deep red rose
    shoes: '#1A1A1A',
    hairBows: '#1A1A1A',   // Large black bows
  },
} as const;

export const senbonzakura = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - Taisho era military
  outfit: {
    cap: '#556B2F',        // Olive green
    capBand: '#D4AF37',    // Gold
    jacket: '#6B8E23',     // Army olive
    jacketButtons: '#D4AF37',
    epaulettes: '#8B0000', // Burgundy
    hakama: '#722F37',     // Maroon
    obi: '#D4AF37',        // Gold sash
  },

  accessories: {
    boots: '#1A1A1A',
    hairOrnament: '#FFB7C5', // Cherry blossom
    hairOrnamentGold: '#D4AF37',
  },
} as const;

export const gothic = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - dark angel
  outfit: {
    dress: '#1A0A2E',      // Deep purple-black
    corset: '#0A0A0A',     // Black
    corsetLacing: '#4B0082', // Purple
    skirtLayers: '#2D0A4E',
    wings: '#4A4A4A',      // Dark gray feathers
    wingHighlight: '#8A8A8A',
  },

  accessories: {
    headpiece: '#0A0A0A',
    gems: '#663399',       // Amethyst
    jewelry: '#C0C0C0',    // Silver crosses
    roses: '#8B0000',      // Blood red
    stockings: '#0A0A0A',
    boots: '#0A0A0A',
  },
} as const;

export const melt = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - summer casual
  outfit: {
    dress: '#F5DEB3',      // Warm cream
    accent: '#FFCC99',     // Soft orange
    trim: '#D2B48C',       // Light brown
  },
} as const;

export const rollingGirl = {
  hair: {
    base: '#39C5BB',
  },

  // Outfit - school uniform
  outfit: {
    blazer: '#1E3050',     // Navy
    shirt: '#FFFFFF',
    tie: '#CD5C5C',        // Red
    skirt: '#1E3050',
  },

  accessories: {
    bandages: '#F5F5F5',   // White bandages
  },
} as const;
