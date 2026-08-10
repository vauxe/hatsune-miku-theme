/**
 * Port Readability Review
 *
 * Validates APCA contrast for the core fg/bg pairs shared by all ports and
 * target-specific format contracts for generated ports.
 * The full readability tool validates VS Code-specific keys; this validates
 * the portable palette that terminal and editor ports consume. Format checks
 * call the generators directly. This is a CI gate: reported failures set a
 * non-zero exit code.
 *
 * Usage:
 *   npx tsx src/tools/readability-ports.ts [--verbose]
 */

import { generateVariantTokens, type ThemeVariant } from '../tokens';
import type { SemanticTokens, SemanticRole } from '../tokens/types';
import { getAPCAContrast, deltaEzHex, checkCVDDistinction } from './readability-color';
import { APCA_THRESHOLDS, APCA_THRESHOLDS_LIGHT, CVD_DISTINCTION_THRESHOLD, UI_VISIBILITY } from './readability-constants';
import { selectionSurface } from '../ports/shared';
import { validatePortContracts } from './port-contracts';

// =============================================================================
// PAIR DEFINITIONS
// =============================================================================

interface ContrastPair {
  name: string;
  fg: (t: SemanticTokens) => string;
  bg: (t: SemanticTokens) => string;
  tier: 'primary' | 'secondary' | 'tertiary';
}

const syntaxPairs: ContrastPair[] = [
  { name: 'keyword', fg: t => t.syntax.keyword.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'variable', fg: t => t.syntax.variable.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'function', fg: t => t.syntax.function.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'string', fg: t => t.syntax.string.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'type', fg: t => t.syntax.type.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'class', fg: t => t.syntax.class.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'constant', fg: t => t.syntax.constant.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'parameter', fg: t => t.syntax.parameter.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'property', fg: t => t.syntax.property.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'number', fg: t => t.syntax.number.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'operator', fg: t => t.syntax.operator.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'punctuation', fg: t => t.syntax.punctuation.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'comment', fg: t => t.syntax.comment.hex, bg: t => t.ui.background.hex, tier: 'tertiary' },
];

const uiPairs: ContrastPair[] = [
  { name: 'foreground', fg: t => t.ui.foreground.hex, bg: t => t.ui.background.hex, tier: 'primary' },
  { name: 'foregroundMuted', fg: t => t.ui.foregroundMuted.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'foreground on house', fg: t => t.ui.foreground.hex, bg: t => t.ui.backgroundHouse.hex, tier: 'primary' },
  { name: 'foreground on float', fg: t => t.ui.foreground.hex, bg: t => t.ui.backgroundFloat.hex, tier: 'primary' },
  // Caret = thick non-text mark; same floor the VS Code gate's cursor check uses
  { name: 'cursor', fg: t => t.ui.cursor.hex, bg: t => t.ui.background.hex, tier: 'tertiary' },
  // Accent only appears in ports as marks and fills, never sustained
  // text — icon floor, not secondary (60 would force #39C5BB off its hex)
  { name: 'accent', fg: t => t.ui.accentPrimary.hex, bg: t => t.ui.background.hex, tier: 'tertiary' },
  // Alpha-less hosts show selectionSurface(); fg holds SECONDARY (above
  // the VS Code compound floor) because a flattened solid selection is a
  // sustained reading surface, not a transient wash. ANSI red/green may
  // persist over selections in some hosts — icon floor.
  { name: 'foreground on selection', fg: t => t.ui.foreground.hex, bg: t => selectionSurface(t), tier: 'secondary' },
  { name: 'term.red on selection', fg: t => t.terminal.red.hex, bg: t => selectionSurface(t), tier: 'tertiary' },
  { name: 'term.green on selection', fg: t => t.terminal.green.hex, bg: t => selectionSurface(t), tier: 'tertiary' },
];

