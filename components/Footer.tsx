import Link from 'next/link';
import { PropsWithChildren } from 'react';

const NavLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link className="hover:bg-white/80 duration-100 p-2 rounded-md font-bold" href={href}>
    {children}
  </Link>
);

const Footer = () => (
  <footer className="p-2 bg-neutral-800 flex justify-around items-center text-orange-100">
    <div className="mx-auto max-w-3xl">
      <ul>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/blog">Blog</NavLink></li>
        <li><NavLink href="/components">Components</NavLink></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
