import IMAGEPLACEHOLDER from "@/assets/placeholder.jpg";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function Artikel({ frontmatter, content }) {
  return (
    <div className="w-full py-10">
      <article className="container mx-auto prose-full prose-lg text-white">
        {/* check if frontmatter available, if some random image */}
        {!frontmatter.cover ? (
          <div className="overflow-hidden">
            <Image
              src={IMAGEPLACEHOLDER}
              alt=""
              className="w-full h-[720px] object-cover rounded-lg"
              width={1280}
              height={720}
            />
          </div>
        )
          : (
            <div className="overflow-hidden">
              <Image
                src={frontmatter.cover}
                alt=""
                className="w-full h-[720px] object-cover rounded-lg"
                width={1280}
                height={720}
              />
            </div>
          )}
        <h1 className="text-4xl font-bold pt-8 mb-3">{frontmatter.title}</h1>
        {/* render date in Indonesian locale */}
        <p className="text-gray-400 text-md my-0">
          {new Date(frontmatter.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}
