import Link from 'next/link';
import { PropsWithChildren } from 'react';

const NavLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link className="hover:underline p-2 font-bold" href={href}>
    {children}
  </Link>
);

const Header = () => (
  <div className="h-14">
    <nav className="p-2 fixed top-0 left-0 right-0 z-10 bg-orange-100 backdrop-blur [@supports(backdrop-filter:blur())]:bg-orange-100/50">
      <div className="mx-auto max-w-3xl flex justify-around items-center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/components">Components</NavLink>
      </div>
    </nav>
  </div>
);

export default Header;
