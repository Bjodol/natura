const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { colorScheme, interactive, spacing, merge } = getUtilties(theme, {
      textDecorationColor: "DEFAULT",
    });
    const component = {
      ".link": merge(interactive, colorScheme, {
        display: "block",
        transition: "all .12s ease-in-out",
        textDecorationLine: "underline",
        textDecorationThickness: "3px",
        padding: spacing(2, 4),
        "-webkit-font-smoothing": "antialiased",
        "&:hover, &:focus": {
          transform: "scale(1.1)",
        },
        "&-inline": {
          padding: 0,
          minHeight: 0,
          minWidth: 0,
        },
      }),
    };
    addComponents(component);
  }
);
