import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";
import NextNProgress from "nextjs-progressbar";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";
import { useAnalytics } from "@/data/firebase-config";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const analytics = useAnalytics();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logEvent(analytics, "page_view", { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, analytics]);

  return (
    <Layout>
      <NextNProgress
        color="#196b58"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
