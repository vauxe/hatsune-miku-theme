/**
 * Per-polarity workbench wiring — the one place dark and light diverge.
 *
 * workbench.ts reads the adapter and contains no polarity branches; each
 * variant's decisions read as one coherent column here instead of
 * interleaved ternaries. Values must stay expression-identical to what
 * the inline branches produced — lighten/darken/roleFromHex round-trip
 * through JzCzhz, so even a `darken(x, 0)` is load-bearing.
 */

import { withOpacity, lighten, darken, roleFromHex, opacity as op, type SemanticTokens } from '../tokens';

export interface WorkbenchAdapter {
  /** dark: pale teal hint; light: warm tertiary hint */
  accentMuted: string;
  /** attention/focus signal — cushion (dark) / necktie pink (light) */
  accentFocus: string;

  /** Structural surface backgrounds (panel stays Stage in both) */
  chrome: {
    activityBar: string;
    sidebar: string;
    sectionHeader: string;
    statusBar: string;
    tabHeader: string;
  };

  /** Badge — activity bar, panel, extension, profile */
  badge: { bg: string; fg: string };

  /** Tint pigments whose base color changes with polarity */
  tintBorder: string;
  tintToast: string;

  /** Foreground demotions — which text tier a surface uses */
  surfaceFg: string;
  debugLabelFg: string;
  scmLabelFg: string;

  /** Polarity-dependent symbol/icon colors */
  icon: {
    symbolicLink: string;
    multiCursor: string;
    preRelease: string;
    commentGlyph: string;
    notifyInfo: string;
    symbolClass: string;
  };

  /** Single-use surface/state swaps */
  inputBg: string;
  actionBarToggled: string;
  testingErrored: string;
  breakpointUnverified: string;
  exceptionLabelBg: string;
  stateLabelBg: string;

  /** Status bar item modes */
  statusItem: {
    debugBg: string;
    debugFg: string;
    errorBg: string;
    errorHoverBg: string;
    remoteBg: string;
    remoteFg: string;
    remoteHoverBg: string;
    remoteHoverFg: string;
    warningBg: string;
    warningHoverBg: string;
    offlineBg: string;
    offlineHoverBg: string;
  };

  /** Pigment behind every find-match tint (editor, search editor, terminal) */
  findMatchPigment: string;
}

function dark(t: SemanticTokens): WorkbenchAdapter {
  const house = t.ui.backgroundHouse.hex;
  const focus = t.ui.activeBorder.hex;
  const darkFg = t.decorative.darkForeground;
  // Edge cloth (mm-2025 denim): absent on the flagship, whose chrome
  // stays on House — every `?? fallback` below is the original expression.
  const edge = t.decorative.chromeOverride;

  return {
    accentMuted: t.ui.accentTertiary.hex,
    accentFocus: focus,
    chrome: {
      activityBar: edge?.activityBar ?? house,
      sidebar: house,
      sectionHeader: edge?.sectionHeader ?? house,
      statusBar: edge?.statusBar ?? house,
      tabHeader: house,
    },
    badge: { bg: t.decorative.sekaiHair, fg: darkFg },
    tintBorder: t.ui.accentPrimary.hex, // teal ~180°
    tintToast: withOpacity(t.decorative.skinBase, op.medium),
    surfaceFg: t.ui.foregroundMuted.hex,
    debugLabelFg: t.ui.foreground.hex,
    scmLabelFg: darkFg,
    icon: {
      symbolicLink: t.symbol.enum.hex,
      multiCursor: t.decorative.multiCursorSecondary,
      preRelease: t.decorative.commitIcon,
      commentGlyph: t.decorative.commentGlyph,
      notifyInfo: t.ui.accentPrimary.hex,
      symbolClass: t.symbol.class.hex,
    },
    inputBg: t.ui.backgroundFloat.hex,
    actionBarToggled: t.interactive.toggle.background.selected,
    testingErrored: darken(t.status.info, 0.055),
    breakpointUnverified: darken(t.status.error, 0.03),
    exceptionLabelBg: darken(t.status.error, 0.19),
    stateLabelBg: darken(t.status.success, 0.14),
    statusItem: {
      debugBg: edge?.statusDebugBg ?? darken(roleFromHex('', focus), 0.03),
      debugFg: edge?.statusDebugFg ?? t.decorative.blouseWhite,
      errorBg: darken(t.status.error, 0.10),
      errorHoverBg: darken(t.status.error, 0.08),
      remoteBg: lighten(roleFromHex('', t.ui.accentPrimary.hex), 0.02),
      remoteFg: darkFg,
      remoteHoverBg: t.ui.accentSecondary.hex,
      remoteHoverFg: darkFg,
      warningBg: darken(t.status.warning, 0.10),
      warningHoverBg: darken(t.status.warning, 0.08),
      offlineBg: withOpacity(t.ui.tertiary.hex, op.dense),
      offlineHoverBg: withOpacity(t.ui.tertiary.hex, op.dense),
    },
    findMatchPigment: edge?.findMatchPigment ?? t.status.warning.hex,
  };
}

function light(t: SemanticTokens): WorkbenchAdapter {
  const cursor = t.ui.cursor.hex;
  const blouse = t.decorative.blouseWhite;

  return {
    accentMuted: t.ui.tertiary.hex,
    accentFocus: cursor, // necktie pink
    chrome: {
      activityBar: t.decorative.topMain,
      sidebar: t.decorative.armWarmersBase,
      sectionHeader: t.decorative.topMain,
      statusBar: t.decorative.topMain,
      tabHeader: t.decorative.armWarmersBase,
    },
    badge: { bg: cursor, fg: blouse },
    tintBorder: t.decorative.tieShadow, // cool blue ~235°
    tintToast: withOpacity(t.decorative.skinBlush, op.medium),
    surfaceFg: t.ui.foreground.hex,
    debugLabelFg: blouse,
    scmLabelFg: blouse,
    icon: {
      symbolicLink: t.syntax.class.hex,
      multiCursor: cursor,
      preRelease: t.syntax.type.hex,
      commentGlyph: t.status.info.hex,
      notifyInfo: t.status.info.hex,
      symbolClass: t.syntax.class.hex,
    },
    inputBg: t.ui.background.hex,
    actionBarToggled: withOpacity(t.ui.accentPrimary.hex, op.medium),
    testingErrored: t.syntax.type.hex,
    breakpointUnverified: withOpacity(t.status.error.hex, op.heavy),
    exceptionLabelBg: t.status.error.hex,
    stateLabelBg: t.status.success.hex,
    statusItem: {
      debugBg: lighten(roleFromHex('', t.decorative.eyeIris), 0.09),
      debugFg: t.ui.foreground.hex,
      errorBg: darken(t.status.error, 0.03),
      errorHoverBg: darken(t.status.error, 0.01),
      remoteBg: t.ui.buttonBackground.hex,
      remoteFg: blouse,
      remoteHoverBg: darken(roleFromHex('', t.ui.buttonBackground.hex), 0.02),
      remoteHoverFg: blouse,
      warningBg: darken(t.status.warning, 0.00),
      warningHoverBg: lighten(t.status.warning, 0.02),
      offlineBg: t.ui.buttonBackground.hex,
      offlineHoverBg: darken(t.ui.buttonBackground, 0.01),
    },
    findMatchPigment: t.decorative.findMatchOverlay,
  };
}

export function createWorkbenchAdapter(t: SemanticTokens, polarity: 'dark' | 'light'): WorkbenchAdapter {
  return polarity === 'light' ? light(t) : dark(t);
}
