/**
 * Semantic Design Tokens
 *
 * Layer 2: Composes all token sub-modules into a unified SemanticTokens object.
 *
 * This is a thin composition layer - all token definitions live in their
 * respective modules (syntax.ts, ui.ts, terminal.ts, decorative.ts, interactive.ts).
 */

import { primitives, type Primitives } from './primitives';
import { createSyntaxTokens } from './syntax';
import { createUITokens, createStatusTokens, createGitTokens } from './ui';
import { createTerminalTokens } from './terminal';
import {
  createSymbolTokens,
  createBracketTokens,
  createSupportTokens,
  createMarkdownTokens,
  createDebugTokens,
  createDecorativeTokens,
} from './decorative';
import { createInteractiveTokens } from './interactive';
import type { SemanticTokens } from './types';

/**
 * Create semantic tokens from primitives.
 *
 * Different variants can provide different primitives to get different themes.
 */
export function createSemanticTokens(
  p: Primitives = primitives
): SemanticTokens {
  const ui = createUITokens(p);
  const decorative = createDecorativeTokens(p);
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
    decorative,
  };
}

/**
 * Default semantic tokens using standard Miku primitives
 */
export const semanticTokens = createSemanticTokens(primitives);
