<template>
  <div>
    <AppHeader />

    <main>

      <!-- ── Hero ── -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-meta">
            <span>ABC Fitness Solutions · App Redesign</span>
            <span>UX/UI Designer</span>
          </div>
          <h1 class="hero-title">Reinventing<br><em>fitness.</em></h1>
          <p class="hero-sub">The next level gym management software.</p>
        </div>

        <div class="img-hero">
          <img src="/case/abc-redesign/abcshow10.webp" alt="Ignite App — The next level gym management software" class="case-img" />
        </div>
      </section>

      <!-- ── Overview strip ── -->
      <div class="overview-strip">
        <div class="overview-item">
          <span class="ov-label">Role</span>
          <span class="ov-val">UX/UI Designer</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Company</span>
          <span class="ov-val">ABC Fitness Solutions LLC</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Platform</span>
          <span class="ov-val">iOS · Android</span>
        </div>
      </div>

      <!-- ── 01 Goal ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 01 ]</span> — Project Goal</span>
        </div>
        <div class="two-col">
          <div class="col-text">
            <p class="body-copy">ABC Fitness aimed to redesign its app for various reasons. Primarily, the goal was to enhance user experience, stay competitive among technological advancements, modernize the design for visual appeal, and improve functionalities to boost user satisfaction and drive business growth.</p>
          </div>
          <div class="col-tags">
            <span class="pill">App Redesign</span>
            <span class="pill">Design System</span>
            <span class="pill">White-label</span>
          </div>
        </div>
      </section>

      <!-- ── 02 Problem ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ 02 ]</span> — Problem Statement</span>
        </div>
        <blockquote class="pull-quote">
          The growing trend of sedentary lifestyles has sparked a stronger inclination toward exercise — and with it, a rising demand for a comprehensive fitness app that tackles the diverse challenges people face in maintaining a balanced, healthy lifestyle.
        </blockquote>
        <p class="body-copy">Drawing from insights gathered through app usage, there was a clear opportunity to enhance the user experience beyond simple workout tracking and calorie counting — providing personalized, motivating solutions for users with varying fitness levels, preferences, and health conditions.</p>

        <div class="img-grid img-grid--2">
          <img src="/case/abc-redesign/lifestyle11.webp" alt="Member logging a meal in the ABC Fitness app" class="case-img case-img--rounded" />
          <img src="/case/abc-redesign/lifestyle12.webp" alt="Member checking in at the gym with the ABC Fitness app" class="case-img case-img--rounded" />
        </div>
      </section>

      <!-- ── 03 Define ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 03 ]</span> — Define</span>
        </div>
        <h2 class="section-title">Member Personas</h2>
        <!-- Personas -->
        <div class="persona-grid">
          <div class="persona-card">
            <span class="persona-pct">34%</span>
            <h4 class="persona-name">Routine Lifers</h4>
            <p class="persona-desc">Sticks to a consistent regimen</p>
          </div>
          <div class="persona-card">
            <span class="persona-pct">30%</span>
            <h4 class="persona-name">Wellness Lovers</h4>
            <p class="persona-desc">Balances fitness, nutrition and mental/physical wellbeing</p>
          </div>
          <div class="persona-card">
            <span class="persona-pct">19%</span>
            <h4 class="persona-name">Fitness Explorers</h4>
            <p class="persona-desc">Continuously seeks out new fitness programs, products and services</p>
          </div>
          <div class="persona-card">
            <span class="persona-pct">17%</span>
            <h4 class="persona-name">Casual Consumers</h4>
            <p class="persona-desc">Fitness motivation is primarily event driven (vacation, wedding, etc.)</p>
          </div>
        </div>
        <p class="body-copy">After analyzing four types of members and four types of business models, we've identified common needs that must be addressed in creating a universal app design.</p>

        <!-- Packages matrix -->
        <h3 class="sub-title">ABC packages and members</h3>

        <div class="packages-grid">
          <div class="package-card">
            <span class="pkg-label">IGNITE Go</span>
            <span class="pkg-member">→ Fitness Explorer</span>
            <p class="pkg-desc">Likes to work out on their own, prefers gym</p>
            <ul class="pkg-features">
              <li>Gym check-in</li>
              <li>Manage membership</li>
            </ul>
          </div>
          <div class="package-card">
            <span class="pkg-label">IGNITE Connect</span>
            <span class="pkg-member">→ Routine Lifers</span>
            <p class="pkg-desc">Likes to work out on their own, prefers home/outdoors</p>
            <ul class="pkg-features">
              <li>Gym check-in</li>
              <li>Class booking</li>
              <li>Manage membership</li>
              <li>Workout library</li>
            </ul>
          </div>
          <div class="package-card">
            <span class="pkg-label">IGNITE Coach</span>
            <span class="pkg-member">→ Casual Consumers</span>
            <p class="pkg-desc">Needs guidance, prefers gym</p>
            <ul class="pkg-features">
              <li>Gym check-in</li>
              <li>Class booking</li>
              <li>Personal trainer</li>
              <li>Manage membership</li>
            </ul>
          </div>
          <div class="package-card package-card--accent">
            <span class="pkg-label">IGNITE Total</span>
            <span class="pkg-member">→ Wellness Lovers</span>
            <p class="pkg-desc">Needs guidance and freedom, mixed workouts</p>
            <ul class="pkg-features">
              <li>Gym check-in</li>
              <li>Class booking</li>
              <li>Personal trainer</li>
              <li>Manage membership</li>
              <li>Workout library</li>
              <li>Mixed workouts</li>
            </ul>
          </div>
        </div>
        <p class="body-copy">ABC Fitness presents four distinct packages for businesses to choose from, allowing them to tailor their selection based on their needs and the types of members they intend to target — one or multiple packages that align with their specific requirements.</p>

        <img src="/case/abc-redesign/abcshow11.webp" alt="ABC Fitness — Businesses to Packages diagram" class="case-img case-img--rounded" />
      </section>

      <!-- ── 04 Design System ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ 04 ]</span> — Ideate · Design System</span>
        </div>
        <h2 class="section-title">Complete customization.</h2>
        <p class="body-copy">The main challenge in rebranding and developing the new design system was the need for complete customization. The priority in the MVP was ensuring that components function in line with any brand's style — requiring comprehensive guidelines for implementing the design system, especially around custom brand colors.</p>

        <div class="ds-pillars">
          <div class="ds-pillar">
            <span class="ds-pillar-label">Color</span>
            <p>A vibrant, systematic and meaningful approach to color usage — designed to resonate with the app's mission to promote health and wellness. The system covers brand colors, greyscales, and semantic states (error, warning, success, info) across both light and dark modes.</p>
          </div>
          <div class="ds-pillar">
            <span class="ds-pillar-label">Typography</span>
            <p>Avenir — a geometric sans-serif by Adrian Frutiger (1987) — serves as the primary typeface, covering Display, Headline, Title, Body and Caption scales across three weights: Heavy, Roman, and Light.</p>
          </div>
          <div class="ds-pillar">
            <span class="ds-pillar-label">Iconography</span>
            <p>A recognizable, highly simplified icon system. Icon content is constrained to a 20dp live area with 2dp padding, supporting six sizes: 20px, 24px, 40px, 48px, 64px, and 88px. Outlined style throughout.</p>
          </div>
        </div>
        <img src="/case/abc-redesign/16.webp" alt="Design System — Color palette, typography and iconography" class="case-img case-img--rounded" />

        <div class="callout">
          <span class="callout-label">Custom Branded Colours</span>
          <p>To align with each brand's style guide, all components needed to support both dark and light mode variations. Further stages introduced the "softness" style — allowing businesses to achieve an even more personalized app appearance through new icon styles, border radius, and typefaces.</p>
        </div>

        <div class="img-row img-row--70">
          <img src="/case/abc-redesign/17a.webp" alt="" class="case-img case-img--rounded" />
          <img src="/case/abc-redesign/17b.webp" alt="" class="case-img case-img--rounded" />
          <img src="/case/abc-redesign/17c.webp" alt="" class="case-img case-img--rounded" />
          <img src="/case/abc-redesign/17d.webp" alt="" class="case-img case-img--rounded" />
          <img src="/case/abc-redesign/17e.webp" alt="" class="case-img case-img--rounded" />
        </div>

        <!-- Softness styles -->
        <h3 class="sub-title">Style Variants</h3>
        <p class="body-copy">Three visual personalities were defined for the design system, enabling businesses to fine-tune the app's look beyond just colour.</p>

        <div class="style-variants">
          <div class="style-variant">
            <span class="variant-name">Soft</span>
            <p class="variant-desc">Rounded corners, gentle icons, softer typefaces — warm and approachable</p>
          </div>
          <div class="style-variant style-variant--active">
            <span class="variant-name">Neutral <span class="variant-badge">MVP</span></span>
            <p class="variant-desc">Balanced defaults — the starting point for all brand customizations</p>
          </div>
          <div class="style-variant">
            <span class="variant-name">Sharp</span>
            <p class="variant-desc">Hard edges, precise icons, strong typefaces — bold and performance-driven</p>
          </div>
        </div>

        <img src="/case/abc-redesign/18.webp" alt="" class="case-img case-img--rounded" />

      </section>

      <!-- ── 05 Roadmap ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 05 ]</span> — Roadmap</span>
        </div>
        <p class="body-copy">The initial plan was to establish a base style, map the app architecture and wireframes, starting with the most complex version — Engagement Total. The design system would then be completed and applied to all elements, allowing adaptation to simpler versions.</p>
        <p class="body-copy">Due to time constraints and immediate user demand, the business decided to begin with the simpler version: Engagement Go.</p>
        <div class="text-image-row">
          <div class="text-image-row__text">
            <span class="label-red">Ignite Engagement Go</span>
            <p class="body-copy">The redesign was first implemented on the basic app version — Engagement Go — primarily used by members for check-ins and membership management.</p>
          </div>
          <img src="/case/abc-redesign/19.webp" alt="" class="case-img case-img--rounded text-image-row__img" />
        </div>

      </section>

      <!-- ── 06 Ignite Go ── -->
      <section class="case-section case-section--alt">
        <h2 class="section-title">Start simple. Ship fast.</h2>

        <!-- HMW -->
        <h3 class="sub-title">How Might We?</h3>
        <div class="hmw-grid">
          <div class="hmw-card">
            <p>...streamline the check-in process to allow users to confirm their gym attendance with just a single tap, minimising steps and time required?</p>
          </div>
          <div class="hmw-card">
            <p>...tailor the check-in experience to individual users, providing personalised suggestions or greetings?</p>
          </div>
          <div class="hmw-card">
            <p>...motivate users to check in consistently, promoting a regular gym routine?</p>
          </div>
          <div class="hmw-card">
            <p>...design the app to be more accessible, catering to users with different abilities or needs?</p>
          </div>
          <div class="hmw-card">
            <p>...integrate a gamification element into the check-in process, rewarding users with points, badges, or challenges to create a more enjoyable experience?</p>
          </div>
          <div class="hmw-card">
            <p>...enable users to monitor real-time gym occupancy, ensuring a seamless and informed experience while planning their workouts?</p>
          </div>
          <div class="hmw-card">
            <p>...design a goal-setting feature that allows users to easily set and track their weekly check-in targets, with motivational feedback and rewards for achievement?</p>
          </div>
          <div class="hmw-card">
            <p>...design an intuitive membership management feature allowing users to renew memberships and make payments directly through the app?</p>
          </div>
          <div class="hmw-card">
            <p>...seamlessly integrate the app with popular health platforms like Apple Health or Google Fit, synchronising data to provide a holistic view of their wellness journey?</p>
          </div>
        </div>
        <p class="body-copy">After brainstorming sessions and defining HMW questions, we did feature prioritization where we evaluated all possible features that we have for this app and listed out the most important features that we have to create for our MVP Product.</p>

        <!-- MVP -->
        <div class="mvp-block">
          <div class="mvp-core">
            <span class="mvp-label">Core Value · MVP</span>
            <p>A seamless, easy-to-use check-in feature with a personalised look and feel — and the possibility of adding it to the Apple Wallet, so members can check in simply by pressing the side button.</p>
            <ul class="mvp-features">
              <li>Monitor real-time gym occupancy</li>
              <li>Manage memberships</li>
              <li>Add to Apple Wallet</li>
            </ul>
          </div>
          <div class="mvp-future">
            <span class="mvp-label">Features for Future Release</span>
            <ul class="mvp-features mvp-features--muted">
              <li>Set a weekly goal and track number of check-ins</li>
              <li>Incorporate gamification elements around goal completion</li>
              <li>Integration with Apple Health or Google Fit</li>
            </ul>
          </div>
        </div>

        <!-- Wireframes -->
        <h3 class="sub-title">Wireframes</h3>
        <p class="body-copy">To identify all areas for improvement, we mapped the architecture of the current app and began reconstructing wireframes with necessary adjustments.</p>

        <div class="img-labeled">
          <span class="img-label">Original App</span>
          <img src="/case/abc-redesign/23.webp" alt="" class="case-img case-img--rounded wireframe-img" />
        </div>
        <div class="img-labeled">
          <span class="img-label">Architecture</span>
          <img src="/case/abc-redesign/24.webp" alt="" class="case-img case-img--rounded wireframe-img wireframe-img--sm" />
        </div>
        <div class="img-labeled">
          <span class="img-label">Mockups</span>
          <img src="/case/abc-redesign/25.webp" alt="" class="case-img case-img--rounded wireframe-img" />
        </div>

        <hr class="section-divider" />

        <!-- Example 1 -->
        <h3 class="sub-title">Example 1 — "Find a club" UX &amp; UI</h3>
        <div class="img-labeled">
          <span class="img-label">Original</span>
          <img src="/case/abc-redesign/abcshow13.webp" alt="Find a club — current design" class="case-img case-img--rounded" />
        </div>
        <div class="img-labeled">
          <span class="img-label">Redesigned</span>
          <img src="/case/abc-redesign/abcshow14.webp" alt="Find a club — redesigned" class="case-img case-img--rounded" />
        </div>

        <div class="improvements-list">
          <span class="improvements-label">Key Improvements</span>
          <ol class="improvements">
            <li>Get directions easier — users expected a quick way to switch to their default map app</li>
            <li>Club name added to list results</li>
            <li>Distance to club displayed</li>
            <li>Club can be marked as Favourite</li>
            <li>More comprehensive icons matching UX standards, with additional actions</li>
            <li>Selected location centralised on map</li>
            <li>Improved search — whole list of clubs presented by proximity as soon as search bar is selected, then filtered as user types</li>
          </ol>
        </div>

        <!-- Example 2 -->
        <h3 class="sub-title">Example 2 — "Payment methods" UI</h3>

        <div class="img-labeled">
          <span class="img-label">Original</span>
          <img src="/case/abc-redesign/29.webp" alt="" class="case-img case-img--rounded" />
        </div>
        <div class="img-labeled">
          <span class="img-label">Redesigned</span>
          <img src="/case/abc-redesign/30.webp" alt="" class="case-img case-img--rounded" />
        </div>

      </section>

      <!-- ── 07 Ignite Total ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 07 ]</span> — Ignite Total</span>
        </div>
        <h2 class="section-title">The full picture.</h2>
        <p class="body-copy">After establishing the visual concept through Ignite Go, we advanced to the app's most complex version — Ignite Total — containing all available features: workout tracking, class booking, nutrition logging, personal training, and more.</p>
        <div class="text-image-row">
          <p class="body-copy text-image-row__text">The project was put on hold before its completion.</p>
          <img src="/case/abc-redesign/31.webp" alt="" class="case-img case-img--rounded text-image-row__img" />
        </div>

      </section>

      <!-- ── Nav ── -->
      <div class="case-nav">
        <NuxtLink to="/#work" class="nav-back" data-hoverable>
          <span>←</span> Back to work
        </NuxtLink>
        <NuxtLink to="/projects/abc-referral" class="nav-next" data-hoverable>
          Next — Effortlessly increasing customer base <span>→</span>
        </NuxtLink>
      </div>

    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Reinventing Fitness — ABC Fitness App Redesign · Marina Markus',
})
</script>

