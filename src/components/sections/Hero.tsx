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
        <section className="relative h-[83vh] w-full bg-black text-white flex items-center justify-center pr-20">
            {/* Background Video */}
            <video
                ref={videoRef}
                src="/videos/kwibuka_hero.mp4"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
                muted
                loop
                playsInline
            ></video>

            {/* Hero Content (Aligned to Right) */}
            <div className="relative z-10 flex items-center justify-between w-full pl-10 mx-28">
                <div>
                    <div><Image src={'/images/logo.PNG'} alt={"logo"} width={100} height={100} /></div>

                    <h1 className="text-5xl font-bold mt-3">
                        Art For <span className="text-gray-300">Memories</span>
                    </h1>

                    <p className="mt-4 text-md text-gray-300 max-w-xl">
                        A Dedicated Platform That Preserves In Art The Damaged Images Of The Victims Of The 1994
                        Genocide Against The Tutsi And To Collect, Archive, And Illustrate Stories Of Genocide
                        Survivors.
                    </p>

                    <div className='flex mt-3'>
                        <Link href={"/submit-memory"} className="mt-6 flex items-center text-sm gap-3 py-[20px] px-[25px] bg-white text-black rounded-[100px] font-semibold hover:bg-gray-300 transition">
                            HAVE A STORY? SUBMIT IT
                        </Link>

                        <Link href={"/submit-memory"} className="mt-6 flex items-center ml-3 gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
                            <span className="text-md">↗</span>
                        </Link>
                    </div>
                </div>

                <div className="mt-4 bg-transparent rounded-full flex items-center justify-center relative p-2 ring ring-gray-300">
                    <button className="bg-white rounded-full p-4 shadow-lg">
                        <Play className="h-10 w-10 text-black" />
                    </button>
                </div>
            </div>

            {/* Left Vertical Slider */}
            <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm rotate-90">
                03 02
            </div>

            {/* Social Icons */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 text-white">
                <a href="#" className="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M14 9.3v2.95h2.63c.19 0 .33.17.29.36l-.38 1.9c-.03.14-.15.24-.29.24H14V22h-3v-7.25H9.3c-.17 0-.3-.13-.3-.3v-1.9c0-.17.13-.3.3-.3H11V9c0-1.66 1.34-3 3-3h2.7c.17 0 .3.13.3.3v2.4c0 .17-.13.3-.3.3h-2.4c-.17 0-.3.13-.3.3Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.75 6.5c-.41.41-1.07.41-1.48 0L7.69 2.92C7.09 2.33 6.29 2 5.46 2Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M17.636 7h.012" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
                <a href="#" className="hover:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
            </div>

            {/* Vector */}
            <div className="vector-1 absolute z-50 bottom-32 right-0 left-5 h-[10px] w-full"> 
                <Image src={'/images/vectors/vector-1.png'} alt={"vector"} height={10} width={999} />
            </div>
        </section>
    );
};

export default Hero;
