const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { colorScheme, interactive, spacing, merge } = getUtilties(theme, {
      borderColor: "DEFAULT",
    });
    const component = {
      ".control": merge(interactive, colorScheme, {
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

      ".control-check": {
        position: "relative",
        appearance: "none",

        "&::before": {
          content: '""',
          display: "block",
          height: "24px",
          width: "24px",
          borderWidth: "2px",
          backgroundColor: "transparent",
          borderRadius: theme("borderRadius.lg"),
          borderColor: theme("colors.base.DEFAULT"),
        },

        "&:checked::before": {
          backgroundColor: theme("colors.base.DEFAULT"),
        },

        "&:checked::after": {
          content: '""',
          top: 0,
          backgroundColor: theme("colors.base.contrast"),
          display: "block",
          height: "24px",
          width: "24px",
          position: "absolute",
          clipPath: `polygon(
            20% 40%,
            40% 60%,
            80% 20%,
            90% 30%,
            40% 80%,
            10% 50%
          )`,
        },
      },
    };
    addComponents(component);
  }
);
