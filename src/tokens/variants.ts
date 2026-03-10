/**
 * Theme Variant Derivation System
 *
 * Layer 3: Variant registry and generation.
 *
 * Each variant is implemented in its own directory (dark/, light/).
 * This module provides the registry, generation API, and utility functions.
 */

import { hex } from './jzczhz';
import { createDarkSemanticTokens, createDarkPrimitives } from './dark';
import { createLightSemanticTokens, createLightPrimitives } from './light';
import { lightLightness, lightCharacter } from './light/primitives';
import type { Primitives } from './primitives';
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
    name: 'Hatsune Miku Theme (Snow Miku)',
    variant: 'light',
    description: 'Snow Miku — warm light theme, coding inside her pâtisserie',
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
  return variant === 'dark' ? createDarkSemanticTokens() : createLightSemanticTokens();
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
// RE-EXPORTS for backward compatibility
// =============================================================================

export { createDarkPrimitives } from './dark';
export { createLightPrimitives } from './light';
export { lightLightness, lightCharacter } from './light/primitives';

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
