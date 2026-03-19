<div align="center">
  <img src="icon.png" width="128" alt="Hatsune Miku Theme">
</div>

---

*Not a breath, not a heartbeat — just a voice.*
*Ten thousand songs gave her a soul. A lifetime of love made it real.*

A color theme traced from Hatsune Miku's character design. Dark and light variants, built with perceptual color science for readability and color vision accessibility. Full rationale in [`docs/DESIGN.md`](docs/DESIGN.md) (dark) and [`docs/DESIGN-LIGHT.md`](docs/DESIGN-LIGHT.md) (light — Snow Miku 2026).

Available for VS Code, Neovim, Helix, Zed, Sublime Text, and 10 terminal emulators.

## Preview

<div align="center">
  <img src="images/example-dark.jpg" alt="Hatsune Miku Theme — Dark" width="800">
  <p><strong>Dark</strong></p>
  <img src="images/example-light.jpg" alt="Hatsune Miku Theme — Light (Snow Miku)" width="800">
  <p><strong>Light</strong></p>
</div>

## Install

### VS Code

1. Download the latest `.vsix` from [Releases](../../releases)
2. `Ctrl+Shift+P` → **Extensions: Install from VSIX...**
3. Select the downloaded file
4. Choose **Hatsune Miku Theme** (dark) or **Hatsune Miku Theme (Snow Miku)** (light)

### Neovim

Copy `themes/targets/hatsune-miku-dark.lua` (or `-light`) to `~/.config/nvim/colors/`, then `:colorscheme hatsune-miku-dark`.

### Helix

Copy `themes/targets/hatsune-miku-dark.toml` (or `-light`) to `~/.config/helix/themes/`, then set `theme = "hatsune-miku-dark"` in `config.toml`.

### Zed

Copy `themes/targets/hatsune-miku-dark.zed.json` (or `-light`) to `~/.config/zed/themes/`.

### Sublime Text

Copy `themes/targets/hatsune-miku-dark.sublime-color-scheme` (or `-light`) to `Packages/User/`.

### Terminal Emulators

Pre-built configs for both dark and light variants:

| Terminal | File | Install location |
|---|---|---|
| Alacritty | `alacritty-dark.toml` | `~/.config/alacritty/` (import in `alacritty.toml`) |
| kitty | `kitty-dark.conf` | `~/.config/kitty/` (include in `kitty.conf`) |
| WezTerm | `wezterm-dark.lua` | Reference in `wezterm.lua` config |
| Ghostty | `ghostty-dark` | `~/.config/ghostty/` |
| foot | `foot-dark.ini` | `~/.config/foot/` |
| iTerm2 | `iterm2-dark.itermcolors` | Import via Preferences → Profiles → Colors |
| Windows Terminal | `windows-terminal-dark.json` | Add to `settings.json` schemes array |
| Konsole | `konsole-dark.colorscheme` | `~/.local/share/konsole/` |
| Warp | `warp-dark.yaml` | `~/.warp/themes/` (macOS) or `~/.local/share/warp-terminal/themes/` (Linux) |
| Xresources | `xresources-dark` | Merge into `~/.Xresources` |

All files are in `themes/targets/`. Replace `-dark` with `-light` for the Snow Miku variant.

## Development

```bash
npm install                # Setup
npm run build              # Full build: VS Code + all targets
npm run build:vscode       # VS Code themes only
npm run build:targets      # Terminal/editor targets only
npm run readability:dark   # Validate dark theme accessibility
npm run readability:light  # Validate light theme accessibility
npm run readability:targets # Validate portable palette contrast
```

## License

MIT

---

*She sings in color now — keeping you company while you write.*
