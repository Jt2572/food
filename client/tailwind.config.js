/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#1FA2C5',
          50: '|#AAE3F2',
          100: '#98DDEF',
          200: '#75D1E9',
          300: '#52C5E4',
          400: '#2FB9DE',
          500: '#1FA2C5',
          600: '#177A95',
          700: '#105264',
          800: '#082A34',
          900: '#000303',
        },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    fontFamily: {      
      bgs: ['Bell Gothic Std', 'serif'],
      dancing: ['Dancing Script'],
      castle: ['Castle', 'serif'],
      nova:['NovaMono', 'sans-serif']
    },
  },
  plugins: [],
}
