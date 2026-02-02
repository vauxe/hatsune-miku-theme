/**
 * Color manipulation utilities for the readability analysis tool.
 * Includes RGB/hex conversions, alpha blending, APCA contrast, and Jzazbz ΔEz.
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
// Jzazbz / JzCzhz COLOR SPACE (State-of-the-Art Perceptual Uniformity)
// =============================================================================
// Jzazbz (Safdar, Hardeberg, Luo 2017) is more perceptually uniform than:
// - OKLCH (simpler but less accurate)
// - CIE Lab/LCH (blue-purple shift, non-uniform)
// - CIEDE2000 (complex corrections for Lab's non-uniformity)
//
// Benefits:
// - Designed for HDR and wide color gamut (future-proof)
// - Excellent perceptual uniformity across entire gamut
// - Simple Euclidean distance works well (unlike Lab)
// - Used by modern color science tools
//
// Reference: https://observablehq.com/@jrus/jzazbz

export interface Jzazbz {
  Jz: number; // Lightness: 0-~1 for SDR (can exceed 1 for HDR)
  az: number; // Green-red axis
  bz: number; // Blue-yellow axis
}

export interface JzCzhz {
  Jz: number; // Lightness: 0-~1 for SDR
  Cz: number; // Chroma: 0-~0.5 for sRGB gamut
  hz: number; // Hue: 0-360 degrees
}

// Jzazbz constants
const JZ_B = 1.15;
const JZ_G = 0.66;
const JZ_C1 = 3424 / 4096;           // 0.8359375
const JZ_C2 = 2413 / 128;            // 18.8515625
const JZ_C3 = 2392 / 128;            // 18.6875
const JZ_N = 2610 / 16384;           // 0.15930175781
const JZ_P = 1.7 * 2523 / 32;        // 134.034375
const JZ_D = -0.56;
const JZ_D0 = 1.6295499532821566e-11;

// SDR reference luminance (cd/m²) for PQ encoding
// 203 is the standard SDR reference white in PQ
const SDR_WHITE_LUMINANCE = 203;

/**
 * PQ (Perceptual Quantizer) OETF - forward transfer function
 * Maps absolute luminance to perceptual signal
 */
function pqOETF(x: number): number {
  if (x <= 0) return 0;
  const xNorm = x / 10000; // PQ reference is 10000 cd/m²
  const num = JZ_C1 + JZ_C2 * Math.pow(xNorm, JZ_N);
  const den = 1 + JZ_C3 * Math.pow(xNorm, JZ_N);
  return Math.pow(num / den, JZ_P);
}

/**
 * PQ (Perceptual Quantizer) EOTF - inverse transfer function
 * Maps perceptual signal back to absolute luminance
 */
function pqEOTF(x: number): number {
  if (x <= 0) return 0;
  const xP = Math.pow(x, 1 / JZ_P);
  const num = Math.max(0, xP - JZ_C1);
  const den = JZ_C2 - JZ_C3 * xP;
  return 10000 * Math.pow(num / den, 1 / JZ_N);
}

/**
 * Convert linear RGB to Jzazbz
 * @param r Linear RGB red (0-1)
 * @param g Linear RGB green (0-1)
 * @param b Linear RGB blue (0-1)
 */
