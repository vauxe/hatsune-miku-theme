/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette.
 * Design Philosophy: "Digital Diva" - Serene, immersive, 8+ hour coding comfort.
 *
 * Color Architecture:
 * - Background layers: void < frame < shelf < base (editor) < float — all from skirt.base (hz≈249°)
 * - Primary accent: hair.base (#39C5BB) - canonical Miku teal
 * - Secondary accent: hair.highlight (#5DE4DB) - attention states
 * - Cursor/focus: vivid magenta from headphone cushion (#E05096)
 * - Semantic: green (success), gold (warning), red (error)
 */

// Semantic token system - all colors flow through design tokens
import { withOpacity, lighten, darken, roleFromHex, type SemanticTokens } from '../tokens';

export function createWorkbenchColors(t: SemanticTokens, polarity: 'dark' | 'light' = 'dark'): Record<string, string> {
const isLight = polarity === 'light';
// For badges/items on teal/bright accent backgrounds — always dark text for contrast
const onAccentBg = t.decorative.darkForeground;

// ============================================================================
// DESIGN SYSTEM CONSTANTS
// ============================================================================

// Background hierarchy — skirt-centered steps (0.005 Jz each, preserving skirt's hz≈249°)
const bg = {
  void: t.ui.backgroundVoid.hex,    // step −3: panel bg, empty groups
  frame: t.ui.backgroundFrame.hex,  // step −2: activity bar, status bar, title bar
  shelf: t.ui.backgroundShelf.hex,  // step −1: sidebar, tab strip
  base: t.ui.background.hex,        // step  0: THE SKIRT — editor canvas (anchor)
  float: t.ui.backgroundFloat.hex,  // step +1: hover, suggest, menus, tooltips
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
  magenta: t.ui.activeBorder.hex,     // canonical cushion #E05096 — active border accent
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
const alpha = {
  // Editor line highlighting
  lineHighlightBg:          isLight ? '12' : '1C',   // 11% — tuned for compound contrast survival on warm tokens
  lineHighlightBorder:      isLight ? '18' : '40',
  inactiveLineHighlight:    isLight ? '0A' : '15',
  // Selection
  selectionBg:              isLight ? '24' : '25',
  inactiveSelectionBg:      isLight ? '10' : '18',
  // Highlights — subtle/faint tiers
  subtleBg:                 isLight ? '0A' : '15',   // selectionHighlight, wordHighlight, linkedEditing
  subtleBorder:             isLight ? '18' : '30',   // selectionHighlight border
  wordHighlightBorder:      isLight ? '25' : '35',
  faintBg:                  isLight ? '08' : '12',   // wordHighlightStrong/Text, mergeContent
  faintBorder:              isLight ? '20' : '30',   // wordHighlightStrong/Text border
  // Find
  findMatchBg:              isLight ? '1C' : '22',
  findHighlightBg:          isLight ? '1C' : '18',
  findHighlightBorder:      isLight ? '40' : '50',
  // Hover
  hoverBg:                  isLight ? '08' : '10',
  // Bracket
  bracketMatchBg:           isLight ? '14' : '20',
  // Terminal
  terminalSelectionBg:      isLight ? '20' : '35',
  terminalFindMatchBg:      isLight ? '18' : '40',
  // Diff — reduced from 20%/25% to 15%/18% to preserve Lc ≥ 70 on bright source colors
  diffInsertedLine:         isLight ? '1C' : '26',
  diffInsertedText:         isLight ? '22' : '2E',
  diffGutterInserted:       isLight ? '14' : '26',
  diffRemovedLine:          isLight ? '1C' : '26',
  diffRemovedText:          isLight ? '1A' : '2E',
  diffGutterRemoved:        isLight ? '1C' : '26',
  // Inline chat
  inlineChatDiff:           isLight ? '12' : '20',
  chatLinesAdded:           'F5',
  chatLinesRemoved:         'EE',
  // Borders — shared subtle pattern for panels/dividers
  borderSubtle:             isLight ? '30' : '25',   // editorGroup, panel, diff, menu sep, settings sash
  sectionHeaderBorder:      isLight ? '25' : '20',   // sideBarSectionHeader
  // Tab unfocused
  unfocusedTabHoverBg:      isLight ? '15' : '08',
  unfocusedTabHoverBorder:  isLight ? '30' : '20',
  // List/tree
  listInactiveFocusBg:      isLight ? '12' : '10',
  treeOddRowBg:             isLight ? '08' : '04',
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
  // Panel/command center background
  panelBg:          isLight ? bg.shelf : bg.void,
  // Activity bar background
  activityBarBg:    isLight ? t.decorative.topMain : bg.frame,
  // Sidebar background
  sidebarBg:        isLight ? t.decorative.armWarmersBase : bg.shelf,
  // Section header background
  sectionHeaderBg:  isLight ? t.decorative.topMain : bg.shelf,
  // Status bar background
  statusBarBg:      isLight ? t.decorative.topShadow : bg.frame,
  // Tab header background
  tabHeaderBg:      isLight ? t.decorative.armWarmersBase : bg.shelf,
  // Suggest widget selected
  suggestSelectedBg: isLight
    ? withOpacity(t.decorative.cursorLineFrost, '1A')
    : withOpacity(t.decorative.cursorLineFrost, '1C'),  // 11% frost — tuned for compound contrast survival on warm tokens
  // Notification toast border
  toastBorder:      isLight ? withOpacity(accent.blush, '35') : withOpacity(t.decorative.skinBase, '30'),
  // SCM graph label foreground
  scmLabelFg:       isLight ? text.primary : t.decorative.darkForeground,
  // Debug view label foreground
  debugLabelFg:     isLight ? t.decorative.blouseWhite : text.primary,
  // Testing icon errored
  testingErrored:   isLight ? t.syntax.constant.hex : darken(t.status.info, 0.035),
  // Action bar toggled
  actionBarToggled: isLight ? withOpacity(accent.primary, '30') : t.interactive.toggle.background.selected,
};

// StatusItem — status bar item colors per polarity
const statusItem = {
  debugBg:          isLight ? darken(t.ui.activeBorder, 0.03) : darken(roleFromHex('', t.decorative.diffRemoved), 0.05),
  debugFg:          t.decorative.blouseWhite,
  remoteBg:         isLight ? t.ui.buttonBackground.hex : lighten(roleFromHex('', accent.primary), 0.02),
  remoteFg:         isLight ? t.decorative.blouseWhite : onAccentBg,
  remoteHoverBg:    isLight ? t.interactive.button.background.hover : accent.bright,
  remoteHoverFg:    isLight ? t.decorative.blouseWhite : t.decorative.darkForeground,
  errorFg:          t.decorative.blouseWhite,
  warningBg:        darken(t.status.warning, isLight ? 0.00 : 0.10),
  warningFg:        t.decorative.blouseWhite,
  warningHoverBg:   isLight ? lighten(t.status.warning, 0.02) : darken(t.status.warning, 0.08),
  offlineBg:        isLight ? t.ui.buttonBackground.hex : withOpacity(text.tertiary, 'AA'),
  offlineFg:        t.decorative.blouseWhite,
  offlineHoverBg:   isLight ? darken(t.ui.buttonBackground, 0.01) : withOpacity(text.tertiary, 'CC'),
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
  'editorMultiCursor.secondary.foreground': t.decorative.multiCursorSecondary,
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
  'editor.selectionHighlightBackground': withOpacity(accent.bright, alpha.subtleBg),
  'editor.selectionHighlightBorder': withOpacity(accent.bright, alpha.subtleBorder),

  // Word highlighting
  'editor.wordHighlightBackground': withOpacity(accent.primary, alpha.subtleBg),
  'editor.wordHighlightBorder': withOpacity(accent.primary, alpha.wordHighlightBorder),
  'editor.wordHighlightStrongBackground': withOpacity(t.decorative.skinBlush, alpha.faintBg),
  'editor.wordHighlightStrongBorder': withOpacity(t.decorative.skinBlush, alpha.faintBorder),
  'editor.wordHighlightTextBackground': withOpacity(accent.bright, alpha.faintBg),
  'editor.wordHighlightTextBorder': withOpacity(accent.bright, alpha.faintBorder),

  // Find & Replace
  // Balance: visible enough for ΔE≥12, low enough for syntax contrast
  'editor.findMatchBackground': withOpacity(semantic.warning, alpha.findMatchBg),
  'editor.findMatchForeground': text.primary,
  'editor.findMatchBorder': withOpacity(semantic.warning, '80'),
  'editor.findMatchHighlightBackground': withOpacity(accent.bright, alpha.findHighlightBg),
  'editor.findMatchHighlightBorder': withOpacity(accent.bright, alpha.findHighlightBorder),
  'editor.findRangeHighlightBackground': withOpacity(accent.primary, '10'),
  'editor.findRangeHighlightBorder': withOpacity(accent.primary, '25'),
  'search.resultsInfoForeground': text.secondary,
  // Darken slightly for comment readability in Search Editor
  'searchEditor.findMatchBackground': withOpacity(semantic.warning, '20'),
  'searchEditor.findMatchBorder': withOpacity(semantic.warning, '60'),
  'searchEditor.textInputBorder': withOpacity(accent.primary, '40'),

  // Hover
  'editor.hoverHighlightBackground': withOpacity(accent.bright, alpha.hoverBg),

  // Range highlighting
  'editor.rangeHighlightBackground': withOpacity(pol.hoverTint, '08'),
  'editor.rangeHighlightBorder': withOpacity(pol.hoverTint, '20'),
  'editor.symbolHighlightBackground': withOpacity(accent.bright, '12'),
  'editor.symbolHighlightBorder': withOpacity(accent.bright, '30'),

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
  'editorIndentGuide.background1': withOpacity(t.decorative.indentGuides[0], '35'),        // V2 (2007) - Original
  'editorIndentGuide.background2': withOpacity(t.decorative.indentGuides[1], '40'),    // Append (2010) - Dark era
  'editorIndentGuide.background3': withOpacity(t.decorative.indentGuides[2], '45'),        // V3 (2013) - Refined
  'editorIndentGuide.background4': withOpacity(t.decorative.indentGuides[3], '50'),       // V4X (2016) - Variants
  'editorIndentGuide.background5': withOpacity(t.decorative.indentGuides[4], '55'),        // NT (2020) - Organic
  'editorIndentGuide.background6': withOpacity(t.decorative.indentGuides[5], '60'),     // Present - Canonical
  'editorIndentGuide.activeBackground1': t.decorative.indentGuides[0],
  'editorIndentGuide.activeBackground2': t.decorative.indentGuides[1],
  'editorIndentGuide.activeBackground3': t.decorative.indentGuides[2],
  'editorIndentGuide.activeBackground4': t.decorative.indentGuides[3],
  'editorIndentGuide.activeBackground5': t.decorative.indentGuides[4],
  'editorIndentGuide.activeBackground6': t.decorative.indentGuides[5],

  // ==========================================================================
  // RULERS & WHITESPACE
  // ==========================================================================
  'editorRuler.foreground': t.ui.ruler.hex,      // #2A3A3C - Subtle but visible
  'editorWhitespace.foreground': t.ui.whitespace.hex, // #3A4448 - Lc 15 subtle markers

  // ==========================================================================
  // BRACKETS - Rainbow colorful (Miku-inspired palette)
  // ==========================================================================
  'editorBracketMatch.background': withOpacity(accent.primary, alpha.bracketMatchBg),
  'editorBracketMatch.border': accent.bright,
  'editorBracketMatch.foreground': accent.bright,

  // Rainbow bracket pairs (APCA Lc 60+ validated)
  // Rainbow brackets - Pastel palette for eye comfort
  'editorBracketHighlight.foreground1': bracketPastel.tan,       // Warm tan (12% sat)
  'editorBracketHighlight.foreground2': bracketPastel.pink,      // Sakura pink (20% sat)
  'editorBracketHighlight.foreground3': bracketPastel.mint,      // Negi green (good contrast)
  'editorBracketHighlight.foreground4': bracketPastel.lavender,  // Digital Stars lavender
  'editorBracketHighlight.foreground5': bracketPastel.aqua,      // Soft aqua (18% sat)
  'editorBracketHighlight.foreground6': bracketPastel.purple,    // Soft purple (12% sat)
  'editorBracketHighlight.unexpectedBracket.foreground': semantic.error,

  // Bracket pair guides
  'editorBracketPairGuide.background1': withOpacity(bracketPastel.tan, '20'),
  'editorBracketPairGuide.background2': withOpacity(bracketPastel.pink, '20'),
  'editorBracketPairGuide.background3': withOpacity(bracketPastel.mint, '20'),
  'editorBracketPairGuide.background4': withOpacity(bracketPastel.lavender, '20'),
  'editorBracketPairGuide.background5': withOpacity(bracketPastel.aqua, '20'),
  'editorBracketPairGuide.background6': withOpacity(bracketPastel.purple, '20'),
  'editorBracketPairGuide.activeBackground1': withOpacity(bracketPastel.tan, '45'),
  'editorBracketPairGuide.activeBackground2': withOpacity(bracketPastel.pink, '45'),
  'editorBracketPairGuide.activeBackground3': withOpacity(bracketPastel.mint, '45'),
  'editorBracketPairGuide.activeBackground4': withOpacity(bracketPastel.lavender, '45'),
  'editorBracketPairGuide.activeBackground5': withOpacity(bracketPastel.aqua, '45'),
  'editorBracketPairGuide.activeBackground6': withOpacity(bracketPastel.purple, '45'),

  // ==========================================================================
  // GUTTER (Line decorations)
  // ==========================================================================
  'editorGutter.background': bg.base,
  'editorGutter.addedBackground': withOpacity(semantic.success, '80'),
  'editorGutter.modifiedBackground': withOpacity(semantic.warning, '80'),
  'editorGutter.deletedBackground': withOpacity(semantic.error, '80'),
  'editorGutter.addedSecondaryBackground': withOpacity(semantic.success, '40'),
  'editorGutter.modifiedSecondaryBackground': withOpacity(semantic.warning, '40'),
  'editorGutter.deletedSecondaryBackground': withOpacity(semantic.error, '40'),
  'editorGutter.foldingControlForeground': accent.bright,
  'editorGutter.commentRangeForeground': withOpacity(text.tertiary, '60'),
  'editorGutter.commentGlyphForeground': t.decorative.commentGlyph,
  'editorGutter.commentUnresolvedGlyphForeground': semantic.warning,
  'editorGutter.commentDraftGlyphForeground': accent.soft,
  'editorGutter.itemGlyphForeground': accent.bright,
  'editorGutter.itemBackground': withOpacity(accent.primary, '10'),

  // ==========================================================================
  // FOLDING
  // ==========================================================================
  'editor.foldBackground': withOpacity(accent.primary, '06'),
  'editor.foldPlaceholderForeground': text.ghost,  // #7A9A98 - Lc 45+ for readable fold placeholders

  // ==========================================================================
  // WIDGETS
  // ==========================================================================
  'editorWidget.foreground': text.primary,
  'editorWidget.background': bg.float,
  'editorWidget.border': withOpacity(pol.borderTint, '40'),
  'editorWidget.resizeBorder': withOpacity(accent.bright, '60'),
  'widget.border': withOpacity(accent.primary, '30'),
  'widget.shadow': withOpacity(bg.void, '80'),

  // Hover widget
  'editorHoverWidget.foreground': text.primary,
  'editorHoverWidget.background': withOpacity(bg.float, 'F8'),
  'editorHoverWidget.border': withOpacity(accent.primary, '50'),
  'editorHoverWidget.highlightForeground': accent.bright,
  'editorHoverWidget.statusBarBackground': bg.float,

  // Ghost text (Copilot/AI suggestions)
  'editorGhostText.foreground': text.ghost,  // #7A9A98 - Lc 45+ for readable suggestions
  'editorGhostText.border': withOpacity(accent.soft, '30'),
  'editorGhostText.background': withOpacity(accent.soft, '05'),

  // Linked editing
  'editor.linkedEditingBackground': withOpacity(accent.bright, alpha.subtleBg),

  // Unnecessary code
  'editorUnnecessaryCode.border': withOpacity(text.tertiary, '50'),
  'editorUnnecessaryCode.opacity': withOpacity(bg.void, '70'),

  // ==========================================================================
  // SUGGEST WIDGET (Autocomplete)
  // ==========================================================================
  'editorSuggestWidget.background': withOpacity(bg.float, 'FC'),
  'editorSuggestWidget.border': withOpacity(accent.primary, '50'),
  'editorSuggestWidget.foreground': text.primary,
  'editorSuggestWidget.highlightForeground': accent.bright,
  'editorSuggestWidget.focusHighlightForeground': text.primary, // #E8EEF2 - Bright text for visibility
  'editorSuggestWidget.selectedBackground': pol.suggestSelectedBg,
  'editorSuggestWidget.selectedForeground': t.interactive.list.foreground.selected,
  'editorSuggestWidget.selectedIconForeground': t.interactive.list.foreground.selected,
  'editorSuggestWidgetStatus.foreground': text.secondary,

  // ==========================================================================
  // OVERVIEW RULER
  // ==========================================================================
  'editorOverviewRuler.background': bg.base,
  'editorOverviewRuler.border': withOpacity(accent.primary, '20'),
  'editorOverviewRuler.findMatchForeground': withOpacity(semantic.warning, '90'),
  'editorOverviewRuler.rangeHighlightForeground': withOpacity(accent.primary, '50'),
  'editorOverviewRuler.selectionHighlightForeground': withOpacity(accent.bright, '60'),
  'editorOverviewRuler.wordHighlightForeground': withOpacity(accent.bright, '60'),
  'editorOverviewRuler.wordHighlightStrongForeground': withOpacity(t.decorative.multiCursorSecondary, '70'),
  'editorOverviewRuler.wordHighlightTextForeground': withOpacity(accent.bright, '50'),
  'editorOverviewRuler.modifiedForeground': withOpacity(semantic.warning, '90'),
  'editorOverviewRuler.addedForeground': withOpacity(semantic.success, '90'),
  'editorOverviewRuler.deletedForeground': withOpacity(semantic.error, '90'),
  'editorOverviewRuler.errorForeground': semantic.error,
  'editorOverviewRuler.warningForeground': semantic.warning,
  'editorOverviewRuler.infoForeground': accent.primary,
  'editorOverviewRuler.bracketMatchForeground': withOpacity(accent.bright, '80'),
  'editorOverviewRuler.commentForeground': withOpacity(text.tertiary, '50'),
  'editorOverviewRuler.commentUnresolvedForeground': withOpacity(semantic.warning, '50'),
  'editorOverviewRuler.commentDraftForeground': withOpacity(accent.soft, '50'),
  'editorOverviewRuler.currentContentForeground': withOpacity(accent.bright, '60'),
  'editorOverviewRuler.incomingContentForeground': withOpacity(semantic.success, '60'),
  'editorOverviewRuler.commonContentForeground': withOpacity(text.tertiary, '40'),
  // Inline chat (AI features)
  'editorOverviewRuler.inlineChatInserted': withOpacity(semantic.success, '60'),
  'editorOverviewRuler.inlineChatRemoved': withOpacity(semantic.error, '60'),

  // ==========================================================================
  // LINKS & CODE LENS
  // ==========================================================================
  'editorLink.activeForeground': t.ui.linkActive.hex,  // Vibrant teal (Lc 78)
  'editorCodeLens.foreground': text.ghost,  // #7A9A98 - Lc 45+ for readable code lens

  // ==========================================================================
  // LIGHTBULB
  // ==========================================================================
  'editorLightBulb.foreground': semantic.warning,
  'editorLightBulbAutoFix.foreground': semantic.success,
  'editorLightBulbAi.foreground': accent.magenta,

  // ==========================================================================
  // INLAY HINTS
  // ==========================================================================
  'editorInlayHint.foreground': t.ui.foregroundMuted.hex, // #B0C0C8 - Lc 60 for readability
  'editorInlayHint.background': withOpacity(bg.shelf, '80'),
  'editorInlayHint.typeForeground': accent.soft,   // #B2EBE7 - Full opacity teal
  'editorInlayHint.typeBackground': withOpacity(bg.shelf, '80'),
  // Slightly darker to avoid halation (Lc <= 90)
  'editorInlayHint.parameterForeground': t.decorative.inlayParameter,
  'editorInlayHint.parameterBackground': withOpacity(bg.shelf, '80'),

  // ==========================================================================
  // UNICODE HIGHLIGHT
  // ==========================================================================
  'editorUnicodeHighlight.border': withOpacity(semantic.warning, '80'),
  'editorUnicodeHighlight.background': withOpacity(semantic.warning, '12'),

  // ==========================================================================
  // ERROR/WARNING/INFO DECORATIONS
  // ==========================================================================
  'editorError.foreground': semantic.error,
  'editorError.border': withOpacity(semantic.error, '00'),
  'editorError.background': withOpacity(semantic.error, '10'),
  'editorWarning.foreground': semantic.warning,
  'editorWarning.border': withOpacity(semantic.warning, '00'),
  'editorWarning.background': withOpacity(semantic.warning, '10'),
  'editorInfo.foreground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'editorInfo.border': withOpacity(accent.primary, '00'),
  'editorInfo.background': withOpacity(accent.primary, '10'),
  'editorHint.foreground': accent.soft,
  'editorHint.border': withOpacity(accent.soft, '00'),
  'problemsErrorIcon.foreground': semantic.error,
  'problemsWarningIcon.foreground': semantic.warning,
  'problemsInfoIcon.foreground': accent.primary,

  // ==========================================================================
  // STICKY SCROLL
  // ==========================================================================
  'editorStickyScroll.background': withOpacity(bg.base, 'F5'),
  'editorStickyScroll.border': withOpacity(accent.primary, '20'),
  'editorStickyScroll.shadow': withOpacity(bg.void, '40'),
  'editorStickyScrollGutter.background': withOpacity(bg.base, 'F5'),
  'editorStickyScrollHover.background': t.interactive.toolbar.background.hover,

  // ==========================================================================
  // MARKER NAVIGATION (F8 errors)
  // ==========================================================================
  'editorMarkerNavigation.background': bg.float,
  'editorMarkerNavigationError.background': withOpacity(semantic.error, '15'),
  'editorMarkerNavigationWarning.background': withOpacity(semantic.warning, '15'),
  'editorMarkerNavigationInfo.background': withOpacity(accent.primary, '15'),
  'editorMarkerNavigationError.headerBackground': withOpacity(semantic.error, '10'),
  'editorMarkerNavigationWarning.headerBackground': withOpacity(semantic.warning, '10'),
  'editorMarkerNavigationInfo.headerBackground': withOpacity(accent.primary, '10'),

  // ==========================================================================
  // SNIPPETS
  // ==========================================================================
  'editor.snippetTabstopHighlightBackground': withOpacity(accent.bright, '15'),
  'editor.snippetTabstopHighlightBorder': withOpacity(accent.bright, '40'),
  'editor.snippetFinalTabstopHighlightBackground': withOpacity(accent.magenta, '15'),
  'editor.snippetFinalTabstopHighlightBorder': withOpacity(accent.magenta, '50'),

  // ==========================================================================
  // INLINE VALUES (Debugging)
  // ==========================================================================
  'editor.inlineValuesForeground': t.ui.linkActive.hex,
  'editor.inlineValuesBackground': withOpacity(t.ui.linkActive.hex, '12'),

  // ==========================================================================
  // DEBUG HIGHLIGHTS
  // ==========================================================================
  'editor.stackFrameHighlightBackground': withOpacity(semantic.warning, '20'),
  'editor.focusedStackFrameHighlightBackground': withOpacity(semantic.success, '20'),

  // ==========================================================================
  // ACTIVITY BAR
  // ==========================================================================
  'activityBar.background': pol.activityBarBg,
  'activityBar.foreground': accent.bright,
  'activityBar.inactiveForeground': text.tertiary,
  'activityBar.border': withOpacity(accent.primary, '15'),
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
  'activityWarningBadge.foreground': pol.badgeFg,
  'activityWarningBadge.background': semantic.warning,
  'activityErrorBadge.foreground': pol.badgeFg,
  'activityErrorBadge.background': semantic.error,

  // ==========================================================================
  // SIDEBAR
  // ==========================================================================
  'sideBar.background': pol.sidebarBg,
  'sideBar.foreground': text.primary,
  'sideBar.border': withOpacity(accent.primary, '15'),
  'sideBar.dropBackground': withOpacity(accent.primary, '15'),
  'sideBarTitle.foreground': accent.bright,
  'sideBarTitle.background': pol.sidebarBg,
  'sideBarTitle.border': withOpacity(accent.primary, '15'),
  'sideBarSectionHeader.background': pol.sectionHeaderBg,
  'sideBarSectionHeader.foreground': accent.bright,
  'sideBarSectionHeader.border': withOpacity(pol.borderTint, alpha.sectionHeaderBorder),
  'sideBarActivityBarTop.border': withOpacity(accent.primary, '15'),
  'sideBarStickyScroll.background': pol.sidebarBg,
  'sideBarStickyScroll.border': withOpacity(accent.primary, '15'),
  'sideBarStickyScroll.shadow': withOpacity(bg.void, '40'),

  // ==========================================================================
  // STATUS BAR
  // ==========================================================================
  'statusBar.background': pol.statusBarBg,
  'statusBar.foreground': text.primary,
  'statusBar.border': withOpacity(accent.primary, '20'),
  'statusBar.debuggingBackground': statusItem.debugBg,
  'statusBar.debuggingForeground': statusItem.debugFg,  // Soft white on sakura for light, dark on sakura for dark
  'statusBar.debuggingBorder': withOpacity(t.decorative.diffRemoved, '00'),  // Transparent — prevents pink gap above remote item
  'statusBar.noFolderBackground': pol.statusBarBg,
  'statusBar.noFolderForeground': text.primary,
  'statusBar.noFolderBorder': withOpacity(text.tertiary, '30'),
  'statusBar.focusBorder': withOpacity(accent.bright, 'DD'),
  'statusBarItem.activeBackground': t.interactive.toolbar.background.active,
  'statusBarItem.hoverBackground': t.interactive.toolbar.background.hover,
  'statusBarItem.hoverForeground': text.primary,
  'statusBarItem.prominentForeground': text.primary,
  'statusBarItem.prominentBackground': t.interactive.toolbar.background.hover,
  'statusBarItem.prominentHoverBackground': t.interactive.toolbar.background.active,
  'statusBarItem.prominentHoverForeground': text.primary,
  'statusBarItem.remoteBackground': statusItem.remoteBg,
  'statusBarItem.remoteForeground': statusItem.remoteFg,  // White on teal for light, dark for dark
  'statusBarItem.remoteHoverBackground': statusItem.remoteHoverBg,
  'statusBarItem.remoteHoverForeground': statusItem.remoteHoverFg,
  'statusBarItem.errorBackground': darken(t.ui.activeBorder, 0.03),  // Magenta — attention
  'statusBarItem.errorForeground': statusItem.errorFg,
  'statusBarItem.errorHoverBackground': darken(t.ui.activeBorder, 0.01),
  'statusBarItem.errorHoverForeground': t.decorative.blouseWhite,
  'statusBarItem.warningBackground': statusItem.warningBg,  // Warm — stage lights dimming
  'statusBarItem.warningForeground': statusItem.warningFg,
  'statusBarItem.warningHoverBackground': statusItem.warningHoverBg,
  'statusBarItem.warningHoverForeground': t.decorative.blouseWhite,
  'statusBarItem.compactHoverBackground': t.interactive.toolbar.background.active,
  'statusBarItem.focusBorder': withOpacity(accent.bright, 'DD'),
  'statusBarItem.offlineBackground': statusItem.offlineBg,
  'statusBarItem.offlineForeground': statusItem.offlineFg,
  'statusBarItem.offlineHoverBackground': statusItem.offlineHoverBg,
  'statusBarItem.offlineHoverForeground': statusItem.offlineHoverFg,

  // ==========================================================================
  // TITLE BAR
  // ==========================================================================
  'titleBar.activeBackground': bg.frame,
  'titleBar.activeForeground': text.primary,
  'titleBar.inactiveBackground': bg.frame,
  'titleBar.inactiveForeground': text.tertiary,
  'titleBar.border': withOpacity(accent.primary, '15'),

  // ==========================================================================
  // TABS
  // ==========================================================================
  'tab.activeBackground': t.interactive.tab.background.active,
  'tab.activeForeground': accent.bright,
  'tab.activeBorderTop': accent.magenta,
  'tab.activeBorder': withOpacity(accent.primary, '30'),
  'tab.inactiveBackground': t.interactive.tab.background.default,
  'tab.inactiveForeground': text.tertiary,
  'tab.border': bg.shelf,
  'tab.hoverBackground': t.interactive.tab.background.hover,
  // Hover uses primary text for distinction from active (accent bright)
  'tab.hoverForeground': text.primary,
  'tab.hoverBorder': withOpacity(accent.primary, '30'),
  'tab.unfocusedActiveBackground': bg.shelf,
  'tab.unfocusedActiveForeground': text.secondary,
  'tab.unfocusedActiveBorderTop': withOpacity(accent.magenta, '60'),
  'tab.unfocusedActiveBorder': withOpacity(accent.primary, '20'),
  'tab.unfocusedInactiveBackground': bg.base,
  'tab.unfocusedInactiveForeground': text.tertiary,
  'tab.unfocusedHoverBackground': withOpacity(pol.hoverTint, alpha.unfocusedTabHoverBg),
  'tab.unfocusedHoverForeground': text.secondary,
  'tab.unfocusedHoverBorder': withOpacity(pol.hoverTint, alpha.unfocusedTabHoverBorder),
  'tab.lastPinnedBorder': withOpacity(accent.magenta, '50'),
  'tab.activeModifiedBorder': accent.magenta,
  'tab.inactiveModifiedBorder': withOpacity(accent.magenta, '50'),
  'tab.unfocusedActiveModifiedBorder': withOpacity(accent.magenta, '60'),
  'tab.unfocusedInactiveModifiedBorder': withOpacity(accent.magenta, '30'),
  'tab.dragAndDropBorder': accent.primary,
  'tab.selectedBackground': t.interactive.tab.background.selected,
  'tab.selectedForeground': accent.bright,
  'tab.selectedBorderTop': accent.primary,
  'editorGroupHeader.tabsBackground': pol.tabHeaderBg,
  'editorGroupHeader.tabsBorder': withOpacity(accent.primary, '15'),
  'editorGroupHeader.noTabsBackground': bg.base,
  'editorGroupHeader.border': withOpacity(accent.primary, '10'),

  // ==========================================================================
  // EDITOR GROUPS
  // ==========================================================================
  'editorGroup.border': withOpacity(pol.borderTint, alpha.borderSubtle),
  'editorGroup.dropBackground': withOpacity(accent.primary, '20'),
  'editorGroup.dropIntoPromptForeground': text.primary,
  'editorGroup.dropIntoPromptBackground': withOpacity(bg.shelf, 'F5'),
  'editorGroup.dropIntoPromptBorder': withOpacity(accent.primary, '50'),
  'editorGroup.emptyBackground': bg.void,
  'editorGroup.focusedEmptyBorder': withOpacity(accent.primary, '40'),
  'editorPane.background': bg.base,
  'sideBySideEditor.horizontalBorder': withOpacity(accent.primary, '25'),
  'sideBySideEditor.verticalBorder': withOpacity(accent.primary, '25'),

  // ==========================================================================
  // LISTS & TREES
  // ==========================================================================
  'list.activeSelectionBackground': t.interactive.list.background.selected,  // Pedal tone tenuto — teal fill, magenta outline via focusAndSelectionOutline
  'list.activeSelectionForeground': t.interactive.list.foreground.selected,
  'list.activeSelectionIconForeground': t.interactive.list.foreground.selected,
  'list.inactiveSelectionBackground': withOpacity(t.decorative.cursorLineFrost, '18'), // Frost, fading
  'list.inactiveSelectionForeground': text.primary,
  'list.inactiveSelectionIconForeground': text.primary,
  'list.hoverBackground': t.interactive.list.background.hover,
  'list.hoverForeground': t.interactive.list.foreground.hover,
  'list.focusBackground': t.interactive.list.background.focus,
  'list.focusForeground': t.interactive.list.foreground.focus,  // identity — magenta
  'list.focusOutline': withOpacity(accent.bright, 'DD'),
  'list.focusAndSelectionOutline': withOpacity(accent.magenta, '80'),
  'list.focusHighlightForeground': text.primary,  // #E8EEF2 for Lc 75+ on focus bg
  'list.highlightForeground': accent.bright,
  'list.dropBackground': withOpacity(accent.primary, '20'),
  'list.dropBetweenBackground': withOpacity(accent.primary, '40'),
  'list.errorForeground': semantic.error,
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': semantic.error,
  'list.deemphasizedForeground': t.decorative.walletChain,  // her wallet chain silver
  'list.inactiveFocusBackground': withOpacity(pol.hoverTint, alpha.listInactiveFocusBg),
  'list.inactiveFocusOutline': withOpacity(accent.primary, '30'),
  'list.filterMatchBackground': withOpacity(semantic.warning, '20'),
  'list.filterMatchBorder': withOpacity(semantic.warning, '50'),
  'listFilterWidget.background': bg.float,
  'listFilterWidget.outline': withOpacity(accent.primary, '60'),
  'listFilterWidget.noMatchesOutline': semantic.error,
  'listFilterWidget.shadow': withOpacity(bg.void, '60'),

  // Tree
  'tree.indentGuidesStroke': withOpacity(t.decorative.negiStalk, '30'),
  'tree.inactiveIndentGuidesStroke': withOpacity(t.decorative.negiStalk, '15'),
  'tree.tableColumnsBorder': withOpacity(accent.primary, '20'),
  'tree.tableOddRowsBackground': withOpacity(pol.hoverTint, alpha.treeOddRowBg),

  // ==========================================================================
  // MINIMAP
  // ==========================================================================
  'minimap.background': withOpacity(bg.base, 'CC'),
  'minimap.foregroundOpacity': t.ui.minimapOpacity,
  'minimap.selectionHighlight': withOpacity(accent.primary, '50'),
  'minimap.selectionOccurrenceHighlight': withOpacity(accent.primary, '35'),
  'minimap.findMatchHighlight': withOpacity(semantic.warning, '70'),
  'minimap.errorHighlight': withOpacity(semantic.error, '70'),
  'minimap.warningHighlight': withOpacity(semantic.warning, '70'),
  'minimap.infoHighlight': withOpacity(accent.primary, '70'),
  'minimap.chatEditHighlight': withOpacity(accent.bright, '50'),
  'minimapSlider.background': t.interactive.slider.background.rest,
  'minimapSlider.hoverBackground': t.interactive.slider.background.hover,
  'minimapSlider.activeBackground': t.interactive.slider.background.active,
  'minimapGutter.addedBackground': semantic.success,
  'minimapGutter.modifiedBackground': semantic.warning,
  'minimapGutter.deletedBackground': semantic.error,
  'editorMinimap.inlineChatInserted': withOpacity(semantic.success, '50'),

  // ==========================================================================
  // SCROLLBAR
  // ==========================================================================
  'scrollbar.background': withOpacity(bg.base, '00'),
  'scrollbar.shadow': withOpacity(bg.void, '60'),
  'scrollbarSlider.background': t.interactive.slider.background.rest,
  'scrollbarSlider.hoverBackground': t.interactive.slider.background.hover,
  'scrollbarSlider.activeBackground': t.interactive.slider.background.active,

  // ==========================================================================
  // PANEL (Bottom panel: Terminal, Output, etc.)
  // ==========================================================================
  'panel.background': pol.panelBg,
  'panel.border': withOpacity(pol.borderTint, alpha.borderSubtle),
  'panel.dropBorder': accent.primary,
  'panelTitle.activeBorder': accent.magenta,
  'panelTitle.activeForeground': accent.bright,
  'panelTitle.inactiveForeground': text.tertiary,
  'panelTitle.border': withOpacity(accent.primary, '15'),
  'panelTitleBadge.background': pol.badgeBg,
  'panelTitleBadge.foreground': pol.badgeFg,
  'panelInput.border': withOpacity(accent.primary, '40'),
  'panelSection.border': withOpacity(accent.primary, '20'),
  'panelSection.dropBackground': withOpacity(accent.primary, '15'),
  'panelSectionHeader.background': bg.float,
  'panelSectionHeader.foreground': accent.bright,
  'panelSectionHeader.border': withOpacity(accent.primary, '20'),
  'panelStickyScroll.background': pol.panelBg,
  'panelStickyScroll.border': withOpacity(accent.primary, '15'),
  'panelStickyScroll.shadow': withOpacity(bg.void, '60'),
  'outputView.background': pol.panelBg,
  'outputViewStickyScroll.background': pol.panelBg,

  // ==========================================================================
  // TERMINAL
  // ==========================================================================
  'terminal.background': t.decorative.bootsBase,  // Her thigh-high boots — the terminal's home
  'terminal.foreground': text.primary,
  'terminal.border': withOpacity(accent.primary, '25'),
  'terminal.selectionBackground': withOpacity(t.decorative.cursorLineFrost, alpha.terminalSelectionBg),
  'terminal.selectionForeground': text.primary,
  'terminal.inactiveSelectionBackground': withOpacity(t.decorative.cursorLineFrost, '20'),
  'terminal.findMatchBackground': withOpacity(semantic.warning, alpha.terminalFindMatchBg),
  'terminal.findMatchBorder': withOpacity(semantic.warning, '80'),
  'terminal.findMatchHighlightBackground': withOpacity(accent.bright, '25'),
  'terminal.findMatchHighlightBorder': withOpacity(accent.bright, '50'),
  'terminal.hoverHighlightBackground': t.interactive.list.background.hover,
  'terminal.initialHintForeground': t.ui.terminalHint.hex,  // #5A8A88 - Lc 40+ readable hints
  'terminalCursor.foreground': accent.cursor,
  'terminalCursor.background': bg.void,
  'terminal.dropBackground': withOpacity(accent.primary, '15'),
  'terminal.tab.activeBorder': accent.magenta,

  // ANSI Colors - APCA Lc 75+ for terminal readability
  // All colors optimized for void background
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
  'terminalCommandDecoration.defaultBackground': withOpacity(text.tertiary, '40'),
  'terminalCommandDecoration.successBackground': withOpacity(semantic.success, '60'),
  'terminalCommandDecoration.errorBackground': withOpacity(semantic.error, '60'),
  'terminalCommandGuide.foreground': t.ui.terminalGuide.hex,  // #2A4A48 - Lc 15 subtle guide
  'terminalOverviewRuler.cursorForeground': accent.cursor,
  'terminalOverviewRuler.findMatchForeground': withOpacity(semantic.warning, '80'),
  'terminalOverviewRuler.border': withOpacity(accent.primary, '20'),
  'terminalStickyScroll.background': bg.void,
  'terminalStickyScroll.border': withOpacity(accent.primary, '15'),
  'terminalStickyScrollHover.background': t.interactive.toolbar.background.hover,

  // Terminal symbol icons
  'terminalSymbolIcon.aliasForeground': accent.soft,
  'terminalSymbolIcon.branchForeground': accent.bright,
  // Lavender commit icons (Digital Stars) for DeltaE separation from branch teal
  'terminalSymbolIcon.commitForeground': t.decorative.commitIcon,
  'terminalSymbolIcon.flagForeground': semantic.warning,
  'terminalSymbolIcon.optionForeground': text.primary,
  'terminalSymbolIcon.optionValueForeground': t.symbol.snippet.hex,
  'terminalSymbolIcon.methodForeground': t.symbol.method.hex,
  'terminalSymbolIcon.argumentForeground': accent.soft,
  'terminalSymbolIcon.inlineSuggestionForeground': t.ui.linkActive.hex,
  'terminalSymbolIcon.fileForeground': text.primary,
  'terminalSymbolIcon.folderForeground': accent.primary,
  'terminalSymbolIcon.pullRequestDoneForeground': semantic.success,
  'terminalSymbolIcon.pullRequestForeground': t.decorative.multiCursorSecondary,
  'terminalSymbolIcon.remoteForeground': t.symbol.interface.hex,
  'terminalSymbolIcon.stashForeground': text.tertiary,
  'terminalSymbolIcon.symbolText': text.primary,
  'terminalSymbolIcon.symbolicLinkFileForeground': t.symbol.enum.hex,
  'terminalSymbolIcon.symbolicLinkFolderForeground': t.symbol.enum.hex,
  'terminalSymbolIcon.tagForeground': semantic.warning,

  // ==========================================================================
  // DEBUGGER
  // ==========================================================================
  'debugToolBar.background': withOpacity(bg.float, 'F8'),
  'debugToolBar.border': withOpacity(semantic.warning, '40'),
  'debugIcon.breakpointForeground': t.decorative.tattooMark,    // Her "01" mark — a breakpoint is an identity mark you place in code
  'debugIcon.breakpointDisabledForeground': text.disabled,
  'debugIcon.breakpointUnverifiedForeground': darken(t.status.error, 0.08),
  'debugIcon.breakpointCurrentStackframeForeground': semantic.warning,
  'debugIcon.breakpointStackframeForeground': semantic.success,
  'debugIcon.startForeground': semantic.success,
  'debugIcon.pauseForeground': semantic.warning,
  'debugIcon.stopForeground': semantic.error,
  'debugIcon.disconnectForeground': withOpacity(semantic.error, '80'), // Distinct from stop
  'debugIcon.restartForeground': semantic.success,
  'debugIcon.stepOverForeground': accent.bright,
  'debugIcon.stepIntoForeground': t.ui.linkActive.hex, // Different color for step into
  'debugIcon.stepOutForeground': t.syntax.typeParameter.hex, // Different color for step out
  'debugIcon.continueForeground': semantic.success,
  // Magenta "step back" for clear DeltaE separation from step over
  'debugIcon.stepBackForeground': accent.magenta,
  'debugConsole.infoForeground': semantic.info,  // #88F0E8 - Miku cyan (Lc 87)
  'debugConsole.warningForeground': semantic.warning,
  'debugConsole.errorForeground': semantic.error,
  'debugConsole.sourceForeground': text.primary,
  'debugConsoleInputIcon.foreground': accent.primary,
  'debugExceptionWidget.background': withOpacity(semantic.error, '15'),
  'debugExceptionWidget.border': semantic.error,
  'debugTokenExpression.name': t.debug.name.hex,
  'debugTokenExpression.value': t.debug.value.hex,
  'debugTokenExpression.string': t.debug.string.hex,
  'debugTokenExpression.boolean': t.debug.boolean.hex,
  'debugTokenExpression.number': t.debug.number.hex,
  'debugTokenExpression.error': t.debug.error.hex,
  'debugTokenExpression.type': t.debug.type.hex,
  'debugView.exceptionLabelForeground': pol.debugLabelFg,
  'debugView.exceptionLabelBackground': darken(t.status.error, 0.19),
  'debugView.stateLabelForeground': pol.debugLabelFg,
  'debugView.stateLabelBackground': darken(t.status.success, 0.14),
  'debugView.valueChangedHighlight': withOpacity(accent.bright, '40'),

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': withOpacity(pol.borderTint, '60'),
  'peekViewTitle.background': bg.float,
  'peekViewTitleLabel.foreground': accent.bright,
  'peekViewTitleDescription.foreground': text.secondary,
  'peekViewEditor.background': bg.base,
  'peekViewEditor.matchHighlightBackground': withOpacity(semantic.warning, '30'),
  'peekViewEditor.matchHighlightBorder': withOpacity(semantic.warning, '60'),
  'peekViewEditorGutter.background': bg.shelf,
  'peekViewResult.background': bg.float,
  'peekViewResult.fileForeground': text.primary,
  'peekViewResult.lineForeground': text.secondary,
  'peekViewResult.matchHighlightBackground': withOpacity(semantic.warning, '25'),
  'peekViewResult.selectionBackground': t.interactive.list.background.selected,
  'peekViewResult.selectionForeground': t.interactive.list.foreground.selected,
  'peekViewEditorStickyScroll.background': bg.base,
  'peekViewEditorStickyScrollGutter.background': bg.shelf,

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
  'diffEditor.insertedTextBorder':             withOpacity(t.decorative.diffInserted, '00'),
  'diffEditorGutter.insertedLineBackground':   withOpacity(t.decorative.diffInserted, alpha.diffGutterInserted),
  'diffEditor.removedLineBackground':          withOpacity(t.decorative.diffRemoved, alpha.diffRemovedLine),
  'diffEditor.removedTextBackground':          withOpacity(t.decorative.diffRemoved, alpha.diffRemovedText),
  'diffEditor.removedTextBorder':              withOpacity(t.decorative.diffRemoved, '00'),
  'diffEditorGutter.removedLineBackground':    withOpacity(t.decorative.diffRemoved, alpha.diffGutterRemoved),
  'diffEditorOverview.insertedForeground': t.decorative.diffInserted,
  'diffEditorOverview.removedForeground': t.decorative.diffRemoved,
  'diffEditor.diagonalFill': withOpacity(text.tertiary, '15'),
  'diffEditor.border': withOpacity(pol.borderTint, alpha.borderSubtle),
  'diffEditor.unchangedRegionBackground': withOpacity(bg.float, '30'),
  'diffEditor.unchangedRegionForeground': text.tertiary,
  'diffEditor.unchangedRegionShadow': withOpacity(bg.void, '40'),
  'diffEditor.unchangedCodeBackground': withOpacity(bg.float, '15'),
  'diffEditor.move.border': withOpacity(t.decorative.diffMoveBorder, '50'),
  'diffEditor.moveActive.border': t.decorative.diffMoveBorder,

  // ==========================================================================
  // MULTI-DIFF EDITOR
  // ==========================================================================
  'multiDiffEditor.headerBackground': bg.float,
  'multiDiffEditor.background': bg.base,
  'multiDiffEditor.border': withOpacity(accent.primary, '25'),

  // ==========================================================================
  // MERGE EDITOR
  // ==========================================================================
  'merge.currentHeaderBackground': withOpacity(accent.bright, '35'),
  'merge.currentContentBackground': withOpacity(accent.bright, alpha.faintBg),
  'merge.incomingHeaderBackground': withOpacity(semantic.success, '35'),
  'merge.incomingContentBackground': withOpacity(semantic.success, alpha.faintBg),
  'merge.border': withOpacity(accent.primary, '40'),
  'merge.commonContentBackground': withOpacity(bg.float, '25'),
  'merge.commonHeaderBackground': withOpacity(bg.float, '40'),
  'mergeEditor.change.background': withOpacity(accent.bright, '10'),
  'mergeEditor.change.word.background': withOpacity(accent.bright, '25'),
  'mergeEditor.conflict.unhandledUnfocused.border': withOpacity(semantic.warning, '50'),
  'mergeEditor.conflict.unhandledFocused.border': semantic.warning,
  'mergeEditor.conflict.handledUnfocused.border': withOpacity(semantic.success, '50'),
  'mergeEditor.conflict.handledFocused.border': semantic.success,
  'mergeEditor.conflict.handled.minimapOverViewRuler': semantic.success,
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': semantic.warning,
  'mergeEditor.conflictingLines.background': withOpacity(semantic.warning, '15'),
  'mergeEditor.changeBase.background': withOpacity(bg.float, '15'),
  'mergeEditor.changeBase.word.background': withOpacity(bg.float, '30'),
  'mergeEditor.conflict.input1.background': withOpacity(accent.bright, '12'),
  'mergeEditor.conflict.input2.background': withOpacity(semantic.success, '12'),

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
  'scmGraph.historyItemHoverLabelForeground': pol.scmLabelFg,  // Dark on bright ref pill bg
  'scmGraph.historyItemHoverDefaultLabelForeground': text.secondary,
  'scmGraph.historyItemHoverDefaultLabelBackground': withOpacity(bg.float, '80'),
  // SCM Graph - Project SEKAI unit colors (each branch is a unit's story)
  'scmGraph.foreground1': t.decorative.scmGraph[0],        // Virtual Singer - main branch
  'scmGraph.foreground2': t.decorative.scmGraph[1],               // LEO/NEED - royal blue
  'scmGraph.foreground3': t.decorative.scmGraph[2],          // MORE MORE JUMP! - bright green
  'scmGraph.foreground4': t.decorative.scmGraph[3],         // VIVID BAD SQUAD - vivid pink
  'scmGraph.foreground5': t.decorative.scmGraph[4],   // Wonderlands x Showtime - orange
  'scmGraph.historyItemHoverAdditionsForeground': semantic.success,
  'scmGraph.historyItemHoverDeletionsForeground': semantic.error,
  'scmGraph.historyItemRefColor': accent.bright,
  'scmGraph.historyItemRemoteRefColor': t.decorative.scmRemoteRef,
  'scmGraph.historyItemBaseRefColor': accent.primary,

  // ==========================================================================
  // NOTIFICATIONS
  // ==========================================================================
  'notifications.foreground': text.primary,
  'notifications.background': bg.float,
  'notifications.border': withOpacity(accent.primary, '30'),
  'notificationToast.border': pol.toastBorder,
  'notificationCenterHeader.foreground': accent.bright,
  'notificationCenterHeader.background': bg.float,
  'notificationCenter.border': withOpacity(accent.primary, '30'),
  'notificationLink.foreground': t.ui.linkActive.hex,
  'notificationsInfoIcon.foreground': accent.primary,
  'notificationsWarningIcon.foreground': semantic.warning,
  'notificationsErrorIcon.foreground': semantic.error,

  // ==========================================================================
  // COMMAND CENTER
  // ==========================================================================
  'commandCenter.foreground': text.primary,
  'commandCenter.background': pol.panelBg,
  'commandCenter.border': withOpacity(accent.primary, '30'),
  'commandCenter.activeForeground': accent.bright,
  'commandCenter.activeBackground': t.interactive.toolbar.background.hover,
  'commandCenter.activeBorder': withOpacity(accent.primary, '50'),
  'commandCenter.inactiveForeground': text.tertiary,
  'commandCenter.inactiveBorder': withOpacity(text.tertiary, '25'),
  'commandCenter.debuggingBackground': withOpacity(semantic.warning, '20'),

  // ==========================================================================
  // QUICK INPUT
  // ==========================================================================
  'quickInput.background': bg.float,
  'quickInput.foreground': text.primary,
  'quickInputTitle.background': bg.float,
  'quickInputList.focusBackground': t.interactive.list.background.selected,
  'quickInputList.focusForeground': t.interactive.list.foreground.selected,
  'quickInputList.focusIconForeground': t.interactive.list.foreground.selected,
  'pickerGroup.border': withOpacity(accent.primary, '30'),
  'pickerGroup.foreground': accent.bright,

  // ==========================================================================
  // KEYBINDING LABELS
  // ==========================================================================
  'keybindingLabel.background': withOpacity(accent.primary, '15'),
  'keybindingLabel.foreground': text.primary,
  'keybindingLabel.border': withOpacity(accent.primary, '35'),
  'keybindingLabel.bottomBorder': withOpacity(accent.primary, '50'),
  'keybindingTable.headerBackground': bg.float,
  'keybindingTable.rowsBackground': withOpacity(accent.primary, '04'),

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
  'menu.border': withOpacity(accent.primary, '30'),
  'menubar.selectionBackground': t.interactive.list.background.hover,
  'menubar.selectionForeground': t.interactive.list.foreground.hover,
  'menubar.selectionBorder': withOpacity(accent.primary, '30'),

  // ==========================================================================
  // SETTINGS EDITOR
  // ==========================================================================
  'settings.headerForeground': accent.bright,
  'settings.modifiedItemIndicator': accent.magenta,
  'settings.dropdownBackground': bg.base,
  'settings.dropdownForeground': text.primary,
  'settings.dropdownBorder': withOpacity(accent.primary, '40'),
  'settings.dropdownListBorder': withOpacity(accent.primary, '50'),
  'settings.checkboxBackground': bg.base,
  'settings.checkboxForeground': accent.bright,    // #5DE4DB - Bright for visibility
  'settings.checkboxBorder': withOpacity(accent.primary, '50'),
  'settings.textInputBackground': bg.base,
  'settings.textInputForeground': text.primary,
  'settings.textInputBorder': withOpacity(accent.primary, '40'),
  'settings.numberInputBackground': bg.base,
  'settings.numberInputForeground': text.primary,
  'settings.numberInputBorder': withOpacity(accent.primary, '40'),
  'settings.focusedRowBackground': t.interactive.list.background.focus,
  'settings.focusedRowBorder': t.interactive.list.border.focus,
  'settings.rowHoverBackground': t.interactive.list.background.hover,
  'settings.sashBorder': withOpacity(pol.borderTint, alpha.borderSubtle),
  'settings.headerBorder': withOpacity(accent.primary, '20'),
  'settings.settingsHeaderHoverForeground': text.primary,

  // ==========================================================================
  // TESTING
  // ==========================================================================
  // Separate "failed" vs "errored" for instant recognition (DeltaE distinction)
  // Errored uses darkened info (teal→dark teal on dark, blue constant on light for CVD safety vs red failed)
  'testing.iconErrored': pol.testingErrored,
  'testing.iconFailed': semantic.error,
  'testing.iconPassed': semantic.success,
  'testing.iconQueued': semantic.warning,
  'testing.iconUnset': text.tertiary,
  'testing.iconSkipped': text.tertiary,
  'testing.iconErrored.retired': withOpacity(semantic.error, '50'),
  'testing.iconFailed.retired': withOpacity(semantic.error, '50'),
  'testing.iconPassed.retired': withOpacity(semantic.success, '50'),
  'testing.iconQueued.retired': withOpacity(semantic.warning, '50'),
  'testing.iconUnset.retired': withOpacity(text.tertiary, '50'),
  'testing.iconSkipped.retired': withOpacity(text.tertiary, '50'),
  'testing.runAction': semantic.success,
  'testing.peekBorder': withOpacity(accent.primary, '60'),
  'testing.peekHeaderBackground': bg.float,
  'testing.message.error.lineBackground': withOpacity(semantic.error, '10'),
  'testing.message.error.badgeBackground': withOpacity(semantic.error, '20'),
  'testing.message.error.badgeBorder': semantic.error,
  'testing.message.error.badgeForeground': semantic.error,
  'testing.message.info.decorationForeground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'testing.message.info.lineBackground': withOpacity(accent.primary, '10'),
  'testing.messagePeekBorder': accent.primary,
  'testing.messagePeekHeaderBackground': bg.base,
  'testing.coveredBackground': withOpacity(semantic.success, '10'),
  'testing.coveredBorder': withOpacity(semantic.success, '35'),
  'testing.coveredGutterBackground': withOpacity(semantic.success, '25'),
  'testing.uncoveredBranchBackground': withOpacity(semantic.error, '15'),
  'testing.uncoveredBackground': withOpacity(semantic.error, '10'),
  'testing.uncoveredBorder': withOpacity(semantic.error, '35'),
  'testing.uncoveredGutterBackground': withOpacity(semantic.error, '25'),
  'testing.coverCountBadgeBackground': withOpacity(accent.primary, '20'),
  'testing.coverCountBadgeForeground': accent.bright,

  // ==========================================================================
  // WELCOME PAGE
  // ==========================================================================
  'welcomePage.background': bg.base,
  'welcomePage.tileBackground': bg.float,
  'welcomePage.tileHoverBackground': t.interactive.toolbar.background.hover,
  'welcomePage.tileBorder': withOpacity(accent.primary, '25'),
  'welcomePage.progress.foreground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'welcomePage.progress.background': bg.shelf,
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
  'extensionButton.separator': withOpacity(text.primary, '30'),
  'extensionButton.border': t.interactive.button.border.default,
  'extensionBadge.remoteBackground': pol.badgeBg,
  'extensionBadge.remoteForeground': pol.badgeFg,
  'extensionIcon.starForeground': semantic.warning,
  'extensionIcon.verifiedForeground': semantic.success,
  // Lavender (Digital Stars) reads as "experimental" and separates from sponsor magenta
  'extensionIcon.preReleaseForeground': t.decorative.commitIcon,
  'extensionIcon.sponsorForeground': accent.magenta,
  'extensionIcon.privateForeground': t.symbol.enum.hex,
  'mcpIcon.starForeground': semantic.warning,

  // ==========================================================================
  // BANNER
  // ==========================================================================
  'banner.background': withOpacity(accent.primary, '20'),
  'banner.foreground': text.primary,
  'banner.iconForeground': accent.primary,

  // ==========================================================================
  // INPUT & FORMS
  // ==========================================================================
  'input.background': t.interactive.input.background.default,
  'input.foreground': t.interactive.input.foreground.default,
  'input.border': t.interactive.input.border.default,
  'input.placeholderForeground': text.placeholder,  // Lc 25+ for visible placeholder
  'inputOption.activeBorder': t.interactive.toggle.border.selected,
  'inputOption.activeBackground': t.interactive.toggle.background.selected,
  'inputOption.activeForeground': t.interactive.toggle.foreground.selected,
  'inputOption.hoverBackground': t.interactive.toggle.background.hover,
  'inputValidation.errorBackground': withOpacity(semantic.error, '20'),
  'inputValidation.errorForeground': text.primary,          // #E8EEF2 - High contrast on dark overlay
  'inputValidation.errorBorder': semantic.error,
  'inputValidation.warningBackground': withOpacity(semantic.warning, '20'),
  'inputValidation.warningForeground': text.primary,        // #E8EEF2 - High contrast on dark overlay
  'inputValidation.warningBorder': semantic.warning,
  'inputValidation.infoBackground': withOpacity(semantic.info, '20'),
  'inputValidation.infoForeground': text.primary,           // #E8EEF2 - High contrast on dark overlay
  'inputValidation.infoBorder': semantic.info,

  // Dropdown
  'dropdown.background': bg.base,
  'dropdown.foreground': text.primary,
  'dropdown.border': withOpacity(accent.primary, '35'),
  'dropdown.listBackground': bg.base,

  // Button — interactive token system
  'button.background': t.interactive.button.background.default,
  'button.foreground': t.interactive.button.foreground.default,
  'button.border': t.interactive.button.border.default,
  'button.separator': withOpacity(t.decorative.blouseWhite, '30'),
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
  'profiles.sashBorder': withOpacity(accent.primary, '30'),

  // ==========================================================================
  // NOTEBOOK
  // ==========================================================================
  'notebook.editorBackground': bg.base,
  'notebook.cellBorderColor': withOpacity(accent.primary, '25'),
  'notebook.cellHoverBackground': t.interactive.list.background.hover,
  'notebook.cellInsertionIndicator': accent.bright,
  'notebook.cellStatusBarItemHoverBackground': t.interactive.toolbar.background.hover,
  'notebook.cellToolbarSeparator': withOpacity(accent.primary, '25'),
  'notebook.cellEditorBackground': bg.base,
  'notebook.focusedCellBackground': t.interactive.list.background.focus,
  'notebook.focusedCellBorder': accent.bright,
  'notebook.focusedEditorBorder': withOpacity(accent.bright, 'CC'),
  'notebook.inactiveFocusedCellBorder': withOpacity(accent.primary, '50'),
  'notebook.inactiveSelectedCellBorder': withOpacity(accent.primary, '40'),
  'notebook.outputContainerBackgroundColor': bg.base,
  'notebook.outputContainerBorderColor': withOpacity(accent.primary, '20'),
  'notebook.selectedCellBackground': withOpacity(t.decorative.cursorLineFrost, '12'),
  'notebook.selectedCellBorder': withOpacity(accent.primary, '50'),
  'notebook.symbolHighlightBackground': withOpacity(accent.primary, '15'),
  'notebookScrollbarSlider.activeBackground': t.interactive.slider.background.active,
  'notebookScrollbarSlider.background': t.interactive.slider.background.rest,
  'notebookScrollbarSlider.hoverBackground': t.interactive.slider.background.hover,
  'notebookStatusErrorIcon.foreground': semantic.error,
  'notebookStatusRunningIcon.foreground': semantic.warning,
  'notebookStatusSuccessIcon.foreground': semantic.success,
  'notebookEditorOverviewRuler.runningCellForeground': semantic.warning,
  'interactive.activeCodeBorder': withOpacity(accent.bright, '60'),
  'interactive.inactiveCodeBorder': withOpacity(accent.primary, '30'),

  // ==========================================================================
  // SYMBOL ICONS - All Lc 75+ for visibility, DeltaE 15+ between similar types
  // ==========================================================================
  'symbolIcon.arrayForeground': t.symbol.array.hex,
  'symbolIcon.booleanForeground': t.symbol.boolean.hex,
  'symbolIcon.classForeground': t.symbol.class.hex,
  'symbolIcon.colorForeground': accent.magenta,
  'symbolIcon.constantForeground': t.symbol.constant.hex,  // Azure (240°)
  'symbolIcon.constructorForeground': t.symbol.constructor.hex,
  'symbolIcon.enumeratorForeground': t.symbol.enum.hex,  // Gold (90°)
  'symbolIcon.enumeratorMemberForeground': t.symbol.enumeratorMember.hex,
  'symbolIcon.eventForeground': t.status.info.hex,
  'symbolIcon.fieldForeground': t.symbol.field.hex,  // Red (30°) — ΔJz+ΔCz from property
  'symbolIcon.fileForeground': text.primary,
  'symbolIcon.folderForeground': t.symbol.folder.hex,  // Teal (180°)
  'symbolIcon.functionForeground': t.symbol.function.hex,
  'symbolIcon.interfaceForeground': t.symbol.interface.hex,  // Violet (300°)
  'symbolIcon.keyForeground': t.syntax.function.hex,
  'symbolIcon.keywordForeground': t.syntax.tag.hex,
  'symbolIcon.methodForeground': t.symbol.method.hex,
  'symbolIcon.moduleForeground': t.symbol.module.hex,  // Azure (240°)
  'symbolIcon.namespaceForeground': t.symbol.namespace.hex,  // Violet (300°)
  'symbolIcon.nullForeground': text.tertiary,
  'symbolIcon.numberForeground': t.symbol.number.hex,  // Azure (240°)
  'symbolIcon.objectForeground': t.syntax.attribute.hex,
  'symbolIcon.operatorForeground': t.syntax.keyword.hex,
  'symbolIcon.packageForeground': t.symbol.package.hex,  // Gold (90°)
  'symbolIcon.propertyForeground': t.symbol.property.hex,  // Red (30°)
  'symbolIcon.referenceForeground': t.symbol.reference.hex,
  'symbolIcon.snippetForeground': t.symbol.snippet.hex,
  'symbolIcon.stringForeground': t.symbol.string.hex,
  'symbolIcon.structForeground': t.symbol.struct.hex,  // Gold (90°)
  'symbolIcon.textForeground': text.primary,
  'symbolIcon.typeParameterForeground': t.symbol.typeParameter.hex,  // Blue (270°)
  'symbolIcon.unitForeground': accent.magenta,
  'symbolIcon.variableForeground': t.symbol.variable.hex,

  // ==========================================================================
  // INLINE CHAT
  // ==========================================================================
  'inlineChat.background': withOpacity(bg.float, 'F8'),
  'inlineChat.foreground': text.primary,
  'inlineChat.border': withOpacity(accent.bright, '50'),
  'inlineChat.shadow': withOpacity(bg.void, '60'),
  'inlineChatInput.background': bg.float,
  'inlineChatInput.border': withOpacity(accent.primary, '40'),
  'inlineChatInput.focusBorder': accent.bright,
  'inlineChatInput.placeholderForeground': text.placeholder,  // #5A6A70 - Lc 25+
  'inlineChatDiff.inserted': withOpacity(semantic.success, alpha.inlineChatDiff),
  'inlineChatDiff.removed': withOpacity(semantic.error, alpha.inlineChatDiff),

  // ==========================================================================
  // CHAT
  // ==========================================================================
  'chat.requestBackground': bg.base,
  'chat.requestBorder': withOpacity(accent.primary, '25'),
  'chat.slashCommandBackground': withOpacity(accent.bright, '20'),
  'chat.slashCommandForeground': accent.bright,
  'chat.avatarBackground': withOpacity(accent.primary, '25'),
  'chat.avatarForeground': accent.bright,
  'chat.editedFileForeground': t.syntax.variable.hex,  // #C0E0FF - Lc 88 for sidebar visibility
  'chat.linesAddedForeground': withOpacity(semantic.success, alpha.chatLinesAdded),   // Must be transparent (VS Code requirement)
  'chat.linesRemovedForeground': withOpacity(semantic.error, alpha.chatLinesRemoved),   // Must be transparent (VS Code requirement)
  'chat.requestCodeBorder': withOpacity(accent.bright, '35'),
  'chat.requestBubbleBackground': withOpacity(accent.primary, '12'),
  'chat.requestBubbleHoverBackground': t.interactive.toolbar.background.hover,
  'chat.checkpointSeparator': withOpacity(accent.primary, '25'),
  'chat.thinkingShimmer': withOpacity(accent.bright, '40'),
  'chatManagement.sashBorder': withOpacity(accent.primary, '30'),

  // ==========================================================================
  // INLINE EDIT
  // ==========================================================================
  'inlineEdit.gutterIndicator.primaryBorder': accent.bright,
  'inlineEdit.gutterIndicator.primaryForeground': accent.bright,
  'inlineEdit.gutterIndicator.primaryBackground': withOpacity(accent.bright, '15'),
  'inlineEdit.gutterIndicator.secondaryBorder': withOpacity(accent.primary, '50'),
  'inlineEdit.gutterIndicator.secondaryForeground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'inlineEdit.gutterIndicator.secondaryBackground': withOpacity(accent.primary, '10'),
  'inlineEdit.gutterIndicator.successfulBorder': semantic.success,
  'inlineEdit.gutterIndicator.successfulForeground': semantic.success,
  'inlineEdit.gutterIndicator.successfulBackground': withOpacity(semantic.success, '15'),
  'inlineEdit.gutterIndicator.background': bg.shelf,
  'inlineEdit.originalBackground': withOpacity(bg.float, '08'),
  'inlineEdit.modifiedBackground': withOpacity(accent.primary, '10'),
  'inlineEdit.originalChangedLineBackground': withOpacity(semantic.error, '08'),
  'inlineEdit.originalChangedTextBackground': withOpacity(semantic.error, '20'),
  'inlineEdit.modifiedChangedLineBackground': withOpacity(semantic.success, '08'),
  'inlineEdit.modifiedChangedTextBackground': withOpacity(semantic.success, '20'),
  'inlineEdit.originalBorder': withOpacity(bg.float, '40'),
  'inlineEdit.modifiedBorder': withOpacity(accent.bright, '40'),
  'inlineEdit.tabWillAcceptModifiedBorder': withOpacity(semantic.success, '50'),
  'inlineEdit.tabWillAcceptOriginalBorder': withOpacity(semantic.error, '50'),

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
  'editorCommentsWidget.resolvedBorder': withOpacity(semantic.success, '50'),
  'editorCommentsWidget.unresolvedBorder': withOpacity(semantic.warning, '50'),
  'editorCommentsWidget.rangeBackground': withOpacity(accent.primary, '08'),
  'editorCommentsWidget.rangeActiveBackground': withOpacity(accent.primary, '15'),
  'editorCommentsWidget.replyInputBackground': bg.float,

  // ==========================================================================
  // SIMPLE FIND WIDGET
  // ==========================================================================
  'simpleFindWidget.sashBorder': withOpacity(accent.primary, '30'),

  // ==========================================================================
  // CHARTS
  // ==========================================================================
  // Charts - Magical Mirai concert evolution
  'charts.foreground': text.primary,
  'charts.lines': withOpacity(accent.primary, '50'),
  'charts.red': t.decorative.charts.red,     // 2014 hot pink
  'charts.blue': t.decorative.charts.blue,              // 2013 royal blue
  'charts.yellow': t.decorative.charts.yellow,    // Concert gold
  'charts.orange': t.decorative.charts.orange,               // Stage orange
  'charts.green': t.decorative.charts.green,      // 2013 emerald
  'charts.purple': t.decorative.charts.purple,                         // Nightcord purple
  'chart.line': accent.primary,
  'chart.axis': text.tertiary,
  'chart.guide': withOpacity(accent.primary, '25'),

  // ==========================================================================
  // GAUGE
  // ==========================================================================
  'gauge.background': bg.float,
  'gauge.foreground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'gauge.border': withOpacity(accent.primary, '30'),
  'gauge.warningBackground': withOpacity(semantic.warning, '20'),
  'gauge.warningForeground': semantic.warning,
  'gauge.errorBackground': withOpacity(semantic.error, '20'),
  'gauge.errorForeground': semantic.error,

  // ==========================================================================
  // MARKDOWN ALERTS - DeltaE 15+ between note and tip
  // ==========================================================================
  'markdownAlert.note.foreground': t.markdown.alertNote.hex,  // #78D8F0 - cyan (195deg)
  'markdownAlert.tip.foreground': t.markdown.alertTip.hex,    // #98F0B8 - mint green (145deg) DeltaE 20+
  'markdownAlert.important.foreground': t.markdown.alertImportant.hex,
  'markdownAlert.warning.foreground': t.markdown.alertWarning.hex,
  'markdownAlert.caution.foreground': t.markdown.alertCaution.hex,

  // ==========================================================================
  // AGENT SESSION
  // ==========================================================================
  'agentSessionReadIndicator.foreground': accent.bright,
  'agentSessionSelectedBadge.border': accent.primary,
  'agentSessionSelectedUnfocusedBadge.border': withOpacity(accent.primary, '60'),

  // ==========================================================================
  // GENERAL UI - Base values
  // ==========================================================================
  'focusBorder': withOpacity(accent.bright, 'DD'),
  'foreground': text.primary,
  'disabledForeground': text.disabled,
  'selection.background': withOpacity(t.decorative.cursorLineFrost, '35'),
  'descriptionForeground': text.secondary,
  'errorForeground': semantic.error,
  'icon.foreground': text.secondary,
  'sash.hoverBorder': withOpacity(accent.magenta, '80'),

  // ==========================================================================
  // TEXT BLOCKS
  // ==========================================================================
  'textBlockQuote.background': withOpacity(accent.primary, '10'),
  'textBlockQuote.border': withOpacity(accent.primary, '40'),
  'textCodeBlock.background': withOpacity(bg.shelf, '80'),
  'textLink.activeForeground': t.ui.linkActive.hex,
  'textLink.foreground': accent.bright,
  'textPreformat.foreground': accent.soft,
  'textPreformat.background': withOpacity(bg.shelf, '60'),
  'textPreformat.border': withOpacity(accent.primary, '30'),
  'textSeparator.foreground': withOpacity(accent.primary, '40'),
};
}

