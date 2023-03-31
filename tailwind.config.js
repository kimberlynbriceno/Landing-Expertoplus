/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["_app.js/", "./src/**/*.js"],
  theme: {
    extend: {
      colors:{
        black: "#14181D",
        blue: "#023EFD",
        white: "#EDECED",
        whiteimg: "#C6C6C6",
        header: "#EDF1F4",
      }
    },
    fontFamily:{
      abc:['League Spartan', 'sans-serif'],
      dfg:['Roboto Flex', 'sans-serif'],
  },
},
  plugins: [],
}

