import React from "react";
import HeroImage from "@/assets/hero-beranda.png";
import Image from "next/image";
import Link from "next/link";

const HeroBeranda = () => {
  return (
    <div className="w-full bg-[#021523] px-12 py-12">
      <div className="flex lg:flex-row flex-col items-center gap-7 lg:gap-0">
        <div className="order-2 lg:order-1 text-center lg:text-left w-full lg:w-2/3 flex flex-col gap-3 items-center lg:items-start">
          <h1 className="text-[#FBBF0E] font-bold text-4xl uppercase">
            Google Developer Student Clubs UM
          </h1>
          <h3 className="text-white text-lg">
            Google Developer Student Clubs are university based community groups
            for students interested in Google developer technologies.By joining
            a GDSC, students grow their knowledge in a peer-to-peer learning
            environment and build solutions for local businesses and their
            community.
          </h3>
          <Link href={"/profile"}>
            <div className="bg-[#043559] mt-3 text-white text-lg rounded px-5 py-2 flex grow-0 items-center gap-3">
              <div className="bg-[#D9D9D9] w-5 h-5 rounded-full"></div>
              Tentang Kami
            </div>
          </Link>
          {/* Bingung nganu search bar nya hahaha */}
          {/* <div className="mt-[50px] flex flex-col gap-3">
            <h3 className="text-white text-lg">Cari artikel di sini</h3>
          </div> */}
        </div>
        <div className="order-1 lg:order-last w-full lg:w-1/3 flex justify-center">
          <div className="w-[280px] h-[280px] lg:w-[20vw] lg:h-[20vw] relative overflow-hidden rounded-2xl">
            <Image
              alt="hero"
              src={HeroImage}
              className="object-cover object-center"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBeranda;
