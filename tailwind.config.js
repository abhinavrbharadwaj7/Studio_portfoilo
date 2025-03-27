/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'primary-light': '#ffffff',
        'primary-dark': '#000000',
      },
      textColor: {
        'primary-light': '#000000',
        'primary-dark': '#ffffff',
      },
      borderColor: {
        'primary-light': '#666666',
        'primary-dark': '#999999',
      }
    },
  },
  plugins: [],
}

