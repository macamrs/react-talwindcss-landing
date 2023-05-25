/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#C271FF",
        white: "#FFFFFF",
        secondary: "#071629",
        "secondary-hover": "#9B5ACD",
      },
      backgroundImage: {
        "hero-section": "url('./assets/hero.png')",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
