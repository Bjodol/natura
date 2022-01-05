const plugin = require("tailwindcss/plugin");
const { interactive, animations, focusRing } = require("./shared");
const { spacingUtils, getColorScheme } = require("./utilities");
const merge = require("./utilities/merge");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { spacing } = spacingUtils(theme);
    const colorScheme = getColorScheme(theme("colors"), {
      "text-decoration-color": "DEFAULT",
    });
    const linkBase = merge(colorScheme, {
      textDecorationLine: "underline",
      textDecorationThickness: "3px",
    });

    const component = {
      ".link": merge(linkBase, interactive, animations.interactionScaleUp, {
        display: "block",
        padding: spacing(2, 4),
      }),
      ".link-inline": merge(linkBase, animations.interactionScaleUp, {
        "&:focus-visible": focusRing,
      }),
      ".link-nav": merge(linkBase, interactive, {
        padding: spacing(4),
        display: "block",
        transition: "all .12s ease-in-out",

        "&:hover, &:focus, &.active": {
          background: "linear-gradient(45deg, #0007, transparent 66%)",
        },

        "&.active": {
          fontVariationSettings: `"wght" 750`,
        },
      }),
    };
    addComponents(component);
  }
);