const terminalPairs: ContrastPair[] = [
  { name: 'term.red', fg: t => t.terminal.red.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'term.green', fg: t => t.terminal.green.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'term.yellow', fg: t => t.terminal.yellow.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'term.blue', fg: t => t.terminal.blue.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'term.magenta', fg: t => t.terminal.magenta.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'term.cyan', fg: t => t.terminal.cyan.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'term.white', fg: t => t.terminal.white.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
];

// Terminal distinction: pairs that must be distinguishable under CVD
const terminalDistinctionPairs = [
  ['red', 'green'], ['red', 'yellow'], ['green', 'blue'],
  ['blue', 'magenta'], ['cyan', 'white'],
] as const;

// =============================================================================
// ANALYSIS
// =============================================================================

function getThreshold(tier: 'primary' | 'secondary' | 'tertiary', polarity: ThemeVariant): number {
  const thresholds = polarity === 'dark' ? APCA_THRESHOLDS : APCA_THRESHOLDS_LIGHT;
  return thresholds[tier];
}

interface Failure {
  name: string;
  type: 'CONTRAST' | 'CVD' | 'FORMAT';
  detail: string;
}

function validateVariant(polarity: ThemeVariant, verbose: boolean): Failure[] {
  const tokens = generateVariantTokens(polarity);
  const failures: Failure[] = [];
  const allPairs = [...syntaxPairs, ...uiPairs, ...terminalPairs];

  console.log(`\n=== ${polarity.toUpperCase()} ===`);

  // APCA contrast
  for (const pair of allPairs) {
    const fg = pair.fg(tokens);
    const bg = pair.bg(tokens);
    const result = getAPCAContrast(fg, bg);
    const lc = Math.abs(result.lc);
    const threshold = getThreshold(pair.tier, polarity);
    const pass = lc >= threshold;

    if (verbose || !pass) {
      const status = pass ? 'PASS' : 'FAIL';
      const symbol = pass ? '  ' : '! ';
      console.log(`${symbol}${status}  Lc ${lc.toFixed(1).padStart(5)} >= ${threshold}  ${pair.name} (${pair.tier})`);
    }

    if (!pass) {
      failures.push({
        name: pair.name,
        type: 'CONTRAST',
        detail: `Lc ${lc.toFixed(1)} < ${threshold} (${pair.tier})`,
      });
    }
  }

  // Terminal CVD distinction: worst post-simulation distance across the
  // three dichromacies — same model, threshold and helper as the VS Code gate
  const termMap = tokens.terminal as unknown as Record<string, SemanticRole>;
  for (const [a, b] of terminalDistinctionPairs) {
    const cvd = checkCVDDistinction(termMap[a].hex, termMap[b].hex);
    const pass = cvd.worstDeltaE >= CVD_DISTINCTION_THRESHOLD;

    if (verbose || !pass) {
      const status = pass ? 'PASS' : 'FAIL';
      const symbol = pass ? '  ' : '! ';
      console.log(`${symbol}${status}  CVD worst(${cvd.worstType}) DEz ${cvd.worstDeltaE.toFixed(0).padStart(4)} >= ${CVD_DISTINCTION_THRESHOLD}  term.${a} vs term.${b}`);
    }

    if (!pass) {
      failures.push({
        name: `term.${a} vs term.${b}`,
        type: 'CVD',
        detail: `worst ${cvd.worstType} DEz ${cvd.worstDeltaE.toFixed(0)} < ${CVD_DISTINCTION_THRESHOLD}`,
      });
    }
  }

  // Selection visibility: can you SEE the flattened selection at all?
  {
    const dez = deltaEzHex(selectionSurface(tokens), tokens.ui.background.hex) ?? 0;
    const pass = dez >= UI_VISIBILITY.selectionVisibility;
    if (verbose || !pass) {
      const status = pass ? 'PASS' : 'FAIL';
      console.log(`${pass ? '  ' : '! '}${status}  DEz ${dez.toFixed(1).padStart(5)} >= ${UI_VISIBILITY.selectionVisibility}  selection vs background`);
    }
    if (!pass) {
      failures.push({ name: 'selection vs background', type: 'CONTRAST', detail: `DEz ${dez.toFixed(1)} < ${UI_VISIBILITY.selectionVisibility}` });
    }
  }

  for (const failure of validatePortContracts(tokens)) {
    failures.push({ ...failure, type: 'FORMAT' });
    console.log(`! FAIL  ${failure.name}: ${failure.detail}`);
  }

  return failures;
}

// =============================================================================
// MAIN
// =============================================================================

const verbose = process.argv.includes('--verbose');

const darkFailures = validateVariant('dark', verbose);
const lightFailures = validateVariant('light', verbose);
const total = darkFailures.length + lightFailures.length;

console.log(`\n=== SUMMARY ===`);
console.log(`Dark:  ${darkFailures.length} failures`);
console.log(`Light: ${lightFailures.length} failures`);

if (total > 0) {
  console.log('\nFailing pairs:');
  for (const f of [...darkFailures, ...lightFailures]) {
    console.log(`  ${f.type}  ${f.name}: ${f.detail}`);
  }
  console.log('\nReview complete; inspect the failing pairs above.');
  process.exitCode = 1;
} else {
  console.log('\nAll port palette pairs and registered format contracts pass.');
}
