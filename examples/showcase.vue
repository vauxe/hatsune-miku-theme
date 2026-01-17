<template>
  <!-- Vue Template: Tags #39C5BB Bold, Attributes #4DD0E1 Italic -->
  <div class="miku-stage" :class="{ performing: isPerforming }">
    <!-- Component Tag: #B2EBE7 Bold (Ice Teal) -->
    <MikuHeader :title="title" @click="handleClick" />

    <!-- Vue Directives: #39C5BB Bold -->
    <section v-if="isReady">
      <h1>{{ title }}</h1>

      <!-- v-for Directive -->
      <ul class="voice-list">
        <li
          v-for="(voice, index) in voiceBanks"
          :key="voice.id"
          :data-index="index"
        >
          <!-- Interpolation: #4DD0E1 -->
          {{ voice.name }} - {{ voice.version }}
        </li>
      </ul>

      <!-- v-model Directive -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search voices..."
        @input="onSearch"
      />

      <!-- v-show Directive -->
      <p v-show="voiceBanks.length === 0">No voices found</p>

      <!-- Event Modifiers -->
      <button
        @click.prevent.stop="startPerformance"
        :disabled="!canPerform"
      >
        Start Performance
      </button>
    </section>

    <!-- v-else Directive -->
    <LoadingSpinner v-else />

    <!-- Slot -->
    <slot name="footer">
      <DefaultFooter />
    </slot>
  </div>
</template>

<script setup lang="ts">
/**
 * Hatsune Miku Theme - Vue 3 Showcase
 * All-Miku Synthesis: Every voice, one stage.
 */

import { ref, computed, watch, onMounted, defineProps, defineEmits } from 'vue'
import type { VoiceBank, MikuVersion } from '@/types'

// Component imports: #B2EBE7 Bold
import MikuHeader from './MikuHeader.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import DefaultFooter from './DefaultFooter.vue'

// Props: defineProps
interface Props {
  initialVoice?: VoiceBank
  version?: MikuVersion
}

const props = withDefaults(defineProps<Props>(), {
  version: 'V2'
})

// Emits: defineEmits
const emit = defineEmits<{
  (e: 'perform', song: string): void
  (e: 'change', voice: VoiceBank): void
}>()

// Refs: #C8DCD9 (Variables)
const title = ref<string>('Hatsune Miku Stage')
const isReady = ref<boolean>(false)
const isPerforming = ref<boolean>(false)
const searchQuery = ref<string>('')
const voiceBanks = ref<VoiceBank[]>([])

// Constants: #E05096 (Magenta)
const CANONICAL_COLOR = '#39C5BB' as const
const DEFAULT_BPM = 39

// Computed: #00BCD4 (Functions)
const canPerform = computed(() => {
  return isReady.value && voiceBanks.value.length > 0
})

const filteredVoices = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return voiceBanks.value.filter(voice =>
    voice.name.toLowerCase().includes(query)
  )
})

// Methods: #00BCD4
function handleClick(event: MouseEvent): void {
  console.log('Clicked:', event.target)
}

function onSearch(): void {
  console.log('Searching:', searchQuery.value)
}

async function startPerformance(): Promise<void> {
  isPerforming.value = true

  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    emit('perform', 'World is Mine')
  } finally {
    isPerforming.value = false
  }
}

// Watch: #00BCD4
watch(searchQuery, (newValue, oldValue) => {
  console.log(`Search changed: ${oldValue} -> ${newValue}`)
})

watch(
  () => props.version,
  (newVersion) => {
    console.log('Version changed:', newVersion)
  },
  { immediate: true }
)

// Lifecycle: #00BCD4
onMounted(async () => {
  // Fetch voice banks
  const response = await fetch('/api/voices')
  voiceBanks.value = await response.json()
  isReady.value = true
})
</script>

<style scoped>
/* Scoped CSS */
.miku-stage {
  /* CSS Variable: #4DD0E1 */
  --primary-color: v-bind(CANONICAL_COLOR);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: #1a1f24;
}

/* Class Selector: #39C5BB */
.voice-list {
  list-style: none;
  padding: 0;
}

.voice-list li {
  padding: 0.5rem;
  border-left: 3px solid var(--primary-color);
  margin-bottom: 0.5rem;
}

/* State Class */
.performing {
  animation: pulse 1s ease-in-out infinite;
}

/* Keyframes: @keyword #E05096 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
</style>
