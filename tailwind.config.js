/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#47929C",
        sec_color: "#F09291",
        nav_color: "#85C5B9",
      },
    },
  },
  plugins: [],
};
