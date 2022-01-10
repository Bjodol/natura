const plugin = require("tailwindcss/plugin");
const colorVariants = require("./shared/color-variants");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const { contained } = colorVariants(theme, ".");
    const { outlined } = colorVariants(theme, "&.");
    const component = {
      ...contained,
      ...outlined,
    };
    addUtilities(component);
  }
);
