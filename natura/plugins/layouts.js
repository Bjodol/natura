const plugin = require("tailwindcss/plugin");
const { merge, spacingUtils } = require("../utilities");
const colorVariants = require("../shared/color-variants");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const variables = {
      ":root": {
        "--shape-size": "104px",
        "--hex-grid-gap": "4px",
        "--hex-grid-size":
          "calc(1.732 * var(--shape-size) + 4 * var(--hex-grid-gap)  - 1px)",
      },
    };

    const { setSpacingSizes } = spacingUtils(theme);

    const component = {
      ".hex-container": {
        display: "flex",
      },
      ".hex-grid": merge(setSpacingSizes("--shape-size"), {
        "--hex-grid-size":
          "calc(1.732 * var(--shape-size) + 4 * var(--hex-grid-gap)  - 1px)",
        fontSize: 0 /*disable white space between inline block element */,
        paddingBottom:
          "calc(var(--hex-grid-gap) - var(--shape-size)*0.2885 * -1)",

        "&-gap": setSpacingSizes("--hex-grid-gap"),
        "&::before": {
          content: "''",
          width: "calc(var(--shape-size)/2 + var(--hex-grid-gap))",
          float: "left",
          height: "100%",
          shapeOutside: `repeating-linear-gradient(     
            #0000 0 calc(var(--hex-grid-size) - 3px),      
            #000  0 var(--hex-grid-size))`,
        },
        ".hex": {
          display: "inline-flex",
          margin: "var(--hex-grid-gap)",
          marginBottom: "calc(var(--hex-grid-gap) - var(--shape-size)*0.2885)",
        },
      }),
    };
    addBase(variables);
    addComponents(component);
  }
);
