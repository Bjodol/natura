import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { routes } from "../pages/_app";
import { NavLink } from "./NavLink";

export const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const { pathname } = useRouter();
  return (
    <>
      <header
        className={classNames(
          "fixed text-base-main-contrast overflow-y-auto w-full sm:w-[288px] top-0 h-full transition-all order-first sm:translate-x-0 z-40 bg-base-contrast sm:bg-transparent",
          { "-translate-x-full": !expanded, hidden: pathname === "/" }
        )}
      >
        <Link href="/">
          <a className="title leaf w-[fit-content] secondary p-4 flex items-center hover:primary decoration-secondary hover:underline transition-all">
            Natura
          </a>
        </Link>
        <nav className="p-4">
          {routes.map(({ elements, title }) => (
            <Fragment key={title}>
              <h2 className="px-3 mt-8 p-2 label leaf leaf-right outlined primary w-fit h-fit">
                {title}
              </h2>
              <ul>
                {elements.map((href) => (
                  <li key={href}>
                    <NavLink
                      href={href}
                      className="block leaf interactive secondary capitalize p-4 mt-4"
                      onClick={() => {
                        setExpanded(false);
                      }}
                      pathname={pathname}
                    >
                      {href.replace("-", " ").split("/").join(" ").trim()}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Fragment>
          ))}
        </nav>
      </header>
      <button
        onClick={() => setExpanded(!expanded)}
        className={classNames(
          "hex hex-16 primary transition-all sm:hidden transform fixed bottom-0 right-0",
          {
            "rotate-90": expanded,
            hidden: pathname === "/",
          }
        )}
      >
        <span className="bg-clip-text text-transparent bg-primary-contrast">
          {!expanded ? "Menu" : "❌"}
        </span>
      </button>
    </>
  );
};
