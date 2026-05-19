<template>
  <section id="contact" class="py-28 md:py-40 px-6 md:px-12">
    <div class="max-w-[1400px] mx-auto">

      <!-- Section label -->
      <div class="flex items-center gap-4 mb-16" data-reveal>
        <span class="text-xs tracking-widest uppercase font-mono text-smoke">[05] Contact</span>
        <span class="flex-1 h-px bg-border max-w-[80px]" />
      </div>

      <!-- Main CTA block -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">

        <div data-reveal>
          <h2 class="contact-headline font-display font-light text-ink">
            <span class="contact-headline__lead">If something caught your eye,</span>
            <span class="contact-headline__main">you know where to <em>find me.</em></span>
          </h2>
        </div>

        <div class="flex flex-col gap-8" data-reveal style="--delay: 150ms">
          <!-- Email CTA -->
          <a
            href="mailto:themarinamarkus@gmail.com"
            class="group block"
            data-hoverable
          >
            <div class="email-card border border-border rounded-sm p-8 hover:border-ink transition-all duration-300 group-hover:bg-ink group-hover:text-cream">
              <p class="font-display italic font-light email-address group-hover:text-cream transition-colors duration-300">
                themarinamarkus@gmail.com
              </p>
              <div class="flex items-center gap-2 mt-6">
                <span class="email-label text-xs tracking-widest uppercase font-mono text-smoke group-hover:text-cream/40 transition-colors duration-300">Email me</span>
                <span class="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </a>

          <!-- Social links -->
          <div class="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/marina-markus/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-ink transition-colors duration-200"
              data-hoverable
            >
              LinkedIn
              <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
            </a>
            <span class="w-1 h-1 rounded-full bg-border" />
            <span class="inline-flex items-center gap-1.5 text-sm text-smoke">
              <span class="w-1.5 h-1.5 rounded-full bg-fire animate-pulse" />
              Open to opportunities
            </span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.contact-headline {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 1vw, 14px);
  font-style: normal;
  line-height: 0.92;
  letter-spacing: -0.045em;
}

.contact-headline__lead {
  font-size: clamp(44px, 6vw, 88px);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.035em;
  color: #0B0C0B;
  font-variation-settings: 'opsz' 144, 'SOFT' 100;
}

.contact-headline__main {
  font-size: clamp(44px, 6vw, 88px);
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.035em;
  font-variation-settings: 'opsz' 144, 'SOFT' 100;
  color: #0B0C0B;
}

.email-address {
  font-size: clamp(calc(1.5rem * 0.95), 2.5vw, calc(1.875rem * 0.95));
}

@media (max-width: 760px) {
  .email-address {
    font-size: calc((100vw - 112px) / 15.5);
    word-break: keep-all;
    white-space: nowrap;
    color: #E8E2D5;
  }

  .email-card {
    background: #0B0C0B;
    border-color: #0B0C0B;
    color: #E8E2D5;
  }

  .email-label {
    color: rgba(232, 226, 213, 0.4);
  }
}

.contact-headline__main em {
  font-style: normal;
  color: #D63D14;
  padding-right: 0.04em;
}
</style>
