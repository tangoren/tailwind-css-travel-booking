module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      screens: {
         sm: "576px",
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
         backgroundImage: {
            "tour-image":
               "url('https://cdn.tourradar.com/s3/tour/1500x800/20849_5dfb59df282fd.jpg')",
         },
      },
   },
   plugins: [],
};
