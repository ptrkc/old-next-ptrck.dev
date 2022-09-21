import Link from 'next/link';
import { PropsWithChildren } from 'react';

const UnderlinedLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link href={href} className="font-semibold hover:text-white duration-100 shadow-red-700 hover:shadow-red-700 shadow-[0px_-2px_0px_0px_inset] hover:shadow-[0px_-18px_0px_0px_inset]">
    {children}
  </Link>
);

export default UnderlinedLink;
