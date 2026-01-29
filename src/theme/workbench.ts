/**
 * Workbench Colors - VS Code UI Theme
 *
 * Design Philosophy: "Miku's Essence" - The IDE IS Miku
 * - Editor: mikuAppend.bodysuit.base (#1A1A1A) - Wrapped in her Append suit
 * - Sidebar: character.eyes.pupil (#0D1114) - Looking into her deep gaze
 * - Activity Bar: character.boots.base (#111417) - Standing in her boots
 * - Panel: character.skirt.base (#15191D) - Her pleated skirt
 * - Title Bar: character.headphones.frame (#1A1F24) - Viewing through her headset
 * - Cursor: character.hairTies.outline (#E05096) - Pink hair tie cursor!
 * - Selection: alpha(character.hair.base, '40') - Teal hair flowing
 */

// Core character design
import { character } from '../palette/core';

// Voicebank variants
import { mikuV2, mikuAppend, mikuNT } from '../palette/voicebanks';

// Project SEKAI units
import {
  leoNeed,
  moreMoreJump,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette/games/projectSekai';

// Project DIVA modules
import {
  whiteDress,
  celebration,
  catchTheWave,
  outAndAbout,
  ghost,
  marionette,
  supreme,
  factoryTyrant,
  angel,
} from '../palette/games/projectDiva';

// Snow Miku - seasonal colors
import { snowMiku } from '../palette/events/snowMiku';

// Derivatives
import {
  sakuraMiku,
  miku15thAnniversary,
  gundam45thMiku,
} from '../palette/derivatives';

/**
 * Alpha utility - adds alpha channel to hex color
 * @param hex - 6-digit hex color (e.g., '#39C5BB')
 * @param opacity - 2-digit hex opacity (e.g., '40' for 25%)
 */
const alpha = (hex: string, opacity: string): string => `${hex}${opacity}`;

export const workbenchColors = {
  // ==========================================================================
  // EDITOR - Append Bodysuit (Futuristic Dark)
  // ==========================================================================
  'editor.background': mikuAppend.bodysuit.base,      // #1A1A1A - wrapped in her suit
  'editor.foreground': snowMiku.y2010.hair,           // #E0EEF5 - snow silver text
  'editorCursor.foreground': character.hairTies.outline, // #E05096 - PINK HAIR TIE CURSOR!
  'editorCursor.background': mikuAppend.bodysuit.base,
  'editorMultiCursor.primary.foreground': character.hairTies.outline,
  'editorMultiCursor.primary.background': mikuAppend.bodysuit.base,
  'editorMultiCursor.secondary.foreground': character.headphones.cushion,
  'editorMultiCursor.secondary.background': mikuAppend.bodysuit.base,
  'editor.lineHighlightBackground': alpha(character.marks.tattoo, '15'), // "01" tattoo glow
  'editor.lineHighlightBorder': alpha(character.marks.tattoo, '30'),
  'editor.selectionBackground': alpha(character.hair.base, '40'),        // Teal hair selection
  'editor.selectionHighlightBackground': alpha(character.hair.base, '25'),
  'editor.selectionHighlightBorder': alpha(character.hair.base, '50'),
  'editor.wordHighlightBackground': alpha(character.hair.highlight, '20'),
  'editor.wordHighlightBorder': alpha(character.hair.highlight, '40'),
  'editor.wordHighlightStrongBackground': alpha(character.hair.highlight, '30'),
  'editor.wordHighlightStrongBorder': alpha(character.hair.highlight, '60'),
  'editor.findMatchBackground': alpha(snowMiku.y2017.accessories.stars, '60'), // Gold match
  'editor.findMatchBorder': alpha(snowMiku.y2017.accessories.stars, '90'),
  'editor.findMatchHighlightBackground': alpha(snowMiku.y2017.accessories.stars, '40'),
  'editor.findMatchHighlightBorder': alpha(snowMiku.y2017.accessories.stars, '70'),
  'editor.rangeHighlightBackground': alpha(character.hair.base, '10'),
  'editor.rangeHighlightBorder': alpha(character.hair.base, '30'),
  'editorLineNumber.foreground': mikuNT.hair.shadow,   // #5C5A60 subdued
  'editorLineNumber.activeForeground': character.marks.tattoo, // #E60033 - "01" mark
  'editorLineNumber.dimmedForeground': alpha(mikuNT.hair.shadow, '60'),

  // Indent Guides - Audio Spectrum (SEKAI colors)
  'editorIndentGuide.background1': alpha(character.hair.base, '30'),           // Bass (teal)
  'editorIndentGuide.background2': alpha(leoNeed.unitColor, '35'),             // Low-mid (blue)
  'editorIndentGuide.background3': alpha(moreMoreJump.unitColor, '40'),        // Mid (green)
  'editorIndentGuide.background4': alpha(snowMiku.y2017.accessories.stars, '45'), // Mid-high (gold)
  'editorIndentGuide.background5': alpha(wonderlandsShowtime.unitColor, '50'), // High (orange)
  'editorIndentGuide.background6': alpha(character.headphones.cushion, '55'),  // Treble (magenta)
  // Active guides glow brighter
  'editorIndentGuide.activeBackground1': alpha(character.hair.base, '90'),
  'editorIndentGuide.activeBackground2': alpha(leoNeed.unitColor, '90'),
  'editorIndentGuide.activeBackground3': alpha(moreMoreJump.unitColor, '90'),
  'editorIndentGuide.activeBackground4': alpha(snowMiku.y2017.accessories.stars, '90'),
  'editorIndentGuide.activeBackground5': alpha(wonderlandsShowtime.unitColor, '90'),
  'editorIndentGuide.activeBackground6': alpha(character.headphones.cushion, '90'),

  'editorRuler.foreground': alpha(character.hair.base, '40'),
  'editorWhitespace.foreground': alpha(mikuNT.hair.shadow, '40'),

  // Bracket Matching & Highlighting - Celebration Rainbow
  'editorBracketMatch.background': alpha(character.hair.base, '25'),
  'editorBracketMatch.border': character.hair.base,
  'editorBracketHighlight.foreground1': moreMoreJump.unitColor,        // #88DD44 green
  'editorBracketHighlight.foreground2': catchTheWave.makeup.eyeshadow, // #FF69B4 hot pink
  'editorBracketHighlight.foreground3': outAndAbout.accessories.badgeCube, // #00BFFF cerulean
  'editorBracketHighlight.foreground4': character.negi.bright,          // #69F0AE
  'editorBracketHighlight.foreground5': wonderlandsShowtime.unitColor,  // #FF9900
  'editorBracketHighlight.foreground6': ghost.hair.base,                // #9370DB
  'editorBracketHighlight.unexpectedBracket.foreground': character.marks.tattoo,
  'editorBracketPairGuide.background1': alpha(moreMoreJump.unitColor, '25'),
  'editorBracketPairGuide.background2': alpha(catchTheWave.makeup.eyeshadow, '25'),
  'editorBracketPairGuide.background3': alpha(outAndAbout.accessories.badgeCube, '25'),
  'editorBracketPairGuide.background4': alpha(character.negi.bright, '25'),
  'editorBracketPairGuide.background5': alpha(wonderlandsShowtime.unitColor, '25'),
  'editorBracketPairGuide.background6': alpha(ghost.hair.base, '25'),
  'editorBracketPairGuide.activeBackground1': alpha(moreMoreJump.unitColor, '50'),
  'editorBracketPairGuide.activeBackground2': alpha(catchTheWave.makeup.eyeshadow, '50'),
  'editorBracketPairGuide.activeBackground3': alpha(outAndAbout.accessories.badgeCube, '50'),
  'editorBracketPairGuide.activeBackground4': alpha(character.negi.bright, '50'),
  'editorBracketPairGuide.activeBackground5': alpha(wonderlandsShowtime.unitColor, '50'),
  'editorBracketPairGuide.activeBackground6': alpha(ghost.hair.base, '50'),

  // Editor Gutter - Git Status (Character Story)
  'editorGutter.addedBackground': alpha(character.negi.bright, '80'),     // Fresh green onion growth
  'editorGutter.modifiedBackground': alpha(character.armDisplay.data, '80'), // #5DE4DB data changing
  'editorGutter.deletedBackground': alpha(character.marks.tattoo, '80'), // Red mark (removal)
  'editorGutter.foldingControlForeground': alpha(character.hair.base, 'BB'),
  'editorGutter.background': mikuAppend.bodysuit.base,
  'editorGutter.commentRangeForeground': alpha(mikuNT.hair.shadow, '40'),
  'editorGutter.commentGlyphForeground': character.hair.base,
  'editorGutter.commentUnresolvedGlyphForeground': miku15thAnniversary.hair.ribbons,

  // Editor Widget
  'editorWidget.background': character.skirt.base,    // #15191D
  'editorWidget.foreground': snowMiku.y2010.hair,
  'editorWidget.border': alpha(character.hair.base, '80'),
  'editorWidget.resizeBorder': alpha(character.hair.base, '80'),
  'editorHoverWidget.background': alpha(character.skirt.base, 'F5'),
  'editorHoverWidget.border': alpha(character.hair.base, '70'),
  'editorHoverWidget.foreground': snowMiku.y2010.hair,
  'editorHoverWidget.highlightForeground': character.hair.highlight,
  'editorHoverWidget.statusBarBackground': character.top.shadow,
  'editorUnnecessaryCode.opacity': alpha('#000000', '80'),
  'editorGhostText.foreground': alpha(mikuNT.hair.base, 'BB'),
  'editorGhostText.border': alpha(character.hair.base, '40'),
  'editorGhostText.background': alpha(character.hair.base, '0A'),
  'editor.linkedEditingBackground': alpha(character.hairTies.outline, '20'),

  // Editor Overview Ruler
  'editorOverviewRuler.bracketMatchForeground': alpha(character.hair.base, 'A0'),
  'editorOverviewRuler.wordHighlightForeground': alpha(character.hair.highlight, '80'),
  'editorOverviewRuler.wordHighlightStrongForeground': alpha(character.hair.highlight, '90'),
  'editorOverviewRuler.wordHighlightTextForeground': alpha(character.hair.highlight, '60'),
  'editorOverviewRuler.findMatchForeground': alpha(snowMiku.y2017.accessories.stars, '90'),
  'editorOverviewRuler.selectionHighlightForeground': alpha(character.hair.base, '50'),
  'editorOverviewRuler.infoForeground': character.hair.base,
  'editorOverviewRuler.warningForeground': miku15thAnniversary.hair.ribbons, // #FF6B6B
  'editorOverviewRuler.errorForeground': character.marks.tattoo,
  'editorOverviewRuler.background': mikuAppend.bodysuit.base,
  'editorOverviewRuler.border': alpha(character.skirt.base, '20'),
  'editorOverviewRuler.modifiedForeground': alpha(character.armDisplay.data, '90'),
  'editorOverviewRuler.addedForeground': alpha(character.negi.bright, '90'),
  'editorOverviewRuler.deletedForeground': alpha(character.marks.tattoo, '90'),

  'editorLink.activeForeground': character.hair.highlight,
  'editorCodeLens.foreground': alpha(mikuNT.hair.shadow, 'CC'),

  // ==========================================================================
  // ACTIVITY BAR - Standing in Her Boots
  // ==========================================================================
  'activityBar.background': character.boots.base,      // #111417 - boot leather
  'activityBar.foreground': mikuNT.hair.base,          // #89CDC6 - soft glow
  'activityBar.activeBorder': character.hairTies.outline, // #E05096 - pink accent
  'activityBar.activeBackground': alpha(character.hairTies.outline, '20'),
  'activityBar.inactiveForeground': alpha(mikuNT.hair.base, '60'),
  'activityBar.border': alpha(character.skirt.base, '60'),
  'activityBarBadge.background': character.marks.tattoo, // #E60033 - "01" red
  'activityBarBadge.foreground': whiteDress.outfit.dress,
  'activityBarTop.foreground': mikuNT.hair.base,
  'activityBarTop.activeBorder': character.hairTies.outline,
  'activityBarTop.inactiveForeground': alpha(mikuNT.hair.base, '60'),
  'activityBar.activeFocusBorder': character.hair.base,
  'activityBar.dropBorder': alpha(character.hairTies.outline, '60'),
  'activityBarTop.activeBackground': alpha(character.hairTies.outline, '20'),
  'activityBarTop.background': character.boots.base,
  'activityBarTop.dropBorder': alpha(character.hairTies.outline, '60'),
  'activityWarningBadge.foreground': whiteDress.outfit.dress,
  'activityWarningBadge.background': miku15thAnniversary.hair.ribbons,
  'activityErrorBadge.foreground': whiteDress.outfit.dress,
  'activityErrorBadge.background': character.marks.tattoo,

  // ==========================================================================
  // SIDEBAR - Looking Into Her Eyes
  // ==========================================================================
  'sideBar.background': character.eyes.pupil,          // #0D1114 - deep gaze
  'sideBar.foreground': character.hair.highlight,      // #5DE4DB - eye sparkle
  'sideBar.border': alpha(character.skirt.base, '50'),
  'sideBar.dropBackground': alpha(character.hair.base, '20'),
  'sideBarSectionHeader.background': character.skirt.base, // #15191D
  'sideBarSectionHeader.foreground': character.hair.base,
  'sideBarSectionHeader.border': alpha(character.skirt.base, '25'),
  'sideBarTitle.foreground': character.hair.base,      // #39C5BB - iris color
  'sideBarTitle.background': character.eyes.pupil,
  'sideBarTitle.border': alpha(character.skirt.base, '15'),
  'sideBarStickyScroll.background': character.eyes.pupil,
  'sideBarStickyScroll.border': alpha(character.skirt.base, '20'),
  'sideBarStickyScroll.shadow': alpha(character.eyes.pupil, '50'),
  'sideBarActivityBarTop.border': alpha(character.skirt.base, '15'),

  // ==========================================================================
  // STATUS BAR - Her Grey Top
  // ==========================================================================
  'statusBar.background': character.top.shadow,        // #263238 - sleeveless top
  'statusBar.foreground': character.hair.base,         // #39C5BB - teal trim
  'statusBar.border': alpha(character.skirt.base, '70'),
  'statusBar.debuggingBackground': character.marks.tattoo, // #E60033 - alert red
  'statusBar.debuggingForeground': whiteDress.outfit.dress,
  'statusBar.debuggingBorder': character.marks.tattoo,
  'statusBar.noFolderBackground': character.top.main,   // #37474F
  'statusBar.noFolderForeground': mikuNT.hair.base,
  'statusBar.noFolderBorder': alpha(character.skirt.base, '40'),
  'statusBarItem.remoteBackground': character.hairTies.outline, // #E05096 pink
  'statusBarItem.remoteForeground': whiteDress.outfit.dress,
  'statusBarItem.remoteHoverBackground': character.headphones.cushion,
  'statusBarItem.remoteHoverForeground': whiteDress.outfit.dress,
  'statusBarItem.hoverBackground': alpha(character.hair.base, '20'),
  'statusBarItem.hoverForeground': character.hair.highlight,
  'statusBarItem.activeBackground': alpha(character.hair.base, '40'),
  'statusBarItem.errorBackground': character.marks.tattoo,
  'statusBarItem.errorForeground': whiteDress.outfit.dress,
  'statusBarItem.errorHoverBackground': alpha(character.marks.tattoo, 'CC'),
  'statusBarItem.errorHoverForeground': whiteDress.outfit.dress,
  'statusBarItem.warningBackground': character.skin.blush, // #FFB8C8 blush
  'statusBarItem.warningForeground': mikuAppend.bodysuit.base,
  'statusBarItem.warningHoverBackground': alpha(character.skin.blush, 'CC'),
  'statusBarItem.warningHoverForeground': mikuAppend.bodysuit.base,
  'statusBarItem.prominentBackground': alpha(character.hair.base, '25'),
  'statusBarItem.prominentForeground': character.hair.highlight,
  'statusBarItem.prominentHoverBackground': alpha(character.hair.base, '40'),
  'statusBarItem.prominentHoverForeground': character.hair.bright,
  'statusBarItem.compactHoverBackground': alpha(character.hair.base, '30'),
  'statusBarItem.focusBorder': alpha(character.hair.base, 'DD'),
  'statusBar.focusBorder': alpha(character.hair.base, 'DD'),
  'statusBarItem.offlineBackground': nightcord.unitColor,
  'statusBarItem.offlineForeground': whiteDress.outfit.dress,
  'statusBarItem.offlineHoverBackground': alpha(nightcord.unitColor, 'CC'),
  'statusBarItem.offlineHoverForeground': whiteDress.outfit.dress,

  // ==========================================================================
  // TITLE BAR - Viewing Through Her Headset
  // ==========================================================================
  'titleBar.activeBackground': character.headphones.frame,   // #1A1F24 - tech equipment
  'titleBar.activeForeground': character.hair.base,
  'titleBar.inactiveBackground': character.headphones.frame,
  'titleBar.inactiveForeground': alpha(mikuNT.hair.base, '70'),
  'titleBar.border': alpha(character.skirt.base, '30'),
  'menubar.selectionForeground': character.hair.highlight,
  'menubar.selectionBackground': alpha(character.hair.base, '30'),
  'menubar.selectionBorder': alpha(character.hair.base, '60'),

  // ==========================================================================
  // TABS - Headphone Display
  // ==========================================================================
  'tab.activeBackground': character.headphones.frame,   // #1A1F24 - active screen
  'tab.activeForeground': character.headphones.display, // #39C5BB - "01" display
  'tab.activeBorderTop': character.hairTies.outline,    // #E05096 - pink indicator
  'tab.activeBorder': alpha(character.hair.base, '40'),
  'tab.inactiveBackground': mikuAppend.bodysuit.base,   // #1A1A1A
  'tab.inactiveForeground': mikuNT.hair.shadow,         // #5C5A60
  'tab.border': character.boots.base,
  'tab.hoverBackground': character.top.main,            // #37474F
  'tab.hoverForeground': character.hair.highlight,      // #5DE4DB shimmer
  'tab.hoverBorder': alpha(character.hair.base, '40'),
  'tab.unfocusedActiveBackground': character.headphones.frame,
  'tab.unfocusedActiveForeground': mikuNT.hair.base,
  'tab.unfocusedActiveBorderTop': alpha(character.hairTies.outline, '80'),
  'tab.unfocusedActiveBorder': alpha(character.hair.base, '40'),
  'tab.unfocusedInactiveBackground': mikuAppend.bodysuit.base,
  'tab.unfocusedInactiveForeground': alpha(mikuNT.hair.shadow, '80'),
  'tab.unfocusedHoverBackground': alpha(character.top.main, '80'),
  'tab.unfocusedHoverBorder': alpha(character.hair.base, '30'),
  'tab.unfocusedHoverForeground': mikuNT.hair.base,
  'tab.lastPinnedBorder': alpha(character.hairTies.outline, '60'),
  'tab.activeModifiedBorder': character.armDisplay.data,
  'tab.inactiveModifiedBorder': alpha(character.armDisplay.data, '60'),
  'tab.unfocusedActiveModifiedBorder': alpha(character.armDisplay.data, '80'),
  'tab.unfocusedInactiveModifiedBorder': alpha(character.armDisplay.data, '40'),
  'tab.dragAndDropBorder': alpha(character.hairTies.outline, '60'),
  'tab.selectedBackground': character.headphones.frame,
  'tab.selectedForeground': character.hair.highlight,
  'tab.selectedBorderTop': character.hairTies.outline,
  'editorGroupHeader.tabsBackground': mikuAppend.bodysuit.base,
  'editorGroupHeader.tabsBorder': alpha(character.skirt.base, '15'),
  'editorGroupHeader.noTabsBackground': mikuAppend.bodysuit.base,
  'editorGroupHeader.border': alpha(character.skirt.base, '20'),
  'editorGroup.border': alpha(character.skirt.base, '60'),
  'editorGroup.dropBackground': alpha(character.hair.base, '40'),
  'editorGroup.dropIntoPromptForeground': snowMiku.y2010.hair,
  'editorGroup.dropIntoPromptBackground': alpha(character.skirt.base, 'F0'),
  'editorGroup.dropIntoPromptBorder': alpha(character.hair.base, '50'),
  'editorGroup.emptyBackground': mikuAppend.bodysuit.base,
  'editorGroup.focusedEmptyBorder': alpha(character.hair.base, '40'),
  'editorPane.background': mikuAppend.bodysuit.base,

  // ==========================================================================
  // LISTS - Miku Styling
  // ==========================================================================
  'list.activeSelectionBackground': alpha(character.hair.base, '30'),
  'list.activeSelectionForeground': character.hair.highlight,
  'list.activeSelectionIconForeground': character.hair.highlight,
  'list.inactiveSelectionBackground': alpha(character.hair.base, '20'),
  'list.inactiveSelectionForeground': mikuNT.hair.base,
  'list.inactiveSelectionIconForeground': mikuNT.hair.base,
  'list.hoverBackground': alpha(character.hair.base, '15'),
  'list.hoverForeground': character.hair.highlight,
  'list.focusBackground': alpha(character.hair.base, '25'),
  'list.focusForeground': character.hair.highlight,
  'list.focusOutline': alpha(character.hair.base, 'DD'),
  'list.focusHighlightForeground': character.hair.bright,
  'list.focusAndSelectionOutline': alpha(character.hair.base, '60'),
  'list.highlightForeground': character.hair.bright,
  'list.errorForeground': character.marks.tattoo,
  'list.warningForeground': miku15thAnniversary.hair.ribbons,
  'list.invalidItemForeground': alpha(character.marks.tattoo, '80'),
  'list.deemphasizedForeground': mikuNT.hair.shadow,
  'list.dropBackground': alpha(character.hair.base, '20'),
  'list.dropBetweenBackground': alpha(character.hair.base, '40'),
  'list.inactiveFocusBackground': alpha(character.hair.base, '15'),
  'list.inactiveFocusOutline': alpha(character.hair.base, '30'),
  'list.filterMatchBackground': alpha(snowMiku.y2017.accessories.stars, '25'),
  'list.filterMatchBorder': alpha(snowMiku.y2017.accessories.stars, '50'),
  'listFilterWidget.background': character.skirt.base,
  'listFilterWidget.outline': alpha(character.hair.base, '70'),
  'listFilterWidget.noMatchesOutline': character.marks.tattoo,
  'listFilterWidget.shadow': alpha(character.eyes.pupil, '50'),
  'tree.indentGuidesStroke': alpha(character.hair.base, '40'),
  'tree.inactiveIndentGuidesStroke': alpha(character.hair.base, '15'),
  'tree.tableColumnsBorder': alpha(character.skirt.base, '25'),
  'tree.tableOddRowsBackground': alpha(character.skirt.base, '05'),

  // ==========================================================================
  // GLOBAL UI ELEMENTS
  // ==========================================================================
  'focusBorder': character.hair.base,
  'foreground': snowMiku.y2010.hair,                    // #E0EEF5
  'disabledForeground': mikuNT.hair.shadow,
  'widget.shadow': alpha(character.eyes.pupil, '70'),
  'widget.border': alpha(character.hair.base, '40'),
  'selection.background': alpha(character.hair.base, '40'),
  'descriptionForeground': mikuNT.hair.base,
  'errorForeground': character.marks.tattoo,
  'icon.foreground': character.hair.base,
  'sash.hoverBorder': alpha(character.hair.base, '80'),
  'contrastActiveBorder': alpha(character.hair.base, 'CC'),
  'contrastBorder': alpha(character.hair.base, '60'),
  'window.activeBorder': alpha(character.hair.base, '60'),
  'window.inactiveBorder': alpha(character.hair.base, '30'),

  // ==========================================================================
  // INPUT - Snow Miku Pastisserie
  // ==========================================================================
  'input.background': character.skirt.base,            // #15191D
  'input.foreground': snowMiku.y2010.hair,             // #E0EEF5
  'input.border': alpha(character.hair.base, '50'),
  'input.placeholderForeground': mikuNT.hair.shadow,   // #5C5A60
  'inputOption.activeBorder': character.hair.base,
  'inputOption.activeBackground': alpha(character.hair.base, '30'),
  'inputOption.activeForeground': character.hair.highlight,
  'inputOption.hoverBackground': alpha(character.hair.base, '20'),
  'inputValidation.errorBackground': alpha(character.marks.tattoo, '25'),
  'inputValidation.errorBorder': character.marks.tattoo,
  'inputValidation.errorForeground': snowMiku.y2010.hair,
  'inputValidation.warningBackground': alpha(miku15thAnniversary.hair.ribbons, '25'),
  'inputValidation.warningBorder': miku15thAnniversary.hair.ribbons,
  'inputValidation.warningForeground': snowMiku.y2010.hair,
  'inputValidation.infoBackground': alpha(character.hair.base, '25'),
  'inputValidation.infoBorder': character.hair.base,
  'inputValidation.infoForeground': snowMiku.y2010.hair,

  // ==========================================================================
  // DROPDOWN
  // ==========================================================================
  'dropdown.background': character.skirt.base,
  'dropdown.foreground': snowMiku.y2010.hair,
  'dropdown.border': alpha(character.hair.base, '50'),
  'dropdown.listBackground': character.eyes.pupil,

  // ==========================================================================
  // BUTTONS - Miku Teal Primary
  // ==========================================================================
  'button.background': character.hair.base,            // #39C5BB
  'button.foreground': mikuAppend.bodysuit.base,       // #1A1A1A (dark text on teal button)
  'button.hoverBackground': character.hair.highlight,  // #5DE4DB
  'button.secondaryBackground': leoNeed.unitColor,     // #4455DD
  'button.secondaryForeground': whiteDress.outfit.dress,
  'button.secondaryHoverBackground': alpha(leoNeed.unitColor, 'CC'),
  'button.border': alpha(character.hair.base, '80'),
  'button.separator': alpha(mikuAppend.bodysuit.base, '60'),
  'checkbox.background': character.skirt.base,
  'checkbox.foreground': character.hair.base,
  'checkbox.border': alpha(character.hair.base, '50'),
  'checkbox.selectBackground': alpha(character.hair.base, '30'),
  'checkbox.selectBorder': character.hair.base,
  'checkbox.disabled.background': alpha(character.skirt.base, '20'),
  'checkbox.disabled.foreground': mikuNT.hair.shadow,
  'radio.activeForeground': character.hair.highlight,
  'radio.activeBackground': character.hair.base,
  'radio.activeBorder': character.hair.base,
  'radio.inactiveForeground': mikuNT.hair.base,
  'radio.inactiveBackground': character.skirt.base,
  'radio.inactiveBorder': alpha(character.hair.base, '40'),
  'radio.inactiveHoverBackground': alpha(character.hair.base, '15'),

  // ==========================================================================
  // SCROLLBAR
  // ==========================================================================
  'scrollbar.shadow': alpha(character.eyes.pupil, '50'),
  'scrollbar.background': alpha(mikuAppend.bodysuit.base, '00'),
  'scrollbarSlider.background': alpha(character.hair.base, '40'),
  'scrollbarSlider.hoverBackground': alpha(character.hair.base, '60'),
  'scrollbarSlider.activeBackground': alpha(character.hair.base, '80'),

  // ==========================================================================
  // MINIMAP - Holographic Overview
  // ==========================================================================
  'minimap.background': alpha(character.eyes.pupil, '80'),
  'minimap.findMatchHighlight': alpha(snowMiku.y2017.accessories.stars, 'AA'),
  'minimap.selectionHighlight': alpha(character.hair.base, '88'),
  'minimap.errorHighlight': alpha(character.marks.tattoo, 'DD'),
  'minimap.warningHighlight': alpha(miku15thAnniversary.hair.ribbons, 'BB'),
  'minimap.selectionOccurrenceHighlight': alpha(character.hair.base, '50'),
  'minimap.foregroundOpacity': alpha('#FFFFFF', 'BB'),
  'minimap.infoHighlight': alpha(character.hair.base, '80'),
  'minimap.chatEditHighlight': alpha(character.hair.highlight, '60'),
  'minimapSlider.background': alpha(character.hair.base, '20'),
  'minimapSlider.hoverBackground': alpha(character.hair.base, '40'),
  'minimapSlider.activeBackground': alpha(character.hair.base, '45'),
  'minimapGutter.addedBackground': alpha(character.negi.bright, '90'),
  'minimapGutter.modifiedBackground': alpha(character.armDisplay.data, '90'),
  'minimapGutter.deletedBackground': alpha(character.marks.tattoo, '90'),

  // ==========================================================================
  // BREADCRUMBS
  // ==========================================================================
  'breadcrumb.foreground': mikuNT.hair.base,
  'breadcrumb.background': character.top.main,         // #37474F
  'breadcrumb.focusForeground': character.hair.highlight,
  'breadcrumb.activeSelectionForeground': character.hair.base,
  'breadcrumbPicker.background': character.skirt.base,

  // ==========================================================================
  // TERMINAL - Append Bodysuit Console
  // ==========================================================================
  'terminal.background': mikuAppend.bodysuit.base,     // #1A1A1A - bodysuit
  'terminal.foreground': mikuAppend.accessories.glow,  // #89F6D3 - cyan glow
  'terminalCursor.foreground': character.hairTies.outline, // #E05096 - PINK CURSOR!
  'terminalCursor.background': mikuAppend.bodysuit.base,
  'terminal.ansiBlack': mikuAppend.bodysuit.base,      // #1A1A1A
  'terminal.ansiRed': character.marks.tattoo,          // #E60033
  'terminal.ansiGreen': moreMoreJump.unitColor,        // #88DD44
  'terminal.ansiYellow': supreme.hair.feathers,        // #CC0000 -> using gold instead
  'terminal.ansiBlue': leoNeed.unitColor,              // #4455DD
  'terminal.ansiMagenta': character.headphones.cushion,// #E05096
  'terminal.ansiCyan': character.hair.base,            // #39C5BB
  'terminal.ansiWhite': snowMiku.y2010.hair,           // #E0EEF5
  'terminal.ansiBrightBlack': mikuNT.hair.shadow,      // #5C5A60
  'terminal.ansiBrightRed': miku15thAnniversary.hair.ribbons, // #FF6B6B
  'terminal.ansiBrightGreen': character.negi.bright,   // #69F0AE
  'terminal.ansiBrightYellow': snowMiku.y2017.outfit.constellation, // #FFF59D
  'terminal.ansiBrightBlue': snowMiku.y2017.hair,      // #82B1FF
  'terminal.ansiBrightMagenta': leoNeed.hair.highlight,// #FF80AB
  'terminal.ansiBrightCyan': character.hair.highlight, // #5DE4DB
  'terminal.ansiBrightWhite': whiteDress.outfit.dress, // #FFFFFF
  'terminal.selectionBackground': alpha(character.hair.base, '40'),
  'terminal.selectionForeground': snowMiku.y2010.hair,
  'terminal.inactiveSelectionBackground': alpha(character.hair.base, '25'),
  'terminal.findMatchBackground': alpha(snowMiku.y2017.accessories.stars, '50'),
  'terminal.findMatchBorder': alpha(snowMiku.y2017.accessories.stars, '90'),
  'terminal.findMatchHighlightBackground': alpha(snowMiku.y2017.accessories.stars, '30'),
  'terminal.findMatchHighlightBorder': alpha(snowMiku.y2017.accessories.stars, '60'),
  'terminal.border': alpha(character.skirt.base, '60'),
  'terminal.tab.activeBorder': character.hairTies.outline,
  'terminal.hoverHighlightBackground': alpha(character.hair.base, '20'),
  'terminal.initialHintForeground': alpha(mikuNT.hair.base, '80'),
  'terminal.dropBackground': alpha(character.hair.base, '20'),
  'terminalCommandDecoration.defaultBackground': alpha(mikuNT.hair.base, '60'),
  'terminalCommandDecoration.successBackground': alpha(moreMoreJump.unitColor, '90'),
  'terminalCommandDecoration.errorBackground': alpha(character.marks.tattoo, '90'),
  'terminalCommandGuide.foreground': alpha(character.hair.base, '40'),
  'terminalOverviewRuler.cursorForeground': character.hairTies.outline,
  'terminalOverviewRuler.findMatchForeground': alpha(snowMiku.y2017.accessories.stars, '80'),
  'terminalOverviewRuler.border': alpha(character.skirt.base, '30'),
  'terminalStickyScroll.background': mikuAppend.bodysuit.base,
  'terminalStickyScroll.border': alpha(character.skirt.base, '20'),
  'terminalStickyScrollHover.background': alpha(character.skirt.base, '15'),

  // ==========================================================================
  // TEXT LINKS
  // ==========================================================================
  'textLink.foreground': character.hair.highlight,
  'textLink.activeForeground': character.hair.bright,
  'textBlockQuote.background': character.skirt.base,
  'textBlockQuote.border': alpha(character.hair.base, '60'),
  'textCodeBlock.background': character.boots.base,
  'textPreformat.foreground': mikuAppend.accessories.glow,
  'textPreformat.background': alpha(character.skirt.base, '80'),
  'textPreformat.border': alpha(character.hair.base, '30'),
  'textSeparator.foreground': alpha(character.skirt.base, '30'),

  // ==========================================================================
  // NOTIFICATIONS - Magical Mirai Announcements
  // ==========================================================================
  'notifications.background': character.skirt.base,    // #15191D
  'notifications.foreground': snowMiku.y2010.hair,     // #E0EEF5
  'notifications.border': alpha(character.hair.base, '60'),
  'notificationToast.border': alpha(character.hair.base, '80'),
  'notificationsInfoIcon.foreground': character.hair.base,
  'notificationsWarningIcon.foreground': snowMiku.y2017.accessories.stars, // #FFD700
  'notificationsErrorIcon.foreground': character.marks.tattoo,             // #E60033
  'notificationLink.foreground': character.hair.highlight,
  'notificationCenterHeader.background': alpha(character.skirt.base, 'F0'),
  'notificationCenterHeader.foreground': character.hair.base,
  'notificationCenter.border': alpha(character.hair.base, '60'),

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': alpha(character.hair.base, '90'),
  'peekViewEditor.background': character.eyes.pupil,
  'peekViewEditorGutter.background': character.eyes.pupil,
  'peekViewResult.background': character.boots.base,
  'peekViewResult.selectionBackground': alpha(character.hair.base, '30'),
  'peekViewResult.selectionForeground': character.hair.highlight,
  'peekViewTitle.background': character.skirt.base,
  'peekViewTitleLabel.foreground': character.hair.base,
  'peekViewTitleDescription.foreground': mikuNT.hair.base,
  'peekViewResult.fileForeground': character.hair.base,
  'peekViewResult.lineForeground': mikuNT.hair.base,
  'peekViewResult.matchHighlightBackground': alpha(snowMiku.y2017.accessories.stars, '50'),
  'peekViewEditor.matchHighlightBackground': alpha(snowMiku.y2017.accessories.stars, '50'),
  'peekViewEditor.matchHighlightBorder': alpha(snowMiku.y2017.accessories.stars, '80'),
  'peekViewEditorStickyScroll.background': character.eyes.pupil,
  'peekViewEditorStickyScrollGutter.background': character.eyes.pupil,

  // ==========================================================================
  // PICKER
  // ==========================================================================
  'pickerGroup.border': alpha(character.hair.base, '30'),
  'pickerGroup.foreground': character.hair.base,

  // ==========================================================================
  // GIT DECORATIONS - Version History
  // ==========================================================================
  'gitDecoration.addedResourceForeground': character.negi.bright,       // #69F0AE
  'gitDecoration.modifiedResourceForeground': marionette.outfit.buttons,// #FFFACD
  'gitDecoration.deletedResourceForeground': character.marks.tattoo,    // #E60033
  'gitDecoration.renamedResourceForeground': leoNeed.unitColor,         // #4455DD
  'gitDecoration.untrackedResourceForeground': character.hair.base,     // #39C5BB
  'gitDecoration.ignoredResourceForeground': mikuNT.hair.shadow,        // #5C5A60
  'gitDecoration.conflictingResourceForeground': miku15thAnniversary.hair.ribbons, // #FF6B6B
  'gitDecoration.stageModifiedResourceForeground': character.armDisplay.data, // #5DE4DB
  'gitDecoration.stageDeletedResourceForeground': alpha(character.marks.tattoo, '80'),
  'gitDecoration.submoduleResourceForeground': ghost.hair.base,         // #9370DB
  'git.blame.editorDecorationForeground': alpha(mikuNT.hair.shadow, '60'),

  // ==========================================================================
  // DIFF EDITOR
  // ==========================================================================
  'diffEditor.insertedTextBackground': alpha(character.negi.bright, '30'),
  'diffEditor.removedTextBackground': alpha(character.marks.tattoo, '30'),
  'diffEditor.insertedLineBackground': alpha(character.negi.bright, '20'),
  'diffEditor.removedLineBackground': alpha(character.marks.tattoo, '18'),
  'diffEditor.insertedTextBorder': alpha(character.negi.bright, '50'),
  'diffEditor.removedTextBorder': alpha(character.marks.tattoo, '50'),
  'diffEditor.diagonalFill': alpha(character.skirt.base, '15'),
  'diffEditor.border': alpha(character.skirt.base, '60'),
  'diffEditor.unchangedRegionBackground': character.boots.base,
  'diffEditor.unchangedRegionForeground': mikuNT.hair.shadow,
  'diffEditor.unchangedCodeBackground': alpha(character.skirt.base, '08'),
  'diffEditor.unchangedRegionShadow': alpha(character.eyes.pupil, '30'),
  'diffEditor.move.border': alpha(leoNeed.unitColor, '60'),
  'diffEditor.moveActive.border': leoNeed.unitColor,
  'diffEditorGutter.insertedLineBackground': alpha(character.negi.bright, '50'),
  'diffEditorGutter.removedLineBackground': alpha(character.marks.tattoo, '40'),
  'diffEditorOverview.insertedForeground': character.negi.bright,
  'diffEditorOverview.removedForeground': character.marks.tattoo,
  'multiDiffEditor.headerBackground': character.skirt.base,
  'multiDiffEditor.background': mikuAppend.bodysuit.base,
  'multiDiffEditor.border': alpha(character.skirt.base, '30'),
  'sideBySideEditor.horizontalBorder': alpha(character.skirt.base, '25'),
  'sideBySideEditor.verticalBorder': alpha(character.skirt.base, '25'),

  // ==========================================================================
  // PANEL
  // ==========================================================================
  'panel.background': character.skirt.base,            // #15191D
  'panel.border': alpha(character.hair.base, '70'),
  'panel.dropBorder': alpha(character.hair.base, 'DD'),
  'panelTitle.activeForeground': character.hair.base,
  'panelTitle.inactiveForeground': mikuNT.hair.shadow,
  'panelTitle.activeBorder': character.hairTies.outline,
  'panelTitle.border': alpha(character.skirt.base, '30'),
  'panelInput.border': alpha(character.hair.base, '40'),
  'panelSection.border': alpha(character.skirt.base, '35'),
  'panelSection.dropBackground': alpha(character.hair.base, '25'),
  'panelSectionHeader.background': character.boots.base,
  'panelSectionHeader.foreground': character.hair.base,
  'panelSectionHeader.border': alpha(character.skirt.base, '20'),
  'panelTitleBadge.background': character.marks.tattoo,
  'panelTitleBadge.foreground': whiteDress.outfit.dress,
  'panelStickyScroll.background': character.skirt.base,
  'panelStickyScroll.border': alpha(character.skirt.base, '20'),
  'panelStickyScroll.shadow': alpha(character.eyes.pupil, '50'),
  'outputView.background': character.skirt.base,
  'outputViewStickyScroll.background': character.skirt.base,

  // ==========================================================================
  // DEBUG
  // ==========================================================================
  'debugToolBar.background': alpha(vividBadSquad.unitColor, '20'),
  'debugToolBar.border': alpha(vividBadSquad.unitColor, '60'),
  'debugIcon.breakpointForeground': character.marks.tattoo,
  'debugIcon.breakpointDisabledForeground': alpha(character.marks.tattoo, '50'),
  'debugIcon.breakpointUnverifiedForeground': miku15thAnniversary.hair.ribbons,
  'debugIcon.breakpointCurrentStackframeForeground': snowMiku.y2017.accessories.stars,
  'debugIcon.breakpointStackframeForeground': character.hair.base,
  'debugIcon.startForeground': moreMoreJump.unitColor,
  'debugIcon.pauseForeground': snowMiku.y2017.accessories.stars,
  'debugIcon.stopForeground': character.marks.tattoo,
  'debugIcon.disconnectForeground': character.marks.tattoo,
  'debugIcon.restartForeground': moreMoreJump.unitColor,
  'debugIcon.stepOverForeground': leoNeed.unitColor,
  'debugIcon.stepIntoForeground': leoNeed.unitColor,
  'debugIcon.stepOutForeground': leoNeed.unitColor,
  'debugIcon.stepBackForeground': leoNeed.unitColor,
  'debugIcon.continueForeground': moreMoreJump.unitColor,
  'debugConsole.infoForeground': character.hair.base,
  'debugConsole.warningForeground': miku15thAnniversary.hair.ribbons,
  'debugConsole.errorForeground': character.marks.tattoo,
  'debugConsole.sourceForeground': mikuNT.hair.base,
  'debugConsoleInputIcon.foreground': character.hairTies.outline,
  'debugTokenExpression.name': vividBadSquad.unitColor,
  'debugTokenExpression.value': sakuraMiku.hair.base,
  'debugTokenExpression.string': sakuraMiku.hair.base,
  'debugTokenExpression.number': snowMiku.y2017.outfit.constellation,
  'debugTokenExpression.boolean': character.marks.tattoo,
  'debugTokenExpression.error': character.marks.tattoo,
  'debugTokenExpression.type': angel.accessories.shoes,
  'debugView.exceptionLabelForeground': whiteDress.outfit.dress,
  'debugView.exceptionLabelBackground': character.marks.tattoo,
  'debugView.stateLabelForeground': snowMiku.y2010.hair,
  'debugView.stateLabelBackground': alpha(character.hair.base, '40'),
  'debugView.valueChangedHighlight': alpha(character.armDisplay.data, '80'),
  'debugExceptionWidget.background': alpha(character.marks.tattoo, '20'),
  'debugExceptionWidget.border': character.marks.tattoo,
  'editor.stackFrameHighlightBackground': alpha(snowMiku.y2017.accessories.stars, '25'),
  'editor.focusedStackFrameHighlightBackground': alpha(moreMoreJump.unitColor, '20'),
  'editor.inlineValuesForeground': mikuNT.hair.base,
  'editor.inlineValuesBackground': alpha(character.skirt.base, '15'),

  // ==========================================================================
  // TESTING
  // ==========================================================================
  'testing.iconFailed': character.marks.tattoo,
  'testing.iconErrored': character.marks.tattoo,
  'testing.iconPassed': moreMoreJump.unitColor,
  'testing.iconQueued': mikuNT.hair.base,
  'testing.iconUnset': mikuNT.hair.shadow,
  'testing.iconSkipped': mikuNT.hair.shadow,
  'testing.runAction': moreMoreJump.unitColor,
  'testing.peekBorder': character.marks.tattoo,
  'testing.peekHeaderBackground': alpha(character.marks.tattoo, '20'),
  'testing.message.error.decorationForeground': character.marks.tattoo,
  'testing.message.error.lineBackground': alpha(character.marks.tattoo, '15'),
  'testing.message.info.decorationForeground': character.hair.base,
  'testing.message.info.lineBackground': alpha(character.hair.base, '15'),
  'testing.iconErrored.retired': alpha(character.marks.tattoo, '60'),
  'testing.iconFailed.retired': alpha(character.marks.tattoo, '60'),
  'testing.iconPassed.retired': alpha(moreMoreJump.unitColor, '60'),
  'testing.iconQueued.retired': alpha(mikuNT.hair.base, '60'),
  'testing.iconUnset.retired': alpha(mikuNT.hair.shadow, '60'),
  'testing.iconSkipped.retired': alpha(mikuNT.hair.shadow, '60'),
  'testing.message.error.badgeBackground': alpha(character.marks.tattoo, '25'),
  'testing.message.error.badgeBorder': character.marks.tattoo,
  'testing.message.error.badgeForeground': snowMiku.y2010.hair,
  'testing.messagePeekBorder': character.marks.tattoo,
  'testing.messagePeekHeaderBackground': alpha(character.marks.tattoo, '20'),
  'testing.coveredBackground': alpha(moreMoreJump.unitColor, '12'),
  'testing.coveredBorder': alpha(moreMoreJump.unitColor, '40'),
  'testing.coveredGutterBackground': alpha(moreMoreJump.unitColor, '30'),
  'testing.uncoveredBranchBackground': alpha(character.marks.tattoo, '20'),
  'testing.uncoveredBackground': alpha(character.marks.tattoo, '12'),
  'testing.uncoveredBorder': alpha(character.marks.tattoo, '40'),
  'testing.uncoveredGutterBackground': alpha(character.marks.tattoo, '30'),
  'testing.coverCountBadgeBackground': alpha(moreMoreJump.unitColor, '25'),
  'testing.coverCountBadgeForeground': snowMiku.y2010.hair,

  // ==========================================================================
  // MERGE EDITOR
  // ==========================================================================
  'mergeEditor.change.background': alpha(character.hair.base, '15'),
  'mergeEditor.change.word.background': alpha(character.hair.base, '30'),
  'mergeEditor.conflict.handled.minimapOverViewRuler': moreMoreJump.unitColor,
  'mergeEditor.conflict.handledFocused.border': moreMoreJump.unitColor,
  'mergeEditor.conflict.handledUnfocused.border': alpha(moreMoreJump.unitColor, '80'),
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': character.marks.tattoo,
  'mergeEditor.conflict.unhandledFocused.border': character.marks.tattoo,
  'mergeEditor.conflict.unhandledUnfocused.border': alpha(character.marks.tattoo, '80'),
  'mergeEditor.conflictingLines.background': alpha(miku15thAnniversary.hair.ribbons, '15'),
  'mergeEditor.changeBase.background': alpha(mikuNT.hair.base, '15'),
  'mergeEditor.changeBase.word.background': alpha(mikuNT.hair.base, '30'),
  'mergeEditor.conflict.input1.background': alpha(character.hair.base, '15'),
  'mergeEditor.conflict.input2.background': alpha(leoNeed.unitColor, '15'),
  'merge.currentHeaderBackground': alpha(character.hair.base, '40'),
  'merge.currentContentBackground': alpha(character.hair.base, '15'),
  'merge.incomingHeaderBackground': alpha(leoNeed.unitColor, '40'),
  'merge.incomingContentBackground': alpha(leoNeed.unitColor, '15'),
  'merge.border': alpha(character.hair.base, '70'),
  'merge.commonContentBackground': alpha(mikuNT.hair.base, '15'),
  'merge.commonHeaderBackground': alpha(mikuNT.hair.base, '30'),

  // ==========================================================================
  // SETTINGS
  // ==========================================================================
  'settings.headerForeground': character.hair.base,
  'settings.modifiedItemIndicator': character.hairTies.outline,
  'settings.focusedRowBackground': alpha(character.hair.base, '10'),
  'settings.rowHoverBackground': alpha(character.hair.base, '08'),
  'settings.focusedRowBorder': alpha(character.hair.base, '40'),
  'settings.headerBorder': alpha(character.skirt.base, '20'),
  'settings.sashBorder': alpha(character.skirt.base, '30'),
  'settings.settingsHeaderHoverForeground': character.hair.highlight,
  'settings.dropdownBackground': character.skirt.base,
  'settings.dropdownForeground': snowMiku.y2010.hair,
  'settings.dropdownBorder': alpha(character.hair.base, '40'),
  'settings.dropdownListBorder': alpha(character.hair.base, '40'),
  'settings.checkboxBackground': character.skirt.base,
  'settings.checkboxForeground': character.hair.base,
  'settings.checkboxBorder': alpha(character.hair.base, '40'),
  'settings.textInputBackground': character.skirt.base,
  'settings.textInputForeground': snowMiku.y2010.hair,
  'settings.textInputBorder': alpha(character.hair.base, '40'),
  'settings.numberInputBackground': character.skirt.base,
  'settings.numberInputForeground': snowMiku.y2010.hair,
  'settings.numberInputBorder': alpha(character.hair.base, '40'),

  // ==========================================================================
  // WELCOME PAGE
  // ==========================================================================
  'welcomePage.background': mikuAppend.bodysuit.base,
  'welcomePage.tileBackground': character.skirt.base,
  'welcomePage.tileBorder': alpha(character.hair.base, '30'),
  'welcomePage.tileHoverBackground': alpha(character.hair.base, '10'),
  'welcomePage.progress.foreground': character.hair.base,
  'welcomePage.progress.background': character.skirt.base,
  'walkThrough.embeddedEditorBackground': character.boots.base,
  'walkthrough.stepTitle.foreground': character.hair.base,

  // ==========================================================================
  // EXTENSIONS
  // ==========================================================================
  'extensionButton.prominentBackground': character.hair.base,
  'extensionButton.prominentForeground': mikuAppend.bodysuit.base,
  'extensionButton.prominentHoverBackground': character.hair.highlight,
  'extensionButton.separator': mikuAppend.bodysuit.base,
  'extensionButton.background': character.hair.base,
  'extensionButton.foreground': mikuAppend.bodysuit.base,
  'extensionButton.hoverBackground': character.hair.highlight,
  'extensionBadge.remoteBackground': character.hairTies.outline,
  'extensionBadge.remoteForeground': whiteDress.outfit.dress,
  'extensionIcon.starForeground': snowMiku.y2017.accessories.stars,
  'extensionIcon.verifiedForeground': moreMoreJump.unitColor,
  'extensionIcon.preReleaseForeground': wonderlandsShowtime.unitColor,
  'extensionIcon.sponsorForeground': character.hairTies.outline,
  'extensionIcon.privateForeground': nightcord.unitColor,
  'mcpIcon.starForeground': snowMiku.y2017.accessories.stars,

  // ==========================================================================
  // KEYBINDING
  // ==========================================================================
  'keybindingLabel.background': alpha(character.hair.base, '20'),
  'keybindingLabel.foreground': snowMiku.y2010.hair,
  'keybindingLabel.border': alpha(character.hair.base, '40'),
  'keybindingLabel.bottomBorder': alpha(character.hair.base, '60'),
  'keybindingTable.headerBackground': character.skirt.base,
  'keybindingTable.rowsBackground': mikuAppend.bodysuit.base,

  // ==========================================================================
  // CHARTS
  // ==========================================================================
  'charts.foreground': snowMiku.y2010.hair,
  'charts.lines': alpha(character.hair.base, '60'),
  'charts.red': character.marks.tattoo,
  'charts.green': moreMoreJump.unitColor,
  'charts.yellow': snowMiku.y2017.accessories.stars,
  'charts.blue': leoNeed.unitColor,
  'charts.purple': nightcord.unitColor,
  'charts.orange': wonderlandsShowtime.unitColor,
  'chart.axis': alpha(mikuNT.hair.base, '80'),
  'chart.guide': alpha(character.hair.base, '30'),
  'chart.line': character.hair.base,

  // ==========================================================================
  // MENU
  // ==========================================================================
  'menu.background': character.skirt.base,
  'menu.foreground': snowMiku.y2010.hair,
  'menu.selectionBackground': alpha(character.hair.base, '30'),
  'menu.selectionForeground': character.hair.highlight,
  'menu.selectionBorder': alpha(character.hair.base, '50'),
  'menu.separatorBackground': alpha(character.skirt.base, '30'),
  'menu.border': alpha(character.hair.base, '60'),

  // ==========================================================================
  // COMMAND CENTER
  // ==========================================================================
  'commandCenter.foreground': mikuNT.hair.base,
  'commandCenter.background': character.headphones.frame,
  'commandCenter.border': alpha(character.hair.base, '50'),
  'commandCenter.activeBackground': alpha(character.hair.base, '25'),
  'commandCenter.activeForeground': character.hair.highlight,
  'commandCenter.activeBorder': alpha(character.hair.base, '60'),
  'commandCenter.inactiveForeground': mikuNT.hair.shadow,
  'commandCenter.inactiveBorder': alpha(character.skirt.base, '20'),
  'commandCenter.debuggingBackground': alpha(character.marks.tattoo, '25'),

  // ==========================================================================
  // QUICK INPUT
  // ==========================================================================
  'quickInput.background': character.eyes.pupil,
  'quickInput.foreground': snowMiku.y2010.hair,
  'quickInputTitle.background': character.skirt.base,
  'quickInputList.focusBackground': alpha(character.hair.base, '30'),
  'quickInputList.focusForeground': character.hair.highlight,
  'quickInputList.focusIconForeground': character.hair.highlight,

  // ==========================================================================
  // BANNER
  // ==========================================================================
  'banner.background': character.skirt.base,
  'banner.foreground': snowMiku.y2010.hair,
  'banner.iconForeground': character.hair.base,

  // ==========================================================================
  // ERRORS/WARNINGS/INFO
  // ==========================================================================
  'editorError.foreground': character.marks.tattoo,
  'editorError.border': alpha(character.marks.tattoo, '40'),
  'editorError.background': alpha(character.marks.tattoo, '15'),
  'editorWarning.foreground': miku15thAnniversary.hair.ribbons,
  'editorWarning.border': alpha(miku15thAnniversary.hair.ribbons, '40'),
  'editorWarning.background': alpha(miku15thAnniversary.hair.ribbons, '15'),
  'editorInfo.foreground': character.hair.base,
  'editorInfo.border': alpha(character.hair.base, '40'),
  'editorInfo.background': alpha(character.hair.base, '15'),
  'editorHint.foreground': mikuNT.hair.base,
  'editorHint.border': alpha(mikuNT.hair.base, '40'),
  'problemsErrorIcon.foreground': character.marks.tattoo,
  'problemsWarningIcon.foreground': miku15thAnniversary.hair.ribbons,
  'problemsInfoIcon.foreground': character.hair.base,
  'editorLightBulb.foreground': snowMiku.y2017.accessories.stars,
  'editorLightBulbAutoFix.foreground': moreMoreJump.unitColor,
  'editorLightBulbAi.foreground': character.hairTies.outline,

  // ==========================================================================
  // INLAY HINTS
  // ==========================================================================
  'editorInlayHint.background': alpha(character.skirt.base, '12'),
  'editorInlayHint.foreground': alpha(mikuNT.hair.shadow, '80'),
  'editorInlayHint.typeForeground': alpha(angel.accessories.shoes, 'CC'),
  'editorInlayHint.typeBackground': alpha(character.skirt.base, '12'),
  'editorInlayHint.parameterForeground': alpha(leoNeed.hair.highlight, 'CC'),
  'editorInlayHint.parameterBackground': alpha(character.skirt.base, '12'),

  // ==========================================================================
  // STICKY SCROLL
  // ==========================================================================
  'editorStickyScroll.background': alpha(character.headphones.frame, 'F0'),
  'editorStickyScroll.border': alpha(character.skirt.base, '30'),
  'editorStickyScroll.shadow': alpha(character.eyes.pupil, '30'),
  'editorStickyScrollHover.background': alpha(character.skirt.base, '10'),
  'editorStickyScrollGutter.background': alpha(character.headphones.frame, 'F0'),

  // ==========================================================================
  // NOTEBOOK
  // ==========================================================================
  'notebook.cellBorderColor': alpha(character.hair.base, '30'),
  'notebook.cellEditorBackground': mikuAppend.bodysuit.base,
  'notebook.cellHoverBackground': alpha(character.hair.base, '10'),
  'notebook.cellInsertionIndicator': character.hairTies.outline,
  'notebook.cellStatusBarItemHoverBackground': alpha(character.hair.base, '20'),
  'notebook.cellToolbarSeparator': alpha(character.skirt.base, '30'),
  'notebook.editorBackground': mikuAppend.bodysuit.base,
  'notebook.focusedCellBorder': character.hair.base,
  'notebook.focusedCellBackground': alpha(character.hair.base, '10'),
  'notebook.focusedEditorBorder': alpha(character.hair.base, 'CC'),
  'notebook.inactiveFocusedCellBorder': alpha(character.hair.base, '60'),
  'notebook.inactiveSelectedCellBorder': alpha(character.hair.base, '40'),
  'notebook.outputContainerBackgroundColor': character.boots.base,
  'notebook.outputContainerBorderColor': alpha(character.skirt.base, '20'),
  'notebook.selectedCellBackground': alpha(character.hair.base, '15'),
  'notebook.selectedCellBorder': alpha(character.hair.base, '60'),
  'notebook.symbolHighlightBackground': alpha(character.hair.base, '20'),
  'notebookStatusSuccessIcon.foreground': moreMoreJump.unitColor,
  'notebookStatusErrorIcon.foreground': character.marks.tattoo,
  'notebookStatusRunningIcon.foreground': character.hair.base,
  'notebookEditorOverviewRuler.runningCellForeground': character.hair.base,
  'notebookScrollbarSlider.activeBackground': alpha(character.hair.base, '80'),
  'notebookScrollbarSlider.background': alpha(character.hair.base, '40'),
  'notebookScrollbarSlider.hoverBackground': alpha(character.hair.base, '60'),
  'outputsNotebook.border': alpha(character.skirt.base, '30'),

  // ==========================================================================
  // SYMBOL ICONS
  // ==========================================================================
  'symbolIcon.arrayForeground': moreMoreJump.unitColor,
  'symbolIcon.booleanForeground': character.marks.tattoo,
  'symbolIcon.classForeground': vividBadSquad.unitColor,
  'symbolIcon.colorForeground': character.hair.base,
  'symbolIcon.constantForeground': character.marks.tattoo,
  'symbolIcon.constructorForeground': leoNeed.unitColor,
  'symbolIcon.enumeratorForeground': nightcord.unitColor,
  'symbolIcon.enumeratorMemberForeground': nightcord.unitColor,
  'symbolIcon.eventForeground': leoNeed.unitColor,
  'symbolIcon.fieldForeground': moreMoreJump.unitColor,
  'symbolIcon.fileForeground': mikuNT.hair.base,
  'symbolIcon.folderForeground': snowMiku.y2017.accessories.stars,
  'symbolIcon.functionForeground': leoNeed.unitColor,
  'symbolIcon.interfaceForeground': angel.accessories.shoes,
  'symbolIcon.keyForeground': snowMiku.y2016.hair,
  'symbolIcon.keywordForeground': character.hair.base,
  'symbolIcon.methodForeground': wonderlandsShowtime.unitColor,
  'symbolIcon.moduleForeground': character.hair.highlight,
  'symbolIcon.namespaceForeground': character.hair.highlight,
  'symbolIcon.nullForeground': mikuNT.hair.shadow,
  'symbolIcon.numberForeground': snowMiku.y2017.outfit.constellation,
  'symbolIcon.objectForeground': vividBadSquad.unitColor,
  'symbolIcon.operatorForeground': factoryTyrant.accessories.cogwheels,
  'symbolIcon.packageForeground': ghost.hair.base,
  'symbolIcon.propertyForeground': moreMoreJump.unitColor,
  'symbolIcon.referenceForeground': ghost.hair.base,
  'symbolIcon.snippetForeground': mikuNT.hair.base,
  'symbolIcon.stringForeground': sakuraMiku.hair.base,
  'symbolIcon.structForeground': vividBadSquad.unitColor,
  'symbolIcon.textForeground': snowMiku.y2010.hair,
  'symbolIcon.typeParameterForeground': snowMiku.y2022.eyes,
  'symbolIcon.unitForeground': mikuNT.hair.base,
  'symbolIcon.variableForeground': moreMoreJump.unitColor,

  // ==========================================================================
  // INLINE CHAT
  // ==========================================================================
  'inlineChat.background': alpha(character.skirt.base, 'F8'),
  'inlineChat.border': alpha(character.hair.base, '60'),
  'inlineChat.shadow': alpha(character.eyes.pupil, '40'),
  'inlineChat.foreground': snowMiku.y2010.hair,
  'inlineChatInput.background': character.boots.base,
  'inlineChatInput.border': alpha(character.hair.base, '40'),
  'inlineChatInput.focusBorder': character.hair.base,
  'inlineChatInput.placeholderForeground': mikuNT.hair.shadow,
  'inlineChatDiff.inserted': alpha(character.negi.bright, '25'),
  'inlineChatDiff.removed': alpha(character.marks.tattoo, '20'),

  // ==========================================================================
  // CHAT
  // ==========================================================================
  'chat.requestBackground': character.skirt.base,
  'chat.requestBorder': alpha(character.hair.base, '30'),
  'chat.requestBubbleBackground': alpha(character.skirt.base, '15'),
  'chat.requestBubbleHoverBackground': alpha(character.skirt.base, '25'),
  'chat.slashCommandBackground': alpha(character.hair.base, '20'),
  'chat.slashCommandForeground': character.hair.base,
  'chat.avatarBackground': alpha(character.hair.base, '30'),
  'chat.avatarForeground': character.hair.highlight,
  'chat.editedFileForeground': character.armDisplay.data,
  'chat.linesAddedForeground': character.negi.bright,
  'chat.linesRemovedForeground': character.marks.tattoo,
  'chat.requestCodeBorder': alpha(character.hair.base, '40'),
  'chat.checkpointSeparator': alpha(character.skirt.base, '30'),
  'chatManagement.sashBorder': alpha(character.hair.base, '40'),

  // ==========================================================================
  // INTERACTIVE
  // ==========================================================================
  'interactive.activeCodeBorder': alpha(character.hair.base, '60'),
  'interactive.inactiveCodeBorder': alpha(character.skirt.base, '30'),

  // ==========================================================================
  // PORTS
  // ==========================================================================
  'ports.iconRunningProcessForeground': moreMoreJump.unitColor,

  // ==========================================================================
  // PROFILE BADGE
  // ==========================================================================
  'profileBadge.background': character.hair.base,
  'profileBadge.foreground': mikuAppend.bodysuit.base,
  'profiles.sashBorder': alpha(character.hair.base, '30'),

  // ==========================================================================
  // SEARCH EDITOR
  // ==========================================================================
  'searchEditor.findMatchBackground': alpha(snowMiku.y2017.accessories.stars, '30'),
  'searchEditor.findMatchBorder': alpha(snowMiku.y2017.accessories.stars, '80'),
  'searchEditor.textInputBorder': alpha(character.hair.base, '40'),
  'search.resultsInfoForeground': mikuNT.hair.base,

  // ==========================================================================
  // UNICODE HIGHLIGHT
  // ==========================================================================
  'editorUnicodeHighlight.border': alpha(miku15thAnniversary.hair.ribbons, '80'),
  'editorUnicodeHighlight.background': alpha(miku15thAnniversary.hair.ribbons, '15'),

  // ==========================================================================
  // SUGGEST WIDGET
  // ==========================================================================
  'editorSuggestWidget.background': alpha(character.skirt.base, 'F8'),
  'editorSuggestWidget.border': alpha(character.hair.base, 'CC'),
  'editorSuggestWidget.foreground': snowMiku.y2010.hair,
  'editorSuggestWidget.highlightForeground': character.hair.bright,
  'editorSuggestWidget.selectedBackground': alpha(character.hair.base, '30'),
  'editorSuggestWidget.selectedForeground': character.hair.highlight,
  'editorSuggestWidget.selectedIconForeground': character.hair.highlight,
  'editorSuggestWidget.focusHighlightForeground': character.hair.bright,
  'editorSuggestWidgetStatus.foreground': mikuNT.hair.shadow,

  // ==========================================================================
  // MARKER NAVIGATION
  // ==========================================================================
  'editorMarkerNavigation.background': character.skirt.base,
  'editorMarkerNavigationError.background': alpha(character.marks.tattoo, '30'),
  'editorMarkerNavigationWarning.background': alpha(miku15thAnniversary.hair.ribbons, '30'),
  'editorMarkerNavigationInfo.background': alpha(character.hair.base, '30'),
  'editorMarkerNavigationError.headerBackground': alpha(character.marks.tattoo, '20'),
  'editorMarkerNavigationWarning.headerBackground': alpha(miku15thAnniversary.hair.ribbons, '20'),
  'editorMarkerNavigationInfo.headerBackground': alpha(character.hair.base, '20'),

  // ==========================================================================
  // TOOLBAR
  // ==========================================================================
  'actionBar.toggledBackground': alpha(character.hair.base, '30'),
  'toolbar.hoverBackground': alpha(character.hair.base, '20'),
  'toolbar.hoverOutline': alpha(character.hair.base, '40'),
  'toolbar.activeBackground': alpha(character.hair.base, '30'),

  // ==========================================================================
  // ACTION LIST
  // ==========================================================================
  'editorActionList.background': character.skirt.base,
  'editorActionList.foreground': snowMiku.y2010.hair,
  'editorActionList.focusBackground': alpha(character.hair.base, '30'),
  'editorActionList.focusForeground': character.hair.highlight,

  // ==========================================================================
  // COMMENTS WIDGET
  // ==========================================================================
  'editorCommentsWidget.resolvedBorder': alpha(moreMoreJump.unitColor, '60'),
  'editorCommentsWidget.unresolvedBorder': alpha(character.hair.base, '60'),
  'editorCommentsWidget.rangeBackground': alpha(character.hair.base, '10'),
  'editorCommentsWidget.rangeActiveBackground': alpha(character.hair.base, '20'),
  'editorCommentsWidget.replyInputBackground': character.boots.base,
  'commentsView.resolvedIcon': moreMoreJump.unitColor,
  'commentsView.unresolvedIcon': character.hair.base,

  // ==========================================================================
  // FOLDING
  // ==========================================================================
  'editor.foldBackground': alpha(character.skirt.base, '08'),
  'editor.foldPlaceholderForeground': alpha(mikuNT.hair.base, 'AA'),

  // ==========================================================================
  // SNIPPETS
  // ==========================================================================
  'editor.snippetTabstopHighlightBackground': alpha(character.hair.base, '18'),
  'editor.snippetTabstopHighlightBorder': alpha(character.hair.base, '50'),
  'editor.snippetFinalTabstopHighlightBackground': alpha(moreMoreJump.unitColor, '20'),
  'editor.snippetFinalTabstopHighlightBorder': alpha(moreMoreJump.unitColor, '60'),

  // ==========================================================================
  // SYMBOL HIGHLIGHT
  // ==========================================================================
  'editor.symbolHighlightBackground': alpha(character.hair.base, '15'),
  'editor.symbolHighlightBorder': alpha(character.hair.base, '40'),
  'editor.hoverHighlightBackground': alpha(character.hair.base, '12'),

  // ==========================================================================
  // SCM GRAPH
  // ==========================================================================
  'scmGraph.foreground1': character.hair.base,
  'scmGraph.foreground2': vividBadSquad.unitColor,
  'scmGraph.foreground3': moreMoreJump.unitColor,
  'scmGraph.foreground4': wonderlandsShowtime.unitColor,
  'scmGraph.foreground5': nightcord.unitColor,
  'scmGraph.historyItemHoverAdditionsForeground': character.negi.bright,
  'scmGraph.historyItemHoverDeletionsForeground': character.marks.tattoo,
  'scmGraph.historyItemRefColor': character.hair.highlight,
  'scmGraph.historyItemRemoteRefColor': leoNeed.unitColor,
  'scmGraph.historyItemBaseRefColor': mikuNT.hair.base,
  'scmGraph.historyItemHoverLabelForeground': snowMiku.y2010.hair,

  // ==========================================================================
  // TERMINAL SYMBOL ICONS
  // ==========================================================================
  'terminalSymbolIcon.aliasForeground': ghost.hair.base,
  'terminalSymbolIcon.branchForeground': character.hair.base,
  'terminalSymbolIcon.commitForeground': moreMoreJump.unitColor,
  'terminalSymbolIcon.flagForeground': wonderlandsShowtime.unitColor,
  'terminalSymbolIcon.optionForeground': leoNeed.unitColor,
  'terminalSymbolIcon.optionValueForeground': sakuraMiku.hair.base,
  'terminalSymbolIcon.methodForeground': wonderlandsShowtime.unitColor,
  'terminalSymbolIcon.argumentForeground': leoNeed.hair.highlight,
  'terminalSymbolIcon.inlineSuggestionForeground': mikuNT.hair.base,
  'terminalSymbolIcon.fileForeground': mikuNT.hair.base,
  'terminalSymbolIcon.folderForeground': snowMiku.y2017.accessories.stars,
  'terminalSymbolIcon.pullRequestDoneForeground': moreMoreJump.unitColor,
  'terminalSymbolIcon.pullRequestForeground': character.hair.base,
  'terminalSymbolIcon.remoteForeground': character.hairTies.outline,
  'terminalSymbolIcon.stashForeground': ghost.hair.base,
  'terminalSymbolIcon.symbolText': snowMiku.y2010.hair,
  'terminalSymbolIcon.symbolicLinkFileForeground': leoNeed.unitColor,
  'terminalSymbolIcon.symbolicLinkFolderForeground': leoNeed.unitColor,
  'terminalSymbolIcon.tagForeground': vividBadSquad.unitColor,

  // ==========================================================================
  // INLINE EDIT
  // ==========================================================================
  'inlineEdit.gutterIndicator.primaryBorder': character.hair.base,
  'inlineEdit.gutterIndicator.primaryForeground': character.hair.highlight,
  'inlineEdit.gutterIndicator.primaryBackground': alpha(character.hair.base, '20'),
  'inlineEdit.gutterIndicator.secondaryBorder': alpha(character.hair.base, '60'),
  'inlineEdit.gutterIndicator.secondaryForeground': mikuNT.hair.base,
  'inlineEdit.gutterIndicator.secondaryBackground': alpha(character.hair.base, '15'),
  'inlineEdit.gutterIndicator.successfulBorder': moreMoreJump.unitColor,
  'inlineEdit.gutterIndicator.successfulForeground': moreMoreJump.unitColor,
  'inlineEdit.gutterIndicator.successfulBackground': alpha(moreMoreJump.unitColor, '20'),
  'inlineEdit.gutterIndicator.background': alpha(character.skirt.base, '10'),
  'inlineEdit.originalBackground': alpha(character.marks.tattoo, '10'),
  'inlineEdit.modifiedBackground': alpha(character.negi.bright, '15'),
  'inlineEdit.originalChangedLineBackground': alpha(character.marks.tattoo, '15'),
  'inlineEdit.originalChangedTextBackground': alpha(character.marks.tattoo, '25'),
  'inlineEdit.modifiedChangedLineBackground': alpha(character.negi.bright, '15'),
  'inlineEdit.modifiedChangedTextBackground': alpha(character.negi.bright, '25'),
  'inlineEdit.originalBorder': alpha(character.marks.tattoo, '40'),
  'inlineEdit.modifiedBorder': alpha(character.negi.bright, '50'),
  'inlineEdit.tabWillAcceptModifiedBorder': moreMoreJump.unitColor,
  'inlineEdit.tabWillAcceptOriginalBorder': alpha(character.marks.tattoo, '60'),

  // ==========================================================================
  // MISCELLANEOUS EDITOR
  // ==========================================================================
  'editor.placeholder.foreground': alpha(mikuNT.hair.shadow, '60'),
  'editor.inactiveSelectionBackground': alpha(character.hair.base, '20'),
  'editor.inactiveLineHighlightBackground': alpha(character.marks.tattoo, '08'),
  'editor.wordHighlightTextBackground': alpha(character.hair.highlight, '15'),
  'editor.wordHighlightTextBorder': alpha(character.hair.highlight, '35'),
  'editor.findMatchForeground': mikuAppend.bodysuit.base,
  'editor.findMatchHighlightForeground': mikuAppend.bodysuit.base,
  'editor.findRangeHighlightBackground': alpha(character.hair.base, '15'),
  'editor.findRangeHighlightBorder': alpha(character.hair.base, '40'),
  'editor.selectionForeground': snowMiku.y2010.hair,
  'editor.compositionBorder': alpha(character.hairTies.outline, '60'),
  'editorIndentGuide.activeBackground': alpha(character.hair.base, '50'),
  'editorIndentGuide.background': alpha(character.hair.base, '20'),
  'editorUnnecessaryCode.border': alpha(mikuNT.hair.shadow, '40'),
  'editorMinimap.inlineChatInserted': alpha(character.negi.bright, '50'),
  'editorGutter.itemBackground': alpha(character.skirt.base, '15'),
  'editorGutter.itemGlyphForeground': character.hair.base,
  'editorGutter.commentDraftGlyphForeground': alpha(character.hair.base, '80'),
  'editorGutter.modifiedSecondaryBackground': alpha(character.armDisplay.data, '50'),
  'editorGutter.addedSecondaryBackground': alpha(character.negi.bright, '50'),
  'editorGutter.deletedSecondaryBackground': alpha(character.marks.tattoo, '50'),
  'editorOverviewRuler.commentForeground': alpha(character.hair.base, '60'),
  'editorOverviewRuler.commentUnresolvedForeground': alpha(miku15thAnniversary.hair.ribbons, '60'),
  'editorOverviewRuler.commentDraftForeground': alpha(character.hair.base, '50'),
  'editorOverviewRuler.commonContentForeground': alpha(mikuNT.hair.base, '60'),
  'editorOverviewRuler.currentContentForeground': alpha(character.hair.base, '80'),
  'editorOverviewRuler.incomingContentForeground': alpha(leoNeed.unitColor, '80'),
  'editorOverviewRuler.rangeHighlightForeground': alpha(character.hair.base, '60'),
  'editorOverviewRuler.inlineChatInserted': alpha(character.negi.bright, '70'),
  'editorOverviewRuler.inlineChatRemoved': alpha(character.marks.tattoo, '70'),

  // ==========================================================================
  // BADGE / PROGRESS
  // ==========================================================================
  'badge.foreground': whiteDress.outfit.dress,
  'badge.background': character.marks.tattoo,
  'progressBar.background': character.hair.base,

  // ==========================================================================
  // GAUGE
  // ==========================================================================
  'gauge.background': character.skirt.base,
  'gauge.border': alpha(character.hair.base, '40'),
  'gauge.errorBackground': alpha(character.marks.tattoo, '30'),
  'gauge.errorForeground': character.marks.tattoo,
  'gauge.foreground': character.hair.base,
  'gauge.warningBackground': alpha(miku15thAnniversary.hair.ribbons, '30'),
  'gauge.warningForeground': miku15thAnniversary.hair.ribbons,

  // ==========================================================================
  // MARKDOWN ALERTS
  // ==========================================================================
  'markdownAlert.caution.foreground': character.marks.tattoo,
  'markdownAlert.important.foreground': vividBadSquad.unitColor,
  'markdownAlert.note.foreground': character.hair.base,
  'markdownAlert.tip.foreground': moreMoreJump.unitColor,
  'markdownAlert.warning.foreground': miku15thAnniversary.hair.ribbons,

  // ==========================================================================
  // AGENT SESSION
  // ==========================================================================
  'agentSessionReadIndicator.foreground': character.hair.base,
  'agentSessionSelectedBadge.border': character.hair.base,
  'agentSessionSelectedUnfocusedBadge.border': alpha(character.hair.base, '60'),

  // ==========================================================================
  // SIMPLE FIND WIDGET
  // ==========================================================================
  'simpleFindWidget.sashBorder': alpha(character.hair.base, '40'),
} as const;

export type WorkbenchColors = typeof workbenchColors;
