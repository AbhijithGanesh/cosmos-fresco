/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      fontFamily: {
        Ally: ["Alliance"],
      },
      colors: { teal: "#032F39", yellow: "#F6A800" },
    },
  },
  plugins: [require("daisyui")],
};
