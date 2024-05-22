/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        primary: {
          500: "#8EC711",
          700: "#293215",
          800: "#010600",
        },
        neutral: {
          100: "#FFF",
        },
      },
    },
  },
  plugins: [],
};
