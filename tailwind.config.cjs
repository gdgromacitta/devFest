/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['"Google Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        'google-sans-display': ['"Google Sans Display"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        devfest: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
          green: '#34A853',
          lightBlue: '#C4E8F3',
        },
        google: {
          yellow: '#F9AB00',
          green: '#34A853',
          red: '#EA4335',
          blue: '#4285F4',
          grey: {
            50: '#F8F9FA',
            100: '#F1F3F4',
            200: '#E8EAED',
            300: '#DADCE0',
            400: '#BDC1C6',
            500: '#9AA0A6',
            600: '#80868B',
            700: '#5F6368',
            800: '#3C4043',
            900: '#202124',
          }
        },
      },
      boxShadow: {
        'material-1': '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
        'material-2': '0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)',
        'material-3': '0 4px 8px 3px rgba(60,64,67,.15), 0 1px 3px rgba(60,64,67,.3)',
        'material-4': '0 6px 10px 4px rgba(60,64,67,.15), 0 2px 3px rgba(60,64,67,.3)',
      },
      borderRadius: {
        'google': '8px',
        'google-lg': '16px',
        'google-xl': '24px',
      }
    },
  },
  plugins: [],
};


