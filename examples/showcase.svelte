<script lang="ts">
  /**
   * Hatsune Miku Theme - Svelte Showcase
   * All-Miku Synthesis: Every voice, one stage.
   */

  import { onMount, onDestroy, createEventDispatcher } from 'svelte'
  import { writable, derived, type Writable } from 'svelte/store'

  // Types: #B2EBE7 Bold (Ice Teal)
  interface VoiceBank {
    id: string
    name: string
    version: 'V2' | 'V3' | 'V4X' | 'NT' | 'SEKAI'
  }

  type AppendType = 'dark' | 'soft' | 'light' | 'sweet' | 'vivid' | 'solid'

  // Props
  export let title: string = 'Hatsune Miku Stage'
  export let initialVoices: VoiceBank[] = []

  // Constants: #E05096 (Magenta)
  const CANONICAL_COLOR = '#39C5BB'
  const DEFAULT_BPM = 39

  // Event dispatcher
  const dispatch = createEventDispatcher<{
    perform: { song: string; bpm: number }
    select: VoiceBank
  }>()

  // Stores: Writable<T>
  const voices: Writable<VoiceBank[]> = writable(initialVoices)
  const searchQuery = writable('')
  const isPerforming = writable(false)

  // Derived store: #00BCD4 (Functions)
  const filteredVoices = derived(
    [voices, searchQuery],
    ([$voices, $query]) => {
      if (!$query) return $voices
      return $voices.filter(v =>
        v.name.toLowerCase().includes($query.toLowerCase())
      )
    }
  )

  // Reactive declarations: $: syntax
  $: voiceCount = $voices.length
  $: hasVoices = voiceCount > 0
  $: statusMessage = $isPerforming ? 'Performing...' : 'Ready'

  // Functions: #00BCD4 (NT Cyan)
  function handleSearch(event: Event): void {
    const target = event.target as HTMLInputElement
    searchQuery.set(target.value)
  }

  async function startPerformance(song: string): Promise<void> {
    isPerforming.set(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      dispatch('perform', { song, bpm: DEFAULT_BPM })
    } finally {
      isPerforming.set(false)
    }
  }

  function selectVoice(voice: VoiceBank): void {
    dispatch('select', voice)
  }

  // Lifecycle: #00BCD4
  onMount(async () => {
    console.log('Component mounted')

    // Fetch initial data
    const response = await fetch('/api/voices')
    const data = await response.json()
    voices.set(data)
  })

  onDestroy(() => {
    console.log('Component destroyed')
  })
</script>

<!-- Svelte Template -->
<div class="miku-stage" class:performing={$isPerforming}>
  <!-- HTML Tag: #39C5BB Bold -->
  <header>
    <h1>{title}</h1>
    <span class="status">{statusMessage}</span>
  </header>

  <!-- Svelte Block: {#if} - #39C5BB Bold -->
  {#if hasVoices}
    <section class="controls">
      <!-- Two-way binding: bind: -->
      <input
        type="text"
        placeholder="Search voices..."
        bind:value={$searchQuery}
        on:input={handleSearch}
      />
    </section>

    <!-- Svelte Block: {#each} -->
    <ul class="voice-list">
      {#each $filteredVoices as voice, index (voice.id)}
        <li
          class="voice-item"
          class:selected={index === 0}
          on:click={() => selectVoice(voice)}
          on:keydown={(e) => e.key === 'Enter' && selectVoice(voice)}
          role="button"
          tabindex="0"
        >
          <!-- Expression: {expression} -->
          <span class="name">{voice.name}</span>
          <span class="version">{voice.version}</span>
        </li>
      {:else}
        <!-- Empty state -->
        <li class="empty">No voices match your search</li>
      {/each}
    </ul>

    <!-- Event with modifiers -->
    <button
      on:click|preventDefault|stopPropagation={() => startPerformance('World is Mine')}
      disabled={$isPerforming}
    >
      {$isPerforming ? 'Performing...' : 'Start Performance'}
    </button>
  {:else}
    <!-- Svelte Block: {:else} -->
    <p class="loading">Loading voices...</p>
  {/if}

  <!-- Svelte Block: {#await} -->
  {#await fetch('/api/status')}
    <p>Checking status...</p>
  {:then response}
    <p>Status: {response.status}</p>
  {:catch error}
    <p class="error">Error: {error.message}</p>
  {/await}

  <!-- Slot -->
  <slot name="footer">
    <footer>
      <p>Canonical Color: {CANONICAL_COLOR}</p>
    </footer>
  </slot>
</div>

<style>
  /* CSS in Svelte */
  .miku-stage {
    --primary: #39c5bb;
    --secondary: #00bcd4;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background: #1a1f24;
    color: #c8dcd9;
  }

  /* Class: #39C5BB */
  .voice-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .voice-item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    border-left: 3px solid var(--primary);
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: background 150ms ease;
  }

  .voice-item:hover {
    background: rgba(57, 197, 187, 0.1);
  }

  /* Conditional class */
  .voice-item.selected {
    background: rgba(57, 197, 187, 0.2);
    border-color: var(--secondary);
  }

  .performing {
    opacity: 0.8;
    pointer-events: none;
  }

  .error {
    color: #ff5370;
  }

  /* Animation */
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .voice-item {
    animation: fade-in 300ms ease;
  }
</style>
