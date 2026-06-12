#=
Hatsune Miku Theme - Julia Showcase
No color screams. Every color sings.
=#

module MikuShowcase

using Dates
using Random

# Constants
const CANONICAL_COLOR = "#39C5BB"
const DEFAULT_BPM = 39
const MAX_ENERGY = 100

# Type alias
const FrequencyRange = Tuple{Int, Int}

# Enum
@enum MikuVersion begin
    V2Classic
    V3
    V4X
    NT
    Sekai
    V6AI
end

# Abstract type
abstract type Synthesizer end

# Struct (immutable by default)
struct VoiceBank
    name::String
    version::MikuVersion
    frequency_range::FrequencyRange

    # Inner constructor with validation
    function VoiceBank(name, version, frequency_range=(80, 1100))
        frequency_range[1] > 0 || error("Invalid frequency range")
        new(name, version, frequency_range)
    end
end

# Mutable struct
mutable struct DigitalDiva <: Synthesizer
    name::String
    voice_bank::VoiceBank
    energy::Int
    current_song::Union{String, Nothing}

    # Constructor
    function DigitalDiva(name::String="Hatsune Miku", version::MikuVersion=V2Classic)
        vb = VoiceBank(name, version)
        new(name, vb, MAX_ENERGY, nothing)
    end
end

# Parametric type
struct MetadataStore{T}
    data::Dict{String, T}
    MetadataStore{T}() where T = new(Dict{String, T}())
end

# Functions
function sing(diva::DigitalDiva, song::String)
    if diva.energy < 10
        throw(ErrorException("Low energy: Please recharge with leeks"))
    end
    diva.energy -= 10
    diva.current_song = song
    "[MIKU] Now singing: $song"
end

# Multiple dispatch
sing(diva::DigitalDiva, song::String, bpm::Int) = "$(sing(diva, song)) @ $(bpm)BPM"

# Generic function
function process(item::T) where T
    println("Processing item of type: $T")
    item
end

# Function with keyword arguments
function format_song(title::String; bpm::Int=120, uppercase::Bool=false)
    formatted = "$title @ $(bpm)BPM"
    uppercase ? uppercase(formatted) : formatted
end

# Anonymous functions
double = x -> x * 2
add = (x, y) -> x + y

# Higher-order functions
function with_logging(f)
    function(args...)
        println("Calling with: $args")
        result = f(args...)
        println("Result: $result")
        result
    end
end

# Do-block syntax
function perform_concert(diva::DigitalDiva, songs::Vector{String})
    map(songs) do song
        sing(diva, song)
    end
end

# Comprehensions
squares = [x^2 for x in 1:10]
even_squares = [x^2 for x in 1:10 if x % 2 == 0]
matrix = [i + j for i in 1:3, j in 1:3]

# Generator expressions
sum_of_squares = sum(x^2 for x in 1:1000)

# Macros
macro debug(expr)
    quote
        println("Expression: ", $(string(expr)))
        result = $(esc(expr))
        println("Result: ", result)
        result
    end
end

macro time_it(expr)
    quote
        t0 = time()
        result = $(esc(expr))
        println("Elapsed: ", time() - t0, " seconds")
        result
    end
end

# String macros
regex_pattern = r"Miku[-_]?(\w+)?"i
raw_string = raw"No \n escape"

# Broadcasting
frequencies = [80, 440, 880, 1100]
doubled_freqs = frequencies .* 2
formatted = "Freq: " .* string.(frequencies)

# Array operations
function array_showcase()
    # Vector
    songs = ["Melt", "World is Mine", "Love is War"]

    # Push/append
    push!(songs, "Rolling Girl")

    # Slicing
    first_two = songs[1:2]
    last_two = songs[end-1:end]

    # Matrix
    m = [1 2 3; 4 5 6; 7 8 9]

    # Linear algebra
    v = [1.0, 2.0, 3.0]
    dot_product = v' * v  # Transpose and multiply
end

# Control flow
function control_flow_showcase(value::Int)
    # If-elseif-else
    result = if value > 80
        "High"
    elseif value > 50
        "Medium"
    else
        "Low"
    end

    # Ternary
    status = value > 50 ? "Good" : "Bad"

    # Short-circuit
    value > 0 && println("Positive")
    value < 0 || println("Non-negative")

    # For loop
    for i in 1:5
        println("Beat $i")
    end

    # While loop
    count = 0
    while count < 5
        count += 1
    end

    # Enumerate
    songs = ["A", "B", "C"]
    for (i, song) in enumerate(songs)
        println("$i: $song")
    end

    result
end

# Exception handling
function safe_sing(diva::DigitalDiva, song::String)
    try
        sing(diva, song)
    catch e
        if isa(e, ErrorException)
            println("Error: $(e.msg)")
            nothing
        else
            rethrow()
        end
    finally
        println("Attempt complete")
    end
end

# Multiple return values
function get_stats(diva::DigitalDiva)
    diva.name, diva.energy, diva.voice_bank.version
end

# Named tuples
function create_config()
    (name="Miku", version=V2Classic, bpm=120)
end

# Channels and tasks (async)
function async_showcase()
    ch = Channel{String}(10)

    # Producer task
    @async begin
        for song in ["A", "B", "C"]
            put!(ch, song)
            sleep(0.1)
        end
        close(ch)
    end

    # Consumer
    for song in ch
        println("Received: $song")
    end
end

# Type stability and performance
function optimized_sum(arr::Vector{Float64})::Float64
    total = 0.0
    @simd for x in arr
        total += x
    end
    total
end

# Export public API
export DigitalDiva, VoiceBank, MikuVersion
export sing, perform_concert

end # module

# Main execution
using .MikuShowcase

function main()
    miku = DigitalDiva("Hatsune Miku", V2Classic)
    songs = ["Melt", "World is Mine", "Love is War"]

    println("=== Performance Start ===")

    for song in songs
        try
            result = sing(miku, song)
            println(result)
        catch e
            println("Error: ", e)
            break
        end
    end

    # Destructuring
    name, energy, version = MikuShowcase.get_stats(miku)
    println("Final energy: $energy")

    println("=== Performance Complete ===")
end

main()
