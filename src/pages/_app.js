import "@/styles/globals.css";
import localFont from "next/font/local";

const googlesans = localFont({
  src: [
    {
      path: "../assets/Fonts/GoogleSans-Regular-v1.27.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/Fonts/GoogleSans-Italic-v1.27.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/Fonts/GoogleSans-Medium-v1.27.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/Fonts/GoogleSans-MediumItalic-v1.27.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/Fonts/GoogleSans-Bold-v1.27.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/Fonts/GoogleSans-BoldItalic-v1.27.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={googlesans.className}>
      <Component {...pageProps} />
    </main>
  );
}
