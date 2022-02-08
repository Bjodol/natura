const hex = `polygon(
  calc(0% + var(--interactive-focus-width)) 25%,
  calc(0% + var(--interactive-focus-width)) 75%,
  50% calc(100% - var(--interactive-focus-width)),
  calc(100% - var(--interactive-focus-width)) 75%,
  calc(100% - var(--interactive-focus-width)) 25%,
  50% calc(0% + var(--interactive-focus-width))
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

const chippedSquare = `polygon(
  calc(50% - var(--chip-size)) calc(var(--interactive-focus-width) * -1),
  50% var(--chip-size),
  calc(50% + var(--chip-size)) calc(var(--interactive-focus-width) * -1),
  calc(100% + var(--interactive-focus-width)) calc(var(--interactive-focus-width) * -1),
  calc(100% + var(--interactive-focus-width)) calc(50% - var(--chip-size)),
  calc(100% - var(--chip-size)) 50%,
  calc(100% + var(--interactive-focus-width)) calc(50% + var(--chip-size)),
  calc(100% + var(--interactive-focus-width)) calc(100% + var(--interactive-focus-width)),
  calc(50% + var(--chip-size)) calc(100% + var(--interactive-focus-width)),
  50% calc(100% - var(--chip-size)),
  calc(50% - var(--chip-size)) calc(100% + var(--interactive-focus-width)),
  calc(var(--interactive-focus-width) * -1) calc(100% + var(--interactive-focus-width)),
  calc(var(--interactive-focus-width) * -1) calc(50% + var(--chip-size)),
  var(--chip-size) 50%,
  calc(var(--interactive-focus-width) * -1) calc(50% - var(--chip-size)),
  calc(var(--interactive-focus-width) * -1) calc(var(--interactive-focus-width) * -1)
)`;

module.exports = {
  hex,
  tile,
};
