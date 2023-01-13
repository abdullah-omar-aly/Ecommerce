

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
      backgroundColor: {
        "primary-bg": "#D9D9D9",
        "primary-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "primary-btn-bg": "#EC2C38" ,
      },
      borderWidth: {
        1: "1px",
      },
      zIndex:{
        "1-": "-1"
      },
      colors: {
        "primary": "#002E7A", 
        "semi-transparent": "rgba(0,0,0,0.5)",
        "dark-gray" : '#1C1D1D',
        "normal-gray" : '#343535',
        "light-gray": "#F7F7F7",
        "main-yellow": "#FFA500",
        // "main-primary": "#EB2D34",
        "primary-fg": "#FCFCFC" ,
        // "secondary-fg": '#010102' ,
        // "main-fg" : '#EC2C38' ,
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
      gap: {
        "2/100": "2%",
        "3/100": "3%"
      },
      

      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      outlineWidth: {
        "0.5": "0.5px"
      }
      ,
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        // 80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      minWidth: {
        // "320": "3rem"
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
    },
    plugins: [],
  },
};

