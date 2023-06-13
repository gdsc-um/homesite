import IMAGEPLACEHOLDER from "@/assets/placeholder.jpg";
import Image from "next/image";
import Link from "next/link";
// PLEASE NOTE: This component applies to the blog and the quiz page

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
    <Link href={`${slug}`} className="lg:w-1/3 sm:w-1/2 w-full p-3">
      <div className="relative h-full rounded-lg border-2 border-gray-300 flex flex-col gap-3 overflow-hidden p-5 text-white">
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
        <h2 className="text-m font-semibold">{frontmatter.title}</h2>
        {/* pull data from date frontmatter and convert it to indonesian locale */}
        <time dateTime={frontmatter.date} id="articledate" className="text-sm">
          {date}
        </time>
        {frontmatter.excerpt && (
          <p className="text-sm">{frontmatter.excerpt.slice(0, 100)}...</p>
        )}
        <div className="flex flex-wrap gap-3">
          {/* show the tags from the tags array, show max 3 tags */}
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
