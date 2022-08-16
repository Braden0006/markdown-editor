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
        black: '#1D1F22',
        grey: '#7C8187',
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
        '90%': '90%',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '170v': '170vh',
        '175v': '175vh',
        '200v': '200vh',
      },
      fontFamily: {
        'roboto': ['Roboto, sans-serif'],
        'robotomono': ['Roboto Mono, monospace'],
        'robotoslab': ['Roboto Slab, serif'],
      }
    },
  },
  plugins: [],
}