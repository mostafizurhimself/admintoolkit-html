/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import variables from '@mertasan/tailwindcss-variables';
import typography from '@tailwindcss/typography';

// Add your custom theme colors here
export const themeColors = {
  primary: colors.violet,
  secondary: colors.gray,
  success: colors.emerald,
  warning: colors.amber,
  danger: colors.rose,
  info: colors.indigo,
  dark: colors.slate,
};

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,css,scss,js}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '1536px',
      },
    },
    extend: {
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
        DEFAULT: {
          ...themeColors,
        },
      },
      borderRadius: {
        primary: '0.4rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.700'),
            '--tw-prose-lead': theme('colors.slate.600'),
            '--tw-prose-links': theme('colors.primary.500'),
            '--tw-prose-bold': theme('colors.slate.700'),
            '--tw-prose-counters': theme('colors.slate.600'),
            '--tw-prose-bullets': theme('colors.slate.700'),
            '--tw-prose-hr': theme('colors.slate.200'),
            '--tw-prose-quotes': theme('colors.slate.600'),
            '--tw-prose-quote-borders': theme('colors.slate.200'),
            '--tw-prose-captions': theme('colors.slate.600'),
            '--tw-prose-code': theme('colors.slate.700'),
            '--tw-prose-pre-code': theme('colors.slate.200'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-th-borders': theme('colors.slate.200'),
            '--tw-prose-td-borders': theme('colors.slate.200'),
            '--tw-prose-invert-body': theme('colors.slate.200'),
            '--tw-prose-invert-headings': theme('colors.slate.200'),
            '--tw-prose-invert-lead': theme('colors.slate.300'),
            '--tw-prose-invert-links': theme('colors.primary.500'),
            '--tw-prose-invert-bold': theme('colors.slate.200'),
            '--tw-prose-invert-counters': theme('colors.slate.300'),
            '--tw-prose-invert-bullets': theme('colors.slate.200'),
            '--tw-prose-invert-hr': theme('colors.slate.600'),
            '--tw-prose-invert-quotes': theme('colors.slate.300'),
            '--tw-prose-invert-quote-borders': theme('colors.slate.600'),
            '--tw-prose-invert-captions': theme('colors.slate.300'),
            '--tw-prose-invert-code': theme('colors.slate.200'),
            '--tw-prose-invert-pre-code': theme('colors.slate.200'),
            '--tw-prose-invert-pre-bg': theme('colors.slate.900'),
            '--tw-prose-invert-th-borders': theme('colors.slate.600'),
            '--tw-prose-invert-td-borders': theme('colors.slate.600'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            table: {
              overflowX: 'auto',
            },
          },
        },
      }),
    },
  },
  plugins: [forms, variables, typography],
};
