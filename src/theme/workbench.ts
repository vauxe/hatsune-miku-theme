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
  versions,
  cryptonFamily,
  snowMiku,
  projectSekai,
  mikuExpo,
  digital,
  stage,
  numberSymbolism,
} from '../palette';

// Helper for alpha channels
const alpha = (hex: string, opacity: string): string => `${hex}${opacity}`;

export const workbenchColors = {
  // ==========================================================================
  // EDITOR - Character-Semantic Backgrounds
  // Main canvas is the skirt (stage), deep attention is pupil (focus)
  // ==========================================================================
  'editor.background': character.skirt.black, // #15191D - Main stage canvas
  'editor.foreground': foregrounds.primary,
  'editorCursor.foreground': character.hairTies.base, // #E05096 - Hair ties pink cursor
  'editorCursor.background': character.eyes.pupil,
  'editorMultiCursor.primary.foreground': character.hairTies.base, // Hair ties pink
  'editorMultiCursor.primary.background': character.headphones.body,
  'editorMultiCursor.secondary.foreground': character.hairTies.highlight, // Lighter pink
  'editorMultiCursor.secondary.background': character.headphones.body,
  'editor.lineHighlightBackground': alpha(versionMapping.identity, '0A'),
  'editor.lineHighlightBorder': alpha(cyans.ice, '30'),
  // SEKAI Heterochromia Selection - both eye colors
  'editor.selectionBackground': alpha(sekai.heteroTurquoise, '35'), // #33CCBB
  'editor.selectionHighlightBackground': alpha(sekai.heteroPink, '25'), // #FF80AB
  'editor.selectionHighlightBorder': alpha(sekai.heteroTurquoise, '40'),
  'editor.wordHighlightBackground': alpha(sekai.heteroTurquoise, '20'),
  'editor.wordHighlightBorder': alpha(sekai.heteroTurquoise, '40'),
  'editor.wordHighlightStrongBackground': alpha(sekai.heteroPink, '30'),
  'editor.wordHighlightStrongBorder': alpha(sekai.heteroPink, '60'),
  // 39 Number Symbolism - Find matches
  'editor.findMatchBackground': alpha(numberSymbolism.miku39.heart, '35'), // #FF69B4
  'editor.findMatchBorder': alpha(numberSymbolism.miku39.heart, '90'),
  'editor.findMatchHighlightBackground': alpha(numberSymbolism.miku39.celebration, '30'), // #FFD700
  'editor.findMatchHighlightBorder': alpha(numberSymbolism.miku39.celebration, '60'),
  'editor.rangeHighlightBackground': alpha(teals.classic, '10'),
  'editor.rangeHighlightBorder': alpha(teals.classic, '30'),

  // Line numbers - Character tie colors
  'editorLineNumber.foreground': character.tie.shadow, // #2D9E97
  'editorLineNumber.activeForeground': character.eyes.iris, // #39C5BB
  'editorLineNumber.dimmedForeground': alpha(character.tie.shadow, 'AA'),
  'editorLineNumber.warningForeground': semantic.warning,
  'editorLineNumber.errorForeground': semantic.error,

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

  // Brackets - Digital data stream pattern
  'editorBracketMatch.background': alpha(digital.dataStream, '25'), // #39C5BB
  'editorBracketMatch.border': digital.binaryGlow, // #5DE4DB
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
  'editorBracketPairGuide.activeBackground1': alpha(pinks.sekai, '50'), // Reduced from 70 to reduce visual noise
  'editorBracketPairGuide.activeBackground2': alpha(teals.classic, '50'),
  'editorBracketPairGuide.activeBackground3': alpha(cyans.ice, '50'),
  'editorBracketPairGuide.activeBackground4': alpha(hologram.purple, '50'),
  'editorBracketPairGuide.activeBackground5': alpha(teals.neon, '50'),
  'editorBracketPairGuide.activeBackground6': alpha(pinks.soft, '50'),

  // Gutter
  'editorGutter.addedBackground': alpha(semantic.success, '80'),
  'editorGutter.modifiedBackground': alpha(semantic.warning, '80'),
  'editorGutter.deletedBackground': alpha(semantic.error, '80'),
  'editorGutter.foldingControlForeground': alpha(teals.neon, 'BB'),

  // Widgets - Boots black (grounded overlay)
  'editorWidget.background': character.boots.black, // #111417
  'editorWidget.foreground': versionMapping.hover,
  'editorWidget.border': alpha(teals.classic, '50'),
  'editorWidget.resizeBorder': alpha(teals.classic, '60'),
  'editorHoverWidget.background': alpha(blacks.outfit, 'F5'),
  'editorHoverWidget.border': alpha(append.vivid, '60'),
  'editorHoverWidget.foreground': foregrounds.primary,
  'editorHoverWidget.highlightForeground': teals.classic,
  'editorHoverWidget.statusBarBackground': blacks.sleeve,
  'editorUnnecessaryCode.opacity': '#00000080',
  // V6 AI - Ghost text and AI-powered features
  'editorGhostText.foreground': alpha(versions.v6ai, 'BB'), // #41D9CF - V6 AI
  'editorGhostText.border': alpha(versions.v6ai, '40'),
  'editorGhostText.background': alpha(versions.v6ai, '0A'),
  'editor.linkedEditingBackground': alpha(cyans.ice, '20'),
  'editorWatermark.foreground': alpha(teals.neon, '70'),

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
  'editorCodeLens.foreground': alpha(teals.neon, 'CC'), // Boosted from AA for Lc ~52

  // ==========================================================================
  // ACTIVITY BAR - Arm warmers (interface frame)
  // ==========================================================================
  'activityBar.background': character.armWarmers.black, // #111417
  'activityBar.foreground': teals.classic,
  'activityBar.activeBorder': pinks.sekai,
  'activityBar.activeBackground': alpha(v4xVoice.hard, '20'),
  'activityBar.inactiveForeground': greys.silver,
  'activityBar.border': alpha(teals.classic, '15'),
  'activityBarBadge.background': character.hair.pinkStreak, // #FF6B9D - Pink streak
  'activityBarBadge.foreground': '#FFFFFF',
  'activityBarTop.foreground': teals.classic,
  'activityBarTop.activeBorder': pinks.sekai,
  'activityBarTop.inactiveForeground': greys.silver,

  // ==========================================================================
  // SIDEBAR - Headphones body (interface frame)
  // ==========================================================================
  'sideBar.background': character.headphones.body, // #1A1F24
  'sideBar.foreground': '#A8C4C0',
  'sideBar.border': alpha(teals.classic, '15'),
  'sideBar.dropBackground': alpha(teals.classic, '20'),
  'sideBarSectionHeader.background': character.outfitTop.shadow, // #263238 - Outfit shadow
  'sideBarSectionHeader.foreground': character.eyes.iris, // #39C5BB
  'sideBarSectionHeader.border': alpha(character.tie.teal, '15'),
  'sideBarTitle.foreground': teals.classic,
  'sideBarStickyScroll.background': blacks.sleeve,
  'sideBarStickyScroll.border': alpha(teals.classic, '20'),
  'sideBarStickyScroll.shadow': '#00000040',

  // ==========================================================================
  // STATUS BAR - Data Stream Console (Cyber-Diva Information Flow)
  // Sharp futuristic bottom panel with electric accents
  // ==========================================================================
  'statusBar.background': blacks.void,
  'statusBar.foreground': foregrounds.primary,
  'statusBar.border': alpha(frequencyVisualizer.mid, '35'), // V2 Classic teal border
  'statusBar.debuggingBackground': alpha(pinks.sekai, 'E0'), // Translucent debug mode
  'statusBar.debuggingForeground': '#FFFFFF',
  'statusBar.debuggingBorder': pinks.sekai,
  'statusBar.noFolderBackground': blacks.void,
  'statusBar.noFolderForeground': greys.silver,
  'statusBar.noFolderBorder': alpha(frequencyVisualizer.bass, '40'), // Dark teal when no folder
  'statusBarItem.remoteBackground': frequencyVisualizer.mid, // #39C5BB - Identity teal
  'statusBarItem.remoteForeground': blacks.void,
  'statusBarItem.remoteHoverBackground': frequencyVisualizer.high, // #3ED1C8 - NT bright on hover
  'statusBarItem.hoverBackground': alpha(append.vivid, '20'), // Electric vivid hover
  'statusBarItem.hoverForeground': append.vivid, // #00E5D4 - Electric text on hover
  'statusBarItem.activeBackground': alpha(v4xVoice.hard, '40'), // V4X Hard pressed
  'statusBarItem.errorBackground': digital.glitch, // #FF5370 - Digital glitch
  'statusBarItem.errorForeground': '#FFFFFF',
  'statusBarItem.errorHoverBackground': alpha(digital.glitch, 'CC'),
  'statusBarItem.warningBackground': accents.amber,
  'statusBarItem.warningForeground': blacks.void,
  'statusBarItem.warningHoverBackground': alpha(accents.amber, 'CC'),
  'statusBarItem.prominentBackground': alpha(append.vivid, '25'), // Electric prominent items
  'statusBarItem.prominentForeground': append.vivid, // #00E5D4 - Electric text
  'statusBarItem.prominentHoverBackground': alpha(append.vivid, '40'),
  'statusBarItem.prominentHoverForeground': '#FFFFFF',
  'statusBarItem.compactHoverBackground': alpha(versionMapping.hover, '30'),
  'statusBarItem.focusBorder': alpha(append.vivid, '80'), // Electric focus ring

  // ==========================================================================
  // TITLE BAR
  // ==========================================================================
  'titleBar.activeBackground': blacks.void,
  'titleBar.activeForeground': foregrounds.primary,
  'titleBar.inactiveBackground': blacks.void,
  'titleBar.inactiveForeground': greys.silver,
  'titleBar.border': alpha(teals.classic, '15'),

  // ==========================================================================
  // TABS
  // ==========================================================================
  'tab.activeBackground': blacks.base,
  'tab.activeForeground': teals.classic,
  'tab.activeBorderTop': pinks.sekai,
  'tab.activeBorder': alpha(teals.classic, '40'),
  'tab.inactiveBackground': blacks.outfit,
  'tab.inactiveForeground': greys.silver,
  'tab.border': blacks.sleeve,
  'tab.hoverBackground': alpha(versionMapping.hover, '12'),
  'tab.hoverForeground': versionMapping.hover,
  'tab.hoverBorder': alpha(versionMapping.hover, '40'),
  'tab.unfocusedActiveBackground': blacks.base,
  'tab.unfocusedActiveForeground': '#A8C4C0',
  'tab.unfocusedActiveBorderTop': alpha(pinks.sekai, '80'),
  'tab.unfocusedInactiveBackground': blacks.outfit,
  'tab.unfocusedInactiveForeground': greys.silver,
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
  'list.errorForeground': digital.glitch, // #FF5370
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': semantic.error, // Full color - removed alpha for APCA compliance
  'list.deemphasizedForeground': greys.silver,
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
  'disabledForeground': greys.silver,
  'widget.shadow': '#00000060',
  'selection.background': alpha(versionMapping.identity, '40'),
  'descriptionForeground': greys.silver,
  'errorForeground': digital.glitch, // #FF5370
  'icon.foreground': '#A8C4C0',
  'sash.hoverBorder': alpha(versionMapping.hover, '60'),

  // ==========================================================================
  // INPUT
  // ==========================================================================
  'input.background': blacks.sleeve,
  'input.foreground': foregrounds.primary,
  'input.border': alpha(teals.classic, '40'),
  'input.placeholderForeground': greys.silver,
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
  // DROPDOWN - Boots black (grounded overlay)
  // ==========================================================================
  'dropdown.background': character.boots.black, // #111417
  'dropdown.foreground': foregrounds.primary,
  'dropdown.border': alpha(teals.classic, '40'),
  'dropdown.listBackground': character.boots.black,

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
  // SCROLLBAR - Hair gradient (root to tip)
  // ==========================================================================
  'scrollbar.shadow': '#00000040',
  'scrollbarSlider.background': alpha(character.hair.root, '30'), // #1A8A82 - Hair root
  'scrollbarSlider.hoverBackground': alpha(character.hair.tip, '40'), // #7FEDE5 - Hair tip
  'scrollbarSlider.activeBackground': alpha(character.hairTies.base, '80'), // Pink when active

  // ==========================================================================
  // MINIMAP - Holographic Code Preview (Cyber-Diva Scan Display)
  // Digital grid/scan lines with holographic glow effects
  // ==========================================================================
  'minimap.findMatchHighlight': alpha(numberSymbolism.miku39.heart, '90'), // 39 Heart highlight
  'minimap.selectionHighlight': alpha(hologram.cyan, '70'), // #4DD0E1 - Holographic selection
  'minimap.errorHighlight': alpha(digital.glitch, '95'), // Glitch red for errors
  'minimap.warningHighlight': alpha(accents.amber, '90'), // Amber warnings
  'minimap.background': alpha(hologram.cyan, '08'), // Subtle holographic tint
  'minimap.selectionOccurrenceHighlight': alpha(append.vivid, '50'), // #00E5D4 - Electric occurrence
  'minimap.foregroundOpacity': '#000000BB', // Slightly more transparent for glow-through
  'minimap.infoHighlight': alpha(hologram.cyan, '80'), // Holographic info
  'minimapSlider.background': alpha(hologram.cyan, '25'), // Holographic slider
  'minimapSlider.hoverBackground': alpha(append.vivid, '35'), // Electric on hover
  'minimapSlider.activeBackground': alpha(pinks.sekai, '45'), // SEKAI pink when active
  'minimapGutter.addedBackground': alpha(character.negi.bright, '90'), // #69F0AE - Negi green
  'minimapGutter.modifiedBackground': alpha(accents.amber, '90'), // Amber modified
  'minimapGutter.deletedBackground': alpha(digital.glitch, '90'), // Glitch red deleted

  // ==========================================================================
  // BREADCRUMB
  // ==========================================================================
  'breadcrumb.foreground': foregrounds.secondary,
  'breadcrumb.background': blacks.base,
  'breadcrumb.focusForeground': teals.classic,
  'breadcrumb.activeSelectionForeground': pinks.sekai,
  'breadcrumb.activeSelectionBackground': alpha(teals.classic, '20'),
  'breadcrumbPicker.background': blacks.outfit,

  // ==========================================================================
  // TERMINAL - Stage performance ambiance
  // ==========================================================================
  'terminal.background': character.skirt.black, // Main stage
  'terminal.foreground': foregrounds.primary,
  'terminal.ansiBlack': blacks.base,
  'terminal.ansiRed': semantic.error,
  'terminal.ansiGreen': semantic.success,
  'terminal.ansiYellow': semantic.warning,
  'terminal.ansiBlue': accents.blue,
  'terminal.ansiMagenta': pinks.sekai,
  'terminal.ansiCyan': semantic.info,
  'terminal.ansiWhite': foregrounds.bright,
  'terminal.ansiBrightBlack': greys.silver,
  'terminal.ansiBrightRed': accents.coralGlow,
  'terminal.ansiBrightGreen': accents.greenBright,
  'terminal.ansiBrightYellow': '#FFFF8D',
  'terminal.ansiBrightBlue': '#80D8FF',
  'terminal.ansiBrightMagenta': pinks.soft,
  'terminal.ansiBrightCyan': versions.nt2, // #40D3CA - NT2 refined
  'terminal.ansiBrightWhite': '#FFFFFF',
  'terminal.selectionBackground': alpha(teals.classic, '40'),
  'terminal.inactiveSelectionBackground': alpha(teals.classic, '25'),
  'terminal.findMatchBackground': alpha(pinks.sekai, '50'),
  'terminal.findMatchBorder': alpha(pinks.sekai, '90'),
  'terminal.findMatchHighlightBackground': alpha(pinks.sekai, '25'),
  'terminal.findMatchHighlightBorder': alpha(pinks.sekai, '50'),
  'terminalCursor.foreground': character.hairTies.base, // #E05096 - Hair ties pink
  'terminalCursor.background': character.skirt.black,
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
  // NOTIFICATIONS - Digital Holographic System (Cyber-Diva Alerts)
  // Translucent panels with glitch accents for futuristic feel
  // ==========================================================================
  'notifications.background': alpha(blacks.outfit, 'F5'), // Translucent for holographic feel
  'notifications.foreground': foregrounds.primary,
  'notifications.border': alpha(hologram.cyan, '40'), // Holographic cyan border
  'notificationToast.border': alpha(append.vivid, '50'), // Electric vivid border
  'notificationsInfoIcon.foreground': hologram.cyan, // #4DD0E1 - Holographic info
  'notificationsWarningIcon.foreground': accents.amber, // #FFAB40 - Warm amber warning
  'notificationsErrorIcon.foreground': digital.glitch, // #FF5370 - Digital glitch error
  'notificationLink.foreground': versions.v6ai, // #41D9CF - V6 AI for links
  'notificationCenterHeader.background': alpha(blacks.sleeve, 'F0'), // Slight transparency
  'notificationCenterHeader.foreground': append.vivid, // #00E5D4 - Electric header
  'notificationCenter.border': alpha(hologram.cyan, '30'), // Holographic border

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': character.eyes.bright, // #5DE4DB
  'peekViewEditor.background': character.skirt.black, // #15191D
  'peekViewEditorGutter.background': character.armWarmers.black, // #111417
  'peekViewResult.background': character.armWarmers.black, // #111417
  'peekViewResult.selectionBackground': alpha(teals.classic, '30'),
  'peekViewResult.selectionForeground': '#FFFFFF',
  'peekViewTitle.background': blacks.void,
  'peekViewTitleLabel.foreground': teals.bright,
  'peekViewTitleDescription.foreground': greys.silver,
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
  // GIT - Negi (success), Eyes (change), Headphones (delete)
  // ==========================================================================
  'gitDecoration.addedResourceForeground': character.negi.bright, // #69F0AE
  'gitDecoration.modifiedResourceForeground': character.armDisplay.data, // #5DE4DB
  'gitDecoration.deletedResourceForeground': character.headphones.cushion, // #E05096
  'gitDecoration.renamedResourceForeground': semantic.info,
  'gitDecoration.untrackedResourceForeground': teals.classic,
  'gitDecoration.ignoredResourceForeground': greys.silver,
  'gitDecoration.conflictingResourceForeground': pinks.sekai,
  'gitDecoration.stageModifiedResourceForeground': semantic.warning,
  'gitDecoration.stageDeletedResourceForeground': semantic.error,
  'gitDecoration.submoduleResourceForeground': semantic.info,

  // ==========================================================================
  // DIFF EDITOR
  // ==========================================================================
  'diffEditor.insertedTextBackground': alpha(character.negi.bright, '18'), // #69F0AE - Negi bright
  'diffEditor.removedTextBackground': alpha(character.headphones.cushion, '18'), // #E05096 - Headphone cushion
  'diffEditor.insertedLineBackground': alpha(character.negi.white, '10'), // #E8F5E9 - Negi white
  'diffEditor.removedLineBackground': alpha(character.headphones.cushion, '0D'),
  'diffEditor.diagonalFill': alpha(teals.classic, '15'),
  'diffEditor.border': alpha(teals.classic, '30'),
  'diffEditor.unchangedRegionBackground': blacks.outfit,
  'diffEditor.unchangedRegionForeground': greys.silver,
  'diffEditor.unchangedCodeBackground': alpha(teals.classic, '08'),
  'diffEditorGutter.insertedLineBackground': alpha(semantic.success, '40'),
  'diffEditorGutter.removedLineBackground': alpha(semantic.error, '40'),
  'diffEditorOverview.insertedForeground': semantic.success,
  'diffEditorOverview.removedForeground': semantic.error,
  'multiDiffEditor.headerBackground': blacks.outfit,
  'multiDiffEditor.background': blacks.void,
  'multiDiffEditor.border': alpha(teals.classic, '30'),

  // ==========================================================================
  // PANEL
  // ==========================================================================
  'panel.background': blacks.void,
  'panel.border': alpha(teals.classic, '30'),
  'panel.dropBorder': alpha(teals.classic, '60'),
  'panelTitle.activeForeground': teals.classic,
  'panelTitle.inactiveForeground': greys.silver,
  'panelTitle.activeBorder': pinks.sekai,
  'panelInput.border': alpha(teals.classic, '40'),
  'panelSection.border': alpha(teals.classic, '25'),
  'panelSection.dropBackground': alpha(teals.classic, '20'),
  'panelSectionHeader.background': character.outfitTop.shadow, // #263238
  'panelSectionHeader.foreground': character.eyes.iris, // #39C5BB
  'panelSectionHeader.border': alpha(character.tie.teal, '20'),

  // ==========================================================================
  // DEBUG - Stage lighting and performance
  // ==========================================================================
  'debugToolBar.background': alpha(stage.ambientTeal, '20'), // #00BCD4
  'debugToolBar.border': alpha(stage.accentPink, '60'),
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
  'debugConsole.infoForeground': stage.coolBlue, // #2196F3 - Stage lighting
  'debugConsole.warningForeground': stage.warmAmber, // #FFC107
  'debugConsole.errorForeground': stage.accentPink, // #E91E63
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
  'commandCenter.inactiveForeground': greys.silver,
  'commandCenter.inactiveBorder': alpha(teals.classic, '20'),

  // ==========================================================================
  // QUICK INPUT - Boots black (grounded overlay)
  // ==========================================================================
  'quickInput.background': character.boots.black, // #111417
  'quickInput.foreground': foregrounds.primary,
  'quickInputTitle.background': character.armWarmers.black,
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
  // ERRORS & WARNINGS - Digital glitch for errors
  // ==========================================================================
  'editorError.foreground': digital.glitch, // #FF5370
  'editorError.border': alpha(digital.glitch, '40'),
  'editorError.background': alpha(digital.glitch, '15'),
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
  // LIGHTBULB - NT for modern voice
  // ==========================================================================
  'editorLightBulb.foreground': versions.nt, // #3ED1C8 - NT
  'editorLightBulbAutoFix.foreground': semantic.success,
  'editorLightBulbAi.foreground': versions.v6ai, // #41D9CF - V6 AI

  // ==========================================================================
  // INLAY HINTS
  // ==========================================================================
  'editorInlayHint.background': alpha(cyans.ice, '12'),
  'editorInlayHint.foreground': alpha(teals.neon, 'DD'), // Boosted from CC for better visibility
  'editorInlayHint.typeForeground': alpha(versionMapping.types, 'CC'), // Boosted from BB
  'editorInlayHint.typeBackground': alpha(versionMapping.types, '12'),
  'editorInlayHint.parameterForeground': alpha(pinks.soft, 'E6'), // Boosted from CC for Lc ~48
  'editorInlayHint.parameterBackground': alpha(pinks.soft, '12'),

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
  // SYMBOL ICONS - Character Design Mapping
  // ==========================================================================
  'symbolIcon.arrayForeground': teals.stage,
  'symbolIcon.booleanForeground': character.hairTies.highlight, // #FF80AB
  'symbolIcon.classForeground': character.hair.shine, // #5DE4DB
  'symbolIcon.colorForeground': pinks.sekai,
  'symbolIcon.constantForeground': character.hairTies.highlight, // #FF80AB
  'symbolIcon.constructorForeground': character.armDisplay.data, // #5DE4DB
  'symbolIcon.enumeratorForeground': accents.gold, // #FFCA28
  'symbolIcon.enumeratorMemberForeground': accents.orange, // #FFAB40
  'symbolIcon.eventForeground': accents.gold,
  'symbolIcon.fieldForeground': character.skin.shadow, // #E8C8BC
  'symbolIcon.fileForeground': foregrounds.primary,
  'symbolIcon.folderForeground': teals.classic,
  'symbolIcon.functionForeground': character.eyes.bright, // #5DE4DB
  'symbolIcon.interfaceForeground': cyans.ice, // #84FFFF
  'symbolIcon.keyForeground': teals.classic,
  'symbolIcon.keywordForeground': teals.classic,
  'symbolIcon.methodForeground': character.hair.highlight, // #B2EBE7
  'symbolIcon.moduleForeground': foregrounds.primary,
  'symbolIcon.namespaceForeground': cryptonFamily.kaito.blue, // #42A5F5
  'symbolIcon.nullForeground': pinks.sekai,
  'symbolIcon.numberForeground': character.negi.bright, // #69F0AE
  'symbolIcon.objectForeground': foregrounds.primary,
  'symbolIcon.operatorForeground': teals.classic,
  'symbolIcon.packageForeground': teals.classic,
  'symbolIcon.propertyForeground': character.skin.blush, // #FFB8C8
  'symbolIcon.referenceForeground': teals.stage,
  'symbolIcon.snippetForeground': character.negi.stalk, // #9CCC65
  'symbolIcon.stringForeground': character.negi.stalk, // #9CCC65
  'symbolIcon.structForeground': pinks.blush, // #FFB8D4
  'symbolIcon.textForeground': foregrounds.primary,
  'symbolIcon.typeParameterForeground': accents.gold,
  'symbolIcon.unitForeground': pinks.sekai,
  'symbolIcon.variableForeground': foregrounds.primary,

  // ==========================================================================
  // INLINE CHAT - V6 AI Features
  // ==========================================================================
  'inlineChat.background': character.boots.black,
  'inlineChat.border': alpha(versions.v6ai, '40'),
  'inlineChat.shadow': '#00000060',
  'inlineChatInput.background': blacks.sleeve,
  'inlineChatInput.border': alpha(teals.classic, '40'),
  'inlineChatInput.focusBorder': alpha(teals.classic, '60'),
  'inlineChatInput.placeholderForeground': greys.silver,
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
  'profileBadge.foreground': foregrounds.bright,

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
  // SUGGEST WIDGET - NT/Modern voice
  // ==========================================================================
  'editorSuggestWidget.background': alpha(character.boots.black, 'F8'),
  'editorSuggestWidget.border': alpha(versions.nt, '50'),
  'editorSuggestWidget.foreground': foregrounds.primary,
  'editorSuggestWidget.highlightForeground': versions.nt, // #3ED1C8 - NT modern
  'editorSuggestWidget.selectedBackground': alpha(teals.classic, '30'),
  'editorSuggestWidget.selectedForeground': '#FFFFFF',
  'editorSuggestWidget.selectedIconForeground': cyans.ice,
  'editorSuggestWidget.focusHighlightForeground': cyans.ice,

  // ==========================================================================
  // MARKER NAVIGATION - 01 Tattoo and Number Symbolism
  // ==========================================================================
  'editorMarkerNavigation.background': numberSymbolism.tattoo01.background, // #1A1F24
  'editorMarkerNavigationError.background': alpha(digital.glitch, '30'),
  'editorMarkerNavigationWarning.background': alpha(semantic.warning, '30'),
  'editorMarkerNavigationInfo.background': alpha(numberSymbolism.tattoo01.glow, '30'), // #5DE4DB
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
  'editor.foldPlaceholderForeground': alpha(teals.neon, 'AA'), // Boosted from 90 for Lc ~43

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

  // ==========================================================================
  // FOLDING
  // ==========================================================================
  'editor.foldMarkerForeground': teals.neon,
  'editor.foldMarkerBackground': alpha(teals.neon, '15'),

  // ==========================================================================
  // ADDITIONAL SYMBOL ICONS
  // ==========================================================================
  'symbolIcon.typeAliasForeground': versionMapping.types,
  'symbolIcon.importForeground': teals.classic,

  // ==========================================================================
  // NOTEBOOK ADDITIONS
  // ==========================================================================
  'notebook.inactiveEditorBorder': alpha(teals.classic, '30'),

  // ==========================================================================
  // BRACKET MATCH ADDITIONS
  // ==========================================================================
  'editorBracketMatch.foreground': cyans.ice,
  'editorBracketHighlight.unexpectedBracket.background': alpha(semantic.error, '20'),

  // ==========================================================================
  // TIMELINE - Git History Sidebar (Cyber-Diva Data Stream)
  // ==========================================================================
  'timeline.itemBackground': blacks.outfit,
  'timeline.itemHoverBackground': alpha(versionMapping.hover, '20'),

  // ==========================================================================
  // CHAT - Enhanced AI Copilot Integration (V6 AI Voice)
  // ==========================================================================
  'chat.slashCommandBackground': alpha(versions.v6ai, '20'),
  'chat.slashCommandForeground': versions.v6ai,
  'chat.avatarBackground': character.headphones.body,
  'chat.avatarForeground': teals.classic,

  // ==========================================================================
  // INTERACTIVE SESSION - AI Conversation Styling
  // ==========================================================================
  'interactive.activeCodeBorder': alpha(versions.v6ai, '60'),
  'interactive.inactiveCodeBorder': alpha(teals.classic, '30'),

  // ==========================================================================
  // SIMPLE FIND WIDGET
  // ==========================================================================
  'simpleFindWidget.selectorShadow': alpha(blacks.void, '80'),
} as const;

export type WorkbenchColors = typeof workbenchColors;
