import React from "react";
import LogoGDSC from "@/assets/logo_gdsc.svg";
import Image from "next/image";
import Link from "next/link";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Quiz",
    link: "/quiz",
  },
  {
    title: "Profile",
    link: "/profile",
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
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SITE MAP
            </h2>
            <nav className="flex mb-10 gap-5">
              {FooterLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className="text-white hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-[#010C1B] text-white">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2023 GDSC UM
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
