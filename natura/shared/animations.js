const transition = "all .12s ease-in-out";

const interactionScaleUp = {
  transition,
  "&:hover, &:focus": {
    transform: "scale(1.1)",
  },
};

module.exports = {
  interactionScaleUp,
  transition,
};
