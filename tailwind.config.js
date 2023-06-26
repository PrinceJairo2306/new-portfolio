/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif']
      },
      resonsive:true,
      screens: { 
        'sm': { 'max': '640px' } 
    },
    colors: {
      c_Orange: "#eb5939",
      c_White: "#b7ab98",
      c_Black: "#0D0D0D",
    },
    backgroundImage:{
      "chung-myung" : "url('./src/assets/mounthua.jpg')",
      "superhuman" : "url('./src/assets/existence.jpg')"
    },
    },
  },
  plugins: [],
}

