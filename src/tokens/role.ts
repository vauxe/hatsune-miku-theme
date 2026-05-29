/**
 * Semantic Role Factories and Derive Functions
 *
 * Creates SemanticRole objects from JzCzhz values or hex colors.
 * Provides color manipulation functions (lighten, darken, desaturate, opacity).
 */

import Color from 'colorjs.io';
import type { JzCzhz, SemanticRole } from './types';

const JZ_MAX = 0.22;

// =============================================================================
// COLOR CONVERSION
// =============================================================================

export function hex(jch: JzCzhz): string {
  const color = new Color('jzczhz', [jch.Jz, jch.Cz, jch.hz]);
  const srgb = color.to('srgb') as Color & { toGamut(opts: { method: string }): Color };
  const out = srgb.toGamut({ method: 'clip' }).toString({ format: 'hex' }).toUpperCase();
  // colorjs.io shortens to #RGB / #RGBA when channels are duplicable (e.g. pure
  // black/white). Downstream alpha helpers (withOpacity/solid/alpha/flatten) assume
  // 6-digit #RRGGBB, so always expand to long form here.
  return expandHex(out);
}

/**
 * Expand a short hex (#RGB or #RGBA) to long form (#RRGGBB or #RRGGBBAA).
 * Long-form input is returned unchanged.
 */
function expandHex(hexColor: string): string {
  if (hexColor.length === 4 || hexColor.length === 5) {
    return '#' + [...hexColor.slice(1)].map((c) => c + c).join('');
  }
  return hexColor;
}

export function parseHex(hexColor: string): JzCzhz {
  const color = new Color(hexColor);
  const [Jz, Cz, hz] = color.to('jzczhz').coords;
  return { Jz: Jz ?? 0, Cz: Cz ?? 0, hz: hz ?? 0 };
}

// =============================================================================
// ROLE FACTORIES
// =============================================================================

/**
 * Create a semantic role from JzCzhz values
 */
export function role(description: string, Jz: number, Cz: number, hz: number): SemanticRole {
  const jzczhz: JzCzhz = { Jz, Cz, hz };
  return {
    description,
    jzczhz,
    hex: hex(jzczhz),
  };
}

/**
 * Create a semantic role from an existing hex color.
 * Parses hex → JzCzhz via colorjs.io so lighten/darken/desaturate work.
 */
export function roleFromHex(description: string, hexColor: string): SemanticRole {
  return {
    description,
    jzczhz: parseHex(hexColor),
    hex: hexColor,
  };
}

// =============================================================================
// DERIVE FUNCTIONS
// =============================================================================

/**
 * Apply opacity to a hex color
 * @param hexColor - Base color (#RRGGBB)
 * @param alpha - Opacity value from opacity scale ('08', '15', etc.)
 * @returns Color with alpha (#RRGGBBAA)
 */
export function withOpacity(hexColor: string, alpha: string): string {
  const base = hexColor.length === 9 ? hexColor.slice(0, 7) : hexColor;
  return `${base}${alpha}`;
}

/**
 * Lighten a JzCzhz-based color by increasing Jz
 * @param semanticRole - Semantic role with JzCzhz values
 * @param delta - Amount to increase Jz (0.01-0.05 typical)
 * @returns New hex color
 */
export function lighten(semanticRole: SemanticRole, delta: number): string {
  const newJz = Math.min(JZ_MAX, semanticRole.jzczhz.Jz + delta);
  return hex({ ...semanticRole.jzczhz, Jz: newJz });
}

/**
 * Darken a JzCzhz-based color by decreasing Jz
 * @param semanticRole - Semantic role with JzCzhz values
 * @param delta - Amount to decrease Jz (0.01-0.05 typical)
 * @returns New hex color
 */
export function darken(semanticRole: SemanticRole, delta: number): string {
  const newJz = Math.max(0, semanticRole.jzczhz.Jz - delta);
  return hex({ ...semanticRole.jzczhz, Jz: newJz });
}

/**
 * Desaturate a color for disabled states
 * @param semanticRole - Semantic role with JzCzhz values
 * @param factor - Multiplier for chroma (0.5 = half saturation)
 * @returns New hex color
 */
export function desaturate(semanticRole: SemanticRole, factor: number): string {
  const newCz = semanticRole.jzczhz.Cz * factor;
  return hex({ ...semanticRole.jzczhz, Cz: newCz });
}
