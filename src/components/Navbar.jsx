import LogoGDSC from "@/assets/gdsc.jpg";
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
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              alt="logo"
              src={LogoGDSC}
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <span className="ml-3 text-xl">GDSC UM</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {NavLinks.map((link) => (
            <Link
              key={link.link}
              href={link.link}
              className="mr-5 hover:text-gray-900"
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
