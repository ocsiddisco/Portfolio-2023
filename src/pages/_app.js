import Layout from "@/components/Layout.js";
import "@/styles/Home.module.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
