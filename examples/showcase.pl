#!/usr/bin/perl
# Hatsune Miku Theme - Perl Showcase
# All-Miku Synthesis: Every voice, one stage.

use strict;
use warnings;
use v5.36;  # Enable modern features
use feature qw(say signatures);

# Pragmas
use utf8;
use autodie;

# Constants
use constant {
    CANONICAL_COLOR => '#39C5BB',
    DEFAULT_BPM     => 39,
    MAX_ENERGY      => 100,
};

# Package/Module definition
package MikuShowcase;

use Carp qw(croak confess);
use Scalar::Util qw(blessed reftype);
use List::Util qw(sum max min reduce);

# Class using Moo (lightweight OO)
package VoiceBank {
    use Moo;
    use Types::Standard qw(Str Int ArrayRef Bool);

    has name => (
        is       => 'ro',
        isa      => Str,
        required => 1,
    );

    has version => (
        is      => 'ro',
        isa     => Str,
        default => 'V2',
    );

    has frequency_range => (
        is      => 'ro',
        isa     => ArrayRef[Int],
        default => sub { [80, 1100] },
    );

    has active => (
        is      => 'rw',
        isa     => Bool,
        default => 1,
    );

    sub get_info {
        my ($self) = @_;
        return sprintf "%s (%s)", $self->name, $self->version;
    }
}

# Main class
package DigitalDiva {
    use Moo;
    use Types::Standard qw(Str Int InstanceOf);
    use namespace::clean;

    # Class attribute
    our $MODEL_ID = 'CV01';

    has name => (
        is      => 'ro',
        isa     => Str,
        default => 'Hatsune Miku',
    );

    has voice_bank => (
        is      => 'ro',
        isa     => InstanceOf['VoiceBank'],
        lazy    => 1,
        builder => '_build_voice_bank',
    );

    has _energy => (
        is       => 'rw',
        isa      => Int,
        default  => MAX_ENERGY,
        init_arg => 'energy',
    );

    has current_song => (
        is  => 'rw',
        isa => Str,
    );

    sub _build_voice_bank {
        my ($self) = @_;
        return VoiceBank->new(name => $self->name);
    }

    # Getter/Setter
    sub energy {
        my ($self, $value) = @_;
        if (defined $value) {
            $value = 0 if $value < 0;
            $value = MAX_ENERGY if $value > MAX_ENERGY;
            $self->_energy($value);
        }
        return $self->_energy;
    }

    sub sing {
        my ($self, $song) = @_;

        croak "Low energy: Please recharge with leeks"
            if $self->energy < 10;

        $self->energy($self->energy - 10);
        $self->current_song($song);

        return "[MIKU] Now singing: $song";
    }

    sub sing_at {
        my ($self, $song, $bpm) = @_;
        $bpm //= 120;  # Default value
        my $result = $self->sing($song);
        return "$result @ ${bpm}BPM";
    }
}

# Return to main package
package main;

# Subroutine with signature (5.36+)
sub format_song($title, $bpm = 120) {
    return "[MIKU] $title @ ${bpm}BPM";
}

# Traditional subroutine
sub format_song_legacy {
    my ($title, $bpm) = @_;
    $bpm //= 120;
    return "[MIKU] $title @ ${bpm}BPM";
}

# Anonymous subroutine
my $double = sub { $_[0] * 2 };
my $add = sub ($a, $b) { $a + $b };

# Higher-order function
sub with_logging {
    my ($fn) = @_;
    return sub {
        say "Calling function...";
        my $result = $fn->(@_);
        say "Result: $result";
        return $result;
    };
}

# String operations
sub string_showcase {
    my $name = "Hatsune Miku";

    # Interpolation
    my $greeting = "Hello, $name!";

    # Concatenation
    my $full = $name . " V2";

    # Here-doc
    my $lyrics = <<'END_LYRICS';
World is Mine
The number one princess in the world
END_LYRICS

    # Interpolated here-doc
    my $message = <<"END_MESSAGE";
Now playing: $name
Status: Active
END_MESSAGE

    # Quote operators
    my @words = qw(Melt World Love);  # No quotes needed
    my $pattern = qr/Miku[-_]?(\w+)?/i;

    # String functions
    my $upper = uc($name);
    my $lower = lc($name);
    my $len = length($name);
    my $sub = substr($name, 0, 7);

    return $greeting;
}

