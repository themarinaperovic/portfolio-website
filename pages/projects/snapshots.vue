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
          <p class="hero-sub">Not every project needs a case study.</p>
        </div>
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
          <span class="ov-val">2020 → ongoing</span>
        </div>
      </div>

      <!-- ── THE STUDIO ── -->
      <section class="snap-section">

        <div class="snap-header">
          <div class="snap-meta">
            <span class="snap-index">[ 01 ]</span>
            <span class="snap-rule" />
            <span class="snap-title">The Studio</span>
          </div>
          <div class="snap-info">
            <span class="snap-tag">Web</span>
            <span class="snap-tag">Architecture · Interior Design</span>
          </div>
        </div>

        <div class="snap-body">
          <p class="snap-desc">
            A website for an architecture and interior design studio — dark, deliberate, and built around the work itself. The concept centred on an interactive floor-plan navigator: hover a room, see its portfolio. Spatial thinking, applied to the screen.
          </p>
        </div>

        <!-- Image grid -->
        <div class="studio-grid">
          <img src="/case/snapshots/studio/mb-9.webp" alt="The Studio — About page" loading="lazy" />
          <img src="/case/snapshots/studio/mb-7.webp" alt="The Studio — Interactive floor plan" loading="lazy" />
          <img src="/case/snapshots/studio/mb-8.webp" alt="The Studio — Portfolio gallery" loading="lazy" />
          <img src="/case/snapshots/studio/mb-15.webp" alt="The Studio — Contact page" loading="lazy" />
        </div>

      </section>

      <!-- ── WORKSHOP ── -->
      <section class="snap-section workshop-section">

        <div class="snap-header">
          <div class="snap-meta">
            <span class="snap-index">[ 02 ]</span>
            <span class="snap-rule" />
            <span class="snap-title">The Workshop</span>
          </div>
          <div class="snap-info">
            <span class="snap-tag">Web</span>
            <span class="snap-tag">Woodworking · Lighting</span>
          </div>
        </div>

        <div class="snap-body">
          <p class="snap-desc">
            A website for a friend — a craftsman who builds furniture and designs signature lamps by hand. Quiet, editorial, and material. The kind of site where the wood grain does the talking.
          </p>
        </div>

        <div class="workshop-scroll">
          <img src="/case/snapshots/workshop/full.jpg" alt="The Workshop — full site overview" loading="lazy" />
        </div>

      </section>

      <!-- ── THE BRAND ── -->
      <section class="snap-section brand-section">

        <div class="brand-top">
          <div class="brand-top__text">
            <div class="snap-header">
              <div class="snap-meta">
                <span class="snap-index">[ 03 ]</span>
                <span class="snap-rule" />
                <span class="snap-title">The Brand</span>
              </div>
              <div class="snap-info">
                <span class="snap-tag">Web · Mobile</span>
                <span class="snap-tag">Fashion · E-commerce</span>
              </div>
            </div>
            <div class="snap-body">
              <p class="snap-desc">
                A full e-commerce experience for a fashion brand — from browsing and filtering to product detail and checkout. Designed across web and mobile, end to end.
              </p>
            </div>
          </div>

          <!-- Desktop screens -->
          <div class="brand-web">
            <img src="/case/snapshots/brand/web-1.webp" alt="The Brand — product detail" loading="lazy" />
            <img src="/case/snapshots/brand/web-2.webp" alt="The Brand — category listing" loading="lazy" />
          </div>
        </div>

        <!-- Mobile screens -->
        <div class="brand-mobile">
          <img src="/case/snapshots/brand/mob-1.webp" alt="The Brand — mobile home" loading="lazy" />
          <img src="/case/snapshots/brand/mob-5.webp" alt="The Brand — mobile nav" loading="lazy" />
          <img src="/case/snapshots/brand/mob-2.webp" alt="The Brand — mobile category" loading="lazy" />
          <img src="/case/snapshots/brand/mob-3.webp" alt="The Brand — mobile product" loading="lazy" />
          <img src="/case/snapshots/brand/mob-4.webp" alt="The Brand — mobile bag" loading="lazy" />
        </div>

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

onMounted(() => {
  const scrollEls = [
    document.querySelector('.workshop-scroll'),
    document.querySelector('.brand-mobile'),
  ]

  scrollEls.forEach(el => {
    if (!el) return
    let isDown = false
    let startX = 0
    let scrollLeft = 0
    el.addEventListener('mousedown', e => {
      isDown = true
      startX = (e as MouseEvent).pageX - (el as HTMLElement).offsetLeft
      scrollLeft = (el as HTMLElement).scrollLeft
    })
    el.addEventListener('mouseleave', () => { isDown = false })
    el.addEventListener('mouseup', () => { isDown = false })
    el.addEventListener('mousemove', e => {
      if (!isDown) return
      e.preventDefault()
      const x = (e as MouseEvent).pageX - (el as HTMLElement).offsetLeft
      ;(el as HTMLElement).scrollLeft = scrollLeft - (x - startX) * 1.4
    })
  })
})
</script>

