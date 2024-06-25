/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ".src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Customize your primary color
        secondary: '#9333EA', // Customize your secondary color
      },
      spacing: {
        '128': '32rem', // Custom spacing scale
      },
      borderRadius: {
        '4xl': '2rem', // Custom border radius
      },
    },
  },
  plugins: [],
};
