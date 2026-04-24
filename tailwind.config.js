/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050816',
        slate: '#0f172a',
        mist: '#94a3b8',
        line: 'rgba(148, 163, 184, 0.16)',
        glow: '#4f7cff',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(2, 6, 23, 0.45)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Aptos', 'Segoe UI Variable', 'Segoe UI', 'ui-sans-serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
