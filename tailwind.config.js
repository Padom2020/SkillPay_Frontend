/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: '#020648',
            orange: '#F24726',
            gray: 'rgba(242, 243, 246, 0.5)',
            'gray-pagination': 'rgba(2, 6, 72, 0.4)',
         },
         zIndex: {
            60: '60',
            70: '70',
            80: '80',
            90: '90',
            100: '100',
         },
         transitionDuration: {
            400: '400ms',
            600: '600ms',
            800: '800ms',
            900: '900ms',
            1100: '1100ms',
            1200: '1200ms',
            1300: '1300ms',
            1400: '1400ms',
            1500: '1500ms',
            1600: '1600ms',
            1700: '1700ms',
            1800: '1800ms',
            1900: '1900ms',
            2000: '2000ms',
         },
      },
   },
   plugins: [],
};
