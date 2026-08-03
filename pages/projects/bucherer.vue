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
          <span class="ov-val">Product Designer</span>
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
        <p class="body-copy app-context">Bucherer AG is one of Europe's most established luxury watch and jewellery retailers, part of the Rolex Group. Alongside its boutiques, Bucherer offers a companion app that extends the in-store relationship digitally: service requests, insurance, selling pieces back to Bucherer, collection management, market insights, and a curated shopping experience for watches and jewellery alike. The work below covers several parts of that app.</p>

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
      </section>

      <!-- ── Add to Collection ── -->
      <section class="case-section atc-section">
        <div class="sect-header sect-header--stacked">
          <span class="num">[ 01 ]</span>
          <span class="sect-title-main">Collection</span>
          <span class="sect-title-sub">Adding pieces and introduction of new category</span>
        </div>

        <div class="atc-objective">
          <span class="atc-intro-label">Objective</span>
          <div class="atc-objective-body">
            <p class="body-copy">The Bucherer app already had a collection. Any watch purchased in-store was automatically imported from the CRM and appeared in the customer's profile. It worked, but it only reflected Bucherer transactions: the pieces they sold you, nothing more. A watch inherited from a parent, a piece picked up at auction, anything bought elsewhere: none of it existed in the app. For a collector, that's half the picture at best.</p>
            <p class="body-copy">Customers had been telling us this in different ways: they wanted to see their full collection in one place, not just their Bucherer purchases. We listened, recognised the need was real, and started exploring what it would take to build it. What became clear quickly was that the user need and a business opportunity weren't in tension. They were the same thing. A feature that gave collectors visibility over their pieces would also give Bucherer visibility over their customers: real preferences, real collections, not just transaction history. That alignment made the decision easy.</p>
            <p class="body-copy">Then, in early brainstorming, a second conversation started. Bucherer has always sold jewellery, but the app had no trace of it. Jewellery didn't exist as a category. We saw the collection as a low-pressure way to change that: if a customer could add a necklace alongside their watches, they'd encounter that part of the brand without being sold to. Subtle, but deliberate.</p>
          </div>
          <ol class="atc-obj-list">
            <li><strong>Respond to a real user need.</strong> Collectors wanted their pieces tracked in one place, with full ownership detail, accessible from their phone.</li>
            <li><strong>Deepen brand engagement.</strong> A feature worth returning to keeps the customer in the Bucherer ecosystem long after the purchase.</li>
            <li><strong>Enable personalised outreach.</strong> Preference data from real collections gives the business context to offer something genuinely relevant.</li>
            <li><strong>Extend services beyond Bucherer purchases.</strong> Insurance, CPO sales, and repairs are now available for any watch in the collection, not just those bought from us.</li>
            <li><strong>Compete as a standalone collector's tool.</strong> Letting anyone log any piece, not just Bucherer purchases, put the app on equal footing with dedicated collector platforms. That made it genuinely useful to people who had never bought from Bucherer, turning the app itself into a lead channel for future customers.</li>
            <li><strong>Introduce jewellery.</strong> Not as a push, but as a quiet presence. An invitation rather than a sales pitch.</li>
          </ol>
        </div>

        <div class="atc-challenge">
          <span class="atc-intro-label">Challenge</span>
          <div class="atc-objective-body">
            <p class="body-copy">The feature had to work for two very different audiences, inside a brand where visual restraint isn't optional.</p>
            <p class="body-copy">The Bucherer customer base is overwhelmingly made up of watch enthusiasts. Collectors who know reference numbers, track complications, and care deeply about provenance. That group was the primary audience, and nothing about the experience could feel cluttered or off-brand for them.</p>
            <p class="body-copy">Jewellery had to live here too, and that raised its own questions. The flow ultimately shared the same starting point as watches, but finding where jewellery belonged, both in the existing Collection view and within the adding flow, was itself part of the work. We needed to understand the jewellery customer well enough to know how far that held, and that research mattered beyond this feature, shaping how we would develop jewellery across the rest of the app. We also wanted a clearer picture of whether watch enthusiasts could actually be reached through this entry point. Introducing jewellery added an extra step to the flow for regular users. We considered that a calculated risk worth taking.</p>
          </div>
          <ol class="atc-obj-list">
            <li><strong>A watch-first user base.</strong> Most customers were not there for jewellery. The design had to serve them without making the jewellery category feel invisible or irrelevant.</li>
            <li><strong>Introducing jewellery without pushing it.</strong> Watch users needed to become aware that jewellery existed in the app, but any heavy-handed approach would have felt misaligned with the brand.</li>
            <li><strong>Finding the right place for jewellery.</strong> We had to decide where jewellery would live — both inside the existing Collection view and within the new adding flow. It needed to feel like it had always been there, not like something bolted on.</li>
            <li><strong>An unfamiliar user group.</strong> The jewellery customer was new territory. We needed to go out and learn who this person was — how they think about ownership, what they track, and what a piece means to them. That understanding had to be built before we could design for them with any confidence.</li>
            <li><strong>Luxury constraints.</strong> Bucherer's brand language is built on minimalism and restraint. These are not aesthetic preferences, they are requirements. Every screen had to feel considered.</li>
            <li><strong>Depth without overwhelm.</strong> We knew collectors cared about technical detail, and we wanted to give them the ability to log everything. The challenge was making that richness available without letting the entry process become so heavy that users would abandon it halfway through.</li>
          </ol>

          <p class="atc-questions-lead">Mapping the challenges brought two concrete design questions into focus.</p>

          <div class="atc-design-questions">
            <div class="atc-design-q">
              <span class="atc-q-num">01</span>
              <p class="atc-q-text">Where do we place jewellery inside the already existing Collection?</p>
            </div>
            <div class="atc-design-q">
              <span class="atc-q-num">02</span>
              <p class="atc-q-text">How do we organise the new Adding flow?</p>
            </div>
          </div>
        </div>

        <div class="atc-research">
          <span class="atc-intro-label">Research</span>
          <div class="atc-research-body">
            <p class="body-copy">The process started with what we already had. App analytics showed us how customers engaged with the existing CRM collection, and support tickets gave us a direct line to improvement: what people were asking for and where the current experience fell short.</p>
          </div>

          <span class="atc-sub-label">Interviews</span>
          <div class="atc-research-body">
            <p class="body-copy">From there we went out to talk to people. Sales staff were the first stop: they spend hours each day with collectors and understand the language, the anxieties, and the pride of ownership in a way no data can capture. That perspective shaped the early direction before any formal user research began.</p>
            <p class="body-copy">We then conducted interviews separately with two groups: watch collectors, to map their mental models around ownership and documentation, and jewellery buyers, to understand what owning a piece means to them and what they'd actually want to track. These were genuinely different conversations.</p>
          </div>

          <span class="atc-sub-label">User personas</span>
          <div class="atc-research-body">
            <p class="body-copy">Findings from both were synthesised in persona workshops, resulting in four profiles grounded in real customer data.</p>
          </div>
          <div class="atc-personas">
            <img data-pin-nopin="true" src="/case/bucherer/personas/persona-christina.jpg" alt="User persona: Christina" class="persona-card" />
            <img data-pin-nopin="true" src="/case/bucherer/personas/persona-roberto.jpg" alt="User persona: Roberto" class="persona-card" />
            <img data-pin-nopin="true" src="/case/bucherer/personas/persona-ana.jpg" alt="User persona: Ana" class="persona-card" />
            <img data-pin-nopin="true" src="/case/bucherer/personas/persona-sebastian.jpg" alt="User persona: Sebastian" class="persona-card" />
          </div>

          <span class="atc-sub-label">Mapping</span>
          <div class="atc-research-body">
            <p class="body-copy">With the personas in place, the next step was to get a clear picture of the existing product. We mapped out the current Collection: its structure, the flows already in place, and every feature the user could interact with. Running alongside that was a map of new information that needed to be added. Analysing these side by side made it possible to understand what we were working with and where jewellery could slot in.</p>
          </div>

          <div class="atc-map-bento">
            <img data-pin-nopin="true" src="/case/bucherer/personas/map-dashboard.jpg" alt="Collection home dashboard mapping" class="map-img" />
            <img data-pin-nopin="true" src="/case/bucherer/personas/map-branches.jpg" alt="Collection branches mapping" class="map-img" />
            <img data-pin-nopin="true" src="/case/bucherer/personas/map-jwlr.jpg" alt="Jewellery add flow mapping" class="map-img" />
          </div>

          <span class="atc-sub-label">Brainstorming</span>
          <div class="atc-research-body">
            <p class="body-copy">To answer the question of where jewellery would live within the Collection, two directions were on the table: merge watches and jewellery into a single unified view, or keep them fully separate. User interviews pointed us toward the first option. Customers who owned both categories consistently spoke about their pieces as one collection, not two — they wanted the full picture before narrowing down. Our assumption was that a single view with clear filtering would serve everyone: mixed collectors get the overview they expect, while watch-only or jewellery-only users can filter immediately. To be sure, we decided to explore all possibilities, including the placement of other elements that were now crowding the home page, and made multiple suggestions. We then brainstormed around them as a team, noting pros and cons for each, voting, and settled on two options that we put in front of users for A/B testing.</p>
          </div>

          <img data-pin-nopin="true" src="/case/bucherer/personas/brainstorm.webp" alt="Wireframe brainstorming session" class="brainstorm-img" />

          <span class="atc-sub-label">A/B testing</span>
          <div class="atc-research-body">
            <p class="body-copy">Two prototype flows were tested with small groups: one group owned both watches and jewellery, the other owned only one. The findings pointed clearly in one direction. Heavy separation between categories cluttered the view rather than clarifying it. Users who owned both wanted to see their full collection and filter down when needed, not navigate to separate places. Users who owned only one type were not troubled by seeing the option for the other, they simply saw what was theirs on screen. As for arranging the main navigation, we decided to keep it as close to its existing layout as possible for now, preserving the patterns users were already comfortable with.</p>
          </div>
        </div>

        <div class="atc-solution">
          <span class="atc-intro-label">Solution</span>

          <div class="atc-showcase">
            <div class="atc-showcase-text">
              <span class="atc-sub-label">Collection</span>
              <p class="body-copy">The Collection kept a single unified view. Watches and jewellery sit side by side in the order they were added, so the first thing anyone sees is everything they own. Filtering moved into a dedicated sort and filter panel with the category switch at the top.</p>
              <p class="body-copy">Making room for it also meant revisiting the original UI and tightening the elements that were now competing for space. For a watch-only collector the jewellery option is present but never in the way, and for someone whose collection is entirely jewellery the same screen works unchanged. The selected filter persists between sessions.</p>
            </div>

            <div class="atc-showcase-devices">
              <div class="atc-showcase-devices-row">
                <div class="device">
                  <img data-pin-nopin="true" src="/case/bucherer/personas/collection-all.webp" alt="Collection view showing watches and jewellery together" loading="lazy" />
                </div>
                <div class="device">
                  <img data-pin-nopin="true" src="/case/bucherer/personas/filters.webp" alt="Sort and filter panel with All, Watches and Jewellery options" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <span class="atc-sub-label">Adding flow</span>
          <div class="atc-research-body">
            <p class="body-copy">As for the actual flow of adding new pieces, we had to approach it with more compromise. After weighing the options, we decided to split watches and jewellery at the very first step. It was an extra tap for the user, and we knew it, but it earned its place: it let the backend search and filter against a single category instead of the whole catalogue, and it returned far more relevant results. People tend to start a search with a brand name, and several brands sell both watches and jewellery. Knowing which one the user was looking for before they typed anything made the difference between a useful result list and a cluttered one.</p>
          </div>

          <div class="atc-flow-row">
            <div class="device" v-for="n in 5" :key="`add-${n}`">
              <img data-pin-nopin="true" :src="`/case/bucherer/personas/add${n}.webp`" :alt="`Add to Collection flow, step ${n}`" loading="lazy" />
            </div>
          </div>

          <span class="atc-sub-label">Simplicity</span>
          <div class="atc-research-body">
            <p class="body-copy">Finally, what had seemed like an infinite list of data points and an overcomplicated prototype was shaped into a genuinely simple feature. Only three fields were made mandatory: brand, serial number and reference number. Everything else stayed optional and folded into expandable sections, fully available to the collector who wants to record every specification, and entirely out of the way for the one who does not. What people ended up with was a flow they understood without instruction, and adoption followed almost immediately.</p>
          </div>

          <div class="atc-proto-row">
            <div class="atc-proto-verticals">
              <img data-pin-nopin="true" src="/case/bucherer/personas/watch6a.webp" alt="Full add-a-watch form, collapsed specification sections" loading="lazy" />
              <img data-pin-nopin="true" src="/case/bucherer/personas/watch6b.webp" alt="Full add-a-watch form, expanded specification sections" loading="lazy" />
            </div>
            <img data-pin-nopin="true" src="/case/bucherer/personas/catalogue-proto.webp" alt="Catalogue prototype overview" class="atc-proto-wide" loading="lazy" />
          </div>
        </div>

        <div class="atc-results">
          <div class="atc-result-intro">
            <span class="mv-states-tag">Results</span>
            <p class="mv-states-note">Adoption moved faster than we had planned for, growing at roughly 7% month over month. Nearly half of all users added pieces to their collection themselves, which told us the flow was doing its job and that the extra step we had accepted as a risk was not stopping people.</p>
            <p class="mv-states-note">In absolute terms jewellery sits far behind watches, which is expected for a business built on watch enthusiasts. But the category did not exist in the app before this, so 959 pieces logged by 1.6% of users is a good start, not a disappointment. It gave us real data on a customer we previously knew very little about, and a base to keep promoting and developing jewellery across other services in the app.</p>
          </div>

          <div class="atc-stats">
            <div class="atc-split-tiles">
              <div class="atc-stat">
                <span class="atc-stat-num">52.0K</span>
                <span class="atc-stat-label">Downloads</span>
                <span class="atc-stat-sub">+7.3% month-over-month</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">26.1K</span>
                <span class="atc-stat-label">Watches added to collections</span>
                <span class="atc-stat-sub">45.3% of users added watches in app</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">959</span>
                <span class="atc-stat-label">Jewellery pieces added</span>
                <span class="atc-stat-sub">1.6% of users. Secondary market, as expected.</span>
              </div>
            </div>

            <div class="atc-stat-row atc-stat-row--primary">
              <div class="atc-stat">
                <span class="atc-stat-num">46.2K</span>
                <span class="atc-stat-label">Pieces imported from CRM</span>
                <span class="atc-stat-sub">76% of users imported their collection</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">7.0K</span>
                <span class="atc-stat-label">Documents uploaded</span>
                <span class="atc-stat-sub">3.6% of users added documents</span>
              </div>
              <div class="atc-stat">
                <span class="atc-stat-num">26.7K</span>
                <span class="atc-stat-label">Pictures uploaded</span>
                <span class="atc-stat-sub">10.3% of users added pictures</span>
              </div>
            </div>
          </div>

          <p class="atc-stats-note">Metrics reflect May 2026.</p>
        </div>

        <div class="atc-next-steps">
          <span class="atc-intro-label">Next Steps</span>
          <p class="body-copy">What I'd improve now, with AI far more capable and accessible than it was at the time, is agentic image recognition: letting a collector simply photograph their piece and have the app identify it automatically, pulling in the information without a single search or manual entry. It would remove the last real friction point in the adding flow, turning the least glamorous part of onboarding a piece into something as effortless as taking a photo.</p>
        </div>

      </section>

      <!-- ── Market Value Estimate ── -->
      <section class="case-section mv-section">
        <div class="sect-header sect-header--stacked">
          <span class="num">[ 02 ]</span>
          <span class="sect-title-main">Market Value Estimate</span>
          <span class="sect-title-sub">Quick overview</span>
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
            <img data-pin-nopin="true" src="/case/bucherer/market1.webp" alt="Services screen — Market Value Estimate entry point" class="mv-screen-img" loading="lazy" />
            <p class="mv-screen-caption">Entry point from Services</p>
          </div>
          <div class="mv-screen-slot">
            <img data-pin-nopin="true" src="/case/bucherer/market2.webp" alt="Collection overview — total portfolio value with chart" class="mv-screen-img" loading="lazy" />
            <p class="mv-screen-caption">Total collection value</p>
          </div>
          <div class="mv-screen-slot">
            <img data-pin-nopin="true" src="/case/bucherer/market3.webp" alt="Single watch valuation with timeframe chart" class="mv-screen-img" loading="lazy" />
            <p class="mv-screen-caption">Per-watch breakdown</p>
          </div>
        </div>

        <div class="nda-stage">
          <blockquote class="pull-quote">
            The full case study is on its way — precision takes time.
          </blockquote>
          <p class="body-copy">This is the most recent and ongoing project in the portfolio. New case studies are being put together.</p>
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
  meta: [{ name: 'pinterest', content: 'nopin' }],
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

