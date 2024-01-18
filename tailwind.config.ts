import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-figtree)"],
        serif: ["var(--font-satoshi)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      colors: {
        primary: {
          500: "#FF7000",
          100: "#FFF1E6"
        },
        dark: {
          100: "#000000",
          150: "#0A0A0A",
          180: "#121212",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          900: "#FFFFFF",
          870: "#DEDEDE",
          850: "#FDFDFD",
          820: "#F3F3F3",
          800: "#F4F6F8",
          700: "#DCE3F1",
          600: "#999999",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        "accent-blue": "#1DA1F2",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
    },
    screens: {
      xs: '420px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1600px',
    }
  },
  plugins: [],
}
export default config
