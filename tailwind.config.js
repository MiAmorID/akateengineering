/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#b36b3f',
        muted: '#9aa3ad',
        'brand-bg': '#0b0b0c',
        'brand-surface': 'rgba(255,255,255,0.03)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Source Serif 4"', 'serif']
      }
    },
  },
  plugins: [],
};
