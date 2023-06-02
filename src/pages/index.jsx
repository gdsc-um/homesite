import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-screen mx-auto container flex justify-center items-center">
      <h1 className="text-xl font-bold">Home nih bos!</h1>
    </div>
  );
}
