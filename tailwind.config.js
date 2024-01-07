module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  variants: {
    extend: {
      scale: ['hover'], // Enable scale on hover
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}