/**
 * UI, Status, and Git Token Definitions
 *
 * Defines color roles for editor UI, status indicators, and git decorations.
 */

import { role, roleFromHex } from './role';
import type { UITokens, ExtendedUITokens, StatusTokens, GitTokens } from './types';
import type { Primitives } from './primitives';

export function createUITokens(p: Primitives): UITokens & ExtendedUITokens {
  const { lightness: L, chroma: C, hue: H, character: char } = p;

  return {
    foreground: roleFromHex(
      'Primary text - soft ice-white',
      '#C0D8E0'
    ),
    foregroundMuted: role(
      'Secondary text - silver',
      L.secondary, C.gray, H.sky
    ),
    foregroundSubtle: role(
      'Tertiary text - muted',
      L.tertiary, C.gray, H.sky
    ),
    background: roleFromHex(
      'Editor background - skirt base',
      char.skirt.base
    ),
    backgroundElevated: roleFromHex(
      'Widget background - arm warmers',
      char.armWarmers.base
    ),
    backgroundSurface: roleFromHex(
      'Sidebar background - headphones frame',
      char.headphones.frame
    ),
    backgroundOverlay: roleFromHex(
      'Section headers - top shadow',
      char.top.shadow
    ),
    accentPrimary: roleFromHex(
      'Primary accent - hair base',
      char.hair.base
    ),
    accentSecondary: roleFromHex(
      'Secondary accent - hair highlight',
      char.hair.highlight
    ),
    accentTertiary: roleFromHex(
      'Tertiary accent - hair tip',
      char.hair.tip
    ),
    border: roleFromHex(
      'Border - hair base with alpha',
      char.hair.base
    ),
    borderSubtle: roleFromHex(
      'Subtle border - hair base with lower alpha',
      char.hair.base
    ),
    selection: roleFromHex(
      'Selection background - hair base',
      char.hair.base
    ),
    cursor: roleFromHex(
      'Cursor - magenta accent',
      char.hairTies.outline
    ),
    link: roleFromHex(
      'Link text - hair highlight',
      char.hair.highlight
    ),
    linkActive: role(
      'Active link - vibrant teal',
      L.vibrant, C.vibrant, H.mikuTeal
    ),
    // Extended UI tokens
    void: roleFromHex(
      'Deepest void - near black',
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
      'Ghost text - Lc 45+ teal hint',
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
      'Pink error - accent tier',
      L.vibrantWarm, C.vibrant, H.mikuPink
    ),
  };
}

export function createStatusTokens(p: Primitives): StatusTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    success: role(
      'Success - bright mint',
      L.vibrant, C.vibrant, H.mint
    ),
    warning: role(
      'Warning - golden amber',
      L.vibrant, C.vibrant, H.amber
    ),
    error: role(
      'Error - pink (Miku pink accent)',
      L.vibrantWarm, C.vibrant, H.mikuPink
    ),
    info: role(
      'Info - Miku cyan',
      L.vibrant, C.vibrant, H.mikuTeal
    ),
  };
}

export function createGitTokens(p: Primitives): GitTokens {
  const { lightness: L, chroma: C, hue: H } = p;

  return {
    added: role(
      'Git added - bright mint',
      L.vibrant, C.vibrant, H.mint
    ),
    modified: role(
      'Git modified - warm gold',
      L.vibrant, C.vibrant, H.gold
    ),
    deleted: role(
      'Git deleted - red',
      L.vibrantWarm, C.vibrant, H.gitRed
    ),
    untracked: role(
      'Git untracked - Miku cyan',
      L.vibrant, C.vibrant, H.ice
    ),
    conflicting: role(
      'Git conflicting - blue-violet',
      L.primary, C.comfortable, H.gitViolet
    ),
    renamed: role(
      'Git renamed - lavender',
      L.primary, C.comfortable, H.lavender
    ),
    stageModified: role(
      'Git stage modified - cyan',
      L.vibrant, C.vibrant, H.ice
    ),
    stageDeleted: role(
      'Git stage deleted - light lavender',
      L.primary, C.comfortable, H.lavender
    ),
    submodule: role(
      'Git submodule - sky blue',
      L.primary, C.comfortable, H.sky
    ),
  };
}
