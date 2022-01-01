const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const { colorScheme, interactive, spacing } = getUtilties(theme, {
      textDecorationColor: "DEFAULT",
    });
    const font = {
      html: {
        fontFamily: "'Noto Sans Display', sans-serif",
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    };
    const component = {
      ".title, .h1": {
        fontSize: "3.75rem",
        lineHeight: 1,
      },
      ".sub-title": {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: "100",
        fontStyle: "italic",
        fontVariationSettings: `"wdth" 100`,
      },
      ".h2": {
        fontSize: "3rem",
        lineHeight: 1,
      },
      ".h3": {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      ".h4": {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      ".label": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        wght: "900",
      },
      ".caption": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
    };
    addBase(font);
    addComponents(component);
  }
);
