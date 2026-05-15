<template>
  <div>
    <AppHeader />

    <main>

      <!-- ── Hero ── -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-meta">
            <span>Snapshots · Miscellaneous</span>
            <span>Web · Mobile · Interface Design</span>
          </div>
          <h1 class="hero-title"><em>Here</em><br><span class="amp">&amp;</span> There.</h1>
          <p class="hero-sub">Real work, presented as screens — not every project needs a case study to prove it happened.</p>
        </div>
        <p class="hero-coming-soon">Coming soon</p>
      </section>

      <!-- ── Overview strip ── -->
      <div class="overview-strip">
        <div class="overview-item">
          <span class="ov-label">Type</span>
          <span class="ov-val">Miscellaneous · Archive</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Medium</span>
          <span class="ov-val">Web · iOS · Android</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Period</span>
          <span class="ov-val">2021 → ongoing</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Status</span>
          <span class="ov-val ov-val--pending">Coming soon</span>
        </div>
      </div>

      <!-- ── Coming soon ── -->
      <section class="coming-soon">
        <p class="cs-label">[ — ] In assembly</p>
        <h2 class="cs-title">Various. Assorted. <em>All real.</em></h2>
        <p class="cs-body">Not every project needs a ten-page breakdown to be worth showing. Web and app designs across different clients, briefs and moments — presented as screens, not stories.</p>
      </section>

      <!-- ── Nav ── -->
      <div class="case-nav">
        <NuxtLink to="/#work" class="nav-back" data-hoverable>
          <span>←</span> Back to work
        </NuxtLink>
        <NuxtLink to="/projects/bucherer" class="nav-next" data-hoverable>
          Back to top — Bucherer <span>→</span>
        </NuxtLink>
      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Here & There — Snapshots · Marina Markus',
})
</script>

<style scoped>
main {
  padding-top: 80px;
}

/* ── Hero ── */
.hero {
  padding: clamp(80px, 10vw, 160px) clamp(20px, 3.4vw, 56px) 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: end;
}

.hero-inner {
  max-width: 900px;
}

@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; }
  .hero-coming-soon { display: none; }
}

.hero-meta {
  display: flex;
  gap: 30px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.55);
  margin-bottom: 32px;
}

.hero-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(80px, 15vw, 240px);
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: #0B0C0B;
  margin-bottom: 32px;
}

.hero-title em {
  font-style: italic;
  color: #D63D14;
}

.amp {
  font-style: italic;
  color: rgba(11, 12, 11, 0.18);
}

.hero-coming-soon {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(28px, 3.5vw, 52px);
  letter-spacing: -0.02em;
  color: rgba(11, 12, 11, 0.25);
  align-self: center;
  margin-bottom: clamp(40px, 5vw, 80px);
  white-space: nowrap;
}

.hero-sub {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(18px, 2vw, 28px);
  color: rgba(11, 12, 11, 0.45);
  letter-spacing: -0.02em;
  max-width: 48ch;
}

/* ── Overview strip ── */
.overview-strip {
  display: flex;
  border-top: 1px solid rgba(11, 12, 11, 0.15);
  border-bottom: 1px solid rgba(11, 12, 11, 0.15);
  margin: 60px 0 0;
}

.overview-item {
  flex: 1;
  padding: 24px clamp(20px, 3.4vw, 56px);
  border-right: 1px solid rgba(11, 12, 11, 0.15);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.overview-item:last-child {
  border-right: none;
}

.ov-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.45);
}

.ov-val {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #0B0C0B;
}

.ov-val--pending {
  color: rgba(11, 12, 11, 0.35);
}

@media (max-width: 760px) {
  .overview-strip { flex-wrap: wrap; }
  .overview-item { flex: 1 1 50%; border-bottom: 1px solid rgba(11, 12, 11, 0.15); }
}

/* ── Coming soon ── */
.coming-soon {
  padding: clamp(80px, 12vw, 180px) clamp(20px, 3.4vw, 56px);
  border-top: 1px solid rgba(11, 12, 11, 0.15);
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.cs-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.4);
}

.cs-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(22px, 2.8vw, 42px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #0B0C0B;
}

.cs-title em {
  font-style: italic;
  color: #D63D14;
}

.cs-body {
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.55);
  max-width: 56ch;
}

/* ── Case nav ── */
.case-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px clamp(20px, 3.4vw, 56px);
  border-top: 1px solid rgba(11, 12, 11, 0.15);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.nav-back,
.nav-next {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(11, 12, 11, 0.55);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-back:hover,
.nav-next:hover {
  color: #0B0C0B;
}
</style>
