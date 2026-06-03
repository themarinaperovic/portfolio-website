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
          <p class="hero-sub">The collector's digital companion.</p>
        </div>

      </section>

      <!-- ── Overview strip ── -->
      <div class="overview-strip">
        <div class="overview-item">
          <span class="ov-label">Company</span>
          <span class="ov-val">Bucherer AG · Rolex Group</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">My Role</span>
          <span class="ov-val">Product Designer · End-to-end ownership</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Team</span>
          <span class="ov-val">PM · Front-end · Back-end · QA</span>
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

      <!-- ── Scope teaser ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ — ]</span> What the Work Covers</span>
          <span class="rule" />
        </div>

        <div class="scope-grid">
          <div class="scope-item">
            <span class="scope-num">01</span>
            <h3 class="scope-title">Add to Collection</h3>
            <p class="scope-desc">Enabling collectors to build a private in-app overview of everything they own. Watches and jewellery added piece by piece, attaching documents and photos, and tracking the full service history of each piece: insurance policies, CPO sales back to Bucherer, repair shipments, and more.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">02</span>
            <h3 class="scope-title">Watch Market Value Tracking</h3>
            <p class="scope-desc">Giving collectors and enthusiasts real-time insight into market movements, interest alerts, and watch valuations, building a feature set that rewards investment in the platform.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">03</span>
            <h3 class="scope-title">E-commerce Experience</h3>
            <p class="scope-desc">Designing the end-to-end shopping journey for one of Europe's most distinguished luxury watch and jewellery retailers, translating heritage brand codes into a quiet, frictionless digital language.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">04</span>
            <h3 class="scope-title">Notification Center</h3>
            <p class="scope-desc">Designing a smart notification system and interest-alert layer that keeps high-value clients informed without interrupting the silence that luxury demands.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">05</span>
            <h3 class="scope-title">Accessibility · WCAG</h3>
            <p class="scope-desc">Establishing scalable, WCAG-aligned accessibility standards across the platform, proving that inclusive design and luxury positioning are not in conflict.</p>
          </div>
          <div class="scope-item scope-item--award">
            <span class="scope-num award-num">✦ ✦</span>
            <h3 class="scope-title">Swiss Apps Awards '25</h3>
            <p class="scope-desc">The work was recognised with two Bronze awards at Swiss Apps 2025, <strong>Design</strong> and <strong>User Experience</strong>, one of the leading digital product awards in Switzerland.</p>
          </div>
        </div>

        <div class="nda-stage">
          <blockquote class="pull-quote">
            The full case study is on its way — precision takes time.
          </blockquote>
          <p class="body-copy">This is the most recent and ongoing project in the portfolio. The documentation is still being put together. In the meantime, two key features are documented below.</p>
        </div>
      </section>

      <!-- ── Add to Collection ── -->
      <section class="case-section atc-section">
        <div class="sect-header">
          <span><span class="num">[ 01 ]</span> Add to Collection</span>
          <span class="rule" />
        </div>

        <div class="atc-intro-grid">
          <div class="atc-intro-col">
            <span class="atc-intro-label">Need</span>
            <p class="body-copy">Bucherer's ambition has always been to offer exceptional, personalised service, not just at the point of sale, but throughout the entire ownership journey. Customers were expressing a clear need: a single place to manage what they owned, track service history, and stay connected to Bucherer after leaving the boutique. At the same time, the business saw an opportunity. A feature that gave collectors visibility over their collection would also give Bucherer visibility over their customers, enabling the company to identify trends, understand preferences, and deliver genuinely personalised offers rather than generic outreach.</p>
          </div>
          <div class="atc-intro-col">
            <span class="atc-intro-label">Approach</span>
            <p class="body-copy">Add to Collection gave every Bucherer customer a private digital home for their pieces, watches and jewellery alike. Collectors could import existing CRM entries or add manually, attach purchase documents and personal photographs, and manage the full lifecycle of each piece: insurance policies, CPO sale enquiries back to Bucherer, and repair shipments. The research process included interviews with sales staff, direct user interviews, and persona workshops, giving us both the front-of-house perspective and the collector's real mental model. A/B testing was used to validate key flows before rollout.</p>
          </div>
        </div>

        <div class="mv-decisions">
          <div class="mv-decision">
            <span class="mv-decision-num">—</span>
            <h3 class="mv-decision-title">Sales people know the customer best.</h3>
            <p class="mv-decision-desc">Before writing a single user story, we interviewed Bucherer's in-store sales staff. They spend hours each day with collectors, understand the language they use, the anxiety around documentation, and the pride of ownership. That perspective shaped the information architecture before any user research began.</p>
          </div>
          <div class="mv-decision">
            <span class="mv-decision-num">—</span>
            <h3 class="mv-decision-title">Personas grounded in real collector behaviour.</h3>
            <p class="mv-decision-desc">User interviews revealed a clear split: the active collector who tracks every piece meticulously, and the casual owner who wants reassurance without complexity. Both needed to succeed in the same flow. Personas guided every prioritisation decision: from what to show on the empty state to how much detail to surface on the collection overview.</p>
          </div>
          <div class="mv-decision">
            <span class="mv-decision-num">—</span>
            <h3 class="mv-decision-title">A/B testing for comprehension, not conversion.</h3>
            <p class="mv-decision-desc">We ran A/B tests across two distinct UX flows, not to optimise a funnel, but to understand which approach users actually grasped. The question was never which flow performed better on paper, but which one felt intuitive without explanation. Watching users navigate both variants revealed where mental models broke down and where the design was asking too much, informing the final flow directly.</p>
          </div>
        </div>

        <div class="atc-results">
          <div class="atc-result-intro">
            <span class="mv-states-tag">Results</span>
            <p class="mv-states-note">Results exceeded expectations and were growing at approximately 7% month-over-month. The collection saw strong adoption across both piece types. Consistent with Bucherer's core business, watches led significantly. Jewellery was always a secondary market for the company, and the numbers reflected that as expected.</p>
          </div>

          <div class="atc-stats">
            <div class="atc-stat-row atc-stat-row--primary">
              <div class="atc-stat">
                <span class="atc-stat-num">46.2K</span>
                <span class="atc-stat-label">Pieces imported from CRM</span>
                <span class="atc-stat-sub">76% of users imported their collection</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">26.7K</span>
                <span class="atc-stat-label">Pictures uploaded</span>
                <span class="atc-stat-sub">10.3% of users added pictures</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">7.0K</span>
                <span class="atc-stat-label">Documents uploaded</span>
                <span class="atc-stat-sub">3.6% of users added documents</span>
              </div>
            </div>

            <div class="atc-split-tiles">
              <div class="atc-stat">
                <span class="atc-stat-num">26.1K</span>
                <span class="atc-stat-label">Watches added to collections</span>
                <span class="atc-stat-sub">45.3% of users</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">959</span>
                <span class="atc-stat-label">Jewellery pieces added</span>
                <span class="atc-stat-sub">1.6% of users. Secondary market, as expected.</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- ── Market Value Estimate ── -->
      <section class="case-section mv-section">
        <div class="sect-header">
          <span><span class="num">[ 02 ]</span> Market Value Estimate</span>
          <span class="rule" />
        </div>

        <div class="mv-intro mv-intro--single">
          <p class="body-copy mv-lead">Market Value Estimate became one of the most visited features in the Bucherer app. It gives collectors a live view of their watch portfolio's estimated value, tracked over time. The real design challenge wasn't the data itself, it was the emotion around it. Watches are rarely just investments. They are gifts, milestones, things passed down. The feature had to be honest without being alarming, useful without being cold, and always feel like something Bucherer, a brand inside the Rolex Group, would stand behind.</p>
        </div>

        <div class="mv-decisions">
          <div class="mv-decision">
            <span class="mv-decision-num">—</span>
            <h3 class="mv-decision-title">Honest about value, careful about feeling.</h3>
            <p class="mv-decision-desc">For collectors, a watch is rarely just an asset. It can be a gift, an heirloom, something saved for over years. For the business, associating negative feelings with valued pieces would work against everything the brand stands for. We removed red from the value tracking palette and chose not to use downward arrow icons when a value drops. Changes are communicated through neutral tones and subtle cues, without alarm.</p>
          </div>
          <div class="mv-decision">
            <span class="mv-decision-num">—</span>
            <h3 class="mv-decision-title">Readable across every timeframe.</h3>
            <p class="mv-decision-desc">A chart showing 10 days of data looks very different from one covering two years. Curve density, label spacing, value granularity, all of it had to adapt per timeframe while the experience stayed visually consistent. Six timeframes, each with its own display logic, none of them feeling like a different product.</p>
          </div>
          <div class="mv-decision">
            <span class="mv-decision-num">—</span>
            <h3 class="mv-decision-title">Data-heavy, but still Bucherer.</h3>
            <p class="mv-decision-desc">Most financial dashboards are designed around density. This one had to feel quiet and precise, in line with a brand that chooses restraint over noise. Every number, label, and interaction was reduced to what a collector actually needs to know. Nothing decorative, nothing unnecessary.</p>
          </div>
        </div>

        <div class="mv-screens">
          <div class="mv-screen-slot">
            <img src="/case/bucherer/market1.webp" alt="Services screen — Market Value Estimate entry point" class="mv-screen-img" loading="lazy" />
            <p class="mv-screen-caption">Entry point from Services</p>
          </div>
          <div class="mv-screen-slot">
            <img src="/case/bucherer/market2.webp" alt="Collection overview — total portfolio value with chart" class="mv-screen-img" loading="lazy" />
            <p class="mv-screen-caption">Total collection value</p>
          </div>
          <div class="mv-screen-slot">
            <img src="/case/bucherer/market3.webp" alt="Single watch valuation with timeframe chart" class="mv-screen-img" loading="lazy" />
            <p class="mv-screen-caption">Per-watch breakdown</p>
          </div>
        </div>

        <div class="mv-states-row">
          <div class="mv-states-label">
            <span class="mv-states-tag">Edge cases</span>
            <p class="mv-states-note">The feature was designed across seven distinct states, from the standard interaction view to empty states for users with no watches or no available estimate. Each one was given the same care as the main flow, because edge cases are where composure matters most.</p>
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
  title: 'Bucherer AG — Marina Markus',
})
</script>

