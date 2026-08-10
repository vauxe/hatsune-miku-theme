/**
 * Generated port format contracts.
 *
 * These checks exercise generator output in memory, so readability:ports does
 * not depend on previously-built files. CI's build drift check separately
 * verifies that committed artifacts match the generators.
 */

import type { SemanticTokens } from '../tokens/types';
import { createHelixTheme } from '../ports/helix';
import { selectionSurface } from '../ports/shared';
import { createWezTermTheme } from '../ports/wezterm';
import { createWindowsTerminalTheme } from '../ports/windows-terminal';

export interface PortContractFailure {
  name: string;
  detail: string;
}

// Helix accepts opaque 12-bit or 24-bit RGB only.
// Source: https://docs.helix-editor.com/master/themes.html
const HELIX_HEX = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

// WezTerm ColorSpec is a tagged value, not a plain color string.
// Source: https://github.com/wezterm/wezterm/blob/20240203-110809-5046fc22/config/src/color.rs#L129-L173
const WEZTERM_COLOR_SPEC_KEYS = [
  'copy_mode_active_highlight_fg',
  'copy_mode_active_highlight_bg',
  'copy_mode_inactive_highlight_fg',
  'copy_mode_inactive_highlight_bg',
  'quick_select_label_fg',
  'quick_select_label_bg',
  'quick_select_match_fg',
  'quick_select_match_bg',
] as const;

const WEZTERM_ANSI_COLORS = [
  'Black', 'Maroon', 'Green', 'Olive', 'Navy', 'Purple', 'Teal', 'Silver',
  'Grey', 'Red', 'Lime', 'Yellow', 'Blue', 'Fuchsia', 'Aqua', 'White',
].join('|');

// These fields remain nightly-only and must not make the stable port unusable.
// Source: https://wezterm.org/config/appearance.html
const WEZTERM_NIGHTLY_ONLY_KEYS = [
  'input_selector_label_fg',
  'input_selector_label_bg',
  'launcher_label_fg',
  'launcher_label_bg',
] as const;

// Windows Terminal schemes reject profile-only fields such as tabColor.
// Source: https://raw.githubusercontent.com/microsoft/terminal/main/doc/cascadia/profiles.schema.json
const WINDOWS_TERMINAL_SCHEME_KEYS = new Set([
  'name',
  'foreground',
  'background',
  'cursorColor',
  'selectionBackground',
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'purple',
  'cyan',
  'white',
  'brightBlack',
  'brightRed',
  'brightGreen',
  'brightYellow',
  'brightBlue',
  'brightPurple',
  'brightCyan',
  'brightWhite',
]);

function validateHelix(t: SemanticTokens): PortContractFailure[] {
  const theme = createHelixTheme(t);
  const invalid = [...theme.matchAll(/"(#[^"]+)"/g)]
    .map(match => match[1])
    .filter(color => !HELIX_HEX.test(color));

  if (invalid.length === 0) return [];
  return [{
    name: 'Helix colors',
    detail: `unsupported hex values: ${[...new Set(invalid)].join(', ')}`,
  }];
}

function validateWezTerm(t: SemanticTokens): PortContractFailure[] {
  const theme = createWezTermTheme(t);
  const failures: PortContractFailure[] = [];

  // A fixed selection foreground replaces each cell's original foreground.
  // Keep its background opaque too, so ANSI cell backgrounds cannot reduce
  // selected-text contrast. This is the frost wash pre-composited on canvas.
  // Source: https://wezterm.org/config/appearance.html#defining-your-own-colors
  const selectionForeground = theme.match(/^\s*selection_fg\s*=\s*"([^"]+)",$/m)?.[1];
  const selectionBackground = theme.match(/^\s*selection_bg\s*=\s*"([^"]+)",$/m)?.[1];
  const validSelection = selectionForeground === t.ui.foreground.hex
    && selectionBackground === selectionSurface(t);

  if (!validSelection) {
    failures.push({
      name: 'WezTerm selection',
      detail: 'fixed foreground requires the opaque, pre-composited selection surface',
    });
  }

  for (const key of WEZTERM_COLOR_SPEC_KEYS) {
    const assignment = theme.match(new RegExp(`^\\s*${key}\\s*=\\s*(.+),$`, 'm'))?.[1];
    const valid = assignment === '"Default"'
      || /^\{ Color = "#[0-9A-Fa-f]{6}" \}$/.test(assignment ?? '')
      || new RegExp(`^\\{ AnsiColor = "(?:${WEZTERM_ANSI_COLORS})" \\}$`).test(assignment ?? '');
    if (!valid) {
      failures.push({ name: `WezTerm ${key}`, detail: 'must use a stable ColorSpec value' });
    }
  }

  for (const key of WEZTERM_NIGHTLY_ONLY_KEYS) {
    if (new RegExp(`^\\s*${key}\\s*=`, 'm').test(theme)) {
      failures.push({ name: `WezTerm ${key}`, detail: 'nightly-only field in the stable port' });
    }
  }

  return failures;
}

function validateWindowsTerminal(t: SemanticTokens): PortContractFailure[] {
  const scheme = createWindowsTerminalTheme(t, 'contract-check') as Record<string, unknown>;
  const unexpected = Object.keys(scheme).filter(key => !WINDOWS_TERMINAL_SCHEME_KEYS.has(key));

  if (unexpected.length === 0) return [];
  return [{
    name: 'Windows Terminal scheme',
    detail: `unsupported fields: ${unexpected.join(', ')}`,
  }];
}

export function validatePortContracts(t: SemanticTokens): PortContractFailure[] {
  return [
    ...validateHelix(t),
    ...validateWezTerm(t),
    ...validateWindowsTerminal(t),
  ];
}
