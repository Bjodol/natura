import Head from "next/head";
import { variantsColor } from "../variants";

const COMPONENTS = ["", "interactive", "outlined"];

export default function Colors() {
  return (
    <div>
      <Head>
        <title>Colors - Natura design system</title>

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
              <div
                key={color}
                className={`${variant} ${color} leaf flex items-center justify-center h-16`}
              >
                {color}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
