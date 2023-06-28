import Head from "next/head";
import ImageNotFound from "@/assets/404.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center px-5 bg-white space-y-4">
      <Head>
        <title>Halaman tidak tersedia | GDSC Universitas Negeri Malang</title>
        <meta name="description" content="Halaman tidak tersedia" />
      </Head>
      <Image src={ImageNotFound} alt="Maitenance" className="" />
      <p className="text-center text-5xl font-semibold text-coreBlue-primary">
        Oops.. Halaman tidak ada.
      </p>
      <p className="text-center text-xl text-gray-900">
        Mohon maaf, halaman yang kamu cari tidak ditemukan
      </p>
      <Link
        className="px-7 py-3 bg-coreBlue-primary hover:bg-coreBlue-500 text-white hover:outline hover:outline-coreBlue-500 hover:outline-offset-2 rounded-full"
        href={"/"}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
