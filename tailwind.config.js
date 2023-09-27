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
        'img': '-13px -13px 15px 1px rgba(0,0,0,0.24);'
      }
    },
  },
  plugins: [],
}

