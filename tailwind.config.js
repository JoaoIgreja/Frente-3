/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'header': '#000000',
        'body': '#042043',
        'greenSite': '#00BE52',
      },
      fontFamily: {
        'body': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
