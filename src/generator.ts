/**
 * Hatsune Miku Theme - Generator
 *
 * Compiles TypeScript source into VS Code theme JSON.
 * Supports multi-variant generation (dark, light).
 */

import * as fs from 'fs';
import * as path from 'path';

import { createWorkbenchColors, createTokenColors, createSemanticTokenColors } from './theme';
import { generateVariantTokens } from './tokens';

// =============================================================================
// THEME METADATA
// =============================================================================

interface VariantDefinition {
  id: string;
  name: string;
  type: 'dark' | 'light';
  filename: string;
}

const variants: VariantDefinition[] = [
  {
    id: 'dark',
    name: 'Hatsune Miku Theme',
    type: 'dark',
    filename: 'hatsune-miku-theme-color-theme.json',
  },
  {
    id: 'light',
    name: 'Hatsune Miku Theme (Snow Miku)',
    type: 'light',
    filename: 'hatsune-miku-snow-color-theme.json',
  },
];

// =============================================================================
// THEME GENERATION
// =============================================================================

interface VSCodeTheme {
  $schema: string;
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting: boolean;
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

function generateTheme(variant: VariantDefinition): VSCodeTheme {
  const tokens = generateVariantTokens(variant.type);
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
// FILE OUTPUT
// =============================================================================

function writeTheme(outputPath: string, variant: VariantDefinition): void {
  const theme = generateTheme(variant);
  const json = JSON.stringify(theme, null, '\t');

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, json, 'utf-8');
  console.log(`Theme generated: ${outputPath}`);

  const colorCount = Object.keys(theme.colors).length;
  const tokenCount = theme.tokenColors.length;
  const semanticCount = Object.keys(theme.semanticTokenColors).length;
  console.log(`  - Workbench colors: ${colorCount}`);
  console.log(`  - Token color rules: ${tokenCount}`);
  console.log(`  - Semantic token rules: ${semanticCount}`);
}

// =============================================================================
// MAIN
// =============================================================================

const themesDir = path.resolve(__dirname, '../themes');

for (const variant of variants) {
  const outputFile = path.join(themesDir, variant.filename);
  writeTheme(outputFile, variant);
}
