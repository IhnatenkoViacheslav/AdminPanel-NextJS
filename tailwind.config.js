const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      xs: '1.1rem',
      sm: '1.21rem',
      tiny: '1.27rem',
      base: '1.46rem',
      lg: '1.64rem',
      xl: '1.825rem',
      '2xl': '2.2rem',
      '3xl': '2.7rem',
      '4xl': '3.25rem',
      '5xl': '4.3rem'
    },
    extend: {
      colors: {
        primary: '#5f3df7',
        black: '#222'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      }
    }
  },
  plugins: [
    plugin(({ addUtilities, addComponents }) => {
      addComponents({
        '.shadow-icon': {
          padding: '0.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          transition: 'box-shadow .4s ease-in-out',
          boxShadow: '0 4px 10px rgba(45, 8, 125, 0.2)',
          color: '#353538',
          borderRadius: '50%',
          backgroundColor: '#fff',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(45, 8, 125, 0.26)'
          }
        }
      }),
        addUtilities({
          '.flex-center-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          '.flex-center-center': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        })
    })
  ]
}
