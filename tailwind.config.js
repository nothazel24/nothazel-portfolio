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

      keyframes: {
        bounceE: {
          '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
          '30%': { transform: 'translateY(-6px) rotate(-12deg)' },
          '60%': { transform: 'translateY(2px) rotate(-12deg)' }
        }
      },

      animation: {
        'bounce-e': 'bounceE 0.7s ease-out'
      }
    },
  },

  plugins: [],
}

