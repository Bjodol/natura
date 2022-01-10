import Head from "next/head";
import Image from "next/image";
import { variantsColor } from "../variants";

const COMPONENTS = [
  "tile",
  "hex",
  "leaf",
  "leaf leaf-right outlined",
  "square",
];

export default function Shapes() {
  return (
    <div>
      <Head>
        <title>Shapes - Natura design system</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">Shapes</h1>
      <div className="grid gap-4 sm:grid-cols-5 p-4 mt-4">
        <h2 className="h2 col-span-full">Static shapes</h2>
        <code className="col-span-full">
          {"`${variant} ${color} flex items-center justify-center`"}
        </code>
        {COMPONENTS.map((variant) => (
          <div className="grid gap-4" key={variant}>
            {variantsColor.map((color) => (
              <div
                key={color}
                className={`${variant} ${color} flex items-center justify-center`}
              >
                {color}
              </div>
            ))}
          </div>
        ))}
        <h2 className="h2 col-span-full">Interactive shapes</h2>
        <code className="col-span-full">
          {"`${variant} ${color} interactive`"}
        </code>
        {COMPONENTS.map((variant) => (
          <div className="grid gap-4" key={variant}>
            {variantsColor.map((color) => (
              <button key={color} className={`${variant} ${color} interactive`}>
                {color}
              </button>
            ))}
          </div>
        ))}
        <h2 className="h2 col-span-full">Image shapes</h2>
        <code className="col-span-full">{"`${variant} object-cover`"}</code>
        {COMPONENTS.map((variant) => (
          <div className={`${variant} object-cover relative`} key={variant}>
            <Image
              alt={`${variant} image shape`}
              className={variant}
              src="/MountainRiver.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <footer></footer>
    </div>
  );
}
