/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1250px'
      },
    },
    screens: {
      'lg': {'max': '992px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'}
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        whiteblue: '#eff5fe',
        grey: '#7D7987',
        lightblue: '#458FF6',
        lightbluesbutton: '#cee1fb',
        bluebutton: '#5b9bf3',
        lightbluecarousel: '#b5d2fb',
        bluecarousel: '#458ff6'
      }
    },
  },
  plugins: [],
}