<style scoped>
main {
  padding-top: 80px;
}

/* ── Hero ── */
.hero {
  padding: 0 clamp(20px, 3.4vw, 56px) 0;
}

.hero-inner {
  min-height: calc(100svh - 80px);
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: clamp(80px, 10vw, 160px);
  padding-bottom: clamp(40px, 6vw, 80px);
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
  font-size: clamp(20px, 2.4vw, 36px);
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
  color: rgba(11, 12, 11, 0.45);
}

.ov-val {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.04em;
  color: #0B0C0B;
}

@media (max-width: 760px) {
  .hero-inner { min-height: unset; justify-content: flex-start; }
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

.section-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(32px, 5vw, 80px);
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: #0B0C0B;
  margin-bottom: 32px;
}

.text-image-row {
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 32px 0;
}

.text-image-row__text {
  flex: 1;
}

.text-image-row__text .body-copy {
  margin: 0;
}

.text-image-row__img.case-img {
  width: 20%;
  flex-shrink: 0;
  margin: 0;
}

.wireframe-img.case-img {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.img-labeled:has(.wireframe-img) .img-label {
  width: 60%;
}

.wireframe-img--sm.case-img {
  width: 40%;
}

.section-divider {
  border: none;
  border-top: 1px solid #E0E0E0;
  margin: 64px 0;
}

.img-labeled {
  margin: 40px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #E0291A;
  margin-bottom: 40px;
  text-align: left;
  align-self: flex-start;
}

.img-labeled .case-img {
  margin: 0;
}

.label-red {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #E0291A;
  margin-bottom: 8px;
}

.sub-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(22px, 2.8vw, 40px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 56px 0 20px;
}

.body-copy {
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.75);
  max-width: 68ch;
  margin-bottom: 24px;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 60px;
  align-items: start;
}

