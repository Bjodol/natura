const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { colorScheme, interactive, spacing, merge } = getUtilties(theme, {
      borderColor: "DEFAULT",
    });
    // throw new Error(JSON.stringify(colorScheme, null, 2));
    const component = {
      [`.control`]: {
        ...Object.entries(colorScheme).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key} > input, ${key} > select, ${key} > textarea`]: value,
          }),
          {}
        ),
      },
      [`.control > input,
      .control > select,
      .control > textarea`]: merge(interactive, {
        marginTop: spacing(1),
        borderWidth: "0.25rem",
        padding: spacing(2, 4),
        borderRadius: theme("borderRadius.lg"),
        backgroundColor: theme("colors.base.main.DEFAULT"),
        color: theme("colors.base.main.contrast"),
        fontVariationSettings: "normal",
        fontSize: "initial",

        "&:disabled": {
          backgroundColor: theme("colors.base.hover.DEFAULT"),
          cursor: "not-allowed",
        },

        '&[type="checkbox"]': {
          backgroundColor: "#f0f",
        },

        "&::-webkit-search-cancel-button": {
          "-webkit-appearance": "none",
          right: "20px",
          height: "20px",
          width: "20px",
          borderRadius: "10px",
          backgroundColor: theme("colors.base.main.contrast"),
          cursor: "pointer",
          clipPath: `polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)`,
        },
      }),
    };
    addComponents(component);
  }
);
