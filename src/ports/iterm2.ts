/**
 * iTerm2 Target
 *
 * Generates an iTerm2 color profile (.itermcolors XML plist).
 */

import type { SemanticTokens, SemanticRole } from '../tokens/types';

function hexToComponents(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace('#', '');
  return {
    r: parseInt(h.slice(0, 2), 16) / 255,
    g: parseInt(h.slice(2, 4), 16) / 255,
    b: parseInt(h.slice(4, 6), 16) / 255,
  };
}

function colorEntry(name: string, hex: string): string {
  const { r, g, b } = hexToComponents(hex);
  return `\t<key>${name}</key>
\t<dict>
\t\t<key>Color Space</key>
\t\t<string>sRGB</string>
\t\t<key>Red Component</key>
\t\t<real>${r}</real>
\t\t<key>Green Component</key>
\t\t<real>${g}</real>
\t\t<key>Blue Component</key>
\t\t<real>${b}</real>
\t</dict>`;
}

function colorEntryWithAlpha(name: string, hex: string, alpha: number): string {
  const { r, g, b } = hexToComponents(hex);
  return `\t<key>${name}</key>
\t<dict>
\t\t<key>Color Space</key>
\t\t<string>sRGB</string>
\t\t<key>Red Component</key>
\t\t<real>${r}</real>
\t\t<key>Green Component</key>
\t\t<real>${g}</real>
\t\t<key>Blue Component</key>
\t\t<real>${b}</real>
\t\t<key>Alpha Component</key>
\t\t<real>${alpha}</real>
\t</dict>`;
}

export function createITerm2Theme(t: SemanticTokens): string {
  const term = t.terminal;
  const ansiNames = [
    'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white',
    'brightBlack', 'brightRed', 'brightGreen', 'brightYellow',
    'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite',
  ] as const;

  const ansiEntries = ansiNames.map((name, i) =>
    colorEntry(`Ansi ${i} Color`, (term[name] as SemanticRole).hex)
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<!-- Hatsune Miku Theme — iTerm2 -->
<!-- Generated — do not edit -->
<dict>
${ansiEntries}
${colorEntry('Background Color', t.ui.background.hex)}
${colorEntry('Foreground Color', t.ui.foreground.hex)}
${colorEntry('Bold Color', t.ui.nearWhite.hex)}
${colorEntry('Cursor Color', t.ui.cursor.hex)}
${colorEntry('Cursor Text Color', t.ui.background.hex)}
${colorEntryWithAlpha('Cursor Guide Color', t.decorative.cursorLineFrost, 0.25)}
${colorEntry('Link Color', t.ui.link.hex)}
${colorEntry('Selection Color', t.ui.selection.hex)}
${colorEntry('Selected Text Color', t.ui.foreground.hex)}
${colorEntryWithAlpha('Badge Color', t.ui.accentPrimary.hex, 0.5)}
${colorEntry('Tab Color', t.ui.backgroundHouse.hex)}
${colorEntry('Underline Color', t.ui.link.hex)}
${colorEntry('Match Background Color', t.ui.accentSecondary.hex)}
</dict>
</plist>
`;
}
