import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import Head from "next/head";
import 'react-datepicker/dist/react-datepicker.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Bug Free Spoon</title>
        <meta name="description" content="Bug Free Spoon" />
        <link rel="icon" href="/ico/ico.png" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
