/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        inputBg: 'rgba(227, 235, 241, 0.3)',
        rangeBg: 'rgba(239, 36, 36, 1)',
        textColor: 'rgba(0, 0, 0, 1)'
      },
      fontFamily: { 
        textFamily: ['Inter', 'sans-serif'],
      },
      backgroundColor : {
        bgColor: 'rgba(246, 246, 246, 1)',
        buttonColor: 'rgba(239, 36, 36, 1)',
        blackButton: 'rgba(0, 0, 0, 0.6)',
        bgWhite: 'rgba(255, 255, 255, 1)',
        bgHobby: 'rgba(188, 27, 27, 1)',
        bgBowl: 'rgba(246, 225, 35, 1)',
        bgDance: 'rgba(151, 71, 255, 1)',
        bgHouse: 'rgba(45, 233, 245, 1)',
        bgTravel: 'rgba(27, 52, 188, 1)',
        bgDraw: 'rgba(246, 47, 214, 1)',
        bgHistory: 'rgba(239, 36, 36, 1)',
        bgWood: 'rgba(19, 226, 52, 1)',
        bgCamera: 'rgba(246, 225, 35, 1)',
        bgP: 'rgba(12, 130, 123, 1)',
        bgNeedle: 'rgba(46, 39, 92, 1)',
        bgDkYellow: 'rgba(206, 187, 15, 1)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
