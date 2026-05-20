<template>
  <NuxtLink
    :to="project.status === 'coming-soon' ? '' : `/projects/${project.slug}`"
    :class="[
      'project-card block group',
      { 'pointer-events-none': project.status === 'coming-soon' }
    ]"
    :style="`background-color: ${bgColors[project.cardColor] ?? '#1A1A18'}; min-height: ${height};`"
    data-hoverable
  >
    <!-- Abstract bg shape -->
    <div class="project-card-bg">
      <div
        class="absolute -bottom-1/4 -right-1/4 w-3/4 aspect-square rounded-full opacity-10"
        :style="`background-color: ${project.accentColor}`"
        style="filter: blur(80px);"
      />
      <div class="absolute top-0 right-0 w-px h-full opacity-10"
        :style="`background: linear-gradient(to bottom, transparent, ${project.accentColor}, transparent)`"
      />
    </div>

    <div class="project-card-inner">
      <!-- Top row -->
      <div class="flex items-start justify-between">
        <span class="text-xs font-semibold tracking-widest text-white/30 uppercase">
          {{ String(index + 1).padStart(2, '0') }}
        </span>
        <div class="flex items-center gap-2">
          <span
            v-if="project.status === 'coming-soon'"
            class="text-xs font-medium border border-white/20 text-white/40 px-3 py-1 rounded-full"
          >
            Coming Soon
          </span>
          <span
            v-else-if="project.status === 'in-progress'"
            class="text-xs font-medium border border-white/20 text-white/40 px-3 py-1 rounded-full"
          >
            In Rework
          </span>
          <span
            v-else
            class="group-hover:opacity-100 opacity-0 transition-opacity duration-300 text-white/60 text-lg"
          >↗</span>
        </div>
      </div>

      <!-- Bottom content -->
      <div class="space-y-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest mb-2" :style="`color: ${project.accentColor}; opacity: 0.7`">
            {{ project.company }} · {{ project.year }}
          </p>
          <h3 class="font-display font-light text-white text-3xl md:text-4xl leading-tight">
            {{ project.title }}
          </h3>
        </div>

        <p class="text-white/50 text-sm leading-relaxed max-w-sm group-hover:text-white/70 transition-colors duration-500">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 pt-1">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="text-xs border border-white/15 text-white/40 px-3 py-1 rounded-full group-hover:border-white/25 transition-colors duration-300"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Project {
  title: string
  slug: string
  company: string
  role: string
  year: string | number
  description: string
  tags: string[]
  cardColor: string
  accentColor: string
  status: 'published' | 'coming-soon' | 'in-progress'
}

const props = defineProps<{
  project: Project
  index: number
  height?: string
}>()

const height = computed(() => props.height ?? '420px')

const bgColors: Record<string, string> = {
  'card-bucherer': '#1C1B28',
  'card-abc': '#0F2952',
  'card-referral': '#200A42',
  'card-kroon': '#0A2E1E',
  'card-snap': '#1A1A18',
}
</script>
