/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 3s infinite",
        hover: "hover 0.3s ease-in-out",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(0)' },
        },
        hover: {
          '0%, 100%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
