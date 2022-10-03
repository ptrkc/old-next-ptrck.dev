import { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

interface CustomLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const Link = ({ children, ...rest }: CustomLinkProps) => (
  <NextLink {...rest} scroll={false}>
    {children}
  </NextLink>
);

export default Link;
