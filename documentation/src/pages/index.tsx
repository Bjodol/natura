import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Code } from "../components/Code";
import { MonacoEditor } from "../components/Playground";
import { variantsColor } from "../variants";
import { routes } from "./_app";

const ROUTES = routes.reduce((acc, { elements }) => [...acc, ...elements], []);

const COLORS = variantsColor.filter((color) => color !== "transparent");
const INSTALLATION = `// tailwind.config.js
plugins: [
  require("@bjodol/natura/btn"),
  require("@bjodol/natura/link"),
  require("@bjodol/natura/interactive"),
  require("@bjodol/natura/typography"),
  require("@bjodol/natura/controls"),
  require("@bjodol/natura/layouts"),
  require("@bjodol/natura/shapes"),
  require("@bjodol/natura/colors"),
]`;

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
            <h3 className="h3">Installation</h3>
            <ol className="space-y-4">
              <li>
                1. First of all, you need to install{" "}
                <a
                  className="link-inline secondary"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TailwindCSS
                </a>{" "}
                using their{" "}
                <a
                  className="link-inline primary"
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Installation guide
                </a>
              </li>
              <li>
                2. Install the package using npm or yarn:
                <Code onCopy={() => {}} className="w-fit">
                  yarn add --dev @bjodol/natura
                </Code>
              </li>
              <li className="grid gap-2">
                <div>
                  3. Add the features you want to use using the plugins:
                </div>
                <MonacoEditor
                  height={12 * 19 + 5}
                  width="100%"
                  language="javascript"
                  theme="vs-dark"
                  value={INSTALLATION}
                  options={{ minimap: { enabled: false }, readOnly: true }}
                />
              </li>
            </ol>
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
