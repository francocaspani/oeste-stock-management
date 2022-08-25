/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/Header.jsx',
    './src/components/CardProduct.jsx',
    './src/pages/Home.jsx'

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
