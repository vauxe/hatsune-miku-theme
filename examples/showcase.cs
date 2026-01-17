/**
 * Hatsune Miku Theme - C# Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace MikuTheme.Showcase;

// Interface: #B2EBE7 Bold (Ice Teal - Append Light)
public interface ISynthesizer
{
    // Method signature: #00BCD4 (NT Cyan)
    Task<string> SingAsync(string song);
    MikuVersion Version { get; }
}

// Generic interface
public interface IMetadataStore<T> where T : class
{
    void Set(string key, T value);
    T? Get(string key);
}

// Enum: #B2EBE7 Bold, EnumMember: #E05096
public enum MikuVersion
{
    V2Classic = 0,
    V3 = 1,
    V4X = 2,
    NT = 3,
    Sekai = 4,
    V6AI = 5
}

[Flags]
public enum StageMode
{
    None = 0,
    Idle = 1 << 0,
    Performing = 1 << 1,
    Holographic = 1 << 2
}

// Record (C# 9+): #B2EBE7 Bold
public record VoiceBank(
    string Name,
    MikuVersion Version,
    (int Min, int Max) FrequencyRange
)
{
    // Computed property
    public bool IsActive { get; init; } = true;
}

// Record struct (C# 10+)
public readonly record struct FrequencyRange(int Min, int Max);

// Attribute: #FFD740 Italic (Meta Amber)
[AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
public class VocaloidAttribute : Attribute
{
    public string? EngineName { get; init; }
    public int ReleaseYear { get; init; }
}

// Custom exception: #FF5370
public class PerformanceException : Exception
{
    public PerformanceException(string message) : base(message) { }
    public PerformanceException(string message, Exception inner) : base(message, inner) { }
}

// Abstract class
public abstract class StageElement
{
    public abstract void Activate();

    // Virtual method with default implementation
    public virtual void Deactivate()
    {
        Console.WriteLine("Element deactivated");
    }
}

// Class: #B2EBE7 Bold (Ice Teal)
[Vocaloid(EngineName = "VOCALOID2", ReleaseYear = 2007)]
public class DigitalDiva : StageElement, ISynthesizer, IDisposable
{
    // Constants: #E05096 (Magenta LED - Rhythm)
    public const string CanonicalColor = "#39C5BB";
    private const int DefaultBpm = 39;
    private const int MaxEnergy = 100;

    // Static readonly field
    public static readonly IReadOnlyList<string> VoiceTypes =
        new[] { "dark", "soft", "light", "sweet", "vivid", "solid" };

    // Properties: #90B8B2
    public string Name { get; }
    public VoiceBank VoiceBank { get; }
    public MikuVersion Version => VoiceBank.Version;

    // Auto-property with init accessor
    public StageMode Mode { get; private set; } = StageMode.Idle;

    // Backing field pattern
    private int _energy = MaxEnergy;
    public int Energy
    {
        get => _energy;
        set => _energy = Math.Clamp(value, 0, MaxEnergy);
    }

    // Event: #90B8B2
    public event EventHandler<string>? SongStarted;
    public event EventHandler<string>? SongCompleted;

    // Constructor
    public DigitalDiva(string name = "Hatsune Miku", MikuVersion version = MikuVersion.V2Classic)
    {
        Name = name;
        VoiceBank = new VoiceBank(name, version, (80, 1100));
    }

    // Primary constructor (alternative style shown via record above)

    // Override method: #00BCD4
    public override void Activate()
    {
        Mode = StageMode.Performing;
        Console.WriteLine($"[MIKU] {Name} activated!");
    }

    // Async method: #00BCD4 (NT Cyan)
    public async Task<string> SingAsync(string song)
    {
        // Keywords: #39C5BB Bold
        if (Energy < 10)
        {
            throw new PerformanceException("Low energy: Please recharge with leeks");
        }

        // Raise event
        SongStarted?.Invoke(this, song);

        // String interpolation: #9CCC65 with #FF80AB expressions
        var message = $"[MIKU] Now singing: {song}";
        Console.WriteLine(message);

        // Await: Keywords #39C5BB Bold
        await Task.Delay(100);

        Energy -= 10;
        SongCompleted?.Invoke(this, song);

        return message;
    }

    // Expression-bodied member: #00BCD4
    public static string GetCanonicalColor() => CanonicalColor;

    // Generic method
    public T? GetMetadata<T>(string key) where T : class => default;

    // Operator overloading
    public static bool operator ==(DigitalDiva? left, DigitalDiva? right) =>
        left?.Name == right?.Name && left?.Version == right?.Version;

    public static bool operator !=(DigitalDiva? left, DigitalDiva? right) =>
        !(left == right);

    // Indexer
    public string this[int index] => VoiceTypes[index];

    // Deconstruct for pattern matching
    public void Deconstruct(out string name, out MikuVersion version)
    {
        name = Name;
        version = Version;
    }

    // IDisposable implementation
    private bool _disposed;

    public void Dispose()
    {
        if (!_disposed)
        {
            // Cleanup resources
            _disposed = true;
            GC.SuppressFinalize(this);
        }
    }

    // Override Equals and GetHashCode
    public override bool Equals(object? obj) =>
        obj is DigitalDiva other && this == other;

    public override int GetHashCode() =>
        HashCode.Combine(Name, Version);
}

// Extension methods
public static class DigitalDivaExtensions
{
    public static async Task PerformConcertAsync(
        this DigitalDiva diva,
        IEnumerable<string> songs)
    {
        foreach (var song in songs)
        {
            await diva.SingAsync(song);
        }
    }
}

// Static class
public static class MikuUtils
{
    // RegEx: #B388FF (Hologram Purple)
    private static readonly Regex MikuPattern =
        new(@"(?<name>Miku)[-_]?(?<version>V\d+)?", RegexOptions.Compiled);

    public static bool IsMikuRelated(string text) =>
        MikuPattern.IsMatch(text);
}

// Main program class
public class Program
{
    public static async Task Main(string[] args)
    {
        // Using declaration
        using var miku = new DigitalDiva("Hatsune Miku", MikuVersion.V2Classic);

        // Subscribe to events with lambda
        miku.SongStarted += (sender, song) =>
            Console.WriteLine($"Starting: {song}");

        // Collection expression (C# 12)
        List<string> songs = ["Melt", "World is Mine", "Rolling Girl"];

        // LINQ query syntax
        var longSongs = from song in songs
                        where song.Length > 4
                        orderby song
                        select song.ToUpper();

        // LINQ method syntax
        var shortSongs = songs
            .Where(s => s.Length <= 4)
            .Select(s => $"[{s}]")
            .ToList();

        // Pattern matching with switch expression
        var description = miku.Version switch
        {
            MikuVersion.V2Classic => "The original classic",
            MikuVersion.NT => "The modern NT engine",
            MikuVersion.Sekai => "Project SEKAI version",
            _ => "Unknown version"
        };

        Console.WriteLine(description);

        // Pattern matching with is
        if (miku is { Energy: > 50, Mode: StageMode.Idle })
        {
            miku.Activate();
        }

        // Deconstruction
        var (name, version) = miku;
        Console.WriteLine($"Name: {name}, Version: {version}");

        // Try-catch with when clause
        try
        {
            await miku.PerformConcertAsync(songs);
        }
        catch (PerformanceException ex) when (ex.Message.Contains("energy"))
        {
            Console.WriteLine($"Energy issue: {ex.Message}");
        }

        // Null-conditional and null-coalescing
        var voiceName = miku.VoiceBank?.Name ?? "Unknown";

        // Span and ranges
        ReadOnlySpan<char> colorSpan = DigitalDiva.CanonicalColor.AsSpan();
        var hexPart = DigitalDiva.CanonicalColor[1..];

        // Raw string literals (C# 11)
        var json = """
            {
                "name": "Hatsune Miku",
                "version": "V2",
                "color": "#39C5BB"
            }
            """;

        Console.WriteLine(json);
        Console.WriteLine($"Performance complete! Energy: {miku.Energy}");
    }
}
