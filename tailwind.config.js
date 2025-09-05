/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        neon: '0 0 15px rgba(255,0,120,0.9)',
      },
      keyframes: {
        flow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        flow: 'flow 5s ease infinite',
      },
    },
  },
  plugins: [],
}
