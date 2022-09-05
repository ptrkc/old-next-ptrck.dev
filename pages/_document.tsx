import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <body className="bg-neutral-900 text-white">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
