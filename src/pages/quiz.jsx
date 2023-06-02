import fs from "fs";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("quizzes");
  const quizzes = files.map((fileName) => {
    const slug = fileName.replace(".json", "");
    return {
      slug,
    };
  });

  return {
    props: {
      quizzes,
    },
  };
}

export default function Quiz({ quizzes }) {
  return (
    <div className="w-full min-h-screen mx-auto container flex justify-center items-center">
      <h1 className="text-xl font-bold">Blog nih bos!</h1>
      <div className="w-full min-h-screen mx-auto container flex justify-center items-center flex-col">
        {posts.map(({ slug }) => (
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
