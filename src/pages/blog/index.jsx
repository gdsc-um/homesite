import HeroBlog from "@/components/HeroBlog";
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
    <div className="w-full min-h-screen">
      <HeroBlog />
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-xl font-bold text-white">Postingan Terbaru</h1>
        <div className="w-full mx-auto container flex flex-wrap">
          {posts.map(({ slug, frontmatter }) => (
            <Link
              href={`/blog/${slug}`}
              key={slug}
              className="lg:w-1/3 sm:w-1/2 w-full p-3"
            >
              <div className="relative h-full rounded-lg border-2 border-gray-300 flex flex-col gap-3 overflow-hidden p-5 text-white">
                <div className="w-full h-60 bg-[#D9D9D9] rounded"></div>
                <h2 className="text-[1.5vw] font-semibold">
                  {frontmatter.title}
                </h2>
                <h4>3 Juni 2023</h4>
                <p>
                  sinopsis dari artikel ini , tujuan , atau apalah itu pokok
                  agak panjang atau waktu input diberi input sinopsis, taruh
                  sini
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="px-3 py-1 rounded border-2 border-gray-300">
                    {" "}
                    Kategori 1
                  </div>
                  <div className="px-3 py-1 rounded border-2 border-gray-300">
                    {" "}
                    Kategori 2
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
