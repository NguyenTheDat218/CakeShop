/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FADADD",   // pastel hồng ngọt ngào
          peach: "#FFE5B4",  // pastel cam đào
          mint: "#B5EAD7",   // pastel xanh mint
          lavender: "#C7CEEA", // pastel tím nhạt
          yellow: "#FFF5BA",  // pastel vàng kem
          brown: "#8B5E3C",   // màu nâu cho bánh / socola
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // body
        logo: ["Dancing Script", "cursive"], // logo, tiêu đề chính
      },
    },
  },
  plugins: [],
};
