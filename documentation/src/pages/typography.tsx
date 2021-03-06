import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function Links() {
  const [text, setText] = useState(
    "We were alone in the forest and began to feel frisky..."
  );
  return (
    <div>
      <Head>
        <title>Links - Natura design system</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Typography</h1>
      <label>
        <textarea
          value={text}
          className="control w-full"
          rows={3}
          onChange={({ target: { value } }) => setText(value)}
        />
      </label>
      <ul>
        <li className="title">title - {text}</li>
        <li className="sub-title">sub-title - {text}</li>
        <li className="h1">h1 - {text}</li>
        <li className="h2">h2 - {text}</li>
        <li className="h3">h3 - {text}</li>
        <li className="h4">h4 - {text}</li>
        <li>Normal - {text}</li>
        <li className="caption">caption - {text}</li>
        <li className="label">label - {text}</li>
      </ul>
    </div>
  );
}
