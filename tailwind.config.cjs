/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app': '#4a0000',
        'app-light': '#c00'
      }
    },
  },
  plugins: [],
}
