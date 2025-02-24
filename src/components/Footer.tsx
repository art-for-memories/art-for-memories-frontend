import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-8">
        
        {/* Location */}
        <div className="flex flex-col items-center md:items-start">
          <FaLocationDot className="text-lg mb-2" />
          <p className="text-sm">TUZAYISHYIRA HO</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <MdPhone className="text-lg mb-2" />
          <p className="text-sm">+25078........</p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <MdEmail className="text-lg mb-2" />
          <p className="text-sm">info@gmail.com</p>
        </div>
      </div>

      {/* Footer Links and Newsletter */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mt-8 gap-6">
        
        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm mb-2">Follow on</p>
          <div className="flex gap-3">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
        
        {/* Who We Are */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Who We Are</h3>
          <ul className="text-sm space-y-2">
            <li>➤ Art for Memories About</li>
            <li>➤ Contact Us</li>
            <li>➤ Blog & News</li>
            <li>➤ FAQ’s</li>
            <li>➤ Login / Register</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-sm font-semibold mb-3">Subscribe Newsletter</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="bg-white text-black px-4 py-2 rounded-full w-60"
            />
            <button className="absolute right-2 top-2 bg-black text-white p-2 rounded-full">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright & Policies */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm mt-8 border-t border-gray-700 pt-4">
        <p>© All Copyright 2025 by ART FOR MEMORIES</p>
        <div className="flex gap-4">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
