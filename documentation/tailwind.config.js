module.exports = {
  presets: [
    process.env.NODE_ENV === "development"
      ? require("../natura/tailwind.config.js")
      : require("@bjodol/natura/tailwind.config.js"),
  ],
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
