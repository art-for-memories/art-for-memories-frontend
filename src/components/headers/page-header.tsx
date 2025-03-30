import Image from 'next/image';
import React from 'react'
import BackgroundBlurImage from '../design/background-blur-image';
import Navbar from '../Navbar';

interface PageHeaderProps {
    sup_title: string;
    title: string;
    description: string;
    backgroundImage?: string;
}

function PageHeader({ sup_title, title, description, backgroundImage }: PageHeaderProps) {
    return (<>
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-700 relative">
            <div className="absolute inset-0 z-10 bg-gray-900/80"></div>

            {backgroundImage && <div className="absolute inset-0 z-0">
                <Image src={backgroundImage} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300" />
            </div>}

            <div className={`z-10 absolute ${backgroundImage ? 'left-0' : 'left-1/2'} top-0 aspect-[1204/394] w-full max-w-[1204px] -translate-x-1/2`}>
                <BackgroundBlurImage />
            </div>

            <div className="relative z-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl bg-transparent pt-5">
                <Navbar />
            </div>

            <div className="relative z-[10] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <p className="inline-block font-semibold px-3 py-px text-xs tracking-wider text-gray-300 uppercase rounded-full bg-teal-accent-400">
                        {sup_title}
                    </p>
                    <h2 style={{ lineHeight: '3.5rem' }} className="max-w-lg font-boldonse my-6 text-3xl text-white sm:text-4xl md:mx-auto">
                        {title}
                    </h2>
                    <p className="text-sm text-gray-300 md:text-lg font-semibold">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </>)
}

export default PageHeader