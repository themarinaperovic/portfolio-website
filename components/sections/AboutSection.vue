<template>
  <section id="about" class="py-28 md:py-40 px-6 md:px-12">
    <div class="max-w-[1400px] mx-auto">

      <!-- Section label -->
      <div class="flex items-center gap-4 mb-16" data-reveal>
        <span class="text-xs tracking-widest uppercase font-semibold text-smoke">01 / About</span>
        <span class="flex-1 h-px bg-border max-w-[80px]" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        <!-- Left: text -->
        <div class="flex flex-col justify-between gap-12">
          <div>
            <h2 class="font-display italic font-light text-5xl md:text-6xl lg:text-7xl leading-tight text-ink mb-8" data-reveal style="--delay: 100ms">
              From lens<br/>to interface.
            </h2>

            <div class="space-y-6 text-smoke text-lg leading-relaxed" data-reveal style="--delay: 200ms">
              <p>
                Before pixels, there were frames. I spent over a decade behind the camera — studying light, composition, and the story a single moment can tell. That same obsession with <em class="font-display italic text-ink">visual truth</em> now drives every interface I design.
              </p>
              <p>
                I specialize in making complex systems feel effortless — whether that's a luxury e-commerce platform for Bucherer AG, a white-labeled SaaS ecosystem serving 100,000+ fitness users, or a social impact platform that connects dogs with their forever families.
              </p>
              <p>
                Design, to me, is never decoration. It's the difference between confusion and clarity. Between a product people tolerate and one they <em class="font-display italic text-ink">love</em>.
              </p>
            </div>
          </div>

          <!-- Competencies -->
          <div data-reveal style="--delay: 300ms">
            <p class="text-xs tracking-widest uppercase font-semibold text-smoke mb-5">Core Competencies</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in skills"
                :key="skill"
                class="text-sm border border-border px-4 py-1.5 rounded-full text-ink/80 hover:border-ink hover:text-ink transition-colors duration-200"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right: visual card + experience -->
        <div class="flex flex-col gap-8">

          <!-- Abstract visual -->
          <div
            class="relative aspect-[4/3] bg-ink rounded-sm overflow-hidden"
            data-reveal="right"
          >
            <!-- Central statement (SSR safe) -->
            <div class="absolute inset-0 flex items-center justify-center">
              <p class="font-display italic text-cream text-5xl md:text-6xl font-light leading-tight opacity-90 text-center">
                Art<br/>meets<br/>function.
              </p>
            </div>

            <!-- Purely decorative overlays — client-only to avoid SSR hydration mismatches -->
            <ClientOnly>
              <div class="absolute top-8 left-8 right-8 bottom-8 grid grid-cols-3 grid-rows-3 gap-2 opacity-20 pointer-events-none">
                <div v-for="(op, i) in cellOpacities" :key="i" class="bg-cream/30 rounded-[1px]" :style="`opacity: ${op}`" />
              </div>
              <div class="absolute bottom-6 right-6 grid grid-cols-5 grid-rows-4 gap-1.5 pointer-events-none">
                <div v-for="n in 20" :key="n" class="w-1 h-1 rounded-full bg-cream/20" />
              </div>
            </ClientOnly>
          </div>

          <!-- Experience timeline -->
          <div class="space-y-0" data-reveal style="--delay: 150ms">
            <p class="text-xs tracking-widest uppercase font-semibold text-smoke mb-5">Experience</p>
            <div
              v-for="(job, i) in experience"
              :key="i"
              class="flex items-start justify-between py-4 border-t border-border last:border-b group hover:px-2 transition-all duration-300"
            >
              <div class="flex flex-col gap-0.5">
                <span class="font-semibold text-sm text-ink group-hover:text-fire transition-colors duration-300">{{ job.title }}</span>
                <span class="text-xs text-smoke">{{ job.company }}</span>
              </div>
              <span class="text-xs text-smoke shrink-0 ml-4 mt-0.5">{{ job.period }}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fixed values — Math.random() in templates causes SSR hydration mismatches
const cellOpacities = [0.35, 0.65, 0.45, 0.80, 0.30, 0.90, 0.55, 0.40, 0.70]

const skills = [
  'UX Research', 'UI Design', 'Design Systems', 'Accessibility (WCAG)',
  'B2B SaaS', 'E-commerce', 'Prototyping', 'Figma', 'Stakeholder Management',
]

const experience = [
  { title: 'UX/UI Designer', company: 'Bucherer AG × Holycode', period: '2024–2026' },
  { title: 'UX/UI Designer', company: 'ABC Fitness Solutions × Kroon Studio', period: '2021–2024' },
  { title: 'Self-Employed Designer', company: 'Freelance', period: '2020–2021' },
  { title: 'Franchise Owner & Photographer', company: 'Vista Photography SL', period: '2016–2023' },
]
</script>
