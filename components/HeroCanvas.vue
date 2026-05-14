<template>
  <canvas ref="canvasEl" class="absolute inset-0 w-full h-full" style="pointer-events: none; z-index: 0;" />
</template>

<script setup lang="ts">
import * as THREE from 'three'

const canvasEl = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const canvas = canvasEl.value
  if (!canvas) return

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, 0, 4.4)

  const resize = () => {
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()
  window.addEventListener('resize', resize)

  // ── Vertex shader (simplex-noise displaced icosphere) ──────────────────────
  const vert = /* glsl */`
    uniform float uTime;
    uniform float uDisp;
    uniform vec2  uMouse;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying float vNoise;

    vec3 mod289(vec3 x){return x - floor(x*(1./289.))*289.;}
    vec4 mod289(vec4 x){return x - floor(x*(1./289.))*289.;}
    vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
    float snoise(vec3 v){
      const vec2 C = vec2(1./6.,1./3.);
      const vec4 D = vec4(0.,.5,1.,2.);
      vec3 i  = floor(v + dot(v,C.yyy));
      vec3 x0 = v - i + dot(i,C.xxx);
      vec3 g  = step(x0.yzx, x0.xyz);
      vec3 l  = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.,i1.z,i2.z,1.)) +
        i.y + vec4(0.,i1.y,i2.y,1.)) +
        i.x + vec4(0.,i1.x,i2.x,1.));
      float n_ = .142857142857;
      vec3  ns = n_*D.wyz - D.xzx;
      vec4  j  = p - 49.*floor(p*ns.z*ns.z);
      vec4  x_ = floor(j*ns.z);
      vec4  y_ = floor(j - 7.*x_);
      vec4  x  = x_*ns.x + ns.yyyy;
      vec4  y  = y_*ns.x + ns.yyyy;
      vec4  h  = 1. - abs(x) - abs(y);
      vec4  b0 = vec4(x.xy,y.xy);
      vec4  b1 = vec4(x.zw,y.zw);
      vec4  s0 = floor(b0)*2.+1.;
      vec4  s1 = floor(b1)*2.+1.;
      vec4  sh = -step(h,vec4(0.));
      vec4  a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4  a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3  p0 = vec3(a0.xy,h.x);
      vec3  p1 = vec3(a0.zw,h.y);
      vec3  p2 = vec3(a1.xy,h.z);
      vec3  p3 = vec3(a1.zw,h.w);
      vec4  norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
      m = m*m;
      return 42.*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
    }

    void main(){
      vec3  pos = position;
      float t   = uTime * .35;
      float n   = snoise(pos*1.1 + vec3(t, t*.7, -t));
      float n2  = snoise(pos*2.6 + vec3(-t*.5, t, t*.3));
      float disp = (n*.55 + n2*.22) * uDisp;
      pos += normal * disp;
      vNoise  = disp;
      vNormal = normalize(normalMatrix * normal);
      vec4 mv = modelViewMatrix * vec4(pos, 1.);
      vPos    = mv.xyz;
      gl_Position = projectionMatrix * mv;
    }
  `

  // ── Fragment shader (Fresnel rim + noise-driven colour mix) ───────────────
  const frag = /* glsl */`
    precision highp float;
    uniform float uTime;
    uniform vec3  uColorA;
    uniform vec3  uColorB;
    uniform vec3  uColorC;
    varying vec3  vNormal;
    varying vec3  vPos;
    varying float vNoise;

    void main(){
      vec3  V    = normalize(-vPos);
      float f    = 1.0 - max(dot(normalize(vNormal), V), 0.0);
      float fres = pow(f, 2.4);
      float g    = smoothstep(-.5, .6, vNoise);
      vec3  col  = mix(uColorA, uColorB, g);
      col = mix(col, uColorC, fres*.85);
      col += pow(f, 6.0) * vec3(1.0,.8,.6) * .55;
      col *= 0.92 + 0.08*sin(vPos.y*9.0 + uTime*.8);
      gl_FragColor = vec4(col, 1.0);
    }
  `

  const uniforms = {
    uTime:   { value: 0 },
    uDisp:   { value: 0.55 },
    uMouse:  { value: new THREE.Vector2(0, 0) },
    uColorA: { value: new THREE.Color('#0B0C0B') },
    uColorB: { value: new THREE.Color('#D63D14') },
    uColorC: { value: new THREE.Color('#E8E2D5') },
  }

  const geo  = new THREE.IcosahedronGeometry(1.1, 64)
  const mat  = new THREE.ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(1.05, 0.05, 0)
  scene.add(mesh)

  // Wireframe halo
  const haloGeo = new THREE.IcosahedronGeometry(1.45, 3)
  const haloMat = new THREE.MeshBasicMaterial({ color: 0x0B0C0B, wireframe: true, transparent: true, opacity: 0.06 })
  const halo    = new THREE.Mesh(haloGeo, haloMat)
  halo.position.copy(mesh.position)
  scene.add(halo)

  // Orbiting red dot
  const dotGeo = new THREE.SphereGeometry(0.022, 16, 16)
  const dotMat = new THREE.MeshBasicMaterial({ color: 0xE92B00 })
  const dot    = new THREE.Mesh(dotGeo, dotMat)
  scene.add(dot)

  // Mouse parallax
  const targetMouse = new THREE.Vector2(0, 0)
  const onMouseMove = (e: MouseEvent) => {
    targetMouse.x =  (e.clientX / innerWidth  - 0.5)
    targetMouse.y =  (e.clientY / innerHeight - 0.5)
  }
  window.addEventListener('mousemove', onMouseMove)

  // Reposition for viewport width
  const reposition = () => {
    if (innerWidth < 760) {
      mesh.position.set(0, -0.4, 0)
    } else {
      mesh.position.set(1.05, 0.05, 0)
    }
    halo.position.copy(mesh.position)
  }
  reposition()
  window.addEventListener('resize', reposition)

  let scrollY = 0
  const onScroll = () => { scrollY = window.scrollY }
  window.addEventListener('scroll', onScroll, { passive: true })

  const clock = new THREE.Clock()
  let rafId = 0

  const loop = () => {
    const t = clock.getElapsedTime()
    uniforms.uTime.value = t

    uniforms.uMouse.value.x += (targetMouse.x - uniforms.uMouse.value.x) * 0.06
    uniforms.uMouse.value.y += (targetMouse.y - uniforms.uMouse.value.y) * 0.06

    mesh.rotation.y = t * 0.18 + uniforms.uMouse.value.x * 0.8
    mesh.rotation.x = -uniforms.uMouse.value.y * 0.6 + Math.sin(t * 0.3) * 0.05
    halo.rotation.y = -mesh.rotation.y
    halo.rotation.x =  mesh.rotation.x

    // Orbiting dot
    const r = 1.7
    dot.position.set(
      mesh.position.x + Math.cos(t * 0.6) * r,
      mesh.position.y + Math.sin(t * 0.45) * r * 0.4,
      Math.sin(t * 0.6) * r * 0.6,
    )

    // Scroll-driven displacement
    const sc = Math.min(scrollY / innerHeight, 1)
    uniforms.uDisp.value = 0.55 + sc * 0.6
    const baseY = innerWidth < 760 ? -0.4 : 0.05
    mesh.position.y = baseY + sc * -1.2
    halo.position.y = mesh.position.y

    renderer.render(scene, camera)
    rafId = requestAnimationFrame(loop)
  }
  loop()

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', resize)
    window.removeEventListener('resize', reposition)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('scroll', onScroll)
    geo.dispose()
    mat.dispose()
    haloGeo.dispose()
    haloMat.dispose()
    dotGeo.dispose()
    dotMat.dispose()
    renderer.dispose()
  })
})
</script>
