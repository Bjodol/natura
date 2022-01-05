const colors = require("./colors");
const breakpoints = require("./breakpoints");
const merge = require("./merge");
const spacingUtils = require("./spacing");

module.exports = {
  ...colors,
  ...breakpoints,
  spacingUtils,
  merge,
};
