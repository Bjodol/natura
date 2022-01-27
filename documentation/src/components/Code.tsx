import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { FC } from "react";
import { copyClipboard } from "../utils";

export const Code: FC<
  Omit<JSX.IntrinsicElements["code"], "onCopy"> & {
    children: string;
    onCopy?: (children: string) => void;
  }
> = ({ children, className, onCopy }) => {
  const copy = async () => {
    await copyClipboard(children);
    if (onCopy) onCopy(children);
  };
  return (
    <code
      onDoubleClick={copy}
      className={classNames(
        "flex items-center p-4 bg-base-active leaf w-full color justify-between",
        className
      )}
    >
      <span>{children}</span>
      <button onClick={copy}>
        <FontAwesomeIcon icon={faCopy} className="w-4 h-4 ml-4" />
      </button>
    </code>
  );
};
