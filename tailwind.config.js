/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'green' : '#34C800',
        'blue' : '#4169e1'
      }
    },
  },
  plugins: [],
}

