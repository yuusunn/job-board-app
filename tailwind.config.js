/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': '#EFFAFA',
        'desaturated-dark-cyan': '#5CA5A5',
        'dark-cyan': '#2B3939'
      },
      fontFamily: {
        sans: ['Spartan', 'sans-serif']
      }
    },
  },
  plugins: [],
}

