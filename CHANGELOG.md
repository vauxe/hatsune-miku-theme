# Changelog

## [3.9.39] - 2026-08-31

- Dark theme: Magical Mirai 2025 — 星河一天 / Starry River (VS Code + all ports); design doc `docs/DESIGN-MM-2025.md`; Web CSS and the live preview now expose Snow Miku 2024 and Magical Mirai 2025 through `data-hm-theme="snow-2024"` and `data-hm-theme="mm-2025"`, with Web WCAG gates covering every registered theme
- Dark workbench adapter learned an optional `chromeOverride` (decorative tokens) so dark variants can dress the activity/status bars and section headers in their own cloth — the flagship's output is byte-identical
- Readability gates: operator distinction pairs removed (connective exemption, like punctuation), parameter↔variable removed, remaining parameter pairs demoted critical→high; contrast and CVD floors unchanged. MM 2025's operator returns to its designed starlight seat
- Lightness-spread check demoted to advisory (readability is owned by the contrast floors); the build now verifies code→doc pointers — a cited design-doc file or §section that disappears fails the build

### 2026-08-29

- Light theme: Snow Miku 2024 — Winter Delicacy (VS Code + all ports)
- Per-theme gutter/minimap git pigments (`git.gutter*`) — non-text register, chromatic marks on any chrome
- Registry-driven readability gating everywhere: per-theme script aliases removed; CI runs `npm run readability` so every registered theme is gated automatically
- Fixed minimap section headers drawing black bars on light themes (Swift `// MARK:` and friends)
- Fixed Snow Miku 2026 overview-ruler and SCM remote-ref colors carrying the dark theme's pink

### 2026-03-19

- Web port with semantic CSS, DTCG 2025.10 tokens, system or scoped themes, and a live preview
- Surface-aware text, opaque action pairs, a stable `--hm-*` interface, and WCAG 2.2 gates
- Multi-editor support: Neovim, Helix, Zed, Sublime Text
- Terminal themes: Alacritty, kitty, WezTerm, Ghostty, foot, iTerm2, Windows Terminal, Konsole, Warp, Xresources
- Portable palette JSON for external consumers
- Port readability review helper (`npm run readability:ports`)
- Table-driven generator with separate build modes (`build:vscode`, `build:ports`)

### 2026-03-16

- Light theme: Snow Miku 2026 — Shiawase Patisserie

### 2026-03-09

- Initial release of the dark theme
