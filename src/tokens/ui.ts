/**
 * UI, Status, and Git Token Definitions
 *
 * Skirt-centered background steps: the skirt is the stage, the single
 * anchor. Every other background tier is exactly N steps above or below
 * it — uniform 0.003 Jz increments. When your eyes
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
  const STEP = 0.004;
  const skirt = parseHex(char.skirt.base);

  return {
    foreground: roleFromHex(
      'Primary text — soft ice-white, readable for hours',
      '#C8DEE5'
    ),
    foregroundMuted: role(
      'Secondary text — silver, the quiet accompaniment',
      L.secondary, C.gray, H.sky
    ),
    foregroundSubtle: role(
      'Tertiary text — barely there, like distant reverb',
      L.tertiary, C.gray, H.sky
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
      skirt.Jz + STEP, skirt.Cz, skirt.hz
    ),
    backgroundOverlay: role(
      'Audience light — sidebar territory (step +2)',
      skirt.Jz + 2 * STEP, skirt.Cz, skirt.hz
    ),
    backgroundHighest: role(
      'FOH — the brightest operational tier, status bar (step +3)',
      skirt.Jz + 3 * STEP, skirt.Cz, skirt.hz
    ),
    accentPrimary: roleFromHex(
      'Primary accent — her hair, #39C5BB',
      char.hair.base
    ),
    accentSecondary: roleFromHex(
      'Secondary accent — hair highlight, light catching her twin tails',
      char.hair.highlight
    ),
    accentTertiary: roleFromHex(
      'Tertiary accent — hair tip, the lightest end of her color',
      char.hair.tip
    ),
    border: roleFromHex(
      'Border — drawn in her teal',
      char.hair.base
    ),
    borderSubtle: roleFromHex(
      'Subtle border — a breath of teal',
      char.hair.base
    ),
    selection: roleFromHex(
      'Selection — when you choose code, you highlight it with her color',
      char.hair.base
    ),
    cursor: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Her presence — headphone cushion magenta, lightened for cursor visibility',
        cushion.Jz + 0.055, cushion.Cz, cushion.hz
      );
    })(),
    link: roleFromHex(
      'Links — her highlight color, clickable and alive',
      char.hair.highlight
    ),
    linkActive: roleFromHex(
      'Active link — her brightest hair highlight, fully present',
      char.hair.bright
    ),
    // Extended UI tokens
    void: role(
      'Deepest shadow below the stage — the void (step −2)',
      skirt.Jz - 2 * STEP, skirt.Cz * 0.4, skirt.hz
    ),
    pureWhite: roleFromHex(
      'Pure white - maximum contrast',
      '#FFFFFF'
    ),
    nearWhite: roleFromHex(
      'Negi white — the softest green light from her iconic prop',
      char.negi.white
    ),
    tertiary: role(
      'Tertiary text - muted sky',
      L.tertiary, 0.015, H.sky
    ),
    disabled: role(
      'Disabled state - same as tertiary',
      L.tertiary, 0.015, H.sky
    ),
    disabledSubtle: role(
      'Very subtle disabled',
      0.08, 0.015, H.sky
    ),
    ghostText: role(
      'Ghost text — she suggests, faintly, in teal',
      L.tertiary + 0.02, 0.025, H.mikuTeal
    ),
    placeholder: role(
      'Placeholder text - Non-Text Lc 30+',
      L.tertiary, 0.020, H.sky
    ),
    whitespace: role(
      'Whitespace markers',
      L.tertiary, 0.015, H.sky
    ),
    ruler: role(
      'Rulers',
      L.tertiary, 0.015, H.sky
    ),
    terminalHint: role(
      'Terminal hints — her teal nudge, Lc 50+',
      L.tertiary + 0.02, 0.030, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal command guide — subtle teal path, Lc 45+',
      L.tertiary + 0.01, 0.025, H.mikuTeal
    ),
    operator: role(
      'Operators - pink/magenta',
      L.primaryWarm, C.comfortable, H.mikuPink
    ),
    deprecated: role(
      'Deprecated - lavender',
      L.primary, C.comfortable, H.lavender
    ),
    variableLanguage: role(
      'Language variables - shifted teal',
      L.vibrant, C.vibrant, H.mikuTeal - 3
    ),
    minimapOpacity: '#000000DD',
    error: role(
      'The tritone — UI error, vivid rose dissonance',
      L.vibrantWarm + 0.020, C.vivid, H.rose
    ),
    buttonBackground: (() => {
      const hairShadow = parseHex(char.hair.shadow);
      return role(
        'Her hair shadow — roots darkened for button contrast',
        hairShadow.Jz - 0.012, hairShadow.Cz, hairShadow.hz
      );
    })(),
    badgeBackground: (() => {
      const cushion = parseHex(char.headphones.cushion);
      return role(
        'Her headphone cushion — darkened for badge readability',
        cushion.Jz - 0.050, cushion.Cz, cushion.hz
      );
    })(),
    activeBorder: roleFromHex(
      'Her headphone cushion — canonical magenta for active borders',
      char.headphones.cushion
    ),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  return {
    success: roleFromHex(
      'Negi bright green — it worked, new life',
      char.negi.bright
    ),
    warning: role(
      'Minor 6th — caution, warm orange',
      L.vibrant, C.comfortable, H.orange
    ),
    error: role(
      'The tritone — maximum dissonance, something is wrong',
      L.vibrantWarm + 0.025, C.vivid, H.rose
    ),
    info: role(
      'Her calm voice — tonic teal, information without alarm',
      L.vibrant - 0.01, C.vibrant, H.mikuTeal
    ),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  return {
    added: role(
      'New life — lime in the code tree',
      L.vibrant - 0.010, C.vivid, H.lime
    ),
    modified: role(
      'Change — warm orange, the story evolves',
      L.vibrant, C.comfortable, H.orange
    ),
    deleted: role(
      'Loss — tritone rose, something was removed',
      L.vibrantWarm + 0.025, C.vivid, H.gitRose
    ),
    untracked: role(
      'Undiscovered — her cyan, not yet part of the story',
      L.vibrant, C.vibrant, H.cyan
    ),
    conflicting: role(
      'Tension — blue, demanding manual resolution',
      L.vibrant, C.vibrant, H.blue
    ),
    renamed: role(
      'Transformation — green, same content at a new address',
      L.primary, C.comfortable, H.green
    ),
    stageModified: role(
      'Change accepted — muted teal, resting in the tonic',
      L.muted, C.muted, H.mikuTeal
    ),
    stageDeleted: role(
      'Loss accepted — azure, cooled from parent rose',
      L.primary, C.comfortable, H.azure
    ),
    submodule: role(
      'External world — muted azure, a reference beyond this repo',
      L.secondary, C.muted, H.azure
    ),
  };
}
