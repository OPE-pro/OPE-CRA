const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        ggvieMain: {
          50: "#FFEBF5",
          100: "#FFD1E8",
          200: "#FFA8D4",
          300: "#FF7ABD",
          400: "#FF4DA6",
          500: "#FF218F",
          600: "#E60073",
          700: "#AD0057",
          800: "#75003B",
          900: "#38001C",
          950: "#1F000F"
        },
        ggvieTitle:  {
          50: "#EDE3FC",
          100: "#D9C3F9",
          200: "#B58CF3",
          300: "#8E50EC",
          400: "#6918E2",
          500: "#4F12A8",
          600: "#3E0E86",
          700: "#2F0B65",
          800: "#200745",
          900: "#0F0320",
          950: "#090212"
        },
        mission1Color: 'rgb(219, 140, 223)',
        mission2Color: 'rgb(140, 219, 223)',
        mission3Color: 'rgb(223, 140, 140)',
        holidayColor: 'rgb(140, 223, 140)',

      },
    },
  },
  plugins: [],
};
