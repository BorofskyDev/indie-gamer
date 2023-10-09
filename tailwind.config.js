/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,tsx}', './components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['var(--font-inconsolata)', 'monospace'],
      },
    },
  },
  plugins: [],
}
