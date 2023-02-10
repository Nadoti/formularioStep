/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        '900-gray': '#151416',
        '800-gray': '#111013',
        '700-gray': '#353437',
        '600-gray': '#35333D',
        '500-gray': '#44414D',
        '450-gray': '#504B4B',
        '400-gray': '#908F94',

        '400-blue': '#146CFF',
        '500-blue': '#1664E6',

        '500-red': '#C83C3D',
      }
    },
  },
}