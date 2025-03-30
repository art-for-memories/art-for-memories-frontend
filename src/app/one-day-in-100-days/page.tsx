"use client";

import TopHeader from "@/components/TopHeader";
import VideosList from "@/components/lists/VideosList";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import FetchSpinner from "@/components/spinners/fetch-spinner";

export default function Days() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const getVideos = async () => {
        setLoading(true);

        const response = await fetch('/api/videos');
        const data = await response.json();

        setVideos(data);
        setLoading(false);
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (<>
        <Layout>
            <TopHeader title="One day in 100 days " path="one day in 100 Days" />

            <section className="px-6 py-16 md:px-20 lg:px-32 bg-white">
                <div className="mx-auto space-y-8 bg-white max-w-6xl">
                    {/* Video Section */}
                    <div>
                        <div className="mb-8">
                            <a href="#" className="font-semibold text-2xl md:text-4xl font-heading text-slate-700">14th April 1994</a>
                        </div>
                        <div className="mt-4 bg-black rounded-lg h-92 flex items-center justify-center relative">
                            <video
                                className="rounded-lg w-full h-full object-cover"
                                controls
                                src="/videos/kwibuka_hero.mp4"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Other Videos Section */}
                    <div className="mt-10">
                        {loading && <FetchSpinner />}
                        <VideosList title="Other Videos" data={videos} />
                    </div>
                </div>
            </section>
        </Layout>
    </>);
}