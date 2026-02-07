/**
 * Color manipulation utilities for the readability analysis tool.
 * Uses Color.js for perceptually uniform color space calculations.
 * Uses culori for color vision deficiency (CVD) simulation.
 */

import Color from 'colorjs.io';
import {
  filterDeficiencyProt,
  filterDeficiencyDeuter,
  filterDeficiencyTrit,
  formatHex,
} from 'culori';

import {
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
  CVDType,
  CVDDistinctionResult,
  LightnessUniformityResult,
  HueDistributionResult,
} from './readability-types';

// =============================================================================
// RGB UTILITIES
// =============================================================================

export function isValidHex(hex: string): boolean {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
}

function hexToRgb(hex: string): RGB | null {
  try {
    const color = new Color(hex);
    const [r, g, b] = color.to('srgb').coords;
    return { r, g, b };
  } catch {
    return null;
  }
}

function rgbToHex(rgb: RGB): string {
  const color = new Color('srgb', [rgb.r, rgb.g, rgb.b]);
  return color.to('srgb').toString({ format: 'hex' });
}

// =============================================================================
// JzCzhz COLOR SPACE (via Color.js)
// =============================================================================

/**
 * Get JzCzhz from hex color
 */
function hexToJzczhz(hex: string): { Jz: number; Cz: number; hz: number } | null {
  try {
    const color = new Color(stripAlpha(hex));
    const [Jz, Cz, hz] = color.to('jzczhz').coords;
    return { Jz, Cz, hz: hz ?? 0 };
  } catch {
    return null;
  }
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

  try {
    const color1 = new Color(resolve(hex1));
    const color2 = new Color(resolve(hex2));
    return color1.deltaE(color2, 'Jz') * 500;
  } catch {
    return null;
  }
}

/**
 * Get JzCzhz Chroma from a hex color
 * @returns Raw Cz value (0-~0.19 for sRGB), or null if invalid hex
 */
export function getChroma(hex: string): number | null {
  const jch = hexToJzczhz(hex);
  if (!jch) return null;
  return jch.Cz;
}

/**
 * Analyze JzCzhz chroma level for comfortable extended reading.
 */
