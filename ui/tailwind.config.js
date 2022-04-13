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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
