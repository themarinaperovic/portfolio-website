<template>
  <section id="work" class="py-28 md:py-40 px-6 md:px-12">
    <div class="max-w-[1400px] mx-auto">

      <!-- Section header -->
      <div class="flex items-end justify-between mb-16 gap-6" data-reveal>
        <div>
          <div class="flex items-center gap-4 mb-4">
            <span class="text-xs tracking-widest uppercase font-semibold text-smoke">02 / Work</span>
            <span class="flex-1 h-px bg-border max-w-[80px]" />
          </div>
          <h2 class="font-display italic font-light text-5xl md:text-7xl leading-none text-ink">
            Selected<br/>Work.
          </h2>
        </div>
        <p class="hidden md:block text-smoke text-sm max-w-[200px] text-right leading-relaxed">
          End-to-end design across luxury, SaaS, and social impact.
        </p>
      </div>

      <!-- Project grid — asymmetric magazine layout -->
      <div v-if="projects.length" class="flex flex-col gap-4">

        <!-- Row 1: Full width — Bucherer (featured) -->
        <div data-reveal style="--delay: 0ms">
          <ProjectCard
            v-if="projects[0]"
            :project="projects[0]"
            :index="0"
            height="520px"
          />
        </div>

        <!-- Row 2: 2/3 + 1/3 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="md:col-span-2" data-reveal style="--delay: 100ms">
            <ProjectCard
              v-if="projects[1]"
              :project="projects[1]"
              :index="1"
              height="440px"
            />
          </div>
          <div class="md:col-span-1" data-reveal style="--delay: 200ms">
            <ProjectCard
              v-if="projects[2]"
              :project="projects[2]"
              :index="2"
              height="440px"
            />
          </div>
        </div>

        <!-- Row 3: 1/3 + 2/3 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="md:col-span-1" data-reveal style="--delay: 100ms">
            <ProjectCard
              v-if="projects[3]"
              :project="projects[3]"
              :index="3"
              height="400px"
            />
          </div>
          <div class="md:col-span-2" data-reveal style="--delay: 200ms">
            <ProjectCard
              v-if="projects[4]"
              :project="projects[4]"
              :index="4"
              height="400px"
            />
          </div>
        </div>

      </div>

      <!-- Loading state -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="n in 4"
          :key="n"
          class="bg-border/60 rounded-sm animate-pulse"
          style="height: 420px"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects').sort({ order: 1 }).find()
)
</script>
