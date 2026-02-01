' Hatsune Miku Theme - Visual Basic Showcase
' All-Miku Synthesis: Every voice, one stage.

Option Strict On
Option Explicit On

Imports System
Imports System.Collections.Generic
Imports System.Threading.Tasks

Namespace MikuTheme.Showcase

    ' Constants module
    Public Module Constants
        Public Const CanonicalColor As String = "#39C5BB"
        Public Const DefaultBPM As Integer = 39
        Public Const MaxEnergy As Integer = 100
    End Module

    ' Enum
    Public Enum MikuVersion
        V2Classic = 0
        V3 = 1
        V4X = 2
        NT = 3
        Sekai = 4
    End Enum

    ' Flags enum
    <Flags()>
    Public Enum StageMode
        None = 0
        Idle = 1
        Performing = 2
        Holographic = 4
    End Enum

    ' Interface
    Public Interface ISynthesizer
        Function Sing(song As String) As String
        ReadOnly Property Version As MikuVersion
    End Interface

    ' Generic interface
    Public Interface IMetadataStore(Of T)
        Sub SetValue(key As String, value As T)
        Function GetValue(key As String) As T
    End Interface

    ' Structure
    Public Structure FrequencyRange
        Public Min As Integer
        Public Max As Integer

        Public Sub New(min As Integer, max As Integer)
            Me.Min = min
            Me.Max = max
        End Sub

        Public Overrides Function ToString() As String
            Return $"{Min}-{Max} Hz"
        End Function
    End Structure

    ' Class
    Public Class VoiceBank
        ' Auto-implemented properties
        Public Property Name As String
        Public Property Version As MikuVersion
        Public Property FrequencyRange As FrequencyRange
        Public Property Active As Boolean = True

        ' Constructor
        Public Sub New(name As String, Optional version As MikuVersion = MikuVersion.V2Classic)
            Me.Name = name
            Me.Version = version
            Me.FrequencyRange = New FrequencyRange(80, 1100)
        End Sub

        ' Method
        Public Function GetInfo() As String
            Return $"{Name} ({Version})"
        End Function
    End Class

    ' Main class
    Public Class DigitalDiva
        Implements ISynthesizer

        ' Shared (static) member
        Public Shared ReadOnly ModelID As String = "CV01"

        ' Private field with property
        Private _energy As Integer = MaxEnergy

        ' Properties
        Public ReadOnly Property Name As String
        Public ReadOnly Property VoiceBank As VoiceBank
        Public Property CurrentSong As String

        ' Property with validation
        Public Property Energy As Integer
            Get
                Return _energy
            End Get
            Set(value As Integer)
                _energy = Math.Max(0, Math.Min(MaxEnergy, value))
            End Set
        End Property

        ' Interface property implementation
        Public ReadOnly Property Version As MikuVersion Implements ISynthesizer.Version
            Get
                Return VoiceBank.Version
            End Get
        End Property

        ' Constructor
        Public Sub New(Optional name As String = "Hatsune Miku",
                       Optional version As MikuVersion = MikuVersion.V2Classic)
            Me.Name = name
            Me.VoiceBank = New VoiceBank(name, version)
        End Sub

        ' Interface method implementation
        Public Function Sing(song As String) As String Implements ISynthesizer.Sing
            If _energy < 10 Then
                Throw New InvalidOperationException("Low energy: Please recharge with leeks")
            End If

            _energy -= 10
            CurrentSong = song
            Return $"[MIKU] Now singing: {song}"
        End Function

        ' Overloaded method
        Public Function Sing(song As String, bpm As Integer) As String
            Dim result = Sing(song)
            Return $"{result} @ {bpm}BPM"
        End Function

        ' Async method
        Public Async Function SingAsync(song As String) As Task(Of String)
            Await Task.Delay(100)
            Return Sing(song)
        End Function

        ' Shared method
        Public Shared Function GetCanonicalColor() As String
            Return CanonicalColor
        End Function

        ' ToString override
        Public Overrides Function ToString() As String
            Return $"DigitalDiva({Name}, energy={_energy})"
        End Function
    End Class

    ' Generic class
    Public Class MetadataStore(Of T)
        Implements IMetadataStore(Of T)

        Private ReadOnly _data As New Dictionary(Of String, T)

        Public Sub SetValue(key As String, value As T) Implements IMetadataStore(Of T).SetValue
            _data(key) = value
        End Sub

        Public Function GetValue(key As String) As T Implements IMetadataStore(Of T).GetValue
            Dim result As T = Nothing
            _data.TryGetValue(key, result)
            Return result
        End Function
    End Class

    ' Extension module
    Public Module StringExtensions
        <System.Runtime.CompilerServices.Extension()>
        Public Function ToMikuFormat(str As String) As String
            Return $"[MIKU] {str}"
        End Function

        <System.Runtime.CompilerServices.Extension()>
        Public Function Truncate(str As String, maxLength As Integer) As String
            If str.Length <= maxLength Then Return str
            Return str.Substring(0, maxLength) & "..."
        End Function
    End Module

    ' Event demonstration
    Public Class StageManager
        ' Event declaration
        Public Event SongStarted As EventHandler(Of String)
        Public Event SongEnded As EventHandler(Of String)

        ' Custom event (with add/remove handlers)
        Private _errorHandlers As New List(Of EventHandler(Of Exception))
        Public Custom Event ErrorOccurred As EventHandler(Of Exception)
            AddHandler(value As EventHandler(Of Exception))
                _errorHandlers.Add(value)
            End AddHandler
            RemoveHandler(value As EventHandler(Of Exception))
                _errorHandlers.Remove(value)
            End RemoveHandler
            RaiseEvent(sender As Object, e As Exception)
                For Each handler In _errorHandlers
                    handler(sender, e)
                Next
            End RaiseEvent
        End Event

        ' Method that raises events
        Public Sub PerformSong(song As String)
            RaiseEvent SongStarted(Me, song)
            ' ... perform ...
            RaiseEvent SongEnded(Me, song)
        End Sub
    End Class

    ' Main module
    Module Program

        Sub Main(args As String())
            ' Variable declarations
            Dim miku As New DigitalDiva("Hatsune Miku", MikuVersion.V2Classic)
            Dim songs As String() = {"Melt", "World is Mine", "Love is War"}

            Console.WriteLine("=== Performance Start ===")

            ' For Each loop
            For Each song In songs
                Try
                    Dim result = miku.Sing(song)
                    Console.WriteLine(result)
                Catch ex As InvalidOperationException
                    Console.WriteLine($"Error: {ex.Message}")
                    Exit For
                End Try
            Next

            ' For loop with index
            For i As Integer = 0 To songs.Length - 1
                Console.WriteLine($"{i + 1}. {songs(i)}")
            Next

            ' While loop
            Dim count As Integer = 0
            While count < 3
                count += 1
            End While

            ' Do While / Do Until
            Do While miku.Energy > 80
                Console.WriteLine("High energy!")
                Exit Do
            Loop

            Do Until miku.Energy <= 0
                miku.Energy -= 10
            Loop

            ' Select Case
            Select Case miku.Energy
                Case Is > 80
                    Console.WriteLine("Full power")
                Case 50 To 80
                    Console.WriteLine("Normal")
                Case 20, 30, 40
                    Console.WriteLine("Low")
                Case Else
                    Console.WriteLine("Critical")
            End Select

            ' With statement
            With miku
                Console.WriteLine(.Name)
                Console.WriteLine(.Energy)
            End With

            ' Using statement (IDisposable)
            ' Using reader As New StreamReader("file.txt")
            '     Dim content = reader.ReadToEnd()
            ' End Using

            ' LINQ
            Dim longSongs = From s In songs
                            Where s.Length > 5
                            Order By s.Length Descending
                            Select s.ToUpper()

            ' Method syntax LINQ
            Dim shortSongs = songs.Where(Function(s) s.Length <= 5).
                                   Select(Function(s) s.ToLower()).
                                   ToList()

            ' Lambda expressions
            Dim formatter As Func(Of String, String) = Function(s) $"[MIKU] {s}"
            Dim isLong As Predicate(Of String) = Function(s) s.Length > 5

            ' Multi-line lambda
            Dim processor As Func(Of String, Integer, String) =
                Function(title, bpm)
                    Dim formatted = title.ToUpper()
                    Return $"{formatted} @ {bpm}BPM"
                End Function

            ' Anonymous type
            Dim songInfo = New With {
                .Title = "Melt",
                .BPM = 120,
                Key .Version = "V2"
            }

            ' Nullable
            Dim maybeBpm As Integer? = Nothing
            Dim actualBpm = If(maybeBpm, DefaultBPM)

            ' String interpolation and formatting
            Dim message = $"Energy: {miku.Energy:N2}%"
            Dim formatted = String.Format("Name: {0}, Version: {1}", miku.Name, miku.Version)

            ' Async call
            Dim asyncResult = PerformAsync(miku, "Rolling Girl")
            asyncResult.Wait()

            Console.WriteLine($"Final energy: {miku.Energy}")
            Console.WriteLine("=== Performance Complete ===")
        End Sub

        ' Async function
        Async Function PerformAsync(diva As DigitalDiva, song As String) As Task
            Dim result = Await diva.SingAsync(song)
            Console.WriteLine(result)
        End Function

        ' Iterator function
        Iterator Function GetSongs() As IEnumerable(Of String)
            Yield "Melt"
            Yield "World is Mine"
            Yield "Love is War"
        End Function

    End Module

End Namespace
