import CardName from "@/components/CardName";
import HeroBlog from "@/components/HeroBlog";
import fs from "fs";

export async function getStaticProps() {
  const readFile = fs.readFileSync(`profiles/coreteam.json`, "utf-8");
    const json = JSON.parse(readFile);
    const coreteam = json.coreteam;
    

  return {
    
    props: {
      profiles: coreteam,
    },
  };
    
}

export default function Profile({ profiles }) {
  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto container py-32 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-xl font-bold text-white">Core Team</h1>
        <div className="w-full mx-auto container flex flex-wrap">
          {/* looping more card for coreteam */}
          {
            profiles.map((coreteam) => (
              // looping card with length of coreteam
              <CardName frontmatter={coreteam} key={slug}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
