import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import { Menu } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center relative">
            <div className="container max-w-6xl mx-auto bg-[#FCECE1] rounded-b-[30px]">
                {/* Top Bar */}
                <div className="bg-black rounded-b-[30px] text-white text-sm py-2 flex justify-between items-center px-6">
                    <div className="flex items-center space-x-4">
                        <span>📞 +250788881111</span>
                        <span>📧 artformemories@gmail.com</span>
                    </div>
                    <div className="flex space-x-3">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaLinkedinIn className="cursor-pointer" />
                        <FaYoutube className="cursor-pointer" />
                    </div>
                </div>

                {/* Header */}
                <nav className="bg-[#FCECE1] rounded-[10px] py-3 px-6 flex justify-between items-center relative">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold flex items-center">
                            <span className="bg-black text-white px-1 py-1 rounded">
                                <div><Image src={'/images/logo.PNG'} alt={"logo"} width={40} height={40} /></div>
                            </span>
                            <span className="text-black ml-2 text-sm">Art for Memories.</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6 text-black font-medium items-center">
                        {/* Submit Button */}
                        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-md hover:opacity-80 text-sm">
                            Submit Your Memories
                        </button>

                        {/* Menu Links */}
                        <a href="#" className="hover:text-gray-600 text-sm">Home</a>
                        <a href="#" className="hover:text-gray-600 text-sm">Memories</a>
                        <a href="#" className="hover:text-gray-600 text-sm">Their Stories</a>
                        <a href="#" className="hover:text-gray-600 text-sm">One Day In 100 Days</a>
                        <a href="#" className="hover:text-gray-600 font-semibold text-sm">Learn More</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="border border-gray-200 rounded-full p-3" onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="w-5 h-5 text-black" />
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="absolute top-16 right-0 w-48 bg-white shadow-md rounded-lg p-4 flex flex-col space-y-2 md:hidden">
                            <span className="hover:text-gray-600 cursor-pointer">Home</span>
                            <span className="hover:text-gray-600 cursor-pointer">Memories</span>
                            <span className="hover:text-gray-600 cursor-pointer">Their Stories</span>
                            <span className="hover:text-gray-600 cursor-pointer">One Day In 100 Days</span>
                            <span className="hover:text-gray-600 cursor-pointer">Learn More</span>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
