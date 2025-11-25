/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#00e5ff",
          violet: "#6A00FF"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
