/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette
 */

import {
  blacks,
  teals,
  pinks,
  cyans,
  greys,
  foregrounds,
  accents,
  semantic,
  hologram,
  versionMapping,
  frequencyVisualizer,
  sekai,
  character,
  append,
  v4xVoice,
  cryptonFamily,
} from '../palette';

// Helper for alpha channels
const alpha = (hex: string, opacity: string): string => `${hex}${opacity}`;

export const workbenchColors = {
  // ==========================================================================
  // EDITOR
  // ==========================================================================
  'editor.background': blacks.base,
  'editor.foreground': foregrounds.primary,
  'editorCursor.foreground': pinks.sekai,
  'editorCursor.background': blacks.base,
  'editorMultiCursor.primary.foreground': pinks.sekai,
  'editorMultiCursor.primary.background': blacks.base,
  'editorMultiCursor.secondary.foreground': sekai.imageColor,
  'editorMultiCursor.secondary.background': blacks.base,
  'editor.lineHighlightBackground': alpha(teals.classic, '0A'),
  'editor.lineHighlightBorder': alpha(cyans.ice, '30'),
  'editor.selectionBackground': alpha(teals.classic, '25'),
  'editor.selectionHighlightBackground': alpha(teals.classic, '15'),
  'editor.selectionHighlightBorder': alpha(teals.classic, '40'),
  'editor.wordHighlightBackground': alpha(cyans.ice, '12'),
  'editor.wordHighlightBorder': alpha(cyans.ice, '40'),
  'editor.wordHighlightStrongBackground': alpha(pinks.sekai, '18'),
  'editor.wordHighlightStrongBorder': alpha(pinks.sekai, '60'),
  'editor.findMatchBackground': alpha(pinks.sekai, '50'),
  'editor.findMatchBorder': alpha(pinks.sekai, '90'),
  'editor.findMatchHighlightBackground': alpha(pinks.sekai, '20'),
  'editor.findMatchHighlightBorder': alpha(pinks.sekai, '40'),
  'editor.rangeHighlightBackground': alpha(teals.classic, '10'),
  'editor.rangeHighlightBorder': alpha(teals.classic, '30'),

  // Line numbers
  'editorLineNumber.foreground': alpha(teals.classic, '50'),
  'editorLineNumber.activeForeground': append.vivid,
  'editorLineNumber.dimmedForeground': alpha(teals.classic, '30'),

  // Indent guides - Frequency visualizer concept
  'editorIndentGuide.background1': alpha(frequencyVisualizer.bass, '12'),
  'editorIndentGuide.background2': alpha(frequencyVisualizer.low, '12'),
  'editorIndentGuide.background3': alpha(frequencyVisualizer.mid, '12'),
  'editorIndentGuide.background4': alpha(frequencyVisualizer.high, '12'),
  'editorIndentGuide.background5': alpha(frequencyVisualizer.peak, '12'),
  'editorIndentGuide.background6': alpha(frequencyVisualizer.ultra, '12'),
  'editorIndentGuide.activeBackground1': alpha(frequencyVisualizer.bass, '80'),
  'editorIndentGuide.activeBackground2': alpha(frequencyVisualizer.low, '80'),
  'editorIndentGuide.activeBackground3': alpha(frequencyVisualizer.mid, '80'),
  'editorIndentGuide.activeBackground4': alpha(frequencyVisualizer.high, '80'),
  'editorIndentGuide.activeBackground5': alpha(frequencyVisualizer.peak, '80'),
  'editorIndentGuide.activeBackground6': alpha(frequencyVisualizer.ultra, '80'),

  // Rulers and whitespace
  'editorRuler.foreground': alpha(teals.classic, '20'),
  'editorWhitespace.foreground': alpha(teals.classic, '0D'),

  // Brackets
  'editorBracketMatch.background': alpha(cyans.ice, '20'),
  'editorBracketMatch.border': alpha(cyans.ice, 'CC'),
  'editorBracketHighlight.foreground1': pinks.sekai,
  'editorBracketHighlight.foreground2': teals.classic,
  'editorBracketHighlight.foreground3': cyans.ice,
  'editorBracketHighlight.foreground4': hologram.purple,
  'editorBracketHighlight.foreground5': teals.neon,
  'editorBracketHighlight.foreground6': pinks.soft,
  'editorBracketHighlight.unexpectedBracket.foreground': semantic.error,
  'editorBracketPairGuide.background1': alpha(pinks.sekai, '25'),
  'editorBracketPairGuide.background2': alpha(teals.classic, '25'),
  'editorBracketPairGuide.background3': alpha(cyans.ice, '25'),
  'editorBracketPairGuide.background4': alpha(hologram.purple, '25'),
  'editorBracketPairGuide.background5': alpha(teals.neon, '25'),
  'editorBracketPairGuide.background6': alpha(pinks.soft, '25'),
  'editorBracketPairGuide.activeBackground1': alpha(pinks.sekai, '70'),
  'editorBracketPairGuide.activeBackground2': alpha(teals.classic, '70'),
  'editorBracketPairGuide.activeBackground3': alpha(cyans.ice, '70'),
  'editorBracketPairGuide.activeBackground4': alpha(hologram.purple, '70'),
  'editorBracketPairGuide.activeBackground5': alpha(teals.neon, '70'),
  'editorBracketPairGuide.activeBackground6': alpha(pinks.soft, '70'),

  // Gutter
  'editorGutter.addedBackground': alpha(semantic.success, '80'),
  'editorGutter.modifiedBackground': alpha(semantic.warning, '80'),
  'editorGutter.deletedBackground': alpha(semantic.error, '80'),
  'editorGutter.foldingControlForeground': alpha(teals.neon, '80'),

  // Widgets
  'editorWidget.background': blacks.outfit,
  'editorWidget.foreground': foregrounds.primary,
  'editorWidget.border': alpha(teals.classic, '50'),
  'editorWidget.resizeBorder': alpha(teals.classic, '60'),
  'editorHoverWidget.background': alpha(blacks.outfit, 'F5'),
  'editorHoverWidget.border': alpha(append.vivid, '60'),
  'editorHoverWidget.foreground': foregrounds.primary,
  'editorHoverWidget.highlightForeground': teals.classic,
  'editorHoverWidget.statusBarBackground': blacks.sleeve,
  'editorUnnecessaryCode.opacity': '#00000080',
  'editorGhostText.foreground': alpha(append.vivid, '50'),
  'editorGhostText.border': alpha(append.vivid, '20'),
  'editor.linkedEditingBackground': alpha(cyans.ice, '20'),
  'editorWatermark.foreground': alpha(teals.neon, '30'),

  // Overview ruler
  'editorOverviewRuler.bracketMatchForeground': alpha(cyans.ice, 'A0'),
  'editorOverviewRuler.wordHighlightForeground': alpha(cyans.ice, '80'),
  'editorOverviewRuler.wordHighlightStrongForeground': alpha(pinks.sekai, '90'),
  'editorOverviewRuler.wordHighlightTextForeground': alpha(cyans.ice, '60'),
  'editorOverviewRuler.findMatchForeground': alpha(pinks.sekai, '90'),
  'editorOverviewRuler.selectionHighlightForeground': alpha(teals.classic, '50'),
  'editorOverviewRuler.infoForeground': semantic.info,
  'editorOverviewRuler.warningForeground': semantic.warning,
  'editorOverviewRuler.errorForeground': semantic.error,

  // Links and code lens
  'editorLink.activeForeground': hologram.cyan,
  'editorCodeLens.foreground': alpha(teals.neon, '50'),

  // ==========================================================================
  // ACTIVITY BAR
  // ==========================================================================
  'activityBar.background': blacks.sleeve,
  'activityBar.foreground': teals.classic,
  'activityBar.activeBorder': pinks.sekai,
  'activityBar.activeBackground': alpha(v4xVoice.hard, '20'),
  'activityBar.inactiveForeground': greys.slate,
  'activityBar.border': alpha(teals.classic, '15'),
  'activityBarBadge.background': pinks.sekai,
  'activityBarBadge.foreground': '#FFFFFF',
  'activityBarTop.foreground': teals.classic,
  'activityBarTop.activeBorder': pinks.sekai,
  'activityBarTop.inactiveForeground': greys.slate,

  // ==========================================================================
  // SIDEBAR
  // ==========================================================================
  'sideBar.background': blacks.outfit,
  'sideBar.foreground': '#A8C4C0',
  'sideBar.border': alpha(teals.classic, '15'),
  'sideBar.dropBackground': alpha(teals.classic, '20'),
  'sideBarSectionHeader.background': blacks.sleeve,
  'sideBarSectionHeader.foreground': teals.classic,
  'sideBarSectionHeader.border': alpha(teals.classic, '15'),
  'sideBarTitle.foreground': teals.classic,
  'sideBarStickyScroll.background': blacks.sleeve,
  'sideBarStickyScroll.border': alpha(teals.classic, '20'),
  'sideBarStickyScroll.shadow': '#00000040',

  // ==========================================================================
  // STATUS BAR
  // ==========================================================================
  'statusBar.background': blacks.void,
  'statusBar.foreground': foregrounds.primary,
  'statusBar.border': alpha(teals.classic, '30'),
  'statusBar.debuggingBackground': pinks.sekai,
  'statusBar.debuggingForeground': '#FFFFFF',
  'statusBar.debuggingBorder': alpha(pinks.sekai, '80'),
  'statusBar.noFolderBackground': blacks.void,
  'statusBar.noFolderForeground': greys.slate,
  'statusBar.noFolderBorder': alpha(teals.classic, '20'),
  'statusBarItem.remoteBackground': teals.classic,
  'statusBarItem.remoteForeground': blacks.void,
  'statusBarItem.hoverBackground': alpha(versionMapping.hover, '25'),
  'statusBarItem.activeBackground': alpha(v4xVoice.hard, '35'),
  'statusBarItem.errorBackground': semantic.error,
  'statusBarItem.errorForeground': '#FFFFFF',
  'statusBarItem.warningBackground': semantic.warning,
  'statusBarItem.warningForeground': blacks.void,
  'statusBarItem.prominentBackground': alpha(teals.classic, '20'),
  'statusBarItem.prominentForeground': teals.classic,
  'statusBarItem.prominentHoverBackground': alpha(versionMapping.hover, '35'),

  // ==========================================================================
  // TITLE BAR
  // ==========================================================================
  'titleBar.activeBackground': blacks.void,
  'titleBar.activeForeground': foregrounds.primary,
  'titleBar.inactiveBackground': blacks.void,
  'titleBar.inactiveForeground': greys.slate,
  'titleBar.border': alpha(teals.classic, '15'),

  // ==========================================================================
  // TABS
  // ==========================================================================
  'tab.activeBackground': blacks.base,
  'tab.activeForeground': teals.classic,
  'tab.activeBorderTop': pinks.sekai,
  'tab.activeBorder': alpha(teals.classic, '40'),
  'tab.inactiveBackground': blacks.outfit,
  'tab.inactiveForeground': greys.steel,
  'tab.border': blacks.sleeve,
  'tab.hoverBackground': alpha(versionMapping.hover, '12'),
  'tab.hoverForeground': versionMapping.hover,
  'tab.hoverBorder': alpha(versionMapping.hover, '40'),
  'tab.unfocusedActiveBackground': blacks.base,
  'tab.unfocusedActiveForeground': '#A8C4C0',
  'tab.unfocusedActiveBorderTop': alpha(pinks.sekai, '80'),
  'tab.unfocusedInactiveBackground': blacks.outfit,
  'tab.unfocusedInactiveForeground': greys.slate,
  'editorGroupHeader.tabsBackground': blacks.sleeve,
  'editorGroupHeader.tabsBorder': alpha(teals.classic, '15'),
  'editorGroupHeader.noTabsBackground': blacks.outfit,
  'editorGroup.border': alpha(teals.classic, '25'),
  'editorGroup.dropBackground': alpha(teals.classic, '20'),

  // ==========================================================================
  // LISTS
  // ==========================================================================
  'list.activeSelectionBackground': alpha(teals.classic, '30'),
  'list.activeSelectionForeground': '#FFFFFF',
  'list.activeSelectionIconForeground': teals.classic,
  'list.inactiveSelectionBackground': alpha(teals.classic, '20'),
  'list.inactiveSelectionForeground': foregrounds.primary,
  'list.hoverBackground': alpha(versionMapping.hover, '15'),
  'list.hoverForeground': foregrounds.primary,
  'list.focusBackground': alpha(versionMapping.focus, '20'),
  'list.focusForeground': '#FFFFFF',
  'list.focusOutline': alpha(versionMapping.focus, '60'),
  'list.highlightForeground': pinks.sekai,
  'list.errorForeground': semantic.error,
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': alpha(semantic.error, '80'),
  'list.deemphasizedForeground': greys.slate,
  'listFilterWidget.background': blacks.outfit,
  'listFilterWidget.outline': alpha(teals.classic, '60'),
  'listFilterWidget.noMatchesOutline': semantic.error,

  // Tree
  'tree.indentGuidesStroke': alpha(teals.classic, '30'),
  'tree.tableColumnsBorder': alpha(teals.classic, '20'),

  // ==========================================================================
  // GENERAL UI
  // ==========================================================================
  'focusBorder': alpha(teals.classic, '60'),
  'foreground': foregrounds.primary,
  'disabledForeground': alpha(greys.slate, '80'),
  'widget.shadow': '#00000060',
  'selection.background': alpha(teals.classic, '40'),
  'descriptionForeground': greys.steel,
  'errorForeground': semantic.error,
  'icon.foreground': '#A8C4C0',
  'sash.hoverBorder': alpha(versionMapping.hover, '60'),

  // ==========================================================================
  // INPUT
  // ==========================================================================
  'input.background': blacks.sleeve,
  'input.foreground': foregrounds.primary,
  'input.border': alpha(teals.classic, '40'),
  'input.placeholderForeground': greys.slate,
  'inputOption.activeBorder': pinks.sekai,
  'inputOption.activeBackground': alpha(pinks.sekai, '30'),
  'inputOption.activeForeground': '#FFFFFF',
  'inputOption.hoverBackground': alpha(versionMapping.hover, '20'),
  'inputValidation.errorBackground': alpha(semantic.error, '25'),
  'inputValidation.errorBorder': semantic.error,
  'inputValidation.errorForeground': semantic.error,
  'inputValidation.warningBackground': alpha(semantic.warning, '25'),
  'inputValidation.warningBorder': semantic.warning,
  'inputValidation.warningForeground': semantic.warning,
  'inputValidation.infoBackground': alpha(semantic.info, '25'),
  'inputValidation.infoBorder': semantic.info,
  'inputValidation.infoForeground': semantic.info,

  // ==========================================================================
  // DROPDOWN
  // ==========================================================================
  'dropdown.background': blacks.sleeve,
  'dropdown.foreground': foregrounds.primary,
  'dropdown.border': alpha(teals.classic, '40'),
  'dropdown.listBackground': blacks.outfit,

  // ==========================================================================
  // BUTTON
  // ==========================================================================
  'button.background': teals.classic,
  'button.foreground': blacks.void,
  'button.hoverBackground': teals.stage,
  'button.secondaryBackground': greys.slate,
  'button.secondaryForeground': '#FFFFFF',
  'button.secondaryHoverBackground': greys.steel,
  'button.border': alpha(teals.classic, '80'),

  // ==========================================================================
  // CHECKBOX
  // ==========================================================================
  'checkbox.background': blacks.sleeve,
  'checkbox.foreground': teals.classic,
  'checkbox.border': alpha(teals.classic, '40'),

  // ==========================================================================
  // SCROLLBAR
  // ==========================================================================
  'scrollbar.shadow': '#00000040',
  'scrollbarSlider.background': alpha(teals.classic, '15'),
  'scrollbarSlider.hoverBackground': alpha(versionMapping.hover, '30'),
  'scrollbarSlider.activeBackground': alpha(pinks.sekai, '80'),

  // ==========================================================================
  // MINIMAP
  // ==========================================================================
  'minimap.findMatchHighlight': alpha(pinks.sekai, '80'),
  'minimap.selectionHighlight': alpha(teals.classic, '60'),
  'minimap.errorHighlight': alpha(semantic.error, '90'),
  'minimap.warningHighlight': alpha(semantic.warning, '90'),
  'minimap.background': alpha(blacks.outfit, '90'),
  'minimap.selectionOccurrenceHighlight': alpha(cyans.ice, '50'),
  'minimap.foregroundOpacity': '#000000C0',
  'minimap.infoHighlight': alpha(semantic.info, '80'),
  'minimapSlider.background': alpha(teals.classic, '15'),
  'minimapSlider.hoverBackground': alpha(versionMapping.hover, '30'),
  'minimapSlider.activeBackground': alpha(v4xVoice.hard, '40'),
  'minimapGutter.addedBackground': semantic.success,
  'minimapGutter.modifiedBackground': semantic.warning,
  'minimapGutter.deletedBackground': semantic.error,

  // ==========================================================================
  // BREADCRUMB
  // ==========================================================================
  'breadcrumb.foreground': greys.steel,
  'breadcrumb.background': blacks.base,
  'breadcrumb.focusForeground': teals.classic,
  'breadcrumb.activeSelectionForeground': pinks.sekai,
  'breadcrumb.activeSelectionBackground': alpha(teals.classic, '20'),
  'breadcrumbPicker.background': blacks.outfit,

  // ==========================================================================
  // TERMINAL
  // ==========================================================================
  'terminal.background': blacks.base,
  'terminal.foreground': foregrounds.primary,
  'terminal.ansiBlack': blacks.base,
  'terminal.ansiRed': semantic.error,
  'terminal.ansiGreen': semantic.success,
  'terminal.ansiYellow': semantic.warning,
  'terminal.ansiBlue': accents.blue,
  'terminal.ansiMagenta': pinks.sekai,
  'terminal.ansiCyan': semantic.info,
  'terminal.ansiWhite': foregrounds.bright,
  'terminal.ansiBrightBlack': greys.slate,
  'terminal.ansiBrightRed': accents.coralGlow,
  'terminal.ansiBrightGreen': accents.greenBright,
  'terminal.ansiBrightYellow': '#FFFF8D',
  'terminal.ansiBrightBlue': '#80D8FF',
  'terminal.ansiBrightMagenta': pinks.soft,
  'terminal.ansiBrightCyan': cyans.ice,
  'terminal.ansiBrightWhite': '#FFFFFF',
  'terminal.selectionBackground': alpha(teals.classic, '40'),
  'terminal.inactiveSelectionBackground': alpha(teals.classic, '25'),
  'terminal.findMatchBackground': alpha(pinks.sekai, '50'),
  'terminal.findMatchBorder': alpha(pinks.sekai, '90'),
  'terminal.findMatchHighlightBackground': alpha(pinks.sekai, '25'),
  'terminal.findMatchHighlightBorder': alpha(pinks.sekai, '50'),
  'terminalCursor.foreground': pinks.sekai,
  'terminalCursor.background': blacks.base,
  'terminal.border': alpha(teals.classic, '30'),
  'terminal.tab.activeBorder': pinks.sekai,
  'terminalCommandDecoration.defaultBackground': alpha(teals.classic, '60'),
  'terminalCommandDecoration.successBackground': alpha(semantic.success, '90'),
  'terminalCommandDecoration.errorBackground': alpha(semantic.error, '90'),
  'terminalOverviewRuler.cursorForeground': pinks.sekai,
  'terminalOverviewRuler.findMatchForeground': alpha(pinks.sekai, '80'),

  // ==========================================================================
  // TEXT
  // ==========================================================================
  'textLink.foreground': hologram.cyan,
  'textLink.activeForeground': cyans.ice,
  'textBlockQuote.background': blacks.outfit,
  'textBlockQuote.border': alpha(teals.classic, '60'),
  'textCodeBlock.background': blacks.sleeve,
  'textPreformat.foreground': semantic.success,
  'textSeparator.foreground': alpha(teals.classic, '30'),

  // ==========================================================================
  // NOTIFICATIONS
  // ==========================================================================
  'notifications.background': blacks.outfit,
  'notifications.foreground': foregrounds.primary,
  'notifications.border': alpha(pinks.sekai, '50'),
  'notificationToast.border': alpha(teals.classic, '40'),
  'notificationsInfoIcon.foreground': semantic.info,
  'notificationsWarningIcon.foreground': semantic.warning,
  'notificationsErrorIcon.foreground': semantic.error,
  'notificationLink.foreground': hologram.cyan,
  'notificationCenterHeader.background': blacks.sleeve,
  'notificationCenterHeader.foreground': teals.classic,
  'notificationCenter.border': alpha(teals.classic, '40'),

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': append.vivid,
  'peekViewEditor.background': blacks.outfit,
  'peekViewEditorGutter.background': blacks.sleeve,
  'peekViewResult.background': blacks.sleeve,
  'peekViewResult.selectionBackground': alpha(teals.classic, '30'),
  'peekViewResult.selectionForeground': '#FFFFFF',
  'peekViewTitle.background': blacks.void,
  'peekViewTitleLabel.foreground': teals.classic,
  'peekViewTitleDescription.foreground': greys.steel,
  'peekViewResult.fileForeground': foregrounds.primary,
  'peekViewResult.lineForeground': '#A8C4C0',
  'peekViewResult.matchHighlightBackground': alpha(pinks.sekai, '50'),
  'peekViewEditor.matchHighlightBackground': alpha(pinks.sekai, '50'),
  'peekViewEditor.matchHighlightBorder': alpha(pinks.sekai, '80'),

  // ==========================================================================
  // PICKER
  // ==========================================================================
  'pickerGroup.border': alpha(teals.classic, '30'),
  'pickerGroup.foreground': teals.classic,

  // ==========================================================================
  // GIT
  // ==========================================================================
  'gitDecoration.addedResourceForeground': semantic.success,
  'gitDecoration.modifiedResourceForeground': semantic.warning,
  'gitDecoration.deletedResourceForeground': semantic.error,
  'gitDecoration.renamedResourceForeground': semantic.info,
  'gitDecoration.untrackedResourceForeground': teals.classic,
  'gitDecoration.ignoredResourceForeground': greys.steel,
  'gitDecoration.conflictingResourceForeground': pinks.sekai,
  'gitDecoration.stageModifiedResourceForeground': semantic.warning,
  'gitDecoration.stageDeletedResourceForeground': semantic.error,
  'gitDecoration.submoduleResourceForeground': semantic.info,

  // ==========================================================================
  // DIFF EDITOR
  // ==========================================================================
  'diffEditor.insertedTextBackground': alpha(semantic.success, '18'),
  'diffEditor.removedTextBackground': alpha(semantic.error, '18'),
  'diffEditor.insertedLineBackground': alpha(semantic.success, '0D'),
  'diffEditor.removedLineBackground': alpha(semantic.error, '0D'),
  'diffEditor.diagonalFill': alpha(teals.classic, '15'),
  'diffEditor.border': alpha(teals.classic, '30'),
  'diffEditor.unchangedRegionBackground': blacks.outfit,
  'diffEditor.unchangedRegionForeground': greys.steel,
  'diffEditor.unchangedCodeBackground': alpha(teals.classic, '08'),
  'diffEditorGutter.insertedLineBackground': alpha(semantic.success, '40'),
  'diffEditorGutter.removedLineBackground': alpha(semantic.error, '40'),
  'diffEditorOverview.insertedForeground': semantic.success,
  'diffEditorOverview.removedForeground': semantic.error,
  'multiDiffEditor.headerBackground': blacks.outfit,
  'multiDiffEditor.border': alpha(teals.classic, '30'),

  // ==========================================================================
  // PANEL
  // ==========================================================================
  'panel.background': blacks.outfit,
  'panel.border': alpha(teals.classic, '30'),
  'panel.dropBorder': alpha(teals.classic, '60'),
  'panelTitle.activeForeground': teals.classic,
  'panelTitle.inactiveForeground': greys.slate,
  'panelTitle.activeBorder': pinks.sekai,
  'panelInput.border': alpha(teals.classic, '40'),
  'panelSection.border': alpha(teals.classic, '25'),
  'panelSection.dropBackground': alpha(teals.classic, '20'),
  'panelSectionHeader.background': blacks.sleeve,
  'panelSectionHeader.foreground': teals.classic,
  'panelSectionHeader.border': alpha(teals.classic, '20'),

  // ==========================================================================
  // DEBUG
  // ==========================================================================
  'debugToolBar.background': blacks.void,
  'debugToolBar.border': alpha(pinks.sekai, '60'),
  'debugIcon.breakpointForeground': pinks.sekai,
  'debugIcon.breakpointDisabledForeground': alpha(pinks.sekai, '50'),
  'debugIcon.breakpointUnverifiedForeground': semantic.warning,
  'debugIcon.breakpointCurrentStackframeForeground': cyans.ice,
  'debugIcon.breakpointStackframeForeground': semantic.success,
  'debugIcon.startForeground': semantic.success,
  'debugIcon.pauseForeground': semantic.warning,
  'debugIcon.stopForeground': semantic.error,
  'debugIcon.disconnectForeground': semantic.error,
  'debugIcon.restartForeground': semantic.success,
  'debugIcon.stepOverForeground': semantic.info,
  'debugIcon.stepIntoForeground': semantic.info,
  'debugIcon.stepOutForeground': semantic.info,
  'debugIcon.stepBackForeground': semantic.info,
  'debugIcon.continueForeground': semantic.success,
  'debugConsole.infoForeground': semantic.info,
  'debugConsole.warningForeground': semantic.warning,
  'debugConsole.errorForeground': semantic.error,
  'debugConsole.sourceForeground': semantic.success,
  'debugConsoleInputIcon.foreground': teals.classic,
  'debugTokenExpression.name': teals.classic,
  'debugTokenExpression.value': foregrounds.primary,
  'debugTokenExpression.string': semantic.success,
  'debugTokenExpression.number': pinks.sekai,
  'debugTokenExpression.boolean': pinks.sekai,
  'debugTokenExpression.error': semantic.error,
  'debugView.exceptionLabelForeground': '#FFFFFF',
  'debugView.exceptionLabelBackground': semantic.error,
  'debugView.stateLabelForeground': foregrounds.primary,
  'debugView.stateLabelBackground': alpha(teals.classic, '40'),
  'debugView.valueChangedHighlight': alpha(semantic.warning, '80'),
  'editor.stackFrameHighlightBackground': alpha(pinks.sekai, '25'),
  'editor.focusedStackFrameHighlightBackground': alpha(cyans.ice, '20'),

  // ==========================================================================
  // TESTING
  // ==========================================================================
  'testing.iconFailed': semantic.error,
  'testing.iconErrored': semantic.error,
  'testing.iconPassed': semantic.success,
  'testing.iconQueued': semantic.warning,
  'testing.iconUnset': greys.slate,
  'testing.iconSkipped': greys.slate,
  'testing.runAction': semantic.success,
  'testing.peekBorder': teals.classic,
  'testing.peekHeaderBackground': blacks.outfit,
  'testing.message.error.decorationForeground': semantic.error,
  'testing.message.error.lineBackground': alpha(semantic.error, '15'),
  'testing.message.info.decorationForeground': semantic.info,
  'testing.message.info.lineBackground': alpha(semantic.info, '15'),

  // ==========================================================================
  // MERGE EDITOR
  // ==========================================================================
  'mergeEditor.change.background': alpha(semantic.warning, '15'),
  'mergeEditor.change.word.background': alpha(semantic.warning, '30'),
  'mergeEditor.conflict.handled.minimapOverViewRuler': semantic.success,
  'mergeEditor.conflict.handledFocused.border': semantic.success,
  'mergeEditor.conflict.handledUnfocused.border': alpha(semantic.success, '80'),
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': semantic.error,
  'mergeEditor.conflict.unhandledFocused.border': semantic.error,
  'mergeEditor.conflict.unhandledUnfocused.border': alpha(semantic.error, '80'),
  'mergeEditor.conflictingLines.background': alpha(semantic.error, '15'),

  // ==========================================================================
  // SETTINGS
  // ==========================================================================
  'settings.headerForeground': teals.classic,
  'settings.modifiedItemIndicator': pinks.sekai,
  'settings.focusedRowBackground': alpha(versionMapping.focus, '10'),
  'settings.rowHoverBackground': alpha(versionMapping.hover, '08'),
  'settings.focusedRowBorder': alpha(versionMapping.focus, '40'),
  'settings.headerBorder': alpha(teals.classic, '20'),
  'settings.sashBorder': alpha(teals.classic, '30'),
  'settings.dropdownBackground': blacks.sleeve,
  'settings.dropdownForeground': foregrounds.primary,
  'settings.dropdownBorder': alpha(teals.classic, '40'),
  'settings.dropdownListBorder': alpha(teals.classic, '40'),
  'settings.checkboxBackground': blacks.sleeve,
  'settings.checkboxForeground': teals.classic,
  'settings.checkboxBorder': alpha(teals.classic, '40'),
  'settings.textInputBackground': blacks.sleeve,
  'settings.textInputForeground': foregrounds.primary,
  'settings.textInputBorder': alpha(teals.classic, '40'),
  'settings.numberInputBackground': blacks.sleeve,
  'settings.numberInputForeground': foregrounds.primary,
  'settings.numberInputBorder': alpha(teals.classic, '40'),

  // ==========================================================================
  // WELCOME PAGE
  // ==========================================================================
  'welcomePage.background': blacks.base,
  'welcomePage.tileBackground': blacks.outfit,
  'welcomePage.tileBorder': alpha(teals.classic, '30'),
  'welcomePage.tileHoverBackground': alpha(versionMapping.hover, '10'),
  'welcomePage.progress.foreground': teals.classic,
  'welcomePage.progress.background': blacks.sleeve,
  'walkThrough.embeddedEditorBackground': blacks.outfit,

  // ==========================================================================
  // EXTENSION
  // ==========================================================================
  'extensionButton.prominentBackground': teals.classic,
  'extensionButton.prominentForeground': blacks.void,
  'extensionButton.prominentHoverBackground': teals.stage,
  'extensionButton.separator': blacks.void,
  'extensionBadge.remoteBackground': pinks.sekai,
  'extensionBadge.remoteForeground': '#FFFFFF',
  'extensionIcon.starForeground': semantic.warning,
  'extensionIcon.verifiedForeground': semantic.success,
  'extensionIcon.preReleaseForeground': semantic.warning,
  'extensionIcon.sponsorForeground': pinks.sekai,

  // ==========================================================================
  // KEYBINDING
  // ==========================================================================
  'keybindingLabel.background': alpha(teals.classic, '20'),
  'keybindingLabel.foreground': teals.classic,
  'keybindingLabel.border': alpha(teals.classic, '40'),
  'keybindingLabel.bottomBorder': alpha(teals.classic, '60'),
  'keybindingTable.headerBackground': blacks.sleeve,
  'keybindingTable.rowsBackground': blacks.outfit,

  // ==========================================================================
  // CHARTS
  // ==========================================================================
  'charts.foreground': foregrounds.primary,
  'charts.lines': alpha(teals.classic, '60'),
  'charts.red': semantic.error,
  'charts.green': semantic.success,
  'charts.yellow': semantic.warning,
  'charts.blue': semantic.info,
  'charts.purple': hologram.purple,
  'charts.orange': accents.orange,

  // ==========================================================================
  // MENU
  // ==========================================================================
  'menu.background': blacks.outfit,
  'menu.foreground': foregrounds.primary,
  'menu.selectionBackground': alpha(teals.classic, '30'),
  'menu.selectionForeground': '#FFFFFF',
  'menu.selectionBorder': alpha(teals.classic, '50'),
  'menu.separatorBackground': alpha(teals.classic, '30'),
  'menu.border': alpha(teals.classic, '30'),
  'menubar.selectionBackground': alpha(teals.classic, '25'),
  'menubar.selectionForeground': '#FFFFFF',
  'menubar.selectionBorder': alpha(teals.classic, '40'),

  // ==========================================================================
  // COMMAND CENTER
  // ==========================================================================
  'commandCenter.foreground': foregrounds.primary,
  'commandCenter.background': blacks.sleeve,
  'commandCenter.border': alpha(teals.classic, '30'),
  'commandCenter.activeBackground': alpha(teals.classic, '25'),
  'commandCenter.activeForeground': teals.classic,
  'commandCenter.activeBorder': alpha(teals.classic, '60'),
  'commandCenter.inactiveForeground': greys.steel,
  'commandCenter.inactiveBorder': alpha(teals.classic, '20'),

  // ==========================================================================
  // QUICK INPUT
  // ==========================================================================
  'quickInput.background': blacks.outfit,
  'quickInput.foreground': foregrounds.primary,
  'quickInputTitle.background': blacks.sleeve,
  'quickInputList.focusBackground': alpha(versionMapping.focus, '30'),
  'quickInputList.focusForeground': '#FFFFFF',
  'quickInputList.focusIconForeground': teals.classic,

  // ==========================================================================
  // BANNER
  // ==========================================================================
  'banner.background': blacks.outfit,
  'banner.foreground': foregrounds.primary,
  'banner.iconForeground': teals.classic,

  // ==========================================================================
  // ERRORS & WARNINGS
  // ==========================================================================
  'editorError.foreground': semantic.error,
  'editorError.border': alpha(semantic.error, '40'),
  'editorError.background': alpha(semantic.error, '15'),
  'editorWarning.foreground': semantic.warning,
  'editorWarning.border': alpha(semantic.warning, '40'),
  'editorWarning.background': alpha(semantic.warning, '15'),
  'editorInfo.foreground': semantic.info,
  'editorInfo.border': alpha(semantic.info, '40'),
  'editorInfo.background': alpha(semantic.info, '15'),
  'editorHint.foreground': semantic.success,
  'editorHint.border': alpha(semantic.success, '40'),
  'problemsErrorIcon.foreground': semantic.error,
  'problemsWarningIcon.foreground': semantic.warning,
  'problemsInfoIcon.foreground': semantic.info,

  // ==========================================================================
  // LIGHTBULB
  // ==========================================================================
  'editorLightBulb.foreground': semantic.warning,
  'editorLightBulbAutoFix.foreground': semantic.success,
  'editorLightBulbAi.foreground': pinks.sekai,

  // ==========================================================================
  // INLAY HINTS
  // ==========================================================================
  'editorInlayHint.background': alpha(cyans.ice, '08'),
  'editorInlayHint.foreground': alpha(teals.neon, '70'),
  'editorInlayHint.typeForeground': alpha(versionMapping.types, '60'),
  'editorInlayHint.typeBackground': alpha(versionMapping.types, '08'),
  'editorInlayHint.parameterForeground': alpha(pinks.soft, '60'),
  'editorInlayHint.parameterBackground': alpha(pinks.soft, '08'),

  // ==========================================================================
  // STICKY SCROLL
  // ==========================================================================
  'editorStickyScroll.background': alpha(blacks.outfit, 'F0'),
  'editorStickyScroll.border': alpha(cyans.ice, '30'),
  'editorStickyScrollHover.background': alpha(versionMapping.hover, '10'),

  // ==========================================================================
  // NOTEBOOK
  // ==========================================================================
  'notebook.cellBorderColor': alpha(teals.classic, '30'),
  'notebook.cellEditorBackground': blacks.outfit,
  'notebook.cellHoverBackground': alpha(versionMapping.hover, '10'),
  'notebook.cellInsertionIndicator': cyans.ice,
  'notebook.cellStatusBarItemHoverBackground': alpha(versionMapping.hover, '20'),
  'notebook.cellToolbarSeparator': alpha(teals.classic, '30'),
  'notebook.editorBackground': blacks.base,
  'notebook.focusedCellBorder': append.vivid,
  'notebook.focusedEditorBorder': alpha(append.vivid, '80'),
  'notebook.inactiveFocusedCellBorder': alpha(teals.classic, '60'),
  'notebook.runningCellBorder': cyans.ice,
  'notebook.outputContainerBackgroundColor': blacks.outfit,
  'notebook.outputContainerBorderColor': alpha(teals.classic, '20'),
  'notebook.selectedCellBackground': alpha(teals.classic, '15'),
  'notebook.selectedCellBorder': alpha(teals.classic, '60'),
  'notebook.symbolHighlightBackground': alpha(teals.classic, '20'),
  'notebookStatusSuccessIcon.foreground': semantic.success,
  'notebookStatusErrorIcon.foreground': semantic.error,
  'notebookStatusRunningIcon.foreground': semantic.warning,
  'notebookEditorOverviewRuler.runningCellForeground': semantic.warning,

  // ==========================================================================
  // SYMBOL ICONS
  // ==========================================================================
  'symbolIcon.arrayForeground': versionMapping.functions,
  'symbolIcon.booleanForeground': pinks.sekai,
  'symbolIcon.classForeground': versionMapping.types,
  'symbolIcon.colorForeground': pinks.sekai,
  'symbolIcon.constantForeground': pinks.sekai,
  'symbolIcon.constructorForeground': versionMapping.functions,
  'symbolIcon.enumeratorForeground': versionMapping.types,
  'symbolIcon.enumeratorMemberForeground': pinks.sekai,
  'symbolIcon.eventForeground': versionMapping.types,
  'symbolIcon.fieldForeground': '#85ADA5',
  'symbolIcon.fileForeground': foregrounds.primary,
  'symbolIcon.folderForeground': teals.classic,
  'symbolIcon.functionForeground': versionMapping.functions,
  'symbolIcon.interfaceForeground': versionMapping.types,
  'symbolIcon.keyForeground': teals.classic,
  'symbolIcon.keywordForeground': teals.classic,
  'symbolIcon.methodForeground': versionMapping.functions,
  'symbolIcon.moduleForeground': versionMapping.types,
  'symbolIcon.namespaceForeground': teals.classic,
  'symbolIcon.nullForeground': pinks.sekai,
  'symbolIcon.numberForeground': pinks.sekai,
  'symbolIcon.objectForeground': versionMapping.types,
  'symbolIcon.operatorForeground': teals.classic,
  'symbolIcon.packageForeground': teals.classic,
  'symbolIcon.propertyForeground': '#85ADA5',
  'symbolIcon.referenceForeground': versionMapping.functions,
  'symbolIcon.snippetForeground': semantic.success,
  'symbolIcon.stringForeground': semantic.success,
  'symbolIcon.structForeground': versionMapping.types,
  'symbolIcon.textForeground': foregrounds.primary,
  'symbolIcon.typeParameterForeground': versionMapping.types,
  'symbolIcon.unitForeground': pinks.sekai,
  'symbolIcon.variableForeground': foregrounds.primary,

  // ==========================================================================
  // INLINE CHAT
  // ==========================================================================
  'inlineChat.background': blacks.outfit,
  'inlineChat.border': alpha(teals.classic, '40'),
  'inlineChat.shadow': '#00000060',
  'inlineChatInput.background': blacks.sleeve,
  'inlineChatInput.border': alpha(teals.classic, '40'),
  'inlineChatInput.focusBorder': alpha(teals.classic, '60'),
  'inlineChatInput.placeholderForeground': greys.slate,
  'inlineChatDiff.inserted': alpha(semantic.success, '20'),
  'inlineChatDiff.removed': alpha(semantic.error, '20'),

  // ==========================================================================
  // CHAT
  // ==========================================================================
  'chat.requestBackground': blacks.outfit,
  'chat.requestBorder': alpha(teals.classic, '30'),

  // ==========================================================================
  // PORTS
  // ==========================================================================
  'ports.iconRunningProcessForeground': semantic.success,

  // ==========================================================================
  // PROFILE BADGE
  // ==========================================================================
  'profileBadge.background': teals.classic,
  'profileBadge.foreground': blacks.void,

  // ==========================================================================
  // LANGUAGE STATUS
  // ==========================================================================
  'languageStatus.icon.foreground': teals.classic,

  // ==========================================================================
  // SEARCH EDITOR
  // ==========================================================================
  'searchEditor.findMatchBackground': alpha(pinks.sekai, '30'),
  'searchEditor.findMatchBorder': alpha(pinks.sekai, '80'),
  'searchEditor.textInputBorder': alpha(teals.classic, '40'),

  // ==========================================================================
  // UNICODE HIGHLIGHT
  // ==========================================================================
  'editorUnicodeHighlight.border': alpha(semantic.warning, '80'),
  'editorUnicodeHighlight.background': alpha(semantic.warning, '15'),

  // ==========================================================================
  // SUGGEST WIDGET
  // ==========================================================================
  'editorSuggestWidget.background': alpha(blacks.outfit, 'F8'),
  'editorSuggestWidget.border': alpha(append.vivid, '50'),
  'editorSuggestWidget.foreground': foregrounds.primary,
  'editorSuggestWidget.highlightForeground': cyans.ice,
  'editorSuggestWidget.selectedBackground': alpha(teals.classic, '30'),
  'editorSuggestWidget.selectedForeground': '#FFFFFF',
  'editorSuggestWidget.selectedIconForeground': cyans.ice,
  'editorSuggestWidget.focusHighlightForeground': cyans.ice,

  // ==========================================================================
  // MARKER NAVIGATION
  // ==========================================================================
  'editorMarkerNavigation.background': blacks.outfit,
  'editorMarkerNavigationError.background': alpha(semantic.error, '30'),
  'editorMarkerNavigationWarning.background': alpha(semantic.warning, '30'),
  'editorMarkerNavigationInfo.background': alpha(semantic.info, '30'),
  'editorMarkerNavigationError.headerBackground': alpha(semantic.error, '20'),
  'editorMarkerNavigationWarning.headerBackground': alpha(semantic.warning, '20'),
  'editorMarkerNavigationInfo.headerBackground': alpha(semantic.info, '20'),

  // ==========================================================================
  // ACTION BAR
  // ==========================================================================
  'actionBar.toggledBackground': alpha(teals.classic, '30'),

  // ==========================================================================
  // TOOLBAR
  // ==========================================================================
  'toolbar.hoverBackground': alpha(versionMapping.hover, '20'),
  'toolbar.hoverOutline': alpha(versionMapping.hover, '40'),
  'toolbar.activeBackground': alpha(v4xVoice.hard, '30'),

  // ==========================================================================
  // EDITOR ACTION LIST
  // ==========================================================================
  'editorActionList.background': blacks.outfit,
  'editorActionList.foreground': foregrounds.primary,
  'editorActionList.focusBackground': alpha(versionMapping.focus, '30'),
  'editorActionList.focusForeground': '#FFFFFF',

  // ==========================================================================
  // COMMENTS WIDGET
  // ==========================================================================
  'editorCommentsWidget.resolvedBorder': alpha(semantic.success, '60'),
  'editorCommentsWidget.unresolvedBorder': alpha(semantic.warning, '60'),
  'editorCommentsWidget.rangeBackground': alpha(teals.classic, '10'),
  'editorCommentsWidget.rangeActiveBackground': alpha(teals.classic, '20'),
  'editorCommentsWidget.replyInputBackground': blacks.sleeve,

  // ==========================================================================
  // FOLDING
  // ==========================================================================
  'editor.foldBackground': alpha(cyans.ice, '08'),
  'editor.foldPlaceholderForeground': alpha(teals.neon, '90'),

  // ==========================================================================
  // SNIPPETS
  // ==========================================================================
  'editor.snippetTabstopHighlightBackground': alpha(cyans.ice, '18'),
  'editor.snippetTabstopHighlightBorder': alpha(cyans.ice, '50'),
  'editor.snippetFinalTabstopHighlightBackground': alpha(pinks.sekai, '20'),
  'editor.snippetFinalTabstopHighlightBorder': alpha(pinks.sekai, '60'),

  // ==========================================================================
  // SYMBOL HIGHLIGHT
  // ==========================================================================
  'editor.symbolHighlightBackground': alpha(cyans.ice, '15'),
  'editor.symbolHighlightBorder': alpha(cyans.ice, '40'),

  // ==========================================================================
  // HOVER HIGHLIGHT
  // ==========================================================================
  'editor.hoverHighlightBackground': alpha(cyans.ice, '12'),

  // ==========================================================================
  // SCM
  // ==========================================================================
  'scm.historyItemAdditionsForeground': semantic.success,
  'scm.historyItemDeletionsForeground': semantic.error,
  'scm.historyItemStatisticsBorder': alpha(teals.classic, '30'),
  'scm.historyItemSelectedStatisticsBorder': alpha(teals.classic, '60'),
  'scmGraph.historyItemGroupLocal': teals.classic,
  'scmGraph.historyItemGroupRemote': pinks.sekai,
  'scmGraph.historyItemGroupBase': greys.slate,
  'scmGraph.historyItemGroupHoverLabelForeground': '#FFFFFF',
  'scmGraph.green1': semantic.success,
  'scmGraph.green2': accents.greenBright,
  'scmGraph.red1': semantic.error,
  'scmGraph.yellow1': semantic.warning,
  'scmGraph.foreground1': teals.classic,
  'scmGraph.foreground2': pinks.sekai,
  'scmGraph.foreground3': hologram.purple,
  'scmGraph.foreground4': semantic.info,
  'scmGraph.foreground5': semantic.warning,
} as const;

export type WorkbenchColors = typeof workbenchColors;
