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
        'spin-slow': 'spin 8s linear infinite',
        'wiggle' : 'wiggle 0.5s linear infinite'
        
      },
      keyframes:{
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        }
      }
    },
  },
  plugins: [],
}

//bg-gradient-to-r from-slate-700 via-slate-600 to-red-500