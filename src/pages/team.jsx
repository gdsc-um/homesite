import CardName from "@/components/CardName";
import fs from "fs";
import Head from "next/head";

export async function getStaticProps() {
  const readFile = fs.readFileSync(`src/data/coreteam.json`, "utf-8");
  const json = JSON.parse(readFile);
  const coreteam = json.coreteam;

  return {
    props: {
      profiles: coreteam,
    },
  };
}

export default function Team({ profiles }) {
  return (
    <div className="w-full min-h-screen bg-white">
      <Head>
        <title>Core Team | GDSC Universitas Negeri Malang</title>
        <meta
          name="description"
          content="Core Team GDSC Universitas Negeri Malang"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-3xl lg:text-6xl text-center font-bold text-coreBlue-primary">
          Ini adalah tim kami
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 mt-8">
          {/* looping more card for coreteam */}
          {profiles.map((coreteam) => (
            // looping card with length of coreteam
            <CardName frontmatter={coreteam} key={coreteam.uuid} />
          ))}
        </div>
      </div>
    </div>
  );
}
