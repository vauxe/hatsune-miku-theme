/**
 * Extract Adjacent Token Pairs using TextMate Engine
 *
 * This uses the actual VS Code TextMate tokenizer for accurate scope extraction.
 * Grammars are downloaded from VS Code's GitHub repository and cached locally.
 *
 * Usage:
 *   npx tsx src/tools/extract-adjacency.ts              # Show top pairs
 *   npx tsx src/tools/extract-adjacency.ts --compare    # Compare with ADJACENCY_PAIRS
 */

import * as fs from 'fs';
import * as path from 'path';
import * as vsctm from 'vscode-textmate';
import * as oniguruma from 'vscode-oniguruma';

import { ADJACENCY_PAIRS } from './readability-constants';

// =============================================================================
// CONFIGURATION
// =============================================================================

const GRAMMAR_DIR = path.join(__dirname, '../../.grammars');

// VS Code grammar URLs (raw GitHub)
const VSCODE_RAW = 'https://raw.githubusercontent.com/microsoft/vscode/main/extensions';

// Grammar definitions with all dependencies
interface GrammarDef {
  scopeName: string;
  path: string;
  embeddedScopes?: string[];  // Grammars this one depends on
}

const GRAMMARS: Record<string, GrammarDef> = {
  // TypeScript/JavaScript family
  'source.ts': {
    scopeName: 'source.ts',
    path: `${VSCODE_RAW}/typescript-basics/syntaxes/TypeScript.tmLanguage.json`,
  },
  'source.tsx': {
    scopeName: 'source.tsx',
    path: `${VSCODE_RAW}/typescript-basics/syntaxes/TypeScriptReact.tmLanguage.json`,
  },
  'source.js': {
    scopeName: 'source.js',
    path: `${VSCODE_RAW}/javascript/syntaxes/JavaScript.tmLanguage.json`,
  },
  'source.js.regexp': {
    scopeName: 'source.js.regexp',
    path: `${VSCODE_RAW}/javascript/syntaxes/Regular%20Expressions%20(JavaScript).tmLanguage.json`,
  },
  // Python
  'source.python': {
    scopeName: 'source.python',
    path: `${VSCODE_RAW}/python/syntaxes/MagicPython.tmLanguage.json`,
  },
  'source.regexp.python': {
    scopeName: 'source.regexp.python',
    path: `${VSCODE_RAW}/python/syntaxes/MagicRegExp.tmLanguage.json`,
  },
  // Go
  'source.go': {
    scopeName: 'source.go',
    path: `${VSCODE_RAW}/go/syntaxes/go.tmLanguage.json`,
  },
  // Java
  'source.java': {
    scopeName: 'source.java',
    path: `${VSCODE_RAW}/java/syntaxes/java.tmLanguage.json`,
  },
  // C#
  'source.cs': {
    scopeName: 'source.cs',
    path: `${VSCODE_RAW}/csharp/syntaxes/csharp.tmLanguage.json`,
  },
  // C/C++
  'source.c': {
    scopeName: 'source.c',
    path: `${VSCODE_RAW}/cpp/syntaxes/c.tmLanguage.json`,
  },
  'source.cpp': {
    scopeName: 'source.cpp',
    path: `${VSCODE_RAW}/cpp/syntaxes/cpp.tmLanguage.json`,
  },
  'source.c.platform': {
    scopeName: 'source.c.platform',
    path: `${VSCODE_RAW}/cpp/syntaxes/platform.tmLanguage.json`,
  },
  // Ruby
  'source.ruby': {
    scopeName: 'source.ruby',
    path: `${VSCODE_RAW}/ruby/syntaxes/ruby.tmLanguage.json`,
  },
  // PHP
  'text.html.php': {
    scopeName: 'text.html.php',
    path: `${VSCODE_RAW}/php/syntaxes/php.tmLanguage.json`,
  },
  'source.php': {
    scopeName: 'source.php',
    path: `${VSCODE_RAW}/php/syntaxes/php.tmLanguage.json`,
  },
  // CSS/SCSS
  'source.css': {
    scopeName: 'source.css',
    path: `${VSCODE_RAW}/css/syntaxes/css.tmLanguage.json`,
  },
  'source.css.scss': {
    scopeName: 'source.css.scss',
    path: `${VSCODE_RAW}/scss/syntaxes/scss.tmLanguage.json`,
  },
  // HTML
  'text.html.basic': {
    scopeName: 'text.html.basic',
    path: `${VSCODE_RAW}/html/syntaxes/html.tmLanguage.json`,
  },
  'text.html.derivative': {
    scopeName: 'text.html.derivative',
    path: `${VSCODE_RAW}/html/syntaxes/html-derivative.tmLanguage.json`,
  },
  // JSON/YAML
  'source.json': {
    scopeName: 'source.json',
    path: `${VSCODE_RAW}/json/syntaxes/JSON.tmLanguage.json`,
  },
  'source.yaml': {
    scopeName: 'source.yaml',
    path: `${VSCODE_RAW}/yaml/syntaxes/yaml.tmLanguage.json`,
  },
  // Shell
  'source.shell': {
    scopeName: 'source.shell',
    path: `${VSCODE_RAW}/shellscript/syntaxes/shell-unix-bash.tmLanguage.json`,
  },
  // SQL
  'source.sql': {
    scopeName: 'source.sql',
    path: `${VSCODE_RAW}/sql/syntaxes/sql.tmLanguage.json`,
  },
  // Markdown
  'text.html.markdown': {
    scopeName: 'text.html.markdown',
    path: `${VSCODE_RAW}/markdown-basics/syntaxes/markdown.tmLanguage.json`,
  },
  // Rust
  'source.rust': {
    scopeName: 'source.rust',
    path: `${VSCODE_RAW}/rust/syntaxes/rust.tmLanguage.json`,
  },
  // XML
  'text.xml': {
    scopeName: 'text.xml',
    path: `${VSCODE_RAW}/xml/syntaxes/xml.tmLanguage.json`,
  },
  // Diff
  'source.diff': {
    scopeName: 'source.diff',
    path: `${VSCODE_RAW}/diff/syntaxes/diff.tmLanguage.json`,
  },
  // Makefile
  'source.makefile': {
    scopeName: 'source.makefile',
    path: `${VSCODE_RAW}/make/syntaxes/make.tmLanguage.json`,
  },
  // Dockerfile
  'source.dockerfile': {
    scopeName: 'source.dockerfile',
    path: `${VSCODE_RAW}/docker/syntaxes/docker.tmLanguage.json`,
  },
  // Perl
  'source.perl': {
    scopeName: 'source.perl',
    path: `${VSCODE_RAW}/perl/syntaxes/perl.tmLanguage.json`,
  },
  // Lua
  'source.lua': {
    scopeName: 'source.lua',
    path: `${VSCODE_RAW}/lua/syntaxes/lua.tmLanguage.json`,
  },
  // PowerShell
  'source.powershell': {
    scopeName: 'source.powershell',
    path: `${VSCODE_RAW}/powershell/syntaxes/powershell.tmLanguage.json`,
  },
  // Swift
  'source.swift': {
    scopeName: 'source.swift',
    path: `${VSCODE_RAW}/swift/syntaxes/swift.tmLanguage.json`,
  },
  // Objective-C
  'source.objc': {
    scopeName: 'source.objc',
    path: `${VSCODE_RAW}/objective-c/syntaxes/objective-c.tmLanguage.json`,
  },
  // Groovy
  'source.groovy': {
    scopeName: 'source.groovy',
    path: `${VSCODE_RAW}/groovy/syntaxes/groovy.tmLanguage.json`,
  },
  // INI
  'source.ini': {
    scopeName: 'source.ini',
    path: `${VSCODE_RAW}/ini/syntaxes/ini.tmLanguage.json`,
  },
  // Batch
  'source.batchfile': {
    scopeName: 'source.batchfile',
    path: `${VSCODE_RAW}/bat/syntaxes/batchfile.tmLanguage.json`,
  },
  // LaTeX
  'text.tex.latex': {
    scopeName: 'text.tex.latex',
    path: `${VSCODE_RAW}/latex/syntaxes/LaTeX.tmLanguage.json`,
  },
  // Handlebars
  'text.html.handlebars': {
    scopeName: 'text.html.handlebars',
    path: `${VSCODE_RAW}/handlebars/syntaxes/Handlebars.tmLanguage.json`,
  },
  // HLSL
  'source.hlsl': {
    scopeName: 'source.hlsl',
    path: `${VSCODE_RAW}/hlsl/syntaxes/hlsl.tmLanguage.json`,
  },
  // Clojure
  'source.clojure': {
    scopeName: 'source.clojure',
    path: `${VSCODE_RAW}/clojure/syntaxes/clojure.tmLanguage.json`,
  },
  // CoffeeScript
  'source.coffee': {
    scopeName: 'source.coffee',
    path: `${VSCODE_RAW}/coffeescript/syntaxes/coffeescript.tmLanguage.json`,
  },
  // F#
  'source.fsharp': {
    scopeName: 'source.fsharp',
    path: `${VSCODE_RAW}/fsharp/syntaxes/fsharp.tmLanguage.json`,
  },
  // Dart
  'source.dart': {
    scopeName: 'source.dart',
    path: `${VSCODE_RAW}/dart/syntaxes/dart.tmLanguage.json`,
  },
  // Razor
  'text.html.cshtml': {
    scopeName: 'text.html.cshtml',
    path: `${VSCODE_RAW}/razor/syntaxes/cshtml.tmLanguage.json`,
  },
};