function linearRgbToJzazbz(r: number, g: number, b: number): Jzazbz {
  // Linear RGB to XYZ D65
  const x = 0.4124564 * r + 0.3575761 * g + 0.1804375 * b;
  const y = 0.2126729 * r + 0.7151522 * g + 0.0721750 * b;
  const z = 0.0193339 * r + 0.1191920 * g + 0.9503041 * b;

  // Scale to absolute luminance (cd/m²)
  const X = x * SDR_WHITE_LUMINANCE;
  const Y = y * SDR_WHITE_LUMINANCE;
  const Z = z * SDR_WHITE_LUMINANCE;

  // XYZ to X'Y'Z' (Jzazbz-specific adjustment)
  const Xp = JZ_B * X - (JZ_B - 1) * Z;
  const Yp = JZ_G * Y - (JZ_G - 1) * X;

  // X'Y'Z' to LMS
  const L = 0.41478972 * Xp + 0.579999 * Yp + 0.0146480 * Z;
  const M = -0.2015100 * Xp + 1.120649 * Yp + 0.0531008 * Z;
  const S = -0.0166008 * Xp + 0.264800 * Yp + 0.6684799 * Z;

  // Apply PQ transfer function
  const Lp = pqOETF(L);
  const Mp = pqOETF(M);
  const Sp = pqOETF(S);

  // LMS' to Izazbz
  const Iz = 0.5 * Lp + 0.5 * Mp;
  const az = 3.524000 * Lp - 4.066708 * Mp + 0.542708 * Sp;
  const bz = 0.199076 * Lp + 1.096799 * Mp - 1.295875 * Sp;

  // Iz to Jz (perceptual lightness adjustment)
  const Jz = ((1 + JZ_D) * Iz) / (1 + JZ_D * Iz) - JZ_D0;

  return { Jz: Math.max(0, Jz), az, bz };
}

/**
 * Convert Jzazbz to linear RGB
 * Inverse of linearRgbToJzazbz
 */
function jzazbzToLinearRgb(jab: Jzazbz): { r: number; g: number; b: number } {
  const { Jz, az, bz } = jab;

  // Jz to Iz (invert perceptual adjustment)
  const Iz = (Jz + JZ_D0) / (1 + JZ_D - JZ_D * (Jz + JZ_D0));

  // Izazbz to LMS' (invert matrix)
  const Lp = Iz + 0.1386050432715393 * az + 0.05804731615611886 * bz;
  const Mp = Iz - 0.1386050432715393 * az - 0.05804731615611886 * bz;
  const Sp = Iz - 0.09601924202631895 * az - 0.8118918960560388 * bz;

  // LMS' to LMS (invert PQ)
  const L = pqEOTF(Lp);
  const M = pqEOTF(Mp);
  const S = pqEOTF(Sp);

  // LMS to X'Y'Z' (invert matrix)
  const Xp = 1.9242264357876067 * L - 1.0047923125953657 * M + 0.037651404030618 * S;
  const Yp = 0.35031676209499907 * L + 0.7264811939316552 * M - 0.06538442294808501 * S;
  const Z = -0.09098281098284752 * L - 0.3127282905230739 * M + 1.5227665613052603 * S;

  // X'Y'Z' to XYZ (invert Jzazbz adjustment)
  const X = (Xp + (JZ_B - 1) * Z) / JZ_B;
  const Y = (Yp + (JZ_G - 1) * X) / JZ_G;

  // Scale from absolute luminance back to relative
  const x = X / SDR_WHITE_LUMINANCE;
  const y = Y / SDR_WHITE_LUMINANCE;
  const z = Z / SDR_WHITE_LUMINANCE;

  // XYZ to linear RGB (invert matrix)
  const r = 3.2404541621141054 * x - 1.5371385940306089 * y - 0.49853140955601579 * z;
  const g = -0.96926603050518312 * x + 1.8760108454466942 * y + 0.041556017530349834 * z;
  const b = 0.055643430959114726 * x - 0.20397695888897652 * y + 1.0572251882231791 * z;

  return { r, g, b };
}

/**
 * Convert JzCzhz (polar) to Jzazbz (rectangular)
 */
export function jzczhzToJzazbz(jch: JzCzhz): Jzazbz {
  const hRad = jch.hz * Math.PI / 180;
  return {
    Jz: jch.Jz,
    az: jch.Cz * Math.cos(hRad),
    bz: jch.Cz * Math.sin(hRad),
  };
}

/**
 * Convert Jzazbz to sRGB hex
 * Returns null if color is out of sRGB gamut
 */
