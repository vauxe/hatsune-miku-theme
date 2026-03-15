/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette.
 * Design Philosophy: "Digital Diva" - Serene, immersive, 8+ hour coding comfort.
 *
 * Color Architecture:
 * - Background layers: void < stage (editor) < house (chrome) < float — all from skirt.base (hz≈249°)
 * - Primary accent: hair.base (#39C5BB) - canonical Miku teal
 * - Secondary accent: hair.highlight (#5DE4DB) - attention states
 * - Cursor/focus: vivid magenta from headphone cushion (#E05096)
 * - Semantic: green (success), gold (warning), red (error)
 */

// Semantic token system - all colors flow through design tokens
import { withOpacity, lighten, darken, roleFromHex, opacity as op, special, type SemanticTokens } from '../tokens';

export function createWorkbenchColors(t: SemanticTokens, polarity: 'dark' | 'light' = 'dark'): Record<string, string> {
const isLight = polarity === 'light';
// For badges/items on teal/bright accent backgrounds — always dark text for contrast
const onAccentBg = t.decorative.darkForeground;

// ============================================================================
// DESIGN SYSTEM CONSTANTS
// ============================================================================

// Background hierarchy — 4 tiers, editor darkest (stage = skirt anchor, hz≈249°)
const bg = {
  void: t.ui.backgroundVoid.hex,    // step −1: empty groups, shadows
  base: t.ui.background.hex,        // step  0: THE SKIRT — editor, terminal (darkest regular)
  house: t.ui.backgroundHouse.hex,  // step +1: sidebar, tabs, activity bar, status bar
  float: t.ui.backgroundFloat.hex,  // step +2: hover, suggest, menus, tooltips
};

// Text hierarchy - from Snow Miku and character palette
const text = {
  // NOTE: Avoid pure-white halation on deep dark surfaces (APCA max Lc <= 95)
  // Tuned for comfort (Lc ~85-90)
  primary: t.ui.foreground.hex,
  secondary: t.ui.foregroundMuted.hex,
  tertiary: t.ui.tertiary.hex,
  disabled: t.ui.disabled.hex,
  ghost: t.ui.ghostText.hex,
  placeholder: t.ui.placeholder.hex,
};

// Accent colors
const accent = {
  primary: t.ui.accentPrimary.hex,
  bright: t.ui.accentSecondary.hex,
  soft: t.ui.accentTertiary.hex,
  cursor: t.ui.cursor.hex,            // lightened cushion — Lc≥60 for caret visibility
  magenta: isLight ? t.ui.cursor.hex : t.ui.activeBorder.hex, // vivid necktie pink (light) / cushion (dark)
  chocolate: t.decorative.tieShadow,  // polarity-aware: light=#815039 chocolate, dark=#1A8A82 teal
  blush: t.decorative.skinBlush,      // #E8B4B6 — scalloped hem pink
};

// Semantic colors (APCA Lc 80+ for readability) - marathon coding optimized
const semantic = {
  success: t.status.success.hex,
  warning: t.status.warning.hex,
  error: t.status.error.hex,
  info: t.status.info.hex,
};

// Pastel bracket colors (low-fatigue rainbow) - All APCA Lc 80+ for readability
const bracketPastel = {
  tan: t.bracket.bracket1.hex,
  pink: t.bracket.bracket2.hex,
  mint: t.bracket.bracket3.hex,
  lavender: t.bracket.bracket4.hex,
  aqua: t.bracket.bracket5.hex,
  purple: t.bracket.bracket6.hex,
};

// ============================================================================
// POLARITY CONSTANTS — all isLight decisions in one place
// ============================================================================

// Alpha — opacity per polarity (base color stays the same, opacity shifts)
// Light theme picks lower tiers — bright surfaces amplify overlay presence
const alpha = {
  // Editor line highlighting — light theme needs visible tint on snow
  lineHighlightBg:          isLight ? op.light : op.light,
  lineHighlightBorder:      isLight ? op.medium : op.strong,
  inactiveLineHighlight:    isLight ? op.subtle : op.light,
  // Selection — light theme needs stronger tints on near-white backgrounds
  selectionBg:              isLight ? op.strong : op.strong,
  inactiveSelectionBg:      isLight ? op.medium : op.medium,
  // Highlights — subtle/faint tiers
  selectionHighlightBg:     isLight ? op.subtle : op.medium,
  selectionHighlightBorder: isLight ? op.light : op.medium,
  wordHighlightBg:          isLight ? op.light : op.strong,
  wordHighlightBorder:      isLight ? op.medium : op.heavy,
  wordHighlightStrongBg:    isLight ? op.medium : op.heavy,
  faintBg:                  isLight ? op.subtle : op.light,
  faintBorder:              isLight ? op.light : op.medium,
  // Find — light needs visible tints but must preserve Lc≥75 on compound
  findMatchBg:              isLight ? op.strong : op.strong,
  findHighlightBg:          isLight ? op.light : op.strong,
  findHighlightBorder:      isLight ? op.strong : op.solid,
  // Hover
  hoverBg:                  isLight ? op.subtle : op.light,
  // Bracket
  bracketMatchBg:           isLight ? op.light : op.medium,
  // Terminal
  terminalSelectionBg:      isLight ? op.light : op.strong,
  terminalFindMatchBg:      isLight ? op.light : op.strong,
  // Diff — light theme bumped one tier for visibility on near-white
  diffInsertedLine:         isLight ? op.light : op.medium,
  diffInsertedText:         isLight ? op.medium : op.strong,
  diffGutterInserted:       isLight ? op.light : op.medium,
  diffRemovedLine:          isLight ? op.light : op.medium,
  diffRemovedText:          isLight ? op.medium : op.strong,
  diffGutterRemoved:        isLight ? op.medium : op.medium,
  // Inline chat
  inlineChatDiff:           isLight ? op.subtle : op.medium,
  chatLinesAdded:           op.dense,
  chatLinesRemoved:         op.dense,
  // Borders — shared subtle pattern for panels/dividers
  borderSubtle:             isLight ? op.medium : op.medium,
  sectionHeaderBorder:      isLight ? op.light : op.medium,
  // Tab unfocused
  unfocusedTabHoverBg:      isLight ? op.subtle : op.subtle,
  unfocusedTabHoverBorder:  isLight ? op.medium : op.medium,
  // List/tree
  listInactiveFocusBg:      isLight ? op.subtle : op.light,
  treeOddRowBg:             op.subtle,
};

// Pol — color swaps per polarity (the base color itself changes)
const pol = {
  // Border tint — chocolate (light) vs teal (dark)
  borderTint:       isLight ? accent.chocolate : accent.primary,
  // Hover tint — blush (light) vs teal (dark)
  hoverTint:        isLight ? accent.blush : accent.primary,
  // Badge colors — repeated across activity bar, panel, extension, profile
  badgeBg:          isLight ? t.ui.badgeBackground.hex : lighten(roleFromHex('', t.decorative.sekaiHair), 0.02),
  badgeFg:          isLight ? t.decorative.blouseWhite : onAccentBg,
  // Panel background — Stage tier (content surface, same as terminal/editor)
  panelBg:          bg.base,
  // Activity bar background
  activityBarBg:    isLight ? t.decorative.topMain : bg.house,
  // Sidebar background
  sidebarBg:        isLight ? t.decorative.armWarmersBase : bg.house,
  // Section header background
  sectionHeaderBg:  isLight ? t.decorative.topMain : bg.house,
  // Status bar background
  statusBarBg:      isLight ? t.decorative.topShadow : bg.house,
  // Tab header background — House tier (structural chrome)
  tabHeaderBg:      isLight ? t.decorative.armWarmersBase : bg.house,
  // Suggest widget selected
  suggestSelectedBg: isLight
    ? withOpacity(t.decorative.cursorLineFrost, op.subtle)
    : withOpacity(t.decorative.cursorLineFrost, op.light),
  // Notification toast border
  toastBorder:      isLight ? withOpacity(accent.blush, op.medium) : withOpacity(t.decorative.skinBase, op.medium),
  // SCM graph label foreground
  scmLabelFg:       isLight ? text.primary : t.decorative.darkForeground,
  // Debug view label foreground
  debugLabelFg:     isLight ? t.decorative.blouseWhite : text.primary,
  // Testing icon errored
  testingErrored:   isLight ? t.syntax.type.hex : darken(t.status.info, 0.055),
  // Action bar toggled
  actionBarToggled: isLight ? withOpacity(accent.primary, op.medium) : t.interactive.toggle.background.selected,
};

// StatusItem — status bar item colors per polarity
const statusItem = {
  debugBg:          isLight ? t.decorative.eyeIris : darken(roleFromHex('', accent.magenta), 0.03),
  debugFg:          t.decorative.blouseWhite,
  remoteBg:         isLight ? t.decorative.cape : lighten(roleFromHex('', accent.primary), 0.02),
  remoteFg:         isLight ? t.decorative.blouseWhite : onAccentBg,
  remoteHoverBg:    isLight ? darken(roleFromHex('', t.decorative.cape), 0.01) : accent.bright,
  remoteHoverFg:    isLight ? t.decorative.blouseWhite : t.decorative.darkForeground,
  errorFg:          t.decorative.blouseWhite,
  warningBg:        darken(t.status.warning, isLight ? 0.00 : 0.10),
  warningFg:        t.decorative.blouseWhite,
  warningHoverBg:   isLight ? lighten(t.status.warning, 0.02) : darken(t.status.warning, 0.08),
  offlineBg:        isLight ? t.ui.buttonBackground.hex : withOpacity(text.tertiary, op.dense),
  offlineFg:        t.decorative.blouseWhite,
  offlineHoverBg:   isLight ? darken(t.ui.buttonBackground, 0.01) : withOpacity(text.tertiary, op.dense),
  offlineHoverFg:   t.decorative.blouseWhite,
};

return {
  // ==========================================================================
  // EDITOR CORE
  // ==========================================================================
  'editor.background': bg.base,
  'editor.foreground': text.primary,
  'editorCursor.foreground': accent.cursor,
  'editorCursor.background': bg.void,
  'editorMultiCursor.primary.foreground': accent.cursor,
  'editorMultiCursor.primary.background': bg.base,
  'editorMultiCursor.secondary.foreground': isLight ? accent.magenta : t.decorative.multiCursorSecondary,
  'editorMultiCursor.secondary.background': bg.base,
  'editor.placeholder.foreground': text.placeholder,
  'editor.compositionBorder': accent.bright,

  // Line highlighting — Snow Miku ice prism frost
  'editor.lineHighlightBackground': withOpacity(t.decorative.cursorLineFrost, alpha.lineHighlightBg),
  'editor.lineHighlightBorder': withOpacity(t.decorative.cursorLineFrost, alpha.lineHighlightBorder),
  'editor.inactiveLineHighlightBackground': withOpacity(t.decorative.cursorLineFrost, alpha.inactiveLineHighlight),

  // Selection — frost voice (persistent)
  'editor.selectionBackground': withOpacity(t.decorative.cursorLineFrost, alpha.selectionBg),
  'editor.selectionForeground': text.primary,
  'editor.inactiveSelectionBackground': withOpacity(t.decorative.cursorLineFrost, alpha.inactiveSelectionBg),
  'editor.selectionHighlightBackground': withOpacity(accent.bright, alpha.selectionHighlightBg),
  'editor.selectionHighlightBorder': withOpacity(accent.bright, alpha.selectionHighlightBorder),

  // Word highlighting
  'editor.wordHighlightBackground': withOpacity(accent.primary, alpha.wordHighlightBg),
  'editor.wordHighlightBorder': withOpacity(accent.primary, alpha.wordHighlightBorder),
  'editor.wordHighlightStrongBackground': withOpacity(accent.primary, alpha.wordHighlightStrongBg),
  'editor.wordHighlightStrongBorder': withOpacity(accent.primary, alpha.wordHighlightBorder),
  'editor.wordHighlightTextBackground': withOpacity(accent.bright, alpha.faintBg),
  'editor.wordHighlightTextBorder': withOpacity(accent.bright, alpha.faintBorder),

  // Find & Replace
  // Balance: visible enough for ΔE≥12, low enough for syntax contrast
  'editor.findMatchBackground': withOpacity(semantic.warning, alpha.findMatchBg),
  'editor.findMatchForeground': text.primary,
  'editor.findMatchBorder': withOpacity(semantic.warning, op.solid),
  'editor.findMatchHighlightBackground': withOpacity(accent.bright, alpha.findHighlightBg),
  'editor.findMatchHighlightBorder': withOpacity(accent.bright, alpha.findHighlightBorder),
  'editor.findRangeHighlightBackground': withOpacity(accent.primary, op.light),
  'editor.findRangeHighlightBorder': withOpacity(accent.primary, op.medium),
  'search.resultsInfoForeground': text.secondary,
  // Darken slightly for comment readability in Search Editor
  'searchEditor.findMatchBackground': withOpacity(semantic.warning, op.medium),
  'searchEditor.findMatchBorder': withOpacity(semantic.warning, op.heavy),
  'searchEditor.textInputBorder': withOpacity(accent.primary, op.strong),

  // Hover
  'editor.hoverHighlightBackground': withOpacity(accent.bright, alpha.hoverBg),

  // Range highlighting
  'editor.rangeHighlightBackground': withOpacity(pol.hoverTint, op.subtle),
  'editor.rangeHighlightBorder': withOpacity(pol.hoverTint, op.medium),
  'editor.symbolHighlightBackground': withOpacity(accent.bright, op.light),
  'editor.symbolHighlightBorder': withOpacity(accent.bright, op.medium),

  // ==========================================================================
  // LINE NUMBERS
  // ==========================================================================
  'editorLineNumber.foreground': text.tertiary,
  'editorLineNumber.activeForeground': accent.bright,
  'editorLineNumber.dimmedForeground': text.disabled,  // #6A7A80 - Lc 35+ now

  // ==========================================================================
  // INDENT GUIDES - Rainbow Miku palette
  // ==========================================================================
  // Indent guides - Miku's voicebank evolution (2007->2020)
  'editorIndentGuide.background1': withOpacity(t.decorative.indentGuides[0], op.strong),
  'editorIndentGuide.background2': withOpacity(t.decorative.indentGuides[1], op.strong),
  'editorIndentGuide.background3': withOpacity(t.decorative.indentGuides[2], op.strong),
  'editorIndentGuide.background4': withOpacity(t.decorative.indentGuides[3], op.heavy),
  'editorIndentGuide.background5': withOpacity(t.decorative.indentGuides[4], op.heavy),
  'editorIndentGuide.background6': withOpacity(t.decorative.indentGuides[5], op.heavy),
  'editorIndentGuide.activeBackground1': t.decorative.indentGuides[0],
  'editorIndentGuide.activeBackground2': t.decorative.indentGuides[1],
  'editorIndentGuide.activeBackground3': t.decorative.indentGuides[2],
  'editorIndentGuide.activeBackground4': t.decorative.indentGuides[3],
  'editorIndentGuide.activeBackground5': t.decorative.indentGuides[4],
  'editorIndentGuide.activeBackground6': t.decorative.indentGuides[5],

  // ==========================================================================
  // RULERS & WHITESPACE
  // ==========================================================================
  'editorRuler.foreground': t.ui.ruler.hex,
  'editorWhitespace.foreground': t.ui.whitespace.hex,

  // ==========================================================================
  // BRACKETS - Rainbow colorful (Miku-inspired palette)
  // ==========================================================================
  'editorBracketMatch.background': withOpacity(accent.primary, alpha.bracketMatchBg),
  'editorBracketMatch.border': accent.bright,
  'editorBracketMatch.foreground': accent.bright,

  // Rainbow bracket pairs (APCA Lc 60+ validated)
  // Rainbow brackets - Pastel palette for eye comfort
  'editorBracketHighlight.foreground1': bracketPastel.tan,
  'editorBracketHighlight.foreground2': bracketPastel.pink,
  'editorBracketHighlight.foreground3': bracketPastel.mint,
  'editorBracketHighlight.foreground4': bracketPastel.lavender,
  'editorBracketHighlight.foreground5': bracketPastel.aqua,
  'editorBracketHighlight.foreground6': bracketPastel.purple,
  'editorBracketHighlight.unexpectedBracket.foreground': semantic.error,

  // Bracket pair guides
  'editorBracketPairGuide.background1': withOpacity(bracketPastel.tan, op.medium),
  'editorBracketPairGuide.background2': withOpacity(bracketPastel.pink, op.medium),
  'editorBracketPairGuide.background3': withOpacity(bracketPastel.mint, op.medium),
  'editorBracketPairGuide.background4': withOpacity(bracketPastel.lavender, op.medium),
  'editorBracketPairGuide.background5': withOpacity(bracketPastel.aqua, op.medium),
  'editorBracketPairGuide.background6': withOpacity(bracketPastel.purple, op.medium),
  'editorBracketPairGuide.activeBackground1': withOpacity(bracketPastel.tan, op.strong),
  'editorBracketPairGuide.activeBackground2': withOpacity(bracketPastel.pink, op.strong),
  'editorBracketPairGuide.activeBackground3': withOpacity(bracketPastel.mint, op.strong),
  'editorBracketPairGuide.activeBackground4': withOpacity(bracketPastel.lavender, op.strong),
  'editorBracketPairGuide.activeBackground5': withOpacity(bracketPastel.aqua, op.strong),
  'editorBracketPairGuide.activeBackground6': withOpacity(bracketPastel.purple, op.strong),

  // ==========================================================================
  // GUTTER (Line decorations)
  // ==========================================================================
  'editorGutter.background': bg.base,
  'editorGutter.addedBackground': withOpacity(t.git.added.hex, op.solid),
  'editorGutter.modifiedBackground': withOpacity(t.git.modified.hex, op.solid),
  'editorGutter.deletedBackground': withOpacity(t.git.deleted.hex, op.solid),
  'editorGutter.addedSecondaryBackground': withOpacity(t.git.added.hex, op.strong),
  'editorGutter.modifiedSecondaryBackground': withOpacity(t.git.modified.hex, op.strong),
  'editorGutter.deletedSecondaryBackground': withOpacity(t.git.deleted.hex, op.strong),
  'editorGutter.foldingControlForeground': accent.bright,
  'editorGutter.commentRangeForeground': withOpacity(text.tertiary, op.heavy),
  'editorGutter.commentGlyphForeground': isLight ? semantic.info : t.decorative.commentGlyph,
  'editorGutter.commentUnresolvedGlyphForeground': semantic.warning,
  'editorGutter.commentDraftGlyphForeground': accent.soft,
  'editorGutter.itemGlyphForeground': accent.bright,
  'editorGutter.itemBackground': withOpacity(accent.primary, op.light),

  // ==========================================================================
  // FOLDING
  // ==========================================================================
  'editor.foldBackground': withOpacity(bg.base, op.light),
  'editor.foldPlaceholderForeground': text.ghost,

  // ==========================================================================
  // WIDGETS
  // ==========================================================================
  'editorWidget.foreground': text.primary,
  'editorWidget.background': bg.float,
  'editorWidget.border': withOpacity(pol.borderTint, op.strong),
  'editorWidget.resizeBorder': withOpacity(accent.bright, op.heavy),
  'widget.border': withOpacity(accent.primary, op.medium),
  'widget.shadow': withOpacity(bg.void, op.solid),

  // Hover widget
  'editorHoverWidget.foreground': text.primary,
  'editorHoverWidget.background': withOpacity(bg.float, op.opaque),
  'editorHoverWidget.border': withOpacity(accent.primary, op.heavy),
  'editorHoverWidget.highlightForeground': accent.bright,
  'editorHoverWidget.statusBarBackground': bg.float,

  // Ghost text (Copilot/AI suggestions)
  'editorGhostText.foreground': text.ghost,
  'editorGhostText.border': withOpacity(accent.soft, op.medium),
  'editorGhostText.background': withOpacity(text.secondary, op.subtle),

  // Linked editing
  'editor.linkedEditingBackground': withOpacity(accent.primary, op.light),

  // Unnecessary code
  'editorUnnecessaryCode.border': withOpacity(text.tertiary, op.heavy),
  'editorUnnecessaryCode.opacity': withOpacity(bg.void, op.solid),

  // ==========================================================================
  // SUGGEST WIDGET (Autocomplete)
  // ==========================================================================
  'editorSuggestWidget.background': withOpacity(bg.float, op.opaque),
  'editorSuggestWidget.border': withOpacity(accent.primary, op.heavy),
  'editorSuggestWidget.foreground': text.primary,
  'editorSuggestWidget.highlightForeground': accent.bright,
  'editorSuggestWidget.focusHighlightForeground': text.primary,
  'editorSuggestWidget.selectedBackground': pol.suggestSelectedBg,
  'editorSuggestWidget.selectedForeground': t.interactive.list.foreground.selected,
  'editorSuggestWidget.selectedIconForeground': t.interactive.list.foreground.selected,
  'editorSuggestWidgetStatus.foreground': isLight ? text.tertiary : text.secondary,

  // ==========================================================================
  // OVERVIEW RULER
  // ==========================================================================
  'editorOverviewRuler.background': bg.base,
  'editorOverviewRuler.border': withOpacity(accent.primary, op.medium),
  'editorOverviewRuler.findMatchForeground': withOpacity(semantic.warning, op.solid),
  'editorOverviewRuler.rangeHighlightForeground': withOpacity(accent.primary, op.heavy),
  'editorOverviewRuler.selectionHighlightForeground': withOpacity(accent.bright, op.heavy),
  'editorOverviewRuler.wordHighlightForeground': withOpacity(accent.bright, op.heavy),
  'editorOverviewRuler.wordHighlightStrongForeground': withOpacity(t.decorative.multiCursorSecondary, op.heavy),
  'editorOverviewRuler.wordHighlightTextForeground': withOpacity(accent.bright, op.heavy),
  'editorOverviewRuler.modifiedForeground': withOpacity(t.git.modified.hex, op.solid),
  'editorOverviewRuler.addedForeground': withOpacity(t.git.added.hex, op.solid),
  'editorOverviewRuler.deletedForeground': withOpacity(t.git.deleted.hex, op.solid),
  'editorOverviewRuler.errorForeground': semantic.error,
  'editorOverviewRuler.warningForeground': semantic.warning,
  'editorOverviewRuler.infoForeground': accent.primary,
  'editorOverviewRuler.bracketMatchForeground': withOpacity(accent.bright, op.solid),
  'editorOverviewRuler.commentForeground': withOpacity(text.tertiary, op.heavy),
  'editorOverviewRuler.commentUnresolvedForeground': withOpacity(semantic.warning, op.heavy),
  'editorOverviewRuler.commentDraftForeground': withOpacity(accent.soft, op.heavy),
  'editorOverviewRuler.currentContentForeground': withOpacity(accent.bright, op.heavy),
  'editorOverviewRuler.incomingContentForeground': withOpacity(t.git.added.hex, op.heavy),
  'editorOverviewRuler.commonContentForeground': withOpacity(text.tertiary, op.strong),
  // Inline chat (AI features)
  'editorOverviewRuler.inlineChatInserted': withOpacity(t.git.added.hex, op.heavy),
  'editorOverviewRuler.inlineChatRemoved': withOpacity(t.git.deleted.hex, op.heavy),

  // ==========================================================================
  // LINKS & CODE LENS
  // ==========================================================================
  'editorLink.activeForeground': t.ui.linkActive.hex,  // Vibrant teal (Lc 78)
  'editorCodeLens.foreground': text.tertiary,

  // ==========================================================================
  // LIGHTBULB
  // ==========================================================================
  'editorLightBulb.foreground': semantic.warning,
  'editorLightBulbAutoFix.foreground': semantic.success,
  'editorLightBulbAi.foreground': accent.magenta,

  // ==========================================================================
  // INLAY HINTS
  // ==========================================================================
  'editorInlayHint.foreground': t.ui.foregroundMuted.hex,
  'editorInlayHint.background': withOpacity(bg.base, op.solid),
  'editorInlayHint.typeForeground': accent.soft,
  'editorInlayHint.typeBackground': withOpacity(bg.base, op.solid),
  'editorInlayHint.parameterForeground': t.decorative.inlayParameter,
  'editorInlayHint.parameterBackground': withOpacity(bg.base, op.solid),

  // ==========================================================================
  // UNICODE HIGHLIGHT
  // ==========================================================================
  'editorUnicodeHighlight.border': withOpacity(semantic.warning, op.solid),
  'editorUnicodeHighlight.background': withOpacity(semantic.warning, op.medium),

  // ==========================================================================
  // ERROR/WARNING/INFO DECORATIONS
  // ==========================================================================
  'editorError.foreground': semantic.error,
  'editorError.border': special.transparent,
  'editorError.background': withOpacity(semantic.error, op.light),
  'editorWarning.foreground': semantic.warning,
  'editorWarning.border': special.transparent,
  'editorWarning.background': withOpacity(semantic.warning, op.light),
  'editorInfo.foreground': semantic.info,
  'editorInfo.border': special.transparent,
  'editorInfo.background': withOpacity(accent.primary, op.light),
  'editorHint.foreground': accent.soft,
  'editorHint.border': special.transparent,
  'problemsErrorIcon.foreground': semantic.error,
  'problemsWarningIcon.foreground': semantic.warning,
  'problemsInfoIcon.foreground': accent.primary,

  // ==========================================================================
  // STICKY SCROLL
  // ==========================================================================
  'editorStickyScroll.background': withOpacity(bg.base, op.opaque),
  'editorStickyScroll.border': withOpacity(accent.primary, op.medium),
  'editorStickyScroll.shadow': withOpacity(bg.void, op.strong),
  'editorStickyScrollGutter.background': withOpacity(bg.base, op.opaque),
  'editorStickyScrollHover.background': t.interactive.toolbar.background.hover,

  // ==========================================================================
  // MARKER NAVIGATION (F8 errors)
  // ==========================================================================
  'editorMarkerNavigation.background': bg.float,
  'editorMarkerNavigationError.background': withOpacity(semantic.error, op.light),
  'editorMarkerNavigationWarning.background': withOpacity(semantic.warning, op.light),
  'editorMarkerNavigationInfo.background': withOpacity(accent.primary, op.light),
  'editorMarkerNavigationError.headerBackground': withOpacity(semantic.error, op.light),
  'editorMarkerNavigationWarning.headerBackground': withOpacity(semantic.warning, op.light),
  'editorMarkerNavigationInfo.headerBackground': withOpacity(accent.primary, op.light),

  // ==========================================================================
  // SNIPPETS
  // ==========================================================================
  'editor.snippetTabstopHighlightBackground': withOpacity(t.decorative.cursorLineFrost, op.light),
  'editor.snippetTabstopHighlightBorder': withOpacity(accent.bright, op.strong),
  'editor.snippetFinalTabstopHighlightBackground': withOpacity(accent.magenta, op.light),
  'editor.snippetFinalTabstopHighlightBorder': withOpacity(accent.magenta, op.heavy),

  // ==========================================================================
  // INLINE VALUES (Debugging)
  // ==========================================================================
  'editor.inlineValuesForeground': t.ui.linkActive.hex,
  'editor.inlineValuesBackground': withOpacity(t.ui.linkActive.hex, op.light),

  // ==========================================================================
  // DEBUG HIGHLIGHTS
  // ==========================================================================
  'editor.stackFrameHighlightBackground': withOpacity(accent.primary, op.medium),
  'editor.focusedStackFrameHighlightBackground': withOpacity(accent.primary, op.light),

  // ==========================================================================
  // ACTIVITY BAR
  // ==========================================================================
  'activityBar.background': pol.activityBarBg,
  'activityBar.foreground': accent.bright,
  'activityBar.inactiveForeground': text.tertiary,
  'activityBar.border': withOpacity(accent.primary, op.light),
  'activityBar.activeBorder': accent.magenta,
  'activityBar.activeBackground': t.interactive.toolbar.background.hover,
  'activityBar.activeFocusBorder': accent.bright,
  'activityBar.dropBorder': accent.primary,
  'activityBarBadge.background': pol.badgeBg,
  'activityBarBadge.foreground': pol.badgeFg,
  'activityBarTop.foreground': accent.bright,
  'activityBarTop.activeBorder': accent.magenta,
  'activityBarTop.inactiveForeground': text.tertiary,
  'activityBarTop.dropBorder': accent.primary,
  'activityBarTop.background': pol.activityBarBg,
  'activityBarTop.activeBackground': t.interactive.toolbar.background.hover,
  'activityWarningBadge.foreground': isLight ? t.decorative.blouseWhite : pol.badgeFg,
  'activityWarningBadge.background': semantic.warning,
  'activityErrorBadge.foreground': isLight ? t.decorative.blouseWhite : pol.badgeFg,
  'activityErrorBadge.background': semantic.error,

  // ==========================================================================
  // SIDEBAR
  // ==========================================================================
  'sideBar.background': pol.sidebarBg,
  'sideBar.foreground': text.primary,
  'sideBar.border': withOpacity(accent.primary, op.light),
  'sideBar.dropBackground': withOpacity(accent.primary, op.light),
  'sideBarTitle.foreground': accent.bright,
  'sideBarTitle.background': pol.sidebarBg,
  'sideBarTitle.border': withOpacity(accent.primary, op.light),
  'sideBarSectionHeader.background': pol.sectionHeaderBg,
  'sideBarSectionHeader.foreground': accent.bright,
  'sideBarSectionHeader.border': withOpacity(pol.borderTint, alpha.sectionHeaderBorder),
  'sideBarActivityBarTop.border': withOpacity(accent.primary, op.light),
  'sideBarStickyScroll.background': pol.sidebarBg,
  'sideBarStickyScroll.border': withOpacity(accent.primary, op.light),
  'sideBarStickyScroll.shadow': withOpacity(bg.void, op.strong),

  // ==========================================================================
  // STATUS BAR
  // ==========================================================================
  'statusBar.background': pol.statusBarBg,
  'statusBar.foreground': isLight ? text.primary : text.secondary,
  'statusBar.border': withOpacity(accent.primary, op.medium),
  'statusBar.debuggingBackground': statusItem.debugBg,
  'statusBar.debuggingForeground': statusItem.debugFg,
  'statusBar.debuggingBorder': special.transparent,
  'statusBar.noFolderBackground': pol.statusBarBg,
  'statusBar.noFolderForeground': isLight ? text.primary : text.secondary,
  'statusBar.noFolderBorder': withOpacity(text.tertiary, op.medium),
  'statusBar.focusBorder': withOpacity(accent.magenta, op.dense),
  'statusBarItem.activeBackground': t.interactive.toolbar.background.active,
  'statusBarItem.hoverBackground': t.interactive.toolbar.background.hover,
  'statusBarItem.hoverForeground': text.primary,
  'statusBarItem.prominentForeground': text.primary,
  'statusBarItem.prominentBackground': t.interactive.toolbar.background.hover,
  'statusBarItem.prominentHoverBackground': t.interactive.toolbar.background.active,
  'statusBarItem.prominentHoverForeground': text.primary,
  'statusBarItem.remoteBackground': statusItem.remoteBg,
  'statusBarItem.remoteForeground': statusItem.remoteFg,
  'statusBarItem.remoteHoverBackground': statusItem.remoteHoverBg,
  'statusBarItem.remoteHoverForeground': statusItem.remoteHoverFg,
  'statusBarItem.errorBackground': darken(t.ui.activeBorder, 0.03),
  'statusBarItem.errorForeground': statusItem.errorFg,
  'statusBarItem.errorHoverBackground': darken(t.ui.activeBorder, 0.01),
  'statusBarItem.errorHoverForeground': t.decorative.blouseWhite,
  'statusBarItem.warningBackground': statusItem.warningBg,
  'statusBarItem.warningForeground': statusItem.warningFg,
  'statusBarItem.warningHoverBackground': statusItem.warningHoverBg,
  'statusBarItem.warningHoverForeground': t.decorative.blouseWhite,
  'statusBarItem.compactHoverBackground': t.interactive.toolbar.background.active,
  'statusBarItem.focusBorder': withOpacity(accent.magenta, op.dense),
  'statusBarItem.offlineBackground': statusItem.offlineBg,
  'statusBarItem.offlineForeground': statusItem.offlineFg,
  'statusBarItem.offlineHoverBackground': statusItem.offlineHoverBg,
  'statusBarItem.offlineHoverForeground': statusItem.offlineHoverFg,

  // ==========================================================================
  // TITLE BAR
  // ==========================================================================
  'titleBar.activeBackground': bg.house,
  'titleBar.activeForeground': text.primary,
  'titleBar.inactiveBackground': bg.house,
  'titleBar.inactiveForeground': text.tertiary,
  'titleBar.border': withOpacity(accent.primary, op.light),

  // ==========================================================================
  // TABS
  // ==========================================================================
  'tab.activeBackground': t.interactive.tab.background.active,
  'tab.activeForeground': t.interactive.tab.foreground.active,
  'tab.activeBorderTop': t.interactive.tab.border.active,
  'tab.activeBorder': withOpacity(accent.primary, op.medium),
  'tab.inactiveBackground': t.interactive.tab.background.default,
  'tab.inactiveForeground': t.interactive.tab.foreground.default,
  'tab.border': bg.house,
  'tab.hoverBackground': t.interactive.tab.background.hover,
  // Hover uses primary text for distinction from active (accent bright)
  'tab.hoverForeground': text.primary,
  'tab.hoverBorder': withOpacity(accent.primary, op.medium),
  'tab.unfocusedActiveBackground': bg.base,
  'tab.unfocusedActiveForeground': text.secondary,
  'tab.unfocusedActiveBorderTop': withOpacity(accent.primary, op.heavy),
  'tab.unfocusedActiveBorder': withOpacity(accent.primary, op.medium),
  'tab.unfocusedInactiveBackground': bg.house,
  'tab.unfocusedInactiveForeground': text.tertiary,
  'tab.unfocusedHoverBackground': withOpacity(pol.hoverTint, alpha.unfocusedTabHoverBg),
  'tab.unfocusedHoverForeground': text.secondary,
  'tab.unfocusedHoverBorder': withOpacity(pol.hoverTint, alpha.unfocusedTabHoverBorder),
  'tab.lastPinnedBorder': withOpacity(accent.magenta, op.heavy),
  'tab.activeModifiedBorder': accent.magenta,
  'tab.inactiveModifiedBorder': withOpacity(accent.magenta, op.heavy),
  'tab.unfocusedActiveModifiedBorder': withOpacity(accent.magenta, op.heavy),
  'tab.unfocusedInactiveModifiedBorder': withOpacity(accent.magenta, op.medium),
  'tab.dragAndDropBorder': accent.primary,
  'tab.selectedBackground': t.interactive.tab.background.selected,
  'tab.selectedForeground': accent.bright,
  'tab.selectedBorderTop': accent.primary,
  'editorGroupHeader.tabsBackground': pol.tabHeaderBg,
  'editorGroupHeader.tabsBorder': withOpacity(accent.primary, op.light),
  'editorGroupHeader.noTabsBackground': bg.base,
  'editorGroupHeader.border': withOpacity(accent.primary, op.light),

  // ==========================================================================
  // EDITOR GROUPS
  // ==========================================================================
  'editorGroup.border': withOpacity(pol.borderTint, alpha.borderSubtle),
  'editorGroup.dropBackground': withOpacity(accent.primary, op.medium),
  'editorGroup.dropIntoPromptForeground': text.primary,
  'editorGroup.dropIntoPromptBackground': withOpacity(bg.house, op.opaque),
  'editorGroup.dropIntoPromptBorder': withOpacity(accent.primary, op.heavy),
  'editorGroup.emptyBackground': bg.void,
  'editorGroup.focusedEmptyBorder': withOpacity(accent.primary, op.strong),
  'editorPane.background': bg.base,
  'sideBySideEditor.horizontalBorder': withOpacity(accent.primary, op.medium),
  'sideBySideEditor.verticalBorder': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // LISTS & TREES
  // ==========================================================================
  'list.activeSelectionBackground': t.interactive.list.background.selected,
  'list.activeSelectionForeground': t.interactive.list.foreground.selected,
  'list.activeSelectionIconForeground': t.interactive.list.foreground.selected,
  'list.inactiveSelectionBackground': withOpacity(t.decorative.cursorLineFrost, op.medium),
  'list.inactiveSelectionForeground': isLight ? text.primary : text.secondary,
  'list.inactiveSelectionIconForeground': isLight ? text.primary : text.secondary,
  'list.hoverBackground': t.interactive.list.background.hover,
  'list.hoverForeground': t.interactive.list.foreground.hover,
  'list.focusBackground': t.interactive.list.background.focus,
  'list.focusForeground': t.interactive.list.foreground.focus,
  'list.focusOutline': withOpacity(accent.magenta, op.dense),
  'list.focusAndSelectionOutline': withOpacity(accent.magenta, op.solid),
  'list.focusHighlightForeground': text.primary,
  'list.highlightForeground': accent.bright,
  'list.dropBackground': withOpacity(accent.primary, op.strong),
  'list.dropBetweenBackground': withOpacity(accent.primary, op.strong),
  'list.errorForeground': semantic.error,
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': semantic.error,
  'list.deemphasizedForeground': t.decorative.walletChain,
  'list.inactiveFocusBackground': withOpacity(pol.hoverTint, alpha.listInactiveFocusBg),
  'list.inactiveFocusOutline': withOpacity(accent.primary, op.medium),
  'list.filterMatchBackground': withOpacity(semantic.warning, op.medium),
  'list.filterMatchBorder': withOpacity(semantic.warning, op.heavy),
  'listFilterWidget.background': bg.float,
  'listFilterWidget.outline': withOpacity(accent.primary, op.heavy),
  'listFilterWidget.noMatchesOutline': semantic.error,
  'listFilterWidget.shadow': withOpacity(bg.void, op.heavy),

  // Tree
  'tree.indentGuidesStroke': withOpacity(t.decorative.negiStalk, op.medium),
  'tree.inactiveIndentGuidesStroke': withOpacity(t.decorative.negiStalk, op.light),
  'tree.tableColumnsBorder': withOpacity(accent.primary, op.medium),
  'tree.tableOddRowsBackground': withOpacity(pol.hoverTint, alpha.treeOddRowBg),

  // ==========================================================================
  // MINIMAP
  // ==========================================================================
  'minimap.background': special.transparent,
  'minimap.foregroundOpacity': t.ui.minimapOpacity,
  'minimap.selectionHighlight': withOpacity(accent.primary, op.heavy),
  'minimap.selectionOccurrenceHighlight': withOpacity(accent.primary, op.strong),
  'minimap.findMatchHighlight': withOpacity(semantic.warning, op.heavy),
  'minimap.errorHighlight': withOpacity(semantic.error, op.heavy),
  'minimap.warningHighlight': withOpacity(semantic.warning, op.heavy),
  'minimap.infoHighlight': withOpacity(accent.primary, op.heavy),
  'minimap.chatEditHighlight': withOpacity(accent.bright, op.heavy),
  'minimapSlider.background': t.interactive.slider.background.rest,
  'minimapSlider.hoverBackground': t.interactive.slider.background.hover,
  'minimapSlider.activeBackground': t.interactive.slider.background.active,
  'minimapGutter.addedBackground': t.git.added.hex,
  'minimapGutter.modifiedBackground': t.git.modified.hex,
  'minimapGutter.deletedBackground': t.git.deleted.hex,
  'editorMinimap.inlineChatInserted': withOpacity(t.git.added.hex, op.heavy),

  // ==========================================================================
  // SCROLLBAR
  // ==========================================================================
  'scrollbar.background': special.transparent,
  'scrollbar.shadow': withOpacity(bg.void, op.heavy),
  'scrollbarSlider.background': t.interactive.slider.background.rest,
  'scrollbarSlider.hoverBackground': t.interactive.slider.background.hover,
  'scrollbarSlider.activeBackground': t.interactive.slider.background.active,

  // ==========================================================================
  // PANEL (Bottom panel: Terminal, Output, etc.)
  // ==========================================================================
  'panel.background': pol.panelBg,
  'panel.border': withOpacity(accent.primary, op.solid),
  'panel.dropBorder': accent.primary,
  'panelTitle.activeBorder': accent.magenta,
  'panelTitle.activeForeground': accent.bright,
  'panelTitle.inactiveForeground': text.tertiary,
  'panelTitle.border': withOpacity(accent.primary, op.light),
  'panelTitleBadge.background': pol.badgeBg,
  'panelTitleBadge.foreground': pol.badgeFg,
  'panelInput.border': withOpacity(accent.primary, op.strong),
  'panelSection.border': withOpacity(accent.primary, op.solid),
  'panelSection.dropBackground': withOpacity(accent.primary, op.light),
  'panelSectionHeader.background': bg.base,
  'panelSectionHeader.foreground': accent.bright,
  'panelSectionHeader.border': withOpacity(accent.primary, op.solid),
  'panelStickyScroll.background': pol.panelBg,
  'panelStickyScroll.border': withOpacity(accent.primary, op.light),
  'panelStickyScroll.shadow': withOpacity(bg.void, op.heavy),
  'outputView.background': pol.panelBg,
  'outputViewStickyScroll.background': pol.panelBg,

  // ==========================================================================
  // TERMINAL
  // ==========================================================================
  'terminal.background': bg.base,
  'terminal.foreground': text.primary,
  'terminal.border': withOpacity(accent.primary, op.solid),
  'terminal.selectionBackground': withOpacity(t.decorative.cursorLineFrost, alpha.terminalSelectionBg),
  'terminal.selectionForeground': text.primary,
  'terminal.inactiveSelectionBackground': withOpacity(t.decorative.cursorLineFrost, op.medium),
  'terminal.findMatchBackground': withOpacity(semantic.warning, alpha.terminalFindMatchBg),
  'terminal.findMatchBorder': withOpacity(semantic.warning, op.solid),
  'terminal.findMatchHighlightBackground': withOpacity(accent.bright, op.medium),
  'terminal.findMatchHighlightBorder': withOpacity(accent.bright, op.heavy),
  'terminal.hoverHighlightBackground': t.interactive.list.background.hover,
  'terminal.initialHintForeground': t.ui.terminalHint.hex,
  'terminalCursor.foreground': accent.cursor,
  'terminalCursor.background': bg.void,
  'terminal.dropBackground': withOpacity(accent.primary, op.light),
  'terminal.tab.activeBorder': accent.magenta,

  // ANSI Colors - APCA Lc 75+ for terminal readability
  // All colors optimized for Stage background
  'terminal.ansiBlack': t.terminal.black.hex,
  'terminal.ansiRed': t.terminal.red.hex,
  'terminal.ansiGreen': t.terminal.green.hex,
  'terminal.ansiYellow': t.terminal.yellow.hex,
  'terminal.ansiBlue': t.terminal.blue.hex,
  'terminal.ansiMagenta': t.terminal.magenta.hex,
  'terminal.ansiCyan': t.terminal.cyan.hex,
  'terminal.ansiWhite': t.terminal.white.hex,
  'terminal.ansiBrightBlack': t.terminal.brightBlack.hex,
  'terminal.ansiBrightRed': t.terminal.brightRed.hex,
  'terminal.ansiBrightGreen': t.terminal.brightGreen.hex,
  'terminal.ansiBrightYellow': t.terminal.brightYellow.hex,
  'terminal.ansiBrightBlue': t.terminal.brightBlue.hex,
  'terminal.ansiBrightMagenta': t.terminal.brightMagenta.hex,
  'terminal.ansiBrightCyan': t.terminal.brightCyan.hex,
  'terminal.ansiBrightWhite': t.terminal.brightWhite.hex,

  // Terminal decorations
  'terminalCommandDecoration.defaultBackground': withOpacity(text.tertiary, op.strong),
  'terminalCommandDecoration.successBackground': withOpacity(semantic.success, op.heavy),
  'terminalCommandDecoration.errorBackground': withOpacity(semantic.error, op.heavy),
  'terminalCommandGuide.foreground': t.ui.terminalGuide.hex,
  'terminalOverviewRuler.cursorForeground': accent.cursor,
  'terminalOverviewRuler.findMatchForeground': withOpacity(semantic.warning, op.solid),
  'terminalOverviewRuler.border': withOpacity(accent.primary, op.medium),
  'terminalStickyScroll.background': bg.base,
  'terminalStickyScroll.border': withOpacity(accent.primary, op.light),
  'terminalStickyScrollHover.background': t.interactive.toolbar.background.hover,

  // Terminal symbol icons
  'terminalSymbolIcon.aliasForeground': accent.soft,
  'terminalSymbolIcon.branchForeground': accent.bright,
  // Lavender commit icons (Digital Stars) for DeltaE separation from branch teal
  'terminalSymbolIcon.commitForeground': isLight ? t.syntax.type.hex : t.decorative.commitIcon,
  'terminalSymbolIcon.flagForeground': semantic.warning,
  'terminalSymbolIcon.optionForeground': text.primary,
  'terminalSymbolIcon.optionValueForeground': t.symbol.snippet.hex,
  'terminalSymbolIcon.methodForeground': t.symbol.method.hex,
  'terminalSymbolIcon.argumentForeground': accent.soft,
  'terminalSymbolIcon.inlineSuggestionForeground': t.ui.linkActive.hex,
  'terminalSymbolIcon.fileForeground': text.primary,
  'terminalSymbolIcon.folderForeground': accent.primary,
  'terminalSymbolIcon.pullRequestDoneForeground': semantic.success,
  'terminalSymbolIcon.pullRequestForeground': isLight ? accent.magenta : t.decorative.multiCursorSecondary,
  'terminalSymbolIcon.remoteForeground': t.symbol.interface.hex,
  'terminalSymbolIcon.stashForeground': text.tertiary,
  'terminalSymbolIcon.symbolText': text.primary,
  'terminalSymbolIcon.symbolicLinkFileForeground': isLight ? t.syntax.class.hex : t.symbol.enum.hex,
  'terminalSymbolIcon.symbolicLinkFolderForeground': isLight ? t.syntax.class.hex : t.symbol.enum.hex,
  'terminalSymbolIcon.tagForeground': semantic.warning,

  // ==========================================================================
  // DEBUGGER
  // ==========================================================================
  'debugToolBar.background': withOpacity(bg.float, op.opaque),
  'debugToolBar.border': withOpacity(semantic.warning, op.strong),
  'debugIcon.breakpointForeground': t.decorative.tattooMark,
  'debugIcon.breakpointDisabledForeground': text.disabled,
  'debugIcon.breakpointUnverifiedForeground': isLight ? withOpacity(semantic.error, op.heavy) : darken(t.status.error, 0.08),
  'debugIcon.breakpointCurrentStackframeForeground': semantic.warning,
  'debugIcon.breakpointStackframeForeground': semantic.success,
  'debugIcon.startForeground': semantic.success,
  'debugIcon.pauseForeground': semantic.warning,
  'debugIcon.stopForeground': semantic.error,
  'debugIcon.disconnectForeground': withOpacity(semantic.error, op.solid),
  'debugIcon.restartForeground': semantic.success,
  'debugIcon.stepOverForeground': accent.bright,
  'debugIcon.stepIntoForeground': t.ui.linkActive.hex,
  'debugIcon.stepOutForeground': t.syntax.typeParameter.hex,
  'debugIcon.continueForeground': semantic.success,
  'debugIcon.stepBackForeground': accent.magenta,
  'debugConsole.infoForeground': semantic.info,
  'debugConsole.warningForeground': semantic.warning,
  'debugConsole.errorForeground': semantic.error,
  'debugConsole.sourceForeground': text.primary,
  'debugConsoleInputIcon.foreground': accent.primary,
  'debugExceptionWidget.background': withOpacity(semantic.error, op.light),
  'debugExceptionWidget.border': semantic.error,
  'debugTokenExpression.name': t.debug.name.hex,
  'debugTokenExpression.value': t.debug.value.hex,
  'debugTokenExpression.string': t.debug.string.hex,
  'debugTokenExpression.boolean': t.debug.boolean.hex,
  'debugTokenExpression.number': t.debug.number.hex,
  'debugTokenExpression.error': t.debug.error.hex,
  'debugTokenExpression.type': t.debug.type.hex,
  'debugView.exceptionLabelForeground': isLight ? t.decorative.blouseWhite : pol.debugLabelFg,
  'debugView.exceptionLabelBackground': isLight ? t.status.error.hex : darken(t.status.error, 0.19),
  'debugView.stateLabelForeground': isLight ? t.decorative.blouseWhite : pol.debugLabelFg,
  'debugView.stateLabelBackground': isLight ? t.status.success.hex : darken(t.status.success, 0.14),
  'debugView.valueChangedHighlight': withOpacity(accent.bright, op.strong),

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': withOpacity(pol.borderTint, op.heavy),
  'peekViewTitle.background': bg.float,
  'peekViewTitleLabel.foreground': accent.bright,
  'peekViewTitleDescription.foreground': isLight ? text.tertiary : text.secondary,
  'peekViewEditor.background': bg.base,
  'peekViewEditor.matchHighlightBackground': withOpacity(semantic.warning, op.medium),
  'peekViewEditor.matchHighlightBorder': withOpacity(semantic.warning, op.heavy),
  'peekViewEditorGutter.background': bg.house,
  'peekViewResult.background': bg.float,
  'peekViewResult.fileForeground': text.primary,
  'peekViewResult.lineForeground': isLight ? text.tertiary : text.secondary,
  'peekViewResult.matchHighlightBackground': withOpacity(semantic.warning, op.medium),
  'peekViewResult.selectionBackground': t.interactive.list.background.selected,
  'peekViewResult.selectionForeground': t.interactive.list.foreground.selected,
  'peekViewEditorStickyScroll.background': bg.base,
  'peekViewEditorStickyScrollGutter.background': bg.house,

  // ==========================================================================
  // DIFF EDITOR
  // ==========================================================================
  // Same bright character colors everywhere — minimap, editor, gutter.
  // Opacity tints the editor background so the hue matches the minimap exactly.
  //
  //   Inserted — MORE MORE JUMP! green (#88DD44), idol energy
  //   Removed  — Sakura Miku vivid candy sakura (#FF6BCA), lovely departure
  //
  // Line = 20%, text = 25% (~5% step), minimap = solid.
  'diffEditor.insertedLineBackground':        withOpacity(t.decorative.diffInserted, alpha.diffInsertedLine),
  'diffEditor.insertedTextBackground':         withOpacity(t.decorative.diffInserted, alpha.diffInsertedText),
  'diffEditor.insertedTextBorder':             special.transparent,
  'diffEditorGutter.insertedLineBackground':   withOpacity(t.decorative.diffInserted, alpha.diffGutterInserted),
  'diffEditor.removedLineBackground':          withOpacity(t.decorative.diffRemoved, alpha.diffRemovedLine),
  'diffEditor.removedTextBackground':          withOpacity(t.decorative.diffRemoved, alpha.diffRemovedText),
  'diffEditor.removedTextBorder':              special.transparent,
  'diffEditorGutter.removedLineBackground':    withOpacity(t.decorative.diffRemoved, alpha.diffGutterRemoved),
  'diffEditorOverview.insertedForeground': withOpacity(t.decorative.diffInserted, op.solid),
  'diffEditorOverview.removedForeground': withOpacity(t.decorative.diffRemoved, op.solid),
  'diffEditor.diagonalFill': withOpacity(text.tertiary, op.light),
  'diffEditor.border': withOpacity(pol.borderTint, alpha.borderSubtle),
  'diffEditor.unchangedRegionBackground': withOpacity(bg.float, op.medium),
  'diffEditor.unchangedRegionForeground': text.tertiary,
  'diffEditor.unchangedRegionShadow': withOpacity(bg.void, op.strong),
  'diffEditor.unchangedCodeBackground': withOpacity(bg.float, op.light),
  'diffEditor.move.border': withOpacity(t.decorative.diffMoveBorder, op.heavy),
  'diffEditor.moveActive.border': t.decorative.diffMoveBorder,

  // ==========================================================================
  // MULTI-DIFF EDITOR
  // ==========================================================================
  'multiDiffEditor.headerBackground': bg.float,
  'multiDiffEditor.background': bg.base,
  'multiDiffEditor.border': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // MERGE EDITOR
  // ==========================================================================
  'merge.currentHeaderBackground': withOpacity(accent.bright, op.strong),
  'merge.currentContentBackground': withOpacity(accent.bright, alpha.faintBg),
  'merge.incomingHeaderBackground': withOpacity(t.git.added.hex, op.strong),
  'merge.incomingContentBackground': withOpacity(t.git.added.hex, alpha.faintBg),
  'merge.border': withOpacity(accent.primary, op.strong),
  'merge.commonContentBackground': withOpacity(text.secondary, alpha.faintBg),
  'merge.commonHeaderBackground': withOpacity(text.secondary, op.medium),
  'mergeEditor.change.background': withOpacity(accent.bright, op.light),
  'mergeEditor.change.word.background': withOpacity(accent.bright, op.medium),
  'mergeEditor.conflict.unhandledUnfocused.border': withOpacity(semantic.warning, op.heavy),
  'mergeEditor.conflict.unhandledFocused.border': semantic.warning,
  'mergeEditor.conflict.handledUnfocused.border': withOpacity(t.git.added.hex, op.heavy),
  'mergeEditor.conflict.handledFocused.border': t.git.added.hex,
  'mergeEditor.conflict.handled.minimapOverViewRuler': t.git.added.hex,
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': semantic.warning,
  'mergeEditor.conflictingLines.background': withOpacity(semantic.warning, op.light),
  'mergeEditor.changeBase.background': withOpacity(bg.float, op.light),
  'mergeEditor.changeBase.word.background': withOpacity(bg.float, op.medium),
  'mergeEditor.conflict.input1.background': withOpacity(accent.bright, op.light),
  'mergeEditor.conflict.input2.background': withOpacity(t.git.added.hex, op.light),

  // ==========================================================================
  // GIT DECORATIONS - All Lc 75+ for sidebar background
  // ==========================================================================
  'gitDecoration.addedResourceForeground': t.git.added.hex,
  'gitDecoration.modifiedResourceForeground': t.git.modified.hex,
  'gitDecoration.deletedResourceForeground': t.git.deleted.hex,
  'gitDecoration.untrackedResourceForeground': t.git.untracked.hex,
  'gitDecoration.ignoredResourceForeground': lighten(t.ui.disabled, 0.005),
  'gitDecoration.conflictingResourceForeground': lighten(t.git.conflicting, 0.015),
  'gitDecoration.stageModifiedResourceForeground': t.git.stageModified.hex,
  'gitDecoration.stageDeletedResourceForeground': t.git.stageDeleted.hex,
  'gitDecoration.renamedResourceForeground': t.git.renamed.hex,
  'gitDecoration.submoduleResourceForeground': t.git.submodule.hex,
  'git.blame.editorDecorationForeground': text.disabled,

  // ==========================================================================
  // SCM GRAPH
  // ==========================================================================
  'scmGraph.historyItemHoverLabelForeground': pol.scmLabelFg,
  'scmGraph.historyItemHoverDefaultLabelForeground': text.secondary,
  'scmGraph.historyItemHoverDefaultLabelBackground': withOpacity(bg.float, op.solid),
  // SCM Graph - Project SEKAI unit colors (each branch is a unit's story)
  'scmGraph.foreground1': t.decorative.scmGraph[0],
  'scmGraph.foreground2': t.decorative.scmGraph[1],
  'scmGraph.foreground3': t.decorative.scmGraph[2],
  'scmGraph.foreground4': t.decorative.scmGraph[3],
  'scmGraph.foreground5': t.decorative.scmGraph[4],
  'scmGraph.historyItemHoverAdditionsForeground': t.git.added.hex,
  'scmGraph.historyItemHoverDeletionsForeground': t.git.deleted.hex,
  'scmGraph.historyItemRefColor': accent.bright,
  'scmGraph.historyItemRemoteRefColor': t.decorative.scmRemoteRef,
  'scmGraph.historyItemBaseRefColor': accent.primary,

  // ==========================================================================
  // NOTIFICATIONS
  // ==========================================================================
  'notifications.foreground': text.primary,
  'notifications.background': bg.float,
  'notifications.border': withOpacity(accent.primary, op.medium),
  'notificationToast.border': pol.toastBorder,
  'notificationCenterHeader.foreground': accent.bright,
  'notificationCenterHeader.background': bg.float,
  'notificationCenter.border': withOpacity(accent.primary, op.medium),
  'notificationLink.foreground': t.ui.linkActive.hex,
  'notificationsInfoIcon.foreground': isLight ? semantic.info : accent.primary,
  'notificationsWarningIcon.foreground': semantic.warning,
  'notificationsErrorIcon.foreground': semantic.error,

  // ==========================================================================
  // COMMAND CENTER
  // ==========================================================================
  'commandCenter.foreground': text.primary,
  'commandCenter.background': bg.house,
  'commandCenter.border': withOpacity(accent.primary, op.medium),
  'commandCenter.activeForeground': accent.bright,
  'commandCenter.activeBackground': t.interactive.toolbar.background.hover,
  'commandCenter.activeBorder': withOpacity(accent.primary, op.heavy),
  'commandCenter.inactiveForeground': text.tertiary,
  'commandCenter.inactiveBorder': withOpacity(text.tertiary, op.medium),
  'commandCenter.debuggingBackground': withOpacity(semantic.warning, op.medium),

  // ==========================================================================
  // QUICK INPUT
  // ==========================================================================
  'quickInput.background': isLight ? bg.base : bg.float,
  'quickInput.foreground': text.primary,
  'quickInputTitle.background': bg.float,
  'quickInputList.focusBackground': t.interactive.list.background.selected,
  'quickInputList.focusForeground': t.interactive.list.foreground.selected,
  'quickInputList.focusIconForeground': t.interactive.list.foreground.selected,
  'pickerGroup.border': withOpacity(accent.primary, op.medium),
  'pickerGroup.foreground': accent.bright,

  // ==========================================================================
  // KEYBINDING LABELS
  // ==========================================================================
  'keybindingLabel.background': withOpacity(accent.primary, op.light),
  'keybindingLabel.foreground': text.primary,
  'keybindingLabel.border': withOpacity(accent.primary, op.strong),
  'keybindingLabel.bottomBorder': withOpacity(accent.primary, op.heavy),
  'keybindingTable.headerBackground': bg.float,
  'keybindingTable.rowsBackground': withOpacity(accent.primary, op.subtle),

  // ==========================================================================
  // BREADCRUMBS
  // ==========================================================================
  'breadcrumb.foreground': t.decorative.walletChain,
  'breadcrumb.background': bg.base,
  'breadcrumb.focusForeground': t.syntax.function.hex,
  'breadcrumb.activeSelectionForeground': text.primary,
  'breadcrumbPicker.background': bg.float,

  // ==========================================================================
  // MENU
  // ==========================================================================
  'menu.background': bg.float,
  'menu.foreground': text.primary,
  'menu.selectionBackground': t.interactive.list.background.selected,
  'menu.selectionForeground': t.interactive.list.foreground.selected,
  'menu.selectionBorder': t.interactive.list.border.selected,
  'menu.separatorBackground': withOpacity(pol.borderTint, alpha.borderSubtle),
  'menu.border': withOpacity(accent.primary, op.medium),
  'menubar.selectionBackground': t.interactive.list.background.hover,
  'menubar.selectionForeground': t.interactive.list.foreground.hover,
  'menubar.selectionBorder': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // SETTINGS EDITOR
  // ==========================================================================
  'settings.headerForeground': accent.bright,
  'settings.modifiedItemIndicator': accent.magenta,
  'settings.dropdownBackground': bg.base,
  'settings.dropdownForeground': text.primary,
  'settings.dropdownBorder': withOpacity(accent.primary, op.strong),
  'settings.dropdownListBorder': withOpacity(accent.primary, op.heavy),
  'settings.checkboxBackground': bg.base,
  'settings.checkboxForeground': accent.bright,
  'settings.checkboxBorder': withOpacity(accent.primary, op.heavy),
  'settings.textInputBackground': bg.base,
  'settings.textInputForeground': text.primary,
  'settings.textInputBorder': withOpacity(accent.primary, op.strong),
  'settings.numberInputBackground': bg.base,
  'settings.numberInputForeground': text.primary,
  'settings.numberInputBorder': withOpacity(accent.primary, op.strong),
  'settings.focusedRowBackground': t.interactive.list.background.focus,
  'settings.focusedRowBorder': t.interactive.list.border.focus,
  'settings.rowHoverBackground': t.interactive.list.background.hover,
  'settings.sashBorder': withOpacity(pol.borderTint, alpha.borderSubtle),
  'settings.headerBorder': withOpacity(accent.primary, op.medium),
  'settings.settingsHeaderHoverForeground': text.primary,

  // ==========================================================================
  // TESTING
  // ==========================================================================
  // Separate "failed" vs "errored" for instant recognition (DeltaE distinction)
  // Errored uses darkened info (teal→dark teal on dark, blue constant on light for CVD safety vs red failed)
  'testing.iconErrored': pol.testingErrored,
  'testing.iconFailed': semantic.error,
  'testing.iconPassed': semantic.success,
  'testing.iconQueued': text.tertiary,
  'testing.iconUnset': withOpacity(text.tertiary, op.heavy),
  'testing.iconSkipped': text.tertiary,
  'testing.iconErrored.retired': withOpacity(semantic.error, op.heavy),
  'testing.iconFailed.retired': withOpacity(semantic.error, op.heavy),
  'testing.iconPassed.retired': withOpacity(semantic.success, op.heavy),
  'testing.iconQueued.retired': withOpacity(semantic.warning, op.heavy),
  'testing.iconUnset.retired': withOpacity(text.tertiary, op.heavy),
  'testing.iconSkipped.retired': withOpacity(text.tertiary, op.heavy),
  'testing.runAction': semantic.success,
  'testing.peekBorder': withOpacity(accent.primary, op.heavy),
  'testing.peekHeaderBackground': bg.float,
  'testing.message.error.lineBackground': withOpacity(semantic.error, op.light),
  'testing.message.error.badgeBackground': withOpacity(semantic.error, op.medium),
  'testing.message.error.badgeBorder': semantic.error,
  'testing.message.error.badgeForeground': semantic.error,
  'testing.message.info.decorationForeground': semantic.info,
  'testing.message.info.lineBackground': withOpacity(accent.primary, op.light),
  'testing.messagePeekBorder': accent.primary,
  'testing.messagePeekHeaderBackground': bg.base,
  'testing.coveredBackground': withOpacity(semantic.success, op.light),
  'testing.coveredBorder': withOpacity(semantic.success, op.strong),
  'testing.coveredGutterBackground': withOpacity(semantic.success, op.medium),
  'testing.uncoveredBranchBackground': withOpacity(semantic.error, op.light),
  'testing.uncoveredBackground': withOpacity(semantic.error, op.light),
  'testing.uncoveredBorder': withOpacity(semantic.error, op.strong),
  'testing.uncoveredGutterBackground': withOpacity(semantic.error, op.medium),
  'testing.coverCountBadgeBackground': withOpacity(accent.primary, op.medium),
  'testing.coverCountBadgeForeground': accent.bright,

  // ==========================================================================
  // WELCOME PAGE
  // ==========================================================================
  'welcomePage.background': bg.base,
  'welcomePage.tileBackground': bg.float,
  'welcomePage.tileHoverBackground': t.interactive.toolbar.background.hover,
  'welcomePage.tileBorder': withOpacity(accent.primary, op.medium),
  'welcomePage.progress.foreground': semantic.info,
  'welcomePage.progress.background': bg.house,
  'walkThrough.embeddedEditorBackground': bg.base,
  'walkthrough.stepTitle.foreground': accent.bright,

  // ==========================================================================
  // EXTENSION BUTTONS
  // ==========================================================================
  'extensionButton.prominentBackground': t.ui.buttonBackground.hex,
  'extensionButton.prominentForeground': t.interactive.button.foreground.default,
  'extensionButton.prominentHoverBackground': t.interactive.button.background.hover,
  'extensionButton.background': t.interactive.buttonSecondary.background.default,
  'extensionButton.foreground': t.interactive.buttonSecondary.foreground.default,
  'extensionButton.hoverBackground': t.interactive.buttonSecondary.background.hover,
  'extensionButton.separator': withOpacity(text.primary, op.medium),
  'extensionButton.border': t.interactive.button.border.default,
  'extensionBadge.remoteBackground': pol.badgeBg,
  'extensionBadge.remoteForeground': pol.badgeFg,
  'extensionIcon.starForeground': semantic.warning,
  'extensionIcon.verifiedForeground': semantic.success,
  'extensionIcon.preReleaseForeground': isLight ? t.syntax.type.hex : t.decorative.commitIcon,
  'extensionIcon.sponsorForeground': accent.magenta,
  'extensionIcon.privateForeground': isLight ? t.syntax.class.hex : t.symbol.enum.hex,
  'mcpIcon.starForeground': semantic.warning,

  // ==========================================================================
  // BANNER
  // ==========================================================================
  'banner.background': withOpacity(accent.primary, op.medium),
  'banner.foreground': text.primary,
  'banner.iconForeground': accent.primary,

  // ==========================================================================
  // INPUT & FORMS
  // ==========================================================================
  'input.background': t.interactive.input.background.default,
  'input.foreground': t.interactive.input.foreground.default,
  'input.border': t.interactive.input.border.default,
  'input.placeholderForeground': text.placeholder,
  'inputOption.activeBorder': t.interactive.toggle.border.selected,
  'inputOption.activeBackground': t.interactive.toggle.background.selected,
  'inputOption.activeForeground': t.interactive.toggle.foreground.selected,
  'inputOption.hoverBackground': t.interactive.toggle.background.hover,
  'inputValidation.errorBackground': withOpacity(semantic.error, op.medium),
  'inputValidation.errorForeground': text.primary,
  'inputValidation.errorBorder': semantic.error,
  'inputValidation.warningBackground': withOpacity(semantic.warning, op.medium),
  'inputValidation.warningForeground': text.primary,
  'inputValidation.warningBorder': semantic.warning,
  'inputValidation.infoBackground': withOpacity(semantic.info, op.medium),
  'inputValidation.infoForeground': text.primary,
  'inputValidation.infoBorder': semantic.info,

  // Dropdown
  'dropdown.background': bg.base,
  'dropdown.foreground': text.primary,
  'dropdown.border': withOpacity(accent.primary, op.strong),
  'dropdown.listBackground': bg.base,

  // Button — interactive token system
  'button.background': t.interactive.button.background.default,
  'button.foreground': t.interactive.button.foreground.default,
  'button.border': t.interactive.button.border.default,
  'button.separator': withOpacity(t.decorative.blouseWhite, op.medium),
  'button.hoverBackground': t.interactive.button.background.hover,
  'button.secondaryForeground': t.interactive.buttonSecondary.foreground.default,
  'button.secondaryBackground': t.interactive.buttonSecondary.background.default,
  'button.secondaryBorder': t.interactive.buttonSecondary.border.default,
  'button.secondaryHoverBackground': t.interactive.buttonSecondary.background.hover,

  // Checkbox — toggle material
  'checkbox.background': t.interactive.toggle.background.default,
  'checkbox.foreground': t.interactive.toggle.foreground.selected,
  'checkbox.border': t.interactive.toggle.border.default,
  'checkbox.selectBackground': t.interactive.toggle.background.selected,
  'checkbox.selectBorder': t.interactive.toggle.border.selected,
  'checkbox.disabled.background': t.interactive.toggle.background.disabled,
  'checkbox.disabled.foreground': t.interactive.toggle.foreground.disabled,

  // Radio buttons — toggle material
  'radio.activeForeground': t.interactive.toggle.foreground.active,
  'radio.activeBackground': t.interactive.toggle.background.selected,
  'radio.activeBorder': t.interactive.toggle.border.selected,
  'radio.inactiveForeground': t.interactive.toggle.foreground.default,
  'radio.inactiveBackground': t.interactive.toggle.background.default,
  'radio.inactiveBorder': t.interactive.toggle.border.default,
  'radio.inactiveHoverBackground': t.interactive.toggle.background.hover,

  // ==========================================================================
  // BADGE
  // ==========================================================================
  'badge.foreground': pol.badgeFg,
  'badge.background': pol.badgeBg,

  // ==========================================================================
  // PROGRESS BAR
  // ==========================================================================
  'progressBar.background': accent.primary,

  // ==========================================================================
  // TOOLBAR — fabric (minimal)
  // ==========================================================================
  'toolbar.hoverBackground': t.interactive.toolbar.background.hover,
  'toolbar.hoverOutline': t.interactive.toolbar.border.hover,
  'toolbar.activeBackground': t.interactive.toolbar.background.active,

  // ==========================================================================
  // ACTION BAR
  // ==========================================================================
  'actionBar.toggledBackground': pol.actionBarToggled,

  // ==========================================================================
  // PROFILE BADGE
  // ==========================================================================
  'profileBadge.background': pol.badgeBg,
  'profileBadge.foreground': pol.badgeFg,
  'profiles.sashBorder': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // NOTEBOOK
  // ==========================================================================
  'notebook.editorBackground': bg.base,
  'notebook.cellBorderColor': withOpacity(accent.primary, op.medium),
  'notebook.cellHoverBackground': t.interactive.list.background.hover,
  'notebook.cellInsertionIndicator': accent.bright,
  'notebook.cellStatusBarItemHoverBackground': t.interactive.toolbar.background.hover,
  'notebook.cellToolbarSeparator': withOpacity(accent.primary, op.medium),
  'notebook.cellEditorBackground': bg.base,
  'notebook.focusedCellBackground': t.interactive.list.background.focus,
  'notebook.focusedCellBorder': accent.magenta,
  'notebook.focusedEditorBorder': withOpacity(accent.magenta, op.dense),
  'notebook.inactiveFocusedCellBorder': withOpacity(accent.primary, op.heavy),
  'notebook.inactiveSelectedCellBorder': withOpacity(accent.primary, op.strong),
  'notebook.outputContainerBackgroundColor': bg.base,
  'notebook.outputContainerBorderColor': withOpacity(accent.primary, op.medium),
  'notebook.selectedCellBackground': withOpacity(t.decorative.cursorLineFrost, op.light),
  'notebook.selectedCellBorder': withOpacity(accent.primary, op.heavy),
  'notebook.symbolHighlightBackground': withOpacity(accent.primary, op.light),
  'notebookScrollbarSlider.activeBackground': t.interactive.slider.background.active,
  'notebookScrollbarSlider.background': t.interactive.slider.background.rest,
  'notebookScrollbarSlider.hoverBackground': t.interactive.slider.background.hover,
  'notebookStatusErrorIcon.foreground': semantic.error,
  'notebookStatusRunningIcon.foreground': semantic.warning,
  'notebookStatusSuccessIcon.foreground': semantic.success,
  'notebookEditorOverviewRuler.runningCellForeground': semantic.warning,
  'interactive.activeCodeBorder': withOpacity(accent.bright, op.heavy),
  'interactive.inactiveCodeBorder': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // SYMBOL ICONS - All Lc 75+ for visibility, DeltaE 15+ between similar types
  // ==========================================================================
  'symbolIcon.arrayForeground': t.symbol.array.hex,
  'symbolIcon.booleanForeground': t.symbol.boolean.hex,
  'symbolIcon.classForeground': isLight ? t.syntax.class.hex : t.symbol.class.hex,
  'symbolIcon.colorForeground': accent.magenta,
  'symbolIcon.constantForeground': t.symbol.constant.hex,
  'symbolIcon.constructorForeground': t.symbol.constructor.hex,
  'symbolIcon.enumeratorForeground': t.symbol.enum.hex,
  'symbolIcon.enumeratorMemberForeground': t.symbol.enumMember.hex,
  'symbolIcon.eventForeground': t.symbol.enum.hex,
  'symbolIcon.fieldForeground': t.symbol.field.hex,
  'symbolIcon.fileForeground': text.primary,
  'symbolIcon.folderForeground': t.symbol.folder.hex,
  'symbolIcon.functionForeground': t.symbol.function.hex,
  'symbolIcon.interfaceForeground': t.symbol.interface.hex,
  'symbolIcon.keyForeground': t.syntax.function.hex,
  'symbolIcon.keywordForeground': t.syntax.keyword.hex,
  'symbolIcon.methodForeground': t.symbol.method.hex,
  'symbolIcon.moduleForeground': t.symbol.module.hex,
  'symbolIcon.namespaceForeground': t.symbol.namespace.hex,
  'symbolIcon.nullForeground': text.tertiary,
  'symbolIcon.numberForeground': t.symbol.number.hex,
  'symbolIcon.objectForeground': t.syntax.attribute.hex,
  'symbolIcon.operatorForeground': t.symbol.operator.hex,
  'symbolIcon.packageForeground': t.symbol.package.hex,
  'symbolIcon.propertyForeground': t.symbol.property.hex,
  'symbolIcon.referenceForeground': t.symbol.reference.hex,
  'symbolIcon.snippetForeground': t.symbol.snippet.hex,
  'symbolIcon.stringForeground': t.symbol.string.hex,
  'symbolIcon.structForeground': t.symbol.struct.hex,
  'symbolIcon.textForeground': text.primary,
  'symbolIcon.typeParameterForeground': t.symbol.typeParameter.hex,
  'symbolIcon.unitForeground': accent.magenta,
  'symbolIcon.variableForeground': t.symbol.variable.hex,

  // ==========================================================================
  // INLINE CHAT
  // ==========================================================================
  'inlineChat.background': withOpacity(bg.float, op.opaque),
  'inlineChat.foreground': text.primary,
  'inlineChat.border': withOpacity(accent.bright, op.heavy),
  'inlineChat.shadow': withOpacity(bg.void, op.heavy),
  'inlineChatInput.background': isLight ? bg.base : bg.float,
  'inlineChatInput.border': withOpacity(accent.primary, op.strong),
  'inlineChatInput.focusBorder': accent.magenta,
  'inlineChatInput.placeholderForeground': text.placeholder,
  'inlineChatDiff.inserted': withOpacity(t.decorative.diffInserted, alpha.inlineChatDiff),
  'inlineChatDiff.removed': withOpacity(t.decorative.diffRemoved, alpha.inlineChatDiff),

  // ==========================================================================
  // CHAT
  // ==========================================================================
  'chat.requestBackground': bg.base,
  'chat.requestBorder': withOpacity(accent.primary, op.medium),
  'chat.slashCommandBackground': withOpacity(accent.bright, op.medium),
  'chat.slashCommandForeground': accent.bright,
  'chat.avatarBackground': withOpacity(accent.primary, op.medium),
  'chat.avatarForeground': accent.bright,
  'chat.editedFileForeground': t.syntax.variable.hex,
  'chat.linesAddedForeground': withOpacity(t.git.added.hex, alpha.chatLinesAdded),
  'chat.linesRemovedForeground': withOpacity(t.git.deleted.hex, alpha.chatLinesRemoved),
  'chat.requestCodeBorder': withOpacity(accent.bright, op.strong),
  'chat.requestBubbleBackground': withOpacity(accent.primary, op.light),
  'chat.requestBubbleHoverBackground': t.interactive.toolbar.background.hover,
  'chat.checkpointSeparator': withOpacity(accent.primary, op.medium),
  'chat.thinkingShimmer': withOpacity(accent.bright, op.strong),
  'chatManagement.sashBorder': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // INLINE EDIT
  // ==========================================================================
  'inlineEdit.gutterIndicator.primaryBorder': accent.bright,
  'inlineEdit.gutterIndicator.primaryForeground': accent.bright,
  'inlineEdit.gutterIndicator.primaryBackground': withOpacity(accent.bright, op.light),
  'inlineEdit.gutterIndicator.secondaryBorder': withOpacity(accent.primary, op.heavy),
  'inlineEdit.gutterIndicator.secondaryForeground': semantic.info,
  'inlineEdit.gutterIndicator.secondaryBackground': withOpacity(accent.primary, op.light),
  'inlineEdit.gutterIndicator.successfulBorder': t.git.added.hex,
  'inlineEdit.gutterIndicator.successfulForeground': t.git.added.hex,
  'inlineEdit.gutterIndicator.successfulBackground': withOpacity(t.git.added.hex, op.light),
  'inlineEdit.gutterIndicator.background': bg.house,
  'inlineEdit.originalBackground': withOpacity(bg.float, op.subtle),
  'inlineEdit.modifiedBackground': withOpacity(accent.primary, op.light),
  'inlineEdit.originalChangedLineBackground': withOpacity(t.decorative.diffRemoved, op.subtle),
  'inlineEdit.originalChangedTextBackground': withOpacity(t.decorative.diffRemoved, op.medium),
  'inlineEdit.modifiedChangedLineBackground': withOpacity(t.decorative.diffInserted, op.subtle),
  'inlineEdit.modifiedChangedTextBackground': withOpacity(t.decorative.diffInserted, op.medium),
  'inlineEdit.originalBorder': withOpacity(bg.float, op.strong),
  'inlineEdit.modifiedBorder': withOpacity(accent.bright, op.strong),
  'inlineEdit.tabWillAcceptModifiedBorder': withOpacity(t.git.added.hex, op.heavy),
  'inlineEdit.tabWillAcceptOriginalBorder': withOpacity(t.decorative.diffRemoved, op.heavy),

  // ==========================================================================
  // EDITOR ACTION LIST
  // ==========================================================================
  'editorActionList.background': bg.float,
  'editorActionList.foreground': text.primary,
  'editorActionList.focusForeground': t.interactive.list.foreground.selected,
  'editorActionList.focusBackground': t.interactive.list.background.selected,

  // ==========================================================================
  // PORTS
  // ==========================================================================
  'ports.iconRunningProcessForeground': semantic.success,

  // ==========================================================================
  // COMMENTS VIEW
  // ==========================================================================
  'commentsView.resolvedIcon': semantic.success,
  'commentsView.unresolvedIcon': semantic.warning,
  'editorCommentsWidget.resolvedBorder': withOpacity(semantic.success, op.heavy),
  'editorCommentsWidget.unresolvedBorder': withOpacity(semantic.warning, op.heavy),
  'editorCommentsWidget.rangeBackground': withOpacity(accent.primary, op.subtle),
  'editorCommentsWidget.rangeActiveBackground': withOpacity(accent.primary, op.light),
  'editorCommentsWidget.replyInputBackground': bg.float,

  // ==========================================================================
  // SIMPLE FIND WIDGET
  // ==========================================================================
  'simpleFindWidget.sashBorder': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // CHARTS
  // ==========================================================================
  // Charts - Magical Mirai concert evolution
  'charts.foreground': text.primary,
  'charts.lines': withOpacity(accent.primary, op.heavy),
  'charts.red': t.decorative.charts.red,     // 2014 hot pink
  'charts.blue': t.decorative.charts.blue,              // 2013 royal blue
  'charts.yellow': t.decorative.charts.yellow,    // Concert gold
  'charts.orange': t.decorative.charts.orange,               // Stage orange
  'charts.green': t.decorative.charts.green,      // 2013 emerald
  'charts.purple': t.decorative.charts.purple,                         // Nightcord purple
  'chart.line': accent.primary,
  'chart.axis': text.tertiary,
  'chart.guide': withOpacity(accent.primary, op.medium),

  // ==========================================================================
  // GAUGE
  // ==========================================================================
  'gauge.background': bg.float,
  'gauge.foreground': semantic.info,
  'gauge.border': withOpacity(accent.primary, op.medium),
  'gauge.warningBackground': withOpacity(semantic.warning, op.medium),
  'gauge.warningForeground': semantic.warning,
  'gauge.errorBackground': withOpacity(semantic.error, op.medium),
  'gauge.errorForeground': semantic.error,

  // ==========================================================================
  // MARKDOWN ALERTS - DeltaE 15+ between note and tip
  // ==========================================================================
  'markdownAlert.note.foreground': t.markdown.alertNote.hex,
  'markdownAlert.tip.foreground': t.markdown.alertTip.hex,
  'markdownAlert.important.foreground': t.markdown.alertImportant.hex,
  'markdownAlert.warning.foreground': t.markdown.alertWarning.hex,
  'markdownAlert.caution.foreground': t.markdown.alertCaution.hex,

  // ==========================================================================
  // AGENT SESSION
  // ==========================================================================
  'agentSessionReadIndicator.foreground': accent.bright,
  'agentSessionSelectedBadge.border': accent.primary,
  'agentSessionSelectedUnfocusedBadge.border': withOpacity(accent.primary, op.heavy),

  // ==========================================================================
  // GENERAL UI - Base values
  // ==========================================================================
  'focusBorder': withOpacity(accent.magenta, op.dense),
  'foreground': text.primary,
  'disabledForeground': text.disabled,
  'selection.background': withOpacity(t.decorative.cursorLineFrost, op.strong),
  'descriptionForeground': text.secondary,
  'errorForeground': semantic.error,
  'icon.foreground': text.secondary,
  'sash.hoverBorder': withOpacity(accent.magenta, op.solid),

  // ==========================================================================
  // TEXT BLOCKS
  // ==========================================================================
  'textBlockQuote.background': withOpacity(accent.primary, op.light),
  'textBlockQuote.border': withOpacity(accent.primary, op.strong),
  'textCodeBlock.background': withOpacity(bg.house, op.solid),
  'textLink.activeForeground': t.ui.linkActive.hex,
  'textLink.foreground': accent.bright,
  'textPreformat.foreground': accent.soft,
  'textPreformat.background': withOpacity(bg.house, op.heavy),
  'textPreformat.border': withOpacity(accent.primary, op.medium),
  'textSeparator.foreground': withOpacity(accent.primary, op.strong),
};
}

