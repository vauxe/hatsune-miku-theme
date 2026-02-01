/**
 * Hatsune Miku Theme - Swift Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

import Foundation

// MARK: - Constants

let canonicalColor = "#39C5BB"
let defaultBPM = 39
let maxEnergy = 100

// MARK: - Enums

enum MikuVersion: String, CaseIterable {
    case v2Classic = "V2"
    case v3 = "V3"
    case v4x = "V4X"
    case nt = "NT"
    case sekai = "SEKAI"

    var releaseYear: Int {
        switch self {
        case .v2Classic: return 2007
        case .v3: return 2013
        case .v4x: return 2016
        case .nt, .sekai: return 2020
        }
    }
}

// Enum with associated values
enum StageEvent {
    case start(timestamp: Date)
    case end(duration: TimeInterval)
    case error(message: String)
    case song(title: String, bpm: Int)
}

// MARK: - Protocols

protocol Synthesizer {
    var version: MikuVersion { get }
    func sing(_ song: String) throws -> String
}

protocol Configurable {
    associatedtype Configuration
    func configure(with config: Configuration)
}

// MARK: - Errors

enum PerformanceError: Error, LocalizedError {
    case lowEnergy(current: Int)
    case invalidSong(reason: String)

    var errorDescription: String? {
        switch self {
        case .lowEnergy(let current):
            return "Low energy (\(current)): Please recharge with leeks"
        case .invalidSong(let reason):
            return "Invalid song: \(reason)"
        }
    }
}

// MARK: - Structs

struct VoiceBank: Equatable, Hashable, Codable {
    let name: String
    let version: MikuVersion
    var frequencyRange: ClosedRange<Int>
    var isActive: Bool

    init(name: String, version: MikuVersion = .v2Classic) {
        self.name = name
        self.version = version
        self.frequencyRange = 80...1100
        self.isActive = true
    }
}

struct Configuration: Codable {
    var bpm: Int = 120
    var autoTune: Bool = true
    var effects: [String] = []
}

// MARK: - Classes

class DigitalDiva: Synthesizer, CustomStringConvertible {
    // Static property
    static let modelID = "CV01"

    // Stored properties
    let name: String
    let voiceBank: VoiceBank
    private(set) var currentSong: String?

    // Private stored property
    private var _energy: Int = maxEnergy

    // Computed property
    var energy: Int {
        get { _energy }
        set { _energy = max(0, min(maxEnergy, newValue)) }
    }

    var version: MikuVersion {
        voiceBank.version
    }

    // Property observer
    var performanceCount: Int = 0 {
        willSet { print("About to perform song #\(newValue + 1)") }
        didSet { print("Completed song #\(performanceCount)") }
    }

    // Lazy property
    lazy var stats: [String: Any] = {
        ["name": name, "version": voiceBank.version.rawValue]
    }()

    // CustomStringConvertible
    var description: String {
        "DigitalDiva(\(name), energy: \(energy))"
    }

    // Designated initializer
    init(name: String = "Hatsune Miku", version: MikuVersion = .v2Classic) {
        self.name = name
        self.voiceBank = VoiceBank(name: name, version: version)
    }

    // Convenience initializer
    convenience init(voiceBank: VoiceBank) {
        self.init(name: voiceBank.name, version: voiceBank.version)
    }

    // Required initializer (if subclassed)
    // required init(coder: NSCoder) { ... }

    // Methods
    func sing(_ song: String) throws -> String {
        guard energy >= 10 else {
            throw PerformanceError.lowEnergy(current: energy)
        }

        energy -= 10
        currentSong = song
        performanceCount += 1

        return "[MIKU] Now singing: \(song)"
    }

    func sing(_ song: String, at bpm: Int) throws -> String {
        let result = try sing(song)
        return "\(result) @ \(bpm)BPM"
    }

    // Static method
    static func getCanonicalColor() -> String {
        canonicalColor
    }

    // Subscript
    subscript(index: Int) -> String? {
        guard index >= 0 && index < MikuVersion.allCases.count else {
            return nil
        }
        return MikuVersion.allCases[index].rawValue
    }
}

// MARK: - Extensions

extension String {
    var mikuFormatted: String {
        "[MIKU] \(self)"
    }

    func truncated(to length: Int) -> String {
        if count <= length { return self }
        return String(prefix(length)) + "..."
    }
}

extension DigitalDiva: Configurable {
    typealias Configuration = [String: Any]

    func configure(with config: Configuration) {
        if let energy = config["energy"] as? Int {
            self.energy = energy
        }
    }
}

// MARK: - Generics

struct MetadataStore<T> {
    private var data: [String: T] = [:]

    mutating func set(_ value: T, forKey key: String) {
        data[key] = value
    }

    func get(_ key: String) -> T? {
        data[key]
    }

    func transform<U>(_ key: String, with transformer: (T) -> U) -> U? {
        guard let value = data[key] else { return nil }
        return transformer(value)
    }
}

// Generic function
func process<T: CustomStringConvertible>(_ items: [T]) -> [String] {
    items.map { $0.description }
}

// Where clause
func findMax<T: Comparable>(_ items: [T]) -> T? where T: Equatable {
    items.max()
}

// MARK: - Closures and Higher-Order Functions

func performConcert(
    songs: [String],
    performer: (String) throws -> String,
    onComplete: @escaping (Int) -> Void
) rethrows {
    for song in songs {
        let _ = try performer(song)
    }
    onComplete(songs.count)
}

// Trailing closure syntax example
func withLogging<T>(_ operation: () throws -> T) rethrows -> T {
    print("Starting operation...")
    let result = try operation()
    print("Operation complete")
    return result
}

// MARK: - Async/Await

@available(macOS 10.15, iOS 13, *)
actor StageManager {
    private var isActive = false

    func activate() {
        isActive = true
    }

    func deactivate() {
        isActive = false
    }

    func status() -> Bool {
        isActive
    }
}

@available(macOS 10.15, iOS 13, *)
func performAsync(_ song: String) async throws -> String {
    try await Task.sleep(nanoseconds: 100_000_000)
    return "[MIKU] \(song)"
}

// MARK: - Pattern Matching

func handleEvent(_ event: StageEvent) -> String {
    switch event {
    case .start(let timestamp):
        return "Started at \(timestamp)"
    case .end(let duration):
        return "Duration: \(duration)s"
    case .error(let message):
        return "Error: \(message)"
    case .song(let title, let bpm) where bpm > 150:
        return "Fast song: \(title)"
    case .song(let title, _):
        return "Song: \(title)"
    }
}

// MARK: - Property Wrappers

@propertyWrapper
struct Clamped {
    private var value: Int
    private let range: ClosedRange<Int>

    var wrappedValue: Int {
        get { value }
        set { value = min(max(newValue, range.lowerBound), range.upperBound) }
    }

    init(wrappedValue: Int, _ range: ClosedRange<Int>) {
        self.range = range
        self.value = min(max(wrappedValue, range.lowerBound), range.upperBound)
    }
}

struct Player {
    @Clamped(0...100) var energy: Int = 100
}

// MARK: - Result Builders

@resultBuilder
struct SongListBuilder {
    static func buildBlock(_ components: String...) -> [String] {
        components
    }

    static func buildOptional(_ component: [String]?) -> [String] {
        component ?? []
    }

    static func buildEither(first component: [String]) -> [String] {
        component
    }

    static func buildEither(second component: [String]) -> [String] {
        component
    }
}

func playlist(@SongListBuilder content: () -> [String]) -> [String] {
    content()
}

// MARK: - Main

func main() {
    let miku = DigitalDiva(name: "Hatsune Miku", version: .v2Classic)
    let songs = ["Melt", "World is Mine", "Love is War"]

    print("=== Performance Start ===")

    // Collection operations
    let uppercased = songs.map { $0.uppercased() }
    let longSongs = songs.filter { $0.count > 5 }
    let totalLength = songs.reduce(0) { $0 + $1.count }

    // Compact map
    let numbers: [String] = ["1", "2", "three"]
    let parsed: [Int] = numbers.compactMap { Int($0) }

    // For-in with enumerated
    for (index, song) in songs.enumerated() {
        do {
            let result = try miku.sing(song)
            print("\(index + 1). \(result)")
        } catch {
            print("Error: \(error.localizedDescription)")
            break
        }
    }

    // Guard statement
    func performSafe(_ song: String?) {
        guard let song = song, !song.isEmpty else {
            print("Invalid song")
            return
        }
        print("Playing: \(song)")
    }

    // Defer
    func withCleanup() {
        defer { print("Cleanup") }
        print("Performing...")
    }

    // Optional chaining
    let optionalMiku: DigitalDiva? = miku
    let songTitle = optionalMiku?.currentSong?.uppercased() ?? "No song"

    // Nil coalescing
    let defaultSong = miku.currentSong ?? "Default"

    // Using result builder
    let setlist = playlist {
        "Melt"
        "World is Mine"
        "Love is War"
    }

    print("Final energy: \(miku.energy)")
    print("=== Performance Complete ===")
}

main()
