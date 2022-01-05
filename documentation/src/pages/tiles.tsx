import Head from "next/head";

const COLOR_SCHEMES = {
  PRIMARY: "tile-primary",
  SECONDARY: "tile-secondary",
  BASE: "tile-base",
  WARNING: "tile-warning",
  DANGER: "tile-danger",
  TRANSPARENT: "tile-transparent",
};

export default function Buttons() {
  return (
    <div>
      <Head>
        <title>Buttons - Natura design system</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Tiles</h1>
      <h2 className="h2">Buttons</h2>
      <div className="grid gap-4 grid-cols-4 p-4">
        {Object.values(COLOR_SCHEMES).map((color) => (
          <button key={color} className={`tile ${color}`}>
            {color}
          </button>
        ))}
      </div>
      <h2 className="h2">Image</h2>
      <img src="/MountainRiver.jpg" alt="river" className="tile object-cover" />
    </div>
  );
}
