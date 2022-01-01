const { merge } = require("lodash");
const { focusRing } = require("./shared/focus");

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
  {
    backgroundKey,
    colorKey,
    textDecorationColor,
    hoverKey,
    borderColor,
    focusKey,
    activeKey,
  } = {
    backgroundKey: "DEFAULT",
    colorKey: "contrast",
    textDecorationColor: "active",
    borderColor: "DEFAULT",
    hoverKey: "hover",
    focusKey: "focus",
    activeKey: "active",
  }
) => {
  const getColor = (color, type = "") => {
    if (typeof color === "string") return { [type]: color };
    return Object.entries(color).reduce((acc, [key, value]) => {
      if (key.includes(colorKey))
        return { ...acc, ...getColor(value, "color") };
      if (key.includes(backgroundKey))
        return { ...acc, ...getColor(value, "backgroundColor") };
      if (key.includes(textDecorationColor))
        return { ...acc, ...getColor(value, "textDecorationColor") };
      if (key.includes(hoverKey))
        return {
          ...acc,
          [`&:hover, &:focus-visible`]: getColor(value, "backgroundColor"),
        };
      if (key.includes(focusKey))
        return {
          ...acc,
          [`&:focus, &:focus-visible`]: getColor(value, "backgroundColor"),
        };
      if (key.includes(borderColor))
        return {
          ...acc,
          ...getColor(value, "border-color"),
        };
      if (key.includes(activeKey))
        return { ...acc, [`&:active`]: getColor(value, "backgroundColor") };
      return { ...acc, [`&-${key}`]: getColor(value, type) };
    }, {});
  };
  const colors = theme("colors");
  return getColor(colors);
};

const getSetSpacingSizes = (theme) => (sizeKey) => {
  const spacing = theme("spacing");

  const sizing = Object.entries(spacing).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [`&-${key}`]: {
        [sizeKey]: val,
      },
    }),
    {}
  );
  return sizing;
};

const interactive = {
  minHeight: "44px",
  minWidth: "44px",
  "&:focus-visible": focusRing,
};

const animations = {
  "interaction-scale-up": {
    transition: "all .12s ease-in-out",
    "&:hover, &:focus": {
      transform: "scale(1.1)",
    },
  },
};

const getUtilties = (theme, config) => ({
  spacing: getSpacing(theme),
  breakpoints: getBreakpoints(theme),
  colorScheme: getColorScheme(theme, config),
  setSpacingSizes: getSetSpacingSizes(theme),
  interactive,
  animations,
  focusRing,
  merge: (...args) => merge({}, ...args),
});

module.exports = getUtilties;
