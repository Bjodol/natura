const plugin = require("tailwindcss/plugin");
const { interactionScaleUp } = require("./shared/animations");
const colorVariants = require("./shared/color-variants");
const { interactive } = require("./shared/interactive");
const { spacingUtils, merge } = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const colors = colorVariants(theme);
    const { spacing } = spacingUtils(theme);

    const component = {
      ".btn": merge(
        interactionScaleUp,
        colors.interactive,
        colors.outlined,
        interactive,
        {
          padding: spacing(4),
          backgroundColor: "var(--main)",
          color: "var(--color)",

          "&.tile, &.hex": {
            "--shape-size": "fit-content",
            "--tile-corners": "16px",
            "--interactive-focus-width": "2px",
          },
        }
      ),
    };
    addComponents(component);
  }
);
