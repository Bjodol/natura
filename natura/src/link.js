const plugin = require("tailwindcss/plugin");
const { focusRing } = require("./shared/focus");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { colorScheme, interactive, spacing, merge, animations } =
      getUtilties(theme, {
        textDecorationColor: "DEFAULT",
      });
    const linkBase = merge(colorScheme, {
      textDecorationLine: "underline",
      textDecorationThickness: "3px",
    });

    const component = {
      ".link": merge(
        linkBase,
        interactive,
        animations["interaction-scale-up"],
        {
          display: "block",
          padding: spacing(2, 4),
        }
      ),
      ".link-inline": merge(linkBase, animations["interaction-scale-up"], {
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
