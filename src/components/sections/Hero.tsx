"use client";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'
import { Pause, Play } from 'lucide-react';
import Link from "next/link";
import Navbar from "../Navbar";

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

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.muted = false;
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.muted = true;
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    return (
        <section className="relative sm:h-auto md:h-screen lg:h-screen w-full bg-neutral-900 text-white flex items-center justify-center px-6 md:px-12 lg:px-20">
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

            <div className="absolute top-0 right-0 left-0">
                <Navbar />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-5xl mx-auto md:pr-20 md:mr-10 sm:py-20 md:py-10 lg:py-10 mt-32 mb-20">
                {/* Left Content */}
                <div className="text-center lg:text-left px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mt-3 font-boldonse">
                        Art For <span className="text-gray-300">Memories</span>
                    </h1>

                    <p className="mt-10 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 font-semibold leading-6">
                        A dedicated platform to preserve memories of the 1994 Genocide Against the Tutsi through Art.
                    </p>

                    <div className='mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                        <Link href={"/memory"} className="flex items-center text-sm gap-3 py-3 px-6 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
                            HAVE A STORY? SUBMIT IT
                        </Link>
                        <Link href={"/memory"} className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
                            <span className="text-md">↗</span>
                        </Link>
                    </div>
                </div>

                {/* Play Button */}
                <div className="hidden sm:hidden md:block lg:block relative">
                    <div className="mt-6 lg:mt-0 bg-transparent rounded-full flex items-center justify-center p-2 ring ring-gray-300">
                        <button onClick={handlePlayVideo} className="bg-white rounded-full p-4 shadow-lg">
                            {isPlaying ? <Pause className="h-10 w-10 text-black" /> : <Play className="h-10 w-10 text-black" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Left Vertical Slider */}
            <div className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm rotate-90">
                03 02
            </div>

            {/* Social Icons */}
            <div className="hidden sm:hidden md:block lg:block relative">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 text-white">
                    <a href="https://www.instagram.com/artformemories_rw?igsh=MXVxeTl0OHFndm8zdg==" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path opacity=".4" d="M14 9.3v2.95h2.63c.19 0 .33.17.29.36l-.38 1.9c-.03.14-.15.24-.29.24H14V22h-3v-7.25H9.3c-.17 0-.3-.13-.3-.3v-1.9c0-.17.13-.3.3-.3H11V9c0-1.66 1.34-3 3-3h2.7c.17 0 .3.13.3.3v2.4c0 .17-.13.3-.3.3h-2.4c-.17 0-.3.13-.3.3Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path><path d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                    <a href="https://x.com/artformemories?s=21&t=4pzHCCUqdtJlXghNpFYuIQ" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5.46 2H4.05c-.93 0-1.4 1.13-.74 1.79l5.73 5.73a4.189 4.189 0 0 0 5.93 0l5.73-5.73c.66-.66.19-1.79-.74-1.79h-1.41c-.83 0-1.63.33-2.22.92L12.75 6.5c-.41.41-1.07.41-1.48 0L7.69 2.92C7.09 2.33 6.29 2 5.46 2Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="M5.46 21.969H4.05c-.93 0-1.4-1.13-.74-1.79l5.73-5.73a4.189 4.189 0 0 1 5.93 0l5.73 5.73c.66.66.19 1.79-.74 1.79h-1.41c-.83 0-1.63-.33-2.22-.92l-3.58-3.58c-.41-.41-1.07-.41-1.48 0l-3.58 3.58c-.6.59-1.4.92-2.23.92Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/artformemories_rw?igsh=MXVxeTl0OHFndm8zdg==" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".34" d="M17.636 7h.012" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                    <a href="https://youtube.com/@artformemories?si=--2YjUjM3TRFRino" className="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path opacity=".4" d="m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </a>
                </div>
            </div>

            {/* Vector */}
            <div className="vector-1 absolute bottom-0 left-5 right-0 w-full">
                <Image src={'/images/vectors/vector-1.png'} alt={"vector"} height={10} width={999} />
            </div>
        </section>
    );
};

export default Hero;
