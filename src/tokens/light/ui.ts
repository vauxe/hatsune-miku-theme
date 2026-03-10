/**
 * Light UI, Status, and Git Token Definitions
 *
 * Skirt-centered background tiers: the skirt is the stage (editor canvas).
 * In light theme, above-base tiers go DARKER (aboveDir = -1).
 * Four tiers: void < stage (editor) < house < float.
 * Step sizes: 0.008 Jz (Void->Stage, Stage->House), 0.007 (House->Float).
 *
 * Status colors tell the story of your code: success in teal,
 * errors in magenta. Git traces the narrative of creation and loss.
 */

import { role, roleFromHex } from '../role';
import { parseHex } from '../jzczhz';
import type { UITokens, ExtendedUITokens, StatusTokens, GitTokens } from '../types';
import type { Primitives } from '../primitives';

export function createUITokens(p: Primitives): UITokens & ExtendedUITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  // The skirt is the stage -- editor canvas, lightest regular surface in light theme
  // House goes darker for structural chrome, Float darker still for overlays
  const STEP_CONTENT = 0.008;  // Void->Stage, Stage->House (DEz ~4)
  const STEP_FLOAT = 0.007;    // House->Float (slightly smaller to keep Float tame)
  const skirt = parseHex(char.skirt.base);
  // Above-base tiers: darker in light
  const aboveDir = -1;

  return {
    foreground: roleFromHex(
      'Primary text -- chocolate ink, readable for hours',
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
      'Stage -- the skirt, editor anchor (lightest regular surface)',
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
      skirt.Cz * 0.85,
      skirt.hz
    ),
    accentPrimary: roleFromHex('Primary accent -- sleeve amber, warm patisserie frame', char.tie.base),
    accentSecondary: (() => {
      // Use the bow terracotta directly -- Lc~73 on cream, passes secondary threshold,
      // and matches the illustration's vivid terracotta bows against warm cream
      return roleFromHex(
        'Secondary accent -- bow terracotta, her warm presence on snow',
        char.headphones.cushion
      );
    })(),
    accentTertiary: (() => {
      const hs = parseHex(char.hair.shadow);
      return role('Tertiary accent -- hair shadow darkened for Lc>=70 on snow', hs.Jz - 0.015, hs.Cz, hs.hz);
    })(),
    border: roleFromHex('Warm border -- sleeve amber frame', char.tie.base),
    borderSubtle: roleFromHex('Subtle warm border -- faint sleeve amber', char.tie.base),
    selection: roleFromHex('Warm selection -- honey highlight', char.tie.base),
    cursor: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Her presence -- headphone cushion magenta, darkened for visibility on snow',
        cushion.Jz - 0.015, cushion.Cz, cushion.hz
      );
    })(),
    link: (() => {
      const hs = parseHex(char.hair.shadow);
      return role('Links -- hair shadow darkened for Lc>=70 on snow', hs.Jz - 0.015, hs.Cz, hs.hz);
    })(),
    linkActive: (() => {
      const ts = parseHex(char.tie.shadow);
      return role('Active link -- tie shadow darkened for Lc>=70 on snow', ts.Jz - 0.020, ts.Cz, ts.hz);
    })(),
    // Extended UI tokens
    nearWhite: roleFromHex(
      'Negi white -- the softest green light from her iconic prop',
      p.special.nearWhite
    ),
    tertiary: role(
      'Tertiary text - muted sky',
      L.countertenor, 0.015, H.sky
    ),
    disabled: role(
      'Disabled state - same as tertiary',
      L.countertenor, 0.015, H.sky
    ),
    disabledSubtle: role(
      'Very subtle disabled',
      0.08, 0.015, H.sky
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
      L.countertenor, 0.015, H.sky
    ),
    ruler: role(
      'Rulers',
      L.countertenor, 0.015, H.sky
    ),
    terminalHint: role(
      'Terminal hints -- her teal nudge, Lc 50+',
      L.alto, 0.030, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal command guide -- subtle teal path, Lc 45+',
      L.countertenor + 0.01, 0.025, H.mikuTeal
    ),
    operator: role(
      'Operators - pink/magenta',
      L.soprano, C.mp, H.mikuPink
    ),
    deprecated: role(
      'Deprecated - lavender',
      L.soprano, C.mp, H.lavender
    ),
    minimapOpacity: `${char.top.blouse}DD`,
    error: role(
      'The tritone -- UI error, vivid rose dissonance',
      L.soprano, C.mf, H.rose
    ),
    buttonBackground: (() => {
      // Light: bow terracotta — warm, eye-catching on cream
      return roleFromHex('Terracotta button -- the bow, eye-catching on cream', char.headphones.cushion);
    })(),
    badgeBackground: (() => {
      // Light: bow terracotta — warm, attention-grabbing on cream
      return roleFromHex('SM2024 bow terracotta -- warm badge on cream', char.headphones.cushion);
    })(),
    activeBorder: roleFromHex('Active border -- sleeve amber, warm indicator trim', char.tie.base),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  // Four-quadrant status: 0 error, 90 warning, 180 success, 270 info.
  // Maximum hue separation (90 apart) -- CVD-safe by geometry.
  // Uniform Jz/Cz -- hue alone carries the meaning.
  return {
    success: role('Teal success -- her canonical color approves', 0.075, 0.050, 170),
    warning: role('Gold warning -- concert amber, proceed with care', 0.082, 0.078, 85),
    error: role('Magenta error -- her tattoo mark burns', 0.065, 0.082, 330),
    info: role('Blue info -- calm sky', 0.080, 0.075, 260),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  return {
    added: role('Blue-teal added -- deep blue axis for CVD safety', 0.058, 0.090, 220),
    modified: role('Amber modified -- warm change', 0.072, 0.080, 75),
    deleted: role('Terracotta deleted -- vivid loss, Jz 0.100 for CVD tier separation', 0.100, 0.110, 20),
    untracked: role('Teal untracked -- not yet tracked', 0.072, 0.085, 200),
    conflicting: role('Blue conflicting -- demands resolution', 0.072, 0.085, 260),
    renamed: role('Sage renamed -- same content, new address', 0.058, 0.075, 155),
    stageModified: role('Muted teal staged -- accepted change', 0.072, 0.050, 200),
    stageDeleted: role('Azure staged delete -- cooled from parent', 0.055, 0.080, 260),
    submodule: role('Muted azure submodule -- external reference', 0.058, 0.050, 260),
  };
}
