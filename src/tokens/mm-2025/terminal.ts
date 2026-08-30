/**
 * MM2025 Terminal ANSI Color Token Definitions
 *
 * The terminal is the same night sky — Stage background, starfield
 * inks. Red is the site's coral, green the festival bamboo, yellow the
 * star gold, blue the site's own periwinkle, magenta the candy pink,
 * cyan the river teal, white the lavender-cast starlight. Brights
 * flare one register up — stars do.
 *
 * Values are gate-derived: the red/green/yellow trio carries its CVD
 * geometry on a Jz ladder (red 0.168 < green 0.186 < yellow 0.216),
 * and the blues clear Lc ≥ 60 on the night.
 */

import { role } from '../role';
import type { TerminalTokens } from '../types';
import type { Primitives } from '../primitives';

export function createTerminalTokens(p: Primitives): TerminalTokens {
  const { hue: H } = p;

  return {
    black: role('Night-floor blue — near-background, the stage under the sky', 0.135, 0.022, 257),
    red: role('Site coral — the alert voice', 0.178, 0.072, 30),
    green: role('Bamboo — the festival green', 0.186, 0.070, H.minor7th),
    yellow: role('Star gold — pale caution, high register', 0.216, 0.048, H.major6th),
    blue: role('Site periwinkle #708FFF family — info', 0.175, 0.085, 261),
    magenta: role('Candy pink — the earring as text (above blue for the protan gap)', 0.207, 0.052, 333),
    cyan: role('The river teal — her voice reading your output', 0.199, 0.062, 202),
    white: role('Starlight, lavender cast — muted foreground (below cyan for the deutan gap)', 0.177, 0.016, 273),
    brightBlack: role('Star-mist dark — comment grey, still blue', 0.152, 0.030, H.sky),
    brightRed: role('Coral flare — bright alert', 0.184, 0.082, 28),
    brightGreen: role('Bamboo lit — bright success', 0.201, 0.064, H.minor7th),
    brightYellow: role('Star gold flare — vivid caution', 0.218, 0.042, H.major6th),
    brightBlue: role('Periwinkle, vivid not lighter', 0.183, 0.092, 261),
    brightMagenta: role('Candy flare — the spark, bright', 0.214, 0.044, 333),
    brightCyan: role('The current, fully lit', 0.210, 0.062, H.minor2nd),
    brightWhite: role('Flare-core starlight — primary text', 0.203, 0.012, 273),
  };
}
