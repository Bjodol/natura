import classNames from "classnames";
import Image from "next/image";
import { Story, StoryColorColumn, StoryColumn } from "../components/Story";

const COMPONENTS = [
  "tile",
  "hex",
  "square",
  "leaf",
  "leaf leaf-right outlined",
];

export default function Shapes() {
  return (
    <div>
      <Story
        title="Shapes"
        variants={[
          ...COMPONENTS,
          ...COMPONENTS.map((variant) => `${variant} interactive`),
          ...COMPONENTS.map((variant) => `${variant} object-cover`),
        ]}
        className="flex items-center justify-center"
        columns="sm:grid-cols-5"
      >
        <StoryColorColumn
          filterVariants={(variant) =>
            !variant.includes("interactive") &&
            !variant.includes("object-cover")
          }
        >
          {({ color, className, variant, ...props }) => (
            <div {...props} className={classNames("text-center", className)}>
              {variant}
            </div>
          )}
        </StoryColorColumn>
        <h2 className="h2 col-span-full">Interactive shapes</h2>
        <StoryColorColumn
          filterVariants={(variant) => variant.includes("interactive")}
        >
          {({ color, className, variant, ...props }) => (
            <div {...props} className={classNames("text-center", className)}>
              {variant}
            </div>
          )}
        </StoryColorColumn>
        <h2 className="h2 col-span-full">Image shapes</h2>
        <StoryColumn
          filterVariants={(variant) => variant.includes("object-cover")}
        >
          {({ color, variant, ...props }) => (
            <div className={`${variant} object-cover relative`} key={variant}>
              <Image
                alt={`${variant} image shape`}
                {...props}
                src="/MountainRiver.jpg"
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
        </StoryColumn>
      </Story>
    </div>
  );
}
