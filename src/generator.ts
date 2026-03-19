/**
 * Hatsune Miku Theme - Generator
 *
 * Compiles TypeScript source into VS Code theme JSON and
 * portable targets (terminals, editors, palette).
 */

import * as fs from 'fs';
import * as path from 'path';

import { createWorkbenchColors, createTokenColors, createSemanticTokenColors } from './theme';
import { generateVariantTokens, type ThemeVariant } from './tokens';
import type { SemanticTokens } from './tokens/types';
import { createPalette } from './targets/palette';
import { createAlacrittyTheme } from './targets/alacritty';
import { createKittyTheme } from './targets/kitty';
import { createWezTermTheme } from './targets/wezterm';
import { createWindowsTerminalTheme } from './targets/windows-terminal';
import { createITerm2Theme } from './targets/iterm2';
import { createGhosttyTheme } from './targets/ghostty';
import { createFootTheme } from './targets/foot';
import { createXresourcesTheme } from './targets/xresources';
import { createKonsoleTheme } from './targets/konsole';
import { createWarpTheme } from './targets/warp';
import { createNeovimTheme } from './targets/neovim';
import { createHelixTheme } from './targets/helix';
import { createZedTheme } from './targets/zed';
import { createSublimeTheme } from './targets/sublime';

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
// TARGET TABLE
// =============================================================================

interface Target {
  filename: (suffix: string) => string;
  generate: (tokens: SemanticTokens, variant: VariantDefinition) => string;
}

const targets: Target[] = [
  // Palette (bridge for external consumers)
  {
    filename: (s) => `palette${s}.json`,
    generate: (t) => JSON.stringify(createPalette(t), null, 2),
  },
  // Terminal emulators
  {
    filename: (s) => `alacritty${s}.toml`,
    generate: (t) => createAlacrittyTheme(t),
  },
  {
    filename: (s) => `kitty${s}.conf`,
    generate: (t) => createKittyTheme(t),
  },
  {
    filename: (s) => `wezterm${s}.lua`,
    generate: (t) => createWezTermTheme(t),
  },
  {
    filename: (s) => `windows-terminal${s}.json`,
    generate: (t, v) => JSON.stringify(createWindowsTerminalTheme(t, v.name), null, 2),
  },
  {
    filename: (s) => `iterm2${s}.itermcolors`,
    generate: (t) => createITerm2Theme(t),
  },
  {
    filename: (s) => `ghostty${s}`,
    generate: (t) => createGhosttyTheme(t),
  },
  {
    filename: (s) => `foot${s}.ini`,
    generate: (t) => createFootTheme(t),
  },
  {
    filename: (s) => `xresources${s}`,
    generate: (t) => createXresourcesTheme(t),
  },
  {
    filename: (s) => `konsole${s}.colorscheme`,
    generate: (t, v) => createKonsoleTheme(t, v.name),
  },
  {
    filename: (s) => `warp${s}.yaml`,
    generate: (t, v) => createWarpTheme(t, v.type),
  },
  // Editors
  {
    filename: (s) => `hatsune-miku${s}.lua`,
    generate: (t, v) => createNeovimTheme(t, v.type),
  },
  {
    filename: (s) => `hatsune-miku${s}.toml`,
    generate: (t) => createHelixTheme(t),
  },
  {
    filename: (s) => `hatsune-miku${s}.zed.json`,
    generate: (t, v) => JSON.stringify(createZedTheme(t, v.type, v.name), null, 2),
  },
  {
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

const mode = process.argv[2]; // 'vscode', 'targets', or undefined (all)
const themesDir = path.resolve(__dirname, '../themes');
const targetsDir = path.resolve(themesDir, 'targets');

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

  // Portable targets
  if (!mode || mode === 'targets') {
    fs.mkdirSync(targetsDir, { recursive: true });

    for (const target of targets) {
      const filename = target.filename(variant.suffix);
      fs.writeFileSync(path.join(targetsDir, filename), target.generate(tokens, variant));
    }
    console.log(`Targets: ${variant.name} (${targets.length} files)`);
  }
}
