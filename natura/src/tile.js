const plugin = require("tailwindcss/plugin");
const { tile } = require("./shared/clip-paths");
const { getColorScheme, spacingUtils } = require("./utilities");
const { interactive } = require("./shared");
const merge = require("./utilities/merge");
const colorVariants = require("./shared/color-variants");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const { contained } = colorVariants(theme);

    const { setSpacingSizes } = spacingUtils(theme);

    const variables = {
      ":root": {
        "--tile-size": "128px",
        "--tile-corners": "calc(var(--tile-size) / 4)",
      },
    };

    const component = {
      ".tile": merge(contained, interactive, setSpacingSizes("--tile-size"), {
        width: "var(--tile-size)",
        height: "var(--tile-size)",
        clipPath: tile,
      }),
    };
    addBase(variables);
    addComponents(component);
  }
);
