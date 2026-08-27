/**
 * Framework-neutral Web design tokens.
 *
 * The TypeScript semantic tokens remain the source of truth. This adapter
 * publishes a stable Web vocabulary, then renders it as DTCG JSON and CSS.
 */

import {
  opacity,
  selectionAlpha,
  withOpacity,
  type Polarity,
} from '../tokens';
import type { SemanticTokens } from '../tokens/types';
import Color from 'colorjs.io';

import { flattenEmbeddedAlpha } from './shared';

const WEB_THEME_BASENAME = 'hatsune-miku-theme';

export const WEB_THEME_ARTIFACTS = {
  basename: WEB_THEME_BASENAME,
  css: `${WEB_THEME_BASENAME}.css`,
  tokens: {
    light: `${WEB_THEME_BASENAME}-light.tokens.json`,
    dark: `${WEB_THEME_BASENAME}-dark.tokens.json`,
  },
} as const;

/**
 * Stable CSS interface for website consumers. Keep this list independent of
 * the internal token object so a path refactor cannot silently rename a
 * public custom property.
 */
const WEB_THEME_CUSTOM_PROPERTIES = [
  '--hm-color-accent-primary',
  '--hm-color-accent-secondary',
  '--hm-color-accent-tertiary',
  '--hm-color-action-primary-background-active',
  '--hm-color-action-primary-background-default',
  '--hm-color-action-primary-background-disabled',
  '--hm-color-action-primary-background-hover',
  '--hm-color-action-primary-border-default',
  '--hm-color-action-primary-border-focus',
  '--hm-color-action-primary-foreground-active',
  '--hm-color-action-primary-foreground-default',
  '--hm-color-action-primary-foreground-disabled',
  '--hm-color-action-primary-foreground-hover',
  '--hm-color-action-secondary-background-active',
  '--hm-color-action-secondary-background-default',
  '--hm-color-action-secondary-background-disabled',
  '--hm-color-action-secondary-background-hover',
  '--hm-color-action-secondary-border-default',
  '--hm-color-action-secondary-border-focus',
  '--hm-color-action-secondary-foreground-active',
  '--hm-color-action-secondary-foreground-default',
  '--hm-color-action-secondary-foreground-disabled',
  '--hm-color-action-secondary-foreground-hover',
  '--hm-color-border-default',
  '--hm-color-border-focus',
  '--hm-color-border-subtle',
  '--hm-color-caret',
  '--hm-color-field-background',
  '--hm-color-field-border-default',
  '--hm-color-field-border-disabled',
  '--hm-color-field-border-focus',
  '--hm-color-field-border-hover',
  '--hm-color-field-foreground-default',
  '--hm-color-field-foreground-disabled',
  '--hm-color-focus-ring',
  '--hm-color-interaction-background-active',
  '--hm-color-interaction-background-hover',
  '--hm-color-interaction-background-selected',
  '--hm-color-interaction-border-focus',
  '--hm-color-interaction-foreground-disabled',
  '--hm-color-link-active',
  '--hm-color-link-default',
  '--hm-color-selection-background',
  '--hm-color-selection-foreground',
  '--hm-color-status-error',
  '--hm-color-status-info',
  '--hm-color-status-success',
  '--hm-color-status-warning',
  '--hm-color-surface-chrome',
  '--hm-color-surface-content',
  '--hm-color-surface-overlay',
  '--hm-color-surface-page',
  '--hm-color-syntax-attribute',
  '--hm-color-syntax-boolean',
  '--hm-color-syntax-class',
  '--hm-color-syntax-comment',
  '--hm-color-syntax-comment-doc',
  '--hm-color-syntax-constant',
  '--hm-color-syntax-enum',
  '--hm-color-syntax-enum-member',
  '--hm-color-syntax-function',
  '--hm-color-syntax-interface',
  '--hm-color-syntax-keyword',
  '--hm-color-syntax-keyword-alt',
  '--hm-color-syntax-keyword-control',
  '--hm-color-syntax-macro',
  '--hm-color-syntax-method',
  '--hm-color-syntax-number',
  '--hm-color-syntax-operator',
  '--hm-color-syntax-parameter',
  '--hm-color-syntax-property',
  '--hm-color-syntax-punctuation',
  '--hm-color-syntax-regex',
  '--hm-color-syntax-storage',
  '--hm-color-syntax-storage-modifier',
  '--hm-color-syntax-string',
  '--hm-color-syntax-string-template',
  '--hm-color-syntax-struct',
  '--hm-color-syntax-tag',
  '--hm-color-syntax-type',
  '--hm-color-syntax-type-parameter',
  '--hm-color-syntax-variable',
  '--hm-color-syntax-variable-language',
  '--hm-color-text-disabled',
  '--hm-color-text-on-chrome-secondary',
  '--hm-color-text-on-overlay-secondary',
  '--hm-color-text-placeholder',
  '--hm-color-text-primary',
  '--hm-color-text-secondary',
  '--hm-color-text-subtle',
] as const;

