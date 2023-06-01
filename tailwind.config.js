/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
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
        // => @media (min-width: 640px) { ... }

        tablet: "768px",
        // => @media (min-width: 1024px) { ... }

        mobile: "450px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
