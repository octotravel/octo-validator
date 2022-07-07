module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#073642',
      secondary:'red',
      // button:'#073642',
      hoverButton:'#05586e',
      "text-base":'white'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
