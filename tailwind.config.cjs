/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7751f8",
          purple: "#7751f8",
        },
        secondary: {
          purple: "#9333ea",
          "purple-dark": "#4c1d95",
        },
        accent: {
          cyan: "#06b6d4",
          "cyan-dark": "#0891b2",
        },
        game: {
          correct: "#22C55E",
          incorrect: "#EF4444",
          score: "#D4AF37",
        },
      },
    },
  },
  plugins: [],
}

