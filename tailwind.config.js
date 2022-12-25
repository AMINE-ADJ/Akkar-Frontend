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
        "akkar-orange-third" : "#B28666"
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight:{
        "akkar-bold" :500,
      },
      boxShadow:{
        "akkar-shadow": "0px -10px 17px 14px #E95913"
      }
    },
  },
  plugins: [],
};
