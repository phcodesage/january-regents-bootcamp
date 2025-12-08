/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        navy: '#001f3f',
        'exceed-red': '#ca3433',
        'bright-red': '#ff5757',
      },
    },
  },
  plugins: [],
};
