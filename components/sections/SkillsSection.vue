<template>
  <section id="methods">

    <div class="skills-inner">

      <div class="sect-header">
        <span><span class="sect-num">[ 03 ]</span> Methods &amp; Tools</span>
        <span class="rule" />
      </div>

      <div class="skills-block">
        <div class="skills-tags">
          <span v-for="t in tools" :key="t" class="skill-tag skill-tag--tool">{{ t }}</span>
          <span v-for="m in methods" :key="m" class="skill-tag">{{ m }}</span>
        </div>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
const methods = [
  'User Interviews',
  'Stakeholder Interviews',
  'Empathy Map',
  'Personas',
  'Customer Profile',
  'Value Map',
  'A Day In The Life',
  'Competition Analysis',
  'Storyboarding',
  'Customer Journey',
  'Moodboard',
  'Card Sorting',
  'User Stories',
  'Sitemap',
  'Information Architecture',
  'Feature Prioritisation',
  'Low Fidelity Wireframes',
  'High Fidelity Wireframes',
  'Prototyping',
  'Usability Testing',
  'Design System',
  'Design Sprints',
]

const tools = [
  'Figma',
  'Framer',
  'Claude Code',
]
</script>

<style scoped>
section {
  padding: clamp(60px, 8vw, 120px) clamp(20px, 3.4vw, 56px);
  border-top: 1px solid rgba(11, 12, 11, 0.08);
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skills-inner {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.sect-header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 20px;
  margin-bottom: clamp(40px, 6vw, 72px);
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(11, 12, 11, 0.65);
}

.sect-num {
  color: #0B0C0B;
  font-weight: 500;
}

.rule {
  flex: 1;
  height: 1px;
  background: rgba(11, 12, 11, 0.15);
  max-width: 80px;
}

.skills-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.skill-tag {
  display: inline-block;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: rgba(11, 12, 11, 0.75);
  border: 1px solid rgba(11, 12, 11, 0.15);
  border-radius: 2px;
  padding: 5px 10px;
}

.skill-tag--tool {
  color: #0B0C0B;
  border-color: rgba(11, 12, 11, 0.3);
  font-weight: 500;
}

</style>
