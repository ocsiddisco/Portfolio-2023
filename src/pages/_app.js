import Layout from "@/components/Layout.js";
import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Céline's Portfolio</title>
        <meta
          name="description"
          content="Portfolio from a career switcher looking to break into Front-End Development."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
