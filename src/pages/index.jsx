import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/gdsc-global.png";
import ApaItu from "@/assets/apa-itu-gdsc.png";
import webdev from "@/assets/web-dev.png";
import mobiledev from "@/assets/mobile-dev.png";
import mlai from "@/assets/ml-ai.png";
// import Hero from "@/components/Hero";
// import LogoGDSC from "@/assets/gdsc-logo-light.png";

const title = "Google Developer Student Clubs UM";
const subtitle =
  "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* <Hero
        title={title}
        subtitle={subtitle}
        image={HeroImage}
        isBeranda={true}
        isBlog={false}
        isQuiz={false}
        isProfile={false}
      /> */}
      {/* Hero */}
      <div className="w-full h-[75vh] flex flex-col justify-center items-center bg-[#E8F5E9] gap-3">
        <Image alt="logo" src={HeroImage} width={180} height={92} />
        <h1 className="text-black font-normal text-6xl">#WeGrowAsOne☝</h1>
        <h2 className="text-[#4D4D4D] font-normal text-2xl text-center">
          Official Page of Google Developer Student Clubs
          <br />
          Universitas Negeri Malang
        </h2>
        <div className="flex items-center gap-3">
          <Link href={"/profil"}>
            <div className="bg-[#E3F2FD] px-5 py-2 rounded-xl text-[#498AF4] font-bold text-lg">
              Tentang Kami
            </div>
          </Link>
          <Link href={"/"}>
            <div className="bg-[#498AF4] px-5 py-2 rounded-xl text-[#E8F5E9] font-bold text-lg">
              Mulai Jelajahi
            </div>
          </Link>
        </div>
      </div>
      {/* Apa itu GDSC */}
      <div className="bg-[#498AF4] py-12 w-full">
        <div className="mx-auto container flex justify-center items-center gap-[100px]">
          <Image alt="apa-itu-gdsc" src={ApaItu} width={393} height={292} />
          <div className="flex flex-col items-start text-white gap-3">
            <h1 className="font-bold text-5xl">Apa itu GDSC?</h1>
            <p className="text-lg font-normal">
              Google Developer Student Clubs (GDSC) adalah komunitas pengembang
              berbasis universitas yang diinisiasi oleh Google. Komunitas ini
              menyediakan lingkungan belajar sesama rekan bagi mahasiswa yang
              tertarik dengan teknologi, mahasiswa dari jurusan apa pun
              dipersilakan untuk bergabung sebagai member.
            </p>
            <Link href={"/profil"}>
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
          <h3 className="text-center text-black font-bold text-2xl mb-8">
            Yang Dipelajari di GDSC UM
          </h3>
          <div className="grid lg:grid-cols-3 gap-3 px-16">
            <div className="w-full bg-[#3CAB5A] rounded-xl p-5 flex flex-col items-center justify-center gap-3">
              <Image alt="web-dev" src={webdev} width={134} height={134} />
              <h4 className="text-black font-bold text-xl">Web Development</h4>
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
              <h4 className="text-black font-bold text-xl">
                Mobile Development
              </h4>
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
              <h4 className="text-black font-bold text-xl">ML/AI</h4>
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
        <div className="w-full mx-auto container px-16">
          <h3 className="font-bold text-2xl text-black text-center">
            Artikel Terbaru
          </h3>
        </div>
      </div>
    </div>
  );
}
