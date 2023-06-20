import LogoGDSC from "@/assets/gdsc-logo-light.png";
import Image from "next/image";
import Link from "next/link";

const NavLinks = [
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

const Navbar = () => {
  return (
    <header className="text-black body-font bg-white border-b-2">
      <div className="container mx-auto flex flex-wrap px-0 py-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center">
          <div className="w-[250px] h-[25px] lg:w-[350px] lg:h-[35px] relative overflow-visible">
            <Image
              alt="logo"
              src={LogoGDSC}
              fill={true}
              className="object-fill text-black"
            />
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {NavLinks.map((link) => (
            <Link key={link.link} href={link.link} className="mr-5 text-black">
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
