const getBreakpoints = (theme) =>
  Object.entries(theme("screens")).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `@media (min-width: ${value})`,
    }),
    {}
  );

module.exports = { getBreakpoints };
