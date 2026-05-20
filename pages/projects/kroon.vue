<template>
  <div>
    <AppHeader />

    <main>

      <!-- ── Hero ── -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-meta">
            <span>Kroon Studio · Pro bono</span>
            <span>UX/UI Designer · Research</span>
          </div>
          <h1 class="hero-title">For the<br><em>love</em> of dog.</h1>
          <p class="hero-sub">Dogster — platform dedicated to reducing abandonment and promoting adoption</p>
        </div>

      </section>

      <!-- ── Overview strip ── -->
      <div class="overview-strip">
        <div class="overview-item">
          <span class="ov-label">Role</span>
          <span class="ov-val">UX/UI Designer · Research</span>
        </div>
        <div class="overview-item">
          <span class="ov-label">Company</span>
          <span class="ov-val">Kroon Studio</span>
        </div>
<div class="overview-item">
          <span class="ov-label">Type</span>
          <span class="ov-val">Research · Proposal · Pro bono</span>
        </div>
      </div>

      <!-- ── 01 The Problem ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 01 ]</span> The Problem</span>
          <span class="rule" />
        </div>

        <div class="intro-stage">
          <blockquote class="pull-quote">
            Learn to love and never leave.
          </blockquote>
          <p class="body-copy">Dogster is a web-based platform dedicated to reducing dog abandonment and promoting adoption. The problem it addresses is not a lack of goodwill — it is a lack of structure. People who want to adopt do not know where to look. Shelters post across multiple social networks and groups, requiring potential adopters to spend time searching across platforms to find the right dog. There is no centralized, trusted channel. Health status is unclear, adoption conditions are scattered, and the process feels uncertain enough that many people never follow through.</p>
          <p class="body-copy">The reasons people abandon dogs are equally fragmented: change of living circumstances, unexpected events, absence, lifestyle shifts, uncertainty. Addressing the abandonment problem means addressing it at both ends — making adoption easier, and making ownership more supported.</p>
        </div>
      </section>

      <!-- ── 02 Customers ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ 02 ]</span> Who We Are Designing For</span>
          <span class="rule" />
        </div>

        <p class="body-copy section-lead">Based on the value proposition, we identified four customer types. The goal is to educate some users, inspire others to adopt, and connect all of them with shelters — working together to solve the problem of abandoned dogs.</p>

        <div class="user-grid">
          <div class="user-card user-card--primary">
            <span class="user-tag">Primary</span>
            <h3 class="user-title">Potential Adopters</h3>
            <p class="user-desc">People who do not have a dog but are debating whether to adopt. This is the primary user — their journey should lead them to adoption and therefore solve the core goal. They need to be educated about what dog ownership entails while being drawn in by the experience of discovering dogs. Their debates need to be understood and removed through the product.</p>
            <div class="user-kpi">
              <span class="kpi-label">KPI</span>
              <span class="kpi-val">% of adoptions out of all potential adopter type users</span>
            </div>
          </div>

          <div class="user-card user-card--primary">
            <span class="user-tag">Primary</span>
            <h3 class="user-title">Shelters</h3>
            <p class="user-desc">Organisations offering dogs for adoption or seeking to promote themselves for more funding. They will fill the platform with content — dog listings, profiles, campaigns. They need easy tools for posting listings and promoting their shelter. They can receive revenue through donations via the platform, making it a desirable channel.</p>
            <div class="user-kpi">
              <span class="kpi-label">KPI</span>
              <span class="kpi-val">Average number of adopted dogs per shelter</span>
            </div>
          </div>

          <div class="user-card">
            <span class="user-tag">Secondary</span>
            <h3 class="user-title">Fosters</h3>
            <p class="user-desc">People who serve as a bridge between shelters and potential adopters, accommodating dogs before they are ready for adoption. They need easy tools for promoting their services and good connections with possible adopters to provide knowledge about specific dogs and advice around ownership. They may also participate in the revenue model through dog sitting and other services.</p>
            <div class="user-kpi">
              <span class="kpi-label">KPI</span>
              <span class="kpi-val">Average number of adopted dogs per foster</span>
            </div>
          </div>

          <div class="user-card">
            <span class="user-tag">Secondary</span>
            <h3 class="user-title">Dog Owners</h3>
            <p class="user-desc">People who already have a dog but need more education to be better owners or prevent situations that lead to abandonment. This group may not directly solve the core goal but they are important — education and access to services (dog sitters, trainers, vets) can prevent the problem at the source. They also represent revenue potential through the educational and service segments.</p>
            <div class="user-kpi">
              <span class="kpi-label">KPI</span>
              <span class="kpi-val">Average number of sessions per dog owner type users</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 03 Value Proposition ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 03 ]</span> Value Proposition</span>
          <span class="rule" />
        </div>

        <div class="vp-grid">
          <div class="vp-col">
            <h3 class="vp-heading">Pains</h3>
            <ul class="vp-list">
              <li>No centralized channel for dog adoption — individuals post across social networks and groups, requiring users to search multiple platforms.</li>
              <li>Adopters are unsure which dog would suit them.</li>
              <li>Lack of trust and transparency in dog listings — unknown source of dogs, unclear health status.</li>
              <li>Lack of knowledge about the importance of neutering and preventing unwanted dogs.</li>
              <li>Shelters lack funding and have insecure income.</li>
              <li>Change of living circumstances, unexpected events, absence, lifestyle changes — leading to abandonment.</li>
            </ul>
          </div>

          <div class="vp-col">
            <h3 class="vp-heading">Gains</h3>
            <ul class="vp-list">
              <li>A unique and official adoption channel — a single place to make the adoption journey easier and successful.</li>
              <li>All shelters listed in one place with direct contact.</li>
              <li>Updated base of available dogs — large, reliable, and centralised.</li>
              <li>Verified profiles and accurate information for peace of mind.</li>
              <li>Support for shelters and fosters to reach more adopters and funding.</li>
            </ul>
          </div>

          <div class="vp-col">
            <h3 class="vp-heading">Products and Services</h3>
            <ul class="vp-list">
              <li>Shelter profiles with contact and adoption conditions.</li>
              <li>Dog profiles including medical condition, pickup location, special needs.</li>
              <li>Verified user system for trust and transparency.</li>
              <li>Online adoptions and donation channels.</li>
              <li>Dog sitting, vet, and grooming service listings.</li>
              <li>FAQ, Blog, Quiz, and Reminder features for education and engagement.</li>
              <li>Pet GPT — conversational assistant for adoption and ownership questions.</li>
              <li>Online adoption campaigns and fundraising events.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ── 04 Hypothesis ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ 04 ]</span> Hypothesis and Validation</span>
          <span class="rule" />
        </div>

        <p class="body-copy section-lead">We defined and tested hypotheses before committing to features. Two structured experiments were designed to validate the core assumption: that people who are planning to adopt would consider this app as a first place to look for dogs, provided all or most shelters and fosters are listed.</p>

        <div class="hypothesis-grid">
          <div class="hyp-card">
            <div class="hyp-meta">
              <span class="hyp-num">Experiment 01</span>
              <span class="hyp-type">Interview · Desirability / Viability</span>
            </div>
            <div class="hyp-costs">
              <span>Cost 2/5</span>
              <span>Setup 2/5</span>
              <span>Run time 2/5</span>
              <span>Evidence 1/5</span>
            </div>
            <h3 class="hyp-title">Direct contact with customers</h3>
            <p class="hyp-desc">We will interview 10 to 15 members of adoption-related Facebook groups — both adopters and shelter representatives — to measure the severity of their pains, the intensity of their goals, and their day-to-day jobs in relation to our value proposition.</p>
            <div class="hyp-success">
              <span class="hyp-success-label">We are right if</span>
              <p>A sufficient number of interviewees reflects the need for our product through their responses, confirming it relieves their major pains, enables their important jobs, and enhances their biggest goals.</p>
            </div>
          </div>

          <div class="hyp-card">
            <div class="hyp-meta">
              <span class="hyp-num">Experiment 02</span>
              <span class="hyp-type">Ad Tracking · Viability</span>
            </div>
            <div class="hyp-costs">
              <span>Cost 3/5</span>
              <span>Setup 2/5</span>
              <span>Run time 3/5</span>
              <span>Evidence 3/5</span>
            </div>
            <h3 class="hyp-title">Indirect observation of customers</h3>
            <p class="hyp-desc">We will set up an ad tracking experiment targeting members of adoption-related Facebook groups with 1,000 or more members. The ad will run for one week, measuring the number of clicks as a reflection of interest in the product.</p>
            <div class="hyp-success">
              <span class="hyp-success-label">We are right if</span>
              <p>More than 2% of group members show interest in our product by clicking through within the measurement window.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 05 Attract ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 05 ]</span> How to Attract Users</span>
          <span class="rule" />
        </div>

        <p class="body-copy section-lead">We defined five strategies to attract users. Based on available budgeting and resources, main strategies use the bulk of effort while secondary strategies rely on organic approaches.</p>

        <div class="strategy-list">
          <div class="strategy-item">
            <span class="strategy-num">01</span>
            <div class="strategy-body">
              <h3 class="strategy-title">Marketing Campaign</h3>
              <p class="strategy-desc">SEO-driven content, paid ads, and email campaigns targeting each customer segment separately. Campaigns are tailored to address specific motivations — education for potential adopters, visibility tools for shelters, community for dog owners. Best performing ad formats: video, interstitials, banners.</p>
            </div>
          </div>

          <div class="strategy-item">
            <span class="strategy-num">02</span>
            <div class="strategy-body">
              <h3 class="strategy-title">Sharing Options</h3>
              <p class="strategy-desc">Free sharing enabled across the platform, complemented by a referral programme where sharing results in a donation to a shelter. This turns every share into a contribution — giving users a reason to spread the word that goes beyond personal benefit.</p>
            </div>
          </div>

          <div class="strategy-item">
            <span class="strategy-num">03</span>
            <div class="strategy-body">
              <h3 class="strategy-title">Public Events and Media Coverage</h3>
              <p class="strategy-desc">Participation in dog exhibitions, expo appearances, and public space stands. Press releases, newsletters, and social media boosts. The more media attention the platform attracts, the wider the initial user base becomes. Celebrity partnerships are part of this layer — high-profile endorsements bring reach without paid media costs.</p>
            </div>
          </div>

          <div class="strategy-item">
            <span class="strategy-num">04</span>
            <div class="strategy-body">
              <h3 class="strategy-title">Partnerships</h3>
              <p class="strategy-desc">Partnerships with NGOs, private sector companies, and public institutions — both paid and unpaid. Partners promote the platform within their own circles and help build brand credibility. NGO partners are authorised non-governmental organisations operating in the territory. Private sector partnerships focus on brands closely related to animals.</p>
            </div>
          </div>

          <div class="strategy-item">
            <span class="strategy-num">05</span>
            <div class="strategy-body">
              <h3 class="strategy-title">Gamification</h3>
              <p class="strategy-desc">Quizzes and questionnaires that are genuinely engaging — not just fun, but educational. Which dog matches your lifestyle? What is the average lifespan of a dog? People learn through play, and in doing so they become more informed, more connected to the subject, and more likely to act on it.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 06 Retain ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ 06 ]</span> How to Retain Users</span>
          <span class="rule" />
        </div>

        <p class="body-copy section-lead">User retention is an even greater challenge than acquisition — it brings lasting value to the platform, increases engagement, and directly creates revenue opportunities. Five retention pillars were defined.</p>

        <div class="scope-grid">
          <div class="scope-item">
            <span class="scope-num">01</span>
            <h3 class="scope-title">Education</h3>
            <p class="scope-desc">Education plays a crucial role in the well-being and proper care of dogs. Blog articles, FAQ, Q&A sections, and quizzes help every user type — potential adopters overcome doubts, owners become better caregivers, shelters understand how to communicate value. Content is the long-term engine of the platform.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">02</span>
            <h3 class="scope-title">Emotion and Success Stories</h3>
            <p class="scope-desc">Adoption stories and emotional content encourage all user types to return. Potential adopters are inspired to act. Shelters gain hope that their dogs will find homes. Success stories create proof — they show that the platform works, and that the outcome is real and worth pursuing.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">03</span>
            <h3 class="scope-title">Services</h3>
            <p class="scope-desc">Dog owners have significant and varied service needs — from dog sitters and walkers for everyday logistics, to vets, groomers, and trainers for specialist care. All service providers have the opportunity to advertise on the platform. This makes Dogster useful beyond adoption — it becomes part of everyday life with a dog.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">04</span>
            <h3 class="scope-title">Events and Media</h3>
            <p class="scope-desc">Tracking and publishing all public events for dogs — shows, adoption events, charity walks, training workshops. Events are reasons to return to the platform on a schedule, not just when something goes wrong. They connect the digital platform to the physical community of dog owners and advocates.</p>
          </div>
          <div class="scope-item">
            <span class="scope-num">05</span>
            <h3 class="scope-title">Engagement and Social Interaction</h3>
            <p class="scope-desc">Forum discussions, reminders for vaccinations and deworming, community interactions — these activate users to participate more consistently. A reminder that brings someone back to check their dog's vaccination schedule is also a reminder that the platform is useful, present, and on their side.</p>
          </div>
          <div class="scope-item scope-item--warm">
            <span class="scope-num">↳</span>
            <h3 class="scope-title">The underlying logic</h3>
            <p class="scope-desc">Retention is not about tricks. It is about building something genuinely useful. Every pillar here serves the user first — and in doing so, it builds a platform that people return to because it earns that return.</p>
          </div>
        </div>
      </section>

      <!-- ── 07 Revenue ── -->
      <section class="case-section">
        <div class="sect-header">
          <span><span class="num">[ 07 ]</span> Revenue Model</span>
          <span class="rule" />
        </div>

        <p class="body-copy section-lead">A platform built pro bono still needs a sustainable financial model. Primary and secondary revenue streams were identified based on the platform's social mission and user behaviour.</p>

        <div class="revenue-grid">
          <div class="revenue-col">
            <h3 class="revenue-heading">Primary Revenue</h3>
            <div class="revenue-item">
              <h4 class="revenue-item-title">Ads — Premium and Regular</h4>
              <p class="revenue-item-desc">Impression-based advertising including video ads and banners in key positions. Best performing formats: video, interstitials, banners. Revenue scales directly with platform growth and engagement.</p>
            </div>
            <div class="revenue-item">
              <h4 class="revenue-item-title">Online Donations</h4>
              <p class="revenue-item-desc">The most common revenue model for platforms with a social mission. Relies on the generosity of the community. Implemented through a prominent donation button or banner leading to a page explaining the reasons for investment. A memorial page allows donations in memory of a beloved pet, with the option to add a photo to an online memorial.</p>
            </div>
          </div>

          <div class="revenue-col">
            <h3 class="revenue-heading">Secondary Revenue</h3>
            <div class="revenue-item">
              <h4 class="revenue-item-title">Grooming and Service Ads</h4>
              <p class="revenue-item-desc">Paid placements for service providers — not only grooming, but also veterinarians, dog walkers, pet shops, trainers, and other professionals. This segment grows naturally with the service directory.</p>
            </div>
            <div class="revenue-item">
              <h4 class="revenue-item-title">Grant Funding</h4>
              <p class="revenue-item-desc">Grants from foundations, government bodies, or EU programmes aligned with animal welfare, social impact, or digital inclusion.</p>
            </div>
            <div class="revenue-item">
              <h4 class="revenue-item-title">Shelter Partnerships</h4>
              <p class="revenue-item-desc">When an animal is adopted through the platform, a fee is received to cover expenses. Virtual adoption options expand the revenue opportunity beyond physical placement.</p>
            </div>
            <div class="revenue-item">
              <h4 class="revenue-item-title">Fundraising Events and Brand Partnerships</h4>
              <p class="revenue-item-desc">Online and offline events raise both money and awareness. Brand partnerships with companies closely related to animals — pet food, insurance, accessories — provide sponsorship and co-marketing opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 08 Journey ── -->
      <section class="case-section case-section--alt">
        <div class="sect-header">
          <span><span class="num">[ 08 ]</span> Customer Journeys</span>
          <span class="rule" />
        </div>

        <p class="body-copy section-lead">Five persona journeys were mapped to understand where Dogster intervenes in the current experience — and where it removes friction that currently has no solution.</p>

        <div class="journey-list">
          <div class="journey-item">
            <span class="journey-persona">New Owners</span>
            <div class="journey-flow">
              <span class="journey-step">Just got a new dog</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">No knowledge about raising a pet</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Searching on the internet</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Find some information</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step journey-step--pain">Need to search again for new information</span>
            </div>
          </div>

          <div class="journey-item">
            <span class="journey-persona">Owners</span>
            <div class="journey-flow">
              <span class="journey-step">Booked a trip</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Don't know who can look after their dog</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Ask friends and colleagues</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step journey-step--pain">No luck — need to search alternatives</span>
            </div>
          </div>

          <div class="journey-item">
            <span class="journey-persona">Shelters</span>
            <div class="journey-flow">
              <span class="journey-step">Many dogs to place</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Need aggressive adoption campaigns</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Posting on social media</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Shares and support</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step journey-step--pain">Low adoption percentage</span>
            </div>
          </div>

          <div class="journey-item">
            <span class="journey-persona">Adopters</span>
            <div class="journey-flow">
              <span class="journey-step">Want to adopt a dog</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Don't know where to search — groups are scattered</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Search on the internet</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step journey-step--pain">All over the place — where is the health status?</span>
            </div>
          </div>

          <div class="journey-item">
            <span class="journey-persona">Buyers</span>
            <div class="journey-flow">
              <span class="journey-step">Bought a dog</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">No knowledge about specific breed</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step">Searching on the internet</span>
              <span class="journey-arrow">→</span>
              <span class="journey-step journey-step--pain">Small amount of information — need several websites</span>
            </div>
          </div>
        </div>

        <blockquote class="pull-quote pull-quote--bottom">
          Adopt, don't buy. And please pick up after your dog.
        </blockquote>
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
  height: calc(100svh - 80px);
  padding: clamp(80px, 10vw, 160px) clamp(20px, 3.4vw, 56px) clamp(40px, 6vw, 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
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
  color: rgba(11, 12, 11, 0.75);
  letter-spacing: -0.02em;
  max-width: 44ch;
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
  .hero { height: auto; justify-content: flex-start; }
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
  color: rgba(11, 12, 11, 0.55);
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

/* ── Section lead ── */
.section-lead {
  max-width: 72ch;
  margin-bottom: 48px;
}

/* ── User grid (Section 02) ── */
.user-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
}

