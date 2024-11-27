/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        heroBg: '#030303', 
      },
      fontFamily: {
        arimo: ['Arimo', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
