/**
 * Hatsune Miku Theme - Generator
 *
 * The backend of the build: folds every registered Theme through every
 * Emitter and writes the resulting Artifacts. Themes live in registry.ts;
 * this file only knows how to turn a Theme into output files.
 *
 * Usage: tsx src/generator.ts [vscode|ports|docs]
 *   (no mode = everything; SCORE docs are emitted in every mode)
 */

import * as fs from 'fs';
import * as path from 'path';

import { themes, flagship, type Theme, type Artifact, type Emitter } from './registry';
import { createWorkbenchColors, createTokenColors, createSemanticTokenColors } from './theme';
import { createScoreDocs } from './tools/docgen';
import { createPalette } from './ports/palette';
import { createAlacrittyTheme } from './ports/alacritty';
import { createKittyTheme } from './ports/kitty';
import { createWezTermTheme } from './ports/wezterm';
import { createWindowsTerminalTheme } from './ports/windows-terminal';
import { createITerm2Theme } from './ports/iterm2';
import { createGhosttyTheme } from './ports/ghostty';
import { createFootTheme } from './ports/foot';
import { createXresourcesTheme } from './ports/xresources';
import { createKonsoleTheme } from './ports/konsole';
import { createWarpTheme } from './ports/warp';
import { createNeovimTheme } from './ports/neovim';
import { createHelixTheme } from './ports/helix';
import { createZedTheme } from './ports/zed';
import { createSublimeTheme } from './ports/sublime';
import { createWebPreview } from './ports/web-preview';
import {
  WEB_THEME_ARTIFACTS,
  createWebCss,
  createWebTokenDocument,
} from './ports/web';

// =============================================================================
// EMITTERS
// =============================================================================

/** Lift a per-theme renderer into an Emitter. */
const perTheme = (emit: (theme: Theme) => Artifact): Emitter =>
  (all) => all.map(emit);

const json = (value: unknown) => JSON.stringify(value, null, 2);

// VS Code theme JSON
const vscode: Emitter = perTheme((theme) => ({
  path: `themes/${theme.vscodeFilename}`,
  content: JSON.stringify({
    $schema: 'vscode://schemas/color-theme',
    name: theme.name,
    type: theme.polarity,
    semanticHighlighting: true,
    colors: createWorkbenchColors(theme.tokens, theme.polarity),
    tokenColors: createTokenColors(theme.tokens),
    semanticTokenColors: createSemanticTokenColors(theme.tokens),
  }, null, '\t'),
}));

// Per-theme ports. Filename: `${base ?? 'hatsune-miku'}-${slug}${ext ?? ''}`.
interface Port {
  dir: string;
  ext?: string;
  base?: string;
  render: (theme: Theme) => string;
}

const portTable: Port[] = [
  // Palette bridge + Web design tokens (DTCG 2025.10)
  { dir: 'palette', ext: '.json', render: ({ tokens }) => json(createPalette(tokens)) },
  { dir: 'web', base: WEB_THEME_ARTIFACTS.basename, ext: '.tokens.json', render: ({ tokens, polarity }) => `${json(createWebTokenDocument(tokens, polarity))}\n` },
  // Terminal emulators
  { dir: 'alacritty', ext: '.toml', render: ({ tokens }) => createAlacrittyTheme(tokens) },
  { dir: 'kitty', ext: '.conf', render: ({ tokens }) => createKittyTheme(tokens) },
  { dir: 'wezterm', ext: '.lua', render: ({ tokens }) => createWezTermTheme(tokens) },
  { dir: 'windows-terminal', ext: '.json', render: ({ tokens, name }) => json(createWindowsTerminalTheme(tokens, name)) },
  { dir: 'iterm2', ext: '.itermcolors', render: ({ tokens }) => createITerm2Theme(tokens) },
  { dir: 'ghostty', render: ({ tokens }) => createGhosttyTheme(tokens) },
  { dir: 'foot', ext: '.ini', render: ({ tokens }) => createFootTheme(tokens) },
  { dir: 'xresources', render: ({ tokens }) => createXresourcesTheme(tokens) },
  { dir: 'konsole', ext: '.colorscheme', render: ({ tokens, name }) => createKonsoleTheme(tokens, name) },
  { dir: 'warp', ext: '.yaml', render: ({ tokens, polarity }) => createWarpTheme(tokens, polarity) },
  // Editors
  { dir: 'neovim', ext: '.lua', render: ({ tokens, polarity }) => createNeovimTheme(tokens, polarity) },
  { dir: 'helix', ext: '.toml', render: ({ tokens }) => createHelixTheme(tokens) },
  { dir: 'zed', ext: '.json', render: ({ tokens, polarity, name }) => json(createZedTheme(tokens, polarity, name)) },
  { dir: 'sublime', ext: '.sublime-color-scheme', render: ({ tokens, name }) => json(createSublimeTheme(tokens, name)) },
];

