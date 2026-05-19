<template>
  <div class="min-h-screen">
    <AppHeader />
    <main>
      <HeroSection />
      <div class="status-strip" aria-label="Site status">
        <div class="status-tag">
          <span class="status-dot" />
          <span>WIP — 2026</span>
        </div>
        <div class="status-track">
          <div class="status-marquee">
            <span v-for="i in 8" :key="i" class="status-item">
              This portfolio is currently in its
              <em>&ldquo;just one more tiny adjustment&rdquo;</em>
              phase.
              <span class="status-sep">✦</span>
            </span>
          </div>
        </div>
        <div class="status-tag status-tag--right">
          <span>v0.9.<span class="status-blink">_</span></span>
        </div>
      </div>
      <AboutSection />
      <ProjectsSection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { initReveal } = useScrollReveal()

onMounted(() => {
  initReveal()
})
</script>

<style scoped>
.status-strip {
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  background: #2C2A26;
  color: #E8E2D5;
  padding: 16px clamp(20px, 3.4vw, 56px);
  border-top: 1px solid rgba(232, 226, 213, 0.06);
  border-bottom: 1px solid rgba(232, 226, 213, 0.06);
  overflow: hidden;
}

.status-tag {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(232, 226, 213, 0.45);
  z-index: 2;
}

.status-tag--right {
  margin-left: auto;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: #C9A96E;
}

.status-blink {
  display: inline-block;
  color: #D63D14;
  animation: statusBlink 1.1s steps(1) infinite;
}

@keyframes statusBlink {
  50% { opacity: 0; }
}

.status-track {
  flex: 1 1 auto;
  position: relative;
  overflow: hidden;
  mask-image: linear-gradient(to right,
    transparent 0,
    #000 80px,
    #000 calc(100% - 80px),
    transparent 100%);
  -webkit-mask-image: linear-gradient(to right,
    transparent 0,
    #000 80px,
    #000 calc(100% - 80px),
    transparent 100%);
}

.status-marquee {
  display: inline-flex;
  white-space: nowrap;
  animation: statusTicker 38s linear infinite;
  will-change: transform;
}

.status-strip:hover .status-marquee {
  animation-play-state: paused;
}

@keyframes statusTicker {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.status-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding-right: 28px;
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(14px, 1.05vw, 17px);
  font-weight: 300;
  letter-spacing: 0.005em;
  color: rgba(232, 226, 213, 0.78);
}

.status-item em {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-weight: 300;
  font-variation-settings: 'opsz' 144, 'SOFT' 100;
  color: #C9A96E;
  font-size: 1.45em;
  line-height: 1;
  letter-spacing: -0.01em;
  padding: 0 4px;
}

.status-sep {
  color: rgba(232, 226, 213, 0.22);
  font-size: 11px;
  margin-left: 4px;
  transform: translateY(-1px);
}

@media (max-width: 760px) {
  .status-strip { gap: 14px; padding: 14px 18px; }
  .status-tag--right { display: none; }
  .status-item { font-size: 13.5px; padding-right: 22px; }
}

@media (prefers-reduced-motion: reduce) {
  .status-marquee { animation: none; }
  .status-dot { animation: none; }
  .status-blink { animation: none; }
}
</style>
