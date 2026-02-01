--[[
Hatsune Miku Theme - Lua Showcase
All-Miku Synthesis: Every voice, one stage.
]]

-- Module definition
local MikuShowcase = {}

-- Constants
local CANONICAL_COLOR = "#39C5BB"
local DEFAULT_BPM = 39
local MAX_ENERGY = 100

-- Version enum (as table)
local MikuVersion = {
    V2_CLASSIC = "V2",
    V3 = "V3",
    V4X = "V4X",
    NT = "NT",
    SEKAI = "SEKAI"
}

-- Simple class pattern using metatables
local VoiceBank = {}
VoiceBank.__index = VoiceBank

function VoiceBank.new(name, version, frequencyRange)
    local self = setmetatable({}, VoiceBank)
    self.name = name or "Unknown"
    self.version = version or MikuVersion.V2_CLASSIC
    self.frequencyRange = frequencyRange or {80, 1100}
    self.active = true
    return self
end

function VoiceBank:getInfo()
    return string.format("%s (%s)", self.name, self.version)
end

-- Main class
local DigitalDiva = {}
DigitalDiva.__index = DigitalDiva

-- Class constant
DigitalDiva.MODEL_ID = "CV01"

-- Constructor
function DigitalDiva.new(name, version)
    local self = setmetatable({}, DigitalDiva)
    self.name = name or "Hatsune Miku"
    self.voiceBank = VoiceBank.new(self.name, version)
    self._energy = MAX_ENERGY  -- Private by convention
    self.currentSong = nil
    return self
end

-- Getter
function DigitalDiva:getEnergy()
    return self._energy
end

-- Setter
function DigitalDiva:setEnergy(value)
    self._energy = math.max(0, math.min(MAX_ENERGY, value))
end

-- Method
function DigitalDiva:sing(song)
    if self._energy < 10 then
        error("Low energy: Please recharge with leeks")
    end
    self._energy = self._energy - 10
    self.currentSong = song
    return string.format("[MIKU] Now singing: %s", song)
end

-- Method with optional parameters
function DigitalDiva:singAt(song, bpm)
    bpm = bpm or 120
    local result = self:sing(song)
    return string.format("%s @ %dBPM", result, bpm)
end

-- Inheritance pattern
local AppendVoice = setmetatable({}, {__index = DigitalDiva})
AppendVoice.__index = AppendVoice

function AppendVoice.new(name, voiceType)
    local self = setmetatable(DigitalDiva.new(name, MikuVersion.V4X), AppendVoice)
    self.voiceType = voiceType or "sweet"
    return self
end

function AppendVoice:sing(song)
    local result = DigitalDiva.sing(self, song)
    return string.format("%s [%s]", result, self.voiceType)
end

-- Utility functions
local function formatSong(title)
    return "[MIKU] " .. title
end

-- Variadic function
local function printAll(...)
    local args = {...}
    for i, v in ipairs(args) do
        print(i, v)
    end
    return #args
end

-- Higher-order function
local function withLogging(fn)
    return function(...)
        print("Calling function...")
        local result = fn(...)
        print("Result:", result)
        return result
    end
end

-- Table operations
local function tableShowcase()
    -- Array-style table
    local songs = {"Melt", "World is Mine", "Love is War"}

    -- Insert
    table.insert(songs, "Rolling Girl")

    -- Remove
    local removed = table.remove(songs)

    -- Sort
    table.sort(songs)

    -- Concatenate
    local joined = table.concat(songs, ", ")

    -- Dictionary-style table
    local config = {
        name = "Miku",
        version = "V2",
        settings = {
            bpm = 120,
            autoTune = true
        }
    }

    -- Access
    local bpm = config.settings.bpm
    local version = config["version"]

    -- Iterate array
    for i, song in ipairs(songs) do
        print(i, song)
    end

    -- Iterate dictionary
    for key, value in pairs(config) do
        print(key, value)
    end

    return songs
end

-- String operations
local function stringShowcase()
    local title = "World is Mine"

    -- Length
    local len = #title

    -- Concatenation
    local formatted = "[MIKU] " .. title

    -- Pattern matching (Lua patterns, not regex)
    local pattern = "(%w+)%s+(%w+)"
    local word1, word2 = string.match(title, pattern)

    -- Substitution
    local replaced = string.gsub(title, "World", "Stage")

    -- Find
    local start, finish = string.find(title, "Mine")

    -- Format
    local output = string.format("Playing: %s (length: %d)", title, len)

    -- Byte/char operations
    local firstByte = string.byte(title, 1)
    local char = string.char(65)  -- 'A'

    return output
end

-- Coroutines
local function coroutineShowcase()
    local performer = coroutine.create(function(songs)
        for _, song in ipairs(songs) do
            print("Singing:", song)
            coroutine.yield(song)
        end
        return "Concert complete"
    end)

    local songs = {"A", "B", "C"}

    -- Resume coroutine
    local status, result = coroutine.resume(performer, songs)
    while coroutine.status(performer) ~= "dead" do
        status, result = coroutine.resume(performer)
        if status then
            print("Yielded:", result)
        end
    end
end

-- Producer-consumer with coroutines
local function producerConsumer()
    local function producer()
        return coroutine.create(function()
            for i = 1, 5 do
                coroutine.yield("Song " .. i)
            end
        end)
    end

    local function consumer(prod)
        while true do
            local status, value = coroutine.resume(prod)
            if not status or value == nil then break end
            print("Consumed:", value)
        end
    end

    consumer(producer())
end

-- Error handling
local function safeCall(fn, ...)
    local status, result = pcall(fn, ...)
    if status then
        return result
    else
        print("Error:", result)
        return nil
    end
end

-- xpcall with traceback
local function safeCallWithTrace(fn, ...)
    local function errorHandler(err)
        return debug.traceback(err, 2)
    end

    local args = {...}
    local status, result = xpcall(function()
        return fn(table.unpack(args))
    end, errorHandler)

    return status, result
end

-- Weak tables (for caching)
local cache = setmetatable({}, {__mode = "v"})

-- Metamethods showcase
local Vector = {}
Vector.__index = Vector

function Vector.new(x, y)
    return setmetatable({x = x, y = y}, Vector)
end

function Vector.__add(a, b)
    return Vector.new(a.x + b.x, a.y + b.y)
end

function Vector.__tostring(v)
    return string.format("(%d, %d)", v.x, v.y)
end

function Vector.__eq(a, b)
    return a.x == b.x and a.y == b.y
end

-- Module export
MikuShowcase.VoiceBank = VoiceBank
MikuShowcase.DigitalDiva = DigitalDiva
MikuShowcase.AppendVoice = AppendVoice
MikuShowcase.MikuVersion = MikuVersion
MikuShowcase.formatSong = formatSong

-- Main execution
local function main()
    local miku = DigitalDiva.new("Hatsune Miku", MikuVersion.V2_CLASSIC)
    local songs = {"Melt", "World is Mine", "Love is War"}

    print("=== Performance Start ===")

    for _, song in ipairs(songs) do
        local status, result = pcall(function()
            return miku:sing(song)
        end)

        if status then
            print(result)
        else
            print("Error:", result)
            break
        end
    end

    print(string.format("Final energy: %d", miku:getEnergy()))
    print("=== Performance Complete ===")
end

main()

return MikuShowcase