.app-context {
  max-width: 72ch;
  margin-bottom: clamp(40px, 5vw, 64px);
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

.sect-header--stacked {
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.sect-title-main {
  font-family: 'Stack Sans Notch', sans-serif;
  font-size: clamp(18px, 2vw, 28px);
  font-weight: 300;
  letter-spacing: -0.02em;
  text-transform: none;
  color: #0B0C0B;
  margin-right: 10px;
}

.sect-title-sub {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.45);
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

.mv-section .sect-title-main {
  color: #EAEAE8;
}

.mv-section .sect-title-sub {
  color: rgba(234, 234, 232, 0.5);
}

.mv-section .mv-states-tag {
  color: #00A8A8;
}

.mv-section .nda-stage .pull-quote {
  color: #EAEAE8;
  border-left-color: #00A8A8;
  font-size: clamp(18px, 2vw, 28px);
}

.mv-section .nda-stage .body-copy {
  color: rgba(234, 234, 232, 0.7);
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
  gap: clamp(24px, 3vw, 36px);
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  padding-top: clamp(32px, 4vw, 48px);
  margin-top: clamp(36px, 4vw, 52px);
}

.atc-objective,
.atc-challenge {
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3vw, 36px);
  margin-bottom: clamp(36px, 4vw, 52px);
}

.atc-challenge {
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  padding-top: clamp(32px, 4vw, 48px);
}

.atc-next-steps {
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3vw, 36px);
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  padding-top: clamp(32px, 4vw, 48px);
  margin-top: clamp(36px, 4vw, 52px);
}