.user-card {
  background: #E8E2D5;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.user-card--primary {
  background: #0B0C0B;
}

.user-tag {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.35);
  border: 1px solid rgba(11, 12, 11, 0.15);
  border-radius: 99px;
  padding: 3px 10px;
  align-self: flex-start;
}

.user-card--primary .user-tag {
  color: rgba(232, 226, 213, 0.45);
  border-color: rgba(232, 226, 213, 0.15);
}

.user-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(20px, 2vw, 28px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

.user-card--primary .user-title {
  color: #E8E2D5;
}

.user-desc {
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: rgba(11, 12, 11, 0.65);
  flex: 1;
}

.user-card--primary .user-desc {
  color: rgba(232, 226, 213, 0.65);
}

.user-kpi {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 16px;
  border-top: 1px solid rgba(11, 12, 11, 0.1);
}

.user-card--primary .user-kpi {
  border-top-color: rgba(232, 226, 213, 0.1);
}

.kpi-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D63D14;
}

.kpi-val {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  line-height: 1.6;
  color: rgba(11, 12, 11, 0.5);
}

.user-card--primary .kpi-val {
  color: rgba(232, 226, 213, 0.45);
}

@media (max-width: 760px) {
  .user-grid { grid-template-columns: 1fr; }
}

/* ── Value proposition (Section 03) ── */
.vp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 48px;
}

