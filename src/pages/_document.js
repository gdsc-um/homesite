import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head />
      <body className="bg-primarydark">
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
