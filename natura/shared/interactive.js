const focusOutline = {
  boxShadow: `0 0 0 0px var(--interactive-focus-color, blue),
0 0 0 calc(3px + 0px) var(--interactive-focus-color, blue), 
0 0 var(--interactive-focus-color, blue)`,
  outline: "none",
};

const interactive = {
  minHeight: "44px",
  minWidth: "44px",
  cursor: "pointer",
  "&:focus-visible": focusOutline,
};

module.exports = { interactive, focusOutline };
