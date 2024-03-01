/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffbe98',
        'primary-light': '#feece2',
        'primary-dark': '#a52a2a',
        'secondary': '#f5f5dc',
      },
      backgroundImage: {
        'hero': "url(https://images.bridestory.com/image/upload/assets/Cake-Favorites-5-Jen_Huang-000485-R1-021-9_rs7kzf.jpg)",
      }
    },
  },
  plugins: [],
}