const focusRing = {
  boxShadow: `0 0 0 0px var(--interactive-focus-color, blue),
    0 0 0 calc(3px + 0px) var(--interactive-focus-color, blue), 
    0 0 var(--interactive-focus-color, blue)`,
  outline: "none",
};

module.exports = focusRing;
