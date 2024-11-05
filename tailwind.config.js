/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'floatUp 25s infinite',
        'float-slow-reverse': 'floatDown 20s infinite',
        'float-medium': 'floatDiagonal 18s infinite',
        'float-medium-reverse': 'floatDiagonalReverse 15s infinite',
        'float-fast': 'floatAround 12s infinite',
        'float-fast-reverse': 'floatAroundReverse 10s infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
          },
          '33%': { 
            transform: 'translate(5%, -15%) rotate(10deg) scale(1.1)',
          },
          '66%': { 
            transform: 'translate(-5%, 10%) rotate(-10deg) scale(0.9)',
          }
        },
        floatDown: {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
          },
          '33%': { 
            transform: 'translate(-5%, 15%) rotate(-10deg) scale(1.1)',
          },
          '66%': { 
            transform: 'translate(5%, -10%) rotate(10deg) scale(0.9)',
          }
        },
        floatDiagonal: {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
          },
          '33%': { 
            transform: 'translate(15%, 15%) rotate(15deg) scale(1.1)',
          },
          '66%': { 
            transform: 'translate(-15%, -15%) rotate(-15deg) scale(0.9)',
          }
        },
        floatDiagonalReverse: {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
          },
          '33%': { 
            transform: 'translate(-15%, 15%) rotate(-15deg) scale(1.1)',
          },
          '66%': { 
            transform: 'translate(15%, -15%) rotate(15deg) scale(0.9)',
          }
        },
        floatAround: {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
          },
          '25%': { 
            transform: 'translate(15%, -15%) rotate(15deg) scale(1.1)',
          },
          '50%': { 
            transform: 'translate(-15%, -15%) rotate(-15deg) scale(0.9)',
          },
          '75%': { 
            transform: 'translate(-15%, 15%) rotate(15deg) scale(1.1)',
          }
        },
        floatAroundReverse: {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
          },
          '25%': { 
            transform: 'translate(-15%, -15%) rotate(-15deg) scale(1.1)',
          },
          '50%': { 
            transform: 'translate(15%, -15%) rotate(15deg) scale(0.9)',
          },
          '75%': { 
            transform: 'translate(15%, 15%) rotate(-15deg) scale(1.1)',
          }
        },
      },
    },
  },
  plugins: [],
} 