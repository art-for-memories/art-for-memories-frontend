import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Memory from "@/components/homepage/Memory";
import Partners from "@/components/homepage/Partners";
import TheirStories from "@/components/homepage/TheirStory";
import VideoQuote from "@/components/homepage/VideoQuote";
import Navbar from "@/components/Navbar";
import StoriesList from "@/components/lists/StoriesList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Memory />
      <TheirStories />

      <StoriesList title="" data={[
        {
          image: "/images/stories/story-1.png",
          type: "Written Story",
          date: "April 08th, 2025",
          title: "Uko Nabuze Mama Umbyara",
          author: "King NGABO",
          role: "Writer"
        },
        {
          image: "/images/stories/story-2.png",
          type: "Illustrated",
          date: "April 08th, 2025",
          title: "Sinibuka Uko Basega",
          author: "King NGABO",
          role: "Illustrator / Creator"
        },
        {
          image: "/images/stories/story-3.png",
          type: "Illustrated",
          date: "April 08th, 2025",
          title: "Umunsi Wa Nyuma Mbabona",
          author: "King NGABO",
          role: "Creator"
        }
      ]} />

      <VideoQuote />
      <Partners />
    </div>
  );
}
