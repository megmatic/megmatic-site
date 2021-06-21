module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': 'gitan-latin, sans-serif',
      'body': 'chennai-slab, serif',
    },
    textColor: {
      'blue': '#0726B6',
      'yellow': '#FFE600',
      'coral': '#FF3333',
      'gray': '#013737',
      'white': '#fefefe'
    },
    fill: {
      'blue': '#0726B6',
      'yellow': '#FFE600',
      'coral': '#FF3333',
      'gray': '#013737',
    },
    extend: {},
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
