/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
colors: {
      "secondaryBackground": "#071626"
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
