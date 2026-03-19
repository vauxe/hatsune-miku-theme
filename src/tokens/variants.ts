/**
 * Theme Variant Generation
 *
 * Layer 3: Dispatches to variant-specific token composition.
 */

import { createDarkSemanticTokens } from './dark';
import { createLightSemanticTokens } from './light';
import type { SemanticTokens } from './types';

export type ThemeVariant = 'dark' | 'light';

/**
 * Generate semantic tokens for a specific variant
 */
export function generateVariantTokens(variant: ThemeVariant): SemanticTokens {
  return variant === 'dark' ? createDarkSemanticTokens() : createLightSemanticTokens();
}
