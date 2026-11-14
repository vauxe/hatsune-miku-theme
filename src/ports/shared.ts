/**
 * Shared port helpers — host-capability adaptations.
 *
 * VS Code renders some colors as translucent washes; hosts without
 * alpha support (terminal selection, classic editor highlight groups)
 * need the flat color those washes actually produce on screen.
 */

import type { SemanticTokens } from '../tokens/types';
import { opacity, selectionAlpha, type Polarity } from '../tokens/primitives';

/** Composite fg over bg at the given alpha in sRGB.
 * Same gamma-space math as tools/readability-color blendAlpha() — kept
 * dependency-free here so the ports layer never imports from tools. */
function composite(fg: string, bg: string, alpha: number): string {
  if (!/^#[0-9A-Fa-f]{6}$/.test(fg) || !/^#[0-9A-Fa-f]{6}$/.test(bg)) {
    throw new Error(`composite() needs 6-digit hex, got ${fg} / ${bg}`);
  }
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
 * composited over the canvas at the selection alpha. Alpha-less hosts
 * use this solid; alpha-capable hosts (sublime, zed) apply the wash
 * recipe themselves.
 */
export function selectionSurface(t: SemanticTokens): string {
  return composite(t.decorative.cursorLineFrost, t.ui.background.hex, parseInt(selectionAlpha.active, 16) / 255);
}

/** Infer theme polarity from the Stage (editor) background lightness. */
export function inferPolarity(t: SemanticTokens): Polarity {
  return t.ui.background.jzczhz.Jz < 0.1 ? 'dark' : 'light';
}

/** Structural Edge surface for status bars / footers (falls back to House on flagship dark). */
export function statusBarSurface(t: SemanticTokens, polarity: Polarity = inferPolarity(t)): string {
  return polarity === 'light'
    ? t.decorative.topMain
    : (t.decorative.chromeOverride?.statusBar ?? t.ui.backgroundHouse.hex);
}

/** Structural Edge surface for section headers / winbars (falls back to House on flagship dark). */
export function sectionHeaderSurface(t: SemanticTokens, polarity: Polarity = inferPolarity(t)): string {
  return polarity === 'light'
    ? t.decorative.topMain
    : (t.decorative.chromeOverride?.sectionHeader ?? t.ui.backgroundHouse.hex);
}

/** Flattened find-match highlight veil composited over Stage for alpha-less hosts. */
export function findHighlightSurface(t: SemanticTokens): string {
  return composite(t.decorative.findHighlightPigment, t.ui.background.hex, parseInt(opacity.strong, 16) / 255);
}

/** Attention voice foreground/background pair for the active/focused search match. */
export function focusedMatchColors(
  t: SemanticTokens,
  polarity: Polarity = inferPolarity(t),
): { fg: string; bg: string } {
  return polarity === 'light'
    ? { fg: t.decorative.blouseWhite, bg: t.ui.badgeBackground.hex }
    : { fg: t.decorative.darkForeground, bg: t.ui.cursor.hex };
}
