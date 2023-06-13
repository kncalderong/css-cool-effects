/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'rgb(20, 20, 20)',
        'dark-magic-background': 'rgb(10, 10, 10)',
        'purple-magic': 'rgb(123, 31, 162)',
        'violet-magic': 'rgb(103, 58, 183)',
        'pink-magic': 'rgb(244, 143, 177)',
        'border-twitch': 'rgb(3,169,244)'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        anek: ['Anek Latin', 'sans-serif'],
        monserrat: ['Montserrat', 'sans-serif'],
        lobster:['Lobster', 'cursive']
      },
      keyframes: {
        backgroundPanKeyframe: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '-200% center' }
        },
        scaleStarKeyframe: {
          '0%': { 'transform': 'scale(0)' },
          '50%': { 'transform': 'scale(1)' },
          '100%': { 'transform': 'scale(0)' }
        },
        rotateStarKeyframe: {
          '0%': { 'transform': 'rotate(0deg)' },
          '100%': { 'transform': 'rotate(180deg)' }
        }
      },
      animation: {
        backgroundPan: 'backgroundPanKeyframe 3s linear infinite',
        scaleStar: 'scaleStarKeyframe 700ms ease forwards',
        rotateStar: 'rotateStarKeyframe 1000ms linear infinite'
      },
      backgroundSize: {
        '200%': '200%'
      },
      aspectRatio: {
        'twitchCard': '1 / 1.6'
      }
    },
  },
  plugins: [],
}

