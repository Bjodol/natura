import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { HEX_COLOR_SCHEMES } from "./hex-grid";
import { routes } from "./_app";

const HEX_COLORS = Object.values(HEX_COLOR_SCHEMES);
const ROUTES = routes.reduce((acc, { elements }) => [...acc, ...elements], []);

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
            <h1 className="title">
              Natura
              <span className="sub-title text-right pl-4">
                - A system inspired by the raw nature of the moutain side
              </span>
            </h1>

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
                  className={`hex capitalize ${
                    HEX_COLORS[index % HEX_COLORS.length]
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
