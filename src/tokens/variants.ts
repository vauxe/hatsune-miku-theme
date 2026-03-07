/**
 * Theme Variant Derivation System
 *
 * Layer 3: Transform semantic tokens into theme variants.
 * This enables generating light themes from the same semantic tokens.
 *
 * Derivation strategies:
 * - Light theme: Invert lightness, adjust chroma for new background
 */

import { hex, type JzCzhz } from './jzczhz';
import {
  primitives,
  chroma,
  hue as baseHue,
  character as darkCharacter,
  special,
  opacity,
  type Primitives,
  type LightnessValues,
  type HueValues,
  type ChromaValues,
  type CharacterColors,
  type SpecialColors,
  type OpacityScale,
} from './primitives';
import { createSemanticTokens } from './semantic';
import type { SemanticTokens, SemanticRole } from './types';

// =============================================================================
// VARIANT TYPES
// =============================================================================

export type ThemeVariant = 'dark' | 'light';

export interface VariantConfig {
  name: string;
  variant: ThemeVariant;
  description: string;
  primitives: Primitives;
}

// =============================================================================
// LIGHTNESS DERIVATION
// =============================================================================

/**
 * Derive light theme lightness values
 *
 * For light themes, we need to:
 * 1. Invert the lightness scale (dark text on light background)
 * 2. Adjust for APCA asymmetry (dark-on-light needs different values)
 * 3. Reduce chroma slightly (vivid colors on white can be harsh)
 */
export const lightLightness: LightnessValues = {
  // Light theme registers — inverted: darker Jz = more prominent on light bg
  // Same 10 registers as dark theme, different Jz values for light canvas.
  contrabass: 0.140,     // −7  barely visible on light bg
  bass: 0.130,           // −6
  baritone: 0.120,       // −5
  tenor: 0.110,          // −4
  countertenor: 0.100,   // −3  ghost/structure
  alto: 0.080,           // −2  whisper/signal
  mezzo: 0.065,          // −1
  soprano: 0.055,        //  0  ★ ensemble — primary syntax
  treble: 0.050,         // +1
  sopranino: 0.045,      // +2  maximum darkness/impact
};

// =============================================================================
// HUE ROTATION — Snow Miku's Tonic
// =============================================================================

/**
 * Light hue layout — scientifically optimized for warm cream canvas.
 *
 * NOT a uniform rotation. Each hue is placed to maximize perceptual
 * distinction between commonly-adjacent token pairs, accounting for:
 *   1. Simultaneous contrast (cool pops on warm canvas)
 *   2. sRGB gamut asymmetry at low Jz (teal gamut-limited, violet rich)
 *   3. Crispening effect (2× degraded hue discrimination far from adaptation)
 *
 * Cool hues (180–325°) → structural landmarks you SCAN for (keywords, types)
 * Warm hues (20–155°)  → data flow you READ (variables, functions, strings)
 */
export const lightHue: HueValues = {
  rose: 20,              // Alert, error — vivid terracotta
  red: 30,               // INPUT — parameters, properties, tags
  orange: 75,            // ACTION — functions, attributes (amber)
  gold: 120,             // NAMED — classes, structs (yellow-green)
  lime: 155,             // LITERAL — strings (sage)
  green: 155,            // Same as lime on light — sage territory
  mikuTeal: 200,         // STRUCTURE — keywords, SM2024 tonic
  cyan: 230,             // IDENTITY — enums
  azure: 260,            // TRUTH — constants, numbers (deep blue)
  blue: 300,             // TYPE SYSTEM — types (violet, max gamut)
  violet: 325,           // TYPE SYSTEM — interfaces, macros (rose-violet)
  magenta: 345,          // CONNECTIVE — operators, modifiers

  // Semantic aliases
  mikuPink: 345,         // Magenta connective
  peach: 30,             // Same as red — INPUT family
  amber: 75,             // Same as orange — ACTION family
  sky: 230,              // Same as cyan — cool identity
  ice: 230,              // Same as cyan — cool identity
  periwinkle: 260,       // Same as azure — TRUTH family
  lavender: 300,         // Same as blue — TYPE SYSTEM
  orchid: 300,           // Same as blue — TYPE SYSTEM
  gitRose: 20,           // Git deleted — alert family
  gitBlue: 300,          // Git conflicting — type system blue
};

