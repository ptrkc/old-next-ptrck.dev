import Link from 'next/link';
import { PropsWithChildren } from 'react';

const NavLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link className="hover:underline p-2 font-bold" href={href}>
    {children}
  </Link>
);

const Header = () => (
  <nav className="p-2 mx-auto max-w-3xl flex justify-around items-center">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/blog">Blog</NavLink>
    <NavLink href="/projects">Projects</NavLink>
    <NavLink href="/components">Components</NavLink>
  </nav>
);

export default Header;
