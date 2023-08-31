// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   poppins: ['"Poppins"', 'sans-serif'],
    //   roboto: ['"Roboto"', 'sans-serif']
    // }
  },
  darkMode: "media",
  plugins: [
    require("daisyui"),
  ],
}
