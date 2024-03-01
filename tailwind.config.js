/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7b1Fa2",
          lightest: "#F8ECFE",
          light: "#EECFFC",
          dark: "#580F78",
        },

        secondary: "#00a296",

        muted: "#6D6F73",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
