const focusRing = require("./focusRing");

const interactive = {
  minHeight: "44px",
  minWidth: "44px",
  "&:focus-visible": focusRing,
};

module.exports = interactive;
