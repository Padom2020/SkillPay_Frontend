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
            gray: "rgba(242, 243, 246, 0.5)",
            "gray-pagination": "rgba(2, 6, 72, 0.4)",
         },
      },
   },
   plugins: [],
};
