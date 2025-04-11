"use client";

import VideosList from "@/components/lists/VideosList";
import Layout from "@/components/Layout";
import PageHeader from "@/components/headers/page-header";

export default function Days() {
    const videos = [
        {
            url: '/videos/UMULISA.mp4',
        },
        {
            url: '/videos/ANDRE.mp4',
        },
        {
            url: '/videos/YANKURIJE.mp4',
        },
        {
            url: '/videos/KAYITESI.mp4',
        },
        {
            url: '/videos/INGABO.mp4',
        }
    ];

    return (<>
        <Layout>
            <PageHeader
                title='One Day In 100 Days'
                description='A story of resilience and survival, capturing the essence of human strength and memory preservation.'
                sup_title='Memories Reimagined'
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
                        <VideosList title="Shared Videos" data={videos} />
                    </div>
                </div>
            </section>
        </Layout>
    </>);
}