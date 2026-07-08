/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Monochrome base + a single restrained accent.
        // Change --accent in index.css to re-tint the whole site.
        ink: '#0A0A0A',        // near-black text
        paper: '#FAFAFA',      // off-white background
        accent: 'var(--accent)',
      },
      fontFamily: {
        // Clean grotesque stack: SF Pro when available, then Inter, then system.
        sans: [
          '"SF Pro Display"', '"SF Pro Text"', 'Inter',
          'system-ui', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif',
        ],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        container: '1200px',
      },
      transitionTimingFunction: {
        // Calm, expensive easing used across reveals + hovers.
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
