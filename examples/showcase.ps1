<#
.SYNOPSIS
    Hatsune Miku Theme - PowerShell Showcase

.DESCRIPTION
    No color screams. Every color sings.

.NOTES
    Author: Miku Fan
    Version: 1.0
#>

#Requires -Version 7.0

# Strict mode
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

# Constants
$Script:CanonicalColor = '#39C5BB'
$Script:DefaultBPM = 39
$Script:MaxEnergy = 100

# Enum
enum MikuVersion {
    V2Classic
    V3
    V4X
    NT
    Sekai
}

# Flags enum
[Flags()] enum StageMode {
    Idle = 0
    Performing = 1
    Holographic = 2
}

# Class definition
class VoiceBank {
    [string]$Name
    [MikuVersion]$Version
    [int[]]$FrequencyRange
    [bool]$Active

    # Constructor
    VoiceBank([string]$name) {
        $this.Name = $name
        $this.Version = [MikuVersion]::V2Classic
        $this.FrequencyRange = @(80, 1100)
        $this.Active = $true
    }

    VoiceBank([string]$name, [MikuVersion]$version) {
        $this.Name = $name
        $this.Version = $version
        $this.FrequencyRange = @(80, 1100)
        $this.Active = $true
    }

    [string] GetInfo() {
        return "$($this.Name) ($($this.Version))"
    }
}

# Main class with inheritance
class DigitalDiva {
    # Static property
    static [string]$ModelID = 'CV01'

    # Instance properties
    [string]$Name
    [VoiceBank]$VoiceBank
    hidden [int]$_energy = $Script:MaxEnergy
    [string]$CurrentSong

    # Constructor
    DigitalDiva([string]$name) {
        $this.Name = $name
        $this.VoiceBank = [VoiceBank]::new($name)
    }

    DigitalDiva([string]$name, [MikuVersion]$version) {
        $this.Name = $name
        $this.VoiceBank = [VoiceBank]::new($name, $version)
    }

    # Property getter/setter
    [int] GetEnergy() {
        return $this._energy
    }

    [void] SetEnergy([int]$value) {
        $this._energy = [Math]::Max(0, [Math]::Min($Script:MaxEnergy, $value))
    }

    # Methods
    [string] Sing([string]$song) {
        if ($this._energy -lt 10) {
            throw "Low energy: Please recharge with leeks"
        }
        $this._energy -= 10
        $this.CurrentSong = $song
        return "[MIKU] Now singing: $song"
    }

    [string] SingAt([string]$song, [int]$bpm) {
        $result = $this.Sing($song)
        return "$result @ ${bpm}BPM"
    }

    # Static method
    static [string] GetCanonicalColor() {
        return $Script:CanonicalColor
    }
}

# Functions

function Format-Song {
    [CmdletBinding()]
    [OutputType([string])]
    param(
        [Parameter(Mandatory, Position = 0, ValueFromPipeline)]
        [string]$Title,

        [Parameter()]
        [int]$BPM = 120,

        [Parameter()]
        [switch]$Uppercase
    )

    process {
        $formatted = "[MIKU] $Title @ ${BPM}BPM"
        if ($Uppercase) {
            $formatted = $formatted.ToUpper()
        }
        return $formatted
    }
}

function Invoke-Performance {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [DigitalDiva]$Diva,

        [Parameter(Mandatory)]
        [string[]]$Songs,

        [Parameter()]
        [scriptblock]$OnProgress
    )

    begin {
        Write-Verbose "Starting performance"
        $results = @()
    }

    process {
        foreach ($song in $Songs) {
            try {
                $result = $Diva.Sing($song)
                $results += $result

                if ($OnProgress) {
                    & $OnProgress -Song $song -Index $results.Count
                }
            }
            catch {
                Write-Error "Failed to sing '$song': $_"
                break
            }
        }
    }

    end {
        Write-Verbose "Performance complete"
        return $results
    }
}

# Advanced function with parameter validation
function New-VoiceBank {
    [CmdletBinding(SupportsShouldProcess)]
    param(
        [Parameter(Mandatory)]
        [ValidateNotNullOrEmpty()]
        [string]$Name,

        [Parameter()]
        [ValidateSet('V2Classic', 'V3', 'V4X', 'NT', 'Sekai')]
        [string]$Version = 'V2Classic',

        [Parameter()]
        [ValidateRange(20, 20000)]
        [int]$MinFrequency = 80,

        [Parameter()]
        [ValidateScript({ $_ -gt $MinFrequency })]
        [int]$MaxFrequency = 1100
    )

    if ($PSCmdlet.ShouldProcess($Name, "Create VoiceBank")) {
        $vb = [VoiceBank]::new($Name, [MikuVersion]::$Version)
        $vb.FrequencyRange = @($MinFrequency, $MaxFrequency)
        return $vb
    }
}

# Script blocks
$formatBlock = {
    param($Title)
    "[MIKU] $Title"
}

# Filter
filter Select-LongSongs {
    if ($_.Length -gt 5) { $_ }
}

