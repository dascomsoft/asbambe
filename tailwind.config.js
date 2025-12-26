/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bambe': {
          50: '#f0f9f0',
          100: '#dbf0db',
          200: '#b9e1b9',
          300: '#8acc8a',
          400: '#5bb15b',
          500: '#3d9c3d',
          600: '#2d7d2d',
          700: '#256325',
          800: '#205020',
          900: '#1b421b',
          950: '#0e240e',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}