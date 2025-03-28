"use client";

import Image from 'next/image';
import SubNav from './SubNav';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center relative bg-neutral-900">
            <div className="bg-[#F9F3EE] z-20 rounded-[10px] my-5 container max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <div className="text-2xl font-bold flex items-center">
                        <span className="bg-transparent text-white rounded">
                            <Image src={'/images/ART.PNG'} alt={"logo"} width={90} height={50}  />
                        </span>
                        {/* <span className="text-black ml-2 text-[12px] font-bold font-boldonse">Art for Memories.</span> */}
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
