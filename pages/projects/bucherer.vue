<template>
  <div>
    <AppHeader />

    <main>

      <!-- ── Hero ── -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-meta">
            <span>Bucherer AG</span>
            <span>Senior UX/UI Designer · 2024 — 2026</span>
          </div>
          <h1 class="hero-title">Timeless elegance,<br><em>exceptional craftsmanship.</em></h1>
          <p class="hero-sub">Swiss luxury e-commerce · Rolex Group</p>
        </div>

        <!-- Decorative grid — watch dial reference -->
        <div class="hero-ornament" aria-hidden="true">
          <div class="dial-ring">
            <span v-for="n in 60" :key="n" class="tick" :class="n % 5 === 0 ? 'tick--hour' : ''" :style="`--i: ${n}`" />
          </div>
        </div>
      </section>

      <!-- ── Overview strip ── -->
      <div class="overview-strip">
        <div class="overview-item">
          <span class="ov-label">Role</span>
          <span class="ov-val">Senior UX/UI Designer</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Company</span>
          <span class="ov-val">Bucherer AG · Rolex Group</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Platform</span>
          <span class="ov-val">iOS · Android</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Recognition</span>
          <span class="ov-val ov-val--award">2× Bronze · Swiss Apps '25</span>
        </div>
      </div>

      <!-- ── Coming soon notice ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ — ]</span> — Case Study in Preparation</span>
        </div>

        <div class="nda-stage">
          <blockquote class="pull-quote">
            The full case study is on its way — precision takes time.
          </blockquote>
          <p class="body-copy">This is the most recent and ongoing project in the portfolio. The documentation is still being put together. In the meantime, the scope below gives a sense of what the work covers.</p>
        </div>
      </section>

      <!-- ── Scope teaser ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ — ]</span> — What the Work Covers</span>
        </div>

        <div class="scope-grid">
          <div class="scope-item">
            <span class="scope-num">01</span>
            <h3 class="scope-title">E-commerce Experience</h3>
            <p class="scope-desc">Designing the end-to-end shopping journey for one of Europe's most distinguished luxury watch and jewellery retailers — translating heritage brand codes into a quiet, frictionless digital language.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">02</span>
            <h3 class="scope-title">Watch Market & Value Tracking</h3>
            <p class="scope-desc">Giving collectors and enthusiasts real-time insight into market movements, interest alerts, and watch valuations — building a feature set that rewards investment in the platform.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">03</span>
            <h3 class="scope-title">Jewellery Category</h3>
            <p class="scope-desc">Introducing an entirely new product category — reshaping how collectors discover and add fine jewellery to their collections within the existing platform architecture.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">04</span>
            <h3 class="scope-title">Notification Center</h3>
            <p class="scope-desc">Designing a smart notification system and interest-alert layer that keeps high-value clients informed without interrupting the silence that luxury demands.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">05</span>
            <h3 class="scope-title">Accessibility · WCAG</h3>
            <p class="scope-desc">Establishing scalable, WCAG-aligned accessibility standards across the platform — proving that inclusive design and luxury positioning are not in conflict.</p>
          </div>
          <div class="scope-item scope-item--award">
            <span class="scope-num award-num">✦ ✦</span>
            <h3 class="scope-title">Swiss Apps Awards '25</h3>
            <p class="scope-desc">The work was recognised with two Bronze awards at Swiss Apps 2025 — <strong>Design</strong> and <strong>User Experience</strong> — one of the leading digital product awards in Switzerland.</p>
          </div>
        </div>
      </section>

      <!-- ── Nav ── -->
      <div class="case-nav">
        <NuxtLink to="/#work" class="nav-back" data-hoverable>
          <span>←</span> Back to work
        </NuxtLink>
        <NuxtLink to="/projects/abc-redesign" class="nav-next" data-hoverable>
          Next — Reinventing fitness <span>→</span>
        </NuxtLink>
      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Timeless Elegance — Bucherer AG · Marina Markus',
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

@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; }
  .hero-ornament { display: none; }
}

.hero-inner {
  max-width: 900px;
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
  font-size: clamp(48px, 9vw, 160px);
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: #0B0C0B;
  margin-bottom: 28px;
}

.hero-title em {
  font-style: italic;
  color: #D63D14;
}

.hero-sub {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(18px, 2vw, 30px);
  color: rgba(11, 12, 11, 0.45);
  letter-spacing: -0.02em;
}

/* ── Watch dial ornament ── */
.hero-ornament {
  width: clamp(160px, 18vw, 280px);
  height: clamp(160px, 18vw, 280px);
  flex-shrink: 0;
  align-self: center;
  margin-bottom: clamp(40px, 5vw, 80px);
}

.dial-ring {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid rgba(11, 12, 11, 0.15);
}

.tick {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 6%;
  background: rgba(11, 12, 11, 0.2);
  transform-origin: top center;
  transform: rotate(calc(var(--i) * 6deg)) translateX(-50%) translateY(calc(-50% - 44%));
}

.tick--hour {
  height: 12%;
  width: 1.5px;
  background: rgba(11, 12, 11, 0.55);
}

/* ── Overview strip ── */
.overview-strip {
  display: flex;
  gap: 0;
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

.ov-val--award {
  color: #B8933A;
}

@media (max-width: 760px) {
  .overview-strip { flex-wrap: wrap; }
  .overview-item { flex: 1 1 50%; border-bottom: 1px solid rgba(11, 12, 11, 0.15); }
}

/* ── Case sections ── */
.case-section {
  padding: clamp(60px, 8vw, 120px) clamp(20px, 3.4vw, 56px);
}

.case-section--alt {
  background: rgba(11, 12, 11, 0.03);
}

.sect-header {
  display: flex;
  align-items: baseline;
  border-top: 1px solid rgba(11, 12, 11, 0.15);
  padding-top: 20px;
  margin-bottom: 48px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.55);
}

.num {
  color: #0B0C0B;
  font-weight: 500;
}

/* ── NDA stage ── */
.nda-stage {
  max-width: 68ch;
}

.pull-quote {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(24px, 3vw, 48px);
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #0B0C0B;
  border-left: 2px solid #D63D14;
  padding-left: 32px;
  margin-bottom: 40px;
}

.body-copy {
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.7);
  margin-bottom: 24px;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0B0C0B;
  text-decoration: none;
  border-bottom: 1px solid rgba(11, 12, 11, 0.3);
  padding-bottom: 4px;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.cta-link:hover {
  color: #D63D14;
  border-color: #D63D14;
}

.cta-link .arrow {
  transition: transform 0.3s ease;
}

.cta-link:hover .arrow {
  transform: translateX(4px);
}

/* ── Scope grid ── */
.scope-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
}

.scope-item {
  background: #E8E2D5;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.scope-item--award {
  background: #0B0C0B;
}

.scope-num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: rgba(11, 12, 11, 0.3);
}

.award-num {
  color: #B8933A;
  font-size: 16px;
}

.scope-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

.scope-item--award .scope-title {
  color: #E8E2D5;
}

.scope-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  line-height: 1.7;
  color: rgba(11, 12, 11, 0.55);
  margin: 0;
}

.scope-item--award .scope-desc {
  color: rgba(232, 226, 213, 0.5);
}

.scope-item--award .scope-desc strong {
  color: #B8933A;
  font-weight: 500;
}

@media (max-width: 880px) {
  .scope-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 560px) {
  .scope-grid { grid-template-columns: 1fr; }
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
