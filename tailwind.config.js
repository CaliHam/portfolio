/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'title': ['Corben'],
      'body': ['Spinnaker']
    },
    extend: {
      boxShadow: {
        'img': '0 2px 8px rgba(0,0,0,0.15);'
      },
      scale: {
        '115': '1.15', 
      }
    },
  },
  plugins: [],
}

