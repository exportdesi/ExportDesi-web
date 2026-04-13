/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
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
        muted: '#595959', // WCAG AA compliant: 4.6:1 contrast ratio on white (was #6b7280)
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