export function jzazbzToHex(jab: Jzazbz): string {
  const linear = jzazbzToLinearRgb(jab);

  // Linear RGB to sRGB (gamma encode)
  const gamma = (c: number) =>
    c > 0.0031308 ? 1.055 * Math.pow(c, 1 / 2.4) - 0.055 : 12.92 * c;

  // Clamp to sRGB gamut
  const clamp = (c: number) => Math.max(0, Math.min(1, c));

  return rgbToHex({
    r: clamp(gamma(linear.r)),
    g: clamp(gamma(linear.g)),
    b: clamp(gamma(linear.b)),
  });
}

/**
 * Convert JzCzhz to sRGB hex
 * This is the main function for designing colors in perceptual space
 *
 * @example
 * // Design a color with specific perceptual properties:
 * jzczhzToHex({ Jz: 0.14, Cz: 0.06, hz: 175 }) // Miku teal at comfortable lightness
 */
export function jzczhzToHex(jch: JzCzhz): string {
  return jzazbzToHex(jzczhzToJzazbz(jch));
}

/**
 * Convert sRGB hex to Jzazbz
 */
export function hexToJzazbz(hex: string): Jzazbz | null {
  const rgb = hexToRgb(stripAlpha(hex));
  if (!rgb) return null;

  // sRGB to linear RGB (gamma decode)
  const linearize = (c: number) =>
    c > 0.04045 ? Math.pow((c + 0.055) / 1.055, 2.4) : c / 12.92;

  return linearRgbToJzazbz(
    linearize(rgb.r),
    linearize(rgb.g),
    linearize(rgb.b)
  );
}

/**
 * Convert Jzazbz to JzCzhz (polar/cylindrical form)
 */
export function jzazbzToJzczhz(jab: Jzazbz): JzCzhz {
  const Cz = Math.sqrt(jab.az * jab.az + jab.bz * jab.bz);
  const hz = jab.az === 0 && jab.bz === 0
    ? 0
    : (Math.atan2(jab.bz, jab.az) * 180 / Math.PI + 360) % 360;
  return { Jz: jab.Jz, Cz, hz };
}

/**
 * Get JzCzhz from hex color
 */
export function hexToJzczhz(hex: string): JzCzhz | null {
  const jab = hexToJzazbz(stripAlpha(hex));
  if (!jab) return null;
  return jzazbzToJzczhz(jab);
}

/**
 * Calculate Jzazbz Delta E (Euclidean distance)
 * Unlike CIEDE2000, simple Euclidean works well in Jzazbz due to its uniformity
 * @returns ΔEz value (scale similar to CIEDE2000 for familiarity)
 */
export function deltaEz(jab1: Jzazbz, jab2: Jzazbz): number {
  const dJz = jab1.Jz - jab2.Jz;
  const daz = jab1.az - jab2.az;
  const dbz = jab1.bz - jab2.bz;

  // Scale factor to make values comparable to CIEDE2000
  // Jz is ~0-0.17 for sRGB, we scale to ~0-100 range
  const scale = 500;

  return Math.sqrt(
    Math.pow(dJz * scale, 2) +
    Math.pow(daz * scale, 2) +
    Math.pow(dbz * scale, 2)
  );
}

/**
 * Calculate Jzazbz Delta E between two hex colors
 */
export function deltaEzHex(hex1: string, hex2: string, bg?: string): number | null {
  // Resolve colors: composite against background if alpha present
  const resolve = (hex: string): string => {
    if (!hasAlphaChannel(hex)) return hex;
    const alpha = extractAlpha(hex);
    const base = stripAlpha(hex);
    if (alpha >= 0.99) return base;
    if (!bg) {
      console.warn(`deltaEzHex: transparent color ${hex} without background`);
      return base;
    }
    return blendAlpha(base, bg, alpha);
  };

  const jab1 = hexToJzazbz(resolve(hex1));
  const jab2 = hexToJzazbz(resolve(hex2));
  if (!jab1 || !jab2) return null;

  return deltaEz(jab1, jab2);
}

/**
 * Get JzCzhz Chroma from a hex color
 * Jzazbz chroma is more perceptually uniform than OKLCH or CIE LCH
 * Scale: 0-~0.19 for sRGB gamut (blue #0000FF has highest at ~0.19)
 * @returns Raw Cz value, or null if invalid hex
 */
