// import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";
// import { MdEmail, MdPhone } from "react-icons/md";

import Download from "./sections/download";

export default function Footer() {
  return (
    // <footer className="bg-black text-white">
    //   <div className="py-14 bg-white rounded-b-[50px]"></div>

    //   <div className="px-6 py-10 md:px-20 lg:px-32 relative">
    //     {/* Social Media Link */}
    //     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pb-8">
    //       <div className="flex items-center md:items-start sm:flex-row md:flex-col lg:flex-col">
    //         <div><FaLocationDot className="text-lg mb-2" /></div>
    //         <div className="ml-2 sm:ml-2 md:ml-0 lg:ml-0"><p className="text-sm">TUZAYISHYIRA HO</p></div>
    //       </div>
    //       <div className="flex items-center md:items-start sm:flex-row md:flex-col lg:flex-col">
    //         <div><MdPhone className="text-lg mb-2" /></div>
    //         <div className="ml-2 sm:ml-2 md:ml-0 lg:ml-0"><p className="text-sm">+25078........</p></div>
    //       </div>
    //       <div className="flex items-center md:items-start sm:flex-row md:flex-col lg:flex-col">
    //         <div><MdEmail className="text-lg mb-2" /></div>
    //         <div className="ml-2 sm:ml-2 md:ml-0 lg:ml-0"><p className="text-sm">info@gmail.com</p></div>
    //       </div>
    //     </div>

    //     {/* Footer Links and Newsletter */}
    //     <div className="flex flex-col justify-between sm:flex-col md:flex-row lg:flex-row md:items-center gap-6">
    //       {/* Social Media */}
    //       <div className="flex flex-col">
    //         <h3 className="text-sm font-semibold mb-3 sm:text-center md:text-left">Follow on</h3>
    //         <div className="flex gap-3">
    //           <a href="#" className="hover:text-gray-400">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M14 9.3v2.95h2.63c.19 0 .33.17.29.36l-.38 1.9c-.03.14-.15.24-.29.24H14V22h-3v-7.25H9.3c-.17 0-.3-.13-.3-.3v-1.9c0-.17.13-.3.3-.3H11V9c0-1.66 1.34-3 3-3h2.7c.17 0 .3.13.3.3v2.4c0 .17-.13.3-.3.3h-2.4c-.17 0-.3.13-.3.3Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    //           </a>
    //           <a href="#" className="hover:text-gray-400">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.75 6.5c-.41.41-1.07.41-1.48 0L7.69 2.92C7.09 2.33 6.29 2 5.46 2Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    //           </a>
    //           <a href="#" className="hover:text-gray-400">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M17.636 7h.012" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    //           </a>
    //           <a href="#" className="hover:text-gray-400">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    //           </a>
    //         </div>
    //       </div>

    //       {/* Who We Are */}
    //       <div>
    //         <h3 className="text-sm font-semibold mb-3 sm:text-center md:text-left">Who We Are</h3>

    //         <ul className="text-sm space-y-2">
    //           <li className="flex">
    //             <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
    //             <span className="ml-2">Art for Memories About</span>
    //           </li>
    //           <li className="flex">
    //             <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
    //             <span className="ml-2">Contact Us</span>
    //           </li>
    //           <li className="flex">
    //             <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
    //             <span className="ml-2">Blog & News</span>
    //           </li>
    //           <li className="flex">
    //             <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
    //             <span className="ml-2">FAQ’s</span>
    //           </li>
    //           <li className="flex">
    //             <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
    //             <span className="ml-2">Login / Register</span>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Newsletter */}
    //       <div className="flex flex-col md:items-center">
    //         <h3 className="text-sm font-semibold mb-3">Subscribe Newsletter</h3>
    //         <div className="relative bg-white text-black pl-4 pr-2 py-2 rounded-full flex items-center justify-between">
    //           <input
    //             type="email"
    //             placeholder="Enter Email Address"
    //             className="w-60 text-sm bg-transparent outline-none"
    //           />
    //           <button className="bg-black text-white p-2 rounded-full ml-2">
    //             <FaPaperPlane />
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Copyright & Policies */}
    //     <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm mt-8 border-t border-gray-700 pt-4">
    //       <p>© All Copyright 2025 by ART FOR MEMORIES</p>
    //       <div className="flex gap-4 mt-5">
    //         <p>Terms & Conditions</p>
    //         <p>Privacy Policy</p>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

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
                  <a className="text-white hover:text-opacity-80 tracking-tight transition duration-200 font-semibold" href="#">Contact</a>
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
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-semibold tracking-tight mb-8">Product</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Design</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Applications</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Integrations</a></li>
                  </ul>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-semibold tracking-tight mb-8">Resources</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Status</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Helpdesk</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Migra Academy</a></li>
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
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 p-4">
                  <h2 className="text-white text-xl font-semibold tracking-tight mb-8">Solutions</h2>
                  <ul className="flex flex-col gap-4">
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Business</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Consultations</a></li>
                    <li><a className="text-neutral-300 font-medium hover:text-neutral-400 tracking-tight transition duration-200" href="#">Education</a></li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
                  <h2 className="text-white text-lg font-semibold tracking-tight mb-6">Join our Newsletter now</h2>

                  <form className="mb-6" action="#">
                    <div className="flex flex-wrap -m-2">
                      <div className="w-full sm:flex-1 p-2">
                        <input className="w-full px-8 py-5 outline-none rounded-lg placeholder-neutral-600 font-medium focus:ring-4 focus:ring-neutral-100 transition duration-200" type="text" placeholder="Your Email" />
                      </div>
                      <div className="w-full sm:w-auto p-2">
                        <button className="flex justify-center items-center text-center h-full w-full p-5 font-semibold tracking-tight text-lg bg-[#e4888a] hover:bg-green-100 focus:bg-green-100 rounded-lg focus:ring-4 focus:ring-green-200 focus:ring-opacity-50 transition duration-200" type="submit">More</button>
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
