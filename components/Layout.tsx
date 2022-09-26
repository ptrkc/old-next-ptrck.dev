import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

const DefaultLayout = ({ children } : PropsWithChildren) => (
  <div>
    <Head>
      <title>Patrick Carneiro - Software Developer</title>
      <meta name="description" content="Personal blog and portfolio." />
    </Head>
    <svg className="fixed h-screen w-full mix-blend-soft-light pointer-events-none z-20 opacity-0 dark:opacity-100" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.90"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
    <Header />
    <main className="p-4 mx-auto max-w-4xl">
      {children}
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
