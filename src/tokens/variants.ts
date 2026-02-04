/**
 * Theme Variant Derivation System
 *
 * Layer 3: Transform semantic tokens into theme variants.
 * This enables generating light themes, high-contrast themes,
 * and alternate color schemes (Sakura Miku) from the same semantic tokens.
 *
 * Derivation strategies:
 * - Light theme: Invert lightness, adjust chroma for new background
 * - High contrast: Increase lightness spread and chroma
 * - Sakura Miku: Swap hue primitives (teal → pink)
 */

import { hex, type JzCzhz } from '../palette/jzczhz';
import {
  primitives,
  lightness as darkLightness,
  chroma,
  hue as baseHue,
  character as darkCharacter,
  special,
  opacity,
  type Primitives,
  type LightnessValues,
  type ChromaValues,
  type HueValues,
  type CharacterColors,
  type SpecialColors,
} from './primitives';
import {
  createSemanticTokens,
  type SemanticTokens,
  type SemanticRole,
} from './semantic';

// =============================================================================
// VARIANT TYPES
// =============================================================================

export type ThemeVariant = 'dark' | 'light' | 'sakura' | 'highContrast';

export interface VariantConfig {
  name: string;
  variant: ThemeVariant;
  description: string;
  primitives: Primitives;
}

// =============================================================================
// LIGHTNESS DERIVATION
// =============================================================================

/**
 * Derive light theme lightness values
 *
 * For light themes, we need to:
 * 1. Invert the lightness scale (dark text on light background)
 * 2. Adjust for APCA asymmetry (dark-on-light needs different values)
 * 3. Reduce chroma slightly (vivid colors on white can be harsh)
 */
export const lightLightness: LightnessValues = {
  // Primary syntax - darker for light backgrounds (target Lc 75-85)
  // APCA dark-on-light: Jz ~0.08-0.12 for good contrast on Jz ~0.20 background
  primary: 0.085,        // Cool hues with C1
  primaryWarm: 0.095,    // Warm hues with C1 (reds need more contrast)
  vibrant: 0.090,        // Cool hues with C2
  vibrantWarm: 0.100,    // Warm hues with C2
  vivid: 0.080,          // C3 - extra dark for visibility
  muted: 0.110,          // Comments - lighter (less contrast needed)

  // Secondary elements
  secondary: 0.095,      // Secondary text
  tertiary: 0.140,       // Dim elements - closer to background
  accent: 0.090,         // Brackets, highlights
};

/**
 * Light theme background colors (derived from character palette)
 * We use tints of the character colors rather than pure white
 */
export const lightCharacter: CharacterColors = {
  hair: { ...darkCharacter.hair },
  eyes: { ...darkCharacter.eyes },
  headphones: {
    frame: '#F5F8FA', // Light surface instead of dark
    cushion: darkCharacter.headphones.cushion,
    display: darkCharacter.headphones.display,
  },
  hairTies: { ...darkCharacter.hairTies },
  top: {
    main: '#E8EEF0',      // Light equivalent
    shadow: '#DDE5E8',    // Section headers
    trim: darkCharacter.top.trim,
  },
  skirt: {
    base: '#FAFCFD',      // Editor background - near white with teal tint
    trim: darkCharacter.skirt.trim,
    accessory: '#8A9CA0', // Darker on light
  },
  armWarmers: {
    base: '#F0F4F6',      // Elevated surfaces
    pattern: darkCharacter.armWarmers.pattern,
  },
  boots: { ...darkCharacter.boots },
  tie: { ...darkCharacter.tie },
  negi: { ...darkCharacter.negi },
};

// =============================================================================
// SAKURA MIKU HUE REMAPPING
// =============================================================================

/**
 * Sakura Miku: Teal becomes pink, other hues shifted accordingly
 */
export const sakuraHue: HueValues = {
  // 12-tone chromatic scale for Sakura theme
  // Tonal center shifts: Teal (180°) → Pink (330°)
  // The "tonic" becomes cherry blossom pink
  red: 0,
  coral: 30,
  gold: 60,
  lime: 90,
  green: 120,
  mint: 150,
  mikuTeal: 330,         // Pink becomes the new "tonic"
  cyan: 210,
  blue: 240,
  violet: 270,
  magenta: 300,
  pink: 180,             // Teal becomes the accent (swapped)

  // Semantic aliases - rotated for sakura
  mikuPink: 180,         // Teal accent (was pink)
  peach: 30,
  amber: 60,
  sky: 210,
  ice: 210,
  periwinkle: 240,
  lavender: 270,
  orchid: 300,           // Shifted toward magenta
  rose: 330,

  // Git status
  gitRed: 0,
  gitViolet: 270,
};

/**
 * Sakura Miku character colors (pink-dominant)
 */
export const sakuraCharacter: CharacterColors = {
  hair: {
    base: '#FFB8C8',      // Sakura pink
    shadow: '#E8A0B0',    // Darker pink
    highlight: '#FFD0DC', // Light pink
    bright: '#FFE0E8',    // Brightest pink
    tip: '#FFF0F4',       // Palest pink
  },
  eyes: {
    iris: '#FFB8C8',
    highlight: '#FFD0DC',
    pupil: '#0D1114',
  },
  headphones: {
    frame: '#1A1F24',
    cushion: '#39C5BB',   // Teal cushion (inverted accent)
    display: '#FFB8C8',   // Pink display
  },
  hairTies: {
    base: '#111417',
    outline: '#39C5BB',   // Teal outline (inverted)
  },
  top: { ...darkCharacter.top },
  skirt: { ...darkCharacter.skirt },
  armWarmers: { ...darkCharacter.armWarmers },
  boots: { ...darkCharacter.boots },
  tie: {
    base: '#FFB8C8',
    shadow: '#E8A0B0',
  },
  negi: { ...darkCharacter.negi },
};