export function analyzeChroma(
  chroma: number,
  tier: ChromaTier = 'primary'
): {
  icon: string;
  level: string;
  pass: boolean;
  failReason?: 'too-low' | 'too-high';
  tier: ChromaTier;
  chromaPercent: number;
} {
  const chromaPercent = chroma * 525;

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

  const { min, max } = CHROMA_THRESHOLDS[tier];
  const tooLow = chromaPercent < min;
  const tooHigh = chromaPercent > max;
  const pass = !tooLow && !tooHigh;

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

function hexAlphaToDecimal(hexAlpha: string): number {
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
// APCA CONTRAST (via Color.js)
// =============================================================================

export function getAPCAContrast(text: string, background: string): APCAResult {
  const txtColor = new Color(text);
  const bgColor = new Color(background);

  // Color.js contrast with APCA method
  const lc = txtColor.contrast(bgColor, 'APCA');

  // Determine polarity from luminance
  const txtY = txtColor.to('xyz-d65').coords[1];
  const bgY = bgColor.to('xyz-d65').coords[1];
  const polarity: Polarity = bgY > txtY ? 'dark-on-light' : 'light-on-dark';

  return { lc, polarity };
}

/**
 * Analyze APCA result with tiered pass threshold.
 */
export function analyzeAPCA(
  result: APCAResult,
  tier: 'primary' | 'secondary' | 'tertiary' = 'secondary'
): APCAAnalysis {
  const { lc, polarity } = result;
  const absLc = Math.abs(lc);

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

  const minThreshold = APCA_THRESHOLDS[tier];
  const maxThreshold = APCA_THRESHOLDS.max;
  const tooLow = absLc < minThreshold;
  const tooHigh = tier !== 'tertiary' && absLc > maxThreshold;
  const pass = !tooLow && !tooHigh;

  const failReason = tooHigh ? 'halation' : tooLow ? 'too-low' : undefined;

  if (tooHigh) {
    icon = '⚡';
  } else if (tooLow && icon === '✅') {
    icon = '⚠️';
  }

  return { lc, level, icon, pass, polarity, failReason };
}

// =============================================================================
// COLOR DISTINCTION
// =============================================================================

/**
 * Get distinction level based on Jzazbz ΔEz color difference value.
 */
export function getDistinctionLevel(
  dE: number,
  isCritical = false
): { level: DistinctionLevel; icon: string; pass: boolean } {
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

  const threshold = isCritical
    ? DISTINCTION_THRESHOLDS.critical
    : DISTINCTION_THRESHOLDS.standard;
  const pass = dE >= threshold;

  const icon = pass ? '✅' : '❌';

  return { level, icon, pass };
}

// =============================================================================
// COLOR VISION DEFICIENCY (CVD) SIMULATION
// =============================================================================

/**
 * Simulate how a color appears to someone with color vision deficiency.
 * Uses Brettel, Viénot, and Mollon (1997) simulation model via culori.
 *
 * @param hex - Color to simulate
 * @param type - Type of CVD: 'protan' (red-blind), 'deutan' (green-blind), 'tritan' (blue-blind)
 * @param severity - Severity from 0 (normal) to 1 (full dichromacy), default 1
 * @returns Simulated color as hex string
 */
export function simulateCVD(hex: string, type: CVDType, severity = 1): string {
  const filters = {
    protan: filterDeficiencyProt(severity),
    deutan: filterDeficiencyDeuter(severity),
    tritan: filterDeficiencyTrit(severity),
  };

  const simulated = filters[type](hex);
  return formatHex(simulated) ?? hex;
}

/**
 * Check if two colors are distinguishable under all types of color vision deficiency.
 *
 * @param hex1 - First color
 * @param hex2 - Second color
 * @param bg - Background color for alpha compositing
 * @returns Delta E values for normal vision and each CVD type
 */
export function checkCVDDistinction(
  hex1: string,
  hex2: string,
  bg?: string
): CVDDistinctionResult {
  const normal = deltaEzHex(hex1, hex2, bg) ?? 0;

  // Simulate both colors under each CVD type, then measure distinction
  const protan = deltaEzHex(
    simulateCVD(hex1, 'protan'),
    simulateCVD(hex2, 'protan'),
    bg ? simulateCVD(bg, 'protan') : undefined
  ) ?? 0;

  const deutan = deltaEzHex(
    simulateCVD(hex1, 'deutan'),
    simulateCVD(hex2, 'deutan'),
    bg ? simulateCVD(bg, 'deutan') : undefined
  ) ?? 0;

  const tritan = deltaEzHex(
    simulateCVD(hex1, 'tritan'),
    simulateCVD(hex2, 'tritan'),
    bg ? simulateCVD(bg, 'tritan') : undefined
  ) ?? 0;

  // Find the worst case
  const minCVD = Math.min(protan, deutan, tritan);
  const worstType: CVDType =
    minCVD === protan ? 'protan' :
    minCVD === deutan ? 'deutan' : 'tritan';

  return {
    normal,
    protan,
    deutan,
    tritan,
    worstType,
    worstDeltaE: minCVD,
  };
}

// =============================================================================
// LIGHTNESS UNIFORMITY ANALYSIS
// =============================================================================

/**
 * Analyze lightness uniformity across a set of colors.
 * Syntax colors should have similar Jz lightness to avoid visual "jumps."
 *
 * @param colors - Map of color names to hex values
 * @param maxSpread - Maximum allowed Jz spread (default 0.03 = ~13% of range)
 * @returns Analysis with min/max lightness and outliers
 */
export function analyzeLightnessUniformity(
  colors: Record<string, string>,
  maxSpread = 0.03
): LightnessUniformityResult {
  const values: Array<{ name: string; hex: string; jz: number }> = [];

  for (const [name, hex] of Object.entries(colors)) {
    const jch = hexToJzczhz(hex);
    if (jch) {
      values.push({ name, hex, jz: jch.Jz });
    }
  }

  if (values.length < 2) {
    return {
      pass: true,
      spread: 0,
      maxSpread,
      colors: values,
      darkest: values[0],
      lightest: values[0],
      outliers: [],
    };
  }

  // Sort by lightness
  values.sort((a, b) => a.jz - b.jz);

  const darkest = values[0];
  const lightest = values[values.length - 1];
  const spread = lightest.jz - darkest.jz;
  const pass = spread <= maxSpread;

  // Calculate median and find outliers (>1.5x IQR from median)
  const median = values[Math.floor(values.length / 2)].jz;
  const q1 = values[Math.floor(values.length * 0.25)].jz;
  const q3 = values[Math.floor(values.length * 0.75)].jz;
  const iqr = q3 - q1;
  const lowerBound = q1 - 1.5 * iqr;
  const upperBound = q3 + 1.5 * iqr;

  const outliers = values.filter(v => v.jz < lowerBound || v.jz > upperBound);

  return {
    pass,
    spread,
    maxSpread,
    colors: values,
    darkest,
    lightest,
    outliers,
    median,
    suggestion: pass ? undefined : `Reduce lightness spread from ${(spread * 450).toFixed(0)}% to ≤${(maxSpread * 450).toFixed(0)}%`,
  };
}

// =============================================================================
// HUE DISTRIBUTION ANALYSIS
// =============================================================================

/**
 * Analyze hue distribution to detect clustering.
 * Evenly distributed hues maximize color distinction.
 *
 * @param colors - Map of color names to hex values
 * @param minGap - Minimum desired hue gap in degrees (default 30°)
 * @returns Analysis with hue gaps and clusters
 */
export function analyzeHueDistribution(
  colors: Record<string, string>,
  minGap = 30
): HueDistributionResult {
  const values: Array<{ name: string; hex: string; hue: number; chroma: number }> = [];

  for (const [name, hex] of Object.entries(colors)) {
    const jch = hexToJzczhz(hex);
    if (jch && jch.Cz > 0.01) { // Skip near-gray colors (no meaningful hue)
      values.push({ name, hex, hue: jch.hz, chroma: jch.Cz });
    }
  }

  if (values.length < 2) {
    return {
      pass: true,
      colors: values,
      clusters: [],
      gaps: [],
      minGap,
      suggestion: undefined,
    };
  }

  // Sort by hue
  values.sort((a, b) => a.hue - b.hue);

  // Calculate gaps between adjacent hues (circular)
  const gaps: Array<{ from: string; to: string; gap: number }> = [];
  for (let i = 0; i < values.length; i++) {
    const current = values[i];
    const next = values[(i + 1) % values.length];
    let gap = next.hue - current.hue;
    if (gap < 0) gap += 360; // Wrap around
    gaps.push({ from: current.name, to: next.name, gap });
  }

  // Find clusters (colors within minGap of each other)
  const clusters: Array<{ colors: string[]; hueRange: [number, number] }> = [];
  let currentCluster: string[] = [values[0].name];
  let clusterStart = values[0].hue;

  for (let i = 1; i < values.length; i++) {
    const hueDiff = values[i].hue - values[i - 1].hue;
    if (hueDiff < minGap) {
      currentCluster.push(values[i].name);
    } else {
      if (currentCluster.length > 1) {
        clusters.push({
          colors: currentCluster,
          hueRange: [clusterStart, values[i - 1].hue],
        });
      }
      currentCluster = [values[i].name];
      clusterStart = values[i].hue;
    }
  }

  // Check wrap-around: does the last color connect back to the first?
  const wrapGap = (values[0].hue + 360) - values[values.length - 1].hue;
  const wrapsAround = wrapGap < minGap;

  if (wrapsAround) {
    // The tail and head are close enough to form/extend a cluster
    const firstClusterIdx = clusters.findIndex(c => c.colors.includes(values[0].name));
    if (firstClusterIdx >= 0) {
      // Merge trailing colors into the first cluster
      clusters[firstClusterIdx].colors = [...currentCluster, ...clusters[firstClusterIdx].colors];
      clusters[firstClusterIdx].hueRange[0] = clusterStart;
    } else {
      // First color was a singleton — combine with trailing cluster
      clusters.push({
        colors: [...currentCluster, values[0].name],
        hueRange: [clusterStart, values[0].hue + 360],
      });
    }
  } else if (currentCluster.length > 1) {
    // No wrap-around, just push trailing cluster if it has multiple colors
    clusters.push({
      colors: currentCluster,
      hueRange: [clusterStart, values[values.length - 1].hue],
    });
  }

  const pass = clusters.length === 0;
  const smallestGap = Math.min(...gaps.map(g => g.gap));

  return {
    pass,
    colors: values,
    clusters,
    gaps: gaps.sort((a, b) => a.gap - b.gap),
    minGap,
    smallestGap,
    suggestion: pass ? undefined : `${clusters.length} hue cluster(s) found. Spread hues at least ${minGap}° apart.`,
  };
}

// =============================================================================
// FIX SUGGESTIONS
// =============================================================================

/**
 * Suggest a fix for a contrast issue.
 *
 * @param currentLc - Current APCA Lc value
 * @param targetLc - Target Lc threshold
 * @param polarity - Light on dark or dark on light
 * @returns Human-readable suggestion
 */
export function suggestContrastFix(
  currentLc: number,
  targetLc: number,
  polarity: Polarity
): string {
  const absLc = Math.abs(currentLc);
  const diff = targetLc - absLc;

  if (diff <= 0) {
    return 'already passing';
  }

  // Rough estimate: 10 Lc points ≈ 10-15% lightness change
  const percentChange = Math.round(diff * 1.2);

  if (polarity === 'light-on-dark') {
    return `lighten foreground by ~${percentChange}%`;
  } else {
    return `darken foreground by ~${percentChange}%`;
  }
}

/**
 * Suggest a fix for a distinction issue.
 *
 * @param currentDeltaE - Current Delta E value
 * @param targetDeltaE - Target Delta E threshold
 * @param color1Hue - Hue of first color (degrees)
 * @param color2Hue - Hue of second color (degrees)
 * @returns Human-readable suggestion
 */
export function suggestDistinctionFix(
  currentDeltaE: number,
  targetDeltaE: number,
  color1Hue?: number,
  color2Hue?: number
): string {
  const diff = targetDeltaE - currentDeltaE;

  if (diff <= 0) {
    return 'already passing';
  }

  // If we have hue info, suggest hue shift
  if (color1Hue !== undefined && color2Hue !== undefined) {
    let hueDiff = Math.abs(color1Hue - color2Hue);
    if (hueDiff > 180) hueDiff = 360 - hueDiff;

    if (hueDiff < 30) {
      const suggestedShift = 30 - hueDiff + 10;
      return `shift hues apart by ~${Math.round(suggestedShift)}°`;
    }
  }

  // Generic suggestion
  if (diff < 5) {
    return 'adjust lightness or saturation slightly';
  } else if (diff < 10) {
    return 'increase hue separation or lightness difference';
  } else {
    return 'choose more distinct colors (different hue family)';
  }
}

/**
 * Suggest a fix for a chroma issue.
 *
 * @param currentChroma - Current chroma percentage
 * @param minChroma - Minimum threshold
 * @param maxChroma - Maximum threshold
 * @returns Human-readable suggestion
 */
export function suggestChromaFix(
  currentChroma: number,
  minChroma: number,
  maxChroma: number
): string {
  if (currentChroma < minChroma) {
    const increase = minChroma - currentChroma;
    return `increase saturation by ~${Math.round(increase)}%`;
  } else if (currentChroma > maxChroma) {
    const decrease = currentChroma - maxChroma;
    return `decrease saturation by ~${Math.round(decrease)}%`;
  }
  return 'already passing';
}
