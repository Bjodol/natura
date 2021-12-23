const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { spacing, colorScheme, interactive } = getUtilties(theme);
    const component = {
      ".btn": {
        ...interactive,
        ...colorScheme,
        padding: spacing(4),
        transition: "all 0.2s ease-in-out",
      },
    };
    addComponents(component);
  }
);
