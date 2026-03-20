/**
 * Hatsune Miku Theme - Generator
 *
 * Compiles TypeScript source into VS Code theme JSON and
 * portable ports (terminals, editors, palette).
 */

import * as fs from 'fs';
import * as path from 'path';

import { createWorkbenchColors, createTokenColors, createSemanticTokenColors } from './theme';
import { generateVariantTokens, type ThemeVariant } from './tokens';
import type { SemanticTokens } from './tokens/types';
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

// =============================================================================
// VARIANT DEFINITIONS
// =============================================================================

interface VariantDefinition {
  name: string;
  type: ThemeVariant;
  suffix: string;        // file suffix: '-dark' | '-light'
  vscodeFilename: string;
}

const variants: VariantDefinition[] = [
  {
    name: 'Hatsune Miku',
    type: 'dark',
    suffix: '-dark',
    vscodeFilename: 'hatsune-miku-theme-color-theme.json',
  },
  {
    name: 'Hatsune Miku (Snow Miku)',
    type: 'light',
    suffix: '-light',
    vscodeFilename: 'hatsune-miku-snow-color-theme.json',
  },
];

// =============================================================================
// PORT TABLE
// =============================================================================

interface Port {
  dir: string;
  filename: (suffix: string) => string;
  generate: (tokens: SemanticTokens, variant: VariantDefinition) => string;
}

const ports: Port[] = [
  // Palette (bridge for external consumers)
  {
    dir: 'palette',
    filename: (s) => `hatsune-miku${s}.json`,
    generate: (t) => JSON.stringify(createPalette(t), null, 2),
  },
  // Terminal emulators
  {
    dir: 'alacritty',
    filename: (s) => `hatsune-miku${s}.toml`,
    generate: (t) => createAlacrittyTheme(t),
  },
  {
    dir: 'kitty',
    filename: (s) => `hatsune-miku${s}.conf`,
    generate: (t) => createKittyTheme(t),
  },
  {
    dir: 'wezterm',
    filename: (s) => `hatsune-miku${s}.lua`,
    generate: (t) => createWezTermTheme(t),
  },
  {
    dir: 'windows-terminal',
    filename: (s) => `hatsune-miku${s}.json`,
    generate: (t, v) => JSON.stringify(createWindowsTerminalTheme(t, v.name), null, 2),
  },
  {
    dir: 'iterm2',
    filename: (s) => `hatsune-miku${s}.itermcolors`,
    generate: (t) => createITerm2Theme(t),
  },
  {
    dir: 'ghostty',
    filename: (s) => `hatsune-miku${s}`,
    generate: (t) => createGhosttyTheme(t),
  },
  {
    dir: 'foot',
    filename: (s) => `hatsune-miku${s}.ini`,
    generate: (t) => createFootTheme(t),
  },
  {
    dir: 'xresources',
    filename: (s) => `hatsune-miku${s}`,
    generate: (t) => createXresourcesTheme(t),
  },
  {
    dir: 'konsole',
    filename: (s) => `hatsune-miku${s}.colorscheme`,
    generate: (t, v) => createKonsoleTheme(t, v.name),
  },
  {
    dir: 'warp',
    filename: (s) => `hatsune-miku${s}.yaml`,
    generate: (t, v) => createWarpTheme(t, v.type),
  },
  // Editors
  {
    dir: 'neovim',
    filename: (s) => `hatsune-miku${s}.lua`,
    generate: (t, v) => createNeovimTheme(t, v.type),
  },
  {
    dir: 'helix',
    filename: (s) => `hatsune-miku${s}.toml`,
    generate: (t) => createHelixTheme(t),
  },
  {
    dir: 'zed',
    filename: (s) => `hatsune-miku${s}.json`,
    generate: (t, v) => JSON.stringify(createZedTheme(t, v.type, v.name), null, 2),
  },
  {
    dir: 'sublime',
    filename: (s) => `hatsune-miku${s}.sublime-color-scheme`,
    generate: (t, v) => JSON.stringify(createSublimeTheme(t, v.name), null, 2),
  },
];

// =============================================================================
// VS CODE THEME GENERATION
// =============================================================================

function generateVSCodeTheme(tokens: SemanticTokens, variant: VariantDefinition) {
  return {
    $schema: 'vscode://schemas/color-theme',
    name: variant.name,
    type: variant.type,
    semanticHighlighting: true,
    colors: createWorkbenchColors(tokens, variant.type),
    tokenColors: createTokenColors(tokens),
    semanticTokenColors: createSemanticTokenColors(tokens),
  };
}

// =============================================================================
// MAIN
// =============================================================================

const mode = process.argv[2]; // 'vscode', 'ports', or undefined (all)
const themesDir = path.resolve(__dirname, '../themes');
const portsDir = path.resolve(__dirname, '../ports');

for (const variant of variants) {
  // Generate tokens once per variant
  const tokens = generateVariantTokens(variant.type);

  // VS Code
  if (!mode || mode === 'vscode') {
    const outputFile = path.join(themesDir, variant.vscodeFilename);
    const theme = generateVSCodeTheme(tokens, variant);
    const json = JSON.stringify(theme, null, '\t');

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, json, 'utf-8');

    const colorCount = Object.keys(theme.colors).length;
    const tokenCount = theme.tokenColors.length;
    const semanticCount = Object.keys(theme.semanticTokenColors).length;
    console.log(`VS Code: ${variant.name} (${colorCount} colors, ${tokenCount} token rules, ${semanticCount} semantic rules)`);
  }

  // Portable ports
  if (!mode || mode === 'ports') {
    for (const port of ports) {
      const dir = path.join(portsDir, port.dir);
      fs.mkdirSync(dir, { recursive: true });
      const filename = port.filename(variant.suffix);
      fs.writeFileSync(path.join(dir, filename), port.generate(tokens, variant));
    }
    console.log(`Ports: ${variant.name} (${ports.length} files)`);
  }
}
