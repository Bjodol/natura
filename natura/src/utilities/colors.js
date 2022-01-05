const getColorScheme = (theme, schemeConfig, prefix = "&-") => {
  const schemeAttributeMap = Object.entries(schemeConfig);
  const [fallbackAttr] = schemeAttributeMap.find(
    ([_, value]) => value === "DEFAULT"
  );
  const reduceScheme = (scheme, type = "") => {
    if (typeof scheme === "string") return { [type]: scheme };
    return Object.entries(scheme).reduce((acc, [key, value]) => {
      const stateMatches = schemeAttributeMap.filter(
        ([attr, val]) => attr.includes("&") && key.includes(val)
      );
      if (stateMatches.length > 0)
        return {
          ...acc,
          ...stateMatches.reduce((a, [attribute]) => {
            return {
              ...a,
              [attribute]: reduceScheme(value, fallbackAttr),
            };
          }, {}),
        };

      const matches = schemeAttributeMap.filter(([_, val]) =>
        key.includes(val)
      );
      if (matches.length > 0)
        return {
          ...acc,
          ...matches.reduce(
            (a, [attribute]) => ({
              ...a,
              ...reduceScheme(value, attribute),
            }),
            {}
          ),
        };

      return {
        ...acc,
        [`${prefix}${key}`]: reduceScheme(value, type),
      };
    }, {});
  };
  return reduceScheme(theme);
};

module.exports = { getColorScheme };
