/**
 * Design Token System
 *
 * A three-layer architecture for theme color management:
 *
 * Layer 1: Primitives (primitives.ts)
 *   Raw values: lightness levels, chroma levels, hue angles, character hex colors
 *
 * Layer 2: Semantic Tokens (dark/, light/)
 *   Meaningful roles: syntax.keyword, ui.background, status.error
 *   Each variant directory contains its own token creators.
 *
 * Layer 3: Themes (src/registry.ts)
 *   Each shipped theme composes these tokens into a Theme value.
 */

// Layer 1: Primitives
export {
  special,
  opacity,
  selectionAlpha,
} from './primitives';
export type { Polarity } from './primitives';

// Role factories and derive functions
export {
  hex,
  parseHex,
  role,
  roleFromHex,
  withOpacity,
  lighten,
  darken,
  desaturate,
} from './role';

// Types
export type {
  JzCzhz,
  SemanticTokens,
  SemanticRole,
  SyntaxTokens,
  UITokens,
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
