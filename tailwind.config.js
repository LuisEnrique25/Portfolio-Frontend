/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation:{
        'swap': "swapAnimation 1s linear alternate infinite "
        
      },
      keyframes:{
        swapAnimation:{
          
        }
      }
    },
  },
  plugins: [],
}

//bg-gradient-to-r from-slate-700 via-slate-600 to-red-500