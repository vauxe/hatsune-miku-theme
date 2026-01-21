/**
 * Hatsune Miku Theme - Workbench Colors
 *
 * VS Code UI element colors using the Miku palette
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * THE CYBER-INTERFACE PHILOSOPHY
 * ═══════════════════════════════════════════════════════════════════════════════
 *
 * Miku exists in duality: digital voice synthesizer ("01" tattoo) AND Electronic
 * Diva who fills stadiums with cyan light. This theme embodies that same duality.
 *
 * TWO SOULS IN BALANCE:
 * ┌─────────────────────┬─────────────────────────────────────────────────────┐
 * │ Electronic Diva     │ Sharp, electric, futuristic - active elements      │
 * │ Pure Maiden         │ Soft, transparent, ethereal - inactive elements    │
 * └─────────────────────┴─────────────────────────────────────────────────────┘
 *
 * CHARACTER DESIGN → UI MAPPING:
 * ┌─────────────────────┬─────────────┬─────────────────────────────────────────┐
 * │ Character Part      │ Hex         │ UI Element                              │
 * ├─────────────────────┼─────────────┼─────────────────────────────────────────┤
 * │ Skirt (Black)       │ #15191D     │ Editor Background - main stage          │
 * │ Arm Warmers         │ #111417     │ Activity Bar - interface frame          │
 * │ Headphones Body     │ #1A1F24     │ Sidebar - contains/organizes            │
 * │ Hair Ties (Pink)    │ #E05096     │ Cursor - playhead marking time          │
 * │ Hair Shine (Cyan)   │ #5DE4DB     │ Active text, keywords                   │
 * │ Identity Teal       │ #39C5BB     │ UI accents, badges - the anchor         │
 * │ Negi (Green)        │ #9CCC65     │ Strings - truth in code                 │
 * │ Blush (Pink)        │ #FFB8D4     │ Properties, highlights                  │
 * │ Boots               │ #111417     │ Dropdowns, overlays                     │
 * └─────────────────────┴─────────────┴─────────────────────────────────────────┘
 *
 * VERSION VOICE MAPPING (UI States):
 * ┌─────────────────────┬─────────────┬─────────────────────────────────────────┐
 * │ Miku Version        │ Hex         │ UI State                                │
 * ├─────────────────────┼─────────────┼─────────────────────────────────────────┤
 * │ V2 Classic (2007)   │ #39C5BB     │ Identity anchor, badges                 │
 * │ SEKAI (Game)        │ #33CCBB     │ Stage performance, multi-cursor         │
 * │ NT Modern           │ #3ED1C8     │ Functions, suggestions                  │
 * │ Append Light        │ #A8EBE6     │ Types, parameters (airy)                │
 * │ Append Sweet        │ #5FCEC8     │ Hover states (warm)                     │
 * │ V4X Soft            │ #6DD4CD     │ Focus states (gentle)                   │
 * │ V4X Hard            │ #2B9E96     │ Active/clicked states                   │
 * │ V6 AI (2025)        │ #41D9CF     │ Ghost text, AI features                 │
 * └─────────────────────┴─────────────┴─────────────────────────────────────────┘
 *
 * HETEROCHROMIA SELECTION (Empty SEKAI Miku):
 * Primary selection uses teal (#33CCBB35), secondary uses pink (#FF80AB25).
 * This creates a visual "breathing" effect between the two signature colors.
 *
 * FREQUENCY VISUALIZER (Indent Guides):
 * Each indent level maps to an audio frequency band, creating a spectrum
 * visualization from bass (dark) to ultra (bright).
 *
 * For complete design documentation, see DESIGN_SYSTEM.md
 */

