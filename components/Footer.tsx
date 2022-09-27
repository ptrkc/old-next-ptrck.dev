import { PropsWithChildren } from 'react';
import Link from 'next/link';

const NavLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
  <Link className="hover:underline p-2 font-bold" href={href}>
    {children}
  </Link>
);

const Divider = () => (<div className="bg-orange-100 h-[1px] sm:w-[1px] sm:h-auto" />
);

const Footer = () => (
  <footer className="p-8 bg-neutral-800 flex justify-around items-center flex-col gap-8 text-orange-100">
    <div className="mx-auto max-w-3xl flex flex-col sm:flex-row gap-8">
      <ul className="flex flex-col gap-2">
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/blog">Blog</NavLink></li>
        <li><NavLink href="/projects">Projects</NavLink></li>
      </ul>
      <Divider />
      <ul className="flex flex-col gap-2">
        <li><NavLink href="https://github.com/ptrkc">GitHub @ptrkc</NavLink></li>
        <li><NavLink href="https://www.linkedin.com/in/patrickcarneiro/">LinkedIn @patrickcarneiro</NavLink></li>
        <li><NavLink href="mailto:pcarneiro.dev@gmail.com">pcarneiro.dev@gmail.com</NavLink></li>
      </ul>
    </div>
    © Patrick Carneiro 2022
  </footer>
);

export default Footer;
