const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const { spacing, colorScheme, interactive } = getUtilties(theme);
    const variables = {
      ":root": {
        "--interactive-focus-width": "3px",
        "--interactive-focus-color": "blue",
      },
    };
    const component = {
      ".interactive": interactive,
    };
    addBase(variables);
    addComponents(component);
  }
);
