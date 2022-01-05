import Head from "next/head";
import Image from "next/image";

const COLOR_SCHEMES = {
  PRIMARY: "link link-primary",
  SECONDARY: "link link-secondary",
  BASE: "link link-base",
  WARNING: "link link-warning",
  DANGER: "link link-danger",
  TRANSPARENT: "link link-transparent",
};

const INLINE = {
  PRIMARY: "link-inline link-inline-primary",
  SECONDARY: "link-inline link-inline-secondary",
  BASE: "link-inline link-inline-base",
  WARNING: "link-inline link-inline-warning",
  DANGER: "link-inline link-inline-danger",
  TRANSPARENT: "link-inline link-inline-transparent",
};

const NAV = {
  PRIMARY: "link-nav link-nav-primary",
  SECONDARY: "link-nav link-nav-secondary",
  BASE: "link-nav link-nav-base",
  WARNING: "link-nav link-nav-warning",
  DANGER: "link-nav link-nav-danger",
  TRANSPARENT: "link-nav link-nav-transparent",
};

export default function Links() {
  return (
    <div>
      <Head>
        <title>Links - Natura design system</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid gap-4">
        <h1 id="top" className="h1">
          Links
        </h1>

        <h2 className="h2">Default</h2>
        <div className="flex space-x-4 flex-wrap">
          {Object.values(COLOR_SCHEMES).map((color) => (
            <a href="#top" key={color} className={color}>{`${color}`}</a>
          ))}
        </div>
        <h2 className="h2">Inline links</h2>
        <div className="flex space-x-4 flex-wrap">
          {Object.values(INLINE).map((color) => (
            <a href="#top" key={color} className={color}>{`${color}`}</a>
          ))}
        </div>
        <h2 className="h2">Navigation links</h2>
        <div className="flex space-x-4 flex-wrap">
          {Object.values(NAV).map((color) => (
            <a href="#top" key={color} className={color}>{`${color}`}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
