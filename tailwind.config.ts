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
  },
  plugins: [],
}
export default config
