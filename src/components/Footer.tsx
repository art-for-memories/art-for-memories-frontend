import Image from "next/image";
import Download from "./sections/download";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Download />

      <section className="overflow-hidden">
        <div className="bg-neutral-900">
          <div className="py-3 border-b border-neutral-600">
            <div className="container mx-auto px-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 sm:gap-18 flex-wrap">
                  <a className="text-white hover:text-opacity-80 tracking-tight transition duration-200 font-semibold" href="#">Help Center</a>
                  <a className="text-white hover:text-opacity-80 tracking-tight transition duration-200 font-semibold" href="#">Location</a>
                </div>
                <div className="flex items-center gap-6 sm:gap-18 flex-wrap font-semibold">
                  <Link className="text-white hover:text-opacity-80 tracking-tight transition duration-200 font-semibold" href="/contact-us">Contact</Link>
                  <div className="flex items-center gap-6 flex-wrap">
                    <a className="text-white hover:text-opacity-80 tracking-tight transition duration-200 font-semibold" href="#">Back to top</a>
                    <a className="relative text-white hover:text-opacity-80 transition duration-200" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <circle cx="20" cy="20" r="19.5" transform="rotate(90 20 20)" fill="currentColor" stroke="#E5E5E7"></circle>
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M6.41225 12.1235L9.60066 8.93506L12.7891 12.1235" stroke="#19191B" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 md:pb-20">
            <div className="mx-auto px-4">
              <div className="flex flex-wrap -mx-4">

                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <div className="font-bold">
                    <div className="bg-white text-white px-2 py-2 rounded-xl">
                      <div><Image src={'/images/ART.PNG'} alt={"logo"} width={200} height={30} /></div>
                    </div>
                    <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-semibold tracking-tight mb-8">Who we are</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">About us</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Contact us</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">+25078........</a></li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-semibold tracking-tight mb-8">Resources</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Memories</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Stories</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">One Day in 100 Days</a></li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-semibold tracking-tight mb-8">Company</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">About us</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Team</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Careers</a></li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
                  <h2 className="text-white text-lg font-semibold tracking-tight mb-6">Join our Newsletter now</h2>

                  <form className="mb-6" action="#">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full sm:flex-1 p-2">
                        <input className="w-full px-8 py-3 outline-none rounded-lg placeholder-neutral-600 font-medium transition duration-200" type="text" placeholder="Your Email" />
                      </div>
                      <div className="w-full sm:w-auto p-2">
                        <button className="flex justify-center items-center text-center h-full w-full px-5 py-2 font-semibold tracking-tight text-lg bg-[#e4888a] hover:bg-green-100 rounded-lg transition duration-200" type="submit">More</button>
                      </div>
                    </div>
                  </form>

                  <p className="text-neutral-400 text-sm font-semibold max-w-sm tracking-tight">Get the ideas, tools and tips you need to grow your sound straight to your inb</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 py-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-12 flex-wrap text-center">
              <p className="text-neutral-400 font-semibold tracking-tight text-center">© Convergence. All rights reserved.</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
