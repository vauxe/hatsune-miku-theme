/**
 * UI, Status, and Git Token Definitions
 *
 * Skirt-centered background steps: the skirt is the stage, the single
 * anchor. Every other background tier is exactly N steps above or below
 * it — uniform Jz increments (0.004 dark, 0.005 light). When your eyes
 * move between UI areas, the transition is smooth — like light falling
 * across her outfit from the dark hem to the bright collar.
 *
 * Status colors tell the story of your code: success in negi green,
 * errors in tritone red. Git traces the narrative of creation and loss.
 */

import { role, roleFromHex } from './role';
import { parseHex } from './jzczhz';
import type { UITokens, ExtendedUITokens, StatusTokens, GitTokens } from './types';
import type { Primitives } from './primitives';

export function createUITokens(p: Primitives): UITokens & ExtendedUITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  // The skirt is the stage — one anchor, uniform steps up and down
  const STEP = p.polarity === 'light' ? 0.005 : 0.004;
  const skirt = parseHex(char.skirt.base);
  // Above-base tiers: lighter in dark, darker in light
  const aboveDir = p.polarity === 'light' ? -1 : 1;

  return {
    foreground: roleFromHex(
      'Primary text — soft ice-white, readable for hours',
      p.special.foreground
    ),
    foregroundMuted: role(
      'Secondary text — silver, the quiet accompaniment',
      L.soprano, C.ppp, H.sky
    ),
    foregroundSubtle: role(
      'Tertiary text — barely there, like distant reverb',
      L.countertenor, C.ppp, H.sky
    ),
    background: roleFromHex(
      'The skirt — the editor canvas, the anchor (step 0)',
      char.skirt.base
    ),
    backgroundElevated: role(
      'Inner pleat — one step darker than the stage (step −1)',
      skirt.Jz - STEP, skirt.Cz, skirt.hz
    ),
    backgroundSurface: role(
      'Light rising above the skirt — title bar territory (step +1)',
      skirt.Jz + aboveDir * STEP, skirt.Cz, skirt.hz
    ),
    backgroundOverlay: role(
      'Audience light — sidebar territory (step +2)',
      skirt.Jz + aboveDir * 2 * STEP, skirt.Cz, skirt.hz
    ),
    backgroundHighest: role(
      'FOH — the brightest operational tier, status bar (step +3)',
      skirt.Jz + aboveDir * 3 * STEP, skirt.Cz, skirt.hz
    ),
    accentPrimary: p.polarity === 'light'
      ? roleFromHex('Primary accent — sleeve amber, warm pâtisserie frame', char.tie.base)
      : roleFromHex('Primary accent — her hair, #39C5BB', char.hair.base),
    accentSecondary: (() => {
      if (p.polarity === 'light') {
        // Use the bow terracotta directly — Lc≈73 on cream, passes secondary threshold,
        // and matches the illustration's vivid terracotta bows against warm cream
        return roleFromHex(
          'Secondary accent — bow terracotta, her warm presence on snow',
          char.headphones.cushion
        );
      }
      const hl = parseHex(char.hair.highlight);
      return role(
        'Secondary accent — hair highlight, lightened for Lc≥70 as foreground',
        hl.Jz + 0.015, hl.Cz, hl.hz
      );
    })(),
    accentTertiary: (() => {
      if (p.polarity === 'light') {
        const hs = parseHex(char.hair.shadow);
        return role('Tertiary accent — hair shadow darkened for Lc≥70 on snow', hs.Jz - 0.015, hs.Cz, hs.hz);
      }
      return roleFromHex('Tertiary accent — hair tip, the lightest end of her color', char.hair.tip);
    })(),
    border: p.polarity === 'light'
      ? roleFromHex('Warm border — sleeve amber frame', char.tie.base)
      : roleFromHex('Border — drawn in her teal', char.hair.base),
    borderSubtle: p.polarity === 'light'
      ? roleFromHex('Subtle warm border — faint sleeve amber', char.tie.base)
      : roleFromHex('Subtle border — a breath of teal', char.hair.base),
    selection: p.polarity === 'light'
      ? roleFromHex('Warm selection — honey highlight', char.tie.base)
      : roleFromHex('Selection — when you choose code, you highlight it with her color', char.hair.base),
    cursor: (() => {
      const cushion = parseHex(char.headphones.cushion);
      if (p.polarity === 'light') {
        return role(
          'Her presence — headphone cushion magenta, darkened for visibility on snow',
          cushion.Jz - 0.015, cushion.Cz, cushion.hz
        );
      }
      return role(
        'Her presence — headphone cushion magenta, lightened for cursor visibility',
        cushion.Jz + 0.055, cushion.Cz, cushion.hz
      );
    })(),
    link: (() => {
      if (p.polarity === 'light') {
        const hs = parseHex(char.hair.shadow);
        return role('Links — hair shadow darkened for Lc≥70 on snow', hs.Jz - 0.015, hs.Cz, hs.hz);
      }
      return roleFromHex('Links — her highlight color, clickable and alive', char.hair.highlight);
    })(),
    linkActive: (() => {
      if (p.polarity === 'light') {
        const ts = parseHex(char.tie.shadow);
        return role('Active link — tie shadow darkened for Lc≥70 on snow', ts.Jz - 0.020, ts.Cz, ts.hz);
      }
      return roleFromHex('Active link — her brightest hair highlight, fully present', char.hair.bright);
    })(),
    // Extended UI tokens
    void: role(
      'Deepest shadow below the stage — the void (step −2)',
      skirt.Jz - 2 * STEP,
      p.polarity === 'light' ? skirt.Cz * 0.85 : skirt.Cz * 0.4,  // Light: keep warm (0.017), dark: desaturate
      skirt.hz
    ),
    nearWhite: roleFromHex(
      'Negi white — the softest green light from her iconic prop',
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
      'Ghost text — she suggests, faintly, in teal',
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
      'Terminal hints — her teal nudge, Lc 50+',
      L.alto, 0.030, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal command guide — subtle teal path, Lc 45+',
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
    variableLanguage: role(
      'Language variables - shifted teal',
      p.polarity === 'light' ? 0.058 : L.soprano, p.polarity === 'light' ? 0.048 : C.mf,
      p.polarity === 'light' ? 197 : H.mikuTeal - 3
    ),
    minimapOpacity: p.polarity === 'light' ? `${char.top.blouse}DD` : `${p.special.void}DD`,
    error: role(
      'The tritone — UI error, vivid rose dissonance',
      L.alto, C.f, H.rose
    ),
    buttonBackground: (() => {
      if (p.polarity === 'light') {
        // Light: bow terracotta — warm, eye-catching on cream
        return roleFromHex('Terracotta button — the bow, eye-catching on cream', char.headphones.cushion);
      }
      const hairShadow = parseHex(char.hair.shadow);
      return role(
        'Her hair shadow — roots darkened for button contrast',
        hairShadow.Jz - 0.012, hairShadow.Cz, hairShadow.hz
      );
    })(),
    badgeBackground: (() => {
      if (p.polarity === 'light') {
        // Light: bow terracotta — warm, attention-grabbing on cream
        return roleFromHex('SM2024 bow terracotta — warm badge on cream', char.headphones.cushion);
      }
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Her headphone cushion — darkened for badge readability',
        cushion.Jz - 0.050, cushion.Cz, cushion.hz
      );
    })(),
    activeBorder: p.polarity === 'light'
      ? roleFromHex('Active border — sleeve amber, warm indicator trim', char.tie.base)
      : roleFromHex('Her headphone cushion — canonical magenta for active borders', char.headphones.cushion),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  if (p.polarity === 'light') {
    return {
      success: role('Sage success — organic green on cream', 0.072, 0.085, 155),
      warning: role('Amber warning — warm caution', 0.082, 0.080, 75),
      error: role('Terracotta error — vivid alert', 0.075, 0.110, 20),
      info: role('Teal info — calm tonic', 0.060, 0.075, 200),
    };
  }
  return {
    success: roleFromHex('Negi bright green — it worked, new life', char.negi.bright),
    warning: role('Minor 6th — caution, warm orange', L.soprano, C.mp, H.orange),
    error: role(
      'The tritone — maximum dissonance, something is wrong',
      L.alto, C.f, H.rose
    ),
    info: role(
      'Her calm voice — tonic teal, information without alarm',
      L.soprano, C.mf, H.mikuTeal
    ),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  if (p.polarity === 'light') {
    return {
      added: role('Blue-teal added — deep blue axis for CVD safety', 0.058, 0.090, 220),
      modified: role('Amber modified — warm change', 0.072, 0.080, 75),
      deleted: role('Terracotta deleted — vivid loss, Jz 0.100 for CVD tier separation', 0.100, 0.110, 20),
      untracked: role('Teal untracked — not yet tracked', 0.072, 0.085, 200),
      conflicting: role('Blue conflicting — demands resolution', 0.072, 0.085, 260),
      renamed: role('Sage renamed — same content, new address', 0.058, 0.075, 155),
      stageModified: role('Muted teal staged — accepted change', 0.072, 0.050, 200),
      stageDeleted: role('Azure staged delete — cooled from parent', 0.055, 0.080, 260),
      submodule: role('Muted azure submodule — external reference', 0.058, 0.050, 260),
    };
  }
  return {
    added: role('New life — lime in the code tree', L.soprano, C.f, H.lime),
    modified: role(
      'Change — warm orange, the story evolves',
      L.soprano, C.mp, H.orange
    ),
    deleted: role(
      'Loss — tritone rose, something was removed',
      L.sopranino, C.f, H.gitRose
    ),
    untracked: role(
      'Undiscovered — her cyan, not yet part of the story',
      L.soprano, C.mf, H.cyan
    ),
    conflicting: role(
      'Tension — blue, demanding manual resolution',
      L.soprano, C.mf, H.blue
    ),
    renamed: role(
      'Transformation — green, same content at a new address',
      L.soprano, C.mp, H.green
    ),
    stageModified: role(
      'Change accepted — muted teal, resting in the tonic',
      L.soprano, C.p, H.mikuTeal
    ),
    stageDeleted: role(
      'Loss accepted — azure, cooled from parent rose',
      L.soprano, C.mp, H.azure
    ),
    submodule: role(
      'External world — muted azure, a reference beyond this repo',
      L.soprano, C.p, H.azure
    ),
  };
}
