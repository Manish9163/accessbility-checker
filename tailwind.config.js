/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-sm': {
          '-webkit-backdrop-filter': 'blur(4px)',
          'backdrop-filter': 'blur(4px)',
        },
        '.backdrop-blur': {
          '-webkit-backdrop-filter': 'blur(8px)',
          'backdrop-filter': 'blur(8px)',
        },
        '.backdrop-blur-md': {
          '-webkit-backdrop-filter': 'blur(12px)',
          'backdrop-filter': 'blur(12px)',
        },
        '.backdrop-blur-lg': {
          '-webkit-backdrop-filter': 'blur(16px)',
          'backdrop-filter': 'blur(16px)',
        },
        '.text-size-adjust-none': {
          '-webkit-text-size-adjust': 'none',
          'text-size-adjust': 'none',
        },
        '.text-size-adjust-auto': {
          '-webkit-text-size-adjust': 'auto',
          'text-size-adjust': 'auto',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}