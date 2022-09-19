import Link from 'next/link';
import { PropsWithChildren } from 'react';

const NavLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link className="hover:bg-white/80 duration-100 p-2 rounded-md font-bold" href={href}>
    {children}
  </Link>
);

const Header = () => (
  <nav className="p-2 mx-auto max-w-3xl flex justify-around items-center">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/blog">Blog</NavLink>
    <NavLink href="/components">Components</NavLink>
  </nav>
);

export default Header;
