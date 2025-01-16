/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "Kumbh": ["Kumbh"],
      },
      colors: {
        "orange": "hsl(26,100%,55%)",
        "paleOrange": "hsl(25,100%,94%)",
        "veryDarkBlue": "hsl(220,13%,13%)",
        "darkGrayshBlue": "hsl(219,9%,45%)",
        "grayshBlue": "hsl(220,14%,75%)",
        "lightGrayshBlue": "hsl(223,64%,98%)",
        "white": "hsl(0,0,100%)",
        "black": "hsl(0,0%,0%)",
      }
    },
  },
  plugins: [],
}

