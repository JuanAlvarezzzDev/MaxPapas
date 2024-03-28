/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9AA00",
      },
      dropShadow: {
        'product': '-3px 5px 14px #ffffff',
      }
    },
  },
  plugins: [],
};
