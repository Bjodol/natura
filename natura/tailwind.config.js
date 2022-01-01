module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: {
        DEFAULT: "transparent",
        hover: "rgba(0, 0, 0, 0.3)",
        active: "rgba(0,0,0,0.5)",
      },
      current: { DEFAULT: "currentColor" },
      primary: {
        DEFAULT: "#919481",
        hover: { DEFAULT: "#48432e", contrast: "#cdd4dc" },
        contrast: "#060609",
      },
      secondary: {
        DEFAULT: "#485043",
        hover: "#2f3529",
        active: "#1c231b",
        contrast: "#cdd4dc",
      },
      base: {
        DEFAULT: "#888d98",
        contrast: "#060609",
        main: { DEFAULT: "#393d42", contrast: "#cdd4dc" },
        hover: { DEFAULT: "#1a1b1f", contrast: "#cdd4dc" },
        active: { DEFAULT: "#060609", contrast: "#cdd4dc" },
      },
      danger: {
        DEFAULT: "#523733",
        contrast: "#cdd4dc",
      },
      warning: {
        DEFAULT: "#b89a5e",
        contrast: "#060609",
      },
    },
  },
  plugins: [
    require("./src/btn"),
    require("./src/link"),
    require("./src/hex"),
    require("./src/interactive"),
    require("./src/typography"),
    require("./src/controls"),
  ],
};
