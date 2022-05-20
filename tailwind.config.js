module.exports = {
  content: ["./src/**/*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#4726d1',
        'second': '#b1acbf',
        'hover': '#6642fb'
      },
      width: {
        'form-sm': '398px',
        'form': '432px',
      },
      fontFamily: {
        'utopia': ['utopia-std-display'],
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
