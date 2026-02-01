/// Hatsune Miku Theme - Dart Showcase
/// All-Miku Synthesis: Every voice, one stage.

import 'dart:async';
import 'dart:collection';
import 'dart:convert';

// Constants
const String canonicalColor = '#39C5BB';
const int defaultBpm = 39;
const maxEnergy = 100;

// Enum with values
enum MikuVersion {
  v2Classic('V2', 2007),
  v3('V3', 2013),
  v4x('V4X', 2016),
  nt('NT', 2020),
  sekai('SEKAI', 2020);

  final String code;
  final int releaseYear;

  const MikuVersion(this.code, this.releaseYear);
}

// Typedef for function types
typedef SongProcessor = String Function(String song);
typedef AsyncSongProcessor = Future<String> Function(String song);

// Mixin
mixin Performable {
  bool _isPerforming = false;

  void startPerformance() {
    _isPerforming = true;
    print('Performance started');
  }

  void endPerformance() {
    _isPerforming = false;
    print('Performance ended');
  }
}

// Abstract class
abstract class Synthesizer {
  String sing(String song);
  MikuVersion get version;

  // Factory constructor in abstract class
  factory Synthesizer.create(String name) = DigitalDiva;
}

// Interface (implicit)
abstract interface class Configurable {
  void configure(Map<String, dynamic> config);
}

// Record class (Dart 3.0+)
class VoiceBank {
  final String name;
  final MikuVersion version;
  final (int, int) frequencyRange;

  const VoiceBank({
    required this.name,
    required this.version,
    this.frequencyRange = (80, 1100),
  });

  // Named constructor
  VoiceBank.classic(String name)
      : this(name: name, version: MikuVersion.v2Classic);

  // Redirecting constructor
  VoiceBank.nt(String name) : this(name: name, version: MikuVersion.nt);
}

// Main class with mixin
class DigitalDiva with Performable implements Synthesizer, Configurable {
  // Static constant
  static const String modelId = 'CV01';

  // Private fields
  final String _name;
  int _energy = maxEnergy;
  late final VoiceBank _voiceBank;

  // Nullable field
  String? _currentSong;

  // Getter
  String get name => _name;
  int get energy => _energy;

  @override
  MikuVersion get version => _voiceBank.version;

  // Setter
  set energy(int value) {
    _energy = value.clamp(0, maxEnergy);
  }

  // Constructor with initializer list
  DigitalDiva(this._name, [MikuVersion version = MikuVersion.v2Classic])
      : _voiceBank = VoiceBank(name: _name, version: version) {
    print('Created $_name');
  }

  // Named constructor
  DigitalDiva.withVoiceBank(VoiceBank voiceBank)
      : _name = voiceBank.name,
        _voiceBank = voiceBank;

  // Factory constructor
  factory DigitalDiva.fromJson(Map<String, dynamic> json) {
    return DigitalDiva(
      json['name'] as String,
      MikuVersion.values.firstWhere(
        (v) => v.code == json['version'],
        orElse: () => MikuVersion.v2Classic,
      ),
    );
  }

  @override
  String sing(String song) {
    if (_energy < 10) {
      throw StateError('Low energy: Please recharge with leeks');
    }
    _currentSong = song;
    _energy -= 10;
    return '[MIKU] Now singing: $song';
  }

  // Async method
  Future<String> singAsync(String song) async {
    await Future.delayed(const Duration(milliseconds: 100));
    return sing(song);
  }

  // Stream generator
  Stream<String> performConcert(List<String> songs) async* {
    for (final song in songs) {
      yield sing(song);
      await Future.delayed(const Duration(milliseconds: 500));
    }
  }

  @override
  void configure(Map<String, dynamic> config) {
    if (config.containsKey('energy')) {
      energy = config['energy'] as int;
    }
  }

  // Operator overloading
  @override
  bool operator ==(Object other) =>
      other is DigitalDiva && other._name == _name && other.version == version;

  @override
  int get hashCode => Object.hash(_name, version);

  // ToString
  @override
  String toString() => 'DigitalDiva($_name, ${version.code})';
}

// Extension methods
extension StringExtension on String {
  String toMikuFormat() => '[MIKU] $this';

  bool get isMikuRelated => toLowerCase().contains('miku');
}

// Generic class
class MetadataStore<T> {
  final Map<String, T> _data = {};

  void set(String key, T value) => _data[key] = value;
  T? get(String key) => _data[key];

  // Generic method
  R transform<R>(String key, R Function(T) transformer) {
    final value = _data[key];
    if (value == null) throw ArgumentError('Key not found: $key');
    return transformer(value);
  }
}

// Sealed class (Dart 3.0+)
sealed class StageEvent {}

class StartEvent extends StageEvent {
  final DateTime timestamp;
  StartEvent(this.timestamp);
}

class EndEvent extends StageEvent {
  final Duration duration;
  EndEvent(this.duration);
}

class ErrorEvent extends StageEvent {
  final String message;
  ErrorEvent(this.message);
}

// Pattern matching (Dart 3.0+)
String handleEvent(StageEvent event) {
  return switch (event) {
    StartEvent(timestamp: var t) => 'Started at $t',
    EndEvent(duration: var d) => 'Duration: ${d.inSeconds}s',
    ErrorEvent(message: var m) => 'Error: $m',
  };
}

// Top-level function
String formatSong(String title, {int? bpm, bool uppercase = false}) {
  final formatted = bpm != null ? '$title @ ${bpm}BPM' : title;
  return uppercase ? formatted.toUpperCase() : formatted;
}

// Main entry point
void main(List<String> args) async {
  // Variable declarations
  var miku = DigitalDiva('Hatsune Miku');
  final songs = ['Melt', 'World is Mine', 'Love is War'];
  const config = {'energy': 100};

  // Null-aware operators
  String? nullableSong;
  final song = nullableSong ?? 'Default Song';
  nullableSong ??= 'Assigned if null';

  // Collection literals
  final list = [1, 2, 3];
  final set = {1, 2, 3};
  final map = {'key': 'value'};

  // Spread operator
  final allSongs = [...songs, 'Rolling Girl'];

  // Collection if/for
  final conditional = [
    'Always',
    if (miku.energy > 50) 'High energy song',
    for (var s in songs) s.toUpperCase(),
  ];

  // Cascade notation
  miku
    ..configure(config)
    ..startPerformance();

  // Try-catch
  try {
    for (final s in songs) {
      print(miku.sing(s));
    }
  } on StateError catch (e) {
    print('State error: ${e.message}');
  } catch (e, stackTrace) {
    print('Error: $e');
    print('Stack: $stackTrace');
  } finally {
    miku.endPerformance();
  }

  // Async/await
  final result = await miku.singAsync('Rolling Girl');
  print(result);

  // Stream handling
  await for (final performance in miku.performConcert(['A', 'B'])) {
    print(performance);
  }

  print('Performance complete!');
}
