<?php
/**
 * Hatsune Miku Theme - PHP Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

declare(strict_types=1);

namespace MikuTheme\Showcase;

use Exception;
use Generator;
use ArrayAccess;
use JsonSerializable;
use Stringable;

// Constants: #E05096 (Magenta LED - Rhythm)
const CANONICAL_COLOR = '#39C5BB';
const DEFAULT_BPM = 39;
const MAX_ENERGY = 100;

define('MIKU_MODEL_ID', 'CV01');

// Interface: #B2EBE7 Bold (Ice Teal - Append Light)
interface Synthesizer
{
    // Method signature: #00BCD4 (NT Cyan)
    public function sing(string $song): string;
    public function getVersion(): MikuVersion;
}

// Backed enum (PHP 8.1+): #B2EBE7 Bold, EnumMember: #E05096
enum MikuVersion: string
{
    case V2Classic = 'V2_CLASSIC';
    case V3 = 'V3';
    case V4X = 'V4X';
    case NT = 'NT';
    case Sekai = 'SEKAI';
    case V6AI = 'V6_AI';

    // Enum method
    public function getReleaseYear(): int
    {
        return match ($this) {
            self::V2Classic => 2007,
            self::V3 => 2013,
            self::V4X => 2016,
            self::NT, self::Sekai => 2020,
            self::V6AI => 2024,
        };
    }
}

// Unit enum
enum StageMode
{
    case Idle;
    case Performing;
    case Holographic;
}

// Attribute (PHP 8+): #FFD740 Italic (Meta Amber)
#[Attribute(Attribute::TARGET_CLASS | Attribute::TARGET_METHOD)]
class Vocaloid
{
    public function __construct(
        public readonly string $engineName = 'VOCALOID',
        public readonly int $releaseYear = 2007
    ) {}
}

// Custom exception: #FF5370
class PerformanceException extends Exception
{
    public function __construct(
        string $message,
        public readonly ?string $song = null
    ) {
        parent::__construct($message);
    }
}

// Trait
trait EnergyManagement
{
    private int $energy = MAX_ENERGY;

    public function getEnergy(): int
    {
        return $this->energy;
    }

    public function setEnergy(int $value): void
    {
        $this->energy = max(0, min(MAX_ENERGY, $value));
    }

    public function consumeEnergy(int $amount): void
    {
        $this->energy = max(0, $this->energy - $amount);
    }
}

// Readonly class (PHP 8.2+)
readonly class VoiceBank implements JsonSerializable
{
    // Constructor property promotion
    public function __construct(
        public string $name,
        public MikuVersion $version,
        public array $frequencyRange = [80, 1100]
    ) {}

    public function jsonSerialize(): array
    {
        return [
            'name' => $this->name,
            'version' => $this->version->value,
            'frequencyRange' => $this->frequencyRange,
        ];
    }
}

// Class: #B2EBE7 Bold (Ice Teal)
#[Vocaloid(engineName: 'VOCALOID2', releaseYear: 2007)]
class DigitalDiva implements Synthesizer, ArrayAccess, Stringable
{
    use EnergyManagement;

    // Static property: #90B8B2 Underline
    public static string $modelId = 'CV01';

    // Class constants
    private const VOICE_TYPES = ['dark', 'soft', 'light', 'sweet', 'vivid', 'solid'];

    // Properties: #90B8B2
    private StageMode $mode = StageMode::Idle;
    private array $metadata = [];

    // Constructor with property promotion
    public function __construct(
        public readonly string $name = 'Hatsune Miku',
        public readonly VoiceBank $voiceBank = new VoiceBank('Hatsune Miku', MikuVersion::V2Classic)
    ) {}

    // Method: #00BCD4 (NT Cyan)
    public function sing(string $song): string
    {
        // Keywords: #39C5BB Bold
        if ($this->energy < 10) {
            throw new PerformanceException(
                'Low energy: Please recharge with leeks',
                $song
            );
        }

        // String: #9CCC65 (Negi Green)
        // Variable in string: #FF80AB (Soft Pink)
        $message = "[MIKU] Now singing: {$song}";
        echo $message . PHP_EOL;

        $this->consumeEnergy(10);
        return $message;
    }

    public function getVersion(): MikuVersion
    {
        return $this->voiceBank->version;
    }

    // Static method: #00BCD4 Underline
    public static function getCanonicalColor(): string
    {
        return CANONICAL_COLOR;
    }

    // Magic method: #00BCD4 Bold
    public function __toString(): string
    {
        return sprintf('%s (%s)', $this->name, $this->voiceBank->version->value);
    }

    public function __get(string $name): mixed
    {
        return $this->metadata[$name] ?? null;
    }

    public function __set(string $name, mixed $value): void
    {
        $this->metadata[$name] = $value;
    }

    public function __isset(string $name): bool
    {
        return isset($this->metadata[$name]);
    }

    // ArrayAccess implementation
    public function offsetExists(mixed $offset): bool
    {
        return isset(self::VOICE_TYPES[$offset]);
    }

    public function offsetGet(mixed $offset): mixed
    {
        return self::VOICE_TYPES[$offset] ?? null;
    }

    public function offsetSet(mixed $offset, mixed $value): void
    {
        // Readonly - do nothing
    }

    public function offsetUnset(mixed $offset): void
    {
        // Readonly - do nothing
    }

    // Generator method
    public function voiceTypeGenerator(): Generator
    {
        foreach (self::VOICE_TYPES as $index => $type) {
            yield $index => $type;
        }
    }
}

// First-class callable syntax (PHP 8.1+)
$processor = strtoupper(...);

// Named arguments
$miku = new DigitalDiva(
    name: 'Hatsune Miku',
    voiceBank: new VoiceBank(
        name: 'Miku',
        version: MikuVersion::V2Classic,
        frequencyRange: [80, 1100]
    )
);

// Arrow function: #00BCD4
$getUpperSong = fn(string $song): string => strtoupper($song);

// Closure
$singWithPrefix = function (string $song) use ($miku): string {
    return "[{$miku->name}] " . $song;
};

// Array operations
$songs = ['Melt', 'World is Mine', 'Rolling Girl'];

// Array map with arrow function
$upperSongs = array_map(fn($s) => strtoupper($s), $songs);

// Array filter
$longSongs = array_filter($songs, fn($s) => strlen($s) > 4);

// Array reduce
$totalLength = array_reduce($songs, fn($carry, $s) => $carry + strlen($s), 0);

// Match expression (PHP 8+)
$description = match ($miku->getVersion()) {
    MikuVersion::V2Classic => 'The original classic',
    MikuVersion::NT => 'The modern NT engine',
    MikuVersion::Sekai => 'Project SEKAI version',
    default => 'Unknown version',
};

// Null-safe operator (PHP 8+)
$versionValue = $miku->voiceBank?->version?->value;

// Try-catch with specific types
try {
    foreach ($songs as $song) {
        $miku->sing($song);
    }
} catch (PerformanceException $e) {
    // Error: #FF5370
    echo "Performance error: {$e->getMessage()}" . PHP_EOL;
    if ($e->song !== null) {
        echo "Failed on: {$e->song}" . PHP_EOL;
    }
} finally {
    echo "Performance attempt completed" . PHP_EOL;
}

// Heredoc syntax
$json = <<<JSON
{
    "name": "Hatsune Miku",
    "version": "V2",
    "color": "#39C5BB"
}
JSON;

// Nowdoc syntax (no variable interpolation)
$template = <<<'TEMPLATE'
[MIKU] Template without $variable interpolation
TEMPLATE;

// Spread operator
$allSongs = [...$songs, 'Love is War', 'Ievan Polkka'];

// Union types and intersection types (PHP 8+)
function process(string|int $input): string|int
{
    return is_string($input) ? strtoupper($input) : $input * 2;
}

echo "Color: " . DigitalDiva::getCanonicalColor() . PHP_EOL;
echo "Diva: " . $miku . PHP_EOL;
echo $description . PHP_EOL;