<style scoped>
main {
  padding-top: 80px;
}

/* ── Hero ── */
.hero {
  min-height: calc(100svh - 80px);
  padding: clamp(80px, 10vw, 160px) clamp(20px, 3.4vw, 56px) clamp(40px, 6vw, 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.hero-inner {
  max-width: 1200px;
}

.hero-meta {
  display: flex;
  gap: 30px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.65);
  margin-bottom: 32px;
}

.hero-title {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-size: clamp(48px, 9vw, 160px);
  line-height: 0.92;
  letter-spacing: -0.04em;
  color: #0B0C0B;
  margin-bottom: 28px;
}

.hero-title em {
  font-style: normal;
  color: #007070;
}

.hero-sub {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(18px, 2vw, 30px);
  color: rgba(11, 12, 11, 0.75);
  letter-spacing: -0.02em;
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
  color: rgba(11, 12, 11, 0.65);
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
  .hero { height: auto; min-height: unset; justify-content: flex-start; }
  .hero-title { letter-spacing: -0.025em; }
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
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  margin-bottom: 48px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.65);
}

.sect-header .rule {
  flex: 1;
  height: 1px;
  background: rgba(11, 12, 11, 0.15);
  max-width: 80px;
}

.num {
  color: #0B0C0B;
  font-weight: 500;
}

