module.exports = {
  content: [],
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#FDCB58",
        secondary: "#734CFC",
        terciary: "#FCEE65",
        info: "#1E3CFA",
        danger: "#FC0000",
        success: "#00CE46",
        "oscure-800": "#171208",
        "oscure-600": "#261E0D",
        "oscure-400": "#3D3015",
        "oscure-200": "#4D3E1F",
        "oscure-100": "#5C4B29",
        "ligth-800": "#FFFEFC",
        "ligth-600": "#FCF9F0",
        "ligth-400": "#FCF7E8",
        "ligth-200": "#FAF2DC",
        "ligth-100": "#F7EED2",
        twitter: "#12AAFF",
        ig: "#FA17AD",
        "surface-ligth": "#F3F3F1",
      },
      fontFamily: {
        mohave: ["Mohave", "sans-serif"],
        exo: ["Exo", "sans-serif"],
      },
      fontSize: {
        "small-size": "0.625rem",
        "h1-size": "2rem",
      },
      width: {
        92: "5.75rem",
      },
    },
  },
  plugins: [],
};