.atc-next-steps .body-copy {
  max-width: 72ch;
  margin-bottom: 0;
}

.atc-questions-lead {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(14px, 1vw, 16px);
  color: rgba(11, 12, 11, 0.55);
  margin: 0 0 -12px 0;
  padding-top: clamp(32px, 4vw, 48px);
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  margin-top: clamp(32px, 4vw, 48px);
}

.atc-design-questions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 3vw, 48px);
}

.atc-design-q {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 2px solid #007070;
  padding-left: 24px;
}

.atc-q-num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #007070;
}

.atc-q-text {
  font-family: 'Stack Sans Notch', sans-serif;
  font-weight: 300;
  font-size: clamp(20px, 2.2vw, 36px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

@media (max-width: 760px) {
  .atc-design-questions { grid-template-columns: 1fr; }
}

.atc-research,
.atc-solution {
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 3vw, 36px);
  border-top: 1px solid rgba(11, 12, 11, 0.12);
  padding-top: clamp(32px, 4vw, 48px);
  margin-bottom: clamp(36px, 4vw, 52px);
}

.atc-research-body {
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 72ch;
}

.atc-sub-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.45);
  /* Sits close to the content it labels, further from what precedes it,
     so each label + block reads as one group inside the 36px flex gap. */
  margin-top: 32px;
  margin-bottom: -24px;
}

