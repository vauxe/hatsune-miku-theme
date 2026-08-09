## Build Commands

```bash
npm run build          # Full build: VS Code themes + all ports
npm run build:vscode   # VS Code themes only
npm run build:ports    # All portable ports
```

Output:

- `themes/*.json` — VS Code themes (dark + light)
- `ports/{app}/` — generated Web, terminal, editor, and palette ports
- `docs/SCORE-*.md` — generated measurement tables

## Architecture

```
src/palette/ → src/tokens/ → src/theme/   → src/generator.ts → themes/*.json
  (colors)     (semantic)    (VS Code)       (compiler)         (VS Code output)
                            src/ports/   →                    → ports/{app}/*
                            (portable)                          (Web, terminals, editors, palette)
```

Three-layer token system: **Primitives** (`primitives.ts`) → **Semantic Tokens** (`dark/`, `light/` sub-modules) → **Variants** (`variants.ts`). All theme files (`src/theme/`) import from `tokens` — no direct palette imports.

Web compatibility rules:

- Colors flow from `src/tokens/` through `src/ports/web.ts`; rebuild instead of editing generated `ports/web/*`.
- `--hm-*` plus `data-hm-theme="light"` and `"dark"` are public. `WEB_THEME_CUSTOM_PROPERTIES` locks names; renames or removals require migration.
- Sites use CSS; DTCG 2025.10 JSON is for tooling. Keep surface-specific text, opaque action pairs, and `npm run readability:web` green.

Read `docs/DESIGN.md` (dark) for all design rules: the twelve-tone hue system, the score (hue → token mapping), ensemble rule (soprano/mp), departures, composition principles, four voices, five materials, background tiers, brackets, terminal, symbol icons, overlays, and accessibility principles. Read `docs/DESIGN-LIGHT.md` (light — Snow Miku 2026) for the warm cream/cool blue spatial split, per-hue register system, and patisserie-derived palette.

## Readability Thresholds

Validated by `npm run readability:dark` or `npm run readability:light` (add `-- --verbose` for full results).
Portable palette: `npm run readability:ports` (APCA + CVD for core fg/bg pairs shared by all ports).
Web semantic pairs: `npm run readability:web` (WCAG text, syntax, action, boundary, and focus checks).

## Numeric Truth

Measured values (coordinates, hexes, Lc, ΔEz) live ONLY in the generated
`docs/SCORE-DARK.md` / `docs/SCORE-LIGHT.md` (`npm run docs:gen`, part of
every build). Never add measured numbers to the DESIGN documents — extend
`src/tools/docgen.ts` instead. DESIGN docs explain intent; SCORE files are
the measurement. The readability gates exit non-zero when not ready
(hue distribution is advisory — pairwise ΔEz/CVD gates own confusability).
