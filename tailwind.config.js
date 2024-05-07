/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['coolvetica', 'sans'], // Use 'BHamid' as the font name
        custom1: ['Poppins', 'sans'], // Use 'BHamid' as the font name
      },
    },
  },
  plugins: [require("daisyui")],
}

