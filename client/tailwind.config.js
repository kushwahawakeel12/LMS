// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'home-heading-small': '2rem', // 32px
        'home-heading-large': '4rem', // 64px
      },
    },
  },
  plugins: [],
}