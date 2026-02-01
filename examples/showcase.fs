// Hatsune Miku Theme - F# Showcase
// All-Miku Synthesis: Every voice, one stage.

namespace MikuTheme.Showcase

open System
open System.Threading.Tasks

// Module with constants
module Constants =
    [<Literal>]
    let CanonicalColor = "#39C5BB"

    [<Literal>]
    let DefaultBpm = 39

    let MaxEnergy = 100

// Discriminated Union (Enum-like)
type MikuVersion =
    | V2Classic
    | V3
    | V4X
    | NT
    | Sekai
    | V6AI

// Discriminated Union with data
type StageEvent =
    | Start of timestamp: DateTime
    | End of duration: TimeSpan
    | Error of message: string
    | Song of title: string * bpm: int

// Record type
type VoiceBank = {
    Name: string
    Version: MikuVersion
    FrequencyRange: int * int
    IsActive: bool
}

// Record with mutable field
type PerformanceState = {
    mutable Energy: int
    mutable CurrentSong: string option
}

// Type alias
type SongProcessor = string -> string
type AsyncSongProcessor = string -> Async<string>

// Interface
type ISynthesizer =
    abstract member Sing: string -> string
    abstract member Version: MikuVersion

// Class with interface
type DigitalDiva(name: string, ?version: MikuVersion) =
    let mutable energy = Constants.MaxEnergy
    let version = defaultArg version V2Classic
    let voiceBank = {
        Name = name
        Version = version
        FrequencyRange = (80, 1100)
        IsActive = true
    }

    // Static member
    static member val ModelId = "CV01" with get

    // Properties
    member _.Name = name
    member _.VoiceBank = voiceBank

    member _.Energy
        with get() = energy
        and set(value) = energy <- max 0 (min Constants.MaxEnergy value)

    // Methods
    member this.Sing(song: string) =
        if energy < 10 then
            failwith "Low energy: Please recharge with leeks"
        energy <- energy - 10
        sprintf "[MIKU] Now singing: %s" song

    // Async method
    member this.SingAsync(song: string) = async {
        do! Async.Sleep 100
        return this.Sing(song)
    }

    // Interface implementation
    interface ISynthesizer with
        member this.Sing(song) = this.Sing(song)
        member _.Version = version

    // Override
    override _.ToString() =
        sprintf "DigitalDiva(%s, %A)" name version

// Module with functions
module MikuUtils =
    // Simple function
    let formatSong title = sprintf "[MIKU] %s" title

    // Function with pattern matching
    let getVersionColor = function
        | V2Classic -> "#39C5BB"
        | NT -> "#00BCD4"
        | Sekai -> "#33CCBB"
        | _ -> "#FFFFFF"

    // Curried function
    let add x y = x + y
    let add10 = add 10

    // Pipeline operators
    let processTitle title =
        title
        |> String.map Char.ToUpper
        |> fun s -> s.Trim()
        |> formatSong

    // Composition operator
    let processAndPrint = formatSong >> printfn "%s"

    // Higher-order function
    let withLogging f x =
        printfn "Input: %A" x
        let result = f x
        printfn "Output: %A" result
        result

    // Partial application
    let loggedFormat = withLogging formatSong

    // Active pattern
    let (|ValidBpm|InvalidBpm|) bpm =
        if bpm >= 60 && bpm <= 240 then ValidBpm bpm
        else InvalidBpm

    // Parameterized active pattern
    let (|DivisibleBy|_|) divisor n =
        if n % divisor = 0 then Some(n / divisor)
        else None

// Pattern matching examples
module Patterns =
    // Match expression
    let handleEvent = function
        | Start ts -> sprintf "Started at %A" ts
        | End duration -> sprintf "Duration: %A" duration
        | Error msg -> sprintf "Error: %s" msg
        | Song (title, bpm) -> sprintf "Playing %s at %d BPM" title bpm

    // Guard clauses
    let categorizeEnergy energy =
        match energy with
        | e when e >= 80 -> "Full power"
        | e when e >= 50 -> "Normal"
        | e when e >= 20 -> "Low"
        | _ -> "Critical"

    // List patterns
    let rec processPlaylist = function
        | [] -> printfn "Playlist complete"
        | [last] -> printfn "Final song: %s" last
        | first :: rest ->
            printfn "Playing: %s" first
            processPlaylist rest

    // Tuple patterns
    let describeRange = function
        | (min, max) when min = max -> "Single frequency"
        | (min, max) when max - min < 100 -> "Narrow range"
        | _ -> "Wide range"

// Computation expressions
module Async =
    // Async workflow
    let performConcert (diva: DigitalDiva) songs = async {
        for song in songs do
            let! result = diva.SingAsync(song)
            printfn "%s" result
            do! Async.Sleep 500
    }

    // Parallel async
    let parallelPerform songs =
        songs
        |> List.map (fun s -> async { return MikuUtils.formatSong s })
        |> Async.Parallel

// Sequences and collections
module Collections =
    // Sequence expression
    let frequencies = seq {
        for i in 80 .. 10 .. 1100 do
            yield i
    }

    // List comprehension
    let squares = [ for x in 1..10 -> x * x ]

    // Array comprehension
    let cubes = [| for x in 1..10 -> x * x * x |]

    // Filtering
    let highFrequencies =
        frequencies
        |> Seq.filter (fun f -> f > 500)
        |> Seq.take 10
        |> Seq.toList

    // Mapping
    let formattedSongs songs =
        songs
        |> List.map MikuUtils.formatSong

    // Folding
    let totalDuration songs =
        songs
        |> List.fold (fun acc (_, duration) -> acc + duration) 0

// Type providers would go here (requires FSharp.Data)
// type JsonProvider = JsonProvider<"sample.json">

// Entry point
[<EntryPoint>]
let main args =
    // Let bindings
    let miku = DigitalDiva("Hatsune Miku", V2Classic)
    let songs = ["Melt"; "World is Mine"; "Love is War"]

    // Mutable binding
    let mutable count = 0

    // Pattern matching in let
    let (min, max) = miku.VoiceBank.FrequencyRange

    // Option handling
    let maybeSong: string option = Some "Rolling Girl"
    match maybeSong with
    | Some s -> printfn "Song: %s" s
    | None -> printfn "No song"

    // Result type
    let tryParseBpm (s: string) =
        match Int32.TryParse(s) with
        | true, n when n >= 60 && n <= 240 -> Ok n
        | true, _ -> Error "BPM out of range"
        | false, _ -> Error "Invalid number"

    // For loop
    for song in songs do
        printfn "%s" (miku.Sing(song))
        count <- count + 1

    // While loop
    while miku.Energy > 50 do
        ignore (miku.Sing("Loop song"))

    // Try-with
    try
        ignore (miku.Sing("Final song"))
    with
    | :? InvalidOperationException as ex ->
        printfn "Operation error: %s" ex.Message
    | ex ->
        printfn "Error: %s" ex.Message

    // Use for IDisposable
    // use reader = new StreamReader("file.txt")

    printfn "Performance complete! Songs: %d" count
    0 // Exit code
