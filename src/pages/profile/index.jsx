import CardName from "@/components/CardName";
import Infobox from "@/components/Infobox";
import fs from "fs";
import matter from "gray-matter";

export async function getStaticProps() {
  // Get Coreteam Data from JSON
  const readFile = fs.readFileSync(`src/data/coreteam.json`, "utf-8");
  const json = JSON.parse(readFile);
  const coreteam = json.coreteam;

  // Get About Pages data from Markdown
  const markdown = matter(fs.readFileSync("src/data/profile.md", "utf-8"));
  const { data: frontmatter } = markdown;
  return {
    props: {
      profiles: coreteam,
      frontmatter,
    },
  };
}

export default function Profile({ profiles, frontmatter, content }) {
  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <Infobox
          title="Tentang GDSC"
          content={frontmatter.tentang}
          parentClassname="bg-coreBlue-500"
        />
        <h1 className="text-xl font-bold text-white">Core Team</h1>
        <div className="w-full mx-auto container flex flex-wrap">
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
