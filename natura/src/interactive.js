const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { spacing, colorScheme, interactive } = getUtilties(theme);
    const component = {
      ".interactive": interactive,
    };
    addComponents(component);
  }
);
