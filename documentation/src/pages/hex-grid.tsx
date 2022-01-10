import Head from "next/head";

const VARIANTS = [
  "hex base",
  "hex danger",
  "hex primary",
  "hex secondary",
  "hex warning",
];

export default function Buttons() {
  return (
    <div>
      <Head>
        <title>Hex grid - interactive Natura design system</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Hexagon grid</h1>
      <div className="hex-container">
        <div className="hex-grid">
          {[...VARIANTS, ...VARIANTS].map((variant, idx) => (
            <div
              key={`${variant}-${idx}`}
              className={`${variant} inline-flex justify-center items-center`}
            >
              {variant}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
