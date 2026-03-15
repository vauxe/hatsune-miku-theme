/**
 * Dark Theme Primitives
 *
 * Canonical Miku (KEI V3/V4X) character palette + standard primitives.
 */

import { character as mikuCharacter } from '../../palette/core';
import {
  lightness,
  chroma,
  hue,
  special,
  opacity,
  type Primitives,
  type CharacterColors,
} from '../primitives';

// =============================================================================
// CHARACTER PALETTE — Canonical Miku
// =============================================================================

export const darkCharacter: CharacterColors = {
  hair: {
    base: mikuCharacter.hair.base,
    shadow: mikuCharacter.hair.shadow,
    highlight: mikuCharacter.hair.highlight,
    bright: mikuCharacter.hair.bright,
    tip: mikuCharacter.hair.tip,
  },
  eyes: {
    iris: mikuCharacter.eyes.iris,
    highlight: mikuCharacter.eyes.highlight,
    pupil: mikuCharacter.eyes.pupil,
  },
  headphones: {
    frame: mikuCharacter.headphones.frame,
    cushion: mikuCharacter.headphones.cushion,
    display: mikuCharacter.headphones.display,
  },
  hairTies: {
    base: mikuCharacter.hairTies.base,
    outline: mikuCharacter.hairTies.outline,
  },
  top: {
    main: mikuCharacter.top.main,
    shadow: mikuCharacter.top.shadow,
    trim: mikuCharacter.top.trim,
    blouse: mikuCharacter.top.blouse,
  },
  skirt: {
    base: mikuCharacter.skirt.base,
    trim: mikuCharacter.skirt.trim,
    accessory: mikuCharacter.skirt.accessory,
  },
  armWarmers: {
    base: mikuCharacter.armWarmers.base,
    pattern: mikuCharacter.armWarmers.pattern,
  },
  boots: {
    base: mikuCharacter.boots.base,
    accent: mikuCharacter.boots.accent,
  },
  tie: {
    base: mikuCharacter.tie.base,
    shadow: mikuCharacter.tie.shadow,
  },
  negi: {
    stalk: mikuCharacter.negi.stalk,
    bright: mikuCharacter.negi.bright,
    white: mikuCharacter.negi.white,
  },
  skin: {
    base: mikuCharacter.skin.base,
    shadow: mikuCharacter.skin.shadow,
    blush: mikuCharacter.skin.blush,
  },
  marks: {
    tattoo: mikuCharacter.marks.tattoo,
  },
};

// =============================================================================
// PRIMITIVES FACTORY
// =============================================================================

export function createDarkPrimitives(): Primitives {
  return {
    polarity: 'dark',
    lightness,
    chroma,
    hue,
    character: darkCharacter,
    special,
    opacity,
  };
}
