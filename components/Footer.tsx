import { PropsWithChildren } from 'react';
import Link from 'components/Link';

const FooterLink = ({ href, children } : PropsWithChildren<{href: string}>) => (
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
        <li><FooterLink href="/">Home</FooterLink></li>
        <li><FooterLink href="/about">About</FooterLink></li>
        <li><FooterLink href="/blog">Blog</FooterLink></li>
        <li><FooterLink href="/projects">Projects</FooterLink></li>
      </ul>
      <Divider />
      <ul className="flex flex-col gap-2">
        <li><FooterLink href="https://github.com/ptrkc">GitHub @ptrkc</FooterLink></li>
        <li><FooterLink href="https://www.linkedin.com/in/patrickcarneiro/">LinkedIn @patrickcarneiro</FooterLink></li>
        <li><FooterLink href="mailto:pcarneiro.dev@gmail.com">pcarneiro.dev@gmail.com</FooterLink></li>
      </ul>
    </div>
    © Patrick Carneiro 2022
  </footer>
);

export default Footer;
