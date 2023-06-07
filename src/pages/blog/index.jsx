import ArticleCard from "@/components/ArticleCard";
import HeroBlog from "@/components/HeroBlog";
import fs from "fs";
import matter from "gray-matter";

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
    <div className="w-full min-h-screen">
      <HeroBlog />
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-xl font-bold text-white">Postingan Terbaru</h1>
        <div className="w-full mx-auto container flex flex-wrap">
          {posts.map(({ slug, frontmatter }) => (
            <ArticleCard slug={slug} frontmatter={frontmatter} key={slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
