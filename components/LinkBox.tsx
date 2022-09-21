import { PropsWithChildren } from 'react';
import Link from 'next/link';
import cn from 'utils/classnames';

interface LinkBoxProps extends PropsWithChildren{
  href: string;
  className?: string
}

const LinkBox = ({ href, className, children } : LinkBoxProps) => (
  <Link
    href={href}
    className={cn(`inline-flex justify-center gap-1 items-center text-lg font-semibold px-3 py-2 
  border-2 border-neutral-800 bg-white duration-200 shadow-neutral-800 hover:shadow-[4px_4px]`, className)}
  >
    {children}
  </Link>
);

export default LinkBox;
