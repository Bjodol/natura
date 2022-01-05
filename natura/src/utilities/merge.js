const { merge } = require("lodash");

module.exports = (...args) => merge({}, ...args);
