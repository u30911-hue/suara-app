/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { suara: { teal: '#147D69', deep: '#104F43', mint: '#E1F4ED', bg: '#F4F8F6' } }, boxShadow: { soft: '0 8px 28px rgba(16,79,67,.07)' } } },
  plugins: []
}