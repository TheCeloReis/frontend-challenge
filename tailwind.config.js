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
        discount: "#02A117",

        muted: "#6D6F73",
        foreground: "#EEF0F5",
        baseText: "#202326",
        border: "#CDD1D9",

        warning: "#393A3C",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
