/* eslint-disable react/no-unescaped-entities */
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
import Download from "@/components/sections/download";
import Image from "next/image";

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
        <Download />

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="relative pt-20 px-4 bg-black overflow-hidden rounded-3xl">
              <div className="text-center md:max-w-xl mx-auto removed pb-20"><span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">Learn to code</span>
                <h2 className="font-heading mb-6 text-7xl text-white tracking-8xl">Want to build templates like this one?</h2><a className="mb-8 text-gray-300 relative z-10" href="https://www.pixelrocket.store">Visit www.pixelrocket.store and learn to become a frontend web developer today</a>
                <Image width={500} height={500} className="absolute left-0 top-0 bottom-0 right-0 z-0" src="/images/vectors/lines2.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto mb-24 text-center">
              <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">Our commitment to green energy is paving the way for a cleaner, healthier planet. </h1><a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200" href="#">Get in touch</a>
            </div>
            <div className="flex justify-center">
              <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><Image width={500} height={500} className="block w-52 rounded-2xl" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
              <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><Image width={500} height={500} className="block w-52 rounded-2xl" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
              <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><Image width={500} height={500} className="block w-52 rounded-2xl" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
              <div className="flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8"><Image width={500} height={500} className="block w-52 rounded-2xl" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
              <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8"><Image width={500} height={500} className="block w-52 rounded-2xl" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
              <div className="hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8"><Image width={500} height={500} className="block w-52 rounded-2xl" src="https://www.newtimes.co.rw/thenewtimes/uploads/images/2023/04/07/thumbs/1200x700/15973.jpg" alt="" /></div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
              <h1 className="mb-16 font-semibold text-6xl sm:text-9xl xl:text-11xl font-heading"><span>Join the community, and change</span>              <span className="bg-orange-50 rounded-lg px-4 mt-1 inline-block">the future.</span></h1>
              <p className="font-semibold text-2xl text-neutral-600 tracking-tight">Your journey to digital excellence starts here.</p>
            </div>
            <div className="mb-20">
              <div className="flex flex-wrap -m-2.5">
                <div className="w-full md:w-1/2 xl:w-8/12 p-2.5">
                  <div className="h-full p-10 bg-white rounded-5xl">
                    <div className="mb-24">
                      <h4 className="mb-2 text-5xl font-medium tracking-tight font-heading">Digital app</h4>
                      <p className="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">Can create, connect, verify, and search across all you knowledge platforms is one centralized, secure place - accelarating productivity.</p>
                    </div>
                    <div className="flex flex-wrap justify-between items-end -m-8">
                      <div className="w-auto p-8"><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">More</a></div>
                      <div className="w-auto p-8"><img className="h- object-cover" src="template-assets/images/services/draw.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-4/12 p-2.5">
                  <div className="h-full p-10 bg-white rounded-5xl">
                    <div className="flex flex-col justify-between h-full">
                      <div className="w-full">
                        <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">Content marketing</h4>
                        <p className="mb-4 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Our company provides content strategies and creates valuable...</p><img className="mx-auto mb-8 h-64 object-cover" src="template-assets/images/services/draw2.png" alt="" />
                      </div>
                      <div className="w-full"><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">More</a></div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-2.5">
                  <div className="h-full p-10 bg-white rounded-5xl">
                    <div className="flex flex-col justify-between h-full">
                      <div className="w-full">
                        <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">Email marketing</h4>
                        <p className="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">We design personalized email marketing campaigns that help build lasting customer...</p><img className="mb-8 h-44 mx-auto object-cover" src="template-assets/images/services/draw3.png" alt="" />
                      </div>
                      <div className="w-full"><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">More</a></div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-2.5">
                  <div className="h-full p-10 bg-white rounded-5xl">
                    <div className="flex flex-col justify-between h-full">
                      <div className="w-full">
                        <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">User-flow</h4>
                        <p className="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">Our data analysis service provides accurate insights into the results of your marketing efforts.</p><img className="mb-8 h-24 object-cover mx-auto" src="template-assets/images/services/draw4.png" alt="" />
                      </div>
                      <div className="w-full"><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">More</a></div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full xl:w-1/3 p-2.5">
                  <div className="h-full p-10 bg-white rounded-5xl">
                    <div className="flex flex-col justify-between h-full">
                      <div className="w-full">
                        <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">Email marketing</h4>
                        <p className="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">We design personalized email marketing campaigns that help build lasting customer...</p><img className="mb-8 h-36 object-cover mx-auto" src="template-assets/images/services/draw5.png" alt="" />
                      </div>
                      <div className="w-full"><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">More</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-auto"><a className="inline-flex justify-center items-center text-center h-20 p-5 font-semibold tracking-tight text-2xl text-white bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">Learn more</a></div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 xl:pb-64 bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="mb-12 md:mb-20 max-w-5xl">
              <h1 className="relative text-6xl sm:text-9xl xl:text-11xl text-white font-semibold font-heading"><span className="mr-3">Innovate, educate, and</span>              <span className="relative inline-block"><span className="relative z-10">Dominate Online</span>                <span className="absolute -bottom-2 left-0 h-2.5 w-full bg-green-100 rounded-full"></span></span></h1>
            </div>
            <h3 className="mb-8 text-4xl text-white font-semibold tracking-tight font-heading">The most important news</h3>
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                <div className="flex flex-col h-full justify-center p-10 bg-white rounded-5xl">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">Customized Campaigns</h4>
                    </div>
                  </div>
                  <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Tailor your marketing approach with our customizable campaigns. We work closely with you to understand your unique goals and audience, designing personalized strategies that ensure your message reaches the right people at the right time.</p>
                </div>
              </div>
              <div className="relative xl:top-20 w-full md:w-1/2 xl:w-1/3 p-3">
                <div className="mb-6 p-10 bg-white rounded-5xl">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">Data-Driven Insights</h4>
                    </div>
                  </div>
                  <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Unlock the power of data with our advanced analytics tools. Gain actionable insights into customer behavior, market trends, and campaign performance</p>
                </div>
                <div className="p-10 bg-white rounded-5xl">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">Customer Support</h4>
                    </div>
                  </div>
                  <p className="text-neutral-600 font-medium tracking-tight max-w-sm">We're here for you around the clock. Our dedicated support team is ready to assist with any questions or concerns you may have.</p>
                </div>
              </div>
              <div className="relative xl:top-40 w-full xl:w-1/3 p-3">
                <div className="flex flex-col h-full justify-center p-10 bg-white rounded-5xl">
                  <div className="flex flex-wrap items-center -m-3 mb-5">
                    <div className="w-auto p-3">
                      <div className="flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full"><img src="template-assets/images/features/sticker.svg" alt="" /></div>
                    </div>
                    <div className="flex-1 p-3">
                      <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">A/B Testing and Optimization</h4>
                    </div>
                  </div>
                  <p className="text-neutral-600 font-medium tracking-tight max-w-sm">Maximize the effectiveness of your digital campaigns through A/B testing and continuous optimization. We fine-tune your content, ads, and user experience to increase engagement, conversions, and overall success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl sm:text-9xl xl:text-11xl mb-12 font-semibold font-heading">Blog</h1>
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full bg-white rounded-4xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Big news</span>                <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">The Rise of Video Marketing: Engage Your Audience Like Never Before!</a>
                  <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Video marketing is taking the digital world by storm. Discover how to captivate your audience and boost engagement with compelling video content.</p>
                  <div className="flex flex-wrap gap-6 mb-14">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-100"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">design</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-200"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 12 Oct, 4 AM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full bg-white rounded-4xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Main room</span>                <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">Email Marketing Done Right: Crafting Campaigns That Convert</a>
                  <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Email marketing remains a powerful tool for conversions. Explore the art of crafting email campaigns that resonate with your audience and drive results.</p>
                  <div className="flex flex-wrap gap-6 mb-14">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-100"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">campaigns</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-200"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 11 Oct, 8 AM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full bg-white rounded-4xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Design room</span>                <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">Unlocking the Power of SEO: Your Guide to Higher Search Rankings</a>
                  <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Want to enhance your online visibility? Dive into the world of SEO to climb search engine rankings and drive more organic traffic to your website.</p>
                  <div className="flex flex-wrap gap-6 mb-14">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-100"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">design</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-200"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 11 Oct, 6 AM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full bg-white rounded-4xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Main room</span>                <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">Social Media Advertising Secrets: Boost Your Brand's Presence</a>
                  <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Maximize your brand's reach and impact by leveraging the potential of social media advertising. Learn the strategies to create a strong online presence.</p>
                  <div className="flex flex-wrap gap-6 mb-14">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-100"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">design</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-200"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 10 Oct, 7 PM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-3">
                <div className="h-full bg-white rounded-4xl px-6 md:px-12 py-12"><span className="block text-neutral-600 text-xl font-semibold mb-6 tracking-tight">Big news</span>                <a className="block text-neutral-800 text-3xl md:text-5xl font-semibold hover:underline mb-3 max-w-sm md:max-w-lg tracking-tight" href="#">Learn the strategies to create a strong online presence.</a>
                  <p className="text-neutral-600 text-lg font-medium mb-11 max-w-lg tracking-tight">Video marketing is taking the digital world by storm. Discover how to captivate your audience and boost engagement with compelling video content.</p>
                  <div className="flex flex-wrap gap-6 mb-14">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-100"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">design</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-200"></div>
                      <p className="text-neutral-600 font-medium tracking-tight">vid marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <p className="text-neutral-600 text-xl font-semibold tracking-tight">Thu 10 Oct, 5.30 AM</p><a className="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-white hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200" href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden">
        <div className="bg-neutral-900">
          <div className="py-3 border-b border-neutral-600">
            <div className="container mx-auto px-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 sm:gap-18 flex-wrap"><a className="text-white font-medium hover:text-opacity-80 tracking-tight transition duration-200" href="#">Help Center</a><a className="text-white font-medium hover:text-opacity-80 tracking-tight transition duration-200" href="#">Location</a></div>
                <div className="flex items-center gap-6 sm:gap-18 flex-wrap"><a className="text-white font-medium hover:text-opacity-80 tracking-tight transition duration-200" href="#">Contact</a>
                  <div className="flex items-center gap-6 flex-wrap"><a className="text-white font-medium hover:text-opacity-80 tracking-tight transition duration-200" href="#">Back to top</a>              <a className="relative text-white hover:text-opacity-80 transition duration-200" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="19.5" transform="rotate(90 20 20)" fill="currentColor" stroke="#E5E5E7"></circle>
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M6.41225 12.1235L9.60066 8.93506L12.7891 12.1235" stroke="#19191B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 pb-20 md:pb-40">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-medium tracking-tight mb-8">Product</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Design</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Applications</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Integrations</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">All Devices</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight focus-within:transition duration-200" href="#">Design</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">View our demo</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Chat</a></li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-medium tracking-tight mb-8">Resources</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Status</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Helpdesk</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Migra Academy</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Community</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Events</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Videos</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">New System</a></li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-medium tracking-tight mb-8">Company</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">About us</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Team</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Careers</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Customer Stories</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Blog</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Media</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Our Locations</a></li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-medium tracking-tight mb-8">Solutions</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Business</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Consultations</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Education</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Contact</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Contact sales</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">FAQ</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Live Chat</a></li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
                  <h2 className="text-white text-lg font-medium tracking-tight mb-6">Join our Newsletter now</h2>
                  <form className="mb-6" action="#">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full sm:flex-1 p-2">
                        <input className="w-full px-8 py-5 outline-none rounded-lg placeholder-neutral-600 font-medium focus:ring-4 focus:ring-neutral-100 transition duration-200" type="text" placeholder="Your Email"/>
                      </div>
                      <div className="w-full sm:w-auto p-2">
                        <button className="flex justify-center items-center text-center h-full w-full p-5 font-semibold tracking-tight text-lg bg-green-200 hover:bg-green-100 focus:bg-green-100 rounded-lg focus:ring-4 focus:ring-green-200 focus:ring-opacity-50 transition duration-200" type="submit">More</button>
                      </div>
                    </div>
                  </form>
                  <p className="text-neutral-400 text-sm font-medium max-w-sm tracking-tight">Get the ideas, tools and tips you need to grow your sound straight to your inb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-12 flex-wrap"><a href="#"><img src="images/logo-white.svg" alt=""/></a>
              <p className="text-neutral-400 font-medium tracking-tight">© Convergence. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
      </div >
    </Layout >
  );
}
