/**
 * Palette Export
 *
 * Serializes SemanticTokens to a flat JSON palette.
 * Bridge for external consumers (separate repos, tools).
 */

import type { SemanticTokens, SemanticRole } from '../tokens/types';

function hexMap(obj: Record<string, SemanticRole>): Record<string, string> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v.hex]));
}

export function createPalette(t: SemanticTokens) {
  return {
    syntax: hexMap(t.syntax as unknown as Record<string, SemanticRole>),
    terminal: hexMap(t.terminal as unknown as Record<string, SemanticRole>),
    ui: {
      foreground: t.ui.foreground.hex,
      background: t.ui.background.hex,
      cursor: t.ui.cursor.hex,
      selection: t.ui.selection.hex,
      accentPrimary: t.ui.accentPrimary.hex,
    },
    status: hexMap(t.status as unknown as Record<string, SemanticRole>),
  };
}
