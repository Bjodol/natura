import classNames from "classnames";
import { StoryColorColumn, Story } from "../components/Story";

export default function Controls() {
  return (
    <div>
      <Story
        title="Controls"
        columns="sm:grid-cols-3"
        variants={["control", "control-check", "control-radio"]}
      >
        <StoryColorColumn filterVariants={(variant) => variant === "control"}>
          {({ color, variant, ...props }) => (
            <input {...props} placeholder={color} />
          )}
        </StoryColorColumn>
        <StoryColorColumn
          filterVariants={(variant) => variant === "control-check"}
        >
          {({ key, color, variant, className, ...props }) => (
            <label key={key} className="flex">
              {color}
              <input
                {...props}
                type="checkbox"
                className={classNames("order-first mr-2", className)}
              />
            </label>
          )}
        </StoryColorColumn>
        <StoryColorColumn
          filterVariants={(variant) => variant === "control-radio"}
        >
          {({ key, color, className, variant, ...props }) => (
            <label key={key} className="flex">
              {color}
              <input
                {...props}
                type="radio"
                className={classNames("order-first mr-2", className)}
              />
            </label>
          )}
        </StoryColorColumn>
      </Story>
    </div>
  );
}
