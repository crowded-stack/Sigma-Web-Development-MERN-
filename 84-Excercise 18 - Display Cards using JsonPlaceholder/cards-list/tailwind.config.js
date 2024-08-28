/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "30%": "30%",
        "25%": "25%",
        "20%": "20%",
      },
    },
  },
  plugins: [],
};
