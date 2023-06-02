/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      brightness: {
        15: ".15",
      },
      fontFamily: {
        dmsans: "DM Sans, ui-sans-serif, system-ui",
      },
      screens: {
        desktop: "1024px",
        // => @media (min-width: 1024) { ... }

        tablet: "768px",
        // => @media (min-width: 768) { ... }

        mobile: "320px",
        // => @media (min-width: 320) { ... }
      },
    },
  },
  plugins: [],
};
