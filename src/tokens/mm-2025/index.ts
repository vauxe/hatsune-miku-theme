/**
 * Magical Mirai 2025 — 星河一天 (Starry River in the Sky)
 *
 * Inspired by the Magical Mirai 2025 main visual (art & costume design:
 * Tiv; theme song: Lustrous by *Luna): the deepest night-sky editor on
 * a water-mirror floor, denim edges, a polychrome starfield of syntax,
 * star-mist seams and comments, a pink shooting-star cursor — the one
 * warm spark — and the site's own cyan for everything that acts.
 * Composes all MM2025 token creators into a unified SemanticTokens
 * object.
 */

import { createMm2025Primitives } from './primitives';
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

export function createMm2025SemanticTokens(): SemanticTokens {
  const p = createMm2025Primitives();
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

export { createMm2025Primitives } from './primitives';
