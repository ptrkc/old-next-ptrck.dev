import { AnchorHTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import cn from 'utils/classnames';

const LinkBox = ({
  href,
  className,
  children,
  ...rest
} : LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link
    href={href}
    className={cn(`inline-flex justify-center gap-1 items-center text-lg font-semibold px-3 py-2 
  border-2 border-neutral-800 bg-white duration-200 shadow-neutral-800 hover:shadow-[4px_4px]`, className)}
    {...rest}
  >
    {children}
  </Link>
);

export default LinkBox;