# Array operations
sub array_showcase {
    my @songs = ('Melt', 'World is Mine', 'Love is War');

    # Push/pop
    push @songs, 'Rolling Girl';
    my $last = pop @songs;

    # Shift/unshift
    unshift @songs, 'First Song';
    my $first = shift @songs;

    # Slice
    my @first_two = @songs[0, 1];
    my @range = @songs[0..2];

    # Map
    my @uppercased = map { uc } @songs;
    my @lengths = map { length } @songs;

    # Grep (filter)
    my @long_songs = grep { length > 5 } @songs;

    # Sort
    my @sorted = sort @songs;
    my @by_length = sort { length($a) <=> length($b) } @songs;

    # Join
    my $joined = join ', ', @songs;

    # Reduce
    my $total_length = reduce { $a + length($b) } 0, @songs;

    return \@songs;
}

# Hash operations
sub hash_showcase {
    my %config = (
        name    => 'Miku',
        version => 'V2',
        settings => {
            bpm      => 120,
            autoTune => 1,
        },
    );

    # Access
    my $name = $config{name};
    my $bpm = $config{settings}{bpm};

    # Exists/defined
    if (exists $config{name} && defined $config{name}) {
        say "Name: $name";
    }

    # Keys/values
    my @keys = keys %config;
    my @values = values %config;

    # Each (iterate)
    while (my ($key, $value) = each %config) {
        say "$key => $value" unless ref $value;
    }

    # Slice
    my @selected = @config{qw(name version)};

    # Delete
    delete $config{temp} if exists $config{temp};

    return \%config;
}

# Regular expressions
sub regex_showcase {
    my $text = "Hatsune Miku V2 - World is Mine";

    # Match
    if ($text =~ /Miku/) {
        say "Found Miku!";
    }

    # Capture groups
    if ($text =~ /(\w+)\s+(\w+)\s+(V\d+)/) {
        my ($first, $last, $version) = ($1, $2, $3);
        say "Name: $first $last, Version: $version";
    }

    # Named captures
    if ($text =~ /(?<name>Miku)\s+(?<ver>V\d+)/) {
        say "Name: $+{name}, Version: $+{ver}";
    }

    # Substitution
    my $modified = $text;
    $modified =~ s/Miku/MIKU/g;

    # Transliteration
    my $upper = $text;
    $upper =~ tr/a-z/A-Z/;

    # Split
    my @words = split /\s+/, $text;

    return \@words;
}

# File I/O
sub file_showcase {
    my $filename = 'songs.txt';

    # Write
    open my $fh, '>', $filename or die "Cannot open: $!";
    print $fh "Melt\nWorld is Mine\n";
    close $fh;

    # Read all
    open $fh, '<', $filename or die "Cannot open: $!";
    my @lines = <$fh>;
    close $fh;

    # Read line by line
    open $fh, '<', $filename or die "Cannot open: $!";
    while (my $line = <$fh>) {
        chomp $line;
        say "Song: $line";
    }
    close $fh;

    # Slurp mode
    local $/;  # Enable slurp mode
    open $fh, '<', $filename;
    my $content = <$fh>;
    close $fh;

    unlink $filename;  # Cleanup
}

# Error handling
sub safe_sing {
    my ($diva, $song) = @_;

    my $result = eval {
        $diva->sing($song);
    };

    if ($@) {
        warn "Error: $@";
        return undef;
    }

    return $result;
}

# Try::Tiny style (if available)
# use Try::Tiny;
# try {
#     $diva->sing($song);
# } catch {
#     warn "Error: $_";
# } finally {
#     say "Attempt complete";
# };

# Main
sub main {
    my $miku = DigitalDiva->new(
        name   => 'Hatsune Miku',
        energy => MAX_ENERGY,
    );

    my @songs = qw(Melt World_is_Mine Love_is_War);

    say "=== Performance Start ===";

    for my $song (@songs) {
        my $result = safe_sing($miku, $song);
        if (defined $result) {
            say $result;
        } else {
            last;  # Exit loop on error
        }
    }

    say sprintf "Final energy: %d", $miku->energy;
    say "=== Performance Complete ===";
}

main() unless caller;  # Run if executed directly

1;  # Module return value
__END__

=head1 NAME

MikuShowcase - Hatsune Miku Theme Perl Showcase

=head1 SYNOPSIS

    use MikuShowcase;
    my $miku = DigitalDiva->new(name => 'Miku');
    say $miku->sing('World is Mine');

=head1 DESCRIPTION

This module demonstrates Perl syntax highlighting features.

=head1 AUTHOR

Miku Fan

=cut
