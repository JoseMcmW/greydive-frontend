/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'gray-dark': '#555454',
      'gray': '#E2E2E2',
      'gray-medium': '#F0F0F0',
      'red': '#BF8383',
      'black': '#222222',
      'text': '#000000',
      'white': '#FFFFFF',
      'label': '#A6A5A5'
    },
    fontFamily: {
      title: 'Bricolage Grotesque',
      pharagrap: 'Roboto'
    },
    extend: {},
  },
  plugins: [],
}

