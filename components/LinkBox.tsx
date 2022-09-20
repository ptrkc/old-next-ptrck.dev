import { PropsWithChildren } from 'react';
import Link from 'next/link';

interface LinkBoxProps extends PropsWithChildren {
  href: string
 }

const LinkBox = ({ href, children } : LinkBoxProps) => (
  <Link href={href} className="flex justify-center gap-1 items-center text-lg font-semibold px-3 py-2 border-2 border-neutral-800 bg-white duration-200 shadow-neutral-800 hover:shadow-[4px_4px]">
    {children}
  </Link>
);

export default LinkBox;
