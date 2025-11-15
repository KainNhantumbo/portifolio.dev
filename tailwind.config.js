/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';

const tailwindConfig = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        slab: ['var(--font-arvo-sans)', 'Inter', ...fontFamily.sans],
        sans: ['var(--font-rethink-sans)', 'Inter', ...fontFamily.sans],
        monospace: ['var(--font-ibm-plex-mono)', 'Menlo', 'Hack', ...fontFamily.mono]
      },
      screens: { mobile: '420px', ['mobile-x']: '480px' },
      colors: {
        transparent: 'var(--transparent)',
        error: 'rgb(var(--error) / <alpha-value>)',
        font: 'rgb(var(--font) / <alpha-value>)',
        black: 'rgb(var(--black) / <alpha-value>)',
        white: 'rgb(var(--white) / <alpha-value>)',

        'accent-primary': 'rgb(var(--accent-primary) / <alpha-value>)',
        'accent-secondary': 'rgb(var(--accent-secondary) / <alpha-value>)',
        'accent-tertiary': 'rgb(var(--accent-tertiary) / <alpha-value>)',
        'accent-quaternary': 'rgb(var(--accent-quaternary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        background: 'rgb(var(--background) / <alpha-value>)',
        'primary-variant': 'rgb(var(--primary-variant) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)'
      },
      backgroundSize: {
        '400%': '400% 400%'
      },
      keyframes: {
        gradientAnimation: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        gradient: 'gradientAnimation 15s ease infinite'
      }
    }
  },
  plugins: []
};

export default tailwindConfig;