import {
  blacks,
  stage,
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

  character,
  append,
  v4xVoice,
  versions,
  cryptonFamily,
  snowMiku,
  projectSekai,
  mikuExpo,
  magicalMirai,
  digital,
  numberSymbolism,
  boosted,

  // Additional variants for richer theming
  racingMiku,
  iconicPVs,
  seasonalExpanded,
  derivativeCharacters,
  projectDiva,
  viralHits,
  sakuraMiku,
  mikuDay,

  // Vibrant unused palettes for maximum beauty
  mikuSymphony,
  digitalStars,
  collaborations,
  artStyles,
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
  'editor.lineHighlightBackground': alpha(versionMapping.identity, '12'), // More visible breathing
  'editor.lineHighlightBorder': alpha(cyans.ice, '30'),
  // SEKAI Heterochromia Selection - both eye colors
  'editor.selectionBackground': alpha(projectSekai.emptySekai.heteroTurquoise, '35'), // #33CCBB
  'editor.selectionHighlightBackground': alpha(projectSekai.emptySekai.heteroPink, '25'), // #FF80AB
  'editor.selectionHighlightBorder': alpha(projectSekai.emptySekai.heteroTurquoise, '40'),
  'editor.wordHighlightBackground': alpha(projectSekai.emptySekai.heteroTurquoise, '20'),
  'editor.wordHighlightBorder': alpha(projectSekai.emptySekai.heteroTurquoise, '40'),
  'editor.wordHighlightStrongBackground': alpha(projectSekai.emptySekai.heteroPink, '30'),
  'editor.wordHighlightStrongBorder': alpha(projectSekai.emptySekai.heteroPink, '60'),
  // Find matches - heterochromia principle: pink active, cyan highlights (maximized distinction)
  'editor.findMatchBackground': alpha(pinks.sekai, '60'), // #FF6B9D - Active (pink)
  'editor.findMatchBorder': alpha(pinks.sekai, '90'),
  'editor.findMatchHighlightBackground': alpha(cyans.ice, '50'), // #84FFFF - Others (cyan)
  'editor.findMatchHighlightBorder': alpha(cyans.ice, '80'),
  'editor.rangeHighlightBackground': alpha(teals.classic, '10'),
  'editor.rangeHighlightBorder': alpha(teals.classic, '30'),

  // Line numbers - Character tie colors
  'editorLineNumber.foreground': character.tie.shadow, // #2D9E97
  'editorLineNumber.activeForeground': character.hair.shine, // #5DE4DB (Lc ~70)
  'editorLineNumber.dimmedForeground': frequencyVisualizer.bass, // #1E8A82 - Lc ~32 (dim but visible)
  'editorLineNumber.warningForeground': semantic.warning,
  'editorLineNumber.errorForeground': semantic.error,

  // Indent guides - Frequency visualizer (sheet music lines, bass→ultra spectrum)
  // Visible hierarchy: darker at shallow depth, brighter at deep nesting
  'editorIndentGuide.background1': alpha(frequencyVisualizer.bass, '50'),  // #1E8A82 - Level 1 bass
  'editorIndentGuide.background2': alpha(frequencyVisualizer.low, '55'),   // #2AA69E - Level 2 low
  'editorIndentGuide.background3': alpha(frequencyVisualizer.mid, '60'),   // #39C5BB - Level 3 mid
  'editorIndentGuide.background4': alpha(frequencyVisualizer.high, '65'),  // #3ED1C8 - Level 4 high
  'editorIndentGuide.background5': alpha(frequencyVisualizer.peak, '70'),  // #00E5D4 - Level 5 peak
  'editorIndentGuide.background6': alpha(frequencyVisualizer.ultra, '75'), // #A8EBE6 - Level 6 ultra
  'editorIndentGuide.activeBackground1': frequencyVisualizer.bass,  // Full opacity when active
  'editorIndentGuide.activeBackground2': frequencyVisualizer.low,
  'editorIndentGuide.activeBackground3': frequencyVisualizer.mid,
  'editorIndentGuide.activeBackground4': frequencyVisualizer.high,
  'editorIndentGuide.activeBackground5': frequencyVisualizer.peak,
  'editorIndentGuide.activeBackground6': frequencyVisualizer.ultra,

  // Rulers and whitespace - frequencyVisualizer.bass for Lc ~32 (dim but visible)
  'editorRuler.foreground': frequencyVisualizer.bass, // #1E8A82 - Column guides
  'editorWhitespace.foreground': frequencyVisualizer.bass, // #1E8A82 - Whitespace markers

  // Brackets - Rainbow concert lighting (distinct colors for each level)
  'editorBracketMatch.background': alpha(digital.dataStream, '25'), // #39C5BB
  'editorBracketMatch.border': digital.binaryGlow, // #5DE4DB
  'editorBracketHighlight.foreground1': accents.amber, // #FFD740 - Gold (Lc ~80)
  'editorBracketHighlight.foreground2': pinks.blush, // #FFB8D4 - Pink (Lc ~70)
  'editorBracketHighlight.foreground3': character.negi.bright, // #69F0AE - Green (Lc ~75)
  'editorBracketHighlight.foreground4': boosted.purple, // #D4BBFF - Purple (Lc ~65)
  'editorBracketHighlight.foreground5': cyans.ice, // #84FFFF - Cyan (Lc ~85)
  'editorBracketHighlight.foreground6': accents.orange, // #FFAB40 - Orange (Lc ~70)
  'editorBracketHighlight.unexpectedBracket.foreground': boosted.coralGlow, // #FFBAB3 (Lc ~65)
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
  'editorGutter.addedBackground': alpha(character.negi.stalk, '80'), // #9CCC65 - Negi stalk green
  'editorGutter.modifiedBackground': alpha(semantic.warning, '80'),
  'editorGutter.deletedBackground': alpha(character.headphones.cushion, '80'), // #E05096 - Headphone cushion pink
  'editorGutter.foldingControlForeground': alpha(teals.neon, 'BB'),

  // Widgets - Boots black (grounded overlay)
  'editorWidget.background': character.boots.black, // #111417
  'editorWidget.foreground': versionMapping.hover,
  'editorWidget.border': alpha(character.hair.root, '80'), // Hair root - subtle widget frame
  'editorWidget.resizeBorder': alpha(character.tie.shadow, '80'), // Tie shadow - resize handle
  'editorHoverWidget.background': alpha(blacks.outfit, 'F5'),
  'editorHoverWidget.border': alpha(character.hair.root, '70'), // Hair root - subtle hover frame
  'editorHoverWidget.foreground': foregrounds.primary,
  'editorHoverWidget.highlightForeground': character.hair.shine, // #5DE4DB (Lc ~70) - boosted from teals.classic
  'editorHoverWidget.statusBarBackground': blacks.sleeve,
  'editorUnnecessaryCode.opacity': alpha(blacks.void, '80'),
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
  'activityBar.border': alpha(character.tie.shadow, '60'), // Tie shadow - subtle structural seam
  'activityBarBadge.background': artStyles.mikaPikazo.secondary, // #FF1493 - Hot pink badge (vibrant!)
  'activityBarBadge.foreground': stage.spotlight, // White text on hot pink
  'activityBarTop.foreground': teals.classic,
  'activityBarTop.activeBorder': pinks.sekai,
  'activityBarTop.inactiveForeground': greys.silver,

  // ==========================================================================
  // SIDEBAR - Headphones body (interface frame)
  // ==========================================================================
  'sideBar.background': character.headphones.body, // #1A1F24
  'sideBar.foreground': append.light,
  'sideBar.border': alpha(character.tie.shadow, '50'), // Tie shadow - outfit seam
  'sideBar.dropBackground': alpha(teals.classic, '20'),
  'sideBarSectionHeader.background': character.outfitTop.shadow, // #263238 - Outfit shadow
  'sideBarSectionHeader.foreground': character.hair.shine, // #5DE4DB (Lc ~70)
  'sideBarSectionHeader.border': alpha(pinks.sekai, '25'), // Pink section border (heterochromia)
  'sideBarTitle.foreground': character.hair.shine, // #5DE4DB (Lc ~70)
  'sideBarStickyScroll.background': blacks.sleeve,
  'sideBarStickyScroll.border': alpha(teals.classic, '20'),
  'sideBarStickyScroll.shadow': alpha(stage.darkness, '50'), // Concert stage darkness

  // ==========================================================================
  // STATUS BAR - Data Stream Console (Cyber-Diva Information Flow)
  // Sharp futuristic bottom panel with electric accents
  // ==========================================================================
  'statusBar.background': blacks.void,
  'statusBar.foreground': foregrounds.primary,
  'statusBar.border': alpha(character.tie.shadow, '70'), // Tie shadow - structural definition
  'statusBar.debuggingBackground': alpha(pinks.sekai, 'E0'), // Translucent debug mode
  'statusBar.debuggingForeground': stage.spotlight,
  'statusBar.debuggingBorder': pinks.sekai,
  'statusBar.noFolderBackground': blacks.void,
  'statusBar.noFolderForeground': greys.platinum, // #B0BEC5 (Lc ~60) - boosted from silver
  'statusBar.noFolderBorder': alpha(frequencyVisualizer.bass, '40'), // Dark teal when no folder
  'statusBarItem.remoteBackground': frequencyVisualizer.mid, // #39C5BB - Identity teal
  'statusBarItem.remoteForeground': blacks.void,
  'statusBarItem.remoteHoverBackground': frequencyVisualizer.high, // #3ED1C8 - NT bright on hover
  'statusBarItem.hoverBackground': alpha(append.vivid, '20'), // Electric vivid hover
  'statusBarItem.hoverForeground': append.vivid, // #00E5D4 - Electric text on hover
  'statusBarItem.activeBackground': alpha(v4xVoice.hard, '40'), // V4X Hard pressed
  'statusBarItem.errorBackground': digital.glitch, // #FF5370 - Digital glitch
  'statusBarItem.errorForeground': stage.spotlight,
  'statusBarItem.errorHoverBackground': alpha(digital.glitch, 'CC'),
  'statusBarItem.warningBackground': accents.amber,
  'statusBarItem.warningForeground': blacks.void,
  'statusBarItem.warningHoverBackground': alpha(accents.amber, 'CC'),
  'statusBarItem.prominentBackground': alpha(append.vivid, '25'), // Electric prominent items
  'statusBarItem.prominentForeground': append.vivid, // #00E5D4 - Electric text
  'statusBarItem.prominentHoverBackground': alpha(append.vivid, '40'),
  'statusBarItem.prominentHoverForeground': stage.spotlight,
  'statusBarItem.compactHoverBackground': alpha(versionMapping.hover, '30'),
  'statusBarItem.focusBorder': alpha(character.hair.shine, 'DD'), // #5DE4DB - Visible focus ring

  // ==========================================================================
  // TITLE BAR
  // ==========================================================================
  'titleBar.activeBackground': blacks.void,
  'titleBar.activeForeground': foregrounds.primary,
  'titleBar.inactiveBackground': blacks.void,
  'titleBar.inactiveForeground': greys.silver,
  'titleBar.border': alpha(character.tie.shadow, '50'), // Tie shadow - subtle frame

  // ==========================================================================
  // TABS
  // ==========================================================================
  'tab.activeBackground': alpha(character.hair.shine, '10'), // #5DE4DB - Brighter spotlight
  'tab.activeForeground': artStyles.ixima.techCyan, // #00E5FF - Neon active text
  'tab.activeBorderTop': character.hairTies.base, // #E05096 - Hair ties (matches cursor)
  'tab.activeBorder': alpha(digitalStars.y2021.glitch, '40'), // Neon bottom border
  'tab.inactiveBackground': blacks.outfit,
  'tab.inactiveForeground': greys.silver,
  'tab.border': blacks.sleeve,
  'tab.hoverBackground': alpha(pinks.sekai, '15'), // Pink hover (distinct from active teal)
  'tab.hoverForeground': pinks.blush, // #FFB8D4 - Pink text on hover
  'tab.hoverBorder': alpha(pinks.sekai, '40'),
  'tab.unfocusedActiveBackground': blacks.base,
  'tab.unfocusedActiveForeground': append.light,
  'tab.unfocusedActiveBorderTop': alpha(pinks.sekai, '80'),
  'tab.unfocusedInactiveBackground': blacks.outfit,
  'tab.unfocusedInactiveForeground': snowMiku.y2011.mufflerGrey, // #B0C4DE - Snow Miku muffler grey
  'editorGroupHeader.tabsBackground': blacks.sleeve,
  'editorGroupHeader.tabsBorder': alpha(teals.classic, '15'),
  'editorGroupHeader.noTabsBackground': blacks.outfit,
  'editorGroup.border': alpha(character.tie.shadow, '60'), // Tie shadow - subtle editor group divider
  'editorGroup.dropBackground': alpha(character.eyes.bright, '40'),

  // ==========================================================================
  // LISTS
  // ==========================================================================
  'list.activeSelectionBackground': alpha(teals.classic, '30'),
  'list.activeSelectionForeground': stage.spotlight,
  'list.activeSelectionIconForeground': character.hair.shine, // #5DE4DB (Lc ~70) - boosted from teals.classic
  'list.inactiveSelectionBackground': alpha(teals.classic, '20'),
  'list.inactiveSelectionForeground': foregrounds.primary,
  'list.hoverBackground': alpha(versionMapping.hover, '15'),
  'list.hoverForeground': foregrounds.primary,
  'list.focusBackground': alpha(pinks.sekai, '25'), // Pink focus (distinct from selection teal)
  'list.focusForeground': pinks.blush, // #FFB8D4 - Pink text (distinct from selection white)
  'list.focusOutline': alpha(character.hair.shine, 'DD'), // #5DE4DB - Visible focus outline
  'list.highlightForeground': pinks.blush, // #FFB8D4 (Lc ~70)
  'list.errorForeground': boosted.coralGlow, // #FF8A80 - Boosted for Lc ~55
  'list.warningForeground': semantic.warning,
  'list.invalidItemForeground': boosted.coralGlow, // #FFBAB3 (Lc ~65)
  'list.deemphasizedForeground': greys.platinum, // #B0BEC5 (Lc ~60) - boosted from silver
  'listFilterWidget.background': blacks.outfit,
  'listFilterWidget.outline': alpha(pinks.sekai, '70'), // Pink filter outline
  'listFilterWidget.noMatchesOutline': semantic.error,

  // Tree - Heterochromia: Pink tree guides for visual contrast with teal UI
  'tree.indentGuidesStroke': alpha(pinks.sekai, '40'), // Pink tree guides
  'tree.tableColumnsBorder': alpha(pinks.sekai, '25'),

  // ==========================================================================
  // GENERAL UI
  // ==========================================================================
  'focusBorder': alpha(character.hair.shine, 'DD'), // #5DE4DB - Hair shine, visible focus
  'foreground': foregrounds.primary,
  'disabledForeground': greys.silver,
  'widget.shadow': alpha(stage.darkness, '70'), // Concert stage darkness
  'selection.background': alpha(versionMapping.identity, '40'),
  'descriptionForeground': greys.silver,
  'errorForeground': boosted.coralGlow, // #FF8A80 - Boosted for Lc ~55
  'icon.foreground': append.light,
  'sash.hoverBorder': alpha(pinks.sekai, '80'), // Pink sash on hover (heterochromia)

  // ==========================================================================
  // INPUT
  // ==========================================================================
  'input.background': blacks.sleeve,
  'input.foreground': foregrounds.primary,
  'input.border': alpha(character.tie.shadow, '50'), // Tie shadow - subtle input frame
  'input.placeholderForeground': greys.silver,
  'inputOption.activeBorder': pinks.sekai,
  'inputOption.activeBackground': alpha(pinks.sekai, '30'),
  'inputOption.activeForeground': stage.spotlight,
  'inputOption.hoverBackground': alpha(versionMapping.hover, '20'),
  'inputValidation.errorBackground': alpha(semantic.error, '25'),
  'inputValidation.errorBorder': semantic.error,
  'inputValidation.errorForeground': boosted.coralGlow, // #FFBAB3 (Lc ~65)
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
  'dropdown.border': alpha(character.tie.shadow, '50'), // Tie shadow - subtle dropdown frame
  'dropdown.listBackground': character.boots.black,

  // ==========================================================================
  // BUTTON
  // ==========================================================================
  'button.background': teals.classic,
  'button.foreground': blacks.void,
  'button.hoverBackground': teals.stage,
  'button.secondaryBackground': greys.slate,
  'button.secondaryForeground': stage.spotlight,
  'button.secondaryHoverBackground': greys.steel,
  'button.border': alpha(teals.classic, '80'),

  // ==========================================================================
  // CHECKBOX
  // ==========================================================================
  'checkbox.background': blacks.sleeve,
  'checkbox.foreground': teals.classic,
  'checkbox.border': alpha(character.tie.shadow, '50'), // Tie shadow - subtle checkbox frame

  // ==========================================================================
  // SCROLLBAR - Boots Hardware (Grounded Interface Controls)
  // ==========================================================================
  'scrollbar.shadow': alpha(stage.darkness, '50'), // Concert stage darkness
  'scrollbarSlider.background': alpha(character.boots.hardware, '40'), // #263238 - Boots hardware
  'scrollbarSlider.hoverBackground': alpha(character.outfitTop.highlight, '60'), // #455A64 - Outfit highlight
  'scrollbarSlider.activeBackground': alpha(character.hair.root, '80'), // #1A8A82 - Teal when active

  // ==========================================================================
  // MINIMAP - Holographic Code Preview (Cyber-Diva Scan Display)
  // Digital grid/scan lines with holographic glow effects
  // ==========================================================================
  'minimap.findMatchHighlight': alpha(numberSymbolism.miku39.heart, '90'), // 39 Heart highlight
  'minimap.selectionHighlight': alpha(hologram.cyan, '70'), // #4DD0E1 - Holographic selection
  'minimap.errorHighlight': alpha(boosted.coralGlow, '95'), // Boosted error for readability
  'minimap.warningHighlight': alpha(accents.amber, '90'), // Amber warnings
  'minimap.background': alpha(character.armDisplay.screen, '08'), // #39C5BB - Arm display screen
  'minimap.selectionOccurrenceHighlight': alpha(append.vivid, '50'), // #00E5D4 - Electric occurrence
  'minimap.foregroundOpacity': alpha(stage.darkness, 'BB'), // Concert stage darkness - glow-through
  'minimap.infoHighlight': alpha(hologram.cyan, '80'), // Holographic info
  'minimapSlider.background': alpha(character.armDisplay.data, '20'), // #5DE4DB - Arm display data
  'minimapSlider.hoverBackground': alpha(pinks.blush, '40'), // Pink on hover (heterochromia)
  'minimapSlider.activeBackground': alpha(pinks.sekai, '45'), // SEKAI pink when active
  'minimapGutter.addedBackground': alpha(character.negi.stalk, '90'), // #9CCC65 - Negi stalk green
  'minimapGutter.modifiedBackground': alpha(accents.amber, '90'), // Amber modified
  'minimapGutter.deletedBackground': alpha(character.headphones.cushion, '90'), // #E05096 - Headphone cushion pink

  // ==========================================================================
  // BREADCRUMB - Hair Gradient with Heterochromia Focus/Active States
  // ==========================================================================
  'breadcrumb.foreground': character.hair.tip, // #7FEDE5 - Hair tip (Lc ~75)
  'breadcrumb.background': blacks.base,
  'breadcrumb.focusForeground': pinks.blush, // #FFB8D4 - Pink for distinction (heterochromia)
  'breadcrumb.activeSelectionForeground': pinks.blush, // #FFB8D4 - Pink for distinction (heterochromia)
  'breadcrumb.activeSelectionBackground': alpha(teals.classic, '20'),
  'breadcrumbPicker.background': blacks.outfit,

  // ==========================================================================
  // TERMINAL - Crypton Family ANSI Colors
  // Each color represents a Crypton character or iconic Miku element
  // ==========================================================================
  'terminal.background': character.skirt.black, // Main stage
  'terminal.foreground': foregrounds.primary,
  'terminal.ansiBlack': blacks.base, // #1A1F24 - Headphones
  'terminal.ansiRed': boosted.coralGlow, // #FFBAB3 - Boosted coral (Lc ~65)
  'terminal.ansiGreen': character.negi.stalk, // #9CCC65 (Lc ~64)
  'terminal.ansiYellow': iconicPVs.worldIsMine.crown, // #FFD700 - World is Mine crown gold (Lc ~80)
  'terminal.ansiBlue': snowMiku.y2011.winterBlue, // #87CEEB (Lc ~70)
  'terminal.ansiMagenta': iconicPVs.melt.blush, // #FF69B4 - Melt blush (Lc ~60)
  'terminal.ansiCyan': character.hair.shine, // #5DE4DB (Lc ~70)
  'terminal.ansiWhite': greys.platinum, // #B0BEC5 (Lc ~60) - Muted white/gray
  'terminal.ansiBrightBlack': greys.silver,
  'terminal.ansiBrightRed': seasonalExpanded.valentine.heartRed, // #FF1744 - Valentine heart (Lc ~55)
  'terminal.ansiBrightGreen': racingMiku.y2014.limeAccent, // #76FF03 - Racing lime (Lc ~85)
  'terminal.ansiBrightYellow': mikuDay.celebration.confettiYellow, // #FFEB3B - 39's Day confetti (Lc ~90)
  'terminal.ansiBrightBlue': snowMiku.y2021.glowCyan, // #84FFFF - Snow Miku 2021 glow (Lc ~85)
  'terminal.ansiBrightMagenta': sakuraMiku.character.hairPink, // #FFB7C5 - Sakura blossom (Lc ~70)
  'terminal.ansiBrightCyan': racingMiku.y2017.highlightCyan, // #00E5FF - Racing highlight (Lc ~80)
  'terminal.ansiBrightWhite': stage.spotlight, // Pure white (distinct from ansiWhite gray)
  'terminal.selectionBackground': alpha(teals.classic, '40'),
  'terminal.inactiveSelectionBackground': alpha(teals.classic, '25'),
  'terminal.findMatchBackground': alpha(pinks.sekai, '50'), // Active match - pink
  'terminal.findMatchBorder': alpha(pinks.sekai, '90'),
  'terminal.findMatchHighlightBackground': alpha(accents.gold, '30'), // Other matches - gold for distinction
  'terminal.findMatchHighlightBorder': alpha(accents.gold, '60'),
  'terminalCursor.foreground': character.hairTies.base, // #E05096 - Hair ties pink
  'terminalCursor.background': character.skirt.black,
  'terminal.border': alpha(character.tie.shadow, '60'), // Tie shadow - subtle frame
  'terminal.tab.activeBorder': pinks.sekai,
  'terminalCommandDecoration.defaultBackground': alpha(teals.classic, '60'),
  'terminalCommandDecoration.successBackground': alpha(racingMiku.team.gsmTeal, '90'), // #00BFA5 - Racing Miku GSM teal
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
  'notifications.border': alpha(character.tie.shadow, '70'), // Tie shadow - subtle notification frame
  'notificationToast.border': alpha(character.tie.shadow, '80'), // Tie shadow - toast frame
  'notificationsInfoIcon.foreground': sakuraMiku.character.hairPink, // #FFB7C5 - Sakura Miku (gentle alerts)
  'notificationsWarningIcon.foreground': accents.amber, // #FFAB40 - Warm amber warning
  'notificationsErrorIcon.foreground': boosted.coralGlow, // #FF8A80 - Boosted for Lc ~55
  'notificationLink.foreground': versions.v6ai, // #41D9CF - V6 AI for links
  'notificationCenterHeader.background': alpha(blacks.sleeve, 'F0'), // Slight transparency
  'notificationCenterHeader.foreground': append.vivid, // #00E5D4 - Electric header
  'notificationCenter.border': alpha(character.tie.shadow, '60'), // Tie shadow - subtle center frame

  // ==========================================================================
  // PEEK VIEW
  // ==========================================================================
  'peekView.border': alpha(character.tie.shadow, '90'), // Tie shadow - peek view frame
  'peekViewEditor.background': character.skirt.black, // #15191D
  'peekViewEditorGutter.background': character.headphones.body, // #1A1F24 - Headphones body
  'peekViewResult.background': character.headphones.body, // #1A1F24 - Headphones body
  'peekViewResult.selectionBackground': alpha(teals.classic, '30'),
  'peekViewResult.selectionForeground': stage.spotlight,
  'peekViewTitle.background': blacks.void,
  'peekViewTitleLabel.foreground': teals.bright,
  'peekViewTitleDescription.foreground': greys.platinum, // #B0BEC5 (Lc ~60) - boosted from silver
  'peekViewResult.fileForeground': foregrounds.primary,
  'peekViewResult.lineForeground': append.light,
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
  'gitDecoration.addedResourceForeground': character.negi.bright, // #69F0AE (Lc ~75)
  'gitDecoration.modifiedResourceForeground': character.hair.shine, // #5DE4DB (Lc ~70)
  'gitDecoration.deletedResourceForeground': boosted.coralGlow, // #FFBAB3 (Lc ~65)
  'gitDecoration.renamedResourceForeground': snowMiku.y2011.winterBlue, // #87CEEB (Lc ~70)
  'gitDecoration.untrackedResourceForeground': character.hair.shine, // #5DE4DB (Lc ~70)
  'gitDecoration.ignoredResourceForeground': greys.silver,
  'gitDecoration.conflictingResourceForeground': accents.orange, // #FFAB40 (Lc ~70)
  'gitDecoration.stageModifiedResourceForeground': accents.gold, // #FFCA28 (Lc ~80)
  'gitDecoration.stageDeletedResourceForeground': pinks.blush, // #FFB8D4 (Lc ~70) - Distinct staged delete (vs #FFBAB3 deleted)
  'gitDecoration.submoduleResourceForeground': semantic.info,

  // ==========================================================================
  // DIFF EDITOR
  // ==========================================================================
  'diffEditor.insertedTextBackground': alpha(character.negi.bright, '30'), // #69F0AE - Negi bright (visible)
  'diffEditor.removedTextBackground': alpha(character.headphones.cushion, '30'), // #E05096 - Headphone cushion (visible)
  'diffEditor.insertedLineBackground': alpha(character.negi.white, '20'), // #E8F5E9 - Negi white (readable)
  'diffEditor.removedLineBackground': alpha(character.headphones.cushion, '18'), // Readable removal tint
  'diffEditor.diagonalFill': alpha(teals.classic, '15'),
  'diffEditor.border': alpha(character.tie.shadow, '60'), // Tie shadow - subtle diff frame
  'diffEditor.unchangedRegionBackground': blacks.outfit,
  'diffEditor.unchangedRegionForeground': greys.silver,
  'diffEditor.unchangedCodeBackground': alpha(teals.classic, '08'),
  'diffEditorGutter.insertedLineBackground': alpha(character.negi.stalk, '50'), // #9CCC65 - Negi stalk for additions
  'diffEditorGutter.removedLineBackground': alpha(character.headphones.cushion, '40'), // #E05096 - Headphone pink for removals
  'diffEditorOverview.insertedForeground': semantic.success,
  'diffEditorOverview.removedForeground': semantic.error,
  'multiDiffEditor.headerBackground': blacks.outfit,
  'multiDiffEditor.background': blacks.void,
  'multiDiffEditor.border': alpha(teals.classic, '30'),

  // ==========================================================================
  // PANEL
  // ==========================================================================
  'panel.background': blacks.void,
  'panel.border': alpha(character.tie.shadow, '70'), // Tie shadow - structural definition
  'panel.dropBorder': alpha(character.hair.shine, 'DD'), // #5DE4DB - Visible drop border
  'panelTitle.activeForeground': teals.classic,
  'panelTitle.inactiveForeground': greys.silver,
  'panelTitle.activeBorder': pinks.sekai,
  'panelInput.border': alpha(teals.classic, '40'),
  'panelSection.border': alpha(pinks.sekai, '35'), // Pink section border (heterochromia)
  'panelSection.dropBackground': alpha(pinks.sekai, '25'),
  'panelSectionHeader.background': character.outfitTop.grey, // #37474F - Outfit grey
  'panelSectionHeader.foreground': character.hair.shine, // #5DE4DB - Hair shine
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
  'debugConsole.infoForeground': snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku (Lc 70+)
  'debugConsole.warningForeground': stage.warmAmber, // #FFC107
  'debugConsole.errorForeground': boosted.coralGlow, // #FFBAB3 - Brighter coral (Lc 65+)
  'debugConsole.sourceForeground': semantic.success,
  'debugConsoleInputIcon.foreground': teals.classic,
  'debugTokenExpression.name': character.hair.shine, // #5DE4DB (Lc ~70)
  'debugTokenExpression.value': foregrounds.primary,
  'debugTokenExpression.string': character.negi.stalk, // #9CCC65 (Lc ~64)
  'debugTokenExpression.number': character.negi.bright, // #69F0AE (Lc ~75)
  'debugTokenExpression.boolean': pinks.blush, // #FFB8D4 (Lc ~70)
  'debugTokenExpression.error': boosted.coralGlow, // #FFBAB3 (Lc ~65)
  'debugView.exceptionLabelForeground': stage.spotlight,
  'debugView.exceptionLabelBackground': semantic.error,
  'debugView.stateLabelForeground': foregrounds.primary,
  'debugView.stateLabelBackground': alpha(teals.classic, '40'),
  'debugView.valueChangedHighlight': alpha(semantic.warning, '80'),
  'editor.stackFrameHighlightBackground': alpha(pinks.sekai, '25'),
  'editor.focusedStackFrameHighlightBackground': alpha(cyans.ice, '20'),

  // ==========================================================================
  // TESTING
  // ==========================================================================
  'testing.iconFailed': projectDiva.ratings.sad, // #F44336 - Project DIVA sad rating
  'testing.iconErrored': projectDiva.ratings.worst, // #B71C1C - Project DIVA worst rating
  'testing.iconPassed': racingMiku.y2014.limeAccent, // #76FF03 - Racing Miku lime (speed success)
  'testing.iconQueued': projectDiva.ratings.good, // #2196F3 - Project DIVA good rating
  'testing.iconUnset': projectDiva.ratings.safe, // #9E9E9E - Project DIVA safe rating
  'testing.iconSkipped': derivativeCharacters.grayMiku.hairMid, // #788888 - Gray Miku
  'testing.runAction': projectDiva.ratings.perfect, // #FFD700 - Project DIVA perfect rating
  'testing.peekBorder': teals.classic,
  'testing.peekHeaderBackground': blacks.outfit,
  'testing.message.error.decorationForeground': boosted.coralGlow, // #FFBAB3 (Lc ~65) - boosted from semantic.error
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
  'settings.headerForeground': character.hair.shine, // #5DE4DB (Lc ~70) - boosted from teals.classic
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
  'welcomePage.progress.foreground': character.hair.shine, // #5DE4DB (Lc ~70) - boosted from teals.classic
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
  'extensionBadge.remoteForeground': blacks.void, // #0D1114 - Dark text on pink badge
  'extensionIcon.starForeground': semantic.warning,
  'extensionIcon.verifiedForeground': semantic.success,
  'extensionIcon.preReleaseForeground': semantic.warning,
  'extensionIcon.sponsorForeground': pinks.sekai,

  // ==========================================================================
  // KEYBINDING
  // ==========================================================================
  'keybindingLabel.background': alpha(teals.classic, '20'),
  'keybindingLabel.foreground': character.hair.shine, // #5DE4DB (Lc ~70) - boosted from teals.classic
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
  'menu.selectionForeground': stage.spotlight,
  'menu.selectionBorder': alpha(teals.classic, '50'),
  'menu.separatorBackground': alpha(teals.classic, '30'),
  'menu.border': alpha(character.tie.shadow, '60'), // Tie shadow - subtle menu frame
  'menubar.selectionBackground': alpha(teals.classic, '25'),
  'menubar.selectionForeground': stage.spotlight,
  'menubar.selectionBorder': alpha(teals.classic, '40'),

  // ==========================================================================
  // COMMAND CENTER
  // ==========================================================================
  'commandCenter.foreground': foregrounds.primary,
  'commandCenter.background': blacks.sleeve,
  'commandCenter.border': alpha(character.tie.shadow, '50'), // Tie shadow - subtle frame
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
  'quickInputList.focusForeground': stage.spotlight,
  'quickInputList.focusIconForeground': pinks.blush, // #FFB8D4 - Pink icon for heterochromia

  // ==========================================================================
  // BANNER
  // ==========================================================================
  'banner.background': blacks.outfit,
  'banner.foreground': foregrounds.primary,
  'banner.iconForeground': teals.classic,

  // ==========================================================================
  // ERRORS & WARNINGS - Boosted for readability
  // ==========================================================================
  'editorError.foreground': boosted.coralGlow, // #FF8A80 - Boosted for Lc ~55
  'editorError.border': alpha(boosted.coralGlow, '40'),
  'editorError.background': alpha(boosted.coralGlow, '15'),
  'editorWarning.foreground': semantic.warning,
  'editorWarning.border': alpha(semantic.warning, '40'),
  'editorWarning.background': alpha(semantic.warning, '15'),
  'editorInfo.foreground': semantic.info,
  'editorInfo.border': alpha(semantic.info, '40'),
  'editorInfo.background': alpha(semantic.info, '15'),
  'editorHint.foreground': semantic.success,
  'editorHint.border': alpha(semantic.success, '40'),
  'problemsErrorIcon.foreground': boosted.coralGlow, // #FFBAB3 (Lc ~65)
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
  'editorInlayHint.parameterForeground': pinks.blush, // #FFB8D4 (Lc ~70)
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
  'notebook.focusedCellBorder': character.hair.shine, // #5DE4DB - Hair shine for focused cells
  'notebook.focusedEditorBorder': alpha(character.hair.shine, 'CC'), // #5DE4DB - Hair shine for focused editor
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
  // SYMBOL ICONS - Miku Character Design with ΔE 10+ Distinction
  // All pairs now have sufficient color difference for accessibility
  // ==========================================================================
  'symbolIcon.arrayForeground': teals.stage,
  'symbolIcon.booleanForeground': character.hairTies.highlight, // #FF80AB
  'symbolIcon.classForeground': accents.amber, // #FFD740 - Structural celebration (distinct from interface/property)
  'symbolIcon.colorForeground': pinks.sekai,
  'symbolIcon.constantForeground': character.negi.bright, // #69F0AE - Negi Bright (distinct from boolean)
  'symbolIcon.constructorForeground': accents.orange, // #FFAB40 - Orange (distinct from method pink)
  'symbolIcon.enumeratorForeground': boosted.purple, // #D4BBFF - Purple for enums (distinct from class gold)
  'symbolIcon.enumeratorMemberForeground': character.negi.stalk, // #9CCC65 - Negi Stalk (distinct from constant/number)
  'symbolIcon.eventForeground': accents.gold,
  'symbolIcon.fieldForeground': character.skin.shadow, // #E8C8BC
  'symbolIcon.fileForeground': foregrounds.primary,
  'symbolIcon.folderForeground': teals.classic, // #39C5BB
  'symbolIcon.functionForeground': hologram.cyan, // #4DD0E1 - Holographic action (distinct from methods)
  'symbolIcon.interfaceForeground': snowMiku.y2011.winterBlue, // #87CEEB - Winter clarity (distinct from keyword teal)
  'symbolIcon.keyForeground': character.hair.shine, // #5DE4DB
  'symbolIcon.keywordForeground': character.hair.shine, // #5DE4DB - Hair Shine (keywords)
  'symbolIcon.methodForeground': character.negi.stalk, // #9CCC65 - Negi green (distinct from property pink)
  'symbolIcon.moduleForeground': foregrounds.primary,
  'symbolIcon.namespaceForeground': snowMiku.y2011.winterBlue, // #87CEEB - Snow Miku (organizational)
  'symbolIcon.nullForeground': character.hair.highlight, // #B2EBE7 - Hair Highlight (distinct from boolean)
  'symbolIcon.numberForeground': character.negi.bright, // #69F0AE
  'symbolIcon.objectForeground': foregrounds.primary,
  'symbolIcon.operatorForeground': accents.orange, // #FFAB40 - Orange (distinct from function/keyword)
  'symbolIcon.packageForeground': append.light, // #A8EBE6 - Append Light (bundled code)
  'symbolIcon.propertyForeground': character.skin.blush, // #FFB8C8
  'symbolIcon.referenceForeground': teals.stage,
  'symbolIcon.snippetForeground': character.negi.stalk, // #9CCC65
  'symbolIcon.stringForeground': character.negi.stalk, // #9CCC65
  'symbolIcon.structForeground': pinks.blush, // #FFB8D4
  'symbolIcon.textForeground': foregrounds.primary,
  'symbolIcon.typeParameterForeground': boosted.purple, // #D4BBFF - Purple for generics (matches semantic token)
  'symbolIcon.unitForeground': pinks.sekai,
  'symbolIcon.variableForeground': foregrounds.primary,

  // ==========================================================================
  // INLINE CHAT - V6 AI Features
  // ==========================================================================
  'inlineChat.background': alpha(blacks.outfit, 'F8'), // Subtle holographic tint
  'inlineChat.border': alpha(digitalStars.y2021.glitch, '60'), // Neon cyan border
  'inlineChat.shadow': alpha(digitalStars.y2021.neonPurple, '40'), // Purple glow shadow
  'inlineChatInput.background': blacks.sleeve,
  'inlineChatInput.border': alpha(digitalStars.y2021.glitch, '40'), // Neon cyan
  'inlineChatInput.focusBorder': digitalStars.y2021.glitch, // Full neon on focus
  'inlineChatInput.placeholderForeground': greys.silver,
  'inlineChatDiff.inserted': alpha(digitalStars.y2021.glitch, '25'), // Neon insert
  'inlineChatDiff.removed': alpha(artStyles.lam.shockPink, '20'), // Shock pink remove

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
  'editorSuggestWidget.background': alpha(blacks.sleeve, 'F8'), // Subtle hologram tint
  'editorSuggestWidget.border': alpha(artStyles.ixima.techCyan, 'CC'), // Tech cyan border
  'editorSuggestWidget.foreground': foregrounds.primary,
  'editorSuggestWidget.highlightForeground': character.skin.highlight, // #FFF5F0 - Skin highlight (brightest, Lc ~101)
  'editorSuggestWidget.selectedBackground': alpha(digitalStars.y2021.neonPurple, '30'), // Purple selection
  'editorSuggestWidget.selectedForeground': stage.spotlight,
  'editorSuggestWidget.selectedIconForeground': digitalStars.y2021.glitch, // Neon icon
  'editorSuggestWidget.focusHighlightForeground': artStyles.mikaPikazo.triadicCyan, // Pop cyan focus

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
  'editorActionList.focusForeground': stage.spotlight,

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
  'scm.historyItemDeletionsForeground': boosted.coralGlow, // #FFBAB3 (Lc ~65) - boosted from semantic.error
  'scm.historyItemStatisticsBorder': alpha(teals.classic, '30'),
  'scm.historyItemSelectedStatisticsBorder': alpha(teals.classic, '60'),
  'scmGraph.historyItemGroupLocal': teals.classic,
  'scmGraph.historyItemGroupRemote': pinks.sekai,
  'scmGraph.historyItemGroupBase': greys.slate,
  'scmGraph.historyItemGroupHoverLabelForeground': stage.spotlight,
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
  'chat.slashCommandBackground': alpha(digitalStars.y2021.glitch, '20'), // Neon slash commands
  'chat.slashCommandForeground': digitalStars.y2021.glitch, // Pure neon cyan
  'chat.avatarBackground': alpha(digitalStars.y2021.neonPurple, '30'), // Purple AI avatar
  'chat.avatarForeground': digitalStars.y2021.glitch, // Neon cyan avatar

  // ==========================================================================
  // INTERACTIVE SESSION - AI Conversation Styling
  // ==========================================================================
  'interactive.activeCodeBorder': alpha(versions.v6ai, '60'),
  'interactive.inactiveCodeBorder': alpha(teals.classic, '30'),

  // ==========================================================================
  // SIMPLE FIND WIDGET
  // ==========================================================================
  'simpleFindWidget.selectorShadow': alpha(blacks.void, '80'),

  // ==========================================================================
  // TERMINAL SYMBOL ICONS - Git/CLI Visual Language (Racing Speed + Miku Character)
  // Git operations styled with Racing Miku speed and character design elements
  // ==========================================================================
  'terminalSymbolIcon.aliasForeground': append.light, // #A8EBE6 - Aliases are shortcuts, light touch
  'terminalSymbolIcon.branchForeground': character.hair.shine, // #5DE4DB - Twin-tails branching out
  'terminalSymbolIcon.commitForeground': hologram.cyan, // #4DD0E1 - Digital records
  'terminalSymbolIcon.flagForeground': accents.amber, // #FFD740 - Flags are highlighted decisions
  'terminalSymbolIcon.optionForeground': foregrounds.primary, // Standard options
  'terminalSymbolIcon.optionValueForeground': character.negi.stalk, // #9CCC65 - Values as strings
  'terminalSymbolIcon.methodForeground': character.skin.blush, // #FFB8C8 - Methods like code
  'terminalSymbolIcon.argumentForeground': append.light, // #A8EBE6 - Arguments as parameters
  'terminalSymbolIcon.inlineSuggestionForeground': versions.v6ai, // #41D9CF - V6 AI suggestions
  'terminalSymbolIcon.fileForeground': foregrounds.primary, // Standard files
  'terminalSymbolIcon.folderForeground': teals.classic, // #39C5BB - Miku identity folders
  'terminalSymbolIcon.pullRequestDoneForeground': semantic.success, // Completed PRs
  'terminalSymbolIcon.pullRequestForeground': pinks.soft, // #FF80AB - Active collaboration
  'terminalSymbolIcon.remoteForeground': snowMiku.y2011.winterBlue, // #87CEEB - Distant/remote
  'terminalSymbolIcon.stashForeground': greys.slate, // #455A64 - Hidden storage
  'terminalSymbolIcon.symbolText': foregrounds.primary,
  'terminalSymbolIcon.symbolicLinkFileForeground': hologram.purple, // #B388FF - Links as references
  'terminalSymbolIcon.symbolicLinkFolderForeground': boosted.purple, // #D4BBFF - Link folders
  'terminalSymbolIcon.tagForeground': accents.gold, // #FFCA28 - Tags celebrate milestones

  // ==========================================================================
  // INLINE EDIT / AI FEATURES - Miku V6 AI Voice (Newest Miku for AI Features)
  // Modern AI-assisted editing styled with V6 AI palette
  // ==========================================================================
  'inlineEdit.gutterIndicator.primaryBorder': versions.v6ai, // #41D9CF - Primary AI indicator
  'inlineEdit.gutterIndicator.primaryForeground': versions.v6ai,
  'inlineEdit.gutterIndicator.primaryBackground': alpha(versions.v6ai, '20'),
  'inlineEdit.gutterIndicator.secondaryBorder': alpha(teals.classic, '60'),
  'inlineEdit.gutterIndicator.secondaryForeground': character.hair.shine, // #5DE4DB - Brighter for Lc 60+
  'inlineEdit.gutterIndicator.secondaryBackground': alpha(teals.classic, '15'),
  'inlineEdit.gutterIndicator.successfulBorder': character.negi.bright, // #69F0AE - Success
  'inlineEdit.gutterIndicator.successfulForeground': character.negi.bright,
  'inlineEdit.gutterIndicator.successfulBackground': alpha(character.negi.bright, '20'),
  'inlineEdit.gutterIndicator.background': alpha(versions.v6ai, '10'),
  'inlineEdit.originalBackground': alpha(greys.slate, '10'), // Fading past
  'inlineEdit.modifiedBackground': alpha(snowMiku.y2011.winterBlue, '15'), // Winter clarity of change
  'inlineEdit.originalChangedLineBackground': alpha(greys.slate, '15'),
  'inlineEdit.originalChangedTextBackground': alpha(greys.slate, '25'),
  'inlineEdit.modifiedChangedLineBackground': alpha(versions.v6ai, '15'),
  'inlineEdit.modifiedChangedTextBackground': alpha(versions.v6ai, '25'),
  'inlineEdit.originalBorder': alpha(greys.slate, '40'),
  'inlineEdit.modifiedBorder': alpha(versions.v6ai, '50'),
  'inlineEdit.tabWillAcceptModifiedBorder': character.negi.bright, // Success state
  'inlineEdit.tabWillAcceptOriginalBorder': alpha(greys.slate, '60'),

  // ==========================================================================
  // TEST COVERAGE - Racing Miku Speed Success (Covered = Green Light)
  // Test results styled with Racing Miku performance colors
  // ==========================================================================
  'testing.iconErrored.retired': alpha(semantic.error, '60'),
  'testing.iconFailed.retired': alpha(semantic.error, '60'),
  'testing.iconPassed.retired': alpha(semantic.success, '60'),
  'testing.iconQueued.retired': alpha(semantic.warning, '60'),
  'testing.iconUnset.retired': alpha(greys.slate, '60'),
  'testing.iconSkipped.retired': alpha(greys.slate, '60'),
  'testing.message.error.badgeBackground': alpha(semantic.error, '25'),
  'testing.message.error.badgeBorder': semantic.error,
  'testing.message.error.badgeForeground': boosted.coralGlow, // #FFBAB3
  'testing.messagePeekBorder': teals.classic,
  'testing.messagePeekHeaderBackground': blacks.outfit,
  'testing.coveredBackground': alpha(character.negi.bright, '12'), // #69F0AE - Covered green
  'testing.coveredBorder': alpha(character.negi.bright, '40'),
  'testing.coveredGutterBackground': alpha(character.negi.bright, '30'),
  'testing.uncoveredBranchBackground': alpha(accents.coral, '20'), // Uncovered warning
  'testing.uncoveredBackground': alpha(accents.coral, '12'), // #FF5370
  'testing.uncoveredBorder': alpha(accents.coral, '40'),
  'testing.uncoveredGutterBackground': alpha(accents.coral, '30'),
  'testing.coverCountBadgeBackground': alpha(teals.classic, '25'),
  'testing.coverCountBadgeForeground': character.hair.shine, // #5DE4DB

  // ==========================================================================
  // SCM GRAPH EXTENDED - Project SEKAI Empty SEKAI (Heterochromia Local/Remote)
  // Version control graph using heterochromia principle
  // ==========================================================================
  'scmGraph.historyItemHoverAdditionsForeground': semantic.success,
  'scmGraph.historyItemHoverDeletionsForeground': boosted.coralGlow, // #FFBAB3
  'scmGraph.historyItemRefColor': character.hair.shine, // #5DE4DB - Local refs
  'scmGraph.historyItemRemoteRefColor': pinks.soft, // #FF80AB - Remote refs (heterochromia)
  'scmGraph.historyItemBaseRefColor': teals.classic, // #39C5BB - Base/origin

  // ==========================================================================
  // CHAT / COPILOT UI EXTENDED - V6 AI Futuristic Interaction
  // AI chat interface using newest Miku voice colors
  // ==========================================================================
  'chat.editedFileForeground': snowMiku.y2011.winterBlue, // #87CEEB - Changed files
  'chat.linesAddedForeground': character.negi.bright, // #69F0AE - Additions
  'chat.linesRemovedForeground': boosted.coralGlow, // #FFBAB3 - Deletions
  'chat.requestCodeBorder': alpha(versions.v6ai, '40'),
  'chat.requestBubbleBackground': alpha(teals.classic, '15'),
  'chat.requestBubbleHoverBackground': alpha(teals.classic, '25'),
  'chat.checkpointSeparator': alpha(teals.classic, '30'),
  'chatManagement.sashBorder': alpha(versions.v6ai, '40'),

  // ==========================================================================
  // TAB CONTROLS EXTENDED - Active Channel Selection (Headphones Display)
  // Tab styling with character headphone metaphor
  // ==========================================================================
  'tab.lastPinnedBorder': alpha(pinks.sekai, '60'), // Pinned tabs special
  'tab.activeModifiedBorder': pinks.hot, // #FF4081 - Unsaved passion
  'tab.inactiveModifiedBorder': alpha(pinks.hot, '60'),
  'tab.unfocusedActiveModifiedBorder': alpha(pinks.hot, '80'),
  'tab.unfocusedInactiveModifiedBorder': alpha(pinks.hot, '40'),
  'tab.dragAndDropBorder': alpha(teals.classic, '60'),
  'tab.selectedBackground': blacks.base, // Selected tab state
  'tab.selectedForeground': character.hair.shine, // #5DE4DB
  'tab.selectedBorderTop': teals.classic, // #39C5BB identity

  // ==========================================================================
  // FORM CONTROLS - Crystal Snow Elegance (Radio/Checkbox States)
  // Form elements with Snow Miku crystal aesthetics
  // ==========================================================================
  'checkbox.selectBackground': alpha(teals.classic, '30'),
  'checkbox.selectBorder': teals.classic,
  'checkbox.disabled.background': alpha(greys.slate, '20'),
  'checkbox.disabled.foreground': greys.silver,
  'radio.activeForeground': foregrounds.bright, // #ECEFF1 - Bright for visibility on teal
  'radio.activeBackground': teals.classic, // #39C5BB - Active identity
  'radio.activeBorder': teals.neon, // #5DE4DB
  'radio.inactiveForeground': greys.silver,
  'radio.inactiveBackground': blacks.sleeve,
  'radio.inactiveBorder': alpha(teals.classic, '40'),
  'radio.inactiveHoverBackground': alpha(teals.classic, '15'),

  // ==========================================================================
  // EDITOR OVERVIEW RULER EXTENDED - Minimap Git States
  // Git change indicators in overview ruler
  // ==========================================================================
  'editorOverviewRuler.modifiedForeground': alpha(semantic.warning, '90'),
  'editorOverviewRuler.addedForeground': alpha(semantic.success, '90'),
  'editorOverviewRuler.deletedForeground': alpha(semantic.error, '90'),
  'editorOverviewRuler.commentForeground': alpha(foregrounds.comment, '60'),
  'editorOverviewRuler.commentUnresolvedForeground': alpha(semantic.warning, '60'),
  'editorOverviewRuler.inlineChatInserted': alpha(versions.v6ai, '70'),
  'editorOverviewRuler.inlineChatRemoved': alpha(pinks.sekai, '70'),

  // ==========================================================================
  // EDITOR GUTTER EXTENDED - Secondary Git States
  // Extended gutter decoration colors
  // ==========================================================================
  'editorGutter.modifiedSecondaryBackground': alpha(semantic.warning, '50'),
  'editorGutter.addedSecondaryBackground': alpha(semantic.success, '50'),
  'editorGutter.deletedSecondaryBackground': alpha(semantic.error, '50'),
  'editorGutter.commentRangeForeground': alpha(foregrounds.comment, '40'),
  'editorGutter.commentGlyphForeground': hologram.cyan, // #4DD0E1
  'editorGutter.commentUnresolvedGlyphForeground': semantic.warning,

  // ==========================================================================
  // MERGE EDITOR EXTENDED - Conflict Resolution
  // Merge conflict styling with clear distinction
  // ==========================================================================
  'merge.currentHeaderBackground': alpha(hologram.cyan, '40'), // #4DD0E1 - Holographic cyan for current
  'merge.currentContentBackground': alpha(hologram.cyan, '15'),
  'merge.incomingHeaderBackground': alpha(pinks.sekai, '40'), // Keep pink for heterochromia
  'merge.incomingContentBackground': alpha(pinks.sekai, '15'),
  'merge.border': alpha(character.tie.shadow, '70'), // Tie shadow - subtle merge frame
  'merge.commonContentBackground': alpha(greys.slate, '15'),
  'merge.commonHeaderBackground': alpha(greys.slate, '30'),
  'mergeEditor.changeBase.background': alpha(greys.slate, '15'),
  'mergeEditor.changeBase.word.background': alpha(greys.slate, '30'),
  'mergeEditor.conflict.input1.background': alpha(hologram.cyan, '15'), // #4DD0E1 - Holographic cyan for input1
  'mergeEditor.conflict.input2.background': alpha(pinks.sekai, '15'), // Keep pink for heterochromia

  // ==========================================================================
  // PANEL EXTENDED - Output View Styling
  // Panel output and sticky scroll
  // ==========================================================================
  'panelTitleBadge.background': teals.classic, // #39C5BB - Miku identity badge
  'panelTitleBadge.foreground': stage.spotlight, // White works against both teal badge and dark panel
  'panelStickyScroll.background': blacks.void,
  'panelStickyScroll.border': alpha(teals.classic, '20'),
  'panelStickyScroll.shadow': alpha(stage.darkness, '50'), // Concert stage darkness
  'outputView.background': blacks.void,
  'outputViewStickyScroll.background': blacks.void,

  // ==========================================================================
  // ACTIVITY BAR EXTENDED - Warning/Error Badges
  // Activity bar badge states
  // ==========================================================================
  'activityWarningBadge.foreground': blacks.void,
  'activityWarningBadge.background': semantic.warning,
  'activityErrorBadge.foreground': stage.spotlight,
  'activityErrorBadge.background': semantic.error,

  // ==========================================================================
  // COMMAND CENTER EXTENDED - Debug Mode
  // Command center debugging state
  // ==========================================================================
  'commandCenter.debuggingBackground': alpha(pinks.sekai, '25'),

  // ==========================================================================
  // LIST EXTENDED - Drop/Filter States
  // List interaction states
  // ==========================================================================
  'list.dropBackground': alpha(teals.classic, '20'),
  'list.dropBetweenBackground': alpha(teals.classic, '40'),
  'list.focusAndSelectionOutline': alpha(pinks.sekai, '60'),
  'list.inactiveSelectionIconForeground': foregrounds.primary, // Brighter for Lc 60+
  'list.inactiveFocusBackground': alpha(teals.classic, '15'),
  'list.inactiveFocusOutline': alpha(teals.classic, '30'),
  'list.filterMatchBackground': alpha(pinks.sekai, '25'),
  'list.filterMatchBorder': alpha(pinks.sekai, '50'),
  'listFilterWidget.shadow': alpha(stage.darkness, '50'), // Concert stage darkness

  // ==========================================================================
  // TREE EXTENDED - Inactive Guides and Rows
  // Tree view additional styling
  // ==========================================================================
  'tree.inactiveIndentGuidesStroke': alpha(teals.classic, '15'),
  'tree.tableOddRowsBackground': alpha(teals.classic, '05'),

  // ==========================================================================
  // BADGE - Standard Badge Styling
  // Generic badge colors
  // ==========================================================================
  'badge.foreground': blacks.void, // #0D1114 - Dark text on light badge
  'badge.background': character.hair.tip, // #7FEDE5 - Bright teal for high contrast with dark text

  // ==========================================================================
  // PROGRESS BAR - Loading State
  // Progress indicator
  // ==========================================================================
  'progressBar.background': artStyles.ixima.techCyan, // #00E5FF - Neon tech progress

  // ==========================================================================
  // EDITOR EXTENDED - Additional States
  // Extended editor states
  // ==========================================================================
  'editor.placeholder.foreground': alpha(foregrounds.comment, '60'),
  'editor.inactiveSelectionBackground': alpha(teals.classic, '20'),
  'editor.wordHighlightTextBackground': alpha(cyans.ice, '15'),
  'editor.wordHighlightTextBorder': alpha(cyans.ice, '35'),
  'editor.findMatchForeground': pinks.blush, // #FFB8D4 - Active match (pink tint)
  'editor.findMatchHighlightForeground': stage.spotlight, // Other matches (white) - distinct from pink
  'editor.findRangeHighlightBorder': alpha(teals.classic, '40'),
  'search.resultsInfoForeground': foregrounds.primary, // Brighter for Lc 60+

  // ==========================================================================
  // EDITOR STICKY SCROLL EXTENDED
  // Sticky scroll gutter and shadow
  // ==========================================================================
  'editorStickyScroll.shadow': alpha(stage.darkness, '30'), // Concert stage darkness (light)
  'editorStickyScrollGutter.background': alpha(blacks.outfit, 'F0'),

  // ==========================================================================
  // COMMENTS VIEW - Resolved/Unresolved Icons
  // Comment thread state icons
  // ==========================================================================
  'commentsView.resolvedIcon': semantic.success,
  'commentsView.unresolvedIcon': semantic.warning,

  // ==========================================================================
  // EDITOR COMMENTS EXTENDED - Range Borders
  // Comment range styling
  // ==========================================================================
  'editorCommentsWidget.rangeBorder': alpha(teals.classic, '20'),
  'editorCommentsWidget.rangeActiveBorder': alpha(teals.classic, '50'),

  // ==========================================================================
  // TERMINAL EXTENDED - Hover and Sticky Scroll
  // Terminal additional states
  // ==========================================================================
  'terminal.hoverHighlightBackground': alpha(teals.classic, '20'),
  'terminal.initialHintForeground': alpha(teals.neon, '80'),
  'terminal.selectionForeground': stage.spotlight,
  'terminal.dropBackground': alpha(teals.classic, '20'),
  'terminalCommandGuide.foreground': alpha(teals.classic, '40'),
  'terminalOverviewRuler.border': alpha(teals.classic, '30'),
  'terminalStickyScroll.background': blacks.void,
  'terminalStickyScroll.border': alpha(teals.classic, '20'),
  'terminalStickyScrollHover.background': alpha(versionMapping.hover, '15'),

  // ==========================================================================
  // SIDEBAR EXTENDED - Title and Activity Bar Top
  // Sidebar additional styling
  // ==========================================================================
  'sideBarTitle.background': character.headphones.body, // #1A1F24
  'sideBarTitle.border': alpha(teals.classic, '15'),
  'sideBarActivityBarTop.border': alpha(teals.classic, '15'),

  // ==========================================================================
  // PEEK VIEW EXTENDED - Sticky Scroll
  // Peek view sticky scroll styling
  // ==========================================================================
  'peekViewEditorStickyScroll.background': blacks.outfit,
  'peekViewEditorStickyScrollGutter.background': blacks.sleeve,

  // ==========================================================================
  // DEBUG EXTENDED - Additional States
  // Debug view additional styling
  // ==========================================================================
  'debugExceptionWidget.background': alpha(semantic.error, '20'),
  'debugExceptionWidget.border': semantic.error,
  'editor.inlineValuesForeground': versions.v6ai, // #41D9CF - Full opacity for Lc 60+
  'editor.inlineValuesBackground': alpha(versions.v6ai, '15'),
  'debugTokenExpression.type': pinks.pale, // #FCE4EC - Types

  // ==========================================================================
  // MINIMAP EXTENDED - Chat Edit Highlight
  // Minimap AI edit indicator
  // ==========================================================================
  'minimap.chatEditHighlight': alpha(versions.v6ai, '60'),
  'editorMinimap.inlineChatInserted': alpha(versions.v6ai, '50'),

  // ==========================================================================
  // DIFF EXTENDED - Move Borders
  // Diff editor move indicators
  // ==========================================================================
  'diffEditor.unchangedRegionShadow': alpha(stage.darkness, '30'), // Concert stage darkness (light)
  'diffEditor.move.border': alpha(hologram.purple, '60'),
  'diffEditor.moveActive.border': hologram.purple, // #B388FF

  // ==========================================================================
  // SIDE BY SIDE EDITOR - Borders
  // Split editor borders
  // ==========================================================================
  'sideBySideEditor.horizontalBorder': alpha(teals.classic, '25'),
  'sideBySideEditor.verticalBorder': alpha(teals.classic, '25'),

  // ==========================================================================
  // EDITOR PANE - Background
  // Editor pane styling
  // ==========================================================================
  'editorPane.background': blacks.outfit,

  // ==========================================================================
  // EDITOR GROUP EXTENDED - Drop Prompt
  // Editor group drop states
  // ==========================================================================
  'editorGroup.dropIntoPromptForeground': foregrounds.primary,
  'editorGroup.dropIntoPromptBackground': alpha(blacks.outfit, 'F0'),
  'editorGroup.dropIntoPromptBorder': alpha(teals.classic, '50'),
  'editorGroup.emptyBackground': blacks.base,
  'editorGroup.focusedEmptyBorder': alpha(teals.classic, '40'),

  // ==========================================================================
  // GIT BLAME - Editor Decoration
  // Git blame inline styling
  // ==========================================================================
  'git.blame.editorDecorationForeground': alpha(foregrounds.comment, '60'),

  // ==========================================================================
  // WALKTHROUGH - Step Title (Skin Base - Warm Welcome)
  // Walkthrough styling with inviting warmth
  // ==========================================================================
  'walkthrough.stepTitle.foreground': character.skin.base, // #FFE4D6 - Warm skin tone (Lc ~92)

  // ==========================================================================
  // SETTINGS EXTENDED - Header Hover
  // Settings hover state
  // ==========================================================================
  'settings.settingsHeaderHoverForeground': character.hair.tip, // #7FEDE5

  // ==========================================================================
  // PROFILES EXTENDED - Sash Border
  // Profile management styling
  // ==========================================================================
  'profiles.sashBorder': alpha(teals.classic, '30'),

  // ==========================================================================
  // SIMPLE FIND EXTENDED - Sash Border
  // Simple find widget styling
  // ==========================================================================
  'simpleFindWidget.sashBorder': alpha(teals.classic, '40'),
} as const;

export type WorkbenchColors = typeof workbenchColors;
