/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette.
 */

import {
  character,
  mikuNT,
  snowMiku,
  ghost,
  angel,
  sakuraMiku,
  virtualSinger,
  leoNeed,
  vividBadSquad,
  wonderlandsShowtime,
  nightcord,
} from '../palette';

// Blacks - Character outfit elements
const blacks = {
  void: character.eyes.pupil,           // #0D1114 - Deepest dark (pupil)
  outfit: character.skirt.base,         // #15191D - Main dark (skirt)
  sleeve: character.armWarmers.base,    // #111417 - Interface frame (arm warmers)
  base: character.headphones.frame,     // #1A1F24 - Sidebar base (headphones)
};

// Stage - Concert aesthetics
const stage = {
  spotlight: '#FFFFFF',                  // Pure white spotlight
  darkness: '#000000',                   // Stage darkness
};

// Teals - Miku's signature hair colors
const teals = {
  classic: character.hair.base,          // #39C5BB - Identity anchor
  neon: character.hair.highlight,        // #5DE4DB - Active/bright
  stage: virtualSinger.imageColor,       // #33CCBB - Performance mode
};

// Pinks - Character accents (heterochromia principle)
const pinks = {
  sekai: vividBadSquad.unitColor,        // #EE1166 - Vivid accent
  soft: leoNeed.hair.highlight,          // #FF80AB - Soft pink
  blush: character.skin.blush,           // #FFB8C8 - Warm blush
  hot: vividBadSquad.outfit.hoodieAccent, // #FF4081 - Hot pink
  pale: '#FCE4EC',                        // Pale pink
};

// Cyans - Ice/holographic effects
const cyans = {
  ice: character.hair.bright,            // #7FEDE5 - Bright ice
};

// Greys - Neutral tones
const greys = {
  silver: '#78909C',                      // Silver grey
  platinum: '#B0BEC5',                    // Platinum
  slate: '#455A64',                       // Slate
  steel: '#607D8B',                       // Steel
};

// Foregrounds - Text colors
const foregrounds = {
  primary: snowMiku.y2010.hair,          // #E0EEF5 - Primary text
  bright: '#ECEFF1',                      // Bright text
  comment: mikuNT.hair.shadow,           // #5C5A60 - Comment grey
};

// Semantic - Status colors
const semantic = {
  error: character.marks.tattoo,         // #E60033 - Miku Red
  warning: snowMiku.y2017.accessories.stars, // #FFD700 - Gold warning
  success: character.negi.bright,        // #69F0AE - Negi success
  info: character.hair.base,             // #39C5BB - Info teal
};

// Hologram - Digital projection effects
const hologram = {
  cyan: wonderlandsShowtime.hair.highlight, // #4DD0E1 - Holographic cyan
  purple: '#B388FF',                         // Holographic purple
};

// Accents - Highlight colors
const accents = {
  amber: '#FFD740',                       // Amber gold
  orange: '#FFAB40',                      // Warm orange
  gold: snowMiku.y2017.accessories.stars, // #FFD700 - Gold
  coral: '#FF5370',                        // Coral red
  greenBright: character.negi.bright,    // #69F0AE - Bright green
};

// Boosted - High contrast variants for accessibility
const boosted = {
  coralGlow: '#FFBAB3',                  // Boosted coral (Lc ~65)
  purple: '#D4BBFF',                     // Boosted purple (Lc ~65)
};

// Version mapping - UI states
const versionMapping = {
  identity: character.hair.base,         // #39C5BB - Identity
  hover: mikuNT.hair.base,               // #89CDC6 - Hover state
  focus: character.hair.highlight,       // #5DE4DB - Focus state
  types: character.hair.tip,             // #B2EBE7 - Types
};

// Append voicebank colors
const append = {
  light: character.hair.tip,             // #B2EBE7 - Light/airy
  vivid: '#00E5D4',                       // Vivid cyan
};

// V4X voice colors
const v4xVoice = {
  hard: character.hair.shadow,           // #1A8A82 - Hard/pressed state
};

// V6 AI features
const versions = {
  v6ai: '#41D9CF',                        // V6 AI cyan
};

// Frequency visualizer (indent guides)
const frequencyVisualizer = {
  bass: character.hair.shadow,           // #1A8A82 - Level 1
  low: '#2AA69E',                          // Level 2
  mid: character.hair.base,              // #39C5BB - Level 3
  high: '#3ED1C8',                         // Level 4
  peak: '#00E5D4',                         // Level 5
  ultra: character.hair.tip,             // #B2EBE7 - Level 6
};

// Digital effects
const digital = {
  dataStream: character.hair.base,       // #39C5BB
  binaryGlow: character.hair.highlight,  // #5DE4DB
  glitch: vividBadSquad.unitColor,       // #EE1166
};

// Art style accents
const artStyles = {
  ixima: {
    techCyan: '#00E5FF',                 // Neon tech cyan
  },
  mikaPikazo: {
    secondary: '#FF1493',                // Hot pink
    triadicCyan: '#00BCD4',              // Triadic cyan
  },
};

// Digital Stars event colors
const digitalStars = {
  y2021: {
    glitch: '#00FFFF',                   // Neon glitch cyan
    neonPurple: '#9C27B0',               // Neon purple
  },
};

// Helper for alpha channels
const alpha = (hex: string, opacity: string): string => `${hex}${opacity}`;

