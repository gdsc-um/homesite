import HeroBeranda from "@/components/HeroBeranda";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HeroBeranda />
    </div>
  );
}