/* Inside the device column the label is already tight — keep default flow */
.atc-sub-label--devices {
  align-self: flex-start;
  margin-top: 0;
  margin-bottom: 0;
}

.atc-research-body .body-copy {
  margin-bottom: 0;
}

.atc-personas {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.atc-map-bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.map-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}

@media (max-width: 760px) {
  .atc-map-bento { grid-template-columns: 1fr; }
}

.brainstorm-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}

/* ── Solution showcase: copy left, devices right ── */
.atc-showcase {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.atc-showcase-text {
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 60ch;
}

.atc-showcase-text .body-copy {
  margin-bottom: 0;
}

/* First child of the copy column: align to the top, hug the paragraph below */
.atc-showcase-text .atc-sub-label {
  margin-top: 0;
  margin-bottom: -14px;
}

.atc-showcase-devices {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.atc-showcase-devices-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(12px, 1.5vw, 20px);
  align-items: start;
}

/* iPhone-style frame */
.device {
  position: relative;
  border-radius: 14.5%/6.8%;
  background: #0B0C0B;
  padding: 2.6%;
  box-shadow:
    0 1px 2px rgba(11, 12, 11, 0.18),
    0 18px 40px -12px rgba(11, 12, 11, 0.32);
}

.device img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12.4%/5.6%;
}

