## Build Commands

```bash
npm run build          # Full build: VS Code themes + all ports
npm run build:vscode   # VS Code themes only
npm run build:ports    # All portable ports
```

Output:

- `themes/*.json` — VS Code themes (one per registered theme)
- `ports/{app}/` — generated Web, terminal, editor, and palette ports
- `docs/SCORE-*.md` — generated measurement tables

## Architecture

```
src/palette/ → src/tokens/ → src/theme/   → src/generator.ts → themes/*.json
  (colors)     (semantic)    (VS Code)       (compiler)         (VS Code output)
                            src/ports/   →                    → ports/{app}/*
                            (portable)                          (Web, terminals, editors, palette)
```

Three-layer token system: **Primitives** (`primitives.ts`) → **Semantic Tokens** (one sub-module per theme: `dark/`, `light/`, `snow-2024/`) → **Theme Registry** (`src/registry.ts`). The registry is the narrow waist: every shipped theme is a `Theme` value (identity + polarity + `SemanticTokens`); every output is an `Artifact` produced by an `Emitter` in `src/generator.ts` (VS Code, ports, web CSS, SCORE docs). Adding a theme = one registry entry; adding a target = one emitter. All theme files (`src/theme/`) import from `tokens` — no direct palette imports.

Web compatibility rules:

- Colors flow from `src/tokens/` through `src/ports/web.ts`; rebuild instead of editing generated `ports/web/*`.
- `--hm-*` plus `data-hm-theme="light"` and `"dark"` are public. `WEB_THEME_CUSTOM_PROPERTIES` locks names; renames or removals require migration.
- Sites use CSS; DTCG 2025.10 JSON is for tooling. Keep surface-specific text, opaque action pairs, and `npm run readability:web` green.

Read `docs/DESIGN.md` (dark) for all design rules: the twelve-tone hue system, the score (hue → token mapping), ensemble rule (soprano/mp), departures, composition principles, four voices, five materials, background tiers, brackets, terminal, symbol icons, overlays, and accessibility principles. Read `docs/DESIGN-LIGHT.md` (light — Snow Miku 2026) for the warm cream/cool blue spatial split, per-hue register system, and patisserie-derived palette. Read `docs/DESIGN-SNOW-2024.md` (light — Snow Miku 2024) for the costume-chord variant: an all-warm apron-cream page (Stage/House/Float are the apron and its trim) with haori-apricot edges (activity/status bars, section headers), chocolate ink with cocoa control borders and sage hairline seams (the artwork's linework), coral-bow attention (cursor/focus/badge), haori selection veils, and the sage hair as voice — syntax, washes, links, primary buttons and the remote chip — never a wall. Five frame families, one per garment role. Read `docs/DESIGN-MM-2025.md` (dark — Magical Mirai 2025, 星河一天) for the starry-river variant: every surface on the painting's single 250–263° night arc (editor = the zenith at the site's working depth, sidebar = the water-mirror floor one step lit, denim Edge strips via the dark adapter's `chromeOverride`), a polychrome starfield of syntax on the monochrome night, star-mist seams and comments, denim selection veils, pink first-star attention (cursor/focus/badge/find) against the site-cyan action voice, and tanzaku indent guides in the festival's five colors.

## Readability Thresholds

Validated by `npm run readability` (every registered theme). Inspect a single theme with `npm run readability -- --theme themes/<file>.json` (add `--verbose` for full results).
Portable palette: `npm run readability:ports` (APCA + CVD for core fg/bg pairs shared by all ports).
Web semantic pairs: `npm run readability:web` (WCAG text, syntax, action, boundary, and focus checks).

## Numeric Truth

Measured values (coordinates, hexes, Lc, ΔEz) live ONLY in the generated
`docs/SCORE-*.md` files, one per registered theme (`npm run docs:gen`,
part of every build). Never add measured numbers to the DESIGN documents — extend
`src/tools/docgen.ts` instead. DESIGN docs explain intent; SCORE files are
the measurement. The readability gates exit non-zero when not ready
(hue distribution and lightness spread are advisory — pairwise ΔEz/CVD gates own confusability, contrast floors own readability).