@media (max-width: 760px) {
  .two-col { grid-template-columns: 1fr; }
}

.col-tags {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pill {
  display: inline-block;
  border: 1px solid rgba(11, 12, 11, 0.2);
  border-radius: 99px;
  padding: 5px 14px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.6);
  white-space: nowrap;
}

.pull-quote {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(22px, 2.8vw, 40px);
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #0B0C0B;
  border-left: 2px solid #D63D14;
  padding-left: 32px;
  max-width: 56ch;
  margin-bottom: 40px;
}

/* ── Personas ── */
.persona-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
  margin: 40px 0;
}

.persona-card {
  background: #E8E2D5;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.persona-pct {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(40px, 5vw, 72px);
  line-height: 1;
  letter-spacing: -0.04em;
  color: #D63D14;
}

.persona-name {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0B0C0B;
  font-weight: 500;
  margin: 0;
}

.persona-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.55);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 880px) {
  .persona-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 500px) {
  .persona-grid { grid-template-columns: 1fr; }
}

/* ── Packages ── */
.packages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
  margin: 32px 0 40px;
}

.package-card {
  background: #E8E2D5;
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.package-card--accent {
  background: #0B0C0B;
}

.package-card--accent .pkg-label,
.package-card--accent .pkg-member,
.package-card--accent .pkg-desc,
.package-card--accent .pkg-features li {
  color: #E8E2D5;
}

.package-card--accent .pkg-label {
  color: #D63D14;
}

.pkg-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #D63D14;
}

