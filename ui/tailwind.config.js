const colors = require('tailwindcss/colors')

module.exports = {
  purge:[],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/app/**/*.{html,ts}",
    "./src/index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      dark: '#252F48',
      orange: colors.orange,
      violet: colors.violet,
      gray: colors.gray,
      rose: colors.rose,
      black: colors.black,
      white: colors.white,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      slate: colors.slate,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
