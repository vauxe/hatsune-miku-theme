/**
 * Light Theme — Snow Miku 2026: Shiawase Patisserie
 *
 * Inspired by the Snow Miku 2026 design (costume: cold_air, visual: booota):
 * warm cream canvas (the dress) with cool blue chrome (the shopfront),
 * tonic cyan accents (her hair), coral-pink identity (her necktie),
 * chocolate ink text, and a patisserie palette of baked warmth and cool glass.
 * Composes all light token creators into a unified SemanticTokens object.
 */

import { createLightPrimitives } from './primitives';
import { createSyntaxTokens } from './syntax';
import { createUITokens, createStatusTokens, createGitTokens } from './ui';
import { createTerminalTokens } from './terminal';
import { createInteractiveTokens } from './interactive';
import {
  createSymbolTokens,
  createBracketTokens,
  createSupportTokens,
  createMarkdownTokens,
  createDebugTokens,
  createDecorativeTokens,
} from './decorative';
import type { SemanticTokens } from '../types';

export function createLightSemanticTokens(): SemanticTokens {
  const p = createLightPrimitives();
  const ui = createUITokens(p);
  return {
    syntax: createSyntaxTokens(p),
    ui,
    status: createStatusTokens(p),
    git: createGitTokens(p),
    interactive: createInteractiveTokens(p, ui),
    terminal: createTerminalTokens(p),
    symbol: createSymbolTokens(p),
    bracket: createBracketTokens(p),
    support: createSupportTokens(p),
    markdown: createMarkdownTokens(p),
    debug: createDebugTokens(p),
    decorative: createDecorativeTokens(p),
  };
}

export { createLightPrimitives } from './primitives';
