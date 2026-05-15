<template>
  <section id="work" class="work-section">

    <div class="sect-header">
      <span><span class="num">[ 02 ]</span> — Selected Works</span>
      <span>05 Projects · 2021 → 2026</span>
    </div>

    <div class="work-list">
      <NuxtLink
        v-for="item in works"
        :key="item.slug"
        :to="`/projects/${item.slug}`"
        class="work-item"
        :class="{ 'is-coming-soon': item.comingSoon }"
        data-hoverable
      >
        <div class="item-main">
          <h3>{{ item.title }}</h3>
          <p class="tagline">{{ item.tagline }}</p>
          <div class="tags">
            <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>

        <p class="desc">{{ item.desc }}</p>

        <span class="arrow">{{ item.comingSoon ? '— Coming soon' : '→ Case study' }}</span>
      </NuxtLink>
    </div>

  </section>
</template>

<script setup lang="ts">
const works = [
  {
    slug: 'bucherer',
    title: 'Timeless elegance, exceptional craftsmanship',
    tagline: 'Bucherer AG',
    tags: ['E-commerce', 'Luxury', 'WCAG', "Bronze · Swiss Apps '25"],
    desc: 'Simplifying complex systems into experiences aligned with the brand\'s premium positioning.',
    comingSoon: true,
  },
  {
    slug: 'abc-redesign',
    title: 'Reinventing fitness',
    tagline: 'ABC Fitness · App Redesign',
    tags: ['Mobile', 'Redesign', 'Design Systems'],
    desc: 'Redesigning the app to modernise visual appeal, improve functionality and drive user satisfaction.',
  },
  {
    slug: 'abc-referral',
    title: 'Effortlessly increasing customer base',
    tagline: 'ABC Fitness · B2B2C',
    tags: ['SaaS', 'Feature Design', 'White-label'],
    desc: 'Understanding and addressing the requirements of client businesses and their members.',
  },
  {
    slug: 'kroon',
    title: 'For the love of dog',
    tagline: 'Kroon Studio',
    tags: ['Web', 'Research', 'Pro bono'],
    desc: 'Research and proposal for a platform dedicated to reducing dog abandonment and promoting adoption.',
    comingSoon: true,
  },
  {
    slug: 'snapshots',
    title: 'Here & There',
    tagline: 'Snapshots',
    tags: ['Misc', 'Snapshots'],
    desc: 'Web and app designs across different clients, briefs and moments — presented as screens, not stories.',
    comingSoon: true,
  },
]
</script>

<style scoped>
.work-section {
  padding: clamp(80px, 11vw, 180px) clamp(20px, 3.4vw, 56px);
}

/* ── Section header ── */
.sect-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid rgba(11, 12, 11, 0.15);
  padding-top: 20px;
  margin-bottom: clamp(60px, 9vw, 140px);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.55);
}

.sect-header .num {
  color: #0B0C0B;
  font-weight: 500;
}

/* ── Work list ── */
.work-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(11, 12, 11, 0.15);
}

.work-item {
  position: relative;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  align-items: center;
  gap: 30px;
  padding: 28px 0;
  border-bottom: 1px solid rgba(11, 12, 11, 0.15);
  text-decoration: none;
  color: inherit;
  transition: background 0.5s cubic-bezier(.7,.05,.2,1),
              padding 0.5s cubic-bezier(.7,.05,.2,1);
  z-index: 0;
}

/* Accent fill from bottom */
.work-item::before {
  content: '';
  position: absolute;
  left: 50%;
  width: 100vw;
  margin-left: -50vw;
  top: 0; bottom: 0;
  background: #D63D14;
  transform: scaleY(0);
  transform-origin: bottom center;
  transition: transform 0.6s cubic-bezier(.7,.05,.2,1);
  z-index: -1;
}

/* Coming-soon items use warm graphite fill instead of accent */
.work-item.is-coming-soon::before {
  background: #4A4642;
}

.work-item:hover::before {
  transform: scaleY(1);
  transform-origin: top center;
}

.work-item:hover {
  padding-top: 32px;
  padding-bottom: 32px;
}

/* Main title block */
.item-main {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

h3 {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 2.2vw, 32px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #0B0C0B;
  transition: color 0.45s cubic-bezier(.7,.05,.2,1);
}

.work-item:hover h3 {
  color: #E8E2D5;
}

.tagline {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.45);
  transition: color 0.45s cubic-bezier(.7,.05,.2,1);
}

.work-item:hover .tagline {
  color: rgba(232, 226, 213, 0.65);
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.tag {
  display: inline-block;
  border: 1px solid rgba(11, 12, 11, 0.15);
  border-radius: 99px;
  padding: 3px 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.55);
  transition: border-color 0.4s, color 0.4s;
}

.work-item:hover .tag {
  border-color: rgba(232, 226, 213, 0.3);
  color: rgba(232, 226, 213, 0.85);
}

/* Description */
.desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.55);
  max-width: 36ch;
  line-height: 1.7;
  transition: color 0.45s cubic-bezier(.7,.05,.2,1);
}

.work-item:hover .desc {
  color: rgba(232, 226, 213, 0.85);
}

/* Arrow */
.arrow {
  position: absolute;
  right: clamp(20px, 3.4vw, 56px);
  top: 50%;
  transform: translate(30px, -50%);
  opacity: 0;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #E8E2D5;
  transition: transform 0.6s cubic-bezier(.7,.05,.2,1),
              opacity 0.45s cubic-bezier(.7,.05,.2,1);
  pointer-events: none;
}

.work-item:hover .arrow {
  transform: translate(0, -50%);
  opacity: 1;
}

/* ── Responsive ── */
@media (max-width: 880px) {
  .work-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .arrow { display: none; }

  .work-item:hover {
    padding-left: clamp(20px, 3.4vw, 56px);
    padding-right: clamp(20px, 3.4vw, 56px);
  }
}
</style>