/* ── NDA stage ── */
.nda-stage {
  max-width: 68ch;
  margin-top: clamp(40px, 5vw, 64px);
}

.pull-quote {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(24px, 3vw, 48px);
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #0B0C0B;
  border-left: 2px solid #007070;
  padding-left: 32px;
  margin-bottom: 24px;
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
  color: #007070;
  border-color: #007070;
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
  background: #EAEAE8;
  padding: 28px 24px;
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
  color: rgba(11, 12, 11, 0.65);
}

.award-num {
  color: #B8933A;
  font-size: 16px;
}

.scope-title {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

.scope-item--award .scope-title {
  color: #EAEAE8;
}

.scope-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  line-height: 1.7;
  color: rgba(11, 12, 11, 0.65);
  margin: 0;
}

.scope-item--award .scope-desc {
  color: rgba(234, 234, 232, 0.5);
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

/* ── Market Value Estimate ── */
.mv-section {
  background: #0B0C0B;
  color: #EAEAE8;
}

.mv-section .sect-header {
  color: rgba(234, 234, 232, 0.65);
}

.mv-section .sect-header .rule {
  background: rgba(234, 234, 232, 0.12);
}

.mv-section .num {
  color: #EAEAE8;
}

.mv-section .mv-states-tag {
  color: #00A8A8;
}

.mv-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: clamp(60px, 8vw, 100px);
  align-items: start;
}

