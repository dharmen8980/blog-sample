import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "./components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <UserProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </NextUIProvider>
  );
}
