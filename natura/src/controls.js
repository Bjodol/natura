const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const {
      colorScheme: colorSchemeBorder,
      interactive,
      spacing,
      merge,
      animations,
      focusRing,
    } = getUtilties(theme, {
      borderColor: "DEFAULT",
    });
    const { colorScheme: colorSchemeBefore } = getUtilties(theme);
    const { colorScheme: colorSchemeAfter } = getUtilties(theme, {
      backgroundKey: "contrast",
      colorKey: "DEFAULT",
      textDecorationColor: "active",
      borderColor: "DEFAULT",
      hoverKey: "hover",
      focusKey: "focus",
      activeKey: "active",
    });
    const component = {
      ".control": merge(interactive, colorSchemeBorder, {
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

      ".control-check": merge(animations["interaction-scale-up"], {
        position: "relative",
        appearance: "none",
        height: "fit-content",

        "&::before": {
          content: '""',
          display: "block",
          height: "24px",
          width: "24px",
          borderWidth: "3px",
          backgroundColor: "transparent",
          borderColor: theme("colors.base.DEFAULT"),
          borderRadius: theme("borderRadius.lg"),
        },

        ...Object.entries(colorSchemeBorder).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key}::before`]: value,
          }),
          {}
        ),

        "&:checked::before": {
          backgroundColor: theme("colors.base.DEFAULT"),
        },

        ...Object.entries(colorSchemeBefore).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key}:checked::before`]: value,
          }),
          {}
        ),

        "&:focus": {
          outline: "none",
          "&::before": focusRing,
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

        ...Object.entries(colorSchemeAfter).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key}:checked::after`]: value,
          }),
          {}
        ),
      }),

      ".control-radio": merge(animations["interaction-scale-up"], {
        position: "relative",
        appearance: "none",

        "&:focus": {
          outline: "none",
          "&::before": focusRing,
        },

        "&::before": {
          content: '""',
          display: "block",
          height: "24px",
          width: "24px",
          borderWidth: "3px",
          backgroundColor: "transparent",
          borderRadius: theme("borderRadius.full"),
          borderColor: theme("colors.base.DEFAULT"),
        },

        ...Object.entries(colorSchemeBorder).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key}::before`]: value,
          }),
          {}
        ),

        "&:checked::before": {
          backgroundColor: theme("colors.base.DEFAULT"),
        },

        ...Object.entries(colorSchemeBefore).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key}:checked::before`]: value,
          }),
          {}
        ),

        "&:checked::after": {
          content: '""',
          top: 0,
          backgroundColor: theme("colors.base.contrast"),
          display: "block",
          height: "24px",
          width: "24px",
          position: "absolute",
          clipPath: `polygon(
            20% 45%,
            40% 65%,
            80% 25%,
            90% 35%,
            40% 85%,
            10% 55%
          )`,
        },
        ...Object.entries(colorSchemeAfter).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key}:checked::after`]: value,
          }),
          {}
        ),
      }),
    };
    addComponents(component);
  }
);
