/**
 * Empirical comparison: JzCzhz vs OKLCH
 *
 * Three distinct evaluation layers:
 *
 * A. INTRINSIC DESIGN-SPACE BEHAVIOR
 *    Tests the space itself, not its rendered output.
 *    Uses only in-gamut colors to avoid clipping contamination.
 *
 * B. RENDERED sRGB PERFORMANCE
 *    Tests practical output quality for the theme.
 *    Clipping, gamut mapping, and quantization are part of the measurement.
 *
 * C. TRUE ROUND-TRIP STABILITY
 *    Design space → sRGB → same design space.
 *    Measures coordinate recovery, not just perceptual error.
 *
 * Ground truth metric: ΔE2000 (computed in CIELAB — independent of both spaces).
 * Each space uses fully independent parameterization where possible.
 */

import Color from 'colorjs.io';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CC = Color as any;

// =============================================================================
// UTILITIES
// =============================================================================

/** Safe number extraction — handles null, undefined, AND NaN */
function safe(x: number | null | undefined): number {
  return Number.isFinite(x) ? x! : 0;
}

function jzToHex(Jz: number, Cz: number, hz: number): string {
  return new CC('jzczhz', [Jz, Cz, hz])
    .to('srgb').toGamut({ method: 'clip' })
    .toString({ format: 'hex' }).toUpperCase();
}

function oklchToHex(L: number, C: number, h: number): string {
  return new CC('oklch', [L, C, h])
    .to('srgb').toGamut({ method: 'clip' })
    .toString({ format: 'hex' }).toUpperCase();
}

function hexToJz(hex: string): { Jz: number; Cz: number; hz: number } {
  const [Jz, Cz, hz] = new CC(hex).to('jzczhz').coords;
  return { Jz: safe(Jz), Cz: safe(Cz), hz: safe(hz) };
}

function hexToOklch(hex: string): { L: number; C: number; h: number } {
  const [L, C, h] = new CC(hex).to('oklch').coords;
  return { L: safe(L), C: safe(C), h: safe(h) };
}

function deltaE2000(hex1: string, hex2: string): number {
  return new CC(hex1).deltaE(new CC(hex2), '2000');
}

/** ΔE2000 between two design-space colors (no sRGB involved) */
function deltaE2000raw(space: string, c1: number[], space2: string, c2: number[]): number {
  return new CC(space, c1).deltaE(new CC(space2, c2), '2000');
}

function isInGamut(space: string, coords: number[]): boolean {
  const [r, g, b] = new CC(space, coords).to('srgb').coords;
  const eps = 0.001;
  return r >= -eps && r <= 1 + eps && g >= -eps && g <= 1 + eps && b >= -eps && b <= 1 + eps;
}

function stddev(values: number[]): number {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.sqrt(values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length);
}

function cv(values: number[]): number {
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  return mean === 0 ? 0 : stddev(values) / mean;
}

