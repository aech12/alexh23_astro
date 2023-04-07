/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'hero': '#BBDDFF',
        'header': '#11111E',
        'p1': '#E1FF80',
        'p1-dark': '#a9d615'
      },
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
