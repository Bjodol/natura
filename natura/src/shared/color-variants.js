const { getColorScheme } = require("../utilities");

module.exports = (theme) => ({
  contained: getColorScheme(theme("colors"), {
    "background-color": "DEFAULT",
    color: "contrast",
    "&:hover, &:focus-visible": "hover",
    "&:focus": "focus",
    "&.active": "active",
  }),
});
