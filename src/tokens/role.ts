/**
 * Semantic Role Factories and Derive Functions
 *
 * Creates SemanticRole objects from JzCzhz values or hex colors.
 * Provides color manipulation functions (lighten, darken, desaturate, opacity).
 */

import { hex, parseHex, type JzCzhz } from './jzczhz';
import type { SemanticRole } from './types';

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
  const newJz = Math.min(0.22, semanticRole.jzczhz.Jz + delta);
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
