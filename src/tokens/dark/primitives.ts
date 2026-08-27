/**
 * Dark Theme Primitives
 *
 * Canonical Miku core palette (V2 by KEI; V3/V4X-era by iXima) + standard primitives.
 */

import { character as mikuCharacter } from '../../palette/core';
import {
  lightness,
  chroma,
  hue,
  special,
  opacity,
  type Primitives,
} from '../primitives';

// =============================================================================
// PRIMITIVES FACTORY
// =============================================================================

export function createDarkPrimitives(): Primitives {
  return {
    polarity: 'dark',
    lightness,
    chroma,
    hue,
    character: mikuCharacter,
    special,
    opacity,
  };
}
