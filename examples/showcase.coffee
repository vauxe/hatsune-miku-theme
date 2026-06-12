# Hatsune Miku Theme - CoffeeScript Showcase
# No color screams. Every color sings.

# Constants
CANONICAL_COLOR = '#39C5BB'
DEFAULT_BPM = 39
MAX_ENERGY = 100

# String interpolation
greeting = "Welcome to #{CANONICAL_COLOR} stage!"

# Classes
class VoiceBank
  # Class property
  @MODEL_ID: 'CV01'

  # Constructor with default parameters
  constructor: (@name = 'Miku', @version = 'V2') ->
    @frequencyRange = [80, 1100]
    @active = yes

  # Instance method
  activate: ->
    console.log "Activating #{@name} #{@version}"
    @active = on

# Inheritance
class DigitalDiva extends VoiceBank
  # Private property (convention)
  _energy: MAX_ENERGY

  constructor: (name, version) ->
    super name, version
    @songs = []

  # Fat arrow preserves this
  sing: (song) =>
    throw new Error 'Low energy' if @_energy < 10
    @_energy -= 10
    "[MIKU] Now singing: #{song}"

  # Getter-like method
  getEnergy: -> @_energy

  # Async method
  performAsync: (song) ->
    new Promise (resolve, reject) =>
      setTimeout =>
        try
          result = @sing song
          resolve result
        catch err
          reject err
      , 100

# Object destructuring
processVoiceBank = ({name, version, frequencyRange}) ->
  console.log "Processing #{name} v#{version}"
  console.log "Range: #{frequencyRange[0]}-#{frequencyRange[1]} Hz"

# Array destructuring
[first, second, rest...] = ['Melt', 'World is Mine', 'Love is War', 'Rolling Girl']

# Splats
performMultiple = (songs...) ->
  for song in songs
    console.log "Playing: #{song}"

# Comprehensions
squares = (x * x for x in [1..10])
evenSquares = (x * x for x in [1..10] when x % 2 is 0)

# Object comprehension
songLengths =
  'Melt': 4.5
  'World is Mine': 4.1
  'Love is War': 3.8

longSongs = (name for name, length of songLengths when length > 4)

# Conditional expressions
energy = 50
status = if energy > 80
    'Full power'
  else if energy > 50
    'Normal'
  else
    'Low'

# Unless (negative if)
performIfReady = (diva) ->
  unless diva._energy < 10
    diva.sing 'Test Song'

# Switch/When
getVersionColor = (version) ->
  switch version
    when 'V2' then '#39C5BB'
    when 'NT' then '#00BCD4'
    when 'SEKAI' then '#33CCBB'
    else '#FFFFFF'

# Existential operator
config = null
configValue = config?.settings?.bpm ? DEFAULT_BPM

# Chained comparisons
isValidBpm = (bpm) -> 60 < bpm < 240

# String blocks
lyrics = """
  World is Mine

  The number one princess in the world
  Know how to treat me that way, got it?
"""

# Regex
mikuPattern = ///
  ^             # Start
  Miku          # Name
  [-_]?         # Optional separator
  (V\d+)?       # Optional version
  $             # End
///i

# Try/Catch
safeSing = (diva, song) ->
  try
    diva.sing song
  catch error
    console.error "Error: #{error.message}"
  finally
    console.log 'Attempt complete'

# Do keyword (immediately invoke)
counter = do ->
  count = 0
  ->
    count += 1
    count

# Loop constructs
loop
  break if counter() > 5

# Until loop
energy = 0
until energy >= MAX_ENERGY
  energy += 10

# For...of for objects
printConfig = (config) ->
  for key, value of config
    console.log "#{key}: #{value}"

# Range with step
countdown = (num for num in [10..1])
evens = (num for num in [0..20] by 2)

# Inline object
miku = name: 'Hatsune Miku', version: 'V2', color: CANONICAL_COLOR

# Fat arrow callback
fetchSong = (callback) ->
  setTimeout (-> callback 'World is Mine'), 100

# Thin arrow (doesn't bind this)
multiplier = (factor) ->
  (x) -> x * factor

double = multiplier 2

# Module pattern
MikuUtils = do ->
  private_count = 0

  formatSong: (title) -> "[MIKU] #{title}"
  getCount: -> private_count
  increment: -> private_count++

# Export (CommonJS style)
module?.exports = {DigitalDiva, VoiceBank, MikuUtils}
