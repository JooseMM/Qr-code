/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ParagraphColor: "hsl(220, 15%, 55%)",
        BackgroundApp: "hsl(212, 45%, 89%)",
        HeaderColor: "hsl(218, 44%, 22%)",
      },
      margin: {
        "15v": "15vh",
      },
    },
  },
  plugins: [],
};