.pkg-member {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.75);
  margin-bottom: 4px;
}

.pkg-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.03em;
  color: rgba(11, 12, 11, 0.5);
  line-height: 1.5;
  margin-bottom: 8px;
}

.pkg-features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pkg-features li {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.65);
  padding-left: 12px;
  position: relative;
}

.pkg-features li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(11, 12, 11, 0.3);
}

.package-card--accent .pkg-features li::before {
  color: rgba(232, 226, 213, 0.3);
}

@media (max-width: 880px) {
  .packages-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 500px) {
  .packages-grid { grid-template-columns: 1fr; }
}

/* ── Design System pillars ── */
.ds-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 40px 0;
}

.ds-pillar {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ds-pillar-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D63D14;
}

.ds-pillar p {
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: rgba(11, 12, 11, 0.7);
}

@media (max-width: 760px) {
  .ds-pillars { grid-template-columns: 1fr; }
}

.callout {
  border: 1px solid rgba(11, 12, 11, 0.12);
  border-left: 3px solid #D63D14;
  padding: 28px 32px;
  margin: 40px 0;
  max-width: 68ch;
}

.callout-label {
  display: block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D63D14;
  margin-bottom: 12px;
}

.callout p {
  font-size: clamp(15px, 1.1vw, 18px);
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.75);
}

