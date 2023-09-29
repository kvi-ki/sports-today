/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx,html}',
    './src/components/*.{js,jsx,ts,tsx,html}',
    './src/*.{js,jsx,ts,tsx,html}',
    './src/**/*.{js,jsx,ts,tsx,html}',
    './index.html',
    './public/index.html'
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
