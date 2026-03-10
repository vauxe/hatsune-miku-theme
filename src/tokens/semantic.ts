/**
 * Semantic Design Tokens
 *
 * Layer 2: Dispatches to variant-specific token composition.
 *
 * Each variant directory (dark/, light/) contains its own token creators
 * and composes them into a unified SemanticTokens object.
 */

import { createDarkSemanticTokens } from './dark';
import { createLightSemanticTokens } from './light';
import type { SemanticTokens } from './types';

/**
 * Create semantic tokens for a specific variant.
 */
export function createSemanticTokens(variant: 'dark' | 'light'): SemanticTokens {
  return variant === 'dark' ? createDarkSemanticTokens() : createLightSemanticTokens();
}

/**
 * Default semantic tokens using standard dark Miku primitives
 */
export const semanticTokens = createDarkSemanticTokens();
