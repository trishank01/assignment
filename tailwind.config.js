/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-black": "#333333",
        "light-black": "#7D7D7D",
        "brand-blue" : "#525DED",
        "brand-orange" : "#FFA500",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
   }
}