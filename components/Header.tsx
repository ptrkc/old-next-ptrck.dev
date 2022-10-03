import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import DarkModeToggle from 'components/DarkModeToggle';
import cn from 'utils/classnames';

const headerLinks = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { text: 'Projects', href: '/projects' },
];

interface HeaderLinkProps {
  text: string,
  href: string,
  router: NextRouter,
}

const HeaderLink = ({ text, href, router }: HeaderLinkProps) => {
  const isActive = router.asPath === href;
  return (
    <Link
      className={cn(
        'border-b-transparent border-b-2 p-2 font-bold hover:border-b-neutral-800 dark:hover:border-b-orange-100',
        isActive && 'border-b-neutral-800 dark:border-b-orange-100',
      )}
      href={href}
    >
      {text}
    </Link>
  );
};

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-14">
      <nav className="p-2 fixed top-0 left-0 right-0 z-10 bg-orange-100 dark:bg-neutral-800 duration-200 backdrop-blur [@supports(backdrop-filter:blur())]:bg-orange-100/50 dark:[@supports(backdrop-filter:blur())]:bg-neutral-900/50">
        <div className="mx-auto max-w-3xl flex justify-around items-center">
          {headerLinks.map(({ text, href }) => (
            <HeaderLink key={href} text={text} href={href} router={router} />
          ))}
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Header;
