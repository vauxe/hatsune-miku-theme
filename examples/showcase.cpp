/**
 * Hatsune Miku Theme - C++ Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <optional>
#include <variant>
#include <functional>
#include <algorithm>
#include <concepts>
#include <coroutine>
#include <ranges>

// Namespace: #B2EBE7 Bold
namespace miku {

// Constants: #E05096 (Magenta LED - Rhythm)
constexpr const char* CANONICAL_COLOR = "#39C5BB";
constexpr int DEFAULT_BPM = 39;
constexpr int MAX_ENERGY = 100;

// Enum class: #B2EBE7 Bold, EnumMember: #E05096
enum class MikuVersion {
    V2_Classic,
    V3,
    V4X,
    NT,
    Sekai,
    V6_AI
};

enum class StageMode : uint8_t {
    Idle = 0,
    Performing = 1,
    Holographic = 2
};

// Concept (C++20): #B2EBE7 Italic
template<typename T>
concept Singable = requires(T t, std::string song) {
    { t.sing(song) } -> std::convertible_to<std::string>;
    { t.getVersion() } -> std::same_as<MikuVersion>;
};

// Forward declaration
class DigitalDiva;

// Struct: #B2EBE7 Bold (Ice Teal)
struct VoiceBank {
    std::string name;                    // Member: #90B8B2
    MikuVersion version;
    std::pair<int, int> frequencyRange;

    // Default member initializer
    bool isActive = false;

    // Spaceship operator (C++20)
    auto operator<=>(const VoiceBank&) const = default;
};

// Type alias
using FrequencyRange = std::pair<int, int>;
using SongList = std::vector<std::string>;
using VoiceBankPtr = std::shared_ptr<VoiceBank>;

// Template class: #B2EBE7 Bold (Ice Teal)
template<typename T>
class MetadataStore {
private:
    std::unordered_map<std::string, T> data_;

public:
    void set(const std::string& key, T value) {
        data_[key] = std::move(value);
    }

    std::optional<T> get(const std::string& key) const {
        if (auto it = data_.find(key); it != data_.end()) {
            return it->second;
        }
        return std::nullopt;
    }
};

// Interface class (abstract): #B2EBE7 Bold
class Synthesizer {
public:
    // Pure virtual method: #00BCD4 (NT Cyan)
    virtual std::string sing(const std::string& song) = 0;
    virtual MikuVersion getVersion() const = 0;

    // Virtual destructor
    virtual ~Synthesizer() = default;
};

// Class: #B2EBE7 Bold (Ice Teal)
class DigitalDiva : public Synthesizer {
public:
    // Static member: #90B8B2 Underline
    static inline const std::string MODEL_ID = "CV01";

private:
    std::string name_;
    VoiceBank voiceBank_;
    int energy_;
    StageMode mode_;
    MetadataStore<std::string> metadata_;

public:
    // Constructor with initializer list
    explicit DigitalDiva(std::string name = "Hatsune Miku",
                         MikuVersion version = MikuVersion::V2_Classic)
        : name_(std::move(name))
        , voiceBank_{name_, version, {80, 1100}, true}
        , energy_(MAX_ENERGY)
        , mode_(StageMode::Idle) {}

    // Copy constructor
    DigitalDiva(const DigitalDiva& other) = default;

    // Move constructor
    DigitalDiva(DigitalDiva&& other) noexcept = default;

    // Copy assignment
    DigitalDiva& operator=(const DigitalDiva& other) = default;

    // Move assignment
    DigitalDiva& operator=(DigitalDiva&& other) noexcept = default;

    // Destructor
    ~DigitalDiva() override = default;

    // Override method: #00BCD4
    std::string sing(const std::string& song) override {
        // Keywords: #39C5BB Bold
        if (energy_ < 10) {
            throw std::runtime_error("Low energy: Please recharge with leeks");
        }

        // String: #9CCC65 (Negi Green)
        std::string message = "[MIKU] Now singing: " + song;
        std::cout << message << std::endl;

        energy_ -= 10;
        return message;
    }

    // Const method
    [[nodiscard]] MikuVersion getVersion() const override {
        return voiceBank_.version;
    }

    // Getter with nodiscard attribute
    [[nodiscard]] int getEnergy() const noexcept {
        return energy_;
    }

    // Setter
    void setEnergy(int value) noexcept {
        energy_ = std::clamp(value, 0, MAX_ENERGY);
    }

    // Operator overloading
    bool operator==(const DigitalDiva& other) const {
        return name_ == other.name_ && voiceBank_ == other.voiceBank_;
    }

    // Static method: #00BCD4 Underline
    static constexpr const char* getCanonicalColor() {
        return CANONICAL_COLOR;
    }
};

// Template function: #00BCD4
template<Singable T>
void performConcert(T& performer, const SongList& songs) {
    // Range-based for with structured bindings
    for (const auto& song : songs) {
        try {
            performer.sing(song);
        } catch (const std::exception& e) {
            // Error: #FF5370
            std::cerr << "Error: " << e.what() << std::endl;
        }
    }
}

// Lambda expressions and std::function
inline auto createProcessor() {
    // Capture by value and reference
    int processCount = 0;

    return [processCount](const std::string& song) mutable -> std::string {
        ++processCount;
        return "[" + std::to_string(processCount) + "] " + song;
    };
}

// Variant and visitor pattern
using StageEvent = std::variant<
    struct StartEvent { int timestamp; },
    struct EndEvent { int duration; },
    struct ErrorEvent { std::string message; }
>;

struct EventVisitor {
    void operator()(const StartEvent& e) const {
        std::cout << "Started at: " << e.timestamp << std::endl;
    }
    void operator()(const EndEvent& e) const {
        std::cout << "Duration: " << e.duration << "ms" << std::endl;
    }
    void operator()(const ErrorEvent& e) const {
        std::cerr << "Error: " << e.message << std::endl;
    }
};

} // namespace miku

// Main function
int main() {
    using namespace miku;

    // Smart pointers
    auto miku = std::make_unique<DigitalDiva>("Hatsune Miku", MikuVersion::V2_Classic);
    auto mikuShared = std::make_shared<DigitalDiva>("Miku NT", MikuVersion::NT);

    // Initializer list
    SongList songs = {"Melt", "World is Mine", "Rolling Girl"};

    // Ranges (C++20)
    auto filteredSongs = songs
        | std::views::filter([](const auto& s) { return s.length() > 4; })
        | std::views::transform([](const auto& s) { return "[" + s + "]"; });

    for (const auto& song : filteredSongs) {
        std::cout << song << std::endl;
    }

    // Structured bindings
    VoiceBank bank{"Miku", MikuVersion::V2_Classic, {80, 1100}, true};
    auto [name, version, range, active] = bank;

    // If with initializer
    if (auto energy = miku->getEnergy(); energy > 50) {
        performConcert(*miku, songs);
    }

    // Optional handling
    MetadataStore<std::string> store;
    store.set("color", "#39C5BB");

    if (auto color = store.get("color")) {
        std::cout << "Color: " << *color << std::endl;
    }

    return 0;
}
