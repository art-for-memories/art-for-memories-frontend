import { FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-20 lg:px-32 relative">
      
      {/* Social Media Link */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 pb-8">
        <div className="flex items-center md:items-start sm:flex-row md:flex-col lg:flex-col">
          <div><FaLocationDot className="text-lg mb-2" /></div>
          <div className="ml-2 sm:ml-2 md:ml-0 lg:ml-0"><p className="text-sm">TUZAYISHYIRA HO</p></div>
        </div>
        <div className="flex items-center md:items-start sm:flex-row md:flex-col lg:flex-col">
          <div><MdPhone className="text-lg mb-2" /></div>
          <div className="ml-2 sm:ml-2 md:ml-0 lg:ml-0"><p className="text-sm">+25078........</p></div>
        </div>
        <div className="flex items-center md:items-start sm:flex-row md:flex-col lg:flex-col">
          <div><MdEmail className="text-lg mb-2" /></div>
          <div className="ml-2 sm:ml-2 md:ml-0 lg:ml-0"><p className="text-sm">info@gmail.com</p></div>
        </div>
      </div>

      {/* Footer Links and Newsletter */}
      <div className="flex flex-col justify-between sm:flex-col md:flex-row lg:flex-row md:items-center gap-6">
        {/* Social Media */}
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold mb-3 sm:text-center md:text-left">Follow on</h3>
          <div className="flex gap-3">
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M14 9.3v2.95h2.63c.19 0 .33.17.29.36l-.38 1.9c-.03.14-.15.24-.29.24H14V22h-3v-7.25H9.3c-.17 0-.3-.13-.3-.3v-1.9c0-.17.13-.3.3-.3H11V9c0-1.66 1.34-3 3-3h2.7c.17 0 .3.13.3.3v2.4c0 .17-.13.3-.3.3h-2.4c-.17 0-.3.13-.3.3Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.75 6.5c-.41.41-1.07.41-1.48 0L7.69 2.92C7.09 2.33 6.29 2 5.46 2Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M17.636 7h.012" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
          </div>
        </div>

        {/* Who We Are */}
        <div>
          <h3 className="text-sm font-semibold mb-3 sm:text-center md:text-left">Who We Are</h3>
          
          <ul className="text-sm space-y-2">
            <li className="flex">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
              <span className="ml-2">Art for Memories About</span>
            </li>
            <li className="flex">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
              <span className="ml-2">Contact Us</span>
            </li>
            <li className="flex">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
              <span className="ml-2">Blog & News</span>
            </li>
            <li className="flex">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
              <span className="ml-2">FAQ’s</span>
            </li>
            <li className="flex">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path></svg></span>
              <span className="ml-2">Login / Register</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-sm font-semibold mb-3">Subscribe Newsletter</h3>
          <div className="relative bg-white text-black pl-4 pr-2 py-2 rounded-full flex items-center justify-between">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-60 text-sm bg-transparent outline-none"
            />
            <button className="bg-black text-white p-2 rounded-full ml-2">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <p>© All Copyright 2025 by ART FOR MEMORIES</p>
        <div className="flex gap-4 mt-5">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="vector-1 absolute top-0 left-0">
        <Image src={'/images/vectors/vector-6.png'} alt={"vector"} width={100} height={100} />
      </div>
      <div className="vector-1 absolute top-0 left-10">
        <Image src={'/images/vectors/vector-6.png'} alt={"vector"} width={100} height={100} />
      </div>
    </footer>
  );
}
