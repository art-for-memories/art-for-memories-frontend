import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import type { Metadata } from "next";
import Layout from "@/components/Layout";
import OurCommunity from "@/components/sections/OurCommunity";
import Blogs from "@/components/sections/blogs";

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
  return (
    <Layout>
      <div className="overflow-x-hidden">
        <Hero />
        <OurCommunity />
        <Blogs />
        <Partners />
      </div >
    </Layout >
  );
}