// =============================================================================
// HIGH CONTRAST ADJUSTMENTS
// =============================================================================

/**
 * High contrast lightness - increased spread for accessibility
 */
export const highContrastLightness: LightnessValues = {
  primary: 0.200,        // Brighter primaries
  primaryWarm: 0.210,
  vibrant: 0.195,
  vibrantWarm: 0.215,
  vivid: 0.185,
  muted: 0.180,          // Brighter comments

  secondary: 0.195,
  tertiary: 0.140,       // More visible tertiary
  accent: 0.200,
};

/**
 * High contrast chroma - increased saturation for distinction
 */
export const highContrastChroma: ChromaValues = {
  comfortable: 0.065,    // ~34% - more saturated
  vibrant: 0.080,        // ~42%
  vivid: 0.095,          // ~50%
  muted: 0.050,          // ~26% - more visible comments
  gray: 0.020,
  none: 0,
};

// =============================================================================
// VARIANT FACTORIES
// =============================================================================

/**
 * Create primitives for dark theme (default)
 */
export function createDarkPrimitives(): Primitives {
  return primitives;
}

/**
 * Create primitives for light theme
 */
export function createLightPrimitives(): Primitives {
  const lightSpecial: SpecialColors = {
    void: '#FAFCFD',         // Light void
    pureWhite: '#000000',    // Inverted for text
    nearWhite: '#1A1F24',    // Dark text
    transparent: special.transparent,
  };
  return {
    lightness: lightLightness,
    chroma,
    hue: baseHue,
    character: lightCharacter,
    special: lightSpecial,
    opacity,
  };
}

/**
 * Create primitives for Sakura Miku variant
 */
export function createSakuraPrimitives(): Primitives {
  return {
    lightness: darkLightness,
    chroma,
    hue: sakuraHue,
    character: sakuraCharacter,
    special,
    opacity,
  };
}

/**
 * Create primitives for high contrast variant
 */
export function createHighContrastPrimitives(): Primitives {
  return {
    lightness: highContrastLightness,
    chroma: highContrastChroma,
    hue: baseHue,
    character: darkCharacter,
    special,
    opacity,
  };
}

// =============================================================================
// VARIANT CONFIGURATIONS
// =============================================================================

export const variants: Record<ThemeVariant, VariantConfig> = {
  dark: {
    name: 'Hatsune Miku Theme',
    variant: 'dark',
    description: 'Default dark theme with Miku teal accents',
    primitives: createDarkPrimitives(),
  },
  light: {
    name: 'Hatsune Miku Theme Light',
    variant: 'light',
    description: 'Light theme with dark text on light backgrounds',
    primitives: createLightPrimitives(),
  },
  sakura: {
    name: 'Sakura Miku Theme',
    variant: 'sakura',
    description: 'Cherry blossom variant with pink accents',
    primitives: createSakuraPrimitives(),
  },
  highContrast: {
    name: 'Hatsune Miku Theme High Contrast',
    variant: 'highContrast',
    description: 'High contrast variant for accessibility',
    primitives: createHighContrastPrimitives(),
  },
};

// =============================================================================
// VARIANT GENERATION
// =============================================================================

/**
 * Generate semantic tokens for a specific variant
 */
export function generateVariantTokens(variant: ThemeVariant): SemanticTokens {
  const config = variants[variant];
  return createSemanticTokens(config.primitives);
}

/**
 * Generate all variant tokens
 */
export function generateAllVariants(): Record<ThemeVariant, SemanticTokens> {
  return {
    dark: generateVariantTokens('dark'),
    light: generateVariantTokens('light'),
    sakura: generateVariantTokens('sakura'),
    highContrast: generateVariantTokens('highContrast'),
  };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Adjust a single semantic role's lightness
 */
export function adjustLightness(role: SemanticRole, delta: number): SemanticRole {
  if (role.jzczhz.Jz === 0) {
    // This is a hex-based role, can't adjust
    return role;
  }

  const newJz = Math.max(0, Math.min(0.22, role.jzczhz.Jz + delta));
  const newJzczhz = { ...role.jzczhz, Jz: newJz };

  return {
    ...role,
    jzczhz: newJzczhz,
    hex: hex(newJzczhz),
  };
}

/**
 * Shift a single semantic role's hue
 */
export function shiftHue(role: SemanticRole, delta: number): SemanticRole {
  if (role.jzczhz.Jz === 0) {
    return role;
  }

  const newHz = (role.jzczhz.hz + delta + 360) % 360;
  const newJzczhz = { ...role.jzczhz, hz: newHz };

  return {
    ...role,
    jzczhz: newJzczhz,
    hex: hex(newJzczhz),
  };
}

/**
 * Scale a single semantic role's chroma
 */
export function scaleChroma(role: SemanticRole, factor: number): SemanticRole {
  if (role.jzczhz.Jz === 0) {
    return role;
  }

  const newCz = Math.max(0, Math.min(0.19, role.jzczhz.Cz * factor));
  const newJzczhz = { ...role.jzczhz, Cz: newCz };

  return {
    ...role,
    jzczhz: newJzczhz,
    hex: hex(newJzczhz),
  };
}
