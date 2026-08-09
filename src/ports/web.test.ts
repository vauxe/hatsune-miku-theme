import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import Color from 'colorjs.io';

import { createWorkbenchColors } from '../theme';
import { generateVariantTokens, opacity, selectionAlpha } from '../tokens';
import { flattenEmbeddedAlpha } from './shared';
import { createWebPreview } from './web-preview';
import {
  createWebCss,
  createWebTokenDocument,
} from './web';

const variants = ['dark', 'light'] as const;
const actionKinds = ['primary', 'secondary'] as const;
const enabledActionStates = ['default', 'hover', 'active'] as const;
const surfaces = ['page', 'content', 'chrome', 'overlay'] as const;

describe('web design token port', () => {
  it('exports DTCG 2025.10 sRGB tokens with semantic web paths', () => {
    const tokens = generateVariantTokens('dark');
    const document = createWebTokenDocument(tokens, 'dark');

    assert.equal(document.color.$type, 'color');
    assert.equal(
      document.$schema,
      'https://www.designtokens.org/schemas/2025.10/format.json',
    );
    assert.deepEqual(document.color.surface.content.$value, {
      colorSpace: 'srgb',
      components: new Color(tokens.ui.background.hex).to('srgb').coords,
      hex: tokens.ui.background.hex,
    });
    assert.equal(
      document.color.text.primary.$value.hex,
      tokens.ui.foreground.hex,
    );
    assert.deepEqual(
      document.color.field.border.focus.$value,
      document.color.focus.ring.$value,
    );
    assert.equal(
      document.color.selection.background.$value.alpha,
      parseInt(selectionAlpha.active, 16) / 255,
    );
  });

  it('describes the source used by every resolved Web syntax color', () => {
    for (const variant of variants) {
      const tokens = generateVariantTokens(variant);
      const syntax = createWebTokenDocument(tokens, variant).color.syntax;

      for (const name of Object.keys(tokens.syntax) as Array<keyof typeof tokens.syntax>) {
        const source = tokens.syntax[name];
        const resolved = syntax[name];
        if (resolved.$value.hex === source.hex) {
          assert.equal(resolved.$description, source.description);
        } else if (resolved.$value.hex === tokens.ui.foregroundMuted.hex) {
          assert.match(resolved.$description, /secondary text fallback/);
        } else {
          assert.equal(resolved.$value.hex, tokens.ui.foreground.hex);
          assert.match(resolved.$description, /primary text fallback/);
        }
      }
    }
  });

  it('preserves dark translucent borders and light opaque borders', () => {
    const darkTokens = generateVariantTokens('dark');
    const lightTokens = generateVariantTokens('light');
    const dark = createWebTokenDocument(darkTokens, 'dark').color;
    const light = createWebTokenDocument(lightTokens, 'light').color;

    assert.equal(dark.border.default.$value.hex, darkTokens.ui.border.hex);
    assert.equal(
      dark.border.default.$value.alpha,
      parseInt(opacity.medium, 16) / 255,
    );
    assert.equal(
      dark.border.subtle.$value.alpha,
      parseInt(opacity.light, 16) / 255,
    );
    assert.equal(light.border.default.$value.hex, lightTokens.ui.border.hex);
    assert.equal(light.border.default.$value.alpha, undefined);
    assert.equal(light.border.subtle.$value.alpha, undefined);
  });

  it('uses the same link colors as VS Code', () => {
    for (const variant of variants) {
      const tokens = generateVariantTokens(variant);
      const web = createWebTokenDocument(tokens, variant).color;
      const vscode = createWorkbenchColors(tokens, variant);

      assert.equal(web.link.default.$value.hex, vscode['textLink.foreground']);
      assert.equal(web.link.active.$value.hex, vscode['textLink.activeForeground']);
    }
  });

  it('exports surface-independent action backgrounds', () => {
    for (const variant of variants) {
      const tokens = generateVariantTokens(variant);
      const web = createWebTokenDocument(tokens, variant).color;

      for (const kind of actionKinds) {
        const action = web.action[kind];
        const source = kind === 'primary'
          ? tokens.interactive.button
          : tokens.interactive.buttonSecondary;
        for (const state of ['default', 'hover', 'active', 'disabled'] as const) {
          assert.equal(
            action.background[state].$value.alpha,
            undefined,
            `${variant} action.${kind}.${state} must not inherit its host surface`,
          );
          assert.equal(
            action.background[state].$value.hex,
            flattenEmbeddedAlpha(source.background[state], tokens.ui.background.hex),
            `${variant} action.${kind}.${state} must preserve its VS Code content-surface appearance`,
          );
        }
      }
    }
  });

  it('generates framework-neutral CSS with system and explicit theme selection', () => {
    const dark = generateVariantTokens('dark');
    const light = generateVariantTokens('light');
    const css = createWebCss(dark, light);

    assert.match(css, /:root,\n\[data-hm-theme='light'\]/);
    assert.match(css, /@media \(prefers-color-scheme: dark\)/);
    assert.match(css, /:root:not\(\[data-hm-theme\]\)/);
    assert.match(css, /\[data-hm-theme='dark'\]/);
    assert.match(
      css,
      new RegExp(`--hm-color-surface-content: ${light.ui.background.hex}`),
    );
    assert.match(
      css,
      new RegExp(`--hm-color-surface-content: ${dark.ui.background.hex}`),
    );
    assert.match(css, /--hm-color-selection-background: #[0-9A-F]{8}/);
  });

  it('generates an accessible, self-contained preview with valid public links', () => {
    const dark = generateVariantTokens('dark');
    const light = generateVariantTokens('light');
    const css = createWebCss(dark, light);
    const preview = createWebPreview();

    assert.match(preview, /<html lang="en">/);
    assert.match(
      preview,
      /<link rel="stylesheet" href="\.\/hatsune-miku-theme\.css">/,
    );
    assert.match(preview, /<a[^>]+href="#main"[^>]*>Skip to content<\/a>/);
    assert.match(preview, /<fieldset[^>]*>/);
    assert.match(preview, /<legend>Theme<\/legend>/);
    for (const theme of ['system', 'light', 'dark']) {
      assert.match(
        preview,
        new RegExp(`type="radio" name="theme" value="${theme}"`),
      );
    }
    assert.match(preview, /<pre[^>]*aria-label="Syntax color sample"/);
    assert.match(preview, /<label for="preview-email">Email address<\/label>/);
    assert.doesNotMatch(preview, /<(?:script|link)[^>]+https?:\/\//i);
    assert.doesNotMatch(preview, /#[0-9a-f]{3,8}\b/i);

    const displayedTokens = [...preview.matchAll(/data-token="(--hm-[a-z0-9-]+)"/g)]
      .map(match => match[1]);
    assert.equal(new Set(displayedTokens).size, displayedTokens.length);
    for (const token of displayedTokens) {
      assert.match(css, new RegExp(`${token}:`), `missing ${token}`);
    }
    const referencedTokens = new Set(
      [...preview.matchAll(/var\((--hm-[a-z0-9-]+)\)/g)].map(match => match[1]),
    );
    for (const token of referencedTokens) {
      assert.match(css, new RegExp(`${token}:`), `missing ${token}`);
    }

    for (const artifact of [
      'hatsune-miku-theme.css',
      'hatsune-miku-theme-light.tokens.json',
      'hatsune-miku-theme-dark.tokens.json',
    ]) {
      const escapedArtifact = artifact.replace(/\./g, '\\.');
      assert.match(preview, new RegExp(`<a href="\\./${escapedArtifact}">`));
    }
    assert.doesNotMatch(
      preview,
      /hatsune-miku(?:\.css|-(?:light|dark)\.tokens\.json)/,
    );
  });

  it('keeps Web text, syntax, action, boundary, and focus pairs at WCAG 2.2 AA', () => {
    for (const variant of variants) {
      const tokens = generateVariantTokens(variant);
      const web = createWebTokenDocument(tokens, variant).color;

      assertContrastPairs(variant, [
        ['text.secondary on content', web.text.secondary.$value, web.surface.content.$value, 4.5],
        ['text.subtle on content', web.text.subtle.$value, web.surface.content.$value, 4.5],
        ['text.secondary on page', web.text.secondary.$value, web.surface.page.$value, 4.5],
        ['text.onChrome.secondary', web.text.onChrome.secondary.$value, web.surface.chrome.$value, 4.5],
        ['text.onOverlay.secondary', web.text.onOverlay.secondary.$value, web.surface.overlay.$value, 4.5],
        ['text.placeholder in field', web.text.placeholder.$value, web.field.background.$value, 4.5],
        ['accent.secondary on page', web.accent.secondary.$value, web.surface.page.$value, 4.5],
        ['accent.secondary on chrome', web.accent.secondary.$value, web.surface.chrome.$value, 4.5],
        ['link.default on overlay', web.link.default.$value, web.surface.overlay.$value, 4.5],
      ]);

      for (const surface of surfaces) {
        assertContrast(
          `${variant} text.primary on ${surface}`,
          web.text.primary.$value,
          web.surface[surface].$value,
          4.5,
        );
      }

      for (const name of ['default', 'active'] as const) {
        assertContrast(
          `${variant} link.${name}`,
          web.link[name].$value,
          web.surface.content.$value,
          4.5,
        );
      }

      for (const name of ['success', 'warning', 'error', 'info'] as const) {
        assertContrast(
          `${variant} status.${name}`,
          web.status[name].$value,
          web.surface.content.$value,
          4.5,
        );
      }

      for (const [name, syntax] of Object.entries(web.syntax)) {
        assertContrast(
          `${variant} syntax.${name}`,
          syntax.$value,
          web.surface.content.$value,
          4.5,
        );
      }

      for (const kind of actionKinds) {
        const action = web.action[kind];
        for (const state of enabledActionStates) {
          assertContrast(
            `${variant} action.${kind}.${state}`,
            action.foreground[state].$value,
            action.background[state].$value,
            4.5,
          );
        }
        assertContrast(
          `${variant} action.${kind}.boundary`,
          action.border.default.$value,
          web.surface.content.$value,
          3,
        );
      }

      for (const state of ['default', 'hover', 'focus'] as const) {
        assertContrast(
          `${variant} field.border.${state}`,
          web.field.border[state].$value,
          web.field.background.$value,
          3,
        );
      }

      for (const surface of surfaces) {
        assertContrast(
          `${variant} focus.ring on ${surface}`,
          web.focus.ring.$value,
          web.surface[surface].$value,
          3,
        );
      }
    }
  });
});

interface ColorValue {
  hex: string;
}

type ContrastPair = readonly [string, ColorValue, ColorValue, number];

function assertContrastPairs(prefix: string, pairs: readonly ContrastPair[]): void {
  for (const [name, foreground, background, minimum] of pairs) {
    assertContrast(`${prefix} ${name}`, foreground, background, minimum);
  }
}

function assertContrast(
  name: string,
  foreground: ColorValue,
  background: ColorValue,
  minimum: number,
): void {
  const ratio = new Color(foreground.hex).contrast(new Color(background.hex), 'WCAG21');
  assert.ok(ratio >= minimum, `${name}: ${ratio.toFixed(2)} < ${minimum}`);
}
