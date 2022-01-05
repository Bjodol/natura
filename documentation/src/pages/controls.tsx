import Head from "next/head";

const COLOR_SCHEMES = {
  PRIMARY: "control control-primary",
  SECONDARY: "control control-secondary",
  BASE: "control control-base",
  WARNING: "control control-warning",
  DANGER: "control control-danger",
  TRANSPARENT: "control control-transparent",
};

const CHECK_BOXES = {
  PRIMARY: "control-check-primary",
  SECONDARY: "control-check-secondary",
  BASE: "control-check-base",
  WARNING: "control-check-warning",
  DANGER: "control-check-danger",
};

const RADIO_BOXES = {
  PRIMARY: "control-radio-primary",
  SECONDARY: "control-radio-secondary",
  BASE: "control-radio-base",
  WARNING: "control-radio-warning",
  DANGER: "control-radio-danger",
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

export default function Controls() {
  return (
    <div>
      <Head>
        <title>Controls - Natura design system</title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="h1 mb-4">Controls</h1>
      <div className="grid gap-4 sm:grid-cols-4">
        <h2 className="h2 sm:col-span-4">Input with label</h2>
        {Object.values(COLOR_SCHEMES).map((color) => (
          <label key={color}>
            {color}
            <input
              placeholder={color}
              type="text"
              className={`w-full ${color}`}
            />
          </label>
        ))}
        <h2 className="h2 sm:col-span-4">Input types</h2>
        {Object.values(CONTROL_TYPES).map((color) => (
          <label key={color}>
            {color}
            <input
              placeholder={color}
              type={color}
              className="w-full control control-base"
            />
          </label>
        ))}
        <label>
          disabled
          <input
            placeholder="disabled"
            type="text"
            disabled
            className={`control control-base w-full`}
          />
        </label>
        <label>
          select
          <select className="w-full control control-base">
            <option value={0}>select</option>
            <option value={1}>not select</option>
          </select>
        </label>
        <label className="sm:col-span-2">
          textarea
          <textarea className="w-full control control-base" />
        </label>
        <label className="flex">
          control-check
          <input type="checkbox" className={`control-check order-first mr-2`} />
        </label>
        {Object.values(CHECK_BOXES).map((color) => (
          <label key={color} className="flex">
            {color}
            <input
              type="checkbox"
              className={`control-check ${color} order-first mr-2`}
            />
          </label>
        ))}

        {Object.values(RADIO_BOXES).map((color) => (
          <div key={color} className="grid gap-2">
            <label className="flex">
              {color}
              <input
                type="radio"
                name={color}
                className={`control-radio ${color} order-first mr-2`}
              />
            </label>
            <label className="flex">
              {color}
              <input
                type="radio"
                name={color}
                className={`control-radio ${color} order-first mr-2`}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
