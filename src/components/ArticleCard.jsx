import Link from "next/link";
// PLEASE NOTE: This component applies to the blog and the quiz page

export default function ArticleCard({ slug, frontmatter }) {
  return (
    <Link href={`${slug}`} className="lg:w-1/3 sm:w-1/2 w-full p-3">
      <div className="relative h-full rounded-lg border-2 border-gray-300 flex flex-col gap-3 overflow-hidden p-5 text-white">
        <div className="w-full h-60 bg-[#D9D9D9] rounded"></div>
        <h2 className="text-m font-semibold">{frontmatter.title}</h2>
        {/* pull data from date frontmatter and convert it to indonesian locale */}
        <h4 className="text-sm">
          {new Date(frontmatter.date).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h4>
        {/* check when the except is not present, if present show it and slice up to 100 character */}
        {frontmatter.excerpt && (
          <p className="text-sm">{frontmatter.excerpt.slice(0, 100)}...</p>
        )}
        <div className="flex flex-wrap gap-3">
          {/* show the tags from the tags array, show max 3 tags */}
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-sm bg-blue-900 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}


