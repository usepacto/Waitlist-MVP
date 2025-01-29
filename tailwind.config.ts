import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#fbfbfe',
        'text-dark': '#303030',
        'text-muted': '#616161',
        'primary-gradient-from': '#fbfbfe',
        'primary-gradient-via': '#e0e0ff',
        'primary-gradient-to': '#fbfbfe',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
