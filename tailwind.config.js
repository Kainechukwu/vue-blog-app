/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        error: '#A62919',
        light: '#eeeeee',
        green: '#00bd7e'
      }
    }
  },
  plugins: []
}
