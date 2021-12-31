const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

const clipPath = `polygon(
    calc(0% + var(--hex-clip-offset)) 25%,
    calc(0% + var(--hex-clip-offset)) 75%,
    50% calc(100% - var(--hex-clip-offset)),
    calc(100% - var(--hex-clip-offset)) 75%,
    calc(100% - var(--hex-clip-offset)) 25%,
    50% calc(0% + var(--hex-clip-offset))
    )`;

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const { spacing, colorScheme, animations, merge, setSpacingSizes } =
      getUtilties(theme);
    const variables = {
      ":root": {
        "--hex-size": "104px",
        "--hex-margin": "4px",
        "--hex-form":
          "calc(1.732 * var(--hex-size) + 4 * var(--hex-margin)  - 1px)",
        "--hex-clip-offset": "0px",
      },
    };

    const component = {
      ".hex-container": {
        display: "flex",
      },
      ".hex-grid": merge(setSpacingSizes("--hex-size"), {
        "--hex-form":
          "calc(1.732 * var(--hex-size) + 4 * var(--hex-margin)  - 1px)",
        fontSize: 0 /*disable white space between inline block element */,
        paddingBottom: "calc(var(--hex-margin) - var(--hex-size)*0.2885 * -1)",

        "&-gap": setSpacingSizes("--hex-margin"),
        "&::before": {
          content: "''",
          width: "calc(var(--hex-size)/2 + var(--hex-margin))",
          float: "left",
          height: "100%",
          shapeOutside: `repeating-linear-gradient(     
            #0000 0 calc(var(--hex-form) - 3px),      
            #000  0 var(--hex-form))`,
        },
        ".hex": {
          display: "inline-flex",
          margin: "var(--hex-margin)",
          marginBottom: "calc(var(--hex-margin) - var(--hex-size)*0.2885)",
        },
      }),
      ".hex": merge(colorScheme, setSpacingSizes("--hex-size"), {
        width: "var(--hex-size)",
        height: "calc(var(--hex-size)*1.1547)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "initial",
        whiteSpace: "nowrap",
        clipPath,

        "&.interactive": merge(animations["interaction-scale-up"], {
          "&:focus-visible": {
            "--hex-clip-offset": "calc(var(--hex-size) * -4)",
            zIndex: 10,
            borderRadius: "9999px",
            clipPath,
          },
        }),
      }),
    };
    addBase(variables);
    addComponents(component);
  }
);
