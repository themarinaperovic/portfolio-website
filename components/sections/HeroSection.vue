<template>
  <section class="relative min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 overflow-hidden">

    <!-- Background abstract shape -->
    <div
      class="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] max-w-[700px] aspect-square rounded-full opacity-[0.04] bg-ink pointer-events-none"
      style="filter: blur(120px);"
    />

    <div class="max-w-[1400px] mx-auto w-full">

      <!-- Main headline -->
      <div class="overflow-hidden mb-2">
        <h1 class="font-display italic font-light leading-none text-[clamp(3.5rem,10vw,9rem)] tracking-tight text-ink">
          <span
            v-for="(word, i) in line1Words"
            :key="i"
            class="hero-word"
            :style="`animation-delay: ${0.3 + i * 0.08}s`"
          >{{ word }}&nbsp;</span>
        </h1>
      </div>

      <div class="overflow-hidden mb-10 md:mb-14">
        <h1 class="font-sans font-bold leading-none text-[clamp(3.5rem,10vw,9rem)] tracking-tight text-ink">
          <span
            v-for="(word, i) in line2Words"
            :key="i"
            class="hero-word"
            :style="`animation-delay: ${0.5 + i * 0.08}s`"
          >{{ word }}&nbsp;</span>
        </h1>
      </div>

      <!-- Description + CTA row -->
      <div class="hero-fade flex flex-col md:flex-row md:items-end justify-between gap-10" style="animation-delay: 1.1s;">

        <div class="max-w-md">
          <p class="text-lg md:text-xl text-smoke leading-relaxed">
            UX/UI designer bridging artistic intuition with<br class="hidden md:block"/>
            product precision. I design experiences that<br class="hidden md:block"/>
            <em class="font-display italic text-ink not-italic">feel inevitable.</em>
          </p>
        </div>

        <div class="flex items-center gap-6">
          <a
            href="#work"
            class="group flex items-center gap-3 font-semibold text-sm hover:text-fire transition-colors duration-300"
            data-hoverable
            @click.prevent="scrollToWork"
          >
            Selected Work
            <span class="w-10 h-10 rounded-full border border-ink group-hover:border-fire group-hover:bg-fire group-hover:text-cream flex items-center justify-center text-lg transition-all duration-300">
              ↓
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- Stats row (bottom) -->
    <div class="hero-fade max-w-[1400px] mx-auto w-full mt-20 md:mt-28 pb-12" style="animation-delay: 1.3s;">
      <div class="border-t border-border pt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
          <span class="font-display italic text-3xl md:text-4xl font-light text-ink stat-number">
            {{ stat.value }}
          </span>
          <span class="text-xs text-smoke tracking-wide uppercase font-medium">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade" style="animation-delay: 1.6s;">
      <div class="w-px h-12 bg-gradient-to-b from-transparent to-smoke/50 animate-[pulseDot_2s_ease-in-out_infinite]" />
    </div>

  </section>
</template>

<script setup lang="ts">
const line1Words = 'Crafting experiences'.split(' ')
const line2Words = 'people remember.'.split(' ')

const stats = [
  { value: '7+', label: 'Years of craft' },
  { value: '100K+', label: 'Users impacted' },
  { value: '2×', label: 'Best of Swiss Apps' },
  { value: '5+', label: 'Industries designed' },
]

const scrollToWork = () => {
  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
