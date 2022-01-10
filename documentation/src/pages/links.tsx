import Head from "next/head";
import Image from "next/image";
import { variantsColor } from "../variants";

const COMPONENTS = ["link", "link-inline", "link-nav"];

export default function Links() {
  return (
    <div>
      <Head>
        <title>Links - Natura design system</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 id="top" className="h1">
        Links
      </h1>
      <div className="grid gap-4 sm:grid-cols-4 p-4 mt-4 sm:gap-y-12">
        <code className="col-span-full">{"`${variant} ${color}`"}</code>
        {COMPONENTS.map((variant) => (
          <div className="grid gap-4" key={variant}>
            <code>{"`" + variant + "`"}</code>
            {variantsColor.map((color) => (
              <a href="#top" key={color} className={`${variant} ${color}`}>
                {color}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
