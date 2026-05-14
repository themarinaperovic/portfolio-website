<template>
  <section id="awards" class="awards-section">
    <div class="awards-inner">

      <!-- Section label -->
      <div class="sect-label" data-reveal>
        <span>[ 03 ] — Recognition</span>
        <span class="rule" />
      </div>

      <div class="awards-grid">

        <!-- Left: headline -->
        <div data-reveal>
          <h2 class="awards-headline">
            Work that<br/>gets noticed.
          </h2>
          <p class="award-eyebrow">Best of Swiss Apps 2025</p>
          <p class="awards-body">
            Two bronze medals — one for Design, one for User Experience. Awarded to the Bucherer app, alongside a small, very talented team. Not bad for someone who started with a camera.
          </p>
        </div>

        <!-- Right: awards -->
        <div class="awards-list" data-reveal style="--delay: 150ms">
          <div
            v-for="(award, i) in awards"
            :key="i"
            class="award-row"
          >
            <div class="award-meta">
              <span class="award-medal">{{ award.medal }}</span>
              <span class="award-year">{{ award.year }}</span>
            </div>
            <h3 class="award-title">{{ award.title }}</h3>
            <p class="award-org">{{ award.organization }}</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const awards = [
  {
    title: 'Design',
    organization: 'Bucherer · Best of Swiss Apps',
    medal: 'Bronze',
    year: '2025',
  },
  {
    title: 'User Experience',
    organization: 'Bucherer · Best of Swiss Apps',
    medal: 'Bronze',
    year: '2025',
  },
]
</script>

<style scoped>
.awards-section {
  background: #2C2A26;
  color: #E8E2D5;
  padding: clamp(80px, 10vw, 140px) clamp(20px, 3.4vw, 56px);
}

.awards-inner {
  max-width: 1400px;
  margin: 0 auto;
}

/* Section label */
.sect-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: clamp(40px, 6vw, 80px);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(232, 226, 213, 0.4);
}

.sect-label .rule {
  flex: 1;
  height: 1px;
  background: rgba(232, 226, 213, 0.12);
  max-width: 80px;
}

/* Grid */
.awards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 880px) {
  .awards-grid { grid-template-columns: 1fr; gap: 48px; }
}

/* Headline */
.awards-headline {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(24px, 2.8vw, 38px);
  line-height: 1.15;
  letter-spacing: -0.015em;
  color: rgba(232, 226, 213, 0.85);
  margin-bottom: 24px;
}

.award-eyebrow {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(232, 226, 213, 0.4);
  margin-bottom: 14px;
}

.awards-body {
  font-size: 15px;
  line-height: 1.65;
  color: rgba(232, 226, 213, 0.6);
  max-width: 46ch;
}

/* Award rows */
.awards-list {
  display: flex;
  flex-direction: column;
}

.award-row {
  border-top: 1px solid rgba(232, 226, 213, 0.1);
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.award-row:last-child {
  border-bottom: 1px solid rgba(232, 226, 213, 0.1);
}

.award-meta {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 8px;
}

.award-medal {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 400;
  font-style: italic;
  font-size: clamp(22px, 2.4vw, 32px);
  letter-spacing: -0.01em;
  color: #C9A96E;
}

.award-year {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(232, 226, 213, 0.3);
}

.award-title {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(232, 226, 213, 0.7);
  margin: 0;
}

.award-org {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(232, 226, 213, 0.3);
  margin: 2px 0 0;
}
</style>
