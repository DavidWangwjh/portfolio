/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      keyframes: {
        dropIn: {
          '0%': { transform: 'translateY(-150%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        dropIn: 'dropIn 1s ease-in',
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
        light: '#f5f5f5',
        dark: '#1b1b1b',
        primary: '#b63e96',
        primaryDark: '#58e6d9',
        cursor: '#9b8d25',
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
        'maxh':{'raw': '(max-height: 1023px), (max-width:431px)'},
        'max-md':{'raw': '(max-width: 767px)'},
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  variants: {
    backdropFilter: ['responsive'], // Ensure responsiveness
  },
  plugins: [
    require('tailwindcss-filters'),
    // other plugins
  ],
};