<template>
  <div class="min-h-screen">
    <AppHeader />

    <main class="pt-32 pb-28 px-6 md:px-12">
      <div class="max-w-[1400px] mx-auto">

        <!-- Back link -->
        <NuxtLink
          to="/#work"
          class="inline-flex items-center gap-2 text-sm text-smoke hover:text-ink transition-colors duration-200 mb-16 group"
          data-hoverable
        >
          <span class="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          Back to work
        </NuxtLink>

        <div v-if="project">
          <!-- Project header -->
          <div
            class="relative rounded-sm overflow-hidden mb-16 flex items-end"
            :style="`background-color: ${bgColors[project.cardColor] ?? '#1A1A18'}; min-height: 480px; padding: 3rem;`"
          >
            <div class="relative z-10">
              <p class="text-xs font-semibold uppercase tracking-widest mb-3" :style="`color: ${project.accentColor}; opacity: 0.7`">
                {{ project.company }} · {{ project.year }}
              </p>
              <h1 class="font-display font-light text-cream text-5xl md:text-7xl leading-tight mb-4">
                {{ project.title }}
              </h1>
              <p class="text-cream/50 text-lg max-w-xl leading-relaxed">{{ project.description }}</p>
            </div>
          </div>

          <!-- Case study placeholder -->
          <div class="max-w-2xl mx-auto text-center py-24">
            <div class="w-16 h-px bg-border mx-auto mb-8" />
            <p class="font-display text-3xl font-light text-ink mb-4">
              Case study coming soon.
            </p>
            <p class="text-smoke leading-relaxed mb-10">
              This project is currently being documented. In the meantime, feel free to reach out — I'm happy to walk you through it.
            </p>
            <a
              href="mailto:themarinamarkus@gmail.com"
              class="inline-flex items-center gap-2 border border-ink px-6 py-3 rounded-full text-sm font-semibold hover:bg-ink hover:text-cream transition-all duration-300"
              data-hoverable
            >
              Get in touch
              <span>→</span>
            </a>
          </div>
        </div>

        <!-- 404 state -->
        <div v-else class="text-center py-24">
          <p class="text-smoke text-lg">Project not found.</p>
          <NuxtLink to="/" class="text-ink font-semibold mt-4 inline-block hover:text-fire transition-colors duration-200">
            ← Go home
          </NuxtLink>
        </div>

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryContent('/projects').where({ slug }).findOne()
)

const bgColors: Record<string, string> = {
  'card-bucherer': '#1C1B28',
  'card-abc': '#0F2952',
  'card-referral': '#200A42',
  'card-kroon': '#0A2E1E',
  'card-snap': '#1A1A18',
}

useHead({
  title: project.value
    ? `${project.value.title} — Marina Markus`
    : 'Marina Markus — UX/UI Designer',
})

const { initReveal } = useScrollReveal()

onMounted(() => {
  initReveal()
})
</script>
