import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'sporty-blue': '#147bff',
        'casual-black': '#181818',
        'concrete': '#F2f2f2',


        'earls-green': '#ccc141',
        'fascinating-magenta': '#cd3c84',
        'psychedelic-violet': '#a04fff',
        'blue-green': '#00bda9',
      },
      fontFamily: {

        primary: ['Poppins', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      fontSize: {

        'headline': ['96pt', { fontWeight: '900' }],
        'subheader': ['64pt', { fontWeight: '600' }],
        'body': ['20pt', { fontWeight: '400' }],
        'btn-text': ['24pt', { fontWeight: '600' }],
      }
    },
  },
};
