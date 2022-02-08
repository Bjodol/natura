const plugin = require("tailwindcss/plugin");
const { interactionScaleUp } = require("../shared/animations");
const { focusOutline, interactive } = require("../shared/interactive");
const { spacingUtils } = require("../utilities");
const merge = require("../utilities/merge");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { spacing } = spacingUtils(theme);
    const linkBase = merge({
      textDecorationLine: "underline",
      textDecorationThickness: "3px",
      "text-decoration-color": "var(--main)",
    });

    const component = {
      ".link": merge(linkBase, interactive, interactionScaleUp, {
        display: "block",
        padding: spacing(2, 4),
      }),

      ".link-inline": merge(linkBase, interactionScaleUp, {
        "&:focus-visible": focusOutline,
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
