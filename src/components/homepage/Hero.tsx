/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

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
        <section className="relative h-screen w-full bg-black text-white flex items-center justify-start pr-20">
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
            <div className="relative z-10 flex flex-col items-start max-w-4xl p-8 pl-28">
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
                    <button className="mt-6 flex items-center text-[12px] gap-3 py-[20px] px-[25px] bg-white text-black rounded-[100px] font-semibold hover:bg-gray-300 transition">
                        HAVE A STORY? SUBMIT IT
                    </button>

                    <button className="mt-6 flex items-center ml-3 gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
                        <span className="text-md">↗</span>
                    </button>
                </div>
            </div>

            {/* Left Vertical Slider */}
            <motion.div
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm rotate-90"
                initial={{ y: -20 }}
                animate={{ y: 20 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
            >
                03 02
            </motion.div>

            {/* Social Icons */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 text-white">
                <a href="#" className="hover:text-gray-400">🔗</a>
                <a href="#" className="hover:text-gray-400">🐦</a>
                <a href="#" className="hover:text-gray-400">📷</a>
                <a href="#" className="hover:text-gray-400">🎥</a>
            </div>

            {/* Vector */}
            <div className="vector-1 absolute z-50 bottom-32 right-0 left-5 h-[10px] w-full"> 
                <Image src={'/images/vectors/vector-1.png'} alt={"vector"} height={10} width={999} />
            </div>
        </section>
    );
};

export default Hero;
