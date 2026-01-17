# Hatsune Miku Theme - Ruby Showcase
# All-Miku Synthesis: Every voice, one stage.

# frozen_string_literal: true

require 'json'
require 'singleton'

# Constants: #E05096 (Magenta LED - Rhythm)
CANONICAL_COLOR = '#39C5BB'
DEFAULT_BPM = 39
MAX_ENERGY = 100

# Module: #B2EBE7 Bold (Ice Teal)
module MikuTheme
  # Module constant
  VERSION = '2.0.0'

  # Module method: #00BCD4 (NT Cyan)
  def self.canonical_color
    CANONICAL_COLOR
  end

  # Mixin module
  module EnergyManagement
    attr_reader :energy

    def energy=(value)
      @energy = [[value, 0].max, MAX_ENERGY].min
    end

    def consume_energy(amount)
      self.energy -= amount
    end

    def low_energy?
      @energy < 10
    end
  end

  # Concern-like module
  module Singable
    def sing(song)
      raise NotImplementedError, 'Subclass must implement #sing'
    end
  end
end

# Symbol: #E05096
MIKU_VERSIONS = %i[v2_classic v3 v4x nt sekai v6_ai].freeze

# Struct: #B2EBE7 Bold
VoiceBank = Struct.new(:name, :version, :frequency_range, keyword_init: true) do
  # Struct method
  def active?
    true
  end

  def to_json(*args)
    {
      name: name,
      version: version,
      frequency_range: frequency_range
    }.to_json(*args)
  end
end

# Custom exception: #FF5370
class PerformanceError < StandardError
  attr_reader :song

  def initialize(message, song: nil)
    super(message)
    @song = song
  end
end

# Class: #B2EBE7 Bold (Ice Teal)
class DigitalDiva
  include MikuTheme::EnergyManagement
  include MikuTheme::Singable

  # Class variable
  @@performance_count = 0

  # Class instance variable
  @model_id = 'CV01'

  class << self
    # Class accessor: #90B8B2 Underline
    attr_accessor :model_id

    # Class method: #00BCD4 Underline
    def canonical_color
      CANONICAL_COLOR
    end

    def performance_count
      @@performance_count
    end
  end

  # Constants within class
  VOICE_TYPES = %w[dark soft light sweet vivid solid].freeze

  # Attributes: #90B8B2
  attr_reader :name, :voice_bank, :mode

  # Constructor
  def initialize(name: 'Hatsune Miku', version: :v2_classic)
    @name = name
    @voice_bank = VoiceBank.new(
      name: name,
      version: version,
      frequency_range: [80, 1100]
    )
    @energy = MAX_ENERGY
    @mode = :idle
    @metadata = {}
  end

  # Instance method: #00BCD4 (NT Cyan)
  def sing(song)
    # Keywords: #39C5BB Bold
    if low_energy?
      raise PerformanceError.new(
        'Low energy: Please recharge with leeks',
        song: song
      )
    end

    # String interpolation: #9CCC65 with #FF80AB expressions
    message = "[MIKU] Now singing: #{song}"
    puts message

    consume_energy(10)
    @@performance_count += 1

    message
  end

  # Getter with custom logic
  def version
    voice_bank.version
  end

  # Predicate method
  def performing?
    @mode == :performing
  end

  # Bang method (mutates state)
  def activate!
    @mode = :performing
    self
  end

  # Method with block: #00BCD4
  def perform_concert(songs, &block)
    songs.each do |song|
      result = sing(song)
      block&.call(result)
    end
  end

  # Method yielding multiple values
  def each_voice_type
    return enum_for(:each_voice_type) unless block_given?

    VOICE_TYPES.each_with_index do |type, index|
      yield type, index
    end
  end

  # Method missing for dynamic attributes
  def method_missing(method_name, *args)
    if method_name.to_s.end_with?('=')
      key = method_name.to_s.chomp('=').to_sym
      @metadata[key] = args.first
    elsif @metadata.key?(method_name)
      @metadata[method_name]
    else
      super
    end
  end

  def respond_to_missing?(method_name, include_private = false)
    method_name.to_s.end_with?('=') ||
      @metadata.key?(method_name) ||
      super
  end

  # Operator overloading
  def ==(other)
    other.is_a?(DigitalDiva) &&
      name == other.name &&
      version == other.version
  end

  # Array-like access
  def [](index)
    VOICE_TYPES[index]
  end

  # String representation
  def to_s
    "#{name} (#{version})"
  end

  def inspect
    "#<DigitalDiva name=#{name.inspect} version=#{version.inspect} energy=#{energy}>"
  end

  # Spaceship operator for comparison
  def <=>(other)
    energy <=> other.energy
  end

  # Private methods
  private

  def log_performance(song)
    puts "[LOG] Performed: #{song}"
  end

  # Protected methods
  protected

  def internal_state
    { energy: @energy, mode: @mode }
  end
end

# Singleton class
class StageManager
  include Singleton

  attr_reader :performers

  def initialize
    @performers = []
  end

  def add_performer(performer)
    @performers << performer
  end
end

# Lambda and Proc
process_song = ->(song) { song.upcase }
format_song = proc { |song| "[#{song}]" }

# Main execution
if __FILE__ == $PROGRAM_NAME
  # Instance creation
  miku = DigitalDiva.new(name: 'Hatsune Miku', version: :v2_classic)

  # Array literal
  songs = %w[Melt World\ is\ Mine Rolling\ Girl]

  # Array methods with blocks
  long_songs = songs.select { |s| s.length > 4 }
  upper_songs = songs.map(&:upcase)
  total_length = songs.reduce(0) { |sum, s| sum + s.length }

  # Hash with symbol keys
  config = {
    color: CANONICAL_COLOR,
    bpm: DEFAULT_BPM,
    enabled: true
  }

  # Safe navigation operator
  version_str = miku.voice_bank&.version&.to_s

  # Pattern matching (Ruby 3.0+)
  case miku.version
  in :v2_classic
    puts 'The original classic'
  in :nt | :sekai
    puts 'Modern engine'
  else
    puts 'Other version'
  end

  # Begin-rescue-ensure
  begin
    miku.perform_concert(songs) do |result|
      puts "Completed: #{result}"
    end
  rescue PerformanceError => e
    # Error: #FF5370
    warn "Performance error: #{e.message}"
    warn "Failed on: #{e.song}" if e.song
  ensure
    puts 'Performance attempt completed'
  end

  # Heredoc
  json = <<~JSON
    {
      "name": "Hatsune Miku",
      "version": "V2",
      "color": "#{CANONICAL_COLOR}"
    }
  JSON

  # Endless method (Ruby 3.0+)
  double = ->(x) { x * 2 }

  # Enumerator
  voice_enum = miku.each_voice_type
  puts voice_enum.map { |type, idx| "#{idx}: #{type}" }.join(', ')

  puts "Color: #{DigitalDiva.canonical_color}"
  puts "Diva: #{miku}"
  puts "Performances: #{DigitalDiva.performance_count}"
end
