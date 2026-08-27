/**
 * Theme Registry — the single source of truth for every theme this
 * project ships.
 *
 * The narrow waist of the build: a theme enters as a `Theme` value
 * (identity + polarity + its SemanticTokens IR); every output — VS Code
 * JSON, ports, web CSS, SCORE docs — is an `Artifact` produced by an
 * `Emitter`. Adding a theme = composing its tokens and adding one entry
 * to `themes`. Adding a target = adding one Emitter in the generator.
 * The two axes never touch each other.
 */

import { createDarkSemanticTokens } from './tokens/dark';
import { createLightSemanticTokens } from './tokens/light';
import type { Polarity } from './tokens';
import type { SemanticTokens } from './tokens/types';

export interface Theme {
  /** Stable identity ('miku', 'snow-2026', ...). */
  id: string;
  /** Display name (VS Code theme name, terminal scheme name). */
  name: string;
  polarity: Polarity;
  /**
   * Port filename slug (`hatsune-miku-<slug>.*`). The flagship pair keeps
   * the published 'dark'/'light' names; new themes use their id.
   */
  slug: string;
  /** VS Code theme JSON filename — locked by the published extension. */
  vscodeFilename: string;
  /**
   * Carries the public web contract (`data-hm-theme="dark"/"light"`).
   * Exactly one flagship per polarity — validated below.
   */
  flagship?: boolean;
  tokens: SemanticTokens;
}

export interface Artifact {
  /** Repo-root-relative output path. */
  path: string;
  content: string;
}

export type Emitter = (themes: readonly Theme[]) => Artifact[];

/**
 * Registry invariants, enforced at construction so a bad entry fails the
 * build (and every tool) loudly instead of silently overwriting artifacts:
 * `id`/`slug`/`vscodeFilename` are filename components — duplicates would
 * clobber another theme's output; the web contract needs exactly one
 * flagship of each polarity.
 */
const validate = (all: readonly Theme[]): readonly Theme[] => {
  for (const key of ['id', 'slug', 'vscodeFilename'] as const) {
    const values = all.map((theme) => theme[key]);
    const dup = values.find((value, i) => values.indexOf(value) !== i);
    if (dup !== undefined) throw new Error(`theme registry: duplicate ${key} '${dup}'`);
  }
  for (const polarity of ['dark', 'light'] as const) {
    const count = all.filter((t) => t.flagship && t.polarity === polarity).length;
    if (count !== 1) throw new Error(`theme registry: expected exactly one ${polarity} flagship, found ${count}`);
  }
  return all;
};

export const themes: readonly Theme[] = validate([
  {
    id: 'miku',
    name: 'Hatsune Miku',
    polarity: 'dark',
    slug: 'dark',
    vscodeFilename: 'hatsune-miku-theme-color-theme.json',
    flagship: true,
    tokens: createDarkSemanticTokens(),
  },
  {
    id: 'snow-2026',
    name: 'Hatsune Miku (Snow Miku)',
    polarity: 'light',
    slug: 'light',
    vscodeFilename: 'hatsune-miku-snow-color-theme.json',
    flagship: true,
    tokens: createLightSemanticTokens(),
  },
]);

/** The flagship theme carrying the public web contract for a polarity. */
export const flagship = (polarity: Polarity): Theme =>
  themes.find((theme) => theme.flagship && theme.polarity === polarity)!; // exists — validate() enforces it
