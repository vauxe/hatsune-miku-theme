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
  DELTA_EZ_SCALE,
  CHROMA_SCALE,
  JZ_TO_PERCENT,
  type ChromaTier,
  type APCAThresholdConfig,
} from './readability-constants';
import type {
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
// COLOR UTILITIES (via colorjs.io)
// =============================================================================

export function isValidHex(hex: string): boolean {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(hex);
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
    return color1.deltaE(color2, 'Jz') * DELTA_EZ_SCALE;
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
 *
 * @param chroma - Raw Cz value from JzCzhz
 * @param tier - Element tier (primary, secondary, accent)
 * @param thresholds - Optional threshold overrides (e.g., light theme relaxed limits)
 */
export function analyzeChroma(
  chroma: number,
  tier: ChromaTier = 'primary',
  thresholds: Record<ChromaTier, { readonly min: number; readonly max: number }> = CHROMA_THRESHOLDS
): {
  icon: string;
  level: string;
  pass: boolean;
  failReason?: 'too-low' | 'too-high';
  tier: ChromaTier;
  chromaPercent: number;
} {
  const chromaPercent = chroma * CHROMA_SCALE;

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

  const { min, max } = thresholds[tier];
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
// ALPHA UTILITIES (via colorjs.io)
// =============================================================================

export function hasAlphaChannel(hex: string): boolean {
  const len = hex.startsWith('#') ? hex.length - 1 : hex.length;
  return len === 4 || len === 8;
}

export function stripAlpha(hex: string): string {
  if (!hasAlphaChannel(hex)) return hex;
  const hasHash = hex.startsWith('#');
  const raw = hasHash ? hex.slice(1) : hex;

  if (raw.length === 4) {
    const rgb = raw.slice(0, 3);
    return hasHash ? `#${rgb}` : rgb;
  }

  return hasHash ? `#${raw.slice(0, 6)}` : raw.slice(0, 6);
}

export function extractAlpha(hex: string): number {
  if (!hasAlphaChannel(hex)) return 1.0;
  const raw = hex.startsWith('#') ? hex.slice(1) : hex;

  if (raw.length === 4) {
    const a = raw[3];
    return parseInt(a + a, 16) / 255;
  }

  return parseInt(raw.slice(6, 8), 16) / 255;
}

export function blendAlpha(fg: string, bg: string, alpha: number): string {
  const fgColor = new Color(fg);
  const bgColor = new Color(bg);
  const a = Math.max(0, Math.min(1, alpha));

  const [fR, fG, fB] = fgColor.to('srgb').coords;
  const [bR, bG, bB] = bgColor.to('srgb').coords;

  const blended = new Color('srgb', [
    fR * a + bR * (1 - a),
    fG * a + bG * (1 - a),
    fB * a + bB * (1 - a),
  ]);
  return blended.toString({ format: 'hex' });
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
 *
 * @param result - Raw APCA calculation result
 * @param tier - Element tier (primary, secondary, tertiary)
 * @param thresholds - Optional threshold overrides (e.g., light theme relaxed limits)
 */
export function analyzeAPCA(
  result: APCAResult,
  tier: 'primary' | 'secondary' | 'tertiary' = 'secondary',
  thresholds: APCAThresholdConfig = APCA_THRESHOLDS
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

  const minThreshold = thresholds[tier];
  const tooLow = absLc < minThreshold;
  const pass = !tooLow;

  const failReason = tooLow ? 'too-low' : undefined;

  if (tooLow && icon === '✅') {
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
  // Resolve alpha before simulation so CVD checks include overlay blending.
  const resolveAlpha = (hex: string): string => {
    if (!hasAlphaChannel(hex)) return hex;
    const alpha = extractAlpha(hex);
    const base = stripAlpha(hex);
    if (alpha >= 0.99) return base;
    return bg ? blendAlpha(base, bg, alpha) : base;
  };

  const resolved1 = resolveAlpha(hex1);
  const resolved2 = resolveAlpha(hex2);

  const normal = deltaEzHex(resolved1, resolved2) ?? 0;

  // Simulate both resolved colors under each CVD type, then measure distinction.
  const protan = deltaEzHex(
    simulateCVD(resolved1, 'protan'),
    simulateCVD(resolved2, 'protan')
  ) ?? 0;

  const deutan = deltaEzHex(
    simulateCVD(resolved1, 'deutan'),
    simulateCVD(resolved2, 'deutan')
  ) ?? 0;

  const tritan = deltaEzHex(
    simulateCVD(resolved1, 'tritan'),
    simulateCVD(resolved2, 'tritan')
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
    suggestion: pass ? undefined : `Reduce lightness spread from ${(spread * JZ_TO_PERCENT).toFixed(0)}% to ≤${(maxSpread * JZ_TO_PERCENT).toFixed(0)}%`,
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
 * @param minGap - Minimum desired hue gap in degrees (default 20°)
 *   20° allows natural hue families to pass while catching
 *   genuinely problematic clusters where distinct roles overlap.
 * @returns Analysis with hue gaps and clusters
 */
export function analyzeHueDistribution(
  colors: Record<string, string>,
  minGap = 20
): HueDistributionResult {
  const values: Array<{ name: string; hex: string; hue: number; chroma: number }> = [];

  for (const [name, hex] of Object.entries(colors)) {
    const jch = hexToJzczhz(hex);
    if (jch && jch.Cz > 0.02) { // Skip near-achromatic colors (hue unreliable below Cz ≈ 0.02)
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

  // Per-token gaps for backward compatibility (verbose output)
  const gaps: Array<{ from: string; to: string; gap: number }> = [];
  for (let i = 0; i < values.length; i++) {
    const current = values[i];
    const next = values[(i + 1) % values.length];
    let gap = next.hue - current.hue;
    if (gap < 0) gap += 360;
    gaps.push({ from: current.name, to: next.name, gap });
  }

  // --- Group into hue families (tokens within 10° of anchor) ---
  const FAMILY_RADIUS = 10;
  type Family = { names: string[]; hues: number[] };
  const families: Family[] = [];
  const assigned = new Set<number>();

  // First pass: linear grouping on sorted hues
  for (let i = 0; i < values.length; i++) {
    if (assigned.has(i)) continue;
    const anchor = values[i].hue;
    const family: Family = { names: [values[i].name], hues: [anchor] };
    assigned.add(i);
    for (let j = i + 1; j < values.length; j++) {
      if (assigned.has(j)) continue;
      if (values[j].hue - anchor <= FAMILY_RADIUS) {
        family.names.push(values[j].name);
        family.hues.push(values[j].hue);
        assigned.add(j);
      } else {
        break; // sorted, so no more within radius
      }
    }
    families.push(family);
  }

  // Wrap-around: merge last family into first if within radius
  if (families.length >= 2) {
    const first = families[0];
    const last = families[families.length - 1];
    const wrapDist = (first.hues[0] + 360) - last.hues[last.hues.length - 1];
    if (wrapDist <= FAMILY_RADIUS) {
      first.names = [...last.names, ...first.names];
      first.hues = [...last.hues, ...first.hues];
      families.pop();
    }
  }

  // Compute family centroids (circular mean for wrap-around safety)
  const centroids: number[] = families.map(f => {
    if (f.hues.length === 1) return f.hues[0];
    // Use first hue as reference to handle wrap-around
    const ref = f.hues[0];
    let sum = 0;
    for (const h of f.hues) {
      let diff = h - ref;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      sum += ref + diff;
    }
    const mean = sum / f.hues.length;
    return ((mean % 360) + 360) % 360;
  });

  // Sort families by centroid
  const familyOrder = centroids.map((c, i) => ({ centroid: c, idx: i }));
  familyOrder.sort((a, b) => a.centroid - b.centroid);

  // Compute gaps between adjacent families and flag clusters
  const clusters: Array<{ colors: string[]; hueRange: [number, number] }> = [];

  for (let i = 0; i < familyOrder.length; i++) {
    const curr = familyOrder[i];
    const next = familyOrder[(i + 1) % familyOrder.length];
    let familyGap = next.centroid - curr.centroid;
    if (familyGap <= 0) familyGap += 360;

    if (familyGap < minGap) {
      const fA = families[curr.idx];
      const fB = families[next.idx];
      const allNames = [...fA.names, ...fB.names];
      const allHues = [...fA.hues, ...fB.hues];
      clusters.push({
        colors: allNames,
        hueRange: [Math.min(...allHues), Math.max(...allHues)],
      });
    }
  }

  // Smallest gap is between families, not individual tokens
  let smallestFamilyGap = 360;
  for (let i = 0; i < familyOrder.length; i++) {
    const curr = familyOrder[i];
    const next = familyOrder[(i + 1) % familyOrder.length];
    let familyGap = next.centroid - curr.centroid;
    if (familyGap <= 0) familyGap += 360;
    if (familyGap < smallestFamilyGap) smallestFamilyGap = familyGap;
  }

  const pass = clusters.length === 0;

  return {
    pass,
    colors: values,
    clusters,
    gaps: gaps.sort((a, b) => a.gap - b.gap),
    minGap,
    smallestGap: smallestFamilyGap,
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
