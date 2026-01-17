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
    _description: 'Hatsune Miku Theme - All-Miku Synthesis (V2 → SEKAI)',

    _allMikuSynthesis: {
      _description: "Every Miku version mapped to UI layers - #39C5BB is THE identity",
      _versionMapping: {
        identity: { version: 'V2 Classic', color: '#39C5BB', reason: 'THE canonical Miku teal since 2007' },
        stage: { version: 'SEKAI', color: '#33CCBB', reason: 'Stage performance, multi-cursor' },
        functions: { version: 'NT', color: '#00BCD4', reason: 'Modern tech voice' },
        types: { version: 'Append Light', color: '#B2EBE7', reason: 'Airy structure' },
        hover: { version: 'Append Sweet', color: '#5FCEC8', reason: 'Warm, inviting' },
        focus: { version: 'V4X Soft', color: '#6DD4CD', reason: 'Gentle attention' },
        active: { version: 'V4X Hard', color: '#2B9E96', reason: 'Pressed/clicked' },
      },
      _frequencyVisualizer: {
        _description: 'Indent guides as audio spectrum across versions',
        bass: { version: 'Append Dark', color: '#1E8A82', level: 1 },
        low: { version: 'Append Solid', color: '#2AA69E', level: 2 },
        mid: { version: 'V2 Classic', color: '#39C5BB', level: 3 },
        high: { version: 'NT', color: '#3ED1C8', level: 4 },
        peak: { version: 'Append Vivid', color: '#00E5D4', level: 5 },
        ultra: { version: 'Append Light', color: '#A8EBE6', level: 6 },
      },
    },

    _sekaiReference: {
      _description: 'SEKAI Miku colors - used for stage/performance elements',
      imageColor: '#33CCBB',
      classroomPinkHighlight: '#FF6B9D',
      emptyHeterochromia: { turquoise: '#33CCBB', pink: '#FF80AB' },
      stageVibrancy: 'COLORFUL = bold, saturated, electric',
      usage: 'Secondary cursor, stage accents - NOT main identity',
    },

    _character: palette.character,
    _versions: palette.versions,
    _append: palette.append,
    _v4xVoice: palette.v4xVoice,
    _seasonal: palette.seasonal,

    _snowMiku: palette.snowMiku,
    _racingMiku: palette.racingMiku,
    _magicalMirai: palette.magicalMirai,
    _mikuExpo: palette.mikuExpo,
    _projectDiva: palette.projectDiva,
    _collaboration: palette.collaborations,
    _mikuNT: palette.mikuNT,
    _sakuraMiku: palette.sakuraMiku,
    _vocaloidFamily: palette.vocaloidFamily,

    _cryptonFamily: palette.cryptonFamily,
    _stage: palette.stage,
    _digital: palette.digital,
    _hologram: palette.hologram,
    _frequency: palette.frequency,

    _teals: palette.teals,
    _pinks: palette.pinks,
    _cyans: palette.cyans,
    _blacks: palette.blacks,
    _greys: palette.greys,
    _accents: palette.accents,
    _foregrounds: palette.foregrounds,
    _semantic: palette.semantic,
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
  '../themes/Hatsune Miku Theme-color-theme.json'
);

writeTheme(outputFile);
