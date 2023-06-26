import IMAGEPLACEHOLDER from "@/assets/placeholder.jpg";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
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
    <div className="w-full py-10 bg-white">
      <Head>
        <title>{frontmatter.title} | GDSC Universitas Negeri Malang</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <article className="container mx-auto prose-full prose-lg text-black mb-20">
        {/* check if frontmatter available, if some random image */}
        {!frontmatter.thumbnail ? (
          <div className="overflow-hidden px-5">
            <Image
              src={IMAGEPLACEHOLDER}
              alt=""
              className="w-full lg:h-[720px] h-80 object-cover rounded-lg"
              width={1280}
              height={720}
            />
          </div>
        ) : (
          <div className="overflow-hidden px-5">
            <Image
              src={frontmatter.thumbnail}
              alt=""
              className="w-full lg:h-[720px] h-80 object-cover rounded-lg"
              width={1280}
              height={720}
            />
          </div>
        )}
        <h1 className="text-3xl lg:text-6xl text-black font-bold pt-8 mb-3 text-center">
          {frontmatter.title}
        </h1>
        {/* render date in Indonesian locale */}
        <p className="text-black text-md my-0 text-center">
          {new Date(frontmatter.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <ReactMarkdown className="text-black px-5 lg:px-32 text-justify">
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