# Variables and types
function Show-Variables {
    # Basic types
    [string]$name = "Hatsune Miku"
    [int]$bpm = 120
    [double]$duration = 4.5
    [bool]$active = $true

    # Arrays
    [string[]]$songs = @('Melt', 'World is Mine', 'Love is War')
    [int[]]$numbers = 1..10

    # Hashtable
    $config = @{
        Name     = 'Miku'
        Version  = 'V2'
        Settings = @{
            BPM      = 120
            AutoTune = $true
        }
    }

    # Ordered hashtable
    $ordered = [ordered]@{
        First  = 1
        Second = 2
        Third  = 3
    }

    # ArrayList (mutable)
    $list = [System.Collections.ArrayList]::new()
    [void]$list.Add('Item')

    # Generic list
    $genericList = [System.Collections.Generic.List[string]]::new()
    $genericList.Add('Song')

    # Type casting
    $number = [int]'42'
    $date = [datetime]'2007-08-31'
}

# String operations
function Show-Strings {
    $name = "Hatsune Miku"

    # Here-string (literal)
    $lyrics = @'
World is Mine
The number one princess
'@

    # Here-string (expandable)
    $message = @"
Now playing: $name
Status: Active
"@

    # String formatting
    $formatted = "Energy: {0:N2}%" -f 75.5
    $template = "Hello, {0}! Welcome to {1}." -f 'Miku', 'Stage'

    # Subexpression
    $info = "Energy: $($Script:MaxEnergy)%"

    # String methods
    $upper = $name.ToUpper()
    $split = $name.Split(' ')
    $replaced = $name.Replace('Miku', 'MIKU')
}

# Control flow
function Show-ControlFlow {
    param([int]$Energy)

    # If-elseif-else
    if ($Energy -gt 80) {
        "Full power"
    }
    elseif ($Energy -gt 50) {
        "Normal"
    }
    else {
        "Low"
    }

    # Switch
    switch ($Energy) {
        { $_ -gt 80 } { "High"; break }
        { $_ -gt 50 } { "Medium"; break }
        default { "Low" }
    }

    # Ternary (PowerShell 7+)
    $status = $Energy -gt 50 ? "Good" : "Bad"

    # Null coalescing (PowerShell 7+)
    $value = $null ?? "Default"

    # Null conditional assignment
    $config ??= @{ Default = $true }

    # For loop
    for ($i = 0; $i -lt 5; $i++) {
        Write-Output "Beat $i"
    }

    # Foreach
    $songs = @('A', 'B', 'C')
    foreach ($song in $songs) {
        Write-Output $song
    }

    # ForEach-Object
    $songs | ForEach-Object { $_.ToUpper() }

    # While
    $count = 0
    while ($count -lt 5) {
        $count++
    }

    # Do-while
    do {
        $count--
    } while ($count -gt 0)
}

# Pipeline operations
function Show-Pipeline {
    $songs = @('Melt', 'World is Mine', 'Love is War', 'Rolling Girl')

    # Where-Object (filter)
    $longSongs = $songs | Where-Object { $_.Length -gt 5 }

    # Select-Object
    $first = $songs | Select-Object -First 2
    $properties = Get-Process | Select-Object Name, CPU

    # ForEach-Object
    $uppercased = $songs | ForEach-Object { $_.ToUpper() }

    # Sort-Object
    $sorted = $songs | Sort-Object Length

    # Group-Object
    $grouped = $songs | Group-Object { $_.Length }

    # Measure-Object
    $stats = $songs | Measure-Object -Property Length -Sum -Average

    # Tee-Object
    $songs | Tee-Object -Variable saved | ForEach-Object { "Processing: $_" }

    # Pipeline chain operators (PowerShell 7+)
    Get-Process notepad && Write-Output "Notepad running"
    Get-Process nonexistent || Write-Output "Not found"
}

# Error handling
function Show-ErrorHandling {
    # Try-catch-finally
    try {
        $result = 1 / 0
    }
    catch [DivideByZeroException] {
        Write-Warning "Division by zero!"
    }
    catch {
        Write-Error "Unexpected error: $_"
    }
    finally {
        Write-Verbose "Cleanup"
    }

    # Trap
    trap {
        Write-Warning "Trapped: $_"
        continue
    }

    # ErrorAction
    Get-Item 'nonexistent' -ErrorAction SilentlyContinue
    $Error.Clear()
}

# Main execution
function Main {
    $miku = [DigitalDiva]::new('Hatsune Miku', [MikuVersion]::V2Classic)
    $songs = @('Melt', 'World is Mine', 'Love is War')

    Write-Host "=== Performance Start ===" -ForegroundColor Cyan

    try {
        $results = Invoke-Performance -Diva $miku -Songs $songs -Verbose

        $results | ForEach-Object {
            Write-Host $_ -ForegroundColor Green
        }
    }
    catch {
        Write-Host "Error: $_" -ForegroundColor Red
    }

    Write-Host "Final energy: $($miku.GetEnergy())" -ForegroundColor Yellow
    Write-Host "=== Performance Complete ===" -ForegroundColor Cyan
}

# Run if executed directly
if ($MyInvocation.InvocationName -ne '.') {
    Main
}
