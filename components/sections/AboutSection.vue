<template>
  <section id="about" :class="{ 'is-hovering-row': activeIndex !== null }">

    <div class="sect-header">
      <span><span class="num">[ 01 ]</span> — About</span>
      <span>EN · ES · SR</span>
    </div>

    <div class="about-stage">

      <h2 class="big-statement">
        I make interfaces<br>
        that move like <em>cinema</em>—<br>
        <span class="u">quietly framed</span>, generously<br>
        lit, almost <em>invisible</em>.
      </h2>

      <div class="about-grid">

        <!-- Left column: default paragraph + role detail overlay -->
        <div class="left-col">
          <p class="body-text" :class="{ 'is-faded': activeIndex !== null }">
            Twelve years I lived behind a viewfinder — composing frames, lighting faces, cutting reels into stories that breathe at twenty-four per second. Then, in 2020, I traded the camera for a Figma board. The grammar turned out to be identical: pacing, contrast, focus. Product design is just cinema slowed down to the speed of a click.
          </p>

          <!-- Role detail panel — swapped per hovered row -->
          <Transition name="detail-fade">
            <div v-if="activeIndex !== null" class="role-detail" :key="activeIndex">
              <div class="role-detail-meta">
                <span class="dot" />
                <span>{{ cv[activeIndex].yr }} · {{ cv[activeIndex].ti }}</span>
              </div>
              <p class="role-detail-text">{{ cv[activeIndex].detail }}</p>
            </div>
          </Transition>
        </div>

        <!-- Right column: CV rows -->
        <div class="facts">
          <div class="facts-hint">
            <span>Click for more</span>
            <span class="hint-line" />
            <span>→</span>
          </div>
          <template v-for="(row, i) in cv" :key="row.yr">
            <div
              class="row"
              :class="{
                'is-active': activeIndex === i,
                'is-dimmed': activeIndex !== null && activeIndex !== i,
              }"
              @mouseenter="activeIndex = i"
              @mouseleave="activeIndex = null"
              @click="activeIndex = activeIndex === i ? null : i"
            >
              <b>{{ row.yr }}</b>
              <span>
                <span class="ti">{{ row.ti }}</span><br>
                <span class="co">{{ row.co }}</span>
              </span>
            </div>
            <Transition name="detail-fade">
              <div v-if="activeIndex === i" class="role-detail-inline">
                <div class="role-detail-meta">
                  <span class="dot" />
                  <span>{{ row.yr }} · {{ row.ti }}</span>
                </div>
                <p class="role-detail-text">{{ row.detail }}</p>
              </div>
            </Transition>
          </template>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
const activeIndex = ref<number | null>(null)

const cv = [
  {
    yr: '2024 — 26',
    ti: 'Senior UX/UI Designer',
    co: 'Bucherer AG',
    detail: 'Swiss luxury watch and jewellery house, part of the Rolex Group. Designing the e-commerce experience, watch market value tracking, notification center and interest alerts — translating heritage codes into a quiet digital language for a high-end clientele. Introduced the jewellery category, reshaped how collectors add valuables to their collections, and established scalable WCAG-aligned accessibility standards across the platform.',
  },
  {
    yr: '2021 — 24',
    ti: 'UX/UI Designer',
    co: 'ABC Fitness · Trainerize · Kroon Studio',
    detail: 'A US-leading FitTech company. Redesigned the entire member-facing app and built a highly customisable design system tailored to different club needs and branding. Wrote briefs, scoped features, and proposed design solutions grounded in user research and customer behaviour. Integrated Trainerize — the trainer-focused product — into ABC’s ecosystem of clubs, memberships and white-labelled business models.',
  },
  {
    yr: '2020 — 21',
    ti: 'UX/UI Designer, Independent',
    co: 'Self-employed',
    detail: 'Independent product work — harmonising business goals with end-user needs and translating them into functional, appealing features. The pivot year from cinema to interface, one shipped product at a time.',
  },
  {
    yr: '2016 — 23',
    ti: 'Franchise Owner / Manager',
    co: 'Vista Photography S.L.',
    detail: 'Fine art portrait photography studio. Ran an independent branch end-to-end: HR, marketing, customer service, logistics, admin and finance. Coached and mentored photographers — driving performance, retention and professional growth across the team.',
  },
  {
    yr: '2007 — 20',
    ti: 'Photographer · Videographer',
    co: 'Self-employed',
    detail: 'Thirteen years of independent work behind a lens — editorial, portrait, documentary and motion. Diverse storytelling through photography and video, across formats and clients.',
  },
  {
    yr: '2007 — 12',
    ti: 'MFA, Cinematography',
    co: 'University of Arts, Belgrade · FDU',
    detail: 'Master in Audiovisual Arts / Cinematography at the Faculty of Dramatic Arts — one of the most selective film schools in the region. Composition, light, narrative pacing, and the discipline of working inside a frame.',
  },
]
</script>