interface WebColorSource {
  value: string;
  description: string;
}

interface DtcgColorValue {
  colorSpace: 'srgb';
  components: [number, number, number];
  alpha?: number;
  hex: string;
}

interface DtcgColorToken {
  $value: DtcgColorValue;
  $description: string;
}

type DtcgGroup<T> = T extends WebColorSource
  ? DtcgColorToken
  : { [K in keyof T]: DtcgGroup<T[K]> };

function color(value: string, description: string): WebColorSource {
  return { value, description };
}

function createWebColorContract(t: SemanticTokens, variant: Polarity) {
  const focusRing = accessibleAcrossSurfaces(
    'focus.ring',
    [
      t.ui.activeBorder.hex,
      t.ui.badgeBackground.hex,
      t.ui.errorForeground.hex,
      t.ui.border.hex,
      t.ui.cursor.hex,
    ],
    [
      t.ui.backgroundVoid.hex,
      t.ui.background.hex,
      t.ui.backgroundHouse.hex,
      t.ui.backgroundFloat.hex,
    ],
    3,
  );
  const structuralBorder = variant === 'dark'
    ? withOpacity(t.ui.border.hex, opacity.medium)
    : t.ui.border.hex;
  const subtleStructuralBorder = variant === 'dark'
    ? withOpacity(t.ui.borderSubtle.hex, opacity.light)
    : t.ui.borderSubtle.hex;
  return {
    surface: {
      page: color(t.ui.backgroundVoid.hex, 'Page background outside primary content.'),
      content: color(t.ui.background.hex, 'Primary content surface.'),
      chrome: color(t.ui.backgroundHouse.hex, 'Navigation and structural chrome surface.'),
      overlay: color(t.ui.backgroundFloat.hex, 'Floating menus, popovers, and elevated surfaces.'),
    },
    text: {
      primary: color(t.ui.foreground.hex, 'Primary body and control text.'),
      secondary: color(
        t.ui.foregroundMuted.hex,
        'Secondary descriptions and labels on page and content surfaces.',
      ),
      subtle: color(
        accessibleColor(
          'text.subtle',
          [t.ui.foregroundSubtle.hex, t.ui.foregroundMuted.hex, t.ui.foreground.hex],
          t.ui.background.hex,
          4.5,
        ),
        'Lowest-emphasis text that remains readable on the content surface.',
      ),
      disabled: color(t.ui.disabled.hex, 'Text for disabled controls.'),
      placeholder: color(
        accessibleColor(
          'text.placeholder',
          [t.ui.placeholder.hex, t.ui.foregroundMuted.hex, t.ui.foreground.hex],
          t.interactive.input.background.default,
          4.5,
        ),
        'Placeholder text in form fields.',
      ),
      onChrome: {
        secondary: color(
          accessibleColor(
            'text.onChrome.secondary',
            [t.ui.foregroundMuted.hex, t.ui.foreground.hex],
            t.ui.backgroundHouse.hex,
            4.5,
          ),
          'Secondary descriptions and labels on navigation and structural chrome.',
        ),
      },
      onOverlay: {
        secondary: color(
          accessibleColor(
            'text.onOverlay.secondary',
            [t.ui.foregroundMuted.hex, t.ui.foreground.hex],
            t.ui.backgroundFloat.hex,
            4.5,
          ),
          'Secondary descriptions and labels on floating and elevated surfaces.',
        ),
      },
    },
    syntax: createWebSyntaxColors(t),
    accent: {
      primary: color(t.ui.accentPrimary.hex, 'Primary brand and engagement accent.'),
      secondary: color(t.ui.accentSecondary.hex, 'Emphasized brand accent.'),
      tertiary: color(t.ui.accentTertiary.hex, 'Pressed or supporting accent.'),
    },
    border: {
      default: color(structuralBorder, 'Default structural border.'),
      subtle: color(subtleStructuralBorder, 'Quiet structural separator.'),
      focus: color(focusRing, 'Keyboard focus indicator.'),
    },
    focus: {
      ring: color(focusRing, 'Keyboard focus ring on any theme surface.'),
    },
    link: {
      default: color(t.ui.link.hex, 'Default link foreground.'),
      active: color(t.ui.linkActive.hex, 'Active or pressed link foreground.'),
    },
    caret: color(t.ui.cursor.hex, 'Text insertion caret.'),
    selection: {
      background: color(
        withOpacity(t.decorative.cursorLineFrost, selectionAlpha.active),
        'Persistent text and item selection wash.',
      ),
      foreground: color(t.ui.foreground.hex, 'Text shown over the selection wash.'),
    },
    status: {
      success: color(
        accessibleColor(
          'status.success',
          [t.status.success.hex, t.git.added.hex, t.terminal.green.hex],
          t.ui.background.hex,
          4.5,
        ),
        'Successful or positive status foreground on the content surface.',
      ),
      warning: color(
        accessibleColor(
          'status.warning',
          [t.status.warning.hex, t.git.modified.hex, t.terminal.yellow.hex],
          t.ui.background.hex,
          4.5,
        ),
        'Warning or caution status foreground on the content surface.',
      ),
      error: color(
        accessibleColor(
          'status.error',
          [t.status.error.hex, t.ui.errorForeground.hex, t.git.deleted.hex],
          t.ui.background.hex,
          4.5,
        ),
        'Error or destructive status foreground on the content surface.',
      ),
      info: color(
        accessibleColor(
          'status.info',
          [t.status.info.hex, t.ui.accentSecondary.hex, t.git.stageModified.hex],
          t.ui.background.hex,
          4.5,
        ),
        'Informational status foreground on the content surface.',
      ),
    },
    interaction: {
      background: {
        hover: color(t.interactive.list.background.hover, 'Transient hover wash.'),
        active: color(t.interactive.list.background.active, 'Pressed interaction wash.'),
        selected: color(t.interactive.list.background.selected, 'Persistent selected-item wash.'),
      },
      foreground: {
        disabled: color(t.interactive.list.foreground.disabled, 'Disabled interactive foreground.'),
      },
      border: {
        focus: color(focusRing, 'Focused interactive border.'),
      },
    },
    action: {
      primary: componentColors(t, t.interactive.button, 'action.primary', focusRing),
      secondary: componentColors(t, t.interactive.buttonSecondary, 'action.secondary', focusRing),
    },
    field: {
      background: color(t.interactive.input.background.default, 'Form field surface.'),
      foreground: {
        default: color(t.interactive.input.foreground.default, 'Form field text.'),
        disabled: color(t.interactive.input.foreground.disabled, 'Disabled form field text.'),
      },
      border: {
        default: color(
          accessibleColor(
            'field.border.default',
            [t.interactive.input.border.default, t.ui.border.hex],
            t.interactive.input.background.default,
            3,
          ),
          'Default form field border.',
        ),
        hover: color(t.interactive.input.border.hover, 'Hovered form field border.'),
        focus: color(focusRing, 'Focused form field border.'),
        disabled: color(t.interactive.input.border.disabled, 'Disabled form field border.'),
      },
    },
  };
}

