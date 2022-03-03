module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      container: {
         center: true,
      },
      extend: {
         fontFamily: {
            sans: ["Inter", "sans-serif"],
         },
      },
   },
   plugins: [],
};