.vp-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.vp-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(11, 12, 11, 0.15);
}

.vp-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.vp-list li {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.03em;
  line-height: 1.7;
  color: rgba(11, 12, 11, 0.65);
  padding-left: 16px;
  position: relative;
}

.vp-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(11, 12, 11, 0.25);
}

@media (max-width: 880px) {
  .vp-grid { grid-template-columns: 1fr; gap: 40px; }
}

/* ── Hypothesis (Section 04) ── */
.hypothesis-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
}

.hyp-card {
  background: #E8E2D5;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hyp-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hyp-num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D63D14;
}

.hyp-type {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.4);
}

.hyp-costs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.hyp-costs span {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.5);
  border: 1px solid rgba(11, 12, 11, 0.15);
  border-radius: 99px;
  padding: 2px 10px;
}

.hyp-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

.hyp-desc {
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: rgba(11, 12, 11, 0.65);
  flex: 1;
}

.hyp-success {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 16px;
  border-top: 1px solid rgba(11, 12, 11, 0.12);
}

.hyp-success-label {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.35);
}

.hyp-success p {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.03em;
  line-height: 1.7;
  color: rgba(11, 12, 11, 0.55);
  margin: 0;
}

@media (max-width: 760px) {
  .hypothesis-grid { grid-template-columns: 1fr; }
}

