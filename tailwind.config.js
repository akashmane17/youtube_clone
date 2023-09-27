/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {        
        "gray": "#454545",
        "gray-2": "#919191",
        "white": "#fff",
        "black-3": "#3f3f3f",
        "black-2": "#272727",
        "black-4": "#212121",
        "black-5": "#121212",
        "black-1": "#101010",
        "transparent": "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald', sans-serif"],
      },
    },
    screens: {
      xs: "420px",
      sm: "700px",
      md: "1100px",
      lg: "1570px",
      xl: "1920px",
    },
  },
  plugins: [],
}

