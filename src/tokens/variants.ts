/**
 * Theme Variant Derivation System
 *
 * Layer 3: Transform semantic tokens into theme variants.
 * This enables generating light themes from the same semantic tokens.
 *
 * Derivation strategies:
 * - Light theme: Invert lightness, adjust chroma for new background
 */

import { hex, type JzCzhz } from './jzczhz';
import {
  primitives,
  chroma,
  hue as baseHue,
  character as darkCharacter,
  special,
  opacity,
  type Primitives,
  type LightnessValues,
  type CharacterColors,
  type SpecialColors,
} from './primitives';
import { createSemanticTokens } from './semantic';
import type { SemanticTokens, SemanticRole } from './types';

// =============================================================================
// VARIANT TYPES
// =============================================================================

export type ThemeVariant = 'dark' | 'light';

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
