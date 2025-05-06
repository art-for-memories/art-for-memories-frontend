"use client";

import VideosList from "@/components/lists/VideosList";
import Layout from "@/components/Layout";
import PageHeader from "@/components/headers/page-header";
import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Pause } from 'lucide-react';


export default function Days() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const videos = [
        {
            image: '/stories/thumbnails/umulisa.png',
            url: '/stories/UMULISA.mp4',
        },
        {
            image: '/stories/thumbnails/andre.png',
            url: '/stories/ANDRE.mp4',
        },
        {
            image: '/stories/thumbnails/yankurije.png',
            url: '/stories/YANKURIJE.mp4',
        },
        {
            image: '/stories/thumbnails/kayitesi.png',
            url: '/stories/KAYITESI.mp4',
        },
        {
            image: '/stories/thumbnails/ingabo.png',
            url: '/stories/INGABO.mp4',
        }
    ];

    return (<>
        <Layout>
            <PageHeader
                title='One Day In 100 Days'
                description='Which Day Stands Out in Your Memory?'
                sup_title=''
            />

            <section className="px-6 py-16 md:px-20 lg:px-32 bg-white">
                <div className="mx-auto space-y-8 bg-white max-w-6xl">
                    <div>
                        <div className="mt-4 bg-black rounded-lg h-92 flex items-center justify-center relative group">
                            <video
                                className={`rounded-lg w-full h-full object-cover ${!isPlaying ? 'opacity-0' : ''}`}
                                ref={videoRef}
                            >
                                <source src={videos[0].url} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {!isPlaying && (
                                <div className='w-full h-full rounded-lg absolute fade-in'>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={videos[0].image ?? '/images/thumbs.PNG'}
                                        alt="Video thumbnail"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            )}

                            <button
                                onClick={handlePlayPause}
                                className="bg-white rounded-full p-4 shadow-lg absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                            >
                                {isPlaying ? <Pause className="h-10 w-10 text-black" /> : <Play className="h-10 w-10 text-black" />}
                            </button>
                        </div>
                    </div>

                    {/* Other Videos Section */}
                    <div className="mt-10">
                        <VideosList title="Shared Videos" data={videos} />
                    </div>
                </div>
            </section>
        </Layout>
    </>);
}