<style scoped>
section {
  padding: clamp(80px, 11vw, 180px) clamp(20px, 3.4vw, 56px);
  position: relative;
}

.sect-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid rgba(15, 15, 15, 0.15);
  padding-top: 20px;
  margin-bottom: clamp(60px, 9vw, 140px);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(15, 15, 15, 0.55);
}

.sect-header .num {
  color: #0B0C0B;
  font-weight: 500;
}

.big-statement {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(40px, 7.4vw, 140px);
  line-height: 0.96;
  letter-spacing: -0.035em;
}

.big-statement em {
  font-style: italic;
  color: #D63D14;
}

.big-statement .u {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.12em;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 80px;
  align-items: start;
}

@media (max-width: 760px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* Left column */
.left-col {
  position: relative;
  min-height: 280px;
}

.body-text {
  font-size: clamp(16px, 1.15vw, 20px);
  line-height: 1.55;
  max-width: 46ch;
  color: #0B0C0B;
  transition: opacity 0.4s cubic-bezier(.7,.05,.2,1);
}

.body-text.is-faded {
  opacity: 0;
}


/* Role detail overlay */
.role-detail {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 46ch;
}

.role-detail-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(15, 15, 15, 0.55);
}

.role-detail-meta .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #D63D14;
  flex-shrink: 0;
}

.role-detail-text {
  font-size: clamp(16px, 1.15vw, 20px);
  line-height: 1.55;
  color: #0B0C0B;
}

/* Transition between role details */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: opacity 0.35s cubic-bezier(.7,.05,.2,1), transform 0.45s cubic-bezier(.7,.05,.2,1);
}

.detail-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.detail-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Hint */
.facts-hint {
  display: none;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-bottom: 16px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(15, 15, 15, 0.4);
}

.hint-line {
  display: inline-block;
  width: 36px;
  height: 1px;
  background: rgba(15, 15, 15, 0.2);
  position: relative;
  overflow: hidden;
}

.hint-line::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #D63D14;
  transform: translateX(-100%);
  animation: hintLine 2.4s cubic-bezier(.7,.05,.2,1) infinite;
}

@keyframes hintLine {
  0%   { transform: translateX(-100%); }
  50%  { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

/* Right column — facts/CV */
.facts {
  display: flex;
  flex-direction: column;
  gap: 0;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 16px 12px;
  border-bottom: 1px solid rgba(15, 15, 15, 0.15);
  margin: 0 -12px;
  cursor: none;
  transition: background-color 0.4s cubic-bezier(.7,.05,.2,1),
              opacity 0.4s cubic-bezier(.7,.05,.2,1),
              padding 0.4s cubic-bezier(.7,.05,.2,1);
}

.row:first-child {
  border-top: 1px solid rgba(15, 15, 15, 0.15);
}

.row.is-active {
  background-color: rgba(214, 61, 20, 0.05);
}

.row.is-dimmed {
  opacity: 0.4;
}

.row b {
  font-weight: 500;
  color: #0B0C0B;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color 0.4s cubic-bezier(.7,.05,.2,1);
}

.row.is-active b {
  color: #D63D14;
}

.row span {
  color: rgba(15, 15, 15, 0.55);
  text-align: right;
  line-height: 1.6;
}

.row .ti {
  color: #0B0C0B;
  display: block;
}

.row .co {
  color: rgba(15, 15, 15, 0.55);
  display: block;
}

/* Inline detail — mobile only */
.role-detail-inline {
  display: none;
  font-family: 'DM Sans', system-ui, sans-serif;
  letter-spacing: 0;
  text-transform: none;
}

@media (max-width: 760px) {
  .facts-hint {
    display: flex;
  }

  .role-detail-inline {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 12px 20px;
    border-bottom: 1px solid rgba(15, 15, 15, 0.15);
    margin: 0 -12px;
  }

  .role-detail-inline .role-detail-meta {
    display: none;
  }

  /* Hide the left-col overlay on mobile */
  .left-col .role-detail {
    display: none;
  }

  /* Keep body text visible on mobile regardless */
  .body-text.is-faded {
    opacity: 1;
  }
}
</style>
