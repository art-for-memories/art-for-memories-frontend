import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Memory from "@/components/homepage/Memory";
import Partners from "@/components/homepage/Partners";
import TheirStories from "@/components/homepage/TheirStory";
import VideoQuote from "@/components/homepage/VideoQuote";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Memory />
      <TheirStories />
      <VideoQuote />
      <Partners />
    </div>
  );
}
