/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: "#4b5563",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [require('daisyui'),],
}

