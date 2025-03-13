/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      colors: {
        firstcolor: "#D4AF37",
        secondcolor: "#000",
        secondcolorlight: "#0c0c0c",
        whitecolor: "#f1f1f1",
        blackcolor: "#1a1a1a",
        graycolor: "#C4C4C450",
        paragraphcolor: "#000000B3"
      }
    },
    fontFamily: {
      Montserrat: ["Barlow", "sans-serif"]
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "24px"
      }
    }
  },
  plugins: [],
}