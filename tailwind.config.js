module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      primary:'#13294b',
      secondary:'#1d3f74',
      button:'#0096FF',
      darkSky:'#055085',
      hoverButton:'#076cb3',
      "text-base":'white'
    },
    container:{
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl: '5rem',
        '2xl':'6rem'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
