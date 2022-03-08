module.exports = {
   content: [
      "./src/**/*.{html,js}",
      "./dist/**/*.{html,js}",
      "./**/*.{html,js}",
   ],
   theme: {
      screens: {
         md: "768px",
         lg: "992px",
         xl: "1200px",
         "2xl": "1400px",
      },
      container: {
         center: true,
      },
      extend: {
         fontFamily: {
            sans: ["Inter", "sans-serif"],
            material: ["Material Icons Outlined"],
         },
         keyframes: {
            zoom: {
               "0%": {
                  transform: "scale(1) rotate(0deg)",
               },
               "100%": {
                  transform: "scale(1.1) rotate(-2deg)",
               },
            },
         },
         animation: {
            zoom: "zoom 4s infinite alternate",
         },
      },
   },
   plugins: [],
};