@media (max-width: 900px) {
  .atc-showcase {
    grid-template-columns: 1fr;
    gap: clamp(28px, 5vw, 40px);
  }

  .atc-showcase-devices {
    max-width: 420px;
  }
}

/* Solution has no sub-labels: each paragraph owns the screens beneath it,
   so pull the images up toward their copy and open the gap before the next block. */
.atc-solution > .atc-research-body {
  margin-top: 28px;
}

/* A sub-label already opens the group, so the copy hugs it instead */
.atc-solution > .atc-sub-label + .atc-research-body {
  margin-top: 0;
}

/* Media blocks are tall — give them air above and below so they read as
   their own beat rather than sitting flush against the copy. */
.atc-research > .atc-personas,
.atc-research > .atc-map-bento,
.atc-research > .brainstorm-img,
.atc-solution > .atc-flow-row,
.atc-solution > .atc-proto-row {
  margin-top: 12px;
  margin-bottom: 16px;
}

/* Five-step adding flow */
.atc-flow-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: clamp(10px, 1.4vw, 20px);
  align-items: start;
}

@media (max-width: 900px) {
  .atc-flow-row { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 560px) {
  .atc-flow-row { grid-template-columns: repeat(2, 1fr); }
}

/* Long-form prototype scrolls + catalogue overview */
.atc-proto-row {
  display: flex;
  align-items: center;
  gap: clamp(20px, 3vw, 48px);
}

.atc-proto-verticals {
  display: flex;
  align-items: flex-start;
  gap: clamp(10px, 1.4vw, 18px);
  flex: 0 0 auto;
}

.atc-proto-verticals img {
  display: block;
  width: auto;
  max-height: clamp(280px, 34vw, 440px);
  border: 1px solid rgba(11, 12, 11, 0.1);
  border-radius: 2px;
}

.atc-proto-wide {
  display: block;
  flex: 1 1 auto;
  min-width: 0;
  height: auto;
  border: 1px solid rgba(11, 12, 11, 0.1);
  border-radius: 2px;
}

@media (max-width: 760px) {
  .atc-proto-row {
    flex-direction: column;
    align-items: stretch;
  }
  .atc-proto-verticals { justify-content: center; }
  .atc-proto-wide { width: 100%; }
}

.persona-card {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
}

@media (max-width: 760px) {
  .atc-personas {
    grid-template-columns: repeat(2, 1fr);
  }
}

.atc-objective-body {
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 72ch;
}

.atc-objective-body .body-copy {
  margin-bottom: 0;
}

.atc-intro-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #007070;
  /* Tighten the section label to the copy it introduces */
  margin-bottom: -14px;
}

.atc-obj-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 72ch;
}

.atc-obj-list li {
  font-family: 'DM Sans', system-ui, sans-serif;
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.75);
  padding-left: 20px;
  position: relative;
}

.atc-obj-list li::before {
  content: counter(obj-num) '.';
  counter-increment: obj-num;
  position: absolute;
  left: 0;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  font-weight: 500;
  color: #007070;
  top: 4px;
}

.atc-obj-list {
  counter-reset: obj-num;
}

.atc-obj-list strong {
  color: #0B0C0B;
  font-weight: 500;
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
  gap: 26px;
}

/* Match the label-to-copy proximity used across the other sections */
.atc-result-intro .mv-states-tag {
  margin-bottom: -4px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(11, 12, 11, 0.1);
}

.atc-stats-note {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  color: rgba(11, 12, 11, 0.5);
  /* Footnote hugs the table it annotates */
  margin: -22px 0 0;
}

@media (max-width: 760px) {
  .atc-split-tiles { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .atc-stat-row { grid-template-columns: 1fr; }
  .atc-result-intro { max-width: 100%; }
}

</style>