export function getChroma(hex: string): number | null {
  const jch = hexToJzczhz(hex);
  if (!jch) return null;
  return jch.Cz;
}

/**
 * Get JzCzhz chroma as a percentage-like value (0-100 scale)
 * Multiply raw Jzazbz chroma by 525 (since max sRGB chroma ~0.19 → 100)
 */
export function getChromaPercent(hex: string): number | null {
  const c = getChroma(hex);
  if (c === null) return null;
  return c * 525; // Scale to ~0-100 range
}

/**
 * Get JzCzhz lightness from a hex color
 * @returns Jz value (0-~0.22 for SDR sRGB white), or null if invalid
 */
export function getLightness(hex: string): number | null {
  const jch = hexToJzczhz(hex);
  if (!jch) return null;
  return jch.Jz;
}

/**
 * Get JzCzhz lightness as percentage (0-100 scale)
 * Multiply raw Jz by 450 (since sRGB white ~0.22 → 100)
 */
export function getLightnessPercent(hex: string): number | null {
  const jz = getLightness(hex);
  if (jz === null) return null;
  return jz * 450; // Scale to ~0-100 range
}

/**
 * Analyze JzCzhz chroma level for comfortable extended reading.
 *
 * JzCzhz chroma thresholds (scaled to 0-100 for intuitive comparison):
 * - Primary (8-35): Core syntax - comfortable to vibrant
 * - Secondary (5-35): Comments, UI - can be muted
 * - Accent (8-45): Errors, highlights - attention-grabbing
 *
 * Note: Raw Jzazbz chroma is 0-~0.19 for sRGB. We scale by 525 for percentage-like values.
 * Jzazbz is more perceptually uniform than OKLCH or CIE LCH.
 *
 * @param chroma - JzCzhz chroma value (raw 0-~0.19 scale)
 * @param tier - 'primary', 'secondary', or 'accent' (default: 'primary')
 * @returns Icon, level, pass status, and fail reason if applicable
 */
export function analyzeChroma(chroma: number, tier: ChromaTier = 'primary'): {
  icon: string;
  level: string;
  pass: boolean;
  failReason?: 'too-low' | 'too-high';
  tier: ChromaTier;
  chromaPercent: number;
} {
  // Convert raw JzCzhz chroma to percentage-like scale (0-100)
  // Raw Jzazbz: 0-~0.19 for sRGB → multiply by 525 → 0-100
  const chromaPercent = chroma * 525;

  // Determine descriptive level based on Jzazbz percentage scale
  // Aligned with primary tier thresholds (8-35)
  let level: string;
  if (chromaPercent < 5) {
    level = 'Gray';
  } else if (chromaPercent < 8) {
    level = 'Muted';
  } else if (chromaPercent <= 20) {
    level = 'Comfortable';
  } else if (chromaPercent <= 35) {
    level = 'Vibrant';
  } else if (chromaPercent <= 45) {
    level = 'Vivid';
  } else if (chromaPercent <= 60) {
    level = 'Intense';
  } else {
    level = 'Extreme';
  }

  // Check against tier-specific thresholds
  const { min, max } = CHROMA_THRESHOLDS[tier];
  const tooLow = chromaPercent < min;
  const tooHigh = chromaPercent > max;
  const pass = !tooLow && !tooHigh;

  // Determine icon
  let icon: string;
  if (tooLow) {
    icon = '⚪';
  } else if (tooHigh) {
    icon = chromaPercent > 60 ? '❌' : '⛔';
  } else {
    icon = '✅';
  }

  return {
    icon,
    level,
    pass,
    failReason: tooLow ? 'too-low' : tooHigh ? 'too-high' : undefined,
    tier,
    chromaPercent,
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
// COLOR DISTINCTION
// =============================================================================

/**
 * Get distinction level based on Jzazbz ΔEz color difference value.
 *
 * @param dE - Jzazbz ΔEz color difference value
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
