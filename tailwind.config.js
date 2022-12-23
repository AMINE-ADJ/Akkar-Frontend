/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "akkar-orange": "#E95913",
        "akkar-orange-second": "#FCEFE9",
        "akkar-white-creme": "#FBFBFA",
        "akkar-gray": "#50463C",
        "akkar-black": "#200E01",
        "akkar-brown": "#211C19",
        "akkar-brown-creme": "#E9D2C1",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};