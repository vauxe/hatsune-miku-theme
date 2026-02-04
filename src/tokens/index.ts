/**
 * Design Token System
 *
 * A three-layer architecture for theme color management:
 *
 * Layer 1: Primitives (primitives.ts)
 *   Raw values: lightness levels, chroma levels, hue angles, character hex colors
 *   No semantic meaning - just building blocks
 *
 * Layer 2: Semantic Tokens (semantic.ts)
 *   Meaningful roles: syntax.keyword, ui.background, status.error
 *   Maps primitives to purposes
 *
 * Layer 3: Variants (variants.ts)
 *   Theme variations: dark, light, sakura, highContrast
 *   Transforms semantic tokens by swapping/adjusting primitives
 *
 * Usage:
 * ```typescript
 * import { semanticTokens, generateVariantTokens } from './tokens';
 *
 * // Use default dark theme tokens
 * const keywordColor = semanticTokens.syntax.keyword.hex;
 *
 * // Generate light theme tokens
 * const lightTokens = generateVariantTokens('light');
 * const lightKeyword = lightTokens.syntax.keyword.hex;
 * ```
 */

// Layer 1: Primitives
export {
  primitives,
  lightness,
  chroma,
  hue,
  character,
  special,
  opacity,
  type Primitives,
  type Lightness,
  type Chroma,
  type Hue,
  type Character,
  type Special,
  type Opacity,
  type OpacityScale,
} from './primitives';

// Layer 2: Semantic Tokens
export {
  semanticTokens,
  createSemanticTokens,
  getHex,
  getSyntaxColors,
  getUIColors,
  getStatusColors,
  getGitColors,
  // Derive functions
  withOpacity,
  lighten,
  darken,
  desaturate,
  // Types
  type SemanticTokens,
  type SemanticRole,
  type SyntaxTokens,
  type UITokens,
  type StatusTokens,
  type GitTokens,
  type StateTokens,
  type InteractiveToken,
  type InteractiveTokens,
} from './semantic';

// Layer 3: Variants
export {
  variants,
  generateVariantTokens,
  generateAllVariants,
  createDarkPrimitives,
  createLightPrimitives,
  createSakuraPrimitives,
  createHighContrastPrimitives,
  adjustLightness,
  shiftHue,
  scaleChroma,
  lightLightness,
  lightCharacter,
  sakuraHue,
  sakuraCharacter,
  highContrastLightness,
  highContrastChroma,
  type ThemeVariant,
  type VariantConfig,
} from './variants';
