/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue, js, html}",
  ],

  theme: {
    extend: {
      colors: {
        base: "#EFEFEF",
        orange: "#F26419",
      },
    },
  },

  plugins: [],
}

