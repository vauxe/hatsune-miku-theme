/**
 * Hatsune Miku Theme - TypeScript Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

// Types/Interfaces: #B2EBE7 Bold (Ice Teal - Append Light)
interface VoiceBank {
  name: string;
  version: MikuVersion;
  frequencyRange: readonly [number, number];
}

// Type alias
type MikuVersion = "V2" | "V3" | "V4X" | "NT" | "SEKAI";

// Generic interface: #B2EBE7 Italic
interface Synthesizer<T extends VoiceBank> {
  voiceBank: T;
  sing(song: string): Promise<string>;
}

// Utility types
type ReadonlyVoiceBank = Readonly<VoiceBank>;
type PartialVoiceBank = Partial<VoiceBank>;
type VoiceBankKeys = keyof VoiceBank;

// Constants: #E05096 (Magenta LED - Rhythm)
const CANONICAL_COLOR = "#39C5BB" as const;
const DEFAULT_BPM = 39;
const VOICE_TYPES = ["dark", "soft", "light", "sweet", "vivid", "solid"] as const;

// Enum: #B2EBE7 Bold, EnumMember: #E05096
enum StageMode {
  Idle = 0,
  Performing = 1,
  Holographic = 2,
}

// Const enum (inlined at compile time)
const enum VoiceQuality {
  Low = "low",
  Medium = "medium",
  High = "high",
}

// Class: #B2EBE7 Bold (Ice Teal)
class DigitalDiva implements Synthesizer<VoiceBank> {
  // Properties: #90B8B2
  readonly name: string;
  readonly voiceBank: VoiceBank;

  // Private fields
  #energy: number = 100;
  private _stageMode: StageMode = StageMode.Idle;

  // Static property: #90B8B2 Underline
  static readonly MODEL_ID: string = "CV01";

  constructor(name: string = "Hatsune Miku", version: MikuVersion = "V2") {
    this.name = name;
    this.voiceBank = {
      name,
      version,
      frequencyRange: [80, 1100],
    };
  }

  // Getter: #00BCD4 (NT Cyan)
  get energy(): number {
    return this.#energy;
  }

  // Setter: #00BCD4
  set energy(value: number) {
    this.#energy = Math.max(0, Math.min(100, value));
  }

  // Method: #00BCD4 (NT Cyan)
  async sing(songTitle: string): Promise<string> {
    // Template literal: #9CCC65 with #FF80AB expressions
    const message = `Now playing: ${songTitle}`;

    // Keywords: #39C5BB Bold
    if (this.#energy < 10) {
      throw new Error("Low energy");
    }

    // Type guard
    if (this.isPerforming()) {
      await this.waitForStage();
    }

    this.#energy -= 10;
    return message;
  }

  // Type predicate
  isPerforming(): this is DigitalDiva & { _stageMode: StageMode.Performing } {
    return this._stageMode === StageMode.Performing;
  }

  private async waitForStage(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Static method: #00BCD4 Underline
  static getCanonicalColor(): typeof CANONICAL_COLOR {
    return CANONICAL_COLOR;
  }
}

// Generic function: #00BCD4
function createVoiceBank<T extends string>(
  name: T,
  version: MikuVersion
): VoiceBank & { name: T } {
  return {
    name,
    version,
    frequencyRange: [80, 1100],
  };
}

// Function overloads
function processVoice(input: string): string;
function processVoice(input: number): number;
function processVoice(input: string | number): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  return input * 2;
}

// Conditional types
type IsString<T> = T extends string ? true : false;
type ExtractVersion<T> = T extends { version: infer V } ? V : never;

// Mapped types
type OptionalVoiceBank = {
  [K in keyof VoiceBank]?: VoiceBank[K];
};

// Template literal types
type EventName = `on${Capitalize<"sing" | "dance" | "perform">}`;

// Discriminated union
type StageEvent =
  | { type: "start"; timestamp: number }
  | { type: "end"; duration: number }
  | { type: "error"; message: string };

function handleEvent(event: StageEvent): void {
  // Narrowing with switch
  switch (event.type) {
    case "start":
      console.log(`Started at ${event.timestamp}`);
      break;
    case "end":
      console.log(`Duration: ${event.duration}ms`);
      break;
    case "error":
      console.error(event.message);
      break;
  }
}

// Decorator (experimental)
function logged<T extends { new (...args: any[]): object }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      console.log("Creating instance");
      super(...args);
    }
  };
}

// Namespace
namespace MikuUtils {
  export function formatSong(title: string): string {
    return `[MIKU] ${title}`;
  }
}

// Module augmentation
declare module "./showcase" {
  interface VoiceBank {
    customField?: string;
  }
}

// Assertion functions
function assertIsVoiceBank(value: unknown): asserts value is VoiceBank {
  if (typeof value !== "object" || value === null) {
    throw new Error("Not a VoiceBank");
  }
}

// Export
export { DigitalDiva, createVoiceBank, StageMode };
export type { VoiceBank, MikuVersion, Synthesizer };
