/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: "Be Vietnam Pro, sans-serif",
      },
      backgroundColor: {
        primary: "#FAF3F0",
      },
      colors: {
        blackish: "#121212",
        grayish: "#6D6D6D",
        brownish: "#802605",
        lightgray: "#E4E2E3",
        lightOrange: "#FAF3F0",
      },
    },
  },
  plugins: [],
};
