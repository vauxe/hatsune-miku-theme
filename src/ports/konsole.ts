/**
 * Konsole Target
 *
 * Generates a KDE Konsole .colorscheme file.
 * Color format: R,G,B decimal triplets.
 */

import type { SemanticTokens } from '../tokens/types';

function toRgb(hex: string): string {
  const h = hex.replace('#', '');
  return `${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)}`;
}

export function createKonsoleTheme(t: SemanticTokens, name: string): string {
  const term = t.terminal;
  const normal = [term.black, term.red, term.green, term.yellow, term.blue, term.magenta, term.cyan, term.white];
  const bright = [term.brightBlack, term.brightRed, term.brightGreen, term.brightYellow, term.brightBlue, term.brightMagenta, term.brightCyan, term.brightWhite];

  const fg = toRgb(t.ui.foreground.hex);
  const bg = toRgb(t.ui.background.hex);

  const sections = [
    `[General]\nDescription=${name}\nOpacity=1`,
    `[Background]\nColor=${bg}`,
    `[BackgroundIntense]\nColor=${bg}`,
    `[BackgroundFaint]\nColor=${bg}`,
    `[Foreground]\nColor=${fg}`,
    `[ForegroundIntense]\nColor=${fg}`,
    `[ForegroundFaint]\nColor=${fg}`,
  ];

  for (let i = 0; i < 8; i++) {
    sections.push(`[Color${i}]\nColor=${toRgb(normal[i].hex)}`);
    sections.push(`[Color${i}Intense]\nColor=${toRgb(bright[i].hex)}`);
    sections.push(`[Color${i}Faint]\nColor=${toRgb(normal[i].hex)}`);
  }

  return `# Hatsune Miku Theme — Konsole\n# Generated — do not edit\n\n${sections.join('\n\n')}\n`;
}