/* ── Style variants ── */
.style-variants {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
  margin: 32px 0 40px;
}

.style-variant {
  background: #E8E2D5;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.style-variant--active {
  background: #0B0C0B;
}

.variant-name {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0B0C0B;
  display: flex;
  align-items: center;
  gap: 8px;
}

.style-variant--active .variant-name {
  color: #E8E2D5;
}

.variant-badge {
  font-size: 9px;
  letter-spacing: 0.08em;
  background: #D63D14;
  color: #E8E2D5;
  padding: 2px 8px;
  border-radius: 99px;
}

.variant-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.5);
  line-height: 1.6;
  margin: 0;
}

.style-variant--active .variant-desc {
  color: rgba(232, 226, 213, 0.55);
}

@media (max-width: 600px) {
  .style-variants { grid-template-columns: 1fr; }
}

@media (max-width: 760px) {
  .text-image-row { flex-direction: column; }
  .text-image-row__img.case-img { width: 100%; }
}

/* ── HMW grid ── */
.hmw-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
  margin: 32px 0 48px;
}

.hmw-card {
  background: #E8E2D5;
  padding: 24px 20px;
}

.hmw-card p {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  line-height: 1.65;
  color: rgba(11, 12, 11, 0.65);
  margin: 0;
}

.hmw-card p::before {
  content: 'HMW ';
  color: #D63D14;
  font-weight: 500;
}

