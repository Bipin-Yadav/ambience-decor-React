/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- ADD THIS LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#1a1a1a', 
          800: '#2d2d2d',
          gold: '#c5a059', 
          dark: '#0f0f0f', // Very dark grey for Dark Mode background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}