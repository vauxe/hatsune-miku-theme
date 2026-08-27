/**
 * Score generator — the authoritative numeric tables, generated from the
 * token source of truth.
 *
 * The design documents (docs/DESIGN.md, docs/DESIGN-LIGHT.md) explain
 * INTENT — why each voice sits where it sits. This generator emits WHAT
 * actually renders: design coordinates, rendered hex, rendered hue, APCA
 * Lc on the token's home background, and perceived loudness L**.
 * One fact, one place: hand-copied tables drift; generated tables cannot.
 *
 * Usage: npm run docs:gen   (also runs as part of npm run build)
 */

import type { Theme, Emitter } from '../registry';
import { parseHex } from '../tokens/role';
import { opacity } from '../tokens/primitives';
import type { SemanticRole } from '../tokens/types';
import { getAPCAContrast, chromaticLightness, blendAlpha, deltaEzHex } from './readability-color';

function row(name: string, r: SemanticRole, bg: string): string {
  const d = r.jzczhz;
  const p = parseHex(r.hex);
  const lc = Math.abs(getAPCAContrast(r.hex, bg).lc).toFixed(1);
  const loud = ` ${(chromaticLightness(r.hex)?.toFixed(1) ?? 'n/a').padStart(5)}`;
  return (
    `${name.padEnd(18)} ${d.Jz.toFixed(3)} ${d.Cz.toFixed(3)} ${String(Math.round(d.hz)).padStart(4)}   ` +
    `${r.hex}  ${p.hz.toFixed(0).padStart(4)}  ${lc.padStart(5)}${loud}`
  );
}

function table(
  title: string,
  entries: Array<[string, SemanticRole]>,
  bg: string,
  note?: string
): string {
  const head = 'token              Jz    Cz     hz    rendered  hz~   Lc      L**';
  const lines = entries.map(([n, r]) => row(n, r, bg));
  return [
    `### ${title}`,
    '',
    ...(note ? [note, ''] : []),
    '```',
    head,
    '═'.repeat(head.length),
    ...lines,
    '```',
    '',
  ].join('\n');
}

