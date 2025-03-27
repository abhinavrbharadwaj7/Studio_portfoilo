/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#000000',
          light: '#ffffff'
        },
        secondary: {
          dark: '#1f2937',
          light: '#f3f4f6'
        }
      }
    },
  },
  plugins: [],
}

