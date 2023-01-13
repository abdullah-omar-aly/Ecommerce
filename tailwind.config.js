/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    darkMode: "class",
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      colors: {
        "primary": "#002E7A", 
        "semi-transparent": "rgba(0,0,0,0.5)",
        "dark-gray" : '#1C1D1D',
        "normal-gray" : '#343535',
        "light-gray": "#F7F7F7",
        "main-yellow": "#FFA500",
        "primary-fg": "#FCFCFC" ,
        "lightblue": "rgb(227, 234, 252)",
        secondary:{
          50: "#F7F7F7",
          100: '#E5E5E5',
          200: '#191919',
          300: '#0F0F0F',
          400: '#343535',
          500: '#1C1D1D',
          
        }     
      },
      outlineWidth: {
        "0.5": "0.5px"
      }

    },
    plugins: [],
  },
};

