<template>
  <div class="min-h-screen">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <AwardsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { initReveal } = useScrollReveal()

onMounted(() => {
  initReveal()
})
</script>