function createWebSyntaxColors(
  t: SemanticTokens,
): { [K in keyof SemanticTokens['syntax']]: WebColorSource } {
  type SyntaxName = keyof SemanticTokens['syntax'];
  type SyntaxRole = SemanticTokens['syntax'][SyntaxName];
  return Object.fromEntries(
    (Object.entries(t.syntax) as [SyntaxName, SyntaxRole][]).map(([name, role]) => {
      const label = String(name)
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .toLowerCase();
      return [
        name,
        accessibleCandidate(
          `syntax.${String(name)}`,
          [
            color(role.hex, role.description),
            color(
              t.ui.foregroundMuted.hex,
              `Syntax ${label} foreground; uses the secondary text fallback to meet Web AA on the content surface.`,
            ),
            color(
              t.ui.foreground.hex,
              `Syntax ${label} foreground; uses the primary text fallback to meet Web AA on the content surface.`,
            ),
          ],
          t.ui.background.hex,
          4.5,
        ),
      ];
    }),
  ) as { [K in SyntaxName]: WebColorSource };
}

function componentColors(
  t: SemanticTokens,
  component: SemanticTokens['interactive']['button'],
  name: string,
  focusRing: string,
) {
  // VS Code can blend component tints into a known container. Portable Web
  // actions can move between any public surface, so publish the same visual
  // result as an opaque color instead of leaking the host surface into it.
  const opaqueBackground = (value: string) => flattenEmbeddedAlpha(value, t.ui.background.hex);
  const background = {
    default: opaqueBackground(component.background.default),
    hover: opaqueBackground(component.background.hover),
    active: opaqueBackground(component.background.active),
    disabled: opaqueBackground(component.background.disabled),
  };
  const foreground = (state: 'default' | 'hover' | 'active') => accessibleColor(
    `${name}.foreground.${state}`,
    [
      component.foreground[state],
      t.ui.foreground.hex,
      t.ui.accentTertiary.hex,
      t.ui.backgroundVoid.hex,
      t.decorative.blouseWhite,
    ],
    background[state],
    4.5,
  );
  return {
    background: {
      default: color(background.default, 'Surface-independent default action background.'),
      hover: color(background.hover, 'Surface-independent hovered action background.'),
      active: color(background.active, 'Surface-independent pressed action background.'),
      disabled: color(background.disabled, 'Surface-independent disabled action background.'),
    },
    foreground: {
      default: color(foreground('default'), 'Default action text.'),
      hover: color(foreground('hover'), 'Hovered action text.'),
      active: color(foreground('active'), 'Pressed action text.'),
      disabled: color(component.foreground.disabled, 'Disabled action text.'),
    },
    border: {
      default: color(
        accessibleColor(
          `${name}.border.default`,
          [component.border.default, t.ui.border.hex],
          t.ui.background.hex,
          3,
        ),
        'Default action boundary.',
      ),
      focus: color(focusRing, 'Focused action border.'),
    },
  };
}

