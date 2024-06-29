/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6d00ff",
          "secondary": "#f90000",
          "accent": "#003fff",
          "neutral": "#0d0d0d",
          "base-100": "#26262b",
          "info": "#00ceff",
          "success": "#00c161",
          "warning": "#ff9400",
          "error": "#df0034",
        },
      },
    ],
  },
}
