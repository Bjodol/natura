import Head from "next/head";

export const HEX_COLOR_SCHEMES = {
  PRIMARY: "hex-primary",
  SECONDARY: "hex-secondary",
  BASE: "hex-base",
  WARNING: "hex-warning",
  DANGER: "hex-danger",
  TRANSPARENT: "hex-transparent",
};

const COLOR_SCHEMES = {
  PRIMARY: "bg-primary text-primary-contrast",
  SECONDARY: "bg-secondary text-secondary-contrast",
  BASE: "bg-base text-base-contrast",
  WARNING: "bg-warning text-warning-contrast",
  DANGER: "bg-danger text-danger-contrast",
  TRANSPARENT: "bg-transparent text-transparent-contrast",
};

export default function Buttons() {
  return (
    <div>
      <Head>
        <title>Hex grid - interactive Natura design system</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Hexagon grid</h1>
      <h2 className="h2">Default</h2>
      <div className="hex-container">
        <div className="hex-grid">
          {Object.values(HEX_COLOR_SCHEMES).map((color) => (
            <button
              key={color}
              className={`hex ${color} interactive`}
            >{`${color}`}</button>
          ))}
          {Object.values(COLOR_SCHEMES).map((color) => (
            <div key={color} className={`hex ${color}`}>
              {color}
            </div>
          ))}
        </div>
      </div>
      <h2 className="h2">Spacing and gap</h2>
      <div className="hex-container">
        <div className="hex-grid hex-grid-16 hex-grid-gap-px">
          {Object.values(HEX_COLOR_SCHEMES).map((color) => (
            <button
              key={color}
              className={`hex ${color} interactive`}
            >{`hex`}</button>
          ))}
          {Object.values(COLOR_SCHEMES).map((color) => (
            <div key={color} className={`hex ${color}`}>{`hex`}</div>
          ))}
        </div>
      </div>

      <footer></footer>
    </div>
  );
}