@media (max-width: 880px) {
  .hmw-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 560px) {
  .hmw-grid { grid-template-columns: 1fr; }
}

/* ── MVP block ── */
.mvp-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
  margin: 0 0 48px;
}

.mvp-core {
  background: #0B0C0B;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mvp-future {
  background: #E8E2D5;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mvp-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D63D14;
}

.mvp-core p {
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: rgba(232, 226, 213, 0.75);
}

.mvp-features {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mvp-features li {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: #E8E2D5;
  padding-left: 16px;
  position: relative;
}

.mvp-features li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #D63D14;
}

.mvp-features--muted li {
  color: rgba(11, 12, 11, 0.6);
}

.mvp-features--muted li::before {
  color: rgba(11, 12, 11, 0.25);
}

@media (max-width: 640px) {
  .mvp-block { grid-template-columns: 1fr; }
}

/* ── Improvements ── */
.improvements-list {
  margin: 32px 0 48px;
  padding: 28px 32px;
  border: 1px solid rgba(11, 12, 11, 0.12);
  border-left: 3px solid #D63D14;
}

.improvements-label {
  display: block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D63D14;
  margin-bottom: 16px;
}

.improvements {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.improvements li {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.65);
}

/* ── Images ── */
.case-img {
  display: block;
  width: 70%;
  height: auto;
  margin: 32px auto;
}

@media (max-width: 760px) {
  .case-img { width: 100%; margin: 32px 0; }
}

.case-img--rounded {
  border-radius: 4px;
}

.img-hero {
  margin-top: 0;
  overflow: hidden;
  border-radius: 4px;
}

.img-hero .case-img {
  margin: 0;
  width: 100%;
  height: auto;
}

.img-row {
  display: flex;
  gap: 8px;
  margin: 32px 0;
}

.img-row--70 {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.img-row .case-img {
  flex: 1;
  width: 100%;
  min-width: 0;
  margin: 0;
  object-fit: cover;
}

.img-grid {
  display: grid;
  gap: 16px;
  margin: 32px 0;
}

.img-grid--2 {
  grid-template-columns: 1fr 1fr;
}

.img-grid .case-img {
  width: 100%;
  margin: 0;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 760px) {
  .img-grid--2 { grid-template-columns: 1fr; }
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
