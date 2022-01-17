import { Story, StoryColorColumn } from "../components/Story";

const COMPONENTS = ["", "interactive", "outlined"];

export default function Colors() {
  return (
    <Story
      title="Colors"
      variants={COMPONENTS}
      className="leaf flex items-center justify-center h-16"
    >
      <StoryColorColumn>
        {({ color, variant, ...props }) => <div {...props}>{color}</div>}
      </StoryColorColumn>
    </Story>
  );
}