// File extension to scope mapping
const EXT_TO_SCOPE: Record<string, string> = {
  '.ts': 'source.ts',
  '.tsx': 'source.tsx',
  '.js': 'source.js',
  '.jsx': 'source.js',
  '.py': 'source.python',
  '.rs': 'source.rust',
  '.go': 'source.go',
  '.java': 'source.java',
  '.cs': 'source.cs',
  '.cpp': 'source.cpp',
  '.c': 'source.c',
  '.h': 'source.c',
  '.rb': 'source.ruby',
  '.php': 'source.php',
  '.css': 'source.css',
  '.scss': 'source.css.scss',
  '.html': 'text.html.basic',
  '.json': 'source.json',
  '.yaml': 'source.yaml',
  '.yml': 'source.yaml',
  '.sh': 'source.shell',
  '.bash': 'source.shell',
  '.sql': 'source.sql',
  '.md': 'text.html.markdown',
  '.xml': 'text.xml',
  '.diff': 'source.diff',
  '.patch': 'source.diff',
  '.makefile': 'source.makefile',
  '.dockerfile': 'source.dockerfile',
  '.pl': 'source.perl',
  '.lua': 'source.lua',
  '.ps1': 'source.powershell',
  '.swift': 'source.swift',
  '.m': 'source.objc',
  '.groovy': 'source.groovy',
  '.ini': 'source.ini',
  '.bat': 'source.batchfile',
  '.cmd': 'source.batchfile',
  '.tex': 'text.tex.latex',
  '.hbs': 'text.html.handlebars',
  '.handlebars': 'text.html.handlebars',
  '.hlsl': 'source.hlsl',
  '.clj': 'source.clojure',
  '.cljs': 'source.clojure',
  '.coffee': 'source.coffee',
  '.fs': 'source.fsharp',
  '.fsx': 'source.fsharp',
  '.dart': 'source.dart',
  '.cshtml': 'text.html.cshtml',
  '.razor': 'text.html.cshtml',
};

