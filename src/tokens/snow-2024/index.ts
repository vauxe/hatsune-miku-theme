/**
 * Snow Miku 2024 — Winter Delicacy (冬のごちそう)
 *
 * Inspired by the Snow Miku 2024 design (costume: shiro, visual: 裕/Yuu):
 * peach-cream canvas (the waitress apron) with kinako-latte chrome (the
 * haori — the same warmth, more pigment), sage-celadon accents (her
 * hair, the only cool thing in the room), shrimp-tail salmon identity,
 * chocolate ink text, and a gochisou palette of soup-curry warmth.
 * Composes all Snow Miku 2024 token creators into a unified
 * SemanticTokens object.
 */

import { createSnow2024Primitives } from './primitives';
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

export function createSnow2024SemanticTokens(): SemanticTokens {
  const p = createSnow2024Primitives();
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

export { createSnow2024Primitives } from './primitives';
