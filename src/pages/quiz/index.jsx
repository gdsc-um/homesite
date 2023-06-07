import ArticleCard from "@/components/ArticleCard";
import HeroBlog from "@/components/HeroBlog";
import fs from "fs";

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

    <div className="w-full min-h-screen">
      <HeroBlog />
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-xl font-bold text-white">Quiz & Latihan</h1>
        <div className="w-full mx-auto container flex flex-wrap">
          {quizzes.map(({ slug, metadata }) => (
            <ArticleCard slug={slug} frontmatter={metadata} key={slug} />
          ))}
        </div>
      </div>
    </div>
  );
}
