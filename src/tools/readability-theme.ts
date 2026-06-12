/**
 * Theme loading and color extraction for the readability analysis tool.
 */

import * as fs from 'fs';
import * as path from 'path';

import { LABELS } from './readability-constants';
import {
  isValidHex,
  hasAlphaChannel,
  stripAlpha,
  extractAlpha,
  blendAlpha,
} from './readability-color';
import type {
  ThemeJson,
  ColorValue,
  ExtractedColors,
} from './readability-types';

// =============================================================================
// THEME LOADER
// =============================================================================

export function stripJsonComments(jsonc: string): string {
  // Remove single-line comments (// ...) and multi-line comments (/* ... */)
  // Be careful not to remove // inside strings
  let result = '';
  let inString = false;
  let inSingleComment = false;
  let inMultiComment = false;
  let i = 0;

  while (i < jsonc.length) {
    const char = jsonc[i];
    const next = jsonc[i + 1];

    if (inSingleComment) {
      if (char === '\n') {
        inSingleComment = false;
        result += char;
      }
      i++;
      continue;
    }

    if (inMultiComment) {
      if (char === '*' && next === '/') {
        inMultiComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    if (inString) {
      result += char;
      if (char === '\\' && i + 1 < jsonc.length) {
        result += jsonc[++i];
      } else if (char === '"') {
        inString = false;
      }
      i++;
      continue;
    }

    // Not in string or comment
    if (char === '"') {
      inString = true;
      result += char;
    } else if (char === '/' && next === '/') {
      inSingleComment = true;
      i++;
    } else if (char === '/' && next === '*') {
      inMultiComment = true;
      i++;
    } else {
      result += char;
    }
    i++;
  }

  // Remove trailing commas before } or ]
  return result.replace(/,(\s*[}\]])/g, '$1');
}

export function loadTheme(themePath: string): ThemeJson {
  if (!fs.existsSync(themePath)) {
    console.error(LABELS.errThemeNotFound(themePath));
    process.exit(1);
  }

  let theme: ThemeJson;
  try {
    const content = fs.readFileSync(themePath, 'utf-8');
    theme = JSON.parse(stripJsonComments(content));
  } catch (e) {
    console.error(LABELS.errInvalidTheme(themePath, (e as Error).message));
    process.exit(1);
  }

  if (!theme.colors || typeof theme.colors !== 'object') {
    console.error(LABELS.errMissingColors);
    process.exit(1);
  }
  if (!theme.colors['editor.background']) {
    console.error(LABELS.errMissingEditorBg);
    process.exit(1);
  }
  if (!theme.colors['editor.foreground']) {
    console.error(LABELS.errMissingEditorFg);
    process.exit(1);
  }

  // Validate required colors are valid hex
  const requiredColors = ['editor.background', 'editor.foreground'];
  for (const key of requiredColors) {
    const color = theme.colors[key];
    if (!isValidHex(color)) {
      console.error(LABELS.errInvalidColor(color));
      process.exit(1);
    }
  }

  return theme;
}

export function getThemeName(theme: ThemeJson, themePath: string): string {
  if (theme.name) return theme.name;
  let name = path.basename(themePath);
  // Remove common extensions
  name = name.replace(/\.(jsonc?|json5)$/i, '');
  // Remove common suffixes
  name = name.replace(/-color-theme$/i, '');
  return name;
}

/**
 * Find color for a token using exact scope matching.
 *
 * Why exact matching only:
 * - VS Code's full TextMate matching requires scope stacks (e.g., "source.js meta.function variable")
 * - We only have single scope strings, can't verify parent context
 * - Prefix matching could report wrong colors for descendant selectors
 * - Better to report "unknown" than wrong contrast values
 *
 * Priority:
 * 1. Semantic token (direct key lookup)
 * 2. tokenColors (exact scope match, last definition wins)
 */
export function findTokenColor(theme: ThemeJson, textmateScope: string, semanticKey?: string): ColorValue {
  // 1. Semantic tokens take priority (direct lookup)
  if (semanticKey && theme.semanticHighlighting !== false && theme.semanticTokenColors) {
    const value = theme.semanticTokenColors[semanticKey];
    if (value) {
      const color = typeof value === 'string' ? value : value.foreground;
      if (color) return {
        color,
        fallback: false,
        source: { type: 'semantic', key: semanticKey, semanticKey },
      };
    }
  }

  // 2. tokenColors — specificity-aware scope matching
  // Exact match (scope === query) beats parent match (query starts with scope).
  let exactFg: string | null = null;
  let parentFg: string | null = null;

  for (const token of theme.tokenColors ?? []) {
    if (!token.settings?.foreground) continue;

    const scopes = Array.isArray(token.scope)
      ? token.scope
      : token.scope?.split(',').map(s => s.trim()) ?? [];

    const exact = scopes.some(s => textmateScope === s);
    const parent = !exact && scopes.some(s => textmateScope.startsWith(s + '.'));

    if (exact) { exactFg = token.settings.foreground; }
    else if (parent) { parentFg = token.settings.foreground; }
  }

  const fg = exactFg ?? parentFg;

  if (fg) {
    return {
      color: fg,
      fallback: false,
      source: { type: 'textmate', key: textmateScope, semanticKey },
    };
  }

  return {
    color: '',
    fallback: true,
    source: { type: 'textmate', key: textmateScope, semanticKey },
  };
}

export function getColor(theme: ThemeJson, key: string, fallback: string): ColorValue {
  const color = theme.colors?.[key];
  return {
    color: color || fallback,
    fallback: !color,
    source: { type: 'workbench', key },
  };
}

export function getColorRaw(theme: ThemeJson, key: string, fallback: string): string {
  return theme.colors?.[key] || fallback;
}

/**
 * Resolve transparent background: blend with underlying surface if alpha present.
 */
export function resolveTransparentBg(rawBg: string, underlyingBg: string): string {
  if (!hasAlphaChannel(rawBg)) return rawBg;
  const alpha = extractAlpha(rawBg);
  if (alpha >= 0.99) return stripAlpha(rawBg);
  return blendAlpha(stripAlpha(rawBg), underlyingBg, alpha);
}

