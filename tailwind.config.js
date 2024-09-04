/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lightBeige: "#fffcf4",
        darkBeige: "#faf3e9",
        lightBlue: "#C4E5FA",
        lightPurple: "#C9CDFA",
        darkPurple: "#0F4996",
        // darkPurple: "#050A53",
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
    },
  },
  plugins: [],
};
