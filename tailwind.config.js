/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
      },
      colors: {
        primary: {
          DEFAULT: '#7773e1',
        },
        text: {
          DEFAULT: '#303030',
          secondary: '#616161',
        },
        background: {
          light: '#fafcfe',
          DEFAULT: '#ffffff',
        },
      },
      fontSize: {
        'mobile-heading': ['26px', {
          lineHeight: '30.68px',
          fontWeight: '500', // medium
        }],
        'mobile-subheading': ['20px', {
          lineHeight: '24px',
          fontWeight: '500', // medium
        }],
        'mobile-body': ['14px', {
          lineHeight: '16.80px',
          fontWeight: '300', // light
        }],
      },
    },
  },
  plugins: [],
}; 