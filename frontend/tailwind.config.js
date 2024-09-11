/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        'custom': '0px 4px 4px rgba(0, 99, 167, 0.25)',
      },
      fontSize: {
        'title-1': '40px',
        'title-2': '36px',
        'title-3': '32px',
        'title-4': '28px',
        'Base-1': '25px',
        'Base-2': '24px',
        'Base-3': '20px',
        'Base-4': '16px',
      },
    },
  },
  plugins: [daisyui], 
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0063A7",
          secondary: "#00d100",
          accent: "#191919",
          neutral: "#CFE3EE",
          "base-100": "#CDE1EF",
          "base-200": "#EAF3F9",
          "base-300": "#ffffff",
          info: "#00e1ff",
          success: "#4DAF6E",
          warning: "#ff942e",
          error: "#E73D1C",
        },
      },
    ],
  },
};
