/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'ping-reverse': {
          '0%' : { transform: 'scale(2);', opacity: 0},
          '25%, 100%': { transform: 'scale(1)', opacity: 1}
        },
        'ping-small': {
          '25%, 100%': { transform: 'scale(1)', opacity: 1},
          '0%' : { transform: 'scale(1.75);', opacity: 0},
        },
        'scroll': {
          '0%, 25%': { transform: 'translateX(0)'},
          '99%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(-100%)'}
        },
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'ping-reverse-fast': 'ping-reverse .5s linear',
        // 'ping-fast': 'ping-small 0.5s linear'
        'scroll': 'scroll 15s linear infinite',
      }
    },
  },
  plugins: [],
};
