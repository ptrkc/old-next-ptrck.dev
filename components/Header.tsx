import Link from 'next/link';
import { PropsWithChildren } from 'react';
import Logo from 'components/Logo';

const NavLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link className="hover:bg-neutral-700 duration-100 p-2 rounded-md font-bold" href={href}>
    {children}
  </Link>
);

const Header = () => (
  <nav className="p-2 mx-auto max-w-3xl flex justify-around items-center">
    <Link href="/">
      <Logo />
    </Link>
    <NavLink href="/">Home</NavLink>
    <NavLink href="/blog">Blog</NavLink>
    <NavLink href="/components">Components</NavLink>
  </nav>
);

export default Header;
