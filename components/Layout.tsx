import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Header from 'components/Header';
import Footer from 'components/Footer';

const variants = {
  out: {
    opacity: 0,
    y: 40,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
  },
};

const Transition = ({ children }: PropsWithChildren) => {
  const { asPath } = useRouter();
  return (
    <div className="overflow-hidden">
      <AnimatePresence
        initial
        mode="wait"
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          key={asPath}
          variants={variants}
          transition={{ type: 'linear' }}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const DefaultLayout = ({ children } : PropsWithChildren) => (
  <div>
    <Head>
      <title>Patrick Carneiro - Software Developer</title>
      <meta name="description" content="Personal blog and portfolio." />
    </Head>
    <svg className="fixed h-screen w-full mix-blend-soft-light pointer-events-none z-20" xmlns="http://www.w3.org/2000/svg">
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
    <Transition>
      <main className="p-4 mx-auto max-w-4xl">
        {children}
      </main>
      <Footer />
    </Transition>
  </div>
);

export default DefaultLayout;
