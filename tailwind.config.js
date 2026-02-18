/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#07A698',
          dark: '#058C80',
          light: '#09C2B1',
        },
        secondary: {
          dark: '#162726',
        },
        accent: '#07A698',
        warning: '#F59E0B',
        background: {
          soft: '#F2F4F7',
        },
        text: {
          primary: '#162726',
          secondary: '#6C706F',
          muted: '#94A3B8',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}

