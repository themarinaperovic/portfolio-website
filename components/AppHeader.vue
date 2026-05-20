<template>
  <nav class="top">
    <!-- Logo -->
    <NuxtLink class="logo" to="/" data-hoverable aria-label="Marina Markus — home"
      @mousemove="onLogoMove"
      @mouseleave="onLogoLeave"
    >
      <span class="dot" aria-hidden="true" />
      <span>Marina Markus</span>
    </NuxtLink>

    <!-- Desktop menu — home only -->
    <ul v-if="isHome" class="menu">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" data-hoverable @click.prevent="scrollTo(link.href)">{{ link.label }}</a>
      </li>
    </ul>

    <!-- Right actions -->
    <div class="nav-actions">
      <a href="mailto:themarinamarkus@gmail.com" class="contact-link" data-hoverable>
        Get in touch
      </a>
      <a href="/marina-markus-cv-2026.pdf" download class="cv-link" data-hoverable>
        Download CV
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navLinks = [
  { label: 'About',   href: '#about' },
  { label: 'Work',    href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const route = useRoute()
const isHome = computed(() => route.path === '/')

const scrollTo = (href: string) => {
  const el = document.getElementById(href.replace('#', ''))
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const onLogoMove = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const r = el.getBoundingClientRect()
  const x = e.clientX - (r.left + r.width / 2)
  const y = e.clientY - (r.top + r.height / 2)
  el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
}

const onLogoLeave = (e: MouseEvent) => {
  (e.currentTarget as HTMLElement).style.transform = ''
}
</script>

<style scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px clamp(20px, 3.4vw, 56px);
  z-index: 80;
  mix-blend-mode: difference;
  color: #F4EFE2;
}

.top a,
.logo,
.contact-link {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  transition: transform 0.6s cubic-bezier(.7,.05,.2,1);
}

.logo:hover {
  transition: transform 0.1s linear;
}

.dot {
  width: 8px;
  height: 8px;
  background: #12A5C1;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  animation: pulse 2.4s cubic-bezier(.7,.05,.2,1) infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(.55); opacity: .5; }
}

/* Menu */
.menu {
  display: flex;
  gap: 28px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a {
  position: relative;
  padding: 6px 0;
}

.menu a::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.55s cubic-bezier(.7,.05,.2,1);
}

.menu a:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
}

/* Right actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 36px;
}

/* Get in touch + CV link */
.contact-link,
.cv-link {
  display: block;
  position: relative;
  padding: 6px 0;
}

.contact-link::after,
.cv-link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right center;
  transition: transform 0.55s cubic-bezier(.7,.05,.2,1);
}

.contact-link:hover::after,
.cv-link:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
}

@media (max-width: 720px) {
  .menu { display: none; }
  .nav-actions { display: none; }
}
</style>
