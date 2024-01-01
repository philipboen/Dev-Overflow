import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)"],
        serif: ["var(--font-satoshi)"]
      },
      colors: {
        primary: {
          500: "#FF7000",
          100: "#FFF1E6"
        }
      }
    },
    screens: {
      xs: '420px',
      // => @media (min-width: 420px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    }
  },
  plugins: [],
}
export default config
