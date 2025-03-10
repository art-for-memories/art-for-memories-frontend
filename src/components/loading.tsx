import Image from 'next/image';
import React from 'react';

function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="text-2xl font-bold flex flex-col items-center sm:flex-row">
                <span className="text-black px-2 py-2 rounded-full">
                    <Image src={'/images/logo.PNG'} alt={"logo"} width={80} height={80} />
                </span>
                <span className="text-white mt-4 sm:mt-0 sm:ml-4 text-3xl text-center sm:text-left">Art for Memories.</span>
            </div>
        </div>
    );
}

export default Loading;