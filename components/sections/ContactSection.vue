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
          <h2 class="font-display italic font-light text-4xl md:text-5xl lg:text-6xl leading-tight text-ink">
            If something caught your eye,<br/>you know where to <em style="color: #D63D14; font-style: italic;">find me.</em>
          </h2>
        </div>

        <div class="flex flex-col gap-8" data-reveal style="--delay: 150ms">
          <!-- Email CTA -->
          <a
            href="mailto:themarinamarkus@gmail.com"
            class="group block"
            data-hoverable
          >
            <div class="border border-border rounded-sm p-8 hover:border-ink transition-all duration-300 group-hover:bg-ink group-hover:text-cream">
              <p class="text-xs tracking-widest uppercase font-mono text-smoke group-hover:text-cream/40 mb-3 transition-colors duration-300">
                Email
              </p>
              <p class="font-display italic font-light break-all group-hover:text-cream transition-colors duration-300" style="font-size: clamp(calc(1.5rem * 0.95), 2.5vw, calc(1.875rem * 0.95))">
                themarinamarkus@gmail.com
              </p>
              <div class="flex items-center gap-2 mt-6">
                <span class="text-sm font-semibold text-smoke group-hover:text-cream/60 transition-colors duration-300">Write to me</span>
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
