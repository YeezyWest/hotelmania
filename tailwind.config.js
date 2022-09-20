/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html"],
  theme: {
    extend: {},
    fontFamily: {
      PlusJakarta: ["Plus Jakarta, sans-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens:{
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      },
    },
  },
  plugins: [],
}