import ArticleCard from "@/components/ArticleCard";
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

const title = "Headline Page";
const subtitle =
  "Ini adalah halaman blog yang menyimpan berbagai artikel, berita dan pengumuman dari google developer student club.";

export default function Blog({ posts }) {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-6xl font-bold text-black">Postingan Terbaru</h1>
        <div className="grid lg:grid-cols-3 gap-3 mt-8">
          {posts.map(({ slug, frontmatter }) => (
            <ArticleCard
              slug={`/blog/${slug}`}
              frontmatter={frontmatter}
              key={slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
