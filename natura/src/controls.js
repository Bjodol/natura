const plugin = require("tailwindcss/plugin");
const { interactive, animations, focusRing } = require("./shared");
const { getColorScheme, merge, spacingUtils } = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const colorSchemeBorder = getColorScheme(theme("colors"), {
      borderColor: "DEFAULT",
    });
    const colorSchemeBefore = getColorScheme(theme("colors"), {
      "background-color": "DEFAULT",
      color: "contrast",
      "&:hover, &:focus-visible": "hover",
      "&:focus": "focus",
      "&.active": "active",
    });
    const colorSchemeAfter = getColorScheme(theme("colors"), {
      "background-color": "contrast",
      color: "DEFAULT",
      borderColor: "DEFAULT",
      "&:hover, &:focus-visible": "hover",
      "&:focus": "focus",
      "&.active": "active",
    });
    const { spacing } = spacingUtils(theme);

    const component = {
      ".control": merge(interactive, colorSchemeBorder, {
        marginTop: spacing(1),
        borderWidth: "0.25rem",
        padding: spacing(2, 4),
        borderRadius: `0 ${theme("borderRadius.lg")} 0 ${theme(
          "borderRadius.lg"
        )}`,
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
          backgroundColor: theme("colors.base.main.contrast"),
          cursor: "pointer",
          clipPath: `polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)`,
        },
      }),

      ".control-check": merge(animations.interactionScaleUp, {
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
          borderRadius: `${theme("borderRadius.lg")} 0 ${theme(
            "borderRadius.lg"
          )} 0`,
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

      ".control-radio": merge(animations.interactionScaleUp, {
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
