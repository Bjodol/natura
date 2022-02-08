import { MonacoEditor } from "../components/Playground";
import { Story, StoryColorColumn } from "../components/Story";

const COMPONENTS = ["", "interactive", "outlined"];

export default function Colors() {
  return (
    <>
      <Story
        title="Color schemes"
        variants={COMPONENTS}
        className="leaf flex items-center justify-center h-16"
      >
        <StoryColorColumn>
          {({ color, variant, ...props }) => <div {...props}>{color}</div>}
        </StoryColorColumn>
      </Story>
      <div className="grid gap-4">
        <h2 className="h2">Configurable</h2>
        <p>
          {`You can configure and add infinite color schemes by extending the theme in `}
          <code>tailwind.config.js</code>.
        </p>
        <p>
          {`Use the naming convention to get accurate results:`}
          <dl>
            <dt>
              <code>DEFAULT</code>
            </dt>
            <dd className="pl-4">{`The default color scheme. As normally used in tailwind`}</dd>
            <dt>
              <code>contrast</code>
            </dt>
            <dd className="pl-4">{`The contrast color for the default color. Usually used for text`}</dd>
            <dt>
              <code>hover</code>
            </dt>
            <dd className="pl-4">
              {`The color to use when hovering on `}
              <code>interactive</code>
              {` elements`}
            </dd>
            <dt>
              <code>active</code>
            </dt>
            <dd className="pl-4">
              {`The color to use when hovering on `}
              <code>interactive</code>
              {` elements`}
            </dd>
            <dt>
              <code>focus</code>
            </dt>
            <dd className="pl-4">
              {`The color to use when hovering on `}
              <code>interactive</code>
              {` elements`}
            </dd>
          </dl>
        </p>
        <MonacoEditor
          height={50 * 19 + 5}
          width="100%"
          language="javascript"
          theme="vs-dark"
          value={TAILWIND_CONFIG}
          options={{ minimap: { enabled: false }, readOnly: true }}
        />
      </div>
    </>
  );
}

const TAILWIND_CONFIG = `
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      colors: {
        transparent: {
          DEFAULT: "transparent",
          hover: "rgba(0, 0, 0, 0.3)",
          active: "rgba(0,0,0,0.5)",
        },
        current: { DEFAULT: "currentColor" },
        primary: {
          DEFAULT: "#919481",
          hover: { DEFAULT: "#6B6E5B", contrast: "#cdd4dc" },
          contrast: "#060609",
        },
        secondary: {
          DEFAULT: "#485043",
          hover: "#2f3529",
          active: "#1c231b",
          contrast: "#cdd4dc",
        },
        base: {
          DEFAULT: "#888d98",
          contrast: "#060609",
          main: { DEFAULT: "#393d42", contrast: "#cdd4dc" },
          hover: { DEFAULT: "#1a1b1f", contrast: "#cdd4dc" },
          active: { DEFAULT: "#060609", contrast: "#cdd4dc" },
        },
        danger: {
          DEFAULT: "#523733",
          hover: "#4A251F",
          contrast: "#cdd4dc",
        },
        warning: {
          DEFAULT: "#b89a5e",
          hover: { DEFAULT: "#77591D", contrast: "#cdd4dc" },
          contrast: "#060609",
        },
      },
    },
    // ...
}`;
