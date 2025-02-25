"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center relative">
            <div className="bg-[#F9F3EE] z-20 rounded-[10px] my-5 container max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold flex items-center">
                        <span className="bg-black text-white px-1 py-1 rounded">
                            <div><Image src={'/images/logo.PNG'} alt={"logo"} width={40} height={40} /></div>
                        </span>
                        <span className="text-black ml-2 text-sm">Art for Memories.</span>
                    </div>
                </div>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-[#F9F3EE] shadow-md flex flex-col py-4 space-y-4 items-center md:hidden">
                        <a href="#" className="text-black hover:text-gray-600">Home</a>
                        <a href="#" className="text-black hover:text-gray-600">Memories</a>
                        <a href="#" className="text-black hover:text-gray-600">Their Stories</a>
                        <a href="#" className="text-black hover:text-gray-600">One Day In 100 Days</a>
                        <a href="#" className="text-black hover:text-gray-600 font-semibold">Learn More</a>
                        <button className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80">
                            Submit Your Memories
                        </button>
                    </div>
                )}
            </div>

            <div className="bg-[#FFFFFF33] rounded-[10px] absolute mx-auto max-w-[1110px] right-0 left-0 p-10 mt-4"></div>
        </nav>
    );
}
