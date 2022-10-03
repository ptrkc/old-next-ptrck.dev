import { PropsWithChildren } from 'react';
import Link from 'components/Link';

const UnderlinedLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link href={href} className="transition-[box-shadow] font-semibold hover:text-white shadow-red-700 hover:shadow-red-700 shadow-[0px_-2px_0px_0px_inset] hover:shadow-[0px_-18px_0px_0px_inset]">
    {children}
  </Link>
);

export default UnderlinedLink;
