import flowbitePlugin from 'flowbite/plugin'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      screens: {
        md720: '720px',
      },
    },
  },

  plugins: [flowbitePlugin],
}