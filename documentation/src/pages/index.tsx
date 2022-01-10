import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { variantsColor } from "../variants";
import { routes } from "./_app";

const ROUTES = routes.reduce((acc, { elements }) => [...acc, ...elements], []);

const COLORS = variantsColor.filter((color) => color !== "transparent");

export default function Home() {
  return (
    <div>
      <Head>
        <title>Natura design system</title>
        <meta name="description" content="A design system inspired by nature" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="sm:inline-block w-full">
          <div className="hex hex-40 sm:hex-96 relative mx-auto mb-4 wrappable sm:float-right order-last">
            <Image
              src={"/MountainRiver.jpg"}
              alt="Mountain river"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="title text-center sm:text-left">Natura</h1>
            <h2 className="sub-title inline text-center sm:text-right pl-4">
              - A system inspired by the raw nature of the moutain side
            </h2>

            <p className="">
              {"Built on plugins for "}
              <a
                className="link-inline link-warning"
                href="https://tailwindcss.com/"
              >
                tailwindcss
              </a>
              {
                " Natura design system delivers powerful components with the ability to easily change and configure as you'd like."
              }
            </p>
          </div>
        </div>
        <h2 className="h2 my-4" id="features">
          Features
        </h2>
        <div className="hex-container">
          <div className="hex-grid">
            {ROUTES.map((href, index) => (
              <Link key={href} href={href}>
                <a
                  className={`hex capitalize flex items-center justify-center ${
                    COLORS[index % COLORS.length]
                  }`}
                >
                  {href.split("/").join(" ").trim()}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
