import fs from "fs";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("quizzes");
  const quizzes = files.map((fileName) => {
    const slug = fileName.replace(".json", "");
    const readFile = fs.readFileSync(`quizzes/${fileName}`, "utf-8");
    const json = JSON.parse(readFile);
    const metadata = json.metadata;
    return {
      slug,
      metadata,
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
      <h1 className="text-xl font-bold">Quiz nih bos!</h1>
      <div className="w-full min-h-screen mx-auto container flex justify-center items-center flex-col">
        {quizzes.map(({ slug, metadata }) => (
          <Link href={`/quiz/${slug}`} key={slug}>
            <h2 className="text-center text-[#262626] text-[1.5vw] font-semibold">
              {metadata.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
