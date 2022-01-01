const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");
const { tile } = require("./shared/clip-paths");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const {
      spacing,
      colorScheme,
      animations,
      interactive,
      merge,
      setSpacingSizes,
    } = getUtilties(theme);
    const variables = {
      ":root": {
        "--tile-size": "128px",
        "--tile-corners": "calc(var(--tile-size) / 4)",
      },
    };

    const component = {
      ".tile": merge(colorScheme, interactive, setSpacingSizes("--tile-size"), {
        width: "var(--tile-size)",
        height: "var(--tile-size)",
        clipPath: tile,
      }),
    };
    addBase(variables);
    addComponents(component);
  }
);
