import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = (props) => {
  return (
    <div className="w-full bg-[#021523] px-12 py-12">
      <div className="flex lg:flex-row flex-col items-center gap-7 lg:gap-0">
        <div className="order-2 lg:order-1 text-center lg:text-left w-full lg:w-2/3 flex flex-col gap-3 items-center lg:items-start">
          <h1 className="text-[#FBBF0E] font-bold text-4xl uppercase">
            {props.title}
          </h1>
          <h3 className="text-white text-lg">{props.subtitle}</h3>
          {props.isBeranda && (
            <Link href={"/profile"}>
              <div className="bg-[#043559] mt-3 text-white text-lg rounded px-5 py-2 flex grow-0 items-center gap-3">
                <div className="bg-[#D9D9D9] w-5 h-5 rounded-full"></div>
                Tentang Kami
              </div>
            </Link>
          )}
        </div>
        {props.isBeranda && (
          <div className="order-1 lg:order-last w-full lg:w-1/3 flex justify-center">
            <div className="w-[280px] h-[280px] lg:w-[20vw] lg:h-[20vw] relative overflow-hidden rounded-2xl">
              <Image
                alt="hero"
                src={props.image}
                className="object-cover object-center"
                fill
              />
            </div>
          </div>
        )}
        {props.isBlog && (
          <div className="order-1 lg:order-last w-full lg:w-1/3 flex justify-center">
            <div className="w-[350px] lg:w-full h-[250px] lg:h-[300px] relative overflow-visible">
              <Image
                alt="hero"
                src={props.image}
                className="object-fill lg:object-cover object-center"
                fill
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
