/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D5EB04',
        primarShaded: '#AFBF18',
      },
    },
  },
  plugins: [],
};
