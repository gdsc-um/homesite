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
      className="rounded-xl flex flex-col items-center justify-center border-2 border-coreBlue-100 gap-3 bg-coreBlue-50 shadow-xl hover:outline hover:outline-coreBlue-500 hover:outline-offset-2"
    >
      <div className="relative h-full flex flex-col gap-2 overflow-hidden p-5 text-center">
        <div className="w-full h-60 rounded">
          <img
            src={`${frontmatter.picture}`}
            alt="profile"
            className="h-60 p-4 rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">{frontmatter.name}</h2>
        {/* show it's role */}
        <p className="">{frontmatter.role}</p>
      </div>
    </Link>
  );
}
