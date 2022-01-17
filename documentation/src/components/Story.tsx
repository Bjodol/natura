import classNames from "classnames";
import Head from "next/head";
import { createContext, PropsWithChildren, ReactNode, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Children, cloneElement, FC, isValidElement } from "react";
import { copyClipboard } from "../utils";
import { variantsColor } from "../variants";
import { Code } from "./Code";

type StoryProps = {
  title: string;
  description?: string;
  columns?: `sm:grid-cols-${string}`;
};

type StoryContext = {
  variants: string[];
  colors?: string[];
  className?: string;
  onClick: (msg: string) => void;
};

const StoryContext = createContext<StoryContext>({
  variants: [],
  colors: variantsColor,
  onClick: () => undefined,
});

export const Story: FC<StoryProps & Omit<StoryContext, "onClick">> = ({
  children,
  title,
  description,
  className,
  colors = variantsColor,
  columns = "sm:grid-cols-4",
  ...rest
}) => {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    let timeout: NodeJS.Timeout = null;
    if (msg) {
      timeout = setTimeout(() => {
        setMsg("");
      }, 5000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [msg]);
  return (
    <StoryContext.Provider
      value={{ ...rest, className, colors, onClick: setMsg }}
    >
      <Head>
        <title>{title} - Natura design system</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="h1">{title}</h1>
      {description && <p>{description}</p>}
      <div className={classNames("grid gap-4 p-4 mt-4 sm:gap-y-12", columns)}>
        <Code
          className="col-span-full"
          onCopy={(cls) => setMsg(`"${cls}" copied to clipboard`)}
        >
          {`${"${variant} ${color}"} ${className ?? ""}`.trim()}
        </Code>
        {children}
      </div>
      <div
        role="alert"
        className={classNames(
          "warning btn leaf leaf-right fixed top-4 right-0",
          { "translate-x-full": !msg }
        )}
      >
        {msg}
      </div>
    </StoryContext.Provider>
  );
};

type StoryRender = {
  children: (props: {
    color: string;
    variant: string;
    onClick: () => Promise<void>;
    className: string;
    key: string;
  }) => ReactNode;
  filterVariants?: (variant: string) => boolean;
};

export const StoryColorColumn = ({
  children,
  filterVariants = () => true,
}: StoryRender): JSX.Element => {
  const { variants, colors, className, onClick } = useContext(StoryContext);
  return (
    <>
      {variants.filter(filterVariants).map((variant) => (
        <div
          className="grid gap-4 grid-rows-[132px_repeat(auto-fill,minmax(auto,88px))]"
          key={variant}
        >
          <Code
            className="text-center"
            onCopy={(cls) => onClick(`"${cls}" copied to clipboard`)}
          >
            {"`" + variant + "`"}
          </Code>
          {colors.map((color) => {
            const cls = `${variant} ${color} ${className ?? ""}`.trim();
            return children({
              className: cls,
              onClick: async () => {
                await copyClipboard(cls);
                onClick(`"${cls}" copied to clipboard`);
              },
              key: cls,
              variant,
              color,
            });
          })}
        </div>
      ))}
    </>
  );
};

export const StoryColumn = ({
  children,
  filterVariants = () => true,
}: StoryRender): JSX.Element => {
  const { variants, className, onClick } = useContext(StoryContext);
  return (
    <>
      {variants.filter(filterVariants).map((variant) => {
        const cls = `${variant} ${className ?? ""}`.trim();
        return (
          <div
            className="grid gap-4 grid-rows-[132px_repeat(auto-fill,minmax(auto,88px))]"
            key={variant}
          >
            <Code
              className="text-center"
              onCopy={(cls) => onClick(`"${cls}" copied to clipboard`)}
            >
              {"`" + variant + "`"}
            </Code>
            {children({
              className: cls,
              onClick: async () => {
                await copyClipboard(cls);
                onClick(`"${cls}" copied to clipboard`);
              },
              key: cls,
              variant,
              color: "",
            })}
          </div>
        );
      })}
    </>
  );
};
