/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Refined, eye-friendly Sunset / Vice palette
        sunset: {
          rose: '#f43f5e',
          pink: '#ec4899',
          coral: '#fb7185',
          orange: '#f97316',
          amber: '#f59e0b',
          purple: '#8b5cf6',
          indigo: '#6366f1',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          darkBg: '#090d16',
          darkCard: '#0f172a',
          lightBg: '#f8fafc',
          lightCard: '#ffffff',
        }
      },
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow': '0 8px 30px -4px rgba(244, 63, 94, 0.25)',
        'soft-cyan': '0 8px 30px -4px rgba(6, 182, 212, 0.25)',
        'soft-card': '0 4px 25px rgba(0, 0, 0, 0.18)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
