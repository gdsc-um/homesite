import IMAGEPLACEHOLDER from "@/assets/placeholder.jpg";
import Image from "next/image";
import Link from "next/link";

/**
 * @param {string} slug - the slug of the article
 * @param {object} frontmatter - the frontmatter of the article
 * @param {string} frontmatter.title - the title of the article
 * @param {string} frontmatter.date - the date of the article
 * @param {string} frontmatter.excerpt - the excerpt of the article
 * @param {string[]} frontmatter.tags - the tags of the article
 * @param {string} frontmatter.thumbnail - the thumbnail image of the article
 * @returns {JSX.Element} - the article card component
 */

export default function ArticleCard({ slug, frontmatter }) {
  let date = new Date(frontmatter.date).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`${slug}`}
      className="rounded-xl flex flex-col items-center justify-center gap-3 bg-white shadow-xl hover:outline hover:outline-coreBlue-500 hover:outline-offset-2"
    >
      <div className="relative h-full rounded-lg flex flex-col gap-3 overflow-hidden p-5 text-white ">
        <div className="w-full h-60 bg-[#D9D9D9] rounded">
          {frontmatter.thumbnail ? (
            <Image
              src={frontmatter.thumbnail}
              alt=""
              className="w-full h-60 object-cover rounded-lg"
              width={1280}
              height={720}
            />
          ) : (
            <Image
              src={IMAGEPLACEHOLDER}
              alt=""
              className="w-full h-60 object-cover rounded-lg"
              width={1280}
              height={720}
            />
          )}
        </div>
        <h3 className="text-2xl font-semibold text-black text-center lg:text-left">
          {frontmatter.title}
        </h3>
        <time
          dateTime={frontmatter.date}
          id="articledate"
          className="text-sm text-black text-center lg:text-left"
        >
          {date}
        </time>
        {frontmatter.excerpt && (
          <p className="text-sm text-black text-center lg:text-left">
            {frontmatter.excerpt.slice(0, 100)}...
          </p>
        )}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-sm bg-blue-900 rounded-full px-3 py-1"
              id="articletag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
