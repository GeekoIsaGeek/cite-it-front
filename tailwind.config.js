/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0c0d12',
        offGold: '#DDCCAA',
        semiOpaqueBlack: 'rgba(0,0,0,0.54)',
        darkPurple: '#222030',
        darkGray: ' #6C757D',
        lightGray: '#CED4DA',
        greenSuccess: '#198754',
        redFail: '#E31221',
        blue: ' #0D6EFD'
      },
      padding: {
        13: '52px',
        18: '72px',
        30: '120px'
      },
      width: {
        90: '360px'
      },
      boxShadow: {
        input: ' 0px 0px 0px 4px #0D6EFD40'
      },
      fontFamily: {
        montserrat: 'Montserrat'
      }
    }
  },
  plugins: []
}
