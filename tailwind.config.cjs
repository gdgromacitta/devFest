/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
        },
      },
    },
  },
  plugins: [],
};

