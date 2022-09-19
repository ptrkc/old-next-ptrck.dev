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
    <Header />
    <main className="p-2 mx-auto max-w-3xl">
      {children}
    </main>
    <Footer />
  </div>
);

export default DefaultLayout;
