import LogoGDSC from "@/assets/logo_gdsc.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Profile",
    link: "/profile",
  },
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Quiz",
    link: "/quiz",
  },
  {
    title: "Artikel",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#010C1B]">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-center lg:justify-between md:flex-row md:flex-nowrap flex-wrap flex-col bg-[#010C1B]">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <div className="relative overflow-visible">
              <Image
                alt="logo"
                src={LogoGDSC}
                width={330}
                height={34}
                // fill={true}
                className="object-cover object-center"
              />
            </div>
          </Link>
        </div>
        <div className="flex-grow lg:flex-grow-0 flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center lg:gap-8">
          <div className="w-full px-4">
            <p className="title-font font-semibold text-white tracking-widest text-sm mb-3">
              SITE MAP
            </p>
            <nav className="flex justify-center mb-10 gap-5">
              {FooterLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="text-white font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
            <Link
              href="https://vercel.com?utm_source=gdsc-um&utm_campaign=oss"
              className="flex justify-center mb-10 gap-5 lg:justify-end lg:items-end"
            >
              <Image
                alt="vercel-spnsors"
                src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
                width={220}
                height={30}
                className="object-cover object-center"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#010C1B] text-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2023 GDSC UM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
