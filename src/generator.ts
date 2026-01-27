/**
 * Hatsune Miku Theme - Generator
 *
 * Compiles TypeScript source into VS Code theme JSON
 */

import * as fs from 'fs';
import * as path from 'path';

import { palette } from './palette';
import { workbenchColors, tokenColors, semanticTokenColors } from './theme';

// =============================================================================
// THEME METADATA
// =============================================================================

interface ThemeMetadata {
  $schema: string;
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting: boolean;
}

const metadata: ThemeMetadata = {
  $schema: 'vscode://schemas/color-theme',
  name: 'Hatsune Miku Theme',
  type: 'dark',
  semanticHighlighting: true,
};

// =============================================================================
// PALETTE DOCUMENTATION (preserved in output for reference)
// =============================================================================

function generatePaletteDocumentation() {
  return {
    _description: 'Hatsune Miku Theme - Character Design Palette Reference',

    _designPhilosophy: {
      _identity: `${palette.mikuV3.hair.base} - THE canonical Miku teal since 2007 (KEI design)`,
      _uiMapping: {
        identity: { version: 'V2/V3 Classic', color: palette.mikuV3.hair.base, usage: 'Primary brand, focus states' },
        stage: { version: 'Project SEKAI', color: palette.projectSekai.virtualSinger.hair.base, usage: 'Multi-cursor, stage elements' },
        modern: { version: 'NT', color: palette.mikuNT.hair.base, usage: 'Soft, organic elements' },
        accent: { version: 'Append', color: palette.mikuAppend.hair.base, usage: 'Vivid highlights' },
      },
    },

    // =========================================================================
    // CORE CHARACTER
    // =========================================================================
    _character: palette.character,

    // =========================================================================
    // VOICEBANK VARIANTS
    // =========================================================================
    _voicebanks: {
      mikuV2: palette.mikuV2,
      mikuAppend: palette.mikuAppend,
      mikuV3: palette.mikuV3,
      mikuV3English: palette.mikuV3English,
      mikuV4X: palette.mikuV4X,
      mikuV4Chinese: palette.mikuV4Chinese,
      mikuNT: palette.mikuNT,
    },

    // =========================================================================
    // DERIVATIVE CHARACTERS
    // =========================================================================
    _derivatives: {
      sakuraMiku: palette.sakuraMiku,
      miku15thAnniversary: palette.miku15thAnniversary,
      miku16thAnniversary: palette.miku16thAnniversary,
      gundam45thMiku: palette.gundam45thMiku,
      lawson50thMiku: palette.lawson50thMiku,
    },

    // =========================================================================
    // ANNUAL EVENTS
    // =========================================================================
    _events: {
      snowMiku: palette.snowMiku,
      magicalMirai: palette.magicalMirai,
      mikuExpo: palette.mikuExpo,
      digitalStars: palette.digitalStars,
    },

    // =========================================================================
    // GAME APPEARANCES
    // =========================================================================
    _games: {
      projectSekai: palette.projectSekai,
    },
  };
}

// =============================================================================
// THEME GENERATION
// =============================================================================

interface VSCodeTheme {
  $schema: string;
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting: boolean;
  _palette: ReturnType<typeof generatePaletteDocumentation>;
  colors: Record<string, string>;
  tokenColors: Array<{
    name: string;
    scope: string | string[];
    settings: {
      foreground?: string;
      fontStyle?: string;
    };
  }>;
  semanticTokenColors: Record<string, unknown>;
}

function generateTheme(): VSCodeTheme {
  return {
    ...metadata,
    _palette: generatePaletteDocumentation(),
    colors: workbenchColors,
    tokenColors: tokenColors,
    semanticTokenColors: semanticTokenColors,
  };
}

// =============================================================================
// FILE OUTPUT
// =============================================================================

function writeTheme(outputPath: string): void {
  const theme = generateTheme();
  const json = JSON.stringify(theme, null, '\t');

  // Ensure output directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, json, 'utf-8');
  console.log(`✓ Theme generated: ${outputPath}`);

  // Print some stats
  const colorCount = Object.keys(workbenchColors).length;
  const tokenCount = tokenColors.length;
  const semanticCount = Object.keys(semanticTokenColors).length;
  console.log(`  - Workbench colors: ${colorCount}`);
  console.log(`  - Token color rules: ${tokenCount}`);
  console.log(`  - Semantic token rules: ${semanticCount}`);
}

// =============================================================================
// MAIN
// =============================================================================

const outputFile = path.resolve(
  __dirname,
  '../themes/hatsune-miku-theme-color-theme.json'
);

writeTheme(outputFile);
