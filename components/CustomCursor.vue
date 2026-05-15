<template>
  <div>
    <div ref="cursorOuter" class="cursor-outer" />
    <div ref="cursorInner" class="cursor-inner" />
  </div>
</template>

<script setup lang="ts">
const cursorOuter = ref<HTMLElement | null>(null)
const cursorInner = ref<HTMLElement | null>(null)

onMounted(() => {
  // Tap ripple for touch devices
  const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches
  if (isTouchDevice) {
    const onTap = (e: TouchEvent) => {
      const { clientX: x, clientY: y } = e.touches[0]
      const el = document.createElement('div')
      el.style.cssText = `
        position:fixed;left:${x}px;top:${y}px;
        width:56px;height:56px;border-radius:50%;
        background:rgba(233,43,0,0.22);
        transform:translate(-50%,-50%) scale(0);
        pointer-events:none;z-index:9999;
        transition:transform 0.35s cubic-bezier(0.22,1,0.36,1),opacity 0.35s ease;
      `
      document.body.appendChild(el)
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.transform = 'translate(-50%,-50%) scale(1)'
        el.style.opacity = '0'
      }))
      setTimeout(() => el.remove(), 400)
    }
    window.addEventListener('touchstart', onTap, { passive: true })
    onUnmounted(() => window.removeEventListener('touchstart', onTap))
    return
  }

  const outer = cursorOuter.value
  const inner = cursorInner.value
  if (!outer || !inner) return

  let mouseX = 0
  let mouseY = 0
  let outerX = 0
  let outerY = 0

  const onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
    inner.style.left = `${mouseX}px`
    inner.style.top = `${mouseY}px`
  }

  const lerp = (start: number, end: number, t: number) =>
    start + (end - start) * t

  const animate = () => {
    outerX = lerp(outerX, mouseX, 0.12)
    outerY = lerp(outerY, mouseY, 0.12)
    outer.style.left = `${outerX}px`
    outer.style.top = `${outerY}px`
    requestAnimationFrame(animate)
  }

  animate()
  window.addEventListener('mousemove', onMouseMove)

  // Use event delegation on document so dynamic elements and child-hover edge
  // cases are handled correctly — avoids the cursor getting stuck in hover state.
  const isHoverable = (el: Element | null): boolean => {
    while (el && el !== document.documentElement) {
      if (el.matches('a, button, [data-hoverable]')) return true
      el = el.parentElement
    }
    return false
  }

  const onMouseOver = (e: MouseEvent) => {
    const hovering = isHoverable(e.target as Element)
    outer.classList.toggle('is-hovering', hovering)
    inner.classList.toggle('is-hovering', hovering)
  }

  document.addEventListener('mouseover', onMouseOver)

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseover', onMouseOver)
  })
})
</script>
