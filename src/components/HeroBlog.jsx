import React from "react";
import HeroImage from "@/assets/hero-blog.png";
import Image from "next/image";

const HeroBlog = () => {
  return (
    <div className="w-full bg-[#021523] px-12 py-12">
      <div className="flex lg:flex-row flex-col items-center gap-7 lg:gap-0">
        <div className="order-2 lg:order-1 text-center lg:text-left w-full lg:w-2/3 flex flex-col gap-3">
          <h1 className="text-[#FBBF0E] font-bold text-4xl uppercase">
            Headline Page
          </h1>
          <h3 className="text-white text-lg">
            Ini adalah halaman blog yang menyimpang berbagai artikel , berita
            dan pengumuman dari google developer student club
          </h3>
          {/* Bingung nganu search bar nya hahaha */}
          {/* <div className="mt-[50px] flex flex-col gap-3">
            <h3 className="text-white text-lg">Cari artikel di sini</h3>
          </div> */}
        </div>
        <div className="order-1 lg:order-last w-full lg:w-1/3 flex justify-center">
          <div className="w-[350px] lg:w-full h-[250px] lg:h-[300px] relative overflow-visible">
            <Image
              alt="hero"
              src={HeroImage}
              className="object-fill lg:object-cover object-center"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;
