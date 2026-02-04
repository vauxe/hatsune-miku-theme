/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette.
 * Design Philosophy: "Digital Diva" - Serene, immersive, 8+ hour coding comfort.
 *
 * Color Architecture:
 * - Background layers: eyes.pupil (#0D1114) → skirt.base (#15191D) → armWarmers (#111417)
 * - Primary accent: hair.base (#39C5BB) - canonical Miku teal
 * - Secondary accent: hair.highlight (#5DE4DB) - attention states
 * - Tertiary accent: hairTies.outline (#E05096) - cursor/focus magenta
 * - Semantic: green (success), gold (warning), red (error)
 */

// Token system provides themeColors bridge
import { themeColors } from '../tokens';

// Palette provides character, voicebank, event, and game colors
import {
  character,
  // Voicebanks - Miku's evolution
  mikuV2,
  mikuV3,
  mikuAppend,
  mikuV4X,
  mikuNT,
  // Events - Concert memories
  snowMiku,
  magicalMirai,
  mikuExpo,
  digitalStars,
  // Derivatives
  sakuraMiku,
  miku16thAnniversary,
  // Project SEKAI units
  virtualSinger,
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
  // Project DIVA modules - iconic songs
  deepSeaGirl,
  darkAngel,
  angel,
  ghost,
  powder,
  rollingGirl,
} from '../palette';

// Helper for alpha channels
const alpha = (hex: string, opacity: string): string => `${hex}${opacity}`;

// ============================================================================
// DESIGN SYSTEM CONSTANTS
// ============================================================================

// Background hierarchy (darkest to lightest) - all from character palette
const bg = {
  void: themeColors.ui.void,           // #0A0D10 - Deepest void (titlebar, panels)
  base: character.skirt.base,          // #15191D - Primary editor background
  elevated: character.armWarmers.base, // #111417 - Widgets, dropdowns
  surface: character.headphones.frame, // #1A1F24 - Sidebar, cards
  overlay: character.top.shadow,       // #263238 - Section headers
};

// Text hierarchy - from Snow Miku and character palette
const text = {
  // NOTE: Avoid pure-white halation on deep dark surfaces (APCA max Lc ≤ 95)
  // Tuned for comfort (Lc ~85-90)
  primary: '#C0D8E0',                    // Soft Ice-White (Snow Miku inspired)
  secondary: themeColors.syntax.silverBright, // #C0E0D0 - Secondary text
  tertiary: themeColors.ui.tertiary,     // #6B7D82 - Tertiary/muted text
  disabled: themeColors.ui.disabled,     // #6A7A80 - Disabled state (Lc 35+) - BOOSTED
  ghost: themeColors.ui.ghostText,       // #7A9A98 - Ghost/suggestion text (Lc 45+)
  placeholder: themeColors.ui.placeholder, // #5A6A70 - Placeholder text (Lc 25+)
};

// Accent colors
const accent = {
  primary: character.hair.base,      // #39C5BB - Main brand teal
  bright: character.hair.highlight,  // #5DE4DB - Bright teal
  soft: character.hair.tip,          // #B2EBE7 - Soft teal
  magenta: character.hairTies.outline, // #E05096 - Cursor/focus
};

// Semantic colors (APCA Lc 80+ for readability) - marathon coding optimized
const semantic = {
  success: themeColors.semantic.success,     // Bright mint (Lc 86, C* 35)
  warning: themeColors.semantic.warning,     // Golden amber (Lc 86)
  error: themeColors.semantic.error,         // Soft coral (Lc 80)
  info: themeColors.semantic.info,           // Miku cyan (Lc 87)
};

// Pastel bracket colors (low-fatigue rainbow) - All APCA Lc 80+ for readability
const bracketPastel = {
  tan: themeColors.syntax.bracket1,
  pink: themeColors.syntax.bracket2,
  mint: themeColors.syntax.bracket3,
  lavender: themeColors.syntax.bracket4,
  aqua: themeColors.syntax.bracket5,
  purple: themeColors.syntax.bracket6,
};

export const workbenchColors = {
  // ==========================================================================
  // EDITOR CORE
  // ==========================================================================
  'editor.background': bg.base,
  'editor.foreground': text.primary,
  'editorCursor.foreground': accent.magenta,
  'editorCursor.background': bg.void,
  'editorMultiCursor.primary.foreground': accent.magenta,
  'editorMultiCursor.primary.background': bg.surface,
  'editorMultiCursor.secondary.foreground': leoNeed.hair.highlight,
  'editorMultiCursor.secondary.background': bg.surface,
  'editor.placeholder.foreground': text.placeholder,
  'editor.compositionBorder': accent.bright,

  // Line highlighting
  'editor.lineHighlightBackground': alpha(accent.primary, '08'),
  'editor.lineHighlightBorder': alpha(accent.primary, '15'),
  'editor.inactiveLineHighlightBackground': alpha(accent.primary, '04'),

  // Selection
  'editor.selectionBackground': alpha(accent.primary, '30'),
  'editor.selectionForeground': text.primary,
  'editor.inactiveSelectionBackground': alpha(accent.primary, '18'),
  'editor.selectionHighlightBackground': alpha(accent.bright, '15'),
  'editor.selectionHighlightBorder': alpha(accent.bright, '30'),

  // Word highlighting
  'editor.wordHighlightBackground': alpha(accent.primary, '15'),
  'editor.wordHighlightBorder': alpha(accent.primary, '35'),
  'editor.wordHighlightStrongBackground': alpha(leoNeed.hair.highlight, '20'),
  'editor.wordHighlightStrongBorder': alpha(leoNeed.hair.highlight, '45'),
  'editor.wordHighlightTextBackground': alpha(accent.bright, '12'),
  'editor.wordHighlightTextBorder': alpha(accent.bright, '30'),

  // Find & Replace
  // Slightly darker to preserve token contrast on match highlight
  'editor.findMatchBackground': alpha(semantic.warning, '30'),
  'editor.findMatchForeground': text.primary,
  'editor.findMatchBorder': alpha(semantic.warning, '80'),
  'editor.findMatchHighlightBackground': alpha(accent.bright, '30'),
  'editor.findMatchHighlightForeground': themeColors.syntax.function,
  'editor.findMatchHighlightBorder': alpha(accent.bright, '50'),
  'editor.findRangeHighlightBackground': alpha(accent.primary, '10'),
  'editor.findRangeHighlightBorder': alpha(accent.primary, '25'),
  'search.resultsInfoForeground': text.secondary,
  // Darken slightly for comment readability in Search Editor
  'searchEditor.findMatchBackground': alpha(semantic.warning, '20'),
  'searchEditor.findMatchBorder': alpha(semantic.warning, '60'),
  'searchEditor.textInputBorder': alpha(accent.primary, '40'),

  // Hover
  'editor.hoverHighlightBackground': alpha(accent.bright, '10'),

  // Range highlighting
  'editor.rangeHighlightBackground': alpha(accent.primary, '08'),
  'editor.rangeHighlightBorder': alpha(accent.primary, '20'),
  'editor.symbolHighlightBackground': alpha(accent.bright, '12'),
  'editor.symbolHighlightBorder': alpha(accent.bright, '30'),

  // ==========================================================================
  // LINE NUMBERS
  // ==========================================================================
  'editorLineNumber.foreground': text.tertiary,
  'editorLineNumber.activeForeground': accent.bright,
  'editorLineNumber.dimmedForeground': text.disabled,  // #6A7A80 - Lc 35+ now

  // ==========================================================================
  // INDENT GUIDES - Rainbow Miku palette
  // ==========================================================================
  // Indent guides - Miku's voicebank evolution (2007→2020)
  'editorIndentGuide.background1': alpha(mikuV2.hair.base, '35'),        // V2 (2007) - Original
  'editorIndentGuide.background2': alpha(mikuAppend.hair.base, '40'),    // Append (2010) - Dark era
  'editorIndentGuide.background3': alpha(mikuV3.hair.base, '45'),        // V3 (2013) - Refined
  'editorIndentGuide.background4': alpha(mikuV4X.hair.base, '50'),       // V4X (2016) - Variants
  'editorIndentGuide.background5': alpha(mikuNT.hair.base, '55'),        // NT (2020) - Organic
  'editorIndentGuide.background6': alpha(character.hair.base, '60'),     // Present - Canonical
  'editorIndentGuide.activeBackground1': mikuV2.hair.base,
  'editorIndentGuide.activeBackground2': mikuAppend.hair.base,
  'editorIndentGuide.activeBackground3': mikuV3.hair.base,
  'editorIndentGuide.activeBackground4': mikuV4X.hair.base,
  'editorIndentGuide.activeBackground5': mikuNT.hair.base,
  'editorIndentGuide.activeBackground6': character.hair.base,

  // ==========================================================================
  // RULERS & WHITESPACE
  // ==========================================================================
  'editorRuler.foreground': themeColors.ui.ruler,      // #2A3A3C - Subtle but visible
  'editorWhitespace.foreground': themeColors.ui.whitespace, // #3A4448 - Lc 15 subtle markers

  // ==========================================================================
  // BRACKETS - Rainbow colorful (Miku-inspired palette)
  // ==========================================================================
  'editorBracketMatch.background': alpha(accent.primary, '20'),
  'editorBracketMatch.border': accent.bright,

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
  'editorBracketPairGuide.background1': alpha(bracketPastel.tan, '20'),
  'editorBracketPairGuide.background2': alpha(bracketPastel.pink, '20'),
  'editorBracketPairGuide.background3': alpha(bracketPastel.mint, '20'),
  'editorBracketPairGuide.background4': alpha(bracketPastel.lavender, '20'),
  'editorBracketPairGuide.background5': alpha(bracketPastel.aqua, '20'),
  'editorBracketPairGuide.background6': alpha(bracketPastel.purple, '20'),
  'editorBracketPairGuide.activeBackground1': alpha(bracketPastel.tan, '45'),
  'editorBracketPairGuide.activeBackground2': alpha(bracketPastel.pink, '45'),
  'editorBracketPairGuide.activeBackground3': alpha(bracketPastel.mint, '45'),
  'editorBracketPairGuide.activeBackground4': alpha(bracketPastel.lavender, '45'),
  'editorBracketPairGuide.activeBackground5': alpha(bracketPastel.aqua, '45'),
  'editorBracketPairGuide.activeBackground6': alpha(bracketPastel.purple, '45'),

  // ==========================================================================
  // GUTTER (Line decorations)
  // ==========================================================================
  'editorGutter.background': bg.base,
  'editorGutter.addedBackground': alpha(semantic.success, '80'),
  'editorGutter.modifiedBackground': alpha(semantic.warning, '80'),
  'editorGutter.deletedBackground': alpha(semantic.error, '80'),
  'editorGutter.addedSecondaryBackground': alpha(semantic.success, '40'),
  'editorGutter.modifiedSecondaryBackground': alpha(semantic.warning, '40'),
  'editorGutter.deletedSecondaryBackground': alpha(semantic.error, '40'),
  'editorGutter.foldingControlForeground': accent.bright,
  'editorGutter.commentRangeForeground': alpha(text.tertiary, '60'),
  'editorGutter.commentGlyphForeground': wonderlandsShowtime.hair.highlight,
  'editorGutter.commentUnresolvedGlyphForeground': semantic.warning,
  'editorGutter.commentDraftGlyphForeground': accent.soft,

  // ==========================================================================
  // FOLDING
  // ==========================================================================
  'editor.foldBackground': alpha(accent.primary, '06'),
  'editor.foldPlaceholderForeground': text.ghost,  // #7A9A98 - Lc 45+ for readable fold placeholders

  // ==========================================================================
  // WIDGETS
  // ==========================================================================
  'editorWidget.foreground': text.primary,
  'editorWidget.background': bg.elevated,
  'editorWidget.border': alpha(accent.primary, '40'),
  'editorWidget.resizeBorder': alpha(accent.bright, '60'),
  'widget.border': alpha(accent.primary, '30'),
  'widget.shadow': alpha(bg.void, '80'),

  // Hover widget
  'editorHoverWidget.foreground': text.primary,
  'editorHoverWidget.background': alpha(bg.elevated, 'F8'),
  'editorHoverWidget.border': alpha(accent.primary, '50'),
  'editorHoverWidget.highlightForeground': accent.bright,
  'editorHoverWidget.statusBarBackground': bg.surface,

  // Ghost text (Copilot/AI suggestions)
  'editorGhostText.foreground': text.ghost,  // #7A9A98 - Lc 45+ for readable suggestions
  'editorGhostText.border': alpha(accent.soft, '30'),
  'editorGhostText.background': alpha(accent.soft, '05'),

  // Linked editing
  'editor.linkedEditingBackground': alpha(accent.bright, '15'),

  // Unnecessary code
  'editorUnnecessaryCode.border': alpha(text.tertiary, '50'),
  'editorUnnecessaryCode.opacity': alpha(bg.void, '70'),

  // ==========================================================================
  // SUGGEST WIDGET (Autocomplete)
  // ==========================================================================
  'editorSuggestWidget.background': alpha(bg.elevated, 'FC'),
  'editorSuggestWidget.border': alpha(accent.primary, '50'),
  'editorSuggestWidget.foreground': text.primary,
  'editorSuggestWidget.highlightForeground': accent.bright,
  'editorSuggestWidget.focusHighlightForeground': text.primary, // #E8EEF2 - Bright text for visibility
  'editorSuggestWidget.selectedBackground': alpha(accent.primary, '25'),
  'editorSuggestWidget.selectedForeground': text.primary,
  'editorSuggestWidget.selectedIconForeground': text.primary,  // #E8EEF2 for Lc 75+ on selection bg
  'editorSuggestWidgetStatus.foreground': text.secondary,

  // ==========================================================================
  // OVERVIEW RULER
  // ==========================================================================
  'editorOverviewRuler.background': bg.base,
  'editorOverviewRuler.border': alpha(accent.primary, '20'),
  'editorOverviewRuler.findMatchForeground': alpha(semantic.warning, '90'),
  'editorOverviewRuler.rangeHighlightForeground': alpha(accent.primary, '50'),
  'editorOverviewRuler.selectionHighlightForeground': alpha(accent.bright, '60'),
  'editorOverviewRuler.wordHighlightForeground': alpha(accent.bright, '60'),
  'editorOverviewRuler.wordHighlightStrongForeground': alpha(leoNeed.hair.highlight, '70'),
  'editorOverviewRuler.wordHighlightTextForeground': alpha(accent.bright, '50'),
  'editorOverviewRuler.modifiedForeground': alpha(semantic.warning, '90'),
  'editorOverviewRuler.addedForeground': alpha(semantic.success, '90'),
  'editorOverviewRuler.deletedForeground': alpha(semantic.error, '90'),
  'editorOverviewRuler.errorForeground': semantic.error,
  'editorOverviewRuler.warningForeground': semantic.warning,
  'editorOverviewRuler.infoForeground': accent.primary,
  'editorOverviewRuler.bracketMatchForeground': alpha(accent.bright, '80'),
  'editorOverviewRuler.commentForeground': alpha(text.tertiary, '50'),
  'editorOverviewRuler.commentUnresolvedForeground': alpha(semantic.warning, '50'),
  'editorOverviewRuler.commentDraftForeground': alpha(accent.soft, '50'),
  'editorOverviewRuler.currentContentForeground': alpha(accent.bright, '60'),
  'editorOverviewRuler.incomingContentForeground': alpha(semantic.success, '60'),
  'editorOverviewRuler.commonContentForeground': alpha(text.tertiary, '40'),
  // Inline chat (AI features)
  'editorOverviewRuler.inlineChatInserted': alpha(semantic.success, '60'),
  'editorOverviewRuler.inlineChatRemoved': alpha(semantic.error, '60'),

  // ==========================================================================
  // LINKS & CODE LENS
  // ==========================================================================
  'editorLink.activeForeground': themeColors.ui.linkActive,  // Vibrant teal (Lc 78)
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
  'editorInlayHint.foreground': themeColors.syntax.silverBright, // #B0C0C8 - Lc 60 for readability
  'editorInlayHint.background': alpha(bg.surface, '80'),
  'editorInlayHint.typeForeground': accent.soft,   // #B2EBE7 - Full opacity teal
  'editorInlayHint.typeBackground': alpha(bg.surface, '80'),
  // Slightly darker to avoid halation (Lc ≤ 90)
  'editorInlayHint.parameterForeground': character.skin.shadow,
  'editorInlayHint.parameterBackground': alpha(bg.surface, '80'),

  // ==========================================================================
  // UNICODE HIGHLIGHT
  // ==========================================================================
  'editorUnicodeHighlight.border': alpha(semantic.warning, '80'),
  'editorUnicodeHighlight.background': alpha(semantic.warning, '12'),

  // ==========================================================================
  // ERROR/WARNING/INFO DECORATIONS
  // ==========================================================================
  'editorError.foreground': semantic.error,
  'editorError.border': alpha(semantic.error, '00'),
  'editorError.background': alpha(semantic.error, '10'),
  'editorWarning.foreground': semantic.warning,
  'editorWarning.border': alpha(semantic.warning, '00'),
  'editorWarning.background': alpha(semantic.warning, '10'),
  'editorInfo.foreground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'editorInfo.border': alpha(accent.primary, '00'),
  'editorInfo.background': alpha(accent.primary, '10'),
  'editorHint.foreground': accent.soft,
  'editorHint.border': alpha(accent.soft, '00'),
  'problemsErrorIcon.foreground': semantic.error,
  'problemsWarningIcon.foreground': semantic.warning,
  'problemsInfoIcon.foreground': accent.primary,

  // ==========================================================================
  // STICKY SCROLL
  // ==========================================================================
  'editorStickyScroll.background': alpha(bg.base, 'F5'),
  'editorStickyScroll.border': alpha(accent.primary, '20'),
  'editorStickyScroll.shadow': alpha(bg.void, '40'),
  'editorStickyScrollGutter.background': alpha(bg.base, 'F5'),
  'editorStickyScrollHover.background': alpha(accent.primary, '08'),

  // ==========================================================================
  // MARKER NAVIGATION (F8 errors)
  // ==========================================================================
  'editorMarkerNavigation.background': bg.surface,
  'editorMarkerNavigationError.background': alpha(semantic.error, '15'),
  'editorMarkerNavigationWarning.background': alpha(semantic.warning, '15'),
  'editorMarkerNavigationInfo.background': alpha(accent.primary, '15'),
  'editorMarkerNavigationError.headerBackground': alpha(semantic.error, '10'),
  'editorMarkerNavigationWarning.headerBackground': alpha(semantic.warning, '10'),
  'editorMarkerNavigationInfo.headerBackground': alpha(accent.primary, '10'),

  // ==========================================================================
  // SNIPPETS
  // ==========================================================================
  'editor.snippetTabstopHighlightBackground': alpha(accent.bright, '15'),
  'editor.snippetTabstopHighlightBorder': alpha(accent.bright, '40'),
  'editor.snippetFinalTabstopHighlightBackground': alpha(accent.magenta, '15'),
  'editor.snippetFinalTabstopHighlightBorder': alpha(accent.magenta, '50'),

  // ==========================================================================
  // INLINE VALUES (Debugging)
  // ==========================================================================
  'editor.inlineValuesForeground': themeColors.ui.linkActive,
  'editor.inlineValuesBackground': alpha(themeColors.ui.linkActive, '12'),

  // ==========================================================================
  // DEBUG HIGHLIGHTS
  // ==========================================================================
  'editor.stackFrameHighlightBackground': alpha(semantic.warning, '20'),
  'editor.focusedStackFrameHighlightBackground': alpha(semantic.success, '20'),

  // ==========================================================================
  // ACTIVITY BAR
  // ==========================================================================
  'activityBar.background': bg.void,
  'activityBar.foreground': accent.bright,
  'activityBar.inactiveForeground': text.tertiary,
  'activityBar.border': alpha(accent.primary, '15'),
  'activityBar.activeBorder': accent.magenta,
  'activityBar.activeBackground': alpha(accent.primary, '12'),
  'activityBar.activeFocusBorder': accent.bright,
  'activityBar.dropBorder': accent.primary,
  'activityBarBadge.background': '#B0307A', // Darker magenta for Lc 75+ with white text
  'activityBarBadge.foreground': themeColors.ui.pureWhite,
  'activityBarTop.foreground': accent.bright,
  'activityBarTop.activeBorder': accent.magenta,
  'activityBarTop.inactiveForeground': text.tertiary,
  'activityBarTop.dropBorder': accent.primary,
  'activityBarTop.background': bg.void,
  'activityBarTop.activeBackground': alpha(accent.primary, '12'),
  'activityWarningBadge.foreground': character.eyes.pupil,
  'activityWarningBadge.background': semantic.warning,
  'activityErrorBadge.foreground': character.eyes.pupil,
  'activityErrorBadge.background': semantic.error,

  // ==========================================================================
  // SIDEBAR
  // ==========================================================================
  'sideBar.background': bg.surface,
  'sideBar.foreground': text.primary,
  'sideBar.border': alpha(accent.primary, '15'),
  'sideBar.dropBackground': alpha(accent.primary, '15'),
  'sideBarTitle.foreground': accent.bright,
  'sideBarTitle.background': bg.surface,
  'sideBarTitle.border': alpha(accent.primary, '15'),
  'sideBarSectionHeader.background': bg.overlay,
  'sideBarSectionHeader.foreground': accent.bright,
  'sideBarSectionHeader.border': alpha(accent.primary, '20'),
  'sideBarActivityBarTop.border': alpha(accent.primary, '15'),
  'sideBarStickyScroll.background': bg.surface,
  'sideBarStickyScroll.border': alpha(accent.primary, '15'),
  'sideBarStickyScroll.shadow': alpha(bg.void, '40'),

  // ==========================================================================
  // STATUS BAR
  // ==========================================================================
  'statusBar.background': bg.void,
  'statusBar.foreground': text.primary,
  'statusBar.border': alpha(accent.primary, '20'),
  'statusBar.debuggingBackground': alpha(semantic.warning, 'DD'),
  'statusBar.debuggingForeground': text.primary,  // #E8EEF2 - Light text readable on both dark and light bgs
  'statusBar.debuggingBorder': semantic.warning,
  'statusBar.noFolderBackground': bg.void,
  'statusBar.noFolderForeground': text.secondary,
  'statusBar.noFolderBorder': alpha(text.tertiary, '30'),
  'statusBar.focusBorder': alpha(accent.bright, 'DD'),
  'statusBarItem.activeBackground': alpha(accent.primary, '30'),
  'statusBarItem.hoverBackground': alpha(accent.primary, '20'),
  'statusBarItem.hoverForeground': text.primary,
  'statusBarItem.prominentForeground': text.primary,  // #E8EEF2 for Lc 75+
  'statusBarItem.prominentBackground': alpha(accent.primary, '20'),
  'statusBarItem.prominentHoverBackground': alpha(accent.primary, '35'),
  'statusBarItem.prominentHoverForeground': text.primary,
  'statusBarItem.remoteBackground': '#157570',  // Darker teal for Lc 75+ with white
  'statusBarItem.remoteForeground': themeColors.ui.pureWhite,
  'statusBarItem.remoteHoverBackground': accent.primary,
  'statusBarItem.remoteHoverForeground': themeColors.ui.pureWhite,
  'statusBarItem.errorBackground': semantic.error,
  'statusBarItem.errorForeground': character.headphones.frame,
  'statusBarItem.errorHoverBackground': alpha(semantic.error, 'DD'),
  'statusBarItem.errorHoverForeground': character.headphones.frame,
  'statusBarItem.warningBackground': semantic.warning,
  'statusBarItem.warningForeground': character.headphones.frame,
  'statusBarItem.warningHoverBackground': alpha(semantic.warning, 'DD'),
  'statusBarItem.warningHoverForeground': character.headphones.frame,
  'statusBarItem.compactHoverBackground': alpha(accent.primary, '25'),
  'statusBarItem.focusBorder': alpha(accent.bright, 'DD'),
  'statusBarItem.offlineBackground': alpha(text.tertiary, 'AA'),  // Lighter background for better contrast
  'statusBarItem.offlineForeground': themeColors.ui.pureWhite,    // Pure white for Lc 75+
  'statusBarItem.offlineHoverBackground': alpha(text.tertiary, 'CC'),
  'statusBarItem.offlineHoverForeground': text.primary,

  // ==========================================================================
  // TITLE BAR
  // ==========================================================================
  'titleBar.activeBackground': bg.void,
  'titleBar.activeForeground': text.primary,
  'titleBar.inactiveBackground': bg.void,
  'titleBar.inactiveForeground': text.tertiary,
  'titleBar.border': alpha(accent.primary, '15'),

  // ==========================================================================
  // TABS
  // ==========================================================================
  'tab.activeBackground': alpha(accent.primary, '10'),
  'tab.activeForeground': text.primary,
  'tab.activeBorderTop': accent.magenta,
  'tab.activeBorder': alpha(accent.primary, '30'),
  'tab.inactiveBackground': bg.base,
  'tab.inactiveForeground': themeColors.ui.deprecated,
  'tab.border': bg.elevated,
  'tab.hoverBackground': alpha(accent.primary, '15'),
  // High-distinction hover state (state ΔE distinction)
  'tab.hoverForeground': themeColors.syntax.function,
  'tab.hoverBorder': alpha(accent.primary, '30'),
  'tab.unfocusedActiveBackground': bg.surface,
  'tab.unfocusedActiveForeground': text.secondary,
  'tab.unfocusedActiveBorderTop': alpha(accent.magenta, '60'),
  'tab.unfocusedActiveBorder': alpha(accent.primary, '20'),
  'tab.unfocusedInactiveBackground': bg.base,
  'tab.unfocusedInactiveForeground': text.tertiary,
  'tab.unfocusedHoverBackground': alpha(accent.primary, '08'),
  'tab.unfocusedHoverForeground': text.secondary,
  'tab.unfocusedHoverBorder': alpha(accent.primary, '20'),
  'tab.lastPinnedBorder': alpha(accent.magenta, '50'),
  'tab.activeModifiedBorder': accent.magenta,
  'tab.inactiveModifiedBorder': alpha(accent.magenta, '50'),
  'tab.unfocusedActiveModifiedBorder': alpha(accent.magenta, '60'),
  'tab.unfocusedInactiveModifiedBorder': alpha(accent.magenta, '30'),
  'tab.dragAndDropBorder': accent.primary,
  'tab.selectedBackground': bg.surface,
  'tab.selectedForeground': accent.bright,
  'tab.selectedBorderTop': accent.primary,
  'editorGroupHeader.tabsBackground': bg.elevated,
  'editorGroupHeader.tabsBorder': alpha(accent.primary, '15'),
  'editorGroupHeader.noTabsBackground': bg.base,
  'editorGroupHeader.border': alpha(accent.primary, '10'),

  // ==========================================================================
  // EDITOR GROUPS
  // ==========================================================================
  'editorGroup.border': alpha(accent.primary, '25'),
  'editorGroup.dropBackground': alpha(accent.primary, '20'),
  'editorGroup.dropIntoPromptForeground': text.primary,
  'editorGroup.dropIntoPromptBackground': alpha(bg.elevated, 'F5'),
  'editorGroup.dropIntoPromptBorder': alpha(accent.primary, '50'),
  'editorGroup.emptyBackground': bg.surface,
  'editorGroup.focusedEmptyBorder': alpha(accent.primary, '40'),
  'editorPane.background': bg.base,
  'sideBySideEditor.horizontalBorder': alpha(accent.primary, '25'),
  'sideBySideEditor.verticalBorder': alpha(accent.primary, '25'),

  // ==========================================================================
  // LISTS & TREES
  // ==========================================================================
  'list.activeSelectionBackground': alpha(accent.magenta, '30'), // Magenta for selection (distinct from teal focus)
  'list.activeSelectionForeground': text.primary,
  'list.activeSelectionIconForeground': text.primary,  // #E8EEF2 for Lc 75+ on selection bg
  'list.inactiveSelectionBackground': alpha(accent.primary, '15'),
  'list.inactiveSelectionForeground': text.primary,
  'list.inactiveSelectionIconForeground': text.secondary,
  'list.hoverBackground': alpha(accent.primary, '10'),
  // Give hover/focus states distinct foreground tints (state ΔE distinction)
  'list.hoverForeground': themeColors.syntax.function,
  'list.focusBackground': alpha(accent.primary, '20'),
  'list.focusForeground': themeColors.ui.operator,  // High-distinction focus state
  'list.focusOutline': alpha(accent.bright, 'DD'),
  'list.focusAndSelectionOutline': alpha(accent.magenta, '80'),
  'list.focusHighlightForeground': text.primary,  // #E8EEF2 for Lc 75+ on focus bg
  'list.highlightForeground': accent.bright,
  'list.dropBackground': alpha(accent.primary, '20'),
  'list.dropBetweenBackground': alpha(accent.primary, '40'),
  'list.errorForeground': semantic.error,
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': semantic.error,
  'list.deemphasizedForeground': text.secondary,   // #A1B3B6 - Brighter for readability
  'list.inactiveFocusBackground': alpha(accent.primary, '10'),
  'list.inactiveFocusOutline': alpha(accent.primary, '30'),
  'list.filterMatchBackground': alpha(semantic.warning, '20'),
  'list.filterMatchBorder': alpha(semantic.warning, '50'),
  'listFilterWidget.background': bg.elevated,
  'listFilterWidget.outline': alpha(accent.primary, '60'),
  'listFilterWidget.noMatchesOutline': semantic.error,
  'listFilterWidget.shadow': alpha(bg.void, '60'),

  // Tree
  'tree.indentGuidesStroke': alpha(accent.primary, '30'),
  'tree.inactiveIndentGuidesStroke': alpha(accent.primary, '15'),
  'tree.tableColumnsBorder': alpha(accent.primary, '20'),
  'tree.tableOddRowsBackground': alpha(accent.primary, '04'),

  // ==========================================================================
  // MINIMAP
  // ==========================================================================
  'minimap.background': alpha(bg.base, 'CC'),
  'minimap.foregroundOpacity': themeColors.ui.minimapOpacity,
  'minimap.selectionHighlight': alpha(accent.primary, '50'),
  'minimap.selectionOccurrenceHighlight': alpha(accent.primary, '35'),
  'minimap.findMatchHighlight': alpha(semantic.warning, '70'),
  'minimap.errorHighlight': alpha(semantic.error, '70'),
  'minimap.warningHighlight': alpha(semantic.warning, '70'),
  'minimap.infoHighlight': alpha(accent.primary, '70'),
  'minimap.chatEditHighlight': alpha(accent.bright, '50'),
  'minimapSlider.background': alpha(accent.primary, '12'),
  'minimapSlider.hoverBackground': alpha(accent.primary, '25'),
  'minimapSlider.activeBackground': alpha(accent.primary, '40'),
  'minimapGutter.addedBackground': semantic.success,
  'minimapGutter.modifiedBackground': semantic.warning,
  'minimapGutter.deletedBackground': semantic.error,
  'editorMinimap.inlineChatInserted': alpha(semantic.success, '50'),

  // ==========================================================================
  // SCROLLBAR
  // ==========================================================================
  'scrollbar.background': alpha(bg.base, '00'),
  'scrollbar.shadow': alpha(bg.void, '60'),
  'scrollbarSlider.background': alpha(accent.primary, '25'),
  'scrollbarSlider.hoverBackground': alpha(accent.primary, '40'),
  'scrollbarSlider.activeBackground': alpha(accent.primary, '55'),

  // ==========================================================================
  // PANEL (Bottom panel: Terminal, Output, etc.)
  // ==========================================================================
  'panel.background': bg.void,
  'panel.border': alpha(accent.primary, '25'),
  'panel.dropBorder': accent.primary,
  'panelTitle.activeBorder': accent.magenta,
  'panelTitle.activeForeground': accent.bright,
  'panelTitle.inactiveForeground': text.tertiary,
  'panelTitle.border': alpha(accent.primary, '15'),
  'panelTitleBadge.background': accent.primary,
  'panelTitleBadge.foreground': text.primary,
  'panelInput.border': alpha(accent.primary, '40'),
  'panelSection.border': alpha(accent.primary, '20'),
  'panelSection.dropBackground': alpha(accent.primary, '15'),
  'panelSectionHeader.background': bg.elevated,
  'panelSectionHeader.foreground': accent.bright,
  'panelSectionHeader.border': alpha(accent.primary, '20'),
  'panelStickyScroll.background': bg.void,
  'panelStickyScroll.border': alpha(accent.primary, '15'),
  'panelStickyScroll.shadow': alpha(bg.void, '60'),
  'outputView.background': bg.void,
  'outputViewStickyScroll.background': bg.void,

  // ==========================================================================
  // TERMINAL
  // ==========================================================================
  'terminal.background': bg.void,
  'terminal.foreground': text.primary,
  'terminal.border': alpha(accent.primary, '25'),
  'terminal.selectionBackground': alpha(accent.primary, '35'),
  'terminal.selectionForeground': text.primary,
  'terminal.inactiveSelectionBackground': alpha(accent.primary, '20'),
  'terminal.findMatchBackground': alpha(semantic.warning, '40'),
  'terminal.findMatchBorder': alpha(semantic.warning, '80'),
  'terminal.findMatchHighlightBackground': alpha(accent.bright, '25'),
  'terminal.findMatchHighlightBorder': alpha(accent.bright, '50'),
  'terminal.hoverHighlightBackground': alpha(accent.primary, '15'),
  'terminal.initialHintForeground': themeColors.ui.terminalHint,  // #5A8A88 - Lc 40+ readable hints
  'terminalCursor.foreground': accent.magenta,
  'terminalCursor.background': bg.void,
  'terminal.dropBackground': alpha(accent.primary, '15'),
  'terminal.tab.activeBorder': accent.magenta,

  // ANSI Colors - APCA Lc 75+ for terminal readability
  // All colors optimized for void background
  'terminal.ansiBlack': themeColors.terminal.black,
  'terminal.ansiRed': themeColors.terminal.red,
  'terminal.ansiGreen': themeColors.terminal.green,
  'terminal.ansiYellow': themeColors.terminal.yellow,
  'terminal.ansiBlue': themeColors.terminal.blue,
  'terminal.ansiMagenta': themeColors.terminal.magenta,
  'terminal.ansiCyan': themeColors.terminal.cyan,
  'terminal.ansiWhite': themeColors.terminal.white,
  'terminal.ansiBrightBlack': themeColors.terminal.brightBlack,
  'terminal.ansiBrightRed': themeColors.terminal.brightRed,
  'terminal.ansiBrightGreen': themeColors.terminal.brightGreen,
  'terminal.ansiBrightYellow': themeColors.terminal.brightYellow,
  'terminal.ansiBrightBlue': themeColors.terminal.brightBlue,
  'terminal.ansiBrightMagenta': themeColors.terminal.brightMagenta,
  'terminal.ansiBrightCyan': themeColors.terminal.brightCyan,
  'terminal.ansiBrightWhite': themeColors.terminal.brightWhite,

  // Terminal decorations
  'terminalCommandDecoration.defaultBackground': alpha(text.tertiary, '40'),
  'terminalCommandDecoration.successBackground': alpha(semantic.success, '60'),
  'terminalCommandDecoration.errorBackground': alpha(semantic.error, '60'),
  'terminalCommandGuide.foreground': themeColors.ui.terminalGuide,  // #2A4A48 - Lc 15 subtle guide
  'terminalOverviewRuler.cursorForeground': accent.magenta,
  'terminalOverviewRuler.findMatchForeground': alpha(semantic.warning, '80'),
  'terminalOverviewRuler.border': alpha(accent.primary, '20'),
  'terminalStickyScroll.background': bg.void,
  'terminalStickyScroll.border': alpha(accent.primary, '15'),
  'terminalStickyScrollHover.background': alpha(accent.primary, '10'),

  // Terminal symbol icons
  'terminalSymbolIcon.aliasForeground': accent.soft,
  'terminalSymbolIcon.branchForeground': accent.bright,
  // Lavender commit icons (Digital Stars) for ΔE separation from branch teal
  'terminalSymbolIcon.commitForeground': digitalStars.y2021.outfit.gradient,
  'terminalSymbolIcon.flagForeground': semantic.warning,
  'terminalSymbolIcon.optionForeground': text.primary,
  'terminalSymbolIcon.optionValueForeground': themeColors.symbol.snippet,
  'terminalSymbolIcon.methodForeground': themeColors.symbol.method,
  'terminalSymbolIcon.argumentForeground': accent.soft,
  'terminalSymbolIcon.inlineSuggestionForeground': themeColors.ui.linkActive,
  'terminalSymbolIcon.fileForeground': text.primary,
  'terminalSymbolIcon.folderForeground': accent.primary,
  'terminalSymbolIcon.pullRequestDoneForeground': semantic.success,
  'terminalSymbolIcon.pullRequestForeground': leoNeed.hair.highlight,
  'terminalSymbolIcon.remoteForeground': themeColors.symbol.interface,
  'terminalSymbolIcon.stashForeground': text.tertiary,
  'terminalSymbolIcon.symbolText': text.primary,
  'terminalSymbolIcon.symbolicLinkFileForeground': themeColors.symbol.enumerator,
  'terminalSymbolIcon.symbolicLinkFolderForeground': themeColors.symbol.enumerator,
  'terminalSymbolIcon.tagForeground': semantic.warning,

  // ==========================================================================
  // DEBUGGER
  // ==========================================================================
  'debugToolBar.background': alpha(bg.elevated, 'F8'),
  'debugToolBar.border': alpha(semantic.warning, '40'),
  'debugIcon.breakpointForeground': semantic.error,
  'debugIcon.breakpointDisabledForeground': text.disabled,
  'debugIcon.breakpointUnverifiedForeground': alpha(semantic.error, '70'),
  'debugIcon.breakpointCurrentStackframeForeground': semantic.warning,
  'debugIcon.breakpointStackframeForeground': semantic.success,
  'debugIcon.startForeground': semantic.success,
  'debugIcon.pauseForeground': semantic.warning,
  'debugIcon.stopForeground': semantic.error,
  'debugIcon.disconnectForeground': alpha(semantic.error, '80'), // Distinct from stop
  'debugIcon.restartForeground': semantic.success,
  'debugIcon.stepOverForeground': accent.bright,
  'debugIcon.stepIntoForeground': themeColors.ui.linkActive, // Different color for step into
  'debugIcon.stepOutForeground': themeColors.syntax.pastelIndigo, // Different color for step out
  'debugIcon.continueForeground': semantic.success,
  // Magenta "step back" for clear ΔE separation from step over
  'debugIcon.stepBackForeground': accent.magenta,
  'debugConsole.infoForeground': semantic.info,  // #88F0E8 - Miku cyan (Lc 87)
  'debugConsole.warningForeground': semantic.warning,
  'debugConsole.errorForeground': semantic.error,
  'debugConsole.sourceForeground': text.primary,
  'debugConsoleInputIcon.foreground': accent.primary,
  'debugExceptionWidget.background': alpha(semantic.error, '15'),
  'debugExceptionWidget.border': semantic.error,
  'debugTokenExpression.name': themeColors.debug.name,
  'debugTokenExpression.value': themeColors.debug.value,
  'debugTokenExpression.string': themeColors.debug.string,
  'debugTokenExpression.boolean': themeColors.syntax.pastelIndigo,
  'debugTokenExpression.number': semantic.success,
  'debugTokenExpression.error': semantic.error,
  'debugTokenExpression.type': accent.soft,
  'debugView.exceptionLabelForeground': text.primary,
  'debugView.exceptionLabelBackground': semantic.error,
  'debugView.stateLabelForeground': text.primary,
  'debugView.stateLabelBackground': semantic.success,
  'debugView.valueChangedHighlight': alpha(accent.bright, '40'),

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': alpha(accent.primary, '60'),
  'peekViewTitle.background': bg.surface,
  'peekViewTitleLabel.foreground': accent.bright,
  'peekViewTitleDescription.foreground': text.secondary,
  'peekViewEditor.background': bg.base,
  'peekViewEditor.matchHighlightBackground': alpha(semantic.warning, '30'),
  'peekViewEditor.matchHighlightBorder': alpha(semantic.warning, '60'),
  'peekViewEditorGutter.background': bg.elevated,
  'peekViewResult.background': bg.surface,
  'peekViewResult.fileForeground': text.primary,
  'peekViewResult.lineForeground': text.secondary,
  'peekViewResult.matchHighlightBackground': alpha(semantic.warning, '25'),
  'peekViewResult.selectionBackground': alpha(accent.primary, '25'),
  'peekViewResult.selectionForeground': text.primary,
  'peekViewEditorStickyScroll.background': bg.base,
  'peekViewEditorStickyScrollGutter.background': bg.elevated,

  // ==========================================================================
  // DIFF EDITOR
  // ==========================================================================
  'diffEditor.insertedTextBackground': alpha(semantic.success, '12'),
  'diffEditor.insertedTextBorder': alpha(semantic.success, '30'),
  'diffEditor.insertedLineBackground': alpha(semantic.success, '08'),
  'diffEditor.removedTextBackground': alpha(semantic.error, '15'),
  'diffEditor.removedTextBorder': alpha(semantic.error, '30'),
  'diffEditor.removedLineBackground': alpha(semantic.error, '08'),
  'diffEditor.diagonalFill': alpha(text.tertiary, '15'),
  'diffEditor.border': alpha(accent.primary, '25'),
  'diffEditor.unchangedRegionBackground': alpha(bg.overlay, '30'),
  'diffEditor.unchangedRegionForeground': text.tertiary,
  'diffEditor.unchangedRegionShadow': alpha(bg.void, '40'),
  'diffEditor.unchangedCodeBackground': alpha(bg.overlay, '15'),
  'diffEditor.move.border': alpha(digitalStars.y2021_mg.outfit.gradient, '50'),
  'diffEditor.moveActive.border': digitalStars.y2021_mg.outfit.gradient,
  'diffEditorGutter.insertedLineBackground': alpha(semantic.success, '25'),
  'diffEditorGutter.removedLineBackground': alpha(semantic.error, '25'),
  'diffEditorOverview.insertedForeground': semantic.success,
  'diffEditorOverview.removedForeground': semantic.error,

  // ==========================================================================
  // MULTI-DIFF EDITOR
  // ==========================================================================
  'multiDiffEditor.headerBackground': bg.surface,
  'multiDiffEditor.background': bg.base,
  'multiDiffEditor.border': alpha(accent.primary, '25'),

  // ==========================================================================
  // MERGE EDITOR
  // ==========================================================================
  'merge.currentHeaderBackground': alpha(accent.bright, '35'),
  'merge.currentContentBackground': alpha(accent.bright, '12'),
  'merge.incomingHeaderBackground': alpha(semantic.success, '35'),
  'merge.incomingContentBackground': alpha(semantic.success, '12'),
  'merge.border': alpha(accent.primary, '40'),
  'merge.commonContentBackground': alpha(bg.overlay, '25'),
  'merge.commonHeaderBackground': alpha(bg.overlay, '40'),
  'mergeEditor.change.background': alpha(accent.bright, '10'),
  'mergeEditor.change.word.background': alpha(accent.bright, '25'),
  'mergeEditor.conflict.unhandledUnfocused.border': alpha(semantic.warning, '50'),
  'mergeEditor.conflict.unhandledFocused.border': semantic.warning,
  'mergeEditor.conflict.handledUnfocused.border': alpha(semantic.success, '50'),
  'mergeEditor.conflict.handledFocused.border': semantic.success,
  'mergeEditor.conflict.handled.minimapOverViewRuler': semantic.success,
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': semantic.warning,
  'mergeEditor.conflictingLines.background': alpha(semantic.warning, '15'),
  'mergeEditor.changeBase.background': alpha(bg.overlay, '15'),
  'mergeEditor.changeBase.word.background': alpha(bg.overlay, '30'),
  'mergeEditor.conflict.input1.background': alpha(accent.bright, '12'),
  'mergeEditor.conflict.input2.background': alpha(semantic.success, '12'),

  // ==========================================================================
  // GIT DECORATIONS - All Lc 75+ for sidebar background
  // ==========================================================================
  'gitDecoration.addedResourceForeground': themeColors.git.added,
  'gitDecoration.modifiedResourceForeground': themeColors.git.modified,
  'gitDecoration.deletedResourceForeground': themeColors.git.deleted,
  'gitDecoration.untrackedResourceForeground': themeColors.git.untracked,
  'gitDecoration.ignoredResourceForeground': text.disabled,
  'gitDecoration.conflictingResourceForeground': themeColors.git.conflicting,
  'gitDecoration.stageModifiedResourceForeground': themeColors.git.stageModified,
  'gitDecoration.stageDeletedResourceForeground': themeColors.git.stageDeleted,
  'gitDecoration.renamedResourceForeground': themeColors.git.renamed,
  'gitDecoration.submoduleResourceForeground': themeColors.git.submodule,
  'git.blame.editorDecorationForeground': text.disabled,

  // ==========================================================================
  // SCM GRAPH
  // ==========================================================================
  'scmGraph.historyItemHoverLabelForeground': text.primary,
  'scmGraph.historyItemHoverDefaultLabelForeground': text.secondary,
  'scmGraph.historyItemHoverDefaultLabelBackground': alpha(bg.surface, '80'),
  // SCM Graph - Project SEKAI unit colors (each branch is a unit's story)
  'scmGraph.foreground1': virtualSinger.imageColor,        // Virtual Singer - main branch
  'scmGraph.foreground2': leoNeed.unitColor,               // LEO/NEED - royal blue
  'scmGraph.foreground3': moreMoreJump.unitColor,          // MORE MORE JUMP! - bright green
  'scmGraph.foreground4': vividBadSquad.unitColor,         // VIVID BAD SQUAD - vivid pink
  'scmGraph.foreground5': wonderlandsShowtime.unitColor,   // Wonderlands×Showtime - orange
  'scmGraph.historyItemHoverAdditionsForeground': semantic.success,
  'scmGraph.historyItemHoverDeletionsForeground': semantic.error,
  'scmGraph.historyItemRefColor': accent.bright,
  'scmGraph.historyItemRemoteRefColor': leoNeed.hair.highlight,
  'scmGraph.historyItemBaseRefColor': accent.primary,

  // ==========================================================================
  // NOTIFICATIONS
  // ==========================================================================
  'notifications.foreground': text.primary,
  'notifications.background': bg.elevated,
  'notifications.border': alpha(accent.primary, '30'),
  'notificationToast.border': alpha(accent.primary, '40'),
  'notificationCenterHeader.foreground': accent.bright,
  'notificationCenterHeader.background': bg.surface,
  'notificationCenter.border': alpha(accent.primary, '30'),
  'notificationLink.foreground': themeColors.ui.linkActive,
  'notificationsInfoIcon.foreground': accent.primary,
  'notificationsWarningIcon.foreground': semantic.warning,
  'notificationsErrorIcon.foreground': semantic.error,

  // ==========================================================================
  // COMMAND CENTER
  // ==========================================================================
  'commandCenter.foreground': text.primary,
  'commandCenter.background': bg.void,
  'commandCenter.border': alpha(accent.primary, '30'),
  'commandCenter.activeForeground': themeColors.syntax.function,
  'commandCenter.activeBackground': alpha(accent.primary, '15'),
  'commandCenter.activeBorder': alpha(accent.primary, '50'),
  'commandCenter.inactiveForeground': text.tertiary,
  'commandCenter.inactiveBorder': alpha(text.tertiary, '25'),
  'commandCenter.debuggingBackground': alpha(semantic.warning, '20'),

  // ==========================================================================
  // QUICK INPUT
  // ==========================================================================
  'quickInput.background': bg.elevated,
  'quickInput.foreground': text.primary,
  'quickInputTitle.background': bg.surface,
  'quickInputList.focusBackground': alpha(accent.primary, '25'),
  'quickInputList.focusForeground': text.primary,
  'quickInputList.focusIconForeground': text.primary,  // #E8EEF2 for Lc 75+ on focus bg
  'pickerGroup.border': alpha(accent.primary, '30'),
  'pickerGroup.foreground': accent.bright,

  // ==========================================================================
  // KEYBINDING LABELS
  // ==========================================================================
  'keybindingLabel.background': alpha(accent.primary, '15'),
  'keybindingLabel.foreground': text.primary,
  'keybindingLabel.border': alpha(accent.primary, '35'),
  'keybindingLabel.bottomBorder': alpha(accent.primary, '50'),
  'keybindingTable.headerBackground': bg.surface,
  'keybindingTable.rowsBackground': alpha(accent.primary, '04'),

  // ==========================================================================
  // BREADCRUMBS
  // ==========================================================================
  'breadcrumb.foreground': text.secondary,
  'breadcrumb.background': bg.base,
  'breadcrumb.focusForeground': themeColors.syntax.function,
  'breadcrumb.activeSelectionForeground': text.primary,
  'breadcrumbPicker.background': bg.elevated,

  // ==========================================================================
  // MENU
  // ==========================================================================
  'menu.background': bg.elevated,
  'menu.foreground': text.primary,
  'menu.selectionBackground': alpha(accent.primary, '25'),
  'menu.selectionForeground': text.primary,
  'menu.selectionBorder': alpha(accent.primary, '35'),
  'menu.separatorBackground': alpha(accent.primary, '25'),
  'menu.border': alpha(accent.primary, '30'),
  'menubar.selectionBackground': alpha(accent.primary, '20'),
  'menubar.selectionForeground': text.primary,
  'menubar.selectionBorder': alpha(accent.primary, '30'),

  // ==========================================================================
  // SETTINGS EDITOR
  // ==========================================================================
  'settings.headerForeground': accent.bright,
  'settings.modifiedItemIndicator': accent.magenta,
  'settings.dropdownBackground': bg.elevated,
  'settings.dropdownForeground': text.primary,
  'settings.dropdownBorder': alpha(accent.primary, '40'),
  'settings.dropdownListBorder': alpha(accent.primary, '50'),
  'settings.checkboxBackground': bg.elevated,
  'settings.checkboxForeground': accent.bright,    // #5DE4DB - Bright for visibility
  'settings.checkboxBorder': alpha(accent.primary, '50'),
  'settings.textInputBackground': bg.elevated,
  'settings.textInputForeground': text.primary,
  'settings.textInputBorder': alpha(accent.primary, '40'),
  'settings.numberInputBackground': bg.elevated,
  'settings.numberInputForeground': text.primary,
  'settings.numberInputBorder': alpha(accent.primary, '40'),
  'settings.focusedRowBackground': alpha(accent.primary, '08'),
  'settings.focusedRowBorder': alpha(accent.primary, '35'),
  'settings.rowHoverBackground': alpha(accent.primary, '05'),
  'settings.sashBorder': alpha(accent.primary, '25'),
  'settings.headerBorder': alpha(accent.primary, '20'),
  'settings.settingsHeaderHoverForeground': text.primary,

  // ==========================================================================
  // TESTING
  // ==========================================================================
  // Separate "failed" vs "errored" for instant recognition (ΔE distinction)
  'testing.iconErrored': accent.magenta,
  'testing.iconFailed': semantic.error,
  'testing.iconPassed': semantic.success,
  'testing.iconQueued': semantic.warning,
  'testing.iconUnset': text.tertiary,
  'testing.iconSkipped': text.tertiary,
  'testing.iconErrored.retired': alpha(semantic.error, '50'),
  'testing.iconFailed.retired': alpha(semantic.error, '50'),
  'testing.iconPassed.retired': alpha(semantic.success, '50'),
  'testing.iconQueued.retired': alpha(semantic.warning, '50'),
  'testing.iconUnset.retired': alpha(text.tertiary, '50'),
  'testing.iconSkipped.retired': alpha(text.tertiary, '50'),
  'testing.runAction': semantic.success,
  'testing.peekBorder': alpha(accent.primary, '60'),
  'testing.peekHeaderBackground': bg.surface,
  'testing.message.error.lineBackground': alpha(semantic.error, '10'),
  'testing.message.error.badgeBackground': alpha(semantic.error, '20'),
  'testing.message.error.badgeBorder': semantic.error,
  'testing.message.error.badgeForeground': semantic.error,
  'testing.message.info.decorationForeground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'testing.message.info.lineBackground': alpha(accent.primary, '10'),
  'testing.messagePeekBorder': accent.primary,
  'testing.messagePeekHeaderBackground': bg.base,
  'testing.coveredBackground': alpha(semantic.success, '10'),
  'testing.coveredBorder': alpha(semantic.success, '35'),
  'testing.coveredGutterBackground': alpha(semantic.success, '25'),
  'testing.uncoveredBranchBackground': alpha(semantic.error, '15'),
  'testing.uncoveredBackground': alpha(semantic.error, '10'),
  'testing.uncoveredBorder': alpha(semantic.error, '35'),
  'testing.uncoveredGutterBackground': alpha(semantic.error, '25'),
  'testing.coverCountBadgeBackground': alpha(accent.primary, '20'),
  'testing.coverCountBadgeForeground': accent.bright,

  // ==========================================================================
  // WELCOME PAGE
  // ==========================================================================
  'welcomePage.background': bg.base,
  'welcomePage.tileBackground': bg.surface,
  'welcomePage.tileHoverBackground': alpha(accent.primary, '12'),
  'welcomePage.tileBorder': alpha(accent.primary, '25'),
  'welcomePage.progress.foreground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'welcomePage.progress.background': bg.elevated,
  'walkThrough.embeddedEditorBackground': bg.base,
  'walkthrough.stepTitle.foreground': accent.bright,

  // ==========================================================================
  // EXTENSION BUTTONS
  // ==========================================================================
  'extensionButton.prominentBackground': '#157570',  // Darker teal for Lc 75+ with white
  'extensionButton.prominentForeground': themeColors.ui.pureWhite,
  'extensionButton.prominentHoverBackground': accent.primary,
  'extensionButton.background': alpha(accent.primary, '25'),
  'extensionButton.foreground': text.primary,
  'extensionButton.hoverBackground': alpha(accent.primary, '40'),
  'extensionButton.separator': alpha(text.primary, '30'),
  'extensionBadge.remoteBackground': accent.soft,  // #B2EBE7 - Light teal
  'extensionBadge.remoteForeground': bg.void,     // #0A0D10 - Dark text on light
  'extensionIcon.starForeground': semantic.warning,
  'extensionIcon.verifiedForeground': semantic.success,
  // Lavender (Digital Stars) reads as "experimental" and separates from sponsor magenta
  'extensionIcon.preReleaseForeground': digitalStars.y2021.outfit.gradient,
  'extensionIcon.sponsorForeground': accent.magenta,
  'extensionIcon.privateForeground': themeColors.symbol.enumerator,
  'mcpIcon.starForeground': semantic.warning,

  // ==========================================================================
  // BANNER
  // ==========================================================================
  'banner.background': alpha(accent.primary, '20'),
  'banner.foreground': text.primary,
  'banner.iconForeground': accent.primary,

  // ==========================================================================
  // INPUT & FORMS
  // ==========================================================================
  'input.background': bg.elevated,
  'input.foreground': text.primary,
  'input.border': alpha(accent.primary, '35'),
  'input.placeholderForeground': text.placeholder,  // #5A6A70 - Lc 25+ for visible placeholder
  'inputOption.activeBorder': accent.bright,
  'inputOption.activeBackground': alpha(accent.primary, '25'),
  'inputOption.activeForeground': text.primary,
  'inputOption.hoverBackground': alpha(accent.primary, '15'),
  'inputValidation.errorBackground': alpha(semantic.error, '20'),
  'inputValidation.errorForeground': text.primary,          // #E8EEF2 - High contrast on dark overlay
  'inputValidation.errorBorder': semantic.error,
  'inputValidation.warningBackground': alpha(semantic.warning, '20'),
  'inputValidation.warningForeground': text.primary,        // #E8EEF2 - High contrast on dark overlay
  'inputValidation.warningBorder': semantic.warning,
  'inputValidation.infoBackground': alpha(semantic.info, '20'),
  'inputValidation.infoForeground': text.primary,           // #E8EEF2 - High contrast on dark overlay
  'inputValidation.infoBorder': semantic.info,

  // Dropdown
  'dropdown.background': bg.elevated,
  'dropdown.foreground': text.primary,
  'dropdown.border': alpha(accent.primary, '35'),
  'dropdown.listBackground': bg.elevated,

  // Button - use darker teal for better contrast
  'button.background': '#157570',  // Darker teal for Lc 75+ with white
  'button.foreground': themeColors.ui.pureWhite,
  'button.border': alpha(accent.bright, '50'),
  'button.separator': alpha(themeColors.ui.pureWhite, '30'),
  'button.hoverBackground': accent.primary,    // Brighter on hover
  'button.secondaryForeground': text.primary,
  'button.secondaryBackground': alpha(accent.primary, '25'),
  'button.secondaryHoverBackground': alpha(accent.primary, '40'),

  // Checkbox - use brighter foreground
  'checkbox.background': bg.elevated,
  'checkbox.foreground': accent.bright,        // #5DE4DB - Bright teal (Lc 80+)
  'checkbox.border': alpha(accent.primary, '50'),
  'checkbox.selectBackground': alpha(accent.primary, '25'),
  'checkbox.selectBorder': accent.bright,
  'checkbox.disabled.background': alpha(bg.surface, '50'),
  'checkbox.disabled.foreground': text.disabled,

  // Radio buttons
  'radio.activeForeground': text.primary,
  'radio.activeBackground': accent.primary,
  'radio.activeBorder': accent.bright,
  'radio.inactiveForeground': text.secondary,
  'radio.inactiveBackground': bg.elevated,
  'radio.inactiveBorder': alpha(accent.primary, '40'),
  'radio.inactiveHoverBackground': alpha(accent.primary, '15'),

  // ==========================================================================
  // BADGE
  // ==========================================================================
  'badge.foreground': bg.void,
  'badge.background': accent.soft,

  // ==========================================================================
  // PROGRESS BAR
  // ==========================================================================
  'progressBar.background': accent.primary,

  // ==========================================================================
  // TOOLBAR
  // ==========================================================================
  'toolbar.hoverBackground': alpha(accent.primary, '15'),
  'toolbar.hoverOutline': alpha(accent.primary, '30'),
  'toolbar.activeBackground': alpha(accent.primary, '25'),

  // ==========================================================================
  // ACTION BAR
  // ==========================================================================
  'actionBar.toggledBackground': alpha(accent.primary, '25'),

  // ==========================================================================
  // PROFILE BADGE
  // ==========================================================================
  'profileBadge.background': accent.primary,    // #39C5BB - Teal
  // Avoid halation on dark activity bar background
  'profileBadge.foreground': text.primary,
  'profiles.sashBorder': alpha(accent.primary, '30'),

  // ==========================================================================
  // NOTEBOOK
  // ==========================================================================
  'notebook.editorBackground': bg.surface,
  'notebook.cellBorderColor': alpha(accent.primary, '25'),
  'notebook.cellHoverBackground': alpha(accent.primary, '08'),
  'notebook.cellInsertionIndicator': accent.bright,
  'notebook.cellStatusBarItemHoverBackground': alpha(accent.primary, '15'),
  'notebook.cellToolbarSeparator': alpha(accent.primary, '25'),
  'notebook.cellEditorBackground': bg.base,
  'notebook.focusedCellBackground': alpha(accent.primary, '08'),
  'notebook.focusedCellBorder': accent.bright,
  'notebook.focusedEditorBorder': alpha(accent.bright, 'CC'),
  'notebook.inactiveFocusedCellBorder': alpha(accent.primary, '50'),
  'notebook.inactiveSelectedCellBorder': alpha(accent.primary, '40'),
  'notebook.outputContainerBackgroundColor': bg.base,
  'notebook.outputContainerBorderColor': alpha(accent.primary, '20'),
  'notebook.selectedCellBackground': alpha(accent.primary, '12'),
  'notebook.selectedCellBorder': alpha(accent.primary, '50'),
  'notebook.symbolHighlightBackground': alpha(accent.primary, '15'),
  'notebookScrollbarSlider.activeBackground': alpha(accent.primary, '55'),
  'notebookScrollbarSlider.background': alpha(accent.primary, '25'),
  'notebookScrollbarSlider.hoverBackground': alpha(accent.primary, '40'),
  'notebookStatusErrorIcon.foreground': semantic.error,
  'notebookStatusRunningIcon.foreground': semantic.warning,
  'notebookStatusSuccessIcon.foreground': semantic.success,
  'notebookEditorOverviewRuler.runningCellForeground': semantic.warning,
  'interactive.activeCodeBorder': alpha(accent.bright, '60'),
  'interactive.inactiveCodeBorder': alpha(accent.primary, '30'),

  // ==========================================================================
  // SYMBOL ICONS - All Lc 75+ for visibility, ΔE 15+ between similar types
  // ==========================================================================
  'symbolIcon.arrayForeground': themeColors.symbol.array,
  'symbolIcon.booleanForeground': themeColors.symbol.boolean,
  'symbolIcon.classForeground': themeColors.syntax.class,
  'symbolIcon.colorForeground': accent.magenta,
  'symbolIcon.constantForeground': themeColors.symbol.constant,  // Orchid-pink (320°)
  'symbolIcon.constructorForeground': themeColors.symbol.constructor,
  'symbolIcon.enumeratorForeground': themeColors.symbol.enumerator,  // Purple (280°) DISTINCT from interface
  'symbolIcon.enumeratorMemberForeground': themeColors.symbol.enumeratorMember,
  'symbolIcon.eventForeground': themeColors.semantic.info,
  'symbolIcon.fieldForeground': themeColors.symbol.field,  // Warm amber (40°) DISTINCT from property
  'symbolIcon.fileForeground': text.primary,
  'symbolIcon.folderForeground': themeColors.symbol.folder,  // Miku teal (170°)
  'symbolIcon.functionForeground': themeColors.symbol.function,
  'symbolIcon.interfaceForeground': themeColors.symbol.interface,  // Sky blue (220°) DISTINCT from enum
  'symbolIcon.keyForeground': themeColors.syntax.function,
  'symbolIcon.keywordForeground': themeColors.syntax.tag,
  'symbolIcon.methodForeground': themeColors.symbol.method,
  'symbolIcon.moduleForeground': themeColors.symbol.module,  // Purple (275°) DISTINCT from namespace
  'symbolIcon.namespaceForeground': themeColors.symbol.namespace,  // Lavender (290°)
  'symbolIcon.nullForeground': text.tertiary,
  'symbolIcon.numberForeground': themeColors.symbol.number,  // Periwinkle (230°) DISTINCT from boolean
  'symbolIcon.objectForeground': themeColors.syntax.typeParameter,
  'symbolIcon.operatorForeground': themeColors.syntax.keyword,
  'symbolIcon.packageForeground': themeColors.symbol.package,  // Soft purple (260°) DISTINCT from folder
  'symbolIcon.propertyForeground': themeColors.symbol.property,  // Coral (10°) DISTINCT from field
  'symbolIcon.referenceForeground': themeColors.symbol.reference,
  'symbolIcon.snippetForeground': themeColors.symbol.snippet,
  'symbolIcon.stringForeground': themeColors.symbol.string,
  'symbolIcon.structForeground': themeColors.symbol.struct,  // Ice cyan (200°) DISTINCT from interface
  'symbolIcon.textForeground': text.primary,
  'symbolIcon.typeParameterForeground': themeColors.symbol.typeParameter,  // Rose (340°) DISTINCT from namespace
  'symbolIcon.unitForeground': accent.magenta,
  'symbolIcon.variableForeground': themeColors.symbol.variable,

  // ==========================================================================
  // INLINE CHAT
  // ==========================================================================
  'inlineChat.background': alpha(bg.elevated, 'F8'),
  'inlineChat.foreground': text.primary,
  'inlineChat.border': alpha(accent.bright, '50'),
  'inlineChat.shadow': alpha(bg.void, '60'),
  'inlineChatInput.background': bg.elevated,
  'inlineChatInput.border': alpha(accent.primary, '40'),
  'inlineChatInput.focusBorder': accent.bright,
  'inlineChatInput.placeholderForeground': text.placeholder,  // #5A6A70 - Lc 25+
  'inlineChatDiff.inserted': alpha(semantic.success, '20'),
  'inlineChatDiff.removed': alpha(semantic.error, '20'),

  // ==========================================================================
  // CHAT
  // ==========================================================================
  'chat.requestBackground': bg.base,
  'chat.requestBorder': alpha(accent.primary, '25'),
  'chat.slashCommandBackground': alpha(accent.bright, '20'),
  'chat.slashCommandForeground': accent.bright,
  'chat.avatarBackground': alpha(accent.primary, '25'),
  'chat.avatarForeground': accent.bright,
  'chat.editedFileForeground': themeColors.syntax.skyBlue,  // #C0E0FF - Lc 88 for sidebar visibility
  'chat.linesAddedForeground': semantic.success,   // #90F0B8 - Mint green
  'chat.linesRemovedForeground': semantic.error,   // #FF9999 - Full opacity coral
  'chat.requestCodeBorder': alpha(accent.bright, '35'),
  'chat.requestBubbleBackground': alpha(accent.primary, '12'),
  'chat.requestBubbleHoverBackground': alpha(accent.primary, '20'),
  'chat.checkpointSeparator': alpha(accent.primary, '25'),
  'chatManagement.sashBorder': alpha(accent.primary, '30'),

  // ==========================================================================
  // INLINE EDIT
  // ==========================================================================
  'inlineEdit.gutterIndicator.primaryBorder': accent.bright,
  'inlineEdit.gutterIndicator.primaryForeground': accent.bright,
  'inlineEdit.gutterIndicator.primaryBackground': alpha(accent.bright, '15'),
  'inlineEdit.gutterIndicator.secondaryBorder': alpha(accent.primary, '50'),
  'inlineEdit.gutterIndicator.secondaryForeground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'inlineEdit.gutterIndicator.secondaryBackground': alpha(accent.primary, '10'),
  'inlineEdit.gutterIndicator.successfulBorder': semantic.success,
  'inlineEdit.gutterIndicator.successfulForeground': semantic.success,
  'inlineEdit.gutterIndicator.successfulBackground': alpha(semantic.success, '15'),
  'inlineEdit.gutterIndicator.background': bg.elevated,
  'inlineEdit.originalBackground': alpha(bg.overlay, '08'),
  'inlineEdit.modifiedBackground': alpha(accent.primary, '10'),
  'inlineEdit.originalChangedLineBackground': alpha(semantic.error, '08'),
  'inlineEdit.originalChangedTextBackground': alpha(semantic.error, '20'),
  'inlineEdit.modifiedChangedLineBackground': alpha(semantic.success, '08'),
  'inlineEdit.modifiedChangedTextBackground': alpha(semantic.success, '20'),
  'inlineEdit.originalBorder': alpha(bg.overlay, '40'),
  'inlineEdit.modifiedBorder': alpha(accent.bright, '40'),
  'inlineEdit.tabWillAcceptModifiedBorder': alpha(semantic.success, '50'),
  'inlineEdit.tabWillAcceptOriginalBorder': alpha(semantic.error, '50'),

  // ==========================================================================
  // EDITOR ACTION LIST
  // ==========================================================================
  'editorActionList.background': bg.elevated,
  'editorActionList.foreground': text.primary,
  'editorActionList.focusForeground': text.primary,
  'editorActionList.focusBackground': alpha(accent.primary, '25'),

  // ==========================================================================
  // PORTS
  // ==========================================================================
  'ports.iconRunningProcessForeground': semantic.success,

  // ==========================================================================
  // COMMENTS VIEW
  // ==========================================================================
  'commentsView.resolvedIcon': semantic.success,
  'commentsView.unresolvedIcon': semantic.warning,
  'editorCommentsWidget.resolvedBorder': alpha(semantic.success, '50'),
  'editorCommentsWidget.unresolvedBorder': alpha(semantic.warning, '50'),
  'editorCommentsWidget.rangeBackground': alpha(accent.primary, '08'),
  'editorCommentsWidget.rangeActiveBackground': alpha(accent.primary, '15'),
  'editorCommentsWidget.replyInputBackground': bg.elevated,

  // ==========================================================================
  // SIMPLE FIND WIDGET
  // ==========================================================================
  'simpleFindWidget.sashBorder': alpha(accent.primary, '30'),

  // ==========================================================================
  // CHARTS
  // ==========================================================================
  // Charts - Magical Mirai concert evolution
  'charts.foreground': text.primary,
  'charts.lines': alpha(accent.primary, '50'),
  'charts.red': magicalMirai.y2014.accessories.ribbonWire,     // 2014 hot pink
  'charts.blue': magicalMirai.y2013.outfit.dress,              // 2013 royal blue
  'charts.yellow': magicalMirai.y2013.accessories.wandGold,    // Concert gold
  'charts.orange': wonderlandsShowtime.unitColor,               // Stage orange
  'charts.green': magicalMirai.y2013.accessories.wandOrb,      // 2013 emerald
  'charts.purple': nightcord.unitColor,                         // Nightcord purple
  'chart.line': accent.primary,
  'chart.axis': text.tertiary,
  'chart.guide': alpha(accent.primary, '25'),

  // ==========================================================================
  // GAUGE
  // ==========================================================================
  'gauge.background': bg.elevated,
  'gauge.foreground': semantic.info, // #5DE4DB - Bright teal (Lc 74)
  'gauge.border': alpha(accent.primary, '30'),
  'gauge.warningBackground': alpha(semantic.warning, '20'),
  'gauge.warningForeground': semantic.warning,
  'gauge.errorBackground': alpha(semantic.error, '20'),
  'gauge.errorForeground': semantic.error,

  // ==========================================================================
  // MARKDOWN ALERTS - ΔE 15+ between note and tip
  // ==========================================================================
  'markdownAlert.note.foreground': themeColors.markdown.alertNote,  // #78D8F0 - cyan (195°)
  'markdownAlert.tip.foreground': themeColors.markdown.alertTip,    // #98F0B8 - mint green (145°) ΔE 20+
  'markdownAlert.important.foreground': themeColors.markdown.alertImportant,
  'markdownAlert.warning.foreground': semantic.warning,
  'markdownAlert.caution.foreground': semantic.error,

  // ==========================================================================
  // AGENT SESSION
  // ==========================================================================
  'agentSessionReadIndicator.foreground': accent.bright,
  'agentSessionSelectedBadge.border': accent.primary,
  'agentSessionSelectedUnfocusedBadge.border': alpha(accent.primary, '60'),

  // ==========================================================================
  // GENERAL UI - Base values
  // ==========================================================================
  'focusBorder': alpha(accent.bright, 'DD'),
  'foreground': text.primary,
  'disabledForeground': text.disabled,
  'selection.background': alpha(accent.primary, '35'),
  'descriptionForeground': text.secondary,
  'errorForeground': semantic.error,
  'icon.foreground': text.secondary,
  'sash.hoverBorder': alpha(accent.magenta, '80'),

  // ==========================================================================
  // TEXT BLOCKS
  // ==========================================================================
  'textBlockQuote.background': alpha(accent.primary, '10'),
  'textBlockQuote.border': alpha(accent.primary, '40'),
  'textCodeBlock.background': alpha(bg.surface, '80'),
  'textLink.activeForeground': themeColors.ui.linkActive,
  'textLink.foreground': accent.bright,
  'textPreformat.foreground': accent.soft,
  'textPreformat.background': alpha(bg.surface, '60'),
  'textPreformat.border': alpha(accent.primary, '30'),
  'textSeparator.foreground': alpha(accent.primary, '40'),
};

export type WorkbenchColors = typeof workbenchColors;
