/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        very_dark_magenta: 'hsl(300, 43%, 22%)',
        soft_pink: 'hsl(333, 80%, 67%)',
        dark_grayish_magenta: 'hsl(303, 10%, 53%)',
        light_grayish_magenta: 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}