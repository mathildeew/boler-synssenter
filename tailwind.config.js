/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lightBeige: "#FFF6F1",
        lightBlue: "#C4E5FA",
        lightPurple: "#C9CDFA",
        darkPurple: "#050A53",
        skyBlue: "#4DAEEA",
      },
      fontFamily: {
        sans: ["futura-pt, Arial, Tahoma, sans-serif"],
        serif: ["plantin, serif"],
      },
      gridTemplateColumns: {
        news: "repeat(4, minmax(85%, 1fr))",
      },
      screens: {
        gridExpand: "600px",
      },
      animation: {
        inFromBottom: "inFromBottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
      },
      keyframes: {
        inFromBottom: {
          from: { transform: "translateY(15px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
