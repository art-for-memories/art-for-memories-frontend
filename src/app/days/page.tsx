"use client";

import TopHeader from "@/components/TopHeader";
import { Play } from 'lucide-react';
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
                        <a href="#" className="text-xl font-semibold text-slate-700">One Day In 100 Days</a>
                        <div className="mt-4 bg-black rounded-lg h-64 flex items-center justify-center relative">
                            <button className="bg-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform">
                                <Play className="h-10 w-10 text-black" />
                            </button>
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