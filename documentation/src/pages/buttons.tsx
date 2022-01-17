import Head from "next/head";
import { useState } from "react";
import { variantsColor } from "../variants";
import { Code } from "../components/Code";
import { copyClipboard } from "../utils";
import { StoryColorColumn, Story } from "../components/Story";

const COMPONENTS = [
  "btn",
  "btn outlined",
  "btn hex",
  "btn tile",
  "btn leaf",
  "btn leaf leaf-right outlined",
];

export default function Buttons() {
  return (
    <Story
      variants={COMPONENTS}
      title="Buttons"
      className="flex items-center justify-center w-full"
    >
      <StoryColorColumn>
        {({ color, variant, ...props }) => <button {...props}>{color}</button>}
      </StoryColorColumn>
    </Story>
  );
}
