const hex = `polygon(
  calc(0% + var(--hex-clip-offset)) 25%,
  calc(0% + var(--hex-clip-offset)) 75%,
  50% calc(100% - var(--hex-clip-offset)),
  calc(100% - var(--hex-clip-offset)) 75%,
  calc(100% - var(--hex-clip-offset)) 25%,
  50% calc(0% + var(--hex-clip-offset))
  )`;

const tile = `polygon(
  calc(0% - var(--interactive-focus-width, 3px)) calc(var(--tile-corners) - var(--interactive-focus-width, 3px)),
  calc(var(--tile-corners) - var(--interactive-focus-width, 3px)) calc(0% - var(--interactive-focus-width, 3px)),
  calc(100% - var(--tile-corners)) calc(0% - var(--interactive-focus-width, 3px)),
  calc(100% + var(--interactive-focus-width, 3px)) calc(0% + var(--tile-corners)),
  calc(100% + var(--interactive-focus-width, 3px)) calc(100% - var(--tile-corners)),
  calc(100% - var(--tile-corners)) calc(100% + var(--interactive-focus-width, 3px)),
  calc(var(--tile-corners) - var(--interactive-focus-width, 3px)) calc(100% + var(--interactive-focus-width, 3px)),
  calc(0% - var(--interactive-focus-width, 3px)) calc(100% - var(--tile-corners))
)`;

module.exports = {
  hex,
  tile,
};
