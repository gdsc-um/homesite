import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts }) {
  return (
    <div className="w-full min-h-screen mx-auto container flex justify-center items-center">
      <h1 className="text-xl font-bold">Blog nih bos!</h1>
      <div className="w-full min-h-screen mx-auto container flex justify-center items-center flex-col">
        {posts.map(({ slug, frontmatter }) => (
          <Link href={`/blog/${slug}`} key={slug}>
            <h2 className="text-center text-[#262626] text-[1.5vw] font-semibold">
              {frontmatter.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
