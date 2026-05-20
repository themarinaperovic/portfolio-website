<template>
  <section class="testimonials-section overflow-hidden">

    <!-- Section header -->
    <div class="testimonials-header mb-16">
      <div class="flex items-center gap-4" style="margin-bottom: clamp(60px, 9vw, 140px)">
        <span class="sect-num">[ 04 ]</span><span class="sect-lbl"> Voices</span>
        <span class="flex-1 h-px bg-border max-w-[80px]" />
      </div>
      <h2 class="voices-headline">
        Words from<br/>my colleagues.
      </h2>
    </div>

    <!-- Ticker: duplicated for seamless loop -->
    <div class="relative">
      <!-- Fade edges -->
      <div class="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style="background: linear-gradient(to right, #E8E2D5, transparent);" />
      <div class="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style="background: linear-gradient(to left, #E8E2D5, transparent);" />

      <div class="overflow-hidden">
        <div class="ticker-track">
          <div
            v-for="(testimonial, i) in tickerItems"
            :key="i"
            class="shrink-0 w-[min(85vw,420px)] mx-3"
          >
            <div class="border border-border rounded-sm p-7 bg-cream hover:border-ink/20 transition-colors duration-300 h-full flex flex-col justify-between gap-6">
              <div>
                <span class="font-display italic text-fire text-4xl leading-none">"</span>
                <p class="text-ink/80 text-sm leading-relaxed mt-1">
                  {{ testimonial.quote }}
                </p>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-ink/10 flex items-center justify-center shrink-0">
                  <span class="text-xs font-bold text-ink">{{ initials(testimonial.name) }}</span>
                </div>
                <div>
                  <p class="text-xs font-semibold text-ink">{{ testimonial.name }}</p>
                  <p class="text-xs text-smoke">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    quote: "Marina's work reflects a deep understanding of user-centered design principles and strong aesthetic appeal, consistently enhancing user satisfaction across our platform.",
    name: 'Chancey Toombs',
    role: 'Product Manager, ABC Financial Services',
  },
  {
    quote: "She was the first designer who actually asked if we could implement it on the backend — that mindset changed everything about how we collaborate.",
    name: 'Luka Lovre',
    role: 'Backend Developer, ABC Fitness',
  },
  {
    quote: "Marina was instrumental in creating white-labeled solutions for 100,000+ users. Her design vision and attention to detail elevated every product she touched.",
    name: 'Kyler Hollway',
    role: 'Director of Product, ABC Fitness',
  },
  {
    quote: "Marina brings exceptional value to every project. Her ability to align user needs with business goals while maintaining design excellence is truly rare.",
    name: 'Miriam Zumstein',
    role: 'Business Solutions & Innovation, Bucherer AG',
  },
  {
    quote: "Marina digs into problem spaces with passion, transparency, and user-centered focus — while handling feedback with grace. A genuine collaborator.",
    name: 'Ana Kaloperovic',
    role: 'Lead UX/UI Designer, Kroon Studio',
  },
  {
    quote: "Consistently impressed by her creativity, attention to detail, and ability to translate complex concepts into elegant, functional designs.",
    name: 'Nikola Bojanovic',
    role: 'Software Engineer, ABC Fitness',
  },
]

const tickerItems = [...testimonials, ...testimonials]

const initials = (name: string) =>
  name.split(' ').map((n) => n[0]).slice(0, 2).join('')
</script>

<style scoped>
.testimonials-section {
  padding: clamp(80px, 10vw, 160px) 0;
}

.testimonials-header {
  padding: 0 clamp(20px, 3.4vw, 56px);
}

.sect-num, .sect-lbl {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.55);
}

.sect-num {
  color: #0B0C0B;
  font-weight: 500;
}

.voices-headline {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  font-style: normal;
  font-size: clamp(24px, 2.8vw, 38px);
  line-height: 1.15;
  letter-spacing: -0.015em;
  color: #0B0C0B;
}
</style>
