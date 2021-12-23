const getBreakpoints = (theme) =>
  Object.entries(theme("screens")).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: `@media (min-width: ${value})`,
    }),
    {}
  );

const getSpacing =
  (theme) =>
  (...args) =>
    args
      .reduce((acc, value) => ` ${acc} ${theme(`spacing.${value}`)}`, "")
      .trim();

const getColorScheme = (
  theme,
  { defaultKey, contrastKey, hoverKey, focusKey, activeKey } = {
    defaultKey: "DEFAULT",
    contrastKey: "contrast",
    hoverKey: "hover",
    focusKey: "focus",
    activeKey: "active",
  }
) => {
  const getColor = (color, type = "") => {
    if (typeof color === "string") return { [type]: color };
    return Object.entries(color).reduce((acc, [key, value]) => {
      if (key.includes(contrastKey))
        return { ...acc, ...getColor(value, "color") };
      if (key.includes(defaultKey))
        return { ...acc, ...getColor(value, "backgroundColor") };
      if (key.includes(hoverKey))
        return { ...acc, [`&:hover`]: getColor(value, "backgroundColor") };
      if (key.includes(focusKey))
        return { ...acc, [`&:focus`]: getColor(value, "backgroundColor") };
      if (key.includes(activeKey))
        return { ...acc, [`&:active`]: getColor(value, "backgroundColor") };
      return { ...acc, [`&-${key}`]: getColor(value, type) };
    }, {});
  };
  const colors = theme("colors");
  return getColor(colors);
};

const interactive = {
  minHeight: "44px",
  minWidth: "44px",
  '&:focus-visible': {
    boxShadow: "0 0 0 0px blue, 0 0 0 calc(3px + 0px) blue, 0 0 blue", 
    outline: "none"
  }
};

const getUtilties = (theme, config) => ({
  spacing: getSpacing(theme),
  breakpoints: getBreakpoints(theme),
  colorScheme: getColorScheme(theme, config),
  interactive,
});

module.exports = getUtilties;
