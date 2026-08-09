<div align="center">
  <img src="icon.png" width="128" alt="Hatsune Miku Theme">
</div>

---

*Not a breath, not a heartbeat — just a voice.*
*Ten thousand songs gave her a soul. A lifetime of love made it real.*

A color theme traced from Hatsune Miku's character design. Dark and light variants, built with perceptual color science for readability and color vision accessibility. Full rationale in [`docs/DESIGN.md`](docs/DESIGN.md) (dark) and [`docs/DESIGN-LIGHT.md`](docs/DESIGN-LIGHT.md) (light — Snow Miku 2026).

Available for VS Code, the Web, Neovim, Helix, Zed, Sublime Text, and popular terminal emulators.

## Preview

<div align="center">
  <img src="images/example-dark.jpg" alt="Hatsune Miku Theme — Dark" width="800">
  <p><strong>Dark</strong></p>
  <img src="images/example-light.jpg" alt="Hatsune Miku Theme — Light (Snow Miku)" width="800">
  <p><strong>Light</strong></p>
</div>

## Install

### VS Code

1. Download the latest `.vsix` from [Releases](https://github.com/vauxe/hatsune-miku-theme/releases/latest)
2. `Ctrl+Shift+P` → **Extensions: Install from VSIX...**
3. Select the downloaded file
4. Choose **Hatsune Miku Theme** (dark) or **Hatsune Miku Theme (Snow Miku)** (light)

Portable ports are available in the repository source tree.

### Web

Open the [live Web preview](https://vauxe.github.io/hatsune-miku-theme/ports/web/preview.html) to inspect token values in System, Light, and Dark modes. Run `npm run build:ports` after changing the source.

Most sites only need `ports/web/hatsune-miku-theme.css`:

```html
<link rel="stylesheet" href="/styles/hatsune-miku-theme.css">
```

Use the semantic custom properties in components instead of copying color values:

```css
body {
  color: var(--hm-color-text-primary);
  background: var(--hm-color-surface-content);
}

.primary-action {
  color: var(--hm-color-action-primary-foreground-default);
  background: var(--hm-color-action-primary-background-default);
  border: 1px solid var(--hm-color-action-primary-border-default);
}

.primary-action:hover {
  color: var(--hm-color-action-primary-foreground-hover);
  background: var(--hm-color-action-primary-background-hover);
}

.primary-action:focus-visible {
  outline: 2px solid var(--hm-color-focus-ring);
  outline-offset: 2px;
}
```

Without `data-hm-theme`, the CSS follows `prefers-color-scheme` with a light fallback. Set `data-hm-theme="light"` or `"dark"` on `<html>` or a container to override it.

Choose the secondary-text token that matches its surface:

| Surface | Token |
|---|---|
| Page or content | `--hm-color-text-secondary` |
| Navigation or structural chrome | `--hm-color-text-on-chrome-secondary` |
| Floating or elevated overlay | `--hm-color-text-on-overlay-secondary` |

`--hm-color-text-primary` works on every exported surface; subtle text and status foregrounds are content-only, and placeholder text is field-only. Action backgrounds are opaque, so their foreground/background pairs are surface-independent. `npm test` enforces WCAG 2.2 AA for documented pairs and enabled action states; disabled contrast is excluded. Pair status colors with text or icons, never color alone.

DTCG tooling can use the adjacent light and dark token JSON files.

### Neovim

Copy `ports/neovim/hatsune-miku-dark.lua` (or `-light`) to `~/.config/nvim/colors/`, then `:colorscheme hatsune-miku-dark`.

### Helix

Copy `ports/helix/hatsune-miku-dark.toml` (or `-light`) to `~/.config/helix/themes/`, then set `theme = "hatsune-miku-dark"` in `config.toml`.

### Zed

Copy `ports/zed/hatsune-miku-dark.json` (or `-light`) to `~/.config/zed/themes/`.

### Sublime Text

Copy `ports/sublime/hatsune-miku-dark.sublime-color-scheme` (or `-light`) to `Packages/User/`.

### Terminal Emulators

Pre-built configs for both dark and light variants:

| Terminal | Port | Install location |
|---|---|---|
| Alacritty | `ports/alacritty/` | `~/.config/alacritty/` (import in `alacritty.toml`) |
| kitty | `ports/kitty/` | `~/.config/kitty/` (include in `kitty.conf`) |
| WezTerm | `ports/wezterm/` | Reference in `wezterm.lua` config |
| Ghostty | `ports/ghostty/` | `~/.config/ghostty/` |
| foot | `ports/foot/` | `~/.config/foot/` |
| iTerm2 | `ports/iterm2/` | Import via Preferences → Profiles → Colors |
| Windows Terminal | `ports/windows-terminal/` | Add to `settings.json` schemes array |
| Konsole | `ports/konsole/` | `~/.local/share/konsole/` |
| Warp | `ports/warp/` | `~/.warp/themes/` (macOS) or `~/.local/share/warp-terminal/themes/` (Linux) |
| Xresources | `ports/xresources/` | Merge into `~/.Xresources` |

## Development

```bash
npm install                # Setup
npm test                   # Web token contract + WCAG 2.2 pairs
npm run build              # Full build: VS Code + all ports
npm run build:vscode       # VS Code themes only
npm run build:ports        # Web + terminal/editor ports
npm run readability:dark   # Inspect dark theme readability
npm run readability:light  # Inspect light theme readability
npm run readability:ports  # Inspect portable palette contrast
```

## License

MIT

---

*She sings in color now — keeping you company while you write.*
