/**
 * Color manipulation utilities for the readability analysis tool.
 * Includes RGB/hex conversions, alpha blending, APCA contrast, and Delta E 2000.
 */

import {
  APCA,
  APCA_THRESHOLDS,
  DISTINCTION_THRESHOLDS,
  CHROMA_THRESHOLDS,
  type ChromaTier,
} from './readability-constants';
import type {
  RGB,
  Lab,
  Polarity,
  APCAResult,
  APCAAnalysis,
  DistinctionLevel,
} from './readability-types';

// =============================================================================
// RGB UTILITIES
// =============================================================================

export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}

export function hexToRgb(hex: string): RGB | null {
  let h = hex.replace('#', '');

  if (h.length === 3) {
    h = h.split('').map(c => c + c).join('');
  } else if (h.length === 8) {
    h = h.slice(0, 6);
  }

  if (h.length !== 6) return null;

  const match = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  if (!match) return null;

  return {
    r: parseInt(match[1], 16) / 255,
    g: parseInt(match[2], 16) / 255,
    b: parseInt(match[3], 16) / 255,
  };
}

export function rgbToHex(rgb: RGB): string {
  const toHex = (n: number) => {
    const clamped = Math.max(0, Math.min(1, n));
    return Math.round(clamped * 255).toString(16).padStart(2, '0');
  };
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`;
}

// =============================================================================
// LCH UTILITIES (Perceptual Chroma Analysis)
// =============================================================================

export interface LCH {
  L: number; // Lightness: 0-100
  C: number; // Chroma: 0-~130 (perceptually uniform colorfulness)
  H: number; // Hue: 0-360
}

/**
 * Convert Lab to LCH color space
 * LCH Chroma (C*) is perceptually uniform unlike HSL saturation
 */
export function labToLch(lab: Lab): LCH {
  const C = Math.sqrt(lab.a * lab.a + lab.b * lab.b);
  const H = lab.a === 0 && lab.b === 0 ? 0 : (Math.atan2(lab.b, lab.a) * 180 / Math.PI + 360) % 360;
  return { L: lab.L, C, H };
}

/**
 * Get LCH Chroma from a hex color
 * Chroma (C*) is perceptually uniform - a yellow at C*=50 appears
 * equally colorful as a blue at C*=50, unlike HSL saturation.
 * @returns Chroma 0-~130, or null if invalid hex
 */
export function getChroma(hex: string): number | null {
  const rgb = hexToRgb(stripAlpha(hex));
  if (!rgb) return null;
  const lab = rgbToLab(rgb);
  return Math.sqrt(lab.a * lab.a + lab.b * lab.b);
}

/**
 * Get full LCH from hex color
 */
export function hexToLch(hex: string): LCH | null {
  const rgb = hexToRgb(stripAlpha(hex));
  if (!rgb) return null;
  return labToLch(rgbToLab(rgb));
}

/**
 * Analyze chroma level for comfortable extended reading.
 *
 * Tiered thresholds (colorful, matching popular themes):
 * - Primary (C* 30-55): Core syntax
 * - Secondary (C* 20-55): Comments, UI
 * - Accent (C* 30-70): Errors, highlights
 *
 * @param chroma - LCH chroma value (C*)
 * @param tier - 'primary', 'secondary', or 'accent' (default: 'primary')
 * @returns Icon, level, pass status, and fail reason if applicable
 */
export function analyzeChroma(chroma: number, tier: ChromaTier = 'primary'): {
  icon: string;
  level: string;
  pass: boolean;
  failReason?: 'too-low' | 'too-high';
  tier: ChromaTier;
} {
  // Determine descriptive level (aligned with primary tier threshold)
  // Muted = fails primary (C* < 30), Comfortable = passes primary (C* 30-40)
  let level: string;
  if (chroma < 20) {
    level = 'Gray';
  } else if (chroma < 30) {
    level = 'Muted';
  } else if (chroma <= 40) {
    level = 'Comfortable';
  } else if (chroma <= 55) {
    level = 'Vibrant';
  } else if (chroma <= 70) {
    level = 'Vivid';
  } else if (chroma <= 90) {
    level = 'Intense';
  } else {
    level = 'Extreme';
  }

  // Check against tier-specific thresholds
  const { min, max } = CHROMA_THRESHOLDS[tier];
  const tooLow = chroma < min;
  const tooHigh = chroma > max;
  const pass = !tooLow && !tooHigh;

  // Determine icon
  let icon: string;
  if (tooLow) {
    icon = '⚪';
  } else if (tooHigh) {
    icon = chroma > 90 ? '❌' : '⛔';
  } else {
    icon = '✅';
  }

  return {
    icon,
    level,
    pass,
    failReason: tooLow ? 'too-low' : tooHigh ? 'too-high' : undefined,
    tier,
  };
}

// =============================================================================
// ALPHA UTILITIES
// =============================================================================

export function hexAlphaToDecimal(hexAlpha: string): number {
  return parseInt(hexAlpha, 16) / 255;
}

export function hasAlphaChannel(hex: string): boolean {
  const len = hex.startsWith('#') ? hex.length - 1 : hex.length;
  return len === 8;
}

export function stripAlpha(hex: string): string {
  if (!hasAlphaChannel(hex)) return hex;
  return hex.slice(0, hex.startsWith('#') ? 7 : 6);
}

export function extractAlpha(hex: string): number {
  if (!hasAlphaChannel(hex)) return 1.0;
  return hexAlphaToDecimal(hex.slice(-2));
}

export function blendAlpha(fg: string, bg: string, alpha: number): string {
  const fgRgb = hexToRgb(fg);
  const bgRgb = hexToRgb(bg);
  if (!fgRgb || !bgRgb) throw new Error(`Invalid color: fg="${fg}", bg="${bg}"`);

  const a = Math.max(0, Math.min(1, alpha));
  return rgbToHex({
    r: fgRgb.r * a + bgRgb.r * (1 - a),
    g: fgRgb.g * a + bgRgb.g * (1 - a),
    b: fgRgb.b * a + bgRgb.b * (1 - a),
  });
}

// =============================================================================
// APCA CONTRAST
// =============================================================================

export function getAPCAContrast(text: string, background: string): APCAResult {
  const txtRgb = hexToRgb(text);
  const bgRgb = hexToRgb(background);
  if (!txtRgb) throw new Error(`Invalid text color: "${text}"`);
  if (!bgRgb) throw new Error(`Invalid background color: "${background}"`);

  const toY = (rgb: RGB) =>
    APCA.sRco * Math.pow(rgb.r, APCA.mainTRC) +
    APCA.sGco * Math.pow(rgb.g, APCA.mainTRC) +
    APCA.sBco * Math.pow(rgb.b, APCA.mainTRC);

  const softClamp = (Y: number) =>
    Y < 0 ? 0 : Y < APCA.blkThrs ? Y + Math.pow(APCA.blkThrs - Y, APCA.blkClmp) : Y;

  const txtY = softClamp(toY(txtRgb));
  const bgY = softClamp(toY(bgRgb));

  // Polarity is determined by luminance comparison, not by Lc sign
  // (Lc can be clipped to 0, losing polarity information)
  const polarity: Polarity = bgY > txtY ? 'dark-on-light' : 'light-on-dark';
  let contrast: number;

  if (bgY > txtY) {
    // BoW: Black on White (dark text, light bg) → positive Lc
    const SAPC = (Math.pow(bgY, APCA.normBG) - Math.pow(txtY, APCA.normTXT)) * APCA.scaleBoW;
    contrast = SAPC < APCA.loClip ? 0 : SAPC - APCA.loBoWoffset;
  } else {
    // WoB: White on Black (light text, dark bg) → negative Lc
    const SAPC = (Math.pow(bgY, APCA.revBG) - Math.pow(txtY, APCA.revTXT)) * APCA.scaleWoB;
    contrast = SAPC > -APCA.loClip ? 0 : SAPC + APCA.loWoBoffset;
  }

  return { lc: contrast * 100, polarity };
}

/**
 * Analyze APCA result with tiered pass threshold.
 *
 * @param result - Raw APCA calculation result
 * @param tier - 'primary' (Lc 75-90), 'secondary' (Lc 70-90), or 'tertiary' (Lc ≥45)
 * @returns Analysis with level and pass/fail based on tier threshold
 */
export function analyzeAPCA(
  result: APCAResult,
  tier: 'primary' | 'secondary' | 'tertiary' = 'secondary'
): APCAAnalysis {
  const { lc, polarity } = result;
  const absLc = Math.abs(lc);

  // Determine level (always the same regardless of tier)
  let level: APCAAnalysis['level'];
  let icon: string;
  if (absLc >= 90) {
    level = 'Fluent';
    icon = '✅';
  } else if (absLc >= 75) {
    level = 'Body';
    icon = '✅';
  } else if (absLc >= 60) {
    level = 'Content';
    icon = '✅';
  } else if (absLc >= 45) {
    level = 'Large';
    icon = '⚠️';
  } else if (absLc >= 30) {
    level = 'Non-Text';
    icon = '⚠️';
  } else {
    level = 'FAIL';
    icon = '❌';
  }

  // Determine pass based on tier threshold (min and max)
  const minThreshold = APCA_THRESHOLDS[tier];
  const maxThreshold = APCA_THRESHOLDS.max;
  const tooLow = absLc < minThreshold;
  const tooHigh = tier !== 'tertiary' && absLc > maxThreshold; // tertiary elements can be any contrast
  const pass = !tooLow && !tooHigh;

  // Determine fail reason
  const failReason = tooHigh ? 'halation' : tooLow ? 'too-low' : undefined;

  // Adjust icon based on pass status
  if (tooHigh) {
    icon = '⚡'; // Too bright - halation risk
  } else if (tooLow && icon === '✅') {
    icon = '⚠️'; // Below tier threshold
  }

  return { lc, level, icon, pass, polarity, failReason };
}

// =============================================================================
// DELTA E 2000 (Perceptual Color Difference)
// =============================================================================

/**
 * Convert sRGB to CIE Lab color space
 * Required for Delta E 2000 calculation
 */
export function rgbToLab(rgb: RGB): Lab {
  // sRGB to linear RGB
  const linearize = (c: number) =>
    c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;

  const r = linearize(rgb.r);
  const g = linearize(rgb.g);
  const b = linearize(rgb.b);

  // Linear RGB to XYZ (D65 illuminant)
  const x = r * 0.4124564 + g * 0.3575761 + b * 0.1804375;
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750;
  const z = r * 0.0193339 + g * 0.1191920 + b * 0.9503041;

  // XYZ to Lab (D65 reference white)
  const refX = 0.95047;
  const refY = 1.0;
  const refZ = 1.08883;

  const f = (t: number) =>
    t > 0.008856 ? Math.pow(t, 1 / 3) : (903.3 * t + 16) / 116;

  const fx = f(x / refX);
  const fy = f(y / refY);
  const fz = f(z / refZ);

  return {
    L: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
}

export function hexToLab(hex: string): Lab | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  return rgbToLab(rgb);
}

/**
 * Calculate Delta E 2000 between two Lab colors
 * CIE DE2000 is the most perceptually uniform color difference formula
 *
 * Reference: "The CIEDE2000 Color-Difference Formula" (Sharma et al., 2005)
 */
export function deltaE00(lab1: Lab, lab2: Lab): number {
  const { L: L1, a: a1, b: b1 } = lab1;
  const { L: L2, a: a2, b: b2 } = lab2;

  // Parametric weighting factors (all 1.0 for standard conditions)
  const kL = 1.0;
  const kC = 1.0;
  const kH = 1.0;

  const deg2rad = Math.PI / 180;
  const rad2deg = 180 / Math.PI;

  // Step 1: Calculate C'i and h'i
  const C1 = Math.sqrt(a1 * a1 + b1 * b1);
  const C2 = Math.sqrt(a2 * a2 + b2 * b2);
  const Cab = (C1 + C2) / 2;
  const Cab7 = Math.pow(Cab, 7);
  const G = 0.5 * (1 - Math.sqrt(Cab7 / (Cab7 + Math.pow(25, 7))));

  const a1p = a1 * (1 + G);
  const a2p = a2 * (1 + G);

  const C1p = Math.sqrt(a1p * a1p + b1 * b1);
  const C2p = Math.sqrt(a2p * a2p + b2 * b2);

  const h1p = a1p === 0 && b1 === 0 ? 0 : (Math.atan2(b1, a1p) * rad2deg + 360) % 360;
  const h2p = a2p === 0 && b2 === 0 ? 0 : (Math.atan2(b2, a2p) * rad2deg + 360) % 360;

  // Step 2: Calculate ΔL', ΔC', ΔH'
  const dLp = L2 - L1;
  const dCp = C2p - C1p;

  let dhp: number;
  if (C1p * C2p === 0) {
    dhp = 0;
  } else if (Math.abs(h2p - h1p) <= 180) {
    dhp = h2p - h1p;
  } else if (h2p - h1p > 180) {
    dhp = h2p - h1p - 360;
  } else {
    dhp = h2p - h1p + 360;
  }

  const dHp = 2 * Math.sqrt(C1p * C2p) * Math.sin((dhp / 2) * deg2rad);

  // Step 3: Calculate CIEDE2000
  const Lp = (L1 + L2) / 2;
  const Cp = (C1p + C2p) / 2;

  let hp: number;
  if (C1p * C2p === 0) {
    hp = h1p + h2p;
  } else if (Math.abs(h1p - h2p) <= 180) {
    hp = (h1p + h2p) / 2;
  } else if (h1p + h2p < 360) {
    hp = (h1p + h2p + 360) / 2;
  } else {
    hp = (h1p + h2p - 360) / 2;
  }

  const T =
    1 -
    0.17 * Math.cos((hp - 30) * deg2rad) +
    0.24 * Math.cos(2 * hp * deg2rad) +
    0.32 * Math.cos((3 * hp + 6) * deg2rad) -
    0.20 * Math.cos((4 * hp - 63) * deg2rad);

  const dTheta = 30 * Math.exp(-Math.pow((hp - 275) / 25, 2));
  const Cp7 = Math.pow(Cp, 7);
  const RC = 2 * Math.sqrt(Cp7 / (Cp7 + Math.pow(25, 7)));
  const SL = 1 + (0.015 * Math.pow(Lp - 50, 2)) / Math.sqrt(20 + Math.pow(Lp - 50, 2));
  const SC = 1 + 0.045 * Cp;
  const SH = 1 + 0.015 * Cp * T;
  const RT = -Math.sin(2 * dTheta * deg2rad) * RC;

  const dE = Math.sqrt(
    Math.pow(dLp / (kL * SL), 2) +
    Math.pow(dCp / (kC * SC), 2) +
    Math.pow(dHp / (kH * SH), 2) +
    RT * (dCp / (kC * SC)) * (dHp / (kH * SH))
  );

  return dE;
}

/**
 * Calculate Delta E 2000 between two hex colors.
 * Handles transparent colors by compositing against background first.
 * @param hex1 - First color (may include alpha)
 * @param hex2 - Second color (may include alpha)
 * @param bg - Background color for alpha compositing (required for accurate results with transparent colors)
 */
export function deltaE00Hex(hex1: string, hex2: string, bg?: string): number | null {
  // Resolve colors: composite against background if alpha present
  const resolve = (hex: string): string => {
    if (!hasAlphaChannel(hex)) return hex;
    const alpha = extractAlpha(hex);
    const base = stripAlpha(hex);
    if (alpha >= 0.99) return base;
    if (!bg) {
      // No background provided - warn in development, use base color
      console.warn(`deltaE00Hex: transparent color ${hex} without background - results may be inaccurate`);
      return base;
    }
    return blendAlpha(base, bg, alpha);
  };

  const lab1 = hexToLab(resolve(hex1));
  const lab2 = hexToLab(resolve(hex2));
  if (!lab1 || !lab2) return null;
  return deltaE00(lab1, lab2);
}

/**
 * Get distinction level based on Delta E value.
 *
 * @param dE - Delta E 2000 value
 * @param isCritical - If true, use higher threshold (18 vs 15) for safety-critical pairs
 * @returns Level, icon, and pass status
 */
export function getDistinctionLevel(dE: number, isCritical = false): { level: DistinctionLevel; icon: string; pass: boolean } {
  let level: DistinctionLevel;
  if (dE < 1) {
    level = 'Imperceptible';
  } else if (dE < 5) {
    level = 'Subtle';
  } else if (dE < 10) {
    level = 'Noticeable';
  } else if (dE < 20) {
    level = 'Clear';
  } else if (dE < 40) {
    level = 'Distinct';
  } else {
    level = 'Obvious';
  }

  const threshold = isCritical ? DISTINCTION_THRESHOLDS.critical : DISTINCTION_THRESHOLDS.standard;
  const pass = dE >= threshold;

  const icon = pass ? '✅' : '❌';

  return { level, icon, pass };
}
