/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "blue-custom":{
          100: '#16168b'
        }
      },

      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

