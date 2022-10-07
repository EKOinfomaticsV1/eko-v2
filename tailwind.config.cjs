/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akrobatRegular: ["Akrobat-Regular"],
        gillSans: ["Gill-Sans"],
        // akrobatSemiBold: ["Akrobat-SemiBold"],
      },
    },
  },
  plugins: [],
};
