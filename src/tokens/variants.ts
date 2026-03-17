/**
 * Theme Variant Derivation System
 *
 * Layer 3: Variant registry and generation.
 *
 * Each variant is implemented in its own directory (dark/, light/).
 * This module provides the registry, generation API, and utility functions.
 */

import { createDarkSemanticTokens, createDarkPrimitives } from './dark';
import { createLightSemanticTokens, createLightPrimitives } from './light';
import { lightLightness, lightCharacter } from './light/primitives';
import type { Primitives } from './primitives';
import type { SemanticTokens } from './types';

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