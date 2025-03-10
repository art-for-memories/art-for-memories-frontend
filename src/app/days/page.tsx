"use client";
import TopHeader from "@/components/TopHeader";
import { Play } from 'lucide-react';
import VideosList from "@/components/lists/VideosList";

export default function Days() {
    return (<>
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
                    <VideosList
                        title="Other Videos"
                        data={[
                            { id: 1, image: '/images/1.jpg', type: 'Story', date: '12th June 2021' },
                            { id: 2, image: '/images/2.jpg', type: 'Story', date: '15th July 2021' },
                            { id: 3, image: '/images/3.jpg', type: 'Story', date: '20th Aug 2021' },
                            { id: 4, image: '/images/4.jpg', type: 'Story', date: '10th Sep 2021' },
                        ]}
                    />
                </div>
            </div>
        </section>
    </>);
}