.mv-intro--single {
  grid-template-columns: 1fr;
  max-width: 72ch;
}

@media (max-width: 760px) {
  .mv-intro { grid-template-columns: 1fr; gap: 28px; }
}

.mv-headline {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-size: clamp(24px, 3vw, 44px);
  line-height: 1.1;
  letter-spacing: -0.025em;
  color: #EAEAE8;
  margin: 0;
}

.mv-lead {
  color: rgba(234, 234, 232, 0.8);
  margin: 0;
}

.mv-decisions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: rgba(234, 234, 232, 0.1);
  border: 1px solid rgba(234, 234, 232, 0.1);
  margin-bottom: clamp(60px, 8vw, 100px);
}

@media (max-width: 760px) {
  .mv-decisions { grid-template-columns: 1fr; }
}

.mv-decision {
  background: #0B0C0B;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mv-decision-num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 14px;
  color: #007070;
}

.mv-decision-title {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-size: clamp(18px, 1.6vw, 24px);
  letter-spacing: -0.02em;
  color: #EAEAE8;
  margin: 0;
}

.mv-decision-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  line-height: 1.75;
  color: rgba(234, 234, 232, 0.7);
  margin: 0;
}

.mv-screens {
  display: flex;
  gap: 24px;
  margin-bottom: clamp(60px, 8vw, 100px);
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 760px) {
  .mv-screens { width: 100%; flex-direction: column; margin-left: 0; margin-right: 0; }
}

.mv-screen-slot {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.mv-screen-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

.mv-screen-caption {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(234, 234, 232, 0.65);
  margin: 0;
}

.mv-states-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
  border-top: 1px solid rgba(234, 234, 232, 0.1);
  padding-top: 40px;
}

@media (max-width: 760px) {
  .mv-states-row { grid-template-columns: 1fr; gap: 24px; }
}

.mv-states-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #007070;
  margin-bottom: 14px;
}

.mv-states-note {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  line-height: 1.75;
  color: rgba(234, 234, 232, 0.65);
  margin: 0;
}

.mv-states-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-content: start;
}

.chip {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(234, 234, 232, 0.5);
  border: 1px solid rgba(234, 234, 232, 0.15);
  padding: 6px 12px;
  border-radius: 2px;
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
  color: rgba(11, 12, 11, 0.65);
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-back:hover,
.nav-next:hover {
  color: #0B0C0B;
}

/* ── Add to Collection ── */
.atc-results {
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  padding-top: 28px;
  margin-top: clamp(36px, 4vw, 52px);
}

.atc-intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 4vw, 64px);
  margin-bottom: clamp(36px, 4vw, 52px);
}

.atc-intro-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  padding-top: 20px;
}

.atc-intro-col .body-copy {
  margin-bottom: 0;
}

.atc-intro-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #007070;
}

@media (max-width: 760px) {
  .atc-intro-grid { grid-template-columns: 1fr; }
}

.atc-section .mv-decisions {
  margin-bottom: clamp(36px, 4vw, 52px);
}

/* Cream mv- classes reused on light bg — override to ink */

.atc-section .mv-states-note {
  color: rgba(11, 12, 11, 0.7);
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.6;
  letter-spacing: 0;
}

.atc-result-intro {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.atc-stats {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(11, 12, 11, 0.1);
  border: 1px solid rgba(11, 12, 11, 0.1);
}

.atc-stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(11, 12, 11, 0.1);
}

.atc-stat {
  background: #EAEAE8;
  padding: clamp(20px, 2.5vw, 32px) clamp(20px, 2.5vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.atc-stat-num {
  font-family: 'Stack Sans Notch', sans-serif;
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #0B0C0B;
}

.atc-stat-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.65);
  line-height: 1.4;
}

.atc-stat-sub {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgba(11, 12, 11, 0.65);
}

.atc-split-tiles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.1);
}

@media (max-width: 760px) {
  .atc-split-tiles { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .atc-stat-row { grid-template-columns: 1fr; }
  .atc-result-intro { max-width: 100%; }
}

</style>
