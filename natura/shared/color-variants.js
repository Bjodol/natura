const { getColorScheme, spacingUtils } = require("../utilities");

module.exports = (theme, prefix = "&.") => {
  const { spacing } = spacingUtils(theme);
  return {
    outlined: {
      "&.outlined, .outlined": {
        "--main": "transparent",
        "--color": "inherit",
        borderWidth: spacing("1"),
        borderStyle: "solid",
        ...getColorScheme(
          theme("colors"),
          {
            borderColor: "DEFAULT",
          },
          prefix
        ),
      },
    },
    contained: getColorScheme(
      theme("colors"),
      {
        "--main": "DEFAULT",
        "--color": "contrast",
      },
      prefix
    ),
    interactive: getColorScheme(
      theme("colors"),
      {
        "--main": "DEFAULT",
        "--color": "contrast",
        "&:hover, &:focus-visible": "hover",
        "&:focus": "focus",
        "&.active": "active",
      },
      prefix
    ),
  };
};
