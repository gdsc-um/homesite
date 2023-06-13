import Image from "next/image";
import Link from "next/link";

/**
 * @param {object} frontmatter - the frontmatter of the article
 * @param {string} frontmatter.name - the name of the person
 * @param {string} frontmatter.role - the role of the person
 * @param {string} frontmatter.picture - the picture of the person
 * @param {string} frontmatter.profile_url - the profile url of the person
 * @returns {JSX.Element} - the article card component
 */

export default function ArticleCard({ frontmatter }) {
  return (
    <Link
      href={`${frontmatter.profile_url}`}
      className="lg:w-1/3 sm:w-1/2 w-full p-3"
    >
      <div className="relative h-full rounded-lg border-2 border-gray-300 flex flex-col gap-3 overflow-hidden p-5 text-white">
        <div className="w-full h-60  rounded">
          <Image
            src={frontmatter.picture}
            alt="profile"
            fill
            className="w-full h-full object-cover object-center rounded-lg overflow-hidden"
          />
        </div>
        <h2 className="text-m font-semibold">{frontmatter.name}</h2>
        {/* show it's role */}
        <h4 className="text-sm">{frontmatter.role}</h4>
      </div>
    </Link>
  );
}