/* ── Strategy list (Section 05) ── */
.strategy-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(11, 12, 11, 0.12);
}

.strategy-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 24px;
  padding: 32px 0;
  border-bottom: 1px solid rgba(11, 12, 11, 0.12);
  align-items: start;
}

.strategy-num {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: rgba(11, 12, 11, 0.25);
  padding-top: 4px;
}

.strategy-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.strategy-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
}

.strategy-desc {
  font-size: clamp(14px, 1vw, 16px);
  line-height: 1.65;
  color: rgba(11, 12, 11, 0.65);
  max-width: 70ch;
}

@media (max-width: 560px) {
  .strategy-item { grid-template-columns: 1fr; gap: 8px; }
}

/* ── Revenue (Section 07) ── */
.revenue-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
}

.revenue-col {
  background: #E8E2D5;
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.revenue-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-size: clamp(18px, 1.8vw, 26px);
  letter-spacing: -0.02em;
  color: #0B0C0B;
  margin: 0;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(11, 12, 11, 0.12);
}

.revenue-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.revenue-item-title {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0B0C0B;
  font-weight: 500;
}

.revenue-item-desc {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.03em;
  line-height: 1.7;
  color: rgba(11, 12, 11, 0.6);
}

@media (max-width: 760px) {
  .revenue-grid { grid-template-columns: 1fr; }
}

/* ── Journey list (Section 08) ── */
.journey-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(11, 12, 11, 0.12);
  border: 1px solid rgba(11, 12, 11, 0.12);
  margin-bottom: 60px;
}

.journey-item {
  background: #E8E2D5;
  padding: 24px 28px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 24px;
  align-items: center;
}

.journey-persona {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.4);
}

.journey-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.journey-step {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 10px;
  letter-spacing: 0.04em;
  line-height: 1.5;
  color: rgba(11, 12, 11, 0.7);
  background: rgba(11, 12, 11, 0.05);
  border-radius: 4px;
  padding: 6px 12px;
}

.journey-step--pain {
  color: rgba(11, 12, 11, 0.55);
  background: rgba(11, 12, 11, 0.08);
  border-left: 2px solid rgba(11, 12, 11, 0.2);
}

.journey-arrow {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  color: rgba(11, 12, 11, 0.2);
}

.pull-quote--bottom {
  margin-top: 0;
  text-align: center;
  border-left: none;
  padding-left: 0;
  border-top: 2px solid #D63D14;
  padding-top: 32px;
  font-size: clamp(20px, 2.5vw, 36px);
}

@media (max-width: 760px) {
  .journey-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .journey-flow { flex-direction: column; align-items: flex-start; }
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
