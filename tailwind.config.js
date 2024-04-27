/** @type {import('tailwindcss').Config} */
export default {
  content:
  [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stocks1': "url('./images/stock-market-forex-trading-graph_73426-190.avif')",
        'stocks2': "url('./images/rm373batch4-07.jpg')",
      },
    },
  },
  plugins: [],
}

