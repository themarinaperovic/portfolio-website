<template>
  <footer class="border-t border-border px-6 md:px-12 py-8">
    <div class="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-smoke" style="font-size: calc(0.875rem * 1.05)">
      <span class="font-display italic font-light">Marina Markus</span>
      <span>© {{ new Date().getFullYear() }} — UX/UI Designer</span>
      <div class="flex items-center gap-6">
        <a
          href="https://linkedin.com/in/marina-markus/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-ink transition-colors duration-200"
          data-hoverable
        >LinkedIn</a>
        <a
          href="mailto:themarinamarkus@gmail.com"
          class="hover:text-ink transition-colors duration-200"
          data-hoverable
        >Email</a>
      </div>
    </div>
  </footer>
</template>
