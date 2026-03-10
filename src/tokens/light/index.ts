/**
 * Light Theme — Snow Miku 2024 (Winter Delicacy)
 *
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