/**
 * Light theme background colors — Snow Miku 2024 (Winter Delicacy)
 *
 * Three registers from the character design:
 *   1. Cream inner dress — the canvas (lightest, largest surface)
 *   2. Teal hair + warm orange-brown kimono — syntax accent colors
 *   3. Dark chocolate skirt/boots — the ink (foreground)
 *
 * The editor canvas is warm peach-bisque (hz 58°) — not yellow-cream,
 * not white. Matched to the illustration's background panels: visibly
 * warm, like the inside of a pâtisserie lit by amber lamps. Moving
 * outward from the editor, surfaces deepen through the warm spectrum
 * toward the chocolate shelf at the back.
 *
 * Background hierarchy:
 *   - Editor canvas: Peach bisque (Cz 0.020, hz 58°) — the tablecloth
 *   - Sidebar: Deeper bisque (Cz 0.022, hz 55°) — the pastry case
 *   - Activity bar: Warm tan (Cz 0.025, hz 50°) — the wooden counter
 *   - Status bar: Caramel (Cz 0.028, hz 48°) — the chocolate shelf
 *   - Terminal: Same bisque as editor — the reading surface
 *   - Foreground: Chocolate ink (Cz 0.020, hz 48°) — sepia on bisque
 *
 * Cool elements (teal hover, frost selection, magenta focus) are HER —
 * they pop against the warm canvas like her teal hair against the cream kimono.
 * The warmer canvas AMPLIFIES simultaneous contrast with cool syntax tokens.
 */
export const lightCharacter: CharacterColors = {
  // SM2024 hair — muted pastel teal at hz=207° (ice cyan, not standard 196°)
  // Softer, grayer than standard Miku — sea glass, not neon
  hair: {
    base: '#619E9F',      // SM2024 main hair — muted ice cyan
    shadow: '#17696B',    // Dark roots
    highlight: '#77C1C2', // Catch-light
    tip: '#97CECF',       // Soft ends
    bright: '#9EE9EB',    // Brightest highlight
  },
  eyes: { iris: '#376F70', highlight: '#4DB6AC', pupil: darkCharacter.eyes.pupil },
  // Bow replaces headphone cushion — the solo voice
  // SM2024 terracotta bows scattered on the dress: warm, earthy, eye-catching
  headphones: {
    frame: darkCharacter.headphones.frame,
    cushion: '#A35241',   // Bow terracotta — cursor, focus, active borders
    display: darkCharacter.headphones.display,
  },
  hairTies: { ...darkCharacter.hairTies },
  // Structural chrome — subliminal warmth, paper-like
  // Cz 0.010–0.018: warm enough to feel like a place, neutral enough to not suppress warm fg tokens
  // Hz 62–72°: yellow-cream (paper range), not peach-bisque
  top: {
    main: hex({ Jz: 0.200, Cz: 0.016, hz: 66 }),         // Warm paper — wooden counter (activity bar)
    shadow: hex({ Jz: 0.195, Cz: 0.018, hz: 62 }),        // Deeper paper — chocolate shelf (status bar)
    trim: darkCharacter.top.trim,
    blouse: darkCharacter.top.blouse,                       // Same off-white shirt in both themes
  },
  // Editor canvas — subliminal warm paper
  skirt: {
    base: hex({ Jz: 0.212, Cz: 0.012, hz: 72 }),          // Warm paper — editor canvas
    trim: darkCharacter.skirt.trim,
    accessory: hex({ Jz: 0.108, Cz: 0.012, hz: 62 }),     // Warm chain — muted tint
  },
  // Sidebar — slightly deeper paper
  armWarmers: {
    base: hex({ Jz: 0.204, Cz: 0.013, hz: 70 }),          // Deeper paper — sidebar/tab strip
    pattern: darkCharacter.armWarmers.pattern,
  },
  // Terminal — reading surface, same paper as editor
  boots: {
    base: hex({ Jz: 0.212, Cz: 0.012, hz: 72 }),          // Warm paper — terminal bg
    accent: darkCharacter.boots.accent,
  },
  // Sleeve lining replaces tie — warm amber revealed on interaction
  // The kimono's inner sleeve transitions from amber to brown
  tie: {
    base: '#A17259',      // Sleeve amber — warm lining visible when she moves
    shadow: '#815039',    // Deeper sleeve — used for linkActive
  },
  negi: { ...darkCharacter.negi },
};

// =============================================================================
// VARIANT FACTORIES
// =============================================================================

/**
 * Create primitives for dark theme (default)
 */
export function createDarkPrimitives(): Primitives {
  return primitives;
}

/**
 * Light chroma scale — pushed higher to compensate for low-Jz gamut compression.
 *
 * At Jz=0.060 (dark text), sRGB gamut varies dramatically by hue:
 *   - blue/violet/red (267°-27°): can reach Cz=0.080-0.100 — vivid
 *   - gold/lime/cyan (117°-237°): can reach Cz=0.065-0.078 — moderate
 *   - green/teal (177°-207°): maxes at Cz=0.045-0.051 — muted (gamut wall)
 *
 * Setting chroma HIGH lets each hue reach its natural maximum. The hex()
 * function clips to gamut — vivid hues stay vivid, weak hues get their max.
 * The tonic (teal 207°) stays muted — the calm center, like in music.
 */