function mean(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function winner(jzScore: number, okScore: number, lowerIsBetter: boolean): string {
  const jzWins = lowerIsBetter ? jzScore < okScore : jzScore > okScore;
  return jzWins ? 'JzCzhz' : jzScore === okScore ? 'TIE' : 'OKLCH';
}

// =============================================================================
// CONFIGURATION
// =============================================================================

const HUES_12 = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const HUE_NAMES = [
  'Rose', 'Red', 'Orange', 'Gold', 'Lime', 'Green',
  'Teal', 'Cyan', 'Azure', 'Blue', 'Violet', 'Magenta',
];

// JzCzhz design constants
const JZ_SOPRANO = 0.185;
const JZ_ALTO = 0.155;
const CZ_MP = 0.060;
const JZ_STEP = 0.015;
const CZ_STEP = 0.015;

// OKLCH independent parameterization:
// Derive from physical luminance range, NOT from JzCzhz coordinates.
// 1. Convert JzCzhz register endpoints (teal, in-gamut) to get OKLCH L range
// 2. Divide by same number of steps → OKLCH's own native step size
// 3. Same for chroma: convert JzCzhz chroma endpoints at teal
function deriveOklchParams() {
  // Verify the soprano teal anchor is in sRGB gamut
  if (!isInGamut('jzczhz', [JZ_SOPRANO, CZ_MP, 180])) {
    throw new Error('ASSERTION FAILED: teal soprano/mp is out of sRGB gamut');
  }

  // Soprano-equivalent L and mp-equivalent C (from rendered teal hex)
  const sopranoTeal = hexToOklch(jzToHex(JZ_SOPRANO, CZ_MP, 180));
  const sopranoL = sopranoTeal.L;
  const mpC = sopranoTeal.C;

  // Lightness step: derive from two adjacent in-gamut registers.
  // Use alto→mezzo (both comfortably in gamut at teal/mp) to get native step.
  const altoOk = hexToOklch(jzToHex(JZ_ALTO, CZ_MP, 180));
  const mezzoOk = hexToOklch(jzToHex(0.170, CZ_MP, 180));
  const lStep = mezzoOk.L - altoOk.L; // one register step in OKLCH

  // Full register range: 10 registers centered so soprano is at step index 7
  const regLowL = sopranoL - 7 * lStep; // contrabass equivalent

  // Chroma step: from niente→mf at teal soprano (all in gamut)
  const dynLow = hexToOklch(jzToHex(JZ_SOPRANO, 0, 180));
  const dynHigh = hexToOklch(jzToHex(JZ_SOPRANO, 0.075, 180));
  const cStep = (dynHigh.C - dynLow.C) / 5;

  return { lStep, cStep, sopranoL, mpC, regLowL };
}

/**
 * Find maximum chroma where all 12 hues are in-gamut at a given lightness.
 * Binary search, space-independent.
 */
function maxSafeChroma(space: string, lightness: number, lightnessIdx: number): number {
  let lo = 0, hi = space === 'jzczhz' ? 0.19 : 0.4;
  for (let iter = 0; iter < 30; iter++) {
    const mid = (lo + hi) / 2;
    const allInGamut = HUES_12.every(h => {
      const coords = space === 'jzczhz' ? [lightness, mid, h] : [lightness, mid, h];
      // For oklch: coords are [L, C, h]. For jzczhz: [Jz, Cz, hz].
      return isInGamut(space, coords);
    });
    if (allInGamut) lo = mid; else hi = mid;
  }
  return lo;
}

// ═══════════════════════════════════════════════════════════════════════════════
// LAYER A: INTRINSIC DESIGN-SPACE BEHAVIOR
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * A1: Hue step uniformity INSIDE the design space.
 *
 * For each space, find the max chroma where all 12 hues are in-gamut
 * at soprano-equivalent lightness. Then measure ΔE2000 between adjacent
 * 30° hue steps. No sRGB clipping involved — pure space behavior.
 */
function testA1_hueLinearity() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('A1: INTRINSIC HUE STEP UNIFORMITY');
  console.log('Equal 30° hue steps at fixed lightness/chroma (in-gamut).');
  console.log('ΔE2000 between adjacent hues — no sRGB clipping involved.');
  console.log('Lower CV = more uniform perceived hue steps.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();

  // Find max safe chroma for each space at soprano-equivalent L
  const jzSafeC = maxSafeChroma('jzczhz', JZ_SOPRANO, 0);
  const okSafeC = maxSafeChroma('oklch', ok.sopranoL, 0);

  console.log(`JzCzhz: Jz=${JZ_SOPRANO}, max safe Cz=${jzSafeC.toFixed(4)} (all 12 hues in gamut)`);
  console.log(`OKLCH:  L=${ok.sopranoL.toFixed(4)}, max safe C=${okSafeC.toFixed(4)} (all 12 hues in gamut)`);
  console.log();

  const jzDeltas: number[] = [];
  const okDeltas: number[] = [];

  console.log('Hue pair              JzCzhz ΔE2000   OKLCH ΔE2000');
  console.log('───────────────────── ────────────── ──────────────');

  for (let i = 0; i < 12; i++) {
    const next = (i + 1) % 12;
    const h1 = HUES_12[i], h2 = HUES_12[next];

    // ΔE2000 directly in design space — no hex conversion
    const jzDE = deltaE2000raw('jzczhz', [JZ_SOPRANO, jzSafeC, h1], 'jzczhz', [JZ_SOPRANO, jzSafeC, h2]);
    const okDE = deltaE2000raw('oklch', [ok.sopranoL, okSafeC, h1], 'oklch', [ok.sopranoL, okSafeC, h2]);

    jzDeltas.push(jzDE);
    okDeltas.push(okDE);

    const pair = `${HUE_NAMES[i]}→${HUE_NAMES[next]}`;
    console.log(`${pair.padEnd(22)} ${jzDE.toFixed(2).padStart(12)}   ${okDE.toFixed(2).padStart(12)}`);
  }

  console.log('───────────────────── ────────────── ──────────────');
  const jzCV = cv(jzDeltas), okCV = cv(okDeltas);
  console.log(`Mean                  ${mean(jzDeltas).toFixed(2).padStart(12)}   ${mean(okDeltas).toFixed(2).padStart(12)}`);
  console.log(`Std dev               ${stddev(jzDeltas).toFixed(2).padStart(12)}   ${stddev(okDeltas).toFixed(2).padStart(12)}`);
  console.log(`CV                    ${(jzCV * 100).toFixed(1).padStart(11)}%   ${(okCV * 100).toFixed(1).padStart(11)}%`);
  console.log(`Max/Min               ${(Math.max(...jzDeltas) / Math.min(...jzDeltas)).toFixed(2).padStart(12)}   ${(Math.max(...okDeltas) / Math.min(...okDeltas)).toFixed(2).padStart(12)}`);
  console.log(`\n→ ${winner(jzCV, okCV, true)} (lower CV)\n`);
}

/**
 * A2: Lightness step uniformity INSIDE the design space.
 *
 * Equal lightness increments at teal (in-gamut for both spaces).
 * Each space uses its own native step size derived from the same
 * physical luminance range.
 */
function testA2_lightnessUniformity() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('A2: INTRINSIC LIGHTNESS STEP UNIFORMITY');
  console.log('Equal L/Jz steps at teal/mp (always in gamut).');
  console.log('ΔE2000 between adjacent register steps — no clipping.');
  console.log('Each space uses its own native step size.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();
  const jzRegisters = [0.080, 0.095, 0.110, 0.125, 0.140, 0.155, 0.170, 0.185, 0.200, 0.215];
  const regNames = ['contrabass', 'bass', 'baritone', 'tenor', 'countertenor', 'alto', 'mezzo', 'soprano', 'treble', 'sopranino'];

  console.log(`JzCzhz: ΔJz = ${JZ_STEP}, Cz=${CZ_MP}, hz=180°`);
  console.log(`OKLCH:  ΔL  = ${ok.lStep.toFixed(5)}, C=${ok.mpC.toFixed(4)}, h=180°`);
  console.log();

  const jzDeltas: number[] = [];
  const okDeltas: number[] = [];

  console.log('Register step             JzCzhz ΔE2000   OKLCH ΔE2000');
  console.log('──────────────────────── ────────────── ──────────────');

  for (let i = 0; i < 9; i++) {
    // Direct design-space comparison — no hex
    const jzDE = deltaE2000raw(
      'jzczhz', [jzRegisters[i], CZ_MP, 180],
      'jzczhz', [jzRegisters[i + 1], CZ_MP, 180]
    );
    const okDE = deltaE2000raw(
      'oklch', [ok.regLowL + i * ok.lStep, ok.mpC, 180],
      'oklch', [ok.regLowL + (i + 1) * ok.lStep, ok.mpC, 180]
    );

    jzDeltas.push(jzDE);
    okDeltas.push(okDE);

    console.log(`${regNames[i]}→${regNames[i + 1]}`.padEnd(25) +
      `${jzDE.toFixed(2).padStart(12)}   ${okDE.toFixed(2).padStart(12)}`);
  }

  console.log('──────────────────────── ────────────── ──────────────');
  const jzCV = cv(jzDeltas), okCV = cv(okDeltas);
  console.log(`Mean                      ${mean(jzDeltas).toFixed(2).padStart(12)}   ${mean(okDeltas).toFixed(2).padStart(12)}`);
  console.log(`Std dev                   ${stddev(jzDeltas).toFixed(2).padStart(12)}   ${stddev(okDeltas).toFixed(2).padStart(12)}`);
  console.log(`CV                        ${(jzCV * 100).toFixed(1).padStart(11)}%   ${(okCV * 100).toFixed(1).padStart(11)}%`);
  console.log(`\n→ ${winner(jzCV, okCV, true)} (lower CV)\n`);
}

/**
 * A3: Chroma step uniformity INSIDE the design space.
 *
 * Equal chroma increments at teal/soprano (in-gamut for both).
 * Each space uses its own native step size.
 */
function testA3_chromaUniformity() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('A3: INTRINSIC CHROMA STEP UNIFORMITY');
  console.log('Equal C/Cz steps at teal/soprano (always in gamut).');
  console.log('ΔE2000 between adjacent dynamic steps — no clipping.');
  console.log('Each space uses its own native step size.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();
  const dynamics = [0.000, 0.015, 0.030, 0.045, 0.060, 0.075];
  const dynNames = ['niente', 'ppp', 'pp', 'p', 'mp', 'mf'];

  // OKLCH niente C (achromatic at soprano teal)
  const okNienteC = hexToOklch(jzToHex(JZ_SOPRANO, 0, 180)).C; // ≈ 0

  console.log(`JzCzhz: ΔCz = ${CZ_STEP}, Jz=${JZ_SOPRANO}, hz=180°`);
  console.log(`OKLCH:  ΔC  = ${ok.cStep.toFixed(5)}, L=${ok.sopranoL.toFixed(4)}, h=180°`);
  console.log();

  const jzDeltas: number[] = [];
  const okDeltas: number[] = [];

  console.log('Dynamic step         JzCzhz ΔE2000   OKLCH ΔE2000');
  console.log('─────────────────── ────────────── ──────────────');

  for (let i = 0; i < 5; i++) {
    const jzDE = deltaE2000raw(
      'jzczhz', [JZ_SOPRANO, dynamics[i], 180],
      'jzczhz', [JZ_SOPRANO, dynamics[i + 1], 180]
    );
    const okDE = deltaE2000raw(
      'oklch', [ok.sopranoL, okNienteC + i * ok.cStep, 180],
      'oklch', [ok.sopranoL, okNienteC + (i + 1) * ok.cStep, 180]
    );

    jzDeltas.push(jzDE);
    okDeltas.push(okDE);

    console.log(`${dynNames[i]}→${dynNames[i + 1]}`.padEnd(20) +
      `${jzDE.toFixed(2).padStart(12)}   ${okDE.toFixed(2).padStart(12)}`);
  }

  console.log('─────────────────── ────────────── ──────────────');
  const jzCV = cv(jzDeltas), okCV = cv(okDeltas);
  console.log(`Mean                 ${mean(jzDeltas).toFixed(2).padStart(12)}   ${mean(okDeltas).toFixed(2).padStart(12)}`);
  console.log(`Std dev              ${stddev(jzDeltas).toFixed(2).padStart(12)}   ${stddev(okDeltas).toFixed(2).padStart(12)}`);
  console.log(`CV                   ${(jzCV * 100).toFixed(1).padStart(11)}%   ${(okCV * 100).toFixed(1).padStart(11)}%`);
  console.log(`\n→ ${winner(jzCV, okCV, true)} (lower CV)\n`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// LAYER B: RENDERED sRGB PERFORMANCE
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * B1: Intent-to-render error after gamut mapping.
 *
 * Design-space color → clip to sRGB → measure ΔE2000 between
 * the unclipped intent and the clipped result.
 * This is NOT round-trip — it is render fidelity.
 */
function testB1_renderFidelity() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('B1: INTENT-TO-RENDER ERROR (all 12 hues at soprano/mp)');
  console.log('ΔE2000 between unclipped design intent and clipped sRGB.');
  console.log('Measures how much gamut mapping damages each color.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();

  console.log('Hue            JzCzhz ΔE2000   OKLCH ΔE2000   Jz clip  OK clip');
  console.log('────────────── ────────────── ────────────── ──────── ────────');

  const jzDEs: number[] = [];
  const okDEs: number[] = [];

  for (let i = 0; i < 12; i++) {
    const hz = HUES_12[i];

    const jzIntent = new CC('jzczhz', [JZ_SOPRANO, CZ_MP, hz]);
    const okIntent = new CC('oklch', [ok.sopranoL, ok.mpC, hz]);

    const jzHex = jzToHex(JZ_SOPRANO, CZ_MP, hz);
    const okHex = oklchToHex(ok.sopranoL, ok.mpC, hz);

    const jzDE = jzIntent.deltaE(new CC(jzHex), '2000');
    const okDE = okIntent.deltaE(new CC(okHex), '2000');

    jzDEs.push(jzDE);
    okDEs.push(okDE);

    const jzClip = !isInGamut('jzczhz', [JZ_SOPRANO, CZ_MP, hz]);
    const okClip = !isInGamut('oklch', [ok.sopranoL, ok.mpC, hz]);

    console.log(
      `${HUE_NAMES[i].padEnd(15)}` +
      `${jzDE.toFixed(2).padStart(12)}   ` +
      `${okDE.toFixed(2).padStart(12)}   ` +
      `${(jzClip ? 'YES' : '—').padStart(7)}  ` +
      `${(okClip ? 'YES' : '—').padStart(7)}`
    );
  }

  console.log('────────────── ────────────── ────────────── ──────── ────────');
  console.log(`Mean                  ${mean(jzDEs).toFixed(2).padStart(12)}   ${mean(okDEs).toFixed(2).padStart(12)}`);
  console.log(`Max                   ${Math.max(...jzDEs).toFixed(2).padStart(12)}   ${Math.max(...okDEs).toFixed(2).padStart(12)}`);
  console.log(`Sum                   ${jzDEs.reduce((a, b) => a + b, 0).toFixed(2).padStart(12)}   ${okDEs.reduce((a, b) => a + b, 0).toFixed(2).padStart(12)}`);
  console.log(`Clipped count         ${jzDEs.filter((_, i) => !isInGamut('jzczhz', [JZ_SOPRANO, CZ_MP, HUES_12[i]])).length.toString().padStart(10)}/12   ${jzDEs.map((_, i) => !isInGamut('oklch', [ok.sopranoL, ok.mpC, HUES_12[i]])).filter(Boolean).length.toString().padStart(10)}/12`);

  const jzM = mean(jzDEs), okM = mean(okDEs);
  console.log(`\n→ ${winner(jzM, okM, true)} (lower mean ΔE2000 = less render damage)\n`);
}

/**
 * B1b: Explicit gamut coverage report.
 *
 * For all 12 hues × 10 registers × 6 dynamics (720 colors per space),
 * count how many are out of sRGB gamut and by how much.
 * Reports: total out-of-gamut count, which hues clip, max overshoot.
 */
function testB1b_gamutCoverage() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('B1b: GAMUT COVERAGE REPORT');
  console.log('12 hues × 10 registers × 6 dynamics = 720 colors per space.');
  console.log('Out-of-gamut count, affected hues, max sRGB overshoot.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();
  const jzRegisters = [0.080, 0.095, 0.110, 0.125, 0.140, 0.155, 0.170, 0.185, 0.200, 0.215];
  const dynamics = [0.000, 0.015, 0.030, 0.045, 0.060, 0.075];

  let jzOOG = 0, okOOG = 0;
  const jzHueOOG = new Array(12).fill(0);
  const okHueOOG = new Array(12).fill(0);
  let jzMaxOver = 0, okMaxOver = 0;
  let jzMaxOverHue = '', okMaxOverHue = '';

  function overshoot(space: string, coords: number[]): number {
    const [r, g, b] = new CC(space, coords).to('srgb').coords;
    return Math.max(0, -r, r - 1, -g, g - 1, -b, b - 1);
  }

  for (let hi = 0; hi < 12; hi++) {
    const hz = HUES_12[hi];
    for (let ri = 0; ri < 10; ri++) {
      for (let di = 0; di < 6; di++) {
        // JzCzhz
        const jzCoords: [number, number, number] = [jzRegisters[ri], dynamics[di], hz];
        if (!isInGamut('jzczhz', jzCoords)) {
          jzOOG++;
          jzHueOOG[hi]++;
          const ov = overshoot('jzczhz', jzCoords);
          if (ov > jzMaxOver) {
            jzMaxOver = ov;
            jzMaxOverHue = `${HUE_NAMES[hi]} Jz=${jzRegisters[ri]} Cz=${dynamics[di]}`;
          }
        }

        // OKLCH
        const okL = ok.regLowL + ri * ok.lStep;
        const okC = di * ok.cStep;
        const okCoords: [number, number, number] = [okL, okC, hz];
        if (!isInGamut('oklch', okCoords)) {
          okOOG++;
          okHueOOG[hi]++;
          const ov = overshoot('oklch', okCoords);
          if (ov > okMaxOver) {
            okMaxOver = ov;
            okMaxOverHue = `${HUE_NAMES[hi]} L=${okL.toFixed(4)} C=${okC.toFixed(4)}`;
          }
        }
      }
    }
  }

  const total = 720;
  console.log(`Total colors tested:  ${total} per space\n`);

  console.log('                      JzCzhz          OKLCH');
  console.log('───────────────────── ─────────────── ───────────────');
  console.log(`Out-of-gamut count    ${String(jzOOG).padStart(6)} (${(jzOOG / total * 100).toFixed(1)}%)     ${String(okOOG).padStart(6)} (${(okOOG / total * 100).toFixed(1)}%)`);
  console.log(`In-gamut count        ${String(total - jzOOG).padStart(6)} (${((total - jzOOG) / total * 100).toFixed(1)}%)     ${String(total - okOOG).padStart(6)} (${((total - okOOG) / total * 100).toFixed(1)}%)`);
  console.log(`Max sRGB overshoot    ${jzMaxOver.toFixed(4).padStart(12)}   ${okMaxOver.toFixed(4).padStart(12)}`);
  console.log();

  console.log('Per-hue OOG count:');
  console.log('Hue            JzCzhz   OKLCH');
  console.log('────────────── ─────── ───────');
  for (let i = 0; i < 12; i++) {
    console.log(
      `${HUE_NAMES[i].padEnd(15)}` +
      `${String(jzHueOOG[i]).padStart(4)}/60  ` +
      `${String(okHueOOG[i]).padStart(4)}/60`
    );
  }
  console.log();
  console.log(`JzCzhz worst: ${jzMaxOverHue}`);
  console.log(`OKLCH  worst: ${okMaxOverHue}`);
  console.log(`\n→ ${winner(jzOOG, okOOG, true)} (fewer out-of-gamut colors)\n`);
}

/**
 * B2: Warm-hue render robustness in sRGB.
 *
 * Focused on the theme's pain point: warm hues (0°–90°, 330°).
 * Tested at three register/dynamic combos the theme actually uses.
 */
function testB2_warmHueRobustness() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('B2: WARM-HUE RENDER ROBUSTNESS IN sRGB');
  console.log('ΔE2000 between unclipped intent and clipped sRGB.');
  console.log('Warm hues (0°–90°, 330°) at three register/dynamic combos.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const warmHues = [0, 30, 60, 90, 330];
  const warmNames = ['Rose', 'Red', 'Orange', 'Gold', 'Magenta'];

  const configs = [
    { name: 'soprano/mp (ensemble)', jz: JZ_SOPRANO, cz: CZ_MP },
    { name: 'alto/f (error signal)', jz: JZ_ALTO, cz: 0.090 },
    { name: 'alto/mp (whisper)', jz: JZ_ALTO, cz: CZ_MP },
  ];

  let jzGrandSum = 0, okGrandSum = 0;

  for (const cfg of configs) {
    const okRef = deriveOklchParams();
    // Derive OKLCH L/C for this specific register/dynamic
    const refHex = jzToHex(cfg.jz, cfg.cz, 180);
    const refOk = hexToOklch(refHex);

    console.log(`--- ${cfg.name} ---`);
    console.log('Hue            JzCzhz ΔE2000   OKLCH ΔE2000   JzCzhz hex   OKLCH hex');
    console.log('────────────── ────────────── ────────────── ──────────── ────────────');

    const jzDEs: number[] = [];
    const okDEs: number[] = [];

    for (let i = 0; i < warmHues.length; i++) {
      const hz = warmHues[i];

      const jzIntent = new CC('jzczhz', [cfg.jz, cfg.cz, hz]);
      const okIntent = new CC('oklch', [refOk.L, refOk.C, hz]);

      const jzHex = jzToHex(cfg.jz, cfg.cz, hz);
      const okHex = oklchToHex(refOk.L, refOk.C, hz);

      const jzDE = jzIntent.deltaE(new CC(jzHex), '2000');
      const okDE = okIntent.deltaE(new CC(okHex), '2000');
      jzDEs.push(jzDE);
      okDEs.push(okDE);

      console.log(
        `${warmNames[i].padEnd(15)}` +
        `${jzDE.toFixed(2).padStart(12)}   ` +
        `${okDE.toFixed(2).padStart(12)}   ` +
        `${jzHex.padStart(10)}   ${okHex.padStart(10)}`
      );
    }

    const jzSum = jzDEs.reduce((a, b) => a + b, 0);
    const okSum = okDEs.reduce((a, b) => a + b, 0);
    jzGrandSum += jzSum;
    okGrandSum += okSum;

    console.log('────────────── ────────────── ──────────────');
    console.log(`Mean                  ${mean(jzDEs).toFixed(2).padStart(12)}   ${mean(okDEs).toFixed(2).padStart(12)}`);
    console.log(`Max                   ${Math.max(...jzDEs).toFixed(2).padStart(12)}   ${Math.max(...okDEs).toFixed(2).padStart(12)}`);
    console.log(`Sum                   ${jzSum.toFixed(2).padStart(12)}   ${okSum.toFixed(2).padStart(12)}`);
    console.log();
  }

  console.log(`Grand total ΔE2000:   JzCzhz=${jzGrandSum.toFixed(2)}   OKLCH=${okGrandSum.toFixed(2)}`);
  console.log(`\n→ ${winner(jzGrandSum, okGrandSum, true)} (less warm-hue render damage)\n`);
}

/**
 * B3: Rendered cross-hue consistency.
 *
 * All 12 hues at soprano/mp rendered to sRGB.
 * Measures variation in:
 *   - XYZ relative luminance Y (physical, not perceptual)
 *   - CIELAB chroma C* (imperfect but independent third space)
 *
 * These are practical metrics for "do all 12 hues feel similar weight?"
 * They are NOT intrinsic space properties — clipping affects the result.
 */
function testB3_renderedConsistency() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('B3: RENDERED CROSS-HUE CONSISTENCY');
  console.log('All 12 hues at soprano/mp rendered to sRGB.');
  console.log('Variation in relative luminance (Y) and CIELAB chroma (C*).');
  console.log('These are rendered-output metrics, not intrinsic space tests.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();

  const jzLums: number[] = [], okLums: number[] = [];
  const jzLabC: number[] = [], okLabC: number[] = [];

  console.log('Hue            Jz Y       OK Y       Jz C*      OK C*      Jz hex     OK hex');
  console.log('────────────── ────────── ────────── ────────── ────────── ────────── ──────────');

  for (let i = 0; i < 12; i++) {
    const hz = HUES_12[i];
    const jzHex = jzToHex(JZ_SOPRANO, CZ_MP, hz);
    const okHex = oklchToHex(ok.sopranoL, ok.mpC, hz);

    const jzY = safe(new CC(jzHex).to('xyz-d65').coords[1]);
    const okY = safe(new CC(okHex).to('xyz-d65').coords[1]);
    const jzC = safe(new CC(jzHex).to('lch').coords[1]);
    const okC = safe(new CC(okHex).to('lch').coords[1]);

    jzLums.push(jzY); okLums.push(okY);
    jzLabC.push(jzC); okLabC.push(okC);

    console.log(
      `${HUE_NAMES[i].padEnd(15)}` +
      `${jzY.toFixed(4).padStart(9)}  ` +
      `${okY.toFixed(4).padStart(9)}  ` +
      `${jzC.toFixed(1).padStart(9)}  ` +
      `${okC.toFixed(1).padStart(9)}  ` +
      `${jzHex.padStart(9)}  ${okHex.padStart(9)}`
    );
  }

  console.log('────────────── ────────── ────────── ────────── ────────── ────────── ──────────');
  const jzYCV = cv(jzLums), okYCV = cv(okLums);
  const jzCCV = cv(jzLabC), okCCV = cv(okLabC);
  console.log(`Y CV (luminance)   ${(jzYCV * 100).toFixed(1).padStart(7)}%  ${(okYCV * 100).toFixed(1).padStart(7)}%`);
  console.log(`C* CV (chroma)     ${(jzCCV * 100).toFixed(1).padStart(7)}%  ${(okCCV * 100).toFixed(1).padStart(7)}%`);
  console.log();
  console.log(`Luminance: → ${winner(jzYCV, okYCV, true)} (more uniform rendered Y)`);
  console.log(`Chroma:    → ${winner(jzCCV, okCCV, true)} (more uniform rendered C*)\n`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// LAYER C: TRUE ROUND-TRIP STABILITY
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * C1: Same-space round-trip accuracy.
 *
 * Design color → sRGB hex (clipped) → back to the SAME design space.
 * Measures coordinate drift in native units AND ΔE2000.
 * This is the real round-trip test.
 */
function testC1_roundTrip() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('C1: SAME-SPACE ROUND-TRIP ACCURACY');
  console.log('Design → sRGB (clipped) → back to same design space.');
  console.log('Coordinate drift in native units + ΔE2000 of reconstructed.');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const ok = deriveOklchParams();

  console.log('          ─── JzCzhz ───────────────────     ─── OKLCH ─────────────────────');
  console.log('Hue       ΔJz     ΔCz     Δhz    ΔE2000     ΔL      ΔC      Δh     ΔE2000');
  console.log('───────── ─────── ─────── ─────── ──────     ─────── ─────── ─────── ──────');

  const jzDEs: number[] = [];
  const okDEs: number[] = [];

  for (let i = 0; i < 12; i++) {
    const hz = HUES_12[i];

    // JzCzhz round-trip
    const jzHex = jzToHex(JZ_SOPRANO, CZ_MP, hz);
    const jzBack = hexToJz(jzHex);
    const dJz = Math.abs(jzBack.Jz - JZ_SOPRANO);
    const dCz = Math.abs(jzBack.Cz - CZ_MP);
    let dHz = Math.abs(jzBack.hz - hz);
    if (dHz > 180) dHz = 360 - dHz;
    const jzDE = deltaE2000raw('jzczhz', [JZ_SOPRANO, CZ_MP, hz], 'jzczhz', [jzBack.Jz, jzBack.Cz, jzBack.hz]);
    jzDEs.push(jzDE);

    // OKLCH round-trip
    const okHex = oklchToHex(ok.sopranoL, ok.mpC, hz);
    const okBack = hexToOklch(okHex);
    const dL = Math.abs(okBack.L - ok.sopranoL);
    const dC = Math.abs(okBack.C - ok.mpC);
    let dH = Math.abs(okBack.h - hz);
    if (dH > 180) dH = 360 - dH;
    const okDE = deltaE2000raw('oklch', [ok.sopranoL, ok.mpC, hz], 'oklch', [okBack.L, okBack.C, okBack.h]);
    okDEs.push(okDE);

    console.log(
      `${HUE_NAMES[i].padEnd(10)}` +
      `${dJz.toFixed(4).padStart(6)}  ${dCz.toFixed(4).padStart(6)}  ${dHz.toFixed(1).padStart(5)}°  ${jzDE.toFixed(2).padStart(5)}     ` +
      `${dL.toFixed(4).padStart(6)}  ${dC.toFixed(4).padStart(6)}  ${dH.toFixed(1).padStart(5)}°  ${okDE.toFixed(2).padStart(5)}`
    );
  }

  console.log('───────── ─────── ─────── ─────── ──────     ─────── ─────── ─────── ──────');
  const jzM = mean(jzDEs), okM = mean(okDEs);
  console.log(`Mean ΔE2000                        ${jzM.toFixed(2).padStart(5)}                              ${okM.toFixed(2).padStart(5)}`);
  console.log(`Max ΔE2000                         ${Math.max(...jzDEs).toFixed(2).padStart(5)}                              ${Math.max(...okDEs).toFixed(2).padStart(5)}`);
  console.log(`\n→ ${winner(jzM, okM, true)} (less round-trip drift)\n`);
}

// =============================================================================
// MAIN
// =============================================================================

function main() {
  console.log('\n╔═══════════════════════════════════════════════════════════════╗');
  console.log('║     COLOR SPACE COMPARISON: JzCzhz vs OKLCH                 ║');
  console.log('║     Ground truth: ΔE2000 (CIELAB — independent of both)     ║');
  console.log('║     Context: Hatsune Miku Theme (12-hue, sRGB output)       ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  console.log('┌─────────────────────────────────────────────────────────────┐');
  console.log('│ LAYER A: INTRINSIC DESIGN-SPACE BEHAVIOR                   │');
  console.log('│ Tests the space itself. In-gamut only. No sRGB clipping.   │');
  console.log('└─────────────────────────────────────────────────────────────┘\n');

  testA1_hueLinearity();
  testA2_lightnessUniformity();
  testA3_chromaUniformity();

  console.log('┌─────────────────────────────────────────────────────────────┐');
  console.log('│ LAYER B: RENDERED sRGB PERFORMANCE                         │');
  console.log('│ Practical output quality. Clipping is part of measurement. │');
  console.log('└─────────────────────────────────────────────────────────────┘\n');

  testB1_renderFidelity();
  testB1b_gamutCoverage();
  testB2_warmHueRobustness();
  testB3_renderedConsistency();

  console.log('┌─────────────────────────────────────────────────────────────┐');
  console.log('│ LAYER C: TRUE ROUND-TRIP STABILITY                         │');
  console.log('│ Design → sRGB → same design space. Coordinate recovery.   │');
  console.log('└─────────────────────────────────────────────────────────────┘\n');

  testC1_roundTrip();

  console.log('═══════════════════════════════════════════════════════════════');
  console.log('SUMMARY');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('Layer A tests intrinsic space quality (pure design behavior).');
  console.log('Layer B tests practical sRGB output (engineering reality).');
  console.log('Layer C tests round-trip coordinate recovery.');
  console.log();
  console.log('A space can win Layer A but lose Layer B, or vice versa.');
  console.log('The right choice depends on which layer matters more');
  console.log('for your specific use case.');
  console.log('═══════════════════════════════════════════════════════════════\n');
}

main();
