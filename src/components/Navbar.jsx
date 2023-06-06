import LogoGDSC from "@/assets/logo_gdsc.svg";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
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

const Navbar = () => {
  return (
    <header className="text-white body-font shadow-md bg-[#010C1B]">
      <div className="container mx-auto flex flex-wrap px-0 py-5 flex-col md:flex-row items-center bg-[#010C1B]">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white "
        >
          <div className="w-[350px] h-[35px] relative overflow-visible bg-[#010C1B]">
            <Image
              alt="logo"
              src={LogoGDSC}
              fill={true}
              className="object-cover object-center bg-[#010C1B]"
            />
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center bg-[#010C1B]">
          {NavLinks.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="mr-5 bg-[#010C1B] text-white hover:text-gray-900"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
