"use client";

import VideosList from "@/components/lists/VideosList";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import FetchSpinner from "@/components/spinners/fetch-spinner";
import PageHeader from "@/components/headers/page-header";

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
            <PageHeader
                title='One Day In 100 Days'
                description='A story of resilience and survival, capturing the essence of human strength and memory preservation.'
                sup_title='Memories Reimagined'
                // backgroundImage='https://www.passage.law/wp-content/uploads/2023/11/the-congo-refugee-crisis-that-stemmed-from-the-rwandan-genocide-950x550.webp'
            />

            <section className="px-6 py-16 md:px-20 lg:px-32 bg-white">
                <div className="mx-auto space-y-8 bg-white max-w-6xl">
                    <div>
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
                        <VideosList title="Shared Videos" data={videos} />
                    </div>
                </div>
            </section>
        </Layout>
    </>);
}