// =============================================================================
// GRAMMAR LOADING
// =============================================================================

const grammarCache = new Map<string, vsctm.IRawGrammar>();

async function downloadGrammar(scopeName: string): Promise<vsctm.IRawGrammar | null> {
  // Check cache
  if (grammarCache.has(scopeName)) {
    return grammarCache.get(scopeName)!;
  }

  // Check local file
  const localPath = path.join(GRAMMAR_DIR, `${scopeName}.json`);
  if (fs.existsSync(localPath)) {
    try {
      const content = fs.readFileSync(localPath, 'utf-8');
      const grammar = vsctm.parseRawGrammar(content, localPath);
      grammarCache.set(scopeName, grammar);
      return grammar;
    } catch (e) {
      console.warn(`Failed to parse cached grammar ${scopeName}: ${e}`);
    }
  }

  // Download from URL
  const def = GRAMMARS[scopeName];
  if (!def) {
    // Try to find by searching for partial match
    for (const [key, value] of Object.entries(GRAMMARS)) {
      if (key.includes(scopeName) || scopeName.includes(key)) {
        return downloadGrammar(key);
      }
    }
    console.warn(`Unknown grammar: ${scopeName}`);
    return null;
  }

  console.log(`Downloading: ${scopeName}`);

  try {
    const response = await fetch(def.path);
    if (!response.ok) {
      console.warn(`Failed to download ${scopeName}: ${response.status}`);
      return null;
    }

    const content = await response.text();

    // Save to cache directory
    fs.mkdirSync(GRAMMAR_DIR, { recursive: true });
    fs.writeFileSync(localPath, content);

    const grammar = vsctm.parseRawGrammar(content, localPath);
    grammarCache.set(scopeName, grammar);
    return grammar;
  } catch (e) {
    console.warn(`Error downloading ${scopeName}: ${e}`);
    return null;
  }
}

