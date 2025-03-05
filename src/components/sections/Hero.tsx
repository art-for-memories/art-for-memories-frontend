/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { Play } from 'lucide-react';
import Link from "next/link";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleScroll = () => {
        if (videoRef.current) {
            const rect = videoRef.current.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

            setIsPlaying(inView);

            if (inView) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative sm:h-auto md:h-screen lg:h-screen w-full bg-black text-white flex items-center justify-center px-6 md:px-12 lg:px-20">
            {/* Background Video */}
            <video
                ref={videoRef}
                src="/videos/kwibuka_hero.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                autoPlay
                muted
                loop
                playsInline
            ></video>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto sm:py-20 md:py-10 lg:py-10 my-20">
                {/* Left Content */}
                <div className="text-center lg:text-left px-4">
                    <div className="flex justify-center lg:justify-start">
                        <Image src={'/images/logo.PNG'} alt={"logo"} width={100} height={100} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mt-3">
                        Art For <span className="text-gray-300">Memories</span>
                    </h1>

                    <p className="mt-4 text-sm md:text-md text-gray-300 max-w-xl mx-auto lg:mx-0">
                        A Dedicated Platform That Preserves In Art The Damaged Images Of The Victims Of The 1994
                        Genocide Against The Tutsi And To Collect, Archive, And Illustrate Stories Of Genocide
                        Survivors.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4'>
                        <Link href={"/submit-memory"} className="flex items-center text-sm gap-3 py-3 px-6 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
                            HAVE A STORY? SUBMIT IT
                        </Link>
                        <Link href={"/submit-memory"} className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
                            <span className="text-md">↗</span>
                        </Link>
                    </div>
                </div>

                {/* Play Button */}
                <div className="hidden sm:hidden md:block lg:block relative">
                    <div className="mt-6 lg:mt-0 bg-transparent rounded-full flex items-center justify-center p-2 ring ring-gray-300">
                        <button className="bg-white rounded-full p-4 shadow-lg">
                            <Play className="h-10 w-10 text-black" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Left Vertical Slider */}
            <div className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm rotate-90">
                03 02
            </div>

            {/* Social Icons */}
            <div className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 text-white">
                <a href="#" className="hover:text-gray-400"><svg width="28" height="28">...</svg></a>
                <a href="#" className="hover:text-gray-400"><svg width="28" height="28">...</svg></a>
                <a href="#" className="hover:text-gray-400"><svg width="28" height="28">...</svg></a>
                <a href="#" className="hover:text-gray-400"><svg width="28" height="28">...</svg></a>
            </div>

            {/* Vector */}
            <div className="vector-1 absolute bottom-0 left-5 right-0 w-full">
                <Image src={'/images/vectors/vector-1.png'} alt={"vector"} height={10} width={999} />
            </div>
        </section>
    );
};

export default Hero;
