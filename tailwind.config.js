/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      inset: {
        'tileStaggered': '0.5px'
      },
      colors: {
        'dark-gray': 'rgb(20, 20, 20)',
        'dark-magic-background': 'rgb(10, 10, 10)',
        'purple-magic': 'rgb(123, 31, 162)',
        'violet-magic': 'rgb(103, 58, 183)',
        'pink-magic': 'rgb(244, 143, 177)',
        'border-twitch': 'rgb(3,169,244)',
        'menu-blue': 'rgb(61, 90, 254)',
        'menu-light-blue': 'rgb(33, 150, 243)',
        'staggered-purple': 'rgb(98, 0, 234)',
        'staggered-salmon': 'rgb(236, 64, 122)',
        'hover-highlight-portfolio': 'rgb(126, 87, 194)',
        'border-portfolio': 'rgb(255, 255, 255, 0.1)'
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        anek: ['Anek Latin', 'sans-serif'],
        monserrat: ['Montserrat', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        dancing: ['Dancing Script', 'cursive'],
        ibarra: ['Ibarra Real Nova', 'serif']
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
        },
        staggeredBackgroundPan: {
          '0%': { 'background-position': '0% center' },
          '100%': { 'background-position': '-200% center' }
        }
      },
      animation: {
        backgroundPan: 'backgroundPanKeyframe 3s linear infinite',
        scaleStar: 'scaleStarKeyframe 700ms ease forwards',
        rotateStar: 'rotateStarKeyframe 1000ms linear infinite',
        staggeredBackgroundPan: 'staggeredBackgroundPan 10s linear infinite'
      },
      backgroundSize: {
        '200%': '200%'
      },
      aspectRatio: {
        'twitchCard': '1 / 1.6',
        'mouseTrailerCard': '1 / 1.5',
        'kippoHoverCard': '5 / 7' 
      },
      margin: {
        clampMenu: 'clamp(4rem, 20vw, 48rem)'
      },
      gridTemplateColumns: {
        'portfolioSliderCol': '2fr 1fr'
      },
      gridTemplateRows: {
        'portfolioSliderRow': '2fr 1fr'
      }
    },
  },
  plugins: [],
}

