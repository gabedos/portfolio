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
          dark: "#5986d1",
          DEFAULT: "#a6c1ee",
        },
        pink: {
          dark: "#F892DB",
          DEFAULT: "#fbc2eb",
        },
      },
    },
  },
  plugins: [],
};
