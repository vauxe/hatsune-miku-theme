//! Hatsune Miku Theme - Rust Showcase
//! All-Miku Synthesis: Every voice, one stage.

use std::collections::HashMap;
use std::sync::Arc;
use tokio::sync::RwLock;

// Constants: #E05096 (Magenta LED - Rhythm)
const CANONICAL_COLOR: &str = "#39C5BB";
const DEFAULT_BPM: u32 = 39;

// Macros: #FFD740 Bold (Meta Amber)
macro_rules! miku_log {
    ($($arg:tt)*) => {
        println!("[MIKU] {}", format!($($arg)*));
    };
}

/// Struct: #B2EBE7 Bold (Ice Teal - Append Light)
/// Lifetimes: #E05096 Italic (Pink)
#[derive(Debug, Clone)]
pub struct VoiceBank<'a> {
    pub name: &'a str,
    pub version: MikuVersion,
    pub frequency_range: (u32, u32),
}

/// Enum: #B2EBE7 Bold
/// Enum variants: #E05096
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MikuVersion {
    V2Classic,
    V3,
    V4X,
    NT,
    Sekai,
    V6AI,
}

/// Trait: #B2EBE7 Bold (Ice Teal)
pub trait Synthesizer {
    /// Method signature: #00BCD4 (NT Cyan)
    fn sing(&self, song: &str) -> Result<String, SynthError>;

    /// Associated type: #B2EBE7
    type Output;

    /// Default implementation
    fn get_canonical_color(&self) -> &'static str {
        CANONICAL_COLOR
    }
}

/// Error type: #B2EBE7 Bold
#[derive(Debug)]
pub enum SynthError {
    LowEnergy(u32),
    InvalidSong(String),
    StageNotReady,
}

/// Struct with generics and lifetimes
/// Generic T: #B2EBE7 Italic
/// Lifetime 'a: #E05096 Italic
pub struct DigitalDiva<'a, T>
where
    T: Clone + Send + Sync,
{
    name: &'a str,
    energy: Arc<RwLock<u32>>,
    voice_bank: VoiceBank<'a>,
    metadata: HashMap<String, T>,
}

// Impl block: #B2EBE7 Bold
impl<'a, T> DigitalDiva<'a, T>
where
    T: Clone + Send + Sync + 'static,
{
    /// Constructor: #00BCD4
    pub fn new(name: &'a str, voice_bank: VoiceBank<'a>) -> Self {
        Self {
            name,
            energy: Arc::new(RwLock::new(100)),
            voice_bank,
            metadata: HashMap::new(),
        }
    }

    /// Async method: #00BCD4 Italic
    pub async fn perform(&self, song: &str, bpm: u32) -> Result<(), SynthError> {
        // Keywords: #39C5BB Bold
        let energy = self.energy.read().await;

        // Operators: #39C5BB80
        if *energy < 10 {
            return Err(SynthError::LowEnergy(*energy));
        }

        // String literals: #9CCC65 (Negi Green)
        miku_log!("Performing '{}' at {} BPM", song, bpm);

        // Match expression: #39C5BB Bold
        match self.voice_bank.version {
            MikuVersion::V2Classic => self.classic_voice(song).await,
            MikuVersion::NT => self.nt_voice(song).await,
            MikuVersion::Sekai => self.sekai_voice(song).await,
            _ => self.default_voice(song).await,
        }
    }

    async fn classic_voice(&self, song: &str) -> Result<(), SynthError> {
        // Format string: #9CCC65
        let message = format!("V2 Classic: {}", song);
        println!("{}", message);
        Ok(())
    }

    async fn nt_voice(&self, song: &str) -> Result<(), SynthError> {
        println!("NT Modern: {}", song);
        Ok(())
    }

    async fn sekai_voice(&self, song: &str) -> Result<(), SynthError> {
        println!("SEKAI Stage: {}", song);
        Ok(())
    }

    async fn default_voice(&self, song: &str) -> Result<(), SynthError> {
        println!("Default: {}", song);
        Ok(())
    }
}

// Trait implementation
impl<'a, T> Synthesizer for DigitalDiva<'a, T>
where
    T: Clone + Send + Sync,
{
    type Output = String;

    fn sing(&self, song: &str) -> Result<String, SynthError> {
        // Self keyword: #E05096 Italic
        Ok(format!("{} sings: {}", self.name, song))
    }
}

/// Attribute macro: #FFD740 Italic
#[derive(Debug, Clone)]
#[allow(dead_code)]
struct AppendVoice {
    voice_type: AppendType,
    intensity: f32,
}

/// Enum for Append voicebanks
#[derive(Debug, Clone, Copy)]
enum AppendType {
    Dark,
    Soft,
    Light,
    Sweet,
    Vivid,
    Solid,
}

// Closure and iterator example
fn process_frequencies(freqs: &[u32]) -> Vec<u32> {
    // Closure: parameters in ||
    freqs
        .iter()
        .filter(|&&f| f >= 80 && f <= 1100)
        .map(|&f| f * 2)
        .collect()
}

// Main function
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Let binding: #39C5BB Bold
    let voice_bank = VoiceBank {
        name: "Hatsune Miku",
        version: MikuVersion::V2Classic,
        frequency_range: (80, 1100),
    };

    // Type annotation: #B2EBE7
    let miku: DigitalDiva<'_, String> = DigitalDiva::new("Miku", voice_bank);

    // Await: #39C5BB Bold
    miku.perform("World is Mine", 180).await?;

    // Macro invocation: #FFD740 Bold
    miku_log!("Performance complete!");

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_canonical_color() {
        assert_eq!(CANONICAL_COLOR, "#39C5BB");
    }

    #[tokio::test]
    async fn test_performance() {
        let vb = VoiceBank {
            name: "Test",
            version: MikuVersion::NT,
            frequency_range: (80, 1100),
        };
        let diva: DigitalDiva<'_, i32> = DigitalDiva::new("Test Miku", vb);
        let result = diva.perform("Test Song", 120).await;
        assert!(result.is_ok());
    }
}