const ports: Emitter[] = portTable.map((port) =>
  perTheme((theme) => ({
    path: `ports/${port.dir}/${port.base ?? 'hatsune-miku'}-${theme.slug}${port.ext ?? ''}`,
    content: port.render(theme),
  })),
);

// Web CSS + preview: one artifact spanning themes. The public contract
// (`data-hm-theme="dark"/"light"`) is pinned to the flagship theme of
// each polarity (explicit `flagship` flag, validated by the registry).
const webShared: Emitter = () => [
  { path: `ports/web/${WEB_THEME_ARTIFACTS.css}`, content: createWebCss(flagship('dark').tokens, flagship('light').tokens) },
  { path: 'ports/web/preview.html', content: createWebPreview() },
];

// =============================================================================
// DOC POINTERS
// =============================================================================

/**
 * Code cites design docs for rationale (a docs/<NAME>.md path, plus an
 * optional §N section) — the one edge in the artifact graph nothing
 * else verifies. Fail the build when a cited file or numbered section
 * is gone.
 */
const validateDocPointers = (root: string) => {
  const srcDir = path.join(root, 'src');
  const files = (fs.readdirSync(srcDir, { recursive: true }) as string[]).filter((f) => f.endsWith('.ts'));
  const errors: string[] = [];
  for (const rel of files) {
    const text = fs.readFileSync(path.join(srcDir, rel), 'utf8');
    for (const m of text.matchAll(/docs\/[A-Za-z0-9._-]+\.md(?:\s*§\s*(\d+))?/g)) {
      const docPath = m[0].split(/\s*§/)[0];
      const doc = path.join(root, docPath);
      if (!fs.existsSync(doc)) {
        errors.push(`src/${rel}: ${docPath} does not exist`);
      } else if (m[1] && !new RegExp(`^#+ ${m[1]}\\.`, 'm').test(fs.readFileSync(doc, 'utf8'))) {
        errors.push(`src/${rel}: ${docPath} has no section §${m[1]}`);
      }
    }
  }
  if (errors.length) throw new Error(`doc pointers:\n  ${errors.join('\n  ')}`);
};

// =============================================================================
// MAIN
// =============================================================================

const mode = process.argv[2]; // 'vscode' | 'ports' | 'docs' | undefined (all)
const ROOT = path.resolve(__dirname, '..');
validateDocPointers(ROOT);

const emitters: Emitter[] = [
  ...(!mode || mode === 'vscode' ? [vscode] : []),
  ...(!mode || mode === 'ports' ? [...ports, webShared] : []),
  createScoreDocs, // SCORE docs regenerate with every build mode
];

const artifacts = emitters.flatMap((emit) => emit(themes));
for (const artifact of artifacts) {
  const file = path.join(ROOT, artifact.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, artifact.content);
}

console.log(
  `Build${mode ? ` (${mode})` : ''}: ${themes.map((t) => t.name).join(', ')} → ${artifacts.length} artifacts`,
);
