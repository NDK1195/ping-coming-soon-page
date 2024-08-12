/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "0px 0px 7px 3px rgba(0, 0, 0, 0.00)",
        button: "0px 5px 10px 2px rgba(76, 123, 243, 0.23)",
      },
      colors: {
        blue: "hsl(223, 87%, 63%)",
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",
        gray: "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