let registry: vsctm.Registry | null = null;

async function getRegistry(): Promise<vsctm.Registry> {
  if (registry) return registry;

  // Load oniguruma WASM
  const wasmPath = path.join(
    path.dirname(require.resolve('vscode-oniguruma')),
    'onig.wasm'
  );
  const wasmBinary = fs.readFileSync(wasmPath).buffer;
  await oniguruma.loadWASM(wasmBinary);

  registry = new vsctm.Registry({
    onigLib: Promise.resolve({
      createOnigScanner: (patterns) => new oniguruma.OnigScanner(patterns),
      createOnigString: (s) => new oniguruma.OnigString(s),
    }),
    loadGrammar: async (scopeName: string) => {
      return downloadGrammar(scopeName);
    },
  });

  return registry;
}

// =============================================================================
// SCOPE NORMALIZATION
// =============================================================================

function normalizeScope(scopes: string[]): string | null {
  // Get the most specific scope (exclude source/text base scopes)
  const scope = scopes
    .filter(s => !s.match(/^(source|text)\.[a-z]+$/))
    .pop();

  if (!scope) return null;

  // Map TextMate scopes to our canonical names
  const mappings: [RegExp, string | null][] = [
    // Comments
    [/^comment\.block\.documentation/, 'docComment'],
    [/^comment/, 'comment'],

    // Strings
    [/^string\.regexp/, 'regexp'],
    [/^string/, 'string'],

    // Constants
    [/^constant\.character\.escape/, 'stringEscape'],
    [/^constant\.numeric/, 'number'],
    [/^constant\.language\.(null|undefined|nil|boolean)/, 'supportConstant'],
    [/^constant\.language/, 'constant'],
    [/^constant\.other\.color/, 'colorValue'],
    [/^constant/, 'constant'],

    // Variables
    [/^variable\.language\.(this|self|super)/, 'variableLanguage'],
    [/^variable\.parameter/, 'parameter'],
    [/^variable\.other\.enummember/, 'enumMember'],
    [/^variable\.other\.event/, 'event'],
    [/^variable\.other\.(object\.)?property/, 'property'],
    [/^variable\.other\.constant/, 'constant'],
    [/^variable\.function/, 'function'],
    [/^variable/, 'variable'],

    // Entity names (definitions)
    [/^entity\.name\.function\.decorator/, 'decorator'],
    [/^entity\.name\.function\.macro/, 'macro'],
    [/^entity\.name\.function\.preprocessor/, 'macro'],
    [/^entity\.name\.function\.method/, 'method'],
    [/^entity\.name\.function/, 'function'],
    [/^entity\.name\.type\.interface/, 'interface'],
    [/^entity\.name\.type\.enum/, 'enum'],
    [/^entity\.name\.type\.struct/, 'struct'],
    [/^entity\.name\.type\.class/, 'class'],
    [/^entity\.name\.type\.parameter/, 'typeParameter'],
    [/^entity\.name\.type\.namespace/, 'namespace'],
    [/^entity\.name\.type/, 'type'],
    [/^entity\.name\.class/, 'class'],
    [/^entity\.name\.tag/, 'tag'],
    [/^entity\.name\.section/, 'section'],
    [/^entity\.name\.selector/, 'cssSelector'],
    [/^entity\.name\.namespace/, 'namespace'],
    [/^entity\.name\.label/, 'label'],
    [/^entity\.other\.attribute-name/, 'attribute'],
    [/^entity\.other\.inherited-class/, 'inheritedClass'],

    // Keywords
    [/^keyword\.operator/, 'operator'],
    [/^keyword\.control/, 'keyword'],
    [/^keyword\.other\.unit/, 'number'], // CSS units
    [/^keyword/, 'keyword'],

    // Storage
    [/^storage\.modifier/, 'storageModifier'],
    [/^storage\.type\.(function|class|interface|enum|struct)/, 'storage'],
    [/^storage\.type/, 'storage'],
    [/^storage/, 'storage'],

    // Support (built-ins)
    [/^support\.function/, 'supportFunction'],
    [/^support\.class/, 'supportClass'],
    [/^support\.type\.property-name/, 'cssPropertyName'],
    [/^support\.type\.primitive/, 'supportType'],
    [/^support\.type/, 'supportType'],
    [/^support\.constant/, 'supportConstant'],
    [/^support\.variable/, 'supportVariable'],

    // Markup
    [/^markup\.heading/, 'markupHeading'],
    [/^markup\.bold/, 'markupBold'],
    [/^markup\.italic/, 'markupItalic'],
    [/^markup\.inline\.raw/, 'markupCode'],
    [/^markup\.raw/, 'markupCode'],
    [/^markup\.quote/, 'markupQuote'],
    [/^markup\.list/, 'markupList'],
    [/^markup\.inserted/, 'markupInserted'],
    [/^markup\.deleted/, 'markupDeleted'],
    [/^markup\.changed/, 'markupChanged'],
    [/^markup\.underline\.link/, 'link'],

    // Punctuation
    [/^punctuation\.definition\.(string|comment|tag)/, null], // Skip string/comment delimiters
    [/^punctuation/, 'punctuation'],

    // Invalid
    [/^invalid\.deprecated/, 'deprecated'],
    [/^invalid/, 'invalid'],

    // Meta (usually skip these)
    [/^meta\.embedded/, null],
    [/^meta\.brace/, 'punctuation'],
    [/^meta/, null],
  ];

  for (const [pattern, category] of mappings) {
    if (pattern.test(scope)) {
      return category;
    }
  }

  return null;
}