<style scoped>
main {
  padding-top: 0;
}

/* ── Hero ── */
.hero {
  min-height: 100vh;
  padding: clamp(80px, 10vw, 160px) clamp(20px, 3.4vw, 56px) clamp(40px, 6vw, 80px);
  display: grid;
  grid-template-columns: 1fr;
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

/* ── Snapshot sections ── */
.snap-section {
  padding: clamp(80px, 10vw, 160px) clamp(20px, 3.4vw, 56px);
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 5vw, 72px);
}

.snap-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.snap-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}

.snap-index {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.4);
}

.snap-rule {
  display: inline-block;
  width: 36px;
  height: 1px;
  background: rgba(11, 12, 11, 0.2);
}

.snap-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(28px, 3.5vw, 52px);
  letter-spacing: -0.03em;
  line-height: 1;
  color: #0B0C0B;
}

.snap-info {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.snap-tag {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.45);
  border: 1px solid rgba(11, 12, 11, 0.15);
  border-radius: 99px;
  padding: 4px 12px;
}

.snap-desc {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: italic;
  font-size: clamp(17px, 1.5vw, 22px);
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: rgba(11, 12, 11, 0.55);
  max-width: 58ch;
}

/* Studio image grid */
.studio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.studio-grid img {
  width: 100%;
  display: block;
  border-radius: 2px;
  background: rgba(11, 12, 11, 0.04);
}

@media (max-width: 760px) {
  .studio-grid {
    grid-template-columns: 1fr;
  }
}

/* ── Workshop section ── */
.workshop-section {
  background: #C9C2B2;
}

.workshop-section .snap-index {
  color: rgba(11, 12, 11, 0.6);
}

.workshop-section .snap-rule {
  background: rgba(11, 12, 11, 0.35);
}

.workshop-section .snap-desc {
  color: rgba(11, 12, 11, 0.7);
}

.workshop-section .snap-title {
  color: #0B0C0B;
}

.workshop-section .snap-tag {
  color: rgba(11, 12, 11, 0.7);
  border-color: rgba(11, 12, 11, 0.35);
}

.workshop-scroll {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  height: 50vh;
  cursor: grab;
  border-radius: 2px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.workshop-scroll::-webkit-scrollbar {
  display: none;
}

.workshop-scroll:active {
  cursor: grabbing;
}

.workshop-scroll img {
  height: 100%;
  width: auto;
  max-width: none;
  display: block;
  object-fit: cover;
  object-position: top left;
  user-select: none;
  -webkit-user-drag: none;
}

/* ── Brand section ── */
.brand-section {
  background: #2C2A26;
}

.brand-section .snap-index {
  color: rgba(232, 226, 213, 0.4);
}

.brand-section .snap-rule {
  background: rgba(232, 226, 213, 0.15);
}

.brand-section .snap-title {
  color: #E8E2D5;
}

.brand-section .snap-tag {
  color: rgba(232, 226, 213, 0.5);
  border-color: rgba(232, 226, 213, 0.15);
}

.brand-section .snap-desc {
  color: rgba(232, 226, 213, 0.55);
}

.brand-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 5vw, 80px);
  align-items: start;
}

.brand-top__text {
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: sticky;
  top: 120px;
}

.brand-top__text .snap-header {
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.brand-web {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  align-items: start;
}

.brand-web img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}

@media (max-width: 880px) {
  .brand-top { grid-template-columns: 1fr; }
  .brand-top__text { position: static; }
  .brand-web img { max-height: 60vh; object-fit: cover; object-position: top; }
}

.brand-mobile {
  display: flex;
  gap: 12px;
  overflow-x: hidden;
  scrollbar-width: none;
}

.brand-mobile::-webkit-scrollbar {
  display: none;
}

.brand-mobile img {
  flex: 1 1 0;
  min-width: 0;
  width: 0;
  height: auto;
  display: block;
  border-radius: 2px;
  object-fit: cover;
}

@media (max-width: 760px) {
  .brand-web { grid-template-columns: 1fr; }
  .brand-web img { max-height: none; }

  .brand-mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    overflow-x: unset;
    cursor: default;
  }

  .brand-mobile img {
    flex: unset;
    width: 100%;
    height: auto;
    min-width: unset;
  }

  .brand-mobile img:last-child {
    grid-column: 1 / -1;
    max-width: 50%;
    justify-self: center;
  }
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
