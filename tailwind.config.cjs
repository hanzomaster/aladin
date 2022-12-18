/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
<<<<<<<<< Temporary merge branch 1
  safelist: [
    {
      pattern: /bg-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
],
  plugins: [
    require('tailwind-scrollbar')
  ],
};
