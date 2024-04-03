/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      'xs': '320px', // Custom breakpoint for extra small screens paste in the screens object this will overrid the default break and it should only be written here only in the theme object
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
          "11xl":['25rem', { lineHeight: '2' }],
        // Add more custom font sizes as needed
      },
      borderWidth: {
       25:"25px"
        
      },
      colors: {
        customBorder: {
          "red":"#33B3FF"
        },
      }
      
    },
  },
  plugins: [],
}
