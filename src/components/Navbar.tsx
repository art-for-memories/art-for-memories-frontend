"use client";
import Image from 'next/image';
import SubNav from './SubNav';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center relative bg-black">
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

                {/* SubNav Section */}
                <div className="">
                    <SubNav />
                </div>
            </div>

            <div className="bg-[#FFFFFF33] rounded-[10px] absolute mx-auto max-w-[1110px] right-0 left-0 p-10 mt-4"></div>
        </nav>
    );
}
