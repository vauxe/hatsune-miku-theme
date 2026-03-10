/**
 * Design Token System
 *
 * A three-layer architecture for theme color management:
 *
 * Layer 1: Primitives (primitives.ts)
 *   Raw values: lightness levels, chroma levels, hue angles, character hex colors
 *
 * Layer 2: Semantic Tokens (dark/, light/ + semantic.ts)
 *   Meaningful roles: syntax.keyword, ui.background, status.error
 *   Each variant directory contains its own token creators.
 *
 * Layer 3: Variants (variants.ts)
 *   Theme variations: dark, light
 *
 * Usage:
 * ```typescript
 * import { semanticTokens as t, withOpacity, opacity } from './tokens';
 *
 * // Access colors directly
 * const keywordColor = t.syntax.keyword.hex;
 * const withAlpha = withOpacity(t.ui.accentPrimary.hex, opacity.medium);
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
export { semanticTokens, createSemanticTokens } from './semantic';

// Role factories and derive functions
export {
  role,
  roleFromHex,
  withOpacity,
  lighten,
  darken,
  desaturate,
} from './role';


// Types
export type {
  SemanticTokens,
  SemanticRole,
  SyntaxTokens,
  UITokens,
  ExtendedUITokens,
  StatusTokens,
  GitTokens,
  TerminalTokens,
  SymbolTokens,
  BracketTokens,
  SupportTokens,
  MarkdownTokens,
  DebugTokens,
  StateTokens,
  InteractiveToken,
  InteractiveTokens,
  SliderStateTokens,
  DecorativeTokens,
} from './types';

// Layer 3: Variants
export {
  variants,
  generateVariantTokens,
  generateAllVariants,
  createDarkPrimitives,
  createLightPrimitives,
  adjustLightness,
  shiftHue,
  scaleChroma,
  lightLightness,
  lightCharacter,
  type ThemeVariant,
  type VariantConfig,
} from './variants';
