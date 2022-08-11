module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: ['cupcake', 'synthwave', 'cmyk', 'dark'],
    darkTheme: 'synthwave',
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
