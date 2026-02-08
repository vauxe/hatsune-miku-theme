/**
 * UI, Status, and Git Token Definitions
 *
 * You code inside her world. The editor background is her skirt,
 * the sidebar is her top shadow, the activity bar is her arm warmers,
 * the title bar is her headphone frame, the status bar is her top.
 * Status colors tell the story of your code: success in negi green,
 * errors in tritone red. Git traces the narrative of creation and loss.
 */

import { role, roleFromHex } from './role';
import type { UITokens, ExtendedUITokens, StatusTokens, GitTokens } from './types';
import type { Primitives } from './primitives';

export function createUITokens(p: Primitives): UITokens & ExtendedUITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

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
      'Editor canvas — her skirt, the stage you code on',
      char.skirt.base
    ),
    backgroundElevated: roleFromHex(
      'Deep panels — her arm warmers, black with digital pattern',
      char.armWarmers.base
    ),
    backgroundSurface: roleFromHex(
      'Surface — her headphone frame, holding everything together',
      char.headphones.frame
    ),
    backgroundOverlay: roleFromHex(
      'Overlay — her top shadow, the layer beneath',
      char.top.shadow
    ),
    backgroundHighest: roleFromHex(
      'Highest surface — her top, the lightest background layer',
      char.top.main
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
    cursor: role(
      'Her presence — headphone cushion magenta, vivid at the point of creation',
      0.176, 0.085, 336
    ),
    link: roleFromHex(
      'Links — her highlight color, clickable and alive',
      char.hair.highlight
    ),
    linkActive: roleFromHex(
      'Active link — her brightest hair highlight, fully present',
      char.hair.bright
    ),
    // Extended UI tokens
    void: roleFromHex(
      'The dark before the concert begins',
      '#0A0D10'
    ),
    pureWhite: roleFromHex(
      'Pure white - maximum contrast',
      '#FFFFFF'
    ),
    nearWhite: roleFromHex(
      'Near white - soft white',
      '#F8F8F8'
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
      'Terminal hints - Lc 40',
      0.10, 0.030, H.mikuTeal
    ),
    terminalGuide: role(
      'Terminal command guide',
      0.07, 0.025, H.mikuTeal
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
      'The tritone — UI error, vivid red dissonance',
      L.vibrantWarm + 0.020, C.vivid, H.red
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
      'Stage lights dimming — caution, warm gold',
      L.vibrant, C.comfortable, H.gold
    ),
    error: role(
      'The tritone — maximum dissonance, something is wrong',
      L.vibrantWarm + 0.025, C.vivid, H.red
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
      'New life — negi green in the code tree',
      L.vibrant - 0.010, C.vivid, H.green
    ),
    modified: role(
      'Change — warm gold, the story evolves',
      L.vibrant, C.comfortable, H.gold
    ),
    deleted: role(
      'Loss — tritone red, something was removed',
      L.vibrantWarm + 0.025, C.vivid, H.gitRed
    ),
    untracked: role(
      'Undiscovered — her cyan, not yet part of the story',
      L.vibrant, C.vibrant, H.cyan
    ),
    conflicting: role(
      'Tension — violet, two truths that cannot coexist',
      L.secondary, C.vibrant, H.violet
    ),
    renamed: role(
      'Transformation — violet, the same thing with a new name',
      L.primary, C.comfortable, H.violet
    ),
    stageModified: role(
      'Prepared change — cyan, ready to become part of the story',
      L.vibrant, C.vibrant, H.cyan
    ),
    stageDeleted: role(
      'Prepared removal — violet, loss accepted',
      L.primary, C.comfortable, H.violet
    ),
    submodule: role(
      'External world — deep blue, a reference beyond this repo',
      L.primary, C.comfortable, H.blue
    ),
  };
}
