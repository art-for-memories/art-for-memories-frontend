import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import FormModal from "./models/form-model";
import MemoryForm from "./forms/MemoryForm";

export default function SubNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFormOpen, setFormOpen] = useState(false);
    const [storiesDropdownOpen, setStoriesDropdownOpen] = useState(false);

    return (<>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-black font-semibold items-center">
            <div className="hidden md:flex space-x-6 text-black font-semibold items-center">
                <div>
                    {/* Submit Button */}
                    <button onClick={() => setFormOpen(true)} className="hidden md:block bg-black text-white px-5 py-3 rounded-xl hover:opacity-80 text-sm font-semibold">
                        Submit Your Memories
                    </button>

                    <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                        <MemoryForm />
                    </FormModal>
                </div>
            </div>

            {/* Menu Links */}
            <Link href={"/about-us"} className="hover:text-gray-600 text-sm">About us</Link>
            <Link href={"/preserved-memories"} className="hover:text-gray-600 text-sm">Memories</Link>

            <div className="relative">
                <button
                    type="button"
                    className="hover:text-gray-600 text-sm focus:outline-none"
                    onClick={() => setStoriesDropdownOpen((open) => !open)}
                    onBlur={() => setTimeout(() => setStoriesDropdownOpen(false), 150)}
                    aria-haspopup="true"
                    aria-expanded={storiesDropdownOpen}
                >
                    Their Stories
                </button>
                <div className={`absolute flex-col bg-white shadow-md rounded-md w-48 transition-all duration-200 z-20 ${storiesDropdownOpen ? 'flex' : 'hidden'}`}>
                    <Link href="/stories/written" className="hover:bg-gray-100 px-4 py-2 text-sm rounded-md text-slate-800">Written Stories</Link>
                    <Link href="/stories/illustrated" className="hover:bg-gray-100 px-4 py-2 text-sm rounded-md text-slate-800">Illustrated Stories</Link>
                </div>
            </div>

            <Link href={"/one-day-in-100-days"} className="hover:text-gray-600 text-sm">One Day In 100 Days</Link>
            <Link href={"https://kwibuka.rw"} target="__blank" className="hover:text-gray-600 font-semibold text-sm">Learn More</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden border border-gray-200 rounded-full p-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
                <svg className="w-5 h-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <Menu className="w-5 h-5 text-black" />
            )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-[#F9F3EE] text-slate-700 shadow-md flex flex-col py-4 space-y-4 items-center lg:hidden">
                <Link href={"/"} className="hover:text-gray-600 text-sm">Home</Link>
                <Link href={"/about-us"} className="hover:text-gray-600 text-sm">About us</Link>
                <Link href={"/preserved-memories"} className="hover:text-gray-600 text-sm">Memories</Link>

                <div className="relative">
                    <button
                        type="button"
                        className="hover:text-gray-600 text-sm focus:outline-none"
                        onClick={() => setStoriesDropdownOpen((open) => !open)}
                        onBlur={() => setTimeout(() => setStoriesDropdownOpen(false), 150)}
                        aria-haspopup="true"
                        aria-expanded={storiesDropdownOpen}
                    >
                        Their Stories
                    </button>
                    <div className={`absolute flex-col bg-white shadow-md rounded-md w-48 transition-all duration-200 z-20 ${storiesDropdownOpen ? 'flex' : 'hidden'}`}>
                        <Link href="/stories/written" className="hover:bg-gray-100 px-4 py-2 text-sm rounded-md text-slate-800">Written Stories</Link>
                        <Link href="/stories/illustrated" className="hover:bg-gray-100 px-4 py-2 text-sm rounded-md text-slate-800">Illustrated Stories</Link>
                    </div>
                </div>

                <Link href={"/one-day-in-100-days"} className="hover:text-gray-600 text-sm">One Day In 100 Days</Link>
                <Link href={"/"} className="hover:text-gray-600 font-semibold text-sm">Learn More</Link>

                <div>
                    {/* Submit Button */}
                    <button onClick={() => setFormOpen(true)} className=" bg-black text-white px-5 py-3 rounded-xl hover:opacity-80 text-sm font-semibold">
                        Submit Your Memories
                    </button>

                    <FormModal isOpen={isFormOpen} onClose={() => setFormOpen(false)}>
                        <MemoryForm />
                    </FormModal>
                </div>
            </div>
        )}
    </>);
}