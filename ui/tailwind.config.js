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
      dark: '#354060',
      lightorange: {
        100: '#F8AB96',
        200: '#F8CB96',
        300: '#F8FB96',
        400: '#F95B96',
        500: '#F99B96',
      },
      pink: {
        100: '#F9DCB2',
        200: '#FA1CB2',
        300: '#FA3CB2',
        400: '#FA7CB2',
      },
      orange: colors.orange,
      violet: colors.violet,
      gray: colors.gray,
      rose: colors.rose,
      black: colors.black,
      white: colors.white,
      amber: colors.amber,
      fuchsia: colors.fuchsia,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
