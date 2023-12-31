/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FEECE3",
        opacityDownColor: "#ffffffba",
        cat1: "#D6D6D8",
        cat2: "#EFE1C7",
        cat3: "#D7D7D9",
        cat4: "#212121",
      },
    },
  },
  plugins: [],
};
