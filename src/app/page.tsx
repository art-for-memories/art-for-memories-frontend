import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Memory from "@/components/sections/Memory";
import Partners from "@/components/sections/Partners";
import TheirStories from "@/components/sections/TheirStory";
import VideoQuote from "@/components/sections/VideoQuote";
import Navbar from "@/components/Navbar";
import StoriesList from "@/components/lists/StoriesList";
import type { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Art of Memories",
  description: "A group of artists spearheaded by King Ngabo launched Art for Memories in 2023 to assist Genocide Survivors in keeping memories alive by preserving photos of the victims of the Genocide against Tutsi in 1994. The initiative aims at creating new portraits of the dead and missing derived from old and often damaged photographs, inspired by King Ngabo.",
  keywords: ["memories", "art", "stories", "creative", "platform", "Genocide Survivors", "King Ngabo", "Ingabo Corner", "African stories"],
  robots: "index, follow",
  openGraph: {
    title: "Art of Memories",
    description: "A group of artists spearheaded by King Ngabo launched Art for Memories in 2023 to assist Genocide Survivors in keeping memories alive by preserving photos of the victims of the Genocide against Tutsi in 1994. The initiative aims at creating new portraits of the dead and missing derived from old and often damaged photographs, inspired by King Ngabo.",
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
  metadataBase: new URL("https://www.artofmemories.com"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Home() {
  const stories = [
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
    },
    {
      image: "/images/stories/story-4.png",
      type: "Written Story",
      date: "April 08th, 2025",
      title: "I LEFT MY FAMILY IN THE CATHEDRAL BOOK",
      author: "King NGABO",
      role: "Writer"
    }
  ];

  return (
    <Layout>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Memory />
        <TheirStories />
        <StoriesList title="" data={stories} />
        <VideoQuote />
        <Partners />
      </div>
    </Layout>
  );
}
