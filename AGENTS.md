## Build Commands

```bash
npm run build          # Full build: VS Code themes + all ports
npm run build:vscode   # VS Code themes only
npm run build:ports    # Terminal/editor ports only
```

Output:
- `themes/*.json` — VS Code themes (dark + light)
- `ports/{app}/` — portable ports (terminals, editors, palette)
- `docs/SCORE-*.md` — generated measurement tables

## Architecture

```
src/palette/ → src/tokens/ → src/theme/   → src/generator.ts → themes/*.json
  (colors)     (semantic)    (VS Code)       (compiler)         (VS Code output)
                            src/ports/   →                    → ports/{app}/*
                            (portable)                          (terminals, editors, palette)
```

Three-layer token system: **Primitives** (`primitives.ts`) → **Semantic Tokens** (`dark/`, `light/` sub-modules) → **Variants** (`variants.ts`). All theme files (`src/theme/`) import from `tokens` — no direct palette imports.

Read `docs/DESIGN.md` (dark) for all design rules: the twelve-tone hue system, the score (hue → token mapping), ensemble rule (soprano/mp), departures, composition principles, four voices, five materials, background tiers, brackets, terminal, symbol icons, overlays, and accessibility principles. Read `docs/DESIGN-LIGHT.md` (light — Snow Miku 2026) for the warm cream/cool blue spatial split, per-hue register system, and patisserie-derived palette.

## Readability Thresholds

Validated by `npm run readability:dark` or `npm run readability:light` (add `-- --verbose` for full results).
Portable palette: `npm run readability:ports` (APCA + CVD for core fg/bg pairs shared by all ports).

## Numeric Truth

Measured values (coordinates, hexes, Lc, ΔEz) live ONLY in the generated
`docs/SCORE-DARK.md` / `docs/SCORE-LIGHT.md` (`npm run docs:gen`, part of
every build). Never add measured numbers to the DESIGN documents — extend
`src/tools/docgen.ts` instead. DESIGN docs explain intent; SCORE files are
the measurement. The readability gates exit non-zero when not ready
(hue distribution is advisory — pairwise ΔEz/CVD gates own confusability).
