/**
 * Shared port helpers — host-capability adaptations.
 *
 * VS Code renders some colors as translucent washes; hosts without
 * alpha support (terminal selection, classic editor highlight groups)
 * need the flat color those washes actually produce on screen.
 */

import type { SemanticTokens } from '../tokens/types';
import { opacity } from '../tokens/primitives';

/** Composite fg over bg at the given alpha in sRGB. */
function composite(fg: string, bg: string, alpha: number): string {
  const ch = (h: string, i: number) => parseInt(h.slice(1 + 2 * i, 3 + 2 * i), 16);
  const mix = (i: number) =>
    Math.round(ch(fg, i) * alpha + ch(bg, i) * (1 - alpha))
      .toString(16).padStart(2, '0').toUpperCase();
  return '#' + mix(0) + mix(1) + mix(2);
}

/**
 * Flatten an 8-digit hex (#RRGGBBAA) against an opaque base (#RRGGBB),
 * producing an opaque #RRGGBB — for hosts whose color slots reject
 * alpha (e.g. nvim_set_hl). 6-digit input passes through unchanged.
 */
export function flattenEmbeddedAlpha(color: string, base: string): string {
  if (color.length !== 9) return color;
  const alpha = parseInt(color.slice(7, 9), 16) / 255;
  return composite(color.slice(0, 7), base, alpha);
}

/**
 * The selection surface as VS Code actually renders it: the frost wash
 * (decorative.cursorLineFrost — the pigment behind editor.selectionBackground)
 * composited over the canvas at the editor's selection alpha. Alpha-less
 * hosts use this solid; alpha-capable hosts (sublime, zed) apply the wash
 * recipe themselves. (ui.selection's solid teal only ever appeared in
 * ports, never on screen — exporting the rendered surface fixes that.)
 */
export function selectionSurface(t: SemanticTokens): string {
  return composite(t.decorative.cursorLineFrost, t.ui.background.hex, parseInt(opacity.strong, 16) / 255);
}
