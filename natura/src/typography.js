const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  ({ addUtilities, addComponents, addBase, e, prefix, config, theme }) => {
    const font = {
      html: {
        fontFamily: "'Noto Sans Display', sans-serif",
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    };
    /**
     * fontVariationSettings
     * ital: 0,1
     * wdth: 62.5..100
     * wght: 100..900
     */
    const component = {
      ".title": {
        fontSize: "2.75rem",
        lineHeight: 1.5,
        fontVariationSettings: `"wght" 500`,
      },
      ".sub-title": {
        fontSize: "1.75rem",
        lineHeight: "1.75rem",
        fontWeight: "100",
        fontStyle: "italic",
        fontVariationSettings: `"wdth" 90`,
      },
      ".h1": {
        fontSize: "3rem",
        lineHeight: 1.5,
        fontVariationSettings: `"wght" 750`,
      },
      ".h2": {
        fontSize: "2.5rem",
        lineHeight: 1.5,
        fontVariationSettings: `"wght" 600, "wdth" 90`,
      },
      ".h3": {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontVariationSettings: `"wght" 500, "wdth" 90`,
      },
      ".h4": {
        fontSize: "1rem",
        lineHeight: "1.75rem",
        fontVariationSettings: `"wght" 650, "wdth" 90`,
      },
      ".label, label": {
        lineHeight: "1.25rem",
        fontVariationSettings: `"wght" 350, "wdth" 95`,
      },
      ".caption": {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontStyle: "italic",
        fontVariationSettings: `"wght" 300, "wdth" 90`,
      },
    };
    addBase(font);
    addComponents(component);
  }
);
