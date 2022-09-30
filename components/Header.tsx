import Link from 'next/link';
import { PropsWithChildren, useEffect, useState } from 'react';
import DarkModeToggle from 'components/DarkModeToggle';
import { useRouter } from 'next/router';
import cn from 'utils/classnames';

const HeaderLink = ({ href, children } : PropsWithChildren<{href: string}>) => {
  const { pathname } = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (pathname.toLowerCase() === href) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [pathname, href]);

  return (
    <Link className={cn('hover:underline p-2 font-bold', isActive && 'underline')} href={href}>
      {children}
    </Link>
  );
};

const Header = () => (
  <div className="h-14">
    <nav className="p-2 fixed top-0 left-0 right-0 z-10 bg-orange-100 dark:bg-neutral-800 duration-200 backdrop-blur [@supports(backdrop-filter:blur())]:bg-orange-100/50 dark:[@supports(backdrop-filter:blur())]:bg-neutral-900/50">
      <div className="mx-auto max-w-3xl flex justify-around items-center">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/about">About</HeaderLink>
        <HeaderLink href="/blog">Blog</HeaderLink>
        <HeaderLink href="/projects">Projects</HeaderLink>
        <DarkModeToggle />
      </div>
    </nav>
  </div>
);

export default Header;
