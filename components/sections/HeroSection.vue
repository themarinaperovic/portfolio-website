<template>
  <section class="relative min-h-screen flex flex-col justify-between overflow-hidden"
    style="padding: 130px clamp(20px,3.4vw,56px) 60px">

    <!-- Three.js canvas (client only to avoid SSR) -->
    <ClientOnly>
      <HeroCanvas />
    </ClientOnly>

    <!-- Top meta bar -->
    <div
      class="relative z-10 flex justify-between font-mono text-[11px] tracking-[0.1em] uppercase"
      style="color: rgba(11,12,11,0.55)"
      :style="{ opacity: isReady ? 1 : 0, transition: 'opacity 0.8s ease 0.5s' }"
    >
      <div class="max-w-[34ch]">
        <span>Portfolio</span><br>
        <span style="color: #0B0C0B">Selected works, fragments &amp; frames.</span>
      </div>
    </div>

    <!-- Name title -->
    <div class="relative z-10 flex flex-col my-auto pointer-events-none">
      <h1
        class="font-display font-light leading-[0.86] tracking-[-0.045em] hero-name"
        style="font-size: clamp(74px, 16vw, 285px); font-variation-settings: 'opsz' 144; color: #0B0C0B"
      >
        <div class="overflow-hidden flex items-baseline">
          <span
            class="inline-block"
            :style="{
              transform: isReady ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1.4s cubic-bezier(.7,.05,.2,1) 0.05s',
            }"
          >Marina</span>
        </div>
        <div class="overflow-hidden flex items-baseline">
          <span
            class="inline-block"
            :style="{
              transform: isReady ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1.4s cubic-bezier(.7,.05,.2,1) 0.2s',
            }"
          >
            <em
              style="font-style: normal; color: #D63D14; font-variation-settings: 'opsz' 144, 'SOFT' 100"
            >Markus</em><sup
              class="font-mono"
              style="font-style: normal; color: #0B0C0B; font-weight: 400; font-size: 0.13em; letter-spacing: 0.05em; vertical-align: top; margin-left: 0.15em"
            >★</sup>
          </span>
        </div>
      </h1>
    </div>

    <!-- Bottom grid: Discipline · Trajectory · Scroll -->
    <div
      class="relative z-10 grid items-end font-mono text-[11px] tracking-[0.08em] uppercase bottom-grid"
      style="gap: 30px; grid-template-columns: 1.4fr 1fr 1fr;"
      :style="{ opacity: isReady ? 1 : 0, transition: 'opacity 0.9s ease 0.72s' }"
    >
      <div>
        <span class="block font-medium mb-2 label">Discipline</span>
        <p class="body-p" style="line-height: 1.6">
          Product design, design systems, research, and the slow craft of getting the interface out of the way.
        </p>

      </div>
      <div>
        <span class="block font-medium mb-2 label">Trajectory</span>
        <p class="body-p" style="line-height: 1.6">
          Photography → Interfaces. Twelve years behind a lens, six years inside a viewport.
        </p>
      </div>
      <div class="flex items-center gap-2.5 justify-self-end scroll-cue">
        <span class="scroll-label">Scroll</span>
        <span class="scroll-cue-line" />
        <span class="scroll-label">↓</span>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const isReady = useAppReady()
</script>

<style scoped>
.bottom-grid { color: #0B0C0B; }
.body-p { color: rgba(11, 12, 11, 0.55); }
.scroll-label { color: rgba(11, 12, 11, 0.55); }

@media (max-width: 760px) {
  .bottom-grid {
    color: rgba(232, 226, 213, 0.9);
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }
  .body-p { color: rgba(232, 226, 213, 0.6); }
  .scroll-label { color: rgba(232, 226, 213, 0.6); }
  .scroll-cue-line { background: rgba(232, 226, 213, 0.4); }
  .hero-name { color: rgba(232, 226, 213, 0.9) !important; }
  .scroll-cue { justify-self: start; }
}

.scroll-cue-line {
  display: inline-block;
  width: 36px;
  height: 1px;
  background: var(--ink, #0B0C0B);
  position: relative;
  overflow: hidden;
}

.scroll-cue-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--accent, #D63D14);
  transform: translateX(-100%);
  animation: scrollLine 2.4s cubic-bezier(.7,.05,.2,1) infinite;
}

@keyframes scrollLine {
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

</style>
