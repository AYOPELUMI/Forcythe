/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        counter: 'counter 3s ease-out forwards',
      },
      keyframes: {
        counter: {
          '0%': { counterReset: 'num 0' },
          '100%': { counterIncrement: 'num var(--num)' },
        },
      },
      
colors: {
      "primaryBackground": "#030516",
      "secondaryBackground": "#071626",
      "accent": "#60a6e7",
      "accent2" : "#60a6e7",
      "accent3" : "#0c2645"
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-animate': {
          transitionProperty: 'all',
          transitionDuration: '.3s',
          transitionTimingFunction: 'cubic-bezier(.4, 0, .2, 1)',
        },
      });
    },
  ],
}
}
