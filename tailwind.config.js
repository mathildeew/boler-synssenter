/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBeige: "#FFF6F1",
        lightBlue: "#C4E5FA",
        lightPurple: "#C9CDFA",
        darkPurple: "#050A53",
      },
      fontFamily: {
        sans: ["futura-pt, Arial, Tahoma, sans-serif"],
        serif: ["plantin, serif"],
      },
    },
  },
  plugins: [],
};
