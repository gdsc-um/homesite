import Hero from "@/components/Hero";
import HeroImage from "@/assets/hero-beranda.png";

const title = "Google Developer Student Clubs UM";
const subtitle =
  "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Hero
        title={title}
        subtitle={subtitle}
        image={HeroImage}
        isBeranda={true}
        isBlog={false}
        isQuiz={false}
        isProfile={false}
      />
    </div>
  );
}
