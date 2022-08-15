/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarbg: '#2B2D31',
        navbarmenu: '#35393F',
        orange: '#E46643',
        lightorange: '#F39765',
      }
    },
  },
  plugins: [],
}