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
        "akkar-brown-second" :"#B28666",
          "filter" : "rgba(70, 29, 10, 0.5)",
        "akkar-brown-creme": "#E9D2C1",
        "akkar-orange-third": "#B28666",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        "akkar-bold": 500,
      },
      boxShadow: {
        "akkar-shadow": "0px -10px 17px 14px #E95913",
        "card-shadow" : " 6px 7px 4px #B38666",
      },
      zIndex: {
        "100":100,
      },
      backgroundImage: {
        'wood-bg': "url('../src/assets/Wood_bg.svg')",
        
      },
      
    },
   
  },
  plugins: [],
};
