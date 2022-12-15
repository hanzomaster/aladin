// src/pages/_app.tsx
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import Footer from "../components/footer";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

export { reportWebVitals } from "next-axiom";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <CartProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </CartProvider>
  );
};

export default trpc.withTRPC(MyApp);
