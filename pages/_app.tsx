import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <h1 className='friday'>Bu gün cümədir?</h1>
        <title>Qarabağ Azərbaycandır!</title>
        <link rel="shortcut icon" href="/images/azerbaijan.png" />
      </Head>
      <Component {...pageProps} /> <Analytics />
    </>
  );
}