export const workbenchColors = {
  // Editor
  'editor.background': blacks.outfit,
  'editor.foreground': foregrounds.primary,
  'editorCursor.foreground': character.hairTies.outline,
  'editorCursor.background': blacks.void,
  'editorMultiCursor.primary.foreground': character.hairTies.outline,
  'editorMultiCursor.primary.background': blacks.base,
  'editorMultiCursor.secondary.foreground': pinks.soft,
  'editorMultiCursor.secondary.background': blacks.base,
  'editor.lineHighlightBackground': alpha(versionMapping.identity, '12'),
  'editor.lineHighlightBorder': alpha(cyans.ice, '30'),
  'editor.selectionBackground': alpha(teals.stage, '35'),
  'editor.selectionHighlightBackground': alpha(pinks.soft, '25'),
  'editor.selectionHighlightBorder': alpha(teals.stage, '40'),
  'editor.wordHighlightBackground': alpha(teals.stage, '20'),
  'editor.wordHighlightBorder': alpha(teals.stage, '40'),
  'editor.wordHighlightStrongBackground': alpha(pinks.soft, '30'),
  'editor.wordHighlightStrongBorder': alpha(pinks.soft, '60'),
  'editor.findMatchBackground': alpha(pinks.sekai, '60'),
  'editor.findMatchBorder': alpha(pinks.sekai, '90'),
  'editor.findMatchHighlightBackground': alpha(cyans.ice, '50'),
  'editor.findMatchHighlightBorder': alpha(cyans.ice, '80'),
  'editor.rangeHighlightBackground': alpha(teals.classic, '10'),
  'editor.rangeHighlightBorder': alpha(teals.classic, '30'),

  // Line numbers
  'editorLineNumber.foreground': character.tie.shadow,
  'editorLineNumber.activeForeground': teals.neon,
  'editorLineNumber.dimmedForeground': frequencyVisualizer.bass,

  // Indent guides
  'editorIndentGuide.background1': alpha(frequencyVisualizer.bass, '50'),
  'editorIndentGuide.background2': alpha(frequencyVisualizer.low, '55'),
  'editorIndentGuide.background3': alpha(frequencyVisualizer.mid, '60'),
  'editorIndentGuide.background4': alpha(frequencyVisualizer.high, '65'),
  'editorIndentGuide.background5': alpha(frequencyVisualizer.peak, '70'),
  'editorIndentGuide.background6': alpha(frequencyVisualizer.ultra, '75'),
  'editorIndentGuide.activeBackground1': frequencyVisualizer.bass,
  'editorIndentGuide.activeBackground2': frequencyVisualizer.low,
  'editorIndentGuide.activeBackground3': frequencyVisualizer.mid,
  'editorIndentGuide.activeBackground4': frequencyVisualizer.high,
  'editorIndentGuide.activeBackground5': frequencyVisualizer.peak,
  'editorIndentGuide.activeBackground6': frequencyVisualizer.ultra,

  // Rulers and whitespace
  'editorRuler.foreground': frequencyVisualizer.bass,
  'editorWhitespace.foreground': frequencyVisualizer.bass,

  // Brackets
  'editorBracketMatch.background': alpha(digital.dataStream, '25'),
  'editorBracketMatch.border': digital.binaryGlow,
  'editorBracketHighlight.foreground1': accents.amber,
  'editorBracketHighlight.foreground2': pinks.blush,
  'editorBracketHighlight.foreground3': character.negi.bright,
  'editorBracketHighlight.foreground4': boosted.purple,
  'editorBracketHighlight.foreground5': cyans.ice,
  'editorBracketHighlight.foreground6': accents.orange,
  'editorBracketHighlight.unexpectedBracket.foreground': boosted.coralGlow,
  'editorBracketPairGuide.background1': alpha(pinks.sekai, '25'),
  'editorBracketPairGuide.background2': alpha(teals.classic, '25'),
  'editorBracketPairGuide.background3': alpha(cyans.ice, '25'),
  'editorBracketPairGuide.background4': alpha(hologram.purple, '25'),
  'editorBracketPairGuide.background5': alpha(teals.neon, '25'),
  'editorBracketPairGuide.background6': alpha(pinks.soft, '25'),
  'editorBracketPairGuide.activeBackground1': alpha(pinks.sekai, '50'),
  'editorBracketPairGuide.activeBackground2': alpha(teals.classic, '50'),
  'editorBracketPairGuide.activeBackground3': alpha(cyans.ice, '50'),
  'editorBracketPairGuide.activeBackground4': alpha(hologram.purple, '50'),
  'editorBracketPairGuide.activeBackground5': alpha(teals.neon, '50'),
  'editorBracketPairGuide.activeBackground6': alpha(pinks.soft, '50'),

  // Gutter
  'editorGutter.addedBackground': alpha(character.negi.stalk, '80'),
  'editorGutter.modifiedBackground': alpha(semantic.warning, '80'),
  'editorGutter.deletedBackground': alpha(character.headphones.cushion, '80'),
  'editorGutter.foldingControlForeground': alpha(teals.neon, 'BB'),

  // Widgets
  'editorWidget.background': blacks.sleeve,
  'editorWidget.foreground': versionMapping.hover,
  'editorWidget.border': alpha(character.hair.shadow, '80'),
  'editorWidget.resizeBorder': alpha(character.tie.shadow, '80'),
  'editorHoverWidget.background': alpha(blacks.outfit, 'F5'),
  'editorHoverWidget.border': alpha(character.hair.shadow, '70'),
  'editorHoverWidget.foreground': foregrounds.primary,
  'editorHoverWidget.highlightForeground': teals.neon,
  'editorHoverWidget.statusBarBackground': blacks.sleeve,
  'editorUnnecessaryCode.opacity': alpha(blacks.void, '80'),
  // Ghost text
  'editorGhostText.foreground': alpha(versions.v6ai, 'BB'),
  'editorGhostText.border': alpha(versions.v6ai, '40'),
  'editorGhostText.background': alpha(versions.v6ai, '0A'),
  'editor.linkedEditingBackground': alpha(cyans.ice, '20'),

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
  'editorCodeLens.foreground': alpha(teals.neon, 'CC'),

  // Activity Bar
  'activityBar.background': blacks.sleeve,
  'activityBar.foreground': teals.classic,
  'activityBar.activeBorder': pinks.sekai,
  'activityBar.activeBackground': alpha(v4xVoice.hard, '20'),
  'activityBar.inactiveForeground': greys.silver,
  'activityBar.border': alpha(character.tie.shadow, '60'),
  'activityBarBadge.background': artStyles.mikaPikazo.secondary,
  'activityBarBadge.foreground': stage.spotlight,
  'activityBarTop.foreground': teals.classic,
  'activityBarTop.activeBorder': pinks.sekai,
  'activityBarTop.inactiveForeground': greys.silver,

  // Sidebar
  'sideBar.background': blacks.base,
  'sideBar.foreground': append.light,
  'sideBar.border': alpha(character.tie.shadow, '50'),
  'sideBar.dropBackground': alpha(teals.classic, '20'),
  'sideBarSectionHeader.background': character.top.shadow,
  'sideBarSectionHeader.foreground': teals.neon,
  'sideBarSectionHeader.border': alpha(pinks.sekai, '25'),
  'sideBarTitle.foreground': teals.neon,
  'sideBarStickyScroll.background': blacks.sleeve,
  'sideBarStickyScroll.border': alpha(teals.classic, '20'),
  'sideBarStickyScroll.shadow': alpha(stage.darkness, '50'),

  // Status Bar
  'statusBar.background': blacks.void,
  'statusBar.foreground': foregrounds.primary,
  'statusBar.border': alpha(character.tie.shadow, '70'),
  'statusBar.debuggingBackground': alpha(pinks.sekai, 'E0'),
  'statusBar.debuggingForeground': stage.spotlight,
  'statusBar.debuggingBorder': pinks.sekai,
  'statusBar.noFolderBackground': blacks.void,
  'statusBar.noFolderForeground': greys.platinum,
  'statusBar.noFolderBorder': alpha(frequencyVisualizer.bass, '40'),
  'statusBarItem.remoteBackground': frequencyVisualizer.mid,
  'statusBarItem.remoteForeground': blacks.void,
  'statusBarItem.remoteHoverBackground': frequencyVisualizer.high,
  'statusBarItem.hoverBackground': alpha(append.vivid, '20'),
  'statusBarItem.hoverForeground': append.vivid,
  'statusBarItem.activeBackground': alpha(v4xVoice.hard, '40'),
  'statusBarItem.errorBackground': digital.glitch,
  'statusBarItem.errorForeground': stage.spotlight,
  'statusBarItem.errorHoverBackground': alpha(digital.glitch, 'CC'),
  'statusBarItem.warningBackground': accents.amber,
  'statusBarItem.warningForeground': blacks.void,
  'statusBarItem.warningHoverBackground': alpha(accents.amber, 'CC'),
  'statusBarItem.prominentBackground': alpha(append.vivid, '25'),
  'statusBarItem.prominentForeground': append.vivid,
  'statusBarItem.prominentHoverBackground': alpha(append.vivid, '40'),
  'statusBarItem.prominentHoverForeground': stage.spotlight,
  'statusBarItem.compactHoverBackground': alpha(versionMapping.hover, '30'),
  'statusBarItem.focusBorder': alpha(teals.neon, 'DD'),

  // Title Bar
  'titleBar.activeBackground': blacks.void,
  'titleBar.activeForeground': foregrounds.primary,
  'titleBar.inactiveBackground': blacks.void,
  'titleBar.inactiveForeground': greys.silver,
  'titleBar.border': alpha(character.tie.shadow, '50'),

  // Tabs
  'tab.activeBackground': alpha(teals.neon, '10'),
  'tab.activeForeground': artStyles.ixima.techCyan,
  'tab.activeBorderTop': character.hairTies.outline,
  'tab.activeBorder': alpha(digitalStars.y2021.glitch, '40'),
  'tab.inactiveBackground': blacks.outfit,
  'tab.inactiveForeground': greys.silver,
  'tab.border': blacks.sleeve,
  'tab.hoverBackground': alpha(pinks.sekai, '15'),
  'tab.hoverForeground': pinks.blush,
  'tab.hoverBorder': alpha(pinks.sekai, '40'),
  'tab.unfocusedActiveBackground': blacks.base,
  'tab.unfocusedActiveForeground': append.light,
  'tab.unfocusedActiveBorderTop': alpha(pinks.sekai, '80'),
  'tab.unfocusedInactiveBackground': blacks.outfit,
  'tab.unfocusedInactiveForeground': '#B0C4DE',
  'editorGroupHeader.tabsBackground': blacks.sleeve,
  'editorGroupHeader.tabsBorder': alpha(teals.classic, '15'),
  'editorGroupHeader.noTabsBackground': blacks.outfit,
  'editorGroup.border': alpha(character.tie.shadow, '60'),
  'editorGroup.dropBackground': alpha(cyans.ice, '40'),

  // Lists
  'list.activeSelectionBackground': alpha(teals.classic, '30'),
  'list.activeSelectionForeground': stage.spotlight,
  'list.activeSelectionIconForeground': teals.neon,
  'list.inactiveSelectionBackground': alpha(teals.classic, '20'),
  'list.inactiveSelectionForeground': foregrounds.primary,
  'list.hoverBackground': alpha(versionMapping.hover, '15'),
  'list.hoverForeground': foregrounds.primary,
  'list.focusBackground': alpha(pinks.sekai, '25'),
  'list.focusForeground': pinks.blush,
  'list.focusOutline': alpha(teals.neon, 'DD'),
  'list.highlightForeground': pinks.blush,
  'list.errorForeground': boosted.coralGlow,
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': boosted.coralGlow,
  'list.deemphasizedForeground': greys.platinum,
  'listFilterWidget.background': blacks.outfit,
  'listFilterWidget.outline': alpha(pinks.sekai, '70'),
  'listFilterWidget.noMatchesOutline': semantic.error,

  // Tree
  'tree.indentGuidesStroke': alpha(pinks.sekai, '40'),
  'tree.tableColumnsBorder': alpha(pinks.sekai, '25'),

  // General UI
  'focusBorder': alpha(teals.neon, 'DD'),
  'foreground': foregrounds.primary,
  'disabledForeground': greys.silver,
  'widget.shadow': alpha(stage.darkness, '70'),
  'selection.background': alpha(versionMapping.identity, '40'),
  'descriptionForeground': greys.silver,
  'errorForeground': boosted.coralGlow,
  'icon.foreground': append.light,
  'sash.hoverBorder': alpha(pinks.sekai, '80'),

  // Input
  'input.background': blacks.sleeve,
  'input.foreground': foregrounds.primary,
  'input.border': alpha(character.tie.shadow, '50'),
  'input.placeholderForeground': greys.silver,
  'inputOption.activeBorder': pinks.sekai,
  'inputOption.activeBackground': alpha(pinks.sekai, '30'),
  'inputOption.activeForeground': stage.spotlight,
  'inputOption.hoverBackground': alpha(versionMapping.hover, '20'),
  'inputValidation.errorBackground': alpha(semantic.error, '25'),
  'inputValidation.errorBorder': semantic.error,
  'inputValidation.errorForeground': boosted.coralGlow,
  'inputValidation.warningBackground': alpha(semantic.warning, '25'),
  'inputValidation.warningBorder': semantic.warning,
  'inputValidation.warningForeground': semantic.warning,
  'inputValidation.infoBackground': alpha(semantic.info, '25'),
  'inputValidation.infoBorder': semantic.info,
  'inputValidation.infoForeground': semantic.info,

  // Dropdown
  'dropdown.background': blacks.sleeve,
  'dropdown.foreground': foregrounds.primary,
  'dropdown.border': alpha(character.tie.shadow, '50'),
  'dropdown.listBackground': blacks.sleeve,

  // Button
  'button.background': teals.classic,
  'button.foreground': blacks.void,
  'button.hoverBackground': teals.stage,
  'button.secondaryBackground': greys.slate,
  'button.secondaryForeground': stage.spotlight,
  'button.secondaryHoverBackground': greys.steel,
  'button.border': alpha(teals.classic, '80'),

  // Checkbox
  'checkbox.background': blacks.sleeve,
  'checkbox.foreground': teals.classic,
  'checkbox.border': alpha(teals.classic, '60'),
  'checkbox.selectBackground': alpha(teals.classic, '30'),
  'checkbox.selectBorder': teals.classic,

  // Scrollbar
  'scrollbar.shadow': alpha(stage.darkness, '50'),
  'scrollbarSlider.background': alpha(teals.classic, '30'),
  'scrollbarSlider.hoverBackground': alpha(teals.classic, '50'),
  'scrollbarSlider.activeBackground': alpha(teals.classic, '70'),

  // Minimap
  'minimap.background': alpha(blacks.outfit, 'CC'),
  'minimap.selectionHighlight': alpha(teals.classic, '60'),
  'minimap.errorHighlight': alpha(semantic.error, '80'),
  'minimap.warningHighlight': alpha(semantic.warning, '80'),
  'minimap.findMatchHighlight': alpha(pinks.sekai, '80'),
  'minimap.selectionOccurrenceHighlight': alpha(teals.classic, '40'),
  'minimap.foregroundOpacity': '#000000CC',
  'minimapSlider.background': alpha(teals.classic, '15'),
  'minimapSlider.hoverBackground': alpha(teals.classic, '30'),
  'minimapSlider.activeBackground': alpha(teals.classic, '50'),
  'minimapGutter.addedBackground': semantic.success,
  'minimapGutter.modifiedBackground': semantic.warning,
  'minimapGutter.deletedBackground': semantic.error,

  // Panel
  'panel.background': blacks.void,
  'panel.border': alpha(character.tie.shadow, '70'),
  'panel.dropBorder': teals.classic,
  'panelTitle.activeBorder': pinks.sekai,
  'panelTitle.activeForeground': teals.neon,
  'panelTitle.inactiveForeground': greys.silver,
  'panelInput.border': alpha(teals.classic, '40'),
  'panelSection.border': alpha(teals.classic, '30'),
  'panelSection.dropBackground': alpha(teals.classic, '20'),
  'panelSectionHeader.background': blacks.sleeve,
  'panelSectionHeader.foreground': teals.neon,
  'panelSectionHeader.border': alpha(pinks.sekai, '20'),

  // Terminal
  'terminal.background': blacks.void,
  'terminal.foreground': foregrounds.primary,
  'terminal.selectionBackground': alpha(teals.classic, '40'),
  'terminal.border': alpha(character.tie.shadow, '50'),
  'terminalCursor.foreground': character.hairTies.outline,
  'terminalCursor.background': blacks.void,
  // ANSI Colors
  'terminal.ansiBlack': blacks.outfit,
  'terminal.ansiRed': accents.coral,
  'terminal.ansiGreen': character.negi.bright,
  'terminal.ansiYellow': semantic.warning,
  'terminal.ansiBlue': angel.accessories.shoes,
  'terminal.ansiMagenta': leoNeed.hair.highlight,
  'terminal.ansiCyan': teals.neon,
  'terminal.ansiWhite': foregrounds.primary,
  'terminal.ansiBrightBlack': greys.slate,
  'terminal.ansiBrightRed': boosted.coralGlow,
  'terminal.ansiBrightGreen': character.negi.bright,
  'terminal.ansiBrightYellow': accents.amber,
  'terminal.ansiBrightBlue': hologram.cyan,
  'terminal.ansiBrightMagenta': pinks.soft,
  'terminal.ansiBrightCyan': cyans.ice,
  'terminal.ansiBrightWhite': stage.spotlight,
  'terminal.tab.activeBorder': pinks.sekai,

  // Debugger
  'debugToolBar.background': alpha(blacks.sleeve, 'F0'),
  'debugToolBar.border': alpha(pinks.sekai, '40'),
  'debugIcon.breakpointForeground': pinks.hot,
  'debugIcon.breakpointDisabledForeground': greys.silver,
  'debugIcon.breakpointUnverifiedForeground': alpha(pinks.hot, '80'),
  'debugIcon.breakpointCurrentStackframeForeground': semantic.warning,
  'debugIcon.breakpointStackframeForeground': character.negi.bright,
  'debugIcon.startForeground': semantic.success,
  'debugIcon.pauseForeground': semantic.warning,
  'debugIcon.stopForeground': semantic.error,
  'debugIcon.disconnectForeground': semantic.error,
  'debugIcon.restartForeground': semantic.success,
  'debugIcon.stepOverForeground': hologram.cyan,
  'debugIcon.stepIntoForeground': hologram.cyan,
  'debugIcon.stepOutForeground': hologram.cyan,
  'debugIcon.continueForeground': semantic.success,
  'debugIcon.stepBackForeground': hologram.cyan,
  'debugConsole.infoForeground': semantic.info,
  'debugConsole.warningForeground': semantic.warning,
  'debugConsole.errorForeground': boosted.coralGlow,
  'debugConsole.sourceForeground': foregrounds.primary,
  'debugConsoleInputIcon.foreground': teals.classic,
  'debugTokenExpression.name': pinks.blush,
  'debugTokenExpression.value': character.negi.stalk,
  'debugTokenExpression.string': character.negi.stalk,
  'debugTokenExpression.boolean': pinks.soft,
  'debugTokenExpression.number': character.negi.bright,
  'debugTokenExpression.error': boosted.coralGlow,

  // Peek View
  'peekView.border': alpha(pinks.sekai, '80'),
  'peekViewTitle.background': blacks.base,
  'peekViewTitleLabel.foreground': teals.neon,
  'peekViewTitleDescription.foreground': append.light,
  'peekViewEditor.background': blacks.outfit,
  'peekViewEditor.matchHighlightBackground': alpha(pinks.sekai, '40'),
  'peekViewEditor.matchHighlightBorder': alpha(pinks.sekai, '80'),
  'peekViewEditorGutter.background': blacks.sleeve,
  'peekViewResult.background': blacks.base,
  'peekViewResult.fileForeground': foregrounds.primary,
  'peekViewResult.lineForeground': append.light,
  'peekViewResult.matchHighlightBackground': alpha(pinks.sekai, '40'),
  'peekViewResult.selectionBackground': alpha(teals.classic, '30'),
  'peekViewResult.selectionForeground': stage.spotlight,

  // Diff Editor
  'diffEditor.insertedTextBackground': alpha(character.negi.bright, '15'),
  'diffEditor.insertedTextBorder': alpha(character.negi.bright, '40'),
  'diffEditor.insertedLineBackground': alpha(character.negi.bright, '10'),
  'diffEditor.removedTextBackground': alpha(pinks.sekai, '20'),
  'diffEditor.removedTextBorder': alpha(pinks.sekai, '40'),
  'diffEditor.removedLineBackground': alpha(pinks.sekai, '10'),
  'diffEditor.diagonalFill': alpha(greys.slate, '30'),
  'diffEditor.border': alpha(teals.classic, '30'),
  'diffEditor.unchangedRegionBackground': alpha(greys.slate, '15'),
  'diffEditor.unchangedRegionForeground': greys.silver,
  'diffEditor.unchangedCodeBackground': alpha(greys.slate, '10'),
  'diffEditorGutter.insertedLineBackground': alpha(character.negi.bright, '30'),
  'diffEditorGutter.removedLineBackground': alpha(pinks.sekai, '30'),
  'diffEditorOverview.insertedForeground': character.negi.bright,
  'diffEditorOverview.removedForeground': pinks.sekai,

  // Git Decoration
  'gitDecoration.addedResourceForeground': semantic.success,
  'gitDecoration.modifiedResourceForeground': semantic.warning,
  'gitDecoration.deletedResourceForeground': boosted.coralGlow,
  'gitDecoration.untrackedResourceForeground': character.negi.bright,
  'gitDecoration.ignoredResourceForeground': greys.silver,
  'gitDecoration.conflictingResourceForeground': accents.coral,
  'gitDecoration.stageModifiedResourceForeground': hologram.cyan,
  'gitDecoration.stageDeletedResourceForeground': pinks.soft,
  'gitDecoration.renamedResourceForeground': hologram.cyan,
  'gitDecoration.submoduleResourceForeground': ghost.hair.base,

  // Notification
  'notifications.background': blacks.sleeve,
  'notifications.foreground': foregrounds.primary,
  'notifications.border': alpha(teals.classic, '30'),
  'notificationToast.border': alpha(pinks.sekai, '50'),
  'notificationCenterHeader.background': blacks.base,
  'notificationCenterHeader.foreground': teals.neon,
  'notificationCenter.border': alpha(teals.classic, '30'),
  'notificationLink.foreground': hologram.cyan,
  'notificationsInfoIcon.foreground': semantic.info,
  'notificationsWarningIcon.foreground': semantic.warning,
  'notificationsErrorIcon.foreground': semantic.error,

  // Command Center
  'commandCenter.foreground': foregrounds.primary,
  'commandCenter.background': blacks.void,
  'commandCenter.border': alpha(character.tie.shadow, '50'),
  'commandCenter.activeForeground': teals.neon,
  'commandCenter.activeBackground': alpha(teals.classic, '15'),
  'commandCenter.activeBorder': alpha(teals.classic, '60'),
  'commandCenter.inactiveForeground': greys.silver,
  'commandCenter.inactiveBorder': alpha(character.tie.shadow, '30'),

  // Quick Input
  'quickInput.background': blacks.sleeve,
  'quickInput.foreground': foregrounds.primary,
  'quickInputTitle.background': blacks.base,
  'quickInputList.focusBackground': alpha(pinks.sekai, '25'),
  'quickInputList.focusForeground': pinks.blush,
  'quickInputList.focusIconForeground': teals.neon,

  // Keybinding
  'keybindingLabel.background': alpha(teals.classic, '20'),
  'keybindingLabel.foreground': foregrounds.primary,
  'keybindingLabel.border': alpha(teals.classic, '40'),
  'keybindingLabel.bottomBorder': alpha(teals.classic, '60'),

  // Breadcrumb
  'breadcrumb.foreground': append.light,
  'breadcrumb.background': blacks.outfit,
  'breadcrumb.focusForeground': teals.neon,
  'breadcrumb.activeSelectionForeground': stage.spotlight,
  'breadcrumbPicker.background': blacks.sleeve,

  // Menu
  'menu.background': blacks.sleeve,
  'menu.foreground': foregrounds.primary,
  'menu.selectionBackground': alpha(teals.classic, '30'),
  'menu.selectionForeground': stage.spotlight,
  'menu.selectionBorder': alpha(pinks.sekai, '40'),
  'menu.separatorBackground': alpha(teals.classic, '30'),
  'menu.border': alpha(character.tie.shadow, '50'),
  'menubar.selectionBackground': alpha(teals.classic, '25'),
  'menubar.selectionForeground': stage.spotlight,
  'menubar.selectionBorder': alpha(pinks.sekai, '30'),

  // Settings Editor
  'settings.headerForeground': teals.neon,
  'settings.modifiedItemIndicator': pinks.sekai,
  'settings.dropdownBackground': blacks.sleeve,
  'settings.dropdownForeground': foregrounds.primary,
  'settings.dropdownBorder': alpha(teals.classic, '40'),
  'settings.dropdownListBorder': alpha(teals.classic, '50'),
  'settings.checkboxBackground': blacks.sleeve,
  'settings.checkboxForeground': teals.classic,
  'settings.checkboxBorder': alpha(teals.classic, '60'),
  'settings.textInputBackground': blacks.sleeve,
  'settings.textInputForeground': foregrounds.primary,
  'settings.textInputBorder': alpha(teals.classic, '40'),
  'settings.numberInputBackground': blacks.sleeve,
  'settings.numberInputForeground': foregrounds.primary,
  'settings.numberInputBorder': alpha(teals.classic, '40'),
  'settings.focusedRowBackground': alpha(teals.classic, '10'),
  'settings.focusedRowBorder': alpha(pinks.sekai, '40'),
  'settings.rowHoverBackground': alpha(versionMapping.hover, '10'),
  'settings.sashBorder': alpha(teals.classic, '30'),

  // Testing
  'testing.iconErrored': semantic.error,
  'testing.iconFailed': semantic.error,
  'testing.iconPassed': semantic.success,
  'testing.iconQueued': semantic.warning,
  'testing.iconUnset': greys.silver,
  'testing.iconSkipped': greys.silver,
  'testing.runAction': semantic.success,
  'testing.peekBorder': alpha(pinks.sekai, '80'),
  'testing.peekHeaderBackground': blacks.base,
  'testing.message.error.decorationForeground': boosted.coralGlow,
  'testing.message.error.lineBackground': alpha(semantic.error, '15'),
  'testing.message.info.decorationForeground': semantic.info,
  'testing.message.info.lineBackground': alpha(semantic.info, '15'),

  // Welcome Page
  'welcomePage.background': blacks.outfit,
  'welcomePage.tileBackground': blacks.base,
  'welcomePage.tileHoverBackground': alpha(teals.classic, '15'),
  'welcomePage.tileBorder': alpha(teals.classic, '30'),
  'welcomePage.progress.foreground': teals.classic,
  'welcomePage.progress.background': blacks.sleeve,
  'walkThrough.embeddedEditorBackground': blacks.outfit,

  // Extension
  'extensionButton.prominentBackground': teals.classic,
  'extensionButton.prominentForeground': blacks.void,
  'extensionButton.prominentHoverBackground': teals.stage,
  'extensionBadge.remoteBackground': teals.classic,
  'extensionBadge.remoteForeground': blacks.void,
  'extensionIcon.starForeground': accents.amber,
  'extensionIcon.verifiedForeground': semantic.success,
  'extensionIcon.preReleaseForeground': pinks.soft,

  // Banner
  'banner.background': alpha(teals.classic, '25'),
  'banner.foreground': foregrounds.primary,
  'banner.iconForeground': teals.classic,

  // Sticky Scroll
  'editorStickyScroll.background': alpha(blacks.outfit, 'F0'),
  'editorStickyScroll.border': alpha(cyans.ice, '30'),
  'editorStickyScrollHover.background': alpha(versionMapping.hover, '10'),

  // Notebook
  'notebook.cellBorderColor': alpha(teals.classic, '30'),
  'notebook.cellEditorBackground': blacks.outfit,
  'notebook.cellHoverBackground': alpha(versionMapping.hover, '10'),
  'notebook.cellInsertionIndicator': cyans.ice,
  'notebook.cellStatusBarItemHoverBackground': alpha(versionMapping.hover, '20'),
  'notebook.cellToolbarSeparator': alpha(teals.classic, '30'),
  'notebook.editorBackground': blacks.base,
  'notebook.focusedCellBorder': teals.neon,
  'notebook.focusedEditorBorder': alpha(teals.neon, 'CC'),
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

  // Symbol Icons
  'symbolIcon.arrayForeground': teals.stage,
  'symbolIcon.booleanForeground': pinks.soft,
  'symbolIcon.classForeground': accents.amber,
  'symbolIcon.colorForeground': pinks.sekai,
  'symbolIcon.constantForeground': character.negi.bright,
  'symbolIcon.constructorForeground': accents.orange,
  'symbolIcon.enumeratorForeground': boosted.purple,
  'symbolIcon.enumeratorMemberForeground': character.negi.stalk,
  'symbolIcon.eventForeground': accents.gold,
  'symbolIcon.fieldForeground': character.skin.shadow,
  'symbolIcon.fileForeground': foregrounds.primary,
  'symbolIcon.folderForeground': teals.classic,
  'symbolIcon.functionForeground': hologram.cyan,
  'symbolIcon.interfaceForeground': angel.accessories.shoes,
  'symbolIcon.keyForeground': teals.neon,
  'symbolIcon.keywordForeground': teals.neon,
  'symbolIcon.methodForeground': character.negi.stalk,
  'symbolIcon.moduleForeground': foregrounds.primary,
  'symbolIcon.namespaceForeground': angel.accessories.shoes,
  'symbolIcon.nullForeground': character.hair.tip,
  'symbolIcon.numberForeground': character.negi.bright,
  'symbolIcon.objectForeground': foregrounds.primary,
  'symbolIcon.operatorForeground': accents.orange,
  'symbolIcon.packageForeground': append.light,
  'symbolIcon.propertyForeground': character.skin.blush,
  'symbolIcon.referenceForeground': teals.stage,
  'symbolIcon.snippetForeground': character.negi.stalk,
  'symbolIcon.stringForeground': character.negi.stalk,
  'symbolIcon.structForeground': pinks.blush,
  'symbolIcon.textForeground': foregrounds.primary,
  'symbolIcon.typeParameterForeground': boosted.purple,
  'symbolIcon.unitForeground': pinks.sekai,
  'symbolIcon.variableForeground': foregrounds.primary,

  // Inline Chat
  'inlineChat.background': alpha(blacks.outfit, 'F8'),
  'inlineChat.border': alpha(digitalStars.y2021.glitch, '60'),
  'inlineChat.shadow': alpha(digitalStars.y2021.neonPurple, '40'),
  'inlineChatInput.background': blacks.sleeve,
  'inlineChatInput.border': alpha(digitalStars.y2021.glitch, '40'),
  'inlineChatInput.focusBorder': digitalStars.y2021.glitch,
  'inlineChatInput.placeholderForeground': greys.silver,

  // Chat
  'chat.requestBackground': blacks.outfit,
  'chat.requestBorder': alpha(teals.classic, '30'),
  'chat.slashCommandBackground': alpha(digitalStars.y2021.glitch, '20'),
  'chat.slashCommandForeground': digitalStars.y2021.glitch,
  'chat.avatarBackground': alpha(digitalStars.y2021.neonPurple, '30'),
  'chat.avatarForeground': digitalStars.y2021.glitch,

  // Ports
  'ports.iconRunningProcessForeground': semantic.success,

  // Profile Badge
  'profileBadge.background': teals.classic,
  'profileBadge.foreground': foregrounds.bright,

  // Search Editor
  'searchEditor.findMatchBackground': alpha(pinks.sekai, '30'),
  'searchEditor.findMatchBorder': alpha(pinks.sekai, '80'),
  'searchEditor.textInputBorder': alpha(teals.classic, '40'),

  // Suggest Widget
  'editorSuggestWidget.background': alpha(blacks.sleeve, 'F8'),
  'editorSuggestWidget.border': alpha(artStyles.ixima.techCyan, 'CC'),
  'editorSuggestWidget.foreground': foregrounds.primary,
  'editorSuggestWidget.highlightForeground': character.skin.highlight,
  'editorSuggestWidget.selectedBackground': alpha(digitalStars.y2021.neonPurple, '30'),
  'editorSuggestWidget.selectedForeground': stage.spotlight,
  'editorSuggestWidget.selectedIconForeground': digitalStars.y2021.glitch,
  'editorSuggestWidget.focusHighlightForeground': artStyles.mikaPikazo.triadicCyan,

  // Marker Navigation
  'editorMarkerNavigation.background': blacks.base,
  'editorMarkerNavigationError.background': alpha(digital.glitch, '30'),
  'editorMarkerNavigationWarning.background': alpha(semantic.warning, '30'),
  'editorMarkerNavigationInfo.background': alpha(teals.neon, '30'),
  'editorMarkerNavigationError.headerBackground': alpha(semantic.error, '20'),
  'editorMarkerNavigationWarning.headerBackground': alpha(semantic.warning, '20'),
  'editorMarkerNavigationInfo.headerBackground': alpha(semantic.info, '20'),

  // Action Bar
  'actionBar.toggledBackground': alpha(teals.classic, '30'),

  // Toolbar
  'toolbar.hoverBackground': alpha(versionMapping.hover, '20'),
  'toolbar.hoverOutline': alpha(versionMapping.hover, '40'),
  'toolbar.activeBackground': alpha(v4xVoice.hard, '30'),

  // Badge
  'badge.foreground': blacks.void,
  'badge.background': character.hair.tip,

  // Progress Bar
  'progressBar.background': artStyles.ixima.techCyan,

  // SCM
  'scmGraph.historyItemHoverLabelForeground': stage.spotlight,
  'scmGraph.foreground1': teals.classic,
  'scmGraph.foreground2': pinks.sekai,
  'scmGraph.foreground3': hologram.purple,
  'scmGraph.foreground4': semantic.info,
  'scmGraph.foreground5': semantic.warning,

  // Folding
  'editor.foldBackground': alpha(cyans.ice, '08'),
  'editor.foldPlaceholderForeground': alpha(teals.neon, 'AA'),

  // Snippets
  'editor.snippetTabstopHighlightBackground': alpha(cyans.ice, '18'),
  'editor.snippetTabstopHighlightBorder': alpha(cyans.ice, '50'),
  'editor.snippetFinalTabstopHighlightBackground': alpha(pinks.sekai, '20'),
  'editor.snippetFinalTabstopHighlightBorder': alpha(pinks.sekai, '60'),

  // Symbol Highlight
  'editor.symbolHighlightBackground': alpha(cyans.ice, '15'),
  'editor.symbolHighlightBorder': alpha(cyans.ice, '40'),

  // Hover Highlight
  'editor.hoverHighlightBackground': alpha(cyans.ice, '12'),

  // Merge Editor
  'merge.currentHeaderBackground': alpha(hologram.cyan, '40'),
  'merge.currentContentBackground': alpha(hologram.cyan, '15'),
  'merge.incomingHeaderBackground': alpha(pinks.sekai, '40'),
  'merge.incomingContentBackground': alpha(pinks.sekai, '15'),
  'merge.border': alpha(character.tie.shadow, '70'),
  'merge.commonContentBackground': alpha(greys.slate, '15'),
  'merge.commonHeaderBackground': alpha(greys.slate, '30'),
  'mergeEditor.changeBase.background': alpha(greys.slate, '15'),
  'mergeEditor.changeBase.word.background': alpha(greys.slate, '30'),
  'mergeEditor.conflict.input1.background': alpha(hologram.cyan, '15'),
  'mergeEditor.conflict.input2.background': alpha(pinks.sekai, '15'),

  // Tab Extended
  'tab.lastPinnedBorder': alpha(pinks.sekai, '60'),
  'tab.activeModifiedBorder': pinks.hot,
  'tab.inactiveModifiedBorder': alpha(pinks.hot, '60'),
  'tab.unfocusedActiveModifiedBorder': alpha(pinks.hot, '80'),
  'tab.unfocusedInactiveModifiedBorder': alpha(pinks.hot, '40'),
  'tab.dragAndDropBorder': alpha(teals.classic, '60'),
  'tab.selectedBackground': blacks.base,
  'tab.selectedForeground': teals.neon,
  'tab.selectedBorderTop': teals.classic,

  // Form Controls
  'radio.activeForeground': foregrounds.bright,
  'radio.activeBackground': teals.classic,
  'radio.activeBorder': teals.neon,
  'radio.inactiveForeground': greys.silver,
  'radio.inactiveBackground': blacks.sleeve,
  'radio.inactiveBorder': alpha(teals.classic, '40'),
  'radio.inactiveHoverBackground': alpha(teals.classic, '15'),

  // Inline Edit
  'inlineEdit.gutterIndicator.primaryBorder': versions.v6ai,
  'inlineEdit.gutterIndicator.primaryForeground': versions.v6ai,
  'inlineEdit.gutterIndicator.primaryBackground': alpha(versions.v6ai, '20'),
  'inlineEdit.gutterIndicator.secondaryBorder': alpha(teals.classic, '60'),
  'inlineEdit.gutterIndicator.secondaryForeground': teals.neon,
  'inlineEdit.gutterIndicator.secondaryBackground': alpha(teals.classic, '15'),
  'inlineEdit.gutterIndicator.successfulBorder': character.negi.bright,
  'inlineEdit.gutterIndicator.successfulForeground': character.negi.bright,
  'inlineEdit.gutterIndicator.successfulBackground': alpha(character.negi.bright, '20'),
  'inlineEdit.originalBackground': alpha(greys.slate, '10'),
  'inlineEdit.modifiedBackground': alpha(angel.accessories.shoes, '15'),
  'inlineEdit.originalBorder': alpha(greys.slate, '40'),
  'inlineEdit.modifiedBorder': alpha(versions.v6ai, '50'),

  // Editor Extended
  'editor.placeholder.foreground': alpha(foregrounds.comment, '60'),
  'editor.inactiveSelectionBackground': alpha(teals.classic, '20'),
  'editor.wordHighlightTextBackground': alpha(cyans.ice, '15'),
  'editor.wordHighlightTextBorder': alpha(cyans.ice, '35'),
  'editor.findMatchForeground': pinks.blush,
  'editor.findMatchHighlightForeground': stage.spotlight,
  'editor.findRangeHighlightBorder': alpha(teals.classic, '40'),
  'search.resultsInfoForeground': foregrounds.primary,

  // Terminal Extended
  'terminal.hoverHighlightBackground': alpha(teals.classic, '20'),
  'terminal.initialHintForeground': alpha(teals.neon, '80'),
  'terminal.selectionForeground': stage.spotlight,
  'terminal.dropBackground': alpha(teals.classic, '20'),
  'terminalCommandGuide.foreground': alpha(teals.classic, '40'),
  'terminalOverviewRuler.border': alpha(teals.classic, '30'),
  'terminalStickyScroll.background': blacks.void,
  'terminalStickyScroll.border': alpha(teals.classic, '20'),
  'terminalStickyScrollHover.background': alpha(versionMapping.hover, '15'),

  // Sidebar Extended
  'sideBarTitle.background': blacks.base,
  'sideBarTitle.border': alpha(teals.classic, '15'),
  'sideBarActivityBarTop.border': alpha(teals.classic, '15'),

  // List Extended
  'list.dropBackground': alpha(teals.classic, '20'),
  'list.dropBetweenBackground': alpha(teals.classic, '40'),
  'list.focusAndSelectionOutline': alpha(pinks.sekai, '60'),
  'list.inactiveSelectionIconForeground': foregrounds.primary,
  'list.inactiveFocusBackground': alpha(teals.classic, '15'),
  'list.inactiveFocusOutline': alpha(teals.classic, '30'),
  'list.filterMatchBackground': alpha(pinks.sekai, '25'),
  'list.filterMatchBorder': alpha(pinks.sekai, '50'),
  'listFilterWidget.shadow': alpha(stage.darkness, '50'),

  // Tree Extended
  'tree.inactiveIndentGuidesStroke': alpha(teals.classic, '15'),
  'tree.tableOddRowsBackground': alpha(teals.classic, '05'),

  // Debug Extended
  'debugExceptionWidget.background': alpha(semantic.error, '20'),
  'debugExceptionWidget.border': semantic.error,
  'editor.inlineValuesForeground': versions.v6ai,
  'editor.inlineValuesBackground': alpha(versions.v6ai, '15'),
  'debugTokenExpression.type': pinks.pale,

  // Diff Extended
  'diffEditor.unchangedRegionShadow': alpha(stage.darkness, '30'),
  'diffEditor.move.border': alpha(hologram.purple, '60'),
  'diffEditor.moveActive.border': hologram.purple,

  // Editor Group Extended
  'editorGroup.dropIntoPromptForeground': foregrounds.primary,
  'editorGroup.dropIntoPromptBackground': alpha(blacks.outfit, 'F0'),
  'editorGroup.dropIntoPromptBorder': alpha(teals.classic, '50'),
  'editorGroup.emptyBackground': blacks.base,
  'editorGroup.focusedEmptyBorder': alpha(teals.classic, '40'),

  // Comments
  'commentsView.resolvedIcon': semantic.success,
  'commentsView.unresolvedIcon': semantic.warning,
  'editorCommentsWidget.resolvedBorder': alpha(semantic.success, '60'),
  'editorCommentsWidget.unresolvedBorder': alpha(semantic.warning, '60'),
  'editorCommentsWidget.rangeBackground': alpha(teals.classic, '10'),
  'editorCommentsWidget.rangeActiveBackground': alpha(teals.classic, '20'),
  'editorCommentsWidget.replyInputBackground': blacks.sleeve,

  // Panel Extended
  'panelTitleBadge.background': teals.classic,
  'panelTitleBadge.foreground': stage.spotlight,
  'panelStickyScroll.background': blacks.void,
  'panelStickyScroll.border': alpha(teals.classic, '20'),
  'panelStickyScroll.shadow': alpha(stage.darkness, '50'),
  'outputView.background': blacks.void,
  'outputViewStickyScroll.background': blacks.void,

  // Overview Ruler Extended
  'editorOverviewRuler.modifiedForeground': alpha(semantic.warning, '90'),
  'editorOverviewRuler.addedForeground': alpha(semantic.success, '90'),
  'editorOverviewRuler.deletedForeground': alpha(semantic.error, '90'),
  'editorOverviewRuler.commentForeground': alpha(foregrounds.comment, '60'),
  'editorOverviewRuler.commentUnresolvedForeground': alpha(semantic.warning, '60'),

  // Gutter Extended
  'editorGutter.modifiedSecondaryBackground': alpha(semantic.warning, '50'),
  'editorGutter.addedSecondaryBackground': alpha(semantic.success, '50'),
  'editorGutter.deletedSecondaryBackground': alpha(semantic.error, '50'),
  'editorGutter.commentRangeForeground': alpha(foregrounds.comment, '40'),
  'editorGutter.commentGlyphForeground': hologram.cyan,
  'editorGutter.commentUnresolvedGlyphForeground': semantic.warning,

  // Sticky Scroll Extended
  'editorStickyScroll.shadow': alpha(stage.darkness, '30'),
  'editorStickyScrollGutter.background': alpha(blacks.outfit, 'F0'),

  // Unicode Highlight
  'editorUnicodeHighlight.border': alpha(semantic.warning, '80'),
  'editorUnicodeHighlight.background': alpha(semantic.warning, '15'),

  // Testing Extended
  'testing.iconErrored.retired': alpha(semantic.error, '60'),
  'testing.iconFailed.retired': alpha(semantic.error, '60'),
  'testing.iconPassed.retired': alpha(semantic.success, '60'),
  'testing.iconQueued.retired': alpha(semantic.warning, '60'),
  'testing.iconUnset.retired': alpha(greys.slate, '60'),
  'testing.iconSkipped.retired': alpha(greys.slate, '60'),
  'testing.message.error.badgeBackground': alpha(semantic.error, '25'),
  'testing.message.error.badgeBorder': semantic.error,
  'testing.message.error.badgeForeground': boosted.coralGlow,
  'testing.messagePeekBorder': teals.classic,
  'testing.messagePeekHeaderBackground': blacks.outfit,
  'testing.coveredBackground': alpha(character.negi.bright, '12'),
  'testing.coveredBorder': alpha(character.negi.bright, '40'),
  'testing.coveredGutterBackground': alpha(character.negi.bright, '30'),
  'testing.uncoveredBranchBackground': alpha(accents.coral, '20'),
  'testing.uncoveredBackground': alpha(accents.coral, '12'),
  'testing.uncoveredBorder': alpha(accents.coral, '40'),
  'testing.uncoveredGutterBackground': alpha(accents.coral, '30'),
  'testing.coverCountBadgeBackground': alpha(teals.classic, '25'),
  'testing.coverCountBadgeForeground': teals.neon,

  // Interactive Session
  'interactive.activeCodeBorder': alpha(versions.v6ai, '60'),
  'interactive.inactiveCodeBorder': alpha(teals.classic, '30'),

  // Terminal Symbol Icons
  'terminalSymbolIcon.aliasForeground': append.light,
  'terminalSymbolIcon.branchForeground': teals.neon,
  'terminalSymbolIcon.commitForeground': hologram.cyan,
  'terminalSymbolIcon.flagForeground': accents.amber,
  'terminalSymbolIcon.optionForeground': foregrounds.primary,
  'terminalSymbolIcon.optionValueForeground': character.negi.stalk,
  'terminalSymbolIcon.methodForeground': character.skin.blush,
  'terminalSymbolIcon.argumentForeground': append.light,
  'terminalSymbolIcon.inlineSuggestionForeground': versions.v6ai,
  'terminalSymbolIcon.fileForeground': foregrounds.primary,
  'terminalSymbolIcon.folderForeground': teals.classic,
  'terminalSymbolIcon.pullRequestDoneForeground': semantic.success,
  'terminalSymbolIcon.pullRequestForeground': pinks.soft,
  'terminalSymbolIcon.remoteForeground': angel.accessories.shoes,
  'terminalSymbolIcon.stashForeground': greys.slate,
  'terminalSymbolIcon.symbolText': foregrounds.primary,
  'terminalSymbolIcon.symbolicLinkFileForeground': hologram.purple,
  'terminalSymbolIcon.symbolicLinkFolderForeground': boosted.purple,
  'terminalSymbolIcon.tagForeground': accents.gold,

  // Chat Extended
  'chat.editedFileForeground': angel.accessories.shoes,
  'chat.linesAddedForeground': character.negi.bright,
  'chat.linesRemovedForeground': boosted.coralGlow,
  'chat.requestCodeBorder': alpha(versions.v6ai, '40'),
  'chat.requestBubbleBackground': alpha(teals.classic, '15'),
  'chat.requestBubbleHoverBackground': alpha(teals.classic, '25'),
  'chat.checkpointSeparator': alpha(teals.classic, '30'),

  // Activity Bar Extended
  'activityWarningBadge.foreground': blacks.void,
  'activityWarningBadge.background': semantic.warning,
  'activityErrorBadge.foreground': stage.spotlight,
  'activityErrorBadge.background': semantic.error,

  // Command Center Extended
  'commandCenter.debuggingBackground': alpha(pinks.sekai, '25'),

  // SCM Extended
  'scmGraph.historyItemHoverAdditionsForeground': semantic.success,
  'scmGraph.historyItemHoverDeletionsForeground': boosted.coralGlow,
  'scmGraph.historyItemRefColor': teals.neon,
  'scmGraph.historyItemRemoteRefColor': pinks.soft,
  'scmGraph.historyItemBaseRefColor': teals.classic,

  // Peek View Extended
  'peekViewEditorStickyScroll.background': blacks.outfit,
  'peekViewEditorStickyScrollGutter.background': blacks.sleeve,

  // Minimap Extended
  'minimap.chatEditHighlight': alpha(versions.v6ai, '60'),

  // Side by Side Editor
  'sideBySideEditor.horizontalBorder': alpha(teals.classic, '25'),
  'sideBySideEditor.verticalBorder': alpha(teals.classic, '25'),

  // Editor Pane
  'editorPane.background': blacks.outfit,
};

export type WorkbenchColors = typeof workbenchColors;
