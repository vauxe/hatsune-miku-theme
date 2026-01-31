/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette.
 */

import {
  character,
  mikuNT,
  mikuV2,
  mikuAppend,
  snowMiku,
  ghost,
  angel,
  sakuraMiku,
  miku16thAnniversary,
  virtualSinger,
  leoNeed,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
  powder,
  supreme,
  whiteDress,
  heartHunter,
  digitalStars,
} from '../palette';

// Helper for alpha channels
const alpha = (hex: string, opacity: string): string => `${hex}${opacity}`;

export const workbenchColors = {
  // Editor
  'editor.background': character.skirt.base,
  'editor.foreground': snowMiku.y2010.hair,
  'editorCursor.foreground': character.hairTies.outline,
  'editorCursor.background': character.eyes.pupil,
  'editorMultiCursor.primary.foreground': character.hairTies.outline,
  'editorMultiCursor.primary.background': character.headphones.frame,
  'editorMultiCursor.secondary.foreground': leoNeed.hair.highlight,
  'editorMultiCursor.secondary.background': character.headphones.frame,
  'editor.lineHighlightBackground': alpha(character.hair.base, '12'),
  'editor.lineHighlightBorder': alpha(character.hair.bright, '30'),
  'editor.selectionBackground': alpha(virtualSinger.imageColor, '35'),
  'editor.selectionHighlightBackground': alpha(leoNeed.hair.highlight, '25'),
  'editor.selectionHighlightBorder': alpha(virtualSinger.imageColor, '40'),
  'editor.wordHighlightBackground': alpha(virtualSinger.imageColor, '20'),
  'editor.wordHighlightBorder': alpha(virtualSinger.imageColor, '40'),
  'editor.wordHighlightStrongBackground': alpha(leoNeed.hair.highlight, '30'),
  'editor.wordHighlightStrongBorder': alpha(leoNeed.hair.highlight, '60'),
  'editor.findMatchBackground': alpha(vividBadSquad.unitColor, '60'),
  'editor.findMatchBorder': alpha(vividBadSquad.unitColor, '90'),
  'editor.findMatchHighlightBackground': alpha(character.hair.bright, '50'),
  'editor.findMatchHighlightBorder': alpha(character.hair.bright, '80'),
  'editor.rangeHighlightBackground': alpha(character.hair.base, '10'),
  'editor.rangeHighlightBorder': alpha(character.hair.base, '30'),

  // Line numbers
  'editorLineNumber.foreground': character.tie.shadow,
  'editorLineNumber.activeForeground': character.hair.highlight,
  'editorLineNumber.dimmedForeground': character.hair.shadow,

  // Indent guides
  'editorIndentGuide.background1': alpha(character.hair.shadow, '50'),
  'editorIndentGuide.background2': alpha(mikuV2.hair.shadow, '55'),
  'editorIndentGuide.background3': alpha(character.hair.base, '60'),
  'editorIndentGuide.background4': alpha(wonderlandsShowtime.hair.highlight, '65'),
  'editorIndentGuide.background5': alpha(mikuAppend.hair.base, '70'),
  'editorIndentGuide.background6': alpha(character.hair.tip, '75'),
  'editorIndentGuide.activeBackground1': character.hair.shadow,
  'editorIndentGuide.activeBackground2': mikuV2.hair.shadow,
  'editorIndentGuide.activeBackground3': character.hair.base,
  'editorIndentGuide.activeBackground4': wonderlandsShowtime.hair.highlight,
  'editorIndentGuide.activeBackground5': mikuAppend.hair.base,
  'editorIndentGuide.activeBackground6': character.hair.tip,

  // Rulers and whitespace
  'editorRuler.foreground': character.hair.shadow,
  'editorWhitespace.foreground': character.hair.shadow,

  // Brackets
  'editorBracketMatch.background': alpha(character.hair.base, '25'),
  'editorBracketMatch.border': character.hair.highlight,
  'editorBracketHighlight.foreground1': snowMiku.y2017.accessories.stars,
  'editorBracketHighlight.foreground2': character.skin.blush,
  'editorBracketHighlight.foreground3': character.negi.bright,
  'editorBracketHighlight.foreground4': ghost.hair.base,
  'editorBracketHighlight.foreground5': character.hair.bright,
  'editorBracketHighlight.foreground6': wonderlandsShowtime.unitColor,
  'editorBracketHighlight.unexpectedBracket.foreground': sakuraMiku.hair.base,
  'editorBracketPairGuide.background1': alpha(vividBadSquad.unitColor, '25'),
  'editorBracketPairGuide.background2': alpha(character.hair.base, '25'),
  'editorBracketPairGuide.background3': alpha(character.hair.bright, '25'),
  'editorBracketPairGuide.background4': alpha(ghost.hair.base, '25'),
  'editorBracketPairGuide.background5': alpha(character.hair.highlight, '25'),
  'editorBracketPairGuide.background6': alpha(leoNeed.hair.highlight, '25'),
  'editorBracketPairGuide.activeBackground1': alpha(vividBadSquad.unitColor, '50'),
  'editorBracketPairGuide.activeBackground2': alpha(character.hair.base, '50'),
  'editorBracketPairGuide.activeBackground3': alpha(character.hair.bright, '50'),
  'editorBracketPairGuide.activeBackground4': alpha(ghost.hair.base, '50'),
  'editorBracketPairGuide.activeBackground5': alpha(character.hair.highlight, '50'),
  'editorBracketPairGuide.activeBackground6': alpha(leoNeed.hair.highlight, '50'),

  // Gutter
  'editorGutter.addedBackground': alpha(character.negi.stalk, '80'),
  'editorGutter.modifiedBackground': alpha(snowMiku.y2017.accessories.stars, '80'),
  'editorGutter.deletedBackground': alpha(character.headphones.cushion, '80'),
  'editorGutter.foldingControlForeground': alpha(character.hair.highlight, 'BB'),

  // Widgets
  'editorWidget.background': character.armWarmers.base,
  'editorWidget.foreground': mikuNT.hair.base,
  'editorWidget.border': alpha(character.hair.shadow, '80'),
  'editorWidget.resizeBorder': alpha(character.tie.shadow, '80'),
  'editorHoverWidget.background': alpha(character.skirt.base, 'F5'),
  'editorHoverWidget.border': alpha(character.hair.shadow, '70'),
  'editorHoverWidget.foreground': snowMiku.y2010.hair,
  'editorHoverWidget.highlightForeground': character.hair.highlight,
  'editorHoverWidget.statusBarBackground': character.armWarmers.base,
  'editorUnnecessaryCode.opacity': alpha(character.eyes.pupil, '80'),
  // Ghost text
  'editorGhostText.foreground': alpha(snowMiku.y2021.hair, 'BB'),
  'editorGhostText.border': alpha(snowMiku.y2021.hair, '40'),
  'editorGhostText.background': alpha(snowMiku.y2021.hair, '0A'),
  'editor.linkedEditingBackground': alpha(character.hair.bright, '20'),

  // Overview ruler
  'editorOverviewRuler.bracketMatchForeground': alpha(character.hair.bright, 'A0'),
  'editorOverviewRuler.wordHighlightForeground': alpha(character.hair.bright, '80'),
  'editorOverviewRuler.wordHighlightStrongForeground': alpha(vividBadSquad.unitColor, '90'),
  'editorOverviewRuler.wordHighlightTextForeground': alpha(character.hair.bright, '60'),
  'editorOverviewRuler.findMatchForeground': alpha(vividBadSquad.unitColor, '90'),
  'editorOverviewRuler.selectionHighlightForeground': alpha(character.hair.base, '50'),
  'editorOverviewRuler.infoForeground': character.hair.base,
  'editorOverviewRuler.warningForeground': snowMiku.y2017.accessories.stars,
  'editorOverviewRuler.errorForeground': character.marks.tattoo,

  // Links and code lens
  'editorLink.activeForeground': wonderlandsShowtime.hair.highlight,
  'editorCodeLens.foreground': alpha(character.hair.highlight, 'CC'),

  // Activity Bar
  'activityBar.background': character.armWarmers.base,
  'activityBar.foreground': character.hair.base,
  'activityBar.activeBorder': vividBadSquad.unitColor,
  'activityBar.activeBackground': alpha(character.hair.shadow, '20'),
  'activityBar.inactiveForeground': virtualSinger.accessories.tieClip,
  'activityBar.border': alpha(character.tie.shadow, '60'),
  'activityBarBadge.background': heartHunter.outfit.dress,
  'activityBarBadge.foreground': powder.accessories.beret,
  'activityBarTop.foreground': character.hair.base,
  'activityBarTop.activeBorder': vividBadSquad.unitColor,
  'activityBarTop.inactiveForeground': virtualSinger.accessories.tieClip,

  // Sidebar
  'sideBar.background': character.headphones.frame,
  'sideBar.foreground': character.hair.tip,
  'sideBar.border': alpha(character.tie.shadow, '50'),
  'sideBar.dropBackground': alpha(character.hair.base, '20'),
  'sideBarSectionHeader.background': character.top.shadow,
  'sideBarSectionHeader.foreground': character.hair.highlight,
  'sideBarSectionHeader.border': alpha(vividBadSquad.unitColor, '25'),
  'sideBarTitle.foreground': character.hair.highlight,
  'sideBarStickyScroll.background': character.armWarmers.base,
  'sideBarStickyScroll.border': alpha(character.hair.base, '20'),
  'sideBarStickyScroll.shadow': alpha(supreme.outfit.underskirt, '50'),

  // Status Bar
  'statusBar.background': character.eyes.pupil,
  'statusBar.foreground': snowMiku.y2010.hair,
  'statusBar.border': alpha(character.tie.shadow, '70'),
  'statusBar.debuggingBackground': alpha(vividBadSquad.unitColor, 'E0'),
  'statusBar.debuggingForeground': powder.accessories.beret,
  'statusBar.debuggingBorder': vividBadSquad.unitColor,
  'statusBar.noFolderBackground': character.eyes.pupil,
  'statusBar.noFolderForeground': nightcord.hair.highlight,
  'statusBar.noFolderBorder': alpha(character.hair.shadow, '40'),
  'statusBarItem.remoteBackground': character.hair.base,
  'statusBarItem.remoteForeground': character.eyes.pupil,
  'statusBarItem.remoteHoverBackground': wonderlandsShowtime.hair.highlight,
  'statusBarItem.hoverBackground': alpha(mikuAppend.hair.base, '20'),
  'statusBarItem.hoverForeground': mikuAppend.hair.base,
  'statusBarItem.activeBackground': alpha(character.hair.shadow, '40'),
  'statusBarItem.errorBackground': vividBadSquad.unitColor,
  'statusBarItem.errorForeground': powder.accessories.beret,
  'statusBarItem.errorHoverBackground': alpha(vividBadSquad.unitColor, 'CC'),
  'statusBarItem.warningBackground': snowMiku.y2017.accessories.stars,
  'statusBarItem.warningForeground': character.eyes.pupil,
  'statusBarItem.warningHoverBackground': alpha(snowMiku.y2017.accessories.stars, 'CC'),
  'statusBarItem.prominentBackground': alpha(mikuAppend.hair.base, '25'),
  'statusBarItem.prominentForeground': mikuAppend.hair.base,
  'statusBarItem.prominentHoverBackground': alpha(mikuAppend.hair.base, '40'),
  'statusBarItem.prominentHoverForeground': powder.accessories.beret,
  'statusBarItem.compactHoverBackground': alpha(mikuNT.hair.base, '30'),
  'statusBarItem.focusBorder': alpha(character.hair.highlight, 'DD'),

  // Title Bar
  'titleBar.activeBackground': character.eyes.pupil,
  'titleBar.activeForeground': snowMiku.y2010.hair,
  'titleBar.inactiveBackground': character.eyes.pupil,
  'titleBar.inactiveForeground': virtualSinger.accessories.tieClip,
  'titleBar.border': alpha(character.tie.shadow, '50'),

  // Tabs
  'tab.activeBackground': alpha(character.hair.highlight, '10'),
  'tab.activeForeground': digitalStars.y2024.outfit.glitchCyan,
  'tab.activeBorderTop': character.hairTies.outline,
  'tab.activeBorder': alpha(digitalStars.y2024.outfit.glitchCyan, '40'),
  'tab.inactiveBackground': character.skirt.base,
  'tab.inactiveForeground': virtualSinger.accessories.tieClip,
  'tab.border': character.armWarmers.base,
  'tab.hoverBackground': alpha(vividBadSquad.unitColor, '15'),
  'tab.hoverForeground': character.skin.blush,
  'tab.hoverBorder': alpha(vividBadSquad.unitColor, '40'),
  'tab.unfocusedActiveBackground': character.headphones.frame,
  'tab.unfocusedActiveForeground': character.hair.tip,
  'tab.unfocusedActiveBorderTop': alpha(vividBadSquad.unitColor, '80'),
  'tab.unfocusedInactiveBackground': character.skirt.base,
  'tab.unfocusedInactiveForeground': whiteDress.accessories.bootsSole,
  'editorGroupHeader.tabsBackground': character.armWarmers.base,
  'editorGroupHeader.tabsBorder': alpha(character.hair.base, '15'),
  'editorGroupHeader.noTabsBackground': character.skirt.base,
  'editorGroup.border': alpha(character.tie.shadow, '60'),
  'editorGroup.dropBackground': alpha(character.hair.bright, '40'),

  // Lists
  'list.activeSelectionBackground': alpha(character.hair.base, '30'),
  'list.activeSelectionForeground': powder.accessories.beret,
  'list.activeSelectionIconForeground': character.hair.highlight,
  'list.inactiveSelectionBackground': alpha(character.hair.base, '20'),
  'list.inactiveSelectionForeground': snowMiku.y2010.hair,
  'list.hoverBackground': alpha(mikuNT.hair.base, '15'),
  'list.hoverForeground': snowMiku.y2010.hair,
  'list.focusBackground': alpha(vividBadSquad.unitColor, '25'),
  'list.focusForeground': character.skin.blush,
  'list.focusOutline': alpha(character.hair.highlight, 'DD'),
  'list.highlightForeground': character.skin.blush,
  'list.errorForeground': sakuraMiku.hair.base,
  'list.warningForeground': snowMiku.y2017.accessories.stars,
  'list.invalidItemForeground': sakuraMiku.hair.base,
  'list.deemphasizedForeground': nightcord.hair.highlight,
  'listFilterWidget.background': character.skirt.base,
  'listFilterWidget.outline': alpha(vividBadSquad.unitColor, '70'),
  'listFilterWidget.noMatchesOutline': character.marks.tattoo,

  // Tree
  'tree.indentGuidesStroke': alpha(vividBadSquad.unitColor, '40'),
  'tree.tableColumnsBorder': alpha(vividBadSquad.unitColor, '25'),

  // General UI
  'focusBorder': alpha(character.hair.highlight, 'DD'),
  'foreground': snowMiku.y2010.hair,
  'disabledForeground': virtualSinger.accessories.tieClip,
  'widget.shadow': alpha(supreme.outfit.underskirt, '70'),
  'selection.background': alpha(character.hair.base, '40'),
  'descriptionForeground': virtualSinger.accessories.tieClip,
  'errorForeground': sakuraMiku.hair.base,
  'icon.foreground': character.hair.tip,
  'sash.hoverBorder': alpha(vividBadSquad.unitColor, '80'),

  // Input
  'input.background': character.armWarmers.base,
  'input.foreground': snowMiku.y2010.hair,
  'input.border': alpha(character.tie.shadow, '50'),
  'input.placeholderForeground': virtualSinger.accessories.tieClip,
  'inputOption.activeBorder': vividBadSquad.unitColor,
  'inputOption.activeBackground': alpha(vividBadSquad.unitColor, '30'),
  'inputOption.activeForeground': powder.accessories.beret,
  'inputOption.hoverBackground': alpha(mikuNT.hair.base, '20'),
  'inputValidation.errorBackground': alpha(character.marks.tattoo, '25'),
  'inputValidation.errorBorder': character.marks.tattoo,
  'inputValidation.errorForeground': sakuraMiku.hair.base,
  'inputValidation.warningBackground': alpha(snowMiku.y2017.accessories.stars, '25'),
  'inputValidation.warningBorder': snowMiku.y2017.accessories.stars,
  'inputValidation.warningForeground': snowMiku.y2017.accessories.stars,
  'inputValidation.infoBackground': alpha(character.hair.base, '25'),
  'inputValidation.infoBorder': character.hair.base,
  'inputValidation.infoForeground': character.hair.base,

  // Dropdown
  'dropdown.background': character.armWarmers.base,
  'dropdown.foreground': snowMiku.y2010.hair,
  'dropdown.border': alpha(character.tie.shadow, '50'),
  'dropdown.listBackground': character.armWarmers.base,

  // Button
  'button.background': character.hair.base,
  'button.foreground': character.eyes.pupil,
  'button.hoverBackground': virtualSinger.imageColor,
  'button.secondaryBackground': character.top.main,
  'button.secondaryForeground': powder.accessories.beret,
  'button.secondaryHoverBackground': virtualSinger.accessories.tieClip,
  'button.border': alpha(character.hair.base, '80'),

  // Checkbox
  'checkbox.background': character.armWarmers.base,
  'checkbox.foreground': character.hair.base,
  'checkbox.border': alpha(character.hair.base, '60'),
  'checkbox.selectBackground': alpha(character.hair.base, '30'),
  'checkbox.selectBorder': character.hair.base,

  // Scrollbar
  'scrollbar.shadow': alpha(supreme.outfit.underskirt, '50'),
  'scrollbarSlider.background': alpha(character.hair.base, '30'),
  'scrollbarSlider.hoverBackground': alpha(character.hair.base, '50'),
  'scrollbarSlider.activeBackground': alpha(character.hair.base, '70'),

  // Minimap
  'minimap.background': alpha(character.skirt.base, 'CC'),
  'minimap.selectionHighlight': alpha(character.hair.base, '60'),
  'minimap.errorHighlight': alpha(character.marks.tattoo, '80'),
  'minimap.warningHighlight': alpha(snowMiku.y2017.accessories.stars, '80'),
  'minimap.findMatchHighlight': alpha(vividBadSquad.unitColor, '80'),
  'minimap.selectionOccurrenceHighlight': alpha(character.hair.base, '40'),
  'minimap.foregroundOpacity': '#000000CC',
  'minimapSlider.background': alpha(character.hair.base, '15'),
  'minimapSlider.hoverBackground': alpha(character.hair.base, '30'),
  'minimapSlider.activeBackground': alpha(character.hair.base, '50'),
  'minimapGutter.addedBackground': character.negi.bright,
  'minimapGutter.modifiedBackground': snowMiku.y2017.accessories.stars,
  'minimapGutter.deletedBackground': character.marks.tattoo,

  // Panel
  'panel.background': character.eyes.pupil,
  'panel.border': alpha(character.tie.shadow, '70'),
  'panel.dropBorder': character.hair.base,
  'panelTitle.activeBorder': vividBadSquad.unitColor,
  'panelTitle.activeForeground': character.hair.highlight,
  'panelTitle.inactiveForeground': virtualSinger.accessories.tieClip,
  'panelInput.border': alpha(character.hair.base, '40'),
  'panelSection.border': alpha(character.hair.base, '30'),
  'panelSection.dropBackground': alpha(character.hair.base, '20'),
  'panelSectionHeader.background': character.armWarmers.base,
  'panelSectionHeader.foreground': character.hair.highlight,
  'panelSectionHeader.border': alpha(vividBadSquad.unitColor, '20'),

  // Terminal
  'terminal.background': character.eyes.pupil,
  'terminal.foreground': snowMiku.y2010.hair,
  'terminal.selectionBackground': alpha(character.hair.base, '40'),
  'terminal.border': alpha(character.tie.shadow, '50'),
  'terminalCursor.foreground': character.hairTies.outline,
  'terminalCursor.background': character.eyes.pupil,
  // ANSI Colors
  'terminal.ansiBlack': character.skirt.base,
  'terminal.ansiRed': vividBadSquad.unitColor,
  'terminal.ansiGreen': character.negi.bright,
  'terminal.ansiYellow': snowMiku.y2017.accessories.stars,
  'terminal.ansiBlue': angel.accessories.shoes,
  'terminal.ansiMagenta': leoNeed.hair.highlight,
  'terminal.ansiCyan': character.hair.highlight,
  'terminal.ansiWhite': snowMiku.y2010.hair,
  'terminal.ansiBrightBlack': character.top.main,
  'terminal.ansiBrightRed': sakuraMiku.hair.base,
  'terminal.ansiBrightGreen': character.negi.bright,
  'terminal.ansiBrightYellow': snowMiku.y2017.accessories.stars,
  'terminal.ansiBrightBlue': wonderlandsShowtime.hair.highlight,
  'terminal.ansiBrightMagenta': leoNeed.hair.highlight,
  'terminal.ansiBrightCyan': character.hair.bright,
  'terminal.ansiBrightWhite': powder.accessories.beret,
  'terminal.tab.activeBorder': vividBadSquad.unitColor,

  // Debugger
  'debugToolBar.background': alpha(character.armWarmers.base, 'F0'),
  'debugToolBar.border': alpha(vividBadSquad.unitColor, '40'),
  'debugIcon.breakpointForeground': vividBadSquad.outfit.hoodieAccent,
  'debugIcon.breakpointDisabledForeground': virtualSinger.accessories.tieClip,
  'debugIcon.breakpointUnverifiedForeground': alpha(vividBadSquad.outfit.hoodieAccent, '80'),
  'debugIcon.breakpointCurrentStackframeForeground': snowMiku.y2017.accessories.stars,
  'debugIcon.breakpointStackframeForeground': character.negi.bright,
  'debugIcon.startForeground': character.negi.bright,
  'debugIcon.pauseForeground': snowMiku.y2017.accessories.stars,
  'debugIcon.stopForeground': character.marks.tattoo,
  'debugIcon.disconnectForeground': character.marks.tattoo,
  'debugIcon.restartForeground': character.negi.bright,
  'debugIcon.stepOverForeground': wonderlandsShowtime.hair.highlight,
  'debugIcon.stepIntoForeground': wonderlandsShowtime.hair.highlight,
  'debugIcon.stepOutForeground': wonderlandsShowtime.hair.highlight,
  'debugIcon.continueForeground': character.negi.bright,
  'debugIcon.stepBackForeground': wonderlandsShowtime.hair.highlight,
  'debugConsole.infoForeground': character.hair.base,
  'debugConsole.warningForeground': snowMiku.y2017.accessories.stars,
  'debugConsole.errorForeground': sakuraMiku.hair.base,
  'debugConsole.sourceForeground': snowMiku.y2010.hair,
  'debugConsoleInputIcon.foreground': character.hair.base,
  'debugTokenExpression.name': character.skin.blush,
  'debugTokenExpression.value': character.negi.stalk,
  'debugTokenExpression.string': character.negi.stalk,
  'debugTokenExpression.boolean': leoNeed.hair.highlight,
  'debugTokenExpression.number': character.negi.bright,
  'debugTokenExpression.error': sakuraMiku.hair.base,

  // Peek View
  'peekView.border': alpha(vividBadSquad.unitColor, '80'),
  'peekViewTitle.background': character.headphones.frame,
  'peekViewTitleLabel.foreground': character.hair.highlight,
  'peekViewTitleDescription.foreground': character.hair.tip,
  'peekViewEditor.background': character.skirt.base,
  'peekViewEditor.matchHighlightBackground': alpha(vividBadSquad.unitColor, '40'),
  'peekViewEditor.matchHighlightBorder': alpha(vividBadSquad.unitColor, '80'),
  'peekViewEditorGutter.background': character.armWarmers.base,
  'peekViewResult.background': character.headphones.frame,
  'peekViewResult.fileForeground': snowMiku.y2010.hair,
  'peekViewResult.lineForeground': character.hair.tip,
  'peekViewResult.matchHighlightBackground': alpha(vividBadSquad.unitColor, '40'),
  'peekViewResult.selectionBackground': alpha(character.hair.base, '30'),
  'peekViewResult.selectionForeground': powder.accessories.beret,

  // Diff Editor
  'diffEditor.insertedTextBackground': alpha(character.negi.bright, '15'),
  'diffEditor.insertedTextBorder': alpha(character.negi.bright, '40'),
  'diffEditor.insertedLineBackground': alpha(character.negi.bright, '10'),
  'diffEditor.removedTextBackground': alpha(vividBadSquad.unitColor, '20'),
  'diffEditor.removedTextBorder': alpha(vividBadSquad.unitColor, '40'),
  'diffEditor.removedLineBackground': alpha(vividBadSquad.unitColor, '10'),
  'diffEditor.diagonalFill': alpha(character.top.main, '30'),
  'diffEditor.border': alpha(character.hair.base, '30'),
  'diffEditor.unchangedRegionBackground': alpha(character.top.main, '15'),
  'diffEditor.unchangedRegionForeground': virtualSinger.accessories.tieClip,
  'diffEditor.unchangedCodeBackground': alpha(character.top.main, '10'),
  'diffEditorGutter.insertedLineBackground': alpha(character.negi.bright, '30'),
  'diffEditorGutter.removedLineBackground': alpha(vividBadSquad.unitColor, '30'),
  'diffEditorOverview.insertedForeground': character.negi.bright,
  'diffEditorOverview.removedForeground': vividBadSquad.unitColor,

  // Git Decoration
  'gitDecoration.addedResourceForeground': character.negi.bright,
  'gitDecoration.modifiedResourceForeground': snowMiku.y2017.accessories.stars,
  'gitDecoration.deletedResourceForeground': sakuraMiku.hair.base,
  'gitDecoration.untrackedResourceForeground': character.negi.bright,
  'gitDecoration.ignoredResourceForeground': virtualSinger.accessories.tieClip,
  'gitDecoration.conflictingResourceForeground': vividBadSquad.unitColor,
  'gitDecoration.stageModifiedResourceForeground': wonderlandsShowtime.hair.highlight,
  'gitDecoration.stageDeletedResourceForeground': leoNeed.hair.highlight,
  'gitDecoration.renamedResourceForeground': wonderlandsShowtime.hair.highlight,
  'gitDecoration.submoduleResourceForeground': ghost.hair.base,

  // Notification
  'notifications.background': character.armWarmers.base,
  'notifications.foreground': snowMiku.y2010.hair,
  'notifications.border': alpha(character.hair.base, '30'),
  'notificationToast.border': alpha(vividBadSquad.unitColor, '50'),
  'notificationCenterHeader.background': character.headphones.frame,
  'notificationCenterHeader.foreground': character.hair.highlight,
  'notificationCenter.border': alpha(character.hair.base, '30'),
  'notificationLink.foreground': wonderlandsShowtime.hair.highlight,
  'notificationsInfoIcon.foreground': character.hair.base,
  'notificationsWarningIcon.foreground': snowMiku.y2017.accessories.stars,
  'notificationsErrorIcon.foreground': character.marks.tattoo,

  // Command Center
  'commandCenter.foreground': snowMiku.y2010.hair,
  'commandCenter.background': character.eyes.pupil,
  'commandCenter.border': alpha(character.tie.shadow, '50'),
  'commandCenter.activeForeground': character.hair.highlight,
  'commandCenter.activeBackground': alpha(character.hair.base, '15'),
  'commandCenter.activeBorder': alpha(character.hair.base, '60'),
  'commandCenter.inactiveForeground': virtualSinger.accessories.tieClip,
  'commandCenter.inactiveBorder': alpha(character.tie.shadow, '30'),

  // Quick Input
  'quickInput.background': character.armWarmers.base,
  'quickInput.foreground': snowMiku.y2010.hair,
  'quickInputTitle.background': character.headphones.frame,
  'quickInputList.focusBackground': alpha(vividBadSquad.unitColor, '25'),
  'quickInputList.focusForeground': character.skin.blush,
  'quickInputList.focusIconForeground': character.hair.highlight,

  // Keybinding
  'keybindingLabel.background': alpha(character.hair.base, '20'),
  'keybindingLabel.foreground': snowMiku.y2010.hair,
  'keybindingLabel.border': alpha(character.hair.base, '40'),
  'keybindingLabel.bottomBorder': alpha(character.hair.base, '60'),

  // Breadcrumb
  'breadcrumb.foreground': character.hair.tip,
  'breadcrumb.background': character.skirt.base,
  'breadcrumb.focusForeground': character.hair.highlight,
  'breadcrumb.activeSelectionForeground': powder.accessories.beret,
  'breadcrumbPicker.background': character.armWarmers.base,

  // Menu
  'menu.background': character.armWarmers.base,
  'menu.foreground': snowMiku.y2010.hair,
  'menu.selectionBackground': alpha(character.hair.base, '30'),
  'menu.selectionForeground': powder.accessories.beret,
  'menu.selectionBorder': alpha(vividBadSquad.unitColor, '40'),
  'menu.separatorBackground': alpha(character.hair.base, '30'),
  'menu.border': alpha(character.tie.shadow, '50'),
  'menubar.selectionBackground': alpha(character.hair.base, '25'),
  'menubar.selectionForeground': powder.accessories.beret,
  'menubar.selectionBorder': alpha(vividBadSquad.unitColor, '30'),

  // Settings Editor
  'settings.headerForeground': character.hair.highlight,
  'settings.modifiedItemIndicator': vividBadSquad.unitColor,
  'settings.dropdownBackground': character.armWarmers.base,
  'settings.dropdownForeground': snowMiku.y2010.hair,
  'settings.dropdownBorder': alpha(character.hair.base, '40'),
  'settings.dropdownListBorder': alpha(character.hair.base, '50'),
  'settings.checkboxBackground': character.armWarmers.base,
  'settings.checkboxForeground': character.hair.base,
  'settings.checkboxBorder': alpha(character.hair.base, '60'),
  'settings.textInputBackground': character.armWarmers.base,
  'settings.textInputForeground': snowMiku.y2010.hair,
  'settings.textInputBorder': alpha(character.hair.base, '40'),
  'settings.numberInputBackground': character.armWarmers.base,
  'settings.numberInputForeground': snowMiku.y2010.hair,
  'settings.numberInputBorder': alpha(character.hair.base, '40'),
  'settings.focusedRowBackground': alpha(character.hair.base, '10'),
  'settings.focusedRowBorder': alpha(vividBadSquad.unitColor, '40'),
  'settings.rowHoverBackground': alpha(mikuNT.hair.base, '10'),
  'settings.sashBorder': alpha(character.hair.base, '30'),

  // Testing
  'testing.iconErrored': character.marks.tattoo,
  'testing.iconFailed': character.marks.tattoo,
  'testing.iconPassed': character.negi.bright,
  'testing.iconQueued': snowMiku.y2017.accessories.stars,
  'testing.iconUnset': virtualSinger.accessories.tieClip,
  'testing.iconSkipped': virtualSinger.accessories.tieClip,
  'testing.runAction': character.negi.bright,
  'testing.peekBorder': alpha(vividBadSquad.unitColor, '80'),
  'testing.peekHeaderBackground': character.headphones.frame,
  'testing.message.error.decorationForeground': sakuraMiku.hair.base,
  'testing.message.error.lineBackground': alpha(character.marks.tattoo, '15'),
  'testing.message.info.decorationForeground': character.hair.base,
  'testing.message.info.lineBackground': alpha(character.hair.base, '15'),

  // Welcome Page
  'welcomePage.background': character.skirt.base,
  'welcomePage.tileBackground': character.headphones.frame,
  'welcomePage.tileHoverBackground': alpha(character.hair.base, '15'),
  'welcomePage.tileBorder': alpha(character.hair.base, '30'),
  'welcomePage.progress.foreground': character.hair.base,
  'welcomePage.progress.background': character.armWarmers.base,
  'walkThrough.embeddedEditorBackground': character.skirt.base,

  // Extension
  'extensionButton.prominentBackground': character.hair.base,
  'extensionButton.prominentForeground': character.eyes.pupil,
  'extensionButton.prominentHoverBackground': virtualSinger.imageColor,
  'extensionBadge.remoteBackground': character.hair.base,
  'extensionBadge.remoteForeground': character.eyes.pupil,
  'extensionIcon.starForeground': snowMiku.y2017.accessories.stars,
  'extensionIcon.verifiedForeground': character.negi.bright,
  'extensionIcon.preReleaseForeground': leoNeed.hair.highlight,

  // Banner
  'banner.background': alpha(character.hair.base, '25'),
  'banner.foreground': snowMiku.y2010.hair,
  'banner.iconForeground': character.hair.base,

  // Sticky Scroll
  'editorStickyScroll.background': alpha(character.skirt.base, 'F0'),
  'editorStickyScroll.border': alpha(character.hair.bright, '30'),
  'editorStickyScrollHover.background': alpha(mikuNT.hair.base, '10'),

  // Notebook
  'notebook.cellBorderColor': alpha(character.hair.base, '30'),
  'notebook.cellEditorBackground': character.skirt.base,
  'notebook.cellHoverBackground': alpha(mikuNT.hair.base, '10'),
  'notebook.cellInsertionIndicator': character.hair.bright,
  'notebook.cellStatusBarItemHoverBackground': alpha(mikuNT.hair.base, '20'),
  'notebook.cellToolbarSeparator': alpha(character.hair.base, '30'),
  'notebook.editorBackground': character.headphones.frame,
  'notebook.focusedCellBorder': character.hair.highlight,
  'notebook.focusedEditorBorder': alpha(character.hair.highlight, 'CC'),
  'notebook.inactiveFocusedCellBorder': alpha(character.hair.base, '60'),
  'notebook.runningCellBorder': character.hair.bright,
  'notebook.outputContainerBackgroundColor': character.skirt.base,
  'notebook.outputContainerBorderColor': alpha(character.hair.base, '20'),
  'notebook.selectedCellBackground': alpha(character.hair.base, '15'),
  'notebook.selectedCellBorder': alpha(character.hair.base, '60'),
  'notebook.symbolHighlightBackground': alpha(character.hair.base, '20'),
  'notebookStatusSuccessIcon.foreground': character.negi.bright,
  'notebookStatusErrorIcon.foreground': character.marks.tattoo,
  'notebookStatusRunningIcon.foreground': snowMiku.y2017.accessories.stars,
  'notebookEditorOverviewRuler.runningCellForeground': snowMiku.y2017.accessories.stars,

  // Symbol Icons
  'symbolIcon.arrayForeground': virtualSinger.imageColor,
  'symbolIcon.booleanForeground': leoNeed.hair.highlight,
  'symbolIcon.classForeground': snowMiku.y2017.accessories.stars,
  'symbolIcon.colorForeground': vividBadSquad.unitColor,
  'symbolIcon.constantForeground': character.negi.bright,
  'symbolIcon.constructorForeground': wonderlandsShowtime.unitColor,
  'symbolIcon.enumeratorForeground': ghost.hair.base,
  'symbolIcon.enumeratorMemberForeground': character.negi.stalk,
  'symbolIcon.eventForeground': snowMiku.y2017.accessories.stars,
  'symbolIcon.fieldForeground': character.skin.shadow,
  'symbolIcon.fileForeground': snowMiku.y2010.hair,
  'symbolIcon.folderForeground': character.hair.base,
  'symbolIcon.functionForeground': wonderlandsShowtime.hair.highlight,
  'symbolIcon.interfaceForeground': angel.accessories.shoes,
  'symbolIcon.keyForeground': character.hair.highlight,
  'symbolIcon.keywordForeground': character.hair.highlight,
  'symbolIcon.methodForeground': character.negi.stalk,
  'symbolIcon.moduleForeground': snowMiku.y2010.hair,
  'symbolIcon.namespaceForeground': angel.accessories.shoes,
  'symbolIcon.nullForeground': character.hair.tip,
  'symbolIcon.numberForeground': character.negi.bright,
  'symbolIcon.objectForeground': snowMiku.y2010.hair,
  'symbolIcon.operatorForeground': wonderlandsShowtime.unitColor,
  'symbolIcon.packageForeground': character.hair.tip,
  'symbolIcon.propertyForeground': character.skin.blush,
  'symbolIcon.referenceForeground': virtualSinger.imageColor,
  'symbolIcon.snippetForeground': character.negi.stalk,
  'symbolIcon.stringForeground': character.negi.stalk,
  'symbolIcon.structForeground': character.skin.blush,
  'symbolIcon.textForeground': snowMiku.y2010.hair,
  'symbolIcon.typeParameterForeground': ghost.hair.base,
  'symbolIcon.unitForeground': vividBadSquad.unitColor,
  'symbolIcon.variableForeground': snowMiku.y2010.hair,

  // Inline Chat
  'inlineChat.background': alpha(character.skirt.base, 'F8'),
  'inlineChat.border': alpha(digitalStars.y2024.outfit.glitchCyan, '60'),
  'inlineChat.shadow': alpha(nightcord.unitColor, '40'),
  'inlineChatInput.background': character.armWarmers.base,
  'inlineChatInput.border': alpha(digitalStars.y2024.outfit.glitchCyan, '40'),
  'inlineChatInput.focusBorder': digitalStars.y2024.outfit.glitchCyan,
  'inlineChatInput.placeholderForeground': virtualSinger.accessories.tieClip,

  // Chat
  'chat.requestBackground': character.skirt.base,
  'chat.requestBorder': alpha(character.hair.base, '30'),
  'chat.slashCommandBackground': alpha(digitalStars.y2024.outfit.glitchCyan, '20'),
  'chat.slashCommandForeground': digitalStars.y2024.outfit.glitchCyan,
  'chat.avatarBackground': alpha(nightcord.unitColor, '30'),
  'chat.avatarForeground': digitalStars.y2024.outfit.glitchCyan,

  // Ports
  'ports.iconRunningProcessForeground': character.negi.bright,

  // Profile Badge
  'profileBadge.background': character.hair.base,
  'profileBadge.foreground': miku16thAnniversary.outfit.lace,

  // Search Editor
  'searchEditor.findMatchBackground': alpha(vividBadSquad.unitColor, '30'),
  'searchEditor.findMatchBorder': alpha(vividBadSquad.unitColor, '80'),
  'searchEditor.textInputBorder': alpha(character.hair.base, '40'),

  // Suggest Widget
  'editorSuggestWidget.background': alpha(character.armWarmers.base, 'F8'),
  'editorSuggestWidget.border': alpha(digitalStars.y2024.outfit.glitchCyan, 'CC'),
  'editorSuggestWidget.foreground': snowMiku.y2010.hair,
  'editorSuggestWidget.highlightForeground': character.skin.highlight,
  'editorSuggestWidget.selectedBackground': alpha(nightcord.unitColor, '30'),
  'editorSuggestWidget.selectedForeground': powder.accessories.beret,
  'editorSuggestWidget.selectedIconForeground': digitalStars.y2024.outfit.glitchCyan,
  'editorSuggestWidget.focusHighlightForeground': wonderlandsShowtime.hair.base,

  // Marker Navigation
  'editorMarkerNavigation.background': character.headphones.frame,
  'editorMarkerNavigationError.background': alpha(vividBadSquad.unitColor, '30'),
  'editorMarkerNavigationWarning.background': alpha(snowMiku.y2017.accessories.stars, '30'),
  'editorMarkerNavigationInfo.background': alpha(character.hair.highlight, '30'),
  'editorMarkerNavigationError.headerBackground': alpha(character.marks.tattoo, '20'),
  'editorMarkerNavigationWarning.headerBackground': alpha(snowMiku.y2017.accessories.stars, '20'),
  'editorMarkerNavigationInfo.headerBackground': alpha(character.hair.base, '20'),

  // Action Bar
  'actionBar.toggledBackground': alpha(character.hair.base, '30'),

  // Toolbar
  'toolbar.hoverBackground': alpha(mikuNT.hair.base, '20'),
  'toolbar.hoverOutline': alpha(mikuNT.hair.base, '40'),
  'toolbar.activeBackground': alpha(character.hair.shadow, '30'),

  // Badge
  'badge.foreground': character.eyes.pupil,
  'badge.background': character.hair.tip,

  // Progress Bar
  'progressBar.background': digitalStars.y2024.outfit.glitchCyan,

  // SCM
  'scmGraph.historyItemHoverLabelForeground': powder.accessories.beret,
  'scmGraph.foreground1': character.hair.base,
  'scmGraph.foreground2': vividBadSquad.unitColor,
  'scmGraph.foreground3': ghost.hair.base,
  'scmGraph.foreground4': character.hair.base,
  'scmGraph.foreground5': snowMiku.y2017.accessories.stars,

  // Folding
  'editor.foldBackground': alpha(character.hair.bright, '08'),
  'editor.foldPlaceholderForeground': alpha(character.hair.highlight, 'AA'),

  // Snippets
  'editor.snippetTabstopHighlightBackground': alpha(character.hair.bright, '18'),
  'editor.snippetTabstopHighlightBorder': alpha(character.hair.bright, '50'),
  'editor.snippetFinalTabstopHighlightBackground': alpha(vividBadSquad.unitColor, '20'),
  'editor.snippetFinalTabstopHighlightBorder': alpha(vividBadSquad.unitColor, '60'),

  // Symbol Highlight
  'editor.symbolHighlightBackground': alpha(character.hair.bright, '15'),
  'editor.symbolHighlightBorder': alpha(character.hair.bright, '40'),

  // Hover Highlight
  'editor.hoverHighlightBackground': alpha(character.hair.bright, '12'),

  // Merge Editor
  'merge.currentHeaderBackground': alpha(wonderlandsShowtime.hair.highlight, '40'),
  'merge.currentContentBackground': alpha(wonderlandsShowtime.hair.highlight, '15'),
  'merge.incomingHeaderBackground': alpha(vividBadSquad.unitColor, '40'),
  'merge.incomingContentBackground': alpha(vividBadSquad.unitColor, '15'),
  'merge.border': alpha(character.tie.shadow, '70'),
  'merge.commonContentBackground': alpha(character.top.main, '15'),
  'merge.commonHeaderBackground': alpha(character.top.main, '30'),
  'mergeEditor.changeBase.background': alpha(character.top.main, '15'),
  'mergeEditor.changeBase.word.background': alpha(character.top.main, '30'),
  'mergeEditor.conflict.input1.background': alpha(wonderlandsShowtime.hair.highlight, '15'),
  'mergeEditor.conflict.input2.background': alpha(vividBadSquad.unitColor, '15'),

  // Tab Extended
  'tab.lastPinnedBorder': alpha(vividBadSquad.unitColor, '60'),
  'tab.activeModifiedBorder': vividBadSquad.outfit.hoodieAccent,
  'tab.inactiveModifiedBorder': alpha(vividBadSquad.outfit.hoodieAccent, '60'),
  'tab.unfocusedActiveModifiedBorder': alpha(vividBadSquad.outfit.hoodieAccent, '80'),
  'tab.unfocusedInactiveModifiedBorder': alpha(vividBadSquad.outfit.hoodieAccent, '40'),
  'tab.dragAndDropBorder': alpha(character.hair.base, '60'),
  'tab.selectedBackground': character.headphones.frame,
  'tab.selectedForeground': character.hair.highlight,
  'tab.selectedBorderTop': character.hair.base,

  // Form Controls
  'radio.activeForeground': miku16thAnniversary.outfit.lace,
  'radio.activeBackground': character.hair.base,
  'radio.activeBorder': character.hair.highlight,
  'radio.inactiveForeground': virtualSinger.accessories.tieClip,
  'radio.inactiveBackground': character.armWarmers.base,
  'radio.inactiveBorder': alpha(character.hair.base, '40'),
  'radio.inactiveHoverBackground': alpha(character.hair.base, '15'),

  // Inline Edit
  'inlineEdit.gutterIndicator.primaryBorder': snowMiku.y2021.hair,
  'inlineEdit.gutterIndicator.primaryForeground': snowMiku.y2021.hair,
  'inlineEdit.gutterIndicator.primaryBackground': alpha(snowMiku.y2021.hair, '20'),
  'inlineEdit.gutterIndicator.secondaryBorder': alpha(character.hair.base, '60'),
  'inlineEdit.gutterIndicator.secondaryForeground': character.hair.highlight,
  'inlineEdit.gutterIndicator.secondaryBackground': alpha(character.hair.base, '15'),
  'inlineEdit.gutterIndicator.successfulBorder': character.negi.bright,
  'inlineEdit.gutterIndicator.successfulForeground': character.negi.bright,
  'inlineEdit.gutterIndicator.successfulBackground': alpha(character.negi.bright, '20'),
  'inlineEdit.originalBackground': alpha(character.top.main, '10'),
  'inlineEdit.modifiedBackground': alpha(angel.accessories.shoes, '15'),
  'inlineEdit.originalBorder': alpha(character.top.main, '40'),
  'inlineEdit.modifiedBorder': alpha(snowMiku.y2021.hair, '50'),

  // Editor Extended
  'editor.placeholder.foreground': alpha(mikuNT.hair.shadow, '60'),
  'editor.inactiveSelectionBackground': alpha(character.hair.base, '20'),
  'editor.wordHighlightTextBackground': alpha(character.hair.bright, '15'),
  'editor.wordHighlightTextBorder': alpha(character.hair.bright, '35'),
  'editor.findMatchForeground': character.skin.blush,
  'editor.findMatchHighlightForeground': powder.accessories.beret,
  'editor.findRangeHighlightBorder': alpha(character.hair.base, '40'),
  'search.resultsInfoForeground': snowMiku.y2010.hair,

  // Terminal Extended
  'terminal.hoverHighlightBackground': alpha(character.hair.base, '20'),
  'terminal.initialHintForeground': alpha(character.hair.highlight, '80'),
  'terminal.selectionForeground': powder.accessories.beret,
  'terminal.dropBackground': alpha(character.hair.base, '20'),
  'terminalCommandGuide.foreground': alpha(character.hair.base, '40'),
  'terminalOverviewRuler.border': alpha(character.hair.base, '30'),
  'terminalStickyScroll.background': character.eyes.pupil,
  'terminalStickyScroll.border': alpha(character.hair.base, '20'),
  'terminalStickyScrollHover.background': alpha(mikuNT.hair.base, '15'),

  // Sidebar Extended
  'sideBarTitle.background': character.headphones.frame,
  'sideBarTitle.border': alpha(character.hair.base, '15'),
  'sideBarActivityBarTop.border': alpha(character.hair.base, '15'),

  // List Extended
  'list.dropBackground': alpha(character.hair.base, '20'),
  'list.dropBetweenBackground': alpha(character.hair.base, '40'),
  'list.focusAndSelectionOutline': alpha(vividBadSquad.unitColor, '60'),
  'list.inactiveSelectionIconForeground': snowMiku.y2010.hair,
  'list.inactiveFocusBackground': alpha(character.hair.base, '15'),
  'list.inactiveFocusOutline': alpha(character.hair.base, '30'),
  'list.filterMatchBackground': alpha(vividBadSquad.unitColor, '25'),
  'list.filterMatchBorder': alpha(vividBadSquad.unitColor, '50'),
  'listFilterWidget.shadow': alpha(supreme.outfit.underskirt, '50'),

  // Tree Extended
  'tree.inactiveIndentGuidesStroke': alpha(character.hair.base, '15'),
  'tree.tableOddRowsBackground': alpha(character.hair.base, '05'),

  // Debug Extended
  'debugExceptionWidget.background': alpha(character.marks.tattoo, '20'),
  'debugExceptionWidget.border': character.marks.tattoo,
  'editor.inlineValuesForeground': snowMiku.y2021.hair,
  'editor.inlineValuesBackground': alpha(snowMiku.y2021.hair, '15'),
  'debugTokenExpression.type': mikuNT.outfit.dress,

  // Diff Extended
  'diffEditor.unchangedRegionShadow': alpha(supreme.outfit.underskirt, '30'),
  'diffEditor.move.border': alpha(ghost.hair.base, '60'),
  'diffEditor.moveActive.border': ghost.hair.base,

  // Editor Group Extended
  'editorGroup.dropIntoPromptForeground': snowMiku.y2010.hair,
  'editorGroup.dropIntoPromptBackground': alpha(character.skirt.base, 'F0'),
  'editorGroup.dropIntoPromptBorder': alpha(character.hair.base, '50'),
  'editorGroup.emptyBackground': character.headphones.frame,
  'editorGroup.focusedEmptyBorder': alpha(character.hair.base, '40'),

  // Comments
  'commentsView.resolvedIcon': character.negi.bright,
  'commentsView.unresolvedIcon': snowMiku.y2017.accessories.stars,
  'editorCommentsWidget.resolvedBorder': alpha(character.negi.bright, '60'),
  'editorCommentsWidget.unresolvedBorder': alpha(snowMiku.y2017.accessories.stars, '60'),
  'editorCommentsWidget.rangeBackground': alpha(character.hair.base, '10'),
  'editorCommentsWidget.rangeActiveBackground': alpha(character.hair.base, '20'),
  'editorCommentsWidget.replyInputBackground': character.armWarmers.base,

  // Panel Extended
  'panelTitleBadge.background': character.hair.base,
  'panelTitleBadge.foreground': powder.accessories.beret,
  'panelStickyScroll.background': character.eyes.pupil,
  'panelStickyScroll.border': alpha(character.hair.base, '20'),
  'panelStickyScroll.shadow': alpha(supreme.outfit.underskirt, '50'),
  'outputView.background': character.eyes.pupil,
  'outputViewStickyScroll.background': character.eyes.pupil,

  // Overview Ruler Extended
  'editorOverviewRuler.modifiedForeground': alpha(snowMiku.y2017.accessories.stars, '90'),
  'editorOverviewRuler.addedForeground': alpha(character.negi.bright, '90'),
  'editorOverviewRuler.deletedForeground': alpha(character.marks.tattoo, '90'),
  'editorOverviewRuler.commentForeground': alpha(mikuNT.hair.shadow, '60'),
  'editorOverviewRuler.commentUnresolvedForeground': alpha(snowMiku.y2017.accessories.stars, '60'),

  // Gutter Extended
  'editorGutter.modifiedSecondaryBackground': alpha(snowMiku.y2017.accessories.stars, '50'),
  'editorGutter.addedSecondaryBackground': alpha(character.negi.bright, '50'),
  'editorGutter.deletedSecondaryBackground': alpha(character.marks.tattoo, '50'),
  'editorGutter.commentRangeForeground': alpha(mikuNT.hair.shadow, '40'),
  'editorGutter.commentGlyphForeground': wonderlandsShowtime.hair.highlight,
  'editorGutter.commentUnresolvedGlyphForeground': snowMiku.y2017.accessories.stars,

  // Sticky Scroll Extended
  'editorStickyScroll.shadow': alpha(supreme.outfit.underskirt, '30'),
  'editorStickyScrollGutter.background': alpha(character.skirt.base, 'F0'),

  // Unicode Highlight
  'editorUnicodeHighlight.border': alpha(snowMiku.y2017.accessories.stars, '80'),
  'editorUnicodeHighlight.background': alpha(snowMiku.y2017.accessories.stars, '15'),

  // Testing Extended
  'testing.iconErrored.retired': alpha(character.marks.tattoo, '60'),
  'testing.iconFailed.retired': alpha(character.marks.tattoo, '60'),
  'testing.iconPassed.retired': alpha(character.negi.bright, '60'),
  'testing.iconQueued.retired': alpha(snowMiku.y2017.accessories.stars, '60'),
  'testing.iconUnset.retired': alpha(character.top.main, '60'),
  'testing.iconSkipped.retired': alpha(character.top.main, '60'),
  'testing.message.error.badgeBackground': alpha(character.marks.tattoo, '25'),
  'testing.message.error.badgeBorder': character.marks.tattoo,
  'testing.message.error.badgeForeground': sakuraMiku.hair.base,
  'testing.messagePeekBorder': character.hair.base,
  'testing.messagePeekHeaderBackground': character.skirt.base,
  'testing.coveredBackground': alpha(character.negi.bright, '12'),
  'testing.coveredBorder': alpha(character.negi.bright, '40'),
  'testing.coveredGutterBackground': alpha(character.negi.bright, '30'),
  'testing.uncoveredBranchBackground': alpha(vividBadSquad.unitColor, '20'),
  'testing.uncoveredBackground': alpha(vividBadSquad.unitColor, '12'),
  'testing.uncoveredBorder': alpha(vividBadSquad.unitColor, '40'),
  'testing.uncoveredGutterBackground': alpha(vividBadSquad.unitColor, '30'),
  'testing.coverCountBadgeBackground': alpha(character.hair.base, '25'),
  'testing.coverCountBadgeForeground': character.hair.highlight,

  // Interactive Session
  'interactive.activeCodeBorder': alpha(snowMiku.y2021.hair, '60'),
  'interactive.inactiveCodeBorder': alpha(character.hair.base, '30'),

  // Terminal Symbol Icons
  'terminalSymbolIcon.aliasForeground': character.hair.tip,
  'terminalSymbolIcon.branchForeground': character.hair.highlight,
  'terminalSymbolIcon.commitForeground': wonderlandsShowtime.hair.highlight,
  'terminalSymbolIcon.flagForeground': snowMiku.y2017.accessories.stars,
  'terminalSymbolIcon.optionForeground': snowMiku.y2010.hair,
  'terminalSymbolIcon.optionValueForeground': character.negi.stalk,
  'terminalSymbolIcon.methodForeground': character.skin.blush,
  'terminalSymbolIcon.argumentForeground': character.hair.tip,
  'terminalSymbolIcon.inlineSuggestionForeground': snowMiku.y2021.hair,
  'terminalSymbolIcon.fileForeground': snowMiku.y2010.hair,
  'terminalSymbolIcon.folderForeground': character.hair.base,
  'terminalSymbolIcon.pullRequestDoneForeground': character.negi.bright,
  'terminalSymbolIcon.pullRequestForeground': leoNeed.hair.highlight,
  'terminalSymbolIcon.remoteForeground': angel.accessories.shoes,
  'terminalSymbolIcon.stashForeground': character.top.main,
  'terminalSymbolIcon.symbolText': snowMiku.y2010.hair,
  'terminalSymbolIcon.symbolicLinkFileForeground': ghost.hair.base,
  'terminalSymbolIcon.symbolicLinkFolderForeground': ghost.hair.base,
  'terminalSymbolIcon.tagForeground': snowMiku.y2017.accessories.stars,

  // Chat Extended
  'chat.editedFileForeground': angel.accessories.shoes,
  'chat.linesAddedForeground': character.negi.bright,
  'chat.linesRemovedForeground': sakuraMiku.hair.base,
  'chat.requestCodeBorder': alpha(snowMiku.y2021.hair, '40'),
  'chat.requestBubbleBackground': alpha(character.hair.base, '15'),
  'chat.requestBubbleHoverBackground': alpha(character.hair.base, '25'),
  'chat.checkpointSeparator': alpha(character.hair.base, '30'),

  // Activity Bar Extended
  'activityWarningBadge.foreground': character.eyes.pupil,
  'activityWarningBadge.background': snowMiku.y2017.accessories.stars,
  'activityErrorBadge.foreground': powder.accessories.beret,
  'activityErrorBadge.background': character.marks.tattoo,

  // Command Center Extended
  'commandCenter.debuggingBackground': alpha(vividBadSquad.unitColor, '25'),

  // SCM Extended
  'scmGraph.historyItemHoverAdditionsForeground': character.negi.bright,
  'scmGraph.historyItemHoverDeletionsForeground': sakuraMiku.hair.base,
  'scmGraph.historyItemRefColor': character.hair.highlight,
  'scmGraph.historyItemRemoteRefColor': leoNeed.hair.highlight,
  'scmGraph.historyItemBaseRefColor': character.hair.base,

  // Peek View Extended
  'peekViewEditorStickyScroll.background': character.skirt.base,
  'peekViewEditorStickyScrollGutter.background': character.armWarmers.base,

  // Minimap Extended
  'minimap.chatEditHighlight': alpha(snowMiku.y2021.hair, '60'),

  // Side by Side Editor
  'sideBySideEditor.horizontalBorder': alpha(character.hair.base, '25'),
  'sideBySideEditor.verticalBorder': alpha(character.hair.base, '25'),

  // Editor Pane
  'editorPane.background': character.skirt.base,
};

export type WorkbenchColors = typeof workbenchColors;
