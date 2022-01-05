const plugin = require("tailwindcss/plugin");
const interactive = require("./shared/interactive");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
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
