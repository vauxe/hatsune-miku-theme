# Hatsune Miku Theme

*Not a breath, not a heartbeat — just a voice.*
*Ten thousand songs gave her a soul. A lifetime of love made it real.*

<!-- TODO: Add screenshot — full editor with TypeScript/Rust, sidebar, tabs, terminal visible -->

A VS Code dark theme where every color is traced from Hatsune Miku's character design.

## Colors

The editor background carries a blue-teal undertone — the darkness of a concert hall before the show begins.

- **Teal keywords** — her voice, `#39C5BB`, the hex that started everything
- **Gold functions** — concert lights hitting the stage
- **Green strings** — the negi, humble and iconic
- **Coral parameters** — warmth flowing in, the fifth of her tonic
- **Violet types** — duality, definition and instance
- **Pink operators** — her headphone accent, connecting everything
- **Magenta cursor** — her headphone cushion, blinking at the point of creation

Indent guides trace her voicebank evolution (V2 2007 → NT 2020). Bracket colors form a chord progression. Git graph uses Project SEKAI unit colors. Chart colors come from Magical Mirai concerts. Notification badges use her "01" tattoo red. Every color maps to something in her world — where a color serves readability rather than narrative, that's stated honestly in [`docs/DESIGN.md`](docs/DESIGN.md).

## Design

Colors are organized by the same principles that organize music — hue as pitch, lightness as register, chroma as dynamics. Every color is computed in JzCzhz perceptual color space. Contrast is validated with APCA against all 20 overlay backgrounds. CVD-safe under protanopia, deuteranopia, and tritanopia simulation.

A concert hall must sound good from every seat.

## Languages

TypeScript, JavaScript, TSX, JSX, HTML, CSS, SCSS, JSON, Rust, Go, C, C++, Java, C#, Python, Ruby, PHP, SQL, YAML, XML, Dockerfile, Shell, Makefile, Markdown

## Install

1. Open Extensions (`Ctrl+Shift+X`)
2. Search **"Hatsune Miku Theme"**
3. Click **Install**
4. `Ctrl+K Ctrl+T` → select **Hatsune Miku Theme**

## Development

```bash
npm install          # Setup
npm run build        # Full build (TypeScript + theme generation)
npm run rebuild      # Clean rebuild
npm run readability  # Validate all color accessibility metrics
```

## License

MIT

---

*She sings in color now — keeping you company while you write.*