function resolveColor(cv: ColorValue, fallbackColor: string): ColorValue {
  if (cv.fallback || !cv.color) {
    return { color: fallbackColor, fallback: true, source: cv.source };
  }
  return cv;
}

// =============================================================================
// COLOR EXTRACTION
// =============================================================================

export function extractColors(theme: ThemeJson): ExtractedColors {
  const fg = theme.colors!['editor.foreground'];
  const editorBg = theme.colors!['editor.background'];
  const fgValue: ColorValue = { color: fg, fallback: false };

  // Helper: get color and resolve transparency against underlying surface
  const resolveBg = (key: string, underlying: string): string => {
    const raw = getColorRaw(theme, key, underlying);
    return resolveTransparentBg(raw, underlying);
  };

  // Resolve all backgrounds - transparent colors blended with underlying surface
  // Most surfaces use editorBg as underlying; sidebar-related use sidebarBg
  const sidebarBg = resolveBg('sideBar.background', editorBg);
  const panelBg = resolveBg('panel.background', editorBg);
  // Terminal overlays render over the terminal surface, not the panel
  const terminalBg = resolveBg('terminal.background', panelBg);

  return {
    bg: {
      editor: editorBg,
      sidebar: sidebarBg,
      statusBar: resolveBg('statusBar.background', editorBg),
      tabBar: resolveBg('editorGroupHeader.tabsBackground', editorBg),
      terminal: terminalBg,
      panel: panelBg,
      activityBar: resolveBg('activityBar.background', editorBg),
      input: resolveBg('input.background', editorBg),
      listSelection: resolveBg('list.activeSelectionBackground', sidebarBg),
      listInactiveSelection: resolveBg('list.inactiveSelectionBackground', sidebarBg),
      listHover: resolveBg('list.hoverBackground', sidebarBg),
      listFocus: resolveBg('list.focusBackground', sidebarBg),
      inlayHint: resolveBg('editorInlayHint.background', editorBg),
      breadcrumb: resolveBg('breadcrumb.background', editorBg),
      stickyScroll: resolveBg('editorStickyScroll.background', editorBg),
      editorWidget: resolveBg('editorWidget.background', editorBg),
      suggest: resolveBg('editorSuggestWidget.background', editorBg),
      hover: resolveBg('editorHoverWidget.background', editorBg),
      quickInput: resolveBg('quickInput.background', editorBg),
      quickInputListFocus: resolveBg('quickInputList.focusBackground', editorBg),
      menu: resolveBg('menu.background', editorBg),
      notification: resolveBg('notifications.background', editorBg),
      peekView: resolveBg('peekViewResult.background', editorBg),
      peekViewSelection: resolveBg('peekViewResult.selectionBackground', editorBg),
      titleBar: resolveBg('titleBar.activeBackground', editorBg),
      titleBarInactive: resolveBg('titleBar.inactiveBackground', editorBg),
      commandCenter: resolveBg('commandCenter.background', editorBg),
      suggestSelected: resolveBg('editorSuggestWidget.selectedBackground', editorBg),
      inlineChat: resolveBg('inlineChat.background', editorBg),
      // Additional
      button: resolveBg('button.background', editorBg),
      buttonSecondary: resolveBg('button.secondaryBackground', editorBg),
      badge: resolveBg('badge.background', editorBg),
      activityBarBadge: resolveBg('activityBarBadge.background', editorBg),
      dropdown: resolveBg('dropdown.background', editorBg),
      debugToolbar: resolveBg('debugToolBar.background', editorBg),
      exceptionLabel: resolveBg('debugView.exceptionLabelBackground', editorBg),
      stateLabel: resolveBg('debugView.stateLabelBackground', editorBg),
      panelTitleBadge: resolveBg('panelTitleBadge.background', editorBg),
      profileBadge: resolveBg('profileBadge.background', editorBg),
      radioActive: resolveBg('radio.activeBackground', editorBg),
      statusBarDebugging: resolveBg('statusBar.debuggingBackground', editorBg),
      banner: resolveBg('banner.background', editorBg),
      keybindingLabel: resolveBg('keybindingLabel.background', editorBg),
      checkbox: resolveBg('checkbox.background', editorBg),
      extensionButton: resolveBg('extensionButton.prominentBackground', editorBg),
      extensionBadgeRemote: resolveBg('extensionBadge.remoteBackground', editorBg),
      // Status bar items
      statusBarItemError: resolveBg('statusBarItem.errorBackground', editorBg),
      statusBarItemWarning: resolveBg('statusBarItem.warningBackground', editorBg),
      statusBarItemRemote: resolveBg('statusBarItem.remoteBackground', editorBg),
      statusBarItemProminent: resolveBg('statusBarItem.prominentBackground', editorBg),
      statusBarItemOffline: resolveBg('statusBarItem.offlineBackground', editorBg),
      // Activity bar badges
      activityWarningBadge: resolveBg('activityWarningBadge.background', editorBg),
      activityErrorBadge: resolveBg('activityErrorBadge.background', editorBg),
      // Selection & highlights (typically semi-transparent, blended with editor)
      selection: resolveBg('editor.selectionBackground', editorBg),
      selectionHighlight: resolveBg('editor.selectionHighlightBackground', editorBg),
      rangeHighlight: resolveBg('editor.rangeHighlightBackground', editorBg),
      symbolHighlight: resolveBg('editor.symbolHighlightBackground', editorBg),
      terminalSelection: resolveBg('terminal.selectionBackground', terminalBg),
      wordHighlight: resolveBg('editor.wordHighlightBackground', editorBg),
      wordHighlightStrong: resolveBg('editor.wordHighlightStrongBackground', editorBg),
      findMatch: resolveBg('editor.findMatchHighlightBackground', editorBg),
      findMatchActive: resolveBg('editor.findMatchBackground', editorBg),
      bracketMatch: resolveBg('editorBracketMatch.background', editorBg),
      // Terminal find
      terminalFindMatch: resolveBg('terminal.findMatchBackground', terminalBg),
      // Diff editor
      diffInserted: resolveBg('diffEditor.insertedTextBackground', editorBg),
      diffRemoved: resolveBg('diffEditor.removedTextBackground', editorBg),
      // Merge conflicts
      mergeCurrentContent: resolveBg('merge.currentContentBackground', editorBg),
      mergeIncomingContent: resolveBg('merge.incomingContentBackground', editorBg),
      mergeCommonContent: resolveBg('merge.commonContentBackground', editorBg),
      // Input validation
      inputValidationError: resolveBg('inputValidation.errorBackground', editorBg),
      inputValidationWarning: resolveBg('inputValidation.warningBackground', editorBg),
      inputValidationInfo: resolveBg('inputValidation.infoBackground', editorBg),
      // Peek view editor
      peekViewEditor: resolveBg('peekViewEditor.background', editorBg),
      // Search editor
      searchEditorFindMatch: resolveBg('searchEditor.findMatchBackground', editorBg),
      // Debug context
      stackFrame: resolveBg('editor.stackFrameHighlightBackground', editorBg),
      focusedStackFrame: resolveBg('editor.focusedStackFrameHighlightBackground', editorBg),
      // Linked editing (HTML tag pairs)
      linkedEditing: resolveBg('editor.linkedEditingBackground', editorBg),
      // TIER 1: Current line highlight - where cursor is (constant focus)
      lineHighlight: resolveBg('editor.lineHighlightBackground', editorBg),
      // Suggest widget focus (for selected autocomplete item)
      // Git gutter backgrounds (for change indicators)
      // CODE REVIEW: Diff editor contexts
      diffUnchangedRegion: resolveBg('diffEditor.unchangedRegionBackground', editorBg),
      diffUnchangedCode: resolveBg('diffEditor.unchangedCodeBackground', editorBg),
      multiDiffBackground: resolveBg('multiDiffEditor.background', editorBg),
      // CODE REVIEW: AI-suggested changes (Copilot inline diff)
      inlineChatDiffInserted: resolveBg('inlineChatDiff.inserted', editorBg),
      inlineChatDiffRemoved: resolveBg('inlineChatDiff.removed', editorBg),
      // NOTEBOOKS: Jupyter cell contexts (data science)
      notebookCell: resolveBg('notebook.cellEditorBackground', editorBg),
      notebookOutput: resolveBg('notebook.outputContainerBackgroundColor', editorBg),
      notebookSelected: resolveBg('notebook.selectedCellBackground', editorBg),
    },
    fg: fgValue,
    cursor: {
      editor: getColor(theme, 'editorCursor.foreground', fg),
      editorBlock: getColor(theme, 'editorCursor.background', fg), // text inside block cursor
      editorMultiPrimary: getColor(theme, 'editorMultiCursor.primary.foreground', fg),
      editorMultiSecondary: getColor(theme, 'editorMultiCursor.secondary.foreground', fg),
      terminal: getColor(theme, 'terminalCursor.foreground', fg),
      terminalBlock: getColor(theme, 'terminalCursor.background', fg), // text inside terminal block cursor
    },
    syntax: {
      // TextMate scope, semantic type
      // Core tokens (high frequency in code)
      variable: resolveColor(findTokenColor(theme, 'variable', 'variable'), fg),
      variableLanguage: resolveColor(findTokenColor(theme, 'variable.language'), fg), // this, self, super
      parameter: resolveColor(findTokenColor(theme, 'variable.parameter', 'parameter'), fg),
      property: resolveColor(findTokenColor(theme, 'variable.other.property', 'property'), fg),
      keyword: resolveColor(findTokenColor(theme, 'keyword', 'keyword'), fg),
      operator: resolveColor(findTokenColor(theme, 'keyword.operator', 'operator'), fg),
      storage: resolveColor(findTokenColor(theme, 'storage.type'), fg),
      function: resolveColor(findTokenColor(theme, 'entity.name.function', 'function'), fg),
      method: resolveColor(findTokenColor(theme, 'entity.name.function.method', 'method'), fg),
      class: resolveColor(findTokenColor(theme, 'entity.name.class', 'class'), fg),
      type: resolveColor(findTokenColor(theme, 'entity.name.type', 'type'), fg),
      interface: resolveColor(findTokenColor(theme, 'entity.name.type.interface', 'interface'), fg),
      namespace: resolveColor(findTokenColor(theme, 'entity.name.namespace', 'namespace'), fg),
      enum: resolveColor(findTokenColor(theme, 'entity.name.type.enum', 'enum'), fg),
      enumMember: resolveColor(findTokenColor(theme, 'variable.other.enummember', 'enumMember'), fg),
      typeParameter: resolveColor(findTokenColor(theme, 'entity.name.type.parameter', 'typeParameter'), fg),
      // Literals
      number: resolveColor(findTokenColor(theme, 'constant.numeric', 'number'), fg),
      string: resolveColor(findTokenColor(theme, 'string', 'string'), fg),
      stringTemplate: resolveColor(findTokenColor(theme, 'string.template'), fg),
      stringEscape: resolveColor(findTokenColor(theme, 'constant.character.escape'), fg), // \n, \t, etc.
      constant: resolveColor(findTokenColor(theme, 'constant.language'), fg),
      null: resolveColor(findTokenColor(theme, 'constant.language.null'), fg),
      regexp: resolveColor(findTokenColor(theme, 'string.regexp', 'regexp'), fg),
      colorValue: resolveColor(findTokenColor(theme, 'constant.other.color'), fg), // CSS #hex, rgb()
      // Markup/Web
      tag: resolveColor(findTokenColor(theme, 'entity.name.tag'), fg),
      attribute: resolveColor(findTokenColor(theme, 'entity.other.attribute-name'), fg),
      // CSS-specific
      cssSelector: resolveColor(findTokenColor(theme, 'entity.name.tag.css'), fg), // .class, #id, element
      cssPropertyName: resolveColor(findTokenColor(theme, 'support.type.property-name.css'), fg), // color, margin, etc.
      // Other
      decorator: resolveColor(findTokenColor(theme, 'entity.name.function.decorator', 'decorator'), fg),
      link: resolveColor(findTokenColor(theme, 'markup.underline.link'), fg),
      punctuation: resolveColor(findTokenColor(theme, 'punctuation.separator'), fg),
      macro: resolveColor(findTokenColor(theme, 'entity.name.function.preprocessor', 'macro'), fg),
      struct: resolveColor(findTokenColor(theme, 'entity.name.type.struct', 'struct'), fg),
      // Entity patterns
      section: resolveColor(findTokenColor(theme, 'entity.name.section'), fg), // Document sections (Markdown, LaTeX)
      inheritedClass: resolveColor(findTokenColor(theme, 'entity.other.inherited-class'), fg), // extends/implements
      // Semantic tokens
      label: resolveColor(findTokenColor(theme, 'entity.name.label', 'label'), fg), // goto labels, case labels
      event: resolveColor(findTokenColor(theme, 'variable.other.event', 'event'), fg), // event handlers (C#, TS)
      // Invalid/Deprecated
      invalid: resolveColor(findTokenColor(theme, 'invalid.illegal'), fg),
      deprecated: resolveColor(findTokenColor(theme, 'invalid.deprecated'), fg),
      // Support (framework/library provided)
      supportFunction: resolveColor(findTokenColor(theme, 'support.function'), fg),
      supportClass: resolveColor(findTokenColor(theme, 'support.class'), fg), // Array, Map, Set
      supportType: resolveColor(findTokenColor(theme, 'support.type'), fg), // string, number (built-in)
      supportConstant: resolveColor(findTokenColor(theme, 'support.constant'), fg), // Math.PI, etc.
      supportVariable: resolveColor(findTokenColor(theme, 'support.variable'), fg), // __dirname, process
      // Storage modifiers
      storageModifier: resolveColor(findTokenColor(theme, 'storage.modifier'), fg),
      // Markup (Markdown, etc.)
      markupHeading: resolveColor(findTokenColor(theme, 'markup.heading'), fg),
      markupBold: resolveColor(findTokenColor(theme, 'markup.bold'), fg),
      markupItalic: resolveColor(findTokenColor(theme, 'markup.italic'), fg),
      markupCode: resolveColor(findTokenColor(theme, 'markup.inline.raw'), fg),
      markupQuote: resolveColor(findTokenColor(theme, 'markup.quote'), fg),
      markupList: resolveColor(findTokenColor(theme, 'markup.list'), fg), // - item, 1. item
      // Diff markup (in markdown/docs)
      markupInserted: resolveColor(findTokenColor(theme, 'markup.inserted'), fg),
      markupDeleted: resolveColor(findTokenColor(theme, 'markup.deleted'), fg),
      markupChanged: resolveColor(findTokenColor(theme, 'markup.changed'), fg),
      // Comments
      comment: resolveColor(findTokenColor(theme, 'comment', 'comment'), fg),
      docComment: (() => {
        const doc = findTokenColor(theme, 'comment.block.documentation');
        return resolveColor(doc.fallback ? findTokenColor(theme, 'comment', 'comment') : doc, fg);
      })(),
      // Diagnostics
      warning: getColor(theme, 'editorWarning.foreground', fg),
      info: getColor(theme, 'editorInfo.foreground', fg),
      error: getColor(theme, 'editorError.foreground', fg),
    },
    ui: {
      // Global
      foreground: getColor(theme, 'foreground', fg),
      iconForeground: getColor(theme, 'icon.foreground', fg),
      // Tabs
      tabActive: getColor(theme, 'tab.activeForeground', fg),
      tabSelected: getColor(theme, 'tab.selectedForeground', fg),
      tabInactive: getColor(theme, 'tab.inactiveForeground', fg),
      tabUnfocused: getColor(theme, 'tab.unfocusedActiveForeground', fg),
      tabUnfocusedInactive: getColor(theme, 'tab.unfocusedInactiveForeground', fg),
      tabHover: getColor(theme, 'tab.hoverForeground', fg),
      tabUnfocusedHover: getColor(theme, 'tab.unfocusedHoverForeground', fg),
      // Title bar
      titleBar: getColor(theme, 'titleBar.activeForeground', fg),
      titleBarInactive: getColor(theme, 'titleBar.inactiveForeground', fg),
      // Breadcrumb
      breadcrumb: getColor(theme, 'breadcrumb.foreground', fg),
      breadcrumbFocus: getColor(theme, 'breadcrumb.focusForeground', fg),
      breadcrumbActive: getColor(theme, 'breadcrumb.activeSelectionForeground', fg),
      // Sidebar
      sidebarText: getColor(theme, 'sideBar.foreground', fg),
      sidebarTitle: getColor(theme, 'sideBarTitle.foreground', fg),
      // Status bar
      statusBarText: getColor(theme, 'statusBar.foreground', fg),
      statusBarDebug: getColor(theme, 'statusBar.debuggingForeground', fg),
      statusBarNoFolder: getColor(theme, 'statusBar.noFolderForeground', fg),
      statusBarItemError: getColor(theme, 'statusBarItem.errorForeground', fg),
      statusBarItemWarning: getColor(theme, 'statusBarItem.warningForeground', fg),
      statusBarItemRemote: getColor(theme, 'statusBarItem.remoteForeground', fg),
      statusBarItemProminent: getColor(theme, 'statusBarItem.prominentForeground', fg),
      statusBarItemOffline: getColor(theme, 'statusBarItem.offlineForeground', fg),
      statusBarItemHover: getColor(theme, 'statusBarItem.hoverForeground', fg),
      // Editor chrome
      lineNumber: getColor(theme, 'editorLineNumber.foreground', fg),
      lineNumberActive: getColor(theme, 'editorLineNumber.activeForeground', fg),
      lineNumberDimmed: getColor(theme, 'editorLineNumber.dimmedForeground', fg),
      ghostText: getColor(theme, 'editorGhostText.foreground', fg),
      hint: getColor(theme, 'editorHint.foreground', fg),
      inlayHint: getColor(theme, 'editorInlayHint.foreground', fg),
      inlayHintType: getColor(theme, 'editorInlayHint.typeForeground', fg),
      inlayHintParam: getColor(theme, 'editorInlayHint.parameterForeground', fg),
      codeLens: getColor(theme, 'editorCodeLens.foreground', fg),
      lightBulb: getColor(theme, 'editorLightBulb.foreground', fg),
      lightBulbAutoFix: getColor(theme, 'editorLightBulbAutoFix.foreground', fg),
      lightBulbAi: getColor(theme, 'editorLightBulbAi.foreground', fg),
      editorLinkActive: getColor(theme, 'editorLink.activeForeground', fg),
      whitespace: getColor(theme, 'editorWhitespace.foreground', fg),
      ruler: getColor(theme, 'editorRuler.foreground', fg),
      foldPlaceholder: getColor(theme, 'editor.foldPlaceholderForeground', fg),
      foldControl: getColor(theme, 'editorGutter.foldingControlForeground', fg),
      // Terminal
      terminal: getColor(theme, 'terminal.foreground', fg),
      terminalSelection: getColor(theme, 'terminal.selectionForeground', fg),
      // Panel
      panelTitle: getColor(theme, 'panelTitle.activeForeground', fg),
      panelTitleInactive: getColor(theme, 'panelTitle.inactiveForeground', fg),
      panelTitleBadge: getColor(theme, 'panelTitleBadge.foreground', fg),
      // Activity bar
      activityBar: getColor(theme, 'activityBar.foreground', fg),
      activityBarInactive: getColor(theme, 'activityBar.inactiveForeground', fg),
      activityBarTop: getColor(theme, 'activityBarTop.foreground', fg),
      activityBarTopInactive: getColor(theme, 'activityBarTop.inactiveForeground', fg),
      // Input
      input: getColor(theme, 'input.foreground', fg),
      inputPlaceholder: getColor(theme, 'input.placeholderForeground', fg),
      inputValidationError: getColor(theme, 'inputValidation.errorForeground', fg),
      inputValidationWarning: getColor(theme, 'inputValidation.warningForeground', fg),
      inputValidationInfo: getColor(theme, 'inputValidation.infoForeground', fg),
      // Lists
      listSelection: getColor(theme, 'list.activeSelectionForeground', fg),
      listSelectionIcon: getColor(theme, 'list.activeSelectionIconForeground', fg),
      listInactiveSelectionIcon: getColor(theme, 'list.inactiveSelectionIconForeground', fg),
      listHover: getColor(theme, 'list.hoverForeground', fg),
      listFocus: getColor(theme, 'list.focusForeground', fg),
      listInvalidItem: getColor(theme, 'list.invalidItemForeground', fg),
      listDeemphasized: getColor(theme, 'list.deemphasizedForeground', fg),
      // Command center
      commandCenter: getColor(theme, 'commandCenter.foreground', fg),
      commandCenterActive: getColor(theme, 'commandCenter.activeForeground', fg),
      commandCenterInactive: getColor(theme, 'commandCenter.inactiveForeground', fg),
      pickerGroup: getColor(theme, 'pickerGroup.foreground', fg),
      // Selection override foregrounds (when defined, override syntax colors)
      selectionForeground: getColor(theme, 'editor.selectionForeground', ''),
      findMatchForeground: getColor(theme, 'editor.findMatchForeground', ''),
      findMatchHighlightForeground: getColor(theme, 'editor.findMatchHighlightForeground', ''),
      wordHighlightForeground: getColor(theme, 'editor.wordHighlightForeground', ''),
      wordHighlightStrongForeground: getColor(theme, 'editor.wordHighlightStrongForeground', ''),
      wordHighlightTextForeground: getColor(theme, 'editor.wordHighlightTextForeground', ''),
      // Misc
      textPreformat: getColor(theme, 'textPreformat.foreground', fg),
      textLinkActive: getColor(theme, 'textLink.activeForeground', fg),
      menubarSelection: getColor(theme, 'menubar.selectionForeground', fg),
      checkbox: getColor(theme, 'checkbox.foreground', fg),
    },
    widgets: {
      editorWidget: getColor(theme, 'editorWidget.foreground', fg),
      actionList: getColor(theme, 'editorActionList.foreground', fg),
      actionListFocus: getColor(theme, 'editorActionList.focusForeground', fg),
      suggest: getColor(theme, 'editorSuggestWidget.foreground', fg),
      suggestSelected: getColor(theme, 'editorSuggestWidget.selectedForeground', fg),
      suggestSelectedIcon: getColor(theme, 'editorSuggestWidget.selectedIconForeground', fg),
      suggestHighlight: getColor(theme, 'editorSuggestWidget.highlightForeground', fg),
      suggestFocusHighlight: getColor(theme, 'editorSuggestWidget.focusHighlightForeground', fg),
      hover: getColor(theme, 'editorHoverWidget.foreground', fg),
      hoverHighlight: getColor(theme, 'editorHoverWidget.highlightForeground', fg),
      quickInput: getColor(theme, 'quickInput.foreground', fg),
      quickInputListFocus: getColor(theme, 'quickInputList.focusForeground', fg),
      quickInputListFocusIcon: getColor(theme, 'quickInputList.focusIconForeground', fg),
      menu: getColor(theme, 'menu.foreground', fg),
      menuSelection: getColor(theme, 'menu.selectionForeground', fg),
      notification: getColor(theme, 'notifications.foreground', fg),
      notificationLink: getColor(theme, 'notificationLink.foreground', fg),
      notificationHeader: getColor(theme, 'notificationCenterHeader.foreground', fg),
      notificationErrorIcon: getColor(theme, 'notificationsErrorIcon.foreground', fg),
      notificationWarningIcon: getColor(theme, 'notificationsWarningIcon.foreground', fg),
      notificationInfoIcon: getColor(theme, 'notificationsInfoIcon.foreground', fg),
      peekView: getColor(theme, 'peekViewResult.lineForeground', fg),
      inlineChat: getColor(theme, 'inlineChat.foreground', fg),
      inlineChatPlaceholder: getColor(theme, 'inlineChatInput.placeholderForeground', fg),
      suggestWidgetStatus: getColor(theme, 'editorSuggestWidgetStatus.foreground', fg),
    },
    git: {
      added: getColor(theme, 'gitDecoration.addedResourceForeground', fg),
      modified: getColor(theme, 'gitDecoration.modifiedResourceForeground', fg),
      deleted: getColor(theme, 'gitDecoration.deletedResourceForeground', fg),
      renamed: getColor(theme, 'gitDecoration.renamedResourceForeground', fg),
      untracked: getColor(theme, 'gitDecoration.untrackedResourceForeground', fg),
      ignored: getColor(theme, 'gitDecoration.ignoredResourceForeground', fg),
      conflict: getColor(theme, 'gitDecoration.conflictingResourceForeground', fg),
      submodule: getColor(theme, 'gitDecoration.submoduleResourceForeground', fg),
      stageModified: getColor(theme, 'gitDecoration.stageModifiedResourceForeground', fg),
      stageDeleted: getColor(theme, 'gitDecoration.stageDeletedResourceForeground', fg),
    },
    brackets: {
      bracket1: getColor(theme, 'editorBracketHighlight.foreground1', fg),
      bracket2: getColor(theme, 'editorBracketHighlight.foreground2', fg),
      bracket3: getColor(theme, 'editorBracketHighlight.foreground3', fg),
      bracket4: getColor(theme, 'editorBracketHighlight.foreground4', fg),
      bracket5: getColor(theme, 'editorBracketHighlight.foreground5', fg),
      bracket6: getColor(theme, 'editorBracketHighlight.foreground6', fg),
      unexpected: getColor(theme, 'editorBracketHighlight.unexpectedBracket.foreground', fg),
    },
    terminal: {
      ansiBlack: getColor(theme, 'terminal.ansiBlack', fg),
      ansiRed: getColor(theme, 'terminal.ansiRed', fg),
      ansiGreen: getColor(theme, 'terminal.ansiGreen', fg),
      ansiYellow: getColor(theme, 'terminal.ansiYellow', fg),
      ansiBlue: getColor(theme, 'terminal.ansiBlue', fg),
      ansiMagenta: getColor(theme, 'terminal.ansiMagenta', fg),
      ansiCyan: getColor(theme, 'terminal.ansiCyan', fg),
      ansiWhite: getColor(theme, 'terminal.ansiWhite', fg),
      ansiBrightBlack: getColor(theme, 'terminal.ansiBrightBlack', fg),
      ansiBrightRed: getColor(theme, 'terminal.ansiBrightRed', fg),
      ansiBrightGreen: getColor(theme, 'terminal.ansiBrightGreen', fg),
      ansiBrightYellow: getColor(theme, 'terminal.ansiBrightYellow', fg),
      ansiBrightBlue: getColor(theme, 'terminal.ansiBrightBlue', fg),
      ansiBrightMagenta: getColor(theme, 'terminal.ansiBrightMagenta', fg),
      ansiBrightCyan: getColor(theme, 'terminal.ansiBrightCyan', fg),
      ansiBrightWhite: getColor(theme, 'terminal.ansiBrightWhite', fg),
    },
    buttons: {
      button: getColor(theme, 'button.foreground', fg),
      buttonSecondary: getColor(theme, 'button.secondaryForeground', fg),
      extensionButton: getColor(theme, 'extensionButton.prominentForeground', fg),
      extensionBadgeRemote: getColor(theme, 'extensionBadge.remoteForeground', fg),
      badge: getColor(theme, 'badge.foreground', fg),
      activityBarBadge: getColor(theme, 'activityBarBadge.foreground', fg),
      activityWarningBadge: getColor(theme, 'activityWarningBadge.foreground', fg),
      activityErrorBadge: getColor(theme, 'activityErrorBadge.foreground', fg),
      dropdown: getColor(theme, 'dropdown.foreground', fg),
    },
    debug: {
      tokenName: getColor(theme, 'debugTokenExpression.name', fg),
      tokenValue: getColor(theme, 'debugTokenExpression.value', fg),
      tokenString: getColor(theme, 'debugTokenExpression.string', fg),
      tokenNumber: getColor(theme, 'debugTokenExpression.number', fg),
      tokenBoolean: getColor(theme, 'debugTokenExpression.boolean', fg),
      tokenError: getColor(theme, 'debugTokenExpression.error', fg),
      tokenType: getColor(theme, 'debugTokenExpression.type', fg),
      inlineValue: getColor(theme, 'editor.inlineValuesForeground', fg),
      exceptionLabel: getColor(theme, 'debugView.exceptionLabelForeground', fg),
      stateLabel: getColor(theme, 'debugView.stateLabelForeground', fg),
    },
    links: {
      textLink: getColor(theme, 'textLink.foreground', fg),
      listHighlight: getColor(theme, 'list.highlightForeground', fg),
      listFocusHighlight: getColor(theme, 'list.focusHighlightForeground', fg),
      listInactiveSelection: getColor(theme, 'list.inactiveSelectionForeground', fg),
      listError: getColor(theme, 'list.errorForeground', fg),
      listWarning: getColor(theme, 'list.warningForeground', fg),
    },
    misc: {
      sidebarSectionHeader: getColor(theme, 'sideBarSectionHeader.foreground', fg),
      panelSectionHeader: getColor(theme, 'panelSectionHeader.foreground', fg),
      keybindingLabel: getColor(theme, 'keybindingLabel.foreground', fg),
      banner: getColor(theme, 'banner.foreground', fg),
      bannerIcon: getColor(theme, 'banner.iconForeground', fg),
      peekViewTitle: getColor(theme, 'peekViewTitleLabel.foreground', fg),
      peekViewDescription: getColor(theme, 'peekViewTitleDescription.foreground', fg),
      peekViewFile: getColor(theme, 'peekViewResult.fileForeground', fg),
      peekViewSelection: getColor(theme, 'peekViewResult.selectionForeground', fg),
      // Problems panel
      problemsError: getColor(theme, 'problemsErrorIcon.foreground', fg),
      problemsWarning: getColor(theme, 'problemsWarningIcon.foreground', fg),
      problemsInfo: getColor(theme, 'problemsInfoIcon.foreground', fg),
      // Search
      searchResultsInfo: getColor(theme, 'search.resultsInfoForeground', fg),
      // Workbench-level foregrounds
      description: getColor(theme, 'descriptionForeground', fg),
      disabled: getColor(theme, 'disabledForeground', fg),
      errorFg: getColor(theme, 'errorForeground', fg),
      gitBlame: getColor(theme, 'git.blame.editorDecorationForeground', fg),
      // Diff editor
      diffUnchangedRegion: getColor(theme, 'diffEditor.unchangedRegionForeground', fg),
      // Editor placeholder
      editorPlaceholder: getColor(theme, 'editor.placeholder.foreground', fg),
      // Terminal
      terminalCommandGuide: getColor(theme, 'terminalCommandGuide.foreground', fg),
      terminalInitialHint: getColor(theme, 'terminal.initialHintForeground', fg),
      // Walkthrough
      walkthroughStepTitle: getColor(theme, 'walkthrough.stepTitle.foreground', fg),
      // Welcome page
      welcomeProgress: getColor(theme, 'welcomePage.progress.foreground', fg),
      // Profile badge
      profileBadge: getColor(theme, 'profileBadge.foreground', fg),
      // Inline edit (AI suggestions)
      inlineEditPrimary: getColor(theme, 'inlineEdit.gutterIndicator.primaryForeground', fg),
      inlineEditSecondary: getColor(theme, 'inlineEdit.gutterIndicator.secondaryForeground', fg),
      inlineEditSuccess: getColor(theme, 'inlineEdit.gutterIndicator.successfulForeground', fg),
      // Editor group
      dropPrompt: getColor(theme, 'editorGroup.dropIntoPromptForeground', fg),
    },
    inputs: {
      optionActive: getColor(theme, 'inputOption.activeForeground', fg),
      radioActive: getColor(theme, 'radio.activeForeground', fg),
      radioInactive: getColor(theme, 'radio.inactiveForeground', fg),
      checkboxDisabled: getColor(theme, 'checkbox.disabled.foreground', fg),
    },
    chat: {
      avatar: getColor(theme, 'chat.avatarForeground', fg),
      linesAdded: getColor(theme, 'chat.linesAddedForeground', fg),
      linesRemoved: getColor(theme, 'chat.linesRemovedForeground', fg),
      slashCommand: getColor(theme, 'chat.slashCommandForeground', fg),
      editedFile: getColor(theme, 'chat.editedFileForeground', fg),
    },
    testing: {
      coverageBadge: getColor(theme, 'testing.coverCountBadgeForeground', fg),
      messageInfo: getColor(theme, 'testing.message.info.decorationForeground', fg),
    },
    debugConsole: {
      error: getColor(theme, 'debugConsole.errorForeground', fg),
      warning: getColor(theme, 'debugConsole.warningForeground', fg),
      info: getColor(theme, 'debugConsole.infoForeground', fg),
      source: getColor(theme, 'debugConsole.sourceForeground', fg),
    },
    symbolIcons: {
      array: getColor(theme, 'symbolIcon.arrayForeground', fg),
      boolean: getColor(theme, 'symbolIcon.booleanForeground', fg),
      class: getColor(theme, 'symbolIcon.classForeground', fg),
      color: getColor(theme, 'symbolIcon.colorForeground', fg),
      constant: getColor(theme, 'symbolIcon.constantForeground', fg),
      ctor: getColor(theme, 'symbolIcon.constructorForeground', fg),
      enum: getColor(theme, 'symbolIcon.enumeratorForeground', fg),
      enumMember: getColor(theme, 'symbolIcon.enumeratorMemberForeground', fg),
      event: getColor(theme, 'symbolIcon.eventForeground', fg),
      field: getColor(theme, 'symbolIcon.fieldForeground', fg),
      file: getColor(theme, 'symbolIcon.fileForeground', fg),
      folder: getColor(theme, 'symbolIcon.folderForeground', fg),
      function: getColor(theme, 'symbolIcon.functionForeground', fg),
      interface: getColor(theme, 'symbolIcon.interfaceForeground', fg),
      key: getColor(theme, 'symbolIcon.keyForeground', fg),
      keyword: getColor(theme, 'symbolIcon.keywordForeground', fg),
      method: getColor(theme, 'symbolIcon.methodForeground', fg),
      module: getColor(theme, 'symbolIcon.moduleForeground', fg),
      namespace: getColor(theme, 'symbolIcon.namespaceForeground', fg),
      null: getColor(theme, 'symbolIcon.nullForeground', fg),
      number: getColor(theme, 'symbolIcon.numberForeground', fg),
      object: getColor(theme, 'symbolIcon.objectForeground', fg),
      operator: getColor(theme, 'symbolIcon.operatorForeground', fg),
      package: getColor(theme, 'symbolIcon.packageForeground', fg),
      property: getColor(theme, 'symbolIcon.propertyForeground', fg),
      reference: getColor(theme, 'symbolIcon.referenceForeground', fg),
      snippet: getColor(theme, 'symbolIcon.snippetForeground', fg),
      string: getColor(theme, 'symbolIcon.stringForeground', fg),
      struct: getColor(theme, 'symbolIcon.structForeground', fg),
      text: getColor(theme, 'symbolIcon.textForeground', fg),
      typeParameter: getColor(theme, 'symbolIcon.typeParameterForeground', fg),
      unit: getColor(theme, 'symbolIcon.unitForeground', fg),
      variable: getColor(theme, 'symbolIcon.variableForeground', fg),
    },
    settings: {
      header: getColor(theme, 'settings.headerForeground', fg),
      textInput: getColor(theme, 'settings.textInputForeground', fg),
      numberInput: getColor(theme, 'settings.numberInputForeground', fg),
      checkbox: getColor(theme, 'settings.checkboxForeground', fg),
      dropdown: getColor(theme, 'settings.dropdownForeground', fg),
    },
    // State colors for distinction testing (active vs inactive UI elements)
    states: {
      // Tab states
      tabActive: getColor(theme, 'tab.activeForeground', fg),
      tabInactive: getColor(theme, 'tab.inactiveForeground', fg),
      tabHover: getColor(theme, 'tab.hoverForeground', fg),
      // List states
      listSelected: getColor(theme, 'list.activeSelectionForeground', fg),
      listHover: getColor(theme, 'list.hoverForeground', fg),
      listFocus: getColor(theme, 'list.focusForeground', fg),
      // Activity bar
      activityActive: getColor(theme, 'activityBar.foreground', fg),
      activityInactive: getColor(theme, 'activityBar.inactiveForeground', fg),
      // Panel
      panelActive: getColor(theme, 'panelTitle.activeForeground', fg),
      panelInactive: getColor(theme, 'panelTitle.inactiveForeground', fg),
      // Line numbers
      lineNumber: getColor(theme, 'editorLineNumber.foreground', fg),
      lineNumberActive: getColor(theme, 'editorLineNumber.activeForeground', fg),
      // Breadcrumb
      breadcrumb: getColor(theme, 'breadcrumb.foreground', fg),
      breadcrumbActive: getColor(theme, 'breadcrumb.focusForeground', fg),
      // Title bar
      titleBar: getColor(theme, 'titleBar.activeForeground', fg),
      titleBarInactive: getColor(theme, 'titleBar.inactiveForeground', fg),
      // Command center
      commandCenter: getColor(theme, 'commandCenter.foreground', fg),
      commandCenterActive: getColor(theme, 'commandCenter.activeForeground', fg),
    },
    // Markdown alert colors (GitHub-style alerts in docs)
    markdownAlerts: {
      note: getColor(theme, 'markdownAlert.note.foreground', fg),
      tip: getColor(theme, 'markdownAlert.tip.foreground', fg),
      important: getColor(theme, 'markdownAlert.important.foreground', fg),
      warning: getColor(theme, 'markdownAlert.warning.foreground', fg),
      caution: getColor(theme, 'markdownAlert.caution.foreground', fg),
    },
    // Testing icons (test runner panel)
    testingIcons: {
      passed: getColor(theme, 'testing.iconPassed', fg),
      failed: getColor(theme, 'testing.iconFailed', fg),
      errored: getColor(theme, 'testing.iconErrored', fg),
      queued: getColor(theme, 'testing.iconQueued', fg),
      unset: getColor(theme, 'testing.iconUnset', fg),
      skipped: getColor(theme, 'testing.iconSkipped', fg),
      runAction: getColor(theme, 'testing.runAction', fg),
    },
    // Debug icons (breakpoints and toolbar)
    debugIcons: {
      breakpoint: getColor(theme, 'debugIcon.breakpointForeground', fg),
      breakpointDisabled: getColor(theme, 'debugIcon.breakpointDisabledForeground', fg),
      breakpointUnverified: getColor(theme, 'debugIcon.breakpointUnverifiedForeground', fg),
      breakpointCurrentStackframe: getColor(theme, 'debugIcon.breakpointCurrentStackframeForeground', fg),
      breakpointStackframe: getColor(theme, 'debugIcon.breakpointStackframeForeground', fg),
      start: getColor(theme, 'debugIcon.startForeground', fg),
      pause: getColor(theme, 'debugIcon.pauseForeground', fg),
      stop: getColor(theme, 'debugIcon.stopForeground', fg),
      disconnect: getColor(theme, 'debugIcon.disconnectForeground', fg),
      restart: getColor(theme, 'debugIcon.restartForeground', fg),
      stepOver: getColor(theme, 'debugIcon.stepOverForeground', fg),
      stepInto: getColor(theme, 'debugIcon.stepIntoForeground', fg),
      stepOut: getColor(theme, 'debugIcon.stepOutForeground', fg),
      continue: getColor(theme, 'debugIcon.continueForeground', fg),
      stepBack: getColor(theme, 'debugIcon.stepBackForeground', fg),
    },
    // SCM graph colors (git history visualization)
    scmGraph: {
      foreground1: getColor(theme, 'scmGraph.foreground1', fg),
      foreground2: getColor(theme, 'scmGraph.foreground2', fg),
      foreground3: getColor(theme, 'scmGraph.foreground3', fg),
      foreground4: getColor(theme, 'scmGraph.foreground4', fg),
      foreground5: getColor(theme, 'scmGraph.foreground5', fg),
      additions: getColor(theme, 'scmGraph.historyItemHoverAdditionsForeground', fg),
      deletions: getColor(theme, 'scmGraph.historyItemHoverDeletionsForeground', fg),
      label: getColor(theme, 'scmGraph.historyItemHoverLabelForeground', fg),
      refColor: getColor(theme, 'scmGraph.historyItemRefColor', fg),
    },
    // Terminal symbol icons (shell integration)
    terminalSymbols: {
      file: getColor(theme, 'terminalSymbolIcon.fileForeground', fg),
      folder: getColor(theme, 'terminalSymbolIcon.folderForeground', fg),
      symbolicLinkFile: getColor(theme, 'terminalSymbolIcon.symbolicLinkFileForeground', fg),
      symbolicLinkFolder: getColor(theme, 'terminalSymbolIcon.symbolicLinkFolderForeground', fg),
      branch: getColor(theme, 'terminalSymbolIcon.branchForeground', fg),
      commit: getColor(theme, 'terminalSymbolIcon.commitForeground', fg),
      tag: getColor(theme, 'terminalSymbolIcon.tagForeground', fg),
      remote: getColor(theme, 'terminalSymbolIcon.remoteForeground', fg),
      stash: getColor(theme, 'terminalSymbolIcon.stashForeground', fg),
      pullRequest: getColor(theme, 'terminalSymbolIcon.pullRequestForeground', fg),
      pullRequestDone: getColor(theme, 'terminalSymbolIcon.pullRequestDoneForeground', fg),
      option: getColor(theme, 'terminalSymbolIcon.optionForeground', fg),
      optionValue: getColor(theme, 'terminalSymbolIcon.optionValueForeground', fg),
      argument: getColor(theme, 'terminalSymbolIcon.argumentForeground', fg),
      method: getColor(theme, 'terminalSymbolIcon.methodForeground', fg),
      alias: getColor(theme, 'terminalSymbolIcon.aliasForeground', fg),
      flag: getColor(theme, 'terminalSymbolIcon.flagForeground', fg),
      inlineSuggestion: getColor(theme, 'terminalSymbolIcon.inlineSuggestionForeground', fg),
    },
    // Extension icons (marketplace)
    extensionIcons: {
      star: getColor(theme, 'extensionIcon.starForeground', fg),
      verified: getColor(theme, 'extensionIcon.verifiedForeground', fg),
      preRelease: getColor(theme, 'extensionIcon.preReleaseForeground', fg),
      sponsor: getColor(theme, 'extensionIcon.sponsorForeground', fg),
      private: getColor(theme, 'extensionIcon.privateForeground', fg),
    },
    // Notebook status icons (Jupyter)
    notebookStatus: {
      error: getColor(theme, 'notebookStatusErrorIcon.foreground', fg),
      running: getColor(theme, 'notebookStatusRunningIcon.foreground', fg),
      success: getColor(theme, 'notebookStatusSuccessIcon.foreground', fg),
    },
  };
}
