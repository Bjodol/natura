import Head from "next/head";

const COLOR_SCHEMES = {
  PRIMARY: "btn-primary",
  SECONDARY: "btn-secondary",
  BASE: "btn-base",
  WARNING: "btn-warning",
  DANGER: "btn-danger",
  TRANSPARENT: "btn-transparent",
};

export default function Buttons() {
  return (
    <div>
      <Head>
        <title>Buttons - Natura design system</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Buttons</h1>
      <div className="grid gap-4 grid-cols-4 p-4">
        {Object.values(COLOR_SCHEMES).map((color) => (
          <button key={color} className={`btn ${color}`}>
            {color}
          </button>
        ))}
      </div>
      <footer></footer>
    </div>
  );
}
