<template>
  <div>
    <AppHeader />

    <main>

      <!-- ── Hero ── -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-meta">
            <span>Kroon Studio · Pro bono</span>
            <span>UX/UI Designer · Research Lead</span>
          </div>
          <h1 class="hero-title">For the<br><em>love of dog.</em></h1>
          <p class="hero-sub">Dogster — platform dedicated to reducing abandonment and promoting adoption</p>
        </div>

        <div class="paw-wrap">
        <p class="coming-soon-label">Coming soon</p>
        <div class="paw-ornament" aria-hidden="true">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="72" r="28" stroke="currentColor" stroke-width="1" opacity="0.2"/>
            <circle cx="35" cy="38" r="13" stroke="currentColor" stroke-width="1" opacity="0.15"/>
            <circle cx="60" cy="28" r="13" stroke="currentColor" stroke-width="1" opacity="0.15"/>
            <circle cx="85" cy="38" r="13" stroke="currentColor" stroke-width="1" opacity="0.15"/>
            <circle cx="60" cy="72" r="28" fill="none"/>
          </svg>
        </div>
        </div>
      </section>

      <!-- ── Overview strip ── -->
      <div class="overview-strip">
        <div class="overview-item">
          <span class="ov-label">Role</span>
          <span class="ov-val">UX/UI Designer · Research</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Studio</span>
          <span class="ov-val">Kroon Studio</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Platform</span>
          <span class="ov-val">Web</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Type</span>
          <span class="ov-val">Research · Proposal · Pro bono</span>
        </div>
      </div>

      <!-- ── Coming soon ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ — ]</span> — Case Study in Preparation</span>
        </div>

        <div class="intro-stage">
          <blockquote class="pull-quote">
            Learn to love and never leave.
          </blockquote>
          <p class="body-copy">A research and design proposal for Dogster — a web platform built to tackle one of the more human problems in animal welfare: people who want to adopt but don't know where to start, shelters that can't find the visibility they need, and dogs that end up on the street because support ran out. The full case study is on its way.</p>
        </div>
      </section>

      <!-- ── Scope ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ — ]</span> — What the Work Covers</span>
        </div>

        <div class="scope-grid">
          <div class="scope-item">
            <span class="scope-num">01</span>
            <h3 class="scope-title">User Research</h3>
            <p class="scope-desc">Mapped four distinct user types — potential adopters, shelters, fosters, and dog owners — each with different motivations, pain points, and KPIs. Research informed a value proposition canvas and validated through interviews and ad-tracking experiments.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">02</span>
            <h3 class="scope-title">Platform Design</h3>
            <p class="scope-desc">Designed a unified space for adoption listings, verified shelter and foster profiles, dog health records, and direct adoption flows — replacing scattered social media groups with a single trusted channel.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">03</span>
            <h3 class="scope-title">Education & Retention</h3>
            <p class="scope-desc">Built a content strategy around education — blog, Q&A, quizzes, success stories, vaccination reminders — to keep users engaged well beyond the adoption moment and reduce abandonment at the root.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">04</span>
            <h3 class="scope-title">Gamification</h3>
            <p class="scope-desc">Introduced quiz-based engagement and a referral programme — giving users a reason to return, share, and bring others into the community organically.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">05</span>
            <h3 class="scope-title">Revenue Model</h3>
            <p class="scope-desc">Defined a sustainable model for a pro-bono-born product: primary revenue through ads and online donations, secondary through grooming and service listings, grant funding, and brand partnerships.</p>
          </div>
          <div class="scope-item scope-item--warm">
            <span class="scope-num">↳</span>
            <h3 class="scope-title">Why it matters</h3>
            <p class="scope-desc">Dog abandonment is a systemic problem with a design opportunity at its centre. This project was done entirely pro bono — because some problems are worth solving regardless of the brief.</p>
          </div>
        </div>
      </section>

      <!-- ── Nav ── -->
      <div class="case-nav">
        <NuxtLink to="/#work" class="nav-back" data-hoverable>
          <span>←</span> Back to work
        </NuxtLink>
        <NuxtLink to="/projects/snapshots" class="nav-next" data-hoverable>
          Next — Here &amp; There <span>→</span>
        </NuxtLink>
      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'For the Love of Dog — Kroon Studio · Marina Markus',
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
  .paw-wrap { display: none; }
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
  font-size: clamp(64px, 12vw, 200px);
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: #0B0C0B;
  margin-bottom: 28px;
}

.hero-title em {
  font-style: normal;
  color: #D63D14;
}

.hero-sub {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(16px, 1.8vw, 26px);
  color: rgba(11, 12, 11, 0.45);
  letter-spacing: -0.02em;
  max-width: 44ch;
}

/* ── Paw ornament ── */
.paw-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: center;
  margin-bottom: clamp(40px, 5vw, 80px);
}

.coming-soon-label {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(28px, 3.5vw, 52px);
  letter-spacing: -0.02em;
  color: rgba(11, 12, 11, 0.25);
}

.paw-ornament {
  width: clamp(100px, 14vw, 200px);
  height: clamp(100px, 14vw, 200px);
  flex-shrink: 0;
  color: #0B0C0B;
  opacity: 0.6;
}

.paw-ornament svg {
  width: 100%;
  height: 100%;
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

.intro-stage {
  max-width: 68ch;
}

.pull-quote {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: normal;
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

.scope-item--warm {
  background: #0B0C0B;
}

.scope-num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  color: rgba(11, 12, 11, 0.3);
}

.scope-item--warm .scope-num {
  color: #D63D14;
}

.scope-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

.scope-item--warm .scope-title {
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

.scope-item--warm .scope-desc {
  color: rgba(232, 226, 213, 0.5);
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
