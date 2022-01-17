import { Story, StoryColorColumn } from "../components/Story";

const COMPONENTS = ["link", "link-inline"];

export default function Links() {
  return (
    <Story variants={COMPONENTS} title="Links" className="">
      <StoryColorColumn>
        {({ color, variant, ...props }) => <a {...props}>{color}</a>}
      </StoryColorColumn>
    </Story>
  );
}
