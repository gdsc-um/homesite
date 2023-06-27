import ArticleCard from "@/components/ArticleCard";
import fs from "fs";
import Head from "next/head";

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
    <div className="w-full min-h-screen bg-white">
      <Head>
        <title>Daftar Quiz | GDSC Universitas Negeri Malang</title>
        <meta
          name="description"
          content="Daftar quiz yang disediakan oleh GDSC UM"
        />
      </Head>
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-center text-3xl lg:text-6xl font-bold text-black">
          Quiz & Latihan
        </h1>
        <div className="grid lg:grid-cols-3 gap-3 mt-8 px-5">
          {quizzes.map(({ slug, metadata }) => (
            <ArticleCard
              slug={`/quiz/${slug}`}
              frontmatter={metadata}
              key={slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
