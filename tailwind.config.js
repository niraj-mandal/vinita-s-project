/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oasis-black': '#17120F', // using the existing dark
        'oasis-cream': '#F4EEE4',
        'oasis-burgundy': '#5A1F24',
        'oasis-gold': '#B08A57',
        'oasis-white': '#FAFAFA',
        'oasis-dark': '#0d0a08', // very dark for some backgrounds
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'desktop': '1400px',
      }
    },
  },
  plugins: [],
}
