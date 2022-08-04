
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
      emerald: colors.emerald,
      teal: colors.teal,
      blue: colors.blue,
      'custom-teal': '#2b6777',
      'custom-blue': '#1e40af',
      'custom-white': '#c7d2fe',
      'custom-gray': '#71717a',
      'custom-aqua': '#52ab98'
    },

    
    fontFamily:{
      gothic: 'century-gothic, sans-serif',
      default: 'montserrat, sans-serif',
      
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
