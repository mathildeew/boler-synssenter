/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lightBeige: "#fffcf4",
        darkBeige: "#faf3e9",
        lightBlue: "#f9f9ff",
        logoBlue: "#127cc4",
        darkBlue: "#0f4996",
        skyBlue: "#CFE8FA",
        textBlue: "#10305D",
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
