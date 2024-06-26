/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/**/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors:{
        primary:{
          500:"#8EC711",
          700:" #1E2C00",
          800:"#010600"
        },
        neutral:{

          100:"#FFF",
          200:"#fcfdff",
                  },
          

        accent:{
            100:"#FFEFE2",
          }
      },

    },
  },
  plugins: [],
}

