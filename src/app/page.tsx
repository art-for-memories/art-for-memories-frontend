import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Memory from "@/components/homepage/Memory";
import Partners from "@/components/homepage/Partners";
import TheirStories from "@/components/homepage/TheirStory";
import VideoQuote from "@/components/homepage/VideoQuote";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative bg-white">
        <About />
        <Memory />
      </div>
      <TheirStories />
      <VideoQuote />
      <Partners />
    </div>
  );
}
