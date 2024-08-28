/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.ejs'],
  theme: {
    extend: {
      width: {
        '35%': '35%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%'
      }
    },
  },
  plugins: [],
}

