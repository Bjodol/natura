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
          "fixed text-base-main-contrast w-[288px] top-0 h-full bg-secondary-active border-base-hover border-r-2 shadow-secondary-hover transition-all order-first",
          { "-translate-x-full": pathname === "/" || !expanded }
        )}
      >
        <Link href="/">
          <a className="title p-4 block decoration-primary underline underline-offset-4 transition-all">
            Natura
          </a>
        </Link>
        <nav>
          {routes.map(({ elements, title }) => (
            <Fragment key={title}>
              <h2 className="pl-4 pt-8 label">{title}</h2>
              <ul>
                {elements.map((href) => (
                  <li key={href}>
                    <NavLink
                      href={href}
                      className="link-nav link-nav-primary capitalize"
                      onClick={() => setExpanded(false)}
                      pathname={pathname}
                    >
                      {href.split("/").join(" ").trim()}
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
          "hex hex-16 hex-primary transition-all sm:hidden transform fixed bottom-0 right-0",
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
