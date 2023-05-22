/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#C271FF",
        white: "#FFFFFF",
        secondary: "#071629",
      },
      backgroundImage: {
        "hero-section": "url('./assets/hero.svg')",
      },
    },
  },
  plugins: [],
};
