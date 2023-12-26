/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...colors,
      colors: {
        primary: "#f5fcff",
        secondary: "#5e3bee",
        "secondary-light": "#7c6ff7",
        blue: {
          black: "#090d15",
          darkest: "#1b283f",
          darker: "#35507d",
          dark: "#5986d1",
          DEFAULT: "#a6c1ee",
        },
        pink: {
          dark: "#F892DB",
          DEFAULT: "#fbc2eb",
        },
      },
      spacing: {
        "nav-height": "80px",
        "page-height": "calc(100vh - 80px - 40px)",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
