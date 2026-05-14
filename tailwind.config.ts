import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        cream: '#E8E2D5',
        'cream-2': '#DED7C7',
        ink: '#0B0C0B',
        fire: '#D63D14',
        gold: '#FFB800',
        smoke: '#8C8475',
        border: '#BEB9AF',
        card: {
          bucherer: '#1C1B28',
          abc: '#0F2952',
          referral: '#200A42',
          kroon: '#0A2E1E',
          snap: '#1A1A18',
        },
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.05' }],
        '9xl': ['7.5rem', { lineHeight: '1.02' }],
        '10xl': ['9rem', { lineHeight: '0.98' }],
        '11xl': ['11rem', { lineHeight: '0.95' }],
      },
      animation: {
        'slide-up': 'slideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'ticker': 'ticker 40s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(60px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
