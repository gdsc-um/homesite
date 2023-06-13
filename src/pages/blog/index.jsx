import ArticleCard from "@/components/ArticleCard";
import Hero from "@/components/Hero";
import fs from "fs";
import matter from "gray-matter";
import HeroImage from "@/assets/hero-blog.png";

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
    <div className="w-full min-h-screen">
      <Hero
        title={title}
        subtitle={subtitle}
        image={HeroImage}
        isBeranda={false}
        isBlog={true}
        isQuiz={false}
        isProfile={false}
      />
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-xl font-bold text-white">Postingan Terbaru</h1>
        <div className="w-full mx-auto container flex flex-wrap">
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
