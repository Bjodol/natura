const plugin = require("tailwindcss/plugin");
const colorVariants = require("./shared/color-variants");
const { interactive } = require("./shared/interactive");
const { merge, getColorScheme } = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const variables = {
      ":root": {
        "--interactive-focus-width": "3px",
        "--interactive-focus-color": "blue",
      },
    };
    const colors = colorVariants(theme);
    const focusVariants = getColorScheme(
      theme("colors"),
      {
        "--interactive-focus-color": "DEFAULT",
      },
      "&."
    );
    const component = {
      ".interactive": merge(
        colors.interactive,
        interactive,
        focusVariants,
        colors.outlined
      ),
    };
    addBase(variables);
    addComponents(component);
  }
);
