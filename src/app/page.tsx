import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Memory from "@/components/sections/Memory";
import Partners from "@/components/sections/Partners";
import TheirStories from "@/components/sections/TheirStory";
import VideoQuote from "@/components/sections/VideoQuote";
import Navbar from "@/components/Navbar";
import StoriesList from "@/components/lists/StoriesList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art of Memories",
  description: "Art of Memories is a platform that allows you to share your memories in a creative way.",
  keywords: ["memories", "art", "stories", "creative", "platform"],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Art of Memories",
    description: "Art of Memories is a platform that allows you to share your memories in a creative way.",
    url: "https://www.artofmemories.com",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Art of Memories",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
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
