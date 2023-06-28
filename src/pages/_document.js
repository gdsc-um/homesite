import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/GDSC_Global.svg" />
      </Head>
      <body className="">
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
