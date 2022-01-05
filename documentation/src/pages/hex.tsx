import Head from "next/head";

const COLOR_SCHEMES = {
  PRIMARY: "hex-primary",
  SECONDARY: "hex-secondary",
  BASE: "hex-base",
  WARNING: "hex-warning",
  DANGER: "hex-danger",
  TRANSPARENT: "hex-transparent",
};

export default function Buttons() {
  return (
    <div>
      <Head>
        <title>Buttons - Natura design system</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Hexagons</h1>
      <h2 className="h2">Buttons</h2>
      <div className="grid gap-4 grid-cols-4 p-4">
        {Object.values(COLOR_SCHEMES).map((color) => (
          <button key={color} className={`hex ${color}`}>
            {color}
          </button>
        ))}
      </div>
      <h2 className="h2">Image</h2>
      <img src="/MountainRiver.jpg" alt="river" className="hex object-cover" />
    </div>
  );
}
