/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Sora", "sans-serif"],
        titleFont: ["Sora","sans-serif"],
      },
      colors: {
        bodyColor: "#111827",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#22C55E",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        shadowhover: '0 4px 6px rgba(0, 255, 0, 0.6)',
        shadowtwo: '0px 10px 30px rgba(8, 112,100, 0.6)',
      },
    
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
