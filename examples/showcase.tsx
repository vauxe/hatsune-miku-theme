/**
 * Hatsune Miku Theme - TypeScript/React Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

import React, { useState, useEffect, useCallback } from "react";

// Types/Interfaces: #B2EBE7 Bold (Ice Teal - Append Light)
interface VoiceBank {
  name: string;
  version: "V2" | "V3" | "V4X" | "NT" | "SEKAI";
  frequencyRange: [number, number];
}

type MikuVersion = "classic" | "append" | "nt" | "sekai";

// Generic type: #B2EBE7 Italic
interface SynthesizerProps<T extends VoiceBank> {
  voiceBank: T;
  onSing: (song: string) => void;
}

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

// Class: #B2EBE7 Bold (Ice Teal)
class DigitalDiva implements VoiceBank {
  // Properties: #90B8B2
  readonly name: string;
  readonly version: VoiceBank["version"];
  readonly frequencyRange: [number, number] = [80, 1100];

  // Static property: #90B8B2 Underline
  static readonly MODEL_ID = "CV01";

  constructor(name: string = "Hatsune Miku", version: VoiceBank["version"] = "V2") {
    this.name = name;
    this.version = version;
  }

  // Method: #00BCD4 (NT Cyan)
  sing(songTitle: string): string {
    // Template literal: #9CCC65 with #FF80AB expressions
    return `Now playing: ${songTitle} by ${this.name}`;
  }

  // Static method: #00BCD4 Underline
  static getCanonicalColor(): string {
    return CANONICAL_COLOR;
  }
}

// React Component: #B2EBE7 Bold (Ice Teal - JSX Component Tag)
const MikuSynthesizer: React.FC<SynthesizerProps<VoiceBank>> = ({
  voiceBank,
  onSing,
}) => {
  // Hooks: #00BCD4 (Functions)
  const [isPerforming, setIsPerforming] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [stageMode, setStageMode] = useState<StageMode>(StageMode.Idle);

  // useEffect: #00BCD4
  useEffect(() => {
    // Async operation inside effect
    const initializeStage = async () => {
      // Keywords: #39C5BB Bold
      if (isPerforming) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStageMode(StageMode.Holographic);
      }
    };

    initializeStage();

    // Cleanup function
    return () => {
      setStageMode(StageMode.Idle);
    };
  }, [isPerforming]);

  // useCallback: #00BCD4
  const handlePerformance = useCallback(
    async (song: string): Promise<void> => {
      setIsPerforming(true);
      setCurrentSong(song);

      // Try-catch: Keywords #39C5BB Bold
      try {
        await fetch("/api/stage/activate", {
          method: "POST",
          body: JSON.stringify({ song, voiceBank: voiceBank.name }),
        });
        onSing(song);
      } catch (error) {
        // Error handling: #FF5370
        console.error("Performance failed:", error);
        throw new Error(`Stage activation failed for: ${song}`);
      } finally {
        setIsPerforming(false);
      }
    },
    [voiceBank, onSing]
  );

  // JSX: Tags #39C5BB Bold, Attributes #4DD0E1 Italic
  return (
    <div className="miku-stage" data-mode={stageMode}>
      <header>
        <h1>{voiceBank.name}</h1>
        <span className="version-badge">{voiceBank.version}</span>
      </header>

      {/* Conditional rendering */}
      {isPerforming ? (
        <div className="performing">
          <p>Now singing: {currentSong}</p>
          <progress value={39} max={100} />
        </div>
      ) : (
        <button
          onClick={() => handlePerformance("World is Mine")}
          disabled={stageMode === StageMode.Holographic}
        >
          Start Performance
        </button>
      )}

      {/* List rendering */}
      <ul className="voice-types">
        {VOICE_TYPES.map((type, index) => (
          <li key={type} data-index={index}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Higher-order component
function withStageEffects<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  return function EnhancedComponent(props: P) {
    return (
      <div className="stage-wrapper">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// Type assertion and utility types
type ReadonlyVoiceBank = Readonly<VoiceBank>;
type PartialDiva = Partial<DigitalDiva>;

// Export
export { MikuSynthesizer, DigitalDiva, withStageEffects };
export type { VoiceBank, MikuVersion, SynthesizerProps };
