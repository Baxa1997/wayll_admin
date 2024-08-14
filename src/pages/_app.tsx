import React from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { EffectorNext } from "@effector/next";
import { useUnit } from "effector-react";

import "@/styles/globals.css";

import { Header, Footer } from "@/widgets/layout";

import { routeChanged } from "@/model/router";

import { config } from "@/shared/config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={config.font.className}>
      <EffectorNext values={pageProps.values}>
        <RouterListener />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </EffectorNext>
      <Toaster />
    </main>
  );
}

const RouterListener = () => {
  const router = useRouter();
  const onRouteChanged = useUnit(routeChanged);

  React.useEffect(() => {
    onRouteChanged({
      path: router.pathname,
      asPath: router.asPath,
      query: router.query,
    });
  }, [router.asPath]);
  return null;
};
