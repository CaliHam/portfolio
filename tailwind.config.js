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
      },
      animation: {
        rotate360: 'rotate360 2s linear',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}

