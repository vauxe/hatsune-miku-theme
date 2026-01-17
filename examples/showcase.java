/**
 * Hatsune Miku Theme - Java Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

package com.mikutheme.showcase;

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.stream.*;

// Interface: #B2EBE7 Bold (Ice Teal - Append Light)
interface Synthesizer {
    // Method signature: #00BCD4 (NT Cyan)
    String sing(String song) throws PerformanceException;
    MikuVersion getVersion();
}

// Functional interface
@FunctionalInterface
interface SongProcessor {
    String process(String song);
}

// Enum: #B2EBE7 Bold, EnumMember: #E05096
enum MikuVersion {
    V2_CLASSIC("V2", 2007),
    V3("V3", 2013),
    V4X("V4X", 2016),
    NT("NT", 2020),
    SEKAI("SEKAI", 2020);

    // Fields: #90B8B2
    private final String code;
    private final int releaseYear;

    MikuVersion(String code, int releaseYear) {
        this.code = code;
        this.releaseYear = releaseYear;
    }

    public String getCode() {
        return code;
    }

    public int getReleaseYear() {
        return releaseYear;
    }
}

// Custom exception: #FF5370
class PerformanceException extends Exception {
    public PerformanceException(String message) {
        super(message);
    }
}

// Record (Java 16+): #B2EBE7 Bold
record VoiceBank(String name, MikuVersion version, int[] frequencyRange) {
    // Compact constructor
    public VoiceBank {
        Objects.requireNonNull(name, "Name cannot be null");
        if (frequencyRange.length != 2) {
            throw new IllegalArgumentException("Frequency range must have 2 elements");
        }
    }
}

// Sealed class (Java 17+)
sealed abstract class StageElement permits Performer, Prop, Light {
    abstract void activate();
}

final class Performer extends StageElement {
    @Override
    void activate() {
        System.out.println("Performer activated");
    }
}

final class Prop extends StageElement {
    @Override
    void activate() {
        System.out.println("Prop activated");
    }
}

final class Light extends StageElement {
    @Override
    void activate() {
        System.out.println("Light activated");
    }
}

// Generic class: #B2EBE7 Bold (Ice Teal)
public class DigitalDiva<T> implements Synthesizer {
    // Constants: #E05096 (Magenta LED - Rhythm)
    public static final String CANONICAL_COLOR = "#39C5BB";
    private static final int DEFAULT_BPM = 39;

    // Instance fields: #90B8B2
    private final String name;
    private final VoiceBank voiceBank;
    private int energy;
    private Map<String, T> metadata;

    // Constructor
    public DigitalDiva(String name, MikuVersion version) {
        this.name = name;
        this.voiceBank = new VoiceBank(name, version, new int[]{80, 1100});
        this.energy = 100;
        this.metadata = new HashMap<>();
    }

    // Method with annotation: #FFD740 Italic (Decorator)
    @Override
    public String sing(String song) throws PerformanceException {
        // Keywords: #39C5BB Bold
        if (energy < 10) {
            throw new PerformanceException("Low energy: Please recharge with leeks");
        }

        // String formatting: #9CCC65 (Negi Green)
        String message = String.format("[MIKU] Now singing: %s", song);
        System.out.println(message);

        energy -= 10;
        return message;
    }

    @Override
    public MikuVersion getVersion() {
        return voiceBank.version();
    }

    // Generic method: #00BCD4
    public <U extends Comparable<U>> U findMax(List<U> items) {
        return items.stream()
                .max(Comparator.naturalOrder())
                .orElseThrow();
    }

    // Varargs
    public void performMultiple(String... songs) throws PerformanceException {
        for (String song : songs) {
            sing(song);
        }
    }

    // Static method: #00BCD4 Underline
    public static String getCanonicalColor() {
        return CANONICAL_COLOR;
    }

    // Pattern matching (Java 21+)
    public String describeElement(StageElement element) {
        return switch (element) {
            case Performer p -> "Performer on stage";
            case Prop p -> "Stage prop";
            case Light l -> "Stage lighting";
        };
    }
}

// Main class for demonstration
class MikuShowcase {
    public static void main(String[] args) {
        // Local variable type inference (var)
        var miku = new DigitalDiva<String>("Hatsune Miku", MikuVersion.V2_CLASSIC);

        // Try-with-resources
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            // Lambda expression: #00BCD4
            SongProcessor processor = song -> song.toUpperCase();

            // Method reference: #00BCD4
            List<String> songs = List.of("Melt", "World is Mine", "Rolling Girl");
            songs.forEach(System.out::println);

            // Stream API
            List<String> processedSongs = songs.stream()
                    .filter(s -> s.length() > 4)
                    .map(String::toUpperCase)
                    .sorted()
                    .collect(Collectors.toList());

            // CompletableFuture
            CompletableFuture<String> future = CompletableFuture
                    .supplyAsync(() -> "World is Mine")
                    .thenApply(processor::process)
                    .exceptionally(ex -> "Error: " + ex.getMessage());

            // Optional
            Optional<String> firstSong = songs.stream().findFirst();
            firstSong.ifPresent(song -> System.out.println("First: " + song));

        } catch (Exception e) {
            // Error handling: #FF5370
            System.err.println("Error: " + e.getMessage());
        }

        // Text block (Java 15+)
        String json = """
                {
                    "name": "Hatsune Miku",
                    "version": "V2",
                    "color": "#39C5BB"
                }
                """;

        System.out.println(json);
    }
}
