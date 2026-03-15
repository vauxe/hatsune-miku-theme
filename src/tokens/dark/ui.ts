/**
 * Dark UI, Status, and Git Token Definitions
 *
 * Skirt-centered background tiers: the skirt is the stage, the darkest
 * regular surface. Structural chrome (House) rises above it, overlays
 * (Float) rise higher. Four tiers: void < stage (editor) < house < float.
 * Step sizes: 0.008 Jz (Void->Stage, Stage->House), 0.007 (House->Float).
 *
 * Status colors tell the story of your code: success in negi green,
 * errors in tritone red. Git traces the narrative of creation and loss.
 */

import { role, roleFromHex } from '../role';
import { parseHex } from '../role';
import type { UITokens, StatusTokens, GitTokens } from '../types';
import type { Primitives } from '../primitives';

export function createUITokens(p: Primitives): UITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  // The skirt is the stage -- darkest regular surface, content lives here
  // House rises above for structural chrome, Float above that for overlays
  const STEP_CONTENT = 0.008;  // Void->Stage, Stage->House (DEz ~4)
  const STEP_FLOAT = 0.007;    // House->Float (slightly smaller to keep Float tame)
  const skirt = parseHex(char.skirt.base);
  // Above-base tiers: lighter in dark
  const aboveDir = 1;

  return {
    foreground: roleFromHex(
      'Primary text -- soft ice-white, readable for hours',
      p.special.foreground
    ),
    foregroundMuted: role(
      'Secondary text -- silver, the quiet accompaniment',
      L.soprano, C.ppp, H.sky
    ),
    foregroundSubtle: role(
      'Tertiary text -- barely there, like distant reverb',
      L.countertenor, C.ppp, H.sky
    ),
    background: roleFromHex(
      'Stage -- the skirt, editor anchor (darkest regular surface)',
      char.skirt.base
    ),
    backgroundFloat: role(
      'Float -- overlays, hover, menus (step +2)',
      skirt.Jz + aboveDir * (STEP_CONTENT + STEP_FLOAT), skirt.Cz, skirt.hz
    ),
    backgroundHouse: role(
      'House -- sidebar, tabs, activity bar, status bar (step +1)',
      skirt.Jz + aboveDir * STEP_CONTENT, skirt.Cz, skirt.hz
    ),
    backgroundVoid: role(
      'Void -- empty groups, shadows (step -1)',
      skirt.Jz - aboveDir * STEP_CONTENT,
      skirt.Cz * 0.4,
      skirt.hz
    ),
    accentPrimary: roleFromHex('Primary accent -- her hair, #39C5BB', char.hair.base),
    accentSecondary: (() => {
      const hl = parseHex(char.hair.highlight);
      return role(
        'Secondary accent -- hair highlight, lightened for Lc>=70 as foreground',
        hl.Jz + 0.015, hl.Cz, hl.hz
      );
    })(),
    accentTertiary: roleFromHex('Tertiary accent -- hair tip, the lightest end of her color', char.hair.tip),
    border: roleFromHex('Border -- drawn in her teal', char.hair.base),
    borderSubtle: roleFromHex('Subtle border -- a breath of teal', char.hair.base),
    selection: roleFromHex('Selection -- when you choose code, you highlight it with her color', char.hair.base),
    cursor: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Her presence -- headphone cushion magenta, lightened for cursor visibility',
        cushion.Jz + 0.055, cushion.Cz, cushion.hz
      );
    })(),
    link: roleFromHex('Links -- her highlight color, clickable and alive', char.hair.highlight),
    linkActive: roleFromHex('Active link -- her brightest hair highlight, fully present', char.hair.bright),
    // Extended UI tokens
    nearWhite: roleFromHex(
      'Negi white -- the softest green light from her iconic prop',
      p.special.nearWhite
    ),
    tertiary: role(
      'Tertiary text - muted sky',
      L.countertenor, C.ppp, H.sky
    ),
    disabled: role(
      'Disabled state - same as tertiary',
      L.countertenor, C.ppp, H.sky
    ),
    disabledSubtle: role(
      'Very subtle disabled',
      L.contrabass, C.ppp, H.sky
    ),
    ghostText: role(
      'Ghost text -- she suggests, faintly, in teal',
      L.alto, 0.025, H.mikuTeal
    ),
    placeholder: role(
      'Placeholder text - Non-Text Lc 30+',
      L.countertenor, 0.020, H.sky
    ),
    whitespace: role(
      'Whitespace markers',
      L.countertenor, C.ppp, H.sky
    ),
    ruler: role(
      'Rulers',
      L.countertenor, C.ppp, H.sky
    ),
    terminalHint: role(
      'Terminal hints -- her teal nudge, Lc 50+',
      L.alto, C.pp, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal command guide -- subtle teal path, Lc 45+',
      L.countertenor + 0.01, 0.025, H.mikuTeal
    ),
    deprecated: role(
      'Deprecated - lavender',
      L.soprano + 0.008, C.mp, H.lavender  // +Jz: blue gamut comp
    ),
    minimapOpacity: `${p.special.void}DD`,
    errorForeground: role(
      'The tritone -- UI error, vivid rose dissonance',
      L.soprano, C.mf, H.tritone
    ),
    buttonBackground: (() => {
      const hairShadow = parseHex(char.hair.shadow);
      return role(
        'Her hair shadow -- roots darkened for button contrast',
        hairShadow.Jz - 0.012, hairShadow.Cz, hairShadow.hz
      );
    })(),
    badgeBackground: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Her headphone cushion -- darkened for badge readability',
        cushion.Jz - 0.050, cushion.Cz, cushion.hz
      );
    })(),
    activeBorder: roleFromHex('Her headphone cushion -- canonical magenta for active borders', char.headphones.cushion),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { lightness: L, chroma: C } = p;

  // Four-quadrant status: 0 error, 90 warning, 180 success, 270 info.
  // Maximum hue separation (90 apart) -- CVD-safe by geometry.
  // Four-quadrant hues +-15, Jz shaped to each hue's sRGB gamut ceiling:
  //   teal(170) bright at high Jz; rose(345) vivid at low Jz.
  // Under deutan, 345/170/260 all project blue -- DJz 0.020 + DCz backup.
  // Info shares Jz tier with success (90 apart = CVD-safe by hue).
  // Hues are CVD-tuned off-grid (170/85/330/260) -- hardcoded, not from H.*.
  return {
    success: role('Teal success -- she nods in her own color', 0.190, 0.065, 170),
    warning: role('Gold warning -- concert wand amber, caution', L.soprano, C.mf, 85),
    error: role('Magenta error -- her tattoo mark, something broke', 0.178, 0.080, 330),
    info: role('Blue info -- calm, neutral sky', 0.190, 0.040, 260),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { character: char } = p;

  // Six-hue wheel: 0 / 85 / 150 / 210 / 265 / 320 -- minimum gap 40.
  // CVD stagger: deutan merges cool hues -> Jz tiers: added(0.190) > untracked(0.180)
  //   > renamed(0.170) > deleted(0.174). Warm pair: modified(0.185) vs conflicting(0.165).
  // Primary trio vivid (Cz 0.065-0.080), secondary trio quieter (Cz 0.045-0.070).
  // All Jz/Cz/Hz are CVD-tuned off-grid -- hardcoded, not from L/C/H registers.
  return {
    added: role('Negi green -- new life in the code tree',
      0.190, 0.065, 150),
    modified: role('Concert gold -- Magical Mirai stage light, she painted the change',
      0.185, 0.075, 85),
    deleted: role('Nightcord magenta -- silence where code once lived',
      0.178, 0.080, 320),
    untracked: role('Frost cyan -- unknown files drifting in like snow',
      0.180, 0.045, 210),
    conflicting: role('Rose conflict -- her tattoo mark, demands resolution',
      0.165, 0.070, 0),
    renamed: role('Starlight blue -- Digital Stars, same light, new name',
      0.170, 0.055, 265),
    stageModified: role('Concert gold faded -- accepted change, muted',
      0.165, 0.025, 85),
    stageDeleted: role('Nightcord faded -- accepted loss, muted magenta',
      0.170, 0.025, 320),
    submodule: roleFromHex('Vest silver -- structure, external reference', char.top.main),
  };
}
