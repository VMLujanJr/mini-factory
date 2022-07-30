const colors = require('tailwindcss/colors');
const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors:{
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      sky: colors.sky,
      cyan: colors.cyan,
      emerald: colors.emerald
    },
    extend: {
      colors:{
        'custom-teal': '#2b6777',
        'custom-blue': '#c8d8e4',
        'custom-white': '#ffffff',
        'custom-gray': '#f2f2f2',
        'custom-aqua': '#52ab98'
      }
    },
    
    fontFamily:{
      gothic: 'century-gothic, sans-serif',
      default: 'montserrat, sans-serif'
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
