// src/pages/_app.tsx
import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import type { AppType } from "next/app"
import "../styles/globals.css"
import { trpc } from "../utils/trpc"

export { reportWebVitals } from "next-axiom"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