function accessibleColor(
  name: string,
  candidates: string[],
  background: string,
  minimum: number,
): string {
  return accessibleCandidate(
    name,
    candidates.map(value => ({ value })),
    background,
    minimum,
  ).value;
}

function accessibleCandidate<T extends { value: string }>(
  name: string,
  candidates: T[],
  background: string,
  minimum: number,
): T {
  const uniqueCandidates = [...new Map(candidates.map(candidate => [candidate.value, candidate])).values()];
  for (const candidate of uniqueCandidates) {
    const ratio = contrastRatio(candidate.value, background);
    if (ratio >= minimum) return candidate;
  }
  const measured = uniqueCandidates.map(candidate => {
    const ratio = contrastRatio(candidate.value, background);
    return `${candidate.value}=${ratio.toFixed(2)}`;
  });
  throw new Error(`${name} has no color meeting ${minimum}: ${measured.join(', ')}`);
}

function contrastRatio(foreground: string, background: string): number {
  const effectiveForeground = flattenEmbeddedAlpha(foreground, background);
  return new Color(effectiveForeground).contrast(new Color(background), 'WCAG21');
}

function accessibleAcrossSurfaces(
  name: string,
  candidates: string[],
  surfaces: string[],
  minimum: number,
): string {
  const uniqueCandidates = [...new Set(candidates)];
  for (const candidate of uniqueCandidates) {
    const passes = surfaces.every(surface => contrastRatio(candidate, surface) >= minimum);
    if (passes) return candidate;
  }
  throw new Error(`${name} has no color meeting ${minimum} on every Web surface`);
}

