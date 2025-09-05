/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonpink: '#ff2d7a',
      },
      dropShadow: {
        glowpink: '0 0 25px rgba(255, 45, 122, 0.9)',
        glowcyan: '0 0 25px rgba(34, 211, 238, 0.9)',
      },
      keyframes: {
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        flow: 'flow 6s ease infinite',
      }
    },
  },
  plugins: [],
}
