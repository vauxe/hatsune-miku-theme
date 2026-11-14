"""
Hatsune Miku Theme - Python Showcase
No color screams. Every color sings.
"""

import asyncio
from dataclasses import dataclass
from typing import List, Optional, TypeVar, Generic

# Constants
MODEL_VERSION: str = "V2_CLASSIC"
DEFAULT_BPM: int = 39  # The sacred number

T = TypeVar("T")  # Type Parameter


@dataclass  # Decorator
class VoiceBank:
    """Types/Classes"""

    name: str  # Parameter type annotation
    version: str
    frequency_range: tuple[int, int] = (80, 1100)


class DigitalDiva(Generic[T]):
    """
    The primary interface for the Virtual Singer.

    Keywords
    Functions
    """

    # Class constant
    SIGNATURE_COLOR: str = "#39C5BB"

    def __init__(self, name: str = "Hatsune Miku") -> None:
        self.name = name  # Property
        self._energy = 39  # Number
        self._voice_banks: List[VoiceBank] = []

    @staticmethod  # Decorator
    def get_canonical_color() -> str:
        """Static method"""
        return "#39C5BB"

    async def sing(self, song_title: str, bpm: int = 120) -> Optional[str]:
        """
        Async function
        Parameters
        """

        # String
        message = f"Now Loading: {song_title}..."

        # Template expression
        formatted = f"BPM: {bpm} | Energy: {self._energy}"

        # Function call
        self._activate_stage_lights()

        # Keywords
        if self._energy > 0 and bpm >= DEFAULT_BPM:
            await self._sync_tempo(bpm)
            return message

        return None

    def _activate_stage_lights(self) -> None:
        # Operators
        total = self._energy * 2 + 100

        # Error
        if self._energy < 10:
            raise SystemError("Low Energy: Please recharge with Leeks.")

    async def _sync_tempo(self, bpm: int) -> None:
        # Magic method call
        await asyncio.sleep(60 / bpm)
        self.__update_state()

    def __update_state(self) -> None:
        """Magic/dunder method"""
        self._energy -= 1


class AppendVoice(DigitalDiva[VoiceBank]):
    """
    Inherited class demonstrating:
    - Class inheritance
    - Generic type parameter
    """

    # Class attributes
    VOICE_TYPES = ["dark", "soft", "light", "sweet", "vivid", "solid"]

    def __init__(self, voice_type: str = "sweet"):
        super().__init__(f"Miku {voice_type.title()}")
        self.voice_type = voice_type


# Regular expression
import re
MIKU_PATTERN = re.compile(r"(?P<name>Miku)[-_]?(?P<version>V\d+)?")


# Main execution
if __name__ == "__main__":
    # Instance creation
    miku = DigitalDiva[VoiceBank]()
    append_sweet = AppendVoice("sweet")

    # Async execution
    asyncio.run(miku.sing("World is Mine", bpm=180))
