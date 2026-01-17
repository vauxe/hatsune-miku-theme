/**
 * Hatsune Miku Theme - JavaScript Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

// Constants: #E05096 (Magenta LED - Rhythm)
const CANONICAL_COLOR = "#39C5BB";
const DEFAULT_BPM = 39;
const VOICE_TYPES = ["dark", "soft", "light", "sweet", "vivid", "solid"];

// Class: #B2EBE7 Bold (Ice Teal)
class DigitalDiva {
  // Static property: #90B8B2 Underline
  static MODEL_ID = "CV01";

  // Private fields (ES2022)
  #energy = 100;
  #voiceBank;

  constructor(name = "Hatsune Miku", version = "V2") {
    this.name = name; // Property: #90B8B2
    this.version = version;
    this.#voiceBank = { name, version };
  }

  // Getter: #00BCD4 (NT Cyan)
  get energy() {
    return this.#energy;
  }

  // Setter: #00BCD4
  set energy(value) {
    this.#energy = Math.max(0, Math.min(100, value));
  }

  // Method: #00BCD4 (NT Cyan)
  async sing(songTitle, bpm = 120) {
    // Template literal: #9CCC65 with #FF80AB expressions
    const message = `Now playing: ${songTitle} at ${bpm} BPM`;

    // Keywords: #39C5BB Bold
    if (this.#energy < 10) {
      throw new Error("Low energy: Please recharge with leeks");
    }

    // Try-catch: Keywords #39C5BB Bold
    try {
      await this.#activateStage();
      console.log(message);
      return message;
    } catch (error) {
      // Error: #FF5370
      console.error("Performance failed:", error);
      throw error;
    } finally {
      this.#energy -= 10;
    }
  }

  // Private method
  async #activateStage() {
    return new Promise((resolve) => setTimeout(resolve, 100));
  }

  // Static method: #00BCD4 Underline
  static getCanonicalColor() {
    return CANONICAL_COLOR;
  }
}

// Object destructuring
const { name: divaName, version } = new DigitalDiva();

// Array destructuring
const [dark, soft, ...otherVoices] = VOICE_TYPES;

// Spread operator
const extendedTypes = [...VOICE_TYPES, "power"];

// Arrow function: #00BCD4
const calculateEnergy = (base, multiplier = 1) => base * multiplier;

// Higher-order function
const withLogging = (fn) => {
  return function (...args) {
    console.log(`Calling with args:`, args);
    return fn.apply(this, args);
  };
};

// Async/await with Promise.all
async function performConcert(songs) {
  const diva = new DigitalDiva();

  // Array methods: map, filter, reduce
  const validSongs = songs
    .filter((song) => song.length > 0)
    .map((song) => song.trim());

  // Promise.all: #00BCD4
  const results = await Promise.all(
    validSongs.map((song) => diva.sing(song))
  );

  return results;
}

// Generator function
function* songGenerator(songs) {
  for (const song of songs) {
    yield song;
  }
}

// Symbol
const MIKU_SYMBOL = Symbol("miku");

// Map and Set
const voiceBankMap = new Map([
  ["V2", { frequency: [80, 1100] }],
  ["NT", { frequency: [55, 1400] }],
]);

const uniqueVoices = new Set(VOICE_TYPES);

// WeakMap for private data
const privateData = new WeakMap();

// Proxy
const mikuProxy = new Proxy(new DigitalDiva(), {
  get(target, prop) {
    console.log(`Accessing: ${String(prop)}`);
    return Reflect.get(target, prop);
  },
});

// RegExp: #B388FF (Hologram Purple)
const mikuPattern = /(?<name>Miku)[-_]?(?<version>V\d+)?/gi;

// Optional chaining and nullish coalescing
const getVoiceFrequency = (bank) => {
  return bank?.frequency?.[0] ?? 80;
};

// Export (ES Modules)
export { DigitalDiva, performConcert, CANONICAL_COLOR };
export default DigitalDiva;
