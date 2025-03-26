import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function SubNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (<>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-semibold items-center">
            {/* Menu Links */}
            <Link href={"/"} className="hover:text-gray-600 text-sm">Home</Link>
            <Link href={"/preserved-memories"} className="hover:text-gray-600 text-sm">Memories</Link>
            <Link href={"/stories"} className="hover:text-gray-600 text-sm">Their Stories</Link>
            <Link href={"/one-day-in-100-days"} className="hover:text-gray-600 text-sm">One Day In 100 Days</Link>
            <Link href={"/about-us"} className="hover:text-gray-600 text-sm">About us</Link>
            <Link href={"/contact-us"} className="hover:text-gray-600 text-sm">Contact us</Link>
            <Link href={"https://kwibuka.rw"} target="__blank" className="hover:text-gray-600 font-semibold text-sm">Learn More</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden border border-gray-200 rounded-full p-3" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-5 h-5 text-black" />
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-[#F9F3EE] text-slate-700 shadow-md flex flex-col py-4 space-y-4 items-center md:hidden">
                <Link href={"/"} className="hover:text-gray-600 text-sm">Home</Link>
                <Link href={"/preserved-memories"} className="hover:text-gray-600 text-sm">Memories</Link>
                <Link href={"/stories"} className="hover:text-gray-600 text-sm">Their Stories</Link>
                <Link href={"/one-day-in-100-days"} className="hover:text-gray-600 text-sm">One Day In 100 Days</Link>
                <Link href={"/"} className="hover:text-gray-600 font-semibold text-sm">Learn More</Link>
            </div>
        )}
    </>);
}