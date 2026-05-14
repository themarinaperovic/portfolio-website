<template>
  <div v-if="!removed" ref="loaderEl" class="page-loader" :class="{ 'page-loader-gone': gone }">

    <!-- Top label row -->
    <div class="page-loader-grid">
      <span>Marina Markus Portfolio</span>
      <span class="tabular-nums">{{ String(Math.floor(progress)).padStart(3, '0') }}</span>
    </div>

    <!-- Big counter -->
    <div class="page-loader-num">{{ Math.floor(progress) }}</div>

    <!-- Progress bar -->
    <div class="page-loader-bar-track">
      <div class="page-loader-bar" :style="`width: ${progress}%`" />
    </div>

    <!-- Bottom label row -->
    <div class="page-loader-grid" style="margin-top: 14px">
      <span>Loading Frames</span>
    </div>

  </div>
</template>

<script setup lang="ts">
const isReady = useAppReady()
const loaderEl = ref<HTMLElement | null>(null)
const progress = ref(0)
const gone = ref(false)
const removed = ref(false)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  const tick = () => {
    progress.value += Math.random() * 7 + 2
    if (progress.value >= 100) {
      progress.value = 100
      setTimeout(() => {
        gone.value = true
        isReady.value = true
        document.body.style.overflow = ''
        setTimeout(() => { removed.value = true }, 1600)
      }, 280)
    } else {
      setTimeout(tick, 60 + Math.random() * 80)
    }
  }

  setTimeout(tick, 120)
})
</script>
