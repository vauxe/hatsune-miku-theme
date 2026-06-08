## Build Commands

```bash
npm run build          # Full build: VS Code themes + all ports
npm run build:vscode   # VS Code themes only
npm run build:ports    # Terminal/editor ports only
npm run compile        # TypeScript only
npm run watch          # TypeScript watch mode
npm run rebuild        # Clean dist/ and rebuild
```

Output:
- `themes/*.json` — VS Code themes (dark + light)
- `ports/{app}/` — portable ports (terminals, editors, palette)

## Architecture

```
src/palette/ → src/tokens/ → src/theme/   → src/generator.ts → themes/*.json
  (colors)     (semantic)    (VS Code)       (compiler)         (VS Code output)
                            src/ports/   →                    → ports/{app}/*
                            (portable)                          (terminals, editors, palette)
```

Three-layer token system: **Primitives** (`primitives.ts`) → **Semantic Tokens** (`dark/`, `light/` sub-modules) → **Variants** (`variants.ts`). All theme files (`src/theme/`) import from `tokens` — no direct palette imports.

Read `docs/DESIGN.md` (dark) for all design rules: the twelve-tone hue system, the score (hue → token mapping), ensemble rule (soprano/mp), departures, composition principles, four voices, five materials, background tiers, brackets, terminal, symbol icons, overlays, and accessibility principles. Read `docs/DESIGN-LIGHT.md` (light — Snow Miku 2026) for the warm cream/cool blue spatial split, per-hue register system, and patisserie-derived palette.

## Conventions

**Theme files** receive `t: SemanticTokens` as a function parameter (not a module-level import):
```typescript
import { withOpacity, type SemanticTokens } from '../tokens';
export function createWorkbenchColors(t: SemanticTokens, polarity: 'dark' | 'light') {
  const editorBg = t.ui.background.hex;
  const overlay = withOpacity(t.ui.accentPrimary.hex, '40');
}
```

**TextMate Scopes** (in `tokenColors.ts`, via shared `colors.ts`):
```typescript
{ name: 'Keyword', scope: ['keyword.control'], settings: { foreground: syntax.keyword } }
```

**Port files** (`src/ports/`) take `SemanticTokens` and produce a format-specific string or object:
```typescript
export function createAlacrittyTheme(t: SemanticTokens): string { ... }
export function createZedTheme(t: SemanticTokens, polarity: 'dark' | 'light', name: string): object { ... }
```

**Color Format:** `#RRGGBB` (6-digit), `#RRGGBBAA` (8-digit with alpha)

**Opacity Scale** (`primitives.ts`):
`subtle '08'` (3%), `light '15'` (8%), `medium '25'` (15%), `strong '40'` (25%), `heavy '60'` (38%), `solid '80'` (50%), `dense 'CC'` (80%), `opaque 'FF'` (100%)

## Readability Thresholds

Validated by `npm run readability:dark` or `npm run readability:light` (add `-- --verbose` for full results).
Portable palette: `npm run readability:ports` (APCA + CVD for core fg/bg pairs shared by all ports).

```
APCA Contrast (14px / 400 weight — standard code editor):
  Dark theme:
    Primary   Lc >= 75   (syntax tokens — body text minimum)
    Secondary Lc >= 60   (UI elements, operators — content text level)
    Tertiary  Lc >= 45   (ghost text, placeholders, inactive, comments)
  Light theme:
    Primary   Lc >= 65   (syntax tokens — warm cream reduces perceived contrast)
    Secondary Lc >= 55   (UI elements, operators)
    Tertiary  Lc >= 45   (ghost text, placeholders, inactive, comments)

  Optimal: Lc 90 (APCA preferred for 14px fluent reading). Aim for 85-95.
    Lc 75 is the floor for dark, not the target.

DEz Distinction (scaled x500):
  DISTINCTION_THRESHOLDS:          critical >= 18, standard >= 15
  ROLE_DISTINCTION_THRESHOLDS:     critical >= 18, high >= 15, standard >= 12

Chroma (dark / light):
  Primary   C% 8-45   / 8-100
  Secondary C% 5-45   / 5-100
  Accent    C% 8-60   / 8-100

CVD:  DEz >= 12 under protan/deutan/tritan simulation
Lightness Uniformity:  Jz spread <= 0.03 (dark) / <= 0.05 (light)
Hue Distribution:  minimum gap >= 20 degrees between adjacent hue families

UI Visibility:
  Selection DEz >= 8, Find match >= 12, Tab >= 3, Diff >= 15, Cursor Lc >= 60

Compound Background: Lc >= 60 on all overlay backgrounds (transient contexts)
  FG overrides skip their overlay (the override is tested instead)
```
