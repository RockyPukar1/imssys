/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grey: {
        50: '#f0f1f3',
        100: '#d0d3d9',
        200: '#b9bdc7',
        300: '#989fad',
        400: '#858d9d',
        500: '#667085',
        600: '#5d6679',
        700: '#48505e',
        800: '#383e49',
        900: '#2b2f38'
      },
      primary: {
        50: '#e8f1fd',
        100: '#b6d3fa',
        200: '#93bdf8',
        300: '#629ff4',
        400: '#448df2',
        500: '#1570ef',
        600: '#1366d9',
        700: '#0f50aa',
        800: '#0c3e83',
        900: '#092f64'
      },
      eror: {
        50: '#feeceb',
        100: '#fac5c1',
        200: '#f8a9a3',
        300: '#f5827a',
        400: '#f36960',
        500: '#f04438',
        600: '#da3e33',
        700: '#aa3028',
        800: '#84251f',
        900: '#651d18'
      },
      warning: {
        50: '#fef4e6',
        100: '#fdddb3',
        200: '#fbcc8e',
        300: '#fab55a',
        400: '#f9a63a',
        500: '#f79009',
        600: '#e18308',
        700: '#af6606',
        800: '#884f05',
        900: '#683c04'
      },
      success: {
        50: '#e7f8f0',
        100: '#b6e9d1',
        200: '#92deba',
        300: '#60cf9b',
        400: '#41c588',
        500: '#12b76a',
        600: '#10a760',
        700: '#0d824b',
        800: '#0a653a',
        900: '#084d2d'
      }
    },
    // fontSize: {
    //   'display-sm': [
    //     '0.938rem',
    //     {
    //       lineHeight: '2.375rem',
    //       letterSpacing: '0',
    //     },
    //   ],
    //   'display-xs': [
    //     '1.5rem',
    //     {
    //       lineHeight: '2rem',
    //       letterSpacing: '0',
    //     },
    //   ],
    // },
    extend: {},
  },
  plugins: [],
}