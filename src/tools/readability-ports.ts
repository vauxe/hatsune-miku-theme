/**
 * Port Readability Validation
 *
 * Validates APCA contrast for the core fg/bg pairs shared by all ports.
 * The full readability tool validates VS Code-specific keys; this validates
 * the portable palette that terminal and editor ports consume.
 *
 * Usage:
 *   npx tsx src/tools/readability-ports.ts [--verbose]
 */

import { generateVariantTokens, type ThemeVariant } from '../tokens';
import type { SemanticTokens, SemanticRole } from '../tokens/types';
import { getAPCAContrast, deltaEzHex } from './readability-color';
import { APCA_THRESHOLDS, APCA_THRESHOLDS_LIGHT, CVD_DISTINCTION_THRESHOLD } from './readability-constants';

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
  { name: 'cursor', fg: t => t.ui.cursor.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
  { name: 'accent', fg: t => t.ui.accentPrimary.hex, bg: t => t.ui.background.hex, tier: 'secondary' },
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
  type: 'CONTRAST' | 'CVD';
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

  // Terminal CVD distinction (deltaEzHex returns values on x500 scale)
  const termMap = tokens.terminal as unknown as Record<string, SemanticRole>;
  for (const [a, b] of terminalDistinctionPairs) {
    const dez = deltaEzHex(termMap[a].hex, termMap[b].hex) ?? 0;
    const pass = dez >= CVD_DISTINCTION_THRESHOLD;

    if (verbose || !pass) {
      const status = pass ? 'PASS' : 'FAIL';
      const symbol = pass ? '  ' : '! ';
      console.log(`${symbol}${status}  DEz ${dez.toFixed(0).padStart(4)} >= ${CVD_DISTINCTION_THRESHOLD}  term.${a} vs term.${b}`);
    }

    if (!pass) {
      failures.push({
        name: `term.${a} vs term.${b}`,
        type: 'CVD',
        detail: `DEz ${dez.toFixed(0)} < ${CVD_DISTINCTION_THRESHOLD}`,
      });
    }
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
  process.exit(1);
}

console.log('\nAll port palette pairs pass.');
