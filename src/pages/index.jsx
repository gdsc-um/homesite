import ApaItu from "@/assets/apa-itu-gdsc.png";
import HeroImage from "@/assets/gdsc-global.png";
import mlai from "@/assets/ml-ai.png";
import mobiledev from "@/assets/mobile-dev.png";
import webdev from "@/assets/web-dev.png";
import ArticleCard from "@/components/ArticleCard";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Head>
        <title>Beranda | GDSC Universitas Negeri Malang</title>
        <meta name="description" content="Official Page of Google Developer Student Clubs Universitas Negeri Malang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero */}
      <div className="w-full h-[75vh] flex flex-col justify-center items-center bg-[#E8F5E9] gap-3">
        <Image alt="logo" src={HeroImage} width={180} height={92} />
        <h1 className="text-black font-normal text-3xl lg:text-6xl">
          #WeGrowAsOne☝
        </h1>
        <p className="text-[#4D4D4D] font-normal text-sm lg:text-2xl text-center">
          Official Page of Google Developer Student Clubs
          <br />
          Universitas Negeri Malang
        </p>
        <div className="flex items-center gap-3">
          <Link href={"/profile"}>
            <div className="bg-[#E3F2FD] px-5 py-2 rounded-xl text-[#498AF4] font-bold text-sm lg:text-lg">
              Tentang Kami
            </div>
          </Link>
          <Link href={"/"}>
            <div className="bg-[#498AF4] px-5 py-2 rounded-xl text-[#E8F5E9] font-bold text-sm lg:text-lg">
              Mulai Jelajahi
            </div>
          </Link>
        </div>
      </div>
      {/* Apa itu GDSC */}
      <div className="bg-[#498AF4] py-12 w-full">
        <div className="mx-auto container flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-[100px] px-5">
          <Image alt="apa-itu-gdsc" src={ApaItu} width={393} height={292} />
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start text-white gap-3">
            <h2 className="font-bold text-3xl lg:text-5xl">Apa itu GDSC?</h2>
            <p className="text-lg font-normal">
              Google Developer Student Clubs (GDSC) adalah komunitas pengembang
              berbasis universitas yang diinisiasi oleh Google. Komunitas ini
              menyediakan lingkungan belajar sesama rekan bagi mahasiswa yang
              tertarik dengan teknologi, mahasiswa dari jurusan apa pun
              dipersilakan untuk bergabung sebagai member.
            </p>
            <Link href={"/profile"}>
              <div className="bg-[#E3F2FD] px-5 py-2 rounded-xl text-[#498AF4] font-bold text-lg">
                Selengkapnya
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Apa yang dipelajarin */}
      <div className="bg-white py-12 w-full">
        <div className="mx-auto container">
          <h2 className="text-center pb-4 pt-2 text-black font-bold text-3xl lg:text-5xl mb-8 lg:px-0 px-5">
            Yang Dipelajari di GDSC UM
          </h2>
          <div className="grid lg:grid-cols-3 gap-3 px-5 lg:px-16">
            <div className="w-full bg-[#3CAB5A] rounded-xl p-5 flex flex-col items-center justify-center gap-3">
              <Image alt="web-dev" src={webdev} width={134} height={134} />
              <p className="text-black font-bold text-xl">Web Development</p>
              <div className="flex gap-1 items-center">
                <div className="bg-[#E3F2FD] text-[#498AF4] font-normal rounded-full text-xs px-3 py-1">
                  HTML
                </div>
                <div className="bg-[#E3F2FD] text-[#3CAB5A] font-normal rounded-full text-xs px-3 py-1">
                  CSS
                </div>
                <div className="bg-[#FFF8E1] text-[#FBBF0E] font-normal rounded-full text-xs px-3 py-1">
                  JavaScript
                </div>
                <div className="bg-[#FFEBEE] text-[#EB4A3D] font-normal rounded-full text-xs px-3 py-1">
                  React
                </div>
              </div>
            </div>
            <div className="w-full bg-[#EB4A3D] rounded-xl p-5 flex flex-col items-center justify-center gap-3">
              <Image alt="web-dev" src={mobiledev} width={134} height={134} />
              <p className="text-black font-bold text-xl">
                Mobile Development
              </p>
              <div className="flex gap-1 items-center">
                <div className="bg-[#E3F2FD] text-[#498AF4] font-normal rounded-full text-xs px-3 py-1">
                  Android
                </div>
                <div className="bg-[#E3F2FD] text-[#3CAB5A] font-normal rounded-full text-xs px-3 py-1">
                  Flutter
                </div>
              </div>
            </div>
            <div className="w-full bg-[#498AF4] rounded-xl px-5 py-8 flex flex-col items-center justify-center gap-3">
              <Image alt="web-dev" src={mlai} width={134} height={134} />
              <p className="text-black font-bold text-xl">ML/AI</p>
              <div className="flex gap-1 items-center">
                <div className="bg-[#E3F2FD] text-[#498AF4] font-normal rounded-full text-xs px-3 py-1">
                  Python
                </div>
                <div className="bg-[#E3F2FD] text-[#3CAB5A] font-normal rounded-full text-xs px-3 py-1">
                  TensorFlow
                </div>
                <div className="bg-[#FFF8E1] text-[#FBBF0E] font-normal rounded-full text-xs px-3 py-1">
                  Keras
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Artikel terbaru */}
      <div className="bg-[#E3F2FD] py-12">
        <div className="w-full mx-auto container px-5 lg:px-16 flex flex-col justify-center items-center">
          <h2 className="font-bold text-3xl lg:text-5xl lg:px-0 px-5 py-4 text-black text-center">
            Artikel Terbaru
          </h2>
          <div className="grid lg:grid-cols-3 gap-3 mt-8">
            {posts.map(({ slug, frontmatter }) => (
              <ArticleCard
                slug={`/blog/${slug}`}
                frontmatter={frontmatter}
                key={slug}
              />
            ))}
          </div>
          <Link
            className="mt-8 px-6 py-3 bg-coreBlue-primary rounded-full text-white text-xl hover:bg-coreBlue-500 hover:outline-offset-2 hover:outline hover:outline-coreBlue-500"
            href={"/blog"}
          >
            Lihat artikel lainnya
          </Link>
        </div>
      </div>
    </div>
  );
}
