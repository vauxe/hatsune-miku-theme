/**
 * Dark Terminal ANSI Color Token Definitions
 *
 * When you run your code and see output in the terminal,
 * that's her voice reading your work back to you.
 * The producer writes; Miku sings. The programmer runs; the terminal speaks.
 */

import { role } from '../role';
import { parseHex } from '../role';
import type { TerminalTokens } from '../types';
import type { Primitives } from '../primitives';

export function createTerminalTokens(p: Primitives): TerminalTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  // ===================================================================
  // DARK TERMINAL -- CVD-safe Jz ladder + Cz tiers
  // ===================================================================
  // Jz ladder (mezzo->soprano->treble->sopranino) creates lightness separation
  // that survives all CVD types. Cz tiers (mf/f vivid, mp standard, p soft)
  // add saturation contrast. Hue shifted: green uses 150 (blue-axis) not
  // lime 120, and blue uses 270 not azure 240, for CVD-safe separation.
  //
  // Normal:  blue+red(mezzo) < green(soprano) < magenta+cyan(treble) < yellow(sopranino)
  // Bright:  bBlue(mezzo) < bRed(soprano) < bGreen(treble) < bMag+bCyan+bYel(sopranino)
  return {
    black: role('Near-background -- skirt dark blue on the stage floor', L.countertenor, C.ppp, parseHex(p.character.skirt.base).hz),
    red: role('Alert -- rose, above mezzo for Lc>=60 on warm hue', L.mezzo + 0.008, C.mf, H.tritone),
    green: role('Success -- green 150 (blue-axis for deutan safety), soprano/f', L.soprano, C.f, H.major7th),
    yellow: role('Caution -- amber glow, sopranino/p (bright + soft)', L.sopranino, C.p, H.minor6th),
    blue: role('Info -- blue 270, mezzo/mp', L.mezzo, C.mp, H.minor3rd),
    magenta: role('Special -- magenta, treble/p (soft, high register)', L.treble, C.p, H.perfect4th),
    cyan: role('Her voice -- Miku teal, treble/mp', L.treble, C.mp, H.mikuTeal),
    white: role('Muted foreground -- warm off-white, low chroma', L.soprano, C.pp, H.peach),
    brightBlack: role('Comment gray -- below soprano, dark gray', L.alto, C.ppp, H.minor2nd),
    brightRed: role('Bright alert -- rose, above soprano for Lc>=60 on warm hue', L.soprano + 0.005, C.f, H.tritone),
    brightGreen: role('Bright success -- green 150, treble/f', L.treble, C.f, H.major7th),
    brightYellow: role('Bright warning -- vivid amber, sopranino/mp', L.sopranino, C.mp, H.minor6th),
    brightBlue: role('Bright info -- blue 270, mezzo/mf (vivid not lighter)', L.mezzo, C.mf, H.minor3rd),
    brightMagenta: role('Bright magic -- magenta, sopranino/p', L.sopranino, C.p, H.perfect4th),
    brightCyan: role('Bright Miku -- vivid teal, sopranino/mf', L.sopranino, C.mf, H.mikuTeal),
    brightWhite: role('Primary text -- icy white, low chroma', L.soprano, C.p, H.minor2nd),
  };
}
