const config = require("./tailwind.config");
const getSchemeOld = require("./src/utilities/colors");

const x = getSchemeOld(config.theme.colors, {
  "background-color": "DEFAULT",
  color: "contrast",
  "&:hover, &:focus-visible": "hover",
  "&:focus": "focus",
  "&.active": "active",
});
console.log(JSON.stringify(x, null, 2));
