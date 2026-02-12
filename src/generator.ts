/**
 * Hatsune Miku Theme - Generator
 *
 * Compiles TypeScript source into VS Code theme JSON.
 * Supports multi-variant generation (dark, light).
 */

import * as fs from 'fs';
import * as path from 'path';

import { workbenchColors, tokenColors, semanticTokenColors } from './theme';

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
  // Future variant:
  // { id: 'light', name: 'Hatsune Miku Theme Light', type: 'light', filename: 'hatsune-miku-light-color-theme.json' },
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
  // Currently only dark variant is implemented
  // Future: use createSemanticTokens(variantPrimitives) to generate different palettes
  return {
    $schema: 'vscode://schemas/color-theme',
    name: variant.name,
    type: variant.type,
    semanticHighlighting: true,
    colors: workbenchColors,
    tokenColors: tokenColors,
    semanticTokenColors: semanticTokenColors,
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

const themesDir = path.resolve(__dirname, '../themes');

for (const variant of variants) {
  const outputFile = path.join(themesDir, variant.filename);
  writeTheme(outputFile, variant);
}
