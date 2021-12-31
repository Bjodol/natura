const plugin = require("tailwindcss/plugin");
const getUtilties = require("./utilities");

module.exports = plugin(
  ({ addUtilities, addComponents, e, prefix, config, theme }) => {
    const { spacing, colorScheme, interactive, animations, merge } =
      getUtilties(theme);
    const component = {
      ".btn": merge(
        animations["interaction-scale-up"],
        interactive,
        colorScheme,
        {
          padding: spacing(4),
          "--btn-corner": "16px",
          "--btn-chip": "calc(var(--btn-corner) / 2)",
          "--btn-clip-offset": "4px",
          clipPath: `polygon(
          var(--btn-corner) 0,
          50% 0,
          50% 0,
          calc(100% - var(--btn-corner)) 0,
          100% var(--btn-corner),
          100% 50%,
          100% 50%,
          100% calc(100% - var(--btn-corner)),
          calc(100% - var(--btn-corner)) 100%, 
          50% 100%,
          50% 100%,
          var(--btn-corner) 100%,
          0% calc(100% - var(--btn-corner)),
          0% 50%,
          0% 50%,
          0 var(--btn-corner)
        )`,
          "-webkit-font-smoothing": "antialiased",
          "&:hover, &:focus": {
            clipPath: `polygon(
            calc(50% - var(--btn-chip)) calc(var(--btn-clip-offset) * -1),
            50% var(--btn-chip),
            calc(50% + var(--btn-chip)) calc(var(--btn-clip-offset) * -1),
            calc(100% + var(--btn-clip-offset)) calc(var(--btn-clip-offset) * -1),
            calc(100% + var(--btn-clip-offset)) calc(50% - var(--btn-chip)),
            calc(100% - var(--btn-chip)) 50%, 
            calc(100% + var(--btn-clip-offset)) calc(50% + var(--btn-chip)),
            calc(100% + var(--btn-clip-offset)) calc(100% + var(--btn-clip-offset)),
            calc(50% + var(--btn-chip)) calc(100% + var(--btn-clip-offset)),
            50% calc(100% - var(--btn-chip)),
            calc(50% - var(--btn-chip)) calc(100% + var(--btn-clip-offset)),
            calc(var(--btn-clip-offset) * -1) calc(100% + var(--btn-clip-offset)),
            calc(var(--btn-clip-offset) * -1) calc(50% + var(--btn-chip)),
            var(--btn-chip) 50%,
            calc(var(--btn-clip-offset) * -1) calc(50% - var(--btn-chip)),
            calc(var(--btn-clip-offset) * -1) calc(var(--btn-clip-offset) * -1)
          )`,
          },
        }
      ),
    };
    addComponents(component);
  }
);
