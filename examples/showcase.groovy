#!/usr/bin/env groovy
/**
 * Hatsune Miku Theme - Groovy Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

package com.mikutheme.showcase

import groovy.transform.*
import groovy.json.JsonSlurper
import groovy.json.JsonBuilder
import java.time.LocalDateTime

// Constants
final CANONICAL_COLOR = '#39C5BB'
final DEFAULT_BPM = 39
final MAX_ENERGY = 100

// Enum
enum MikuVersion {
    V2_CLASSIC('V2', 2007),
    V3('V3', 2013),
    V4X('V4X', 2016),
    NT('NT', 2020),
    SEKAI('SEKAI', 2020)

    final String code
    final int releaseYear

    MikuVersion(String code, int releaseYear) {
        this.code = code
        this.releaseYear = releaseYear
    }
}

// Interface
interface Synthesizer {
    String sing(String song)
    MikuVersion getVersion()
}

// Trait (mixin)
trait Performable {
    boolean performing = false

    void startPerformance() {
        performing = true
        println 'Performance started'
    }

    void endPerformance() {
        performing = false
        println 'Performance ended'
    }
}

// POGO with AST transformations
@ToString(includeNames = true)
@EqualsAndHashCode
@TupleConstructor
class VoiceBank {
    String name
    MikuVersion version
    List<Integer> frequencyRange = [80, 1100]
    boolean active = true
}

// Main class with trait
@CompileStatic
class DigitalDiva implements Synthesizer, Performable {
    static final String MODEL_ID = 'CV01'

    final String name
    final VoiceBank voiceBank
    private int energy = MAX_ENERGY

    // Constructor
    DigitalDiva(String name = 'Hatsune Miku', MikuVersion version = MikuVersion.V2_CLASSIC) {
        this.name = name
        this.voiceBank = new VoiceBank(name: name, version: version)
    }

    // Getter/Setter
    int getEnergy() { energy }
    void setEnergy(int value) { energy = Math.max(0, Math.min(MAX_ENERGY, value)) }

    @Override
    MikuVersion getVersion() { voiceBank.version }

    @Override
    String sing(String song) {
        if (energy < 10) {
            throw new IllegalStateException('Low energy: Please recharge with leeks')
        }
        energy -= 10
        "[MIKU] Now singing: $song"
    }

    // Method with default parameter
    String singAt(String song, int bpm = 120) {
        "${sing(song)} @ ${bpm}BPM"
    }
}

// Groovy-specific features
class GroovyShowcase {

    // GString (string interpolation)
    static void stringFeatures() {
        def name = 'Miku'
        def version = 'V2'

        // Simple interpolation
        println "Hello, $name!"

        // Expression interpolation
        println "Version: ${version.toLowerCase()}"

        // Multi-line string
        def lyrics = '''
            World is Mine
            The number one princess in the world
        '''

        // GString with closure
        def template = "Energy: ${-> energy}"
    }

    // Closures
    static void closureFeatures() {
        // Basic closure
        def greet = { name -> "Hello, $name!" }
        println greet('Miku')

        // Implicit parameter 'it'
        def shout = { it.toUpperCase() }
        println shout('miku')

        // Closure with delegate
        def builder = {
            name 'Miku'
            version 'V2'
        }

        // Closure composition
        def add = { a, b -> a + b }
        def multiply = { a, b -> a * b }
        def addThenMultiply = add >> { it * 2 }
    }

    // Collection methods
    static void collectionFeatures() {
        def songs = ['Melt', 'World is Mine', 'Love is War', 'Rolling Girl']

        // Each
        songs.each { println it }

        // Collect (map)
        def uppercased = songs.collect { it.toUpperCase() }

        // Find
        def longSong = songs.find { it.length() > 10 }

        // FindAll (filter)
        def shortSongs = songs.findAll { it.length() <= 5 }

        // Inject (reduce)
        def totalLength = songs.inject(0) { sum, s -> sum + s.length() }

        // Spread operator
        def lengths = songs*.length()

        // Range
        def numbers = 1..10
        def reversed = 10..1

        // List slicing
        def firstTwo = songs[0..1]
        def lastTwo = songs[-2..-1]

        // Map literal
        def colorMap = [
            V2: '#39C5BB',
            NT: '#00BCD4',
            SEKAI: '#33CCBB'
        ]

        // Safe navigation
        def config = null
        def value = config?.settings?.bpm ?: DEFAULT_BPM

        // Elvis operator
        def name = null
        def displayName = name ?: 'Unknown'
    }

    // Operators
    static void operatorFeatures() {
        // Spaceship operator
        def compare = 'a' <=> 'b'

        // Regex operators
        def text = 'Hatsune Miku V2'
        def matches = text ==~ /.*Miku.*/
        def found = text =~ /Miku/

        // Membership
        def songs = ['Melt', 'Love is War']
        def hasMelt = 'Melt' in songs

        // Spread-dot operator
        def names = [[name: 'Miku'], [name: 'Rin']]
        def allNames = names*.name

        // Method pointer
        def list = [1, 2, 3]
        def adder = list.&add
    }

    // Builders
    static void builderFeatures() {
        // JSON builder
        def json = new JsonBuilder()
        json {
            name 'Hatsune Miku'
            version 'V2'
            colors(['#39C5BB', '#00BCD4'])
            stats {
                energy 100
                songs 50
            }
        }
        println json.toPrettyString()

        // MarkupBuilder would be similar for HTML/XML
    }

    // Meta-programming
    static void metaProgramming() {
        // Add method to String at runtime
        String.metaClass.toMikuFormat = {
            "[MIKU] ${delegate}"
        }

        println 'Hello'.toMikuFormat()

        // ExpandoMetaClass
        def expando = new Expando()
        expando.name = 'Miku'
        expando.greet = { "Hello, I'm ${name}!" }
    }

    // Category (temporary method injection)
    @Category(String)
    static class MikuCategory {
        String toMiku() {
            "[MIKU] $this"
        }
    }
}

// AST Transformations examples
@Immutable
class ImmutableSong {
    String title
    int bpm
}

@Singleton
class StageManager {
    void activate() { println 'Stage activated' }
}

@Memoized
String expensiveComputation(int n) {
    println "Computing for $n"
    (1..n).sum()
}

// Main script
def main() {
    def miku = new DigitalDiva()
    def songs = ['Melt', 'World is Mine', 'Love is War']

    miku.startPerformance()

    try {
        songs.each { song ->
            println miku.sing(song)
        }
    } catch (IllegalStateException e) {
        println "Error: ${e.message}"
    } finally {
        miku.endPerformance()
    }

    // Groovy truth
    assert miku.name  // Non-null is true
    assert songs      // Non-empty is true
    assert ![]        // Empty is false

    println 'Performance complete!'
}

main()