function generate(theme: Theme): string {
  const t = theme.tokens;
  const dark = theme.polarity === 'dark';
  const stage = t.ui.background.hex;
  const house = t.ui.backgroundHouse.hex;
  const s = t.syntax;

  const out: string[] = [
    `# The Score — ${dark ? 'Dark (Hatsune Miku)' : 'Light (Snow Miku 2026)'}`,
    '',
    '> GENERATED — do not edit. Regenerate with `npm run docs:gen`.',
    '> Columns: design JzCzhz → rendered hex, rendered hue, APCA Lc on the',
    "> token's home background, perceived loudness L** (Fairchild–Pirrotta).",
    '> Intent and rationale live in ' + (dark ? 'docs/DESIGN.md' : 'docs/DESIGN-LIGHT.md') + '.',
    '',
  ];

  out.push(table('The Ensemble', [
    ['keyword', s.keyword], ['variable', s.variable], ['parameter', s.parameter],
    ['property', s.property], ['function', s.function], ['method', s.method],
    ['tag', s.tag], ['attribute', s.attribute], ['class', s.class],
    ['struct', s.struct], ['enum', s.enum], ['interface', s.interface],
    ['string', s.string], ['regex', s.regex], ['constant', s.constant],
    ['number', s.number], ['boolean', s.boolean], ['enumMember', s.enumMember],
    ['type', s.type], ['typeParameter', s.typeParameter], ['macro', s.macro],
    ['operator', s.operator],
  ], stage));

  out.push(table('Departures', [
    ['comment', s.comment], ['commentDoc', s.commentDoc],
    ['punctuation', s.punctuation], ['variableLanguage', s.variableLanguage],
  ], stage));

  out.push(table('Signals', [
    ['status.error', t.status.error], ['status.warning', t.status.warning],
    ['status.info', t.status.info], ['status.success', t.status.success],
    ['errorForeground', t.ui.errorForeground],
  ], stage, 'Status hues are CVD-tuned.'));

  out.push(table('Git', [
    ['added', t.git.added], ['modified', t.git.modified], ['deleted', t.git.deleted],
    ['untracked', t.git.untracked], ['conflicting', t.git.conflicting],
    ['renamed', t.git.renamed], ['stageModified', t.git.stageModified],
    ['stageDeleted', t.git.stageDeleted], ['submodule', t.git.submodule],
  ], house, 'Lc measured on House (the explorer background).'));

  out.push(table('Terminal', [
    ['black', t.terminal.black], ['red', t.terminal.red], ['green', t.terminal.green],
    ['yellow', t.terminal.yellow], ['blue', t.terminal.blue], ['magenta', t.terminal.magenta],
    ['cyan', t.terminal.cyan], ['white', t.terminal.white],
    ['brightBlack', t.terminal.brightBlack], ['brightRed', t.terminal.brightRed],
    ['brightGreen', t.terminal.brightGreen], ['brightYellow', t.terminal.brightYellow],
    ['brightBlue', t.terminal.brightBlue], ['brightMagenta', t.terminal.brightMagenta],
    ['brightCyan', t.terminal.brightCyan], ['brightWhite', t.terminal.brightWhite],
  ], stage, 'Each normal/bright pair is asserted ΔEz ≥ 6 (the emphasis axis CLI tools rely on).'));

  out.push(table('Brackets', [
    ['bracket1', t.bracket.bracket1], ['bracket2', t.bracket.bracket2],
    ['bracket3', t.bracket.bracket3], ['bracket4', t.bracket.bracket4],
    ['bracket5', t.bracket.bracket5], ['bracket6', t.bracket.bracket6],
  ], stage, 'Adjacent pairs are asserted ΔEz ≥ 12 under Brettel protan/deutan/tritan.'));

  out.push(table('Symbol Icons', [
    ['property', t.symbol.property], ['field', t.symbol.field],
    ['function', t.symbol.function], ['method', t.symbol.method],
    ['constructor', t.symbol.constructor], ['class', t.symbol.class],
    ['struct', t.symbol.struct], ['enum', t.symbol.enum],
    ['package', t.symbol.package], ['string', t.symbol.string],
    ['reference', t.symbol.reference], ['interface', t.symbol.interface],
    ['folder', t.symbol.folder], ['array', t.symbol.array],
    ['variable', t.symbol.variable], ['constant', t.symbol.constant],
    ['number', t.symbol.number], ['boolean', t.symbol.boolean],
    ['enumMember', t.symbol.enumMember], ['typeParameter', t.symbol.typeParameter],
    ['module', t.symbol.module], ['namespace', t.symbol.namespace],
    ['operator', t.symbol.operator], ['snippet', t.symbol.snippet],
  ], stage));

  out.push(table('Support (built-ins)', [
    ['function', t.support.function], ['class', t.support.class],
    ['type', t.support.type], ['constant', t.support.constant],
    ['variable', t.support.variable],
  ], stage));

  out.push(table('Markdown', [
    ['heading', t.markdown.heading], ['headingPunct', t.markdown.headingPunctuation],
    ['codeBlock', t.markdown.codeBlock], ['quote', t.markdown.quote],
    ['linkUrl', t.markdown.linkUrl], ['inserted', t.markdown.inserted],
    ['deleted', t.markdown.deleted], ['alertImportant', t.markdown.alertImportant],
    ['alertNote', t.markdown.alertNote], ['alertTip', t.markdown.alertTip],
    ['alertWarning', t.markdown.alertWarning], ['alertCaution', t.markdown.alertCaution],
  ], stage));

  out.push(table('Debug', [
    ['name', t.debug.name], ['value', t.debug.value], ['string', t.debug.string],
    ['number', t.debug.number], ['boolean', t.debug.boolean],
    ['error', t.debug.error], ['type', t.debug.type],
  ], dark ? stage : house, dark ? undefined : 'Lc measured on House — light debug tokens are tuned for the sidebar.'));

  out.push(table('Text Tiers', [
    ['foreground', t.ui.foreground], ['foregroundMuted', t.ui.foregroundMuted],
    ['foregroundSubtle', t.ui.foregroundSubtle], ['tertiary', t.ui.tertiary],
    ['disabled', t.ui.disabled], ['ghostText', t.ui.ghostText],
    ['placeholder', t.ui.placeholder], ['whitespace', t.ui.whitespace],
    ['ruler', t.ui.ruler],
  ], stage));

  out.push(table('Accents & Cursor', [
    ['accentPrimary', t.ui.accentPrimary], ['accentSecondary', t.ui.accentSecondary],
    ['cursor', t.ui.cursor], ['link', t.ui.link], ['linkActive', t.ui.linkActive],
  ], stage));

  // Backgrounds: coordinates and hex only — a background has no Lc of its own.
  out.push([
    '### Backgrounds',
    '',
    '```',
    'tier               Jz    Cz     hz    hex',
    '═'.repeat(48),
    ...([['void', t.ui.backgroundVoid], ['stage', t.ui.background],
        ['house', t.ui.backgroundHouse], ['float', t.ui.backgroundFloat]] as Array<[string, SemanticRole]>)
      .map(([n, r]) => `${n.padEnd(18)} ${r.jzczhz.Jz.toFixed(3)} ${r.jzczhz.Cz.toFixed(3)} ${String(Math.round(r.jzczhz.hz)).padStart(4)}   ${r.hex}`),
    '```',
    '',
  ].join('\n'));

  // Overlay tints: source x alpha -> blended hex on Stage -> DEz vs Stage.
  // Alphas must derive from the hex opacity scale — rounded decimals
  // (0.08 vs 0x15 = 8.235%) publish blends VS Code does not render.
  const op = Object.fromEntries(
    Object.entries(opacity).map(([k, v]) => [k, parseInt(v, 16) / 255])
  ) as Record<keyof typeof opacity, number>;
  const tints: Array<[string, string, keyof typeof op]> = dark
    ? [
        ['engagement (teal)', t.ui.accentPrimary.hex, 'light'],
        ['engagement (teal)', t.ui.accentPrimary.hex, 'medium'],
        ['engagement (teal)', t.ui.accentPrimary.hex, 'strong'],
        ['engagement (teal)', t.ui.accentPrimary.hex, 'heavy'],
        ['selection (frost)', t.decorative.cursorLineFrost, 'light'],
        ['selection (frost)', t.decorative.cursorLineFrost, 'medium'],
        ['selection (frost)', t.decorative.cursorLineFrost, 'strong'],
        ['find (orange)', t.decorative.findMatchOverlay, 'strong'],
        ['diff added (negi)', t.git.added.hex, 'medium'],
        ['diff removed (rose)', t.decorative.diffRemoved, 'medium'],
      ]
    : [
        ['engagement (tonic)', t.ui.accentPrimary.hex, 'light'],
        ['engagement (tonic)', t.ui.accentPrimary.hex, 'medium'],
        ['selection (ice)', t.decorative.cursorLineFrost, 'light'],
        ['selection (ice)', t.decorative.cursorLineFrost, 'medium'],
        ['selection (ice)', t.decorative.cursorLineFrost, 'strong'],
        ['find (gingerbread)', t.decorative.findMatchOverlay, 'strong'],
      ];
  out.push([
    '### Overlay Tints (composited on Stage)',
    '',
    'Alpha compositing is nonlinear in sRGB; identity comes from voice and',
    'channel, visibility from the measured ΔEz below.',
    '',
    '```',
    'voice                 alpha     blended   ΔEz vs Stage',
    '═'.repeat(56),
    ...tints.map(([name, src, tier]) => {
      const blended = blendAlpha(src, stage, op[tier]).toUpperCase();
      const de = deltaEzHex(blended, stage) ?? 0;
      return `${name.padEnd(20)} ${String(Math.round(op[tier] * 100) + '%').padStart(4)} (${tier.padEnd(6)}) ${blended}  ${de.toFixed(1).padStart(5)}`;
    }),
    '```',
    '',
  ].join('\n'));

  return out.join('\n').trimEnd();
}

export const createScoreDocs: Emitter = (themes) =>
  themes.map((theme) => ({
    path: `docs/SCORE-${theme.slug.toUpperCase()}.md`,
    content: generate(theme) + '\n',
  }));
