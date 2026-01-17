// Hatsune Miku Theme - Go Showcase
// All-Miku Synthesis: Every voice, one stage.

package main

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"time"
)

// Constants: #E05096 (Magenta LED - Rhythm)
const (
	CanonicalColor = "#39C5BB"
	DefaultBPM     = 39
	MaxEnergy      = 100
)

// Package-level variables
var (
	// Error types: #FF5370
	ErrLowEnergy    = errors.New("low energy: please recharge with leeks")
	ErrStageNotReady = errors.New("stage not ready")
)

// Interface: #B2EBE7 Bold (Ice Teal - Append Light)
type Synthesizer interface {
	// Method signature: #00BCD4 (NT Cyan)
	Sing(ctx context.Context, song string) error
	GetVersion() MikuVersion
}

// Type alias
type MikuVersion string

// Enum-like constants
const (
	V2Classic MikuVersion = "V2_CLASSIC"
	V3        MikuVersion = "V3"
	V4X       MikuVersion = "V4X"
	NT        MikuVersion = "NT"
	Sekai     MikuVersion = "SEKAI"
	V6AI      MikuVersion = "V6_AI"
)

// Struct: #B2EBE7 Bold (Ice Teal)
type VoiceBank struct {
	Name           string         // Field: #90B8B2
	Version        MikuVersion
	FrequencyRange [2]int
}

// Main struct with generics (Go 1.18+)
// Generic type T: #B2EBE7 Italic
type DigitalDiva[T any] struct {
	name      string
	energy    int
	voiceBank VoiceBank
	metadata  map[string]T
	mu        sync.RWMutex
}

// Constructor function: #00BCD4
func NewDigitalDiva[T any](name string, vb VoiceBank) *DigitalDiva[T] {
	return &DigitalDiva[T]{
		name:      name,
		energy:    MaxEnergy,
		voiceBank: vb,
		metadata:  make(map[string]T),
	}
}

// Method with receiver: #E05096 Italic (receiver variable)
// Method name: #00BCD4 (NT Cyan)
func (d *DigitalDiva[T]) Sing(ctx context.Context, song string) error {
	d.mu.RLock()
	energy := d.energy
	d.mu.RUnlock()

	// Keywords: #39C5BB Bold
	if energy < 10 {
		return ErrLowEnergy
	}

	// Select statement: #39C5BB Bold
	select {
	case <-ctx.Done():
		return ctx.Err()
	default:
		// String formatting: #9CCC65 (Negi Green)
		fmt.Printf("[MIKU] Now singing: %s\n", song)
	}

	// Switch statement: #39C5BB Bold
	switch d.voiceBank.Version {
	case V2Classic:
		return d.classicVoice(song)
	case NT:
		return d.ntVoice(song)
	case Sekai:
		return d.sekaiVoice(song)
	default:
		return d.defaultVoice(song)
	}
}

func (d *DigitalDiva[T]) GetVersion() MikuVersion {
	return d.voiceBank.Version
}

func (d *DigitalDiva[T]) classicVoice(song string) error {
	fmt.Printf("V2 Classic: %s\n", song)
	return nil
}

func (d *DigitalDiva[T]) ntVoice(song string) error {
	fmt.Printf("NT Modern: %s\n", song)
	return nil
}

func (d *DigitalDiva[T]) sekaiVoice(song string) error {
	fmt.Printf("SEKAI Stage: %s\n", song)
	return nil
}

func (d *DigitalDiva[T]) defaultVoice(song string) error {
	fmt.Printf("Default: %s\n", song)
	return nil
}

// Method to update energy with mutex
func (d *DigitalDiva[T]) ConsumeEnergy(amount int) {
	d.mu.Lock()
	defer d.mu.Unlock() // Keyword: #39C5BB Bold

	d.energy -= amount
	if d.energy < 0 {
		d.energy = 0
	}
}

// Goroutine example
func (d *DigitalDiva[T]) PerformAsync(ctx context.Context, songs []string) <-chan error {
	// Channel: return type
	errCh := make(chan error, len(songs))

	// Goroutine: #39C5BB Bold
	go func() {
		defer close(errCh)

		for _, song := range songs {
			// Range: #39C5BB Bold
			if err := d.Sing(ctx, song); err != nil {
				errCh <- err
				return
			}
			time.Sleep(100 * time.Millisecond)
		}
	}()

	return errCh
}

// AppendVoice types
type AppendType int

const (
	Dark AppendType = iota
	Soft
	Light
	Sweet
	Vivid
	Solid
)

// Stringer interface implementation
func (a AppendType) String() string {
	// Array literal
	names := [...]string{"dark", "soft", "light", "sweet", "vivid", "solid"}

	if a < Dark || a > Solid {
		return "unknown"
	}
	return names[a]
}

// Function type
type SongProcessor func(song string) (string, error)

// Higher-order function
func WithLogging(processor SongProcessor) SongProcessor {
	return func(song string) (string, error) {
		fmt.Printf("Processing: %s\n", song)
		result, err := processor(song)
		if err != nil {
			fmt.Printf("Error: %v\n", err)
		}
		return result, err
	}
}

// Main function
func main() {
	// Variable declaration: #39C5BB Bold (var/const)
	voiceBank := VoiceBank{
		Name:           "Hatsune Miku",
		Version:        V2Classic,
		FrequencyRange: [2]int{80, 1100},
	}

	// Type parameter: #B2EBE7
	miku := NewDigitalDiva[string]("Miku", voiceBank)

	// Context: #B2EBE7 (Type)
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// Error handling
	if err := miku.Sing(ctx, "World is Mine"); err != nil {
		fmt.Printf("Error: %v\n", err)
		return
	}

	// Slice literal
	songs := []string{"Melt", "Love is War", "Rolling Girl"}

	// Channel receive
	for err := range miku.PerformAsync(ctx, songs) {
		if err != nil {
			fmt.Printf("Performance error: %v\n", err)
		}
	}

	fmt.Println("Performance complete!")
}