// =============================================================================
// TOKENIZATION
// =============================================================================

interface TokenPair {
  scope1: string;
  scope2: string;
  count: number;
  examples: string[];
}

interface TokenizationResult {
  file: string;
  pairs: Map<string, TokenPair>;
  tokenCount: number;
}

async function tokenizeFile(filePath: string): Promise<TokenizationResult | null> {
  const ext = path.extname(filePath).toLowerCase();
  const scopeName = EXT_TO_SCOPE[ext];

  if (!scopeName) {
    console.warn(`No grammar for: ${ext}`);
    return null;
  }

  try {
    const reg = await getRegistry();
    const grammar = await reg.loadGrammar(scopeName);

    if (!grammar) {
      console.warn(`Could not load grammar: ${scopeName}`);
      return null;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    const pairs = new Map<string, TokenPair>();
    let tokenCount = 0;
    let ruleStack = vsctm.INITIAL;

    for (const line of lines) {
      const result = grammar.tokenizeLine(line, ruleStack);
      ruleStack = result.ruleStack;

      let prevScope: string | null = null;
      let prevText = '';

      for (const token of result.tokens) {
        const text = line.substring(token.startIndex, token.endIndex).trim();
        if (!text) continue;

        const scope = normalizeScope(token.scopes);
        if (!scope) continue;

        tokenCount++;

        if (prevScope && prevScope !== scope) {
          // Canonical key (alphabetical)
          const key = prevScope < scope ? `${prevScope}↔${scope}` : `${scope}↔${prevScope}`;

          const existing = pairs.get(key);
          if (existing) {
            existing.count++;
            if (existing.examples.length < 3) {
              existing.examples.push(`${prevText} ${text}`);
            }
          } else {
            const [s1, s2] = key.split('↔');
            pairs.set(key, {
              scope1: s1,
              scope2: s2,
              count: 1,
              examples: [`${prevText} ${text}`],
            });
          }
        }

        prevScope = scope;
        prevText = text.substring(0, 15);
      }
    }

    return { file: filePath, pairs, tokenCount };
  } catch (e) {
    console.warn(`Error tokenizing ${filePath}: ${e}`);
    return null;
  }
}

// =============================================================================
// ANALYSIS
// =============================================================================

interface AggregatedPairs {
  pairs: Map<string, TokenPair>;
  totalTokens: number;
  filesAnalyzed: number;
}

async function analyzeDirectory(dirPath: string): Promise<AggregatedPairs> {
  const files = fs.readdirSync(dirPath).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return EXT_TO_SCOPE[ext] !== undefined;
  });

  const aggregated: AggregatedPairs = {
    pairs: new Map(),
    totalTokens: 0,
    filesAnalyzed: 0,
  };

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    console.log(`Analyzing: ${file}`);

    const result = await tokenizeFile(filePath);
    if (!result) continue;

    aggregated.filesAnalyzed++;
    aggregated.totalTokens += result.tokenCount;

    for (const [key, pair] of result.pairs) {
      const existing = aggregated.pairs.get(key);
      if (existing) {
        existing.count += pair.count;
        if (existing.examples.length < 3) {
          existing.examples.push(...pair.examples.slice(0, 3 - existing.examples.length));
        }
      } else {
        aggregated.pairs.set(key, { ...pair });
      }
    }
  }

  return aggregated;
}

