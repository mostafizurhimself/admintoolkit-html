const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// Add your custom theme colors here
const themeColors = {
  primary: colors.violet,
  secondary: colors.gray,
  success: colors.emerald,
  warning: colors.amber,
  danger: colors.rose,
  info: colors.indigo,
  dark: colors.slate,
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,css,scss,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
        margin: 'margin',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'face-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 250ms ease-in-out',
        'fade-in-down': 'fade-in-down 250ms ease-in-out',
        'fade-in': 'fade-in 250ms ease-in-out',
        'fade-out': 'fade-out 250ms ease-in-out',
      },
      colors: themeColors,
      variables: {
        DEFAULT: themeColors,
      },
      borderRadius: {
        primary: '0.4rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@mertasan/tailwindcss-variables'),
    require('@tailwindcss/typography'),
  ],
};
