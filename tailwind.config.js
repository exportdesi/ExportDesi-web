/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a1a',
        },
        surface: {
          DEFAULT: '#f4f4f5',
          dark: '#e8e8e9',
        },
        border: {
          DEFAULT: '#e5e5e5',
          strong: '#d1d1d1',
        },
        muted: '#6b7280',
      },
      maxWidth: {
        content: '72rem',
      },
      spacing: {
        section: '6rem',
      },
    },
  },
  plugins: [],
}
