import Head from "next/head";
import { variantsColor } from "../variants";

const COLOR_SCHEMES = {
  PRIMARY: "control primary",
  SECONDARY: "control secondary",
  BASE: "control base",
  WARNING: "control warning",
  DANGER: "control danger",
  TRANSPARENT: "control transparent",
};

const CHECK_BOXES = {
  PRIMARY: "control-check primary",
  SECONDARY: "control-check secondary",
  BASE: "control-check base",
  WARNING: "control-check warning",
  DANGER: "control-check danger",
};

const RADIO_BOXES = {
  PRIMARY: "control-radio primary",
  SECONDARY: "control-radio secondary",
  BASE: "control-radio base",
  WARNING: "control-radio warning",
  DANGER: "control-radio danger",
};

const CONTROL_TYPES = {
  TEXT: "text",
  NUMBER: "number",
  EMAIL: "email",
  TEL: "tel",
  URL: "url",
  HIDDEN: "hidden",
  RANGE: "range",
  SEARCH: "search",
};

const COMPONENTS = ["control-check", "control-radio"];

export default function Controls() {
  return (
    <div>
      <Head>
        <title>Controls - Natura design system</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="h1 mb-4">Controls</h1>
      <div className="grid gap-4 sm:grid-cols-4 p-4 mt-4 sm:gap-y-12">
        <h2 className="h2">Base inputs</h2>
        <code className="col-span-full">{"`control ${color}`"}</code>
        {variantsColor.map((color) => (
          <label key={color}>
            {color}
            <input
              key={color}
              placeholder={color}
              className={`control ${color}`}
            />
          </label>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-4 p-4 mt-4 sm:gap-y-12">
        {COMPONENTS.map((variant, index) => (
          <div className="grid gap-4" key={variant}>
            <code className="text-center">
              {"`" + variant + " ${color} order-first mr-2`"}
            </code>
            {variantsColor.map((color) => (
              <label key={color} className="flex">
                {color}
                <input
                  key={color}
                  type={index ? "checkbox" : "radio"}
                  placeholder={color}
                  className={`${variant} ${color} order-first mr-2`}
                />
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
