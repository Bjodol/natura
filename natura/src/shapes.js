const plugin = require("tailwindcss/plugin");
const { transition } = require("./shared/animations");
const { hex, tile } = require("./shared/clip-paths");
const colorVariants = require("./shared/color-variants");
const { spacingUtils, merge } = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const { setSpacingSizes } = spacingUtils(theme);
    const colors = colorVariants(theme);

    const base = {
      ":root": {
        "--shape-size": "104px",
        "--leaf-corner": theme("borderRadius.lg"),
        "--tile-corners": "calc(var(--shape-size) / 4)",
      },
    };

    const component = {
      ".square": merge(colors.outlined, {
        display: "block",
        color: "var(--color)",
        backgroundColor: "var(--main)",
        width: "var(--shape-size)",
        height: "var(--shape-size)",
      }),
      ".leaf": merge(colors.outlined, {
        color: "var(--color)",
        backgroundColor: "var(--main)",
        borderRadius: `0 var(--leaf-corner) 0 var(--leaf-corner)`,
        "&-right": {
          borderRadius: `var(--leaf-corner) 0 var(--leaf-corner) 0`,
        },
      }),
      ".hex, .tile": merge(setSpacingSizes("--shape-size"), {
        transition,
        position: "relative",
        color: "var(--color)",
        backgroundColor: "var(--main)",

        "&:before": {
          position: "absolute",
          content: "''",
          zIndex: -1,
          display: "block",
          backgroundColor: "var(--main)",
          top: "var(--interactive-focus-width)",
          left: "var(--interactive-focus-width)",
          width: "calc(100% - var(--interactive-focus-width) * 2)",
          height: "calc(100% - var(--interactive-focus-width) * 2)",
          transition,
        },

        "&:focus-visible": {
          outline: "none",
          backgroundColor: "var(--interactive-focus-color)",
        },
      }),

      ".hex": {
        width: "var(--shape-size)",
        height: "calc(var(--shape-size)*1.1547)",
        fontSize: "initial",
        clipPath: hex,
        "&:before": {
          clipPath: hex,
        },
        "&.wrappable": {
          shapeOutside: hex,
        },
      },
      ".tile": {
        width: "var(--shape-size)",
        height: "var(--shape-size)",
        clipPath: tile,
        "&:before": {
          clipPath: tile,
        },
        "&.wrappable": {
          shapeOutside: tile,
        },
      },
    };
    addBase(base);
    addComponents(component);
  }
);
