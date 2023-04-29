/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "image-back": "url('../public/galaxy.jpg')",
      "image-detail": "url('../public/detail.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
