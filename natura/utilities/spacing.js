const getSpacing =
  (theme) =>
  (...args) =>
    args
      .reduce((acc, value) => ` ${acc} ${theme(`spacing.${value}`)}`, "")
      .trim();

const getSetSpacingSizes = (theme) => (sizeKey) => {
  const spacing = theme("spacing");

  const sizing = Object.entries(spacing).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [`&-${key}`]: {
        [sizeKey]: val,
      },
    }),
    { [`&-fit-content`]: { [sizeKey]: "fit-content" } }
  );
  return sizing;
};

module.exports = (theme) => ({
  spacing: getSpacing(theme),
  setSpacingSizes: getSetSpacingSizes(theme),
});