function toDtcgColor(value: string): DtcgColorValue {
  const match = /^#([0-9A-Fa-f]{6})([0-9A-Fa-f]{2})?$/.exec(value);
  if (!match) throw new Error(`Web color tokens require hex colors, got ${value}`);

  const rgb = match[1];
  const result: DtcgColorValue = {
    colorSpace: 'srgb',
    components: [0, 2, 4].map(offset => parseInt(rgb.slice(offset, offset + 2), 16) / 255) as [number, number, number],
    hex: `#${rgb.toUpperCase()}`,
  };
  if (match[2]) result.alpha = parseInt(match[2], 16) / 255;
  return result;
}

function isWebColorSource(value: unknown): value is WebColorSource {
  return (
    typeof value === 'object'
    && value !== null
    && 'value' in value
    && 'description' in value
  );
}

function toDtcgGroup<T>(group: T): DtcgGroup<T> {
  if (isWebColorSource(group)) {
    return {
      $value: toDtcgColor(group.value),
      $description: group.description,
    } as DtcgGroup<T>;
  }
  return Object.fromEntries(
    Object.entries(group as Record<string, unknown>).map(([name, value]) => [name, toDtcgGroup(value)]),
  ) as DtcgGroup<T>;
}

export function createWebTokenDocument(t: SemanticTokens, variant: Polarity) {
  return {
    $schema: 'https://www.designtokens.org/schemas/2025.10/format.json' as const,
    color: {
      $type: 'color' as const,
      ...toDtcgGroup(createWebColorContract(t, variant)),
    },
  };
}

interface FlatWebColor {
  path: string[];
  source: WebColorSource;
}

function flattenWebColors(group: unknown, path: string[] = []): FlatWebColor[] {
  if (isWebColorSource(group)) return [{ path, source: group }];
  if (typeof group !== 'object' || group === null) {
    throw new Error(`Invalid Web color group at ${path.join('.')}`);
  }
  return Object.entries(group).flatMap(([name, value]) => (
    flattenWebColors(value, [...path, name])
  ));
}

function toCssCustomProperty(path: string[]): string {
  const name = path
    .map(segment => segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase())
    .join('-');
  return `--hm-color-${name}`;
}

function assertPublicCssContract(colors: FlatWebColor[]): void {
  const actual = colors.map(({ path }) => toCssCustomProperty(path)).sort();
  const expected = new Set<string>(WEB_THEME_CUSTOM_PROPERTIES);
  const missing = [...expected].filter(name => !actual.includes(name));
  const unexpected = actual.filter(name => !expected.has(name));
  const duplicates = actual.filter((name, index) => actual.indexOf(name) !== index);
  if (missing.length > 0 || unexpected.length > 0 || duplicates.length > 0) {
    throw new Error(
      `Web CSS public contract mismatch; missing: ${missing.join(', ') || 'none'}; unexpected: ${unexpected.join(', ') || 'none'}; duplicates: ${[...new Set(duplicates)].join(', ') || 'none'}`,
    );
  }
}

function renderCssDeclarations(
  t: SemanticTokens,
  variant: Polarity,
): string {
  const colors = flattenWebColors(createWebColorContract(t, variant));
  assertPublicCssContract(colors);
  return colors
    .map(({ path, source }) => {
      toDtcgColor(source.value);
      return `  ${toCssCustomProperty(path)}: ${source.value.toUpperCase()};`;
    })
    .join('\n');
}

export function createWebCss(dark: SemanticTokens, light: SemanticTokens): string {
  const lightDeclarations = renderCssDeclarations(light, 'light');
  const darkDeclarations = renderCssDeclarations(dark, 'dark');
  const nestedDarkDeclarations = darkDeclarations.replace(/^/gm, '  ');
  return `/**
 * Generated by Hatsune Miku Theme. Do not edit by hand.
 * Default: light. With no explicit data-hm-theme, the OS preference may select dark.
 */
:root,
[data-hm-theme='light'] {
  color-scheme: light;
${lightDeclarations}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-hm-theme]) {
    color-scheme: dark;
${nestedDarkDeclarations}
  }
}

[data-hm-theme='dark'] {
  color-scheme: dark;
${darkDeclarations}
}
`;
}
