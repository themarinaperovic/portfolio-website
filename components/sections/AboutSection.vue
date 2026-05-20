<template>
  <section id="about" :class="{ 'is-hovering-row': activeIndex !== null }">

    <div class="sect-header">
      <span><span class="num">[ 01 ]</span> About</span>
      <span class="rule" />
    </div>

    <div class="about-stage">

      <h2 class="big-statement">
        First I framed <em>light</em>.<br>
        Now I frame <em>logic</em>.
      </h2>

      <div class="about-grid">

        <!-- Left column: default paragraph + role detail overlay -->
        <div class="left-col">
          <p class="body-text" :class="{ 'is-faded': activeIndex !== null }">
            Behind every great user experience is a lot of hidden complexity. My job is to do the heavy lifting: untangling messy workflows and transforming them into intuitive, accessible products that feel entirely obvious to the user. With roots in photography and visual storytelling, I bring a sharp eye for composition, hierarchy, and human emotion to digital design, but I always ground my work in research and business objectives. I love partnering closely with developers and product teams to build scalable solutions that look beautiful and work flawlessly for real people.
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
            <span>Click for details</span>
            <span class="hint-line" />
            <span>↓</span>
          </div>
          <template v-for="(row, i) in cv" :key="row.yr">
            <div
              class="row"
              :class="{
                'is-active': activeIndex === i,
                'is-dimmed': !isTouch && activeIndex !== null && activeIndex !== i,
              }"
              @mouseenter="!isTouch && (activeIndex = i)"
              @mouseleave="!isTouch && (activeIndex = null)"
              @click="isTouch && (activeIndex = activeIndex === i ? null : i)"
            >
              <b>{{ row.yr }}</b>
              <span class="ti">{{ row.ti }}</span>
              <span class="co">{{ row.co }}</span>
            </div>
            <Transition
              @enter="onEnter"
              @after-enter="onAfterEnter"
              @leave="onLeave"
            >
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
const isTouch = ref(false)
onMounted(() => {
  isTouch.value = window.matchMedia('(hover: none)').matches
})

function onEnter(el: Element) {
  const e = el as HTMLElement
  const targetHeight = e.scrollHeight
  e.style.overflow = 'hidden'
  e.style.height = '0'
  e.style.paddingTop = '0'
  e.style.paddingBottom = '0'
  e.style.opacity = '0'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      e.style.transition = 'height 0.42s cubic-bezier(.4,0,.2,1), opacity 0.35s ease, padding 0.42s cubic-bezier(.4,0,.2,1)'
      e.style.height = targetHeight + 'px'
      e.style.paddingTop = '16px'
      e.style.paddingBottom = '20px'
      e.style.opacity = '1'
    })
  })
}
function onAfterEnter(el: Element) {
  const e = el as HTMLElement
  e.style.overflow = ''
  e.style.height = ''
  e.style.paddingTop = ''
  e.style.paddingBottom = ''
  e.style.transition = ''
}
function onLeave(el: Element) {
  const e = el as HTMLElement
  const currentHeight = e.scrollHeight
  e.style.overflow = 'hidden'
  e.style.height = currentHeight + 'px'
  e.style.paddingTop = '16px'
  e.style.paddingBottom = '20px'
  e.style.opacity = '1'
  e.style.transition = 'none'
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      e.style.transition = 'height 0.38s cubic-bezier(.4,0,.2,1), opacity 0.28s ease, padding 0.38s cubic-bezier(.4,0,.2,1)'
      e.style.height = '0'
      e.style.paddingTop = '0'
      e.style.paddingBottom = '0'
      e.style.opacity = '0'
    })
  })
}

const cv = [
  {
    yr: '2024 — 26',
    ti: 'Senior UX/UI Designer',
    co: 'Bucherer AG',
    detail: 'Swiss luxury watch and jewellery house, part of the Rolex Group. Designed the e-commerce experience, watch market value tracking, notification center and interest alerts. Translated heritage codes into a quiet digital language for a high-end clientele. Introduced the jewellery category, reshaped how collectors add valuables to their collections, and established scalable WCAG-aligned accessibility standards across the platform.',
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
    detail: 'The year I switched industries, started independent work and figured out how design actually works in practice. Business goals, user needs, shipped features. One at a time.',
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
  padding: clamp(50px, 7vw, 120px) clamp(20px, 3.4vw, 56px);
  position: relative;
}

.sect-header {
  display: flex;
  align-items: center;
  gap: 16px;
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

.sect-header .rule {
  flex: 1;
  height: 1px;
  background: rgba(15, 15, 15, 0.15);
  max-width: 80px;
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
  text-decoration: none;
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
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 20px;
  padding: 16px 12px;
  border-bottom: 1px solid rgba(15, 15, 15, 0.15);
  margin: 0 -12px;
  cursor: none;
  transition: background-color 0.4s cubic-bezier(.7,.05,.2,1),
              opacity 0.4s cubic-bezier(.7,.05,.2,1),
              padding 0.4s cubic-bezier(.7,.05,.2,1);
}

.row b {
  grid-column: 1;
  grid-row: 1 / 3;
  align-self: center;
}

.row .ti {
  grid-column: 2;
  grid-row: 1;
  text-align: right;
}

.row .co {
  grid-column: 2;
  grid-row: 2;
  text-align: right;
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
  transition: color 0.4s cubic-bezier(.7,.05,.2,1);
}

.row.is-active b {
  color: #D63D14;
}

.row .ti {
  color: #0B0C0B;
  line-height: 1.6;
}

.row .co {
  color: rgba(15, 15, 15, 0.55);
  line-height: 1.6;
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

  .row {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
  }

  .row b {
    grid-column: 1;
    grid-row: 1;
    align-self: auto;
  }

  .row .ti {
    grid-column: 2;
    grid-row: 1;
    text-align: right;
  }

  .row .co {
    grid-column: 1 / 3;
    grid-row: 2;
    text-align: right;
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
