import classNames from "classnames";
import Link from "next/link";

export type NavLinkProps = {
  pathname: string;
};

export const NavLink: React.FC<NavLinkProps & JSX.IntrinsicElements["a"]> = ({
  href,
  className,
  pathname,
  children,
  ...rest
}) => {
  console.log(pathname, href);
  return (
    <Link href={href}>
      <a
        className={classNames(className, { active: href === pathname })}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
};
