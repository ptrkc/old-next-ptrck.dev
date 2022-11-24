import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => (
  <Html className="dark">
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <body className="bg-orange-100 text-neutral-800 transition-[background-color] dark:bg-black dark:text-orange-100 dark:noisy">
      <Script id="prevent-flash" strategy="beforeInteractive">
        {
          "if(typeof window!=='undefined'&&window.localStorage.isDark==='false'){document.documentElement.classList.remove('dark')}"
        }
      </Script>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
