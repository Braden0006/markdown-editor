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
        greywhite: '#F5F5F5',
      },
      width: {
        '10v': '10vw',
        '20v': '20vw',
        '30v': '30vw',
        '40v': '40vw',
        '50v': '50vw',
        '60v': '60vw',
        '70v': '70vw',
        '80v': '80vw',
        '90v': '90vw',
      }
    },
  },
  plugins: [],
}