function compareWithDefined(extracted: AggregatedPairs): void {
  const definedPairs = new Set<string>();
  for (const [s1, s2] of ADJACENCY_PAIRS) {
    const key = s1 < s2 ? `${s1}↔${s2}` : `${s2}↔${s1}`;
    definedPairs.add(key);
  }

  const sortedPairs = [...extracted.pairs.entries()].sort((a, b) => b[1].count - a[1].count);

  console.log('\n' + '='.repeat(80));
  console.log('TEXTMATE ADJACENCY PAIR COVERAGE ANALYSIS');
  console.log('='.repeat(80));
  console.log(`Files analyzed: ${extracted.filesAnalyzed}`);
  console.log(`Total tokens: ${extracted.totalTokens}`);
  console.log(`Unique adjacent pairs found: ${extracted.pairs.size}`);
  console.log(`Defined pairs in ADJACENCY_PAIRS: ${ADJACENCY_PAIRS.length}`);

  // Missing pairs
  console.log('\n' + '-'.repeat(80));
  console.log('MISSING FROM ADJACENCY_PAIRS (by frequency)');
  console.log('-'.repeat(80));

  let missingCount = 0;
  const missingPairs: Array<[string, TokenPair]> = [];
  for (const [key, pair] of sortedPairs) {
    if (!definedPairs.has(key)) {
      missingCount++;
      missingPairs.push([key, pair]);
      if (missingCount <= 30) {
        const pct = ((pair.count / extracted.totalTokens) * 100).toFixed(2);
        console.log(`  ${key.padEnd(40)} ${pair.count.toString().padStart(5)} (${pct}%)`);
      }
    }
  }
  if (missingCount > 30) console.log(`  ... and ${missingCount - 30} more`);

  // Coverage stats
  let coveredFreq = 0, totalFreq = 0;
  for (const [key, pair] of sortedPairs) {
    totalFreq += pair.count;
    if (definedPairs.has(key)) coveredFreq += pair.count;
  }

  const coveredCount = sortedPairs.filter(([k]) => definedPairs.has(k)).length;

  console.log('\n' + '-'.repeat(80));
  console.log('COVERAGE SUMMARY');
  console.log('-'.repeat(80));
  console.log(`  Unique pairs found: ${extracted.pairs.size}`);
  console.log(`  Covered: ${coveredCount} (${(coveredCount/extracted.pairs.size*100).toFixed(1)}%)`);
  console.log(`  Frequency coverage: ${(coveredFreq/totalFreq*100).toFixed(1)}%`);

  // Top pairs
  console.log('\n' + '-'.repeat(80));
  console.log('TOP 20 MOST FREQUENT PAIRS');
  console.log('-'.repeat(80));
  for (const [key, pair] of sortedPairs.slice(0, 20)) {
    const mark = definedPairs.has(key) ? '✓' : '✗';
    console.log(`  ${mark} ${key.padEnd(40)} ${pair.count}`);
  }
}

// =============================================================================
// CLI
// =============================================================================

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    console.log(`
Extract Adjacent Tokens using TextMate Engine

Usage:
  npx tsx src/tools/extract-adjacency.ts              # Show top pairs
  npx tsx src/tools/extract-adjacency.ts --compare    # Compare with ADJACENCY_PAIRS
`);
    return;
  }

  const examplesDir = path.join(__dirname, '../../examples');
  const aggregated = await analyzeDirectory(examplesDir);

  if (args.includes('--compare')) {
    compareWithDefined(aggregated);
  } else {
    const sorted = [...aggregated.pairs.entries()].sort((a, b) => b[1].count - a[1].count);
    console.log(`\nTokens: ${aggregated.totalTokens}, Pairs: ${aggregated.pairs.size}\n`);
    for (const [key, pair] of sorted.slice(0, 50)) {
      console.log(`  ${key.padEnd(40)} ${pair.count}`);
    }
  }
}

main().catch(console.error);
