<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-cream/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
      <!-- Logo: replace bg-ink + MM span with an <img> once you have a photo -->
      <NuxtLink to="/" class="block group" data-hoverable>
        <div class="w-9 h-9 rounded-full bg-ink overflow-hidden flex items-center justify-center group-hover:opacity-75 transition-opacity duration-300">
          <span class="text-cream text-xs font-bold tracking-tight font-sans">MM</span>
        </div>
      </NuxtLink>

      <!-- Nav Links (desktop) -->
      <ul class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="nav-link text-ink/70 hover:text-ink transition-colors duration-200"
            data-hoverable
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Contact link (desktop) -->
      <a
        href="mailto:themarinamarkus@gmail.com"
        class="hidden md:block text-sm font-semibold text-ink/60 hover:text-ink transition-colors duration-200 nav-link"
        data-hoverable
      >
        Get in touch
      </a>

      <!-- Mobile menu button -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-1"
        data-hoverable
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span
          :class="['block w-6 h-px bg-ink transition-all duration-300', mobileOpen && 'translate-y-[7px] rotate-45']"
        />
        <span
          :class="['block w-6 h-px bg-ink transition-all duration-300', mobileOpen && 'opacity-0']"
        />
        <span
          :class="['block w-6 h-px bg-ink transition-all duration-300', mobileOpen && '-translate-y-[7px] -rotate-45']"
        />
      </button>
    </nav>

    <!-- Mobile Nav -->
    <Transition name="mobile-nav">
      <div
        v-if="mobileOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-cream border-b border-border px-6 py-8 flex flex-col gap-6"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="font-display italic text-3xl font-light text-ink"
          @click.prevent="scrollTo(link.href); mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="mailto:themarinamarkus@gmail.com"
          class="text-sm font-semibold text-fire mt-4"
        >
          themarinamarkus@gmail.com
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const scrollTo = (href: string) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 60
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
