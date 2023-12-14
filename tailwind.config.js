/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        'sans-body': ['IBM Plex Sans', 'Inter', 'sans-serif'],
        monospace: ['IBM Plex Mono', 'Menlo', 'Hack', 'Consolas', 'monospace'],
        'sans-display': ['Space Grotesk', 'Inter', 'sans-serif']
      },
      screens: {
        mobile: '420px',
        'mobile-x': '480px'
      },
      colors: {
        transparent: 'var(--transparent)',
        error: 'rgb(var(--error) / <alpha-value>)',
        font: 'rgb(var(--font) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)'
      }
    }
  },
  plugins: []
};