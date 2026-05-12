<template>
  <section id="awards" class="py-28 md:py-40 px-6 md:px-12 bg-ink text-cream">
    <div class="max-w-[1400px] mx-auto">

      <!-- Section label -->
      <div class="flex items-center gap-4 mb-16" data-reveal>
        <span class="text-xs tracking-widest uppercase font-semibold text-cream/30">03 / Recognition</span>
        <span class="flex-1 h-px bg-cream/10 max-w-[80px]" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

        <!-- Left: headline -->
        <div data-reveal>
          <h2 class="font-display italic font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-cream mb-6">
            Work that<br/>gets noticed.
          </h2>
          <p class="text-cream/50 text-lg leading-relaxed max-w-md">
            Recognised by the Swiss digital industry for design excellence and user experience. Two bronzes in one year — not bad for someone who started with a camera.
          </p>
        </div>

        <!-- Right: awards -->
        <div class="space-y-0" data-reveal style="--delay: 150ms">
          <div
            v-for="(award, i) in awards"
            :key="i"
            class="group border-t border-cream/10 py-8 hover:pl-4 transition-all duration-500 last:border-b"
          >
            <div class="flex items-start justify-between gap-6">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-3">
                  <span
                    class="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    :style="`background-color: ${award.badgeColor}20; color: ${award.badgeColor}`"
                  >
                    {{ award.medal }}
                  </span>
                  <span class="text-xs text-cream/30 uppercase tracking-widest font-medium">{{ award.year }}</span>
                </div>
                <h3 class="font-display italic text-cream text-2xl md:text-3xl font-light group-hover:text-fire transition-colors duration-300">
                  {{ award.title }}
                </h3>
                <p class="text-cream/40 text-sm">{{ award.organization }}</p>
              </div>
              <span class="text-cream/20 text-3xl group-hover:text-fire transition-colors duration-300 mt-1">★</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Education -->
      <div class="mt-20 pt-12 border-t border-cream/10 flex flex-col md:flex-row md:items-center justify-between gap-4" data-reveal>
        <div class="flex flex-col gap-1">
          <p class="text-xs tracking-widest uppercase text-cream/30 font-semibold">Education</p>
          <p class="text-cream font-semibold">Master in Audiovisual Arts & Cinematography</p>
          <p class="text-cream/40 text-sm">University of Arts, Belgrade · 2007–2012</p>
        </div>
        <p class="font-display italic text-cream/20 text-4xl font-light">"Frame every decision like a shot."</p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const awards = [
  {
    title: 'Best of Swiss Apps 2025 — Design',
    organization: 'Best of Swiss Apps',
    medal: 'Bronze',
    year: '2025',
    badgeColor: '#C9A96E',
  },
  {
    title: 'Best of Swiss Apps 2025 — User Experience',
    organization: 'Best of Swiss Apps',
    medal: 'Bronze',
    year: '2025',
    badgeColor: '#C9A96E',
  },
]
</script>