export const lightChroma: ChromaValues = {
  niente: 0,             // silence — achromatic
  ppp: 0.020,            // ~10% — punctuation, near-neutral
  pp: 0.035,             // ~18% — whisper
  p: 0.050,              // ~26% — quiet tokens
  mp: 0.085,             // ~45% — pushed to gamut ceiling for most hues
  mf: 0.100,             // ~53% — emphasis
  f: 0.115,              // ~60% — signal, maximum attention
  ff: 0.130,             // ~68% — alarm
  fff: 0.145,            // ~76% — extreme
};

/**
 * Light opacity scale — reduced alpha for equivalent visual weight on light surfaces.
 * Light backgrounds need less opacity to achieve the same perceptual presence.
 */
export const lightOpacity: OpacityScale = {
  subtle: '08',        // ~3% - faint hover backgrounds
  light: '12',         // ~7% - selection backgrounds, inactive states
  medium: '20',        // ~12% - active states, light borders
  strong: '30',        // ~19% - strong selections, visible borders
  heavy: '48',         // ~28% - modal overlays, strong borders
  solid: '68',         // ~41% - semi-transparent panels
  dense: 'BB',         // ~73% - tooltip backgrounds
  opaque: 'FF',        // 100% - solid colors
};

/**
 * Create primitives for light theme — Snow Miku Pâtisserie
 *
 * Foreground uses chocolate brown (hz 48°) — referencing SM2024 boots/skirt.
 * At Cz 0.022, it reads as visible brown — sepia ink on bisque paper. Dark enough
 * for Lc ~87 contrast, chromatic enough to feel like chocolate, not just near-black.
 * Both bg (hz 58°) and fg (hz 48°) live in the warm quadrant — a narrow harmony
 * at different registers, paper and ink singing the same warm note.
 */
export function createLightPrimitives(): Primitives {
  const lightSpecial: SpecialColors = {
    void: hex({ Jz: 0.185, Cz: 0.010, hz: 66 }),         // Deep paper — back of the shop
    foreground: hex({ Jz: 0.063, Cz: 0.018, hz: 50 }),    // Ink — warm dark, Lc ~87
    nearWhite: hex({ Jz: 0.035, Cz: 0.012, hz: 50 }),     // Dark ink — near-dark text
    transparent: special.transparent,
  };
  return {
    polarity: 'light' as const,
    lightness: lightLightness,
    chroma: lightChroma,
    hue: lightHue,
    character: lightCharacter,
    special: lightSpecial,
    opacity: lightOpacity,
  };
}

// =============================================================================
// VARIANT CONFIGURATIONS
// =============================================================================

export const variants: Record<ThemeVariant, VariantConfig> = {
  dark: {
    name: 'Hatsune Miku Theme',
    variant: 'dark',
    description: 'Default dark theme with Miku teal accents',
    primitives: createDarkPrimitives(),
  },
  light: {
    name: 'Hatsune Miku Theme (Snow Miku)',
    variant: 'light',
    description: 'Snow Miku — warm light theme, coding inside her pâtisserie',
    primitives: createLightPrimitives(),
  },
};

// =============================================================================
// VARIANT GENERATION
// =============================================================================

/**
 * Generate semantic tokens for a specific variant
 */
export function generateVariantTokens(variant: ThemeVariant): SemanticTokens {
  const config = variants[variant];
  return createSemanticTokens(config.primitives);
}

/**
 * Generate all variant tokens
 */
export function generateAllVariants(): Record<ThemeVariant, SemanticTokens> {
  return {
    dark: generateVariantTokens('dark'),
    light: generateVariantTokens('light'),
  };
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Adjust a single semantic role's lightness
 */
export function adjustLightness(role: SemanticRole, delta: number): SemanticRole {
  if (role.jzczhz.Jz === 0) {
    // This is a hex-based role, can't adjust
    return role;
  }

  const newJz = Math.max(0, Math.min(0.22, role.jzczhz.Jz + delta));
  const newJzczhz = { ...role.jzczhz, Jz: newJz };

  return {
    ...role,
    jzczhz: newJzczhz,
    hex: hex(newJzczhz),
  };
}

/**
 * Shift a single semantic role's hue
 */
export function shiftHue(role: SemanticRole, delta: number): SemanticRole {
  if (role.jzczhz.Jz === 0) {
    return role;
  }

  const newHz = (role.jzczhz.hz + delta + 360) % 360;
  const newJzczhz = { ...role.jzczhz, hz: newHz };

  return {
    ...role,
    jzczhz: newJzczhz,
    hex: hex(newJzczhz),
  };
}

/**
 * Scale a single semantic role's chroma
 */
export function scaleChroma(role: SemanticRole, factor: number): SemanticRole {
  if (role.jzczhz.Jz === 0) {
    return role;
  }

  const newCz = Math.max(0, Math.min(0.19, role.jzczhz.Cz * factor));
  const newJzczhz = { ...role.jzczhz, Cz: newCz };

  return {
    ...role,
    jzczhz: newJzczhz,
    hex: hex(newJzczhz),
  };
}
