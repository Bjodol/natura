import Head from "next/head";
import { variantsColor } from "../variants";

const COMPONENTS = [
  "btn",
  "btn outlined",
  "btn hex",
  "btn tile",
  "btn leaf",
  "btn leaf leaf-right outlined",
];

export default function Buttons() {
  return (
    <div>
      <Head>
        <title>Buttons - Natura design system</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Buttons</h1>
      <div className="grid gap-4 sm:grid-cols-4 p-4 mt-4 sm:gap-y-12">
        <code className="col-span-full">
          {"`${variant} ${color} flex items-center justify-center w-full`"}
        </code>
        {COMPONENTS.map((variant) => (
          <div className="grid gap-4" key={variant}>
            <code className="text-center">{"`" + variant + "`"}</code>
            {variantsColor.map((color) => (
              <button
                key={color}
                className={`${variant} ${color} flex items-center justify-center w-full`}
              >
                {color}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
